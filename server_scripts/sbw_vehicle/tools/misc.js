// ============================================================
// SBW 载具 - 杂项工具（ID提取 / 配置查找 / 清除 / 重置）
// ============================================================

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

// ========== 清除指定队伍载具（供命令使用）==========

/**
 * 清除指定队伍的载具实体 + 重置 store 中对应的状态
 * @param {object} server - 服务器实例
 * @param {string|null} teamName - 队伍名，null 表示所有队伍
 * @returns {number} 清除的载具数量
 */
function clearVehicles(server, teamName) {
  let store = getStore(server)
  let count = 0

  let teamsToProcess = []
  if (teamName) {
    if (VEHICLE_CFG.teams[teamName]) {
      teamsToProcess = [teamName]
    } else {
      sbwWarn('未找到队伍 [' + teamName + '] 的载具配置')
      return 0
    }
  } else {
    for (let t in VEHICLE_CFG.teams) {
      if (VEHICLE_CFG.teams.hasOwnProperty(t)) teamsToProcess.push(t)
    }
  }

  for (let ti = 0; ti < teamsToProcess.length; ti++) {
    let tn = teamsToProcess[ti]
    let vehicles = VEHICLE_CFG.teams[tn].vehicles
    for (let i = 0; i < vehicles.length; i++) {
      let v = vehicles[i]
      let vid = v.id
      let tag = getFullTag(vid)
      let state = store.vehicles[vid] || null

      let entity = findVehicleEntity(server, state, tag)
      if (entity) {
        entity.discard()
        count++
        sbwLog('调试清除：已清除载具实体 [' + vid + ']（无掉落物）')
      }
      // 从 store 中删除该载具的状态记录
      if (store.vehicles[vid]) {
        delete store.vehicles[vid]
      }
    }
  }

  saveStore(server, store)

  // 清除全部时，完全擦除 persistentData 键（连 active 标志一起清掉）
  if (!teamName) {
    server.persistentData.putString(VEHICLE_CFG.persistKey, '')
    sbwLog('调试清除：已完全擦除 sbw_vehicle 持久化数据')
  }

  let teamLabel = teamName ? '队伍 [' + teamName + ']' : '所有队伍'
  sbwLog('调试清除：' + teamLabel + ' 已清除 ' + count + ' 个载具实体，状态已重置')
  return count
}

// ========== 重置 ==========

function resetAllVehicles(server) {
  let entityCount = discardAllByTagPrefix(server)
  server.persistentData.putString(VEHICLE_CFG.persistKey, JSON.stringify({ vehicles: {} }))
  sbwLog('已重置：清除 ' + entityCount + ' 个载具实体，状态已清空')
  return { entityCount: entityCount }
}
