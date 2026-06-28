// ============================================================
// 出生点选择器 - 重生选择 GUI（箱子GUI · i18n 规范）
//
// 依赖：config.js（全局函数 + SPAWN_POINTS）
//
// 玩家死亡并点击重生后自动打开此 GUI，
// 提供以下选项：
//   1. 传送到自己已选择的出生点
//   2. 传送到某个允许他人复活的玩家附近
//   3. 跳过（留在当前重生点）
//
// 传送由玩家手动点击触发，不自动传送。
// ============================================================

const RESPAWN_PANE = {
  black: Item.of('minecraft:black_stained_glass_pane').withCustomName(Component.literal('')),
  gray:  Item.of('minecraft:gray_stained_glass_pane').withCustomName(Component.literal('')),
}

// ========== 传送函数 ==========

/**
 * 将玩家传送到指定坐标
 */
function teleportPlayerTo(player, dimension, x, y, z) {
  try {
    player.server.runCommandSilent(
      'execute in ' + dimension + ' run tp ' + player.username + ' ' + x + ' ' + y + ' ' + z
    )
    player.tell(Text.translate('msg.kubejs.spawn_selector.teleported'))
  } catch(e) {
    console.log('[出生点选择器] 传送失败: ' + e)
    player.tell(Component.literal('§c传送失败，请重试'))
  }
}

/**
 * 将玩家传送到另一个玩家附近
 */
function teleportPlayerToPlayer(player, targetPlayer) {
  try {
    // 以目标玩家为锚点传送
    player.server.runCommandSilent(
      'execute as ' + targetPlayer.username + ' at @s run tp ' + player.username + ' ~ ~ ~'
    )
    player.tell(Text.translate('msg.kubejs.spawn_selector.teleported_to', targetPlayer.getName()))
  } catch(e) {
    console.log('[出生点选择器] 传送到玩家失败: ' + e)
    player.tell(Component.literal('§c传送失败，目标玩家可能已离线'))
  }
}

// ========== 渲染重生选择 GUI ==========

function renderRespawnSelect(gui, player) {
  var selectedPoint = getPlayerSelectedPoint(player)
  var allowPlayers = getAvailableRespawnPlayers(player.server, player)

  // Row 0: 标题
  // 用 barrier 做关闭，但重生场景下不设退出（必须选一个）
  for (var x = 0; x < 9; x++) {
    gui.slot(x, 0, function(s) { s.setItem(RESPAWN_PANE.black) })
  }
  gui.slot(4, 0, function(slot) {
    slot.setItem(
      Item.of('minecraft:compass').withCustomName(Text.translate('gui.kubejs.spawn_selector.respawn_title'))
    )
  })

  // Row 1: 已选择的出生点（如果有）
  if (selectedPoint) {
    // Slot 2-3: 出生点信息
    gui.slot(2, 1, function(slot) {
      slot.setItem(
        Item.of('minecraft:map')
          .withCustomName(Text.translate(selectedPoint.nameKey))
          .withLore([
            Text.translate('gui.kubejs.spawn_selector.respawn_current_point'),
            Component.literal('§7' + selectedPoint.x + ', ' + selectedPoint.y + ', ' + selectedPoint.z)
          ])
      )
    })

    // Slot 6: 传送按钮
    gui.slot(6, 1, function(slot) {
      slot.setItem(
        Item.of('minecraft:ender_pearl')
          .withCustomName(Text.translate('gui.kubejs.spawn_selector.respawn_teleport_btn'))
          .withLore([Text.translate('gui.kubejs.spawn_selector.respawn_teleport_btn.lore')])
      )
      slot.setLeftClicked(function() {
        player.closeMenu()
        teleportPlayerTo(player, selectedPoint.dimension, selectedPoint.x, selectedPoint.y, selectedPoint.z)
      })
    })
  } else {
    // 未选择出生点 → 显示提示
    gui.slot(4, 1, function(slot) {
      slot.setItem(
        Item.of('minecraft:barrier')
          .withCustomName(Text.translate('gui.kubejs.spawn_selector.respawn_no_point'))
          .withLore([Text.translate('gui.kubejs.spawn_selector.respawn_no_point.lore')])
      )
    })
  }

  // Row 2: 分隔线
  for (var x = 0; x < 9; x++) {
    gui.slot(x, 2, function(s) { s.setItem(RESPAWN_PANE.gray) })
  }

  // Row 3: 可复活的玩家列表
  if (allowPlayers.length > 0) {
    var col = 0
    // 最多显示 7 个玩家（slot 1-7）
    var maxSlots = Math.min(allowPlayers.length, 7)
    for (var i = 0; i < maxSlots; i++) {
      var ap = allowPlayers[i]
      var teamPrefix = ap.team ? '§7[' + ap.team + '] ' : ''
      gui.slot(col + 1, 3, function(slot) {
        slot.setItem(
          Item.of('minecraft:player_head')
            .withCustomName(Component.literal('§b' + ap.name))
            .withLore([
              Text.translate('gui.kubejs.spawn_selector.respawn_click_to_teleport'),
              teamPrefix ? Component.literal(teamPrefix) : null
            ].filter(Boolean))
        )
        slot.setLeftClicked(function() {
          player.closeMenu()
          teleportPlayerToPlayer(player, ap.player)
        })
      })
      col++
    }
    // 剩余格子填黑玻璃
    for (; col < 7; col++) {
      gui.slot(col + 1, 3, function(s) { s.setItem(RESPAWN_PANE.black) })
    }
  } else {
    // 没有玩家允许他人复活
    gui.slot(4, 3, function(slot) {
      slot.setItem(
        Item.of('minecraft:gray_dye')
          .withCustomName(Text.translate('gui.kubejs.spawn_selector.respawn_no_players'))
          .withLore([Text.translate('gui.kubejs.spawn_selector.respawn_no_players.lore')])
      )
    })
    // 填满行
    for (var x = 0; x < 9; x++) {
      if (x === 4) continue
      gui.slot(x, 3, function(s) { s.setItem(RESPAWN_PANE.black) })
    }
  }

  // Row 4: 跳过按钮（留在当前重生点）
  for (var x = 0; x < 9; x++) {
    gui.slot(x, 4, function(s) { s.setItem(RESPAWN_PANE.black) })
  }
  gui.slot(4, 4, function(slot) {
    slot.setItem(
      Item.of('minecraft:oak_door')
        .withCustomName(Text.translate('gui.kubejs.spawn_selector.respawn_skip'))
        .withLore([Text.translate('gui.kubejs.spawn_selector.respawn_skip.lore')])
    )
    slot.setLeftClicked(function() {
      player.closeMenu()
      player.tell(Text.translate('msg.kubejs.spawn_selector.skip'))
    })
  })
}

// ========== 打开重生选择 GUI ==========

function openRespawnSelect(player) {
  // 延迟 1 tick 打开，确保玩家已完成重生
  player.server.scheduleInTicks(1, function() {
    player.openChestGUI(
      Text.translate('gui.kubejs.spawn_selector.respawn_title'),
      5,
      function(gui) {
        renderRespawnSelect(gui, player)
      }
    )
  })
}
