// ============================================================
// SBW 载具 - 命令注册
//
// 依赖：config.js → main.js（常量）→ tools.js（工具函数）
//
// 命令列表：
//   /sbw_vehicle start      — 激活系统 + 部署所有载具
//   /sbw_vehicle stop       — 停用系统 + 清除所有载具
//   /sbw_vehicle deploy [<team>]  — 部署载具（指定队伍或全部）
//   /sbw_vehicle redeploy   — 强制重新部署（清旧+重部署）
//   /sbw_vehicle reset      — 重置所有载具状态
//   /sbw_vehicle clear [<team>]   — 清除载具实体 + 重置状态
//   /sbw_vehicle status     — 查看系统状态 + 载具状态
// ============================================================

// ========== 命令执行函数 ==========

ServerEvents.commandRegistry(event => {
  let cmd = event.commands
  let args = event.arguments

  /**
   * /sbw_vehicle start — 激活载具系统，启动补员循环
   */
  function executeStart(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    setSystemActive(server, true)
    initAllVehicleStates(server)
    startReplenishLoop(server)
    source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.start_done'), true)
    return 1
  }

  /**
   * /sbw_vehicle stop — 停用载具系统，清除所有载具
   */
  function executeStop(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    setSystemActive(server, false)
    stopReplenishLoop()
    resetAll(server)
    source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.stop_done'), true)
    return 1
  }

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
      deployAllVehicles(server)
      source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.deploy_all'), true)
    }
    return 1
  }

  /**
   * /sbw_vehicle redeploy — 强制重新部署所有载具
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
   * /sbw_vehicle reset — 重置所有载具状态
   */
  function executeReset(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let result = resetAll(server)
    source.sendSuccess(
      Component.translatable('msg.kubejs.sbw_vehicle.reset_done',
        String(result.entityCount)),
      true
    )
    return 1
  }

  /**
   * /sbw_vehicle clear [<team>] — 清除载具实体 + 重置状态
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
      count = clearVehicles(server, null)
      source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.clear_all', String(count)), true)
    }
    return 1
  }

  /**
   * /sbw_vehicle status — 查看系统状态 + 载具状态
   */
  function executeStatus(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()

    let sysActive = isSystemActive(server)
    let sysLine = sysActive
      ? '§a✔ 载具系统已激活'
      : '§c✖ 载具系统未激活'

    let lines = getStatusLines(server)
    let msg = Component.literal(sysLine)
    for (let i = 0; i < lines.length; i++) {
      msg = msg.append('\n').append(Text.of(lines[i]))
    }
    source.sendSuccess(msg, false)
    return 1
  }

  // ========== 注册 /sbw_vehicle 命令 ==========

  event.register(
    cmd.literal('sbw_vehicle')
      .requires(function(s) { return s.hasPermission(2) })

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

      // ---- 默认 → 用法提示 ----
      .executes(function(ctx) {
        let source = ctx.getSource()
        source.sendFailure(Component.translatable('msg.kubejs.sbw_vehicle.usage'))
        return 0
      })
  )
})
