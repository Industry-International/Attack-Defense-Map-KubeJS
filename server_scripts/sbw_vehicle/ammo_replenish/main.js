// ============================================================
// SBW 载具 - 弹药补充模块 核心逻辑（重构版）
//
// 依赖：
//   父模块: config.js（VEHICLE_CFG / SBW_VEHICLE_CONFIG）
//           tools/（misc.js → findVehicleConfig / extractVehicleIdFromEntity）
//   本模块: a_config.js（AMMO_REPLENISH_CONFIG）
//
// 功能：
//   1. BlockEntityTick 自动扫描：每秒扫描范围内 SBW 载具并缓存状态
//   2. 右键交互：打开 LDLib2 GUI，显示载具弹药物资状态
//   3. 增量补充：通过 GUI 按钮触发，只补充缺失的弹药，不覆盖现有 NBT
//
// 变更说明（对比旧版）：
//   旧版：直接 set deployNBT → 覆盖实体 NBT（危险！）
//   新版：读取当前 Inventory → 计算缺失量 → 增量插入 Items
//   旧版：右键播放木桶动画
//   新版：右键打开 LDLib2 GUI（startup_scripts/ammo_replenish_ui.js 注册）
// ============================================================

var $AABB = Java.loadClass('net.minecraft.world.phys.AABB')
/** $HashMap 在 a_java_refs.js 中也有声明，但因为加载顺序问题在此自行声明 */
var $HashMap = Java.loadClass('java.util.HashMap')

// ============================================================
// 全局扫描缓存（按方块坐标 key 存储，避免依赖 block.persistentData）
// ============================================================

/** @type {java.util.HashMap} key = "x,y,z,dim" → JSON string of vehicle list */
var $ammoCache = new $HashMap()

// ============================================================
// 弹药类型映射（短名 → 实际 item id）
// ============================================================

const AMMO_ID_MAP = {
  large_shell_ap: 'superbwarfare:large_shell_ap',
  large_shell_he: 'superbwarfare:large_shell_he',
  small_shell_ap: 'superbwarfare:small_shell_ap',
  small_shell_he: 'superbwarfare:small_shell_he',
  rifle_ammo:     'superbwarfare:rifle_ammo',
  heavy_ammo:     'superbwarfare:heavy_ammo',
  missile:        'superbwarfare:missile',
  rocket:         'superbwarfare:rocket'
}

/** 反向映射：item id → 短名 */
const AMMO_KEY_MAP = {}
for (let k in AMMO_ID_MAP) {
  if (AMMO_ID_MAP.hasOwnProperty(k)) AMMO_KEY_MAP[AMMO_ID_MAP[k]] = k
}

// ============================================================
// 每个弹药箱自行驱动 tick（后台自动扫描，缓存载具状态）
// ============================================================

BlockEvents.blockEntityTick('kubejs:ammo_crate', event => {
  let level = event.getLevel()
  if (level.isClientSide()) return
  let block = event.getBlock()
  scanAndCache(level, block)
})

// ============================================================
// 右键交互：打开 LDLib2 GUI
// ============================================================

BlockEvents.rightClicked('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return

  let player = event.player
  let block = event.block
  let pos = block.getPos()

  // 使用 LDLib2 打开补给箱 GUI
  try {
    LDLib2UIFactory.openBlockUI(player, pos, 'kubejs:ammo_crate_gui')
  } catch (e) {
    sbwLog('[弹药补充] LDLib2UI 打开失败: ' + e)
    player.tell(Component.literal('§c[弹药] GUI 加载失败，请确认 LDLib2 已安装'))
  }

  event.cancel()
})

// ============================================================
// 扫描 & 缓存：将范围内载具信息存入 $ammoCache（全局 Map）
// ============================================================

function scanAndCache(level, block) {
  let dim = level.getDimension()
  let bx = block.getX(), by = block.getY(), bz = block.getZ()
  let cacheKey = bx + ',' + by + ',' + bz + ',' + dim
  let range = AMMO_REPLENISH_CONFIG.scanRange
  let prefix = VEHICLE_CFG.tagPrefix

  let aabb = new $AABB(bx - range, by - range, bz - range, bx + range, by + range, bz + range)
  let entities = level.getEntities(null, aabb)
  if (!entities || entities.size() === 0) {
    $ammoCache.put(cacheKey, '[]')
    return
  }

  let results = []
  let eIter = entities.iterator()
  while (eIter.hasNext()) {
    let entity = eIter.next()
    if (!entity) continue

    // 通过标签判断是否为 SBW 载具
    let vid = extractVehicleIdFromEntity(entity)
    if (!vid) continue

    // 白/黑名单过滤
    let wl = AMMO_REPLENISH_CONFIG.targetVehicleIds
    if (wl.length > 0 && wl.indexOf(vid) === -1) continue
    if (AMMO_REPLENISH_CONFIG.excludeVehicleIds.indexOf(vid) !== -1) continue

    // 读取当前弹药物资（Inventory）
    let nbt = entity.getNbt()
    let currentAmmo = {}
    let inv = nbt ? nbt.get('Inventory') : null
    if (inv instanceof $CompoundTag) {
      let items = inv.get('Items')
      if (items instanceof $ListTag) {
        for (let i = 0; i < items.size(); i++) {
          let item = items.get(i)
          if (!(item instanceof $CompoundTag)) continue
          let id = item.getString('id')
          let cnt = item.getInt('count')
          if (!id || cnt <= 0) continue
          let key = AMMO_KEY_MAP[id] || id
          currentAmmo[key] = (currentAmmo[key] || 0) + cnt
        }
      }
    }

    results.push({
      id: vid,
      vehicleType: entity.getType().toString(),
      uuid: entity.getNbt().getString('UUID'),
      currentAmmo: currentAmmo
    })
  }

  $ammoCache.put(cacheKey, JSON.stringify(results))
}

