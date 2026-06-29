// ============================================================
// 出生点选择器 - 右键物品 GUI（箱子GUI · i18n 规范）
//
// 依赖：config.js（全局函数 + SPAWN_POINTS）
//
// 布局（4行）：
//   行0: 淡黄玻璃边框（顶）
//   行1: 边框 | 退出 | 标题 | 允许开关 | 当前选择 | 随机传送 | 边框
//   行2: 边框 | 出生点一字排开 | ⚔加入战场 | 边框
//   行3: 淡黄玻璃边框（底）
// ============================================================

// ========== 边框填充物 ==========
const BORDER = Item.of('minecraft:yellow_stained_glass_pane').withCustomName(Component.literal(''))

// ========== 死亡冷却（内存，不持久化）==========
const SPAWN_DEATH_COOLDOWN_SECONDS = 5          // 冷却时长：5秒
var DEATH_TIME_MAP = {}                         // { username: gameTime }

/**
 * 获取玩家所属的原版计分板队伍名
 * @returns {string|null} 队伍名（小写），无队伍返回 null
 */
function getPlayerTeamTag(player) {
  try {
    var scoreboard = player.server.getScoreboard()
    var team = scoreboard.getPlayersTeam(player.username)
    if (!team) return null
    return team.getName().toLowerCase()
  } catch(e) {
    return null
  }
}

/**
 * 获取玩家当前选择的出生点ID
 * @returns {string|null}
 */
function getPlayerSelectedId(player) {
  var id = player.persistentData.getString(SPAWN_SELECTED_KEY)
  return (id && id !== '') ? id : null
}

/**
 * 随机传送到一名允许复活的玩家附近
 */
function isDeathCooldown(player) {
  var deathTime = DEATH_TIME_MAP[player.username]
  if (!deathTime) return false // 未死亡或已过期
  var elapsed = Date.now() - deathTime // 毫秒
  var cooldownMs = SPAWN_DEATH_COOLDOWN_SECONDS * 1000
  if (elapsed >= cooldownMs) {
    delete DEATH_TIME_MAP[player.username] // 冷却结束
    return false
  }
  // 冷却中：计算剩余秒数并发title
  var remaining = Math.ceil((cooldownMs - elapsed) / 1000)
  var pName = player.username
  player.server.scheduleInTicks(8, function() {
    player.server.runCommandSilent('title ' + pName + ' title {"translate":"msg.kubejs.spawn_selector.death_cooldown","with":["' + remaining + '"],"color":"red","bold":true}')
  })
  return true
}

/**
 * 随机传送到一名允许复活的玩家附近
 */
function teleportToRandomAllowPlayer(player) {
  // 未选择职业禁止传送
  if (!player.persistentData.profession) {
    var pName = player.username
    console.log('[出生点选择器] ' + pName + ' 未选择职业，阻止传送，20tick后发title')
    player.server.scheduleInTicks(8, function() {
      console.log('[出生点选择器] 执行title命令: title ' + pName + ' title {"text":"你未选择职业","color":"gold","bold":true}')
      player.server.runCommandSilent('title ' + pName + ' title {"text":"你未选择职业","color":"gold","bold":true}')
    })
    return
  }

  // 死亡冷却检查
  if (isDeathCooldown(player)) return

  var myTeam = getPlayerTeamTag(player)
  var allowPlayers = getAvailableRespawnPlayers(player.server, player)
  // 只保留同队玩家
  var teamPlayers = []
  for (var i = 0; i < allowPlayers.length; i++) {
    if (allowPlayers[i].team === myTeam) teamPlayers.push(allowPlayers[i])
  }
  if (teamPlayers.length === 0) {
    player.tell(Text.translate('msg.kubejs.spawn_selector.no_team_players'))
    return
  }

  var idx = Math.floor(Math.random() * teamPlayers.length)
  var target = teamPlayers[idx]

  try {
    player.server.runCommandSilent(
      'execute as ' + target.player.username + ' at @s run tp ' + player.username + ' ~ ~ ~'
    )
    player.server.runCommandSilent('tag ' + player.username + ' add yes_start_1')
    player.tell(Text.translate('msg.kubejs.spawn_selector.teleported_to', target.player.getName()))
    player.runCommandSilent('playsound minecraft:entity.enderman.teleport master ' + player.username + ' ~ ~ ~ 1 1')
  } catch(e) {
    console.log('[出生点选择器] 随机传送失败: ' + e)
    player.tell(Component.literal('§c传送失败'))
  }
}

