// ============================================================
// SBW 载具 - 自动补员系统（状态机驱动版）
//
// 依赖：config.js → main.js → state_machine.js → tools/*.js
//
// 核心逻辑：
//   由 ServerEvents.loaded 注册的定时循环驱动，按 checkInterval
//   （频率：次/秒）执行全量检测。
//
//   对每辆载具，流程如下：
//     1. 读取当前状态 & 实际存活数
//     2. 根据状态执行对应分支逻辑
//     3. 通过 transitionState() 进行合法状态转移
//
// 频率换算（getCheckTickInterval）：
//   checkInterval=1  → 1次/秒 → 每20tick检测一次
//   checkInterval=2  → 2次/秒 → 每10tick检测一次
//   checkInterval=20 → 20次/秒 → 每1tick检测一次
//
// TIMING 倒计时按实际 tick 间隔（tickStep）递减，
// 确保 respawnDelay（tick 数）的等待时间精确。
// ============================================================

// ========== 补员循环主流程 ==========

let $replenishIntervalId = null

/**
 * 执行一次全量补员检测
 * 遍历所有队伍的所有载具，根据状态机逻辑处理
 */
function checkReplenish(server) {
  if (!isSystemActive(server)) return

  let store = getStore(server)

  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    if (!vehicles || vehicles.length === 0) continue

    for (let i = 0; i < vehicles.length; i++) {
      let v = vehicles[i]
      let vehicleId = v.id
      let tag = getFullTag(vehicleId)

      // 确保状态条目存在
      if (!store.vehicles[vehicleId]) {
        initVehicleState(server, teamName, v)
        store = getStore(server)  // 刷新 store 引用
      }

      let state = store.vehicles[vehicleId]
      if (!state) continue

      // 统计当前存活数
      let aliveCount = countAliveByTag(server, tag)
      let hasEntity = aliveCount > 0
      let maxCount = v.maxCount || 0

      // 尝试通过 UUID 精确查找实体（用于精确匹配）
      let entity = findVehicleEntity(server, state, tag)

      processVehicleState(server, teamName, v, state, entity, aliveCount, hasEntity, maxCount)
      store = getStore(server)  // 刷新 store（transitionState 可能修改了它）
    }
  }
}

/**
 * 根据当前状态处理单辆载具
 */