// ============================================================
// 从 deployNBT 获取该载具的标准弹药配置（只读）
// ============================================================

function getDeployAmmoTemplate(vehicleId) {
  let vc = findVehicleConfig(vehicleId)
  if (!vc || !vc.deployNBT || !vc.deployNBT.Inventory || !vc.deployNBT.Inventory.Items) return null

  let template = {}
  let items = vc.deployNBT.Inventory.Items
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    let id = item.id
    let cnt = item.count || 0
    let key = AMMO_KEY_MAP[id] || id
    template[key] = (template[key] || 0) + cnt
  }
  return template
}

// ============================================================
// 获取载具当前弹药汇总（只读）
// ============================================================

function getVehicleCurrentAmmo(entity) {
  let nbt = entity.getNbt()
  if (!nbt) return {}
  let result = {}
  let inv = nbt.get('Inventory')
  if (inv instanceof $CompoundTag) {
    let items = inv.get('Items')
    if (items instanceof $ListTag) {
      for (let i = 0; i < items.size(); i++) {
        let item = items.get(i)
        if (!(item instanceof $CompoundTag)) continue
        let id = item.getString('id')
        let cnt = item.getInt('count')
        if (!id || cnt <= 0) continue
        let key = AMMO_KEY_MAP[id] || id
        result[key] = (result[key] || 0) + cnt
      }
    }
  }
  return result
}

// ============================================================
// 核心：增量补充弹药到载具 Inventory
//
// 策略：
//   1. 读取载具当前 Inventory.Items
//   2. 对每种需要补充的弹药类型：
//      a) 先填满已有同类型弹药的槽位（单槽上限 64）
//      b) 如果还不够，从最高编号空槽位开始填入新槽
//   3. 不修改 deployNBT 之外的字段
// ============================================================

function replenishVehicleInventory(entity, ammoPlan) {
  if (!entity || !ammoPlan) return 0

  let nbt = entity.getNbt()
  if (!nbt) return 0

  let totalAdded = 0

  // 确保 Inventory 存在
  let inv = nbt.get('Inventory')
  if (!inv) { inv = new $CompoundTag(); nbt.put('Inventory', inv) }

  // 读取当前 Items 列表
  let itemsList = inv.get('Items')
  if (!itemsList || !(itemsList instanceof $ListTag)) {
    itemsList = new $ListTag()
    inv.put('Items', itemsList)
  }

  // === 构建当前槽位映射 ===
  // slotMap[slotIndex] = { id, count }
  // 同时记录已用槽位集合
  let slotMap = {}
  let usedSlots = {}
  for (let i = 0; i < itemsList.size(); i++) {
    let item = itemsList.get(i)
    if (!(item instanceof $CompoundTag)) continue
    let slot = item.getInt('Slot')
    let id = item.getString('id')
    let cnt = item.getInt('count')
    if (id && cnt > 0) {
      slotMap[slot] = { id: id, count: cnt, listIndex: i }
      usedSlots[slot] = true
    }
  }

  // === 处理每种弹药 ===
  for (let ammoKey in ammoPlan) {
    if (!ammoPlan.hasOwnProperty(ammoKey)) continue
    let needCount = ammoPlan[ammoKey]
    if (needCount <= 0) continue

    let ammoId = AMMO_ID_MAP[ammoKey]
    if (!ammoId) {
      sbwLog('[弹药补充] 未知弹药类型: ' + ammoKey)
      continue
    }

    // 找已有的同类型槽位 → 优先填满（上限 64/槽）
    let existingSlots = []
    for (let s in slotMap) {
      if (slotMap.hasOwnProperty(s)) {
        let entry = slotMap[s]
        if (entry.id === ammoId && entry.count < 64) {
          existingSlots.push({ slot: parseInt(s), entry: entry })
        }
      }
    }
    // 按槽位编号排序
    existingSlots.sort(function(a, b) { return a.slot - b.slot })

    for (var ei = 0; ei < existingSlots.length; ei++) {
      var es = existingSlots[ei]
      if (needCount <= 0) break
      let space = 64 - es.entry.count
      let add = Math.min(needCount, space)
      if (add <= 0) continue
      es.entry.count += add
      needCount -= add
      totalAdded += add
      // 更新 Items 列表中的条目
      let listEntry = itemsList.get(es.entry.listIndex)
      if (listEntry instanceof $CompoundTag) {
        listEntry.putInt('count', es.entry.count)
      }
    }

    if (needCount <= 0) continue

    // 找空槽位 → 从 0 往上找（跳过已用的）
    let emptySlot = -1
    for (let s = 0; s < 54; s++) {
      if (!usedSlots[s]) { emptySlot = s; break }
    }
    if (emptySlot < 0) {
      sbwLog('[弹药补充] 载具槽位已满，无法继续补充 ' + ammoKey)
      continue
    }

    // 创建新槽位条目（一次最多 64）
    while (needCount > 0 && emptySlot >= 0 && emptySlot < 54) {
      let add = Math.min(needCount, 64)
      let newItem = new $CompoundTag()
      newItem.putInt('Slot', emptySlot)
      newItem.putString('id', ammoId)
      newItem.putInt('count', add)
      itemsList.add(newItem)
      usedSlots[emptySlot] = true
      needCount -= add
      totalAdded += add

      // 找下一个空槽
      emptySlot = -1
      for (let s = 0; s < 54; s++) {
        if (!usedSlots[s]) { emptySlot = s; break }
      }
    }
  }

  // === 写入实体 NBT ===
  if (totalAdded > 0) {
    try {
      entity.setNbt(nbt)
    } catch (e) {
      sbwLog('[弹药补充] 写入 NBT 失败: ' + e)
      return 0
    }
  }

  return totalAdded
}

