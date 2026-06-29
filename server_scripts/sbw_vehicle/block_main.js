// ============================================================
// 载具部署台 - 方块行为逻辑
//
// 事件：
//   BlockEvents.placed       — 初始化默认配置
//   BlockEvents.rightClicked — 打开 GUI（OP）/ 状态查看（普通玩家）
//   BlockEvents.blockEntityTick — 管理载具生命周期
//
// ★ 持久化核心原则：
//   1. 使用独立的 inited 标记判断是否初始化（而非 vehicleType）
//   2. Tick 内自行调用 ensurePD()，不依赖玩家右键触发
//   3. 每次写入 NBT 后立即 setChanged()
//   4. cooldownEnd 重启后做范围校验（防止 gameTime 不连续）
// ============================================================

// ══════════════════════════════════════════════════════════════
//  读取/写入持久化数据的辅助函数
// ══════════════════════════════════════════════════════════════

/** 读取方块 persistentData，不存在则创建默认 */
function ensurePD(block) {
  if (!block.entity) return null
  var pd = block.entity.persistentData

  // ★ 修复：使用独立标记 inited 判断是否已初始化
  //   不再依赖 vehicleType 是否为空，因为用户可能配置后清空，
  //   或重启后 vehicleType 为空字符串导致数据被重置。
  if (!pd.contains('inited') || pd.getByte('inited') !== 1) {
    pd.putByte('inited', 1)
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
    pd.putByte('spawnWithAmmo', 1)   // 生成载具时带弹药（1=是, 0=否）
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
      // ★ 修复：将数据库分类信息 + nbt模板传入缓存
      var vehicleDB = getVehicleDB()
      var catData = {}
      var nbtTemplate = {}  // 当前载具的 nbt 模板（供 GUI 双模式配置使用）
      if (vehicleDB && vehicleDB.loaded) {
        var catKeys = Object.keys(vehicleDB.categories)
        for (var cdi = 0; cdi < catKeys.length; cdi++) {
          var ck = catKeys[cdi]
          var catInfo = vehicleDB.categories[ck]
          catData[catInfo.displayName] = vehicleDB.byCategory[ck] || []
        }
        // 读取当前已保存 vehicleType 的 nbtTemplate
        var savedVT = pd.getString('vehicleType')
        if (savedVT && savedVT !== '') {
          var vtInfo = vehicleDB.byId[savedVT]
          if (vtInfo && vtInfo.nbtTemplate) {
            nbtTemplate = vtInfo.nbtTemplate
          }
        }
      }
      var cacheData = JSON.stringify({
        pos: { x: block.getX(), y: block.getY(), z: block.getZ() },
        dim: event.level.getDimension().toString(),
        config: readDeployerConfig(block),
        categories: catData,
        nbtTemplate: nbtTemplate  // 用于 GUI 简单模式预填
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
 * 从方块读取部署台完整配置（供 GUI 使用）
 * 
 * ★ 注意：不命名为 readBlockConfig 以避免与 ammo_replenish/a_config.js
 *   中的同名全局函数冲突。Rhino 中 function 声明是全局的，后者会覆盖前者。
 */
function readDeployerConfig(block) {
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
  cfg.spawnWithAmmo = pd.contains('spawnWithAmmo') ? pd.getByte('spawnWithAmmo') : 1
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

  // ★ 修复：将 server 声明提到前面，确保后续代码可访问
  var server = level.getServer()
  if (!server) return

  // ── 检查全局禁用开关 ──
  try {
    if (server.persistentData.contains('sbw_vehicle_disabled') &&
        server.persistentData.getBoolean('sbw_vehicle_disabled')) {
      return  // 系统已禁用
    }
  } catch (e) { /* ignore */ }

  // ★ 修复：Tick 内自行 ensurePD，不依赖玩家右键
  var pd = ensurePD(block)
  if (!pd) return

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
    // ★ 修复：处理完 PendingDeploy 立即返回，防止继续执行下面的部署逻辑导致二次部署
    return
  }

  // ── 未配置车辆类型 → 跳过 ──
  if (!pd.contains('vehicleType') || pd.getString('vehicleType') === '') return

  var gameTime = level.getTime()
  var uuid = pd.getString('deployedUUID')
  var cooldownEnd = pd.getLong('cooldownEnd')

  // ★ 修复：重启后 gameTime 可能不连续，对 cooldownEnd 做范围校验
  //   如果 cooldownEnd 远超当前 gameTime（超过 1 小时 = 72000 tick），
  //   说明是旧会话残留的大时间戳，直接重置为 0 使其立刻可部署
  if (cooldownEnd > gameTime + 72000) {
    sbwLog('[部署台] cooldownEnd 异常（重启残留）: ' + cooldownEnd + ' > ' + (gameTime + 72000) + '，重置为 0')
    pd.putLong('cooldownEnd', 0)
    cooldownEnd = 0
    block.entity.setChanged()
  }

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
