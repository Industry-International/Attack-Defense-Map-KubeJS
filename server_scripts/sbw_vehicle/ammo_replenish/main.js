// ============================================================
// 弹药补给站 - 方块驱动核心逻辑（简化版）
//
// 依赖：
//   a_config.js  — DEFAULT_STATION_CONFIG / AMMO_ID_MAP / readBlockConfig / writeBlockConfig
//   tools/       — extractVehicleIdFromEntity（misc.js）
//   a_java_refs  — $AABB / $CompoundTag / $ListTag（跨文件可见）
//
// 工作流程（每 20 tick ≈ 1 秒执行一次）：
//   1. 读取方块配置（scanRange / cooldown / slots）
//   2. 检查冷却（基于 gameTime）
//   3. AABB 扫描范围内卓越前线载具
//   4. 对每辆载具：
//      a) 读取其 Inventory.Items
//      b) 找出已有弹药类型
//      c) 对每种已有弹药，若当前总量 < 配置上限则补至上限
//   5. 进入冷却
//
// 右键交互：
//   打开 LDLib2 配置 GUI（startup_scripts/ammo_station_gui.js）
// ============================================================

var $AABB = Java.loadClass('net.minecraft.world.phys.AABB')

// ============================================================
// BlockEntity Tick - 每个方块独立驱动（每20tick ≈ 1秒）
// ============================================================

BlockEvents.blockEntityTick('kubejs:ammo_crate', event => {
  let level = event.getLevel()
  if (level.isClientSide()) return
  let block = event.getBlock()
  let gameTime = level.gameTime

  // 1. 读取配置
  let cfg = readBlockConfig(block)

  // 2. 检查冷却
  let pd = block.persistentData
  let cooldownEnd = pd.contains('CooldownEnd') ? pd.getLong('CooldownEnd') : 0
  if (gameTime < cooldownEnd) return  // 仍在冷却

  // 3. AABB 扫描范围内载具
  let vehicles = scanSBWVehicles(level, block, cfg.scanRange)
  if (vehicles.length === 0) return

  // 4. 对每辆载具执行补给
  let replenishedCount = 0
  let totalAdded = 0

  for (let i = 0; i < vehicles.length; i++) {
    let added = replenishVehicle(vehicles[i], cfg.slots)
    if (added > 0) {
      replenishedCount++
      totalAdded += added
    }
  }

  // 5. 进入冷却（cooldown 单位：秒 → tick）
  if (totalAdded > 0) {
    let cooldownTicks = Math.max(1, cfg.cooldown * 20)
    pd.putLong('CooldownEnd', gameTime + cooldownTicks)
    notifyNearbyPlayers(level, block, replenishedCount, totalAdded)
  }
})

// ============================================================
// 右键交互：打开 LDLib2 配置 GUI
// ============================================================

BlockEvents.rightClicked('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return
  let player = event.player
  let pos = event.block.getPos()

  try {
    // GUI handler (startup_scripts/ammo_station_gui.js) 会直接从方块读取配置
    LDLib2UIFactory.openBlockUI(player, pos, 'kubejs:ammo_station_cfg')
  } catch (e) {
    console.log('[弹药补给站] GUI打开失败: ' + e)
    player.tell(Component.literal('§c[弹药补给站] GUI加载失败，请确认LDLib2已安装'))
  }

  event.cancel()
})

// ============================================================
// AABB 扫描范围内卓越前线载具
// ============================================================

function scanSBWVehicles(level, block, range) {
  let bx = block.getX(), by = block.getY(), bz = block.getZ()
  let aabb = new $AABB(bx - range, by - range, bz - range,
                         bx + range, by + range, bz + range)
  let entities = level.getEntities(null, aabb)
  if (!entities || entities.size() === 0) return []

  let results = []
  let iter = entities.iterator()
  while (iter.hasNext()) {
    let entity = iter.next()
    if (!entity) continue
    // 通过标签判断是否为 SBW 载具（标签以 sbw_vehicle_ 开头）
    let vid = extractVehicleIdFromEntity(entity)
    if (!vid) continue
    results.push({ entity: entity, id: vid })
  }

  return results
}

// ============================================================
// 对单辆载具执行补给
// 检查 Inventory 中已有的弹药类型，只补这些类型到配置上限
// ============================================================

