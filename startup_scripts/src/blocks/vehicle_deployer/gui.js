// ============================================================
// 载具部署台 - LDLib2 配置 GUI
//
// ★ 架构说明：
//   LDLib2 block UI 回调在客户端执行，global 缓存无法跨
//   服务端传递数据。因此本 GUI 不依赖任何预加载数据。
//   setOnServerClick 按钮回调在服务端执行，可通过
//   event.pos / event.level 回查部署台方块。
// ============================================================

// ========== Java 类引用 ==========

var $DataBindingBuilder = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.impl.DataBindingBuilder')
var $SyncStrategy = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.SyncStrategy')

// ========== 从 LDLib2 block UI 事件获取方块数据 ==========

function getBlockPD(event) {
  try {
    var pos = event.pos
    var level = event.level
    if (!pos || !level) return null
    var block = level.getBlock(pos.x, pos.y, pos.z)
    if (!block || !block.entity) return null
    return block.entity.persistentData
  } catch (e) {
    console.log('[部署台GUI] 获取方块数据失败: ' + e)
    return null
  }
}

// ========== UI 构建 ==========

LDLib2UI.block('kubejs:vehicle_deployer_cfg', event => {
  var player = event.player
  var fieldVals = {}

  // ── 数据绑定 ──
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

  function txt(name) { return (fieldVals[name] !== undefined && fieldVals[name] !== null) ? String(fieldVals[name]) : '' }
  function iVal(name, def) { var v = parseInt(txt(name), 10); return isNaN(v) ? def : v }
  function fVal(name, def) { var v = parseFloat(txt(name)); return isNaN(v) ? def : v }

  // ════════════════════════════════════════════════════════════
  //  输入字段
  // ════════════════════════════════════════════════════════════

  var fieldVehicleType = new TextField()
  fieldVehicleType.setText('')
  fieldVehicleType.lss('width', 240)
  bindField(fieldVehicleType, 'vt')

  var fieldRespawnDelay = new TextField()
  fieldRespawnDelay.setNumbersOnlyInt(20, 72000)
  fieldRespawnDelay.setText('600')
  fieldRespawnDelay.lss('width', 55)
  bindField(fieldRespawnDelay, 'rd')

  var fieldAutoRespawn = new TextField()
  fieldAutoRespawn.setNumbersOnlyInt(0, 1)
  fieldAutoRespawn.setText('1')
  fieldAutoRespawn.lss('width', 40)
  bindField(fieldAutoRespawn, 'ar')

  var fieldSpawnAmmo = new TextField()
  fieldSpawnAmmo.setNumbersOnlyInt(0, 1)
  fieldSpawnAmmo.setText('1')
  fieldSpawnAmmo.lss('width', 40)
  bindField(fieldSpawnAmmo, 'swa')

  var fieldOffsetX = new TextField()
  fieldOffsetX.setNumbersOnlyInt(-999, 999)
  fieldOffsetX.setText('0')
  fieldOffsetX.lss('width', 50)
  bindField(fieldOffsetX, 'ox')

  var fieldOffsetY = new TextField()
  fieldOffsetY.setNumbersOnlyInt(-999, 999)
  fieldOffsetY.setText('1')
  fieldOffsetY.lss('width', 50)
  bindField(fieldOffsetY, 'oy')

  var fieldOffsetZ = new TextField()
  fieldOffsetZ.setNumbersOnlyInt(-999, 999)
  fieldOffsetZ.setText('0')
  fieldOffsetZ.lss('width', 50)
  bindField(fieldOffsetZ, 'oz')

  var fieldYaw = new TextField()
  fieldYaw.setNumbersOnlyInt(-180, 180)
  fieldYaw.setText('0')
  fieldYaw.lss('width', 50)
  bindField(fieldYaw, 'yaw')

  var fieldPitch = new TextField()
  fieldPitch.setNumbersOnlyInt(-90, 90)
  fieldPitch.setText('0')
  fieldPitch.lss('width', 50)
  bindField(fieldPitch, 'pitch')

  var fieldDeployNBT = new TextField()
  fieldDeployNBT.setText('{}')
  fieldDeployNBT.lss('width', 250)
  fieldDeployNBT.lss('height', 100)
  bindField(fieldDeployNBT, 'nbt')

  // ════════════════════════════════════════════════════════════
  //  根容器 & TabView
  // ════════════════════════════════════════════════════════════
  var root = new UIElement()
  root.lss('width', 280)
  root.lss('padding', 6)

  root.addChild(new Label().setText(Component.literal('§6╔══ 载具部署台 ══╗')))
  root.addChild(sep())

  var tabView = new TabView()

  // ── 第1页：载具 ──
  var pg1 = new UIElement(); pg1.lss('padding', 4)
  pg1.addChild(new Label().setText(Component.literal('§e── 载具类型 ──')))
  pg1.addChild(new Label().setText(Component.literal('§7手动输入实体ID')))
  var r1 = new UIElement()
  r1.addChild(new Label().setText(Component.literal('§7ID:'))); r1.addChild(fieldVehicleType)
  pg1.addChild(r1)
  pg1.addChild(new Label().setText(Component.literal('§8例如: superbwarfare:t_90a')))
  tabView.addTab(new Tab().setText('载具'), pg1)

  // ── 第2页：基础 ──
  var pg2 = new UIElement(); pg2.lss('padding', 4)
  pg2.addChild(new Label().setText(Component.literal('§e── 部署参数 ──')))
  var dR = new UIElement(); dR.addChild(new Label().setText(Component.literal('§7重生延迟:'))); dR.addChild(fieldRespawnDelay); dR.addChild(new Label().setText(Component.literal(' tick')))
  pg2.addChild(dR); pg2.addChild(new Label().setText(Component.literal('§8(20tick=1s, 默认600=30s)')))
  var aR = new UIElement(); aR.addChild(new Label().setText(Component.literal('§7自动重生:'))); aR.addChild(fieldAutoRespawn); aR.addChild(new Label().setText(Component.literal(' (1=开)')))
  pg2.addChild(aR)
  var sR = new UIElement(); sR.addChild(new Label().setText(Component.literal('§7生成弹药:'))); sR.addChild(fieldSpawnAmmo); sR.addChild(new Label().setText(Component.literal(' (1=是)')))
  pg2.addChild(sR)
  tabView.addTab(new Tab().setText('基础'), pg2)

  // ── 第3页：坐标 ──
  var pg3 = new UIElement(); pg3.lss('padding', 4)
  pg3.addChild(new Label().setText(Component.literal('§e── 坐标偏移 ──')))
  function oR(l, f) { var r = new UIElement(); r.addChild(new Label().setText(Component.literal(l))); r.addChild(f); r.addChild(new Label().setText(Component.literal(' 格'))); pg3.addChild(r) }
  oR('§7X偏移:', fieldOffsetX); oR('§7Y偏移:', fieldOffsetY); oR('§7Z偏移:', fieldOffsetZ)
  var yR = new UIElement(); yR.addChild(new Label().setText(Component.literal('§7朝向(yaw):'))); yR.addChild(fieldYaw); yR.addChild(new Label().setText(Component.literal(' °')))
  pg3.addChild(yR)
  var pR = new UIElement(); pR.addChild(new Label().setText(Component.literal('§7俯仰(pitch):'))); pR.addChild(fieldPitch); pR.addChild(new Label().setText(Component.literal(' °')))
  pg3.addChild(pR)
  tabView.addTab(new Tab().setText('坐标'), pg3)

  // ── 第4页：NBT ──
  var pg4 = new UIElement(); pg4.lss('padding', 4)
  pg4.addChild(new Label().setText(Component.literal('§e── deployNBT ──')))
  pg4.addChild(new Label().setText(Component.literal('§7留空 {} 使用数据库默认值')))
  pg4.addChild(new Label().setText(Component.literal(' '))); pg4.addChild(fieldDeployNBT)
  tabView.addTab(new Tab().setText('⚡NBT'), pg4)

  root.addChild(tabView)
  root.addChild(sep())

  // ════════════════════════════════════════════════════════════
  //  按钮
  // ════════════════════════════════════════════════════════════
  var btnRow = new UIElement()

  // ── 保存 ──
  var btnSave = new Button()
  btnSave.setText(Component.literal('§a✔ 保存'))
  btnSave.lss('padding', '3 10')
  btnSave.setOnServerClick(function(ce) {
    var pd = getBlockPD(event)
    if (!pd) { tell(player, '§c[部署台] 无法获取方块'); return }
    var vt = txt('vt'), nbtRaw = txt('nbt') || '{}'
    if (nbtRaw !== '{}') { try { JSON.parse(nbtRaw) } catch(e) { tell(player, '§cNBT格式错误'); return } }
    pd.putString('vehicleType', vt)
    pd.putInt('respawnDelay', Math.max(20, iVal('rd', 600)))
    pd.putByte('autoRespawn', iVal('ar', 1) === 1 ? 1 : 0)
    pd.putByte('spawnWithAmmo', iVal('swa', 1) === 1 ? 1 : 0)
    pd.putDouble('offsetX', fVal('ox', 0)); pd.putDouble('offsetY', fVal('oy', 1)); pd.putDouble('offsetZ', fVal('oz', 0))
    pd.putFloat('yaw', fVal('yaw', 0)); pd.putFloat('pitch', fVal('pitch', 0))
    pd.putString('deployNBT', nbtRaw)
    try { var s = player.getServer(); var p = event.pos; if (s) s.runCommandSilent('data merge block ' + p.x + ' ' + p.y + ' ' + p.z + ' {inited:1}') } catch(_) {}
    tell(player, '§a✔ 已保存')
  })
  btnRow.addChild(btnSave)

  // ── 重置 ──
  var btnReset = new Button()
  btnReset.setText(Component.literal('§e↻ 重置'))
  btnReset.lss('padding', '3 10')
  btnReset.setOnServerClick(function(ce) {
    var pd = getBlockPD(event)
    if (!pd) { tell(player, '§c[部署台] 无法获取方块'); return }
    pd.putInt('respawnDelay', 600); pd.putByte('autoRespawn', 1); pd.putByte('spawnWithAmmo', 1)
    pd.putDouble('offsetX', 0); pd.putDouble('offsetY', 1); pd.putDouble('offsetZ', 0)
    pd.putFloat('yaw', 0); pd.putFloat('pitch', 0); pd.putString('deployNBT', '{}')
    try { var s = player.getServer(); var p = event.pos; if (s) s.runCommandSilent('data merge block ' + p.x + ' ' + p.y + ' ' + p.z + ' {inited:1}') } catch(_) {}
    tell(player, '§a✔ 已重置')
  })
  btnRow.addChild(btnReset)

  // ── 部署 ──
  var btnDeploy = new Button()
  btnDeploy.setText(Component.literal('§6⚡ 部署'))
  btnDeploy.lss('padding', '3 10')
  btnDeploy.setOnServerClick(function(ce) {
    var pd = getBlockPD(event)
    if (!pd) { tell(player, '§c[部署台] 无法获取方块'); return }
    if (!pd.contains('vehicleType') || pd.getString('vehicleType') === '') { tell(player, '§c请先配置载具类型'); return }
    pd.putBoolean('PendingDeploy', true)
    try { var s = player.getServer(); var p = event.pos; if (s) s.runCommandSilent('data merge block ' + p.x + ' ' + p.y + ' ' + p.z + ' {inited:1}') } catch(_) {}
    tell(player, '§e⏳ 部署已提交')
  })
  btnRow.addChild(btnDeploy)

  root.addChild(btnRow)
  root.addChild(new InventorySlots())
  event.modularUI = ModularUI.of(UI.of(root), player)
})

// ══════════════════════════════════════════════════════════════
//  辅助函数
// ══════════════════════════════════════════════════════════════

function sep() { var s = new Label().setText(Component.literal('§8━━━━━')); s.lss('width','100%'); s.lss('overflow','hidden'); return s }
function tell(p, m) { try { p.displayClientMessage(Component.literal(m), false) } catch(_) {} }
