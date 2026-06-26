// ============================================================
// 弹药补给站 - LDLib2 配置GUI（分页优化版）
//
// 优化说明：
//   1. 根容器固定宽度，所有元素受约束，不会满屏乱飞
//   2. 使用 TabView 分3页，每页元素精简不拥挤
//   3. 标题居中置顶
//   4. 保存/重置按钮 + 玩家物品栏在所有页面下方共享
// ============================================================

var $HashMap = Java.loadClass('java.util.HashMap')
global.ammoStationGuiCache = new $HashMap()
var $DataBindingBuilder = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.impl.DataBindingBuilder')
var $SyncStrategy = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.SyncStrategy')
// 用枚举值设置 C2S 通道
var fieldVals = {}
function bindField(field, name) {
  fieldVals[name] = field.getText()
  try {
    var binding = $DataBindingBuilder.string(
      function() { return field.getText() },
      function(val) { fieldVals[name] = val }
    ).s2cStrategy($SyncStrategy.NONE).c2sStrategy($SyncStrategy.ALWAYS).name(name).build()
    field.bind(binding)
  } catch (e) {
    console.log('[弹药补给站] 绑定失败(' + name + '): ' + e)
  }
}

const GUI_AMMO_TYPES = [
  { key: 'large_shell_ap',  label: '§6大口径AP',  default: 64 },
  { key: 'large_shell_he',  label: '§c大口径HE',  default: 64 },
  { key: 'small_shell_ap',  label: '§b小口径AP',  default: 64 },
  { key: 'small_shell_he',  label: '§d小口径HE',  default: 64 },
  { key: 'rifle_ammo',      label: '§7步枪弹',    default: 192 },
  { key: 'heavy_ammo',      label: '§9重弹',      default: 128 },
  { key: 'missile',         label: '§a导弹',       default: 8 },
  { key: 'rocket',          label: '§e火箭弹',     default: 16 }
]

// ========== LDLib2 UI 注册 ==========

