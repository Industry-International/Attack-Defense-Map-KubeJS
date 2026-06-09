// ============================================================
// 职业选择器 - GUI 交互（服务端 · i18n 规范）
// ============================================================
// 单页面设计：主界面（三个入口居中）→ 职业选 → 主武器 → 副武器
// 翻译定义在 assets/kubejs/lang/{en_us,zh_cn}.json 中
// ============================================================
const $ByteTag = Java.loadClass("net.minecraft.nbt.ByteTag")
const $IntTag = Java.loadClass("net.minecraft.nbt.IntTag")
const $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag")

// ========== 数据定义 ==========

const PROFESSIONS = [
  { id: 'assault' }, { id: 'scout' }, { id: 'medic' }, { id: 'support' },
]
const MAIN_WEAPONS = [
  { id: 'sword',    display: 'minecraft:iron_sword' },
  { id: 'bow',      display: 'minecraft:bow' },
  { id: 'crossbow', display: 'minecraft:crossbow' },
  { id: 'trident',  display: 'minecraft:trident' },
  { id: 'ak47',     display: 'tacz:modern_kinetic_gun', tag: { custom_data: { GunId: 'tacz:ak47', GunCurrentAmmoCount: $IntTag.valueOf(30) } } },
]
const OFFHAND_WEAPONS = [
  { id: 'shield', display: 'minecraft:shield' },
  { id: 'totem',  display: 'minecraft:totem_of_undying' },
  { id: 'mars',   display: 'tacz:modern_kinetic_gun', tag: { custom_data: { GunId: 'lavender:mars' } } },
]

// ========== 辅助工具 ==========

function filler(color) {
  return Item.of(color).withCustomName(Text.of(''))
}
const PANE = {
  black: filler('minecraft:black_stained_glass_pane'),
  gray:  filler('minecraft:gray_stained_glass_pane'),
}

// ========== TACZ 枪械配置表 ==========
// 每把枪独立配置：支持的配件槽 + 弹药信息
// 以表的形式统一管理

/** 配件槽位在 6×9 GUI 中的位置 */
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

/** slotKey → TACZ 内置翻译键 */
const SLOT_TRANSLATE_KEY = {
  scope:        'tacz.attachment.type.scope',
  muzzle:       'tacz.attachment.type.muzzle',
  stock:        'tacz.attachment.type.stock',
  grip:         'tacz.attachment.type.grip',
  laser:        'tacz.attachment.type.laser',
  extended_mag: 'tacz.attachment.type.extended_mag',
  bayonet:      'tacz.attachment.type.bayonet',
  ammo_mod:     'tacz.attachment.type.ammo_mod',
}

/**
 * 共享配件池（按类型分组，多把枪可共用）
 */
