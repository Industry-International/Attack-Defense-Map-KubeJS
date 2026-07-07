// ============================================================
// 职业数据管理指令 — 第三方全局存储（开关/备份/恢复）
// 指令: /profession storage <on|off|status>
//       /profession backup [<targets>]
//       /profession restore [<targets>]
// 权限: 仅 OP 2 级
// 来源: 控制台 / 命令方块 / 数据包 / 玩家
// ============================================================
// 依赖 c_storage.js 中的函数:
//   setExternalStorageEnabled, backupAllOnline, backupPlayer,
//   restorePlayer, getExternalStorageStats, isExternalStorageEnabled
//   PROF_CONFIG_PATH, PROF_PLAYERDATA_SUBDIR
// ============================================================

var $EntityArgument = Java.loadClass('net.minecraft.commands.arguments.EntityArgument')

ServerEvents.commandRegistry(event => {
  var cmd = event.commands
  var args = event.arguments

  event.register(
    cmd.literal('profession')
      .requires(function(s) { return s.hasPermission(2) })

      // ---- storage (开关管理) ----
      .then(
        cmd.literal('storage')
          .then(
            cmd.literal('on')
              .executes(function(ctx) {
                var source = ctx.getSource()
                var server = source.getServer()
                setExternalStorageEnabled(server, true)
                source.sendSuccess(Component.literal('§a[职业存储] 第三方全局存储已启用，定时备份已启动'), true)
                var count = backupAllOnline(server)
                source.sendSuccess(Component.literal('§7已备份 ' + count + ' 名在线玩家'), false)
                return 1
              })
          )
          .then(
            cmd.literal('off')
              .executes(function(ctx) {
                var source = ctx.getSource()
                var server = source.getServer()
                setExternalStorageEnabled(server, false)
                source.sendSuccess(Component.literal('§c[职业存储] 第三方全局存储已禁用'), true)
                return 1
              })
          )
          .then(
            cmd.literal('status')
              .executes(function(ctx) {
                var source = ctx.getSource()
                var server = source.getServer()
                var stats = getExternalStorageStats(server)
                source.sendSuccess(Component.literal('§6===== 职业存储状态 ====='), false)
                var statusIcon = stats.enabled ? '§a开启' : '§c关闭'
                var configStatus = ''
                if (stats.fileConfig === null) configStatus = '§7(无 config.json)'
                else if (stats.fileConfig === stats.enabled) configStatus = '§a一致'
                else configStatus = '§e不一致'
                source.sendSuccess(
                  Component.literal('§e开关: ' + statusIcon + ' §7(config.json: ' + configStatus + '§7)'), false)
                source.sendSuccess(
                  Component.literal('§e在线玩家: §f' + stats.onlineCount + ' §7/ §e已备份: §f' + stats.backedCount), false)
                source.sendSuccess(Component.literal('§7配置文件: §f' + PROF_CONFIG_PATH), false)
                source.sendSuccess(Component.literal('§7玩家数据: §f' + PROF_PLAYERDATA_SUBDIR + '/'), false)
                return 1
              })
          )
          .executes(function(ctx) {
            var source = ctx.getSource()
            source.sendFailure(Component.literal('§c用法: /profession storage <on|off|status>'))
            return 0
          })
      )

      // ---- backup (手动备份) ----
      .then(
        cmd.literal('backup')
          .then(
            cmd.argument('targets', args.PLAYERS.create(event))
              .executes(function(ctx) {
                var source = ctx.getSource()
                var targets = $EntityArgument.getPlayers(ctx, 'targets')
                var iterator = targets.iterator()
                var count = 0
                while (iterator.hasNext()) {
                  if (backupPlayer(iterator.next())) count++
                }
                source.sendSuccess(Component.literal('§a已备份 ' + count + ' 名玩家'), true)
                return count
              })
          )
          .executes(function(ctx) {
            var source = ctx.getSource()
            var player = source.getPlayer()
            if (!player) {
              source.sendFailure(Component.literal('§c控制台必须指定目标: /profession backup <targets>'))
              return 0
            }
            var ok = backupPlayer(player)
            source.sendSuccess(Component.literal(ok ? '§a已备份你的职业数据' : '§c备份失败'), true)
            return ok ? 1 : 0
          })
      )

      // ---- restore (手动恢复) ----
      .then(
        cmd.literal('restore')
          .then(
            cmd.argument('targets', args.PLAYERS.create(event))
              .executes(function(ctx) {
                var source = ctx.getSource()
                var targets = $EntityArgument.getPlayers(ctx, 'targets')
                var iterator = targets.iterator()
                var count = 0
                while (iterator.hasNext()) {
                  if (restorePlayer(iterator.next())) count++
                }
                source.sendSuccess(Component.literal('§a已恢复 ' + count + ' 名玩家的数据'), true)
                return count
              })
          )
          .executes(function(ctx) {
            var source = ctx.getSource()
            var player = source.getPlayer()
            if (!player) {
              source.sendFailure(Component.literal('§c控制台必须指定目标: /profession restore <targets>'))
              return 0
            }
            var ok = restorePlayer(player)
            source.sendSuccess(Component.literal(ok ? '§a已从备份恢复你的职业数据' : '§7无备份数据可恢复'), true)
            return ok ? 1 : 0
          })
      )

      // ---- 默认 → 用法提示 ----
      .executes(function(ctx) {
        var source = ctx.getSource()
        source.sendSuccess(Component.literal('§6===== /profession 帮助 ====='), false)
        source.sendSuccess(Component.literal('§e/profession storage <on|off|status>  §7— 第三方全局存储开关'), false)
        source.sendSuccess(Component.literal('§e/profession backup [<targets>]        §7— 手动备份玩家职业数据'), false)
        source.sendSuccess(Component.literal('§e/profession restore [<targets>]       §7— 手动恢复玩家职业数据'), false)
        source.sendSuccess(Component.literal('§7目标支持: @a @p @s @r <玩家名>，留空=自己'), false)
        return 1
      })
  )
})