// ============================================================
// 补充武器预装弹（WeaponState GunData.Ammo）
//
// 只补充弹药数量降至阈值以下的武器
// ============================================================

function replenishWeaponAmmo(entity, deployNBT) {
  if (!entity || !deployNBT || !deployNBT.WeaponState) return 0

  let nbt = entity.getNbt()
  if (!nbt) return 0

  let threshold = AMMO_REPLENISH_CONFIG.weaponAmmoThreshold
  let weaponsRefilled = 0

  for (let wk in deployNBT.WeaponState) {
    if (!deployNBT.WeaponState.hasOwnProperty(wk)) continue
    let src = deployNBT.WeaponState[wk]
    if (!src.components) continue
    let srcCd = src.components['minecraft:custom_data']
    if (!srcCd || !srcCd.GunData) continue
    let targetAmmo = srcCd.GunData.Ammo
    if (targetAmmo === undefined || targetAmmo === null) continue

    // 获取当前武器状态
    let ws = nbt.get('WeaponState')
    if (!ws) { ws = new $CompoundTag(); nbt.put('WeaponState', ws) }
    let wc = ws.getCompound(wk)
    if (!wc) { wc = new $CompoundTag(); ws.put(wk, wc) }

    // 遍历路径到 GunData
    let comp = wc.getCompound('components')
    if (!comp) { comp = new $CompoundTag(); wc.put('components', comp) }
    let cd = comp.getCompound('minecraft:custom_data')
    if (!cd) { cd = new $CompoundTag(); comp.put('minecraft:custom_data', cd) }
    let gd = cd.getCompound('GunData')
    if (!gd) { gd = new $CompoundTag(); cd.put('GunData', gd) }

    let currentAmmo = gd.contains('Ammo') ? gd.getInt('Ammo') : 0

    // 仅当低于阈值时补充
    if (currentAmmo < threshold) {
      gd.putInt('Ammo', targetAmmo)
      weaponsRefilled++
    }
  }

  if (weaponsRefilled > 0) {
    try { entity.setNbt(nbt) } catch(e) { /* 忽略写入失败 */ }
  }

  return weaponsRefilled
}

// ============================================================
// 从 GUI 触发的补充入口（由 startup_scripts 中的按钮回调调用）
//
// 流程：
//   1. 扫描弹药箱附近载具
//   2. 对每辆载具：读取 deployNBT 标准 → 增量补充 Inventory
//   3. 补充武器预装弹
//   4. 发送消息
// ============================================================

