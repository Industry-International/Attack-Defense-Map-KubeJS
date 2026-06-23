// ============================================================
// SBW 载具 - 载具部署 / 部署接口
// ============================================================

// ========== 载具部署（底层）==========

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

// ========== 部署接口（供命令/补员调用）==========

/**
 * 部署单辆载具
 * 检查数量上限 → 检查附近是否有玩家（确保区块加载）→ 部署
 */
function deployVehicle(server, teamName, vehicleCfg) {
  let vehicleId = vehicleCfg.id, tag = getFullTag(vehicleId)

  // 检查数量是否已达标
  if ((vehicleCfg.maxCount || 0) > 0 && countAliveByTag(server, tag) >= vehicleCfg.maxCount) {
    sbwLog('[部署] [' + vehicleId + '] 已达上限(' + vehicleCfg.maxCount + ')，跳过')
    return
  }

  // 确保状态条目已初始化
  initVehicleState(server, teamName, vehicleCfg)

  let store = getStore(server)
  let state = store.vehicles[vehicleId]

  // 如果已有非 UNINITIALIZED/IDLE 状态（补员中或已部署），不干扰
  if (state.status !== VEHICLE_STATE.UNINITIALIZED && state.status !== VEHICLE_STATE.IDLE) {
    sbwLog('[部署] [' + vehicleId + '] 当前状态为 ' + state.status + '，跳过部署')
    return
  }

  // 检查附近是否有玩家（玩家靠近 = 区块已加载）
  let hasPlayer = hasNearbyPlayer(server, vehicleCfg.pos[0], vehicleCfg.pos[2],
    getVehicleDimension(vehicleCfg), 64)

  if (hasPlayer) {
    sbwLog('[部署] [' + vehicleId + '] 附近有玩家，区块已加载，执行部署')
    transitionState(server, vehicleId, VEHICLE_STATE.CHUNK_LOADED)
  } else {
    sbwLog('[部署] [' + vehicleId + '] 附近无玩家（区块可能未加载），进入等待区块')
    transitionState(server, vehicleId, VEHICLE_STATE.WAITING_CHUNK)
    return
  }

  spawnVehicleEntity(server, vehicleCfg)
  transitionState(server, vehicleId, VEHICLE_STATE.DEPLOYED, { uuid: null, remainingTicks: null })
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
