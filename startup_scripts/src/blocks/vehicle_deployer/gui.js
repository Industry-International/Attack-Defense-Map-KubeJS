// ============================================================
// 载具部署台 - LDLib2 智能配置 GUI（Message 网络同步版）
//
// C2S：客户端 setOnClick → root.sendMessage → 服务端 onMessage
// S2C：暂无（服务端 NBT 无法推送至客户端）
//
// 车辆数据库通过 global 缓存传入（仅单机有效）
// ============================================================

// ========== Java 类引用 ==========

var $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')
var $HashMap = Java.loadClass('java.util.HashMap')
global.vehicleDeployerCache = global.vehicleDeployerCache || new $HashMap()

// ========== 默认配置 ==========

const DEPLOYER_DEFAULT_CFG = {
  vehicleType: '', respawnDelay: 600, autoRespawn: 1,
  offsetX: 0, offsetY: 1, offsetZ: 0, yaw: 0, pitch: 0,
  deployNBT: '{}', displayName: '', deployedUUID: '', cooldownEnd: 0,
  spawnWithAmmo: 1
}

// ========== UI 构建 ==========

LDLib2UI.block('kubejs:vehicle_deployer_cfg', event => {
  var player = event.player
  var level = event.level
  var blockPos = event.pos

  // ── 从缓存读取数据（用于下拉菜单等 S2C 替代方案） ──
  var cacheData = null
  try {
    var raw = global.vehicleDeployerCache.get(player.uuid)
    if (raw) cacheData = JSON.parse(raw)
  } catch (e) {}
  if (!cacheData) cacheData = {}

  var cfg = cacheData.config || {}
  var vehicleData = cacheData.categories || {}
  var categoryList = Object.keys(vehicleData)
  if (categoryList.length === 0) {
    vehicleData = { '§c数据库未加载': ['§c仅限单人可用'] }
    categoryList = Object.keys(vehicleData)
  }
  var nbtTemplate = cacheData.nbtTemplate || {}

  // ════════════════════════════════════════════════════════════
  //  创建所有输入字段
  // ════════════════════════════════════════════════════════════

  // ── Tab 1: 车辆类型 ──
  var fieldVehicleType = new TextField()
  fieldVehicleType.setText(cfg.vehicleType || DEPLOYER_DEFAULT_CFG.vehicleType)
  fieldVehicleType.lss('width', 180)

  // ── Tab 2: 基础设置 ──
  var fieldRespawnDelay = new TextField()
  fieldRespawnDelay.setNumbersOnlyInt(20, 72000)
  fieldRespawnDelay.setText(String(cfg.respawnDelay || DEPLOYER_DEFAULT_CFG.respawnDelay))
  fieldRespawnDelay.lss('width', 55)

  var fieldAutoRespawn = new TextField()
  fieldAutoRespawn.setNumbersOnlyInt(0, 1)
  fieldAutoRespawn.setText(cfg.autoRespawn === 0 ? '0' : '1')
  fieldAutoRespawn.lss('width', 40)

  var fieldSpawnAmmo = new TextField()
  fieldSpawnAmmo.setNumbersOnlyInt(0, 1)
  fieldSpawnAmmo.setText(cfg.spawnWithAmmo === 0 ? '0' : '1')
  fieldSpawnAmmo.lss('width', 40)

  // ── Tab 3: 坐标偏移 ──
  var fieldOffsetX = new TextField()
  fieldOffsetX.setNumbersOnlyInt(-999, 999)
  fieldOffsetX.setText(String(cfg.offsetX !== undefined ? cfg.offsetX : 0))
  fieldOffsetX.lss('width', 50)

  var fieldOffsetY = new TextField()
  fieldOffsetY.setNumbersOnlyInt(-999, 999)
  fieldOffsetY.setText(String(cfg.offsetY !== undefined ? cfg.offsetY : 1))
  fieldOffsetY.lss('width', 50)

  var fieldOffsetZ = new TextField()
  fieldOffsetZ.setNumbersOnlyInt(-999, 999)
  fieldOffsetZ.setText(String(cfg.offsetZ !== undefined ? cfg.offsetZ : 0))
  fieldOffsetZ.lss('width', 50)

  var fieldYaw = new TextField()
  fieldYaw.setNumbersOnlyInt(-180, 180)
  fieldYaw.setText(String(cfg.yaw !== undefined ? cfg.yaw : 0))
  fieldYaw.lss('width', 50)

  var fieldPitch = new TextField()
  fieldPitch.setNumbersOnlyInt(-90, 90)
  fieldPitch.setText(String(cfg.pitch !== undefined ? cfg.pitch : 0))
  fieldPitch.lss('width', 50)

  // ── Tab 4: NBT 编辑 ──
  var fieldDeployNBT = new TextField()
  fieldDeployNBT.setText(cfg.deployNBT || '{}')
  fieldDeployNBT.lss('width', 250)
  fieldDeployNBT.lss('height', 100)

  // ════════════════════════════════════════════════════════════
  //  根容器
  // ════════════════════════════════════════════════════════════
  var root = new UIElement()
  root.lss('width', 280)
  root.lss('padding', 6)

  // ── 标题 ──
  var titleLabel = new Label()
  titleLabel.setText(Component.literal('§6╔══ 载具部署台配置 ══╗'))
  titleLabel.lss('width', '100%')
  titleLabel.textStyle(function(style) { style.textAlignHorizontal('center') })
  root.addChild(titleLabel)

  root.addChild(makeSeparator())

  // ════════════════════════════════════════════════════════════
  //  TabView 分页
  // ════════════════════════════════════════════════════════════
  var tabView = new TabView()

  // ════════════════════════════════════════════════════════════
  //  第1页：车辆选择（两级联动下拉 + ID 输入）
  // ════════════════════════════════════════════════════════════
  var page1 = new UIElement()
  page1.lss('padding', 4)

  page1.addChild(new Label().setText(Component.literal('§e── 选择载具 ──')))

  // 确定当前已保存的类型所属的分类
  var currentVT = fieldVehicleType.getText()
  var initialCategory = categoryList.length > 0 ? categoryList[0] : ''
  var initialVehicle = ''
  if (currentVT && currentVT !== '') {
    for (var sci = 0; sci < categoryList.length; sci++) {
      var scat = categoryList[sci]
      if (!vehicleData[scat]) continue
      for (var svi = 0; svi < vehicleData[scat].length; svi++) {
        if (vehicleData[scat][svi] === currentVT) {
          initialCategory = scat
          initialVehicle = currentVT
          break
        }
      }
      if (initialVehicle) break
    }
  }
  if (!initialVehicle && initialCategory && vehicleData[initialCategory] && vehicleData[initialCategory].length > 0) {
    initialVehicle = vehicleData[initialCategory][0]
  }

  // ── 类别下拉 ──
  var categorySelector = new Selector()
  categorySelector.setCandidates(categoryList)
  categorySelector.lss('width', '100%')

  // ── 载具下拉（根据类别动态变化） ──
  var vehicleSelector = new Selector()
  vehicleSelector.lss('width', '100%')

  categorySelector.setOnValueChanged(function(newCat) {
    if (newCat && vehicleData[newCat]) {
      vehicleSelector.setCandidates(vehicleData[newCat])
      if (vehicleData[newCat].length > 0) {
        vehicleSelector.setSelected(vehicleData[newCat][0])
      }
    }
  })

  vehicleSelector.setOnValueChanged(function(newVid) {
    if (newVid) {
      fieldVehicleType.setText(newVid)
    }
  })

  categorySelector.setSelected(initialCategory)
  if (initialVehicle) {
    vehicleSelector.setSelected(initialVehicle)
    fieldVehicleType.setText(initialVehicle)
  }

  var catRow = new UIElement()
  catRow.addChild(new Label().setText(Component.literal('§7类别:')))
  catRow.addChild(categorySelector)
  page1.addChild(catRow)

  page1.addChild(new Label().setText(Component.literal(' ')))

  var vehRow = new UIElement()
  vehRow.addChild(new Label().setText(Component.literal('§7载具:')))
  vehRow.addChild(vehicleSelector)
  page1.addChild(vehRow)

  page1.addChild(new Label().setText(Component.literal(' ')))

  var vtRow = new UIElement()
  vtRow.addChild(new Label().setText(Component.literal('§7ID:')))
  vtRow.addChild(fieldVehicleType)
  page1.addChild(vtRow)
  page1.addChild(new Label().setText(Component.literal('§8从下拉选择或直接输入完整 ID')))

  var tab1 = new Tab()
  tab1.setText('载具')
  tabView.addTab(tab1, page1)

  // ════════════════════════════════════════════════════════════
  //  第2页：基础设置
  // ════════════════════════════════════════════════════════════
  var page2 = new UIElement()
  page2.lss('padding', 4)

  page2.addChild(new Label().setText(Component.literal('§e── 部署基础参数 ──')))

  var delayRow = new UIElement()
  delayRow.addChild(new Label().setText(Component.literal('§7重生延迟:')))
  delayRow.addChild(fieldRespawnDelay)
  delayRow.addChild(new Label().setText(Component.literal(' §7tick')))
  page2.addChild(delayRow)
  page2.addChild(new Label().setText(Component.literal('§8  (20 tick = 1 秒, 默认 600 = 30s)')))

  page2.addChild(new Label().setText(Component.literal(' ')))

  var autoRow = new UIElement()
  autoRow.addChild(new Label().setText(Component.literal('§7自动重生:')))
  autoRow.addChild(fieldAutoRespawn)
  autoRow.addChild(new Label().setText(Component.literal(' §7(1=开启, 0=手动)')))
  page2.addChild(autoRow)

  page2.addChild(new Label().setText(Component.literal(' ')))

  var ammoRow = new UIElement()
  ammoRow.addChild(new Label().setText(Component.literal('§7生成带弹药:')))
  ammoRow.addChild(fieldSpawnAmmo)
  ammoRow.addChild(new Label().setText(Component.literal(' §7(1=是, 0=否)')))
  page2.addChild(ammoRow)

  var tab2 = new Tab()
  tab2.setText('基础')
  tabView.addTab(tab2, page2)

  // ════════════════════════════════════════════════════════════
  //  第3页：坐标偏移
  // ════════════════════════════════════════════════════════════
  var page3 = new UIElement()
  page3.lss('padding', 4)

  page3.addChild(new Label().setText(Component.literal('§e── 部署坐标偏移 ──')))
  page3.addChild(new Label().setText(Component.literal('§8相对于方块位置的偏移量（格）')))

  page3.addChild(new Label().setText(Component.literal(' ')))

  var oxRow = new UIElement()
  oxRow.addChild(new Label().setText(Component.literal('§7X偏移:')))
  oxRow.addChild(fieldOffsetX)
  oxRow.addChild(new Label().setText(Component.literal(' 格')))
  page3.addChild(oxRow)

  var oyRow = new UIElement()
  oyRow.addChild(new Label().setText(Component.literal('§7Y偏移:')))
  oyRow.addChild(fieldOffsetY)
  oyRow.addChild(new Label().setText(Component.literal(' 格')))
  page3.addChild(oyRow)

  var ozRow = new UIElement()
  ozRow.addChild(new Label().setText(Component.literal('§7Z偏移:')))
  ozRow.addChild(fieldOffsetZ)
  ozRow.addChild(new Label().setText(Component.literal(' 格')))
  page3.addChild(ozRow)

  page3.addChild(new Label().setText(Component.literal(' ')))

  var yawRow = new UIElement()
  yawRow.addChild(new Label().setText(Component.literal('§7朝向(yaw):')))
  yawRow.addChild(fieldYaw)
  yawRow.addChild(new Label().setText(Component.literal(' °')))
  page3.addChild(yawRow)

  var pitchRow = new UIElement()
  pitchRow.addChild(new Label().setText(Component.literal('§7俯仰(pitch):')))
  pitchRow.addChild(fieldPitch)
  pitchRow.addChild(new Label().setText(Component.literal(' °')))
  page3.addChild(pitchRow)

  var tab3 = new Tab()
  tab3.setText('坐标')
  tabView.addTab(tab3, page3)

  // ════════════════════════════════════════════════════════════
  //  第4页：NBT 原始 JSON（简化版，移除不可用的 NBT 简单模式）
  // ════════════════════════════════════════════════════════════
  var page4 = new UIElement()
  page4.lss('padding', 4)

  page4.addChild(new Label().setText(Component.literal('§e── deployNBT 原始 JSON ──')))
  page4.addChild(new Label().setText(Component.literal('§7完全自定义的部署 NBT 模板')))
  page4.addChild(new Label().setText(Component.literal(' ')))
  page4.addChild(new Label().setText(Component.literal('§8留空 {} 则使用数据库完整默认值。')))
  page4.addChild(new Label().setText(Component.literal('§8填写部分字段则会与数据库模板合并。')))
  page4.addChild(new Label().setText(Component.literal(' ')))
  page4.addChild(fieldDeployNBT)

  var tab4 = new Tab()
  tab4.setText('⚡NBT')
  tabView.addTab(tab4, page4)

  root.addChild(tabView)

  // ════════════════════════════════════════════════════════════
  //  底部：分隔线 + 按钮
  // ════════════════════════════════════════════════════════════
  root.addChild(makeSeparator())

  var btnRow = new UIElement()

  // ── 保存按钮（C2S：客户端 → 服务端） ──
  var btnSave = new Button()
  btnSave.setText(Component.literal('§a✔ 保存'))
  btnSave.lss('padding', '3 10')
  btnSave.setOnClick(function(clickEvent) {
    try {
      player.displayClientMessage(Component.literal('§7[部署台] 保存中...'), false)

      var tag = new $CompoundTag()
      tag.putString('vt', fieldVehicleType.getText() || '')
      tag.putString('rd', fieldRespawnDelay.getText() || '600')
      tag.putString('ar', fieldAutoRespawn.getText() || '1')
      tag.putString('swa', fieldSpawnAmmo.getText() || '1')
      tag.putString('ox', fieldOffsetX.getText() || '0')
      tag.putString('oy', fieldOffsetY.getText() || '1')
      tag.putString('oz', fieldOffsetZ.getText() || '0')
      tag.putString('yaw', fieldYaw.getText() || '0')
      tag.putString('pitch', fieldPitch.getText() || '0')
      tag.putString('nbt', fieldDeployNBT.getText() || '{}')

      root.sendMessage('save_config', tag)
      player.displayClientMessage(Component.literal('§e[部署台] 保存请求已发送'), false)
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[部署台] 保存出错: ' + e), false)
    }
  })
  btnRow.addChild(btnSave)

  // ── 重置按钮 ──
  var btnReset = new Button()
  btnReset.setText(Component.literal('§e↻ 重置'))
  btnReset.lss('padding', '3 10')
  btnReset.setOnClick(function(clickEvent) {
    player.displayClientMessage(Component.literal('§e[部署台] 重置请求已发送'), false)
    var tag = new $CompoundTag()
    root.sendMessage('reset_config', tag)
  })
  btnRow.addChild(btnReset)

  // ── 立即部署按钮 ──
  var btnDeployNow = new Button()
  btnDeployNow.setText(Component.literal('§6⚡ 立即部署'))
  btnDeployNow.lss('padding', '3 10')
  btnDeployNow.setOnClick(function(clickEvent) {
    player.displayClientMessage(Component.literal('§e[部署台] 部署请求已发送'), false)
    var tag = new $CompoundTag()
    root.sendMessage('deploy_config', tag)
  })
  btnRow.addChild(btnDeployNow)

  root.addChild(btnRow)
  root.addChild(new InventorySlots())

  // ════════════════════════════════════════════════════════════
  //  Message 系统：网络同步（C2S）
  // ════════════════════════════════════════════════════════════

  // ── 保存配置 ──
  root.onMessage('save_config', function(self, msg) {
    if (player.getServer() === null) return
    player.displayClientMessage(Component.literal('§b[服务端] save_config 到达'), false)
    try {
      var lvl = player.getServer().getLevel(level.getDimension())
      if (!lvl) return
      var b = lvl.getBlock(blockPos.getX(), blockPos.getY(), blockPos.getZ())
      if (!b || !b.entity) return

      var pd = b.entity.persistentData
      var vt = msg.getString('vt')
      var rd = parseInt(msg.getString('rd'), 10)
      var ar = parseInt(msg.getString('ar'), 10)
      var swa = parseInt(msg.getString('swa'), 10)
      var ox = parseInt(msg.getString('ox'), 10)
      var oy = parseInt(msg.getString('oy'), 10)
      var oz = parseInt(msg.getString('oz'), 10)
      var yaw = parseInt(msg.getString('yaw'), 10)
      var pitch = parseInt(msg.getString('pitch'), 10)
      var nbtRaw = msg.getString('nbt')

      if (nbtRaw && nbtRaw !== '{}') {
        try { JSON.parse(nbtRaw) } catch (e) {
          player.displayClientMessage(Component.literal('§c[部署台] deployNBT 格式错误'), false)
          return
        }
      }

      pd.putString('vehicleType', vt)
      pd.putInt('respawnDelay', Math.max(20, isNaN(rd) ? 600 : rd))
      pd.putByte('autoRespawn', ar === 1 ? 1 : 0)
      pd.putByte('spawnWithAmmo', swa === 1 ? 1 : 0)
      pd.putDouble('offsetX', isNaN(ox) ? 0 : ox)
      pd.putDouble('offsetY', isNaN(oy) ? 1 : oy)
      pd.putDouble('offsetZ', isNaN(oz) ? 0 : oz)
      pd.putFloat('yaw', isNaN(yaw) ? 0 : yaw)
      pd.putFloat('pitch', isNaN(pitch) ? 0 : pitch)
      pd.putString('deployNBT', nbtRaw || '{}')
      b.entity.setChanged()

      player.displayClientMessage(Component.literal('§a[部署台] ✔ 配置已保存！'), false)
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[部署台] 保存失败: ' + e), false)
    }
  })

  // ── 重置配置 ──
  root.onMessage('reset_config', function(self, msg) {
    if (player.getServer() === null) return
    try {
      var lvl = player.getServer().getLevel(level.getDimension())
      if (!lvl) return
      var b = lvl.getBlock(blockPos.getX(), blockPos.getY(), blockPos.getZ())
      if (!b || !b.entity) return

      var pd = b.entity.persistentData
      pd.putInt('respawnDelay', 600)
      pd.putByte('autoRespawn', 1)
      pd.putByte('spawnWithAmmo', 1)
      pd.putDouble('offsetX', 0.0)
      pd.putDouble('offsetY', 1.0)
      pd.putDouble('offsetZ', 0.0)
      pd.putFloat('yaw', 0.0)
      pd.putFloat('pitch', 0.0)
      pd.putString('deployNBT', '{}')
      b.entity.setChanged()
      player.displayClientMessage(Component.literal('§a✔ 已重置为默认配置'), false)
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[部署台] 重置失败: ' + e), false)
    }
  })

  // ── 立即部署 ──
  root.onMessage('deploy_config', function(self, msg) {
    if (player.getServer() === null) return
    try {
      var lvl = player.getServer().getLevel(level.getDimension())
      if (!lvl) return
      var b = lvl.getBlock(blockPos.getX(), blockPos.getY(), blockPos.getZ())
      if (!b || !b.entity) return

      var pd = b.entity.persistentData
      if (!pd.contains('vehicleType') || pd.getString('vehicleType') === '') {
        player.displayClientMessage(Component.literal('§c[部署台] 请先配置载具类型'), false)
        return
      }

      pd.putBoolean('PendingDeploy', true)
      b.entity.setChanged()
      player.displayClientMessage(Component.literal('§e⏳ 部署命令已提交，将在下次 Tick 执行'), false)
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[部署台] 部署失败: ' + e), false)
    }
  })

  // 构建 ModularUI
  event.modularUI = ModularUI.of(UI.of(root), player)
})

// ══════════════════════════════════════════════════════════════
//  辅助函数
// ══════════════════════════════════════════════════════════════

function makeSeparator() {
  var sep = new Label().setText(Component.literal('§8━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
  sep.lss('width', '100%')
  sep.lss('overflow', 'hidden')
  return sep
}
