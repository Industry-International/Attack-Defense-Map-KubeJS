// ============================================================
// TACZ 配件改装 GUI + 共享工具
// 独立模块：声明自己的 Java 类引用，不依赖外部全局变量
// 数据源：通过 database.js 的函数查询
// ============================================================

var $ByteTag = Java.loadClass('net.minecraft.nbt.ByteTag')
var $IntTag = Java.loadClass('net.minecraft.nbt.IntTag')
var $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')

// ========== 工具常量 ==========

function filler(color) {
  return Item.of(color).withCustomName(Component.literal(''))
}
var PANE = {
  black: filler('minecraft:black_stained_glass_pane'),
  gray:  filler('minecraft:gray_stained_glass_pane'),
}

/** slotKey → KubeJS 自定义翻译键 */
var SLOT_TRANSLATE_KEY = {
  scope:        'gui.kubejs.attach.slot.scope',
  muzzle:       'gui.kubejs.attach.slot.muzzle',
  stock:        'gui.kubejs.attach.slot.stock',
  grip:         'gui.kubejs.attach.slot.grip',
  laser:        'gui.kubejs.attach.slot.laser',
  extended_mag: 'gui.kubejs.attach.slot.extended_mag',
  bayonet:      'gui.kubejs.attach.slot.bayonet',
  ammo_mod:     'gui.kubejs.attach.slot.ammo_mod',
}

// ========== 帮助函数 ==========

function cleanId(raw) {
  return String(raw || '').trim().replace(/^['\\\"]|['\\\"]$/g, '')
}

function isTaczGun(wp) {
  return wp && wp.tag && wp.display === 'tacz:modern_kinetic_gun'
}

function resolveTaczGun(cfg) {
  if (!cfg) return null
  return Item.of('tacz:modern_kinetic_gun', {
    custom_data: {
      HasBulletInBarrel: $ByteTag.valueOf(1),
      GunId: cfg.gunId,
      GunFireMode: cfg.GunFireMode || 'SEMI',
      GunCurrentAmmoCount: $IntTag.valueOf(cfg.GunCurrentAmmoCount || 30),
    },
  })
}

// ========== 配件持久化 ==========

function getGunAttachments(player, weaponId) {
  var raw
  try { raw = player.persistentData.getString('taczAttachments') } catch(e) { raw = null }
  if (!raw || raw === '') return {}
  try { return JSON.parse(raw)[weaponId] || {} } catch(e) { return {} }
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

// ========== 配件改装主菜单 ==========

function openAttachmentMenu(player, weaponId, gunId, returnPage) {
  // 没传 returnPage 时默认返回武器配置页
  if (!returnPage) returnPage = 'weapon_config'
  player.persistentData.guiOpen = true
  var cfg = getTaczConfig(weaponId)
  if (!cfg) { player.tell(Component.literal('§c未找到枪械配置')); return }
  var gunName = Text.translate(gunId.split(':')[0] + '.gun.' + gunId.split(':')[1] + '.name')
  var slotDefs = getSlotDefinitions()

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
        var sk = slotKeys[s]; var pos = slotDefs[sk]
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
      gui.slot(0, 5, function(slot) {
        slot.setItem(Item.of('minecraft:written_book').withCustomName(Component.translatable('gui.kubejs.attach.save')))
        slot.setLeftClicked(function() {
          saveGunAttachments(player, weaponId)
          openPage(player, returnPage)
        })
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

// ========== 配件选择列表 ==========

var ATTACH_PAGE_SIZE = 21
function openAttachmentSelect(player, weaponId, gunId, slotKey, returnPage, pageNum) {
  player.persistentData.guiOpen = true
  var cfg = getTaczConfig(weaponId)
  if (!cfg) { player.tell(Component.literal('§c未找到枪械配置')); return }
  var list = cfg.attachments[slotKey]
  if (!list || list.length === 0) {
    player.tell(Component.literal('§c').append(Component.translatable('gui.kubejs.attach.no_available')))
    return
  }
  pageNum = pageNum || 0
  var totalPages = Math.ceil(list.length / ATTACH_PAGE_SIZE)
  if (pageNum >= totalPages) pageNum = 0

  var title = Component.translatable('gui.kubejs.attach.select_title').append(Component.translatable(SLOT_TRANSLATE_KEY[slotKey]))
  player.openChestGUI(title, 5, function(gui) {
    gui.slot(0, 0, function(slot) {
      slot.setItem(Item.of('minecraft:barrier').withCustomName(Component.translatable('gui.kubejs.attach.back')))
      slot.setLeftClicked(function() { openAttachmentMenu(player, weaponId, gunId, returnPage) })
    })
    if (totalPages > 1) {
      gui.slot(4, 0, function(slot) {
        slot.setItem(Item.of('minecraft:book').withCustomName(
          Component.translatable('gui.kubejs.page.info', String(pageNum + 1), String(totalPages))))
      })
      if (pageNum > 0) {
        gui.slot(7, 0, function(slot) {
          slot.setItem(Item.of('minecraft:arrow').withCustomName(Component.translatable('gui.kubejs.page.prev')))
          slot.setLeftClicked(function() { openAttachmentSelect(player, weaponId, gunId, slotKey, returnPage, pageNum - 1) })
        })
      }
      if (pageNum < totalPages - 1) {
        gui.slot(8, 0, function(slot) {
          slot.setItem(Item.of('minecraft:arrow').withCustomName(Component.translatable('gui.kubejs.page.next')))
          slot.setLeftClicked(function() { openAttachmentSelect(player, weaponId, gunId, slotKey, returnPage, pageNum + 1) })
        })
      }
    }
    for (var x = 0; x < 9; x++) gui.slot(x, 4, function(s) { s.setItem(PANE.gray) })
    var start = pageNum * ATTACH_PAGE_SIZE
    var end = Math.min(start + ATTACH_PAGE_SIZE, list.length)
    for (var i = start; i < end; i++) {
      var att = list[i]
      var localIdx = i - start
      var col = 1 + (localIdx % 7)
      var row = 1 + Math.floor(localIdx / 7)
      ;(function(att, col, row) {
        gui.slot(col, row, function(slot) {
          slot.setItem(Item.of('tacz:attachment', { custom_data: { AttachmentId: att } }))
          slot.setLeftClicked(function() {
            setGunAttachment(player, weaponId, slotKey, att)
            player.tell(Component.translatable('msg.kubejs.attach.installed', Component.translatable(SLOT_TRANSLATE_KEY[slotKey])))
            openAttachmentMenu(player, weaponId, gunId, returnPage)
          })
        })
      })(att, col, row)
    }
    for (var i = end; i < start + ATTACH_PAGE_SIZE; i++) {
      var localIdx = i - start
      var col = 1 + (localIdx % 7)
      var row = 1 + Math.floor(localIdx / 7)
      if (row <= 3) {
        ;(function(col, row) { gui.slot(col, row, function(s) { s.setItem(PANE.black) }) })(col, row)
      }
    }
  })
}

// ========== 注意 ==========
// 配件列表中 cfg.attachments[slotKey] 现在返回的是配件 ID 字符串数组（不再是 {id: ...} 对象数组）
// 因为数据包中 attachments 直接存字符串数组
