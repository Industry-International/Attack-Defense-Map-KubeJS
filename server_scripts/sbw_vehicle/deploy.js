// ============================================================
// 载具部署台 - 召唤工具
//
// 从方块 persistentData 读取配置 → summon 载具 → 打标签 → 存 UUID
//
// 载具数据库通过 Node.js 脚本从模组 JAR 预提取，
// 存放在 kubejs/data/sbw_vehicle_db.json，由 getVehicleDB() 读取。
// ============================================================

/** 加载并缓存载具数据库 */
var $vehicleDB = null
function getVehicleDB() {
  if ($vehicleDB !== null) return $vehicleDB
  try {
    var raw = JsonIO.read('kubejs/data/sbw_vehicle_db.json')
    if (raw) {
      $vehicleDB = raw
      sbwLog('[部署] 载具数据库已加载: ' + (raw._meta ? raw._meta.vehicleCount + ' 种' : '?'))
    } else {
      sbwLog('[部署] 未找到载具数据库文件，使用空数据')
      $vehicleDB = { vehicles: {}, ammoLibrary: {}, families: {} }
    }
  } catch (e) {
    sbwError('[部署] 载具数据库加载失败: ' + e)
    $vehicleDB = { vehicles: {}, ammoLibrary: {}, families: {} }
  }
  return $vehicleDB
}

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

  // 构建 NBT
  var nbt = new $CompoundTag()
  var rotList = new $ListTag()
  rotList.add($FloatTag.valueOf(yaw)); rotList.add($FloatTag.valueOf(pitch))
  nbt.put('Rotation', rotList)
  var tagsList = new $ListTag()
  tagsList.add($StringTag.valueOf(tag))
  nbt.put('Tags', tagsList)

  var deployNBTStr = pd.getString('deployNBT')
  if (deployNBTStr && deployNBTStr !== '') {
    try {
      var deployObj = JSON.parse(deployNBTStr)
      if (deployObj && typeof deployObj === 'object') mergeDeployNBT(nbt, deployObj)
    } catch (e) { sbwWarn('[部署] deployNBT JSON 解析失败: ' + e) }
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
