// ============================================================
// 弹药补给站 - LDLib2 配置GUI（S2C DataBinding + C2S Message）
//
// 全部数据驱动：
//   基础参数（scanRange / cooldown / enterDelay）→ ammo_crate.json
//   弹药类型 & 分类 → _ammo_types.json / ammoCategories
//     - 分类 key 顺序 = Tap 顺序
//     - 各分类的 tabName / color 控制 Tap 显示
//     - ammoList 的 key 顺序 = Tap 内弹药行顺序
//     - 各弹药条目的 displayName / default 控制显示和默认值
//
// 新增弹药只改 JSON，不动 JS。
//
// 标签页系统（类似原版创造物品栏）：
//   所有内容页（基础设置 + 弹药分类 + 作弊）平铺为 flatTapList，
//   每 $PAGE_SIZE（=4）个 tap 自动编为一组标签页。
//   顶部导航栏 ◀/▶ 切换标签页，点击横排 tap 按钮切换内容区渲染。
//   完全数据驱动：新增弹药分类自动生成新 tap，超过 4 个自动分页。
//
// S2C：服务端读取方块 NBT → 一次性推送到客户端 TextField
// C2S：客户端"保存"按钮 → sendMessage → 服务端写入 NBT
// 架构要点：
//   1. TextField 仅创建 + 设置样式（不设初始文本，不绑定）
//   2. 通过 queueS2CField() 入队，等 ModularUI.of() 建好后统一绑定
//   3. 绑定用 stringS2C(getter) + CHANGED_PERIODIC 策略
//   4. registerValueListener 内 setText() 刷新显示 + 切 NONE 停止轮询
//   5. 服务端 getter 用 readServerConfig() 缓存，仅第一次读 NBT
//   6. C2S 保存走原有 sendMessage 逻辑（独立于 S2C 绑定）
// ============================================================

// startup_scripts 作用域独立，需要自己加载 Java 类
var $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')
var $DataBindingBuilder = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.impl.DataBindingBuilder')
var $SyncStrategy = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.SyncStrategy')

// ════════════════════════════════════════════════════════════
//  数据化读取：从 _ammo_types.json / ammoCategories 加载分类和弹药
// ════════════════════════════════════════════════════════════

var $AMMO_DB_PATH = 'kubejs/data/kubejs/db/sbw_vehicle_db/_ammo_types.json'

/**
 * 从 JSON 加载弹药类型和 GUI 分类信息
 *
 * 遍历 ammoCategories（key 顺序 = Tap 顺序），
 * 每个分类内遍历 ammoList（key 顺序 = 弹药行顺序）。
 *
 * 输出：
 *   catList: [ { key, tabName, color, ammoOrder: [...] } ] — 按 JSON key 顺序
 *   flatList: [ { key, label, default }, ... ] — 全弹药平铺，供 cfgToTag/tagToCfg
 *   ammoMap: { key: { displayName, default }, ... } — 快速查表
 */
var $AMMO_DATA = (function() {
  var empty = { catList: [], flatList: [], ammoMap: {} }
  try {
    var raw = JsonIO.read($AMMO_DB_PATH)
    if (!raw || !raw.ammoCategories) {
      console.log('[弹药补给站-GUI] _ammo_types.json 缺少 ammoCategories')
      return empty
    }
    var cats = raw.ammoCategories
    var catKeys = Object.keys(cats)
    var catList = []
    var flatList = []
    var ammoMap = {}
    for (var ci = 0; ci < catKeys.length; ci++) {
      var catKey = catKeys[ci]
      var cat = cats[catKey]
      if (!cat || !cat.ammoList) continue
      var ammoKeys = Object.keys(cat.ammoList)
      var ammoOrder = []
      for (var ai = 0; ai < ammoKeys.length; ai++) {
        var ak = ammoKeys[ai]
        var info = cat.ammoList[ak]
        if (!info) continue
        ammoOrder.push(ak)
        var label = info.displayName || ak
        var defVal = (typeof info.default === 'number') ? info.default : 64
        flatList.push({ key: ak, label: label, default: defVal })
        ammoMap[ak] = { label: label, default: defVal }
      }
      if (ammoOrder.length === 0) continue
      catList.push({
        key: catKey,
        tabName: cat.tabName || catKey,
        color: cat.color || '§e',
        ammoOrder: ammoOrder
      })
    }
    console.log('[弹药补给站-GUI] 加载完成: ' + catList.length + ' 个分类, ' + flatList.length + ' 种弹药')
    return { catList: catList, flatList: flatList, ammoMap: ammoMap }
  } catch (e) {
    console.log('[弹药补给站-GUI] 读取 ' + $AMMO_DB_PATH + ' 失败: ' + e)
    return empty
  }
})()