const ATTACH_POOL = {
  scope: [
    { id: 'scope_elcan_4x',  nameKey: 'tacz.attachment.scope_elcan_4x.name' },
    { id: 'scope_acog_ta31', nameKey: 'tacz.attachment.scope_acog_ta31.name' },
    { id: 'scope_hamr',      nameKey: 'tacz.attachment.scope_hamr.name' },
    { id: 'scope_lpvo_1_6',  nameKey: 'tacz.attachment.scope_lpvo_1_6.name' },
    { id: 'scope_retro_2x',  nameKey: 'tacz.attachment.scope_retro_2x.name' },
    { id: 'scope_standard_8x', nameKey: 'tacz.attachment.scope_standard_8x.name' },
    { id: 'scope_uh1',       nameKey: 'tacz.attachment.scope_uh1.name' },
    { id: 'scope_reflex',    nameKey: 'tacz.attachment.scope_reflex.name' },
  ],
  muzzle: [
    { id: 'muzzle_silencer_knight_qd', nameKey: 'tacz.attachment.muzzle_silencer_knight_qd.name' },
    { id: 'muzzle_silencer_mirage',    nameKey: 'tacz.attachment.muzzle_silencer_mirage.name' },
    { id: 'muzzle_brake_cthulhu',      nameKey: 'tacz.attachment.muzzle_brake_cthulhu.name' },
    { id: 'muzzle_brake_cyclone_d2',   nameKey: 'tacz.attachment.muzzle_brake_cyclone_d2.name' },
    { id: 'muzzle_brake_pioneer',      nameKey: 'tacz.attachment.muzzle_brake_pioneer.name' },
    { id: 'muzzle_compensator_trident', nameKey: 'tacz.attachment.muzzle_compensator_trident.name' },
    { id: 'muzzle_brake_trex',         nameKey: 'tacz.attachment.muzzle_brake_trex.name' },
  ],
  stock: [
    { id: 'stock_heavy',    nameKey: 'tacz.attachment.stock_heavy.name' },
    { id: 'stock_light',    nameKey: 'tacz.attachment.stock_light.name' },
    { id: 'stock_tactical', nameKey: 'tacz.attachment.stock_tactical.name' },
  ],
  extended_mag: [
    { id: 'extended_mag_1', nameKey: 'tacz.attachment.extended_mag_1.name' },
    { id: 'extended_mag_2', nameKey: 'tacz.attachment.extended_mag_2.name' },
    { id: 'extended_mag_3', nameKey: 'tacz.attachment.extended_mag_3.name' },
  ],
  grip: [
    { id: 'grip_vertical_military', nameKey: 'tacz.attachment.grip_vertical_military.name' },
    { id: 'grip_vertical_ranger',   nameKey: 'tacz.attachment.grip_vertical_ranger.name' },
    { id: 'grip_magpul_afg_2',     nameKey: 'tacz.attachment.grip_magpul_afg_2.name' },
    { id: 'grip_rk0',              nameKey: 'tacz.attachment.grip_rk0.name' },
    { id: 'grip_rk6',              nameKey: 'tacz.attachment.grip_rk6.name' },
    { id: 'grip_cobra',            nameKey: 'tacz.attachment.grip_cobra.name' },
    { id: 'grip_cqr',              nameKey: 'tacz.attachment.grip_cqr.name' },
    { id: 'grip_td',               nameKey: 'tacz.attachment.grip_td.name' },
  ],
  laser: [
    { id: 'laser_compact',    nameKey: 'tacz.attachment.laser_compact.name' },
    { id: 'laser_lopro',      nameKey: 'tacz.attachment.laser_lopro.name' },
    { id: 'laser_peq15',      nameKey: 'tacz.attachment.laser_peq15.name' },
    { id: 'laser_nightstick', nameKey: 'tacz.attachment.laser_nightstick.name' },
  ],
  bayonet: [
    { id: 'bayonet_6h3', nameKey: 'tacz.attachment.bayonet_6h3.name' },
    { id: 'bayonet_m9',  nameKey: 'tacz.attachment.bayonet_m9.name' },
  ],
  ammo_mod: [
    { id: 'ammo_mod_fmj',  nameKey: 'tacz.attachment.ammo_mod_fmj.name' },
    { id: 'ammo_mod_hp',   nameKey: 'tacz.attachment.ammo_mod_hp.name' },
    { id: 'ammo_mod_i',    nameKey: 'tacz.attachment.ammo_mod_i.name' },
    { id: 'ammo_mod_slug', nameKey: 'tacz.attachment.ammo_mod_slug.name' },
  ],
}

/**
 * TACZ 枪械配置总表（weaponId → 配置）
 * slots: 允许的配件槽列表（引用 ATTACH_POOL）
 * ammo:  弹药配置（用于装备发放）
 */
const GUN_TACZ_CONFIG = {
  ak47: {
    gunId: 'tacz:ak47',
    slots: ['scope', 'stock', 'muzzle', 'extended_mag'],
    ammo: { ammoId: 'tacz:762x39', main: 210, level: 2 },
  },
  mars: {
    gunId: 'lavender:mars',
    slots: ['scope', 'muzzle'],
    ammo: { ammoId: 'tacz:45acp', offhand: 50, level: 2 },
  },
}

// ========== 配件配置持久化 ==========

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

// ========== 配件菜单 GUI ==========

