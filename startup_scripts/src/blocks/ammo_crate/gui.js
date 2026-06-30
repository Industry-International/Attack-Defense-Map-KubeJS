// ============================================================
// 弹药补给站 - LDLib2 配置GUI（分页优化版）
//
// 架构（2026-06-30 重构 v3）：
//   直接从 event.pos/event.level 读写方块 NBT，不依赖任何 global 缓存
//
//   【打开】event.pos/event.level → 读 persistentData → 填字段
//   【保存】setOnServerClick → 读 TextField → 写 persistentData → setChanged()
// ============================================================

// ★ 注意：这些列表必须与 data/sbw_vehicle_db/_ammo_types.json 保持同步
//   key 对应 _ammo_types.json 中的弹药短名
//   label 对应其中的 displayName（需手动同步）
const GUI_AMMO_TYPES = [
  // ── 大口径炮弹 ──
  { key: 'large_shell_ap',  label: '§6大口径AP',  default: 64 },
  { key: 'large_shell_he',  label: '§c大口径HE',  default: 64 },
  { key: 'large_shell_gs',  label: '§a大口径葡萄', default: 64 },
  { key: 'mortar_shell',    label: '§6迫击炮弹',   default: 32 },
  // ── 小口径机炮弹 ──
  { key: 'small_shell_ap',  label: '§b小口径AP',  default: 64 },
  { key: 'small_shell_he',  label: '§d小口径HE',  default: 64 },
  { key: 'small_shell_gs',  label: '§a小口径葡萄', default: 64 },
  { key: 'small_shell_aa',  label: '§b防空弹',    default: 64 },
  // ── 枪弹/火箭弹 ──
  { key: 'rifle_ammo',      label: '§7步枪弹',    default: 192 },
  { key: 'heavy_ammo',      label: '§9重弹',      default: 128 },
  { key: 'small_rocket',    label: '§e小型火箭',   default: 32 },
  { key: 'rocket',          label: '§e火箭弹',     default: 16 },
  // ── 导弹/航弹 ──
  { key: 'missile',         label: '§a导弹',       default: 8 },
  { key: 'medium_anti_ground_missile', label: '§a中型对地导弹', default: 8 },
  { key: 'large_anti_ground_missile',  label: '§a大型对地导弹', default: 8 },
  { key: 'medium_anti_air_missile',    label: '§a防空导弹',     default: 8 },
  { key: 'medium_aerial_bomb',  label: '§c中型航弹', default: 8 },
  { key: 'small_aerial_bomb',   label: '§c小型航弹', default: 8 }
]

// MCSP 附属 - 坦克炮/导弹类
const MCSP_AMMO_TYPES1 = [
  { key: 'mcsp_125mm_ap',           label: '§6125mm穿甲', default: 32 },
  { key: 'mcsp_125mm_he',           label: '§c125mm高爆', default: 32 },
  { key: 'mcsp_120mm_bulletmortar', label: '§5120mm迫击', default: 32 },
  { key: 'mcsp_tow_2',              label: '§aTOW-2导弹', default: 16 },
  { key: 'mcsp_mlrs_shells',        label: '§eMLRS火箭',  default: 32 }
]

// MCSP 附属 - 机关炮/机枪类
const MCSP_AMMO_TYPES2 = [
  { key: 'mcsp_25mm_ap',            label: '§b25mm机炮',   default: 128 },
  { key: 'mcsp_30mm_ap',            label: '§d30mm机炮',   default: 128 },
  { key: 'mcsp_40mm_explosive',     label: '§c40mm高爆',   default: 64 },
  { key: 'mcsp_40mm_smoke',         label: '§740mm烟雾',   default: 32 },
  { key: 'mcsp_bullet762',          label: '§77.62mm机枪', default: 256 },
  { key: 'mcsp_smallarmscartridge', label: '§7小口径弹药', default: 256 }
]

// ========== LDLib2 UI 注册 ==========

