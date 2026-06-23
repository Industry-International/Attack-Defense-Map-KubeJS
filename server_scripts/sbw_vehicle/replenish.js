// ============================================================
// SBW 载具 - 补员系统（状态机 + 部署 + 定时循环）
// 依赖 main.js 中的基础设施函数（getStore/saveStore 等）
//
// 功能：
//   1. 3状态机：idle ↔ timing ↔ waiting_chunk
//   2. 倒计时计数（remainingTicks 每 tick 减 1）
//   3. waiting_chunk 区块主动加载（forceload + 释放）
//   4. 命令部署 / 自动补员 统一入口
//   5. ServerEvents.loaded 定时循环驱动
// ============================================================

// ========== 状态工具 ==========

/**
 * 强制将指定补员ID的状态重置为 idle
 * 无论当前处于什么状态，都会清理所有关联资源
 */
function forceStateToIdle(state) {
  state.status = 'idle'
  state.remainingTicks = null
}

/**
 * 判断一个区块坐标是否包含指定的载具部署点
 */
function isVehicleInChunk(vehicleCfg, chunkMinBlockX, chunkMinBlockZ, chunkMaxBlockX, chunkMaxBlockZ) {
  let vx = vehicleCfg.pos[0]
  let vz = vehicleCfg.pos[2]
  return vx >= chunkMinBlockX && vx <= chunkMaxBlockX && vz >= chunkMinBlockZ && vz <= chunkMaxBlockZ
}

// ========== 补员条目管理 ==========

function ensureVehicleEntry(server, vehicleId, vehicleCfg, teamName) {
  let store = getStore(server)
  if (!store.vehicles[vehicleId]) {
    store.vehicles[vehicleId] = {
      status: 'idle',
      team: teamName || findVehicleTeam(vehicleId),
      vehicleType: vehicleCfg.vehicleType,
      uuid: null,
      remainingTicks: null,
      respawnDelay: vehicleCfg.respawnDelay || 1200
    }
    saveStore(server, store)
  }
  return store.vehicles[vehicleId]
}

function getAllReplenishEntries() {
  let entries = []
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      entries.push({ vehicleId: vehicles[i].id, vehicleCfg: vehicles[i], teamName: teamName })
    }
  }
  return entries
}

// ========== 3状态机补员检测 ==========

/**
 * 补员检测核心函数（3状态机）
 * ★ 计时采用倒计数方式：remainingTicks 每 tick 减 1，归零即到期 ★
 * 不依赖 server.ticks 绝对值，服务器重启后倒计时值不变。
 *
 * 状态流转：
 *   idle           → (数量短缺)              → timing (启动倒计时)
 *   idle           → (数量达标)              → idle (无变化)
 *   timing         → (数量达标)              → idle (取消计时)
 *   timing         → (倒计时归零 + 区块已加载) → idle (部署成功)
 *   timing         → (倒计时归零 + 区块未加载) → waiting_chunk (等待区块)
 *   waiting_chunk  → (数量达标)              → idle (取消等待)
 *   waiting_chunk  → (数量短缺)              → waiting_chunk (不动，processWaitingChunk 处理)
 *
 * 核心原则：只要状态不是 idle，就不会创建新的计时器或计划。
 */
function checkReplenish(server, vehicleId, vehicleCfg) {
  let store = getStore(server)
  let state = ensureVehicleEntry(server, vehicleId, vehicleCfg, null)
  let tag = getFullTag(vehicleId)
  let maxCount = vehicleCfg.maxCount || 1
  let aliveCount = countAliveByTag(server, tag)

  // ======== 数量达标 → 任何状态都回 idle ========
  if (aliveCount >= maxCount) {
    if (state.status !== 'idle') {
      sbwLog('[补员] [' + vehicleId + '] 存活 ' + aliveCount + '/' + maxCount + ' 达标，取消补员')
      forceStateToIdle(state)
      saveStore(server, store)
    }
    return
  }

  // ======== 数量短缺，根据当前状态决策 ========

  if (state.status === 'idle') {
    // 首次检测到短缺 → 启动倒计时
    let delay = vehicleCfg.respawnDelay || 1200
    state.status = 'timing'
    state.remainingTicks = delay
    sbwLog('[补员] [' + vehicleId + '] 短缺 ' + (maxCount - aliveCount) + ' 辆，' + (delay / 20) + 's 后补员')
    saveStore(server, store)

  } else if (state.status === 'timing') {
    // 倒计时进行中，每 tick 减 1
    state.remainingTicks = (state.remainingTicks || 0) - 1

    if (state.remainingTicks <= 0) {
      // 倒计时归零 → 尝试部署
      let dim = getVehicleDimension(vehicleCfg)
      if (isChunkLoaded(server, vehicleCfg.pos[0], vehicleCfg.pos[2], dim)) {
        sbwLog('[补员] [' + vehicleId + '] 倒计时结束，区块已加载，部署')
        spawnVehicleEntity(server, vehicleCfg)
        state.status = 'idle'
        state.remainingTicks = null
        state.uuid = null
      } else {
        sbwLog('[补员] [' + vehicleId + '] 倒计时结束但区块未加载，进入 waiting_chunk')
        state.status = 'waiting_chunk'
        state.remainingTicks = null
      }
      saveStore(server, store)
    } else {
      // 倒计时未归零 → 保存递减后的值
      saveStore(server, store)
    }

  } else if (state.status === 'waiting_chunk') {
    // 已在等待区块加载 → 什么都不做
    // processWaitingChunk 会主动加载区块并部署
  }
}

// ========== waiting_chunk 处理（主动加载区块）==========

