// ============================================================
// 弹药补给站 - 方块配置读写工具
//
// 每个方块通过 persistentData 独立存储配置：
//   放置时由 BlockEvents.placed 写入一次默认配置（从 JSON 数据文件读取）
//
// 默认配置数据文件：kubejs/data/kubejs/blocks/ammo_crate.json
//   → station_Default 下定义 scanRange / cooldown / enterDelay
// 弹药默认储量数据文件：kubejs/data/kubejs/db/sbw_vehicle_db/_ammo_types.json
//   → ammoCategories.<分类>.ammoList.<短名>.default 字段
//
// ⚠ 所有 NBT 读写统一使用 block.entity.persistentData
//   block.persistentData 在 LevelBlock 上不存在！
//   不要使用 getEntityData()/setEntityData()！
// ⚠ 不要赋值 global，KubeJS 7 中 server_scripts 不能写 global
//
// 配置字段说明：
//   scanRange  {number}  扫描半径（方块）
//   cooldown   {number}  冷却时间（秒）
//   enterDelay {number}  载具驶入后等待时间（秒）
//   slots      {Object}  弹药类型 → 最大储量（补到此值为止）
// ============================================================

// ========== 默认配置路径常量 ==========

/**
 * 补给站默认配置 JSON 文件路径（相对实例根目录）
 */
var $STATION_DEFAULT_JSON = 'kubejs/data/kubejs/blocks/ammo_crate.json'

// ========== 弹药类型映射（已数据化，数据库）==========
// 
// 弹药类型的完整 ID 映射、显示名等已移至数据包：
//   kubejs/data/kubejs/db/sbw_vehicle_db/_ammo_types.json
// 运行时代码通过 tools/database.js 函数读取：
//   getAmmoType(shortName)       → { id, displayName, enName, maxStack }
//   getAmmoShortName(fullId)     → shortName
//   getAmmoDisplayName(fullId)   → displayName
//   getAllAmmoShortNames()       → string[]
//   getAmmoFullIdMap()           → { fullId: shortName, ... }
//
// 新增弹药类型只需修改 _ammo_types.json，无需改动 JS 代码。

// ========== 数据化默认 slots 读取（从 _ammo_types.json）==========

/**
 * 弹药类型 JSON 文件路径
 */
var $AMMO_TYPES_JSON = 'kubejs/data/kubejs/db/sbw_vehicle_db/_ammo_types.json'

/**
 * 从 _ammo_types.json 读取所有弹药类型的默认储量
 *
 * 遍历 ammoCategories → <分类>.ammoList → <短名> 中的 default 字段，
 * 只提取 id（供参考）和 default（实际储量值）。
 * 返回 { shortName: defaultAmount } 的映射对象。
 * 放置方块时将此映射写入 StationConfig.slots。
 *
 * @returns {Object} { large_shell_ap: 64, rifle_ammo: 192, ... }
 */
function getStationDefaultSlots() {
  try {
    var raw = JsonIO.read($AMMO_TYPES_JSON)
    if (!raw || !raw.ammoCategories) {
      console.log('[弹药补给站] [警告] _ammo_types.json 读取失败或缺少 ammoCategories')
      return {}
    }
    var cats = raw.ammoCategories
    var catKeys = Object.keys(cats)
    var slots = {}
    for (var ci = 0; ci < catKeys.length; ci++) {
      var cat = cats[catKeys[ci]]
      if (!cat || !cat.ammoList) continue
      var ammoKeys = Object.keys(cat.ammoList)
      for (var ai = 0; ai < ammoKeys.length; ai++) {
        var shortName = ammoKeys[ai]
        var info = cat.ammoList[shortName]
        // 只取 id 和 default，忽略 name/displayName 等 UI 字段
        if (info && typeof info.default === 'number' && info.default > 0) {
          slots[shortName] = info.default
        }
      }
    }
    console.log('[弹药补给站] 默认弹药 slots 加载完成: ' + Object.keys(slots).length + ' 种')
    return slots
  } catch (e) {
    console.log('[弹药补给站] [警告] 读取 _ammo_types.json 失败: ' + e)
    return {}
  }
}

