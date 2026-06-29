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

/** 从数据库获取职业列表（每个职业的 id 即 directory 名） */
function getProfessionList() {
  var db = getProfessionDB()
  if (!db.loaded) return []
  return Object.keys(db.professions).map(function(k) { return { id: k } })
}

// ========== TACZ 枪械配置与配件改装 ==========
// 已提取到独立文件 a_tacz_config.js（需最先加载）
// 本文件通过全局函数调用：
//   isTaczGun(wp)         判断 TACZ 枪械
//   openAttachmentMenu()   打开配件改装界面
//   getTaczConfig(id)     获取枪械配置
// ============================================

// ========== 公共 UI 组件 ==========

/** 根据武器 ID 获取显示名（TACZ 用模组内置名，非 TACZ 有 i18n 用 KubeJS 翻译键，否则用物品自身名） */
function getWeaponName(id, category) {
  var pureId = cleanId(id)
  var taczCfg = getTaczConfig(pureId)
  if (taczCfg) {
    var p = taczCfg.gunId.split(':')
    return Text.translate(p[0] + '.gun.' + p[1] + '.name')
  }
  // 非 TACZ：有 i18n 标记则用 KubeJS 翻译，否则用物品自身名称
  var dispCfg = VANILLA_WEAPON_DISPLAY[pureId]
  if (dispCfg && !dispCfg.i18n) {
    return Component.literal('').append(Item.of(dispCfg.item).displayName)
  }
  return Text.translate(category + '.kubejs.' + pureId)
}

/** 根据武器 ID 解析为实际物品（TACZ 生成枪械，非 TACZ 从 VANILLA_WEAPON_DISPLAY 查表） */
function resolveWeaponItem(id) {
  var pureId = cleanId(id)
  if (!pureId) return null
  var taczCfg = getTaczConfig(pureId)
  if (taczCfg) return resolveTaczGun(taczCfg)
  var dispCfg = VANILLA_WEAPON_DISPLAY[pureId]
  if (dispCfg) return Item.of(dispCfg.item)
  return null
}

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
 * 武器配置页（二级页面，分页框架）
 * 展示：主武器 | 副武器 | 特殊武器 三个槽位一字排开
 * 左上角可取消选择职业，回退到职业选择界面
 * 未来可通过 pageNum 扩展更多配置页
 */
