// ============================================================
// SBW 卓越前线 - 载具自动部署系统 核心逻辑
//
// 状态模型（3状态，状态即队列）：
//   idle          — 空闲，无补员计划
//   timing        — 计时中，倒计时结束后尝试部署
//   waiting_chunk — 等待区块加载，计时已到但区块未加载
//
// 关键设计：
//   1. 状态即队列 — 没有独立部署队列，waiting_chunk 状态本身即代表"在等待"
//   2. 循环检测到短缺时，只有 idle 才启动计时器
//   （timing 和 waiting_chunk 均跳过，杜绝重复计时）
//   3. tick 循环兜底处理 waiting_chunk（每 tick 检测区块是否已加载）
//   4. 所有数量检测基于 countAliveByTag（游戏实际存活数）
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
var $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

/** 已启用 ActionBar 的玩家集合 */
var $actionBarPlayers = new $HashSet()

// ========== JSON → NBT 转换工具 ==========

function toNBT(obj) {
  if (obj === null || obj === undefined) return null
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
      if (val !== null) tag.put(key, val)
    }
    return tag
  }
  if (Array.isArray(obj)) {
    let list = new $ListTag()
    for (let i = 0; i < obj.length; i++) {
      let val = toNBT(obj[i])
      if (val !== null) list.add(val)
    }
    return list
  }
  if (typeof obj === 'string') return $StringTag.valueOf(obj)
  if (typeof obj === 'number') {
    return Number.isInteger(obj) ? $IntTag.valueOf(obj) : $FloatTag.valueOf(obj)
  }
  if (typeof obj === 'boolean') return $ByteTag.valueOf(obj)
  return null
}

function mergeDeployNBT(target, source) {
  if (!source || typeof source !== 'object') return
  for (let key in source) {
    if (!Object.prototype.hasOwnProperty.call(source, key)) continue
    let existing = target.get(key)
    let incoming = toNBT(source[key])
    if (incoming === null) continue
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
 * 数据结构：
 * {
 *   active: true|false,
 *   vehicles: {
 *     "<vehicleId>": {
 *       status: "idle" | "timing" | "waiting_chunk",
 *       team, vehicleType,
 *       uuid: string | null,
 *       timerStart: number | null,
 *       respawnDelay: number
 *     }
 *   }
 * }
 * 注意：idle 条目也保留在 store 中，方便排障。
 */
function getStore(server) {
  let raw = server.persistentData.getString(VEHICLE_CFG.persistKey)
  if (!raw || raw === '') return { vehicles: {} }
  try { return JSON.parse(raw) } catch(e) { return { vehicles: {} } }
}

function saveStore(server, data) {
  server.persistentData.putString(VEHICLE_CFG.persistKey, JSON.stringify(data))
}

function getVehicleState(server, vehicleId) {
  let store = getStore(server)
  return store.vehicles[vehicleId] || null
}

function getFullTag(vehicleId) {
  return VEHICLE_CFG.tagPrefix + vehicleId
}

// ========== 系统开关 ==========

function isSystemActive(server) {
  try { let store = getStore(server); return store.active === true } catch(e) { return false }
}

function setSystemActive(server, active) {
  let store = getStore(server)
  store.active = active
  saveStore(server, store)
  sbwLog(active ? '系统已激活' : '系统已停用')
}

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

// ========== 载具部署 ==========

function spawnVehicleEntity(server, vehicleCfg) {
  let tag = getFullTag(vehicleCfg.id)
  let x = vehicleCfg.pos[0], y = vehicleCfg.pos[1], z = vehicleCfg.pos[2]
  let yaw = vehicleCfg.pos[3] || 0, pitch = vehicleCfg.pos[4] || 0

  let nbt = new $CompoundTag()
  let rotList = new $ListTag()
  rotList.add($FloatTag.valueOf(yaw)); rotList.add($FloatTag.valueOf(pitch))
  nbt.put('Rotation', rotList)
  let tagsList = new $ListTag()
  tagsList.add($StringTag.valueOf(tag))
  nbt.put('Tags', tagsList)

  if (vehicleCfg.deployNBT) mergeDeployNBT(nbt, vehicleCfg.deployNBT)

  let cmd = 'summon ' + vehicleCfg.vehicleType + ' ' + x + ' ' + y + ' ' + z + ' ' + nbt.toString()
  server.runCommandSilent(cmd)

  // 1 tick 后捕获 UUID
  let capturedId = vehicleCfg.id
  server.scheduleInTicks(1, function() {
    let entity = findEntityByTag(server, tag)
    if (entity) {
      let uuid = entity.getNbt().getString('UUID')
      if (uuid) {
        let s = getStore(server)
        if (s.vehicles[capturedId]) { s.vehicles[capturedId].uuid = uuid; saveStore(server, s) }
      }
    }
  })
}

// ========== 状态工具（重置指定补员ID为空闲）==========

/**
 * 强制将指定补员ID的状态重置为 idle
 * 无论当前处于什么状态，都会清理所有关联资源
 */
function forceStateToIdle(state) {
  state.status = 'idle'
  state.timerStart = null
}

/**
 * 判断一个区块坐标是否包含指定的载具部署点
 */
function isVehicleInChunk(vehicleCfg, chunkMinBlockX, chunkMinBlockZ, chunkMaxBlockX, chunkMaxBlockZ) {
  let vx = vehicleCfg.pos[0]
  let vz = vehicleCfg.pos[2]
  return vx >= chunkMinBlockX && vx <= chunkMaxBlockX && vz >= chunkMinBlockZ && vz <= chunkMaxBlockZ
}

// ========== 补员计划管理（3状态机）==========

function ensureVehicleEntry(server, vehicleId, vehicleCfg, teamName) {
  let store = getStore(server)
  if (!store.vehicles[vehicleId]) {
    store.vehicles[vehicleId] = {
      status: 'idle',
      team: teamName || findVehicleTeam(vehicleId),
      vehicleType: vehicleCfg.vehicleType,
      uuid: null,
      timerStart: null,
      respawnDelay: vehicleCfg.respawnDelay || 1200
    }
    saveStore(server, store)
  }
  return store.vehicles[vehicleId]
}

function getAllReplenishEntries() {
  let entries = []
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      entries.push({ vehicleId: vehicles[i].id, vehicleCfg: vehicles[i], teamName: teamName })
    }
  }
  return entries
}

