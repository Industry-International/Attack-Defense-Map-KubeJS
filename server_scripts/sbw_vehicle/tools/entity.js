// ============================================================
// SBW 载具 - 实体查找 / 区块检测 / 批量清理 / 数量统计
// ============================================================

// ========== 实体查找工具 ==========

function findEntityByUUID(server, uuidStr) {
  if (!uuidStr) return null
  try { return server.getEntityByUUID($UUID.fromString(uuidStr)) } catch (e) { return null }
}

function findEntityByTag(server, tag) {
  let levels = server.getAllLevels()
  let iter = levels.iterator()
  while (iter.hasNext()) {
    let level = iter.next()
    let entities = level.getEntities()
    let eIter = entities.iterator()
    while (eIter.hasNext()) {
      let entity = eIter.next()
      if (entityHasStringTag(entity, tag)) return entity
    }
  }
  return null
}

function entityHasStringTag(entity, tag) {
  let tags = entity.getTags()
  if (!tags) return false
  let iter = tags.iterator()
  while (iter.hasNext()) { if (iter.next() === tag) return true }
  return false
}

function findVehicleEntity(server, state, tag) {
  if (state && state.uuid) {
    let entity = findEntityByUUID(server, state.uuid)
    if (entity && entityHasStringTag(entity, tag)) return entity
    state.uuid = null
  }
  return findEntityByTag(server, tag)
}

// ========== 区块加载检测 ==========

function isChunkLoaded(server, x, z, dimension) {
  try {
    let dimRL = $ResourceLocation.parse(dimension || 'minecraft:overworld')
    let level = server.getLevel(dimRL)
    if (!level) return false
    return level.hasChunk(Math.floor(x / 16), Math.floor(z / 16))
  } catch(e) { return false }
}

function getVehicleDimension(vehicleCfg) { return vehicleCfg.dimension || 'minecraft:overworld' }

// ========== 玩家邻近检测 ==========

/**
 * 检查部署点附近是否有玩家（区块因玩家存在而自然加载）
 * @param {object} server - 服务器实例
 * @param {number} x - 部署点 X
 * @param {number} z - 部署点 Z
 * @param {string} dimension - 维度
 * @param {number} range - 检测范围（方块），默认 64
 * @returns {boolean} 是否有玩家在范围内
 */
function hasNearbyPlayer(server, x, z, dimension, range) {
  range = range || 64
  try {
    let dimRL = $ResourceLocation.parse(dimension || 'minecraft:overworld')
    let level = server.getLevel(dimRL)
    if (!level) return false
    let players = level.players()
    if (!players || players.size() === 0) return false
    let iter = players.iterator()
    while (iter.hasNext()) {
      let player = iter.next()
      let px = player.getX(), pz = player.getZ()
      let dx = px - x, dz = pz - z
      if (dx * dx + dz * dz <= range * range) return true
    }
  } catch(e) { /* ignore */ }
  return false
}

// ========== 实体批量清理 ==========

function discardAllByTagPrefix(server) {
  let count = 0
  let prefix = VEHICLE_CFG.tagPrefix
  let levels = server.getAllLevels()
  let liter = levels.iterator()
  while (liter.hasNext()) {
    let level = liter.next()
    let entities = level.getEntities()
    let eiter = entities.iterator()
    while (eiter.hasNext()) {
      let entity = eiter.next()
      let tags = entity.getTags()
      let titer = tags.iterator()
      while (titer.hasNext()) {
        if (titer.next().startsWith(prefix)) { entity.discard(); count++; break }
      }
    }
  }
  return count
}

// ========== 数量管理 ==========

function countAliveByTag(server, tag) {
  let count = 0
  let levels = server.getAllLevels()
  let iter = levels.iterator()
  while (iter.hasNext()) {
    let level = iter.next()
    let entities = level.getEntities()
    let eIter = entities.iterator()
    while (eIter.hasNext()) {
      if (entityHasStringTag(eIter.next(), tag)) count++
    }
  }
  return count
}
