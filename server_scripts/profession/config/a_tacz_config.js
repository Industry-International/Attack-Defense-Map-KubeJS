// ============================================================
// TACZ 共享工具 + 配件改装 GUI + 武器配置总表
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

const PROF_CONFIGS = {}
const VANILLA_WEAPON_DISPLAY = {
  sword:    'minecraft:iron_sword',
  bow:      'minecraft:bow',
  crossbow: 'minecraft:crossbow',
  trident:  'minecraft:trident',
  shield:   'minecraft:shield',
  totem:    'minecraft:totem_of_undying',
  snowball: 'minecraft:snowball',
  sentinel: 'superbwarfare:sentinel',
}

// ========== 非 TACZ 武器弹药配置 ==========
// key: 武器 ID (与 VANILLA_WEAPON_DISPLAY 一致)
// value: { item: 物品ID, count: 数量 }
// TACZ 武器的弹药在 b_tacz_prof_*.js 的 ammo 字段中配置
const VANILLA_WEAPON_AMMO = {
  sentinel: { item: 'superbwarfare:ammo_sniper', count: 30 },
  snowball: { item: 'minecraft:snowball',        count: 16 },
}

// 武器配置在 prof_configs/ 目录下:
//   b_tacz_prof_assault.js / _medic.js / _scout.js / _support.js
// 构建在 prof_configs/z_tacz_config_build.js
// 各文件通过 PROF_CONFIGS.xxx = { guns:..., weapons:... } 注入数据

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
function saveGunAttachments(player, weaponId) {
  var pureId = cleanId(weaponId)
  try {
    var raw = player.persistentData.getString('taczAttachments')
    if (!raw || raw === '') { player.tell(Component.translatable('msg.kubejs.attach.nothing_to_save')); return }
    var all = JSON.parse(raw)
    if (all[pureId] && Object.keys(all[pureId]).length > 0) {
      player.persistentData.putString('taczAttachments', JSON.stringify(all))
      player.tell(Component.translatable('msg.kubejs.attach.saved'))
    } else {
      player.tell(Component.translatable('msg.kubejs.attach.nothing_to_save'))
    }
  } catch(e) {
    player.tell(Component.literal('§cSave failed'))
  }
}

// ========== 帮助函数 ==========
function cleanId(raw) {
  return String(raw || '').trim().replace(/^['\"]|['\"]$/g, '')
}
function isTaczGun(wp) {
  return wp && wp.tag && wp.display === 'tacz:modern_kinetic_gun'
}
function resolveTaczGun(cfg) {
  return Item.of('tacz:modern_kinetic_gun', {
    custom_data: {
      HasBulletInBarrel: $ByteTag.valueOf(1),
      GunId: cfg.gunId, GunFireMode: cfg.GunFireMode,
      GunCurrentAmmoCount: $IntTag.valueOf(cfg.GunCurrentAmmoCount),
    },
  })
}

// ========== 配件改装主菜单 ==========
function openAttachmentMenu(player, weaponId, gunId, returnPage) {
  player.persistentData.guiOpen = true
  var cfg = getTaczConfig(weaponId)
  if (!cfg) { player.tell(Component.literal('§c未找到枪械配置')); return }
  var gunName = Text.translate(gunId.split(':')[0] + '.gun.' + gunId.split(':')[1] + '.name')
  player.openChestGUI(
    Component.literal('§8').append(gunName).append(Component.literal(' §7')).append(Component.translatable('gui.kubejs.attach.title_suffix')),
    6,
    function(gui) {
      var attachments = getGunAttachments(player, weaponId)
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
      for (var x = 1; x < 8; x++) gui.slot(x, 2, function(s) { s.setItem(PANE.gray) })
      gui.slot(4, 3, function(slot) {
        slot.setItem(Item.of('tacz:modern_kinetic_gun', { custom_data: { GunId: gunId, GunCurrentAmmoCount: $IntTag.valueOf(30) } }))
      })
      var slotKeys = Object.keys(cfg.attachments)
      for (var s = 0; s < slotKeys.length; s++) {
        var sk = slotKeys[s]; var pos = ATTACH_SLOT_POS[sk]
        if (!pos) continue
        gui.slot(pos.col, pos.row, makeSlotCb(sk, attachments[sk], player, weaponId, gunId, returnPage))
      }
      gui.slot(8, 5, function(slot) {
        slot.setItem(Item.of('minecraft:barrier').withCustomName(Component.translatable('gui.kubejs.attach.clear_all')))
        slot.setLeftClicked(function() {
          clearGunAttachments(player, weaponId)
          player.tell(Component.translatable('msg.kubejs.attach.cleared'))
          openAttachmentMenu(player, weaponId, gunId, returnPage)
        })
      })
      // 左下角保存按钮（保底存档）
      gui.slot(0, 5, function(slot) {
        slot.setItem(Item.of('minecraft:written_book').withCustomName(Component.translatable('gui.kubejs.attach.save')))
        slot.setLeftClicked(function() { saveGunAttachments(player, weaponId) })
      })
    }
  )
}
function makeSlotCb(sk, ins, player, weaponId, gunId, returnPage) {
  return function(slot) {
    if (ins) {
      slot.setItem(Item.of('tacz:attachment', { custom_data: { AttachmentId: ins } }).withLore([Component.translatable('gui.kubejs.attach.right_click_remove')]))
    } else {
      slot.setItem(
        Item.of('minecraft:barrier')
          .withCustomName(Component.translatable('gui.kubejs.attach.select_prefix').append(Component.translatable(SLOT_TRANSLATE_KEY[sk])))
          .withLore([Component.translatable('gui.kubejs.attach.select_hint')])
      )
    }
    slot.setLeftClicked(function() { openAttachmentSelect(player, weaponId, gunId, sk, returnPage) })
    slot.setRightClicked(function() {
      if (ins) {
        setGunAttachment(player, weaponId, sk, null)
        player.tell(Component.translatable('msg.kubejs.attach.removed', Component.translatable(SLOT_TRANSLATE_KEY[sk])))
        openAttachmentMenu(player, weaponId, gunId, returnPage)
      }
    })
  }
}

// ========== 配件选择列表（二级界面）==========
function openAttachmentSelect(player, weaponId, gunId, slotKey, returnPage) {
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
    for (var x = 0; x < 9; x++) {
      gui.slot(x, 0, function(s) { s.setItem(PANE.gray) })
      gui.slot(x, rows - 1, function(s) { s.setItem(PANE.gray) })
    }
    gui.slot(0, 0, function(slot) {
      slot.setItem(Item.of('minecraft:barrier').withCustomName(Component.translatable('gui.kubejs.attach.back')))
      slot.setLeftClicked(function() { openAttachmentMenu(player, weaponId, gunId, returnPage) })
    })
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

// 汇总构建 + 查表函数已移至 z_tacz_config_build.js（最后加载）
