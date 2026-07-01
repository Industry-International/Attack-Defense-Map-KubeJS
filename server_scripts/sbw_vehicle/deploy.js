// ============================================================
// 载具部署台 - 召唤工具
//
// 从方块 persistentData 读取配置 → 查数据库 → summon 载具 → 打标签 → 存 UUID
//
// 载具数据库由 tools/database.js 自动发现加载（数据包格式），
// 通过 getVehicleDB() / getVehicleById() 访问。
//
// 部署 NBT 构建顺序：
//   1. 从数据库取 vehicleData.nbtTemplate（含 Energy, Health, Inventory, WeaponState...）
//      ★ nbtMode='advanced' 时跳过此步，直接用 deployNBT 字段
//   2. 叠加 Rotation / Tags
//   3. nbtMode='simple' 时叠加 simpleNBT 字段覆盖数据库模板
//      nbtMode='none' 时不叠加任何额外字段
// ============================================================

// ══════════════════════════════════════════════════════════════
//  标签 & 部署
// ══════════════════════════════════════════════════════════════

/** 生成部署位置标签（用于实体反查方块） */
function makeDeployTag(bx, by, bz) {
  return 'sbw_deploy_' + Math.floor(bx) + '_' + Math.floor(by) + '_' + Math.floor(bz)
}

/**
 * 从方块 persistentData 解析部署位置
 * 返回 [x, y, z, yaw, pitch]
 */
function getSpawnPosition(pd, block) {
  var bx = block.getX(), by = block.getY(), bz = block.getZ()
  var ox = pd.contains('offsetX') ? pd.getDouble('offsetX') : 0.0
  var oy = pd.contains('offsetY') ? pd.getDouble('offsetY') : 1.0
  var oz = pd.contains('offsetZ') ? pd.getDouble('offsetZ') : 0.0
  var yaw = pd.contains('yaw') ? pd.getFloat('yaw') : 0.0
  var pitch = pd.contains('pitch') ? pd.getFloat('pitch') : 0.0
  return [bx + ox + 0.5, by + oy, bz + oz + 0.5, yaw, pitch]
}

/**
 * 为部署台方块召唤一辆载具
 *
 * 流程：
 *   1. 从数据库查 vehicleType → 取 nbtTemplate 作为基础 NBT
 *   2. 叠加 Rotation 和 Tags
 *   3. 叠加用户手动配置的 deployNBT（覆盖前面）
 *   4. summon 实体
 *   5. 1 tick 后捕获 UUID 写入 persistentData
 */
