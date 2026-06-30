// ============================================================
// SBW 载具数据库 - 自动发现加载器
//
// 功能：
//   从 kubejs/data/sbw_vehicle_db/ 数据包目录自动发现并加载
//   所有已注册分类下的载具 JSON 文件，构建运行时数据库。
//
// 数据包结构：
//   kubejs/data/sbw_vehicle_db/
//   ├── _registry.json              ← 注册文件（含分类和文件列表）
//   ├── main_battle_tank/           ← 分类目录
//   │   ├── superbwarfare--t_90a.json
//   │   └── ...
//   └── ...
//
// ★ KubeJS 7 限制：server_scripts 中不能赋值 global，
//   因此使用内部 var $vehicleDB 变量存储，不写入 global。
// ============================================================

// ══════════════════════════════════════════════════════════════
//  数据库根路径 & 内部存储
// ══════════════════════════════════════════════════════════════

// ★ 使用与职业数据库相同的相对路径模式 'kubejs/data/...'
//   已验证此模式在服务端正常工作（参考 profession/config/a_database.js）
var $DB_ROOT = 'kubejs/data/sbw_vehicle_db'
// 注意：log.js 在此文件之后加载，顶层只能用 console.log
console.log('[载具部署台] [数据库] 数据库根路径: ' + $DB_ROOT)
var $vehicleDB = null  // 内部缓存，不写入 global
var $ammoDB = null     // 弹药类型缓存

// ══════════════════════════════════════════════════════════════
//  弹药类型加载（从 _ammo_types.json）
// ══════════════════════════════════════════════════════════════

/**
 * 加载弹药类型注册表
 * 
 * 返回结构：
 * {
 *   loaded: true/false,
 *   byShortName: { large_shell_ap: { id, displayName, enName, maxStack }, ... },
 *   byFullId:    { 'superbwarfare:large_shell_ap': 'large_shell_ap', ... }
 * }
 */
function loadAmmoTypes() {
  var raw = JsonIO.read($DB_ROOT + '/_ammo_types.json')
  if (!raw || !raw.ammoTypes) {
    sbwWarn('[数据库] _ammo_types.json 读取失败或格式错误')
    // ★ loaded: true + failed: true — 标记"已尝试过，不再无限重试"
    $ammoDB = { loaded: true, failed: true, byShortName: {}, byFullId: {} }
    return $ammoDB
  }

  var db = { loaded: true, byShortName: {}, byFullId: {} }
  var keys = Object.keys(raw.ammoTypes)
  for (var ki = 0; ki < keys.length; ki++) {
    var shortName = keys[ki]
    var info = raw.ammoTypes[shortName]
    if (!info || !info.id) continue
    db.byShortName[shortName] = info
    db.byFullId[info.id] = shortName
  }

  $ammoDB = db
  sbwLog('[数据库] 弹药类型加载完成: ' + Object.keys(db.byShortName).length + ' 种')
  return db
}

/**
 * 获取已加载的弹药类型数据库
 */
function getAmmoDB() {
  if ($ammoDB && $ammoDB.loaded) return $ammoDB
  return loadAmmoTypes()
}

/**
 * 通过短名获取弹药类型信息
 * @param {string} shortName - 如 "large_shell_ap"
 * @returns {object|null} { id, displayName, enName, maxStack }
 */
function getAmmoType(shortName) {
  var db = getAmmoDB()
  return db.byShortName[shortName] || null
}

/**
 * 通过完整物品 ID 获取弹药短名
 * @param {string} fullId - 如 "superbwarfare:large_shell_ap"
 * @returns {string|null} 短名，如 "large_shell_ap"
 */
function getAmmoShortName(fullId) {
  var db = getAmmoDB()
  return db.byFullId[fullId] || null
}

/**
 * 通过完整物品 ID 获取弹药显示名
 * @param {string} fullId - 如 "superbwarfare:large_shell_ap"
 * @returns {string|null} 显示名
 */
function getAmmoDisplayName(fullId) {
  var shortName = getAmmoShortName(fullId)
  if (!shortName) return null
  var info = getAmmoType(shortName)
  return info ? info.displayName : null
}

