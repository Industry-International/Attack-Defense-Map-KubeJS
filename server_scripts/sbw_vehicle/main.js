// ============================================================
// SBW 卓越前线 - 载具自动部署系统 核心逻辑
//
// 功能：
//   1. 自动部署：由数据包调用 /sbw_vehicle deploy 触发
//   2. 标签管理：每辆载具携带唯一标签，存活期间不重复生成
//   3. 自动重生：基于总数维持模式（count-based respawn），
//      每辆载配有 maxCount 目标存活数，当场上存活 < maxCount 时，
//      自动补充差额。死亡事件 + 定期扫描双重触发。
//   4. 手动命令：支持管理员手动部署/重置/状态查询
//   5. 排期纪元：通过 $respawnEpoch 标记每轮排期，reset/redeploy/stop
//      时递增纪元，使所有未执行的回调自动过期失效
//   6. UUID 索引：生成时保存实体 UUID，O(1) 查找替代全量遍历
//   7. ActionBar：实时状态栏显示载具存活/重生状态（仅对启用玩家）
// ============================================================

if (typeof SBW_VEHICLE_CONFIG === 'undefined') {
  console.error('[SBW载具] 错误：未找到配置！请确保 config.js 已正确加载。')
}

const VEHICLE_CFG = SBW_VEHICLE_CONFIG
const SBW_PREFIX = '[SBW载具]'

// ========== 日志工具 ==========

function sbwLog() { console.log(SBW_PREFIX + ' ' + Array.prototype.join.call(arguments, ' ')) }
function sbwWarn() { console.warn(SBW_PREFIX + ' ' + Array.prototype.join.call(arguments, ' ')) }
function sbwError() { console.error(SBW_PREFIX + ' ' + Array.prototype.join.call(arguments, ' ')) }

// ========== Java 类引用 ==========

var $UUID = Java.loadClass('java.util.UUID')
var $ListTag = Java.loadClass('net.minecraft.nbt.ListTag')
var $FloatTag = Java.loadClass('net.minecraft.nbt.FloatTag')
var $StringTag = Java.loadClass('net.minecraft.nbt.StringTag')
var $DoubleTag = Java.loadClass('net.minecraft.nbt.DoubleTag')
var $LongTag = Java.loadClass('net.minecraft.nbt.LongTag')
var $ShortTag = Java.loadClass('net.minecraft.nbt.ShortTag')
var $HashMap  = Java.loadClass('java.util.HashMap')
var $HashSet  = Java.loadClass('java.util.HashSet')
var $Component = Java.loadClass('net.minecraft.network.chat.Component')

/**
 * 存储已启用 ActionBar 的玩家名称集合（由 /sbw_vehicle time 切换）
 * 每个玩家独立跟踪，只对执行命令的玩家显示
 */
var $actionBarPlayers = new $HashSet()

// ========== JSON → NBT 转换工具（模板化部署用）==========

/**
 * 将普通 JS 对象递归转换为 CompoundTag
 *
 * 类型映射规则：
 *   JS 对象          → CompoundTag
 *   JS 数组          → ListTag（元素自动推导类型）
 *   JS 字符串        → StringTag
 *   JS 整数          → IntTag
 *   JS 浮点数        → FloatTag
 *   JS 布尔值 true   → ByteTag(1)
 *   JS 布尔值 false  → ByteTag(0)
 *   null / undefined → 跳过该键
 *
 * 特殊类型提示（用于需要明确 NBT 类型的场景）：
 *   { __nbt_type: "byte",  value: 1 }   → ByteTag(1)
 *   { __nbt_type: "short", value: 1 }   → ShortTag(1)
 *   { __nbt_type: "long",  value: 1 }   → LongTag(1)
 *   { __nbt_type: "double",value: 1.0 } → DoubleTag(1.0)
 *
 * @param {*} obj - 要转换的 JS 值
 * @returns {Tag} 对应的 NBT Tag
 */