/**
 * 补员检测核心函数（3状态机）
 *
 * 状态流转：
 *   idle           → (数量短缺)              → timing (启动计时器)
 *   idle           → (数量达标)              → idle (无变化)
 *   timing         → (数量达标)              → idle (取消计时)
 *   timing         → (未到期 + 数量短缺)     → timing (不动，等到期)
 *   timing         → (到期 + 区块已加载)     → idle (部署成功)
 *   timing         → (到期 + 区块未加载)     → waiting_chunk (等待区块)
 *   waiting_chunk  → (数量达标)              → idle (取消等待)
 *   waiting_chunk  → (数量短缺)              → waiting_chunk (不动，tick兜底处理)
 *
 * 核心原则：只要状态不是 idle，就不会创建新的计时器或计划。
 */
function checkReplenish(server, vehicleId, vehicleCfg) {
  let store = getStore(server)
  let state = ensureVehicleEntry(server, vehicleId, vehicleCfg, null)
  let tag = getFullTag(vehicleId)
  let maxCount = vehicleCfg.maxCount || 1
  let aliveCount = countAliveByTag(server, tag)

  // ======== 数量达标 → 任何状态都回 idle ========
  if (aliveCount >= maxCount) {
    if (state.status !== 'idle') {
      sbwLog('[补员] [' + vehicleId + '] 存活 ' + aliveCount + '/' + maxCount + ' 达标，取消补员')
      forceStateToIdle(state)
      saveStore(server, store)
    }
    return
  }

  // ======== 数量短缺，根据当前状态决策 ========

  if (state.status === 'idle') {
    // 首次检测到短缺 → 启动计时
    let delay = vehicleCfg.respawnDelay || 1200
    state.status = 'timing'
    state.timerStart = server.ticks
    state.respawnDelay = delay
    sbwLog('[补员] [' + vehicleId + '] 短缺 ' + (maxCount - aliveCount) + ' 辆，' + (delay / 20) + 's 后补员')
    saveStore(server, store)

  } else if (state.status === 'timing') {
    // 计时器已存在，检查是否到期（未到期则什么都不做）
    let delay = state.respawnDelay || vehicleCfg.respawnDelay || 1200
    let timerStart = state.timerStart || server.ticks

    if (server.ticks - timerStart >= delay) {
      // 计时到期
      let dim = getVehicleDimension(vehicleCfg)
      if (isChunkLoaded(server, vehicleCfg.pos[0], vehicleCfg.pos[2], dim)) {
        // 区块已加载 → 部署成功
        sbwLog('[补员] [' + vehicleId + '] 计时到，区块已加载，部署')
        spawnVehicleEntity(server, vehicleCfg)
        state.status = 'idle'
        state.timerStart = null
        state.uuid = null
      } else {
        // 区块未加载 → 切 waiting_chunk，等待区块加载事件
        sbwLog('[补员] [' + vehicleId + '] 计时到但区块未加载，进入 waiting_chunk')
        state.status = 'waiting_chunk'
        state.timerStart = null
      }
      saveStore(server, store)
    }
    // 未到期 → 什么都不做，等待下一轮检测

  } else if (state.status === 'waiting_chunk') {
    // 已在等待区块加载 → 什么都不做
    // tick 兜底的 processWaitingChunk 会处理
  }
}

