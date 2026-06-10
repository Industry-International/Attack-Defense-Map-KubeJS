// ============================================================
// 职业背包系统 - 每个职业独立5个背包槽位，每位玩家数据独立
// ============================================================
// 数据存储于 player.persistentData.professionBackpack 字符串(JSON)
// 结构: { [profession]: { "1": {...}, "2": {...}, ..., "5": {...} } }
// 每个背包保存: { mainWeapon, offhandWeapon, specialWeapon }
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

/** 获取某职业的背包（若无则创建空对象） */
function getProfBackpack(player, profession) {
  var all = getBackpackData(player)
  if (!all[profession]) all[profession] = {}
  return all[profession]
}

/** 保存当前武器配置到指定背包槽位 */
function saveToBackpackSlot(player, profession, slotIndex) {
  var all = getBackpackData(player)
  if (!all[profession]) all[profession] = {}
  var data = {}
  var main = player.persistentData.mainWeapon
  var off  = player.persistentData.offhandWeapon
  var sp   = player.persistentData.specialWeapon
  if (main) data.mainWeapon = main
  if (off)  data.offhandWeapon = off
  if (sp)   data.specialWeapon = sp
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

/** 获取槽位内武器摘要文本（用于 lore 显示） */
function getBackpackSlotSummary(player, profession, slotIndex) {
  var all = getBackpackData(player)
  if (!all[profession]) return []
  var data = all[profession][String(slotIndex)]
  if (!data) return []
  var lines = []
  if (data.mainWeapon)   lines.push(Text.translate('gui.kubejs.backpack.summary_main').copy().append(' ' + data.mainWeapon))
  if (data.offhandWeapon) lines.push(Text.translate('gui.kubejs.backpack.summary_offhand').copy().append(' ' + data.offhandWeapon))
  if (data.specialWeapon) lines.push(Text.translate('gui.kubejs.backpack.summary_special').copy().append(' ' + data.specialWeapon))
  return lines
}

// ========== GUI 渲染 ==========

/**
 * 背包槽位选择页（共用：加载/保存/删除）
 * @param {'backpack_load'|'backpack_save'|'backpack_delete'} mode
 */
function renderBackpackSelect(gui, player, openPage, mode) {
  var prof = cleanId(player.persistentData.profession)
  if (!prof) { player.tell(Text.translate('msg.kubejs.profession_select.select_first')); openPage(player, 'prof'); return }

  // 返回按钮
  gui.slot(0, 0, slot => {
    slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.backpack.back')))
    slot.setLeftClicked(() => openPage(player, 'weapon_config'))
  })

  // ---- Row 0: 标题 ----
  var titleKey = 'gui.kubejs.backpack.title.' + mode.replace('backpack_', '')
  gui.slot(4, 0, slot => {
    slot.setItem(Item.of('minecraft:feather').withCustomName(Text.translate(titleKey)))
  })

  // ---- Row 1: 灰色分隔线 ----
  for (var x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

  // ---- Row 2-3: 5个背包槽位 ----
  // 格式: Row2: [s1] [ ] [s2] [ ] [s3]   Row3: [ ] [s4] [ ] [s5] [ ]
  var slotPositions = [
    { row: 2, col: 1, idx: 1 },  // 槽位1
    { row: 2, col: 3, idx: 2 },  // 槽位2
    { row: 2, col: 5, idx: 3 },  // 槽位3
    { row: 3, col: 2, idx: 4 },  // 槽位4
    { row: 3, col: 4, idx: 5 },  // 槽位5
  ]

  slotPositions.forEach(function(pos) {
    var idx = pos.idx
    var filled = isBackpackSlotFilled(player, prof, idx)

    gui.slot(pos.col, pos.row, function(slot) {
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

      // 左键点击执行操作
      slot.setLeftClicked(function() {
        if (mode === 'backpack_save') {
          // 保存到该槽位
          saveToBackpackSlot(player, prof, idx)
          player.tell(Text.translate('msg.kubejs.backpack.saved', String(idx)))
          openPage(player, 'weapon_config')
        } else if (mode === 'backpack_load') {
          // 从该槽位加载
          var data = loadFromBackpackSlot(player, prof, idx)
          if (!data || (!data.mainWeapon && !data.offhandWeapon && !data.specialWeapon)) {
            player.tell(Text.translate('msg.kubejs.backpack.empty_slot'))
            return
          }
          if (data.mainWeapon)   player.persistentData.mainWeapon = data.mainWeapon
          else delete player.persistentData.mainWeapon
          if (data.offhandWeapon) player.persistentData.offhandWeapon = data.offhandWeapon
          else delete player.persistentData.offhandWeapon
          if (data.specialWeapon) player.persistentData.specialWeapon = data.specialWeapon
          else delete player.persistentData.specialWeapon
          player.tell(Text.translate('msg.kubejs.backpack.loaded', String(idx)))
          openPage(player, 'weapon_config')
        } else if (mode === 'backpack_delete') {
          // 删除该槽位
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
  })

  // ---- Row 4: 灰色分隔线 ----
  for (var x = 1; x < 8; x++) gui.slot(x, 4, s => { s.setItem(PANE.gray) })

  // ---- Row 5: 操作提示 ----
  var hintKey = 'gui.kubejs.backpack.hint.' + mode.replace('backpack_', '')
  gui.slot(4, 5, slot => {
    slot.setItem(Item.of('minecraft:book').withCustomName(Text.translate(hintKey)))
  })

}
