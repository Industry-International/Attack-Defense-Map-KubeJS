// ============================================================
// 自杀笔记 - 右键事件处理
// 手持 kubejs:suicide_note 右键即可自杀
// ============================================================

ItemEvents.rightClicked('kubejs:suicide_note', function(event) {
  var player = event.player
  if (event.hand !== 'main_hand') return

  // 执行重新部署（kill 命令最可靠）
  player.server.runCommandSilent('kill ' + player.username)

  // 发送消息
  player.tell(Text.translate('msg.kubejs.suicide_note.used'))
})