function doReplenishFromGUI(server, level, player, ammoPlan) {
  let blockPos = player.blockPosition()
  // 实际上应该从 event 获取方块位置，但这里用玩家位置近似
  // 从 blockPos 往回找最近的 ammo_crate

  let range = AMMO_REPLENISH_CONFIG.scanRange
  let prefix = VEHICLE_CFG.tagPrefix
  let bx = blockPos.getX(), by = blockPos.getY(), bz = blockPos.getZ()
  let aabb = new $AABB(bx - range, by - range, bz - range, bx + range, by + range, bz + range)
  let entities = level.getEntities(null, aabb)
  if (!entities || entities.size() === 0) {
    player.tell(Component.literal(Component.translatable('msg.kubejs.ammo_replenish.no_vehicles')))
    return
  }

  let replenishedCount = 0
  let vehicleNames = []

  let eIter = entities.iterator()
  while (eIter.hasNext()) {
    let entity = eIter.next()
    if (!entity) continue

    let vid = extractVehicleIdFromEntity(entity)
    if (!vid) continue

    // 白/黑名单
    let wl = AMMO_REPLENISH_CONFIG.targetVehicleIds
    if (wl.length > 0 && wl.indexOf(vid) === -1) continue
    if (AMMO_REPLENISH_CONFIG.excludeVehicleIds.indexOf(vid) !== -1) continue

    // ===== 方案 A：使用 ammoPlan（玩家指定的数量） =====
    let added = replenishVehicleInventory(entity, ammoPlan)

    // ===== 方案 B：补充武器预装弹 =====
    let vc = findVehicleConfig(vid)
    if (vc && vc.deployNBT) {
      let weaponsRefilled = replenishWeaponAmmo(entity, vc.deployNBT)
      if (weaponsRefilled > 0) {
        sbwLog('[弹药补充] 载具 ' + vid + ' 补充了 ' + weaponsRefilled + ' 个武器弹药')
      }
    }

    vehicleNames.push(vid)
    replenishedCount++
  }

  // 发送结果消息
  if (replenishedCount > 0) {
    let msg = (Component.translatable('msg.kubejs.ammo_replenish.done').getString()).replace('%s', replenishedCount)
    player.tell(Component.literal(msg))
    sbwLog('[弹药补充] 玩家 ' + player.getName().getString() + ' 执行补充：' + vehicleNames.join(', '))
  } else {
    player.tell(Component.literal(Component.translatable('msg.kubejs.ammo_replenish.no_vehicles')))
  }
}

// ============================================================
// 自动补充（按 deployNBT 标准补满）
// 可由 BlockEntityTick 或命令触发
// ============================================================

function autoReplenishAll(level, block) {
  let range = AMMO_REPLENISH_CONFIG.scanRange
  let prefix = VEHICLE_CFG.tagPrefix
  let bx = block.getX(), by = block.getY(), bz = block.getZ()
  let aabb = new $AABB(bx - range, by - range, bz - range, bx + range, by + range, bz + range)
  let entities = level.getEntities(null, aabb)
  if (!entities || entities.size() === 0) return 0

  let totalAdded = 0
  let eIter = entities.iterator()
  while (eIter.hasNext()) {
    let entity = eIter.next()
    if (!entity) continue

    let vid = extractVehicleIdFromEntity(entity)
    if (!vid) continue

    let wl = AMMO_REPLENISH_CONFIG.targetVehicleIds
    if (wl.length > 0 && wl.indexOf(vid) === -1) continue
    if (AMMO_REPLENISH_CONFIG.excludeVehicleIds.indexOf(vid) !== -1) continue

    // 获取 deployNBT 标准弹药配置
    let vc = findVehicleConfig(vid)
    if (!vc || !vc.deployNBT) continue

    let template = getDeployAmmoTemplate(vid)
    if (!template) continue

    // 获取当前弹药
    let current = getVehicleCurrentAmmo(entity)

    // 计算缺失量
    let ammoPlan = {}
    for (let key in template) {
      if (template.hasOwnProperty(key)) {
        let target = template[key]
        let have = current[key] || 0
        let missing = target - have
        if (missing > 0) ammoPlan[key] = missing
      }
    }

    // 检查是否所有弹药都充足
    let hasMissing = false
    for (let checkKey in ammoPlan) {
      if (ammoPlan.hasOwnProperty(checkKey)) { hasMissing = true; break }
    }
    if (!hasMissing) continue

    let added = replenishVehicleInventory(entity, ammoPlan)
    totalAdded += added

    // 补充武器预装弹
    replenishWeaponAmmo(entity, vc.deployNBT)
  }

  return totalAdded
}

// ============================================================
// 辅助：获取弹药类型的显示名
// ============================================================

function getAmmoDisplayName(ammoKey) {
  let names = {
    large_shell_ap: '§6AP弹',
    large_shell_he: '§cHE弹',
    small_shell_ap: '§b小AP弹',
    small_shell_he: '§d小HE弹',
    rifle_ammo:     '§7步枪弹',
    heavy_ammo:     '§9重弹',
    missile:        '§a导弹',
    rocket:         '§e火箭弹'
  }
  return names[ammoKey] || ammoKey
}
