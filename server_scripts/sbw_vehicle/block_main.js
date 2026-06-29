// ============================================================
// 载具部署台 - 方块行为逻辑
//
// 事件：
//   BlockEvents.placed       — 初始化默认配置
//   BlockEvents.rightClicked — 打开 GUI（OP）/ 状态查看（普通玩家）
//   BlockEvents.blockEntityTick — 管理载具生命周期
// ============================================================

// ══════════════════════════════════════════════════════════════
//  读取/写入持久化数据的辅助函数
// ══════════════════════════════════════════════════════════════

/** 读取方块 persistentData，不存在则创建默认 */
function ensurePD(block) {
  if (!block.entity) return null
  var pd = block.entity.persistentData
  // 如果 vehicleType 为空，说明未初始化
  if (!pd.contains('vehicleType') || pd.getString('vehicleType') === '') {
    pd.putString('vehicleType', '')
    pd.putString('team', '')
    pd.putInt('respawnDelay', 600)   // 30 秒
    pd.putByte('autoRespawn', 1)     // 默认开启自动重生
    pd.putDouble('offsetX', 0.0)
    pd.putDouble('offsetY', 1.0)     // 方块上方 1 格
    pd.putDouble('offsetZ', 0.0)
    pd.putFloat('yaw', 0.0)
    pd.putFloat('pitch', 0.0)
    pd.putString('deployedUUID', '')
    pd.putLong('cooldownEnd', 0)
    pd.putString('deployNBT', '{}')
    pd.putString('displayName', '')  // 部署台显示名称（可选）
    block.entity.setChanged()
    sbwLog('[部署台] 方块初始化完成 @[' + block.getX() + ',' + block.getY() + ',' + block.getZ() + ']')
  }
  return pd
}

/** 向玩家发送状态消息 */
function tellStatus(block, player, pd) {
  if (!pd) { pd = block.entity ? block.entity.persistentData : null }
  if (!pd) { player.tell(Component.literal('§c[部署台] 方块数据异常')); return }

  var type = pd.getString('vehicleType') || '§7未配置'
  var uuid = pd.getString('deployedUUID')
  var cooldownEnd = pd.getLong('cooldownEnd')

  // 判断冷却状态
  var level = block.getLevel()
  var gameTime = level.getTime()
  var cooldownMsg = '§a就绪'
  if (cooldownEnd > gameTime) {
    var remaining = Math.ceil((cooldownEnd - gameTime) / 20)
    cooldownMsg = '§c冷却中 §7(' + remaining + 's)'
  }

  // 判断载具状态
  var statusMsg = '§7空闲'
  if (uuid && uuid !== '') {
    try {
      var entity = level.getServer().getEntityByUUID($UUID.fromString(uuid))
      if (entity && !entity.isRemoved()) statusMsg = '§a已部署'
      else { statusMsg = '§e载具已损毁'; uuid = '' }
    } catch (e) { statusMsg = '§e状态未知' }
  }

  player.tell(Component.literal('§6══ 载具部署台 ══'))
  player.tell(Component.literal('§e类型: §f' + type))
  player.tell(Component.literal('§e状态: ' + statusMsg))
  player.tell(Component.literal('§e冷却: ' + cooldownMsg))
  if (uuid && uuid !== '') player.tell(Component.literal('§7UUID: ' + uuid.substring(0, 8) + '...'))
}

// ══════════════════════════════════════════════════════════════
//  方块放置事件
// ══════════════════════════════════════════════════════════════

BlockEvents.placed('kubejs:vehicle_deployer', event => {
  if (event.level.isClientSide()) return
  if (!event.block.entity) {
    // 旧方块迁移：刷新方块
    try {
      var pos = event.block.getPos()
      event.level.getServer().runCommandSilent(
        'setblock ' + pos.getX() + ' ' + pos.getY() + ' ' + pos.getZ() + ' kubejs:vehicle_deployer replace'
      )
      sbwLog('[部署台] 旧方块迁移 @[' + pos.getX() + ',' + pos.getY() + ',' + pos.getZ() + ']')
    } catch (e) {
      sbwError('[部署台] 方块迁移失败: ' + e)
    }
    return
  }
  ensurePD(event.block)
})

// ══════════════════════════════════════════════════════════════
//  右键交互事件
// ══════════════════════════════════════════════════════════════

BlockEvents.rightClicked('kubejs:vehicle_deployer', event => {
  if (event.level.isClientSide()) return

  var player = event.player
  var block = event.block

  // 没有 BlockEntity → 尝试迁移
  if (!block.entity) {
    try {
      var pos = block.getPos()
      event.level.getServer().runCommandSilent(
        'setblock ' + pos.getX() + ' ' + pos.getY() + ' ' + pos.getZ() + ' kubejs:vehicle_deployer replace'
      )
      player.tell(Component.literal('§a[部署台] 方块已升级！请再次右键'))
    } catch (e) {
      player.tell(Component.literal('§c[部署台] 方块升级失败，请破坏后重新放置'))
    }
    event.cancel()
    return
  }

  var pd = ensurePD(block)
  if (!pd) { event.cancel(); return }

  // OP → 打开 GUI
  if (player.hasPermissions(2)) {
    try {
      var cacheData = JSON.stringify({
        pos: { x: block.getX(), y: block.getY(), z: block.getZ() },
        dim: event.level.getDimension().toString(),
        config: readBlockConfig(block)
      })
      global.vehicleDeployerCache.put(player.uuid, cacheData)

      LDLib2UIFactory.openBlockUI(player, block.getPos(), 'kubejs:vehicle_deployer_cfg')
    } catch (e) {
      sbwError('[部署台] GUI 打开失败: ' + e)
      player.tell(Component.literal('§c[部署台] GUI 加载失败: ' + e))
    }
  } else {
    tellStatus(block, player, pd)
  }
  event.cancel()
})

