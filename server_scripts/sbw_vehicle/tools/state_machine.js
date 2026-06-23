// ============================================================
// SBW 载具 - 状态机核心
//
// 载具生命周期中总共经历 8 个状态，通过严格转移规则管理。
//
// 状态列表：
//   UNINITIALIZED  — 未初始化（首次创建/重置后）
//   IDLE           — 空闲（等待部署条件满足）
//   WAITING_CHUNK  — 等待区块加载
//   CHUNK_LOADED   — 区块已加载（可部署）
//   DEPLOYED       — 载具已部署（正常存活）
//   OVER_CAPACITY  — 载具超量（超出 maxCount）
//   UNDER_CAPACITY — 载具不足（存活数 < maxCount）
//   TIMING         — 计时中（重生倒计时）
//
// 转移规则（state_transitions 中定义了每个状态允许的下一个状态）：
//
//   UNINITIALIZED → IDLE                    初始化完成
//   IDLE → WAITING_CHUNK                    区块未加载
//   IDLE → CHUNK_LOADED                     区块已加载
//   WAITING_CHUNK → CHUNK_LOADED            区块加载完成
//   WAITING_CHUNK → DEPLOYED                区块加载 + 直接部署
//   WAITING_CHUNK → IDLE                    系统复位/跳过
//   CHUNK_LOADED → DEPLOYED                 执行部署
//   CHUNK_LOADED → OVER_CAPACITY            区块就绪但超量
//   CHUNK_LOADED → IDLE                     部署跳过/取消
//   DEPLOYED → TIMING                       载具被摧毁
//   DEPLOYED → OVER_CAPACITY                发现超出数量限制
//   DEPLOYED → IDLE                         手动清除/重置
//   OVER_CAPACITY → TIMING                     超量载具被摧毁
//   OVER_CAPACITY → DEPLOYED                超量已清除，回到正常
//   OVER_CAPACITY → CHUNK_LOADED            超量已清除，区块就绪
//   OVER_CAPACITY → IDLE                    超量手动处理
//   UNDER_CAPACITY → IDLE                   数量不足，重新部署
//   UNDER_CAPACITY → WAITING_CHUNK          数量不足+区块未加载
//   UNDER_CAPACITY → TIMING                 不足中启动补员倒计时
//   TIMING → OVER_CAPACITY                  计时完成但已达上限
//   TIMING → CHUNK_LOADED                   计时完成且区块已加载
//   TIMING → WAITING_CHUNK                  计时完成但区块未加载
//   TIMING → IDLE                           计时完成（备选）
//   任意状态 → UNINITIALIZED                系统重置
//
// 使用方式：
//   const state = VEHICLE_STATE.IDLE
//   if (isDeployed(state)) { ... }
//   transitionState(server, vehicleId, VEHICLE_STATE.TIMING)
// ============================================================

// ========== 状态枚举（字符串常量，持久化友好）==========

const VEHICLE_STATE = {
  /** 未初始化 — 首次创建条目或系统重置后的初始态 */
  UNINITIALIZED: 'uninitialized',
  /** 空闲 — 初始化完毕，等待部署条件满足 */
  IDLE: 'idle',
  /** 等待区块加载 — 区块未加载，等待玩家靠近 */
  WAITING_CHUNK: 'waiting_chunk',
  /** 区块已加载 — 区块已就绪，可以执行部署 */
  CHUNK_LOADED: 'chunk_loaded',
  /** 载具已部署 — 实体已生成并存活 */
  DEPLOYED: 'deployed',
  /** 载具超量 — 当前存活数超过 maxCount */
  OVER_CAPACITY: 'over_capacity',
  /** 载具不足 — 当前存活数未达 maxCount */
  UNDER_CAPACITY: 'under_capacity',
  /** 计时中 — 重生倒计时进行中 */
  TIMING: 'timing'
}

// ========== 状态转移白名单 ==========

