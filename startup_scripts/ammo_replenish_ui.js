// ============================================================
// SBW 载具 - 弹药补给箱 LDLib2 GUI
//
// 此文件在 startup_scripts 中加载（双端运行）
// 注册弹药补给箱的 LDLib2 UI（v2 简化版）
//
// 注意：UIElement 无 setWidth/setHeight 方法
//       尺寸由子元素和 stylesheet 自动决定
// ============================================================

const AMMO_TYPE_CFG = [
  { key: 'large_shell_ap',  label: '§7AP弹',   itemId: 'superbwarfare:large_shell_ap' },
  { key: 'large_shell_he',  label: '§7HE弹',   itemId: 'superbwarfare:large_shell_he' },
  { key: 'rifle_ammo',      label: '§7步枪弹', itemId: 'superbwarfare:rifle_ammo' },
  { key: 'heavy_ammo',      label: '§7重弹',   itemId: 'superbwarfare:heavy_ammo' }
]

// ========== LDLib2 UI 注册 ==========

LDLib2UI.block('kubejs:ammo_crate_gui', event => {
  let player = event.player

  // ---- 根面板 ----
  let root = new UIElement()
    .addClass('panel_bg')

  // ---- 标题 ----
  root.addChild(
    new Label().setText(Component.literal('§6╔═══ 弹药补给箱 ═══╗'))
  )

  // ---- 提示信息 ----
  root.addChild(
    new Label().setText(Component.literal('§7输入数量后点击下方按钮'))
  )

  // ---- 4 种弹药输入行 ----
  let ammoFields = {}
  for (let i = 0; i < AMMO_TYPE_CFG.length; i++) {
    let cfg = AMMO_TYPE_CFG[i]
    let row = new UIElement()

    row.addChild(
      new Label().setText(Component.literal(cfg.label + ' §7→'))
    )

    let field = new TextField()
      .setNumbersOnlyInt(0, 10000)
      .setText('0')
    ammoFields[cfg.key] = field
    row.addChild(field)

    root.addChild(row)
  }

  // ---- 执行按钮（setOnServerClick = 服务端执行） ----
  root.addChild(
    new Button()
      .setText(Component.literal('§a✔ 执行补充'))
      .setOnServerClick(function(clickEvent) {
        // 仅在服务端执行
        var server = player.getServer()
        if (!server) return

        var level = player.level
        if (!level) return

        // 读取 4 个 TextField 的值
        var ammoPlan = {}
        for (var fi = 0; fi < AMMO_TYPE_CFG.length; fi++) {
          var cfg = AMMO_TYPE_CFG[fi]
          var field = ammoFields[cfg.key]
          var val = 0
          try { val = parseInt(field.getText() || '0', 10) } catch (e) { val = 0 }
          if (val > 0) ammoPlan[cfg.key] = val
        }

        // 调用 server_scripts 中的全局函数
        if (typeof doReplenishFromGUI === 'function') {
          doReplenishFromGUI(server, level, player, ammoPlan)
        } else {
          player.displayClientMessage(
            Component.literal('§c[弹药] 补充逻辑未加载'),
            false
          )
        }
      })
  )

  // ---- 玩家物品栏 ----
  root.addChild(new InventorySlots())

  // ---- 构建 ModularUI ----
  event.modularUI = ModularUI.of(UI.of(root), player)
})
