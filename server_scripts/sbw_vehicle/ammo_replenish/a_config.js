// ============================================================
// 弹药补给站 - 默认配置 & 方块配置读写工具
//
// 注意：$CompoundTag / $ListTag 等 NBT 类引用已在其他文件
//       中声明（profession/config/a_tacz_config.js 用 const 声明），
//       本文件不重复声明，仅在使用它们的函数中依赖运行时可见性。
//
// 每个方块通过 persistentData 存储独立配置：
//   放置时自动写入 DEFAULT_STATION_CONFIG，
//   运行时通过 readBlockConfig / writeBlockConfig 读写。
//
// 配置字段说明：
//   slots              {Object}  弹药类型 → 补充量
//   scanRange          {number}  扫描半径（方块）
//   enterDelay         {number}  载具驶入范围后等待 tick 再补充（20tick=1秒）
//   cooldown           {number}  每次补充后冷却 tick（0=无冷却）
//   weaponAmmoThreshold {number} 武器预装弹低于此值则补满（0=不补武器弹）
//   targetVehicleIds   {string[]} 白名单（空=全部），排除用前缀 "!vehicleId"
// ============================================================

// ========== 默认配置 ==========

const DEFAULT_STATION_CONFIG = {
  // ─── 弹药补充方案 ───
  // key = 弹药短名, value = 每次补充数量
  // 不在此列表中的弹药类型不受影响
  slots: {
    // 坦克/舰炮用
    large_shell_ap: 64,
    large_shell_he: 64,
    // 小口径炮用
    small_shell_ap: 64,
    small_shell_he: 64,
    // 机枪用
    rifle_ammo: 192,
    // 重机枪/机炮用
    heavy_ammo: 128,
    // 特殊弹药
    missile: 8,
    rocket: 16
  },

  // ─── 扫描参数 ───
  scanRange: 12,

  // ─── 入场延时（tick） ───
  // 载具进入扫描范围后等待此 tick 数才开始补充
  // 避免载具刚路过就被补充
  enterDelay: 40, // 2秒

  // ─── 方块冷却（tick） ───
  // 完成一次补充后需等待此 tick 数才能再次补充
  // 所有载具共享此冷却
  cooldown: 100, // 5秒

  // ─── 武器预装弹阈值 ───
  // 武器 GunData.Ammo 低于此值时补充到 deployNBT 标准值
  // 0 = 不补充武器预装弹
  weaponAmmoThreshold: 1,

  // ─── 载具过滤 ───
  // 空数组 = 所有载具
  // 前缀 "!" 表示排除，如 "!attack_tank_1"
  targetVehicleIds: []
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
 * @param {Internal.Block} block
 * @returns {Object} 配置对象（深拷贝副本，修改后需调用 writeBlockConfig 保存）
 */
function readBlockConfig(block) {
  let pd = block.persistentData
  if (!pd.contains('StationConfig')) {
    // 首次访问 → 写入默认配置
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
    return merged
  } catch (e) {
    sbwLog('[补给站] 配置解析失败: ' + e + '，重置为默认')
    writeBlockConfig(block, DEFAULT_STATION_CONFIG)
    return JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG))
  }
}

/**
 * 将配置写入方块 persistentData
 * @param {Internal.Block} block
 * @param {Object} config
 */
function writeBlockConfig(block, config) {
  block.persistentData.putString('StationConfig', JSON.stringify(config))
}

/**
 * 更新单一方块配置字段
 * @param {Internal.Block} block
 * @param {string} key 配置键名
 * @param {*} value 新值
 */
function updateBlockConfig(block, key, value) {
  let cfg = readBlockConfig(block)
  cfg[key] = value
  writeBlockConfig(block, cfg)
}

/**
 * 更新方块的弹药槽位配置
 * @param {Internal.Block} block
 * @param {string} ammoKey 弹药短名
 * @param {number} amount 补充量（0=不补充此类型）
 */
function setBlockSlotConfig(block, ammoKey, amount) {
  let cfg = readBlockConfig(block)
  if (amount > 0) {
    cfg.slots[ammoKey] = amount
  } else {
    delete cfg.slots[ammoKey]
  }
  writeBlockConfig(block, cfg)
}

/**
 * 读取方块内部的运行时状态（入场追踪、冷却等）
 * @param {Internal.Block} block
 * @returns {Object}
 */
function readBlockRuntime(block) {
  let pd = block.persistentData
  if (!pd.contains('StationRuntime')) {
    let init = {
      enteredVehicles: {},  // { uuid: gameTime } 载具UUID → 首次检测到的gameTime
      cooldownEnd: 0        // 冷却结束的gameTime
    }
    pd.putString('StationRuntime', JSON.stringify(init))
    return JSON.parse(JSON.stringify(init))
  }
  try {
    return JSON.parse(pd.getString('StationRuntime'))
  } catch (e) {
    return { enteredVehicles: {}, cooldownEnd: 0 }
  }
}

/**
 * 写入方块运行时状态
 * @param {Internal.Block} block
 * @param {Object} runtime
 */
function writeBlockRuntime(block, runtime) {
  block.persistentData.putString('StationRuntime', JSON.stringify(runtime))
}

// ========== 配置展示工具 ==========

/**
 * 生成配置摘要文本（用于聊天栏展示）
 * @param {Object} cfg
 * @returns {string}
 */
function formatConfigSummary(cfg) {
  let lines = [
    '§6╔═══ 弹药补给站配置 ═══╗',
    '§7扫描范围: §e' + cfg.scanRange + ' §7格',
    '§7入场延时: §e' + (cfg.enterDelay / 20) + ' §7秒',
    '§7冷却时间: §e' + (cfg.cooldown / 20) + ' §7秒',
    '§7武器弹阈值: §e' + cfg.weaponAmmoThreshold,
    '§7弹药方案:'
  ]
  for (let key in cfg.slots) {
    if (cfg.slots.hasOwnProperty(key)) {
      lines.push('  ' + getAmmoDisplayName(key) + ' §7× §e' + cfg.slots[key])
    }
  }
  if (cfg.targetVehicleIds.length > 0) {
    lines.push('§7载具过滤: §e' + cfg.targetVehicleIds.join(', '))
  } else {
    lines.push('§7载具过滤: §8全部')
  }
  lines.push('§6╚══════════════════════╝')
  return lines.join('\n')
}
