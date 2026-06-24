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
//      检测到 SBW 载具后直接读取父配置 deployNBT 并 set。
//      区块未加载时 tick 自动暂停。
//   2. 右键交互：像木桶一样打开（仅触发一次），2秒后自动关闭，无GUI
//
// 注意：
//   - 只从父配置读取数据（findVehicleConfig、extractVehicleIdFromEntity 均为只读）
//   - 不调用父模块中带状态的工具（state_machine、persist 等）
//   - 补充方式：直接用 deployNBT 的值 set 到实体 NBT
// ============================================================

var $AABB = Java.loadClass('net.minecraft.world.phys.AABB')

// ============================================================
// 每个弹药箱自行驱动 tick（后台自动扫描）
// ============================================================

BlockEvents.blockEntityTick('kubejs:ammo_crate', event => {
  let level = event.getLevel()
  let block = event.getBlock()
  scanAround(level, block)
})

// ============================================================
// 扫描逻辑：AABB 获取范围内 SBW 载具 → 直接 set deployNBT
// ============================================================

function scanAround(level, block) {
  let bx = block.getX(), by = block.getY(), bz = block.getZ()
  let range = AMMO_REPLENISH_CONFIG.scanRange
  let prefix = VEHICLE_CFG.tagPrefix

  let aabb = new $AABB(bx - range, by - range, bz - range, bx + range, by + range, bz + range)
  let entities = level.getEntities(null, aabb)
  if (!entities || entities.size() === 0) return

  sbwLog('[弹药补充] 扫描到 ' + entities.size() + ' 个实体在 AABB 内')

  let eIter = entities.iterator()
  while (eIter.hasNext()) {
    let entity = eIter.next()
    if (!entity) continue

    // 获取实体标签
    let tags = entity.getTags()
    if (!tags || tags.size() === 0) continue

    // 遍历标签找 sbw_vehicle_ 前缀
    let foundPrefix = null
    let tIter = tags.iterator()
    while (tIter.hasNext()) {
      let tag = tIter.next()
      sbwLog('[弹药补充] 实体标签: "' + tag + '"')
      if (tag.startsWith(prefix)) { foundPrefix = tag; break }
    }
    if (!foundPrefix) continue

    sbwLog('[弹药补充] 发现SBW标签: "' + foundPrefix + '"')

    // 从标签提取载具 ID（去掉 prefix）
    let vid = foundPrefix.substring(prefix.length)
    if (!vid) continue
    sbwLog('[弹药补充] 提取载具ID: "' + vid + '"')

    // 从父配置读取该载具的 deployNBT（只读）
    let vc = findVehicleConfig(vid)
    if (!vc) { sbwLog('[弹药补充] 未找到载具配置: ' + vid); continue }
    if (!vc.deployNBT) { sbwLog('[弹药补充] 载具 ' + vid + ' 无 deployNBT'); continue }

    sbwLog('[弹药补充] 找到配置，开始补充: ' + vid)

    // 白/黑名单
    let wl = AMMO_REPLENISH_CONFIG.targetVehicleIds
    if (wl.length > 0 && wl.indexOf(vid) === -1) continue
    if (AMMO_REPLENISH_CONFIG.excludeVehicleIds.indexOf(vid) !== -1) continue

    // 直接用 deployNBT set 到实体
    applyDeployNBT(entity, vc.deployNBT)
    sbwLog('[弹药补充] 补充完成: ' + vid)
  }
}

// ============================================================
// 核心：将 deployNBT 直接 set 到载具实体
// ============================================================

function applyDeployNBT(entity, deployNBT) {
  if (!deployNBT) return
  let nbt = entity.getNbt()
  if (!nbt) return

  // Inventory 弹药（完整替换 Items 列表）
  if (deployNBT.Inventory && deployNBT.Inventory.Items) {
    let inv = nbt.get('Inventory')
    if (!inv) { inv = new $CompoundTag(); nbt.put('Inventory', inv) }
    let itemsList = new $ListTag()
    for (let i = 0; i < deployNBT.Inventory.Items.length; i++) {
      let src = deployNBT.Inventory.Items[i]
      let item = new $CompoundTag()
      item.putInt('Slot', src.Slot)
      item.putInt('count', src.count)
      item.putString('id', src.id)
      itemsList.add(item)
    }
    inv.put('Items', itemsList)
  }

  // WeaponState 预装弹（完整替换各武器的 GunData）
  if (deployNBT.WeaponState) {
    let ws = nbt.get('WeaponState')
    if (!ws) { ws = new $CompoundTag(); nbt.put('WeaponState', ws) }
    for (let wk in deployNBT.WeaponState) {
      if (!deployNBT.WeaponState.hasOwnProperty(wk)) continue
      let src = deployNBT.WeaponState[wk]
      if (!src.components) continue
      let srcCd = src.components['minecraft:custom_data']
      if (!srcCd || !srcCd.GunData) continue

      // 获取或创建武器 NBT 路径
      let wc = ws.getCompound(wk)
      if (!wc) { wc = new $CompoundTag(); ws.put(wk, wc) }
      let comp = wc.getCompound('components')
      if (!comp) { comp = new $CompoundTag(); wc.put('components', comp) }
      let cd = comp.getCompound('minecraft:custom_data')
      if (!cd) { cd = new $CompoundTag(); comp.put('minecraft:custom_data', cd) }
      let gd = cd.getCompound('GunData')
      if (!gd) { gd = new $CompoundTag(); cd.put('GunData', gd) }

      // 将 deployNBT 中的 GunData 字段逐一写入
      for (let field in srcCd.GunData) {
        if (!srcCd.GunData.hasOwnProperty(field)) continue
        let val = srcCd.GunData[field]
        if (typeof val === 'number') {
          gd.putInt(field, val)
        } else if (typeof val === 'boolean') {
          gd.putBoolean(field, val)
        }
      }
    }
  }

  // 写入实体 NBT
  try { entity.setNbt(nbt) } catch(e) { /* 忽略写入失败 */ }
}

// ============================================================
// 右键交互：木桶打开动画，无扫描，无GUI
// ============================================================

BlockEvents.rightClicked('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return

  let block = event.block
  let player = event.player

  // 手部动画
  player.swing()

  // 木桶打开（仅触发一次）
  block.set('open', true)
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

  event.cancel()
})