/**
 * 兜底处理 waiting_chunk 条目（由 tick 循环调用）
 * 防止区块事件在线程竞争下丢失，或区块在监听前已加载
 */
function processWaitingChunk(server) {
  let store = getStore(server)
  let modified = false

  for (let vehicleId in store.vehicles) {
    if (!store.vehicles.hasOwnProperty(vehicleId)) continue
    let state = store.vehicles[vehicleId]
    if (state.status !== 'waiting_chunk') continue

    let cfg = findVehicleConfig(vehicleId)
    if (!cfg) continue

    // 检查区块是否已加载
    let dim = getVehicleDimension(cfg)
    if (isChunkLoaded(server, cfg.pos[0], cfg.pos[2], dim)) {
      // 再确认数量（防止在等待期间数量已恢复）
      let tag = getFullTag(vehicleId)
      let maxCount = cfg.maxCount || 1
      if (countAliveByTag(server, tag) < maxCount) {
        sbwLog('[兜底] waiting_chunk [' + vehicleId + '] 区块已加载，执行部署')
        spawnVehicleEntity(server, cfg)
      } else {
        sbwLog('[兜底] waiting_chunk [' + vehicleId + '] 区块已加载但数量已达标，放弃')
      }
      state.status = 'idle'
      state.uuid = null
      state.timerStart = null
      modified = true
    }
  }

  if (modified) saveStore(server, store)
}

// 注意：KubeJS 7 服务端无 ChunkEvents API，
// waiting_chunk 的处理完全由 tick 循环中的 processWaitingChunk 兜底。
// 配置 checkInterval: 1 时每 tick 检测一次，效率等价于事件驱动。

// ========== 主动部署接口 ==========

function deployVehicle(server, teamName, vehicleCfg) {
  let vehicleId = vehicleCfg.id, tag = getFullTag(vehicleId)

  // 检查数量是否已达标
  if ((vehicleCfg.maxCount || 0) > 0 && countAliveByTag(server, tag) >= vehicleCfg.maxCount) return

  let state = ensureVehicleEntry(server, vehicleId, vehicleCfg, teamName)

  // 如果已有补员计划在运行，不干扰，直接跳过
  if (state.status !== 'idle') {
    sbwLog('[部署] [' + vehicleId + '] 已有补员计划(' + state.status + ')，跳过')
    return
  }

  // 检查区块
  if (isChunkLoaded(server, vehicleCfg.pos[0], vehicleCfg.pos[2], getVehicleDimension(vehicleCfg))) {
    // 区块已加载 → 立即部署
    sbwLog('[部署] [' + vehicleId + '] 区块已加载，立即部署')
    spawnVehicleEntity(server, vehicleCfg)
    state.status = 'idle'
    state.uuid = null
    state.timerStart = null
    saveStore(server, getStore(server))
  } else {
    // 区块未加载 → 进入 waiting_chunk 等待区块加载
    sbwLog('[部署] [' + vehicleId + '] 区块未加载，进入 waiting_chunk')
    state.status = 'waiting_chunk'
    state.timerStart = null
    saveStore(server, getStore(server))
  }
}

function deployTeamVehicles(server, teamName) {
  let teamCfg = VEHICLE_CFG.teams[teamName]
  if (!teamCfg) { sbwWarn('未找到队伍 [' + teamName + '] 的载具配置'); return }
  let vehicles = teamCfg.vehicles
  if (!vehicles || vehicles.length === 0) return
  for (let i = 0; i < vehicles.length; i++) deployVehicle(server, teamName, vehicles[i])
}

