// ============================================================
// 出生点选择器 - 右键物品 GUI（箱子GUI · i18n 规范）
//
// 依赖：config.js（全局函数 + SPAWN_POINTS）
//
// 功能：
//   1. 显示当前队伍可见的出生点，点击选择/取消选择
//   2. 随机传送到一名允许复活的玩家附近
//   3. 开关"允许其他玩家复活到我这里"
// ============================================================

// ========== 填充物 ==========
const SPAWN_PANE = {
  black: Item.of('minecraft:black_stained_glass_pane').withCustomName(Component.literal('')),
  gray:  Item.of('minecraft:gray_stained_glass_pane').withCustomName(Component.literal('')),
}

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

  // 随机选一个
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

// ========== 渲染主页面 ==========

function renderSpawnSelector(gui, player) {
  var teamTag = getPlayerTeamTag(player)
  var selectedId = getPlayerSelectedId(player)
  var allowRespawn = isPlayerAllowRespawn(player)

  // Row 0: 退出 / 标题 / 当前选择
  gui.slot(0, 0, function(slot) {
    slot.setItem(
      Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.spawn_selector.exit'))
    )
    slot.setLeftClicked(function() { player.closeMenu() })
  })

  gui.slot(4, 0, function(slot) {
    slot.setItem(
      Item.of('minecraft:compass').withCustomName(Text.translate('gui.kubejs.spawn_selector.title'))
    )
  })

  // 当前选择的出生点
  var currentPoint = selectedId ? (SPAWN_POINTS[selectedId] || null) : null
  gui.slot(8, 0, function(slot) {
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

  // Row 1: 分隔线
  for (var x = 0; x < 9; x++) {
    gui.slot(x, 1, function(s) { s.setItem(SPAWN_PANE.gray) })
  }

  // Row 2: 出生点列表（按队伍过滤）
  var visiblePoints = []
  if (teamTag) {
    visiblePoints = getVisiblePoints(player.server, teamTag)
  }

  var col = 0
  for (var i = 0; i < visiblePoints.length && col < 9; i++) {
    var pt = visiblePoints[i]
    var isSelected = (selectedId === pt.id)

    gui.slot(col, 2, function(slot) {
      var item = Item.of('minecraft:map')
        .withCustomName(Text.translate(pt.nameKey))
        .withLore([
          Text.translate('gui.kubejs.spawn_selector.click_to_select'),
          Component.literal('§7' + pt.x + ', ' + pt.y + ', ' + pt.z)
        ])
      if (isSelected) {
        item = item.set('minecraft:enchantment_glint_override', true)
          .withLore([
            Text.translate('gui.kubejs.spawn_selector.selected_mark'),
            Component.literal('§7' + pt.x + ', ' + pt.y + ', ' + pt.z)
          ])
      }
      slot.setItem(item)

      slot.setLeftClicked(function() {
        if (isSelected) {
          setPlayerSelectedPoint(player, null)
          player.runCommandSilent('playsound minecraft:entity.villager.no master ' + player.username + ' ~ ~ ~ 0.5 1')
        } else {
          setPlayerSelectedPoint(player, pt.id)
          player.runCommandSilent('playsound minecraft:entity.experience_orb.pickup master ' + player.username + ' ~ ~ ~ 0.5 1')
        }
        player.closeMenu()
        openSpawnSelector(player)
      })
    })
    col++
  }

  // 剩余格子填黑玻璃
  for (; col < 9; col++) {
    gui.slot(col, 2, function(s) { s.setItem(SPAWN_PANE.black) })
  }

  // Row 3: 随机传送到允许复活的玩家
  gui.slot(4, 3, function(slot) {
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

  // Row 4: 分隔线
  for (var x = 0; x < 9; x++) {
    gui.slot(x, 4, function(s) { s.setItem(SPAWN_PANE.gray) })
  }

  // Row 5: 允许他人复活开关
  if (allowRespawn) {
    gui.slot(4, 5, function(slot) {
      slot.setItem(
        Item.of('minecraft:lime_dye')
          .withCustomName(Text.translate('gui.kubejs.spawn_selector.allow_respawn.on'))
          .withLore([Text.translate('gui.kubejs.spawn_selector.allow_respawn.on.lore')])
      )
      slot.setLeftClicked(function() {
        setPlayerAllowRespawn(player, false)
        player.runCommandSilent('playsound minecraft:block.lever.click master ' + player.username + ' ~ ~ ~ 0.5 2')
        player.closeMenu()
        openSpawnSelector(player)
      })
    })
  } else {
    gui.slot(4, 5, function(slot) {
      slot.setItem(
        Item.of('minecraft:gray_dye')
          .withCustomName(Text.translate('gui.kubejs.spawn_selector.allow_respawn.off'))
          .withLore([Text.translate('gui.kubejs.spawn_selector.allow_respawn.off.lore')])
      )
      slot.setLeftClicked(function() {
        setPlayerAllowRespawn(player, true)
        player.runCommandSilent('playsound minecraft:block.lever.click master ' + player.username + ' ~ ~ ~ 0.5 2')
        player.closeMenu()
        openSpawnSelector(player)
      })
    })
  }
}

// ========== 打开 GUI ==========

function openSpawnSelector(player) {
  player.openChestGUI(
    Text.translate('gui.kubejs.spawn_selector.title'),
    6,
    function(gui) {
      renderSpawnSelector(gui, player)
    }
  )
}