var $CAT_LIST = $AMMO_DATA.catList
var $FLAT_LIST = $AMMO_DATA.flatList

// ★ 基础默认配置：从 ammo_crate.json 读取
var STATION_DEFAULT = (function() {
  try {
    var raw = JsonIO.read('kubejs/data/kubejs/blocks/ammo_crate.json')
    if (raw && raw.station_Default) {
      var c = raw.station_Default
      return {
        scanRange: (typeof c.scanRange  === 'number') ? c.scanRange  : 12,
        cooldown:  (typeof c.cooldown   === 'number') ? c.cooldown   : 5,
        enterDelay:(typeof c.enterDelay === 'number') ? c.enterDelay : 3
      }
    }
  } catch (e) {
    console.log('[弹药补给站-GUI] 读取默认配置 JSON 失败: ' + e)
  }
  return { scanRange: 12, cooldown: 5, enterDelay: 3 }
})()

// ========== 工具函数：配置 ↔ CompoundTag ==========

function cfgToTag(cfg) {
  var tag = new $CompoundTag()
  tag.putInt('scanRange', ~~(cfg.scanRange || STATION_DEFAULT.scanRange))
  tag.putInt('cooldown', ~~(cfg.cooldown || STATION_DEFAULT.cooldown))
  tag.putInt('enterDelay', ~~(cfg.enterDelay || STATION_DEFAULT.enterDelay))
  var slots = cfg.slots || {}
  for (var i = 0; i < $FLAT_LIST.length; i++) {
    var entry = $FLAT_LIST[i]
    var val = slots[entry.key] !== undefined ? slots[entry.key] : entry.default
    tag.putInt('slot_' + entry.key, ~~val)
  }
  return tag
}

function tagToCfg(tag) {
  var cfg = {
    scanRange: tag.getInt('scanRange'),
    cooldown: tag.getInt('cooldown'),
    enterDelay: tag.getInt('enterDelay'),
    slots: {}
  }
  for (var i = 0; i < $FLAT_LIST.length; i++) {
    var key = $FLAT_LIST[i].key
    cfg.slots[key] = tag.getInt('slot_' + key)
  }
  return cfg
}

// ========== LDLib2 UI 注册 ==========

var $PAGE_SIZE = 4  // 每个标签页最多容纳 4 个 tap

