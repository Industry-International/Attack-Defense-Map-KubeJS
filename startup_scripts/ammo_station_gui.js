// ============================================================
// 弹药补给站 - LDLib2 配置GUI
//
// 通过全局缓存 $ammoStationGuiCache 接收服务端传入的配置数据：
//   键 = 玩家UUID
//   值 = JSON.stringify({ pos: {x,y,z}, dim, config })
//
// 右键方块时由 server_scripts 填充缓存并打开 GUI，
// 保存时通过 setOnServerClick 回调在服务端写入方块 persistentData。
// ============================================================

var $HashMap = Java.loadClass('java.util.HashMap')
/** 全局缓存：UUID → { pos, config }，由 server_scripts 右键事件填充 */
var $ammoStationGuiCache = new $HashMap()

/** 可配置的弹药类型列表（与 server_scripts/a_config.js 保持一致） */
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
  let uuid = player.getStringUUID()

  // 从缓存读取配置数据
  var cacheData = null
  try {
    var raw = $ammoStationGuiCache.get(uuid)
    if (raw) cacheData = JSON.parse(raw)
  } catch (e) { /* 忽略 */ }

  // 如果缓存没有数据(直接命令打开等)，创建默认配置
  if (!cacheData) {
    cacheData = {
      pos: { x: 0, y: 0, z: 0 },
      config: {
        scanRange: 12,
        enterDelay: 40,
        cooldown: 100,
        weaponAmmoThreshold: 1,
        slots: {
          large_shell_ap: 64, large_shell_he: 64,
          small_shell_ap: 64, small_shell_he: 64,
          rifle_ammo: 192, heavy_ammo: 128,
          missile: 8, rocket: 16
        },
        targetVehicleIds: []
      }
    }
  }

  var cfg = cacheData.config

  // ---- 根面板 ----
  var root = new UIElement().addClass('panel_bg')

  // ---- 标题 ----
  root.addChild(
    new Label().setText(Component.literal('§6╔═══ 弹药补给站配置 ═══╗'))
  )
  root.addChild(
    new Label().setText(Component.literal('§7修改后点击下方保存按钮'))
  )

  // ---- 基础参数 ----
  root.addChild(new Label().setText(Component.literal('§e── 基础参数 ──')))

  var fieldScanRange = new TextField().setNumbersOnlyInt(1, 64).setText(String(cfg.scanRange))
  root.addChild(wrapField('§7扫描范围:', fieldScanRange, '格'))

  var fieldEnterDelay = new TextField().setNumbersOnlyInt(0, 6000).setText(String(cfg.enterDelay))
  root.addChild(wrapField('§7入场延时:', fieldEnterDelay, 'tick (' + (cfg.enterDelay / 20).toFixed(1) + 's)'))

  var fieldCooldown = new TextField().setNumbersOnlyInt(0, 72000).setText(String(cfg.cooldown))
  root.addChild(wrapField('§7冷却时间:', fieldCooldown, 'tick (' + (cfg.cooldown / 20).toFixed(1) + 's)'))

  var fieldWeaponThreshold = new TextField().setNumbersOnlyInt(0, 999).setText(String(cfg.weaponAmmoThreshold))
  root.addChild(wrapField('§7武器弹阈值:', fieldWeaponThreshold, '(0=不补)'))

  // ---- 弹药方案 ----
  root.addChild(new Label().setText(Component.literal('§e── 弹药方案（每次补充量）──')))

  var slotFields = {}
  for (var si = 0; si < GUI_AMMO_TYPES.length; si++) {
    var at = GUI_AMMO_TYPES[si]
    var val = cfg.slots && cfg.slots[at.key] !== undefined ? cfg.slots[at.key] : at.default
    var field = new TextField().setNumbersOnlyInt(0, 9999).setText(String(val))
    slotFields[at.key] = field
    root.addChild(wrapField(at.label + ':', field, '个/次'))
  }

  // ---- 状态信息 ----
  root.addChild(new Label().setText(Component.literal('§8── 实时状态 ──')))

  // ---- 保存按钮 ----
  root.addChild(
    new Button()
      .setText(Component.literal('§a✔ 保存配置'))
      .setOnServerClick(function(clickEvent) {
        // 以下代码在服务端执行
        var server = player.getServer()
        if (!server) return

        var puuid = player.getStringUUID()
        var raw = $ammoStationGuiCache.get(puuid)
        if (!raw) {
          player.displayClientMessage(Component.literal('§c[补给站] 配置缓存失效，请重新打开GUI'), false)
          return
        }

        try {
          var data = JSON.parse(raw)
          var level = server.getLevel(
            Java.loadClass('net.minecraft.resources.ResourceLocation').parse(data.dim || 'minecraft:overworld')
          )
          if (!level) {
            player.displayClientMessage(Component.literal('§c[补给站] 无法获取维度'), false)
            return
          }

          var blockPos = Java.loadClass('net.minecraft.core.BlockPos').offset(
            data.pos.x, data.pos.y, data.pos.z
          )
          var block = level.getBlock(blockPos.getX(), blockPos.getY(), blockPos.getZ())
          if (!block || block.getId() === 'minecraft:air') {
            player.displayClientMessage(Component.literal('§c[补给站] 方块已不存在'), false)
            return
          }

          // 读取当前配置作为基础
          var newCfg = {
            scanRange: parseIntField(fieldScanRange),
            enterDelay: parseIntField(fieldEnterDelay),
            cooldown: parseIntField(fieldCooldown),
            weaponAmmoThreshold: parseIntField(fieldWeaponThreshold),
            slots: {},
            targetVehicleIds: []
          }

          // 读取弹药槽位
          for (var fi = 0; fi < GUI_AMMO_TYPES.length; fi++) {
            var atype = GUI_AMMO_TYPES[fi]
            var f = slotFields[atype.key]
            var amount = parseIntField(f)
            if (amount > 0) newCfg.slots[atype.key] = amount
          }

          // 写入方块配置（调用 server_scripts 的全局函数）
          if (typeof writeBlockConfig === 'function') {
            writeBlockConfig(block, newCfg)
            player.displayClientMessage(
              Component.literal('§a✔ 配置已保存！冷却重置'),
              false
            )
            // 重置运行时（让新配置立即生效）
            if (typeof writeBlockRuntime === 'function') {
              writeBlockRuntime(block, { enteredVehicles: {}, cooldownEnd: 0 })
            }
          } else {
            player.displayClientMessage(
              Component.literal('§c[补给站] 保存函数未加载'),
              false
            )
          }
        } catch (e) {
          player.displayClientMessage(
            Component.literal('§c[补给站] 保存失败: ' + e),
            false
          )
        }
      })
  )

  // ---- 重置按钮 ----
  root.addChild(
    new Button()
      .setText(Component.literal('§e↻ 重置默认'))
      .setOnServerClick(function(clickEvent) {
        var server = player.getServer()
        if (!server) return

        var puuid = player.getStringUUID()
        var raw = $ammoStationGuiCache.get(puuid)
        if (!raw) {
          player.displayClientMessage(Component.literal('§c[补给站] 缓存失效'), false)
          return
        }

        try {
          var data = JSON.parse(raw)
          var level = server.getLevel(
            Java.loadClass('net.minecraft.resources.ResourceLocation').parse(data.dim || 'minecraft:overworld')
          )
          if (!level) return

          var blockPos = Java.loadClass('net.minecraft.core.BlockPos').offset(
            data.pos.x, data.pos.y, data.pos.z
          )
          var block = level.getBlock(blockPos.getX(), blockPos.getY(), blockPos.getZ())
          if (!block || block.getId() === 'minecraft:air') return

          if (typeof writeBlockConfig === 'function' && typeof DEFAULT_STATION_CONFIG !== 'undefined') {
            writeBlockConfig(block, JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG)))
            if (typeof writeBlockRuntime === 'function') {
              writeBlockRuntime(block, { enteredVehicles: {}, cooldownEnd: 0 })
            }
            player.displayClientMessage(Component.literal('§a✔ 已重置为默认配置，请重新打开GUI查看'), false)
          }
        } catch (e) {
          player.displayClientMessage(Component.literal('§c[补给站] 重置失败: ' + e), false)
        }
      })
  )

  // ---- 玩家物品栏 ----
  root.addChild(new InventorySlots())

  // ---- 构建 ModularUI ----
  event.modularUI = ModularUI.of(UI.of(root), player)
})

// ========== 辅助：包装带标签的行 ==========

function wrapField(labelText, field, unitText) {
  var row = new UIElement()
  row.addChild(new Label().setText(Component.literal(labelText)))
  row.addChild(field)
  if (unitText) {
    row.addChild(new Label().setText(Component.literal('§7' + unitText)))
  }
  return row
}

// ========== 辅助：安全解析 TextField 整数值 ==========

function parseIntField(field) {
  try {
    var text = field.getText() || '0'
    var val = parseInt(text, 10)
    return isNaN(val) ? 0 : Math.max(0, val)
  } catch (e) {
    return 0
  }
}
