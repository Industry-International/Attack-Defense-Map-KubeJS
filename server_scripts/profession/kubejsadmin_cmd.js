// ============================================================
// KubeJSAdmin - 管理指令（i18n 规范，Brigadier 版）
// 清空玩家的职业选择/队伍配置 + 职业标签
// ============================================================
// 指令格式: /kubejsadmin <profession|menu> <targets>
// 示例:     /kubejsadmin profession @a   — 清空职业选择 + 移除标签
//           /kubejsadmin menu @a        — 清空队伍配置
// 权限:     仅 OP 2 级
// 来源:     控制台 / 命令方块 / 数据包 / 玩家
// ============================================================
// PROF_TAG_LIST 已迁移至 config/a_tacz_config.js（共享定义）

var $EntityArgument = Java.loadClass('net.minecraft.commands.arguments.EntityArgument')

ServerEvents.commandRegistry(event => {
  var cmd = event.commands
  var args = event.arguments

  event.register(
    cmd.literal('kubejsadmin')
      .requires(function(s) { return s.hasPermission(2) })

      // ---- profession ----
      .then(
        cmd.literal('profession')
          .then(
            cmd.argument('targets', args.PLAYERS.create(event))
              .executes(function(ctx) {
                var source = ctx.getSource()
                var targets = $EntityArgument.getPlayers(ctx, 'targets') // Collection<ServerPlayer>
                var server = source.getServer()
                var iterator = targets.iterator()
                var count = 0
                while (iterator.hasNext()) {
                  var p = iterator.next()
                  // 移除职业标签（通过原版指令确保 /tag 可见）
                  PROF_TAG_LIST.forEach(function(tag) { server.runCommandSilent('tag ' + p.username + ' remove ' + tag) })
                  // 清除选中状态
                  delete p.persistentData.profession
                  delete p.persistentData.mainWeapon
                  delete p.persistentData.offhandWeapon
                  delete p.persistentData.specialWeapon
                  count++
                }
                source.sendSuccess(Component.translatable('msg.kubejsadmin.clear.profession', String(count)), true)
                return count
              })
          )
      )

      // ---- menu ----
      .then(
        cmd.literal('menu')
          .then(
            cmd.argument('targets', args.PLAYERS.create(event))
              .executes(function(ctx) {
                var source = ctx.getSource()
                var targets = $EntityArgument.getPlayers(ctx, 'targets')
                var iterator = targets.iterator()
                var count = 0
                while (iterator.hasNext()) {
                  var p = iterator.next()
                  delete p.persistentData.team
                  count++
                }
                source.sendSuccess(Component.translatable('msg.kubejsadmin.clear.menu', String(count)), true)
                return count
              })
          )
      )

      // ---- 默认 → 用法提示 ----
      .executes(function(ctx) {
        var source = ctx.getSource()
        source.sendFailure(Component.translatable('msg.kubejsadmin.usage'))
        return 0
      })
  )
})
