// ============================================================
// 队伍选择器 - GUI 交互（服务端 · i18n 规范）
// 仿照 profession_gui.js 模式，使用 gui.slot API
// 点击加入/离开队伍通过数据包 function 处理（以玩家身份运行）
// 显示状态仍从 persistentData.team 读取（由数据包 function 维护）
// 翻译定义在 assets/kubejs/lang/{en_us,zh_cn}.json 中
// ============================================================

// ========== UI 组件 ==========

function filler(color) {
  return Item.of(color).withCustomName(Component.literal(''))
}
const PANE = {
  black: filler('minecraft:black_stained_glass_pane'),
  gray:  filler('minecraft:gray_stained_glass_pane'),
}

const TEAM_ATTACK    = 'attack'
const TEAM_DEFENSE   = 'defense'
const TEAM_SPECTATOR = 'spectator'
const TEAM_NONE      = 'none'

/** 以玩家身份运行数据包 function */
function runTeamFunction(player, functionPath) {
  player.server.runCommandSilent('execute as ' + player.username + ' run function ' + functionPath)
}

/** 从 persistentData.team 读取当前队伍（由数据包 function 维护） */
function getPlayerTeam(player) {
  return player.persistentData.team || TEAM_NONE
}

// ========== 队伍选择页渲染 ==========

function renderTeamSelect(gui, player, openPage) {
  var current = getPlayerTeam(player)

  // Row 0: 返回 / 标题 / 退出
  gui.slot(0, 0, function(slot) {
    slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.team_select.back')))
    slot.setLeftClicked(function() { player.closeMenu() })
  })
  gui.slot(4, 0, function(slot) {
    slot.setItem(Item.of('minecraft:feather').withCustomName(Text.translate('gui.kubejs.team_select.title')))
  })
  gui.slot(8, 0, function(slot) {
    slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.team_select.exit')))
    slot.setLeftClicked(function() { player.closeMenu() })
  })

  // Row 1: 灰色分隔线
  for (var x = 1; x < 8; x++) {
    gui.slot(x, 1, function(s) { s.setItem(PANE.gray) })
  }

  // ========== Row 2: 进攻方 / 防守方 选项 ==========

  // Col 2: 进攻方（炽焰粉）
  gui.slot(2, 2, function(slot) {
    var item = Item.of('minecraft:iron_sword')
      .withCustomName(Text.translate('gui.kubejs.team_select.attack'))
    if (current === TEAM_ATTACK) {
      item = item.set('minecraft:enchantment_glint_override', true)
    }
    slot.setItem(item)
    slot.setLeftClicked(function() {
      runTeamFunction(player, 'game:teams/join_attacker')
      openPage(player)
    })
  })

  // Col 4: 观战（末影之眼）
  gui.slot(4, 2, function(slot) {
    var item = Item.of('minecraft:ender_eye')
      .withCustomName(Text.translate('gui.kubejs.team_select.spectator'))
    if (current === TEAM_SPECTATOR) {
      item = item.set('minecraft:enchantment_glint_override', true)
    }
    slot.setItem(item)
    slot.setLeftClicked(function() {
      runTeamFunction(player, 'game:teams/join_spectator')
      openPage(player)
    })
  })

  // Col 6: 防守方（盾牌）
  gui.slot(6, 2, function(slot) {
    var item = Item.of('minecraft:shield')
      .withCustomName(Text.translate('gui.kubejs.team_select.defense'))
    if (current === TEAM_DEFENSE) {
      item = item.set('minecraft:enchantment_glint_override', true)
    }
    slot.setItem(item)
    slot.setLeftClicked(function() {
      runTeamFunction(player, 'game:teams/join_defender')
      openPage(player)
    })
  })

  // ========== Row 3: 退出队伍 ==========

  gui.slot(4, 4, function(slot) {
    if (current !== TEAM_NONE) {
      slot.setItem(
        Item.of('minecraft:barrier')
          .withCustomName(Text.translate('gui.kubejs.team_select.leave'))
      )
      slot.setLeftClicked(function() {
        runTeamFunction(player, 'game:teams/leave_team')
        openPage(player)
      })
    } else {
      slot.setItem(PANE.black)
    }
  })

  // Row 5: 灰色分隔线
  for (var x = 1; x < 8; x++) {
    gui.slot(x, 5, function(s) { s.setItem(PANE.gray) })
  }
}

// ========== 打开队伍选择 GUI ==========

function openTeamPage(player) {
  player.persistentData.guiOpen = true

  player.openChestGUI(
    Text.translate('gui.kubejs.team_select.title'),
    6,
    function(gui) {
      renderTeamSelect(gui, player, openTeamPage)
    }
  )
}

// ========== 事件入口 ==========

ItemEvents.rightClicked('kubejs:team_selector', function(event) {
  var player = event.player
  if (event.hand !== 'main_hand') return
  openTeamPage(player)
})

// ========== GUI 打开时禁用物品拾取 ==========

PlayerEvents.inventoryClosed(function(event) {
  event.getPlayer().persistentData.guiOpen = false
})

PlayerEvents.loggedOut(function(event) {
  event.getPlayer().persistentData.guiOpen = false
})

ItemEvents.pickedUp(function(event) {
  if (event.getEntity().persistentData.guiOpen) {
    event.cancel()
  }
})
