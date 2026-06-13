// ============================================================
// 队伍选择器 - GUI 交互（服务端 · i18n 规范）
// 仿照 profession_gui.js 模式，使用 gui.slot API
// 点击加入/离开队伍通过数据包 function 处理（以玩家身份运行）
// 显示状态仍从 persistentData.team 读取（由数据包 function 维护）
// 翻译定义在 assets/kubejs/lang/{en_us,zh_cn}.json 中
// ============================================================

// ========== UI 组件 ==========

// PANE / filler 由 profession/config/a_tacz_config.js 全局定义，此处直接使用

const TEAM_ATTACK    = 'attack'
const TEAM_DEFENSE   = 'defense'
const TEAM_SPECTATOR = 'spectator'
const TEAM_NONE      = 'none'

// ========== 加入战场 - 积分榜条件配置 ==========
// 当虚拟玩家 state 在 game_state 积分榜中的分数 == 1 时，显示"加入战场"按钮
// 如需修改条件：更改下面的虚拟玩家名/目标名/目标值即可
const JOIN_BATTLE_SCOREHOLDER = 'state'           // 虚拟玩家名（如 state, $game, #global 等）
const JOIN_BATTLE_OBJECTIVE   = 'game_state'      // 积分榜目标名
const JOIN_BATTLE_TARGET      = 1                 // 目标值（分数 == 此值时显示）

// 加入战场时调用的数据包 function
const JOIN_BATTLE_FUNCTION    = 'game:teams/join_battlefield'

/** 读取指定虚拟玩家在指定积分榜目标中的分数 */
function getScoreboardScore(server, scoreholder, objectiveName) {
  try {
    var scoreboard = server.getScoreboard()
    var objective = scoreboard.getObjective(objectiveName)
    if (!objective) return null
    var score = scoreboard.getOrCreatePlayerScore(scoreholder, objective)
    return score.getScore()
  } catch(e) {
    return null
  }
}

/** 以玩家身份运行数据包 function */
function runTeamFunction(player, functionPath) {
  player.server.runCommandSilent('execute as ' + player.username + ' run function ' + functionPath)
}

/**
 * 更新本地 persistentData.team（让 GUI 光效即时同步）
 * 同时运行数据包 function 确保数据包侧逻辑一致
 * 使用 runCommandSilent 播放音效（无声执行，playsound 无需 OP 权限）
 */
function setTeamAndRun(player, team, functionPath) {
  if (team === TEAM_NONE) {
    delete player.persistentData.team
    player.runCommandSilent('playsound minecraft:entity.villager.no master ' + player.username + ' ~ ~ ~ 0.5 1')
  } else {
    player.persistentData.team = team
    player.runCommandSilent('playsound minecraft:entity.experience_orb.pickup master ' + player.username + ' ~ ~ ~ 0.5 1')
  }
  runTeamFunction(player, functionPath)
}

/** 从 persistentData.team 读取当前队伍 */
function getPlayerTeam(player) {
  return player.persistentData.team || TEAM_NONE
}

// ========== 队伍选择页渲染 ==========

function renderTeamSelect(gui, player, openPage) {
  var current = getPlayerTeam(player)

  // Row 0: 退出 / 标题
  gui.slot(0, 0, function(slot) {
    slot.setItem(Item.of('createdeco:decal_left').withCustomName(Text.translate('gui.kubejs.team_select.exit')))
    slot.setLeftClicked(function() { player.closeMenu() })
  })
  gui.slot(4, 0, function(slot) {
    slot.setItem(Item.of('createdeco:decal_warning').withCustomName(Text.translate('gui.kubejs.team_select.title')))
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
      setTeamAndRun(player, TEAM_ATTACK, 'game:teams/join_attacker')
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
      setTeamAndRun(player, TEAM_SPECTATOR, 'game:teams/join_spectator')
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
      setTeamAndRun(player, TEAM_DEFENSE, 'game:teams/join_defender')
      openPage(player)
    })
  })

  // ========== Row 3: 加入战场（积分榜条件控制显隐）==========
  // 条件：虚拟玩家 JOIN_BATTLE_SCOREHOLDER 在 JOIN_BATTLE_OBJECTIVE 中的分数 == JOIN_BATTLE_TARGET

  gui.slot(4, 3, function(slot) {
    var score = getScoreboardScore(player.server, JOIN_BATTLE_SCOREHOLDER, JOIN_BATTLE_OBJECTIVE)
    if (score !== null && score === JOIN_BATTLE_TARGET) {
      slot.setItem(
        Item.of('minecraft:compass')
          .withCustomName(Text.translate('gui.kubejs.team_select.join_battle'))
          .withLore([Text.translate('gui.kubejs.team_select.join_battle.lore')])
      )
      slot.setLeftClicked(function() {
        player.runCommandSilent('playsound minecraft:entity.experience_orb.pickup master ' + player.username + ' ~ ~ ~ 0.5 1')
        runTeamFunction(player, JOIN_BATTLE_FUNCTION)
        player.closeMenu()
      })
    } else {
      slot.setItem(PANE.black)
    }
  })

  // ========== Row 4: 退出队伍 ==========
  
  gui.slot(4, 4, function(slot) {
    if (current !== TEAM_NONE) {
      slot.setItem(
        Item.of('createdeco:decal_cross')
          .withCustomName(Text.translate('gui.kubejs.team_select.leave'))
      )
      slot.setLeftClicked(function() {
        setTeamAndRun(player, TEAM_NONE, 'game:teams/leave_team')
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