function renderWeaponConfig(gui, player, openPage, pageNum) {
  pageNum = pageNum || 0
  var prof = player.persistentData.profession
  var wp   = cleanId(player.persistentData.mainWeapon)
  var off  = cleanId(player.persistentData.offhandWeapon)
  var sp   = player.persistentData.specialWeapon ? cleanId(player.persistentData.specialWeapon) : null

  // Row 0: 取消选择职业按钮
  gui.slot(0, 0, slot => {
    slot.setItem(
      Item.of('minecraft:barrier')
        .withCustomName(Text.translate('gui.kubejs.profession_select.cancel_profession')))
    slot.setLeftClicked(() => {
      var server = player.server
      var name = player.username
      // 移除所有职业标签
      var tagList = getProfTagList()
      for (var pi = 0; pi < tagList.length; pi++) {
        server.runCommandSilent('tag ' + name + ' remove ' + tagList[pi])
      }
      // 取消职业后标记为无职业状态
      server.runCommandSilent('tag ' + name + ' add no_job')
      // 清除所有选中状态
      delete player.persistentData.profession
      delete player.persistentData.mainWeapon
      delete player.persistentData.offhandWeapon
      delete player.persistentData.specialWeapon
      player.tell(Text.translate('msg.kubejs.profession_select.cleared'))
      openPage(player, 'prof')
    })
  })

  // Row 1: 操作提示（居中置顶）
  gui.slot(4, 1, slot => {
    slot.setItem(Item.of('minecraft:feather')
      .withCustomName(Text.translate('gui.kubejs.profession_select.hint')))
  })

  // Row 2: 三个长方形顶部边框
  for (let x = 1; x < 8; x++) gui.slot(x, 2, s => { s.setItem(PANE.gray) })

  // Row 3: 三个长方形左右边框
  for (let x of [1, 3, 5, 7]) gui.slot(x, 3, s => { s.setItem(PANE.gray) })

  // col 2: 主武器入口（已选则显示实际武器）
  gui.slot(2, 3, slot => {
    var item
    if (wp) {
      item = resolveWeaponItem(wp)
      if (!item) item = Item.of('minecraft:crossbow')
      item = item.withCustomName(Text.translate('gui.kubejs.profession_select.status_weapon'))
        .withLore([getWeaponName(wp, 'weapon')])
    } else {
      item = Item.of('minecraft:crossbow')
        .withCustomName(Text.translate('gui.kubejs.profession_select.status_weapon'))
        .withLore([Text.translate('gui.kubejs.profession_select.none')])
    }
    slot.setItem(item)
    slot.setLeftClicked(() => openPage(player, 'weapon'))
    if (wp) slot.setRightClicked(() => {
      delete player.persistentData.mainWeapon
      player.tell(Text.translate('msg.kubejs.profession_select.main_cleared'))
      openPage(player, 'weapon_config')
    })
  })

  // col 4: 副武器入口（已选则显示实际武器）
  gui.slot(4, 3, slot => {
    var item
    if (off) {
      item = resolveWeaponItem(off)
      if (!item) item = Item.of('minecraft:shield')
      item = item.withCustomName(Text.translate('gui.kubejs.profession_select.status_offhand'))
        .withLore([getWeaponName(off, 'offhand')])
    } else {
      item = Item.of('minecraft:shield')
        .withCustomName(Text.translate('gui.kubejs.profession_select.status_offhand'))
        .withLore([Text.translate('gui.kubejs.profession_select.none')])
    }
    slot.setItem(item)
    slot.setLeftClicked(() => openPage(player, 'offhand'))
    if (off) slot.setRightClicked(() => {
      delete player.persistentData.offhandWeapon
      player.tell(Text.translate('msg.kubejs.profession_select.offhand_cleared'))
      openPage(player, 'weapon_config')
    })
  })

  // col 6: 特殊武器入口（已选则显示实际武器）
  gui.slot(6, 3, slot => {
    var item
    if (sp) {
      item = resolveWeaponItem(sp)
      if (!item) item = Item.of('minecraft:snowball')
      item = item.withCustomName(Text.translate('gui.kubejs.profession_select.status_special'))
        .withLore([getWeaponName(sp, 'offhand')])
    } else {
      item = Item.of('minecraft:snowball')
        .withCustomName(Text.translate('gui.kubejs.profession_select.status_special'))
        .withLore([Text.translate('gui.kubejs.profession_select.none')])
    }
    slot.setItem(item)
    slot.setLeftClicked(() => openPage(player, 'tertiary'))
    if (sp) slot.setRightClicked(() => {
      delete player.persistentData.specialWeapon
      player.tell(Text.translate('msg.kubejs.profession_select.special_cleared'))
      openPage(player, 'weapon_config')
    })
  })

  // Row 4: 三个长方形底部边框
  for (let x = 1; x < 8; x++) gui.slot(x, 4, s => { s.setItem(PANE.gray) })

  // Row 5: 背包功能按钮
  // 左下角 (0,5) — 加载背包
  gui.slot(0, 5, slot => {
    slot.setItem(
      Item.of('minecraft:chest_minecart')
        .withCustomName(Text.translate('gui.kubejs.backpack.load_btn'))
        .withLore([Text.translate('gui.kubejs.backpack.load_btn.lore')]))
    slot.setLeftClicked(() => openPage(player, 'backpack_load'))
  })
  // 右下角 (8,5) — 保存到背包
  gui.slot(8, 5, slot => {
    slot.setItem(
      Item.of('minecraft:chest')
        .withCustomName(Text.translate('gui.kubejs.backpack.save_btn'))
        .withLore([Text.translate('gui.kubejs.backpack.save_btn.lore')]))
    slot.setLeftClicked(() => openPage(player, 'backpack_save'))
  })
  // 右上角 (8,0) — 删除背包
  gui.slot(8, 0, slot => {
    slot.setItem(
      Item.of('minecraft:barrel')
        .withCustomName(Text.translate('gui.kubejs.backpack.delete_btn'))
        .withLore([Text.translate('gui.kubejs.backpack.delete_btn.lore')]))
    slot.setLeftClicked(() => openPage(player, 'backpack_delete'))
  })

  // 底部中间 (4,5) — 给予装备
  gui.slot(4, 5, slot => {
    slot.setItem(
      Item.of('minecraft:nether_star')
        .withCustomName(Text.translate('gui.kubejs.profession_select.give_equipment'))
        .withLore([Text.translate('gui.kubejs.profession_select.give_equipment.lore')]))
    slot.setLeftClicked(() => {
      // 关 GUI → 等快照完全恢复（2 tick）→ 再发放装备
      player.closeMenu()
      player.server.scheduleInTicks(5, function() { giveLoadout(player, true) })
    })
  })
}

