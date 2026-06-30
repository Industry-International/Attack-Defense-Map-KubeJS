// ============================================================
// 弹药补给站 - 方块核心逻辑
//
// 依赖：
//   a_config.js（DEFAULT_STATION_CONFIG, readBlockConfig 等）
//   tools/database.js（getVehicleById, getAmmoType, getAmmoShortName 等）
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
//
// ⚠ 位置获取：使用 entity.getX()/getY()/getZ() 而非 entity.getPosition()
//         后者在 1.21.1 KubeJS 7 中不存在
// ============================================================

var $LOG_PREFIX = '[弹药补给站]'

// ═══════════════════════════════════════════════════════════════
//  方块放置：写入一次默认配置，后续全由 GUI 接管
// ═══════════════════════════════════════════════════════════════

BlockEvents.placed('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return
  let pd = event.block.entity.persistentData
  if (!pd.contains('StationConfig')) {
    pd.putString('StationConfig', JSON.stringify(DEFAULT_STATION_CONFIG))
    event.block.entity.setChanged()
    console.log($LOG_PREFIX + ' 方块放置，写入默认配置')
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

  // ★ 修复：旧方块（GUI更新前放置的）没有 BlockEntity → 自动迁移
  if (!block.entity) {
    console.log($LOG_PREFIX + ' 检测到旧方块（无BlockEntity），自动迁移...')
    try {
      let server = event.level.getServer()
      let x = pos.getX(); let y = pos.getY(); let z = pos.getZ()
      // 用 setblock 强制刷新方块，触发新注册的 BlockEntity 创建
      server.runCommandSilent('setblock ' + x + ' ' + y + ' ' + z + ' kubejs:ammo_crate replace')
      player.tell(Component.literal('§a[弹药补给站] 方块已升级！请再次右键打开 GUI'))
      console.log($LOG_PREFIX + ' 方块迁移完成 [' + x + ',' + y + ',' + z + ']')
    } catch (e) {
      console.log($LOG_PREFIX + ' 方块迁移失败: ' + e)
      player.tell(Component.literal('§c[弹药补给站] 方块自动升级失败，请破坏后重新放置'))
    }
    event.cancel()
    return
  }

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
    console.log($LOG_PREFIX + ' GUI打开失败: ' + e)
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

  // 安全检查：没有 BlockEntity 就不处理（旧方块迁移后不应再出现）
  if (!block.entity) return

  let pd = block.entity.persistentData

  // ─── 检查 GUI 提交的保存请求（跨作用域 NBT 标记模式） ───
  if (pd.getBoolean('PendingSave') === true) {
    pd.putBoolean('PendingSave', false)
    var rawConfig = pd.getString('PendingSaveConfig')
    if (rawConfig && rawConfig !== '') {
      try {
        var parsed = JSON.parse(rawConfig)
        // 验证必要字段
        if (parsed.scanRange !== undefined && parsed.cooldown !== undefined) {
          pd.putString('StationConfig', rawConfig)
          pd.putLong('CooldownEnd', 0)
          console.log($LOG_PREFIX + ' 已应用 GUI 保存的配置: ' + rawConfig)
        } else {
          console.log($LOG_PREFIX + ' PendingSaveConfig 字段不完整，跳过')
        }
      } catch (e) {
        console.log($LOG_PREFIX + ' PendingSaveConfig JSON 解析失败: ' + e)
      }
    }
    pd.remove('PendingSaveConfig')
    block.entity.setChanged()
  }

  // ─── 检查是否有 GUI 提交的手动补给请求 ───
  if (pd.getBoolean('PendingReplenish') === true) {
    pd.putBoolean('PendingReplenish', false)
    block.entity.setChanged()
    console.log($LOG_PREFIX + ' 检测到手动补给请求，忽略冷却执行')
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
    if (!ignoreCooldown && gameTime < cooldownEnd) {
      // 冷却中，跳过
      return false
    }

    let pos = block.getPos()
    let bx = pos.getX(), by = pos.getY(), bz = pos.getZ()

    // 获取方块所在维度名称，便于日志定位
    let dimStr = level.getDimension().toString()

    // ─── 3. 遍历世界实体，找出范围内 SBW 载具 ───
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

    // 记录载具进度（用于发送给乘客的 HUD 动画）
    let vehicleProgress = {}  // uuid → { elapsed, enterDelayTicks, status }

    while (eIter.hasNext()) {
      let entity = eIter.next()
      if (!entity || entity.isRemoved()) continue
      if (!isSBWVehicle(entity)) continue

      // ★ 关键修复：使用 getX()/getY()/getZ() 而非 getPosition()
      let ex = entity.getX()
      let ey = entity.getY()
      let ez = entity.getZ()

      let dx = Math.abs(ex - (bx + 0.5))
      let dy = Math.abs(ey - (by + 0.5))
      let dz = Math.abs(ez - (bz + 0.5))
      let inRange = (dx <= range && dy <= range && dz <= range)

      let typeStr = entity.getType().toString()
      let uuid = entity.uuid.toString()

      if (!inRange) continue

      // 载具在范围内
      detectedUUIDs[uuid] = true

      if (timers[uuid] === undefined) {
        // 首次进入范围：记录当前 gameTime
        timers[uuid] = gameTime
        vehicleProgress[uuid] = { entity: entity, elapsed: 0, enterDelayTicks: enterDelayTicks, status: 'timing' }
      } else {
        // 已在计时中：检查是否达到停留时长
        let elapsed = gameTime - timers[uuid]

        // ★ 修复跨 session 负数问题：若残留旧 timer 值 > 当前 gameTime，
        //   说明是之前会话的数据，重置计时器重新开始计时
        if (elapsed < 0) {
          timers[uuid] = gameTime
          elapsed = 0
          sbwLog($LOG_PREFIX + ' [计时] 载具残留计时器（负数）已重置')
        }

        vehicleProgress[uuid] = { entity: entity, elapsed: elapsed, enterDelayTicks: enterDelayTicks, status: 'timing' }

        if (elapsed >= enterDelayTicks) {
          // 停留时间达标 → 补给

          // 从数据包载具数据库查询该车应补什么弹药
          var targetSlots = {}
          var vehicleInfo = getVehicleById(typeStr)
          var matched = null
          if (vehicleInfo && vehicleInfo.ammoSlots) {
            // 将 ammoSlots（full ID key）转换为短名 key，匹配补给站配置
            matched = []
            var ammoKeys = Object.keys(vehicleInfo.ammoSlots)
            for (var ai = 0; ai < ammoKeys.length; ai++) {
              var shortName = getAmmoShortName(ammoKeys[ai])
              if (shortName) matched.push(shortName)
            }
          }
          if (matched && matched.length > 0) {
            for (var mi = 0; mi < matched.length; mi++) {
              if (slots[matched[mi]] !== undefined) targetSlots[matched[mi]] = slots[matched[mi]]
            }
          } else {
            targetSlots = slots
          }

          let success = replenishVehicle(entity, targetSlots, level)
          if (success) {
            replenishedAny = true
            sbwLog($LOG_PREFIX + ' 载具 ' + uuid.substring(0, 8) + '... 补给成功')
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
      }
    }

    // ─── 5. 写回计时数据（有变动时才写） ───
    if (Object.keys(detectedUUIDs).length > 0 || changed) {
      pd.putString('VehicleTimers', JSON.stringify(timers))
      block.entity.setChanged()
    }

    // ─── 6. 若执行了补给，设置冷却 ───
    if (replenishedAny) {
      let cooldownEndTime = gameTime + cooldownSec * 20
      pd.putLong('CooldownEnd', cooldownEndTime)
      block.entity.setChanged()
    }

    // ─── 7. 推送动作栏进度给乘客 ───
    // 服务器直接在动作栏显示进度（不依赖客户端事件系统）
    // $Component 已在 tools/a_java_refs.js 声明，直接使用
    for (let uuid in vehicleProgress) {
      if (!vehicleProgress.hasOwnProperty(uuid)) continue
      let info = vehicleProgress[uuid]
      let entity = info.entity
      if (!entity || entity.isRemoved()) continue
      let passIter = entity.getPassengers().iterator()
      while (passIter.hasNext()) {
        let passenger = passIter.next()
        if (!passenger) continue
        if (!passenger.isPlayer()) continue
        let player = passenger  // isPlayer() 已确认是玩家，直接使用

        let progress = Math.min(1.0, info.elapsed / info.enterDelayTicks)
        let pct = Math.floor(progress * 100)

        // 圆环字符（5级：○◔◑◕●）
        var circle
        if (progress >= 1.0) circle = '§a●'
        else if (progress >= 0.75) circle = '§e◕'
        else if (progress >= 0.50) circle = '§6◑'
        else if (progress >= 0.25) circle = '§e◔'
        else circle = '§7○'

        // 进度条（20格）
        var bar = ''
        for (var bi = 0; bi < 20; bi++) {
          bar += (bi < Math.floor(progress * 20)) ? '§a■' : '§8□'
        }

        // 状态文本
        var status = (progress >= 1.0) ? '§e补给中...' : '§e弹药补给中'

        // 组合并发送到动作栏（第二个参数 true = action bar）
        player.displayClientMessage(
          $Component.literal(circle + ' ' + status + ' §a' + pct + '% ' + bar),
          true
        )
      }
    }
    // 对离开范围的车辆，清除残留动作栏（不处理也没关系，2秒后无更新自动消失）

    return replenishedAny
  } catch (e) {
    console.log($LOG_PREFIX + ' 执行补给出错: ' + e)
    // 打印完整的堆栈信息便于调试
    console.log($LOG_PREFIX + ' 错误堆栈: ' + e.printStackTrace)
    return false
  }
}

// ═══════════════════════════════════════════════════════════════
//  辅助函数
// ═══════════════════════════════════════════════════════════════

/**
 * 判断实体是否为 SBW/MCSP 载具（SBW本体 + MCSP附属模组）
 *
 * 使用 entity.getType() 获取实体类型注册名，
 * 验证是否以 "superbwarfare:" 或 "mcsp:" 开头。
 * 不依赖 NBT 的 id 字段（1.21.1 中该字段可能不可靠）。
 */
function isSBWVehicle(entity) {
  try {
    let type = entity.getType()
    if (!type) return false
    let typeStr = type.toString()
    return typeStr !== null && (typeStr.startsWith('superbwarfare:') || typeStr.startsWith('mcsp:'))
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
 *   6. 通过 /data merge entity 命令将修改后的 Inventory 写回实体
 *      （避免 entity.nbt = nbt 重置整个实体状态，导致玩家乘坐时断连）
 *
 * @param {Entity} entity - SBW/MCSP 载具实体
 * @param {Object} slots  - 弹药类型→最大储量配置
 * @param {Level}  level  - 实体所在维度（用于获取 Server 执行命令）
 */
function replenishVehicle(entity, slots, level) {
  try {
    let nbt = entity.nbt
    if (!nbt) {
      return false
    }
    if (!nbt.contains('Inventory')) {
      return false
    }

    let inventory = nbt.getCompound('Inventory')
    if (!inventory.contains('Items')) {
      return false
    }

    // ★ getList(key) 在1.21.1需要第二个参数 elementType（10 = CompoundTag）
    let items = inventory.getList('Items', 10)
    let itemCount = items.size()

    // ─── 统计每种弹药当前总量 ───
    let currentCounts = {}
    for (var i = 0; i < itemCount; i++) {
      let item = items.get(i)
      if (!(item instanceof $CompoundTag)) continue
      let itemId = item.getString('id')
      let ammoKey = getAmmoShortName(itemId)
      if (!ammoKey) continue
      let count = item.getInt('count')
      currentCounts[ammoKey] = (currentCounts[ammoKey] || 0) + count
    }

    // ─── 计算需要补充的量 ───
    // 遍历 GUI 配置的所有弹药类型，按设置的最大值补满
    let needToAdd = {}
    for (let ammoKey in slots) {
      if (!slots.hasOwnProperty(ammoKey)) continue
      let maxVal = slots[ammoKey]
      let current = currentCounts[ammoKey] || 0
      if (current >= maxVal) continue
      needToAdd[ammoKey] = maxVal - current
    }

    if (Object.keys(needToAdd).length === 0) {
      return false
    }

    // ─── 先在现有物品组上叠加 ───
    for (var i = 0; i < items.size(); i++) {
      let item = items.get(i)
      if (!(item instanceof $CompoundTag)) continue
      let itemId = item.getString('id')
      let ammoKey = getAmmoShortName(itemId)
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
        var ammoTypeInfo = getAmmoType(ammoKey)
        let itemId = ammoTypeInfo ? ammoTypeInfo.id : null
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
    // 方案A：/data merge entity（用于持久化，服务器重启后生效）
    inventory.put('Items', items)
    let inventorySnbt = inventory.toString()
    let uuid = entity.uuid.toString()
    let server = level.getServer()
    server.runCommandSilent('data merge entity ' + uuid + ' {Inventory:' + inventorySnbt + '}')

    // 方案B：/item replace entity（直接操作物品栏，立即可见+玩家乘坐时也有效）
    // 遍历所有槽位，将修改后的物品逐个写入
    for (var si = 0; si < items.size(); si++) {
      let slotItem = items.get(si)
      if (!(slotItem instanceof $CompoundTag)) continue
      let slotNum = slotItem.getInt('Slot')
      let itemId = slotItem.getString('id')
      let count = slotItem.getInt('count')
      // /item replace entity <target> <source> <item> [count]
      server.runCommandSilent('item replace entity ' + uuid + ' container.' + slotNum + ' ' + itemId + ' ' + count)
    }

    return true
  } catch (e) {
    console.log($LOG_PREFIX + ' 载具补给出错: ' + e)
    console.log($LOG_PREFIX + ' 错误堆栈: ' + e.printStackTrace)
    return false
  }
}
