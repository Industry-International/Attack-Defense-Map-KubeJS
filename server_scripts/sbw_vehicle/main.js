// ============================================================
// SBW 卓越前线 - 载具自动部署系统 核心逻辑
//
// 功能：
//   1. 自动部署：游戏开始时（game_state == 1）自动部署配置的载具
//   2. 标签管理：每辆载具携带唯一标签，不重复生成
//   3. 自动重生：载具被摧毁后，按车辆单独配置的延迟自动重新生成
//   4. 手动命令：支持管理员手动部署/重置/状态查询
//   5. 双重检测：EntityEvents.death + 定期扫描，防止漏检
//   6. UUID 索引：生成时保存实体 UUID，O(1) 查找替代全量遍历
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

// ========== 计分板工具（优化版）==========

/**
 * 读取计分板中指定虚拟玩家的分数
 * 使用 getPlayerScore 直接读取，避免遍历整个计分板
 */
function getScore(server, holder, objectiveName) {
  try {
    let sb = server.getScoreboard()
    let obj = sb.getObjective(objectiveName)
    if (!obj) {
      sbwWarn('计分板目标 [' + objectiveName + '] 不存在')
      return null
    }
    // 直接通过虚拟玩家名获取分数（O(1) 级别）
    return sb.getPlayerScore(holder, obj).getValue()
  } catch (err) {
    sbwError('读取计分板时出错:', err)
    return null
  }
}

/**
 * 判断游戏是否处于进行中状态
 */
let gameActiveCache = false
let gameActiveCheckedTick = -1

function isGameActive(server) {
  // 同一 tick 内缓存结果，避免重复查询
  if (server.ticks === gameActiveCheckedTick) {
    return gameActiveCache
  }
  gameActiveCheckedTick = server.ticks
  gameActiveCache = getScore(server, VEHICLE_CFG.scoreHolder, VEHICLE_CFG.scoreObjective) === VEHICLE_CFG.activeValue
  return gameActiveCache
}

// ========== Java 类引用 ==========

var $UUID = Java.loadClass('java.util.UUID')
// NBT 构建类
var $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')
var $ListTag = Java.loadClass('net.minecraft.nbt.ListTag')
var $FloatTag = Java.loadClass('net.minecraft.nbt.FloatTag')
var $StringTag = Java.loadClass('net.minecraft.nbt.StringTag')
var $IntTag = Java.loadClass('net.minecraft.nbt.IntTag')
var $ByteTag = Java.loadClass('net.minecraft.nbt.ByteTag')
var $DoubleTag = Java.loadClass('net.minecraft.nbt.DoubleTag')
var $LongTag = Java.loadClass('net.minecraft.nbt.LongTag')
var $ShortTag = Java.loadClass('net.minecraft.nbt.ShortTag')

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
      // 整型 → 注意：如果值在 byte 范围内也存为 int（Minecraft 兼容）
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
      // 递归将 incoming 的所有字段写入 existing
      let incomingKeys = incoming.getAllKeys()
      let iter = incomingKeys.iterator()
      while (iter.hasNext()) {
        let subKey = iter.next()
        existing.put(subKey, incoming.get(subKey))
      }
    } else {
      // 否则直接覆盖
      target.put(key, incoming)
    }
  }
}

// ========== 持久化数据工具 ==========

/**
 * 获取载具状态存储
 * 数据结构：
 * {
 *   vehicles: {
 *     "<vehicleId>": {
 *       status: "alive" | "respawning" | "dead",
 *       team: "attack" | "defense",
 *       vehicleType: "superbwarfare:ztz_99a",
 *       uuid: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"  // 实体 UUID（O(1) 查找用）
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

// ========== 实体查找工具（优化版）==========

/**
 * 通过 UUID 在服务器中查找实体（O(1) 查找）
 * @param {object} server - 服务器实例
 * @param {string} uuidStr - UUID 字符串
 * @returns {Entity|null}
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
 * @returns {Entity|null}
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
 * Minecraft Entity.hasTag() 接受 ResourceLocation 而非 String，
 * 因此用 getTags() 迭代对比
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
 * @param {object} server
 * @param {object} state - store.vehicles[vehicleId]
 * @param {string} tag - 完整标签名
 * @returns {Entity|null}
 */