function toNBT(obj) {
  if (obj === null || obj === undefined) return null

  // 类型提示包装对象
  if (typeof obj === 'object' && obj !== null && obj.__nbt_type) {
    switch (obj.__nbt_type) {
      case 'byte':   return $ByteTag.valueOf(obj.value)
      case 'short':  return $ShortTag.valueOf(obj.value)
      case 'long':   return $LongTag.valueOf(obj.value)
      case 'double': return $DoubleTag.valueOf(obj.value)
      case 'float':  return $FloatTag.valueOf(obj.value)
      default:       return $IntTag.valueOf(obj.value)
    }
  }

  if (typeof obj === 'object' && !Array.isArray(obj)) {
    let tag = new $CompoundTag()
    for (let key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) continue
      let val = toNBT(obj[key])
      if (val !== null) {
        tag.put(key, val)
      }
    }
    return tag
  }

  if (Array.isArray(obj)) {
    let list = new $ListTag()
    for (let i = 0; i < obj.length; i++) {
      let val = toNBT(obj[i])
      if (val !== null) {
        list.add(val)
      }
    }
    return list
  }

  if (typeof obj === 'string') {
    return $StringTag.valueOf(obj)
  }

  if (typeof obj === 'number') {
    if (Number.isInteger(obj)) {
      return $IntTag.valueOf(obj)
    } else {
      return $FloatTag.valueOf(obj)
    }
  }

  if (typeof obj === 'boolean') {
    return $ByteTag.valueOf(obj)
  }

  return null
}

/**
 * 将 deployNBT（JS 对象）合并到目标 CompoundTag 中
 * 注意：此函数直接修改 target，不返回新对象
 *
 * @param {CompoundTag} target - 基础 NBT
 * @param {object} source - 要合并的 JS 对象（config 中的 deployNBT）
 */
function mergeDeployNBT(target, source) {
  if (!source || typeof source !== 'object') return

  for (let key in source) {
    if (!Object.prototype.hasOwnProperty.call(source, key)) continue

    let existing = target.get(key)
    let incoming = toNBT(source[key])

    if (incoming === null) continue

    // 如果两边都是 CompoundTag，递归合并（如 WeaponState）
    if (existing && existing instanceof $CompoundTag && incoming instanceof $CompoundTag) {
      let incomingKeys = incoming.getAllKeys()
      let iter = incomingKeys.iterator()
      while (iter.hasNext()) {
        let subKey = iter.next()
        existing.put(subKey, incoming.get(subKey))
      }
    } else {
      target.put(key, incoming)
    }
  }
}

// ========== 持久化数据工具 ==========

/**
 * 获取载具状态存储
 * 存储位置：server.persistentData (KubeJS 独立存储，不污染 Minecraft 原版 data storage)
 *
 * 数据结构：
 * {
 *   active: true|false,
 *   vehicles: {
 *     "<vehicleId>": {
 *       status: "alive" | "respawning" | "dead",
 *       team: "attack" | "defense",
 *       vehicleType: "superbwarfare:xxx",
 *       uuid: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"  // 实体 UUID
 *     }
 *   }
 * }
 */
function getStore(server) {
  let raw = server.persistentData.getString(VEHICLE_CFG.persistKey)
  if (!raw || raw === '') return { vehicles: {} }
  try { return JSON.parse(raw) } catch(e) { return { vehicles: {} } }
}

/**
 * 保存载具状态存储
 */
function saveStore(server, data) {
  server.persistentData.putString(VEHICLE_CFG.persistKey, JSON.stringify(data))
}

/**
 * 获取指定载具的状态
 */
function getVehicleState(server, vehicleId) {
  let store = getStore(server)
  return store.vehicles[vehicleId] || null
}

/**
 * 获取完整标签名
 */
function getFullTag(vehicleId) {
  return VEHICLE_CFG.tagPrefix + vehicleId
}

// ========== 系统开关（独立状态，不依赖计分板）==========

/**
 * 判断载具系统是否已激活
 */
function isSystemActive(server) {
  try {
    let store = getStore(server)
    return store.active === true
  } catch(e) {
    return false
  }
}

/**
 * 设置载具系统激活状态
 */
function setSystemActive(server, active) {
  let store = getStore(server)
  store.active = active
  saveStore(server, store)
  if (active) {
    sbwLog('系统已激活，开始追踪载具')
  } else {
    sbwLog('系统已停用，停止追踪载具')
  }
}

// ========== 实体查找工具（优化版）==========

/**
 * 通过 UUID 在服务器中查找实体（O(1) 查找）
 */