/**
 * 传送到玩家已选择的出生点
 */
function teleportToSelectedPoint(player) {
  // 未选择职业禁止传送
  if (!player.persistentData.profession) {
    var pName = player.username
    console.log('[出生点选择器] ' + pName + ' 未选择职业，阻止加入战场，20tick后发title')
    player.server.scheduleInTicks(8, function() {
      console.log('[出生点选择器] 执行title命令: title ' + pName + ' title {"text":"你未选择职业","color":"gold","bold":true}')
      player.server.runCommandSilent('title ' + pName + ' title {"text":"你未选择职业","color":"gold","bold":true}')
    })
    return
  }

  // 死亡冷却检查
  if (isDeathCooldown(player)) return

  var point = getPlayerSelectedPoint(player)
  if (!point) {
    player.tell(Text.translate('msg.kubejs.spawn_selector.no_point_selected'))
    return
  }
  try {
    player.server.runCommandSilent(
      'execute in ' + point.dimension + ' run tp ' + player.username + ' ' + point.pos
    )
    player.server.runCommandSilent('tag ' + player.username + ' add yes_start_1')
    // 延迟2tick发装备，避免传送快照覆盖装备快照
    var pName = player.username
    var pServer = player.server
    player.server.scheduleInTicks(8, function() {
      pServer.runCommandSilent('profequip give ' + pName)
    })
    player.tell(Text.translate('msg.kubejs.spawn_selector.teleported'))
    player.runCommandSilent('playsound minecraft:entity.enderman.teleport master ' + player.username + ' ~ ~ ~ 1 1')
  } catch(e) {
    console.log('[出生点选择器] 加入战场传送失败: ' + e)
    player.tell(Component.literal('§c传送失败'))
  }
}

// ========== 渲染主页面 ==========

