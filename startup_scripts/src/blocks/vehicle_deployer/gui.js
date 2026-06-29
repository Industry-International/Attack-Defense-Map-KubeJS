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
        vehicleType: '', team: '', respawnDelay: 600, autoRespawn: 1,
        offsetX: 0, offsetY: 1, offsetZ: 0, yaw: 0, pitch: 0,
        deployNBT: '{}', displayName: '', deployedUUID: '', cooldownEnd: 0
      }
    }
  }

  var cfg = cacheData.config || {}
  var pos = cacheData.pos || { x: 0, y: 0, z: 0 }
  var dim = cacheData.dim || 'minecraft:overworld'

  // ── 准备车辆数据库 ──
  // 从 server_scripts 全局读取（在 getVehicleDB 中已加载）
  // 注：startup_scripts 无法直接调用 server 侧函数，所以数据通过 cache 传递
  // 这里直接在 GUI 中内置常用载具列表供选择

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
  var fieldTeam = new TextField()
  fieldTeam.setText(cfg.team || '')
  fieldTeam.lss('width', 100)
  bindField(fieldTeam, 'team')

  var fieldRespawnDelay = new TextField()
  fieldRespawnDelay.setNumbersOnlyInt(20, 72000)
  fieldRespawnDelay.setText(String(cfg.respawnDelay || 600))
  fieldRespawnDelay.lss('width', 55)
  bindField(fieldRespawnDelay, 'rd')

  var fieldAutoRespawn = new TextField()
  fieldAutoRespawn.setNumbersOnlyInt(0, 1)
  fieldAutoRespawn.setText(String(cfg.autoRespawn || 1))
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
  //  第1页：车辆选择（紧凑下拉式）
  // ════════════════════════════════════════════════════════════
  var page1 = new UIElement()
  page1.lss('padding', 4)

  page1.addChild(new Label().setText(Component.literal('§e── 载具类型 ──')))

  // 所有可用载具列表（从 vehicle_db 按类型组织）
  var vehicleList = [
    { type: '坦克', ids: ['superbwarfare:t_90a','superbwarfare:ztz_99a','superbwarfare:m_1a_2','superbwarfare:annihilator','mcsp:m1a2','mcsp:t80bv_camo','mcsp:t80u_camo','mcsp:t90a_green'] },
    { type: 'APC/步战', ids: ['superbwarfare:bmp_2','superbwarfare:bradley','superbwarfare:lav_25','superbwarfare:type_63','mcsp:bmd_4','mcsp:m3a3_bradley','mcsp:zbd04a_green','mcsp:sprut'] },
    { type: '直升机/机', ids: ['superbwarfare:mi_28','superbwarfare:ah_6','superbwarfare:a_10a','superbwarfare:ju_87','superbwarfare:kv_16'] },
    { type: '火炮/AA', ids: ['superbwarfare:plz_05','superbwarfare:bl_132','superbwarfare:mk_42','superbwarfare:lav_ad','superbwarfare:mle_1934','mcsp:tos_1a_green','mcsp:typhoon_30'] },
    { type: '其他', ids: ['superbwarfare:truck','superbwarfare:tow','superbwarfare:mortar','superbwarfare:speedboat','superbwarfare:drone','superbwarfare:wheel_chair','superbwarfare:laser_tower','superbwarfare:hpj_11'] },
  ]

  // 扁平化索引（用于上下翻页）
  var allVehiclesFlat = []
  for (var gi = 0; gi < vehicleList.length; gi++) {
    for (var vi = 0; vi < vehicleList[gi].ids.length; vi++) {
      allVehiclesFlat.push(vehicleList[gi].ids[vi])
    }
  }

  // 当前选中的索引
  var currentIdx = 0
  var currentVT = fieldVehicleType.getText()
  if (currentVT && currentVT !== '') {
    var found = -1
    for (var i = 0; i < allVehiclesFlat.length; i++) {
      if (allVehiclesFlat[i] === currentVT) { found = i; break }
    }
    if (found >= 0) currentIdx = found
  }

  // 上一辆按钮
  var btnPrev = new Button()
  btnPrev.setText(Component.literal('§7◀'))
  btnPrev.lss('padding', '2 6')
  btnPrev.setOnServerClick((function(idx) {
    return function(ce) {
      var newIdx = (idx - 1 + allVehiclesFlat.length) % allVehiclesFlat.length
      var newVid = allVehiclesFlat[newIdx]
      fieldVals['vt'] = newVid
      ce.player.displayClientMessage(Component.literal('§a已选择: ' + newVid), false)
    }
  })(currentIdx))

  // 当前车辆名标签（不可交互，只是展示）
  var currentLabel = new Label()
  var currName = allVehiclesFlat[currentIdx] ? allVehiclesFlat[currentIdx].split(':').pop() : '未选择'
  currentLabel.setText(Component.literal('§f' + currName))
  currentLabel.lss('width', 80)
  currentLabel.textStyle(function(style) { style.textAlignHorizontal('center') })

  // 下一辆按钮
  var btnNext = new Button()
  btnNext.setText(Component.literal('§7▶'))
  btnNext.lss('padding', '2 6')
  btnNext.setOnServerClick((function(idx) {
    return function(ce) {
      var newIdx = (idx + 1) % allVehiclesFlat.length
      var newVid = allVehiclesFlat[newIdx]
      fieldVals['vt'] = newVid
      ce.player.displayClientMessage(Component.literal('§a已选择: ' + newVid), false)
    }
  })(currentIdx))

  // 选择器行：◀ 名称 ▶
  var selectorRow = new UIElement()
  selectorRow.addChild(btnPrev)
  selectorRow.addChild(currentLabel)
  selectorRow.addChild(btnNext)
  page1.addChild(selectorRow)

  page1.addChild(new Label().setText(Component.literal(' ')))

  // 底部 ID 输入框
  var vtRow = new UIElement()
  vtRow.addChild(new Label().setText(Component.literal('§7ID:')))
  vtRow.addChild(fieldVehicleType)
  page1.addChild(vtRow)
  page1.addChild(new Label().setText(Component.literal('§8可直接输入完整ID，如 superbwarfare:t_90a')))

  var tab1 = new Tab()
  tab1.setText('载具')
  tabView.addTab(tab1, page1)

  // ════════════════════════════════════════════════════════════
  //  第2页：基础设置
  // ════════════════════════════════════════════════════════════
  var page2 = new UIElement()
  page2.lss('padding', 4)

  page2.addChild(new Label().setText(Component.literal('§e── 部署基础参数 ──')))

  var teamRow = new UIElement()
  teamRow.addChild(new Label().setText(Component.literal('§7队伍:')))
  teamRow.addChild(fieldTeam)
  page2.addChild(teamRow)

  page2.addChild(new Label().setText(Component.literal(' ')))

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

  // ════════════════════════════════════════════════════════════
  //  第4页：NBT 配置
  // ════════════════════════════════════════════════════════════
  var page4 = new UIElement()
  page4.lss('padding', 4)

  page4.addChild(new Label().setText(Component.literal('§e── deployNBT 配置 ──')))
  page4.addChild(new Label().setText(Component.literal('§7JSON 格式的部署 NBT 模板')))
  page4.addChild(new Label().setText(Component.literal(' ')))
  page4.addChild(new Label().setText(Component.literal('§8例如：')))
  page4.addChild(new Label().setText(Component.literal('§7{\"Energy\":10000000,\"Health\":500.0}')))
  page4.addChild(new Label().setText(Component.literal(' ')))
  page4.addChild(fieldDeployNBT)

  var tab4 = new Tab()
  tab4.setText('NBT')
  tabView.addTab(tab4, page4)

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
      var team = fieldVals['team'] !== undefined ? String(fieldVals['team']) : fieldTeam.getText()
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
      pd.putString('team', team)
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
