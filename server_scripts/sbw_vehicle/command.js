// ============================================================
// SBW 卓越前线 - 载具自动部署系统 指令注册
//
// 依赖：config.js → main.js（全局函数）→ command.js
//
// 指令列表：
//   /sbw_vehicle deploy [<team>]  部署载具（指定队伍或全部）
//   /sbw_vehicle redeploy         强制重新部署（清旧+重部署）
//   /sbw_vehicle reset            重置所有载具状态
//   /sbw_vehicle clear [<team>]   调试：清除指定/所有队伍的载具实体
//   /sbw_vehicle status           查看载具状态
//   /sbw_vehicle start            激活系统：部署所有载具，开始追踪
//   /sbw_vehicle stop             停用系统：清除所有载具，停止追踪
// ============================================================

// ========== 工具函数（依赖 main.js 中的全局函数）==========

/**
 * 清除指定队伍的载具实体 + 重置 store 中对应的状态
 * @param {object} server - 服务器实例
 * @param {string|null} teamName - 队伍名，null 表示所有队伍
 * @returns {number} 清除的载具数量
 */
function clearVehicles(server, teamName) {
  let store = getStore(server)
  let count = 0

  let teamsToProcess = []
  if (teamName) {
    if (VEHICLE_CFG.teams[teamName]) {
      teamsToProcess = [teamName]
    } else {
      sbwWarn('未找到队伍 [' + teamName + '] 的载具配置')
      return 0
    }
  } else {
    for (let t in VEHICLE_CFG.teams) {
      if (VEHICLE_CFG.teams.hasOwnProperty(t)) teamsToProcess.push(t)
    }
  }

  for (let ti = 0; ti < teamsToProcess.length; ti++) {
    let tn = teamsToProcess[ti]
    let vehicles = VEHICLE_CFG.teams[tn].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      let v = vehicles[i]
      let tag = getFullTag(v.id)
      let state = store.vehicles[v.id] || null
      let entity = findVehicleEntity(server, state, tag)
      if (entity) {
        entity.discard()
        count++
        sbwLog('调试清除：已清除载具实体 [' + v.id + ']（无掉落物）')
      }
      // 从 store 中删除该载具的状态记录
      if (store.vehicles[v.id]) {
        delete store.vehicles[v.id]
      }
    }
  }

  saveStore(server, store)

  let teamLabel = teamName ? '队伍 [' + teamName + ']' : '所有队伍'
  sbwLog('调试清除：' + teamLabel + ' 已清除 ' + count + ' 个载具实体，状态已重置')
  return count
}

// ========== 指令注册 ==========

ServerEvents.commandRegistry(event => {
  let cmd = event.commands
  let args = event.arguments

  // ===== 执行函数 =====

  /**
   * /sbw_vehicle deploy [<team>] — 部署载具
   */
  function executeDeploy(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()

    try {
      let teamName = ctx.getArgument('team')
      if (teamName) {
        deployTeamVehicles(server, teamName)
        source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.deploy_team', teamName), true)
      }
    } catch (e) {
      // 没有 team 参数 → 部署全部
      deployAllVehicles(server)
      source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.deploy_all'), true)
    }
    return 1
  }

  /**
   * /sbw_vehicle reset — 重置所有载具
   */
  function executeReset(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    resetAll(server)
    source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.reset_done'), true)
    return 1
  }

  /**
   * /sbw_vehicle status — 查看载具状态
   */
  function executeStatus(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let lines = getStatusLines(server)

    let msg = Component.translatable('msg.kubejs.sbw_vehicle.status_header')
    for (let i = 0; i < lines.length; i++) {
      msg = msg.append('\n').append(Text.of(lines[i]))
    }
    source.sendSuccess(msg, false)
    return 1
  }

  /**
   * /sbw_vehicle redeploy — 强制重新部署所有载具（先清除旧的）
   */
  function executeRedeploy(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    resetAll(server)
    deployAllVehicles(server)
    source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.redeploy_done'), true)
    return 1
  }

  /**
   * /sbw_vehicle start — 激活载具系统
   */
  function executeStart(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    setSystemActive(server, true)
    deployAllVehicles(server)
    source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.start_done'), true)
    return 1
  }

  /**
   * /sbw_vehicle stop — 停用载具系统
   */
  function executeStop(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    setSystemActive(server, false)
    resetAll(server)
    source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.stop_done'), true)
    return 1
  }

  /**
   * /sbw_vehicle time — 查看载具重生剩余时间
   */
  function executeTime(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let lines = getRespawnTimeLines(server)

    let msg = Component.translatable('msg.kubejs.sbw_vehicle.time_header')
    for (let i = 0; i < lines.length; i++) {
      msg = msg.append('\\n').append(Text.of(lines[i]))
    }
    source.sendSuccess(msg, false)
    return 1
  }

  /**
   * /sbw_vehicle clear [<team>] — 调试：清除载具实体 + 重置状态
   * 清除指定队伍（或全部）的载具实体，并从 store 中移除记录
   * 之后需要手动 deploy 重新部署
   */
  function executeClear(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let count = 0

    try {
      let teamName = ctx.getArgument('team')
      if (teamName) {
        count = clearVehicles(server, teamName)
        source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.clear_team', teamName, String(count)), true)
      }
    } catch (e) {
      // 没有 team 参数 → 清除全部
      count = clearVehicles(server, null)
      source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.clear_all', String(count)), true)
    }
    return 1
  }

  // ===== 注册 /sbw_vehicle 命令 =====

  event.register(
    cmd.literal('sbw_vehicle')
      .requires(function(s) { return s.hasPermission(2) })

      // ---- deploy [<team>] ----
      .then(
        cmd.literal('deploy')
          .executes(executeDeploy)
          .then(
            cmd.argument('team', args.STRING.create(event))
              .executes(executeDeploy)
          )
      )

      // ---- redeploy ----
      .then(
        cmd.literal('redeploy')
          .executes(executeRedeploy)
      )

      // ---- reset ----
      .then(
        cmd.literal('reset')
          .executes(executeReset)
      )

      // ---- clear [<team>] ----
      .then(
        cmd.literal('clear')
          .executes(executeClear)
          .then(
            cmd.argument('team', args.STRING.create(event))
              .executes(executeClear)
          )
      )

      // ---- status ----
      .then(
        cmd.literal('status')
          .executes(executeStatus)
      )

      // ---- start ----
      .then(
        cmd.literal('start')
          .executes(executeStart)
      )

      // ---- stop ----
      .then(
        cmd.literal('stop')
          .executes(executeStop)
      )

      // ---- time ----
      .then(
        cmd.literal('time')
          .executes(executeTime)
      )

      // ---- 默认 → 用法提示 ----
      .executes(function(ctx) {
        let source = ctx.getSource()
        source.sendFailure(Component.translatable('msg.kubejs.sbw_vehicle.usage'))
        return 0
      })
  )
})
