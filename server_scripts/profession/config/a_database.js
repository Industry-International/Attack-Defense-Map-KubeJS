// ============================================================
// 职业数据库 - 数据包驱动加载器
// 从 kubejs/data/profession_db/ 自动发现并加载所有职业数据
// 各模块通过全局函数访问，不依赖共享变量
// ============================================================

var $DB_ROOT = 'kubejs/data/profession_db'
var $professionDB = null

// ========== 工具函数（本地） ==========

function cleanId(raw) {
  return String(raw || '').trim().replace(/^['\\\"]|['\\\"]$/g, '')
}

// ========== 核心加载函数 ==========

function loadProfessionDB() {
  // --- 读取注册文件 ---
  var registry = JsonIO.read($DB_ROOT + '/_slot_definitions.json')
  if (!registry || !registry.professions) {
    console.error('[职业数据库] _slot_definitions.json 读取失败')
    $professionDB = { loaded: false, professions: {}, weapons: {}, byProfession: {}, slotDefinitions: {}, profTagList: [], VANILLA_WEAPON_DISPLAY: {}, VANILLA_WEAPON_AMMO: {} }
    return $professionDB
  }

  var db = {
    loaded: true,
    professions: {},          // professionId → merged config (armor, extras, weaponLists, nonTacz)
    weapons: {},              // weaponId → weapon data (gunId, ammo, attachments)
    byProfession: {},         // professionId → [weaponId, ...]
    slotDefinitions: registry.slots || {},  // 配件槽位布局
    profTagList: [],          // 所有职业的 tag 列表
    VANILLA_WEAPON_DISPLAY: {},  // 非 TACZ 显示配置（从 nonTaczDisplay 合并）
    VANILLA_WEAPON_AMMO: {},     // 非 TACZ 弹药配置（从 nonTaczAmmo 合并）
  }

  var profList = registry.professions || []

  for (var pi = 0; pi < profList.length; pi++) {
    var profKey = profList[pi]
    var metaPath = $DB_ROOT + '/' + profKey + '/gui/meta.json'
    var meta = JsonIO.read(metaPath)
    if (!meta) {
      console.warn('[职业数据库] 职业 [' + profKey + '] 无 gui/meta.json，跳过')
      continue
    }
    if (meta.enabled === false) {
      console.log('[职业数据库] 职业 [' + profKey + '] 已禁用，跳过')
      continue
    }

    var profDir = $DB_ROOT + '/' + profKey
    var profConfig = {}
    var weaponIds = []

    // 记录 tag
    if (meta.tag) db.profTagList.push(meta.tag)

    // 遍历 files 列表加载所有数据
    var fileList = meta.files || []
    for (var fi = 0; fi < fileList.length; fi++) {
      var filePath = profDir + '/' + fileList[fi]
      var data = JsonIO.read(filePath)
      if (!data) continue

      // --- gui/*.json: 界面配置 ---
      // gui/primary.json, gui/secondary.json, gui/special.json 包含 options
      if (data.options) {
        if (!profConfig.weaponLists) profConfig.weaponLists = {}
        // 根据文件名推断类别
        var fname = fileList[fi]
        var catMatch = fname.match(/gui\/(\w+)\.json/)
        if (catMatch && catMatch[1] !== 'meta' && catMatch[1] !== 'armor' && catMatch[1] !== 'misc') {
          profConfig.weaponLists[catMatch[1]] = data.options
        }
      }

      // --- data/armor/*.json: 护甲 ---
      if (data.armor) {
        profConfig.armor = data.armor
      }

      // --- data/misc/extras.json: 额外物品 ---
      if (data.extras) {
        profConfig.extras = data.extras
      }

      // --- data/misc/non_tacz.json: 非 TACZ 显示+弹药 ---
      if (data.nonTaczDisplay) {
        if (!profConfig.nonTaczDisplay) profConfig.nonTaczDisplay = {}
        for (var nid in data.nonTaczDisplay) {
          if (data.nonTaczDisplay.hasOwnProperty(nid)) {
            profConfig.nonTaczDisplay[nid] = data.nonTaczDisplay[nid]
            db.VANILLA_WEAPON_DISPLAY[nid] = data.nonTaczDisplay[nid]
          }
        }
      }
      if (data.nonTaczAmmo) {
        if (!profConfig.nonTaczAmmo) profConfig.nonTaczAmmo = {}
        for (var aid in data.nonTaczAmmo) {
          if (data.nonTaczAmmo.hasOwnProperty(aid)) {
            profConfig.nonTaczAmmo[aid] = data.nonTaczAmmo[aid]
            db.VANILLA_WEAPON_AMMO[aid] = data.nonTaczAmmo[aid]
          }
        }
      }

      // --- data/primary|secondary|special/tacz|sbw|misc/*/*.json: 武器数据 ---
      if (data.weaponId && data.gunId) {
        db.weapons[data.weaponId] = data
        db.weapons[data.weaponId]._profession = profKey
        weaponIds.push(data.weaponId)
      }
    }

    // 补全缺失字段
    if (!profConfig.weaponLists) profConfig.weaponLists = { primary: [], secondary: [], tertiary: [] }
    if (!profConfig.extras) profConfig.extras = []
    if (!profConfig.nonTaczDisplay) profConfig.nonTaczDisplay = {}
    if (!profConfig.nonTaczAmmo) profConfig.nonTaczAmmo = {}

    db.professions[profKey] = profConfig
    db.byProfession[profKey] = weaponIds
  }

  console.log('[职业数据库] 加载完成: ' + Object.keys(db.weapons).length + ' 把武器, ' + Object.keys(db.professions).length + ' 个职业')
  $professionDB = db
  return db
}

// ========== 查询函数 ==========

function getProfessionDB() {
  if ($professionDB && $professionDB.loaded) return $professionDB
  return loadProfessionDB()
}

/** 获取职业配置（护甲 + 额外物品 + 武器列表 + 非TACZ） */
function getProfessionConfig(professionId) {
  var db = getProfessionDB()
  var clean = cleanId(professionId)
  return db.professions[clean] || null
}

/** 获取武器数据（gunId、弹药、配件） */
function getWeaponData(weaponId) {
  var db = getProfessionDB()
  var clean = cleanId(weaponId)
  return db.weapons[clean] || null
}

/** TACZ 兼容：根据 weaponId 获取枪械配置 */
function getTaczConfig(weaponId) {
  var data = getWeaponData(weaponId)
  if (!data || !data.gunId) return null
  return {
    gunId: data.gunId,
    GunFireMode: data.gunFireMode || 'SEMI',
    GunCurrentAmmoCount: data.gunCurrentAmmoCount || 30,
    ammo: data.ammo || {},
    attachments: data.attachments || {},
  }
}

/** 获取配件槽位布局 */
function getSlotDefinitions() {
  var db = getProfessionDB()
  return db.slotDefinitions
}

/** 获取职业标签列表 */
function getProfTagList() {
  var db = getProfessionDB()
  return db.profTagList
}

/** 构造 GUI 武器列表（TACZ 生成枪械物品，非 TACZ 从 VANILLA_WEAPON_DISPLAY 查表） */
function getProfessionWeaponList(profession, category) {
  var db = getProfessionDB()
  var $IntTag = Java.loadClass('net.minecraft.nbt.IntTag')
  var cleanProf = cleanId(profession)
  var profCfg = db.professions[cleanProf]
  if (!profCfg || !profCfg.weaponLists) return []
  var ids = profCfg.weaponLists[category]
  if (!ids || ids.length === 0) return []

  var result = []
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i]
    var pureId = cleanId(id)
    var weaponData = db.weapons[pureId]
    if (weaponData) {
      // TACZ 枪械
      result.push({
        id: id,
        display: 'tacz:modern_kinetic_gun',
        tag: { custom_data: { GunId: weaponData.gunId, GunCurrentAmmoCount: $IntTag.valueOf(weaponData.gunCurrentAmmoCount || 30) } }
      })
      continue
    }
    // 非 TACZ 武器
    var displayCfg = db.VANILLA_WEAPON_DISPLAY[pureId]
    if (displayCfg) {
      result.push({ id: id, display: displayCfg.item, i18n: displayCfg.i18n })
      continue
    }
    // 未找到 → 用屏障占位
    console.warn('[职业数据库] 未找到武器 [' + pureId + '] 的展示配置，使用屏障占位')
    result.push({ id: id, display: 'minecraft:barrier' })
  }
  return result
}

/** 获取职业基础配置（护甲 + 额外物品，向下兼容） */
function getProfConfig(id) {
  var cfg = getProfessionConfig(id)
  if (!cfg || !cfg.armor) return null
  return { armor: cfg.armor, extras: cfg.extras || [] }
}