function findEntityByUUID(server, uuidStr) {
  if (!uuidStr) return null
  try {
    let uuid = $UUID.fromString(uuidStr)
    return server.getEntityByUUID(uuid)
  } catch (e) {
    return null
  }
}

/**
 * 通过标签在世界中查找实体（回退方案：全量遍历）
 */
function findEntityByTag(server, tag) {
  let levels = server.getAllLevels()
  let iter = levels.iterator()
  while (iter.hasNext()) {
    let level = iter.next()
    let entities = level.getEntities()
    let eIter = entities.iterator()
    while (eIter.hasNext()) {
      let entity = eIter.next()
      if (entityHasStringTag(entity, tag)) {
        return entity
      }
    }
  }
  return null
}

/**
 * 检查实体是否包含指定字符串标签
 */
function entityHasStringTag(entity, tag) {
  let tags = entity.getTags()
  if (!tags) return false
  let iter = tags.iterator()
  while (iter.hasNext()) {
    if (iter.next() === tag) return true
  }
  return false
}

/**
 * 根据 store 中的状态查找实体（先 UUID 快速查找，回退到 tag 遍历）
 */
function findVehicleEntity(server, state, tag) {
  if (state && state.uuid) {
    let entity = findEntityByUUID(server, state.uuid)
    if (entity && entityHasStringTag(entity, tag)) {
      return entity
    }
    if (state.uuid) {
      state.uuid = null
    }
  }
  return findEntityByTag(server, tag)
}

// ========== 实体批量清理（按标签前缀）==========

/**
 * 在世界中搜索所有带有 SBW 标签前缀的实体并清除
 * 用于 reset/redeploy 时彻底清理
 *
 * @param {object} server
 * @returns {number} 清除的实体数量
 */
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
        if (titer.next().startsWith(prefix)) {
          entity.discard()
          count++
          break
        }
      }
    }
  }
  return count
}

// ========== 数量管理 ==========

/**
 * 统计世界中拥有指定标签的实体数量
 */
function countAliveByTag(server, tag) {
  let count = 0
  let levels = server.getAllLevels()
  let iter = levels.iterator()
  while (iter.hasNext()) {
    let level = iter.next()
    let entities = level.getEntities()
    let eIter = entities.iterator()
    while (eIter.hasNext()) {
      let entity = eIter.next()
      if (entityHasStringTag(entity, tag)) {
        count++
      }
    }
  }
  return count
}

/**
 * 超出 maxCount 时清理多余的实体（保留 store 中注册的，丢弃多余的）
 */
function trimExcessVehicles(server, tag, maxCount, storeVehicleId) {
  let keepUuid = null
  let store = getStore(server)
  let state = store.vehicles[storeVehicleId]
  if (state && state.uuid) keepUuid = state.uuid

  let candidates = []
  let levels = server.getAllLevels()
  let iter = levels.iterator()
  while (iter.hasNext()) {
    let level = iter.next()
    let entities = level.getEntities()
    let eIter = entities.iterator()
    while (eIter.hasNext()) {
      let entity = eIter.next()
      if (entityHasStringTag(entity, tag)) {
        candidates.push(entity)
      }
    }
  }

  if (candidates.length > maxCount) {
    let removed = 0
    for (let i = 0; i < candidates.length; i++) {
      if (removed >= candidates.length - maxCount) break
      let e = candidates[i]
      if (keepUuid) {
        let uuid = e.getNbt().getString('UUID')
        if (uuid === keepUuid) continue
      }
      e.discard()
      removed++
      sbwLog('maxCount 超限清理：已丢弃多余的载具 [' + storeVehicleId + ']')
    }
    return removed
  }
  return 0
}

// ========== 载具部署 ==========

/**
 * 生成单辆载具实体
 *
 * 注意：载具实体 summon 后可能需要 1 tick 才会完全生成到世界中，
 * 因此立即查找可能找不到。本函数不在生成时立即查找实体，
 * 而是安排 1 tick 后延迟捕获 UUID 并更新 store。
 * 这期间，系统通过 tag 回退查找和定期扫描来确保实体可被定位。
 */