// ========== 数据化默认配置读取 ==========

/**
 * 从 JSON 数据文件读取补给站默认配置
 * 
 * 读取 kubejs/data/kubejs/blocks/ammo_crate.json 中的 station_Default 字段。
 * JSON 中只存 scanRange / cooldown / enterDelay 三个基础字段，
 * 弹药 slots 默认值由 GUI 代码维护。
 * 
 * @returns {Object} { scanRange, cooldown, enterDelay }
 */
function getStationDefaultConfig() {
  try {
    var raw = JsonIO.read($STATION_DEFAULT_JSON)
    if (raw && raw.station_Default) {
      var cfg = raw.station_Default
      // 字段存在性/类型校验，缺失时给兜底值
      return {
        scanRange: (typeof cfg.scanRange === 'number') ? cfg.scanRange : 12,
        cooldown:  (typeof cfg.cooldown  === 'number') ? cfg.cooldown  : 5,
        enterDelay:(typeof cfg.enterDelay=== 'number') ? cfg.enterDelay: 3
      }
    }
    console.log('[弹药补给站] [警告] JSON 读取成功但缺少 station_Default 字段，使用硬编码兜底')
    return { scanRange: 12, cooldown: 5, enterDelay: 3 }
  } catch (e) {
    console.log('[弹药补给站] [警告] 读取默认配置 JSON 失败: ' + e + '，使用硬编码兜底')
    return { scanRange: 12, cooldown: 5, enterDelay: 3 }
  }
}

// ========== 方块配置读取（只读，不写） ==========

/**
 * 读取方块 persistentData 中的补给站配置
 * 
 * 纯读取函数，不负责写入：
 *   - 方块放置时由 BlockEvents.placed 写入一次默认配置
 *   - 后续写入和重置全由 GUI 负责
 *   - 此函数若发现无配置，仅返回默认值（不修改 NBT）
 * 
 * 返回的对象始终包含完整的字段结构：
 *   { scanRange, cooldown, enterDelay, slots }
 */
function readBlockConfig(block) {
  try {
    let entity = block.entity
    if (!entity) {
      console.log('[弹药补给站] [警告] 方块无 BlockEntity，返回默认配置')
      return {
        scanRange: 12, cooldown: 5, enterDelay: 3, slots: {}
      }
    }
    let pd = entity.persistentData
    let raw = pd.getString('StationConfig')
    if (raw) {
      try {
        var parsed = JSON.parse(raw)
        // 从 JSON 读取基础默认值做字段级兜底
        var defCfg = getStationDefaultConfig()
        return {
          scanRange: (typeof parsed.scanRange  === 'number') ? parsed.scanRange  : defCfg.scanRange,
          cooldown:  (typeof parsed.cooldown   === 'number') ? parsed.cooldown   : defCfg.cooldown,
          enterDelay:(typeof parsed.enterDelay === 'number') ? parsed.enterDelay  : defCfg.enterDelay,
          slots:     (parsed.slots && typeof parsed.slots === 'object') ? parsed.slots : {}
        }
      } catch (_) {}
    }
    // NBT 中无配置 → 返回基础默认值（不含 slots，由 GUI 填充）
    var defCfg = getStationDefaultConfig()
    return {
      scanRange: defCfg.scanRange,
      cooldown:  defCfg.cooldown,
      enterDelay:defCfg.enterDelay,
      slots: {}
    }
  } catch (e) {
    console.log('[弹药补给站] 读取配置出错: ' + e)
    return { scanRange: 12, cooldown: 5, enterDelay: 3, slots: {} }
  }
}

// ========== 载具弹药配置由数据包管理 ==========
// 每辆载具的弹药上限在对应 JSON 的 ammoSlots 字段中定义。
// 运行时代码通过 getVehicleById(vehicleId).ammoSlots 读取。

