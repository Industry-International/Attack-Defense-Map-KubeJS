// ============================================================
// 弹药补给站 - 默认配置 & 方块配置读写工具
//
// 每个方块通过 persistentData 独立存储配置：
//   放置/首次访问时自动写入 DEFAULT_STATION_CONFIG
//
// ⚠ 所有 NBT 读写统一使用 block.entity.persistentData
//   block.persistentData 在 LevelBlock 上不存在！
//   不要使用 getEntityData()/setEntityData()！
//
// 配置字段说明：
//   scanRange  {number}  扫描半径（方块）
//   cooldown   {number}  冷却时间（秒）
//   slots      {Object}  弹药类型 → 最大储量（补到此值为止）
// ============================================================

// ========== 默认配置 ==========

const DEFAULT_STATION_CONFIG = {
  // ─── 扫描参数 ───
  scanRange: 12,

  // ─── 冷却时间（秒） ───
  cooldown: 5,

  // ─── 载具驶入后等待时间（秒） ───
  // 载具进入补给站范围后，需持续停留此秒数才触发补给，
  // 中途离开范围则计时重置。
  enterDelay: 3,

  // ─── 弹药最大储量 ───
  // key = 弹药短名, value = 最大储量
  // 扫描到载具后，遍历所有配置类型，若不存在或低于最大值则补充。
  slots: {
    // ── SBW 卓越前线本体 ──
    large_shell_ap: 64,
    large_shell_he: 64,
    large_shell_gs: 64,
    small_shell_ap: 64,
    small_shell_he: 64,
    small_shell_gs: 64,
    small_shell_aa: 64,
    small_rocket:   32,
    rifle_ammo:     192,
    heavy_ammo:     128,
    missile:        8,
    rocket:         16,
    medium_anti_ground_missile: 8,
    large_anti_ground_missile:  8,
    medium_anti_air_missile:    8,
    mortar_shell:   32,
    medium_aerial_bomb: 8,
    small_aerial_bomb:  8,

    // ── MCSP 附属模组 ──
    mcsp_25mm_ap:            128,
    mcsp_30mm_ap:            128,
    mcsp_40mm_explosive:     64,
    mcsp_40mm_smoke:         32,
    mcsp_120mm_bulletmortar: 32,
    mcsp_125mm_ap:           32,
    mcsp_125mm_he:           32,
    mcsp_bullet762:          256,
    mcsp_smallarmscartridge: 256,
    mcsp_tow_2:              16,
    mcsp_mlrs_shells:        32
  }
}

// ========== 弹药类型映射（已数据化）==========
// 
// 弹药类型的完整 ID 映射、显示名等已移至数据包：
//   kubejs/data/sbw_vehicle_db/_ammo_types.json
// 运行时代码通过以下 tools/database.js 函数读取：
//   getAmmoType(shortName)       → { id, displayName, enName, maxStack }
//   getAmmoShortName(fullId)     → shortName
//   getAmmoDisplayName(fullId)   → displayName
//   getAllAmmoShortNames()       → string[]
//   getAmmoFullIdMap()           → { fullId: shortName, ... }
//
// 新增弹药类型只需修改 _ammo_types.json，无需改动 JS 代码。

// ========== 方块配置读取（只读，不写） ==========

/**
 * 读取方块 persistentData 中的补给站配置
 * 
 * 纯读取函数，不负责写入：
 *   - 方块放置时由 BlockEvents.placed 写入一次默认配置
 *   - 后续写入和重置全由 GUI 负责
 *   - 此函数若发现无配置，仅返回默认值（不修改 NBT）
 */
function readBlockConfig(block) {
  try {
    let entity = block.entity
    if (!entity) {
      console.log('[弹药补给站] [警告] 方块无 BlockEntity，返回默认配置')
      return JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG))
    }
    let pd = entity.persistentData
    let raw = pd.getString('StationConfig')
    if (raw) {
      try { return JSON.parse(raw) } catch (_) {}
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG))
  } catch (e) {
    console.log('[弹药补给站] 读取配置出错: ' + e)
    return JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG))
  }
}

// ========== 载具弹药配置由数据包管理 ==========
// 每辆载具的弹药上限在对应 JSON 的 ammoSlots 字段中定义。
// 运行时代码通过 getVehicleById(vehicleId).ammoSlots 读取。