function spawnVehicleEntity(server, vehicleCfg) {
  let tag = getFullTag(vehicleCfg.id)
  let x = vehicleCfg.pos[0]
  let y = vehicleCfg.pos[1]
  let z = vehicleCfg.pos[2]
  let yaw = vehicleCfg.pos[3] || 0
  let pitch = vehicleCfg.pos[4] || 0

  // 构建基础 NBT
  let nbt = new $CompoundTag()

  // Rotation
  let rotationList = new $ListTag()
  rotationList.add($FloatTag.valueOf(yaw))
  rotationList.add($FloatTag.valueOf(pitch))
  nbt.put('Rotation', rotationList)

  // Tags
  let tagsList = new $ListTag()
  tagsList.add($StringTag.valueOf(tag))
  nbt.put('Tags', tagsList)

  // 合并模板化 deployNBT
  let deployNBT = vehicleCfg._resolvedDeployNBT || vehicleCfg.deployNBT
  if (deployNBT) {
    mergeDeployNBT(nbt, deployNBT)
    sbwLog('载具 [' + vehicleCfg.id + '] 已应用 deployNBT 模板')
  }

  // 召唤实体
  let cmd = 'summon ' + vehicleCfg.vehicleType + ' ' + x + ' ' + y + ' ' + z + ' ' + nbt.toString()
  server.runCommandSilent(cmd)
  sbwLog('已执行 summon 生成载具 [' + vehicleCfg.id + ']')

  // 延迟 1 tick 后查找实体并捕获 UUID
  let capturedId = vehicleCfg.id
  server.scheduleInTicks(1, function() {
    let entity = findEntityByTag(server, tag)
    if (entity) {
      let uuid = entity.getNbt().getString('UUID')
      if (uuid) {
        let s = getStore(server)
        if (s.vehicles[capturedId]) {
          s.vehicles[capturedId].uuid = uuid
          saveStore(server, s)
          sbwLog('载具 [' + capturedId + '] UUID 已捕获: ' + uuid)
        }
      }
    } else {
      sbwWarn('载具 [' + capturedId + '] 生成后 1 tick 仍未找到，将由定期扫描兜底捕获')
    }
  })

  // 立即返回（entity/uuid 为 null，部署函数仍会写入 store）
  return { entity: null, uuid: null, tag: tag }
}

/**
 * 部署单辆载具（含状态管理）
 *
 * 即使 spawnVehicleEntity 未立即捕获到实体，
 * 也会先将状态标记为 alive 并写入 store，
 * 后续通过 tag 查找和定期扫描仍可正常定位实体。
 */
function deployVehicle(server, teamName, vehicleCfg) {
  let vehicleId = vehicleCfg.id
  let tag = getFullTag(vehicleId)
  let maxCount = vehicleCfg.maxCount

  // 解析 deployNBT
  vehicleCfg._resolvedDeployNBT = vehicleCfg.deployNBT || null

  // maxCount 检查
  if (maxCount && maxCount > 0) {
    let aliveCount = countAliveByTag(server, tag)
    if (aliveCount >= maxCount) {
      sbwLog('载具 [' + vehicleId + '] 存活 ' + aliveCount + '/' + maxCount + ' 已达上限，跳过生成')
      return
    }
  }

  let store = getStore(server)
  let state = store.vehicles[vehicleId]

  // 检查是否已存活
  if (state && state.status === 'alive') {
    let entity = findVehicleEntity(server, state, tag)
    if (entity) {
      sbwLog('载具 [' + vehicleId + '] 已存活，跳过生成')
      return
    } else {
      sbwWarn('载具 [' + vehicleId + '] 标记为存活但实体不存在，将重新生成')
      store = getStore(server)
    }
  }

  // 生成实体（不要求立即查到 UUID）
  let result = spawnVehicleEntity(server, vehicleCfg)

  // 更新状态：即使暂时没有 UUID，也标记为 alive
  store = getStore(server)
  store.vehicles[vehicleId] = {
    status: 'alive',
    team: teamName,
    vehicleType: vehicleCfg.vehicleType,
    uuid: null  // UUID 会在 1 tick 后延迟捕获，此后依赖 tag 查找
  }
  saveStore(server, store)

  sbwLog('载具 [' + vehicleId + '] 部署完成（UUID 将在 1 tick 后捕获）')
}

/**
 * 部署指定队伍的所有载具
 */