function renderSpawnSelector(gui, player) {
  var teamTag = getPlayerTeamTag(player)
  var selectedId = getPlayerSelectedId(player)
  var allowRespawn = isPlayerAllowRespawn(player)
  var currentPoint = selectedId ? (SPAWN_POINTS[selectedId] || null) : null

  // ===== Row 0: 顶边框 =====
  for (var x = 0; x < 9; x++) {
    gui.slot(x, 0, function(s) { s.setItem(BORDER) })
  }

  // ===== Row 1: 功能行 =====
  // 边框
  gui.slot(0, 1, function(s) { s.setItem(BORDER) })
  gui.slot(8, 1, function(s) { s.setItem(BORDER) })

  // 退出
  gui.slot(1, 1, function(slot) {
    slot.setItem(
      Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.spawn_selector.exit'))
    )
    slot.setLeftClicked(function() { player.closeMenu() })
  })

  // 标题
  gui.slot(3, 1, function(slot) {
    slot.setItem(
      Item.of('minecraft:compass').withCustomName(Text.translate('gui.kubejs.spawn_selector.title'))
    )
  })

  // 允许他人复活开关（紧凑放在标题行）
  if (allowRespawn) {
    gui.slot(4, 1, function(slot) {
      slot.setItem(
        Item.of('minecraft:lime_dye')
          .withCustomName(Text.translate('gui.kubejs.spawn_selector.allow_respawn.on'))
      )
      slot.setLeftClicked(function() {
        setPlayerAllowRespawn(player, false)
        player.runCommandSilent('playsound minecraft:block.lever.click master ' + player.username + ' ~ ~ ~ 0.5 2')
        player.closeMenu()
        openSpawnSelector(player)
      })
    })
  } else {
    gui.slot(4, 1, function(slot) {
      slot.setItem(
        Item.of('minecraft:gray_dye')
          .withCustomName(Text.translate('gui.kubejs.spawn_selector.allow_respawn.off'))
      )
      slot.setLeftClicked(function() {
        setPlayerAllowRespawn(player, true)
        player.runCommandSilent('playsound minecraft:block.lever.click master ' + player.username + ' ~ ~ ~ 0.5 2')
        player.closeMenu()
        openSpawnSelector(player)
      })
    })
  }

  // 当前选择
  gui.slot(5, 1, function(slot) {
    if (currentPoint) {
      slot.setItem(
        Item.of('minecraft:ender_eye')
          .withCustomName(Text.translate('gui.kubejs.spawn_selector.current'))
          .withLore([Text.translate(currentPoint.nameKey)])
      )
    } else {
      slot.setItem(
        Item.of('minecraft:ender_eye')
          .withCustomName(Text.translate('gui.kubejs.spawn_selector.current_none'))
      )
    }
  })

  // 随机传送按钮
  gui.slot(7, 1, function(slot) {
    slot.setItem(
      Item.of('minecraft:ender_pearl')
        .withCustomName(Text.translate('gui.kubejs.spawn_selector.random_teleport'))
        .withLore([Text.translate('gui.kubejs.spawn_selector.random_teleport.lore')])
    )
    slot.setLeftClicked(function() {
      player.closeMenu()
      teleportToRandomAllowPlayer(player)
    })
  })

  // ===== Row 2: 出生点一字排开 =====
  gui.slot(0, 2, function(s) { s.setItem(BORDER) })
  gui.slot(8, 2, function(s) { s.setItem(BORDER) })

  var visiblePoints = []
  if (teamTag) {
    visiblePoints = getVisiblePoints(player.server, teamTag)
  }

  // 从 slot 1 开始依次摆放出生点
  var col = 1
  for (var i = 0; i < visiblePoints.length && col < 8; i++) {
    var pt = visiblePoints[i]
    var isSelected = (selectedId === pt.key)

    gui.slot(col, 2, function(slot) {
      var item = Item.of('minecraft:map')
        .withCustomName(Text.translate(pt.nameKey))
        .withLore([Component.literal('§7' + pt.pos)])
      if (isSelected) {
        item = item.set('minecraft:enchantment_glint_override', true)
          .withLore([
            Text.translate('gui.kubejs.spawn_selector.selected_mark'),
            Component.literal('§7' + pt.pos)
          ])
      }
      slot.setItem(item)

      slot.setLeftClicked(function() {
        if (isSelected) {
          setPlayerSelectedPoint(player, null)
          player.runCommandSilent('playsound minecraft:entity.villager.no master ' + player.username + ' ~ ~ ~ 0.5 1')
        } else {
          setPlayerSelectedPoint(player, pt.key)
          player.runCommandSilent('playsound minecraft:entity.experience_orb.pickup master ' + player.username + ' ~ ~ ~ 0.5 1')
        }
        player.closeMenu()
        openSpawnSelector(player)
      })
    })
    col++
  }

  // 剩余格子填边框
  for (; col < 8; col++) {
    gui.slot(col, 2, function(s) { s.setItem(BORDER) })
  }

  // ===== Row 3: 底边框（右下角放加入战场）=====
  for (var x = 0; x < 6; x++) {
    gui.slot(x, 3, function(s) { s.setItem(BORDER) })
  }
  gui.slot(6, 3, function(s) { s.setItem(BORDER) })
  // 右下角
  gui.slot(7, 3, function(slot) {
    slot.setItem(
      Item.of('minecraft:iron_sword')
        .withCustomName(Text.translate('gui.kubejs.spawn_selector.join_battle'))
        .withLore([Text.translate('gui.kubejs.spawn_selector.join_battle.lore')])
    )
    slot.setLeftClicked(function() {
      player.closeMenu()
      teleportToSelectedPoint(player)
    })
  })
  gui.slot(8, 3, function(s) { s.setItem(BORDER) })
}

// ========== 打开 GUI ==========

function openSpawnSelector(player) {
  player.openChestGUI(
    Text.translate('gui.kubejs.spawn_selector.title'),
    4,
    function(gui) {
      renderSpawnSelector(gui, player)
    }
  )
}
