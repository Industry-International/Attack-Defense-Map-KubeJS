// ============================================================
// 出生点选择器 - 管理员指令
//
// 依赖：config.js（SPAWN_POINTS、getSpawnVisibility、setSpawnVisibility、getAllTeams）
//
// 命令：
//   /spawn_selector visible   <pointId> <team>
//     — 让指定出生点对某个原版队伍可见
//
//   /spawn_selector invisible <pointId> <team>
//     — 取消指定出生点对某个原版队伍的可见性
//
//   /spawn_selector list
//     — 列出所有出生点及其当前可见队伍
//
// <team> 参数自动读取原版计分板队伍进行补全。
// 数据包示例：
//   防守方初始可见：/spawn_selector visible attacker defense
//   进攻方占领后：  /spawn_selector visible A1 attack
//   取消进攻方可见：/spawn_selector invisible A1 attack
// ============================================================

ServerEvents.commandRegistry(event => {
  let cmd = event.commands
  let args = event.arguments

  var $StringArgument = Java.loadClass('com.mojang.brigadier.arguments.StringArgumentType')

  function isValidPointId(id) {
    return SPAWN_POINTS.hasOwnProperty(id)
  }

  // ========== 从计分板获取队伍名作提示 ==========
  function getTeamSuggestions(ctx, builder) {
    try {
      var server = ctx.getSource().getServer()
      var allTeams = getAllTeams(server)
      for (var i = 0; i < allTeams.length; i++) {
        builder.suggest(allTeams[i])
      }
    } catch(e) { /* ignore */ }
    return builder.buildFuture()
  }

  function getPointSuggestions(ctx, builder) {
    for (var id in SPAWN_POINTS) {
      if (SPAWN_POINTS.hasOwnProperty(id)) {
        builder.suggest(id)
      }
    }
    return builder.buildFuture()
  }

  // ========== 执行 visible ==========
  function executeVisible(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let pointId = $StringArgument.getString(ctx, 'pointId')
    let teamName = $StringArgument.getString(ctx, 'team')

    if (!isValidPointId(pointId)) {
      source.sendFailure(Component.translatable('msg.kubejs.spawn_selector.invalid_point', pointId))
      return 0
    }

    var vis = getSpawnVisibility(server)
    var arr = vis[pointId]
    if (!arr || !Array.isArray(arr)) arr = []

    // 去重添加
    if (arr.indexOf(teamName) === -1) {
      arr.push(teamName)
    }
    vis[pointId] = arr
    setSpawnVisibility(server, vis)

    var pointName = Text.translate(SPAWN_POINTS[pointId].nameKey).getString()
    source.sendSuccess(
      Component.translatable('msg.kubejs.spawn_selector.visible_set', pointName, teamName),
      true
    )
    return 1
  }

  // ========== 执行 invisible ==========
  function executeInvisible(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let pointId = $StringArgument.getString(ctx, 'pointId')
    let teamName = $StringArgument.getString(ctx, 'team')

    if (!isValidPointId(pointId)) {
      source.sendFailure(Component.translatable('msg.kubejs.spawn_selector.invalid_point', pointId))
      return 0
    }

    var vis = getSpawnVisibility(server)
    var arr = vis[pointId]
    if (arr && Array.isArray(arr)) {
      var idx = arr.indexOf(teamName)
      if (idx !== -1) {
        arr.splice(idx, 1)
      }
      vis[pointId] = arr
    }
    setSpawnVisibility(server, vis)

    var pointName = Text.translate(SPAWN_POINTS[pointId].nameKey).getString()
    source.sendSuccess(
      Component.translatable('msg.kubejs.spawn_selector.invisible_set', pointName, teamName),
      true
    )
    return 1
  }

  // ========== 执行 list ==========
  function executeList(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    var vis = getSpawnVisibility(server)

    var msg = Component.translatable('msg.kubejs.spawn_selector.list_header')
    var hasAny = false

    for (var id in SPAWN_POINTS) {
      if (!SPAWN_POINTS.hasOwnProperty(id)) continue
      hasAny = true
      var point = SPAWN_POINTS[id]
      var arr = vis[id]
      var displayTeams = (arr && Array.isArray(arr) && arr.length > 0)
        ? arr.join(', ')
        : '§7禁用'
      var coords = point.pos
      msg = msg.append('\n').append(
        Component.translatable('msg.kubejs.spawn_selector.list_entry',
          Text.translate(point.nameKey),
          displayTeams,
          coords
        )
      )
    }

    if (!hasAny) {
      msg = msg.append('\n').append(Component.translatable('msg.kubejs.spawn_selector.list_empty'))
    }

    source.sendSuccess(msg, false)
    return 1
  }

  // ========== 注册命令 ==========
  event.register(
    cmd.literal('spawn_selector')
      .requires(function(s) { return s.hasPermission(2) })

      // ---- spawn_selector visible <pointId> <team> ----
      .then(
        cmd.literal('visible')
          .then(
            cmd.argument('pointId', args.STRING.create(event))
              .suggests(function(ctx, builder) { return getPointSuggestions(ctx, builder) })
              .then(
                cmd.argument('team', args.STRING.create(event))
                  .suggests(function(ctx, builder) { return getTeamSuggestions(ctx, builder) })
                  .executes(executeVisible)
              )
          )
      )

      // ---- spawn_selector invisible <pointId> <team> ----
      .then(
        cmd.literal('invisible')
          .then(
            cmd.argument('pointId', args.STRING.create(event))
              .suggests(function(ctx, builder) { return getPointSuggestions(ctx, builder) })
              .then(
                cmd.argument('team', args.STRING.create(event))
                  .suggests(function(ctx, builder) { return getTeamSuggestions(ctx, builder) })
                  .executes(executeInvisible)
              )
          )
      )

      // ---- spawn_selector list ----
      .then(
        cmd.literal('list')
          .executes(executeList)
      )

      // ---- 默认 → 用法提示 ----
      .executes(function(ctx) {
        let source = ctx.getSource()
        source.sendFailure(Component.translatable('msg.kubejs.spawn_selector.usage'))
        return 0
      })
  )
})