/**
 * 获取所有弹药短名列表
 * @returns {string[]}
 */
function getAllAmmoShortNames() {
  var db = getAmmoDB()
  return Object.keys(db.byShortName)
}

/**
 * 获取所有弹药完整 ID → 短名的映射
 * @returns {object}
 */
function getAmmoFullIdMap() {
  var db = getAmmoDB()
  return JSON.parse(JSON.stringify(db.byFullId))
}

// ══════════════════════════════════════════════════════════════
//  核心加载函数
// ══════════════════════════════════════════════════════════════

/**
 * 加载载具数据库，返回数据库对象
 */
function loadVehicleDB() {
  // ── 读取注册文件 ──
  var registry = JsonIO.read($DB_ROOT + '/_registry.json')
  if (!registry || !registry.categories) {
    sbwWarn('[数据库] _registry.json 读取失败或格式错误')
    // ★ loaded: true + failed: true — 标记"已尝试过，不再无限重试"
    $vehicleDB = { loaded: true, failed: true, vehicleCount: 0, registry: null, categories: {}, byId: {}, byCategory: {} }
    return $vehicleDB
  }

  var db = {
    loaded: false,
    vehicleCount: 0,
    registry: registry,
    categories: {},
    byId: {},
    byCategory: {}
  }

  // ── 遍历已启用的分类 ──
  var catKeys = Object.keys(registry.categories)
  for (var ci = 0; ci < catKeys.length; ci++) {
    var catKey = catKeys[ci]
    var catInfo = registry.categories[catKey]

    // 跳过未启用的分类
    if (catInfo.enabled === false) {
      sbwLog('[数据库] 跳过已禁用分类: ' + catKey)
      continue
    }

    // 记录分类信息
    db.categories[catKey] = {
      displayName: catInfo.displayName || catKey,
      description: catInfo.description || '',
      enabled: true
    }
    db.byCategory[catKey] = []

    // ── 读取该分类下的所有载具文件 ──
    var fileList = catInfo.files
    if (!fileList || fileList.length === 0) {
      sbwWarn('[数据库] 分类 ' + catKey + ' 无文件列表')
      continue
    }

    for (var fi = 0; fi < fileList.length; fi++) {
      var filename = fileList[fi]
      var filePath = $DB_ROOT + '/' + catKey + '/' + filename

      try {
        var vehicleData = JsonIO.read(filePath)
        if (!vehicleData || !vehicleData.vehicleId) {
          sbwWarn('[数据库] 文件格式错误: ' + filePath)
          continue
        }

        var vid = vehicleData.vehicleId

        // 填入 byId 索引
        db.byId[vid] = vehicleData

        // 填入 byCategory 索引
        db.byCategory[catKey].push(vid)

      } catch (e) {
        sbwWarn('[数据库] 读取失败: ' + filePath + ' - ' + e)
      }
    }
  }

  // ── 统计 ──
  db.vehicleCount = 0
  var countKeys = Object.keys(db.byId)
  for (var ki = 0; ki < countKeys.length; ki++) {
    if (db.byId[countKeys[ki]]) db.vehicleCount++
  }
  db.loaded = true

  // ── 写入内部缓存 ──
  $vehicleDB = db

  sbwLog('[数据库] 加载完成: ' + db.vehicleCount + ' 辆载具, ' + Object.keys(db.categories).length + ' 个分类')
  return db
}

/**
 * 获取已加载的数据库（若未加载则自动加载）
 */
function getVehicleDB() {
  if ($vehicleDB && $vehicleDB.loaded) {
    return $vehicleDB
  }
  return loadVehicleDB()
}

// ══════════════════════════════════════════════════════════════
//  查询函数
// ══════════════════════════════════════════════════════════════

function getVehicleById(vehicleId) {
  var db = getVehicleDB()
  return db.byId[vehicleId] || null
}

function getVehiclesByCategory(category) {
  var db = getVehicleDB()
  return db.byCategory[category] || []
}

function getAllCategories() {
  var db = getVehicleDB()
  return Object.keys(db.categories)
}

function getAllVehicleIds() {
  var db = getVehicleDB()
  return Object.keys(db.byId)
}
