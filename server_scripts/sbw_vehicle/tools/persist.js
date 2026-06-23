// ============================================================
// SBW 载具 - 持久化数据工具 & 系统开关
// ============================================================

/**
 * 数据结构：
 * {
 *   active: true|false,
 *   vehicles: {
 *     "<vehicleId>": {
 *       status: "idle" | "timing" | "waiting_chunk",
 *       team, vehicleType,
 *       uuid: string | null,
 *       remainingTicks: number | null,
 *       respawnDelay: number
 *     }
 *   }
 * }
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
