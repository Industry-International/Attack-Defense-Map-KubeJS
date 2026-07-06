// ============================================================
// 自杀笔记 - 右键事件处理
// 手持 kubejs:suicide_note 右键即可自杀
// ============================================================

ItemEvents.rightClicked('kubejs:suicide_note', function(event) {
  var player = event.player
  if (event.hand !== 'main_hand') return

  // 发送消息
  player.tell(Text.translate('msg.kubejs.suicide_note.used'))

  // 使用 outOfWorld 伤害类型，高效击杀（无视护甲/抗性）
  player.hurt('outOfWorld', 10000)
})
