// ============================================================
// 载具部署台 - LDLib2 配置 GUI
//
// 架构（2026-06-30 重构 v2）：
//   移除不可靠的 C2S DataBinding（KubeJS 7 Rhino 下不兼容）
//   改用 LDLib2 TextField 自带的 Menu 模式同步 + setOnServerClick
//
//   数据流：
//     【客户端】用户输入 → TextField 自动同步到服务端
//     【服务端】setOnServerClick → field.getText() 读取同步后的值 → 写入 persistentData
//
//   注意：TextField 在 Menu 模式下自带 C/S 文本同步，无需额外 DataBinding
// ============================================================

var $HashMap = Java.loadClass('java.util.HashMap')
global.vehicleDeployerCache = new $HashMap()

// 硬编码载具分类（与服务端 data/sbw_vehicle_db/ 同步，供 GU 下拉菜单使用）
// 客户端只做展示用，实际数据校验在服务端保存时进行
const VEHICLE_CATEGORIES = [
  { display: '主战坦克',      ids: ['superbwarfare:t_90a','superbwarfare:ztz_99a','superbwarfare:m_1a_2','superbwarfare:yx_100','superbwarfare:plz_05','superbwarfare:prism_tank','mcsp:m1a2','mcsp:m1a2_sand','mcsp:m1a2_sep','mcsp:m1a2_sep_sand','mcsp:sprut','mcsp:sprut_camo','mcsp:t80bv_camo','mcsp:t80bv_green','mcsp:t80bv_kantemir','mcsp:t80bv_pixel','mcsp:t80u_camo','mcsp:t80u_green','mcsp:t80u_kantemir','mcsp:t80u_pixel','mcsp:t90a_green','mcsp:t90a_tricolor','mcsp:ztz99a_sand'] },
  { display: '步兵战车/装甲车', ids: ['superbwarfare:bmp_2','superbwarfare:bradley','superbwarfare:lav_150','superbwarfare:lav_25','mcsp:bmd_4','mcsp:bmd_4_camo','mcsp:m3a3_bradley','mcsp:m3a3_bradley_busk_ii','mcsp:m3a3_bradley_busk_iii','mcsp:m3a3_bradley_busk_iii_sand','mcsp:m3a3_bradley_busk_ii_sand','mcsp:m3a3_bradley_sand','mcsp:zbd04a_green','mcsp:zbd04a_sand'] },
  { display: '火炮/火箭炮',    ids: ['superbwarfare:annihilator','superbwarfare:bl_132','superbwarfare:mk_42','superbwarfare:mle_1934','superbwarfare:mortar','superbwarfare:type_63','mcsp:tos_1a_green','mcsp:tos_1a_tricolor'] },
  { display: '多功能车/运输车', ids: ['superbwarfare:sodayo_pick_up','superbwarfare:sodayo_pick_up_hmg','superbwarfare:sodayo_pick_up_rocket','superbwarfare:sodayo_pick_up_tow','superbwarfare:truck','superbwarfare:wheel_chair','mcsp:humvee_carc','mcsp:humvee_mk19','mcsp:humvee_sand','mcsp:humvee_standart_camo','mcsp:typhoon_30','mcsp:typhoon_tricolor_30','mcsp:ural_green','mcsp:ural_tricolor'] },
  { display: '固定翼飞机',    ids: ['superbwarfare:a_10a','superbwarfare:ju_87','superbwarfare:kv_16','superbwarfare:tom_6'] },
  { display: '直升机',        ids: ['superbwarfare:ah_6','superbwarfare:mi_28'] },
  { display: '固定防御',      ids: ['superbwarfare:hpj_11','superbwarfare:laser_tower','superbwarfare:tow','superbwarfare:waveforce_tower'] },
  { display: '防空单位',      ids: ['superbwarfare:lav_ad'] },
  { display: '无人机',        ids: ['superbwarfare:drone'] },
  { display: '水上载具',      ids: ['superbwarfare:speedboat','superbwarfare:tiny_speedboat'] }
]

// ========== LDLib2 UI 注册 ==========

