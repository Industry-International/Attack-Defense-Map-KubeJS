// ============================================================
// 队伍系统 - 友伤保护 & 队友发光 & 指令进队
// ============================================================

var GLOW_DURATION = 300
var GLOW_REFRESH_INTERVAL = 100
var ATTACK_TEAM = 'attack'
var DEFENSE_TEAM = 'defense'
var NO_TEAM = 'none'

function getTeam(p) { return p.persistentData.team || NO_TEAM }
function setTeam(p, t) { p.persistentData.team = t }

function isOnSameTeam(a, b) {
    var teamA = getTeam(a)
    var teamB = getTeam(b)
    return teamA !== NO_TEAM && teamA === teamB
}

function isPlayer(entity) {
    return entity && entity.isPlayer()
}

// ---------- 1. 友伤保护 ----------
EntityEvents.beforeHurt(function(event) {
    var entity = event.entity
    var source = event.source
    if (!isPlayer(entity)) return
    var attacker = source.getActual()
    if (!isPlayer(attacker)) return
    if (isOnSameTeam(entity, attacker)) {
        event.cancel()
        attacker.tell(Component.string('§c⛔ 无法攻击队友！'))
    }
})

// ---------- 2. 队友发光 ----------
var glowTickCounter = 0

PlayerEvents.tick(function(event) {
    var player = event.player
    var myTeam = getTeam(player)
    if (myTeam === NO_TEAM) return

    glowTickCounter++
    if (glowTickCounter < GLOW_REFRESH_INTERVAL) return
    glowTickCounter = 0

    var server = player.getServer()
    if (!server) return

    var allPlayers = server.getPlayers()
    for (var i = 0; i < allPlayers.size(); i++) {
        var otherPlayer = allPlayers.get(i)
        if (isOnSameTeam(player, otherPlayer)) {
            otherPlayer.potionEffects.add('minecraft:glowing', GLOW_DURATION, 0, true, false)
        }
    }
})

// ---------- 3. 注册指令 ----------
ServerEvents.commandRegistry(function(event) {
    var cmd = event.commands

    // /battle join attack
    var attackCmd = cmd.literal('attack').executes(function(ctx) {
        var player = ctx.source.player
        setTeam(player, ATTACK_TEAM)
        player.tell(Component.string('§a✔ 已加入 §c⚔ 进攻方§a！'))
        return 1
    })

    // /battle join defense
    var defenseCmd = cmd.literal('defense').executes(function(ctx) {
        var player = ctx.source.player
        setTeam(player, DEFENSE_TEAM)
        player.tell(Component.string('§a✔ 已加入 §9🛡 防守方§a！'))
        return 1
    })

    // /battle join
    var joinCmd = cmd.literal('join')
        .then(attackCmd)
        .then(defenseCmd)

    // /battle leave
    var leaveCmd = cmd.literal('leave').executes(function(ctx) {
        var player = ctx.source.player
        setTeam(player, NO_TEAM)
        player.tell(Component.string('§e✔ 已退出队伍'))
        return 1
    })

    // /battle info
    var infoCmd = cmd.literal('info').executes(function(ctx) {
        var player = ctx.source.player
        var t = getTeam(player)
        var name = t === ATTACK_TEAM ? '§c⚔ 进攻方'
                 : t === DEFENSE_TEAM ? '§9🛡 防守方'
                 : '§7未选择'
        player.tell(Component.string('§6当前队伍: ' + name))
        return 1
    })

    // /battle (vanilla)
    var battleCmd = cmd.literal('battle')
        .then(joinCmd)
        .then(leaveCmd)
        .then(infoCmd)
        .executes(function(ctx) {
            var player = ctx.source.player
            var t = getTeam(player)
            var name = t === ATTACK_TEAM ? '§c⚔ 进攻方'
                     : t === DEFENSE_TEAM ? '§9🛡 防守方'
                     : '§7未选择'
            player.tell(Component.string('§6当前队伍: ' + name))
            return 1
        })

    // 注册 /battle
    event.register(battleCmd)

    // 注册别名 /bt → 同样的子命令
    var btCmd = cmd.literal('bt')
        .then(joinCmd)
        .then(leaveCmd)
        .then(infoCmd)
        .executes(function(ctx) {
            var player = ctx.source.player
            var t = getTeam(player)
            var name = t === ATTACK_TEAM ? '§c⚔ 进攻方'
                     : t === DEFENSE_TEAM ? '§9🛡 防守方'
                     : '§7未选择'
            player.tell(Component.string('§6当前队伍: ' + name))
            return 1
        })

    event.register(btCmd)
})
