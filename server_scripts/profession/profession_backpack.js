// ============================================================
// 职业背包系统 - 每个职业独立5个背包槽位，每位玩家数据独立
// ============================================================
// 数据存储于 player.persistentData.professionBackpack 字符串(JSON)
// 结构: { [profession]: { "1": {...}, "2": {...}, ..., "5": {...} } }
// 每个背包保存:
//   { mainWeapon, offhandWeapon, specialWeapon, attachments }
// attachments 保存 player.persistentData.taczAttachments 的完整副本
// ============================================================
// 注意: 从 persistentData 读字符串必须用 .getString() 方法
//       返回 Java String 才能被 JSON.stringify 正确序列化
//       属性访问 player.persistentData.x 返回的是 StringTag 对象！
// ============================================================

const BACKPACK_SLOT_COUNT = 5

// ========== 数据管理 ==========

/** 读取该玩家的完整背包数据 */
function getBackpackData(player) {
  var raw = player.persistentData.getString('professionBackpack')
  if (!raw || raw === '') return {}
  try { return JSON.parse(raw) } catch(e) { return {} }
}

/** 写入该玩家的完整背包数据 */
function setBackpackData(player, data) {
  player.persistentData.putString('professionBackpack', JSON.stringify(data))
}

/**
 * 保存当前武器配置 + 附件到指定背包槽位
 * 使用 .getString() 确保拿到 Java String 可被 JSON.stringify 正常序列化
 */
function saveToBackpackSlot(player, profession, slotIndex) {
  var all = getBackpackData(player)
  if (!all[profession]) all[profession] = {}
  var data = {}
  // 武器ID：必须用 .getString() 读取，属性访问返回 StringTag 会破坏 JSON.stringify
  var main = player.persistentData.getString('mainWeapon')
  var off  = player.persistentData.getString('offhandWeapon')
  var sp   = player.persistentData.getString('specialWeapon')
  if (main) data.mainWeapon = main
  if (off)  data.offhandWeapon = off
  if (sp)   data.specialWeapon = sp
  // 附件配置：保存 taczAttachments 的完整副本（每个背包槽位独立）
  var attRaw = player.persistentData.getString('taczAttachments')
  if (attRaw && attRaw !== '') {
    try { data.attachments = JSON.parse(attRaw) } catch(e) {}
  }
  all[profession][String(slotIndex)] = data
  setBackpackData(player, all)
}

/** 从指定背包槽位加载武器配置 */
function loadFromBackpackSlot(player, profession, slotIndex) {
  var all = getBackpackData(player)
  if (!all[profession]) return null
  var data = all[profession][String(slotIndex)]
  return data || null
}

/** 删除指定背包槽位 */
function deleteBackpackSlot(player, profession, slotIndex) {
  var all = getBackpackData(player)
  if (!all[profession]) return
  delete all[profession][String(slotIndex)]
  setBackpackData(player, all)
}

/** 检查指定槽位是否有数据 */
function isBackpackSlotFilled(player, profession, slotIndex) {
  var all = getBackpackData(player)
  if (!all[profession]) return false
  var data = all[profession][String(slotIndex)]
  return data && (data.mainWeapon || data.offhandWeapon || data.specialWeapon)
}

/**
 * 获取槽位内武器摘要文本（用于 lore 显示）
 * TACZ 枪械 → 复用 getWeaponName() 显示模组内置名称
 * 非 TACZ 有 i18n → 复用 getWeaponName() 显示 KubeJS 翻译键
 * 非 TACZ 无 i18n → 复用 getWeaponName() 显示物品自身原版名称
 */
function getBackpackSlotSummary(player, profession, slotIndex) {
  var all = getBackpackData(player)
  if (!all[profession]) return []
  var data = all[profession][String(slotIndex)]
  if (!data) return []
  var lines = []
  if (data.mainWeapon) {
    var line = Text.translate('gui.kubejs.backpack.summary_main').copy()
    line.append(' ').append(getWeaponName(data.mainWeapon, 'weapon'))
    lines.push(line)
  }
  if (data.offhandWeapon) {
    var line = Text.translate('gui.kubejs.backpack.summary_offhand').copy()
    line.append(' ').append(getWeaponName(data.offhandWeapon, 'offhand'))
    lines.push(line)
  }
  if (data.specialWeapon) {
    var line = Text.translate('gui.kubejs.backpack.summary_special').copy()
    line.append(' ').append(getWeaponName(data.specialWeapon, 'offhand'))
    lines.push(line)
  }
  if (data.attachments) {
    var attCount = 0
    for (var wid in data.attachments) {
      if (data.attachments.hasOwnProperty(wid)) attCount += Object.keys(data.attachments[wid]).length
    }
    if (attCount > 0) lines.push(Text.translate('gui.kubejs.backpack.summary_attachments', String(attCount)))
  }
  return lines
}

// ========== GUI 渲染 ==========

/**
 * 背包槽位选择页（共用：加载/保存/删除，分页网格布局）
 * @param {'backpack_load'|'backpack_save'|'backpack_delete'} mode
 * @param {number} pageNum - 页码（每页6槽位）
 */
