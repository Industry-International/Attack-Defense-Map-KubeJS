// ============================================================
// 弹药补给站 - 方块驱动核心逻辑
//
// 依赖：
//   父模块: config.js（VEHICLE_CFG / SBW_VEHICLE_CONFIG）
//           tools/（misc.js → extractVehicleIdFromEntity / findVehicleConfig）
//   本模块: a_config.js（DEFAULT_STATION_CONFIG / 配置读写工具 / 弹药映射）
//
// 工作流程（每 tick 循环）：
//   1. 读取方块自身的配置 & 运行时状态（persistentData）
//   2. 扫描范围内 SBW 载具
//   3. 对每辆载具：
//      a) 新入场 → 记录入场 gameTime
//      b) 在范围内且已满足入场延时 → 标记为"待补充"
//      c) 已离开 → 清除追踪
//   4. 若有待补充载具且方块不在冷却中 → 执行补充 → 进入冷却
//
// 右键交互：
//   打开 LDLib2 配置 GUI，可在界面中直接修改所有参数并保存
// ============================================================

var $AABB = Java.loadClass('net.minecraft.world.phys.AABB')

// ============================================================
// BlockEntity Tick - 每个方块独立驱动
// ============================================================

BlockEvents.blockEntityTick('kubejs:ammo_crate', event => {
  let level = event.getLevel()
  if (level.isClientSide()) return
  let block = event.getBlock()

  // 读取配置 & 运行时
  let cfg = readBlockConfig(block)
  let runtime = readBlockRuntime(block)
  let gameTime = level.getGameTime()

  // 扫描范围内载具
  let vehiclesInRange = scanVehicles(level, block, cfg)
  let currentUuids = {}

  // ─── 处理每辆载具 ───
  for (let i = 0; i < vehiclesInRange.length; i++) {
    let v = vehiclesInRange[i]
    let uuid = v.uuid
    currentUuids[uuid] = true

    if (runtime.enteredVehicles[uuid] === undefined) {
      // 新入场 → 记录首次检测到的 gameTime
      runtime.enteredVehicles[uuid] = gameTime
      sbwLog('[补给站] 载具 ' + v.id + ' 进入范围 @tick=' + gameTime)
    }
  }

  // ─── 清理已离开的载具 ───
  let cleaned = false
  for (let uuid in runtime.enteredVehicles) {
    if (runtime.enteredVehicles.hasOwnProperty(uuid)) {
      if (!currentUuids[uuid]) {
        delete runtime.enteredVehicles[uuid]
        cleaned = true
      }
    }
  }
  if (cleaned) {
    sbwLog('[补给站] 已清理离开的载具追踪')
  }

  // ─── 检查冷却 ───
  let inCooldown = gameTime < runtime.cooldownEnd
  if (inCooldown) {
    // 仍在冷却中，只保存运行状态（不执行补充）
    writeBlockRuntime(block, runtime)
    return
  }

  // ─── 检查是否有满足入场延时的载具 ───
  let readyVehicles = []
  for (let i = 0; i < vehiclesInRange.length; i++) {
    let v = vehiclesInRange[i]
    let enterTime = runtime.enteredVehicles[v.uuid]
    if (enterTime === undefined) continue

    let elapsed = gameTime - enterTime
    if (elapsed >= cfg.enterDelay) {
      readyVehicles.push(v)
    }
  }

  if (readyVehicles.length === 0) {
    writeBlockRuntime(block, runtime)
    return
  }

  // ─── 执行补充 ───
  let totalAdded = 0
  let replenishedIds = []

  for (let i = 0; i < readyVehicles.length; i++) {
    let v = readyVehicles[i]
    let entity = v.entity

    // 1. 补充物品栏弹药
    let added = replenishVehicleInventory(entity, cfg.slots)
    totalAdded += added

    // 2. 补充武器预装弹
    if (cfg.weaponAmmoThreshold > 0) {
      let vc = findVehicleConfig(v.id)
      if (vc && vc.deployNBT) {
        replenishWeaponAmmo(entity, vc.deployNBT, cfg.weaponAmmoThreshold)
      }
    }

    replenishedIds.push(v.id)
  }

  // ─── 进入冷却 ───
  runtime.cooldownEnd = gameTime + cfg.cooldown

  // ─── 保存运行时状态 ───
  writeBlockRuntime(block, runtime)

  // ─── 日志 ───
  if (totalAdded > 0) {
    sbwLog('[补给站] 补充完成: ' + replenishedIds.join(', ') + ' 共添加 ' + totalAdded + ' 个物品, 冷却 ' + (cfg.cooldown / 20) + 's')
  }

  // ─── 通知附近玩家 ───
  if (totalAdded > 0) {
    notifyNearbyPlayers(level, block, replenishedIds.length, totalAdded)
  }
})

// ============================================================
// 右键交互：打开 LDLib2 配置 GUI
// ============================================================

BlockEvents.rightClicked('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return
  let player = event.player
  let block = event.block
  let pos = block.getPos()

  // 读取配置并填充到全局缓存（startup_scripts 中用 var 声明的 $ammoStationGuiCache）
  try {
    let cfg = readBlockConfig(block)
    let dim = event.level.getDimension().toString()
    let cacheData = JSON.stringify({
      pos: { x: pos.getX(), y: pos.getY(), z: pos.getZ() },
      dim: dim,
      config: cfg
    })
    // $ammoStationGuiCache 在 startup_scripts/ammo_station_gui.js 中声明，全局可见
    $ammoStationGuiCache.put(player.getStringUUID(), cacheData)

    // 使用 LDLib2 打开配置 GUI
    LDLib2UIFactory.openBlockUI(player, pos, 'kubejs:ammo_station_cfg')
  } catch (e) {
    sbwLog('[补给站] GUI打开失败: ' + e)
    player.tell(Component.literal('§c[补给站] GUI加载失败，请确认LDLib2已安装'))
  }

  event.cancel()
})

