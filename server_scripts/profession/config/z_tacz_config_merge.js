// ============================================================
// TACZ 配置汇总聚合
// 从各职业配置文件中收集数据，构建：
//   1. GUN_TACZ_FLAT     — 扁平查表（weaponId → config）
//   2. GUN_TACZ_CONFIG   — 按职业分类的结构化配置
//   3. PROF_WEAPONS_MAP  — 按职业的武器ID列表
//   4. getTaczConfig()   — 全局查表函数
//   5. getProfessionWeaponList() — 按职业获取 GUI 武器列表
// ============================================================
// 本文件必须在所有 b_tacz_prof_*.js 之后加载（通过 z_ 前缀保证）
//
// 注意：使用直接引用（try/catch）而非 eval() 获取跨文件变量，
//       避免 Rhino 引擎中 eval 在函数内找不到全局 var 变量的问题


// ========== 1. 构建扁平查表（用于 getTaczConfig）==========
// 从 PROF_CONFIGS（定义在 a_tacz_config.js，由各 b_tacz_prof_*.js 填充）读取数据

var GUN_TACZ_FLAT = {}

for (var pi = 0; pi < PROF_TAG_LIST.length; pi++) {
  var prof = PROF_TAG_LIST[pi]
  var profCfg = PROF_CONFIGS[prof]
  if (!profCfg) continue
  var guns = profCfg.guns
  if (!guns) continue

  for (var ci = 0; ci < 2; ci++) {
    var cat = ci === 0 ? 'primary' : 'secondary'
    var catGuns = guns[cat]
    if (!catGuns) continue
    for (var id in catGuns) {
      if (catGuns.hasOwnProperty(id)) {
        GUN_TACZ_FLAT[id] = catGuns[id]
      }
    }
  }
}


// ========== 2. 构建按职业分类的结构化配置 ==========

var GUN_TACZ_CONFIG = {
  primary: {},
  secondary: {},
}
for (var pi = 0; pi < PROF_TAG_LIST.length; pi++) {
  var prof = PROF_TAG_LIST[pi]
  var profCfg = PROF_CONFIGS[prof]
  if (!profCfg) continue
  var guns = profCfg.guns
  if (!guns) continue

  for (var ci = 0; ci < 2; ci++) {
    var cat = ci === 0 ? 'primary' : 'secondary'
    var catGuns = guns[cat]
    if (!catGuns) continue
    GUN_TACZ_CONFIG[cat][prof] = {}
    for (var id in catGuns) {
      if (catGuns.hasOwnProperty(id)) {
        GUN_TACZ_CONFIG[cat][prof][id] = catGuns[id]
      }
    }
  }
}


// ========== 3. 构建按职业的武器ID列表（供 GUI 使用）==========

var PROF_WEAPONS_MAP = {}
for (var pi = 0; pi < PROF_TAG_LIST.length; pi++) {
  var prof = PROF_TAG_LIST[pi]
  var profCfg = PROF_CONFIGS[prof]
  if (!profCfg) continue
  var pw = profCfg.weapons
  if (pw) PROF_WEAPONS_MAP[prof] = pw
}


// ========== 4. 全局查表函数 ==========

/**
 * 从扁平查表中按 weaponId 查找枪械配置
 * @param {string} weaponId - 如 'ak47', 'scar_l', 'mars'
 * @returns {object|null}
 */
function getTaczConfig(weaponId) {
  var id = cleanId(weaponId)
  return GUN_TACZ_FLAT[id] || null
}


// ========== 5. 按职业获取 GUI 武器列表 ==========

/**
 * 获取指定职业可用的武器展示列表
 * @param {string} profession - 'assault' | 'scout' | 'medic' | 'support'
 * @param {'primary'|'secondary'} category - 主武器/副武器
 * @returns {Array<{id:string, display:string, tag?:object}>}
 */
function getProfessionWeaponList(profession, category) {
  var pw = PROF_WEAPONS_MAP[profession]
  if (!pw || !pw[category]) return []

  var ids = pw[category]
  if (ids.length === 0) return []

  var result = []
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i]
    // 检查是否为 TACZ 武器
    var gunCfg = GUN_TACZ_FLAT[id]
    if (gunCfg) {
      result.push({
        id: id,
        display: 'tacz:modern_kinetic_gun',
        tag: {
          custom_data: {
            GunId: gunCfg.gunId,
            GunCurrentAmmoCount: $IntTag.valueOf(gunCfg.GunCurrentAmmoCount),
          },
        },
      })
      continue
    }
    // 检查是否为非 TACZ 武器
    var display = VANILLA_WEAPON_DISPLAY[id]
    if (display) {
      result.push({ id: id, display: display })
      continue
    }
    // 未找到 — 报错占位
    console.error('[TACZ Merge] 未找到武器 [' + id + '] 的展示配置，请检查 ' + profession + ' 的武器列表')
    result.push({ id: id, display: 'minecraft:barrier' })
  }
  return result
}