function spawnVehicleForBlock(block, server, pd) {
  var vehicleType = pd.getString('vehicleType')
  if (!vehicleType || vehicleType === '') {
    sbwLog('[部署] 方块未配置载具类型，跳过')
    return null
  }

  var pos = getSpawnPosition(pd, block)
  var x = pos[0], y = pos[1], z = pos[2], yaw = pos[3], pitch = pos[4]
  var tag = makeDeployTag(block.getX(), block.getY(), block.getZ())

  // ── 根据 nbtMode 决定 NBT 来源 ──
  var vehicleInfo = getVehicleById(vehicleType)
  var nbt = new $CompoundTag()
  var deployNBTStr = pd.getString('deployNBT')
  var nbtMode = pd.contains('nbtMode') ? pd.getString('nbtMode') : 'advanced'

  if (nbtMode === 'advanced' && deployNBTStr && deployNBTStr !== '' && deployNBTStr !== '{}') {
    // ★ 高级 NBT：完全用用户自定义 JSON，跳过数据库模板
    try {
      var deployObj = JSON.parse(deployNBTStr)
      if (deployObj && typeof deployObj === 'object') {
        nbt = toNBT(deployObj)
        sbwLog('[部署] 高级 NBT 模式，使用用户自定义 JSON')
      }
    } catch (e) { sbwWarn('[部署] deployNBT JSON 解析失败: ' + e) }
  } else if (nbtMode === 'none') {
    // ★ 无用户 NBT：严格使用数据库模板，不叠加任何额外字段
    if (vehicleInfo && vehicleInfo.nbtTemplate) {
      nbt = toNBT(vehicleInfo.nbtTemplate)
      sbwLog('[部署] 数据库模板模式: ' + vehicleType + ' Energy=' + vehicleInfo.maxEnergy + ' Health=' + vehicleInfo.maxHealth)
      if (vehicleInfo.category) {
        pd.putString('vehicleCategory', vehicleInfo.category)
      }
    } else {
      sbwWarn('[部署] 数据库未找到车辆 ' + vehicleType + '，使用空白模板')
    }
  } else {
    // 简单 NBT / 兼容旧数据：以数据库模板为基础，叠加用户配置
    if (vehicleInfo && vehicleInfo.nbtTemplate) {
      nbt = toNBT(vehicleInfo.nbtTemplate)
      sbwLog('[部署] 使用数据库模板: ' + vehicleType + ' Energy=' + vehicleInfo.maxEnergy + ' Health=' + vehicleInfo.maxHealth)
      if (vehicleInfo.category) {
        pd.putString('vehicleCategory', vehicleInfo.category)
      }
    } else {
      sbwWarn('[部署] 数据库未找到车辆 ' + vehicleType + '，使用空白模板')
    }
    // 叠加用户简单 NBT（从独立字段 simpleNBT 读取）
    var simpleNBTStr = pd.getString('simpleNBT')
    if (simpleNBTStr && simpleNBTStr !== '' && simpleNBTStr !== '{}') {
      try {
        var simpleObj = JSON.parse(simpleNBTStr)
        if (simpleObj && typeof simpleObj === 'object') {
          mergeDeployNBT(nbt, simpleObj)
          sbwLog('[部署] 合并简单 NBT: ' + simpleNBTStr)
        }
      } catch (e) { sbwWarn('[部署] simpleNBT JSON 解析失败: ' + e) }
    }
  }

  // ── 叠加 Rotation 和 Tags（始终覆盖，因为这是部署位置相关的） ──
  var rotList = new $ListTag()
  rotList.add($FloatTag.valueOf(yaw)); rotList.add($FloatTag.valueOf(pitch))
  nbt.put('Rotation', rotList)

  var tagsList = new $ListTag()
  tagsList.add($StringTag.valueOf(tag))
  if (nbt.contains('Tags')) {
    var oldTags = nbt.getList('Tags', 8)
    var otIter = oldTags.iterator()
    while (otIter.hasNext()) {
      var oldTag = otIter.next()
      if (oldTag.startsWith('sbw_')) tagsList.add($StringTag.valueOf(oldTag))
    }
  }
  nbt.put('Tags', tagsList)

  // ── spawnWithAmmo 控制：0=不生成弹药，清除 Inventory ──
  var spawnWithAmmo = pd.contains('spawnWithAmmo') ? pd.getByte('spawnWithAmmo') : 1
  if (spawnWithAmmo === 0 && nbt.contains('Inventory')) {
    nbt.remove('Inventory')
    sbwLog('[部署] spawnWithAmmo=0，已清除 Inventory')
  }

  var cmd = 'summon ' + vehicleType + ' ' + x + ' ' + y + ' ' + z + ' ' + nbt.toString()
  server.runCommandSilent(cmd)

  // 1 tick 后捕获 UUID
  var blockX = block.getX(), blockY = block.getY(), blockZ = block.getZ()
  var dim = block.getLevel().getDimension().toString()
  server.scheduleInTicks(1, function() {
    try {
      var level = server.getLevel($ResourceLocation.parse(dim))
      if (!level) return
      var entities = level.getEntities()
      var eIter = entities.iterator()
      while (eIter.hasNext()) {
        var entity = eIter.next()
        if (entity.isRemoved()) continue
        var tags = entity.getTags()
        var tIter = tags.iterator()
        while (tIter.hasNext()) {
          if (tIter.next() === tag) {
            var uuid = entity.uuid.toString()
            var currentBlock = level.getBlock(blockX, blockY, blockZ)
            if (currentBlock && currentBlock.entity) {
              currentBlock.entity.persistentData.putString('deployedUUID', uuid)
              currentBlock.entity.setChanged()
              sbwLog('[部署] 载具已部署 @[' + blockX + ',' + blockY + ',' + blockZ + '] UUID=' + uuid.substring(0, 8) + '...')
            }
            return
          }
        }
      }
      sbwWarn('[部署] 部署后未找到标签匹配的实体 @[' + blockX + ',' + blockY + ',' + blockZ + ']')
    } catch (e) { sbwError('[部署] UUID 捕获失败: ' + e) }
  })

  return null
}
