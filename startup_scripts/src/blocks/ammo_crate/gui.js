// ============================================================
// 弹药补给站 - LDLib2 配置GUI（Message 网络同步版）
// ★ 调试版：大量聊天栏日志，用于排查专有服交互问题
// ★ 已修复 $CompoundTag 未定义的问题
// ============================================================

// startup_scripts 作用域独立，需要自己加载 Java 类
var $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')

const GUI_AMMO_TYPES = [
  { key: 'large_shell_ap',  label: '§6大口径AP',  default: 64 },
  { key: 'large_shell_he',  label: '§c大口径HE',  default: 64 },
  { key: 'large_shell_gs',  label: '§a大口径葡萄', default: 64 },
  { key: 'mortar_shell',    label: '§6迫击炮弹',   default: 32 },
  { key: 'small_shell_ap',  label: '§b小口径AP',  default: 64 },
  { key: 'small_shell_he',  label: '§d小口径HE',  default: 64 },
  { key: 'small_shell_gs',  label: '§a小口径葡萄', default: 64 },
  { key: 'small_shell_aa',  label: '§b防空弹',    default: 64 },
  { key: 'rifle_ammo',      label: '§7步枪弹',    default: 192 },
  { key: 'heavy_ammo',      label: '§9重弹',      default: 128 },
  { key: 'small_rocket',    label: '§e小型火箭',   default: 32 },
  { key: 'rocket',          label: '§e火箭弹',     default: 16 },
  { key: 'missile',         label: '§a导弹',       default: 8 },
  { key: 'medium_anti_ground_missile', label: '§a中型对地导弹', default: 8 },
  { key: 'large_anti_ground_missile',  label: '§a大型对地导弹', default: 8 },
  { key: 'medium_anti_air_missile',    label: '§a防空导弹',     default: 8 },
  { key: 'medium_aerial_bomb',  label: '§c中型航弹', default: 8 },
  { key: 'small_aerial_bomb',   label: '§c小型航弹', default: 8 }
]

const MCSP_AMMO_TYPES1 = [
  { key: 'mcsp_125mm_ap',           label: '§6125mm穿甲', default: 32 },
  { key: 'mcsp_125mm_he',           label: '§c125mm高爆', default: 32 },
  { key: 'mcsp_120mm_bulletmortar', label: '§5120mm迫击', default: 32 },
  { key: 'mcsp_tow_2',              label: '§aTOW-2导弹', default: 16 },
  { key: 'mcsp_mlrs_shells',        label: '§eMLRS火箭',  default: 32 }
]

const MCSP_AMMO_TYPES2 = [
  { key: 'mcsp_25mm_ap',            label: '§b25mm机炮',   default: 128 },
  { key: 'mcsp_30mm_ap',            label: '§d30mm机炮',   default: 128 },
  { key: 'mcsp_40mm_explosive',     label: '§c40mm高爆',   default: 64 },
  { key: 'mcsp_40mm_smoke',         label: '§740mm烟雾',   default: 32 },
  { key: 'mcsp_bullet762',          label: '§77.62mm机枪', default: 256 },
  { key: 'mcsp_smallarmscartridge', label: '§7小口径弹药', default: 256 }
]