/** 状态转移表（IIFE 构建，兼容 Rhino 不支持计算属性名） */
const VEHICLE_STATE_TRANSITIONS = (function() {
  var t = {}
  t[VEHICLE_STATE.UNINITIALIZED]  = [VEHICLE_STATE.IDLE]
  t[VEHICLE_STATE.IDLE]           = [VEHICLE_STATE.WAITING_CHUNK, VEHICLE_STATE.CHUNK_LOADED]
  t[VEHICLE_STATE.WAITING_CHUNK]  = [VEHICLE_STATE.CHUNK_LOADED, VEHICLE_STATE.DEPLOYED, VEHICLE_STATE.IDLE]
  t[VEHICLE_STATE.CHUNK_LOADED]   = [VEHICLE_STATE.DEPLOYED, VEHICLE_STATE.OVER_CAPACITY, VEHICLE_STATE.IDLE]
  t[VEHICLE_STATE.DEPLOYED]       = [VEHICLE_STATE.TIMING, VEHICLE_STATE.OVER_CAPACITY, VEHICLE_STATE.IDLE]
  t[VEHICLE_STATE.OVER_CAPACITY]  = [VEHICLE_STATE.TIMING, VEHICLE_STATE.DEPLOYED, VEHICLE_STATE.CHUNK_LOADED, VEHICLE_STATE.IDLE]
  t[VEHICLE_STATE.UNDER_CAPACITY] = [VEHICLE_STATE.IDLE, VEHICLE_STATE.WAITING_CHUNK, VEHICLE_STATE.TIMING]
  t[VEHICLE_STATE.TIMING]         = [VEHICLE_STATE.OVER_CAPACITY, VEHICLE_STATE.CHUNK_LOADED, VEHICLE_STATE.WAITING_CHUNK, VEHICLE_STATE.IDLE]
  return t
})()

/** 所有状态列表 */
const VEHICLE_STATE_LIST = [
  VEHICLE_STATE.UNINITIALIZED,
  VEHICLE_STATE.IDLE,
  VEHICLE_STATE.WAITING_CHUNK,
  VEHICLE_STATE.CHUNK_LOADED,
  VEHICLE_STATE.DEPLOYED,
  VEHICLE_STATE.OVER_CAPACITY,
  VEHICLE_STATE.UNDER_CAPACITY,
  VEHICLE_STATE.TIMING
]

// ========== 状态判断辅助函数 ==========

/** 是否已部署（实体存活状态） */
function isDeployed(state) {
  return state === VEHICLE_STATE.DEPLOYED
}

/** 是否在补员流程中（计时/等待区块/空闲/不足） */
function isReplenishing(state) {
  return state === VEHICLE_STATE.TIMING
    || state === VEHICLE_STATE.WAITING_CHUNK
    || state === VEHICLE_STATE.UNDER_CAPACITY
}

/** 是否可部署（区块已加载，可以生成实体） */
function isReadyToDeploy(state) {
  return state === VEHICLE_STATE.CHUNK_LOADED
}

/** 是否处于活跃状态（已部署或正在处理中） */
function isActive(state) {
  return state !== VEHICLE_STATE.UNINITIALIZED
    && state !== VEHICLE_STATE.IDLE
}

/** 是否需要补员介入（需要重生或补充） */
function needsReplenish(state) {
  return state === VEHICLE_STATE.UNDER_CAPACITY
    || state === VEHICLE_STATE.TIMING
    || state === VEHICLE_STATE.WAITING_CHUNK
}

/** 是否属于异常/警告状态 */
function isWarning(state) {
  return state === VEHICLE_STATE.OVER_CAPACITY
}

// ========== 状态转移执行 ==========

function getRespawnDelayFromConfig(vehicleId) {
  var cfg = findVehicleConfig(vehicleId)
  return cfg ? (cfg.respawnDelay || 1200) : 1200
}

/**
 * 执行状态转移（带校验）
 * @param {object} server - 服务器实例
 * @param {string} vehicleId - 载具ID
 * @param {string} newState - 目标状态（必须为 VEHICLE_STATE 中的值）
 * @param {object} [extra] - 额外字段合并到 state 中（如 remainingTicks 等）
 * @returns {boolean} 是否转移成功
 */
