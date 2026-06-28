// ============================================================
// 出生点选择器 - 事件入口
//
// 依赖：
//   config.js  — 配置 + 工具函数
//   gui.js     — 右键物品 GUI（openSpawnSelector）
//   respawn.js — 重生选择 GUI（openRespawnSelect）
//
// 事件：
//   1. ItemEvents.rightClicked('kubejs:spawn_selector')
//      → 打开出生点选择 GUI
//
//   2. EntityEvents.death
//      → 标记玩家 pendingRespawn
//
//   3. PlayerEvents.respawn
//      → 检测标记，打开重生选择 GUI
//
//   4. PlayerEvents.loggedOut
//      → 清除标记
// ============================================================

// ========== 右键物品 ==========

ItemEvents.rightClicked('kubejs:spawn_selector', function(event) {
  var player = event.player
  if (event.hand !== 'main_hand') return

  // 检查玩家是否属于某个队伍
  var teamTag = getPlayerTeamTag(player)
  if (!teamTag) {
    player.tell(Text.translate('msg.kubejs.spawn_selector.no_team'))
    return
  }

  openSpawnSelector(player)
})

// ========== 死亡事件 ==========

EntityEvents.death(function(event) {
  var entity = event.entity
  if (!entity.isPlayer()) return

  var player = entity
  // 标记：等待重生选择
  player.persistentData.putBoolean(SPAWN_PENDING_KEY, true)
})

// ========== 重生事件 ==========

PlayerEvents.respawn(function(event) {
  var player = event.player

  // 检查是否有待处理的重生标记
  var pending = player.persistentData.getBoolean(SPAWN_PENDING_KEY)
  if (!pending) return

  // 清除标记
  player.persistentData.putBoolean(SPAWN_PENDING_KEY, false)

  // 打开重生选择 GUI
  openRespawnSelect(player)
})

// ========== 登出清理 ==========

PlayerEvents.loggedOut(function(event) {
  var player = event.player
  // 清除待处理标记
  delete player.persistentData[SPAWN_PENDING_KEY]
})
