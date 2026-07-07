// ============================================================
// 无职业标签自动管理（i18n 规范）
// 功能：
//   1. 玩家登录时，若未选择职业则自动添加 no_job 标签
//   2. 玩家选择职业后自动移除 no_job 标签
//   3. 玩家取消职业后自动添加 no_job 标签
// ============================================================
// 翻译键（定义在 assets/kubejs/lang/*.json）：
//   msg.kubejs.no_job_tag.added   — 标记为无职业时提示
//   msg.kubejs.no_job_tag.removed — 选择职业后移除标记时提示
// ============================================================

/**
 * 为未选择职业的玩家添加 no_job 标签
 * @param {Internal.ServerPlayer} player
 */
function addNoJobTag(player) {
  var prof = player.persistentData.profession
  if (!prof) {
    player.addTag('no_job')
    player.tell(Text.translate('msg.kubejs.no_job_tag.added'))
  }
}

/**
 * 移除玩家的 no_job 标签（选择职业后调用）
 * @param {Internal.ServerPlayer} player
 */
function removeNoJobTag(player) {
  if (player.getTags().contains('no_job')) {
    player.removeTag('no_job')
    player.tell(Text.translate('msg.kubejs.no_job_tag.removed'))
  }
}

// ========== 玩家登录事件 ==========

PlayerEvents.loggedIn(event => {
  var player = event.getPlayer()
  var server = player.server

  // 延迟 1 tick 确保 persistentData 已完全加载
  server.scheduleInTicks(1, function() {
    var prof = player.persistentData.profession
    if (prof) {
      // 已有职业：确保 no_job 标签被移除（防止异常残留）
      if (player.getTags().contains('no_job')) {
        player.removeTag('no_job')
      }
    } else {
      // 无职业：自动添加 no_job 标签
      player.addTag('no_job')
    }

    // ---- 第三方全局存储：登录时尝试恢复 ----
    if (isExternalStorageEnabled(server)) {
      var restored = restorePlayer(player)
      if (restored) {
        console.log('[职业存储] 玩家 ' + player.getName().getString() + ' 登录时自动恢复')
      }
    }
  })
})