function findVehicleEntity(server, state, tag) {
  // 优先通过 UUID 查找（O(1)）
  if (state && state.uuid) {
    let entity = findEntityByUUID(server, state.uuid)
    if (entity && entityHasStringTag(entity, tag)) {
      return entity
    }
    // UUID 不存在或实体标签不匹配 → 清理无效 UUID
    if (state.uuid) {
      state.uuid = null
    }
  }
  // 回退：通过 tag 全量遍历
  return findEntityByTag(server, tag)
}

// ========== 载具部署 ==========

/**
 * 生成单辆载具实体
 *
 * SBW 载具是独立的实体类型（如 superbwarfare:ztz_99a），
 * 直接以载具类型召唤，NBT 仅用于设置初始标记和朝向。
 *
 * @param {object} server - 服务器实例
 * @param {object} vehicleCfg - 载具配置（vehicleType 为实际实体 ID）
 * @returns {object|null} { entity, uuid, tag } 或 null
 */
function spawnVehicleEntity(server, vehicleCfg) {
  let tag = getFullTag(vehicleCfg.id)
  let x = vehicleCfg.pos[0]
  let y = vehicleCfg.pos[1]
  let z = vehicleCfg.pos[2]
  let yaw = vehicleCfg.pos[3] || 0
  let pitch = vehicleCfg.pos[4] || 0

  // ─── 使用 CompoundTag API 构建基础 NBT ───
  let nbt = new $CompoundTag()

  // Rotation
  let rotationList = new $ListTag()
  rotationList.add($FloatTag.valueOf(yaw))
  rotationList.add($FloatTag.valueOf(pitch))
  nbt.put('Rotation', rotationList)

  // Tags — 用于后续兜底查找和死亡事件识别
  let tagsList = new $ListTag()
  tagsList.add($StringTag.valueOf(tag))
  nbt.put('Tags', tagsList)

  // ─── 合并模板化 deployNBT（能量、弹药、预装填等）───
  let deployNBT = vehicleCfg._resolvedDeployNBT || vehicleCfg.deployNBT
  if (deployNBT) {
    mergeDeployNBT(nbt, deployNBT)
    sbwLog('载具 [' + vehicleCfg.id + '] 已应用 deployNBT 模板')
  }

  // ─── 直接用载具类型 ID 召唤 ───
  let cmd = 'summon ' + vehicleCfg.vehicleType + ' ' + x + ' ' + y + ' ' + z + ' ' + nbt.toString()
  server.runCommandSilent(cmd)

  sbwLog('已执行 summon 生成载具 [' + vehicleCfg.id + '] (类型: ' + vehicleCfg.vehicleType + ')，正在查找实体...')

  // ─── 查找刚生成的实体并提取 UUID ───
  let entity = findEntityByTag(server, tag)
  if (!entity) {
    sbwWarn('载具 [' + vehicleCfg.id + '] 生成后无法立即找到（标签: ' + tag + '）将回退到 tag 查找')
    return { entity: null, uuid: null, tag: tag }
  }

  let uuid = entity.getNbt().getString('UUID')
  if (!uuid || uuid === '') {
    sbwWarn('载具 [' + vehicleCfg.id + '] 无法获取 UUID，将使用 tag 回退查找')
    return { entity: entity, uuid: null, tag: tag }
  }

  sbwLog('载具 [' + vehicleCfg.id + '] 生成成功 (UUID: ' + uuid + ')')
  return { entity: entity, uuid: uuid, tag: tag }
}

/**
 * 部署单辆载具（含状态管理）
 */
