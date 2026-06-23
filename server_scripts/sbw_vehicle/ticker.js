// ============================================================
// SBW 载具 - 定时补员检测循环
// 依赖：main.js（checkReplenish, getAllReplenishEntries 等）
//
// 核心逻辑：
//   每隔 config.checkInterval tick 执行一次全量补员检测：
//     遍历所有补员ID → 检查存活数 → 驱动 3 状态机
//
//   waiting_chunk 条目通过轮询处理：每轮检测检查目标区块
//   是否已加载，若已加载则执行延迟部署。
// ============================================================

// ========== 定时补员检测 ==========

/**
 * 执行一轮完整的补员检测
 * 遍历所有配置的补员ID，对每个执行 checkReplenish
 * 同时轮询处理 waiting_chunk 条目
 */
function tickReplenish(server) {
  let entries = getAllReplenishEntries()

  // 第一步：对每个条目执行标准补员检测
  for (let i = 0; i < entries.length; i++) {
    try {
      checkReplenish(server, entries[i].vehicleId, entries[i].vehicleCfg)
    } catch(e) {
      sbwError('[补员] 检测 [' + entries[i].vehicleId + '] 时出错: ' + e)
    }
  }

  // 第二步：轮询处理 waiting_chunk 条目（区块加载事件不可用时的替代方案）
  let store = getStore(server)
  let needsSave = false
  for (let vid in store.vehicles) {
    if (!Object.prototype.hasOwnProperty.call(store.vehicles, vid)) continue
    let s = store.vehicles[vid]
    if (s.status !== 'waiting_chunk') continue

    let cfg = findVehicleConfig(vid)
    if (!cfg) continue

    // 检查目标区块是否已加载
    let dim = getVehicleDimension(cfg)
    if (isChunkLoaded(server, cfg.pos[0], cfg.pos[2], dim)) {
      sbwLog('[轮询] 载具 [' + vid + '] 区块已加载，尝试部署')
      tryDeployWaitingVehicle(server, vid, cfg)
      needsSave = true
    }
  }
  if (needsSave) { store = getStore(server) }
}

// ========== 计时器管理接口（兼容旧版调用）==========

function clearVehicleTimer(vehicleId) {
  // 新版由 store 状态管理，无需单独清除
}

function clearAllTimers() {
  // 新版由 store 状态管理，无需单独清除
}

// ========== 定时循环 ==========

/**
 * 以 config.checkInterval tick 为间隔执行补员检测
 * 使用 ServerEvents.loaded 启动递归 scheduleInTicks
 */
ServerEvents.loaded(event => {
  let server = event.server
  let interval = VEHICLE_CFG.checkInterval || 20
  sbwLog('[循环] 补员检测循环已启动（间隔 ' + interval + ' tick = ' + (interval / 20) + ' 秒）')

  function loop() {
    // 使用 checkInterval 作为检测间隔（而不是每tick）
    server.scheduleInTicks(interval, function() {
      try {
        if (isSystemActive(server)) {
          tickReplenish(server)
        }
        // ActionBar 仍然每 interval 更新一次（足够实时）
        updateTimeActionBar(server)
      } catch(e) {
        sbwError('[循环] 捕获到错误: ' + e)
      }
      loop()
    })
  }
  loop()
})
