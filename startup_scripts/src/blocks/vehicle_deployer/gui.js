// ============================================================
// 载具部署台 - LDLib2 配置GUI（S2C DataBinding + C2S Message）
//   S2C：服务端读取方块 NBT → 一次性推送到客户端 TextField
//   C2S：客户端"保存"按钮 → sendMessage → 服务端写入 NBT
// 架构：
//   1. TextField 仅创建 + 设置样式，通过 queueS2CField() 入队
//   2. ModularUI.of() 建好后统一绑定 stringS2C + CHANGED_PERIODIC
//   3. registerValueListener 内 setText() + 切 NONE 停止轮询
//   4. 服务端 getter 用 readServerConfig() 缓存，仅第一次读 NBT
//   5. C2S 保存走原有 sendMessage 逻辑
// ============================================================

// ========== Java 类引用 ==========

var $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')
var $HashMap = Java.loadClass('java.util.HashMap')
var $DataBindingBuilder = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.impl.DataBindingBuilder')
var $SyncStrategy = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.SyncStrategy')
global.vehicleDeployerCache = global.vehicleDeployerCache || new $HashMap()

// ★ 数据化默认配置：从 vehicle_deployer.json 读取
var $V_DEPLOYER_JSON = 'kubejs/data/kubejs/blocks/vehicle_deployer.json'
var DEPLOYER_DEFAULT = (function() {
  try {
    var raw = JsonIO.read($V_DEPLOYER_JSON)
    if (raw && raw.deployer_default) {
      var d = raw.deployer_default
      return {
        vehicleType: d.vehicleType || '',
        respawnDelay: (typeof d.respawnDelay === 'number') ? d.respawnDelay : 600,
        autoRespawn: (typeof d.autoRespawn === 'number') ? d.autoRespawn : 0,
        offsetX: (typeof d.offsetX === 'number') ? d.offsetX : 0,
        offsetY: (typeof d.offsetY === 'number') ? d.offsetY : 1,
        offsetZ: (typeof d.offsetZ === 'number') ? d.offsetZ : 0,
        yaw: (typeof d.yaw === 'number') ? d.yaw : 0,
        pitch: (typeof d.pitch === 'number') ? d.pitch : 0,
        deployNBT: d.deployNBT || '{}'
      }
    }
  } catch(e) { console.log('[部署台-GUI] 读取默认配置 JSON 失败: ' + e) }
  return { vehicleType: '', respawnDelay: 600, autoRespawn: 0, offsetX: 0, offsetY: 1, offsetZ: 0, yaw: 0, pitch: 0, deployNBT: '{}' }
})()

var DEFAULT_SIMPLE_NBT = (function() {
  try {
    var raw = JsonIO.read($V_DEPLOYER_JSON)
    if (raw && raw.default_simple_nbt) {
      var n = raw.default_simple_nbt
      return {
        Energy: (typeof n.Energy === 'number') ? n.Energy : 10000000,
        Health: (typeof n.Health === 'number') ? n.Health : 500,
        Invulnerable: (typeof n.Invulnerable === 'number') ? n.Invulnerable : 0,
        DecoyReady: (typeof n.DecoyReady === 'number') ? n.DecoyReady : 1,
        SimpleToggle: (typeof n.SimpleToggle === 'number') ? n.SimpleToggle : 0,
        SpawnWithAmmo: (typeof n.SpawnWithAmmo === 'number') ? n.SpawnWithAmmo : 1
      }
    }
  } catch(e) { console.log('[部署台-GUI] 读取默认 NBT JSON 失败: ' + e) }
  return { Energy: 10000000, Health: 500, Invulnerable: 0, DecoyReady: 1, SimpleToggle: 0, SpawnWithAmmo: 1 }
})()

// ========== UI 构建 ==========

