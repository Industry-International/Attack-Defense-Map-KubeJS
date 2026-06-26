// ============================================================
// 弹药补给站 - 方块核心逻辑
//
// 依赖：
//   a_config.js（DEFAULT_STATION_CONFIG, AMMO_ID_MAP, AMMO_KEY_MAP 等）
//   startup_scripts/src/blocks/ammo_crate/gui.js（GUI UI 注册）
//
// 功能：
//   1. 右键点击方块 → 读取配置 → 打开 LDLib2 配置 GUI
//   2. BlockEntity 每 20 tick 执行一次扫描补给
//   3. 遍历世界实体 → 匹配 SBW 载具 → 检查 Inventory 弹药 → 补到配置最大值
//   4. 载具需在范围内停留 enterDelay 秒后才会触发补给
//   5. 补给后进入冷却 CD（配置项：秒）
//   6. 车辆离开范围则重置其停留计时
//
// ⚠ 注意：所有方块 NBT 读写后必须调用 block.entity.setChanged()
//         否则数据不会保存到磁盘，重启后丢失
//         不要使用 block.getEntityData()/setEntityData()
// ============================================================

// ═══════════════════════════════════════════════════════════════
//  方块放置：写入一次默认配置，后续全由 GUI 接管
// ═══════════════════════════════════════════════════════════════

BlockEvents.placed('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return
  let pd = event.block.entity.persistentData
  if (!pd.contains('StationConfig')) {
    pd.putString('StationConfig', JSON.stringify(DEFAULT_STATION_CONFIG))
    event.block.entity.setChanged()
  }
})

// ═══════════════════════════════════════════════════════════════
//  右键交互：打开 GUI
// ═══════════════════════════════════════════════════════════════

BlockEvents.rightClicked('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return

  let player = event.player
  let block = event.block
  let pos = block.getPos()

  try {
    let cfg = readBlockConfig(block)
    // 读取作弊模式状态，传给 GUI 控制按钮显隐
    let cheatMode = block.entity.persistentData.CheatMode === true

    let cacheData = JSON.stringify({
      pos: { x: pos.getX(), y: pos.getY(), z: pos.getZ() },
      dim: event.level.getDimension().toString(),
      config: cfg,
      cheatMode: cheatMode
    })
    global.ammoStationGuiCache.put(player.uuid, cacheData)

    LDLib2UIFactory.openBlockUI(player, pos, 'kubejs:ammo_station_cfg')
  } catch (e) {
    console.log('[弹药补给站] GUI打开失败: ' + e)
    player.tell(Component.literal('§c[弹药补给站] GUI加载失败: ' + e))
  }

  event.cancel()
})

// ═══════════════════════════════════════════════════════════════
//  BlockEntity Tick：扫描 → 停留计时 → 补给 → 冷却
// ═══════════════════════════════════════════════════════════════

BlockEvents.blockEntityTick('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return
  let block = event.block
  let level = event.level
  let pd = block.entity.persistentData

  // ─── 检查是否有 GUI 提交的手动补给请求 ───
  if (pd.getBoolean('PendingReplenish') === true) {
    pd.putBoolean('PendingReplenish', false)
    block.entity.setChanged()
    executeStationReplenish(block, level, true)
  }

  // Tick 调用：检查冷却（第三个参数 false）
  executeStationReplenish(block, level, false)
})

// ═══════════════════════════════════════════════════════════════
//  核心补给函数（Tick 和手动触发共用）
// ═══════════════════════════════════════════════════════════════

/**
 * 对指定方块执行一次完整的扫描+停留计时+补给流程
 *
 * 此函数可被 BlockEntity Tick 自动调用，也可被 GUI 的
 * 手动触发按钮通过 setOnServerClick 调用。
 *
 * @param {Block}   block          - 弹药补给站方块
 * @param {Level}   level          - 方块所在维度
 * @param {boolean} ignoreCooldown - 是否忽略冷却（手动触发=true, Tick调用=false）
 * @returns {boolean} 是否执行了补给
 */
