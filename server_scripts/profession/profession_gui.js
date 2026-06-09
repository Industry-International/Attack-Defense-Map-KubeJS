// ============================================================
// 职业选择器 - GUI 交互（服务端 · i18n 规范）
// ============================================================
// 新流程：直接进入职业选择 → 选择后进入武器配置页
// 武器配置页：主武器 | 副武器 | 特殊武器 一字排开
// 左上角可取消选择职业，回退到职业选择界面
// 配件改装逻辑保持不变
// 翻译定义在 assets/kubejs/lang/{en_us,zh_cn}.json 中
// 注：$ByteTag / $IntTag / $CompoundTag / PANE 由 a_tacz_config.js 优先定义
// ============================================================

// ========== 数据定义 ==========

const PROFESSIONS = [
  { id: 'assault' }, { id: 'scout' }, { id: 'medic' }, { id: 'support' },
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

/**
 * 返回按钮（左上角）+ 第 1 行横隔
 * @param {string} returnPage - 点击返回时跳转的页面
 */
function drawBackButton(gui, player, returnPage) {
  gui.slot(0, 0, slot => {
    slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
    slot.setLeftClicked(() => openPage(player, returnPage || 'weapon_config'))
  })
  for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })
}

// ========== 页面渲染（模块级别） ==========

/**
 * 武器配置页（二级页面）
 * 展示：主武器 | 副武器 | 特殊武器 三个槽位一字排开
 * 左上角可取消选择职业，回退到职业选择界面
 */
function renderWeaponConfig(gui, player, openPage) {
  var prof = player.persistentData.profession
  var wp   = player.persistentData.mainWeapon
  var off  = player.persistentData.offhandWeapon
  var sp   = player.persistentData.specialWeapon

  // Row 0: 取消选择职业按钮
  gui.slot(0, 0, slot => {
    slot.setItem(
      Item.of('minecraft:barrier')
        .withCustomName(Text.translate('gui.kubejs.profession_select.cancel_profession')))
    slot.setLeftClicked(() => {
      var server = player.server
      var name = player.username
      // 移除所有职业标签
      server.runCommandSilent('tag ' + name + ' remove assault')
      server.runCommandSilent('tag ' + name + ' remove scout')
      server.runCommandSilent('tag ' + name + ' remove medic')
      server.runCommandSilent('tag ' + name + ' remove support')
      // 清除所有选中状态
      delete player.persistentData.profession
      delete player.persistentData.mainWeapon
      delete player.persistentData.offhandWeapon
      delete player.persistentData.specialWeapon
      player.tell(Text.translate('msg.kubejs.profession_select.cleared'))
      openPage(player, 'prof')
    })
  })

  // Row 2: 三个长方形顶部边框
  for (let x = 1; x < 8; x++) gui.slot(x, 2, s => { s.setItem(PANE.gray) })

  // Row 3: 三个长方形左右边框
  for (let x of [1, 3, 5, 7]) gui.slot(x, 3, s => { s.setItem(PANE.gray) })

  // col 2: 主武器入口
  gui.slot(2, 3, slot => {
    var item = Item.of('minecraft:crossbow')
      .withCustomName(Text.translate('gui.kubejs.profession_select.status_weapon'))
    if (wp) {
      item = item.withLore([Text.translate('weapon.kubejs.' + wp)])
    } else {
      item = item.withLore([Text.translate('gui.kubejs.profession_select.none')])
    }
    slot.setItem(item)
    slot.setLeftClicked(() => openPage(player, 'weapon'))
  })

  // col 4: 副武器入口
  gui.slot(4, 3, slot => {
    var item = Item.of('minecraft:shield')
      .withCustomName(Text.translate('gui.kubejs.profession_select.status_offhand'))
    if (off) {
      item = item.withLore([Text.translate('offhand.kubejs.' + off)])
    } else {
      item = item.withLore([Text.translate('gui.kubejs.profession_select.none')])
    }
    slot.setItem(item)
    slot.setLeftClicked(() => openPage(player, 'offhand'))
  })

  // col 6: 特殊武器入口
  gui.slot(6, 3, slot => {
    var item = Item.of('minecraft:snowball')
      .withCustomName(Text.translate('gui.kubejs.profession_select.status_special'))
    if (sp) {
      item = item.withLore([Text.translate('offhand.kubejs.' + sp)])
    } else {
      item = item.withLore([Text.translate('gui.kubejs.profession_select.none')])
    }
    slot.setItem(item)
    slot.setLeftClicked(() => openPage(player, 'tertiary'))
  })

  // Row 4: 三个长方形底部边框
  for (let x = 1; x < 8; x++) gui.slot(x, 4, s => { s.setItem(PANE.gray) })
}