LDLib2UI.block('kubejs:vehicle_deployer_cfg', event => {
  var player = event.player
  var level = event.level
  var blockPos = event.pos

  // ── 从缓存读取数据（服务端 GUI 构建时可用，客户端为占位） ──
  var cacheData = null
  try {
    var raw = global.vehicleDeployerCache.get(player.uuid)
    if (raw) cacheData = JSON.parse(raw)
  } catch (e) {}
  if (!cacheData) cacheData = {}
  var vehicleData = cacheData.categories || {}
  var categoryList = Object.keys(vehicleData)
  // 客户端无缓存时显示占位（等待服务端推送 init_db）
  if (categoryList.length === 0) {
    vehicleData = { '§7正在加载数据库...': ['§7请稍候'] }
    categoryList = Object.keys(vehicleData)
  }
  var nbtTemplate = cacheData.nbtTemplate || {}

  // ═══════════════════════════════════════════════════════════
  //  S2C 服务端配置缓存（一次性读取 NBT，后续 getter 走缓存）
  // ═══════════════════════════════════════════════════════════
  var s2cCache = null
  function readServerConfig() {
    if (s2cCache !== null) return s2cCache
    s2cCache = {}
    try {
      var server = player.getServer()
      if (!server) return s2cCache
      var lvl = server.getLevel(level.getDimension())
      if (!lvl) return s2cCache
      var b = lvl.getBlock(blockPos.getX(), blockPos.getY(), blockPos.getZ())
      if (!b || !b.entity) return s2cCache
      var pd = b.entity.persistentData
      s2cCache.vehicleType = pd.getString('vehicleType') || ''
      s2cCache.respawnDelay = pd.contains('respawnDelay') ? String(pd.getInt('respawnDelay')) : '600'
      s2cCache.autoRespawn = pd.contains('autoRespawn') ? String(pd.getByte('autoRespawn')) : '1'
      s2cCache.spawnWithAmmo = pd.contains('spawnWithAmmo') ? String(pd.getByte('spawnWithAmmo')) : String(DEFAULT_SIMPLE_NBT.SpawnWithAmmo)
      s2cCache.offsetX = pd.contains('offsetX') ? String(pd.getDouble('offsetX')) : '0'
      s2cCache.offsetY = pd.contains('offsetY') ? String(pd.getDouble('offsetY')) : '1'
      s2cCache.offsetZ = pd.contains('offsetZ') ? String(pd.getDouble('offsetZ')) : '0'
      s2cCache.yaw = pd.contains('yaw') ? String(pd.getFloat('yaw')) : '0'
      s2cCache.pitch = pd.contains('pitch') ? String(pd.getFloat('pitch')) : '0'
      s2cCache.deployNBT = pd.getString('deployNBT') || '{}'
      s2cCache.nbtEnergy = pd.contains('nbtEnergy') ? String(pd.getInt('nbtEnergy')) : ''
      s2cCache.nbtHealth = pd.contains('nbtHealth') ? String(pd.getFloat('nbtHealth')) : ''
      s2cCache.nbtInvulnerable = pd.contains('nbtInvulnerable') ? String(pd.getByte('nbtInvulnerable')) : ''
      s2cCache.nbtDecoyReady = pd.contains('nbtDecoyReady') ? String(pd.getByte('nbtDecoyReady')) : ''
      s2cCache.nbtSimpleToggle = pd.contains('nbtSimpleToggle') ? String(pd.getByte('nbtSimpleToggle')) : '1'
      s2cCache.nbtMode = pd.contains('nbtMode') ? pd.getString('nbtMode') : ''
    } catch (e) {}
    return s2cCache
  }

  // ── Getter 工厂 ──
  function makeS2CGetter(key) {
    return function() {
      var cfg = readServerConfig()
      return cfg[key] !== undefined ? String(cfg[key]) : ''
    }
  }

  // ── 从服务器 global 缓存读取数据库 nbtTemplate 字段的 Getter ──
  function makeTemplateGetter(key) {
    return function() {
      try {
        var raw = global.vehicleDeployerCache.get(player.uuid)
        if (raw) {
          var obj = JSON.parse(raw)
          var tmpl = obj.nbtTemplate || {}
          if (tmpl[key] !== undefined) return String(tmpl[key])
        }
      } catch(e) {}
      // 数据库模板没有该字段 → 用默认值
      var defVal = DEFAULT_SIMPLE_NBT[key]
      return defVal !== undefined ? String(defVal) : ''
    }
  }

  // ── 三层 fallback Getter：独立 NBT 字段 > 数据库模板 > DEFAULT_SIMPLE_NBT ──
  var SIMPLE_NBT_FIELDS = {
    Energy: 'nbtEnergy',
    Health: 'nbtHealth',
    Invulnerable: 'nbtInvulnerable',
    DecoyReady: 'nbtDecoyReady'
  }
  function makeSimpleNBTGetter(key) {
    var fieldName = SIMPLE_NBT_FIELDS[key]
    return function() {
      // 第一层：从独立 NBT 字段读取（用户已保存的值）
      var val = fieldName ? readServerConfig()[fieldName] : undefined
      if (val !== undefined && val !== '') return String(val)
      // 第二层：从数据库模板读取
      try {
        var cacheRaw = global.vehicleDeployerCache.get(player.uuid)
        if (cacheRaw) {
          var obj = JSON.parse(cacheRaw)
          var tmpl = obj.nbtTemplate || {}
          if (tmpl[key] !== undefined) return String(tmpl[key])
        }
      } catch(e) {}
      // 第三层：DEFAULT_SIMPLE_NBT
      var defVal = DEFAULT_SIMPLE_NBT[key]
      return defVal !== undefined ? String(defVal) : ''
    }
  }

  // ── S2C 字段队列 ──
  var s2cQueue = []
  function queueS2CField(field, getter, name) {
    s2cQueue.push({ field: field, getter: getter, name: name })
    return field
  }

  // ════════════════════════════════════════════════════════════
  //  创建所有输入字段（仅设置样式，不绑定，不设初始文本）
  // ════════════════════════════════════════════════════════════

  // ── Tab 1: 车辆类型 ──
  var fieldVehicleType = new TextField()
  fieldVehicleType.lss('width', 180)
  queueS2CField(fieldVehicleType, makeS2CGetter('vehicleType'), 'vehicleType')

  // ── Tab 2: 基础设置 ──
  var fieldRespawnDelay = new TextField()
  fieldRespawnDelay.setNumbersOnlyInt(20, 72000)
  fieldRespawnDelay.lss('width', 55)
  queueS2CField(fieldRespawnDelay, makeS2CGetter('respawnDelay'), 'respawnDelay')

  var fieldAutoRespawn = new TextField()
  fieldAutoRespawn.setNumbersOnlyInt(0, 1)
  fieldAutoRespawn.lss('width', 40)
  queueS2CField(fieldAutoRespawn, makeS2CGetter('autoRespawn'), 'autoRespawn')

  var fieldSpawnAmmo = new TextField()
  fieldSpawnAmmo.setNumbersOnlyInt(0, 1)
  fieldSpawnAmmo.lss('width', 40)
  queueS2CField(fieldSpawnAmmo, makeS2CGetter('spawnWithAmmo'), 'spawnWithAmmo')

  // ── Tab 3: 坐标偏移 ──
  var fieldOffsetX = new TextField()
  fieldOffsetX.setNumbersOnlyInt(-999, 999)
  fieldOffsetX.lss('width', 50)
  queueS2CField(fieldOffsetX, makeS2CGetter('offsetX'), 'offsetX')

  var fieldOffsetY = new TextField()
  fieldOffsetY.setNumbersOnlyInt(-999, 999)
  fieldOffsetY.lss('width', 50)
  queueS2CField(fieldOffsetY, makeS2CGetter('offsetY'), 'offsetY')

  var fieldOffsetZ = new TextField()
  fieldOffsetZ.setNumbersOnlyInt(-999, 999)
  fieldOffsetZ.lss('width', 50)
  queueS2CField(fieldOffsetZ, makeS2CGetter('offsetZ'), 'offsetZ')

  var fieldYaw = new TextField()
  fieldYaw.setNumbersOnlyInt(-180, 180)
  fieldYaw.lss('width', 50)
  queueS2CField(fieldYaw, makeS2CGetter('yaw'), 'yaw')

  var fieldPitch = new TextField()
  fieldPitch.setNumbersOnlyInt(-90, 90)
  fieldPitch.lss('width', 50)
  queueS2CField(fieldPitch, makeS2CGetter('pitch'), 'pitch')

  // ── Tab 4: NBT 编辑 ──
  var fieldDeployNBT = new TextField()
  fieldDeployNBT.lss('width', 250)
  fieldDeployNBT.lss('height', 100)
  queueS2CField(fieldDeployNBT, makeS2CGetter('deployNBT'), 'deployNBT')

  // ── 隐藏字段：数据库分类（S2C stringS2C 推送） ──
  var dbCategoryField = new TextField()
  dbCategoryField.setAnyString()
  queueS2CField(dbCategoryField, function() {
    try {
      var raw = global.vehicleDeployerCache.get(player.uuid)
      if (raw) {
        var obj = JSON.parse(raw)
        // 把 nbtTemplate 也打包进同一个 JSON，用 __nbt 键标识
        return JSON.stringify({ cats: obj.categories || {}, nbt: obj.nbtTemplate || {} })
      }
    } catch(e) {}
    return '{}'
  }, 'db_categories')

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

  // 确定当前已保存的类型所属的分类（缓存数据，仅 GUI 打开时有效）
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
    // 优先用全局缓存（服务端推送的），其次用闭包变量
    var cats = global.__vdCategories || vehicleData
    if (newCat && cats[newCat]) {
      vehicleSelector.setCandidates(cats[newCat])
      if (cats[newCat].length > 0) {
        vehicleSelector.setSelected(cats[newCat][0])
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
  //  第4页：NBT 简单预设
  // ════════════════════════════════════════════════════════════
  var page4 = new UIElement()
  page4.lss('padding', 4)

  // ── 简单 NBT 开关 ──
  var toggleRow = new UIElement()
  toggleRow.addChild(new Label().setText(Component.literal('§a简单 NBT 开关:')))
  var fieldSimpleToggle = new TextField().setNumbersOnlyInt(0, 1)
  fieldSimpleToggle.lss('width', 25)
  queueS2CField(fieldSimpleToggle, function() {
    return readServerConfig().nbtSimpleToggle || '0'
  }, 'simple_toggle')
  toggleRow.addChild(fieldSimpleToggle)
  toggleRow.addChild(new Label().setText(Component.literal(' (1=开, 0=关)')))
  page4.addChild(toggleRow)

  page4.addChild(new Label().setText(Component.literal('§e── 简单 NBT 预设 ──')))
  page4.addChild(new Label().setText(Component.literal('§7以数据库模板为基础，仅覆盖填写的字段')))
  page4.addChild(new Label().setText(Component.literal(' ')))

  // 能量
  var nbtEnergyRow = new UIElement()
  nbtEnergyRow.addChild(new Label().setText(Component.literal('').append(Text.translate('nbt.kubejs.energy')).append(Component.literal(':'))))
  var fieldNbtEnergy = new TextField().setNumbersOnlyInt(0, 99999999)
  fieldNbtEnergy.lss('width', 70)
  queueS2CField(fieldNbtEnergy, makeSimpleNBTGetter('Energy'), 'nbt_energy')
  nbtEnergyRow.addChild(fieldNbtEnergy)
  page4.addChild(nbtEnergyRow)

  // 生命值
  var nbtHealthRow = new UIElement()
  nbtHealthRow.addChild(new Label().setText(Component.literal('').append(Text.translate('nbt.kubejs.health')).append(Component.literal(':'))))
  var fieldNbtHealth = new TextField().setNumbersOnlyInt(0, 99999)
  fieldNbtHealth.lss('width', 70)
  queueS2CField(fieldNbtHealth, makeSimpleNBTGetter('Health'), 'nbt_health')
  nbtHealthRow.addChild(fieldNbtHealth)
  page4.addChild(nbtHealthRow)

  // 无敌 + 诱饵弹 同一行
  var nbtInvRow = new UIElement()
  nbtInvRow.addChild(new Label().setText(Component.literal('').append(Text.translate('nbt.kubejs.invulnerable')).append(Component.literal(':'))))
  var fieldNbtInv = new TextField().setNumbersOnlyInt(0, 1)
  fieldNbtInv.lss('width', 30)
  queueS2CField(fieldNbtInv, makeSimpleNBTGetter('Invulnerable'), 'nbt_inv')
  nbtInvRow.addChild(fieldNbtInv)
  nbtInvRow.addChild(new Label().setText(Component.literal('  ')))
  nbtInvRow.addChild(new Label().setText(Component.literal('').append(Text.translate('nbt.kubejs.decoy_ready')).append(Component.literal(':'))))
  var fieldNbtDecoy = new TextField().setNumbersOnlyInt(0, 1)
  fieldNbtDecoy.lss('width', 30)
  queueS2CField(fieldNbtDecoy, makeSimpleNBTGetter('DecoyReady'), 'nbt_decoy')
  nbtInvRow.addChild(fieldNbtDecoy)
  page4.addChild(nbtInvRow)

  // 是否携带弹药
  var nbtAmmoRow = new UIElement()
  nbtAmmoRow.addChild(new Label().setText(Component.literal('').append(Text.translate('nbt.kubejs.spawn_with_ammo')).append(Component.literal(':'))))
  var fieldNbtAmmo = new TextField().setNumbersOnlyInt(0, 1)
  fieldNbtAmmo.lss('width', 30)
  queueS2CField(fieldNbtAmmo, makeS2CGetter('spawnWithAmmo'), 'nbt_ammo')
  nbtAmmoRow.addChild(fieldNbtAmmo)
  nbtAmmoRow.addChild(new Label().setText(Component.literal(' (1=是, 0=否)')))
  page4.addChild(nbtAmmoRow)

  var tab4 = new Tab()
  tab4.setText('§a简单NBT')
  tabView.addTab(tab4, page4)

  // ════════════════════════════════════════════════════════════
  //  第5页：高级 NBT JSON
  // ════════════════════════════════════════════════════════════
  var page5 = new UIElement()
  page5.lss('padding', 4)

  page5.addChild(new Label().setText(Component.literal('§e── deployNBT 高级 JSON ──')))
  page5.addChild(new Label().setText(Component.literal('§7简单 NBT 为空时生效，否则被覆盖')))
  page5.addChild(new Label().setText(Component.literal(' ')))
  page5.addChild(new Label().setText(Component.literal('§8留空 {} 则使用数据库模板。')))
  page5.addChild(new Label().setText(Component.literal(' ')))
  page5.addChild(fieldDeployNBT)

  var tab5 = new Tab()
  tab5.setText('⚡高级NBT')
  tabView.addTab(tab5, page5)

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
      var tag = new $CompoundTag()
      tag.putString('vt', fieldVehicleType.getText() || '')
      tag.putString('rd', fieldRespawnDelay.getText() || '600')
      tag.putString('ar', fieldAutoRespawn.getText() || '1')
      tag.putString('swa', fieldSpawnAmmo.getText() || String(DEFAULT_SIMPLE_NBT.SpawnWithAmmo))
      tag.putString('ox', fieldOffsetX.getText() || '0')
      tag.putString('oy', fieldOffsetY.getText() || '1')
      tag.putString('oz', fieldOffsetZ.getText() || '0')
      tag.putString('yaw', fieldYaw.getText() || '0')
      tag.putString('pitch', fieldPitch.getText() || '0')

      // 判断：简单 NBT 是否启用 + 有值
      var simpleOn = fieldSimpleToggle.getText().trim() === '1'
      var se = fieldNbtEnergy.getText().trim()
      var sh = fieldNbtHealth.getText().trim()
      var si = fieldNbtInv.getText().trim()
      var sd = fieldNbtDecoy.getText().trim()
      var sa = fieldNbtAmmo.getText().trim()

      if (simpleOn && (se !== '' || sh !== '' || si !== '' || sd !== '')) {
        // 简单 NBT：只保存用户修改过的字段（跳过与默认值一致的）
        var nbtObj = {}
        if (se !== '' && parseInt(se, 10) !== DEFAULT_SIMPLE_NBT.Energy) nbtObj.Energy = parseInt(se, 10) || 0
        if (sh !== '' && parseFloat(sh) !== DEFAULT_SIMPLE_NBT.Health) nbtObj.Health = parseFloat(sh) || 500
        if (si !== '' && parseInt(si, 10) !== DEFAULT_SIMPLE_NBT.Invulnerable) nbtObj.Invulnerable = parseInt(si, 10) === 1 ? 1 : 0
        if (sd !== '' && parseInt(sd, 10) !== DEFAULT_SIMPLE_NBT.DecoyReady) nbtObj.DecoyReady = parseInt(sd, 10) === 1 ? 1 : 0
        tag.putString('nbt', JSON.stringify(nbtObj))
        tag.putString('nbtMode', 'simple')
      } else {
        // 简单 NBT 关闭 → 判断高级 NBT 是否被用户修改
        var advText = fieldDeployNBT.getText()
        if (advText && advText !== '' && advText !== '{}') {
          // 高级 NBT 已被用户修改 → 用高级 NBT
          tag.putString('nbt', advText)
          tag.putString('nbtMode', 'advanced')
        } else {
          // 高级 NBT 未修改 → 严格使用数据库模板
          tag.putString('nbt', '{}')
          tag.putString('nbtMode', 'none')
        }
      }
      // spawnWithAmmo：始终从简单 NBT 页取值，留空则用 tab2 的值
      if (sa !== '') tag.putString('swa', sa)
      // 同步 toggle 状态
      tag.putString('tog', fieldSimpleToggle.getText() || '0')
      root.sendMessage('save_config', tag)
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
    root.sendMessage('reset_config', new $CompoundTag())
  })
  btnRow.addChild(btnReset)

  // ── 立即部署按钮 ──
  var btnDeployNow = new Button()
  btnDeployNow.setText(Component.literal('§6⚡ 立即部署'))
  btnDeployNow.lss('padding', '3 10')
  btnDeployNow.setOnClick(function(clickEvent) {
    root.sendMessage('deploy_config', new $CompoundTag())
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
      // 根据 nbtMode 分流到独立字段
      var nbtMode = msg.getString('nbtMode') || 'advanced'
      if (nbtMode === 'simple') {
        // 解析 nbtRaw JSON → 写入独立 NBT 字段
        try {
          var nbtObj = JSON.parse(nbtRaw || '{}')
          if (nbtObj.Energy !== undefined) pd.putInt('nbtEnergy', nbtObj.Energy)
          if (nbtObj.Health !== undefined) pd.putFloat('nbtHealth', nbtObj.Health)
          if (nbtObj.Invulnerable !== undefined) pd.putByte('nbtInvulnerable', nbtObj.Invulnerable)
          if (nbtObj.DecoyReady !== undefined) pd.putByte('nbtDecoyReady', nbtObj.DecoyReady)
        } catch(e) {}
        pd.putString('deployNBT', '{}')
      } else if (nbtMode === 'advanced') {
        pd.putString('deployNBT', nbtRaw || '{}')
      } else {
        pd.putString('deployNBT', '{}')
      }
      pd.putString('nbtMode', nbtMode)
      // 持久化 toggle 状态
      var tog = msg.getString('tog')
      if (tog) pd.putByte('nbtSimpleToggle', tog === '1' ? 1 : 0)
      b.entity.setChanged()
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
      pd.putByte('spawnWithAmmo', DEFAULT_SIMPLE_NBT.SpawnWithAmmo)
      pd.putDouble('offsetX', 0.0)
      pd.putDouble('offsetY', 1.0)
      pd.putDouble('offsetZ', 0.0)
      pd.putFloat('yaw', 0.0)
      pd.putFloat('pitch', 0.0)
      pd.putString('deployNBT', '{}')
      pd.remove('nbtEnergy')
      pd.remove('nbtHealth')
      pd.remove('nbtInvulnerable')
      pd.remove('nbtDecoyReady')
      pd.remove('nbtSimpleToggle')
      pd.putString('nbtMode', 'none')
      b.entity.setChanged()
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

  // ═══════════════════════════════════════════════════════════════
  //  构建 ModularUI
  // ═══════════════════════════════════════════════════════════════
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
              if (name === 'db_categories') {
                // 数据库分类 + NBT模板：解析 {cats, nbt}
                var dbData = JSON.parse(val)
                var cats = dbData.cats || {}
                var keys = Object.keys(cats)
                if (keys.length > 0) {
                  // 存储 nbtTemplate 供简单 NBT 模式使用
                  global.__vdNbtTemplate = dbData.nbt || {}
                  // 根据当前 vehicleType 找到正确分类
                  var currentVT = fieldVehicleType.getText()
                  var targetCat = keys[0]
                  var targetVeh = ''
                  if (currentVT && currentVT !== '') {
                    for (var ci = 0; ci < keys.length; ci++) {
                      var vehList = cats[keys[ci]] || []
                      for (var vj = 0; vj < vehList.length; vj++) {
                        if (vehList[vj] === currentVT) {
                          targetCat = keys[ci]
                          targetVeh = currentVT
                          break
                        }
                      }
                      if (targetVeh) break
                    }
                  }
                  categorySelector.setCandidates(keys)
                  categorySelector.setSelected(targetCat)
                  vehicleSelector.setCandidates(cats[targetCat] || [])
                  if (targetVeh) {
                    vehicleSelector.setSelected(targetVeh)
                  } else if (cats[targetCat] && cats[targetCat].length > 0) {
                    vehicleSelector.setSelected(cats[targetCat][0])
                  }
                  global.__vdCategories = cats
                }
              } else {
                field.setText(String(val))
              }
              binding.getSyncValue().setSyncStrategy($SyncStrategy.NONE)
            } catch (e) {
              console.log('[SBW部署台] S2C 更新异常 ' + name + ': ' + e)
            }
          }
        })
      } catch (e) {
        console.log('[SBW部署台] S2C 绑定异常 ' + name + ': ' + e)
      }
    })(item.field, item.getter, item.name)
  }
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