LDLib2UI.block('kubejs:ammo_station_cfg', event => {
  let player = event.player
  let uuid = player.uuid

  var cacheData = null
  try {
    var raw = global.ammoStationGuiCache.get(uuid)
    if (raw) cacheData = JSON.parse(raw)
  } catch (e) { }

  if (!cacheData) {
    cacheData = {
      pos: { x: 0, y: 0, z: 0 },
      dim: 'minecraft:overworld',
      config: { scanRange: 12, cooldown: 5, slots: {
        large_shell_ap: 64, large_shell_he: 64,
        small_shell_ap: 64, small_shell_he: 64,
        rifle_ammo: 192, heavy_ammo: 128,
        missile: 8, rocket: 16
      }}
    }
  }

  var cfg = cacheData.config
  // 作弊模式状态（控制手动补给按钮显隐）
  var cheatMode = cacheData.cheatMode === true

  // ──── 创建所有共享的输入字段 ────

  // 基础参数字段
  var fieldScanRange = new TextField().setNumbersOnlyInt(0, 999999).setText(String(cfg.scanRange))
  fieldScanRange.lss('width', 55)
  bindField(fieldScanRange, 'sr')
  var fieldCooldown = new TextField().setNumbersOnlyInt(0, 999999).setText(String(cfg.cooldown))
  fieldCooldown.lss('width', 55)
  bindField(fieldCooldown, 'cd')

  // 弹药字段（每个弹药类型一个输入框）
  var slotFields = {}
  for (var si = 0; si < GUI_AMMO_TYPES.length; si++) {
    var at = GUI_AMMO_TYPES[si]
    var val = cfg.slots && cfg.slots[at.key] !== undefined ? cfg.slots[at.key] : at.default
    var field = new TextField().setNumbersOnlyInt(0, 999999).setText(String(val))
    field.lss('width', 55)
    bindField(field, at.key)
    slotFields[at.key] = field
  }

  // ================================================================
  //  根容器：固定宽度，所有子元素受其约束
  // ================================================================
  var root = new UIElement()
  root.lss('width', 270)
  root.lss('padding', 6)

  // ──── 标题（居中置顶） ────
  var titleLabel = new Label().setText(Component.literal('§6╔══ 弹药补给站配置 ══╗'))
  titleLabel.lss('width', '100%')
  titleLabel.textStyle(function(style) { style.textAlignHorizontal('center') })
  root.addChild(titleLabel)

  // ──── 分隔线（占满容器宽度） ────
  root.addChild(makeSeparator())

  // ================================================================
  //  分页：TabView
  // ================================================================
  var tabView = new TabView()

  // ═══════════════════════════════════════════════════════════════
  //  第1页：基础设置（扫描范围 + 冷却时间）
  // ═══════════════════════════════════════════════════════════════
  var page1 = new UIElement()
  page1.lss('padding', 4)

  var srRow = new UIElement()
  srRow.addChild(new Label().setText(Component.literal('§7扫描范围:')))
  srRow.addChild(fieldScanRange)
  srRow.addChild(new Label().setText(Component.literal(' §7格')))
  page1.addChild(srRow)

  page1.addChild(new Label().setText(Component.literal(' '))) // 间距

  var cdRow = new UIElement()
  cdRow.addChild(new Label().setText(Component.literal('§7冷却时间:')))
  cdRow.addChild(fieldCooldown)
  cdRow.addChild(new Label().setText(Component.literal(' §7秒')))
  page1.addChild(cdRow)

  page1.addChild(new Label().setText(Component.literal(' '))) // 间距
  page1.addChild(new Label().setText(Component.literal('§8← 切换标签页配置弹药')))

  var tab1 = new Tab()
  tab1.setText('基础')
  tabView.addTab(tab1, page1)

  // ═══════════════════════════════════════════════════════════════
  //  第2页：弹药配置（上）— 大口径AP/HE + 小口径AP/HE
  // ═══════════════════════════════════════════════════════════════
  var page2 = new UIElement()
  page2.lss('padding', 4)

  page2.addChild(new Label().setText(Component.literal('§e── 大口径/小口径 ──')))
  for (var pi = 0; pi < 4; pi++) {
    var at = GUI_AMMO_TYPES[pi]
    var row = new UIElement()
    row.addChild(new Label().setText(Component.literal(at.label + ':')))
    row.addChild(slotFields[at.key])
    row.addChild(new Label().setText(Component.literal(' 个')))
    page2.addChild(row)
  }

  var tab2 = new Tab()
  tab2.setText('弹药(上)')
  tabView.addTab(tab2, page2)

  // ═══════════════════════════════════════════════════════════════
  //  第3页：弹药配置（下）— 步枪弹 + 重弹 + 导弹 + 火箭弹
  // ═══════════════════════════════════════════════════════════════
  var page3 = new UIElement()
  page3.lss('padding', 4)

  page3.addChild(new Label().setText(Component.literal('§e── 枪弹/导弹/火箭弹 ──')))
  for (var pi = 4; pi < 8; pi++) {
    var at = GUI_AMMO_TYPES[pi]
    var row = new UIElement()
    row.addChild(new Label().setText(Component.literal(at.label + ':')))
    row.addChild(slotFields[at.key])
    row.addChild(new Label().setText(Component.literal(' 个')))
    page3.addChild(row)
  }

  var tab3 = new Tab()
  tab3.setText('弹药(下)')
  tabView.addTab(tab3, page3)

  // ═══════════════════════════════════════════════════════════════
  //  第4页：作弊功能 — 非OP完全无法交互
  // ═══════════════════════════════════════════════════════════════

  var page4 = new UIElement()
  page4.lss('padding', 4)

  // 检查玩家 OP 权限（UI 构建时在服务端执行）
  var isOP = player.hasPermissions(2)

  if (!isOP) {
    // 非 OP → 只显示"无权限"消息，不渲染任何按钮
    page4.addChild(new Label().setText(Component.literal('§c── 作弊功能 ──')))
    page4.addChild(new Label().setText(Component.literal(' ')))
    page4.addChild(new Label().setText(Component.literal('§c你没有权限使用作弊功能')))
  } else {
    // OP → 显示完整作弊页
    page4.addChild(new Label().setText(Component.literal('§c── 作弊功能 ──')))
    page4.addChild(new Label().setText(Component.literal(' '))) // 间距

    // 切换作弊模式按钮
    var btnToggleCheat = new Button()
    btnToggleCheat.setText(Component.literal('§6⇄ 切换作弊模式'))
    btnToggleCheat.lss('padding', '3 10')
    btnToggleCheat.setOnServerClick(function(clickEvent) {
      var server = player.getServer()
      if (!server) return
      var puuid = player.uuid
      var raw = global.ammoStationGuiCache.get(puuid)
      if (!raw) { player.displayClientMessage(Component.literal('§c[弹药补给站] 缓存失效'), false); return }
      try {
        var data = JSON.parse(raw)
        var level = server.getLevel(data.dim || 'minecraft:overworld')
        if (!level) return
        var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
        if (!block || block.getId() === 'minecraft:air') return
        var current = block.entity.persistentData.CheatMode === true
        block.entity.persistentData.putBoolean('CheatMode', !current)
        player.displayClientMessage(Component.literal('§6[弹药补给站] ' + (!current ? '§c作弊模式已开启' : '§a作弊模式已关闭')), false)
      } catch (e) {
        player.displayClientMessage(Component.literal('§c[弹药补给站] 切换失败: ' + e), false)
      }
    })
    page4.addChild(btnToggleCheat)

    // 状态指示
    var statusLabel = new Label().setText(Component.literal(cheatMode ? '§a✔ 作弊模式已开启' : '§7作弊模式已关闭'))
    page4.addChild(statusLabel)

    // 手动触发扫描补给按钮（仅作弊模式开启时显示）
    if (cheatMode) {
      page4.addChild(new Label().setText(Component.literal(' '))) // 间距

      var btnManualTrigger = new Button()
      btnManualTrigger.setText(Component.literal('§4⚡ 立即扫描补给'))
      btnManualTrigger.lss('padding', '4 12')
      btnManualTrigger.setOnServerClick(function(clickEvent) {
        var server = player.getServer()
        if (!server) return
        var puuid = player.uuid
        var raw = global.ammoStationGuiCache.get(puuid)
        if (!raw) {
          player.displayClientMessage(Component.literal('§c[弹药补给站] 缓存失效'), false)
          return
        }
        try {
          var data = JSON.parse(raw)
          var level = server.getLevel(data.dim || 'minecraft:overworld')
          if (!level) {
            player.displayClientMessage(Component.literal('§c[弹药补给站] 无法获取维度'), false)
            return
          }
          var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
          if (!block || block.getId() === 'minecraft:air') {
            player.displayClientMessage(Component.literal('§c[弹药补给站] 方块已不存在'), false)
            return
          }
          // 写入 PendingReplenish 标记，由 server 侧的 blockEntityTick 执行
          block.entity.persistentData.putBoolean('PendingReplenish', true)
          player.displayClientMessage(Component.literal('§e⏳ 补给请求已提交，将在下次Tick执行'), false)
        } catch (e) {
          player.displayClientMessage(Component.literal('§c[弹药补给站] 手动触发失败: ' + e), false)
        }
      })
      page4.addChild(btnManualTrigger)
    }
  }

  var tab4 = new Tab()
  tab4.setText('§c作弊')
  tabView.addTab(tab4, page4)

  root.addChild(tabView)

  // ──── 分隔线（占满容器宽度） ────
  root.addChild(makeSeparator())

  // ================================================================
  //  共享底部：按钮行 + 玩家物品栏
  // ================================================================

  // ──── 按钮行 ────
  var btnRow = new UIElement()

  var btnSave = new Button()
  btnSave.setText(Component.literal('§a✔ 保存配置'))
  btnSave.lss('padding', '3 10')
  btnSave.setOnServerClick(function(clickEvent) {
    var server = player.getServer()
    if (!server) return
    var puuid = player.uuid
    var raw = global.ammoStationGuiCache.get(puuid)
    if (!raw) {
      player.displayClientMessage(Component.literal('§c[弹药补给站] 缓存失效，请重新打开GUI'), false)
      return
    }
    try {
      var data = JSON.parse(raw)
      var level = server.getLevel(data.dim || 'minecraft:overworld')
      if (!level) {
        player.displayClientMessage(Component.literal('§c[弹药补给站] 无法获取维度'), false)
        return
      }
      var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
      if (!block || block.getId() === 'minecraft:air') {
        player.displayClientMessage(Component.literal('§c[弹药补给站] 方块已不存在'), false)
        return
      }
      // 从 fieldVals（C2S 同步值）读取，fallback 到 field.getText()
      var newCfg = {
        scanRange: safeParseField(fieldVals['sr'], fieldScanRange),
        cooldown: safeParseField(fieldVals['cd'], fieldCooldown),
        slots: {}
      }
      for (var fi = 0; fi < GUI_AMMO_TYPES.length; fi++) {
        var ak = GUI_AMMO_TYPES[fi].key
        var amt = safeParseField(fieldVals[ak], slotFields[ak])
        if (amt > 0) newCfg.slots[ak] = amt
      }
      console.log('[弹药补给站] 保存 fieldVals=' + JSON.stringify(fieldVals) + ' newCfg=' + JSON.stringify(newCfg))
      block.entity.persistentData.putString('StationConfig', JSON.stringify(newCfg))
      block.entity.persistentData.putLong('CooldownEnd', 0)
      player.displayClientMessage(Component.literal('§a✔ 配置已保存！冷却已重置'), false)
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[弹药补给站] 保存失败: ' + e), false)
    }
  })
  btnRow.addChild(btnSave)

  var btnReset = new Button()
  btnReset.setText(Component.literal('§e↻ 重置默认'))
  btnReset.lss('padding', '3 10')
  btnReset.setOnServerClick(function(clickEvent) {
    var server = player.getServer()
    if (!server) return
    var puuid = player.uuid
    var raw = global.ammoStationGuiCache.get(puuid)
    if (!raw) {
      player.displayClientMessage(Component.literal('§c[弹药补给站] 缓存失效'), false)
      return
    }
    try {
      var data = JSON.parse(raw)
      var level = server.getLevel(data.dim || 'minecraft:overworld')
      if (!level) return
      var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
      if (!block || block.getId() === 'minecraft:air') return
      // 清除 StationConfig，服务器下次读取时自动返回默认值
      block.entity.persistentData.remove('StationConfig')
      block.entity.persistentData.putLong('CooldownEnd', 0)
      player.displayClientMessage(Component.literal('§a✔ 已重置为默认配置'), false)
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[弹药补给站] 重置失败: ' + e), false)
    }
  })
  btnRow.addChild(btnReset)

  root.addChild(btnRow)

  // ──── 玩家物品栏 ────
  root.addChild(new InventorySlots())

  // 构建 ModularUI
  event.modularUI = ModularUI.of(UI.of(root), player)
})

// ========== 辅助函数 ==========

// 创建占满容器宽度的分隔线
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
  } catch (e) {
    return 0
  }
}