function openAttachmentMenu(player, weaponId, gunId, returnPage) {
  var cfg = GUN_TACZ_CONFIG[weaponId]
  if (!cfg) { player.tell(Component.string('§c未找到枪械配置')); return }
  var gunName = Text.translate(gunId.split(':')[0] + '.gun.' + gunId.split(':')[1] + '.name')

  player.openChestGUI(
    Component.string('§8').append(gunName).append(Component.string(' §7') + Component.translatable('gui.kubejs.attach.title_suffix')),
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
      // 配件槽位（从配置表读取）
      cfg.slots.forEach(function(slotKey) {
        var pos = ATTACH_SLOT_POS[slotKey]
        if (!pos) return
        var installed = attachments[slotKey]
        gui.slot(pos.col, pos.row, function(slot) {
          if (installed) {
            slot.setItem(
              Item.of('tacz:attachment', { AttachmentId: 'tacz:' + installed })
                .withCustomName(Component.translatable('tacz.attachment.' + installed + '.name'))
                .withLore([Component.translatable('gui.kubejs.attach.remove_hint')])
            )
            slot.setLeftClicked(function() {
              setGunAttachment(player, weaponId, slotKey, null)
              player.tell(Component.translatable('msg.kubejs.attach.removed', Component.translatable(SLOT_TRANSLATE_KEY[slotKey])))
              openAttachmentMenu(player, weaponId, gunId, returnPage)
            })
          } else {
            slot.setItem(
              Item.of('minecraft:barrier')
                .withCustomName(Component.translatable('gui.kubejs.attach.select_prefix').append(Component.translatable(SLOT_TRANSLATE_KEY[slotKey])))
                .withLore([Component.translatable('gui.kubejs.attach.select_hint')])
            )
            slot.setLeftClicked(function() {
              openAttachmentSelect(player, weaponId, gunId, slotKey, returnPage)
            })
          }
        })
      })
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

function openAttachmentSelect(player, weaponId, gunId, slotKey, returnPage) {
  var cfg = GUN_TACZ_CONFIG[weaponId]
  if (!cfg) { player.tell(Component.string('§c未找到枪械配置')); return }
  var list = ATTACH_POOL[slotKey] || []
  if (list.length === 0) {
    player.tell(Component.string('§c') + Component.translatable('gui.kubejs.attach.no_available'))
    return
  }

  var rows = Math.max(3, Math.ceil(list.length / 7) + 2)
  player.openChestGUI(
    Component.translatable('gui.kubejs.attach.select_title').append(Component.translatable(SLOT_TRANSLATE_KEY[slotKey])),
    rows,
    function(gui) {
      for (var x = 0; x < 9; x++) {
        gui.slot(x, 0, function(s) { s.setItem(PANE.gray) })
        gui.slot(x, rows - 1, function(s) { s.setItem(PANE.gray) })
      }
      gui.slot(0, 0, function(slot) {
        slot.setItem(Item.of('minecraft:barrier').withCustomName(Component.translatable('gui.kubejs.attach.back')))
        slot.setLeftClicked(function() { openAttachmentMenu(player, weaponId, gunId, returnPage) })
      })
      list.forEach(function(att, i) {
        var col = 1 + (i % 7)
        var row = 1 + Math.floor(i / 7)
        gui.slot(col, row, function(slot) {
          slot.setItem(
            Item.of('tacz:attachment', { AttachmentId: 'tacz:' + att.id })
              .withCustomName(Component.translatable(att.nameKey))
          )
          slot.setLeftClicked(function() {
            setGunAttachment(player, weaponId, slotKey, att.id)
            player.tell(Component.translatable('msg.kubejs.attach.installed', Component.translatable(att.nameKey), Component.translatable(SLOT_TRANSLATE_KEY[slotKey])))
            openAttachmentMenu(player, weaponId, gunId, returnPage)
          })
        })
      })
    }
  )
}

/** 检查武器是否为 TACZ 枪械 */
function isTaczGun(wp) {
  return wp && wp.tag && wp.display === 'tacz:modern_kinetic_gun'
}

/** 获取 TACZ 枪械配置（外部使用） */
function getTaczConfig(weaponId) {
  return GUN_TACZ_CONFIG[weaponId] || null
}

// ========== 公共 UI 组件 ==========

/** 子页面左右竖边框（第 2~5 行、第 0/8 列） */
function drawSubPageFrame(gui) {
  for (let r = 2; r < 6; r++) {
    gui.slot(0, r, s => { s.setItem(PANE.gray) })
    gui.slot(8, r, s => { s.setItem(PANE.gray) })
  }
}

/** 返回按钮（左上角）+ 第 1 行横隔 */
function drawBackButton(gui, player, openPage) {
  gui.slot(0, 0, slot => {
    slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
    slot.setLeftClicked(() => openPage(player, 'main'))
  })
  for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })
}

