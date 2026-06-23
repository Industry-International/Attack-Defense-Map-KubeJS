// ============================================================
// SBW 载具 - 定时补员检测循环
// 依赖：main.js（checkReplenish, processDeployQueue 等）
//
// 核心逻辑：
//   1. 全量补员检测：遍历所有补员ID → countAliveByTag → 2状态机
//   2. 处理部署缓存队列：检查队列中条目的区块是否已加载
// ============================================================

// ========== 定时补员检测 ==========

/**
 * 执行一轮完整的补员检测 + 处理部署队列
 */
function tickReplenish(server) {
  let entries = getAllReplenishEntries()

  // 第一步：全量补员检测
  for (let i = 0; i < entries.length; i++) {
    try {
      checkReplenish(server, entries[i].vehicleId, entries[i].vehicleCfg)
    } catch(e) {
      sbwError('[补员] 检测 [' + entries[i].vehicleId + '] 时出错: ' + e)
    }
  }

  // 第二步：处理部署缓存队列（区块已加载的条目执行 summon）
  try {
    processDeployQueue(server)
  } catch(e) {
    sbwError('[队列] 处理部署队列时出错: ' + e)
  }
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