// 工具函数：将配置对象转为 CompoundTag
function cfgToTag(cfg) {
  var tag = new $CompoundTag()
  tag.putInt('scanRange', ~~(cfg.scanRange || 0))
  tag.putInt('cooldown', ~~(cfg.cooldown || 0))
  tag.putInt('enterDelay', ~~(cfg.enterDelay || 3))
  var slots = cfg.slots || {}
  var allTypes = GUI_AMMO_TYPES.concat(MCSP_AMMO_TYPES1).concat(MCSP_AMMO_TYPES2)
  for (var i = 0; i < allTypes.length; i++) {
    var key = allTypes[i].key
    var val = slots[key] !== undefined ? slots[key] : allTypes[i].default
    tag.putInt('slot_' + key, ~~val)
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
  var allTypes = GUI_AMMO_TYPES.concat(MCSP_AMMO_TYPES1).concat(MCSP_AMMO_TYPES2)
  for (var i = 0; i < allTypes.length; i++) {
    var key = allTypes[i].key
    cfg.slots[key] = tag.getInt('slot_' + key)
  }
  return cfg
}

// ========== LDLib2 UI 注册 ==========

LDLib2UI.block('kubejs:ammo_station_cfg', event => {
  var player = event.player
  var level = event.level
  var pos = event.pos

  // 调试：打印 UI 构建时的端和坐标
  player.displayClientMessage(Component.literal('§8[DEBUG] UI 构建开始, isClientSide=' + player.level.isClientSide() + ', pos=' + pos.toShortString()), false)

  // ★ 直接从方块 NBT 读取配置
  var savedCfg = null
  try {
    var block = level.getBlock(pos.getX(), pos.getY(), pos.getZ())
    if (block && block.entity) {
      var raw = block.entity.persistentData.getString('StationConfig')
      if (raw) {
        savedCfg = JSON.parse(raw)
        player.displayClientMessage(Component.literal('§a[DEBUG] 成功读取 StationConfig: scanRange=' + savedCfg.scanRange + ', cooldown=' + savedCfg.cooldown), false)
      }
    }
  } catch (e) {
    player.displayClientMessage(Component.literal('§c[DEBUG] 读取方块NBT失败: ' + e), false)
  }

  function readCfgVal(key, fallback) {
    if (savedCfg && savedCfg[key] !== undefined && savedCfg[key] !== null) return String(savedCfg[key])
    return String(fallback)
  }
  function readSlotVal(key, fallback) {
    if (savedCfg && savedCfg.slots && savedCfg.slots[key] !== undefined) return String(savedCfg.slots[key])
    return String(fallback)
  }

  var fieldScanRange = new TextField().setNumbersOnlyInt(0, 999999).setText(readCfgVal('scanRange', 0))
  fieldScanRange.lss('width', 55)
  var fieldCooldown = new TextField().setNumbersOnlyInt(0, 999999).setText(readCfgVal('cooldown', 0))
  fieldCooldown.lss('width', 55)
  var fieldEnterDelay = new TextField().setNumbersOnlyInt(1, 999999).setText(readCfgVal('enterDelay', 0))
  fieldEnterDelay.lss('width', 55)

  var slotFields = {}
  function initSlotFields() {
    var allTypes = GUI_AMMO_TYPES.concat(MCSP_AMMO_TYPES1).concat(MCSP_AMMO_TYPES2)
    for (var i = 0; i < allTypes.length; i++) {
      var at = allTypes[i]
      var field = new TextField().setNumbersOnlyInt(0, 999999).setText(readSlotVal(at.key, 0))
      field.lss('width', 55)
      slotFields[at.key] = field
    }
  }
  initSlotFields()

  var root = new UIElement()
  root.lss('width', 270)
  root.lss('padding', 6)

  var titleLabel = new Label().setText(Component.literal('§6╔══ 弹药补给站配置 ══╗'))
  titleLabel.lss('width', '100%')
  titleLabel.textStyle(function(style) { style.textAlignHorizontal('center') })
  root.addChild(titleLabel)

  root.addChild(makeSeparator())

  var tabView = new TabView()

  // 第1页：基础设置
  var page1 = new UIElement()
  page1.lss('padding', 4)
  var srRow = new UIElement()
  srRow.addChild(new Label().setText(Component.literal('§7扫描范围:')))
  srRow.addChild(fieldScanRange)
  srRow.addChild(new Label().setText(Component.literal(' §7格')))
  page1.addChild(srRow)
  page1.addChild(new Label().setText(Component.literal(' ')))
  var cdRow = new UIElement()
  cdRow.addChild(new Label().setText(Component.literal('§7冷却时间:')))
  cdRow.addChild(fieldCooldown)
  cdRow.addChild(new Label().setText(Component.literal(' §7秒')))
  page1.addChild(cdRow)
  page1.addChild(new Label().setText(Component.literal(' ')))
  var edRow = new UIElement()
  edRow.addChild(new Label().setText(Component.literal('§7驶入等待:')))
  edRow.addChild(fieldEnterDelay)
  edRow.addChild(new Label().setText(Component.literal(' §7秒')))
  page1.addChild(edRow)
  page1.addChild(new Label().setText(Component.literal(' ')))
  page1.addChild(new Label().setText(Component.literal('§8← 切换标签页配置弹药')))
  var tab1 = new Tab()
  tab1.setText('基础')
  tabView.addTab(tab1, page1)

  // 第2页：大口径炮弹
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

  // 第3页：小口径机炮弹
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

  // 第4页：枪弹/火箭弹
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

  // 第5页：导弹/航弹
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

  // 第6页：MCSP坦克炮/导弹
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

  // 第7页：MCSP机关炮/机枪
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

  // 第8页：作弊
  var page4 = new UIElement()
  page4.lss('padding', 4)
  var isOP = player.hasPermissions(2)
  if (!isOP) {
    page4.addChild(new Label().setText(Component.literal('§c── 作弊功能 ──')))
    page4.addChild(new Label().setText(Component.literal(' ')))
    page4.addChild(new Label().setText(Component.literal('§c你没有权限使用作弊功能')))
  } else {
    page4.addChild(new Label().setText(Component.literal('§c── 作弊功能 ──')))
    page4.addChild(new Label().setText(Component.literal(' ')))
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
    page4.addChild(btnToggleCheat)
    var statusLabel = new Label().setText(Component.literal('§7作弊模式已关闭'))
    page4.addChild(statusLabel)
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
    page4.addChild(btnManualTrigger)
  }
  var tab4 = new Tab()
  tab4.setText('§c作弊')
  tabView.addTab(tab4, page4)

  root.addChild(tabView)
  root.addChild(makeSeparator())

  // ──── 底部按钮 ────
  var btnRow = new UIElement()

  var btnSave = new Button()
  btnSave.setText(Component.literal('§a✔ 保存配置'))
  btnSave.lss('padding', '3 10')
  // ★ 细粒度调试：保存按钮点击
  btnSave.setOnClick(function(clickEvent) {
    try {
      player.displayClientMessage(Component.literal('§e[客户端] 保存按钮被点击'), false);

      // ---- 1. 读取字段 ----
      player.displayClientMessage(Component.literal('§7[1/6] 开始读取字段...'), false);
      var sr = safeParseField(null, fieldScanRange);
      player.displayClientMessage(Component.literal('§7   scanRange=' + sr), false);
      var cd = safeParseField(null, fieldCooldown);
      player.displayClientMessage(Component.literal('§7   cooldown=' + cd), false);
      var ed = safeParseField(null, fieldEnterDelay);
      player.displayClientMessage(Component.literal('§7   enterDelay=' + ed), false);

      // ---- 2. 创建 CompoundTag ----
      player.displayClientMessage(Component.literal('§7[2/6] 创建 CompoundTag...'), false);
      var tag = new $CompoundTag();
      tag.putInt('scanRange', ~~sr);
      tag.putInt('cooldown', ~~cd);
      tag.putInt('enterDelay', ~~ed);

      // ---- 3. 循环添加 slot 值 ----
      player.displayClientMessage(Component.literal('§7[3/6] 添加弹药槽位...'), false);
      var allTypes = GUI_AMMO_TYPES.concat(MCSP_AMMO_TYPES1).concat(MCSP_AMMO_TYPES2);
      for (var i = 0; i < allTypes.length; i++) {
        var ak = allTypes[i].key;
        var field = slotFields[ak];
        if (!field) {
          player.displayClientMessage(Component.literal('§c[错误] slotFields 中没有 ' + ak), false);
          continue;
        }
        var amt = safeParseField(null, field);
        if (amt > 0) {
          tag.putInt('slot_' + ak, ~~amt);
        }
      }
      player.displayClientMessage(Component.literal('§7   slot 添加完毕'), false);

      // ---- 4. 打包完成 ----
      player.displayClientMessage(Component.literal('§e[客户端] 打包完成，即将发送 save_config'), false);

      // ---- 5. 发送消息 ----
      player.displayClientMessage(Component.literal('§7[5/6] 调用 root.sendMessage...'), false);
      root.sendMessage('save_config', tag);

      // ---- 6. 发送成功 ----
      player.displayClientMessage(Component.literal('§e[客户端] save_config 消息已发送'), false);

    } catch (e) {
      player.displayClientMessage(Component.literal('§c[客户端] 保存过程异常: ' + e), false);
      if (e.message) player.displayClientMessage(Component.literal('§c  详情: ' + e.message), false);
    }
  })
  btnRow.addChild(btnSave)

  var btnReset = new Button()
  btnReset.setText(Component.literal('§e↻ 重置默认'))
  btnReset.lss('padding', '3 10')
  btnReset.setOnClick(function(clickEvent) {
    player.displayClientMessage(Component.literal('§e[客户端] 重置按钮被点击'), false)
    var tag = new $CompoundTag()
    root.sendMessage('reset_config', tag)
    player.displayClientMessage(Component.literal('§e[客户端] reset_config 消息已发送'), false)
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
    var allTypes = GUI_AMMO_TYPES.concat(MCSP_AMMO_TYPES1).concat(MCSP_AMMO_TYPES2)
    for (var i = 0; i < allTypes.length; i++) {
      var ak = allTypes[i].key
      var amt = safeParseField(null, slotFields[ak])
      if (amt > 0) slotsJson[ak] = amt
    }
    var configObj = { scanRange: sr, cooldown: cd, enterDelay: ed, slots: slotsJson }
    var escapedJson = JSON.stringify(configObj).replace(/\\/g, '\\\\').replace(/"/g, '\\"')
    var bx = pos.getX(), by = pos.getY(), bz = pos.getZ()
    var cmd = '/data merge block ' + bx + ' ' + by + ' ' + bz +
      ' {StationConfig:"' + escapedJson + '"}'
    cmdField.setText(cmd)
    try { cmdField.setSelection(0, cmd.length) } catch (e) {}
  })
  root.addChild(cmdCopyBtn)
  root.addChild(new Label().setText(Component.literal('§7点按钮 → 全选 → Ctrl+C → 聊天栏粘贴执行')))

  root.addChild(new InventorySlots())

  // ═══════════════════════════════════════════════════════════════
  //  Message 系统：网络同步
  // ═══════════════════════════════════════════════════════════════

  root.onMessage('save_config', function(self, msg) {
    player.displayClientMessage(Component.literal('§b[服务端] save_config 消息到达, isServer=' + (player.getServer() !== null)), false)
    if (player.getServer() === null) {
      player.displayClientMessage(Component.literal('§c[服务端] 错误：当前不是服务端！'), false)
      return
    }
    player.displayClientMessage(Component.literal('§b[服务端] 收到配置: scanRange=' + msg.getInt('scanRange') + ', cooldown=' + msg.getInt('cooldown') + ', enterDelay=' + msg.getInt('enterDelay')), false)
    try {
      var dimension = level.getDimension()
      player.displayClientMessage(Component.literal('§b[服务端] 维度: ' + dimension), false)
      var lvl = player.getServer().getLevel(dimension)
      if (!lvl) {
        player.displayClientMessage(Component.literal('§c[服务端] 错误：getLevel 返回 null'), false)
        return
      }
      var bx = pos.getX(), by = pos.getY(), bz = pos.getZ()
      player.displayClientMessage(Component.literal('§b[服务端] 目标方块坐标: ' + bx + ', ' + by + ', ' + bz), false)
      var b = lvl.getBlock(bx, by, bz)
      if (!b) {
        player.displayClientMessage(Component.literal('§c[服务端] 错误：getBlock 返回 null'), false)
        return
      }
      if (!b.entity) {
        player.displayClientMessage(Component.literal('§c[服务端] 错误：方块实体不存在'), false)
        return
      }
      player.displayClientMessage(Component.literal('§b[服务端] 方块实体存在，准备写入'), false)
      var newCfg = {
        scanRange: msg.getInt('scanRange'),
        cooldown: msg.getInt('cooldown'),
        enterDelay: msg.getInt('enterDelay'),
        slots: {}
      }
      var allTypes = GUI_AMMO_TYPES.concat(MCSP_AMMO_TYPES1).concat(MCSP_AMMO_TYPES2)
      for (var i = 0; i < allTypes.length; i++) {
        var ak = allTypes[i].key
        if (msg.contains('slot_' + ak)) {
          newCfg.slots[ak] = msg.getInt('slot_' + ak)
        }
      }
      var jsonStr = JSON.stringify(newCfg)
      player.displayClientMessage(Component.literal('§b[服务端] 写入 JSON: ' + jsonStr.substring(0, 100) + '...'), false)
      b.entity.persistentData.putString('StationConfig', jsonStr)
      b.entity.persistentData.putLong('CooldownEnd', 0)
      b.entity.setChanged()
      player.displayClientMessage(Component.literal('§a[服务端] ✔ 配置写入成功！'), false)

      // 验证读取
      var readBack = b.entity.persistentData.getString('StationConfig')
      player.displayClientMessage(Component.literal('§b[服务端] 回读验证: ' + (readBack ? '有数据' : '空')), false)
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[服务端] 保存异常: ' + e), false)
    }
  })

  root.onMessage('reset_config', function(self, msg) {
    player.displayClientMessage(Component.literal('§b[服务端] reset_config 到达, isServer=' + (player.getServer() !== null)), false)
    if (player.getServer() === null) return
    try {
      var lvl = player.getServer().getLevel(level.getDimension())
      if (!lvl) return
      var b = lvl.getBlock(pos.getX(), pos.getY(), pos.getZ())
      if (!b || !b.entity) return
      b.entity.persistentData.remove('StationConfig')
      b.entity.persistentData.putLong('CooldownEnd', 0)
      b.entity.setChanged()
      player.displayClientMessage(Component.literal('§a[服务端] 重置成功'), false)
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[服务端] 重置异常: ' + e), false)
    }
  })

  // ========== 构建 ModularUI ==========
  event.modularUI = ModularUI.of(UI.of(root), player)
})

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