function deployAllVehicles(server) {
  for (let teamName in VEHICLE_CFG.teams) {
    if (VEHICLE_CFG.teams.hasOwnProperty(teamName)) deployTeamVehicles(server, teamName)
  }
}

// ========== 工具函数 ==========

function extractVehicleIdFromEntity(entity) {
  let tags = entity.getTags()
  if (!tags) return null
  let iter = tags.iterator()
  while (iter.hasNext()) {
    let tag = iter.next()
    if (tag.startsWith(VEHICLE_CFG.tagPrefix)) return tag.substring(VEHICLE_CFG.tagPrefix.length)
  }
  return null
}

function findVehicleConfig(vehicleId) {
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      if (vehicles[i].id === vehicleId) return vehicles[i]
    }
  }
  return null
}

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

// ========== 重置 ==========

function resetAll(server) {
  let entityCount = discardAllByTagPrefix(server)
  server.persistentData.putString(VEHICLE_CFG.persistKey, JSON.stringify({ vehicles: {} }))
  sbwLog('已重置：清除 ' + entityCount + ' 个载具实体，状态已清空')
  return { entityCount: entityCount }
}

// ========== 状态查询 ==========

function getAmmoSummary(items) {
  if (!items || items.size() === 0) return ''
  let ammoMap = {}
  for (let i = 0; i < items.size(); i++) {
    let item = items.get(i)
    if (!(item instanceof $CompoundTag)) continue
    let id = item.getString('id'), count = item.getInt('count')
    if (!id || count <= 0) continue
    let shortName = id
    if (id === 'superbwarfare:large_shell_ap') shortName = 'AP弹'
    else if (id === 'superbwarfare:large_shell_he') shortName = 'HE弹'
    else if (id === 'superbwarfare:small_shell_ap') shortName = '小AP'
    else if (id === 'superbwarfare:small_shell_he') shortName = '小HE'
    else if (id === 'superbwarfare:rifle_ammo') shortName = '步枪弹'
    else if (id === 'superbwarfare:heavy_ammo') shortName = '重弹'
    else if (id === 'superbwarfare:missile') shortName = '导弹'
    else if (id === 'superbwarfare:rocket') shortName = '火箭弹'
    else { let p = id.split(':'); shortName = p.length > 1 ? p[1] : id }
    if (!ammoMap[shortName]) ammoMap[shortName] = 0
    ammoMap[shortName] += count
  }
  let parts = []
  for (let name in ammoMap) { if (ammoMap.hasOwnProperty(name)) parts.push('§7' + name + ':§f' + ammoMap[name]) }
  return parts.join(' §8| ')
}

function getStatusLines(server) {
  let store = getStore(server), currentTick = server.ticks, lines = []
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    lines.push(''); lines.push('§6=== ' + teamName.toUpperCase() + ' ===')
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      let v = vehicles[i], state = store.vehicles[v.id], tag = getFullTag(v.id)
      let entity = null
      if (state && state.uuid) entity = findEntityByUUID(server, state.uuid)
      if (!entity) entity = findEntityByTag(server, tag)

      let header = '§e' + v.id + ' §7(' + v.vehicleType + ')'

      if (entity) {
        let nbt = entity.getNbt()
        let health = nbt.contains('Health') ? nbt.getFloat('Health') : -1
        let energy = nbt.contains('Energy') ? nbt.getInt('Energy') : -1
        let stats = []
        if (health >= 0) stats.push('§c血量:§f' + health.toFixed(1))
        if (energy >= 0) stats.push('§b能量:§f' + energy)
        lines.push(header + ' §a✓ 存活' + (stats.length > 0 ? ' §8| ' + stats.join(' §8| ') : ''))

        let partInfo = []
        let cp = function(lbl, hk, dk) {
          let h = nbt.contains(hk) ? nbt.getFloat(hk) : -1, d = nbt.contains(dk) ? nbt.getByte(dk) : 0
          if (h >= 0) partInfo.push('§7' + lbl + ':' + (h > 50 ? '§a' : (h > 20 ? '§e' : '§c')) + h.toFixed(0) + (d === 1 ? '§c[损]' : ''))
        }
        cp('左轮','LeftWheelHealth','LeftWheelDamaged'); cp('右轮','RightWheelHealth','RightWheelDamaged')
        cp('主引擎','MainEngineHealth','MainEngineDamaged'); cp('副引擎','SubEngineHealth','SubEngineDamaged')
        cp('炮塔','TurretHealth','TurretDamaged')
        if (partInfo.length > 0) lines.push('  §7[部件] ' + partInfo.join(' §8| '))

        let inv = nbt.get('Inventory')
        if (inv instanceof $CompoundTag) {
          let items = inv.get('Items')
          if (items instanceof $ListTag && items.size() > 0) { let a = getAmmoSummary(items); if (a) lines.push('  §7[弹药] ' + a) }
        }
      } else if (state) {
        if (state.status === 'timing') {
          let delay = state.respawnDelay || v.respawnDelay || 1200
          let remaining = Math.max(0, delay - (currentTick - (state.timerStart || currentTick)))
          lines.push(header + ' §e⟳ 补员中 §7' + Math.ceil(remaining / 20) + 's / ' + Math.ceil(delay / 20) + 's')
        } else if (state.status === 'waiting_chunk') {
          lines.push(header + ' §7◐ 等待区块')
        } else {
          lines.push(header + ' §8○ 空闲')
        }
        if (state.uuid) lines.push('  §8UUID: ' + state.uuid)
      } else {
        lines.push(header + ' §8○ 未初始化')
      }
    }
  }
  return lines
}