// ============================================================
// 扫描范围内载具
// ============================================================

function scanVehicles(level, block, cfg) {
  let bx = block.getX(), by = block.getY(), bz = block.getZ()
  let range = cfg.scanRange

  let aabb = new $AABB(bx - range, by - range, bz - range, bx + range, by + range, bz + range)
  let entities = level.getEntities(null, aabb)
  if (!entities || entities.size() === 0) return []

  let results = []
  let eIter = entities.iterator()
  while (eIter.hasNext()) {
    let entity = eIter.next()
    if (!entity) continue

    // 检查是否为 SBW 载具
    let vid = extractVehicleIdFromEntity(entity)
    if (!vid) continue

    // 载具过滤
    if (!passVehicleFilter(vid, cfg.targetVehicleIds)) continue

    // 获取 UUID
    let nbt = entity.getNbt()
    let uuid = nbt ? nbt.getString('UUID') : ''
    if (!uuid) continue

    results.push({
      id: vid,
      uuid: uuid,
      entity: entity
    })
  }

  return results
}

// ============================================================
// 载具过滤
// ============================================================

function passVehicleFilter(vehicleId, filterList) {
  if (!filterList || filterList.length === 0) return true

  let excluded = false
  let included = false

  for (let i = 0; i < filterList.length; i++) {
    let rule = filterList[i]
    if (rule.startsWith('!')) {
      // 排除规则
      if (rule.substring(1) === vehicleId) excluded = true
    } else {
      // 包含规则
      if (rule === vehicleId) included = true
    }
  }

  // 如果只有排除规则，则不在排除列表中的都放行
  // 如果有包含规则，则必须在包含列表中且不在排除列表中
  let hasInclude = false
  for (let i = 0; i < filterList.length; i++) {
    if (!filterList[i].startsWith('!')) { hasInclude = true; break }
  }

  if (!hasInclude) return !excluded
  return included && !excluded
}

// ============================================================
// 通知附近玩家
// ============================================================

function notifyNearbyPlayers(level, block, vehicleCount, totalAdded) {
  let bx = block.getX(), by = block.getY(), bz = block.getZ()
  let players = level.players()
  if (!players || players.size() === 0) return

  let pIter = players.iterator()
  while (pIter.hasNext()) {
    let player = pIter.next()
    let px = player.getX(), py = player.getY(), pz = player.getZ()
    let dx = px - bx, dy = py - by, dz = pz - bz
    let dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
    if (dist <= 24) {
      player.tell(Component.literal(
        '§6[补给站] §a已为 §e' + vehicleCount + ' §a辆载具补充弹药 §7(共 §e' + totalAdded + ' §7个物品)'
      ))
    }
  }
}

// ============================================================
// 增量补充载具 Inventory（从旧版迁移优化）
// ============================================================

function replenishVehicleInventory(entity, ammoPlan) {
  if (!entity || !ammoPlan) return 0

  let nbt = entity.getNbt()
  if (!nbt) return 0

  let totalAdded = 0

  // 确保 Inventory 存在
  let inv = nbt.get('Inventory')
  if (!inv) {
    inv = new $CompoundTag()
    nbt.put('Inventory', inv)
  }

  // 读取当前 Items 列表
  let itemsList = inv.get('Items')
  if (!itemsList || !(itemsList instanceof $ListTag)) {
    itemsList = new $ListTag()
    inv.put('Items', itemsList)
  }

  // 构建槽位映射
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

  // 处理每种弹药
  for (let ammoKey in ammoPlan) {
    if (!ammoPlan.hasOwnProperty(ammoKey)) continue
    let needCount = ammoPlan[ammoKey]
    if (needCount <= 0) continue

    let ammoId = AMMO_ID_MAP[ammoKey]
    if (!ammoId) {
      sbwLog('[补给站] 未知弹药类型: ' + ammoKey)
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
      let listEntry = itemsList.get(es.entry.listIndex)
      if (listEntry instanceof $CompoundTag) {
        listEntry.putInt('count', es.entry.count)
      }
    }

    if (needCount <= 0) continue

    // 找空槽位
    let emptySlot = -1
    for (let s = 0; s < 54; s++) {
      if (!usedSlots[s]) { emptySlot = s; break }
    }
    if (emptySlot < 0) {
      sbwLog('[补给站] 载具槽位已满，无法继续补充 ' + ammoKey)
      continue
    }

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

      emptySlot = -1
      for (let s = 0; s < 54; s++) {
        if (!usedSlots[s]) { emptySlot = s; break }
      }
    }
  }

  // 写入实体 NBT
  if (totalAdded > 0) {
    try {
      entity.setNbt(nbt)
    } catch (e) {
      sbwLog('[补给站] 写入 NBT 失败: ' + e)
      return 0
    }
  }

  return totalAdded
}

// ============================================================
// 补充武器预装弹
// ============================================================

function replenishWeaponAmmo(entity, deployNBT, threshold) {
  if (!entity || !deployNBT || !deployNBT.WeaponState) return 0

  let nbt = entity.getNbt()
  if (!nbt) return 0

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

    let comp = wc.getCompound('components')
    if (!comp) { comp = new $CompoundTag(); wc.put('components', comp) }
    let cd = comp.getCompound('minecraft:custom_data')
    if (!cd) { cd = new $CompoundTag(); comp.put('minecraft:custom_data', cd) }
    let gd = cd.getCompound('GunData')
    if (!gd) { gd = new $CompoundTag(); cd.put('GunData', gd) }

    let currentAmmo = gd.contains('Ammo') ? gd.getInt('Ammo') : 0

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