function processVehicleState(server, teamName, v, state, entity, aliveCount, hasEntity, maxCount) {
  let vehicleId = v.id
  let currentStatus = state.status

  switch (currentStatus) {

    // ─── 未初始化 → 空闲 ───
    case VEHICLE_STATE.UNINITIALIZED:
      transitionState(server, vehicleId, VEHICLE_STATE.IDLE)
      break

    // ─── 空闲：检查区块状态 → 等待区块 / 区块就绪 ───
    case VEHICLE_STATE.IDLE: {
      let chunkLoaded = isChunkLoaded(server, v.pos[0], v.pos[2], getVehicleDimension(v))
      if (chunkLoaded || hasNearbyPlayer(server, v.pos[0], v.pos[2], getVehicleDimension(v), 64)) {
        transitionState(server, vehicleId, VEHICLE_STATE.CHUNK_LOADED)
      } else {
        transitionState(server, vehicleId, VEHICLE_STATE.WAITING_CHUNK)
      }
      break
    }

    // ─── 等待区块加载：区块加载后直接部署（并列路径）───
    case VEHICLE_STATE.WAITING_CHUNK: {
      let chunkLoaded = isChunkLoaded(server, v.pos[0], v.pos[2], getVehicleDimension(v))
      if (chunkLoaded || hasNearbyPlayer(server, v.pos[0], v.pos[2], getVehicleDimension(v), 64)) {
        // 区块就绪，直接检查上限并部署（无需经过 CHUNK_LOADED 多等一 tick）
        if (maxCount > 0 && aliveCount >= maxCount) {
          sbwLog('[补员] [' + vehicleId + '] 区块就绪但已达上限(' + aliveCount + '/' + maxCount + ')，超量标记')
          transitionState(server, vehicleId, VEHICLE_STATE.OVER_CAPACITY)
        } else {
          sbwLog('[补员] [' + vehicleId + '] 区块就绪，直接部署')
          spawnVehicleEntity(server, v)
          transitionState(server, vehicleId, VEHICLE_STATE.DEPLOYED, { uuid: null, remainingTicks: null })
        }
      }
      break
    }

    // ─── 区块已加载：执行部署（来自 IDLE → CHUNK_LOADED）───
    case VEHICLE_STATE.CHUNK_LOADED: {
      // 检查上限
      if (maxCount > 0 && aliveCount >= maxCount) {
        sbwLog('[补员] [' + vehicleId + '] 区块就绪但已达上限(' + aliveCount + '/' + maxCount + ')，超量标记')
        transitionState(server, vehicleId, VEHICLE_STATE.OVER_CAPACITY)
        break
      }
      sbwLog('[补员] [' + vehicleId + '] 区块已就绪，执行部署')
      spawnVehicleEntity(server, v)
      transitionState(server, vehicleId, VEHICLE_STATE.DEPLOYED, { uuid: null, remainingTicks: null })
      break
    }

    // ─── 已部署：检查实体存活 / 超量 ───
    case VEHICLE_STATE.DEPLOYED: {
      if (entity) {
        // 实体存活，检查是否超量
        if (maxCount > 0 && aliveCount > maxCount) {
          sbwLog('[补员] [' + vehicleId + '] 载具超量(' + aliveCount + '/' + maxCount + ')')
          transitionState(server, vehicleId, VEHICLE_STATE.OVER_CAPACITY)
        }
        // 否则保持 DEPLOYED（不做任何事）
      } else {
        // 实体不存在（被摧毁/卸载），进入重生倒计时
        let delay = state.respawnDelay || v.respawnDelay || 1200
        sbwLog('[补员] [' + vehicleId + '] 载具已损毁，启动重生倒计时 ' + (delay / 20) + 's')
        transitionState(server, vehicleId, VEHICLE_STATE.TIMING, { remainingTicks: delay })
      }
      break
    }

    // ─── 超量：等待超量被清除 ───
    case VEHICLE_STATE.OVER_CAPACITY: {
      if (maxCount <= 0 || aliveCount <= maxCount) {
        // 超量已恢复，检查区块状态决定去向
        if (entity) {
          transitionState(server, vehicleId, VEHICLE_STATE.DEPLOYED)
        } else {
          let chunkLoaded = isChunkLoaded(server, v.pos[0], v.pos[2], getVehicleDimension(v))
          if (chunkLoaded || hasNearbyPlayer(server, v.pos[0], v.pos[2], getVehicleDimension(v), 64)) {
            transitionState(server, vehicleId, VEHICLE_STATE.CHUNK_LOADED)
          } else {
            transitionState(server, vehicleId, VEHICLE_STATE.IDLE)
          }
        }
      } else if (!entity) {
        // 超量中实体被摧毁，进入重生倒计时
        let delay = state.respawnDelay || v.respawnDelay || 1200
        sbwLog('[补员] [' + vehicleId + '] 超量载具被摧毁，启动重生倒计时 ' + (delay / 20) + 's')
        transitionState(server, vehicleId, VEHICLE_STATE.TIMING, { remainingTicks: delay })
      }
      break
    }

    // ─── 载具不足（存活数 < maxCount 但至少还有部分存活）───
    case VEHICLE_STATE.UNDER_CAPACITY: {
      if (maxCount > 0 && aliveCount >= maxCount) {
        // 数量已达标
        if (entity) {
          transitionState(server, vehicleId, VEHICLE_STATE.DEPLOYED)
        } else {
          transitionState(server, vehicleId, VEHICLE_STATE.IDLE)
        }
        break
      }
      // 数量仍不足，检查区块
      let chunkLoaded = isChunkLoaded(server, v.pos[0], v.pos[2], getVehicleDimension(v))
      if (chunkLoaded || hasNearbyPlayer(server, v.pos[0], v.pos[2], getVehicleDimension(v), 64)) {
        // 区块已加载 → 启动补员倒计时
        let delay = state.respawnDelay || v.respawnDelay || 1200
        transitionState(server, vehicleId, VEHICLE_STATE.TIMING, { remainingTicks: delay })
      } else {
        transitionState(server, vehicleId, VEHICLE_STATE.WAITING_CHUNK)
      }
      break
    }

    // ─── 计时中：递减倒计时 ───
    case VEHICLE_STATE.TIMING: {
      var tickStep = getCheckTickInterval()  // 每次检测经过的实际 tick 数
      let remaining = state.remainingTicks || 0
      remaining = remaining - tickStep

      if (remaining <= 0) {
        // 计时结束，检查区块状态
        let chunkLoaded = isChunkLoaded(server, v.pos[0], v.pos[2], getVehicleDimension(v))
        if (chunkLoaded || hasNearbyPlayer(server, v.pos[0], v.pos[2], getVehicleDimension(v), 64)) {
          // 区块已加载，直接检查上限并部署（同 WAITING_CHUNK 并列逻辑）
          if (maxCount > 0 && aliveCount >= maxCount) {
            sbwLog('[补员] [' + vehicleId + '] 重生计时结束但已达上限，超量标记')
            transitionState(server, vehicleId, VEHICLE_STATE.OVER_CAPACITY)
          } else {
            sbwLog('[补员] [' + vehicleId + '] 重生倒计时结束，直接部署')
            spawnVehicleEntity(server, v)
            transitionState(server, vehicleId, VEHICLE_STATE.DEPLOYED, { uuid: null, remainingTicks: null })
          }
        } else {
          sbwLog('[补员] [' + vehicleId + '] 重生倒计时结束但区块未加载，等待区块')
          transitionState(server, vehicleId, VEHICLE_STATE.WAITING_CHUNK)
        }
      } else {
        // 更新剩余 tick
        let store = getStore(server)
        if (store.vehicles[vehicleId]) {
          store.vehicles[vehicleId].remainingTicks = remaining
          saveStore(server, store)
        }
      }
      break
    }

    default:
      sbwWarn('[补员] [' + vehicleId + '] 未知状态: ' + currentStatus + '，重置为 IDLE')
      forceSetState(server, vehicleId, VEHICLE_STATE.IDLE)
      break
  }
}

