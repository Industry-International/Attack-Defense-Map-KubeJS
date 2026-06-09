// ============================================================
// TACZ 枪械配置 + 配件改装 GUI（独立模块，需最先加载）
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
  scope:        'gui.kubejs.attach.slot.scope',
  muzzle:       'gui.kubejs.attach.slot.muzzle',
  stock:        'gui.kubejs.attach.slot.stock',
  grip:         'gui.kubejs.attach.slot.grip',
  laser:        'gui.kubejs.attach.slot.laser',
  extended_mag: 'gui.kubejs.attach.slot.extended_mag',
  bayonet:      'gui.kubejs.attach.slot.bayonet',
  ammo_mod:     'gui.kubejs.attach.slot.ammo_mod',
}

// ========== 枪械配置总表 ==========

const GUN_TACZ_CONFIG = {
  ak47: {
    gunId: 'tacz:ak47',
    ammo: { ammoId: 'tacz:762x39', main: 210, level: 2 },
    attachments: {
      scope: [
        { id: 'lavender:scope_rifles_x4' }
      ],
      muzzle: [
        { id: 'tacz:muzzle_silencer_knight_qd' }, { id: 'tacz:muzzle_silencer_mirage' },
        { id: 'tacz:muzzle_brake_cthulhu' },      { id: 'tacz:muzzle_brake_cyclone_d2' },
        { id: 'tacz:muzzle_brake_pioneer' },      { id: 'tacz:muzzle_compensator_trident' },
        { id: 'tacz:muzzle_brake_trex' },
      ],
      stock: [
        { id: 'tacz:stock_heavy' }, { id: 'tacz:stock_light' }, { id: 'tacz:stock_tactical' },
      ],
      extended_mag: [
        { id: 'tacz:extended_mag_1' }, { id: 'tacz:extended_mag_2' }, { id: 'tacz:extended_mag_3' },
      ],
    },
  },
  mars: {
    gunId: 'lavender:mars',
    ammo: { ammoId: 'tacz:45acp', offhand: 50, level: 2 },
    attachments: {
      scope: [
        { id: 'tacz:scope_reflex' }, { id: 'tacz:scope_uh1' },
      ],
      muzzle: [
        { id: 'tacz:muzzle_silencer_knight_qd' }, { id: 'tacz:muzzle_silencer_mirage' },
      ],
    },
  },
}

// ========== 持久化 ==========

function getGunAttachments(player, weaponId) {
  var raw = player.persistentData.taczAttachments
  if (!raw) return {}
  try { return JSON.parse(raw)[weaponId] || {} } catch(e) { return {} }
}

function setGunAttachment(player, weaponId, slotKey, attachmentId) {
  var all = {}
  try { all = JSON.parse(player.persistentData.taczAttachments || '{}') } catch(e) {}
  if (!all[weaponId]) all[weaponId] = {}
  if (attachmentId) all[weaponId][slotKey] = attachmentId
  else delete all[weaponId][slotKey]
  player.persistentData.taczAttachments = JSON.stringify(all)
}

function clearGunAttachments(player, weaponId) {
  try {
    var all = JSON.parse(player.persistentData.taczAttachments || '{}')
    delete all[weaponId]
    player.persistentData.taczAttachments = JSON.stringify(all)
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

function getTaczConfig(weaponId) {
  return GUN_TACZ_CONFIG[cleanId(weaponId)] || null
}

// ========== 配件改装主菜单 ==========

function openAttachmentMenu(player, weaponId, gunId, returnPage) {
  var cfg = GUN_TACZ_CONFIG[cleanId(weaponId)]
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
        slot.setLeftClicked(function() { player.closeGUI() })
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
        Item.of('tacz:attachment', { AttachmentId: ins })
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

function openAttachmentSelect(player, weaponId, gunId, slotKey, returnPage) {
  var cfg = GUN_TACZ_CONFIG[cleanId(weaponId)]
  if (!cfg) { player.tell(Component.literal('§c未找到枪械配置')); return }
  var list = cfg.attachments[slotKey] || []
  if (list.length === 0) {
    player.tell(Component.literal('§c').append(Component.translatable('gui.kubejs.attach.no_available')))
    return
  }

  var rows = Math.max(3, Math.ceil(list.length / 7) + 2)
  var title = Component.translatable('gui.kubejs.attach.select_title').append(Component.translatable(SLOT_TRANSLATE_KEY[slotKey]))

  player.openChestGUI(title, rows, function(gui) {
    // 顶部边框
    for (var x = 0; x < 9; x++) {
      gui.slot(x, 0, function(s) { s.setItem(PANE.gray) })
    }
    // 底部边框
    for (var x = 0; x < 9; x++) {
      gui.slot(x, rows - 1, function(s) { s.setItem(PANE.gray) })
    }

    // [← 返回] 按钮 (col 0, row 0)
    gui.slot(0, 0, function(slot) {
      slot.setItem(Item.of('minecraft:barrier').withCustomName(Component.translatable('gui.kubejs.attach.back')))
      slot.setLeftClicked(function() { openAttachmentMenu(player, weaponId, gunId, returnPage) })
    })

    // 配件网格：从左到右依次排列，点击即安装并返回主菜单
    for (var i = 0; i < list.length; i++) {
      (function(att, col, row) {
        gui.slot(col, row, function(slot) {
          slot.setItem(Item.of('tacz:attachment', { AttachmentId: att.id }))
          slot.setLeftClicked(function() {
            setGunAttachment(player, weaponId, slotKey, att.id)
            player.tell(Component.translatable('msg.kubejs.attach.installed', Component.translatable(SLOT_TRANSLATE_KEY[slotKey])))
            openAttachmentMenu(player, weaponId, gunId, returnPage)
          })
        })
      })(list[i], 1 + (i % 7), 1 + Math.floor(i / 7))
    }

    // 空位填充屏障：每行第1~7列中未被配件占据的位置放黑色玻璃板
    for (var r = 1; r < rows - 1; r++) {
      for (var c = 1; c <= 7; c++) {
        var idx = (r - 1) * 7 + (c - 1)
        if (idx >= list.length) {
          (function(col, row) {
            gui.slot(col, row, function(slot) {
              slot.setItem(PANE.black)
            })
          })(c, r)
        }
      }
    }
  })
}
