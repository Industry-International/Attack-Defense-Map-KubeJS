// ============================================================
// 出生点选择器 - 事件入口
//
// 依赖：
//   config.js  — 配置 + 工具函数
//   gui.js     — 右键物品 GUI（openSpawnSelector）
//
// 功能：
//   玩家右键 kubejs:spawn_selector 打开GUI
//   GUI内可选择出生点、随机传送到他人附近、开关允许复活
// ============================================================

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
