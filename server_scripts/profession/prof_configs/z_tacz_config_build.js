// ============================================================
// TACZ 汇总构建（最后加载，此时 PROF_CONFIGS 已被 b_*.js 填充）
// ============================================================

// 0. 从各职业配置合并非 TACZ 武器显示/弹药表
var VANILLA_WEAPON_DISPLAY = {}
var VANILLA_WEAPON_AMMO = {}
for (var pi = 0; pi < PROF_TAG_LIST.length; pi++) {
  var prof = PROF_TAG_LIST[pi], profCfg = PROF_CONFIGS[prof]
  if (!profCfg) continue
  // 合并非 TACZ 显示配置
  var ntDisplay = profCfg.nonTaczDisplay
  if (ntDisplay) {
    for (var id in ntDisplay) {
      if (ntDisplay.hasOwnProperty(id)) VANILLA_WEAPON_DISPLAY[id] = ntDisplay[id]
    }
  }
  // 合并非 TACZ 弹药配置
  var ntAmmo = profCfg.nonTaczAmmo
  if (ntAmmo) {
    for (var id in ntAmmo) {
      if (ntAmmo.hasOwnProperty(id)) VANILLA_WEAPON_AMMO[id] = ntAmmo[id]
    }
  }
}

// 1. 扁平查表 (weaponId → config)
var GUN_TACZ_FLAT = {}
for (var pi = 0; pi < PROF_TAG_LIST.length; pi++) {
  var prof = PROF_TAG_LIST[pi], profCfg = PROF_CONFIGS[prof]
  if (!profCfg) continue
  var guns = profCfg.guns
  if (!guns) continue
  for (var ci = 0; ci < 2; ci++) {
    var cat = ci === 0 ? 'primary' : 'secondary', catGuns = guns[cat]
    if (!catGuns) continue
    for (var id in catGuns) {
      if (catGuns.hasOwnProperty(id)) GUN_TACZ_FLAT[id] = catGuns[id]
    }
  }
}

// 2. 结构化配置 (按职业)
var GUN_TACZ_CONFIG = { primary: {}, secondary: {}, tertiary: {} }
for (var pi = 0; pi < PROF_TAG_LIST.length; pi++) {
  var prof = PROF_TAG_LIST[pi], profCfg = PROF_CONFIGS[prof]
  if (!profCfg) continue
  var guns = profCfg.guns; if (!guns) continue
  for (var ci = 0; ci < 3; ci++) {
    var cat = ci === 0 ? 'primary' : (ci === 1 ? 'secondary' : 'tertiary'), catGuns = guns[cat]
    if (!catGuns) continue
    GUN_TACZ_CONFIG[cat][prof] = {}
    for (var id in catGuns) {
      if (catGuns.hasOwnProperty(id)) GUN_TACZ_CONFIG[cat][prof][id] = catGuns[id]
    }
  }
}

// 3. 职业武器 ID 列表
var PROF_WEAPONS_MAP = {}
for (var pi = 0; pi < PROF_TAG_LIST.length; pi++) {
  var prof = PROF_TAG_LIST[pi], profCfg = PROF_CONFIGS[prof]
  if (!profCfg) continue
  var pw = profCfg.weapons
  if (pw) PROF_WEAPONS_MAP[prof] = pw
}

// 4. 查表函数
function getTaczConfig(weaponId) {
  var id = cleanId(weaponId)
  return GUN_TACZ_FLAT[id] || null
}

// 5. GUI 武器列表（profession 经 cleanId 清洗）
function getProfessionWeaponList(profession, category) {
  var cleanProf = cleanId(profession)
  var pw = PROF_WEAPONS_MAP[cleanProf]
  if (!pw || !pw[category]) return []
  var ids = pw[category]
  if (ids.length === 0) return []
  var result = []
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i], gunCfg = GUN_TACZ_FLAT[cleanId(id)]
    if (gunCfg) {
      result.push({
        id: id, display: 'tacz:modern_kinetic_gun',
        tag: { custom_data: { GunId: gunCfg.gunId, GunCurrentAmmoCount: $IntTag.valueOf(gunCfg.GunCurrentAmmoCount) } },
      })
      continue
    }
    var displayCfg = VANILLA_WEAPON_DISPLAY[id]
    if (displayCfg) { result.push({ id: id, display: displayCfg.item, i18n: displayCfg.i18n }); continue }
    console.error('[TACZ] 未找到武器 [' + id + '] 的展示配置')
    result.push({ id: id, display: 'minecraft:barrier' })
  }
  return result
}

// 6. 职业基础配置（护甲 + 额外物品，从各职业 PROF_CONFIGS 读取）
function getProfConfig(id) {
  var cfg = PROF_CONFIGS[cleanId(id)]
  if (!cfg || !cfg.armor) return null
  return { armor: cfg.armor, extras: cfg.extras || [] }
}