LDLib2UI.block('kubejs:vehicle_deployer_cfg', event => {
  var player = event.player
  var uuid = player.uuid

  // 从缓存读取方块位置（由 server_scripts 的右键事件填充）
  var cacheData = null
  try {
    var raw = global.vehicleDeployerCache.get(uuid)
    if (raw) cacheData = JSON.parse(raw)
  } catch (e) {}

  // 缓存失效则用默认空值
  var pos = { x: 0, y: 0, z: 0 }
  var dim = 'minecraft:overworld'
  if (cacheData) {
    pos = cacheData.pos || pos
    dim = cacheData.dim || dim
  }

  // ── 输入字段 ──
  var fieldVehicleType = new TextField()
  fieldVehicleType.setText('')
  fieldVehicleType.lss('width', 180)

  var fieldRespawnDelay = new TextField()
  fieldRespawnDelay.setNumbersOnlyInt(20, 72000)
  fieldRespawnDelay.setText('600')
  fieldRespawnDelay.lss('width', 55)

  var fieldAutoRespawn = new TextField()
  fieldAutoRespawn.setNumbersOnlyInt(0, 1)
  fieldAutoRespawn.setText('1')
  fieldAutoRespawn.lss('width', 40)

  var fieldSpawnAmmo = new TextField()
  fieldSpawnAmmo.setNumbersOnlyInt(0, 1)
  fieldSpawnAmmo.setText('1')
  fieldSpawnAmmo.lss('width', 40)

  var fieldOffsetX = new TextField()
  fieldOffsetX.setNumbersOnlyInt(-999, 999)
  fieldOffsetX.setText('0')
  fieldOffsetX.lss('width', 50)

  var fieldOffsetY = new TextField()
  fieldOffsetY.setNumbersOnlyInt(-999, 999)
  fieldOffsetY.setText('1')
  fieldOffsetY.lss('width', 50)

  var fieldOffsetZ = new TextField()
  fieldOffsetZ.setNumbersOnlyInt(-999, 999)
  fieldOffsetZ.setText('0')
  fieldOffsetZ.lss('width', 50)

  var fieldYaw = new TextField()
  fieldYaw.setNumbersOnlyInt(-180, 180)
  fieldYaw.setText('0')
  fieldYaw.lss('width', 50)

  var fieldPitch = new TextField()
  fieldPitch.setNumbersOnlyInt(-90, 90)
  fieldPitch.setText('0')
  fieldPitch.lss('width', 50)

  var fieldDeployNBT = new TextField()
  fieldDeployNBT.setText('{}')
  fieldDeployNBT.lss('width', 250)
  fieldDeployNBT.lss('height', 100)

  // ── 构建分类候选列表（从硬编码常量生成） ──
  var categoryNames = []
  var allVehicles = {}
  for (var ci = 0; ci < VEHICLE_CATEGORIES.length; ci++) {
    categoryNames.push(VEHICLE_CATEGORIES[ci].display)
    allVehicles[VEHICLE_CATEGORIES[ci].display] = VEHICLE_CATEGORIES[ci].ids
  }

  // ════════════════════════════════════════════════════════════
  //  根容器
  // ════════════════════════════════════════════════════════════
  var root = new UIElement()
  root.lss('width', 280)
  root.lss('padding', 6)

  root.addChild(new Label().setText(Component.literal('§6╔══ 载具部署台配置 ══╗')))
  root.addChild(sep())

  var tabView = new TabView()

  // ════════════════════════════════════════════════════════════
  //  第1页：车辆选择（硬编码下拉）
  // ════════════════════════════════════════════════════════════
  var pg1 = new UIElement(); pg1.lss('padding', 4)
  pg1.addChild(new Label().setText(Component.literal('§e── 选择载具 ──')))

  var catSelector = new Selector()
  catSelector.setCandidates(categoryNames)
  catSelector.lss('width', '100%')

  var vehSelector = new Selector()
  vehSelector.lss('width', '100%')

  catSelector.setOnValueChanged(function(newCat) {
    if (newCat && allVehicles[newCat]) {
      vehSelector.setCandidates(allVehicles[newCat])
      if (allVehicles[newCat].length > 0) {
        vehSelector.setSelected(allVehicles[newCat][0])
        fieldVehicleType.setText(allVehicles[newCat][0])
      }
    }
  })
  vehSelector.setOnValueChanged(function(newVid) {
    if (newVid) fieldVehicleType.setText(newVid)
  })

  // 默认选中第一个分类的第一个载具
  if (categoryNames.length > 0) {
    catSelector.setSelected(categoryNames[0])
    if (allVehicles[categoryNames[0]] && allVehicles[categoryNames[0]].length > 0) {
      vehSelector.setSelected(allVehicles[categoryNames[0]][0])
    }
  }

  var catRow = new UIElement()
  catRow.addChild(new Label().setText(Component.literal('§7类别:')))
  catRow.addChild(catSelector)
  pg1.addChild(catRow)

  var vehRow = new UIElement()
  vehRow.addChild(new Label().setText(Component.literal('§7载具:')))
  vehRow.addChild(vehSelector)
  pg1.addChild(vehRow)

  // ID 输入框（手动输入备用）
  var vtRow = new UIElement()
  vtRow.addChild(new Label().setText(Component.literal('§7ID:')))
  vtRow.addChild(fieldVehicleType)
  pg1.addChild(vtRow)
  pg1.addChild(new Label().setText(Component.literal('§8从下拉选择或手动输入完整 ID')))

  tabView.addTab(new Tab().setText('载具'), pg1)

  // ════════════════════════════════════════════════════════════
  //  第2页：基础
  // ════════════════════════════════════════════════════════════
  var pg2 = new UIElement(); pg2.lss('padding', 4)
  pg2.addChild(new Label().setText(Component.literal('§e── 部署参数 ──')))
  var dR = new UIElement(); dR.addChild(new Label().setText(Component.literal('§7重生延迟:'))); dR.addChild(fieldRespawnDelay); dR.addChild(new Label().setText(Component.literal(' tick')))
  pg2.addChild(dR); pg2.addChild(new Label().setText(Component.literal('§8(20tick=1s, 默认600=30s)')))
  var aR = new UIElement(); aR.addChild(new Label().setText(Component.literal('§7自动重生:'))); aR.addChild(fieldAutoRespawn); aR.addChild(new Label().setText(Component.literal(' (1=开)')))
  pg2.addChild(aR)
  var sR = new UIElement(); sR.addChild(new Label().setText(Component.literal('§7生成弹药:'))); sR.addChild(fieldSpawnAmmo); sR.addChild(new Label().setText(Component.literal(' (1=是)')))
  pg2.addChild(sR)
  tabView.addTab(new Tab().setText('基础'), pg2)

  // ════════════════════════════════════════════════════════════
  //  第3页：坐标
  // ════════════════════════════════════════════════════════════
  var pg3 = new UIElement(); pg3.lss('padding', 4)
  pg3.addChild(new Label().setText(Component.literal('§e── 坐标偏移 ──')))
  pg3.addChild(new Label().setText(Component.literal('§8相对于方块位置的偏移量（格）')))
  function oR(l, f) { var r = new UIElement(); r.addChild(new Label().setText(Component.literal(l))); r.addChild(f); r.addChild(new Label().setText(Component.literal(' 格'))); pg3.addChild(r) }
  oR('§7X偏移:', fieldOffsetX); oR('§7Y偏移:', fieldOffsetY); oR('§7Z偏移:', fieldOffsetZ)
  var yR = new UIElement(); yR.addChild(new Label().setText(Component.literal('§7朝向(yaw):'))); yR.addChild(fieldYaw); yR.addChild(new Label().setText(Component.literal(' °')))
  pg3.addChild(yR)
  var pR = new UIElement(); pR.addChild(new Label().setText(Component.literal('§7俯仰(pitch):'))); pR.addChild(fieldPitch); pR.addChild(new Label().setText(Component.literal(' °')))
  pg3.addChild(pR)
  tabView.addTab(new Tab().setText('坐标'), pg3)

  // ════════════════════════════════════════════════════════════
  //  第4页：NBT
  // ════════════════════════════════════════════════════════════
  var pg4 = new UIElement(); pg4.lss('padding', 4)
  pg4.addChild(new Label().setText(Component.literal('§e── deployNBT ──')))
  pg4.addChild(new Label().setText(Component.literal('§7留空 {} 使用数据库默认值')))
  pg4.addChild(new Label().setText(Component.literal(' '))); pg4.addChild(fieldDeployNBT)
  tabView.addTab(new Tab().setText('⚡NBT'), pg4)

  root.addChild(tabView)
  root.addChild(sep())

  // ════════════════════════════════════════════════════════════
  //  按钮（setOnServerClick 在服务端执行）
  // ════════════════════════════════════════════════════════════
  var btnRow = new UIElement()

  // ── 保存（写入 NBT 标记，由 server 侧 blockEntityTick 正式提交） ──
  var btnSave = new Button()
  btnSave.setText(Component.literal('§a✔ 保存'))
  btnSave.lss('padding', '3 10')
  btnSave.setOnServerClick(function(ce) {
    var server = player.getServer()
    if (!server) { tell(player, '§c[部署台] 无法获取服务端'); return }
    var raw = global.vehicleDeployerCache.get(uuid)
    if (!raw) { tell(player, '§c[部署台] 缓存失效'); return }
    var data = JSON.parse(raw)
    var level = server.getLevel(data.dim || 'minecraft:overworld')
    if (!level) { tell(player, '§c[部署台] 无法获取维度'); return }
    var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
    if (!block || !block.entity) { tell(player, '§c[部署台] 方块已不存在'); return }
    var pd = block.entity.persistentData
    // ★ 读取所有字段值
    var vt = fieldVehicleType.getText()
    var rd = safeParseInt(fieldRespawnDelay, 600)
    var ar = safeParseInt(fieldAutoRespawn, 1)
    var swa = safeParseInt(fieldSpawnAmmo, 1)
    var ox = safeParseFloat(fieldOffsetX, 0)
    var oy = safeParseFloat(fieldOffsetY, 1)
    var oz = safeParseFloat(fieldOffsetZ, 0)
    var yaw = safeParseFloat(fieldYaw, 0)
    var pitch = safeParseFloat(fieldPitch, 0)
    var nbtRaw = fieldDeployNBT.getText()
    if (nbtRaw && nbtRaw !== '{}') { try { JSON.parse(nbtRaw) } catch(e) { tell(player, '§cNBT格式错误'); return } }
    // ★ 存入 JSON 对象，写入 NBT 标记
    var saveData = JSON.stringify({
      vehicleType: vt, respawnDelay: rd, autoRespawn: ar === 1 ? 1 : 0,
      spawnWithAmmo: swa === 1 ? 1 : 0,
      offsetX: ox, offsetY: oy, offsetZ: oz,
      yaw: yaw, pitch: pitch, deployNBT: nbtRaw || '{}'
    })
    pd.putString('PendingSaveConfig', saveData)
    pd.putBoolean('PendingSave', true)
    block.entity.setChanged()
    tell(player, '§e⏳ 保存请求已提交...')
  })
  btnRow.addChild(btnSave)

  // ── 重置 ──
  var btnReset = new Button()
  btnReset.setText(Component.literal('§e↻ 重置'))
  btnReset.lss('padding', '3 10')
  btnReset.setOnServerClick(function(ce) {
    var server = player.getServer()
    if (!server) return
    var raw = global.vehicleDeployerCache.get(uuid)
    if (!raw) { tell(player, '§c[部署台] 缓存失效'); return }
    var data = JSON.parse(raw)
    var level = server.getLevel(data.dim || 'minecraft:overworld')
    if (!level) return
    var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
    if (!block || !block.entity) return
    var pd = block.entity.persistentData
    pd.putInt('respawnDelay', 600); pd.putByte('autoRespawn', 1); pd.putByte('spawnWithAmmo', 1)
    pd.putDouble('offsetX', 0); pd.putDouble('offsetY', 1); pd.putDouble('offsetZ', 0)
    pd.putFloat('yaw', 0); pd.putFloat('pitch', 0); pd.putString('deployNBT', '{}')
    block.entity.setChanged()
    tell(player, '§a✔ 已重置')
  })
  btnRow.addChild(btnReset)

  // ── 部署 ──
  var btnDeploy = new Button()
  btnDeploy.setText(Component.literal('§6⚡ 部署'))
  btnDeploy.lss('padding', '3 10')
  btnDeploy.setOnServerClick(function(ce) {
    var server = player.getServer()
    if (!server) return
    var raw = global.vehicleDeployerCache.get(uuid)
    if (!raw) { tell(player, '§c[部署台] 缓存失效'); return }
    var data = JSON.parse(raw)
    var level = server.getLevel(data.dim || 'minecraft:overworld')
    if (!level) return
    var block = level.getBlock(data.pos.x, data.pos.y, data.pos.z)
    if (!block || !block.entity) { tell(player, '§c[部署台] 方块已不存在'); return }
    var pd = block.entity.persistentData
    if (!pd.contains('vehicleType') || pd.getString('vehicleType') === '') { tell(player, '§c请先配置载具类型'); return }
    pd.putBoolean('PendingDeploy', true)
    block.entity.setChanged()
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

function makeSeparator() {
  var s = new Label().setText(Component.literal('§8━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
  s.lss('width','100%'); s.lss('overflow','hidden')
  return s
}
function sep() { return makeSeparator() }
function safeParseInt(field, defaultVal) {
  var v = parseInt(field.getText(), 10); return isNaN(v) ? defaultVal : Math.max(0, v)
}
function safeParseFloat(field, defaultVal) {
  var v = parseFloat(field.getText()); return isNaN(v) ? defaultVal : v
}
function tell(p, m) { try { p.displayClientMessage(Component.literal(m), false) } catch(_) {} }
