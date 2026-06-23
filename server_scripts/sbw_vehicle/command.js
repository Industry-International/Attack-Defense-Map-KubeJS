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
//   /sbw_vehicle status           查看系统状态 + 载具状态（含血量/部件/弹药）
//   /sbw_vehicle start            激活系统：部署所有载具，开始追踪
//   /sbw_vehicle stop             停用系统：清除所有载具，停止追踪
//   /sbw_vehicle time             切换实时 ActionBar（仅对自己生效）
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
      deployAllVehicles(server)
      source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.deploy_all'), true)
    }
    return 1
  }

  /**
   * /sbw_vehicle reset — 重置所有载具
   * 取消所有排期 + 清除所有实体 + 清空 store
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
   * /sbw_vehicle status — 查看系统状态 + 载具完整状态（血量/能量/部件/弹药/UUID）
   * 首行显示系统是否激活，然后显示每辆载具的详细状态
   */
  function executeStatus(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()

    // 首行：系统激活状态
    let sysActive = isSystemActive(server)
    let sysLine = sysActive
      ? '§a✔ 载具系统已激活'
      : '§c✖ 载具系统未激活'

    let lines = getStatusLines(server)
    let msg = $Component.literal(sysLine)
    for (let i = 0; i < lines.length; i++) {
      msg = msg.append('\n').append(Text.of(lines[i]))
    }
    source.sendSuccess(msg, false)
    return 1
  }

  /**
   * /sbw_vehicle debug_inspect <team> <vehicleId> — 调试：查看载具详细诊断信息
   * 显示配置值、存活数、状态机数据、区块加载状态等。
   */
  function executeDebugInspect(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let teamName = ctx.getArgument('team')
    let vehicleId = ctx.getArgument('vehicleId')

    let teamCfg = VEHICLE_CFG.teams[teamName]
    if (!teamCfg) {
      source.sendFailure(Component.literal('§c未找到队伍 [' + teamName + '] 的配置'))
      return 0
    }

    let cfg = findVehicleConfig(vehicleId)
    if (!cfg) {
      source.sendFailure(Component.literal('§c未找到载具 [' + vehicleId + '] 的配置'))
      return 0
    }

    let state = getVehicleState(server, vehicleId)
    let tag = getFullTag(vehicleId)
    let aliveCount = countAliveByTag(server, tag)
    let dim = getVehicleDimension(cfg)
    let chunkX = Math.floor(cfg.pos[0] / 16)
    let chunkZ = Math.floor(cfg.pos[2] / 16)
    let chunkLoaded = isChunkLoaded(server, cfg.pos[0], cfg.pos[2], dim)

    let lines = []
    lines.push('§6=== 载具调试信息: ' + vehicleId + ' ===')
    lines.push('§e队伍: §f' + teamName)
    lines.push('§e类型: §f' + cfg.vehicleType)
    lines.push('§e坐标: §f' + cfg.pos.join(', '))
    lines.push('§e维度: §f' + dim)
    lines.push('')
    lines.push('§6--- 配置值 ---')
    lines.push('§emaxCount: §f' + (cfg.maxCount || '∞'))
    lines.push('§erespawnDelay: §f' + (cfg.respawnDelay || '1200') + ' tick (' + ((cfg.respawnDelay || 1200) / 20) + 's)')
    lines.push('')
    lines.push('§6--- 运行时数据 ---')
    lines.push('§e当前存活数: §f' + aliveCount + ' §7(标签: ' + tag + ')')
    lines.push('§e区块坐标: §f[' + chunkX + ', ' + chunkZ + ']')
    lines.push('§e区块加载状态: §f' + (chunkLoaded ? '§a已加载' : '§c未加载'))
    if (state) {
      lines.push('§e状态机状态: §f' + state.status)
      if (state.status === 'timing') {
        let remainingTicks = state.remainingTicks || 0
        lines.push('§e倒计时剩余: §f' + remainingTicks + ' tick (' + (remainingTicks / 20).toFixed(1) + 's)')
      }
      if (state.uuid) lines.push('§eUUID: §f' + state.uuid)
    } else {
      lines.push('§e状态机: §7未初始化')
    }

    let msg = $Component.literal('')
    for (let i = 0; i < lines.length; i++) {
      msg = msg.append(Text.of(lines[i]))
      if (i < lines.length - 1) msg = msg.append('\n')
    }
    source.sendSuccess(msg, false)
    return 1
  }

  /**
   * /sbw_vehicle redeploy — 强制重新部署所有载具
   * 流程：取消所有排期 → 按前缀清除旧实体 → 清空 store → 重新部署
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
   * /sbw_vehicle time — 切换实时 ActionBar 状态栏（仅对执行者本人生效）
   * 开启后每 1 秒在物品栏上方显示所有载具的存活/重生状态
   */
  function executeTime(ctx) {
    let source = ctx.getSource()
    let player = source.getPlayer()
    if (!player) {
      source.sendFailure(Component.literal('§c该命令只能由玩家执行'))
      return 0
    }
    let playerName = player.getName().getString()

    if ($actionBarPlayers.contains(playerName)) {
      $actionBarPlayers.remove(playerName)
      source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.time_off'), false)
    } else {
      $actionBarPlayers.add(playerName)
      source.sendSuccess(Component.translatable('msg.kubejs.sbw_vehicle.time_on'), false)
    }
    return 1
  }

  /**
   * /sbw_vehicle clear [<team>] — 调试：清除载具实体 + 重置状态
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

      // ---- debug_inspect <team> <vehicleId> ----
      .then(
        cmd.literal('debug_inspect')
          .then(
            cmd.argument('team', args.STRING.create(event))
              .then(
                cmd.argument('vehicleId', args.STRING.create(event))
                  .executes(executeDebugInspect)
              )
          )
      )

      // ---- 默认 → 用法提示 ----
      .executes(function(ctx) {
        let source = ctx.getSource()
        source.sendFailure(Component.translatable('msg.kubejs.sbw_vehicle.usage'))
        return 0
      })
  )
})
