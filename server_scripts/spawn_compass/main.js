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

// ========== 死亡冷却：倒计时推送（内存，不持久化）==========
EntityEvents.death(event => {
  var entity = event.entity
  if (!entity || !entity.isPlayer()) return
  var name = entity.username
  var server = entity.server
  var cooldownMs = SPAWN_DEATH_COOLDOWN_SECONDS * 1000

  DEATH_TIME_MAP[name] = Date.now()
  console.log('[出生点选择器] ' + name + ' 死亡，启动倒计时 ' + SPAWN_DEATH_COOLDOWN_SECONDS + '秒')

  // 每秒推送一次倒计时 title
  function countdownTick() {
    var deathVal = DEATH_TIME_MAP[name]
    if (!deathVal) return // 已被清除
    var elapsed = Date.now() - deathVal
    var remainingMs = cooldownMs - elapsed
    if (remainingMs <= 0) {
      delete DEATH_TIME_MAP[name]
      return // 倒计时结束
    }
    var remaining = Math.ceil(remainingMs / 1000)
    server.runCommandSilent('title ' + name + ' title {"translate":"msg.kubejs.spawn_selector.death_cooldown","with":["' + remaining + '"],"color":"red","bold":true}')
    server.scheduleInTicks(20, countdownTick)
  }
  server.scheduleInTicks(20, countdownTick)
})