function executeStationReplenish(block, level, ignoreCooldown) {
  try {
    // ─── 1. 读取方块配置 ───
    let cfg = readBlockConfig(block)
    let range = cfg.scanRange || 12
    let cooldownSec = cfg.cooldown || 5
    let enterDelay = cfg.enterDelay || 3   // 秒
    let slots = cfg.slots || {}

    // ─── 2. 检查冷却（手动触发无视冷却） ───
    let pd = block.entity.persistentData
    let cooldownEnd = pd.getLong('CooldownEnd')
    let gameTime = level.getTime()
    if (!ignoreCooldown && gameTime < cooldownEnd) return false

    let pos = block.getPos()
    let bx = pos.getX(), by = pos.getY(), bz = pos.getZ()

    // ─── 3. 遍历世界实体，找出范围内 SBW 载具 ───
    //     使用 level.getEntities() 遍历（兼容 KubeJS 7），
    //     手动进行距离过滤。
    let entities = level.getEntities()
    let eIter = entities.iterator()

    // 记录本次检测到的载具 UUID（用于清理离开的车辆计时）
    let detectedUUIDs = {}

    // 读取/初始化车辆停留计时数据（JSON 字符串，存活周期与方块一致）
    let timerRaw = pd.getString('VehicleTimers')
    let timers = {}
    if (timerRaw) {
      try { timers = JSON.parse(timerRaw) } catch (_) { timers = {} }
    }

    let replenishedAny = false
    let enterDelayTicks = enterDelay * 20

    while (eIter.hasNext()) {
      let entity = eIter.next()
      if (!entity || entity.isRemoved()) continue
      if (!isSBWVehicle(entity)) continue

      let ePos = entity.getPosition()
      let dx = Math.abs(ePos.x - (bx + 0.5))
      let dy = Math.abs(ePos.y - (by + 0.5))
      let dz = Math.abs(ePos.z - (bz + 0.5))
      if (dx > range || dy > range || dz > range) continue

      // 载具在范围内
      let uuid = entity.getStringUUID()
      detectedUUIDs[uuid] = true

      if (timers[uuid] === undefined) {
        // 首次进入范围：记录当前 gameTime
        timers[uuid] = gameTime
        // console.log('[弹药补给站] 载具 ' + uuid + ' 进入范围，计时开始')
      } else {
        // 已在计时中：检查是否达到停留时长
        let elapsed = gameTime - timers[uuid]
        if (elapsed >= enterDelayTicks) {
          // 停留时间达标 → 补给
          // console.log('[弹药补给站] 载具 ' + uuid + ' 停留 ' + (elapsed / 20) + 's，执行补给')
          if (replenishVehicle(entity, slots)) {
            replenishedAny = true
          }
          // 补给后移除计时（下次进入重新计时）
          delete timers[uuid]
        }
      }
    }

    // ─── 4. 清理已离开范围的车辆计时 ───
    let changed = false
    for (let uuid in timers) {
      if (!timers.hasOwnProperty(uuid)) continue
      if (!detectedUUIDs[uuid]) {
        delete timers[uuid]
        changed = true
        // console.log('[弹药补给站] 载具 ' + uuid + ' 离开范围，计时清除')
      }
    }

    // ─── 5. 写回计时数据（有变动时才写） ───
    if (Object.keys(detectedUUIDs).length > 0 || changed) {
      pd.putString('VehicleTimers', JSON.stringify(timers))
      block.entity.setChanged()
    }

    // ─── 6. 若执行了补给，设置冷却 ───
    if (replenishedAny) {
      pd.putLong('CooldownEnd', gameTime + cooldownSec * 20)
      block.entity.setChanged()
    }

    return replenishedAny
  } catch (e) {
    console.log('[弹药补给站] 执行补给出错: ' + e)
    return false
  }
}

// ═══════════════════════════════════════════════════════════════
//  辅助函数
// ═══════════════════════════════════════════════════════════════

/**
 * 判断实体是否为 SBW（卓越前线）载具
 *
 * 使用 entity.getType() 获取实体类型注册名，
 * 验证是否以 "superbwarfare:" 开头。
 * 不依赖 NBT 的 id 字段（1.21.1 中该字段可能不可靠）。
 */