/**
 * 职业选择页（一级页面）
 * 选择职业后直接进入武器配置页
 */
function renderProf(gui, player, openPage) {
  const start = Math.floor((9 - PROFESSIONS.length) / 2)
  PROFESSIONS.forEach((prof, i) => {
    gui.slot(start + i, 2, slot => {
      slot.setItem(
        Item.of('minecraft:knowledge_book')
          .withCustomName(Text.translate('profession.kubejs.' + prof.id))
          .withLore([Text.translate('profession.kubejs.' + prof.id + '.desc')]))
      slot.setLeftClicked(() => {
        var server = player.server
        var name = player.username
        // 先移除所有职业标签，再添加本职业（防止累加）
        server.runCommandSilent('tag ' + name + ' remove assault')
        server.runCommandSilent('tag ' + name + ' remove scout')
        server.runCommandSilent('tag ' + name + ' remove medic')
        server.runCommandSilent('tag ' + name + ' remove support')
        // 设置新职业 + 添加本职业标签
        player.persistentData.profession = prof.id
        // 清除旧武器数据（换职业时重置武器选择）
        delete player.persistentData.mainWeapon
        delete player.persistentData.offhandWeapon
        delete player.persistentData.specialWeapon
        server.runCommandSilent('tag ' + name + ' add ' + prof.id)
        player.tell(Text.translate('msg.kubejs.profession_select.selected', Text.translate('profession.kubejs.' + prof.id)))
        openPage(player, 'weapon_config')
      })
    })
  })
}

/**
 * 主武器选择列表
 */
function renderWeapon(gui, player, openPage) {
  drawBackButton(gui, player, 'weapon_config')
  var prof = player.persistentData.profession
  if (!prof) { player.tell(Text.translate('msg.kubejs.profession_select.select_first')); openPage(player, 'prof'); return }
  var wpList = getProfessionWeaponList(prof, 'primary')
  if (wpList.length === 0) { player.tell(Text.translate('msg.kubejs.profession_select.no_weapons')); openPage(player, 'weapon_config'); return }
  const start = Math.floor((9 - wpList.length) / 2)
  wpList.forEach((wp, i) => {
    gui.slot(start + i, 2, slot => {
      var wpItem = wp.tag ? Item.of(wp.display, wp.tag) : Item.of(wp.display)
      // TACZ 枪械使用内置名称，不覆盖
      if (!wp.tag) wpItem = wpItem.withCustomName(Text.translate('weapon.kubejs.' + wp.id))
      slot.setItem(wpItem)
      // TACZ 枪械：左键选中武器返回配置页；右键打开配件菜单
      if (isTaczGun(wp)) {
        slot.setLeftClicked(() => {
          player.persistentData.mainWeapon = wp.id
          var p = wp.tag.custom_data.GunId.split(':')
          var wpName = Text.translate(p[0] + '.gun.' + p[1] + '.name')
          player.tell(Text.translate('msg.kubejs.profession_select.main_weapon', wpName))
          openPage(player, 'weapon_config')
        })
        slot.setRightClicked(() => {
          openAttachmentMenu(player, wp.id, wp.tag.custom_data.GunId, 'weapon')
        })
      } else {
        slot.setLeftClicked(() => {
          player.persistentData.mainWeapon = wp.id
          var wpName = Text.translate('weapon.kubejs.' + wp.id)
          player.tell(Text.translate('msg.kubejs.profession_select.main_weapon', wpName))
          openPage(player, 'weapon_config')
        })
      }
    })
  })
}

/**
 * 副武器选择列表
 */