function replenishVehicle(entity, ammoMaxMap) {
  if (!entity || !ammoMaxMap) return 0

  let nbt = entity.getNbt()
  if (!nbt) return 0

  // 读取 Inventory.Items
  let inv = nbt.get('Inventory')
  if (!inv) return 0
  let itemsList = inv.get('Items')
  if (!itemsList || itemsList.size() === 0) return 0

  // 构建当前弹药汇总：ammoShortName → { totalCount, slots: [{slot, count, listIndex}] }
  let ammoSummary = {}
  for (let i = 0; i < itemsList.size(); i++) {
    let item = itemsList.get(i)
    if (!(item instanceof $CompoundTag)) continue
    let id = item.getString('id')
    // 只关心 superwarfare 弹药
    let ammoKey = AMMO_KEY_MAP[id]
    if (!ammoKey) continue

    let slot = item.getInt('Slot')
    let count = item.getInt('count')
    if (count <= 0) continue

    if (!ammoSummary[ammoKey]) {
      ammoSummary[ammoKey] = { totalCount: 0, slots: [] }
    }
    ammoSummary[ammoKey].totalCount += count
    ammoSummary[ammoKey].slots.push({ slot: slot, count: count, listIndex: i })
  }

  if (Object.keys(ammoSummary).length === 0) return 0

  // 执行补充
  let totalAdded = 0
  let needsWrite = false

  for (let ammoKey in ammoSummary) {
    if (!ammoSummary.hasOwnProperty(ammoKey)) continue
    let maxCount = ammoMaxMap[ammoKey]
    if (maxCount === undefined || maxCount <= 0) continue  // 未配置或禁止补充

    let summary = ammoSummary[ammoKey]
    let currentTotal = summary.totalCount
    let needCount = maxCount - currentTotal
    if (needCount <= 0) continue  // 已达到或超过上限

    // 优先填满已有槽位
    let slots = summary.slots
    // 按槽位号排序（从小到大）
    slots.sort(function(a, b) { return a.slot - b.slot })

    for (let si = 0; si < slots.length; si++) {
      if (needCount <= 0) break
      let s = slots[si]
      let space = 64 - s.count
      if (space <= 0) continue
      let add = Math.min(needCount, space)
      s.count += add
      needCount -= add
      totalAdded += add
      // 更新 NBT List 中的条目
      let listEntry = itemsList.get(s.listIndex)
      if (listEntry instanceof $CompoundTag) {
        listEntry.putInt('count', s.count)
      }
      needsWrite = true
    }

    // 如果还需要更多，找空槽位新建物品堆
    if (needCount > 0) {
      let usedSlots = {}
      for (let si = 0; si < itemsList.size(); si++) {
        let entry = itemsList.get(si)
        if (entry instanceof $CompoundTag) {
          usedSlots[entry.getInt('Slot')] = true
        }
      }
      // 尝试填充剩余需求
      while (needCount > 0) {
        let emptySlot = -1
        for (let s = 0; s < 54; s++) {
          if (!usedSlots[s]) { emptySlot = s; break }
        }
        if (emptySlot < 0) break  // 没有空槽了

        let add = Math.min(needCount, 64)
        let newItem = new $CompoundTag()
        newItem.putInt('Slot', emptySlot)
        newItem.putString('id', AMMO_ID_MAP[ammoKey])
        newItem.putInt('count', add)
        itemsList.add(newItem)
        usedSlots[emptySlot] = true
        needCount -= add
        totalAdded += add
        needsWrite = true
      }
    }
  }

  // 写入实体 NBT
  if (needsWrite && totalAdded > 0) {
    try {
      entity.setNbt(nbt)
    } catch (e) {
      console.log('[弹药补给站] 写入 NBT 失败: ' + e)
      return 0
    }
  }

  return totalAdded
}

// ============================================================
// 通知附近玩家
// ============================================================

function notifyNearbyPlayers(level, block, vehicleCount, totalAdded) {
  let bx = block.getX(), by = block.getY(), bz = block.getZ()
  let players = level.players()
  if (!players || players.size() === 0) return

  let iter = players.iterator()
  while (iter.hasNext()) {
    let player = iter.next()
    let px = player.getX(), py = player.getY(), pz = player.getZ()
    let dx = px - bx, dy = py - by, dz = pz - bz
    let dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
    if (dist <= 24) {
      player.tell(Component.literal(
        '§6[弹药补给站] §a已为 §e' + vehicleCount + ' §a辆载具补充弹药 §7(共 §e' + totalAdded + ' §7个)'
      ))
    }
  }
}
