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
function teleportToRandomAllowPlayer(player) {
  var allowPlayers = getAvailableRespawnPlayers(player.server, player)
  if (allowPlayers.length === 0) {
    player.tell(Text.translate('msg.kubejs.spawn_selector.no_allow_players'))
    return
  }

  var idx = Math.floor(Math.random() * allowPlayers.length)
  var target = allowPlayers[idx]

  try {
    player.server.runCommandSilent(
      'execute as ' + target.player.username + ' at @s run tp ' + player.username + ' ~ ~ ~'
    )
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
  var point = getPlayerSelectedPoint(player)
  if (!point) {
    player.tell(Text.translate('msg.kubejs.spawn_selector.no_point_selected'))
    return
  }
  try {
    player.server.runCommandSilent(
      'execute in ' + point.dimension + ' run tp ' + player.username + ' ' + point.pos
    )
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
  for (; col < 7; col++) {
    gui.slot(col, 2, function(s) { s.setItem(BORDER) })
  }

  // 加入战场按钮（slot 7）
  gui.slot(7, 2, function(slot) {
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

  // ===== Row 3: 底边框 =====
  for (var x = 0; x < 9; x++) {
    gui.slot(x, 3, function(s) { s.setItem(BORDER) })
  }
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
