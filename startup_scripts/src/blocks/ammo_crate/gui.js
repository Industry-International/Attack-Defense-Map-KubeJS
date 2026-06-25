// ============================================================
// 弹药补给站 - LDLib2 配置GUI（简单可靠版）
//
// 不使用任何 flex 布局属性，仅靠默认布局 + 元素顺序排列
// 所有 TextField 设固定宽度，确保不会被输入框遮挡
// ============================================================

var $HashMap = Java.loadClass('java.util.HashMap')
global.ammoStationGuiCache = new $HashMap()

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

  // 根面板 - 仅加背景和内边距
  var root = new UIElement()
  root.lss('padding', 6)

  // 标题行（label + field 同级时会自动水平排列）
  var titleRow = new UIElement()
  titleRow.addChild(new Label().setText(Component.literal('§6╔═══ 弹药补给站配置 ═══╗')))
  root.addChild(titleRow)

  var hintRow = new UIElement()
  hintRow.addChild(new Label().setText(Component.literal('§7修改数值后点击保存')))
  root.addChild(hintRow)

  // ──── 分隔线 ────
  root.addChild(new Label().setText(Component.literal('§8━━━━━━━━━━━━━━━━━')))

  // ──── 基础参数 ────
  root.addChild(new Label().setText(Component.literal('§e── 基础参数 ──')))

  // 扫描范围行：label + field + 单位
  var srRow = new UIElement()
  srRow.addChild(new Label().setText(Component.literal('§7扫描范围:')))
  var fieldScanRange = new TextField().setNumbersOnlyInt(1, 64).setText(String(cfg.scanRange))
  fieldScanRange.lss('width', 55)
  srRow.addChild(fieldScanRange)
  srRow.addChild(new Label().setText(Component.literal('§7格')))
  root.addChild(srRow)

  // 冷却时间行
  var cdRow = new UIElement()
  cdRow.addChild(new Label().setText(Component.literal('§7冷却时间:')))
  var fieldCooldown = new TextField().setNumbersOnlyInt(0, 3600).setText(String(cfg.cooldown))
  fieldCooldown.lss('width', 55)
  cdRow.addChild(fieldCooldown)
  cdRow.addChild(new Label().setText(Component.literal('§7秒')))
  root.addChild(cdRow)

  // ──── 分隔线 ────
  root.addChild(new Label().setText(Component.literal('§8━━━━━━━━━━━━━━━━━')))

  // ──── 弹药储量（每行一个，label+field+单位并排）────
  root.addChild(new Label().setText(Component.literal('§e── 弹药最大储量 ──')))

  var slotFields = {}
  for (var si = 0; si < GUI_AMMO_TYPES.length; si++) {
    var at = GUI_AMMO_TYPES[si]
    var val = cfg.slots && cfg.slots[at.key] !== undefined ? cfg.slots[at.key] : at.default

    var row = new UIElement()
    row.addChild(new Label().setText(Component.literal(at.label + ':')))
    var field = new TextField().setNumbersOnlyInt(0, 9999).setText(String(val))
    field.lss('width', 50)
    slotFields[at.key] = field
    row.addChild(field)
    row.addChild(new Label().setText(Component.literal('个')))
    root.addChild(row)
  }

  // ──── 分隔线 ────
  root.addChild(new Label().setText(Component.literal('§8━━━━━━━━━━━━━━━━━')))

  // ──── 按钮 ────
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
      var newCfg = { scanRange: safeParseInt(fieldScanRange), cooldown: safeParseInt(fieldCooldown), slots: {} }
      for (var fi = 0; fi < GUI_AMMO_TYPES.length; fi++) {
        var atype = GUI_AMMO_TYPES[fi]
        var amount = safeParseInt(slotFields[atype.key])
        if (amount > 0) newCfg.slots[atype.key] = amount
      }
      if (typeof writeBlockConfig === 'function') {
        writeBlockConfig(block, newCfg)
        block.getEntityData().putLong('CooldownEnd', 0)
        player.displayClientMessage(Component.literal('§a✔ 配置已保存！冷却已重置'), false)
      }
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[弹药补给站] 保存失败: ' + e), false)
    }
  })
  root.addChild(btnSave)

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
      if (typeof writeBlockConfig === 'function' && typeof DEFAULT_STATION_CONFIG !== 'undefined') {
        writeBlockConfig(block, JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG)))
        block.getEntityData().putLong('CooldownEnd', 0)
        player.displayClientMessage(Component.literal('§a✔ 已重置为默认配置，请重新打开GUI查看'), false)
      }
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[弹药补给站] 重置失败: ' + e), false)
    }
  })
  root.addChild(btnReset)

  // ──── 玩家物品栏 ────
  root.addChild(new InventorySlots())

  // 构建 ModularUI
  event.modularUI = ModularUI.of(UI.of(root), player)
})

// ========== 辅助函数 ==========

function safeParseInt(field) {
  try {
    var text = field.getText()
    if (text === null || text === undefined) return 0
    var val = parseInt(text, 10)
    return isNaN(val) ? 0 : Math.max(0, val)
  } catch (e) {
    return 0
  }
}
