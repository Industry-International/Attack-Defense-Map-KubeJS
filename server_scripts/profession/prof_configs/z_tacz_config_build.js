// ============================================================
// TACZ 数据兼容层 — 所有数据已迁移至 data/profession_db/
// 此文件仅保留向后兼容的全局引用
// 实际数据加载在 tools/database.js 中完成
// ============================================================

// 触发数据库加载（首次引用时自动执行）
var $IntTag = Java.loadClass('net.minecraft.nbt.IntTag')

// 兼容性全局变量（供旧代码引用）
var GUN_TACZ_FLAT = {}
var GUN_TACZ_CONFIG = { primary: {}, secondary: {}, tertiary: {} }
var PROF_WEAPONS_MAP = {}
var VANILLA_WEAPON_DISPLAY = {}
var VANILLA_WEAPON_AMMO = {}

// 从数据库填充兼容变量
var db = getProfessionDB()
if (db.loaded) {
  VANILLA_WEAPON_DISPLAY = db.VANILLA_WEAPON_DISPLAY
  VANILLA_WEAPON_AMMO = db.VANILLA_WEAPON_AMMO

  // 构建 GUN_TACZ_FLAT
  for (var wid in db.weapons) {
    if (db.weapons.hasOwnProperty(wid)) {
      var w = db.weapons[wid]
      GUN_TACZ_FLAT[wid] = {
        gunId: w.gunId,
        GunFireMode: w.gunFireMode || 'SEMI',
        GunCurrentAmmoCount: w.gunCurrentAmmoCount || 30,
        ammo: w.ammo || {},
        attachments: w.attachments || {},
      }
    }
  }

  // 构建 PROF_WEAPONS_MAP
  for (var pid in db.professions) {
    if (db.professions.hasOwnProperty(pid)) {
      var pc = db.professions[pid]
      if (pc.weaponLists) PROF_WEAPONS_MAP[pid] = pc.weaponLists
    }
  }

  // 构建 GUN_TACZ_CONFIG（按职业 + 分类）
  for (var pid in db.professions) {
    if (!db.professions.hasOwnProperty(pid)) continue
    var pc = db.professions[pid]
    if (!pc.weaponLists) continue
    for (var ci = 0; ci < 3; ci++) {
      var cat = ci === 0 ? 'primary' : (ci === 1 ? 'secondary' : 'tertiary')
      var ids = pc.weaponLists[cat]
      if (!ids) continue
      GUN_TACZ_CONFIG[cat][pid] = {}
      for (var ii = 0; ii < ids.length; ii++) {
        var wid = ids[ii]
        var gd = GUN_TACZ_FLAT[wid]
        if (gd) GUN_TACZ_CONFIG[cat][pid][wid] = gd
      }
    }
  }
}

console.log('[职业数据兼容层] 已就绪，共 ' + Object.keys(GUN_TACZ_FLAT).length + ' 把武器')
