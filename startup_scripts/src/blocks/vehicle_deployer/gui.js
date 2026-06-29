// ============================================================
// 载具部署台 - LDLib2 智能配置 GUI
//
// 功能：
//   1. 从车辆数据库自动读取所有可用载具
//   2. 按模组/类型分组展示
//   3. 基础参数配置（队伍、重生延迟、自动重生）
//   4. 部署坐标/朝向设置
//   5. deployNBT 配置（核心属性、弹药）
// ============================================================

// ========== 全局缓存 ==========

var $HashMap = Java.loadClass('java.util.HashMap')
global.vehicleDeployerCache = new $HashMap()

// ========== Java 类引用 ==========

var $DataBindingBuilder = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.impl.DataBindingBuilder')
var $SyncStrategy = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.SyncStrategy')

// ========== UI 构建 ==========

LDLib2UI.block('kubejs:vehicle_deployer_cfg', event => {
  var player = event.player
  var uuid = player.uuid

  // ── 从缓存读取数据 ──
  var cacheData = null
  try {
    var raw = global.vehicleDeployerCache.get(uuid)
    if (raw) cacheData = JSON.parse(raw)
  } catch (e) {}

  // ── 缓存失效 → 用默认值（弹药补给站模式） ──
  if (!cacheData) {
    cacheData = {
      pos: { x: 0, y: 0, z: 0 },
      dim: 'minecraft:overworld',
      config: {
        vehicleType: '', respawnDelay: 600, autoRespawn: 1,
        offsetX: 0, offsetY: 1, offsetZ: 0, yaw: 0, pitch: 0,
        deployNBT: '{}', displayName: '', deployedUUID: '', cooldownEnd: 0
      }
    }
  }

  var cfg = cacheData.config || {}
  var pos = cacheData.pos || { x: 0, y: 0, z: 0 }
  var dim = cacheData.dim || 'minecraft:overworld'

  // ── 准备车辆数据库 ──
  // 从 cacheData.categories 读取（由 server 侧 block_main.js 的右键事件传入）
  // ★ 修复：不再使用硬编码列表，而是使用数据包自动生成的分类数据
  var vehicleData = cacheData.categories || {}
  var categoryList = Object.keys(vehicleData)
  // 如果缓存中无分类数据（旧方块或缓存失效），提供兜底告示
  if (categoryList.length === 0) {
    vehicleData = { '§c数据库未加载': ['§c请保存配置后重启'] }
    categoryList = Object.keys(vehicleData)
  }

  // ── 跨上下文同步数据 ──
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
      console.log('[部署台GUI] 绑定失败(' + name + '): ' + e)
    }
  }

  // ════════════════════════════════════════════════════════════
  //  创建所有输入字段
  // ════════════════════════════════════════════════════════════

  // ── Tab 1: 车辆类型 ──
  var fieldVehicleType = new TextField()
  fieldVehicleType.setText(cfg.vehicleType || '')
  fieldVehicleType.lss('width', 180)
  bindField(fieldVehicleType, 'vt')

  // ── Tab 2: 基础设置 ──
  var fieldRespawnDelay = new TextField()
  fieldRespawnDelay.setNumbersOnlyInt(20, 72000)
  fieldRespawnDelay.setText(String(cfg.respawnDelay || 600))
  fieldRespawnDelay.lss('width', 55)
  bindField(fieldRespawnDelay, 'rd')

  var fieldAutoRespawn = new TextField()
  fieldAutoRespawn.setNumbersOnlyInt(0, 1)
  fieldAutoRespawn.setText(cfg.autoRespawn === 0 ? '0' : '1')
  fieldAutoRespawn.lss('width', 40)
  bindField(fieldAutoRespawn, 'ar')

  // ── Tab 3: 坐标偏移 ──
  var fieldOffsetX = new TextField()
  fieldOffsetX.setNumbersOnlyInt(-999, 999)
  fieldOffsetX.setText(String(cfg.offsetX || 0))
  fieldOffsetX.lss('width', 50)
  bindField(fieldOffsetX, 'ox')

  var fieldOffsetY = new TextField()
  fieldOffsetY.setNumbersOnlyInt(-999, 999)
  fieldOffsetY.setText(String(cfg.offsetY || 1))
  fieldOffsetY.lss('width', 50)
  bindField(fieldOffsetY, 'oy')

  var fieldOffsetZ = new TextField()
  fieldOffsetZ.setNumbersOnlyInt(-999, 999)
  fieldOffsetZ.setText(String(cfg.offsetZ || 0))
  fieldOffsetZ.lss('width', 50)
  bindField(fieldOffsetZ, 'oz')

  var fieldYaw = new TextField()
  fieldYaw.setNumbersOnlyInt(-180, 180)
  fieldYaw.setText(String(cfg.yaw || 0))
  fieldYaw.lss('width', 50)
  bindField(fieldYaw, 'yaw')

  var fieldPitch = new TextField()
  fieldPitch.setNumbersOnlyInt(-90, 90)
  fieldPitch.setText(String(cfg.pitch || 0))
  fieldPitch.lss('width', 50)
  bindField(fieldPitch, 'pitch')

  // ── Tab 4: NBT 编辑 ──
  var fieldDeployNBT = new TextField()
  fieldDeployNBT.setText(cfg.deployNBT || '{}')
  fieldDeployNBT.lss('width', 250)
  fieldDeployNBT.lss('height', 100)
  bindField(fieldDeployNBT, 'nbt')

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
  //
  // ★ 修复：Selector 支持 setSelected() 和 setOnValueChanged()，
  //   现在正确实现初始值设定和联动更新。
  //
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

  // ★ 修复：类别切换时更新载具下拉
  categorySelector.setOnValueChanged(function(newCat) {
    if (newCat && vehicleData[newCat]) {
      vehicleSelector.setCandidates(vehicleData[newCat])
      // 默认选中第一个
      if (vehicleData[newCat].length > 0) {
        vehicleSelector.setSelected(vehicleData[newCat][0])
      }
    }
  })

  // ★ 修复：选中载具时同步更新 ID 输入框
  vehicleSelector.setOnValueChanged(function(newVid) {
    if (newVid) {
      fieldVehicleType.setText(newVid)
    }
  })

  // ★ 修复：设置初始选中值（先设分类，回调会自动更新载具列表和选中）
  categorySelector.setSelected(initialCategory)
  if (initialVehicle) {
    vehicleSelector.setSelected(initialVehicle)
    fieldVehicleType.setText(initialVehicle)
  }

  // 类别行
  var catRow = new UIElement()
  catRow.addChild(new Label().setText(Component.literal('§7类别:')))
  catRow.addChild(categorySelector)
  page1.addChild(catRow)

  page1.addChild(new Label().setText(Component.literal(' ')))

  // 载具行
  var vehRow = new UIElement()
  vehRow.addChild(new Label().setText(Component.literal('§7载具:')))
  vehRow.addChild(vehicleSelector)
  page1.addChild(vehRow)

  page1.addChild(new Label().setText(Component.literal(' ')))

  // ID 输入框（手动输入，与下拉联动）
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

  // ── 缓存中的 nbtTemplate（来自数据库，用于简单模式预填） ──
  var nbtTemplate = cacheData.nbtTemplate || {}

  // ════════════════════════════════════════════════════════════
  //  第4页：NBT 简单模式 — 参数化配置（独立页签）
  // ════════════════════════════════════════════════════════════

  var page4 = new UIElement()
  page4.lss('padding', 4)

  page4.addChild(new Label().setText(Component.literal('§e── NBT 参数配置 ──')))
  page4.addChild(new Label().setText(Component.literal('§7修改部署时的核心属性，留空则使用数据库默认值')))

  page4.addChild(new Label().setText(Component.literal(' ')))

  var fieldNbtEnergy = new TextField()
  fieldNbtEnergy.setNumbersOnlyInt(0, 999999999)
  fieldNbtEnergy.setText(String(nbtTemplate.Energy !== undefined ? nbtTemplate.Energy : ''))
  fieldNbtEnergy.lss('width', 80)
  bindField(fieldNbtEnergy, 'nbt_en')

  var fieldNbtHealth = new TextField()
  fieldNbtHealth.setNumbersOnlyInt(0, 999999)
  fieldNbtHealth.setText(String(nbtTemplate.Health !== undefined ? nbtTemplate.Health : ''))
  fieldNbtHealth.lss('width', 80)
  bindField(fieldNbtHealth, 'nbt_hp')

  var fieldNbtInvul = new TextField()
  fieldNbtInvul.setNumbersOnlyInt(0, 1)
  fieldNbtInvul.setText(String(nbtTemplate.Invulnerable !== undefined ? nbtTemplate.Invulnerable : '0'))
  fieldNbtInvul.lss('width', 40)
  bindField(fieldNbtInvul, 'nbt_inv')

  var fieldNbtDecoy = new TextField()
  fieldNbtDecoy.setNumbersOnlyInt(0, 1)
  fieldNbtDecoy.setText(String(nbtTemplate.DecoyReady !== undefined ? nbtTemplate.DecoyReady : '0'))
  fieldNbtDecoy.lss('width', 40)
  bindField(fieldNbtDecoy, 'nbt_dc')

  var enRow = new UIElement()
  enRow.addChild(new Label().setText(Component.literal('§eEnergy  §7能量:')))
  enRow.addChild(fieldNbtEnergy)
  page4.addChild(enRow)
  page4.addChild(new Label().setText(Component.literal('  §8载具总能量，影响武器可用性（0=没电）')))

  var hpRow = new UIElement()
  hpRow.addChild(new Label().setText(Component.literal('§eHealth  §7生命值:')))
  hpRow.addChild(fieldNbtHealth)
  page4.addChild(hpRow)
  page4.addChild(new Label().setText(Component.literal('  §8载具总生命值，归零则摧毁')))

  var invRow = new UIElement()
  invRow.addChild(new Label().setText(Component.literal('§eInvulnerable  §7无敌:')))
  invRow.addChild(fieldNbtInvul)
  invRow.addChild(new Label().setText(Component.literal('  §8(1=是, 0=否)')))
  page4.addChild(invRow)

  var dcRow = new UIElement()
  dcRow.addChild(new Label().setText(Component.literal('§eDecoyReady  §7诱饵弹:')))
  dcRow.addChild(fieldNbtDecoy)
  dcRow.addChild(new Label().setText(Component.literal('  §8(1=就绪, 0=未装填)')))
  page4.addChild(dcRow)

  page4.addChild(new Label().setText(Component.literal(' ')))

  // ── 应用默认值按钮 ──
  var btnApplyDefaults = new Button()
  btnApplyDefaults.setText(Component.literal('§b⟳ 应用数据库默认值'))
  btnApplyDefaults.lss('padding', '3 8')
  btnApplyDefaults.setOnServerClick(function(clickEvent) {
    var server = player.getServer()
    if (!server) return
    var puuid = player.uuid
    var raw = global.vehicleDeployerCache.get(puuid)
    if (!raw) { player.displayClientMessage(Component.literal('§c[部署台] 缓存失效'), false); return }
    try {
      var data = JSON.parse(raw)
      if (data.nbtTemplate && Object.keys(data.nbtTemplate).length > 0) {
        var defJSON = JSON.stringify(data.nbtTemplate, null, 2)
        var level = server.getLevel(data.dim || 'minecraft:overworld')
        if (level) {
          var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
          if (block && block.entity) {
            block.entity.persistentData.putString('deployNBT', defJSON)
            block.entity.setChanged()
            player.displayClientMessage(Component.literal('§a✔ 已应用数据库默认 NBT！请切换至⚡NBT高级查看'), false)
          }
        }
      } else {
        player.displayClientMessage(Component.literal('§e提示: 未找到该载具的数据库模板'), false)
      }
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[部署台] 应用默认值失败: ' + e), false)
    }
  })
  page4.addChild(btnApplyDefaults)

  var tab4 = new Tab()
  tab4.setText('⚙NBT简单')
  tabView.addTab(tab4, page4)

  // ════════════════════════════════════════════════════════════
  //  第5页：NBT 高级模式 — 原始 JSON（独立页签）
  // ════════════════════════════════════════════════════════════

  var page5 = new UIElement()
  page5.lss('padding', 4)

  page5.addChild(new Label().setText(Component.literal('§e── deployNBT 原始 JSON ──')))
  page5.addChild(new Label().setText(Component.literal('§7完全自定义的部署 NBT 模板')))
  page5.addChild(new Label().setText(Component.literal(' ')))
  page5.addChild(new Label().setText(Component.literal('§8留空 {} 则使用数据库完整默认值。')))
  page5.addChild(new Label().setText(Component.literal('§8填写部分字段则会与数据库模板合并。')))
  page5.addChild(new Label().setText(Component.literal(' ')))
  page5.addChild(fieldDeployNBT)

  var tab5 = new Tab()
  tab5.setText('⚡NBT高级')
  tabView.addTab(tab5, page5)

  root.addChild(tabView)

  // ════════════════════════════════════════════════════════════
  //  底部：分隔线 + 按钮
  // ════════════════════════════════════════════════════════════
  root.addChild(makeSeparator())

  var btnRow = new UIElement()

  // ── 保存按钮 ──
  var btnSave = new Button()
  btnSave.setText(Component.literal('§a✔ 保存'))
  btnSave.lss('padding', '3 10')
  btnSave.setOnServerClick(function(clickEvent) {
    var server = player.getServer()
    if (!server) return
    var puuid = player.uuid
    var raw = global.vehicleDeployerCache.get(puuid)
    if (!raw) {
      player.displayClientMessage(Component.literal('§c[部署台] 缓存失效，请重新打开GUI'), false)
      return
    }
    try {
      var data = JSON.parse(raw)
      var level = server.getLevel(data.dim || 'minecraft:overworld')
      if (!level) {
        player.displayClientMessage(Component.literal('§c[部署台] 无法获取维度'), false)
        return
      }
      var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
      if (!block || block.getId() === 'minecraft:air') {
        player.displayClientMessage(Component.literal('§c[部署台] 方块已不存在'), false)
        return
      }
      if (!block.entity) {
        player.displayClientMessage(Component.literal('§c[部署台] 方块数据异常'), false)
        return
      }

      var pd = block.entity.persistentData

      // 从 fieldVals 读取值，fallback 到 field.getText()
      var vt = fieldVals['vt'] !== undefined ? String(fieldVals['vt']) : fieldVehicleType.getText()
      var rd = safeParseField(fieldVals['rd'], fieldRespawnDelay)
      var ar = safeParseField(fieldVals['ar'], fieldAutoRespawn)
      var ox = safeParseField(fieldVals['ox'], fieldOffsetX)
      var oy = safeParseField(fieldVals['oy'], fieldOffsetY)
      var oz = safeParseField(fieldVals['oz'], fieldOffsetZ)
      var yaw = safeParseField(fieldVals['yaw'], fieldYaw)
      var pitch = safeParseField(fieldVals['pitch'], fieldPitch)
      var nbtRaw = fieldVals['nbt'] !== undefined ? String(fieldVals['nbt']) : fieldDeployNBT.getText()

      // 验证 NBT JSON 格式
      if (nbtRaw && nbtRaw !== '{}') {
        try { JSON.parse(nbtRaw) } catch (e) {
          player.displayClientMessage(Component.literal('§c[部署台] deployNBT JSON 格式错误: ' + e), false)
          return
        }
      }

      // 写入持久化数据
      pd.putString('vehicleType', vt)
      pd.putInt('respawnDelay', Math.max(20, rd))
      pd.putByte('autoRespawn', ar === 1 ? 1 : 0)
      pd.putDouble('offsetX', ox)
      pd.putDouble('offsetY', oy)
      pd.putDouble('offsetZ', oz)
      pd.putFloat('yaw', yaw)
      pd.putFloat('pitch', pitch)
      pd.putString('deployNBT', nbtRaw || '{}')
      block.entity.setChanged()

      player.displayClientMessage(Component.literal('§a✔ 配置已保存！'), false)
      console.log('[部署台GUI] 配置已保存到 @[' + data.pos.x + ',' + data.pos.y + ',' + data.pos.z + ']')
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[部署台] 保存失败: ' + e), false)
      console.log('[部署台GUI] 保存失败: ' + e)
    }
  })
  btnRow.addChild(btnSave)

  // ── 重置按钮 ──
  var btnReset = new Button()
  btnReset.setText(Component.literal('§e↻ 重置'))
  btnReset.lss('padding', '3 10')
  btnReset.setOnServerClick(function(clickEvent) {
    var server = player.getServer()
    if (!server) return
    var puuid = player.uuid
    var raw = global.vehicleDeployerCache.get(puuid)
    if (!raw) {
      player.displayClientMessage(Component.literal('§c[部署台] 缓存失效'), false)
      return
    }
    try {
      var data = JSON.parse(raw)
      var level = server.getLevel(data.dim || 'minecraft:overworld')
      if (!level) return
      var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
      if (!block || block.getId() === 'minecraft:air' || !block.entity) return

      var pd = block.entity.persistentData
      // 清空所有配置（保留 vehicleType 和 team，其余恢复默认）
      pd.putInt('respawnDelay', 600)
      pd.putByte('autoRespawn', 1)
      pd.putDouble('offsetX', 0.0)
      pd.putDouble('offsetY', 1.0)
      pd.putDouble('offsetZ', 0.0)
      pd.putFloat('yaw', 0.0)
      pd.putFloat('pitch', 0.0)
      pd.putString('deployNBT', '{}')
      block.entity.setChanged()

      player.displayClientMessage(Component.literal('§a✔ 已重置为默认配置（保留车辆类型和队伍）'), false)
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[部署台] 重置失败: ' + e), false)
    }
  })
  btnRow.addChild(btnReset)

  // ── 立即部署按钮 ──
  var btnDeployNow = new Button()
  btnDeployNow.setText(Component.literal('§6⚡ 立即部署'))
  btnDeployNow.lss('padding', '3 10')
  btnDeployNow.setOnServerClick(function(clickEvent) {
    var server = player.getServer()
    if (!server) return
    var puuid = player.uuid
    var raw = global.vehicleDeployerCache.get(puuid)
    if (!raw) {
      player.displayClientMessage(Component.literal('§c[部署台] 缓存失效'), false)
      return
    }
    try {
      var data = JSON.parse(raw)
      var level = server.getLevel(data.dim || 'minecraft:overworld')
      if (!level) return
      var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
      if (!block || block.getId() === 'minecraft:air' || !block.entity) {
        player.displayClientMessage(Component.literal('§c[部署台] 方块已不存在'), false)
        return
      }

      var pd = block.entity.persistentData
      if (!pd.contains('vehicleType') || pd.getString('vehicleType') === '') {
        player.displayClientMessage(Component.literal('§c[部署台] 请先配置载具类型'), false)
        return
      }

      // 写入 PendingDeploy 标记，由 server 侧的 blockEntityTick 检测执行
      block.entity.persistentData.putBoolean('PendingDeploy', true)
      block.entity.setChanged()
      player.displayClientMessage(Component.literal('§e⏳ 部署命令已提交，将在下次 Tick 执行'), false)
    } catch (e) {
      player.displayClientMessage(Component.literal('§c[部署台] 部署失败: ' + e), false)
    }
  })
  btnRow.addChild(btnDeployNow)

  root.addChild(btnRow)

  // ── 玩家物品栏 ──
  root.addChild(new InventorySlots())

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

function safeParseField(customVal, field) {
  try {
    var text = customVal !== undefined && customVal !== null ? String(customVal) : field.getText()
    if (text === null || text === undefined) return 0
    var val = parseInt(text, 10)
    return isNaN(val) ? 0 : val
  } catch (e) {
    return 0
  }
}