function deployTeamVehicles(server, teamName) {
  let teamCfg = VEHICLE_CFG.teams[teamName]
  if (!teamCfg) {
    sbwWarn('未找到队伍 [' + teamName + '] 的载具配置')
    return
  }

  let vehicles = teamCfg.vehicles
  if (!vehicles || vehicles.length === 0) {
    sbwLog('队伍 [' + teamName + '] 没有配置载具')
    return
  }

  sbwLog('开始部署队伍 [' + teamName + '] 的 ' + vehicles.length + ' 辆载具')
  for (let i = 0; i < vehicles.length; i++) {
    deployVehicle(server, teamName, vehicles[i])
  }
}

/**
 * 部署所有队伍的所有载具
 */
function deployAllVehicles(server) {
  sbwLog('开始部署所有队伍的载具...')
  for (let teamName in VEHICLE_CFG.teams) {
    if (VEHICLE_CFG.teams.hasOwnProperty(teamName)) {
      deployTeamVehicles(server, teamName)
    }
  }
  sbwLog('载具部署完成')
}

/**
 * 从实体事件中提取载具ID（通过标签前缀匹配）
 */

/**
 * 查找载具所属队伍
 */
function findVehicleTeam(vehicleId) {
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      if (vehicles[i].id === vehicleId) return teamName
    }
  }
  return null
}

/**
function extractVehicleIdFromEntity(entity) {
  let entityTags = entity.getTags()
  if (!entityTags) return null

  let iter = entityTags.iterator()
  while (iter.hasNext()) {
    let tag = iter.next()
    if (tag.startsWith(VEHICLE_CFG.tagPrefix)) {
      return tag.substring(VEHICLE_CFG.tagPrefix.length)
    }
  }
  return null
}

/**
 * 通过标签名查找对应的载具配置
 */
function findVehicleConfig(vehicleId) {
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      if (vehicles[i].id === vehicleId) {
        return vehicles[i]
      }
    }
  }
  return null
}

// ========== 重置 ==========

/**
 * 重置所有载具：
 *   1. 清除所有计时器
 *   2. 按标签前缀搜索并清除所有 SBW 载具实体
 *   3. 清空持久化存储
 */
function resetAll(server) {
  // 第一步：清除所有计时器
  clearAllTimers()

  // 第二步：清除所有 SBW 标签实体
  let entityCount = discardAllByTagPrefix(server)

  // 第三步：清空持久化存储
  server.persistentData.putString(VEHICLE_CFG.persistKey, JSON.stringify({ vehicles: {} }))

  sbwLog('已重置：清除 ' + entityCount + ' 个载具实体，所有计时器已清除')
  return { entityCount: entityCount, cancelledCount: 0 }
}

// ========== 状态查询（完整版）==========

/**
 * 从载具实体 NBT 中提取弹药摘要
 * @param {ListTag} items - Inventory.Items 列表
 * @returns {string} 弹药摘要文本
 */
function getAmmoSummary(items) {
  if (!items || items.size() === 0) return ''

  let ammoMap = {}
  for (let i = 0; i < items.size(); i++) {
    let item = items.get(i)
    if (item instanceof $CompoundTag) {
      let id = item.getString('id')
      let count = item.getInt('count')
      if (id && count > 0) {
        // 提取弹药简称
        let shortName = id
        if (id === 'superbwarfare:large_shell_ap') shortName = 'AP弹'
        else if (id === 'superbwarfare:large_shell_he') shortName = 'HE弹'
        else if (id === 'superbwarfare:small_shell_ap') shortName = '小AP'
        else if (id === 'superbwarfare:small_shell_he') shortName = '小HE'
        else if (id === 'superbwarfare:rifle_ammo') shortName = '步枪弹'
        else if (id === 'superbwarfare:heavy_ammo') shortName = '重弹'
        else if (id === 'superbwarfare:missile') shortName = '导弹'
        else if (id === 'superbwarfare:rocket') shortName = '火箭弹'
        else {
          // 取命名空间后的最后一段
          let parts = id.split(':')
          shortName = parts.length > 1 ? parts[1] : id
        }

        if (!ammoMap[shortName]) ammoMap[shortName] = 0
        ammoMap[shortName] += count
      }
    }
  }

  let parts = []
  for (let name in ammoMap) {
    if (ammoMap.hasOwnProperty(name)) {
      parts.push('§7' + name + ':§f' + ammoMap[name])
    }
  }
  return parts.join(' §8| ')
}

