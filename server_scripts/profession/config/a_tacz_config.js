// ============================================================
// TACZ 共享工具 + 配件改装 GUI（独立模块，需最先加载）
// ============================================================

const $ByteTag = Java.loadClass('net.minecraft.nbt.ByteTag')
const $IntTag = Java.loadClass('net.minecraft.nbt.IntTag')
const $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')

function filler(color) {
  return Item.of(color).withCustomName(Component.literal(''))
}
const PANE = {
  black: filler('minecraft:black_stained_glass_pane'),
  gray:  filler('minecraft:gray_stained_glass_pane'),
}

// ========== 职业标签列表 ==========
const PROF_TAG_LIST = ['assault', 'scout', 'medic', 'support']

// ========== 布局 ==========

const ATTACH_SLOT_POS = {
  scope:        { col: 2, row: 1 },
  muzzle:       { col: 4, row: 1 },
  stock:        { col: 6, row: 1 },
  grip:         { col: 1, row: 3 },
  laser:        { col: 7, row: 3 },
  extended_mag: { col: 4, row: 4 },
  bayonet:      { col: 6, row: 4 },
  ammo_mod:     { col: 4, row: 5 },
}

/** slotKey → KubeJS 自定义翻译键 */
const SLOT_TRANSLATE_KEY = {
  scope:        'gui.kubejs.attach.slot.scope', //瞄具
  muzzle:       'gui.kubejs.attach.slot.muzzle', //枪口
  stock:        'gui.kubejs.attach.slot.stock',//枪托
  grip:         'gui.kubejs.attach.slot.grip',//握把
  laser:        'gui.kubejs.attach.slot.laser',//激光
  extended_mag: 'gui.kubejs.attach.slot.extended_mag',//弹匣
  bayonet:      'gui.kubejs.attach.slot.bayonet',//刺刀
  ammo_mod:     'gui.kubejs.attach.slot.ammo_mod',//弹药
}

/**
 * 跨文件共享容器（空对象，各职业配置通过 PROF_CONFIGS.xxx = ... 向其添加数据）
 * 由于 a_tacz_config.js 最先加载，此 const 全局可见，后续文件可读写其属性
 */
const PROF_CONFIGS = {}

/**
 * 非 TACZ 武器展示表（后面将逐步替换为枪械）
 * key = weapon id, value = 物品 ID
 */
const VANILLA_WEAPON_DISPLAY = {
  sword:    'minecraft:iron_sword',
  bow:      'minecraft:bow',
  crossbow: 'minecraft:crossbow',
  trident:  'minecraft:trident',
  shield:   'minecraft:shield',
  totem:    'minecraft:totem_of_undying',
}

// ========== 持久化 ==========

function getGunAttachments(player, weaponId) {
  var raw
  try { raw = player.persistentData.getString('taczAttachments') } catch(e) { raw = null }
  if (!raw || raw === '') return {}
  try {
    return JSON.parse(raw)[weaponId] || {}
  } catch(e) {
    return {}
  }
}

function setGunAttachment(player, weaponId, slotKey, attachmentId) {
  var existing = ''
  try { existing = player.persistentData.getString('taczAttachments') } catch(e) {}
  var all = {}
  try { all = JSON.parse(existing || '{}') } catch(e) {}
  if (!all[weaponId]) all[weaponId] = {}
  if (attachmentId) all[weaponId][slotKey] = attachmentId
  else delete all[weaponId][slotKey]
  try { player.persistentData.putString('taczAttachments', JSON.stringify(all)) } catch(e) {}
}

function clearGunAttachments(player, weaponId) {
  try {
    var existing = player.persistentData.getString('taczAttachments')
    var all = JSON.parse(existing || '{}')
    delete all[weaponId]
    player.persistentData.putString('taczAttachments', JSON.stringify(all))
  } catch(e) {}
}

// ========== 帮助函数 ==========

