// ============================================================
// SBW 载具 - 弹药补充模块 核心逻辑
//
// 依赖：
//   父模块: config.js（VEHICLE_CFG / SBW_VEHICLE_CONFIG）
//           tools/（nbt.js → toNBT / mergeDeployNBT）
//           tools/（misc.js → findVehicleConfig / extractVehicleIdFromEntity）
//           tools/（entity.js → entityHasStringTag）
//   本模块: a_config.js（AMMO_REPLENISH_CONFIG）
//
// 工作流程（右键弹药补给箱）：
//   1. 手部动画 + 提示"正在扫描中"
//   2. 以方块坐标为中心、配置范围为半边长，建立 AABB 包围盒
//   3. 获取包围盒内所有实体
//   4. 筛选 sbw_vehicle_ 标签的载具
//   5. 查找载具在父配置中的 deployNBT
//   6. 对比当前弹药是否不足
//   7. 若需要 → 直接将 Inventory 和 WeaponState 设定为 deployNBT 的值
//   8. 结果仅写入控制台日志
// ============================================================

var $AABB = Java.loadClass('net.minecraft.world.phys.AABB')

// ============================================================
// 内部工具：载具弹药检测
// ============================================================

/**
 * 从载具的 NBT 中提取当前所有弹药物品的摘要
 */
function getVehicleAmmoSummary(nbt) {
  let summary = {}
  try {
    let inv = nbt.get('Inventory')
    if (!inv) return summary
    let items = inv.getList('Items', 10)
    if (!items) return summary
    let size = items.size()
    for (let i = 0; i < size; i++) {
      let item = items.get(i)
      let id = item.getString('id')
      let count = item.getInt('count')
      if (id && (id.indexOf('ammo') !== -1 || id.indexOf('shell') !== -1
          || id.indexOf('missile') !== -1 || id.indexOf('rocket') !== -1)) {
        summary[id] = (summary[id] || 0) + count
      }
    }
  } catch (e) {
    sbwError('[弹药补充] 读取载具弹药摘要时出错:', e)
  }
  return summary
}

/**
 * 从 deployNBT 中提取参考弹药摘要
 */
function getDeployAmmoSummary(deployNBT) {
  let summary = {}
  if (!deployNBT || !deployNBT.Inventory || !deployNBT.Inventory.Items) return summary
  let items = deployNBT.Inventory.Items
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    let id = item.id
    let count = item.count || 0
    if (id && (id.indexOf('ammo') !== -1 || id.indexOf('shell') !== -1
        || id.indexOf('missile') !== -1 || id.indexOf('rocket') !== -1)) {
      summary[id] = (summary[id] || 0) + count
    }
  }
  return summary
}

/**
 * 检查载具是否缺少弹药（Inventory 中的弹药物品）
 */
function inventoryNeedsAmmo(nbt, vehicleCfg) {
  let deployNBT = vehicleCfg.deployNBT
  if (!deployNBT || !deployNBT.Inventory) return false

  let current = getVehicleAmmoSummary(nbt)
  let reference = getDeployAmmoSummary(deployNBT)
  let threshold = AMMO_REPLENISH_CONFIG.replenishThreshold / 100.0

  for (let ammoId in reference) {
    if (!reference.hasOwnProperty(ammoId)) continue
    let refCount = reference[ammoId]
    let curCount = current[ammoId] || 0
    if (curCount < refCount * threshold) {
      return true
    }
  }
  return false
}

/**
 * 检查载具武器是否缺少预装弹（WeaponState.GunData.Ammo）
 */
