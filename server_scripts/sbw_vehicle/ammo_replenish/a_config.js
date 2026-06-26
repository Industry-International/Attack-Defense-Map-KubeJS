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

  // ─── 弹药最大储量 ───
  // key = 弹药短名, value = 最大储量
  // 扫描到载具后，检查其 Inventory 中已有的弹药类型，
  // 若当前数量 < 此值则补充到此值，超过则跳过。
  slots: {
    large_shell_ap: 64,
    large_shell_he: 64,
    small_shell_ap: 64,
    small_shell_he: 64,
    rifle_ammo:     192,
    heavy_ammo:     128,
    missile:        8,
    rocket:         16
  }
}

// ========== 弹药类型映射 ==========

const AMMO_ID_MAP = {
  large_shell_ap: 'superbwarfare:large_shell_ap',
  large_shell_he: 'superbwarfare:large_shell_he',
  small_shell_ap: 'superbwarfare:small_shell_ap',
  small_shell_he: 'superbwarfare:small_shell_he',
  rifle_ammo:     'superbwarfare:rifle_ammo',
  heavy_ammo:     'superbwarfare:heavy_ammo',
  missile:        'superbwarfare:missile',
  rocket:         'superbwarfare:rocket'
}

/** 反向映射：item id → 短名 */
const AMMO_KEY_MAP = {}
for (let k in AMMO_ID_MAP) {
  if (AMMO_ID_MAP.hasOwnProperty(k)) AMMO_KEY_MAP[AMMO_ID_MAP[k]] = k
}

// ========== 弹药显示名 ==========

function getAmmoDisplayName(ammoKey) {
  const names = {
    large_shell_ap: '§6大口径AP弹',
    large_shell_he: '§c大口径HE弹',
    small_shell_ap: '§b小口径AP弹',
    small_shell_he: '§d小口径HE弹',
    rifle_ammo:     '§7步枪弹',
    heavy_ammo:     '§9重弹',
    missile:        '§a导弹',
    rocket:         '§e火箭弹'
  }
  return names[ammoKey] || ammoKey
}

// ========== 方块配置读取（只读） ==========

/**
 * 读取方块 persistentData 中的补给站配置
 * 
 * 服务器只读不写：
 *   - 方块放置时由 BlockEvents.placed 写入一次默认配置
 *   - 后续写入和重置全由 GUI 负责
 *   - 此函数若发现无配置，仅返回默认值（不修改 NBT）
 */
function readBlockConfig(block) {
  let pd = block.entity.persistentData
  let raw = pd.getString('StationConfig')
  if (raw) {
    try { return JSON.parse(raw) } catch (_) {}
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG))
}