/**
 * 获取所有载具的完整状态文本（含血量/能量/部件/弹药/UUID/倒计时）
 */
function getStatusLines(server) {
  let store = getStore(server)
  let currentTick = server.ticks
  let lines = []

  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue

    lines.push('')
    lines.push('§6=== ' + teamName.toUpperCase() + ' ===')

    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      let v = vehicles[i]
      let state = store.vehicles[v.id]
      let tag = getFullTag(v.id)

      // 查找实体
      let entity = null
      if (state && state.uuid) {
        entity = findEntityByUUID(server, state.uuid)
      }
      if (!entity) {
        entity = findEntityByTag(server, tag)
      }

      // 行头：ID + 类型
      let header = '§e' + v.id + ' §7(' + v.vehicleType + ')'

      if (entity) {
        // ─── 存活：读取 NBT 获取实时数据 ───
        let nbt = entity.getNbt()

        // 血量 & 能量
        let health = nbt.contains('Health') ? nbt.getFloat('Health') : -1
        let energy = nbt.contains('Energy') ? nbt.getInt('Energy') : -1

        let healthStr = health >= 0 ? '§c血量:§f' + health.toFixed(1) : ''
        let energyStr = energy >= 0 ? '§b能量:§f' + energy : ''
        let stats = []
        if (healthStr) stats.push(healthStr)
        if (energyStr) stats.push(energyStr)

        lines.push(header + ' §a✓ 存活' + (stats.length > 0 ? ' §8| ' + stats.join(' §8| ') : ''))

        // 部件健康度
        let partInfo = []
        let checkPart = function(label, healthKey, damagedKey) {
          let h = nbt.contains(healthKey) ? nbt.getFloat(healthKey) : -1
          let d = nbt.contains(damagedKey) ? nbt.getByte(damagedKey) : 0
          if (h >= 0) {
            let color = h > 50 ? '§a' : (h > 20 ? '§e' : '§c')
            let flag = d === 1 ? '§c[损]' : ''
            partInfo.push('§7' + label + ':' + color + h.toFixed(0) + flag)
          }
        }
        checkPart('左轮', 'LeftWheelHealth', 'LeftWheelDamaged')
        checkPart('右轮', 'RightWheelHealth', 'RightWheelDamaged')
        checkPart('主引擎', 'MainEngineHealth', 'MainEngineDamaged')
        checkPart('副引擎', 'SubEngineHealth', 'SubEngineDamaged')
        checkPart('炮塔', 'TurretHealth', 'TurretDamaged')

        if (partInfo.length > 0) {
          lines.push('  §7[部件] ' + partInfo.join(' §8| '))
        }

        // 弹药库存
        let inv = nbt.get('Inventory')
        if (inv instanceof $CompoundTag) {
          let items = inv.get('Items')
          if (items instanceof $ListTag && items.size() > 0) {
            let ammoStr = getAmmoSummary(items)
            if (ammoStr) {
              lines.push('  §7[弹药] ' + ammoStr)
            }
          }
        }

        // UUID（调试用）
        let uuid = nbt.getString('UUID')
        if (uuid) {
          lines.push('  §8UUID: ' + uuid)
        }

      } else if (state && state.status === 'respawning') {
        // ─── 重生中：显示剩余时间 ───
        let destroyedTick = state.destroyedTick || 0
        let delay = state.respawnDelay || v.respawnDelay || 0
        if (destroyedTick > 0 && delay > 0) {
          let elapsed = currentTick - destroyedTick
          let remaining = Math.max(0, delay - elapsed)
          let remainingSec = Math.ceil(remaining / 20)
          let totalSec = Math.ceil(delay / 20)
          lines.push(header + ' §e⟳ 重生中 (' + remainingSec + 's / ' + totalSec + 's)')
        } else {
          lines.push(header + ' §e⟳ 重生中')
        }
        if (state.uuid) {
          lines.push('  §8旧UUID: ' + state.uuid)
        }

      } else {
        // ─── 待部署 ───
        lines.push(header + ' §c✗ 待部署')
        lines.push('  §7位置: §8[' + v.pos[0] + ', ' + v.pos[1] + ', ' + v.pos[2] + ']')
      }
    }
  }

  return lines
}

