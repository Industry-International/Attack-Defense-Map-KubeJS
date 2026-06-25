// ============================================================
// 弹药补给站 - LDLib2 配置GUI（独立文件）
//
// LDLib2 版本: 1.21.1-2.2.24
//
// 直接在 GUI handler 中通过 event.pos 读取方块 persistentData，
// 不再依赖全局缓存传递数据。
//
// 可配置项：
//   scanRange  — 扫描范围（方块）
//   cooldown   — 冷却时间（秒）
//   slots      — 各弹药类型的最大储量
// ============================================================

/** GUI中可配置的弹药类型列表 */
const GUI_AMMO_TYPES = [
  { key: 'large_shell_ap',  label: '§6大口径AP弹',  default: 64 },
  { key: 'large_shell_he',  label: '§c大口径HE弹',  default: 64 },
  { key: 'small_shell_ap',  label: '§b小口径AP弹',  default: 64 },
  { key: 'small_shell_he',  label: '§d小口径HE弹',  default: 64 },
  { key: 'rifle_ammo',      label: '§7步枪弹',      default: 192 },
  { key: 'heavy_ammo',      label: '§9重弹',        default: 128 },
  { key: 'missile',         label: '§a导弹',         default: 8 },
  { key: 'rocket',          label: '§e火箭弹',       default: 16 }
]

// ========== LDLib2 UI 注册 ==========

LDLib2UI.block('kubejs:ammo_station_cfg', event => {
  let player = event.player
  let level = event.level
  let pos = event.pos

  // 直接从方块读取配置
  let block = level.getBlock(pos.getX(), pos.getY(), pos.getZ())
  if (!block || block.getId() === 'minecraft:air') {
    player.tell(Component.literal('§c[弹药补给站] 方块不存在'))
    return
  }

  let cfg = readBlockConfig(block)

  // ---- 构建UI ----
  var root = new UIElement()

  // 标题
  root.addChild(
    new Label().setText(Component.literal('§6╔═══ 弹药补给站配置 ═══╗'))
  )
  root.addChild(
    new Label().setText(Component.literal('§7修改后点击保存按钮'))
  )

  // ── 基础参数 ──
  root.addChild(new Label().setText(Component.literal('§e── 基础参数 ──')))

  var fieldScanRange = new TextField().setNumbersOnlyInt(1, 64).setText(String(cfg.scanRange))
  root.addChild(wrapRow('§7扫描范围:', fieldScanRange, '格'))

  var fieldCooldown = new TextField().setNumbersOnlyInt(0, 3600).setText(String(cfg.cooldown))
  root.addChild(wrapRow('§7冷却时间:', fieldCooldown, '秒'))

  // ── 弹药最大储量 ──
  root.addChild(new Label().setText(Component.literal('§e── 弹药最大储量 ──')))

  var slotFields = {}
  for (var si = 0; si < GUI_AMMO_TYPES.length; si++) {
    var at = GUI_AMMO_TYPES[si]
    var val = cfg.slots && cfg.slots[at.key] !== undefined ? cfg.slots[at.key] : at.default
    var field = new TextField().setNumbersOnlyInt(0, 9999).setText(String(val))
    slotFields[at.key] = field
    root.addChild(wrapRow(at.label + ':', field, '个'))
  }

  // ── 保存按钮（服务端执行）──
  root.addChild(
    new Button()
      .setText(Component.literal('§a✔ 保存配置'))
      .setOnServerClick(function(ev) {
        try {
          // 重新获取方块（可能在服务端重新加载）
          let svr = player.getServer()
          if (!svr) return
          let lvl = svr.getLevel(level.getDimension().toString())
          if (!lvl) {
            player.displayClientMessage(Component.literal('§c[弹药补给站] 无法获取维度'), false)
            return
          }
          let targetBlock = lvl.getBlock(pos.getX(), pos.getY(), pos.getZ())
          if (!targetBlock || targetBlock.getId() === 'minecraft:air') {
            player.displayClientMessage(Component.literal('§c[弹药补给站] 方块已不存在'), false)
            return
          }

          // 构建新配置
          var newCfg = {
            scanRange: safeParseInt(fieldScanRange),
            cooldown: safeParseInt(fieldCooldown),
            slots: {}
          }

          for (var fi = 0; fi < GUI_AMMO_TYPES.length; fi++) {
            var atype = GUI_AMMO_TYPES[fi]
            var f = slotFields[atype.key]
            var amount = safeParseInt(f)
            if (amount > 0) newCfg.slots[atype.key] = amount
          }

          // 写入方块配置
          writeBlockConfig(targetBlock, newCfg)
          // 重置冷却
          targetBlock.persistentData.putLong('CooldownEnd', 0)

          player.displayClientMessage(
            Component.literal('§a✔ 配置已保存！冷却已重置'),
            false
          )
        } catch (err) {
          player.displayClientMessage(
            Component.literal('§c[弹药补给站] 保存失败: ' + err),
            false
          )
        }
      })
  )

  // ── 重置按钮（服务端执行）──
  root.addChild(
    new Button()
      .setText(Component.literal('§e↻ 重置默认'))
      .setOnServerClick(function(ev) {
        try {
          let svr = player.getServer()
          if (!svr) return
          let lvl = svr.getLevel(level.getDimension().toString())
          if (!lvl) return
          let targetBlock = lvl.getBlock(pos.getX(), pos.getY(), pos.getZ())
          if (!targetBlock || targetBlock.getId() === 'minecraft:air') return

          if (typeof DEFAULT_STATION_CONFIG !== 'undefined') {
            writeBlockConfig(targetBlock, JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG)))
            targetBlock.persistentData.putLong('CooldownEnd', 0)
            player.displayClientMessage(
              Component.literal('§a✔ 已重置为默认配置，请重新打开GUI查看'),
              false
            )
          }
        } catch (err) {
          player.displayClientMessage(
            Component.literal('§c[弹药补给站] 重置失败: ' + err),
            false
          )
        }
      })
  )

  // ── 玩家物品栏 ──
  root.addChild(new InventorySlots())

  // ── 构建 ModularUI ──
  event.modularUI = ModularUI.of(UI.of(root), player)
})

// ========== 辅助函数 ==========

function wrapRow(labelText, field, unitText) {
  var row = new UIElement()
  row.addChild(new Label().setText(Component.literal(labelText)))
  row.addChild(field)
  if (unitText) {
    row.addChild(new Label().setText(Component.literal('§7' + unitText)))
  }
  return row
}

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