function getRespawnTimeLines(server) {
  let store = getStore(server), currentTick = server.ticks, lines = [], has = false
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      let v = vehicles[i], state = store.vehicles[v.id]
      if (!state) continue
      if (state.status === 'timing') {
        has = true
        let delay = state.respawnDelay || v.respawnDelay || 1200
        let remaining = Math.max(0, delay - (currentTick - (state.timerStart || currentTick)))
        lines.push('§7[' + teamName + '] §e' + v.id + ' §7— §e⟳ ' + Math.ceil(remaining / 20) + 's §7/ ' + Math.ceil(delay / 20) + 's')
      } else if (state.status === 'waiting_chunk') {
        has = true
        lines.push('§7[' + teamName + '] §e' + v.id + ' §7— §7◐ 等待区块')
      }
    }
  }
  if (!has) lines.push('§7当前没有活跃的补员计划')
  return lines
}

// ========== ActionBar ==========

function buildActionBarText(server) {
  let store = getStore(server), currentTick = server.ticks, parts = []
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    for (let v of VEHICLE_CFG.teams[teamName].vehicles) {
      let state = store.vehicles[v.id], tag = getFullTag(v.id), sn = v.id
      let entity = null
      if (state && state.uuid) entity = findEntityByUUID(server, state.uuid)
      if (!entity) entity = findEntityByTag(server, tag)
      if (entity) {
        let h = entity.getNbt().contains('Health') ? entity.getNbt().getFloat('Health') : -1
        parts.push((h > 200 ? '§a' : (h > 0 ? '§e' : '§c')) + '✓' + sn)
      } else if (state && state.status === 'timing') {
        let delay = state.respawnDelay || v.respawnDelay || 1200
        let remaining = Math.max(0, delay - (currentTick - (state.timerStart || currentTick)))
        parts.push('§e⟳' + sn + '(' + Math.ceil(remaining / 20) + 's)')
      } else if (state && state.status === 'waiting_chunk') {
        parts.push('§7◐' + sn)
      } else {
        parts.push('§8○' + sn)
      }
    }
  }
  return '§6[SBW] §7' + parts.join(' §8| §7')
}

function updateTimeActionBar(server) {
  if ($actionBarPlayers.isEmpty()) return
  let players = server.getAllPlayers()
  if (!players || players.size() === 0) return
  let text = buildActionBarText(server)
  let comp = $Component.literal(text)
  let iter = players.iterator()
  while (iter.hasNext()) {
    let player = iter.next()
    if ($actionBarPlayers.contains(player.getName().getString())) player.displayClientMessage(comp, true)
  }
}

// ========== 事件监听 ==========

EntityEvents.death(event => {
  let entity = event.entity, server = event.server
  if (!isSystemActive(server)) return
  let vid = extractVehicleIdFromEntity(entity)
  if (vid) sbwLog('载具实体死亡 [' + vid + ']（下一轮检测处理）')
})

// ========== 指令注册已移至 command.js ==========