/**
 * 处理 waiting_chunk 条目（由 tick 循环调用）
 * ★ 使用 forceload 临时加载区块，部署后立即释放 ★
 */
function processWaitingChunk(server) {
  let store = getStore(server)
  let modified = false

  for (let vehicleId in store.vehicles) {
    if (!store.vehicles.hasOwnProperty(vehicleId)) continue
    let state = store.vehicles[vehicleId]
    if (state.status !== 'waiting_chunk') continue

    let cfg = findVehicleConfig(vehicleId)
    if (!cfg) continue

    let dim = getVehicleDimension(cfg)
    let x = cfg.pos[0], z = cfg.pos[2]
    let chunkX = Math.floor(x / 16), chunkZ = Math.floor(z / 16)

    // ★ 使用 forceload 安全加载区块（部署完毕后会释放）
    server.runCommandSilent('execute in ' + dim + ' run forceload add ' + chunkX + ' ' + chunkZ)

    // 检查区块是否已加载
    if (isChunkLoaded(server, x, z, dim)) {
      // 再确认数量（防止在等待期间数量已恢复）
      let tag = getFullTag(vehicleId)
      let maxCount = cfg.maxCount || 1
      if (countAliveByTag(server, tag) < maxCount) {
        sbwLog('[等待] waiting_chunk [' + vehicleId + '] 区块已加载，执行部署')
        spawnVehicleEntity(server, cfg)
      } else {
        sbwLog('[等待] waiting_chunk [' + vehicleId + '] 区块已加载但数量已达标，放弃')
      }

      // ★ 释放区块（载具已生成，区块因有实体不会立即卸载）
      server.runCommandSilent('execute in ' + dim + ' run forceload remove ' + chunkX + ' ' + chunkZ)

      state.status = 'idle'
      state.uuid = null
      state.remainingTicks = null
      modified = true
    }
    // 区块仍未加载 → 下一 tick 继续尝试（forceload 正在生效）
  }

  if (modified) saveStore(server, store)
}

// ========== 主动部署接口 ==========

function deployVehicle(server, teamName, vehicleCfg) {
  let vehicleId = vehicleCfg.id, tag = getFullTag(vehicleId)

  // 检查数量是否已达标
  if ((vehicleCfg.maxCount || 0) > 0 && countAliveByTag(server, tag) >= vehicleCfg.maxCount) return

  let state = ensureVehicleEntry(server, vehicleId, vehicleCfg, teamName)

  // 如果已有补员计划在运行，不干扰，直接跳过
  if (state.status !== 'idle') {
    sbwLog('[部署] [' + vehicleId + '] 已有补员计划(' + state.status + ')，跳过')
    return
  }

  // 检查区块（summon 虽会加载区块，但无法获取未加载区块的实体状态）
  if (isChunkLoaded(server, vehicleCfg.pos[0], vehicleCfg.pos[2], getVehicleDimension(vehicleCfg))) {
    // 区块已加载 → 立即部署
    sbwLog('[部署] [' + vehicleId + '] 区块已加载，立即部署')
    spawnVehicleEntity(server, vehicleCfg)
    state.status = 'idle'
    state.uuid = null
    state.remainingTicks = null
    saveStore(server, getStore(server))
  } else {
    // 区块未加载 → 进入 waiting_chunk（processWaitingChunk 会主动加载区块）
    sbwLog('[部署] [' + vehicleId + '] 区块未加载，进入 waiting_chunk')
    state.status = 'waiting_chunk'
    state.remainingTicks = null
    saveStore(server, getStore(server))
  }
}

function deployTeamVehicles(server, teamName) {
  let teamCfg = VEHICLE_CFG.teams[teamName]
  if (!teamCfg) { sbwWarn('未找到队伍 [' + teamName + '] 的载具配置'); return }
  let vehicles = teamCfg.vehicles
  if (!vehicles || vehicles.length === 0) return
  for (let i = 0; i < vehicles.length; i++) deployVehicle(server, teamName, vehicles[i])
}

function deployAllVehicles(server) {
  for (let teamName in VEHICLE_CFG.teams) {
    if (VEHICLE_CFG.teams.hasOwnProperty(teamName)) deployTeamVehicles(server, teamName)
  }
}

// ========== 定时补员检测循环 ==========

/**
 * 执行一轮完整的补员检测 + 处理 waiting_chunk
 * 由 ServerEvents.loaded 启动的递归 scheduleInTicks 驱动
 */
function tickReplenish(server) {
  let entries = getAllReplenishEntries()

  // 第一步：全量补员检测（3状态机）
  for (let i = 0; i < entries.length; i++) {
    try {
      checkReplenish(server, entries[i].vehicleId, entries[i].vehicleCfg)
    } catch(e) {
      sbwError('[补员] 检测 [' + entries[i].vehicleId + '] 时出错: ' + e)
    }
  }

  // 第二步：处理 waiting_chunk（区块已加载的条目执行部署）
  try {
    processWaitingChunk(server)
  } catch(e) {
    sbwError('[等待] 处理 waiting_chunk 时出错: ' + e)
  }
}

/**
 * 以 config.checkInterval tick 为间隔执行补员检测
 */
ServerEvents.loaded(event => {
  let server = event.server
  let interval = VEHICLE_CFG.checkInterval || 20
  sbwLog('[循环] 补员检测循环已启动（间隔 ' + interval + ' tick = ' + (interval / 20) + ' 秒）')

  function loop() {
    server.scheduleInTicks(interval, function() {
      try {
        if (isSystemActive(server)) {
          tickReplenish(server)
        }
        updateTimeActionBar(server)
      } catch(e) {
        sbwError('[循环] 捕获到错误: ' + e)
      }
      loop()
    })
  }
  loop()
})