// ========== 页面渲染（模块级别，行为与原内联版本完全一致） ==========

function renderMain(gui, player, openPage) {
  const prof = player.persistentData.profession
  const wp   = player.persistentData.mainWeapon
  const off  = player.persistentData.offhandWeapon

  // row 2: 三个长方形顶部边框
  for (let x = 1; x < 8; x++) gui.slot(x, 2, s => { s.setItem(PANE.gray) })

  // row 3: 三个长方形左右边框
  for (let x of [1, 3, 5, 7]) gui.slot(x, 3, s => { s.setItem(PANE.gray) })

  // col 2: 职业
  gui.slot(2, 3, slot => {
    slot.setItem(
      Item.of('minecraft:knowledge_book')
        .withCustomName(Text.translate('gui.kubejs.profession_select.status_profession'))
        .withLore([prof ? Text.translate('profession.kubejs.' + prof) : Text.of('')]))
    slot.setLeftClicked(() => openPage(player, 'prof'))
  })
  // col 4: 主武器（锁定/可用）
  gui.slot(4, 3, slot => {
    if (!prof) {
      slot.setItem(PANE.gray)
    } else {
      slot.setItem(
        Item.of('minecraft:crossbow')
          .withCustomName(Text.translate('gui.kubejs.profession_select.status_weapon'))
          .withLore([wp ? Text.translate('weapon.kubejs.' + wp) : Text.of('')]))
      slot.setLeftClicked(() => openPage(player, 'weapon'))
    }
  })
  // col 6: 副武器（锁定/可用）
  gui.slot(6, 3, slot => {
    if (!wp) {
      slot.setItem(PANE.gray)
    } else {
      slot.setItem(
        Item.of('minecraft:shield')
          .withCustomName(Text.translate('gui.kubejs.profession_select.status_offhand'))
          .withLore([off ? Text.translate('offhand.kubejs.' + off) : Text.of('')]))
      slot.setLeftClicked(() => openPage(player, 'offhand'))
    }
  })

  // row 4: 三个长方形底部边框
  for (let x = 1; x < 8; x++) gui.slot(x, 4, s => { s.setItem(PANE.gray) })

  // row 5: 开发测试用 —— 仅 OP 可见的取消选择按钮
  if (player.isOp()) {
    gui.slot(4, 5, slot => {
      slot.setItem(
        Item.of('minecraft:barrier')
          .withCustomName(Text.translate('gui.kubejs.profession_select.clear')))
      slot.setLeftClicked(() => {
        delete player.persistentData.profession
        delete player.persistentData.mainWeapon
        delete player.persistentData.offhandWeapon
        player.tell(Text.translate('msg.kubejs.profession_select.cleared'))
        openPage(player, 'main')
      })
    })
  }
}

function renderProf(gui, player, openPage) {
  drawBackButton(gui, player, openPage)
  const start = Math.floor((9 - PROFESSIONS.length) / 2)
  PROFESSIONS.forEach((prof, i) => {
    gui.slot(start + i, 2, slot => {
      slot.setItem(
        Item.of('minecraft:knowledge_book')
          .withCustomName(Text.translate('profession.kubejs.' + prof.id))
          .withLore([Text.translate('profession.kubejs.' + prof.id + '.desc')]))
      slot.setLeftClicked(() => {
        player.persistentData.profession = prof.id
        player.tell(Text.translate('msg.kubejs.profession_select.selected', Text.translate('profession.kubejs.' + prof.id)))
        openPage(player, 'main')
      })
    })
  })
}

