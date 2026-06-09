// ============================================================
// 职业选择器 - GUI 交互（服务端 · i18n 规范）
// ============================================================
// 单页面设计：主界面（三个入口居中）→ 职业选 → 主武器 → 副武器
// 翻译定义在 assets/kubejs/lang/{en_us,zh_cn}.json 中
// 注：$ByteTag / $IntTag / $CompoundTag / PANE 由 a_tacz_config.js 优先定义
// ============================================================

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
  { id: 'scar_l', display: 'tacz:modern_kinetic_gun', tag: { custom_data: { GunId: 'tacz:scar_l' } } },
]
const OFFHAND_WEAPONS = [
  { id: 'shield', display: 'minecraft:shield' },
  { id: 'totem',  display: 'minecraft:totem_of_undying' },
  { id: 'mars',   display: 'tacz:modern_kinetic_gun', tag: { custom_data: { GunId: 'lavender:mars' } } },
]

// ========== TACZ 枪械配置与配件改装 ==========
// 已提取到独立文件 a_tacz_config.js（需最先加载）
// 本文件通过全局函数调用：
//   isTaczGun(wp)         判断 TACZ 枪械
//   openAttachmentMenu()   打开配件改装界面
//   getTaczConfig(id)     获取枪械配置
// ============================================

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
      // TACZ 枪械：左键选中武器返回主页；右键打开配件菜单
      if (isTaczGun(wp)) {
        slot.setLeftClicked(() => {
          player.persistentData.mainWeapon = wp.id
          var p = wp.tag.custom_data.GunId.split(':')
          var wpName = Text.translate(p[0] + '.gun.' + p[1] + '.name')
          player.tell(Text.translate('msg.kubejs.profession_select.main_weapon', wpName))
          openPage(player, 'main')
        })
        slot.setRightClicked(() => {
          openAttachmentMenu(player, wp.id, wp.tag.custom_data.GunId, 'weapon')
        })
      } else {
        slot.setLeftClicked(() => {
          player.persistentData.mainWeapon = wp.id
          var wpName = Text.translate('weapon.kubejs.' + wp.id)
          player.tell(Text.translate('msg.kubejs.profession_select.main_weapon', wpName))
          openPage(player, 'main')
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
      // TACZ 枪械：左键选中武器返回主页；右键打开配件菜单
      if (isTaczGun(wp)) {
        slot.setLeftClicked(() => {
          player.persistentData.offhandWeapon = wp.id
          var p = wp.tag.custom_data.GunId.split(':')
          var wpName = Text.translate(p[0] + '.gun.' + p[1] + '.name')
          player.tell(Text.translate('msg.kubejs.profession_select.offhand_weapon', wpName))
          openPage(player, 'main')
        })
        slot.setRightClicked(() => {
          openAttachmentMenu(player, wp.id, wp.tag.custom_data.GunId, 'offhand')
        })
      } else {
        slot.setLeftClicked(() => {
          player.persistentData.offhandWeapon = wp.id
          var wpName = Text.translate('offhand.kubejs.' + wp.id)
          player.tell(Text.translate('msg.kubejs.profession_select.offhand_weapon', wpName))
          openPage(player, 'main')
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
  // 标记 GUI 已打开，禁用物品拾取
  player.persistentData.guiOpen = true

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

// ========== GUI 打开时禁用物品拾取 ==========

/** 关闭 GUI 或退出时清除标记 */
PlayerEvents.inventoryClosed(event => {
  event.getPlayer().persistentData.guiOpen = false
})

PlayerEvents.loggedOut(event => {
  event.getPlayer().persistentData.guiOpen = false
})

/** 当 GUI 打开时阻止拾取地上的物品 */
ItemEvents.pickedUp(event => {
  if (event.getEntity().persistentData.guiOpen) {
    event.cancel()
  }
})