LDLib2UI.block('kubejs:ammo_station_cfg', event => {
  var player = event.player
  var level = event.level
  var pos = event.pos

  // ═══════════════════════════════════════════════════════════
  //  S2C 服务端配置缓存（一次性读取 NBT，后续 getter 走缓存）
  // ═══════════════════════════════════════════════════════════
  var s2cCache = null
  function readServerConfig() {
    if (s2cCache !== null) return s2cCache
    try {
      var server = player.getServer()
      if (!server) { s2cCache = {}; return s2cCache }
      var lvl = server.getLevel(level.getDimension())
      if (!lvl) { s2cCache = {}; return s2cCache }
      var b = lvl.getBlock(pos.getX(), pos.getY(), pos.getZ())
      if (!b || !b.entity) { s2cCache = {}; return s2cCache }
      var raw = b.entity.persistentData.getString('StationConfig')
      if (!raw) { s2cCache = {}; return s2cCache }
      s2cCache = JSON.parse(raw)
    } catch (e) {
      s2cCache = {}
    }
    return s2cCache
  }

  // ── Getter 工厂 ──
  function makeS2CGetter(key, defVal) {
    return function() {
      var cfg = readServerConfig()
      return String(cfg[key] !== undefined ? cfg[key] : defVal)
    }
  }
  function makeSlotS2CGetter(slotKey, defVal) {
    return function() {
      var cfg = readServerConfig()
      var v = (cfg && cfg.slots) ? cfg.slots[slotKey] : undefined
      return String(v !== undefined ? v : defVal)
    }
  }

  // ── S2C 字段队列（延迟绑定，等 ModularUI.of 之后） ──
  var s2cQueue = []
  function queueS2CField(field, getter, name) {
    s2cQueue.push({ field: field, getter: getter, name: name })
    return field
  }

  // ═══════════════════════════════════════════════════════════
  //  创建所有 TextField（仅设置样式/占位，绑定稍后统一执行）
  // ═══════════════════════════════════════════════════════════
  var fieldScanRange = new TextField().setNumbersOnlyInt(0, 999999)
  fieldScanRange.lss('width', 55)
  queueS2CField(fieldScanRange, makeS2CGetter('scanRange', STATION_DEFAULT.scanRange), 'scanRange')

  var fieldCooldown = new TextField().setNumbersOnlyInt(0, 999999)
  fieldCooldown.lss('width', 55)
  queueS2CField(fieldCooldown, makeS2CGetter('cooldown', STATION_DEFAULT.cooldown), 'cooldown')

  var fieldEnterDelay = new TextField().setNumbersOnlyInt(1, 999999)
  fieldEnterDelay.lss('width', 55)
  queueS2CField(fieldEnterDelay, makeS2CGetter('enterDelay', STATION_DEFAULT.enterDelay), 'enterDelay')

  var slotFields = {}
  function initSlotFields() {
    for (var i = 0; i < $FLAT_LIST.length; i++) {
      var entry = $FLAT_LIST[i]
      var field = new TextField().setNumbersOnlyInt(0, 999999)
      field.lss('width', 55)
      slotFields[entry.key] = field
      queueS2CField(field, makeSlotS2CGetter(entry.key, entry.default), 'slot_' + entry.key)
    }
  }
  initSlotFields()

  // ═══════════════════════════════════════════════════════════
  //  构建所有页面内容
  // ═══════════════════════════════════════════════════════════

  /** 构建"基础设置"页 */
  function buildBasicPage() {
    var page = new UIElement()
    page.lss('padding', 4)
    var srRow = new UIElement()
    srRow.addChild(new Label().setText(Component.literal('§7扫描范围:')))
    srRow.addChild(fieldScanRange)
    srRow.addChild(new Label().setText(Component.literal(' §7格')))
    page.addChild(srRow)
    page.addChild(new Label().setText(Component.literal(' ')))
    var cdRow = new UIElement()
    cdRow.addChild(new Label().setText(Component.literal('§7冷却时间:')))
    cdRow.addChild(fieldCooldown)
    cdRow.addChild(new Label().setText(Component.literal(' §7秒')))
    page.addChild(cdRow)
    page.addChild(new Label().setText(Component.literal(' ')))
    var edRow = new UIElement()
    edRow.addChild(new Label().setText(Component.literal('§7驶入等待:')))
    edRow.addChild(fieldEnterDelay)
    edRow.addChild(new Label().setText(Component.literal(' §7秒')))
    page.addChild(edRow)
    page.addChild(new Label().setText(Component.literal(' ')))
    page.addChild(new Label().setText(Component.literal('§8← 点击上方 tap 配置弹药')))
    return page
  }

  /** 构建单个弹药分类页 — ScrollerView 可滚动视口 + displayName(id) + 输入框 */
  function buildCatPage(cat) {
    var page = new UIElement()
    page.lss('padding', 4)
    // 分类标题（使用 color 字段，始终可见，不滚动）
    var titleText = cat.color + '── ' + cat.tabName.replace(/§./g, '') + ' ──'
    page.addChild(new Label().setText(Component.literal(titleText)))
    // 可滚动视口：固定大小，超出内容自动滚动
    var scroller = new ScrollerView()
    scroller.lss('width', 258)
    scroller.lss('height', 140)
    scroller.scrollerStyle(function(s) {
      s.mode('vertical')
      s.adaptiveWidth(true)
      s.adaptiveHeight(true)
      s.verticalScrollDisplay('auto')
    })
    // 弹药行：displayName + (id) + 输入框
    for (var ai = 0; ai < cat.ammoOrder.length; ai++) {
      var ak = cat.ammoOrder[ai]
      var field = slotFields[ak]
      if (!field) continue
      var info = $AMMO_DATA.ammoMap[ak]
      var label = info ? info.label : ak
      scroller.addScrollViewChild(makeAmmoRow(label, ak, field))
    }
    page.addChild(scroller)
    return page
  }

  /** 构建作弊页 */
  function buildCheatPage() {
    var page = new UIElement()
    page.lss('padding', 4)
    var isOP = player.hasPermissions(2)
    if (!isOP) {
      page.addChild(new Label().setText(Component.literal('§c── 作弊功能 ──')))
      page.addChild(new Label().setText(Component.literal(' ')))
      page.addChild(new Label().setText(Component.literal('§c你没有权限使用作弊功能')))
    } else {
      page.addChild(new Label().setText(Component.literal('§c── 作弊功能 ──')))
      page.addChild(new Label().setText(Component.literal(' ')))
      var btnToggleCheat = new Button()
      btnToggleCheat.setText(Component.literal('§6⇄ 切换作弊模式'))
      btnToggleCheat.lss('padding', '3 10')
      btnToggleCheat.setOnServerClick(function(clickEvent) {
        var server = player.getServer()
        if (!server) return
        try {
          var lvl = server.getLevel(level.getDimension())
          if (!lvl) return
          var b = lvl.getBlock(pos.getX(), pos.getY(), pos.getZ())
          if (!b || !b.entity) return
          var current = b.entity.persistentData.CheatMode === true
          b.entity.persistentData.putBoolean('CheatMode', !current)
          b.entity.setChanged()
          player.displayClientMessage(Component.literal('§6[弹药补给站] ' + (!current ? '§c作弊模式已开启' : '§a作弊模式已关闭')), false)
        } catch (e) {
          player.displayClientMessage(Component.literal('§c[弹药补给站] 切换失败: ' + e), false)
        }
      })
      page.addChild(btnToggleCheat)
      var statusLabel = new Label().setText(Component.literal('§7作弊模式已关闭'))
      page.addChild(statusLabel)
      var btnManualTrigger = new Button()
      btnManualTrigger.setText(Component.literal('§4⚡ 立即扫描补给'))
      btnManualTrigger.lss('padding', '4 12')
      btnManualTrigger.setOnServerClick(function(clickEvent) {
        var server = player.getServer()
        if (!server) return
        try {
          var lvl = server.getLevel(level.getDimension())
          if (!lvl) return
          var b = lvl.getBlock(pos.getX(), pos.getY(), pos.getZ())
          if (!b || !b.entity) return
          b.entity.persistentData.putBoolean('PendingReplenish', true)
          b.entity.setChanged()
          player.displayClientMessage(Component.literal('§e⏳ 补给请求已提交，将在下次Tick执行'), false)
        } catch (e) { player.displayClientMessage(Component.literal('§c[弹药补给站] 手动触发失败: ' + e), false) }
      })
      page.addChild(btnManualTrigger)
    }
    return page
  }

  // ── 构建扁平 tap 列表（自动生成，数据驱动）──
  var flatTapList = []

  // 第 0 个 tap：基础设置（固定）
  flatTapList.push({
    name: '基础',
    color: '§e',
    content: buildBasicPage()
  })

  // 中间 tap：弹药分类（来自 JSON，自动生成）
  for (var ci = 0; ci < $CAT_LIST.length; ci++) {
    var cat = $CAT_LIST[ci]
    flatTapList.push({
      name: cat.tabName,
      color: cat.color,
      content: buildCatPage(cat)
    })
  }

  // 最后 1 个 tap：作弊（固定）
  flatTapList.push({
    name: '作弊',
    color: '§c',
    content: buildCheatPage()
  })

  // ── 自动分页：每 $PAGE_SIZE 个 tap 一组 ──
  var tagPages = []
  for (var ti = 0; ti < flatTapList.length; ti += $PAGE_SIZE) {
    tagPages.push(flatTapList.slice(ti, ti + $PAGE_SIZE))
  }
  var totalTagPages = tagPages.length

  // ═══════════════════════════════════════════════════════════
  //  状态变量
  // ═══════════════════════════════════════════════════════════
  var currentTagPageIdx = 0       // 当前标签页索引（0 ~ totalTagPages-1）
  var selectedTapGlobalIdx = 0    // 当前选中 tap 的全局索引（0 ~ flatTapList.length-1）

  // ═══════════════════════════════════════════════════════════
  //  UI 构建
  // ═══════════════════════════════════════════════════════════

  var root = new UIElement()
  root.lss('width', 270)
  root.lss('padding', 6)

  // ── 标题 ──
  var titleLabel = new Label().setText(Component.literal('§6╔══ 弹药补给站配置 ══╗'))
  titleLabel.lss('width', '100%')
  titleLabel.textStyle(function(style) { style.textAlignHorizontal('center') })
  root.addChild(titleLabel)

  root.addChild(makeSeparator())

  // ── 导航栏：◀ 页码 ▶ ──
  var navRow = new UIElement()
  navRow.lss('width', '100%')
  navRow.lss('flex-direction', 'row')
  navRow.lss('justify-content', 'center')
  navRow.lss('align-items', 'center')

  var btnPrev = new Button()
  btnPrev.setText(Component.literal('§7◀'))
  btnPrev.lss('padding', '2 6')

  var pageNumLabel = new Label()
  pageNumLabel.lss('padding', '0 8')
  pageNumLabel.textStyle(function(style) { style.textAlignHorizontal('center') })

  var btnNext = new Button()
  btnNext.setText(Component.literal('▶§7'))
  btnNext.lss('padding', '2 6')

  navRow.addChild(btnPrev)
  navRow.addChild(pageNumLabel)
  navRow.addChild(btnNext)

  root.addChild(navRow)

  // ── Tap 行（横排按钮，动态渲染） ──
  var tapRow = new UIElement()
  tapRow.lss('width', '100%')
  tapRow.lss('flex-direction', 'row')
  tapRow.lss('justify-content', 'center')
  tapRow.lss('align-items', 'center')
  tapRow.lss('gap', 4)
  root.addChild(tapRow)

  // ── 内容区 ──
  var contentContainer = new UIElement()
  contentContainer.lss('padding', 4)
  root.addChild(contentContainer)

  // ──── 底部按钮 ────
  root.addChild(makeSeparator())

  var btnRow = new UIElement()

  var btnSave = new Button()
  btnSave.setText(Component.literal('§a✔ 保存配置'))
  btnSave.lss('padding', '3 10')
  btnSave.setOnClick(function(clickEvent) {
    try {
      var sr = safeParseField(null, fieldScanRange);
      var cd = safeParseField(null, fieldCooldown);
      var ed = safeParseField(null, fieldEnterDelay);
      var tag = new $CompoundTag();
      tag.putInt('scanRange', ~~sr);
      tag.putInt('cooldown', ~~cd);
      tag.putInt('enterDelay', ~~ed);
      for (var i = 0; i < $FLAT_LIST.length; i++) {
        var ak = $FLAT_LIST[i].key;
        var f = slotFields[ak];
        if (!f) continue;
        var amt = safeParseField(null, f);
        if (amt > 0) tag.putInt('slot_' + ak, ~~amt);
      }
      root.sendMessage('save_config', tag);
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[弹药补给站] 保存异常: ' + e), false);
    }
  })
  btnRow.addChild(btnSave)

  var btnReset = new Button()
  btnReset.setText(Component.literal('§e↻ 重置默认'))
  btnReset.lss('padding', '3 10')
  btnReset.setOnClick(function(clickEvent) {
    root.sendMessage('reset_config', new $CompoundTag())
  })
  btnRow.addChild(btnReset)

  root.addChild(btnRow)
  root.addChild(makeSeparator())

  // 命令复制区
  var cmdField = new TextField()
  cmdField.setAnyString()
  cmdField.setText('§7点下方按钮生成命令')
  cmdField.lss('width', '100%')
  root.addChild(cmdField)

  var cmdCopyBtn = new Button()
  cmdCopyBtn.setText(Component.literal('§6⚡ 生成命令'))
  cmdCopyBtn.lss('padding', '3 10')
  cmdCopyBtn.setOnClick(function(clickEvent) {
    var sr = safeParseField(null, fieldScanRange)
    var cd = safeParseField(null, fieldCooldown)
    var ed = safeParseField(null, fieldEnterDelay)
    var slotsJson = {}
    for (var i = 0; i < $FLAT_LIST.length; i++) {
      var ak = $FLAT_LIST[i].key
      var amt = safeParseField(null, slotFields[ak])
      if (amt > 0) slotsJson[ak] = amt
    }
    var configObj = { scanRange: sr, cooldown: cd, enterDelay: ed, slots: slotsJson }
    var escapedJson = JSON.stringify(configObj).replace(/\\\\/g, '\\\\\\\\').replace(/\"/g, '\\\\\"')
    var bx = pos.getX(), by = pos.getY(), bz = pos.getZ()
    var cmd = '/data merge block ' + bx + ' ' + by + ' ' + bz +
      ' {StationConfig:\"' + escapedJson + '\"}'
    cmdField.setText(cmd)
    try { cmdField.setSelection(0, cmd.length) } catch (e) {}
  })
  root.addChild(cmdCopyBtn)
  root.addChild(new Label().setText(Component.literal('§7点按钮 → 全选 → Ctrl+C → 聊天栏粘贴执行')))

  root.addChild(new InventorySlots())

  // ═══════════════════════════════════════════════════════════
  //  renderUI()：重新渲染 tap 行 + 内容区
  // ═══════════════════════════════════════════════════════════
  function renderUI() {
    var pageTaps = tagPages[currentTagPageIdx]

    // 更新页码
    pageNumLabel.setText(Component.literal('§7' + (currentTagPageIdx + 1) + '/' + totalTagPages))

    // 更新翻页按钮状态（到边界时禁用）
    if (currentTagPageIdx <= 0) {
      btnPrev.setActive(false)
    } else {
      btnPrev.setActive(true)
    }
    if (currentTagPageIdx >= totalTagPages - 1) {
      btnNext.setActive(false)
    } else {
      btnNext.setActive(true)
    }

    // 清空并重建 tap 行
    tapRow.clearAllChildren()
    var globalStartIdx = currentTagPageIdx * $PAGE_SIZE
    for (var i = 0; i < pageTaps.length; i++) {
      var tapInfo = pageTaps[i]
      var globalIdx = globalStartIdx + i
      var isSelected = (globalIdx === selectedTapGlobalIdx)

      var tapBtn = new Button()
      // 过长名称截断
      var displayName = tapInfo.name
      if (displayName.length > 6) {
        displayName = displayName.substring(0, 6) + '..'
      }
      if (isSelected) {
        tapBtn.setText(Component.literal(tapInfo.color + '『' + displayName + '』'))
      } else {
        tapBtn.setText(Component.literal('§7' + displayName))
      }
      tapBtn.lss('padding', '2 6')

      // 闭包捕获 globalIdx
      ;(function(capturedIdx) {
        tapBtn.setOnClick(function(clickEvent) {
          if (selectedTapGlobalIdx !== capturedIdx) {
            selectedTapGlobalIdx = capturedIdx
            // 如果点击的 tap 不在当前标签页，自动切换标签页
            var newPageIdx = Math.floor(capturedIdx / $PAGE_SIZE)
            if (newPageIdx !== currentTagPageIdx) {
              currentTagPageIdx = newPageIdx
            }
            renderUI()
          }
        })
      })(globalIdx)

      tapRow.addChild(tapBtn)
    }

    // 重建内容区
    var selectedTap = flatTapList[selectedTapGlobalIdx]
    contentContainer.clearAllChildren()
    if (selectedTap) {
      contentContainer.addChild(selectedTap.content)
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  绑定导航按钮
  // ═══════════════════════════════════════════════════════════

  btnPrev.setOnClick(function(clickEvent) {
    if (currentTagPageIdx > 0) {
      currentTagPageIdx--
      // 切换到新标签页后，默认选中该标签页的第一个 tap
      selectedTapGlobalIdx = currentTagPageIdx * $PAGE_SIZE
      renderUI()
    }
  })

  btnNext.setOnClick(function(clickEvent) {
    if (currentTagPageIdx < totalTagPages - 1) {
      currentTagPageIdx++
      selectedTapGlobalIdx = currentTagPageIdx * $PAGE_SIZE
      renderUI()
    }
  })

  // ═══════════════════════════════════════════════════════════════
  //  Message 系统：网络同步
  // ═══════════════════════════════════════════════════════════════

  root.onMessage('save_config', function(self, msg) {
    if (player.getServer() === null) return
    try {
      var lvl = player.getServer().getLevel(level.getDimension())
      if (!lvl) return
      var b = lvl.getBlock(pos.getX(), pos.getY(), pos.getZ())
      if (!b || !b.entity) return
      var newCfg = {
        scanRange: msg.getInt('scanRange'),
        cooldown: msg.getInt('cooldown'),
        enterDelay: msg.getInt('enterDelay'),
        slots: {}
      }
      for (var i = 0; i < $FLAT_LIST.length; i++) {
        var ak = $FLAT_LIST[i].key
        if (msg.contains('slot_' + ak)) {
          newCfg.slots[ak] = msg.getInt('slot_' + ak)
        }
      }
      b.entity.persistentData.putString('StationConfig', JSON.stringify(newCfg))
      b.entity.persistentData.putLong('CooldownEnd', 0)
      b.entity.setChanged()
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[弹药补给站] 保存异常: ' + e), false)
    }
  })

  root.onMessage('reset_config', function(self, msg) {
    if (player.getServer() === null) return
    try {
      var lvl = player.getServer().getLevel(level.getDimension())
      if (!lvl) return
      var b = lvl.getBlock(pos.getX(), pos.getY(), pos.getZ())
      if (!b || !b.entity) return
      b.entity.persistentData.remove('StationConfig')
      b.entity.persistentData.putLong('CooldownEnd', 0)
      b.entity.setChanged()
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[弹药补给站] 重置异常: ' + e), false)
    }
  })

  // ========== 构建 ModularUI ==========
  event.modularUI = ModularUI.of(UI.of(root), player)

  // ═══════════════════════════════════════════════════════════
  //  统一注册所有 S2C 绑定（必须等 ModularUI.of 之后执行）
  // ═══════════════════════════════════════════════════════════
  var syncMgr = event.modularUI.syncManager
  for (var qi = 0; qi < s2cQueue.length; qi++) {
    var item = s2cQueue[qi]
    ;(function(field, getter, name) {
      try {
        var binding = $DataBindingBuilder.stringS2C(getter)
          .s2cStrategy($SyncStrategy.CHANGED_PERIODIC)
          .name('s2c_' + name)
          .build()
        field.bind(binding)
        syncMgr.registerSyncValue(binding.getSyncValue())

        var fired = false
        field.registerValueListener(function(val) {
          if (!fired) {
            fired = true
            try {
              field.setText(String(val))
              binding.getSyncValue().setSyncStrategy($SyncStrategy.NONE)
            } catch (e) {
              player.displayClientMessage(Component.literal('§c[S2C] ' + name + ' 更新异常: ' + e), false)
            }
          }
        })
      } catch (e) {
        player.displayClientMessage(Component.literal('§c[S2C] ' + name + ' 绑定异常: ' + e), false)
      }
    })(item.field, item.getter, item.name)
  }

  // ── 初始渲染 ──
  currentTagPageIdx = 0
  selectedTapGlobalIdx = 0
  renderUI()
})

/**
 * 构建弹药行容器：displayName + (id) + 输入框
 * 各自分配固定宽度，组成紧凑小容器，避免互相挤压
 */
function makeAmmoRow(displayName, ammoId, field) {
  var row = new UIElement()
  row.lss('width', 240)
  row.lss('flex-direction', 'row')
  row.lss('align-items', 'center')
  row.lss('gap', 4)
  // displayName（自带颜色代码）
  var nameLbl = new Label().setText(Component.literal(displayName))
  nameLbl.lss('width', 100)
  nameLbl.lss('overflow', 'hidden')
  row.addChild(nameLbl)
  // id（灰色小字）
  var idLbl = new Label().setText(Component.literal('§7(' + ammoId + ')'))
  idLbl.lss('width', 75)
  idLbl.lss('overflow', 'hidden')
  row.addChild(idLbl)
  // 输入框（已有 width: 55）
  row.addChild(field)
  return row
}

function makeSeparator() {
  var sep = new Label().setText(Component.literal('§8━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
  sep.lss('width', '100%')
  sep.lss('overflow', 'hidden')
  return sep
}

function safeParseField(customVal, field) {
  try {
    var text = customVal !== undefined && customVal !== null ? String(customVal) : field.getText()
    if (text === null || text === undefined) return 0
    var val = parseInt(text, 10)
    return isNaN(val) ? 0 : Math.max(0, val)
  } catch (e) { return 0 }
}
