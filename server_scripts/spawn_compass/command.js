// ============================================================
// 出生点选择器 - 管理员指令
//
// 依赖：config.js（SPAWN_POINTS、getSpawnVisibility、setSpawnVisibility）
//
// 命令：
//   /spawn_selector visible <pointId> <attack|defense|both|none>
//     — 设置指定出生点的可见队伍
//
//   /spawn_selector list
//     — 列出所有出生点及其当前可见性
//
// 配置示例（由数据包调用）：
//   防守方初始可见：/spawn_selector visible A defense
//   进攻方占领后：  /spawn_selector visible A attack
//   禁用：          /spawn_selector visible A none
// ============================================================

ServerEvents.commandRegistry(event => {
  let cmd = event.commands
  let args = event.arguments

  var $StringArgument = Java.loadClass('com.mojang.brigadier.arguments.StringArgumentType')

  // ========== 可见性格式校验 ==========
  const VALID_VISIBILITY = ['attack', 'defense', 'both', 'none']

  function isValidPointId(id) {
    return SPAWN_POINTS.hasOwnProperty(id)
  }

  // ========== 执行 /spawn_selector visible <pointId> <visibility> ==========
  function executeVisible(ctx) {
    let source = ctx.getSource()
    let server = source.getServer()
    let pointId = $StringArgument.getString(ctx, 'pointId').toUpperCase()
    let visibility = $StringArgument.getString(ctx, 'visibility').toLowerCase()

    // 校验出生点ID
    if (!isValidPointId(pointId)) {
      source.sendFailure(Component.translatable('msg.kubejs.spawn_selector.invalid_point', pointId))
      return 0
    }

    // 校验可见性值
    if (VALID_VISIBILITY.indexOf(visibility) === -1) {
      source.sendFailure(Component.translatable('msg.kubejs.spawn_selector.invalid_visibility', visibility))
      return 0
    }

    // 读取当前可见性配置并更新
    var vis = getSpawnVisibility(server)
    vis[pointId] = visibility
    setSpawnVisibility(server, vis)

    var pointName = Text.translate(SPAWN_POINTS[pointId].nameKey).getString()
    source.sendSuccess(
      Component.translatable('msg.kubejs.spawn_selector.visible_set', pointName, '§a' + visibility),
      true
    )
    return 1
  }

  // ========== 执行 /spawn_selector list ==========
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
      var v = vis[id] || 'none'
      var vDisplay = ''
      switch (v) {
        case 'attack':  vDisplay = '§c进攻方'; break
        case 'defense': vDisplay = '§9防守方'; break
        case 'both':    vDisplay = '§a双方';   break
        default:        vDisplay = '§7禁用';   break
      }
      var coords = point.x + ', ' + point.y + ', ' + point.z
      msg = msg.append('\n').append(
        Component.translatable('msg.kubejs.spawn_selector.list_entry',
          Text.translate(point.nameKey),
          vDisplay,
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

      // ---- spawn_selector visible <pointId> <visibility> ----
      .then(
        cmd.literal('visible')
          .then(
            cmd.argument('pointId', args.STRING.create(event))
              .suggests(function(ctx, builder) {
                for (var id in SPAWN_POINTS) {
                  if (SPAWN_POINTS.hasOwnProperty(id)) {
                    builder.suggest(id)
                  }
                }
                return builder.buildFuture()
              })
              .then(
                cmd.argument('visibility', args.STRING.create(event))
                  .suggests(function(ctx, builder) {
                    builder.suggest('attack')
                    builder.suggest('defense')
                    builder.suggest('both')
                    builder.suggest('none')
                    return builder.buildFuture()
                  })
                  .executes(executeVisible)
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