/**
 * 职业选择页（一级页面，分页网格布局）
 * 选择职业后直接进入武器配置页
 */
function renderProf(gui, player, openPage, pageNum) {
  pageNum = pageNum || 0
  var PROF_LIST = getProfessionList()
  var pageSize = 21 // 7列 × 3行
  var totalPages = Math.ceil(PROF_LIST.length / pageSize)
  if (pageNum >= totalPages) pageNum = 0

  // Row 0: 页码 + 翻页
  if (totalPages > 1) {
    gui.slot(4, 0, s => {
      s.setItem(Item.of('minecraft:book').withCustomName(
        Text.translate('gui.kubejs.page.info', String(pageNum + 1), String(totalPages))))
    })
    if (pageNum > 0) {
      gui.slot(7, 0, s => {
        s.setItem(Item.of('minecraft:arrow').withCustomName(Text.translate('gui.kubejs.page.prev')))
        s.setLeftClicked(() => openPage(player, 'prof:' + (pageNum - 1)))
      })
    }
    if (pageNum < totalPages - 1) {
      gui.slot(8, 0, s => {
        s.setItem(Item.of('minecraft:arrow').withCustomName(Text.translate('gui.kubejs.page.next')))
        s.setLeftClicked(() => openPage(player, 'prof:' + (pageNum + 1)))
      })
    }
  }

  // Row 1: 灰色分隔线
  for (let x = 0; x < 9; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

  // Row 2-4: 职业网格（7列×3行）
  var start = pageNum * pageSize
  var end = Math.min(start + pageSize, PROF_LIST.length)
  for (var i = start; i < end; i++) {
    var prof = PROF_LIST[i]
    var localIdx = i - start
    var col = 1 + (localIdx % 7)
    var row = 2 + Math.floor(localIdx / 7)
    ;(function(prof, col, row) {
      gui.slot(col, row, function(slot) {
        slot.setItem(
          Item.of('minecraft:knowledge_book')
            .withCustomName(Text.translate('profession.kubejs.' + prof.id))
            .withLore([Text.translate('profession.kubejs.' + prof.id + '.desc')]))
        slot.setLeftClicked(function() {
          var server = player.server
          var name = player.username
          // 先移除所有职业标签，再添加本职业（防止累加）
          var tagList = getProfTagList()
          for (var pi = 0; pi < tagList.length; pi++) {
            server.runCommandSilent('tag ' + name + ' remove ' + tagList[pi])
          }
          // 设置新职业 + 添加本职业标签
          player.persistentData.profession = prof.id
          // 清除旧武器数据（换职业时重置武器选择）
          delete player.persistentData.mainWeapon
          delete player.persistentData.offhandWeapon
          delete player.persistentData.specialWeapon
          server.runCommandSilent('tag ' + name + ' add ' + prof.id)
          // 选择职业后移除 no_job 标签（有职业即有工作）
          server.runCommandSilent('tag ' + name + ' remove no_job')
          player.tell(Text.translate('msg.kubejs.profession_select.selected', Text.translate('profession.kubejs.' + prof.id)))
          openPage(player, 'weapon_config')
        })
      })
    })(prof, col, row)
  }

  // 填充剩余空槽
  for (var i = end; i < start + pageSize; i++) {
    var localIdx = i - start
    var col = 1 + (localIdx % 7)
    var row = 2 + Math.floor(localIdx / 7)
    if (row <= 4) {
      ;(function(col, row) {
        gui.slot(col, row, function(s) { s.setItem(PANE.black) })
      })(col, row)
    }
  }
}

/**
 * 主武器选择列表（分页网格布局）
 */
function renderWeapon(gui, player, openPage, pageNum) {
  pageNum = pageNum || 0
  var prof = player.persistentData.profession
  if (!prof) { player.tell(Text.translate('msg.kubejs.profession_select.select_first')); openPage(player, 'prof'); return }
  var wpList = getProfessionWeaponList(prof, 'primary')
  if (wpList.length === 0) { player.tell(Text.translate('msg.kubejs.profession_select.no_weapons')); openPage(player, 'weapon_config'); return }

  var pageSize = 21 // 7列 × 3行
  var totalPages = Math.ceil(wpList.length / pageSize)
  if (pageNum >= totalPages) pageNum = 0

  // Row 0: 返回 + 页码 + 翻页
  gui.slot(0, 0, s => {
    s.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
    s.setLeftClicked(() => openPage(player, 'weapon_config'))
  })
  if (totalPages > 1) {
    gui.slot(4, 0, s => {
      s.setItem(Item.of('minecraft:book').withCustomName(
        Text.translate('gui.kubejs.page.info', String(pageNum + 1), String(totalPages))))
    })
    if (pageNum > 0) {
      gui.slot(7, 0, s => {
        s.setItem(Item.of('minecraft:arrow').withCustomName(Text.translate('gui.kubejs.page.prev')))
        s.setLeftClicked(() => openPage(player, 'weapon:' + (pageNum - 1)))
      })
    }
    if (pageNum < totalPages - 1) {
      gui.slot(8, 0, s => {
        s.setItem(Item.of('minecraft:arrow').withCustomName(Text.translate('gui.kubejs.page.next')))
        s.setLeftClicked(() => openPage(player, 'weapon:' + (pageNum + 1)))
      })
    }
  }

  // Row 1: 灰色分隔线
  for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

  // Row 2-4: 物品网格（7列×3行）
  var start = pageNum * pageSize
  var end = Math.min(start + pageSize, wpList.length)
  for (var i = start; i < end; i++) {
    var wp = wpList[i]
    var localIdx = i - start
    var col = 1 + (localIdx % 7)
    var row = 2 + Math.floor(localIdx / 7)
    ;(function(wp, col, row) {
      gui.slot(col, row, function(slot) {
        var wpItem = wp.tag ? Item.of(wp.display, wp.tag) : Item.of(wp.display)
        if (!wp.tag && wp.i18n) wpItem = wpItem.withCustomName(Text.translate('weapon.kubejs.' + wp.id))
        slot.setItem(wpItem)
        if (isTaczGun(wp)) {
          slot.setLeftClicked(function() {
            player.persistentData.mainWeapon = wp.id
            var p = wp.tag.custom_data.GunId.split(':')
            var wpName = Text.translate(p[0] + '.gun.' + p[1] + '.name')
            player.tell(Text.translate('msg.kubejs.profession_select.main_weapon', wpName))
            openPage(player, 'weapon_config')
          })
          slot.setRightClicked(function() {
            openAttachmentMenu(player, wp.id, wp.tag.custom_data.GunId, 'weapon')
          })
        } else {
          slot.setLeftClicked(function() {
            player.persistentData.mainWeapon = wp.id
            var wpName = getWeaponName(wp.id, 'weapon')
            player.tell(Text.translate('msg.kubejs.profession_select.main_weapon', wpName))
            openPage(player, 'weapon_config')
          })
        }
      })
    })(wp, col, row)
  }

  // 填充剩余空槽
  for (var i = end; i < start + pageSize; i++) {
    var localIdx = i - start
    var col = 1 + (localIdx % 7)
    var row = 2 + Math.floor(localIdx / 7)
    if (row <= 4) {
      ;(function(col, row) {
        gui.slot(col, row, function(s) { s.setItem(PANE.black) })
      })(col, row)
    }
  }

  // Row 5: 操作提示
  gui.slot(4, 5, s => {
    s.setItem(
      Item.of('minecraft:feather')
        .withCustomName(Text.translate('gui.kubejs.weapon_select.hint'))
    )
  })
}

/**
 * 副武器选择列表（分页网格布局）
 */
function renderOffhand(gui, player, openPage, pageNum) {
  pageNum = pageNum || 0
  var prof = player.persistentData.profession
  if (!prof) { player.tell(Text.translate('msg.kubejs.profession_select.select_first')); openPage(player, 'prof'); return }
  var offList = getProfessionWeaponList(prof, 'secondary')
  if (offList.length === 0) { player.tell(Text.translate('msg.kubejs.profession_select.no_weapons')); openPage(player, 'weapon_config'); return }

  var pageSize = 21
  var totalPages = Math.ceil(offList.length / pageSize)
  if (pageNum >= totalPages) pageNum = 0

  // Row 0: 返回 + 页码 + 翻页
  gui.slot(0, 0, s => {
    s.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
    s.setLeftClicked(() => openPage(player, 'weapon_config'))
  })
  if (totalPages > 1) {
    gui.slot(4, 0, s => {
      s.setItem(Item.of('minecraft:book').withCustomName(
        Text.translate('gui.kubejs.page.info', String(pageNum + 1), String(totalPages))))
    })
    if (pageNum > 0) {
      gui.slot(7, 0, s => {
        s.setItem(Item.of('minecraft:arrow').withCustomName(Text.translate('gui.kubejs.page.prev')))
        s.setLeftClicked(() => openPage(player, 'offhand:' + (pageNum - 1)))
      })
    }
    if (pageNum < totalPages - 1) {
      gui.slot(8, 0, s => {
        s.setItem(Item.of('minecraft:arrow').withCustomName(Text.translate('gui.kubejs.page.next')))
        s.setLeftClicked(() => openPage(player, 'offhand:' + (pageNum + 1)))
      })
    }
  }

  // Row 1: 灰色分隔线
  for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

  // Row 2-4: 物品网格
  var start = pageNum * pageSize
  var end = Math.min(start + pageSize, offList.length)
  for (var i = start; i < end; i++) {
    var wp = offList[i]
    var localIdx = i - start
    var col = 1 + (localIdx % 7)
    var row = 2 + Math.floor(localIdx / 7)
    ;(function(wp, col, row) {
      gui.slot(col, row, function(slot) {
        var wpItem = wp.tag ? Item.of(wp.display, wp.tag) : Item.of(wp.display)
        if (!wp.tag && wp.i18n) wpItem = wpItem.withCustomName(Text.translate('offhand.kubejs.' + wp.id))
        slot.setItem(wpItem)
        if (isTaczGun(wp)) {
          slot.setLeftClicked(function() {
            player.persistentData.offhandWeapon = wp.id
            var p = wp.tag.custom_data.GunId.split(':')
            var wpName = Text.translate(p[0] + '.gun.' + p[1] + '.name')
            player.tell(Text.translate('msg.kubejs.profession_select.offhand_weapon', wpName))
            openPage(player, 'weapon_config')
          })
          slot.setRightClicked(function() {
            openAttachmentMenu(player, wp.id, wp.tag.custom_data.GunId, 'offhand')
          })
        } else {
          slot.setLeftClicked(function() {
            player.persistentData.offhandWeapon = wp.id
            var wpName = getWeaponName(wp.id, 'offhand')
            player.tell(Text.translate('msg.kubejs.profession_select.offhand_weapon', wpName))
            openPage(player, 'weapon_config')
          })
        }
      })
    })(wp, col, row)
  }

  // 填充剩余空槽
  for (var i = end; i < start + pageSize; i++) {
    var localIdx = i - start
    var col = 1 + (localIdx % 7)
    var row = 2 + Math.floor(localIdx / 7)
    if (row <= 4) {
      ;(function(col, row) {
        gui.slot(col, row, function(s) { s.setItem(PANE.black) })
      })(col, row)
    }
  }

  // Row 5: 操作提示
  gui.slot(4, 5, s => {
    s.setItem(
      Item.of('minecraft:feather')
        .withCustomName(Text.translate('gui.kubejs.weapon_select.hint'))
    )
  })
}

/**
 * 特殊武器选择列表（分页网格布局）
 * 非 TACZ 枪械（如雪球）则直接选中，不支持配件改装
 */
function renderTertiary(gui, player, openPage, pageNum) {
  pageNum = pageNum || 0
  var prof = player.persistentData.profession
  if (!prof) { player.tell(Text.translate('msg.kubejs.profession_select.select_first')); openPage(player, 'prof'); return }
  var spList = getProfessionWeaponList(prof, 'tertiary')
  if (spList.length === 0) { player.tell(Text.translate('msg.kubejs.profession_select.no_weapons')); openPage(player, 'weapon_config'); return }

  var pageSize = 21
  var totalPages = Math.ceil(spList.length / pageSize)
  if (pageNum >= totalPages) pageNum = 0

  // Row 0: 返回 + 页码 + 翻页
  gui.slot(0, 0, s => {
    s.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
    s.setLeftClicked(() => openPage(player, 'weapon_config'))
  })
  if (totalPages > 1) {
    gui.slot(4, 0, s => {
      s.setItem(Item.of('minecraft:book').withCustomName(
        Text.translate('gui.kubejs.page.info', String(pageNum + 1), String(totalPages))))
    })
    if (pageNum > 0) {
      gui.slot(7, 0, s => {
        s.setItem(Item.of('minecraft:arrow').withCustomName(Text.translate('gui.kubejs.page.prev')))
        s.setLeftClicked(() => openPage(player, 'tertiary:' + (pageNum - 1)))
      })
    }
    if (pageNum < totalPages - 1) {
      gui.slot(8, 0, s => {
        s.setItem(Item.of('minecraft:arrow').withCustomName(Text.translate('gui.kubejs.page.next')))
        s.setLeftClicked(() => openPage(player, 'tertiary:' + (pageNum + 1)))
      })
    }
  }

  // Row 1: 灰色分隔线
  for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

  // Row 2-4: 物品网格
  var start = pageNum * pageSize
  var end = Math.min(start + pageSize, spList.length)
  for (var i = start; i < end; i++) {
    var wp = spList[i]
    var localIdx = i - start
    var col = 1 + (localIdx % 7)
    var row = 2 + Math.floor(localIdx / 7)
    ;(function(wp, col, row) {
      gui.slot(col, row, function(slot) {
        var wpItem = wp.tag ? Item.of(wp.display, wp.tag) : Item.of(wp.display)
        if (!wp.tag && wp.i18n) wpItem = wpItem.withCustomName(Text.translate('offhand.kubejs.' + wp.id))
        slot.setItem(wpItem)
        if (isTaczGun(wp)) {
          slot.setLeftClicked(function() {
            player.persistentData.specialWeapon = wp.id
            var p = wp.tag.custom_data.GunId.split(':')
            var wpName = Text.translate(p[0] + '.gun.' + p[1] + '.name')
            player.tell(Text.translate('msg.kubejs.profession_select.special_weapon', wpName))
            openPage(player, 'weapon_config')
          })
          slot.setRightClicked(function() {
            openAttachmentMenu(player, wp.id, wp.tag.custom_data.GunId, 'tertiary')
          })
        } else {
          slot.setLeftClicked(function() {
            player.persistentData.specialWeapon = wp.id
            var wpName = getWeaponName(wp.id, 'offhand')
            player.tell(Text.translate('msg.kubejs.profession_select.special_weapon', wpName))
            openPage(player, 'weapon_config')
          })
        }
      })
    })(wp, col, row)
  }

  // 填充剩余空槽
  for (var i = end; i < start + pageSize; i++) {
    var localIdx = i - start
    var col = 1 + (localIdx % 7)
    var row = 2 + Math.floor(localIdx / 7)
    if (row <= 4) {
      ;(function(col, row) {
        gui.slot(col, row, function(s) { s.setItem(PANE.black) })
      })(col, row)
    }
  }

  // Row 5: 操作提示
  gui.slot(4, 5, s => {
    s.setItem(
      Item.of('minecraft:feather')
        .withCustomName(Text.translate('gui.kubejs.weapon_select.hint'))
    )
  })
}

// ========== 核心逻辑 ==========

/**
 * 打开职业选择 GUI
 * @param {Internal.ServerPlayer} player
 * @param {string} page - 页面名，支持 "page:num" 格式传递页码
 */
function openPage(player, page) {
  // 标记 GUI 已打开，禁用物品拾取
  player.persistentData.guiOpen = true
  // 添加 no_loadout 标签（适配原版 /tag 指令），标记玩家尚未领取装备
  player.addTag('no_loadout')

  // 解析页码（支持 "page:num" 格式）
  var actualPage = page
  var pageNum = 0
  var colonIdx = page.indexOf(':')
  if (colonIdx > 0) {
    actualPage = page.substring(0, colonIdx)
    pageNum = parseInt(page.substring(colonIdx + 1)) || 0
  }

  // 根据页面与当前职业动态构建标题
  var prof = cleanId(player.persistentData.profession)
  var title
  if (actualPage === 'prof' || !prof) {
    title = Text.translate('gui.kubejs.profession_select.title')
  } else {
    title = Text.translate('profession.kubejs.' + prof).copy()
      .append(Text.translate('gui.kubejs.profession_select.subtitle.' + actualPage))
  }

  player.openChestGUI(title, 6, gui => {

    // ----- 子页面加竖边框（武器配置页按固定布局，不额外加框） -----
    if (actualPage !== 'prof' && actualPage !== 'weapon_config') {
      drawSubPageFrame(gui)
    }

    if (actualPage === 'prof')          renderProf(gui, player, openPage, pageNum)
    else if (actualPage === 'weapon_config') renderWeaponConfig(gui, player, openPage, pageNum)
    else if (actualPage === 'weapon')   renderWeapon(gui, player, openPage, pageNum)
    else if (actualPage === 'offhand')  renderOffhand(gui, player, openPage, pageNum)
    else if (actualPage === 'tertiary') renderTertiary(gui, player, openPage, pageNum)
    else if (actualPage === 'backpack_load')   renderBackpackSelect(gui, player, openPage, 'backpack_load', pageNum)
    else if (actualPage === 'backpack_save')   renderBackpackSelect(gui, player, openPage, 'backpack_save', pageNum)
    else if (actualPage === 'backpack_delete') renderBackpackSelect(gui, player, openPage, 'backpack_delete', pageNum)
  })
}

// ========== 事件入口 ==========

ItemEvents.rightClicked('kubejs:profession_selector', event => {
  const { player, hand } = event
  if (hand !== 'main_hand') return
  // 已选择职业则直接进入武器配置页，否则进入职业选择页
  openPage(player, player.persistentData.profession ? 'weapon_config' : 'prof')
})

// ========== GUI 打开时禁用物品拾取 ==========

/** 关闭 GUI 或退出时清除标记 + 移除 no_loadout 标签 */
PlayerEvents.inventoryClosed(event => {
  var p = event.getPlayer()
  p.persistentData.guiOpen = false
  p.removeTag('no_loadout')
})

PlayerEvents.loggedOut(event => {
  var p = event.getPlayer()
  p.persistentData.guiOpen = false
  p.removeTag('no_loadout')
})

/** 当 GUI 打开时阻止拾取地上的物品 */
ItemEvents.pickedUp(event => {
  if (event.getEntity().persistentData.guiOpen) {
    event.cancel()
  }
})
