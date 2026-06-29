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

var $DB_ROOT = 'kubejs/data/sbw_vehicle_db'
var $vehicleDB = null  // 内部缓存，不写入 global

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
    $vehicleDB = { loaded: false, vehicleCount: 0, registry: null, categories: {}, byId: {}, byCategory: {} }
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
