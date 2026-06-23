// ============================================================
// SBW 载具 - 持久化数据工具 & 系统开关
// ============================================================

/**
 * 数据结构（状态由 VEHICLE_STATE 枚举定义，见 state_machine.js）：
 * {
 *   active: true|false,
 *   vehicles: {
 *     "<vehicleId>": {
 *       status: VEHICLE_STATE 中的一个值,
 *       team, vehicleType,
 *       uuid: string | null,
 *       remainingTicks: number | null,
 *       respawnDelay: number
 *     }
 *   }
 * }
 *
 * 状态列表（state_machine.js 中 VEHICLE_STATE 常量）：
 *   uninitialized  — 未初始化
 *   idle           — 空闲
 *   waiting_chunk  — 等待区块加载
 *   chunk_loaded   — 区块已加载
 *   deployed       — 载具已部署
 *   over_capacity  — 载具超量
 *   under_capacity — 载具不足
 *   timing         — 计时中
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