function deployVehicle(server, teamName, vehicleCfg) {
  let vehicleId = vehicleCfg.id
  let tag = getFullTag(vehicleId)

  // ─── 解析 deployNBT ───
  // 直接将车辆配置中的 deployNBT 传递给生成函数
  // 不写 deployNBT → 白板生成（仅 Rotation + Tags）
  vehicleCfg._resolvedDeployNBT = vehicleCfg.deployNBT || null

  // 延迟读取 store，确保拿到最新的数据
  let store = getStore(server)
  let state = store.vehicles[vehicleId]

  // 检查是否已存活
  if (state && state.status === 'alive') {
    // 先通过 UUID 快速检查，回退到 tag
    let entity = findVehicleEntity(server, state, tag)
    if (entity) {
      sbwLog('载具 [' + vehicleId + '] 已存活，跳过生成')
      return
    } else {
      // 标记为存活但实体不存在 → 需要重新生成
      sbwWarn('载具 [' + vehicleId + '] 标记为存活但实体不存在，将重新生成')
      // 清理已过期状态
      store = getStore(server)
    }
  }

  // 生成实体
  let result = spawnVehicleEntity(server, vehicleCfg)
  if (!result || (!result.entity && !result.uuid)) {
    sbwError('载具 [' + vehicleId + '] 生成失败')
    return
  }

  // 重新读取 store 并更新状态（确保数据是最新的）
  store = getStore(server)
  store.vehicles[vehicleId] = {
    status: 'alive',
    team: teamName,
    vehicleType: vehicleCfg.vehicleType,
    uuid: result.uuid || null  // UUID 可能为 null，回退到 tag 查找
  }
  saveStore(server, store)
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

// ========== 载具死亡/重生处理 ==========

/**
 * 处理载具被摧毁（标记为待重生，安排重生计划）
 * @returns {boolean} 是否成功标记
 */
function handleVehicleDestroyed(server, vehicleId, vehicleCfg) {
  let store = getStore(server)
  let state = store.vehicles[vehicleId]

  if (!state || state.status === 'respawning') {
    return false
  }

  sbwLog('载具 [' + vehicleId + '] 已被摧毁，将在 ' + (vehicleCfg.respawnDelay / 20) + ' 秒后重生')

  // 标记为重生中
  state.status = 'respawning'
  state.respawnDelay = vehicleCfg.respawnDelay
  saveStore(server, store)

  // 安排重生（延迟执行）
  if (vehicleCfg.respawnDelay > 0) {
    let capturedTeam = state.team // 从 state 中捕获当前队伍
    server.scheduleInTicks(vehicleCfg.respawnDelay, function() {
      if (!isGameActive(server)) {
        sbwLog('游戏已结束，取消载具 [' + vehicleId + '] 的重生')
        return
      }
      sbwLog('重生延迟结束，重新部署载具 [' + vehicleId + ']')
      deployVehicle(server, capturedTeam, vehicleCfg)
    })
  }

  return true
}

/**
 * 从实体事件中提取载具ID（通过标签前缀匹配）
 * @returns {string|null} 载具ID，或 null
 */
function extractVehicleIdFromEntity(entity) {
  let entityTags = entity.getTags()
  if (!entityTags) return null

  // 查找以我们前缀开头的标签（使用 Java 流式迭代器）
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
 * 重置所有载具状态，清除现有实体并清理数据
 */
function resetAll(server) {
  let store = getStore(server)
  let count = 0

  for (let vehicleId in store.vehicles) {
    if (!store.vehicles.hasOwnProperty(vehicleId)) continue
    let state = store.vehicles[vehicleId]
    let tag = getFullTag(vehicleId)

    // 优先 UUID 查找
    let entity = findVehicleEntity(server, state, tag)
    if (entity) {
      entity.kill()
      count++
      sbwLog('已清除载具实体 [' + vehicleId + ']')
    }
  }

  // 重置持久化数据
  server.persistentData.putString(VEHICLE_CFG.persistKey, JSON.stringify({ vehicles: {} }))
  sbwLog('已清除 ' + count + ' 个载具实体，所有载具状态已重置')
}

// ========== 状态查询（优化版）==========

/**
 * 获取所有载具的当前状态文本
 */
function getStatusLines(server) {
  let store = getStore(server)
  let lines = []
  let hasData = false

  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      hasData = true
      let v = vehicles[i]
      let state = store.vehicles[v.id]
      let tag = getFullTag(v.id)

      // 优先 UUID，回退 tag
      let alive = false
      if (state && state.status === 'alive') {
        alive = findVehicleEntity(server, state, tag) !== null
      }

      let statusText = ''
      if (alive) {
        statusText = '§a✓ 存活'
      } else if (state && state.status === 'respawning') {
        statusText = '§e⟳ 重生中 (' + (v.respawnDelay / 20) + '秒)'
      } else {
        statusText = '§c✗ 待部署'
      }

      lines.push('§7[' + teamName + '] §e' + v.id
        + ' §7(' + v.vehicleType + ')'
        + ' §8@[' + v.pos[0] + ', ' + v.pos[1] + ', ' + v.pos[2] + ']'
        + ' — ' + statusText)
    }
  }

  if (!hasData) {
    lines.push('§7暂无载具配置')
  }

  return lines
}

