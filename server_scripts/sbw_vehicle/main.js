// ============================================================
// 载具部署台 - 入口 & 全局事件
//
// 功能：
//   1. 加载载具数据库
//   2. EntityEvents.death — 载具死亡时反查部署台
//   3. 全局系统开关初始化
// ============================================================

// ══════════════════════════════════════════════════════════════
//  服务器加载：初始化
// ══════════════════════════════════════════════════════════════

ServerEvents.loaded(event => {
  var server = event.server

  // 预加载载具数据库（自动发现数据包）
  var db = loadVehicleDB()
  if (db && db.loaded) {
    sbwLog('[部署台] 载具数据库已加载: ' + db.vehicleCount + ' 种载具, ' + Object.keys(db.categories).length + ' 个分类')
  }

  // 确保全局系统开关存在（默认为启用）
  if (!server.persistentData.contains('sbw_vehicle_disabled')) {
    server.persistentData.putBoolean('sbw_vehicle_disabled', false)
    sbwLog('[部署台] 系统已激活')
  }

  // GUI 不再使用 global 缓存（改用 event.pos），无需清理
})

// ══════════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════════
//  载具死亡事件 — 反查部署台
// ══════════════════════════════════════════════════════════════

EntityEvents.death(event => {
  var entity = event.entity
  var server = event.server
  if (!entity || !server) return

  // ── 检查是否是被部署的载具（通过标签判断） ──
  var tags = entity.getTags()
  if (!tags) return

  var deployTag = null
  var tIter = tags.iterator()
  while (tIter.hasNext()) {
    var tag = tIter.next()
    if (tag.startsWith('sbw_deploy_')) {
      deployTag = tag
      break
    }
  }
  if (!deployTag) return  // 不是由部署台生成的载具

  // ── 解析部署台位置 ──
  // tag 格式: sbw_deploy_x_y_z
  var parts = deployTag.split('_')
  if (parts.length < 5) {
    sbwWarn('[死亡] 部署标签格式异常: ' + deployTag)
    return
  }
  var bx = parseInt(parts[2]), by = parseInt(parts[3]), bz = parseInt(parts[4])
  if (isNaN(bx) || isNaN(by) || isNaN(bz)) {
    sbwWarn('[死亡] 部署标签坐标解析失败: ' + deployTag)
    return
  }

  // ── 找到部署台方块 ──
  try {
    var level = entity.level
    var block = level.getBlock(bx, by, bz)
    if (!block || block.getId() !== 'kubejs:vehicle_deployer' || !block.entity) {
      sbwWarn('[死亡] 未找到部署台方块 @[' + bx + ',' + by + ',' + bz + ']')
      return
    }

    var pd = block.entity.persistentData
    var uuid = pd.getString('deployedUUID')

    // ── 验证 UUID 匹配 ──
    var entityUUID = entity.uuid.toString()
    if (uuid && uuid === entityUUID) {
      sbwLog('[死亡] 载具被摧毁 @[' + bx + ',' + by + ',' + bz + '] ' + entity.getType())
      pd.putString('deployedUUID', '')
      var delay = pd.contains('respawnDelay') ? pd.getInt('respawnDelay') : 600
      var gameTime = level.getTime()
      pd.putLong('cooldownEnd', gameTime + delay)
      block.entity.setChanged()
    } else {
      sbwLog('[死亡] 载具 UUID 不匹配，忽略: 实体=' + entityUUID.substring(0, 8) + '... 方块=' + (uuid ? uuid.substring(0, 8) + '...' : '空'))
    }
  } catch (e) {
    sbwError('[死亡] 处理死亡事件时出错: ' + e)
  }
})