function transitionState(server, vehicleId, newState, extra) {
  let store = getStore(server)

  // 确保该载具有状态条目
  if (!store.vehicles[vehicleId]) {
    store.vehicles[vehicleId] = {
      status: VEHICLE_STATE.UNINITIALIZED,
      team: findVehicleTeam(vehicleId) || 'unknown',
      vehicleType: '',
      uuid: null,
      remainingTicks: null,
      respawnDelay: getRespawnDelayFromConfig(vehicleId)
    }
  }

  let currentState = store.vehicles[vehicleId].status

  // 允许任意状态到 UNINITIALIZED（强制重置）
  if (newState === VEHICLE_STATE.UNINITIALIZED) {
    sbwLog('[状态机] [' + vehicleId + '] 强制重置: ' + currentState + ' → ' + newState)
    store.vehicles[vehicleId].status = newState
    store.vehicles[vehicleId].uuid = null
    store.vehicles[vehicleId].remainingTicks = null
    saveStore(server, store)
    return true
  }

  // 检查转移是否合法
  let allowed = VEHICLE_STATE_TRANSITIONS[currentState]
  if (!allowed || allowed.indexOf(newState) === -1) {
    sbwWarn('[状态机] 非法转移 [' + vehicleId + ']: ' + currentState + ' → ' + newState)
    return false
  }

  sbwLog('[状态机] [' + vehicleId + '] ' + currentState + ' → ' + newState)
  store.vehicles[vehicleId].status = newState

  // 合并额外字段
  if (extra && typeof extra === 'object') {
    for (let key in extra) {
      if (Object.prototype.hasOwnProperty.call(extra, key)) {
        store.vehicles[vehicleId][key] = extra[key]
      }
    }
  }

  saveStore(server, store)
  return true
}

/**
 * 强制设置状态（跳过校验，仅用于系统级重置/修复）
 * @param {object} server - 服务器实例
 * @param {string} vehicleId - 载具ID
 * @param {string} newState - 目标状态
 * @param {object} [extra] - 额外字段
 */
function forceSetState(server, vehicleId, newState, extra) {
  let store = getStore(server)
  if (!store.vehicles[vehicleId]) {
    store.vehicles[vehicleId] = {
      status: VEHICLE_STATE.UNINITIALIZED,
      team: findVehicleTeam(vehicleId) || 'unknown',
      vehicleType: '',
      uuid: null,
      remainingTicks: null,
      respawnDelay: getRespawnDelayFromConfig(vehicleId)
    }
  }
  let oldState = store.vehicles[vehicleId].status
  store.vehicles[vehicleId].status = newState
  if (extra && typeof extra === 'object') {
    for (let key in extra) {
      if (Object.prototype.hasOwnProperty.call(extra, key)) {
        store.vehicles[vehicleId][key] = extra[key]
      }
    }
  }
  saveStore(server, store)
  sbwLog('[状态机] [' + vehicleId + '] 强制设置: ' + oldState + ' → ' + newState)
}

/**
 * 初始化载具状态条目（如果不存在）
 * @param {object} server - 服务器实例
 * @param {string} teamName - 队伍名
 * @param {object} vehicleCfg - 载具配置
 */
function initVehicleState(server, teamName, vehicleCfg) {
  let store = getStore(server)
  let vehicleId = vehicleCfg.id

  if (!store.vehicles[vehicleId]) {
    store.vehicles[vehicleId] = {
      status: VEHICLE_STATE.UNINITIALIZED,
      team: teamName || findVehicleTeam(vehicleId) || 'unknown',
      vehicleType: vehicleCfg.vehicleType,
      uuid: null,
      remainingTicks: null,
      respawnDelay: vehicleCfg.respawnDelay || 1200
    }
    sbwLog('[状态机] [' + vehicleId + '] 初始化状态: ' + VEHICLE_STATE.UNINITIALIZED)
    saveStore(server, store)
  }
  return store.vehicles[vehicleId]
}
