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

// ========== 方块配置读写 ==========

/**
 * 读取方块 persistentData 中的补给站配置
 * 若未初始化（新放置的方块），自动写入默认配置并返回
 */
function readBlockConfig(block) {
  let pd = block.entity.persistentData
  if (!pd.contains('StationConfig')) {
    writeBlockConfig(block, DEFAULT_STATION_CONFIG)
    return JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG))
  }

  try {
    let raw = pd.getString('StationConfig')
    let cfg = JSON.parse(raw)
    // 合并默认值（新增字段自动补齐）
    let merged = JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG))
    for (let key in cfg) {
      if (cfg.hasOwnProperty(key)) merged[key] = cfg[key]
    }
    // slots 也要逐字段合并（保留已有配置，新增弹药自动补充默认值）
    if (cfg.slots) {
      for (let sk in DEFAULT_STATION_CONFIG.slots) {
        if (DEFAULT_STATION_CONFIG.slots.hasOwnProperty(sk)) {
          if (cfg.slots[sk] === undefined) {
            merged.slots[sk] = DEFAULT_STATION_CONFIG.slots[sk]
          } else {
            merged.slots[sk] = cfg.slots[sk]
          }
        }
      }
    }
    return merged
  } catch (e) {
    console.log('[弹药补给站] 配置解析失败: ' + e + '，重置为默认')
    writeBlockConfig(block, DEFAULT_STATION_CONFIG)
    return JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG))
  }
}

/**
 * 将配置写入方块 persistentData（自动持久化）
 */
function writeBlockConfig(block, config) {
  block.entity.persistentData.putString('StationConfig', JSON.stringify(config))
}
