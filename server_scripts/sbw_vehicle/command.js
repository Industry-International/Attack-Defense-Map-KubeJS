// ============================================================
// 载具部署台 - 命令注册
//
// 命令列表：
//   /sbw_vehicle start      — 全局启用部署台
//   /sbw_vehicle stop       — 全局禁用部署台（保留已有载具）
//   /sbw_vehicle status     — 列出系统状态 & 已部署载具数
//   /sbw_vehicle clear      — 清除所有部署台载具
// ============================================================

ServerEvents.commandRegistry(event => {
  var cmd = event.commands

  // ════════════════════════════════════════════════════════════
  //  /sbw_vehicle start — 全局启用
  // ════════════════════════════════════════════════════════════
  function executeStart(ctx) {
    var server = ctx.getSource().getServer()
    server.persistentData.putBoolean('sbw_vehicle_disabled', false)
    sbwLog('[命令] 系统已启用')
    ctx.getSource().sendSuccess(
      $Component.literal('§a[部署台] 系统已启用，部署台将正常工作'),
      true
    )
    return 1
  }

  // ════════════════════════════════════════════════════════════
  //  /sbw_vehicle stop — 全局禁用
  // ════════════════════════════════════════════════════════════
  function executeStop(ctx) {
    var server = ctx.getSource().getServer()
    server.persistentData.putBoolean('sbw_vehicle_disabled', true)
    sbwLog('[命令] 系统已禁用')
    ctx.getSource().sendSuccess(
      $Component.literal('§e[部署台] 系统已禁用，已有载具不受影响，部署台停止自动重生'),
      true
    )
    return 1
  }

  // ════════════════════════════════════════════════════════════
  //  /sbw_vehicle status — 系统状态
  // ════════════════════════════════════════════════════════════
  function executeStatus(ctx) {
    var source = ctx.getSource()
    var server = source.getServer()
    var disabled = server.persistentData.getBoolean('sbw_vehicle_disabled')

    source.sendSuccess(
      $Component.literal('§6══ SBW 载具部署台 系统状态 ══'),
      false
    )
    source.sendSuccess(
      $Component.literal('§e系统状态: ' + (disabled ? '§c已禁用' : '§a已启用')),
      false
    )

    // 统计已部署载具数
    var deployedCount = 0
    var levels = server.getAllLevels()
    var lIter = levels.iterator()
    while (lIter.hasNext()) {
      var level = lIter.next()
      var entities = level.getEntities()
      var eIter = entities.iterator()
      while (eIter.hasNext()) {
        var entity = eIter.next()
        if (entity.isRemoved()) continue
        var tags = entity.getTags()
        var tIter = tags.iterator()
        while (tIter.hasNext()) {
          if (tIter.next().startsWith('sbw_deploy_')) {
            deployedCount++
            break
          }
        }
      }
    }

    source.sendSuccess(
      $Component.literal('§e当前已部署载具: §f' + deployedCount + ' 辆'),
      false
    )

    // 显示载具数据库信息（数据包格式）
    var db = getVehicleDB()
    if (db && db.loaded) {
      source.sendSuccess(
        $Component.literal('§7载具数据库: ' + db.vehicleCount + ' 种可用 (' + Object.keys(db.categories).length + ' 个分类)'),
        false
      )
    }
    return 1
  }

  // ════════════════════════════════════════════════════════════
  //  /sbw_vehicle clear — 清除所有部署载具
  // ════════════════════════════════════════════════════════════
  function executeClear(ctx) {
    var server = ctx.getSource().getServer()

    // 清除所有带 sbw_deploy_ 标签的实体
    var count = 0
    var levels = server.getAllLevels()
    var lIter = levels.iterator()
    while (lIter.hasNext()) {
      var level = lIter.next()
      var entities = level.getEntities()
      var eIter = entities.iterator()
      while (eIter.hasNext()) {
        var entity = eIter.next()
        if (entity.isRemoved()) continue
        var tags = entity.getTags()
        var tIter = tags.iterator()
        while (tIter.hasNext()) {
          if (tIter.next().startsWith('sbw_deploy_')) {
            entity.discard()
            count++
            break
          }
        }
      }
    }

    sbwLog('[命令] 已清除 ' + count + ' 辆载具')
    ctx.getSource().sendSuccess(
      $Component.literal('§a[部署台] 已清除 §6' + count + ' §a辆已部署载具'),
      true
    )
    return 1
  }

  // ════════════════════════════════════════════════════════════
  //  注册 /sbw_vehicle
  // ════════════════════════════════════════════════════════════

  event.register(
    cmd.literal('sbw_vehicle')
      .requires(function(s) { return s.hasPermission(2) })

      .then(cmd.literal('start')
        .executes(executeStart))

      .then(cmd.literal('stop')
        .executes(executeStop))

      .then(cmd.literal('status')
        .executes(executeStatus))

      .then(cmd.literal('clear')
        .executes(executeClear))

      .executes(function(ctx) {
        ctx.getSource().sendFailure(
          $Component.literal('§c用法: /sbw_vehicle <start|stop|status|clear>')
        )
        return 0
      })
  )
})