function weaponNeedsAmmo(nbt, vehicleCfg) {
  let deployNBT = vehicleCfg.deployNBT
  if (!deployNBT || !deployNBT.WeaponState) return false

  let threshold = AMMO_REPLENISH_CONFIG.weaponAmmoThreshold
  let ws = nbt.get('WeaponState')
  if (!ws) return true

  for (let weaponKey in deployNBT.WeaponState) {
    if (!deployNBT.WeaponState.hasOwnProperty(weaponKey)) continue
    let deployWeapon = deployNBT.WeaponState[weaponKey]
    if (!deployWeapon.components) continue
    let deployCD = deployWeapon.components['minecraft:custom_data']
    if (!deployCD || !deployCD.GunData) continue
    let deployAmmo = deployCD.GunData.Ammo
    if (deployAmmo === undefined || deployAmmo === null) continue

    try {
      let currentWeapon = ws.getCompound(weaponKey)
      if (!currentWeapon) return true
      let currentComponents = currentWeapon.getCompound('components')
      if (!currentComponents) return true
      let currentCD = currentComponents.getCompound('minecraft:custom_data')
      if (!currentCD) return true
      let currentGunData = currentCD.getCompound('GunData')
      if (!currentGunData) return true
      let currentAmmo = currentGunData.getInt('Ammo')
      if (currentAmmo < threshold) return true
    } catch (e) {
      return true
    }
  }
  return false
}

/**
 * 综合判断载具是否需要补充弹药
 */
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
  if (!deployNBT) {
    sbwLog('[弹药补充] [' + vehicleCfg.id + '] 无 deployNBT 配置，跳过')
    return false
  }

  let nbt = entity.getNbt()
  if (!nbt) {
    sbwError('[弹药补充] 无法读取载具 [' + vehicleCfg.id + '] 的 NBT')
    return false
  }

  // 1. 补充 Inventory.Items
  if (deployNBT.Inventory && deployNBT.Inventory.Items) {
    let inv = nbt.get('Inventory')
    if (!inv) {
      inv = new $CompoundTag()
      nbt.put('Inventory', inv)
    }
    let newItemsList = new $ListTag()
    let refItems = deployNBT.Inventory.Items
    for (let i = 0; i < refItems.length; i++) {
      let item = refItems[i]
      let itemTag = new $CompoundTag()
      itemTag.putInt('Slot', item.Slot)
      itemTag.putInt('count', item.count)
      itemTag.putString('id', item.id)
      newItemsList.add(itemTag)
    }
    inv.put('Items', newItemsList)
    sbwLog('[弹药补充] [' + vehicleCfg.id + '] Inventory 已设定 (' + refItems.length + ' 种弹药)')
  }

  // 2. 补充 WeaponState 预装弹
  if (deployNBT.WeaponState) {
    let ws = nbt.get('WeaponState')
    if (!ws) {
      ws = new $CompoundTag()
      nbt.put('WeaponState', ws)
    }
    for (let weaponKey in deployNBT.WeaponState) {
      if (!deployNBT.WeaponState.hasOwnProperty(weaponKey)) continue
      let deployWeapon = deployNBT.WeaponState[weaponKey]
      if (!deployWeapon.components) continue
      let deployCD = deployWeapon.components['minecraft:custom_data']
      if (!deployCD || !deployCD.GunData) continue
      let deployAmmo = deployCD.GunData.Ammo
      if (deployAmmo === undefined || deployAmmo === null) continue

      try {
        let weaponCompound = ws.getCompound(weaponKey)
        if (!weaponCompound) {
          weaponCompound = new $CompoundTag()
          ws.put(weaponKey, weaponCompound)
        }
        let components = weaponCompound.getCompound('components')
        if (!components) {
          components = new $CompoundTag()
          weaponCompound.put('components', components)
        }
        let cd = components.getCompound('minecraft:custom_data')
        if (!cd) {
          cd = new $CompoundTag()
          components.put('minecraft:custom_data', cd)
        }
        let gunData = cd.getCompound('GunData')
        if (!gunData) {
          gunData = new $CompoundTag()
          cd.put('GunData', gunData)
        }
        gunData.putInt('Ammo', deployAmmo)
        sbwLog('[弹药补充] [' + vehicleCfg.id + '] 武器 [' + weaponKey + '] Ammo 已设定为 ' + deployAmmo)
      } catch (e) {
        sbwError('[弹药补充] 设定武器 [' + weaponKey + '] 弹药时出错:', e)
      }
    }
  }

  // 3. 写入实体的 NBT
  try {
    entity.setNbt(nbt)
  } catch (e) {
    sbwError('[弹药补充] 写入载具 NBT 时出错:', e)
    return false
  }

  sbwLog('[弹药补充] [' + vehicleCfg.id + '] 弹药补充完成')
  return true
}