// ========== 补员循环启动/停止 ==========

/** 将配置的频率（次/秒）转换为实际 tick 间隔 */
function getCheckTickInterval() {
  var freq = VEHICLE_CFG.checkInterval || 1
  // freq=1 → 1次/秒 → 每20tick检测一次
  // freq=20 → 20次/秒 → 每1tick检测一次
  return Math.max(1, Math.round(20 / freq))
}

/**
 * 启动补员定时循环
 */
function startReplenishLoop(server) {
  if ($replenishIntervalId !== null) return  // 已启动，避免重复

  var interval = getCheckTickInterval()
  var freq = VEHICLE_CFG.checkInterval || 1
  sbwLog('补员循环已启动，频率: ' + freq + '次/秒 (每' + interval + 'tick)')

  var self = function loopCallback() {
    try {
      checkReplenish(server)
    } catch (err) {
      sbwError('补员循环出错: ' + err)
    }
    if ($replenishIntervalId !== null) {
      $replenishIntervalId = server.scheduleInTicks(interval, loopCallback)
    }
  }
  $replenishIntervalId = server.scheduleInTicks(interval, self)
}

/**
 * 停止补员定时循环
 */
function stopReplenishLoop() {
  if ($replenishIntervalId !== null) {
    $replenishIntervalId = null
    sbwLog('补员循环已停止')
  }
}

/**
 * 强制初始化所有载具状态（供系统启动时调用）
 */
function initAllVehicleStates(server) {
  sbwLog('正在初始化所有载具状态...')
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    if (!vehicles || vehicles.length === 0) continue
    for (let i = 0; i < vehicles.length; i++) {
      initVehicleState(server, teamName, vehicles[i])
    }
  }
  // 将 UNINITIALIZED 全部转为 IDLE
  let store = getStore(server)
  for (let vehicleId in store.vehicles) {
    if (store.vehicles.hasOwnProperty(vehicleId)) {
      let st = store.vehicles[vehicleId]
      if (st.status === VEHICLE_STATE.UNINITIALIZED) {
        st.status = VEHICLE_STATE.IDLE
        sbwLog('[补员] [' + vehicleId + '] 初始化完成: uninitialized → idle')
      }
    }
  }
  saveStore(server, store)
  sbwLog('所有载具状态初始化完成')
}