function isSBWVehicle(entity) {
  try {
    let type = entity.getType()
    if (!type) return false
    let typeStr = type.toString()
    return typeStr !== null && typeStr.startsWith('superbwarfare:')
  } catch (e) {
    return false
  }
}

/**
 * 补给单辆载具的弹药
 *
 * 流程：
 *   1. 读取载具 Inventory.Items 列表
 *   2. 统计每种弹药的当前总数量
 *   3. 对比配置最大值，计算差额
 *   4. 先在现有物品组上叠加（不超单组64）
 *   5. 剩余不足的以新物品组添加
 *   6. 将修改后的 NBT 写回实体
 */
function replenishVehicle(entity, slots) {
  try {
    let nbt = entity.nbt
    if (!nbt || !nbt.contains('Inventory')) return false

    let inventory = nbt.getCompound('Inventory')
    if (!inventory.contains('Items')) return false

    let items = inventory.getList('Items')
    let itemCount = items.size()
    if (itemCount === 0) return false

    // ─── 统计每种弹药当前总量 ───
    let currentCounts = {}
    for (var i = 0; i < itemCount; i++) {
      let item = items.get(i)
      if (!(item instanceof $CompoundTag)) continue
      let itemId = item.getString('id')
      let ammoKey = AMMO_KEY_MAP[itemId]
      if (!ammoKey) continue
      let count = item.getInt('count')
      currentCounts[ammoKey] = (currentCounts[ammoKey] || 0) + count
    }

    if (Object.keys(currentCounts).length === 0) return false

    // ─── 计算需要补充的量 ───
    let needToAdd = {}
    for (let ammoKey in currentCounts) {
      if (!currentCounts.hasOwnProperty(ammoKey)) continue
      let current = currentCounts[ammoKey]
      let maxVal = slots[ammoKey]
      if (maxVal === undefined || maxVal === null) continue
      if (current >= maxVal) continue
      needToAdd[ammoKey] = maxVal - current
    }

    if (Object.keys(needToAdd).length === 0) return false

    // ─── 先在现有物品组上叠加 ───
    for (var i = 0; i < items.size(); i++) {
      let item = items.get(i)
      if (!(item instanceof $CompoundTag)) continue
      let itemId = item.getString('id')
      let ammoKey = AMMO_KEY_MAP[itemId]
      if (!ammoKey || !needToAdd[ammoKey]) continue

      let currentCount = item.getInt('count')
      let toAdd = needToAdd[ammoKey]
      let canAdd = Math.min(toAdd, 64 - currentCount)
      if (canAdd <= 0) continue

      item.putInt('count', currentCount + canAdd)
      items.set(i, item)

      needToAdd[ammoKey] -= canAdd
      if (needToAdd[ammoKey] <= 0) {
        delete needToAdd[ammoKey]
        if (Object.keys(needToAdd).length === 0) break
      }
    }

    // ─── 若还有剩余，添加新物品组 ───
    if (Object.keys(needToAdd).length > 0) {
      let nextSlot = items.size()
      for (let ammoKey in needToAdd) {
        if (!needToAdd.hasOwnProperty(ammoKey)) continue
        let remaining = needToAdd[ammoKey]
        let itemId = AMMO_ID_MAP[ammoKey]
        if (!itemId) continue

        while (remaining > 0) {
          let addCount = Math.min(remaining, 64)
          let newItem = new $CompoundTag()
          newItem.putString('id', itemId)
          newItem.putInt('count', addCount)
          newItem.putInt('Slot', nextSlot)
          items.add(newItem)
          nextSlot++
          remaining -= addCount
        }
      }

      // 重新整理 Slot 编号
      for (var j = 0; j < items.size(); j++) {
        let slotItem = items.get(j)
        if (slotItem instanceof $CompoundTag) {
          slotItem.putInt('Slot', j)
          items.set(j, slotItem)
        }
      }
    }

    // ─── 写回实体 NBT ───
    inventory.put('Items', items)
    nbt.put('Inventory', inventory)
    entity.nbt = nbt

    return true
  } catch (e) {
    console.log('[弹药补给站] 载具补给出错: ' + e)
    return false
  }
}
