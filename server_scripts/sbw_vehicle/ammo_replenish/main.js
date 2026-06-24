// ============================================================
// SBW 载具 - 弹药补充模块 核心逻辑
//
// 依赖：
//   父模块: config.js（VEHICLE_CFG / SBW_VEHICLE_CONFIG）
//           tools/（misc.js → findVehicleConfig / extractVehicleIdFromEntity）
//   本模块: a_config.js（AMMO_REPLENISH_CONFIG）
//
// 功能：
//   1. 自动扫描：每个弹药箱通过 BlockEntityTick 自行驱动，
//      以自身坐标为中心、AABB 获取配置范围内的实体，
//      检测到匹配的 SBW 载具即直接补充弹药。
//      区块未加载时 tick 自动暂停，无需手动追踪位置。
//   2. 右键交互：像木桶一样打开（仅触发一次），2秒后自动关闭，无GUI
//
// 注意：
//   - 父模块仅用于读取数据（findVehicleConfig、extractVehicleIdFromEntity 均为只读）
//   - 不调用父模块中带状态的工具（如 state_machine、persist 等）
//   - 补充逻辑完全独立实现，直接操作实体 NBT
// ============================================================

var $AABB = Java.loadClass('net.minecraft.world.phys.AABB')

// ============================================================
// 载具弹药检测
// ============================================================

function getVehicleAmmoSummary(nbt) {
  let summary = {}
  try {
    let inv = nbt.get('Inventory')
    if (!inv) return summary
    let items = inv.getList('Items', 10)
    if (!items) return summary
    for (let i = 0; i < items.size(); i++) {
      let item = items.get(i)
      let id = item.getString('id')
      let count = item.getInt('count')
      if (id && (id.indexOf('ammo') !== -1 || id.indexOf('shell') !== -1
          || id.indexOf('missile') !== -1 || id.indexOf('rocket') !== -1)) {
        summary[id] = (summary[id] || 0) + count
      }
    }
  } catch(e) { sbwError('[弹药补充] 读取载具弹药摘要时出错:', e) }
  return summary
}

function getDeployAmmoSummary(deployNBT) {
  let summary = {}
  if (!deployNBT || !deployNBT.Inventory || !deployNBT.Inventory.Items) return summary
  for (let i = 0; i < deployNBT.Inventory.Items.length; i++) {
    let item = deployNBT.Inventory.Items[i]
    let id = item.id
    if (id && (id.indexOf('ammo') !== -1 || id.indexOf('shell') !== -1
        || id.indexOf('missile') !== -1 || id.indexOf('rocket') !== -1)) {
      summary[id] = (summary[id] || 0) + (item.count || 0)
    }
  }
  return summary
}

function inventoryNeedsAmmo(nbt, vehicleCfg) {
  let deployNBT = vehicleCfg.deployNBT
  if (!deployNBT || !deployNBT.Inventory) return false
  let current = getVehicleAmmoSummary(nbt)
  let reference = getDeployAmmoSummary(deployNBT)
  let threshold = AMMO_REPLENISH_CONFIG.replenishThreshold / 100.0
  for (let ammoId in reference) {
    if (!reference.hasOwnProperty(ammoId)) continue
    if ((current[ammoId] || 0) < reference[ammoId] * threshold) return true
  }
  return false
}

function weaponNeedsAmmo(nbt, vehicleCfg) {
  let deployNBT = vehicleCfg.deployNBT
  if (!deployNBT || !deployNBT.WeaponState) return false
  let threshold = AMMO_REPLENISH_CONFIG.weaponAmmoThreshold
  let ws = nbt.get('WeaponState')
  if (!ws) return true
  for (let wk in deployNBT.WeaponState) {
    if (!deployNBT.WeaponState.hasOwnProperty(wk)) continue
    let dw = deployNBT.WeaponState[wk]
    if (!dw.components) continue
    let dcd = dw.components['minecraft:custom_data']
    if (!dcd || !dcd.GunData || dcd.GunData.Ammo === undefined) continue
    try {
      let cw = ws.getCompound(wk); if (!cw) return true
      let cc = cw.getCompound('components'); if (!cc) return true
      let ccd = cc.getCompound('minecraft:custom_data'); if (!ccd) return true
      let gd = ccd.getCompound('GunData'); if (!gd) return true
      if (gd.getInt('Ammo') < threshold) return true
    } catch(e) { return true }
  }
  return false
}

function vehicleNeedsReplenish(entity, vehicleCfg) {
  let nbt = entity.getNbt()
  if (!nbt) return false
  return inventoryNeedsAmmo(nbt, vehicleCfg) || weaponNeedsAmmo(nbt, vehicleCfg)
}

// ============================================================
// 核心：执行弹药补充（直接设定模式）
// ============================================================

