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
 * 检查数量上限 → 检查区块加载状态 → 部署或标记 waiting_chunk
 */
function deployVehicle(server, teamName, vehicleCfg) {
  let vehicleId = vehicleCfg.id, tag = getFullTag(vehicleId)

  // 检查数量是否已达标
  if ((vehicleCfg.maxCount || 0) > 0 && countAliveByTag(server, tag) >= vehicleCfg.maxCount) return

  let store = getStore(server)
  if (!store.vehicles[vehicleId]) {
    store.vehicles[vehicleId] = {
      status: 'idle',
      team: teamName || findVehicleTeam(vehicleId),
      vehicleType: vehicleCfg.vehicleType,
      uuid: null,
      remainingTicks: null,
      respawnDelay: vehicleCfg.respawnDelay || 1200
    }
  }

  let state = store.vehicles[vehicleId]

  // 如果已有非 idle 状态（补员中），不干扰
  if (state.status !== 'idle') {
    sbwLog('[部署] [' + vehicleId + '] 已有补员计划(' + state.status + ')，跳过')
    return
  }

  if (isChunkLoaded(server, vehicleCfg.pos[0], vehicleCfg.pos[2], getVehicleDimension(vehicleCfg))) {
    sbwLog('[部署] [' + vehicleId + '] 区块已加载，立即部署')
    spawnVehicleEntity(server, vehicleCfg)
    state.status = 'idle'
    state.uuid = null
    state.remainingTicks = null
  } else {
    sbwLog('[部署] [' + vehicleId + '] 区块未加载，标记 waiting_chunk')
    state.status = 'waiting_chunk'
    state.remainingTicks = null
  }
  saveStore(server, store)
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
