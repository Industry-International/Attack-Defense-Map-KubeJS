// ============================================================
// KubeJSAdmin - 管理指令（i18n 规范）
// 清空所有玩家的职业选择或队伍配置
// ============================================================
// 指令格式: /kubejsadmin <profession|menu> <targets>
// 示例:     /kubejsadmin profession @a   — 清空所有在线玩家的职业选择
//           /kubejsadmin menu @a        — 清空所有在线玩家的队伍配置
// 权限:     仅 OP
// ============================================================

ServerEvents.basicCommand('kubejsadmin', event => {
    var player = event.getPlayer()
    if (!player || !player.isOp()) return

    // event.input 是参数部分，不包含指令名
    // 用户输入: /kubejsadmin profession @a
    // input    : "profession @a"
    var args = event.input.split(' ')

    if (args.length < 2) {
        player.tell(Component.translatable('msg.kubejsadmin.usage'))
        return
    }

    var type = args[0].toLowerCase()
    var targetStr = args[1]
    var server = event.getServer()
    var allPlayers = server.getPlayers()
    var targets = []

    // 解析目标选择器
    if (targetStr === '@a') {
        for (var i = 0; i < allPlayers.size(); i++) {
            targets.push(allPlayers.get(i))
        }
    } else if (targetStr === '@p' || targetStr === '@s') {
        targets.push(player)
    } else if (targetStr === '@r') {
        var size = allPlayers.size()
        if (size > 0) {
            var idx = Math.floor(Math.random() * size)
            targets.push(allPlayers.get(idx))
        }
    } else {
        for (var i = 0; i < allPlayers.size(); i++) {
            var p = allPlayers.get(i)
            if (p.getName().getString().equalsIgnoreCase(targetStr)) {
                targets.push(p)
                break
            }
        }
    }

    if (targets.length === 0) {
        player.tell(Component.translatable('msg.kubejsadmin.no_target'))
        return
    }

    var count = 0

    if (type === 'profession') {
        targets.forEach(function(p) {
            delete p.persistentData.profession
            delete p.persistentData.mainWeapon
            delete p.persistentData.offhandWeapon
            count++
        })
        player.tell(Component.translatable('msg.kubejsadmin.clear.profession', count))
    } else if (type === 'menu') {
        targets.forEach(function(p) {
            delete p.persistentData.team
            count++
        })
        player.tell(Component.translatable('msg.kubejsadmin.clear.menu', count))
    } else {
        player.tell(Component.translatable('msg.kubejsadmin.usage'))
    }
})