function replenishVehicle(server, entity, vehicleCfg) {
  let deployNBT = vehicleCfg.deployNBT
  if (!deployNBT) return false
  let nbt = entity.getNbt()
  if (!nbt) return false

  // Inventory 弹药
  if (deployNBT.Inventory && deployNBT.Inventory.Items) {
    let inv = nbt.get('Inventory')
    if (!inv) { inv = new $CompoundTag(); nbt.put('Inventory', inv) }
    let newList = new $ListTag()
    for (let i = 0; i < deployNBT.Inventory.Items.length; i++) {
      let r = deployNBT.Inventory.Items[i]
      let item = new $CompoundTag()
      item.putInt('Slot', r.Slot)
      item.putInt('count', r.count)
      item.putString('id', r.id)
      newList.add(item)
    }
    inv.put('Items', newList)
  }

  // WeaponState 预装弹
  if (deployNBT.WeaponState) {
    let ws = nbt.get('WeaponState')
    if (!ws) { ws = new $CompoundTag(); nbt.put('WeaponState', ws) }
    for (let wk in deployNBT.WeaponState) {
      if (!deployNBT.WeaponState.hasOwnProperty(wk)) continue
      let dw = deployNBT.WeaponState[wk]
      if (!dw.components) continue
      let dcd = dw.components['minecraft:custom_data']
      if (!dcd || !dcd.GunData || dcd.GunData.Ammo === undefined) continue
      try {
        let wc = ws.getCompound(wk)
        if (!wc) { wc = new $CompoundTag(); ws.put(wk, wc) }
        let comp = wc.getCompound('components')
        if (!comp) { comp = new $CompoundTag(); wc.put('components', comp) }
        let cd = comp.getCompound('minecraft:custom_data')
        if (!cd) { cd = new $CompoundTag(); comp.put('minecraft:custom_data', cd) }
        let gd = cd.getCompound('GunData')
        if (!gd) { gd = new $CompoundTag(); cd.put('GunData', gd) }
        gd.putInt('Ammo', dcd.GunData.Ammo)
      } catch(e) { sbwError('[弹药补充] 武器 [' + wk + '] 设定出错:', e) }
    }
  }

  try { entity.setNbt(nbt) } catch(e) { return false }
  sbwLog('[弹药补充] [' + vehicleCfg.id + '] 弹药补充完成')
  return true
}

// ============================================================
// 每个弹药箱自行驱动 tick
// 区块未加载时自动暂停，无需全局追踪位置
// ============================================================

BlockEvents.blockEntityTick('kubejs:ammo_crate', event => {
  let level = event.getLevel()
  let block = event.getBlock()
  let bx = block.getX(), by = block.getY(), bz = block.getZ()
  let range = AMMO_REPLENISH_CONFIG.scanRange
  let prefix = VEHICLE_CFG.tagPrefix

  // 以自身坐标为中心、配置范围为半边长，AABB 获取范围内实体
  let aabb = new $AABB(bx - range, by - range, bz - range, bx + range, by + range, bz + range)
  let entities = level.getEntities(null, aabb)
  if (!entities || entities.size() === 0) return

  let eIter = entities.iterator()
  while (eIter.hasNext()) {
    let entity = eIter.next()
    if (!entity) continue

    // 检查 sbw_vehicle_ 标签
    let tags = entity.getTags()
    if (!tags) continue
    let isSbw = false
    let tIter = tags.iterator()
    while (tIter.hasNext()) {
      if (tIter.next().startsWith(prefix)) { isSbw = true; break }
    }
    if (!isSbw) continue

    let vid = extractVehicleIdFromEntity(entity)
    if (!vid) continue

    // 从父配置读取数据（只读）
    let vc = findVehicleConfig(vid)
    if (!vc) continue

    // 白/黑名单
    let wl = AMMO_REPLENISH_CONFIG.targetVehicleIds
    if (wl.length > 0 && wl.indexOf(vid) === -1) continue
    if (AMMO_REPLENISH_CONFIG.excludeVehicleIds.indexOf(vid) !== -1) continue

    // 检测弹药是否不足
    if (!vehicleNeedsReplenish(entity, vc)) continue

    // 补充
    replenishVehicle(level.getServer(), entity, vc)
  }
})

// ============================================================
// 右键交互：像木桶一样打开/关闭，无GUI
// ============================================================

BlockEvents.rightClicked('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return

  let block = event.block
  let player = event.player

  // 手部动画
  player.swing()

  // 木桶打开动画（仅触发一次，不切换）
  block.set('open', true)
  // 自动关闭：2秒后关回去
  let svr = event.server
  let bx = block.getX(), by = block.getY(), bz = block.getZ()
  let dim = block.getLevel().getDimension()
  svr.scheduleInTicks(40, function() {
    let lvl = svr.getLevel(dim)
    if (!lvl) return
    let b = lvl.getBlock(bx, by, bz)
    if (b && b.getId() === 'kubejs:ammo_crate') {
      b.set('open', false)
    }
  })

  // 不打开GUI，取消事件防止打开任何GUI
  event.cancel()
})
