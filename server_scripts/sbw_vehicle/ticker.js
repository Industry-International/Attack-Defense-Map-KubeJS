// ============================================================
// SBW 载具 - 每tick监控循环（独立文件，方便修改轮回逻辑）
// 依赖：main.js 必须先加载（所有部署函数、查找函数在 main.js）
//
// 加载顺序：command.js → config.js → main.js → ticker.js
// ============================================================

// ========== 载具计时器管理 ==========

/**
 * 每个 vehicleId 当前重生倒计时剩余 tick
 * key = teamName + "|" + vehicleId（每队每ID独立）
 * value = 剩余 tick 数（正数=倒计时中）
 */
var $respawnTimers = new $HashMap()

// ========== 核心轮回函数 ==========

/**
 * 每tick执行：检查所有载具存活数 + 管理倒计时
 *
 * 核心逻辑：
 *   每tick遍历所有已配载具：
 *     存活数 >= maxCount → 取消计时器
 *     存活数 <  maxCount → 无计时器则启动，有计时器则递减
 *     计时器归零       → 部署载具
 */
function tickVehicles(server) {
  // 遍历所有配置的载具
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vList = VEHICLE_CFG.teams[teamName].vehicles

    for (let i = 0; i < vList.length; i++) {
      let v = vList[i]
      let timerKey = teamName + '|' + v.id
      let tag = getFullTag(v.id)
      let aliveCount = countAliveByTag(server, tag)
      let maxCount = v.maxCount || 1

      if (aliveCount >= maxCount) {
        // 存活数达标：如果有计时器则取消
        if ($respawnTimers.containsKey(timerKey)) {
          $respawnTimers.remove(timerKey)
        }
        continue
      }

      // 存活数不足
      let remaining = $respawnTimers.get(timerKey)
      if (remaining == null) {
        // 无计时器 → 启动新计时器
        let delay = v.respawnDelay || 1200
        $respawnTimers.put(timerKey, delay)
        sbwLog('[倒计时] [' + teamName + '] 载具 [' + v.id + '] 存活 ' + aliveCount + '/' + maxCount
          + '，启动 ' + (delay / 20) + ' 秒倒计时')
      }
    }
  }

  // 处理所有计时器：递减 + 归零部署
  var deployBatch = []
  var timerIter = $respawnTimers.keySet().iterator()
  while (timerIter.hasNext()) {
    var timerKey = timerIter.next()
    var ticksLeft = $respawnTimers.get(timerKey) - 1

    if (ticksLeft <= 0) {
      // 倒计时归零 → 加入部署队列，移除计时器
      deployBatch.push(timerKey)
      timerIter.remove()
    } else {
      $respawnTimers.put(timerKey, ticksLeft)
    }
  }

  // 执行部署（从 timerKey 解析队伍和ID）
  for (var di = 0; di < deployBatch.length; di++) {
    var parts = deployBatch[di].split('|')
    var teamName = parts[0]
    var vehicleId = parts[1]
    var vehicleCfg = findVehicleConfig(vehicleId)
    if (vehicleCfg) {
      sbwLog('[倒计时] 倒计时结束，部署 [' + teamName + '] 载具 [' + vehicleId + ']')
      deployVehicle(server, teamName, vehicleCfg)
    }
  }
}

// ========== 计时器管理接口 ==========

/**
 * 清除指定载具的计时器（用于 debug clear）
 */
function clearVehicleTimer(vehicleId) {
  var teamName = findVehicleTeam(vehicleId)
  if (teamName) {
    $respawnTimers.remove(teamName + '|' + vehicleId)
  }
}

/**
 * 清除所有计时器
 */
function clearAllTimers() {
  $respawnTimers.clear()
}

// ========== 每tick处理循环 ==========

/**
 * 每tick执行一次：检查存活数 + 管理倒计时 + ActionBar
 *
 * 使用 ServerEvents.loaded 启动递归 scheduleInTicks(1, ...)，
 * 因为 ServerEvents.tick 在某些环境下可能不触发，
 * 而 server.scheduleInTicks 已验证可用。
 */
ServerEvents.loaded(event => {
  let server = event.server
  sbwLog('[循环] 载具监控循环已启动（每tick）')

  function loop() {
    server.scheduleInTicks(1, function() {
      try {
        if (isSystemActive(server)) {
          tickVehicles(server)
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