/**
 * 从方块读取完整配置（供 GUI 使用）
 */
function readBlockConfig(block) {
  var cfg = {}
  if (!block.entity) return cfg
  var pd = block.entity.persistentData
  cfg.vehicleType = pd.getString('vehicleType') || ''
  cfg.respawnDelay = pd.contains('respawnDelay') ? pd.getInt('respawnDelay') : 600
  cfg.autoRespawn = pd.contains('autoRespawn') ? pd.getByte('autoRespawn') : 1
  cfg.offsetX = pd.contains('offsetX') ? pd.getDouble('offsetX') : 0.0
  cfg.offsetY = pd.contains('offsetY') ? pd.getDouble('offsetY') : 1.0
  cfg.offsetZ = pd.contains('offsetZ') ? pd.getDouble('offsetZ') : 0.0
  cfg.yaw = pd.contains('yaw') ? pd.getFloat('yaw') : 0.0
  cfg.pitch = pd.contains('pitch') ? pd.getFloat('pitch') : 0.0
  cfg.deployNBT = pd.getString('deployNBT') || '{}'
  cfg.displayName = pd.getString('displayName') || ''
  cfg.deployedUUID = pd.getString('deployedUUID') || ''
  cfg.cooldownEnd = pd.getLong('cooldownEnd') || 0
  return cfg
}

// ══════════════════════════════════════════════════════════════
//  BlockEntity Tick — 核心生命周期
// ══════════════════════════════════════════════════════════════

BlockEvents.blockEntityTick('kubejs:vehicle_deployer', event => {
  if (event.level.isClientSide()) return

  var block = event.block
  var level = event.level
  if (!block.entity) return

  // ── 检查全局禁用开关 ──
  try {
    var server = level.getServer()
    if (server.persistentData.contains('sbw_vehicle_disabled') &&
        server.persistentData.getBoolean('sbw_vehicle_disabled')) {
      return  // 系统已禁用
    }
  } catch (e) { /* ignore */ }

  var pd = block.entity.persistentData

  // ── 处理 GUI 发出的「立即部署」请求（NBT 标记，跨作用域安全） ──
  if (pd.contains('PendingDeploy') && pd.getBoolean('PendingDeploy') === true) {
    pd.putBoolean('PendingDeploy', false)
    block.entity.setChanged()
    var vt = pd.getString('vehicleType')
    if (vt && vt !== '') {
      sbwLog('[部署台] GUI 触发立即部署 @[' + block.getX() + ',' + block.getY() + ',' + block.getZ() + ']')
      pd.putLong('cooldownEnd', 0)
      pd.putString('deployedUUID', '')
      block.entity.setChanged()
      spawnVehicleForBlock(block, server, pd)
    }
  }

  // ── 未配置车辆类型 → 跳过 ──
  if (!pd.contains('vehicleType') || pd.getString('vehicleType') === '') return

  var gameTime = level.getTime()
  var uuid = pd.getString('deployedUUID')
  var cooldownEnd = pd.getLong('cooldownEnd')

  // ── 有 UUID → 检查实体是否存活 ──
  if (uuid && uuid !== '') {
    try {
      var entity = server.getEntityByUUID($UUID.fromString(uuid))
      if (entity && !entity.isRemoved()) {
        // 存活 → 无事可做
        return
      }
    } catch (e) { /* UUID 格式异常，当作不存在 */ }

    // 实体不存在/死亡 → 清 UUID，开始冷却
    sbwLog('[部署台] 载具已消失 @[' + block.getX() + ',' + block.getY() + ',' + block.getZ() + '] UUID=' + uuid.substring(0, 8) + '...')
    pd.putString('deployedUUID', '')
    var delay = pd.contains('respawnDelay') ? pd.getInt('respawnDelay') : 600
    pd.putLong('cooldownEnd', gameTime + delay)
    block.entity.setChanged()
    return
  }

  // ── 无 UUID + 冷却已过 → 部署 ──
  if (gameTime >= cooldownEnd) {
    var autoRespawn = pd.contains('autoRespawn') ? pd.getByte('autoRespawn') : 1
    if (autoRespawn === 1) {
      spawnVehicleForBlock(block, server, pd)
      // UUID 在 deploy.js 的 1 tick 回调中异步写入
    }
    // autoRespawn = 0 → 等待手动触发（右键菜单）
  }
  // 冷却中 → 无事
})