// ============================================================
// 主扫描逻辑
// ============================================================

function scanAndReplenish(block, player) {
  let level = block.getLevel()
  let server = block.getServer()
  let bx = block.getX(), by = block.getY(), bz = block.getZ()
  let range = AMMO_REPLENISH_CONFIG.scanRange
  let tagPrefix = VEHICLE_CFG.tagPrefix

  let replenishedCount = 0
  let scannedCount = 0

  // 以方块坐标为中心、配置范围为半边长，建立 AABB 包围盒
  // 只获取包围盒内的实体，不扫描全维度
  let aabb = new $AABB(
    bx - range, by - range, bz - range,
    bx + range, by + range, bz + range
  )
  let entities = level.getEntities(null, aabb)
  if (!entities || entities.size() === 0) {
    sbwLog('[弹药补充] 扫描完成：AABB范围内无实体')
    return
  }

  let eIter = entities.iterator()
  while (eIter.hasNext()) {
    let entity = eIter.next()
    if (!entity) continue

    // 检查标签：必须是 sbw_vehicle_ 开头的 SBW 载具
    let tags = entity.getTags()
    if (!tags) continue
    let isSbwVehicle = false
    let tIter = tags.iterator()
    while (tIter.hasNext()) {
      if (tIter.next().startsWith(tagPrefix)) { isSbwVehicle = true; break }
    }
    if (!isSbwVehicle) continue

    let vehicleId = extractVehicleIdFromEntity(entity)
    if (!vehicleId) continue

    scannedCount++

    let vehicleCfg = findVehicleConfig(vehicleId)
    if (!vehicleCfg) {
      sbwLog('[弹药补充] 未在父配置中找到载具 [' + vehicleId + '] 的配置，跳过')
      continue
    }

    // 白名单/黑名单
    let whiteList = AMMO_REPLENISH_CONFIG.targetVehicleIds
    if (whiteList.length > 0 && whiteList.indexOf(vehicleId) === -1) continue
    let blackList = AMMO_REPLENISH_CONFIG.excludeVehicleIds
    if (blackList.indexOf(vehicleId) !== -1) continue

    if (!vehicleNeedsReplenish(entity, vehicleCfg)) {
      sbwLog('[弹药补充] [' + vehicleId + '] 弹药充足，无需补充')
      continue
    }

    let success = replenishVehicle(server, entity, vehicleCfg)
    if (success) replenishedCount++
  }

  sbwLog('[弹药补充] 扫描完成：载具 ' + scannedCount + ' 辆，补充 ' + replenishedCount + ' 辆')
}

// ============================================================
// 方块交互事件
// ============================================================

BlockEvents.rightClicked('kubejs:ammo_crate', event => {
  let player = event.player
  let block = event.block

  if (event.level.isClientSide()) return

  // 手部动画
  player.swing()
  // 只提示正在扫描
  player.tell(Component.literal('§7[弹药补给箱] 正在扫描中'))

  // 执行扫描和补充
  scanAndReplenish(block, player)
})

// ============================================================
// （可选）自动定时扫描
// ============================================================

if (AMMO_REPLENISH_CONFIG.autoScanInterval > 0) {
  sbwLog('[弹药补充] 自动扫描已启用，间隔: ' + AMMO_REPLENISH_CONFIG.autoScanInterval + ' tick')
}