function renderWeapon(gui, player, openPage) {
  drawBackButton(gui, player, openPage)
  const start = Math.floor((9 - MAIN_WEAPONS.length) / 2)
  MAIN_WEAPONS.forEach((wp, i) => {
    gui.slot(start + i, 2, slot => {
      var wpItem = wp.tag ? Item.of(wp.display, wp.tag) : Item.of(wp.display)
      // TACZ 枪械使用内置名称，不覆盖
      if (!wp.tag) wpItem = wpItem.withCustomName(Text.translate('weapon.kubejs.' + wp.id))
      slot.setItem(wpItem)
      slot.setLeftClicked(() => {
        player.persistentData.mainWeapon = wp.id
        // TACZ 枪械聊天提示使用内置名称
        var wpName = wp.tag ? (function() { var p = wp.tag.custom_data.GunId.split(':'); return Text.translate(p[0] + '.gun.' + p[1] + '.name') })() : Text.translate('weapon.kubejs.' + wp.id)
        player.tell(Text.translate('msg.kubejs.profession_select.main_weapon', wpName))
        openPage(player, 'main')
      })
      // TACZ 枪械：右键打开配件配置菜单
      if (isTaczGun(wp)) {
        slot.setRightClicked(() => {
          var gunId = wp.tag.custom_data.GunId
          openAttachmentMenu(player, wp.id, gunId, 'weapon')
        })
      }
    })
  })
}

function renderOffhand(gui, player, openPage) {
  drawBackButton(gui, player, openPage)
  const start = Math.floor((9 - OFFHAND_WEAPONS.length) / 2)
  OFFHAND_WEAPONS.forEach((wp, i) => {
    gui.slot(start + i, 2, slot => {
      var wpItem = wp.tag ? Item.of(wp.display, wp.tag) : Item.of(wp.display)
      // TACZ 枪械使用内置名称，不覆盖
      if (!wp.tag) wpItem = wpItem.withCustomName(Text.translate('offhand.kubejs.' + wp.id))
      slot.setItem(wpItem)
      slot.setLeftClicked(() => {
        player.persistentData.offhandWeapon = wp.id
        // TACZ 枪械聊天提示使用内置名称
        var wpName = wp.tag ? (function() { var p = wp.tag.custom_data.GunId.split(':'); return Text.translate(p[0] + '.gun.' + p[1] + '.name') })() : Text.translate('offhand.kubejs.' + wp.id)
        player.tell(Text.translate('msg.kubejs.profession_select.offhand_weapon', wpName))
        openPage(player, 'main')
      })
      // TACZ 枪械：右键打开配件配置菜单
      if (isTaczGun(wp)) {
        slot.setRightClicked(() => {
          var gunId = wp.tag.custom_data.GunId
          openAttachmentMenu(player, wp.id, gunId, 'offhand')
        })
      }
    })
  })
}

// ========== 核心逻辑 ==========

/**
 * 打开职业选择 GUI
 * @param {Internal.ServerPlayer} player
 * @param {'main'|'prof'|'weapon'|'offhand'} page
 */
function openPage(player, page) {
  player.openChestGUI(Text.translate('gui.kubejs.profession_select.title'), 6, gui => {

    // ----- 子页面加竖边框（主页面按固定布局，不额外加框） -----
    if (page !== 'main') {
      drawSubPageFrame(gui)
    }

    if (page === 'main')         renderMain(gui, player, openPage)
    else if (page === 'prof')    renderProf(gui, player, openPage)
    else if (page === 'weapon')  renderWeapon(gui, player, openPage)
    else if (page === 'offhand') renderOffhand(gui, player, openPage)
  })
}

// ========== 事件入口 ==========

ItemEvents.rightClicked('kubejs:profession_selector', event => {
  const { player, hand } = event
  if (hand !== 'main_hand') return
  openPage(player, 'main')
})