// ========== 定期扫描检测（兜底机制）==========

/**
 * 定期扫描：检查标记为存活的实体是否还存在
 * 如果实体不在了（被移除/销毁但未触发死亡事件），则标记为重生
 * 每 40 tick（2 秒）执行一次
 */
function runSweepCheck(server) {
  let store = getStore(server)
  let changed = false

  for (let vehicleId in store.vehicles) {
    if (!store.vehicles.hasOwnProperty(vehicleId)) continue
    let state = store.vehicles[vehicleId]

    if (state.status !== 'alive') continue

    let tag = getFullTag(vehicleId)
    let entity = findVehicleEntity(server, state, tag)
    if (!entity) {
      sbwWarn('扫描发现：载具 [' + vehicleId + '] 实体已不存在（可能被摧毁）')

      let vehicleCfg = findVehicleConfig(vehicleId)
      if (vehicleCfg) {
        state.status = 'dead'
        changed = true
        handleVehicleDestroyed(server, vehicleId, vehicleCfg)
      } else {
        sbwWarn('载具 [' + vehicleId + '] 的配置已不存在，清理状态')
        delete store.vehicles[vehicleId]
        changed = true
      }
    }
  }

  if (changed) {
    saveStore(server, store)
  }
}

// ========== 事件监听 ==========

/**
 * 实体死亡事件 — 快速检测载具被摧毁
 */
EntityEvents.death(event => {
  let entity = event.entity
  let server = event.server

  if (!isGameActive(server)) return

  let vehicleId = extractVehicleIdFromEntity(entity)
  if (!vehicleId) return

  sbwLog('检测到载具实体死亡 [' + vehicleId + ']')

  let vehicleCfg = findVehicleConfig(vehicleId)
  if (vehicleCfg) {
    handleVehicleDestroyed(server, vehicleId, vehicleCfg)
  }
})

/**
 * 合并的 tick 处理器
 * - 每 20 tick：检测游戏开始/结束状态变化
 * - 每 40 tick：兜底扫描
 */
let gameWasActive = false

ServerEvents.tick(event => {
  let server = event.server
  let tick = server.ticks

  // ───────── 游戏状态检测（每 20 tick ≈ 1 秒）─────────
  if (tick % 20 === 0) {
    let active = isGameActive(server)

    if (active && !gameWasActive) {
      gameWasActive = true
      sbwLog('检测到游戏开始，开始自动部署载具...')
      deployAllVehicles(server)
    }

    if (!active && gameWasActive) {
      gameWasActive = false
      sbwLog('检测到游戏结束')
    }
  }

  // ───────── 兜底扫描（每 40 tick ≈ 2 秒）─────────
  if (tick % 40 === 0) {
    if (isGameActive(server)) {
      runSweepCheck(server)
    }
  }
})

// ========== 指令注册已移至 command.js ==========
