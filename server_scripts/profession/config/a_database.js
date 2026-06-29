// ============================================================
// 职业数据库 - 数据包驱动加载器（v2 标准化结构）
// 从 _registry.json 单一入口自动发现并加载所有职业数据
// 文件结构：职业根目录下平铺 config/*.json + tacz/*.json
// ============================================================

var $DB_ROOT = 'kubejs/data/profession_db'
var $professionDB = null

// ========== 工具函数（本地） ==========

function cleanId(raw) {
  return String(raw || '').trim().replace(/^['\\\\\\\"]|['\\\\\\\"]$/g, '')
}

// ========== 核心加载函数 ==========

function loadProfessionDB() {
  // --- 读取注册文件（单一入口）---
  var registry = JsonIO.read($DB_ROOT + '/_registry.json')
  if (!registry || !registry.professions) {
    console.error('[职业数据库] _registry.json 读取失败或格式错误')
    $professionDB = { loaded: false, professions: {}, weapons: {}, byProfession: {}, slotDefinitions: {}, profTagList: [], VANILLA_WEAPON_DISPLAY: {}, VANILLA_WEAPON_AMMO: {} }
    return $professionDB
  }

  // --- 读取配件槽位定义 ---
  var slotDef = JsonIO.read($DB_ROOT + '/_slot_definitions.json')

  var db = {
    loaded: true,
    professions: {},          // professionId → merged config (armor, extras, weaponLists, nonTacz)
    weapons: {},              // weaponId → weapon data (gunId, ammo, attachments)
    byProfession: {},         // professionId → [weaponId, ...]
    slotDefinitions: (slotDef && slotDef.slots) ? slotDef.slots : {},
    profTagList: [],          // 所有职业的 tag 列表
    VANILLA_WEAPON_DISPLAY: {},  // 非 TACZ 显示配置（从 nonTaczDisplay 合并）
    VANILLA_WEAPON_AMMO: {},     // 非 TACZ 弹药配置（从 nonTaczAmmo 合并）
  }

  var profKeys = Object.keys(registry.professions)
  for (var pi = 0; pi < profKeys.length; pi++) {
    var profKey = profKeys[pi]
    var profInfo = registry.professions[profKey]

    // enabled 开关在 _registry.json 中控制
    if (profInfo.enabled === false) {
      console.log('[职业数据库] 职业 [' + profKey + '] 已禁用，跳过')
      continue
    }

    var profDir = $DB_ROOT + '/' + profKey
    var profConfig = {}
    var weaponIds = []

    // 记录 tag
    if (profInfo.tag) db.profTagList.push(profInfo.tag)

    // 遍历 files 列表加载所有数据
    var fileList = profInfo.files || []
    for (var fi = 0; fi < fileList.length; fi++) {
      var filePath = profDir + '/' + fileList[fi]
      var data = JsonIO.read(filePath)
      if (!data) {
        console.warn('[职业数据库] 文件读取失败: ' + filePath)
        continue
      }

      // --- meta.json: 职业元数据 ---
      if (data.professionId) {
        profConfig.professionId = data.professionId
        profConfig.tag = data.tag
      }

      // --- weapons.json: 武器分类列表 ---
      if (data.weaponLists) {
        profConfig.weaponLists = data.weaponLists
      }

      // --- armor.json: 护甲 ---
      if (data.armor) {
        profConfig.armor = data.armor
      }

      // --- extras.json: 额外物品 ---
      if (data.extras) {
        profConfig.extras = data.extras
      }

      // --- non_tacz.json: 非 TACZ 显示+弹药 ---
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

      // --- tacz/*.json: TACZ 武器数据 ---
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
