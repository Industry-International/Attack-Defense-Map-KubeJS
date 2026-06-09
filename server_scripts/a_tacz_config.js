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
  var raw
  try {
    raw = player.persistentData.getString('taczAttachments')
  } catch(e) {
    console.info('[GET_ATTACH] getString error: ' + e)
    raw = null
  }
  console.info('[GET_ATTACH] raw="' + raw + '" weaponId="' + weaponId + '"')
  if (!raw || raw === '') { console.info('[GET_ATTACH] raw empty, return {}'); return {} }
  try {
    var parsed = JSON.parse(raw)
    console.info('[GET_ATTACH] parsed=' + JSON.stringify(parsed))
    var result = parsed[weaponId] || {}
    console.info('[GET_ATTACH] result=' + JSON.stringify(result))
    return result
  } catch(e) {
    console.info('[GET_ATTACH] JSON.parse error: ' + e)
    return {}
  }
}

function setGunAttachment(player, weaponId, slotKey, attachmentId) {
  console.info('[SET_ATTACH] START weaponId="' + weaponId + '" slotKey="' + slotKey + '" id="' + attachmentId + '"')
  var existing = ''
  try {
    existing = player.persistentData.getString('taczAttachments')
  } catch(e) {}
  var all = {}
  try { all = JSON.parse(existing || '{}') } catch(e) { console.info('[SET_ATTACH] parse existing error: ' + e) }
  console.info('[SET_ATTACH] existing all=' + JSON.stringify(all))
  if (!all[weaponId]) all[weaponId] = {}
  if (attachmentId) all[weaponId][slotKey] = attachmentId
  else delete all[weaponId][slotKey]
  var toStore = JSON.stringify(all)
  console.info('[SET_ATTACH] storing: ' + toStore)
  try {
    player.persistentData.putString('taczAttachments', toStore)
    console.info('[SET_ATTACH] putString success')
  } catch(e) {
    console.info('[SET_ATTACH] putString error: ' + e)
  }
}

function clearGunAttachments(player, weaponId) {
  try {
    var existing = player.persistentData.getString('taczAttachments')
    var all = JSON.parse(existing || '{}')
    delete all[weaponId]
    player.persistentData.putString('taczAttachments', JSON.stringify(all))
  } catch(e) {
    console.info('[CLEAR_ATTACH] error: ' + e)
  }
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
      console.info('[ATTACH_MENU] loaded attachments: ' + JSON.stringify(attachments))
  
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
      console.info('[SLOT_CLICK] slotKey: ' + sk + ' weaponId: ' + weaponId)
      player.tell(Component.literal('§a[DEBUG] slot clicked: ' + sk))
      openAttachmentSelect(player, weaponId, gunId, sk, returnPage)
    })
  }
}

// ========== 配件选择列表（二级界面）==========
// 显示该槽位可用配件，依次排列，空位用屏障填充，点击即安装
// 任何 ID 错误都不会阻止界面打开，错误ID用屏障显示

function openAttachmentSelect(player, weaponId, gunId, slotKey, returnPage) {
  console.info('[ATTACH_SELECT] START ' + weaponId + ' ' + gunId + ' ' + slotKey)
  player.tell(Component.literal('§e[DEBUG] openAttachmentSelect START'))

  var cfg = GUN_TACZ_CONFIG[cleanId(weaponId)]
  if (!cfg) {
    console.info('[ATTACH_SELECT] cfg not found for: ' + weaponId)
    player.tell(Component.literal('§c[DEBUG] cfg not found:' + weaponId))
    return
  }
  var list = cfg.attachments[slotKey] || []
  console.info('[ATTACH_SELECT] list count: ' + list.length)

  if (list.length === 0) {
    player.tell(Component.literal('§c').append(Component.translatable('gui.kubejs.attach.no_available')))
    return
  }

  var rows = Math.max(3, Math.ceil(list.length / 7) + 2)
  console.info('[ATTACH_SELECT] rows: ' + rows)

  var title
  try {
    title = Component.translatable('gui.kubejs.attach.select_title').append(Component.translatable(SLOT_TRANSLATE_KEY[slotKey]))
  } catch(e) {
    console.error('[ATTACH_SELECT] title error: ' + e)
    title = Component.literal('Select ' + slotKey)
  }

  player.tell(Component.literal('§e[DEBUG] opening GUI rows=' + rows + ' items=' + list.length))
  console.info('[ATTACH_SELECT] calling openChestGUI')

  try {
    player.openChestGUI(title, rows, function(gui) {
      console.info('[ATTACH_SELECT] GUI callback begin')
      try {
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

        // 配件网格：每个item独立try-catch，失败用屏障显示ID
        for (var i = 0; i < list.length; i++) {
          (function(att, col, row) {
            try {
              var displayItem
              try {
                displayItem = Item.of('tacz:attachment', { custom_data: { AttachmentId: att.id } })
              } catch(e) {
                console.error('[ATTACH_SELECT] Item.of failed: ' + att.id + ' ' + e)
                displayItem = Item.of('minecraft:barrier').withCustomName(Component.literal('§cERR:' + att.id))
              }
              gui.slot(col, row, function(slot) {
                slot.setItem(displayItem)
                slot.setLeftClicked(function() {
                  setGunAttachment(player, weaponId, slotKey, att.id)
                  player.tell(Component.translatable('msg.kubejs.attach.installed', Component.translatable(SLOT_TRANSLATE_KEY[slotKey])))
                  // 校验：安装后立即读取
                  var check = getGunAttachments(player, weaponId)
                  console.info('[ATTACH_INSTALL] saved ' + att.id + ' -> ' + JSON.stringify(check))
                  player.tell(Component.literal('§e[DEBUG] saved: ' + JSON.stringify(check)))
                  openAttachmentMenu(player, weaponId, gunId, returnPage)
                })
              })
            } catch(e2) {
              console.error('[ATTACH_SELECT] slot crash: ' + i + ' ' + e2)
              gui.slot(col, row, function(slot) {
                slot.setItem(Item.of('minecraft:barrier').withCustomName(Component.literal('§cERR:' + (att && att.id || '?'))))
              })
            }
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
        console.info('[ATTACH_SELECT] GUI callback SUCCESS')
      } catch(e) {
        console.error('[ATTACH_SELECT] GUI callback crash: ' + e)
      }
    })
    console.info('[ATTACH_SELECT] openChestGUI returned')
  } catch(e) {
    console.error('[ATTACH_SELECT] openChestGUI crash: ' + e)
    player.tell(Component.literal('§c[DEBUG] openChestGUI failed: ' + e))
  }
}