/** weaponId 清洗：去空白、去首尾引号 */
function cleanId(raw) {
  return String(raw || '').trim().replace(/^['"]|['"]$/g, '')
}

function isTaczGun(wp) {
  return wp && wp.tag && wp.display === 'tacz:modern_kinetic_gun'
}

/** 根据 GUN_TACZ_CONFIG 中的枪械条目创建 tacz:modern_kinetic_gun 物品 */
function resolveTaczGun(cfg) {
  return Item.of('tacz:modern_kinetic_gun', {
    custom_data: {
      HasBulletInBarrel: $ByteTag.valueOf(1),
      GunId: cfg.gunId,
      GunFireMode: cfg.GunFireMode,
      GunCurrentAmmoCount: $IntTag.valueOf(cfg.GunCurrentAmmoCount),
    },
  })
}

// ========== 配件改装主菜单 ==========

function openAttachmentMenu(player, weaponId, gunId, returnPage) {
  // 标记 GUI 已打开，禁用物品拾取
  player.persistentData.guiOpen = true

  var cfg = getTaczConfig(weaponId)
  if (!cfg) { player.tell(Component.literal('§c未找到枪械配置')); return }
  var gunName = Text.translate(gunId.split(':')[0] + '.gun.' + gunId.split(':')[1] + '.name')

  player.openChestGUI(
    Component.literal('§8').append(gunName).append(Component.literal(' §7')).append(Component.translatable('gui.kubejs.attach.title_suffix')),
    6,
    function(gui) {
      var attachments = getGunAttachments(player, weaponId)

      // 行0
      gui.slot(0, 0, function(slot) {
        slot.setItem(Item.of('minecraft:barrier').withCustomName(Component.translatable('gui.kubejs.attach.back')))
        slot.setLeftClicked(function() { openPage(player, returnPage) })
      })
      gui.slot(4, 0, function(slot) {
        slot.setItem(Item.of('minecraft:knowledge_book').withCustomName(gunName).withLore([Component.translatable('gui.kubejs.attach.hint')]))
      })
      gui.slot(8, 0, function(slot) {
        slot.setItem(Item.of('minecraft:barrier').withCustomName(Component.translatable('gui.kubejs.attach.exit')))
        slot.setLeftClicked(function() { player.closeMenu() })
      })

      // 行2: 分隔
      for (var x = 1; x < 8; x++) gui.slot(x, 2, function(s) { s.setItem(PANE.gray) })

      // 枪械本体
      gui.slot(4, 3, function(slot) {
        slot.setItem(Item.of('tacz:modern_kinetic_gun', { custom_data: { GunId: gunId, GunCurrentAmmoCount: $IntTag.valueOf(30) } }))
      })

      // 配件槽位
      var slotKeys = Object.keys(cfg.attachments)
      for (var s = 0; s < slotKeys.length; s++) {
        var sk = slotKeys[s]
        var pos = ATTACH_SLOT_POS[sk]
        if (!pos) continue
        var ins = attachments[sk]
        gui.slot(pos.col, pos.row, makeSlotCb(sk, ins, player, weaponId, gunId, returnPage))
      }

      // 清空全部
      gui.slot(8, 5, function(slot) {
        slot.setItem(Item.of('minecraft:barrier').withCustomName(Component.translatable('gui.kubejs.attach.clear_all')))
        slot.setLeftClicked(function() {
          clearGunAttachments(player, weaponId)
          player.tell(Component.translatable('msg.kubejs.attach.cleared'))
          openAttachmentMenu(player, weaponId, gunId, returnPage)
        })
      })
    }
  )
}

function makeSlotCb(sk, ins, player, weaponId, gunId, returnPage) {
  return function(slot) {
    if (ins) {
      slot.setItem(
        Item.of('tacz:attachment', { custom_data: { AttachmentId: ins } })
      )
    } else {
      slot.setItem(
        Item.of('minecraft:barrier')
          .withCustomName(Component.translatable('gui.kubejs.attach.select_prefix').append(Component.translatable(SLOT_TRANSLATE_KEY[sk])))
          .withLore([Component.translatable('gui.kubejs.attach.select_hint')])
      )
    }
    // 无论槽位状态，左键一律打开配件选择子页面
    slot.setLeftClicked(function() {
      openAttachmentSelect(player, weaponId, gunId, sk, returnPage)
    })
  }
}

// ========== 配件选择列表（二级界面）==========
// 显示该槽位可用配件，依次排列，空位用屏障填充，点击即安装
// 任何 ID 错误都不会阻止界面打开，错误ID用屏障显示

function openAttachmentSelect(player, weaponId, gunId, slotKey, returnPage) {
  // 标记 GUI 已打开，禁用物品拾取
  player.persistentData.guiOpen = true

  var cfg = getTaczConfig(weaponId)
  if (!cfg) { player.tell(Component.literal('§c未找到枪械配置')); return }
  var list = cfg.attachments[slotKey] || []
  if (list.length === 0) {
    player.tell(Component.literal('§c').append(Component.translatable('gui.kubejs.attach.no_available')))
    return
  }

  var rows = Math.max(3, Math.ceil(list.length / 7) + 2)
  var title = Component.translatable('gui.kubejs.attach.select_title').append(Component.translatable(SLOT_TRANSLATE_KEY[slotKey]))

  player.openChestGUI(title, rows, function(gui) {
    // 顶部和底部边框
    for (var x = 0; x < 9; x++) {
      gui.slot(x, 0, function(s) { s.setItem(PANE.gray) })
      gui.slot(x, rows - 1, function(s) { s.setItem(PANE.gray) })
    }

    // [← 返回] 按钮
    gui.slot(0, 0, function(slot) {
      slot.setItem(Item.of('minecraft:barrier').withCustomName(Component.translatable('gui.kubejs.attach.back')))
      slot.setLeftClicked(function() { openAttachmentMenu(player, weaponId, gunId, returnPage) })
    })

    // 配件网格：点击即安装
    for (var i = 0; i < list.length; i++) {
      (function(att, col, row) {
        gui.slot(col, row, function(slot) {
          slot.setItem(Item.of('tacz:attachment', { custom_data: { AttachmentId: att.id } }))
          slot.setLeftClicked(function() {
            setGunAttachment(player, weaponId, slotKey, att.id)
            player.tell(Component.translatable('msg.kubejs.attach.installed', Component.translatable(SLOT_TRANSLATE_KEY[slotKey])))
            openAttachmentMenu(player, weaponId, gunId, returnPage)
          })
        })
      })(list[i], 1 + (i % 7), 1 + Math.floor(i / 7))
    }

    // 空位填充屏障
    for (var r = 1; r < rows - 1; r++) {
      for (var c = 1; c <= 7; c++) {
        var idx = (r - 1) * 7 + (c - 1)
        if (idx >= list.length) {
          (function(col, row) {
            gui.slot(col, row, function(slot) { slot.setItem(PANE.black) })
          })(c, r)
        }
      }
    }
  })
}

// ============================================================
// 各职业武器配置（集中管理，方便维护）
// 按职业分块（依字母序），每块包含：
//   guns:    枪械配置（getTaczConfig 查表 + 配件改装 + 弹药发放）
//   weapons: GUI 武器 ID 列表（由 merge 文件自动解析展示项）
// 所有数据定义在此文件，因为 KubeJS 7 仅保证此文件的
// const 变量在其他 server_scripts 中全局可见
// 新增/修改武器时，请按块编辑对应 section 即可
// ============================================================

// ==================== 突击兵 Assault ====================
// 特色: CQB 高机动 全自动压制
// 主武器: ak47 (762x39/30rds/AUTO)  scar_l (556x45/30rds/AUTO)
// 副武器: mars (.455/7rds/SEMI)
PROF_CONFIGS.assault = {
  guns: {
    primary: {
      ak47: {
        gunId: 'tacz:ak47', GunFireMode: 'AUTO', GunCurrentAmmoCount: 30,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:762x39', main: 210, level: 2 },
        attachments: {
          scope: [{id:'lavender:scope_rifles_x4'},{id:'lavender:scope_rifles_x2'},{id:'tacz:scope_reflex'},{id:'tacz:scope_uh1'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_cyclone_d2'},{id:'tacz:muzzle_brake_pioneer'},{id:'tacz:muzzle_compensator_trident'},{id:'tacz:muzzle_brake_trex'}],
          stock: [{id:'tacz:stock_heavy'},{id:'tacz:stock_light'},{id:'tacz:stock_tactical'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_nightstick'},{id:'tacz:laser_lopro'}],
        },
      },
      scar_l: {
        gunId: 'tacz:scar_l', GunFireMode: 'AUTO', GunCurrentAmmoCount: 30,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:556x45', main: 210, level: 2 },
        attachments: {
          scope: [{id:'tacz:scope_reflex'},{id:'tacz:scope_uh1'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'}],
          stock: [{id:'tacz:stock_heavy'},{id:'tacz:stock_light'},{id:'tacz:stock_tactical'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_nightstick'},{id:'tacz:laser_lopro'}],
        },
      },
    },
    secondary: {
      mars: {
        gunId: 'lavender:mars', GunFireMode: 'SEMI', GunCurrentAmmoCount: 7,
        ammo: { ammoId: 'tacz:45acp', offhand: 50, level: 2 },
        attachments: {
          scope: [{id:'tacz:scope_reflex'},{id:'tacz:scope_uh1'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'}],
        },
      },
    },
  },
  weapons: { primary: ['ak47','scar_l'], secondary: ['mars'] },
}

// ==================== 医疗兵 Medic ====================
// 特色: 中近距离火力支援，紧凑可靠
// 主武器: hk_mp5a5 (9mm/30rds/AUTO)  aug (556x45/30rds/AUTO)
// 副武器: glock_17 (9mm/17rds/SEMI)
PROF_CONFIGS.medic = {
  guns: {
    primary: {
      hk_mp5a5: {
        gunId: 'tacz:hk_mp5a5', GunFireMode: 'AUTO', GunCurrentAmmoCount: 30,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:9mm', main: 210, level: 1 },
        attachments: {
          scope: [{id:'tacz:sight_t1'},{id:'tacz:sight_t2'},{id:'tacz:sight_552'},{id:'tacz:scope_reflex'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_brake_pioneer'}],
          stock: [{id:'tacz:stock_heavy'},{id:'tacz:stock_light'},{id:'tacz:stock_tactical'},{id:'tacz:stock_hk_slim_line'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          grip: [{id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_cqr'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_lopro'},{id:'tacz:laser_nightstick'}],
        },
      },
      aug: {
        gunId: 'tacz:aug', GunFireMode: 'AUTO', GunCurrentAmmoCount: 30,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:556x45', main: 210, level: 2 },
        attachments: {
          scope: [{id:'tacz:scope_aug_default'},{id:'tacz:scope_reflex'},{id:'tacz:scope_uh1'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_compensator_trident'}],
          stock: [{id:'tacz:stock_heavy'},{id:'tacz:stock_light'},{id:'tacz:stock_tactical'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          grip: [{id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_magpul_afg_2'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_lopro'}],
        },
      },
    },
    secondary: {
      glock_17: {
        gunId: 'tacz:glock_17', GunFireMode: 'SEMI', GunCurrentAmmoCount: 17,
        ammo: { ammoId: 'tacz:9mm', offhand: 50, level: 1 },
        attachments: {
          scope: [{id:'tacz:sight_rmr_dot'},{id:'tacz:sight_acro_pistol'},{id:'tacz:sight_fastfire_pistol'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_lopro'},{id:'tacz:laser_nightstick'}],
        },
      },
    },
  },
  weapons: { primary: ['hk_mp5a5','aug'], secondary: ['glock_17'] },
}

// ==================== 侦察兵 Scout ====================
// 特色: 精准射击，中远距离，高机动
// 主武器: m4a1 (556x45/30rds/AUTO)  sks_tactical (762x39/20rds/SEMI)
// 副武器: p320 (45acp/12rds/SEMI)
PROF_CONFIGS.scout = {
  guns: {
    primary: {
      m4a1: {
        gunId: 'tacz:m4a1', GunFireMode: 'AUTO', GunCurrentAmmoCount: 30,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:556x45', main: 210, level: 2 },
        attachments: {
          scope: [{id:'tacz:sight_t1'},{id:'tacz:sight_t2'},{id:'tacz:sight_552'},{id:'tacz:scope_acog_ta31'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_silencer_phantom_s1'},{id:'tacz:muzzle_brake_pioneer'},{id:'tacz:muzzle_compensator_trident'}],
          stock: [{id:'tacz:stock_heavy'},{id:'tacz:stock_light'},{id:'tacz:stock_tactical'},{id:'tacz:stock_m4ss'},{id:'tacz:stock_moe'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          grip: [{id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_magpul_afg_2'},{id:'tacz:grip_cqr'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_nightstick'},{id:'tacz:laser_lopro'},{id:'tacz:laser_peq15'}],
        },
      },
      sks_tactical: {
        gunId: 'tacz:sks_tactical', GunFireMode: 'SEMI', GunCurrentAmmoCount: 20,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:762x39', main: 140, level: 2 },
        attachments: {
          scope: [{id:'tacz:scope_lpvo_1_6'},{id:'tacz:scope_acog_ta31'},{id:'tacz:scope_elcan_4x'},{id:'tacz:scope_mk5hd'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'},{id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_pioneer'}],
          stock: [{id:'tacz:stock_heavy'},{id:'tacz:stock_light'},{id:'tacz:stock_tactical'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'}],
          grip: [{id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_cqr'}],
        },
      },
    },
    secondary: {
      p320: {
        gunId: 'tacz:p320', GunFireMode: 'SEMI', GunCurrentAmmoCount: 12,
        ammo: { ammoId: 'tacz:45acp', offhand: 50, level: 1 },
        attachments: {
          scope: [{id:'tacz:sight_rmr_dot'},{id:'tacz:sight_acro_pistol'},{id:'tacz:sight_fastfire_pistol'}],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'},{id:'tacz:muzzle_silencer_mirage'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_lopro'}],
        },
      },
    },
  },
  weapons: { primary: ['m4a1','sks_tactical'], secondary: ['p320'] },
}

// ==================== 支援兵 Support ====================
// 特色: 重火力压制，大弹容量
// 主武器: m249 (556x45/75rds/AUTO)  rpk (762x39/40rds/AUTO)
// 副武器: deagle (50ae/7rds/SEMI)
PROF_CONFIGS.support = {
  guns: {
    primary: {
      m249: {
        gunId: 'tacz:m249', GunFireMode: 'AUTO', GunCurrentAmmoCount: 75,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:556x45', main: 525, level: 3 },
        attachments: {
          scope: [{id:'tacz:sight_t1'},{id:'tacz:sight_t2'},{id:'tacz:sight_552'},{id:'tacz:scope_reflex'}],
          muzzle: [{id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_cyclone_d2'},{id:'tacz:muzzle_brake_pioneer'},{id:'tacz:muzzle_compensator_trident'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
          grip: [{id:'tacz:grip_vertical_military'},{id:'tacz:grip_rk0'},{id:'tacz:grip_cqr'}],
        },
      },
      rpk: {
        gunId: 'tacz:rpk', GunFireMode: 'AUTO', GunCurrentAmmoCount: 40,
        HasBulletInBarrel: $ByteTag.valueOf(1),
        ammo: { ammoId: 'tacz:762x39', main: 280, level: 3 },
        attachments: {
          scope: [{id:'tacz:sight_t1'},{id:'tacz:scope_reflex'},{id:'tacz:scope_uh1'}],
          muzzle: [{id:'tacz:muzzle_brake_cthulhu'},{id:'tacz:muzzle_brake_cyclone_d2'},{id:'tacz:muzzle_brake_pioneer'},{id:'tacz:muzzle_compensator_trident'}],
          stock: [{id:'tacz:stock_heavy'},{id:'tacz:stock_light'},{id:'tacz:stock_tactical'}],
          extended_mag: [{id:'tacz:extended_mag_1'},{id:'tacz:extended_mag_2'},{id:'tacz:extended_mag_3'}],
        },
      },
    },
    secondary: {
      deagle: {
        gunId: 'tacz:deagle', GunFireMode: 'SEMI', GunCurrentAmmoCount: 7,
        ammo: { ammoId: 'tacz:50ae', offhand: 30, level: 2 },
        attachments: {
          scope: [{id:'tacz:sight_rmr_dot'},{id:'tacz:sight_acro_pistol'}],
          muzzle: [{id:'tacz:muzzle_brake_trex'}],
          extended_mag: [{id:'tacz:extended_mag_1'}],
          laser: [{id:'tacz:laser_compact'},{id:'tacz:laser_lopro'}],
        },
      },
    },
  },
  weapons: { primary: ['m249','rpk'], secondary: ['deagle'] },
}
