// ============================================================
// 出生点选择器 - 配置常量
//
// 预设出生点坐标由数据包配置，此处仅定义各出生点的
// ID、名称翻译键、坐标模板。
// 可见性由 /spawn_selector visible 命令控制，
// 存储于 server.persistentData。
//
// 队伍标识：
//   "attack"   — 进攻方可见
//   "defense"  — 防守方可见
//   "both"     — 双方可见
//   "none"     — 禁用（默认）
// ============================================================

// ============================================================
// 预设出生点配置
// 数据包通过设置可见性来控制哪些点可用。
// 请根据地图实际坐标修改以下坐标值。
// ============================================================
const SPAWN_POINTS = {
  A: { id: 'A', nameKey: 'spawn.kubejs.point_a',    x: 0, y: 64, z: 0,  dimension: 'minecraft:overworld' },
  B: { id: 'B', nameKey: 'spawn.kubejs.point_b',    x: 0, y: 64, z: 0,  dimension: 'minecraft:overworld' },
  C: { id: 'C', nameKey: 'spawn.kubejs.point_c',    x: 0, y: 64, z: 0,  dimension: 'minecraft:overworld' },
  D: { id: 'D', nameKey: 'spawn.kubejs.point_d',    x: 0, y: 64, z: 0,  dimension: 'minecraft:overworld' },
  E: { id: 'E', nameKey: 'spawn.kubejs.point_e',    x: 0, y: 64, z: 0,  dimension: 'minecraft:overworld' },
}

// ============================================================
// 持久化数据键
// ============================================================
const SPAWN_PREFIX         = 'spawn_'
const SPAWN_VISIBILITY_KEY = SPAWN_PREFIX + 'visibility'       // server: 可见性 JSON
const SPAWN_SELECTED_KEY   = SPAWN_PREFIX + 'selected'         // player: 选中的出生点ID
const SPAWN_ALLOW_KEY      = SPAWN_PREFIX + 'allow_respawn'    // player: 允许他人复活
const SPAWN_PENDING_KEY    = SPAWN_PREFIX + 'pending'          // player: 等待重生选择

// ============================================================
// 工具函数
// ============================================================

/**
 * 获取所有出生点的可见性配置
 * @param {object} server
 * @returns {object} { pointId: "attack"|"defense"|"both"|"none" }
 */
function getSpawnVisibility(server) {
  var raw = server.persistentData.getString(SPAWN_VISIBILITY_KEY)
  if (!raw || raw === '') return {}
  try { return JSON.parse(raw) } catch(e) { return {} }
}

/**
 * 保存出生点可见性配置
 */
function setSpawnVisibility(server, data) {
  server.persistentData.putString(SPAWN_VISIBILITY_KEY, JSON.stringify(data))
}

/**
 * 获取指定出生点的可见队伍
 * @returns {"attack"|"defense"|"both"|"none"}
 */
function getPointVisibility(server, pointId) {
  var vis = getSpawnVisibility(server)
  return vis[pointId] || 'none'
}

/**
 * 获取指定队伍可见的出生点列表
 * @param {object} server
 * @param {string} teamTag - "attack" 或 "defense"
 * @returns {Array} 该队伍可见的出生点对象数组
 */
function getVisiblePoints(server, teamTag) {
  var vis = getSpawnVisibility(server)
  var result = []
  for (var id in SPAWN_POINTS) {
    if (!SPAWN_POINTS.hasOwnProperty(id)) continue
    var v = vis[id] || 'none'
    if (v === 'both' || v === teamTag) {
      result.push(SPAWN_POINTS[id])
    }
  }
  return result
}

/**
 * 获取玩家当前选择的出生点对象（若无返回 null）
 */
function getPlayerSelectedPoint(player) {
  var id = player.persistentData.getString(SPAWN_SELECTED_KEY)
  if (!id || id === '') return null
  return SPAWN_POINTS[id] || null
}

/**
 * 设置玩家选择的出生点
 */
function setPlayerSelectedPoint(player, pointId) {
  if (!pointId || pointId === '') {
    delete player.persistentData[SPAWN_SELECTED_KEY]
  } else {
    player.persistentData.putString(SPAWN_SELECTED_KEY, pointId)
  }
}

/**
 * 判断玩家是否允许他人复活到此
 */
function isPlayerAllowRespawn(player) {
  return player.persistentData.getBoolean(SPAWN_ALLOW_KEY) === true
}

/**
 * 设置玩家是否允许他人复活到此
 */
function setPlayerAllowRespawn(player, allow) {
  player.persistentData.putBoolean(SPAWN_ALLOW_KEY, allow)
}

/**
 * 获取所有在线且允许他人复活的玩家列表（排除指定玩家）
 * @returns {Array<{player: object, name: string, team: string|null}>}
 */
function getAvailableRespawnPlayers(server, excludePlayer) {
  var result = []
  var allPlayers = server.players
  var iter = allPlayers.iterator()
  while (iter.hasNext()) {
    var p = iter.next()
    if (p === excludePlayer) continue
    if (isPlayerAllowRespawn(p)) {
      var team = null
      try {
        var scoreboard = server.getScoreboard()
        var t = scoreboard.getPlayersTeam(p.username)
        if (t) team = t.getName()
      } catch(e) { /* ignore */ }
      result.push({ player: p, name: p.getName().getString(), team: team })
    }
  }
  return result
}