function renderOffhand(gui, player, openPage) {
  drawBackButton(gui, player, 'weapon_config')
  var prof = player.persistentData.profession
  if (!prof) { player.tell(Text.translate('msg.kubejs.profession_select.select_first')); openPage(player, 'prof'); return }
  if (!player.persistentData.mainWeapon) { player.tell(Text.translate('msg.kubejs.profession_select.select_main_first')); openPage(player, 'weapon_config'); return }
  var offList = getProfessionWeaponList(prof, 'secondary')
  if (offList.length === 0) { player.tell(Text.translate('msg.kubejs.profession_select.no_weapons')); openPage(player, 'weapon_config'); return }
  const start = Math.floor((9 - offList.length) / 2)
  offList.forEach((wp, i) => {
    gui.slot(start + i, 2, slot => {
      var wpItem = wp.tag ? Item.of(wp.display, wp.tag) : Item.of(wp.display)
      // TACZ 枪械使用内置名称，不覆盖
      if (!wp.tag) wpItem = wpItem.withCustomName(Text.translate('offhand.kubejs.' + wp.id))
      slot.setItem(wpItem)
      // TACZ 枪械：左键选中武器返回配置页；右键打开配件菜单
      if (isTaczGun(wp)) {
        slot.setLeftClicked(() => {
          player.persistentData.offhandWeapon = wp.id
          var p = wp.tag.custom_data.GunId.split(':')
          var wpName = Text.translate(p[0] + '.gun.' + p[1] + '.name')
          player.tell(Text.translate('msg.kubejs.profession_select.offhand_weapon', wpName))
          openPage(player, 'weapon_config')
        })
        slot.setRightClicked(() => {
          openAttachmentMenu(player, wp.id, wp.tag.custom_data.GunId, 'offhand')
        })
      } else {
        slot.setLeftClicked(() => {
          player.persistentData.offhandWeapon = wp.id
          var wpName = Text.translate('offhand.kubejs.' + wp.id)
          player.tell(Text.translate('msg.kubejs.profession_select.offhand_weapon', wpName))
          openPage(player, 'weapon_config')
        })
      }
    })
  })
}

/**
 * 特殊武器选择列表
 * 非 TACZ 枪械（如雪球）则直接选中，不支持配件改装
 */
function renderTertiary(gui, player, openPage) {
  drawBackButton(gui, player, 'weapon_config')
  var prof = player.persistentData.profession
  if (!prof) { player.tell(Text.translate('msg.kubejs.profession_select.select_first')); openPage(player, 'prof'); return }
  var spList = getProfessionWeaponList(prof, 'tertiary')
  if (spList.length === 0) { player.tell(Text.translate('msg.kubejs.profession_select.no_weapons')); openPage(player, 'weapon_config'); return }
  const start = Math.floor((9 - spList.length) / 2)
  spList.forEach((wp, i) => {
    gui.slot(start + i, 2, slot => {
      var wpItem = wp.tag ? Item.of(wp.display, wp.tag) : Item.of(wp.display)
      if (!wp.tag) wpItem = wpItem.withCustomName(Text.translate('offhand.kubejs.' + wp.id))
      slot.setItem(wpItem)
      // TACZ 特殊武器：左键选中返回配置页；右键打开配件菜单
      if (isTaczGun(wp)) {
        slot.setLeftClicked(() => {
          player.persistentData.specialWeapon = wp.id
          var p = wp.tag.custom_data.GunId.split(':')
          var wpName = Text.translate(p[0] + '.gun.' + p[1] + '.name')
          player.tell(Text.translate('msg.kubejs.profession_select.special_weapon', wpName))
          openPage(player, 'weapon_config')
        })
        slot.setRightClicked(() => {
          openAttachmentMenu(player, wp.id, wp.tag.custom_data.GunId, 'tertiary')
        })
      } else {
        slot.setLeftClicked(() => {
          player.persistentData.specialWeapon = wp.id
          var wpName = Text.translate('offhand.kubejs.' + wp.id)
          player.tell(Text.translate('msg.kubejs.profession_select.special_weapon', wpName))
          openPage(player, 'weapon_config')
        })
      }
    })
  })
}

// ========== 核心逻辑 ==========

/**
 * 打开职业选择 GUI
 * @param {Internal.ServerPlayer} player
 * @param {'prof'|'weapon_config'|'weapon'|'offhand'|'tertiary'} page
 */
function openPage(player, page) {
  // 标记 GUI 已打开，禁用物品拾取
  player.persistentData.guiOpen = true

  player.openChestGUI(Text.translate('gui.kubejs.profession_select.title'), 6, gui => {

    // ----- 子页面加竖边框（武器配置页按固定布局，不额外加框） -----
    if (page !== 'prof' && page !== 'weapon_config') {
      drawSubPageFrame(gui)
    }

    if (page === 'prof')          renderProf(gui, player, openPage)
    else if (page === 'weapon_config') renderWeaponConfig(gui, player, openPage)
    else if (page === 'weapon')   renderWeapon(gui, player, openPage)
    else if (page === 'offhand')  renderOffhand(gui, player, openPage)
    else if (page === 'tertiary') renderTertiary(gui, player, openPage)
  })
}

// ========== 事件入口 ==========

ItemEvents.rightClicked('kubejs:profession_selector', event => {
  const { player, hand } = event
  if (hand !== 'main_hand') return
  // 直接进入职业选择页
  openPage(player, 'prof')
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
