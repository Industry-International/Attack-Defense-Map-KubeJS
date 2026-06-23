// ============================================================
// SBW 载具 - 状态查询 & ActionBar
// ============================================================

// ========== 弹药摘要 ==========

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

// ========== 详细状态文本 ==========

function getStatusLines(server) {
  let store = getStore(server), lines = []
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
        let s = state.status
        if (s === VEHICLE_STATE.TIMING) {
          let remainingTicks = state.remainingTicks || 0
          let totalDelay = state.respawnDelay || v.respawnDelay || 1200
          lines.push(header + ' §e⟳ 补员中 §7' + Math.ceil(remainingTicks / 20) + 's / ' + Math.ceil(totalDelay / 20) + 's')
        } else if (s === VEHICLE_STATE.WAITING_CHUNK) {
          lines.push(header + ' §7◐ 等待区块')
        } else if (s === VEHICLE_STATE.CHUNK_LOADED) {
          lines.push(header + ' §b◑ 区块就绪')
        } else if (s === VEHICLE_STATE.DEPLOYED) {
          lines.push(header + ' §a✓ 已部署')
        } else if (s === VEHICLE_STATE.OVER_CAPACITY) {
          lines.push(header + ' §c⚠ 载具超量')
        } else if (s === VEHICLE_STATE.UNDER_CAPACITY) {
          lines.push(header + ' §e⬇ 载具不足')
        } else if (s === VEHICLE_STATE.UNINITIALIZED) {
          lines.push(header + ' §8○ 未初始化')
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

// ========== 重生时间文本 ==========

function getRespawnTimeLines(server) {
  let store = getStore(server), lines = [], has = false
  for (let teamName in VEHICLE_CFG.teams) {
    if (!VEHICLE_CFG.teams.hasOwnProperty(teamName)) continue
    let vehicles = VEHICLE_CFG.teams[teamName].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      let v = vehicles[i], state = store.vehicles[v.id]
      if (!state) continue
      let s = state.status
      if (s === VEHICLE_STATE.TIMING) {
        has = true
        let remainingTicks = state.remainingTicks || 0
        let totalDelay = state.respawnDelay || v.respawnDelay || 1200
        lines.push('§7[' + teamName + '] §e' + v.id + ' §7— §e⟳ ' + Math.ceil(remainingTicks / 20) + 's §7/ ' + Math.ceil(totalDelay / 20) + 's')
      } else if (s === VEHICLE_STATE.WAITING_CHUNK) {
        has = true
        lines.push('§7[' + teamName + '] §e' + v.id + ' §7— §7◐ 等待区块')
      } else if (s === VEHICLE_STATE.UNDER_CAPACITY) {
        has = true
        lines.push('§7[' + teamName + '] §e' + v.id + ' §7— §e⬇ 载具不足')
      } else if (s === VEHICLE_STATE.OVER_CAPACITY) {
        has = true
        lines.push('§7[' + teamName + '] §e' + v.id + ' §7— §c⚠ 载具超量')
      } else if (s === VEHICLE_STATE.CHUNK_LOADED) {
        has = true
        lines.push('§7[' + teamName + '] §e' + v.id + ' §7— §b◑ 区块就绪')
      }
    }
  }
  if (!has) lines.push('§7当前没有活跃的补员计划')
  return lines
}

// ========== ActionBar ==========

function buildActionBarText(server) {
  let store = getStore(server), parts = []
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
      } else if (state) {
        let s = state.status
        if (s === VEHICLE_STATE.TIMING) {
          let remainingTicks = state.remainingTicks || 0
          parts.push('§e⟳' + sn + '(' + Math.ceil(remainingTicks / 20) + 's)')
        } else if (s === VEHICLE_STATE.WAITING_CHUNK) {
          parts.push('§7◐' + sn)
        } else if (s === VEHICLE_STATE.CHUNK_LOADED) {
          parts.push('§b◑' + sn)
        } else if (s === VEHICLE_STATE.OVER_CAPACITY) {
          parts.push('§c⚠' + sn)
        } else if (s === VEHICLE_STATE.UNDER_CAPACITY) {
          parts.push('§e⬇' + sn)
        } else if (s === VEHICLE_STATE.UNINITIALIZED) {
          parts.push('§8?' + sn)
        } else {
          parts.push('§8○' + sn)
        }
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