LDLib2UI.block('kubejs:ammo_station_cfg', event => {
  let player = event.player

  // ★ 直接从 event 获取方块位置
  var blockX = event.pos.getX(), blockY = event.pos.getY(), blockZ = event.pos.getZ()
  var dimName = event.level.getDimension().toString()

  // ★ 尝试从方块 NBT 读取配置（服务端可读取；客户端失败则回落默认值）
  var cfg = null
  var cheatMode = false
  try {
    var block = event.level.getBlock(event.pos)
    if (block && block.entity) {
      var pd = block.entity.persistentData
      if (pd && pd.contains('StationConfig')) {
        cfg = JSON.parse(pd.getString('StationConfig'))
      }
      if (pd) cheatMode = pd.CheatMode === true
    }
  } catch (e) {}
  if (!cfg) {
    cfg = { scanRange: 12, cooldown: 5, enterDelay: 3, slots: {
      large_shell_ap: 64, large_shell_he: 64, large_shell_gs: 64,
      small_shell_ap: 64, small_shell_he: 64, small_shell_gs: 64, small_shell_aa: 64,
      rifle_ammo: 192, heavy_ammo: 128, small_rocket: 32,
      missile: 8, rocket: 16,
      medium_anti_ground_missile: 8, large_anti_ground_missile: 8,
      medium_anti_air_missile: 8,
      mortar_shell: 32, medium_aerial_bomb: 8, small_aerial_bomb: 8,
      mcsp_25mm_ap: 128, mcsp_30mm_ap: 128,
      mcsp_40mm_explosive: 64, mcsp_40mm_smoke: 32,
      mcsp_120mm_bulletmortar: 32,
      mcsp_125mm_ap: 32, mcsp_125mm_he: 32,
      mcsp_bullet762: 256, mcsp_smallarmscartridge: 256,
      mcsp_tow_2: 16, mcsp_mlrs_shells: 32
    }}
  }

  // ──── 创建所有共享的输入字段 ────

  // 基础参数字段
  var fieldScanRange = new TextField().setNumbersOnlyInt(0, 999999).setText(String(cfg.scanRange))
  fieldScanRange.lss('width', 55)

  var fieldCooldown = new TextField().setNumbersOnlyInt(0, 999999).setText(String(cfg.cooldown))
  fieldCooldown.lss('width', 55)

  var fieldEnterDelay = new TextField().setNumbersOnlyInt(1, 999999).setText(String(cfg.enterDelay || 3))
  fieldEnterDelay.lss('width', 55)


  // 弹药字段（每个弹药类型一个输入框）
  var slotFields = {}
  for (var si = 0; si < GUI_AMMO_TYPES.length; si++) {
    var at = GUI_AMMO_TYPES[si]
    var val = cfg.slots && cfg.slots[at.key] !== undefined ? cfg.slots[at.key] : at.default
    var field = new TextField().setNumbersOnlyInt(0, 999999).setText(String(val))
    field.lss('width', 55)

    slotFields[at.key] = field
  }
  // MCSP 弹药字段
  for (var si = 0; si < MCSP_AMMO_TYPES1.length; si++) {
    var at = MCSP_AMMO_TYPES1[si]
    var val = cfg.slots && cfg.slots[at.key] !== undefined ? cfg.slots[at.key] : at.default
    var field = new TextField().setNumbersOnlyInt(0, 999999).setText(String(val))
    field.lss('width', 55)

    slotFields[at.key] = field
  }
  for (var si = 0; si < MCSP_AMMO_TYPES2.length; si++) {
    var at = MCSP_AMMO_TYPES2[si]
    var val = cfg.slots && cfg.slots[at.key] !== undefined ? cfg.slots[at.key] : at.default
    var field = new TextField().setNumbersOnlyInt(0, 999999).setText(String(val))
    field.lss('width', 55)

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
  //  第1页：基础设置（扫描范围 + 冷却时间 + 驶入等待）
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

  var edRow = new UIElement()
  edRow.addChild(new Label().setText(Component.literal('§7驶入等待:')))
  edRow.addChild(fieldEnterDelay)
  edRow.addChild(new Label().setText(Component.literal(' §7秒')))
  page1.addChild(edRow)

  page1.addChild(new Label().setText(Component.literal(' '))) // 间距
  page1.addChild(new Label().setText(Component.literal('§8← 切换标签页配置弹药')))

  var tab1 = new Tab()
  tab1.setText('基础')
  tabView.addTab(tab1, page1)

  // ═══════════════════════════════════════════════════════════════
  //  第2页：弹药配置 — 大口径炮弹
  // ═══════════════════════════════════════════════════════════════
  var page2 = new UIElement()
  page2.lss('padding', 4)

  page2.addChild(new Label().setText(Component.literal('§e── 大口径炮弹 ──')))
  for (var pi = 0; pi < 4; pi++) {
    var at = GUI_AMMO_TYPES[pi]
    var row = new UIElement()
    row.addChild(new Label().setText(Component.literal(at.label + ':')))
    row.addChild(slotFields[at.key])
    row.addChild(new Label().setText(Component.literal(' 个')))
    page2.addChild(row)
  }

  var tab2 = new Tab()
  tab2.setText('炮弹')
  tabView.addTab(tab2, page2)

  // ═══════════════════════════════════════════════════════════════
  //  第3页：弹药配置 — 小口径机炮弹
  // ═══════════════════════════════════════════════════════════════
  var page3 = new UIElement()
  page3.lss('padding', 4)

  page3.addChild(new Label().setText(Component.literal('§e── 小口径机炮弹 ──')))
  for (var pi = 4; pi < 8; pi++) {
    var at = GUI_AMMO_TYPES[pi]
    var row = new UIElement()
    row.addChild(new Label().setText(Component.literal(at.label + ':')))
    row.addChild(slotFields[at.key])
    row.addChild(new Label().setText(Component.literal(' 个')))
    page3.addChild(row)
  }

  var tab3 = new Tab()
  tab3.setText('小口径')
  tabView.addTab(tab3, page3)

  // ═══════════════════════════════════════════════════════════════
  //  第4页：弹药配置 — 枪弹/火箭弹
  // ═══════════════════════════════════════════════════════════════
  var page4guns = new UIElement()
  page4guns.lss('padding', 4)

  page4guns.addChild(new Label().setText(Component.literal('§e── 枪弹/火箭弹 ──')))
  for (var pi = 8; pi < 12; pi++) {
    var at = GUI_AMMO_TYPES[pi]
    var row = new UIElement()
    row.addChild(new Label().setText(Component.literal(at.label + ':')))
    row.addChild(slotFields[at.key])
    row.addChild(new Label().setText(Component.literal(' 个')))
    page4guns.addChild(row)
  }

  var tab4guns = new Tab()
  tab4guns.setText('枪/火箭')
  tabView.addTab(tab4guns, page4guns)

  // ═══════════════════════════════════════════════════════════════
  //  第5页：弹药配置 — 导弹/航弹
  // ═══════════════════════════════════════════════════════════════
  var page5miss = new UIElement()
  page5miss.lss('padding', 4)

  page5miss.addChild(new Label().setText(Component.literal('§e── 导弹/航弹 ──')))
  for (var pi = 12; pi < GUI_AMMO_TYPES.length; pi++) {
    var at = GUI_AMMO_TYPES[pi]
    var row = new UIElement()
    row.addChild(new Label().setText(Component.literal(at.label + ':')))
    row.addChild(slotFields[at.key])
    row.addChild(new Label().setText(Component.literal(' 个')))
    page5miss.addChild(row)
  }

  var tab5miss = new Tab()
  tab5miss.setText('导弹/航弹')
  tabView.addTab(tab5miss, page5miss)

  // ═══════════════════════════════════════════════════════════════
  //  第6页：MCSP附属 — 坦克炮/导弹（125mm/120mm/TOW/MLRS）
  // ═══════════════════════════════════════════════════════════════
  var page5 = new UIElement()
  page5.lss('padding', 4)

  page5.addChild(new Label().setText(Component.literal('§e── 坦克炮/导弹 ──')))
  for (var pi = 0; pi < MCSP_AMMO_TYPES1.length; pi++) {
    var at = MCSP_AMMO_TYPES1[pi]
    var row = new UIElement()
    row.addChild(new Label().setText(Component.literal(at.label + ':')))
    row.addChild(slotFields[at.key])
    row.addChild(new Label().setText(Component.literal(' 个')))
    page5.addChild(row)
  }

  var tab5 = new Tab()
  tab5.setText('§aMCSP(上)')
  tabView.addTab(tab5, page5)

  // ═══════════════════════════════════════════════════════════════
  //  第7页：MCSP附属 — 机关炮/机枪（25mm/30mm/40mm/机枪）
  // ═══════════════════════════════════════════════════════════════
  var page6 = new UIElement()
  page6.lss('padding', 4)

  page6.addChild(new Label().setText(Component.literal('§e── 机关炮/机枪 ──')))
  for (var pi = 0; pi < MCSP_AMMO_TYPES2.length; pi++) {
    var at = MCSP_AMMO_TYPES2[pi]
    var row = new UIElement()
    row.addChild(new Label().setText(Component.literal(at.label + ':')))
    row.addChild(slotFields[at.key])
    row.addChild(new Label().setText(Component.literal(' 个')))
    page6.addChild(row)
  }

  var tab6 = new Tab()
  tab6.setText('§aMCSP(下)')
  tabView.addTab(tab6, page6)

  // ═══════════════════════════════════════════════════════════════
  //  第8页：作弊功能 — 非OP完全无法交互
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
      try {
        var server = player.getServer()
        if (!server) return
        var block = server.getLevel(dimName).getBlock(blockX, blockY, blockZ)
        if (!block || block.getId() === 'minecraft:air') return
        var current = block.entity.persistentData.CheatMode === true
        block.entity.persistentData.putBoolean('CheatMode', !current)
        block.entity.setChanged()
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
        try {
          var server = player.getServer()
          if (!server) {
            player.displayClientMessage(Component.literal('§c[弹药补给站] 无法获取服务端'), false)
            return
          }
          var block = server.getLevel(dimName).getBlock(blockX, blockY, blockZ)
          if (!block || block.getId() === 'minecraft:air') return
          block.entity.persistentData.putBoolean('PendingReplenish', true)
          block.entity.setChanged()
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
    try {
      var server = player.getServer()
      if (!server) {
        player.displayClientMessage(Component.literal('§c[弹药补给站] 无法获取服务端'), false)
        return
      }
      var block = server.getLevel(dimName).getBlock(blockX, blockY, blockZ)
      if (!block || block.getId() === 'minecraft:air') {
        player.displayClientMessage(Component.literal('§c[弹药补给站] 方块已不存在'), false)
        return
      }
      // 构建配置 JSON
      var newCfg = {
        scanRange: safeParseInt(fieldScanRange, 12),
        cooldown: safeParseInt(fieldCooldown, 5),
        enterDelay: safeParseInt(fieldEnterDelay, 3),
        slots: {}
      }
      for (var fi = 0; fi < GUI_AMMO_TYPES.length; fi++) {
        var ak = GUI_AMMO_TYPES[fi].key
        var amt = safeParseInt(slotFields[ak], 0)
        if (amt > 0) newCfg.slots[ak] = amt
      }
      for (var fi = 0; fi < MCSP_AMMO_TYPES1.length; fi++) {
        var ak = MCSP_AMMO_TYPES1[fi].key
        var amt = safeParseInt(slotFields[ak], 0)
        if (amt > 0) newCfg.slots[ak] = amt
      }
      for (var fi = 0; fi < MCSP_AMMO_TYPES2.length; fi++) {
        var ak = MCSP_AMMO_TYPES2[fi].key
        var amt = safeParseInt(slotFields[ak], 0)
        if (amt > 0) newCfg.slots[ak] = amt
      }
      // ★ 直接写入 persistentData
      block.entity.persistentData.putString('StationConfig', JSON.stringify(newCfg))
      block.entity.persistentData.putLong('CooldownEnd', 0)
      block.entity.setChanged()
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
    try {
      var server = player.getServer()
      if (!server) return
      var block = server.getLevel(dimName).getBlock(blockX, blockY, blockZ)
      if (!block || block.getId() === 'minecraft:air') return
      block.entity.persistentData.remove('StationConfig')
      block.entity.persistentData.putLong('CooldownEnd', 0)
      block.entity.setChanged()
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

function safeParseInt(field, defaultVal) {
  try {
    var v = parseInt(field.getText(), 10)
    return isNaN(v) ? defaultVal : Math.max(0, v)
  } catch (e) {
    return defaultVal
  }
}