/**
 * 获取所有正在重生中的载具剩余时间文本
 */
function getRespawnTimeLines(server) {
  let store = getStore(server)
  let lines = []
  let currentTick = server.ticks
  let hasRespawning = false

  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      let v = vehicles[i]
      let state = store.vehicles[v.id]

      if (!state || state.status !== 'respawning') continue
      hasRespawning = true

      let destroyedTick = state.destroyedTick || 0
      let delay = state.respawnDelay || v.respawnDelay || 0
      if (destroyedTick <= 0 || delay <= 0) {
        lines.push('§7[' + teamName + '] §e' + v.id + ' §7— §e⟳ 等待重生')
        continue
      }

      let elapsed = currentTick - destroyedTick
      let remaining = Math.max(0, delay - elapsed)
      let remainingSec = Math.ceil(remaining / 20)
      let totalSec = Math.ceil(delay / 20)
      lines.push('§7[' + teamName + '] §e' + v.id
        + ' §7— §e⟳ ' + remainingSec + 's §7/ ' + totalSec + 's')
    }
  }

  if (!hasRespawning) {
    lines.push('§7当前没有载具正在重生')
  }

  return lines
}

// ========== ActionBar 实时状态栏 ==========

/**
 * 生成 ActionBar 显示的实时状态文本（单行紧凑格式）
 * 格式示例：
 *   §6[SBW] §a✓attack_tank_1 §e⟳defense_tank_1(23s) §c✗defense_heli_1
 */
function buildActionBarText(server) {
  let store = getStore(server)
  let currentTick = server.ticks
  let parts = []

  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles

    for (let i = 0; i < vehicles.length; i++) {
      let v = vehicles[i]
      let state = store.vehicles[v.id]
      let tag = getFullTag(v.id)

      // 简略名：取 id 的短名
      let shortName = v.id

      // 查找实体
      let entity = null
      if (state && state.uuid) {
        entity = findEntityByUUID(server, state.uuid)
      }
      if (!entity) {
        entity = findEntityByTag(server, tag)
      }

      if (entity) {
        // 存活：绿色
        let nbt = entity.getNbt()
        let health = nbt.contains('Health') ? nbt.getFloat('Health') : -1
        let healthColor = health > 0 ? (health > 200 ? '§a' : '§e') : '§c'
        parts.push(healthColor + '✓' + shortName)
      } else if (state && state.status === 'respawning') {
        // 重生中：金色 + 倒计时
        let destroyedTick = state.destroyedTick || 0
        let delay = state.respawnDelay || v.respawnDelay || 0
        let remainingSec = 0
        if (destroyedTick > 0 && delay > 0) {
          let remaining = Math.max(0, delay - (currentTick - destroyedTick))
          remainingSec = Math.ceil(remaining / 20)
        }
        parts.push('§e⟳' + shortName + '(' + remainingSec + 's)')
      } else {
        // 待部署：红色
        parts.push('§c✗' + shortName)
      }
    }
  }

  return '§6[SBW] §7' + parts.join(' §8| §7')
}

/**
 * 更新 ActionBar 显示（只向已启用的玩家推送）
 * 由 tick 事件每 20 tick（1秒）调用
 */
function updateTimeActionBar(server) {
  if ($actionBarPlayers.isEmpty()) return

  let players = server.getAllPlayers()
  if (!players || players.size() === 0) return

  let text = buildActionBarText(server)
  let component = $Component.literal(text)

  let iter = players.iterator()
  while (iter.hasNext()) {
    let player = iter.next()
    let pn = player.getName().getString()
    // 只推送给已启用 ActionBar 的玩家
    if ($actionBarPlayers.contains(pn)) {
      // displayClientMessage(Component, boolean): true=overlay(ActionBar), false=chat
      player.displayClientMessage(component, true)
    }
  }
}

// ========== 事件监听 ==========

/** 实体死亡事件 — 次要触发，仅做日志（每tick检查是主要机制） */
EntityEvents.death(event => {
  let entity = event.entity
  let server = event.server
  if (!isSystemActive(server)) return
  let vehicleId = extractVehicleIdFromEntity(entity)
  if (!vehicleId) return
  sbwLog('检测到载具实体死亡 [' + vehicleId + ']（下一tick自动检查）')
})

// ========== 指令注册已移至 command.js ==========
