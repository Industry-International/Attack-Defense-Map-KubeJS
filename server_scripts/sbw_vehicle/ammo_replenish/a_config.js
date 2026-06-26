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
    rifle_ammo:     192,
    heavy_ammo:     128,
    missile:        8,
    rocket:         16,

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

// ========== 弹药类型映射（含 SBW + MCSP）==========

const AMMO_ID_MAP = {
  // ── SBW 卓越前线本体 ──
  large_shell_ap: 'superbwarfare:large_shell_ap',
  large_shell_he: 'superbwarfare:large_shell_he',
  large_shell_gs: 'superbwarfare:large_shell_gs',
  small_shell_ap: 'superbwarfare:small_shell_ap',
  small_shell_he: 'superbwarfare:small_shell_he',
  rifle_ammo:     'superbwarfare:rifle_ammo',
  heavy_ammo:     'superbwarfare:heavy_ammo',
  missile:        'superbwarfare:missile',
  rocket:         'superbwarfare:rocket',

  // ── MCSP 附属模组 ──
  mcsp_25mm_ap:            'mcsp:25mm_ap',
  mcsp_30mm_ap:            'mcsp:30mm_ap',
  mcsp_40mm_explosive:     'mcsp:40mm_explosive',
  mcsp_40mm_smoke:         'mcsp:40mm_smoke',
  mcsp_120mm_bulletmortar: 'mcsp:120mm_bulletmortar',
  mcsp_125mm_ap:           'mcsp:125mm_ap',
  mcsp_125mm_he:           'mcsp:125mm_he',
  mcsp_bullet762:          'mcsp:bullet762',
  mcsp_smallarmscartridge: 'mcsp:smallarmscartridge',
  mcsp_tow_2:              'mcsp:tow_2',
  mcsp_mlrs_shells:        'mcsp:mlrs_shells'
}

/** 反向映射：item id → 短名（自动构建，含 SBW + MCSP） */
const AMMO_KEY_MAP = {}
for (let k in AMMO_ID_MAP) {
  if (AMMO_ID_MAP.hasOwnProperty(k)) AMMO_KEY_MAP[AMMO_ID_MAP[k]] = k
}

// ========== 弹药显示名 ==========

function getAmmoDisplayName(ammoKey) {
  const names = {
    // ── SBW 卓越前线本体 ──
    large_shell_ap: '§6大口径AP弹',
    large_shell_he: '§c大口径HE弹',
    large_shell_gs: '§a大口径葡萄弹',
    small_shell_ap: '§b小口径AP弹',
    small_shell_he: '§d小口径HE弹',
    rifle_ammo:     '§7步枪弹',
    heavy_ammo:     '§9重弹',
    missile:        '§a导弹',
    rocket:         '§e火箭弹',

    // ── MCSP 附属模组 ──
    mcsp_25mm_ap:            '§b25mm机炮弹',
    mcsp_30mm_ap:            '§d30mm机炮弹',
    mcsp_40mm_explosive:     '§c40mm高爆弹',
    mcsp_40mm_smoke:         '§740mm烟雾弹',
    mcsp_120mm_bulletmortar: '§5120mm迫击炮',
    mcsp_125mm_ap:           '§6125mm穿甲弹',
    mcsp_125mm_he:           '§c125mm高爆弹',
    mcsp_bullet762:          '§77.62mm机枪弹',
    mcsp_smallarmscartridge: '§7小口径弹药',
    mcsp_tow_2:              '§aTOW-2导弹',
    mcsp_mlrs_shells:        '§eMLRS火箭弹'
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

// ========== 载具弹药映射表 ==========
// 数据在 vehicle_ammo_config/*.js 中填充

var VEHICLE_AMMO_MAP = {}

// 统计数量——vehicle_ammo_config 中的 JS 文件加载完后会填充 VEHICLE_AMMO_MAP
// 此日志在脚本加载阶段执行，此时尚未填充，但 KubeJS 加载完成后会自动包含所有数据