const BACKPACK_PAGE_SIZE = 6 // 每页6个槽位（3列×2行交错布局）
function renderBackpackSelect(gui, player, openPage, mode, pageNum) {
  pageNum = pageNum || 0
  var prof = cleanId(player.persistentData.profession)
  if (!prof) { player.tell(Text.translate('msg.kubejs.profession_select.select_first')); openPage(player, 'prof'); return }

  var totalSlots = BACKPACK_SLOT_COUNT
  var totalPages = Math.ceil(totalSlots / BACKPACK_PAGE_SIZE)
  if (pageNum >= totalPages) pageNum = 0

  // ---- Row 0: 返回 + 标题 + 翻页 ----
  gui.slot(0, 0, slot => {
    slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.backpack.back')))
    slot.setLeftClicked(() => openPage(player, 'weapon_config'))
  })
  var titleKey = 'gui.kubejs.backpack.title.' + mode.replace('backpack_', '')
  gui.slot(4, 0, slot => {
    slot.setItem(Item.of('minecraft:feather').withCustomName(Text.translate(titleKey)))
  })
  if (totalPages > 1) {
    if (pageNum > 0) {
      gui.slot(7, 0, s => {
        s.setItem(Item.of('minecraft:arrow').withCustomName(Text.translate('gui.kubejs.page.prev')))
        s.setLeftClicked(() => openPage(player, mode + ':' + (pageNum - 1)))
      })
    }
    if (pageNum < totalPages - 1) {
      gui.slot(8, 0, s => {
        s.setItem(Item.of('minecraft:arrow').withCustomName(Text.translate('gui.kubejs.page.next')))
        s.setLeftClicked(() => openPage(player, mode + ':' + (pageNum + 1)))
      })
    }
  }

  // ---- Row 1: 灰色分隔线 ----
  for (var x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

  // ---- Row 2-3: 每页6个背包槽位（交错布局）----
  // Row2: [s1] [ ] [s2] [ ] [s3]
  // Row3: [ ] [s4] [ ] [s5] [ ] [ ] [s6]
  var pageSlotPositions = [
    { row: 2, col: 1 }, { row: 2, col: 3 }, { row: 2, col: 5 },
    { row: 3, col: 2 }, { row: 3, col: 4 }, { row: 3, col: 6 },
  ]

  var startIdx = pageNum * BACKPACK_PAGE_SIZE
  var endIdx = Math.min(startIdx + BACKPACK_PAGE_SIZE, totalSlots)

  for (var i = startIdx; i < endIdx; i++) {
    var idx = i + 1  // 槽位编号从1开始
    var pos = pageSlotPositions[i - startIdx]
    var filled = isBackpackSlotFilled(player, prof, idx)
    ;(function(idx, col, row) {
      gui.slot(col, row, function(slot) {
        var item
        if (filled) {
          item = Item.of('minecraft:ender_chest')
            .withCustomName(Text.translate('gui.kubejs.backpack.slot_name', String(idx)))
            .withLore(getBackpackSlotSummary(player, prof, idx))
        } else {
          item = Item.of('minecraft:chest')
            .withCustomName(Text.translate('gui.kubejs.backpack.slot_name', String(idx)))
            .withLore([Text.translate('gui.kubejs.backpack.slot_empty')])
        }
        slot.setItem(item)
        slot.setLeftClicked(function() {
          if (mode === 'backpack_save') {
            saveToBackpackSlot(player, prof, idx)
            player.tell(Text.translate('msg.kubejs.backpack.saved', String(idx)))
            openPage(player, 'weapon_config')
          } else if (mode === 'backpack_load') {
            var data = loadFromBackpackSlot(player, prof, idx)
            if (!data || (!data.mainWeapon && !data.offhandWeapon && !data.specialWeapon)) {
              player.tell(Text.translate('msg.kubejs.backpack.empty_slot'))
              return
            }
            if (data.mainWeapon)   player.persistentData.putString('mainWeapon', String(data.mainWeapon))
            else player.persistentData.putString('mainWeapon', '')
            if (data.offhandWeapon) player.persistentData.putString('offhandWeapon', String(data.offhandWeapon))
            else player.persistentData.putString('offhandWeapon', '')
            if (data.specialWeapon) player.persistentData.putString('specialWeapon', String(data.specialWeapon))
            else player.persistentData.putString('specialWeapon', '')
            if (data.attachments) {
              player.persistentData.putString('taczAttachments', JSON.stringify(data.attachments))
            } else {
              player.persistentData.putString('taczAttachments', '{}')
            }
            player.tell(Text.translate('msg.kubejs.backpack.loaded', String(idx)))
            openPage(player, 'weapon_config')
          } else if (mode === 'backpack_delete') {
            if (!filled) {
              player.tell(Text.translate('msg.kubejs.backpack.empty_slot'))
              return
            }
            deleteBackpackSlot(player, prof, idx)
            player.tell(Text.translate('msg.kubejs.backpack.deleted', String(idx)))
            openPage(player, 'weapon_config')
          }
        })
      })
    })(idx, pos.col, pos.row)
  }

  // ---- Row 4: 灰色分隔线 ----
  for (var x = 1; x < 8; x++) gui.slot(x, 4, s => { s.setItem(PANE.gray) })

  // ---- Row 5: 操作提示 + 页码 ----
  var hintKey = 'gui.kubejs.backpack.hint.' + mode.replace('backpack_', '')
  var hintItem = Item.of('minecraft:book').withCustomName(Text.translate(hintKey))
  if (totalPages > 1) {
    hintItem = hintItem.withLore([Text.translate('gui.kubejs.page.info', String(pageNum + 1), String(totalPages))])
  }
  gui.slot(4, 5, slot => { slot.setItem(hintItem) })
}
