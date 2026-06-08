// ============================================================
// 职业装备发放命令 - profequip
// 指令: /profequip give [<targets>]
//       /profequip help
//       /profequip list
// 目标: @a @p @s @r <玩家名> (留空 = 自己)
// 权限: OP 2 级
// ============================================================

// ========== 1. 兵种装备配置 ==========

/** 根据兵种ID获取装备配置（用switch确保精准匹配） */
function getProfConfig(id) {
  switch (id) {
    case 'assault':
      return {
        armor: [
          'minecraft:iron_boots',
          'minecraft:iron_leggings',
          'minecraft:iron_chestplate',
          'minecraft:iron_helmet',
        ],
        extras: [
          { item: 'minecraft:cooked_beef', count: 32 },
        ],
      }
    case 'scout':
      return {
        armor: [
          'minecraft:leather_boots',
          'minecraft:leather_leggings',
          'minecraft:leather_chestplate',
          'minecraft:leather_helmet',
        ],
        extras: [
          { item: 'minecraft:cooked_beef', count: 16 },
          { item: 'minecraft:arrow', count: 128 },
        ],
      }
    case 'medic':
      return {
        armor: [
          'minecraft:chainmail_boots',
          'minecraft:chainmail_leggings',
          'minecraft:chainmail_chestplate',
          'minecraft:golden_helmet',
        ],
        extras: [
          { item: 'minecraft:cooked_beef', count: 16 },
          { item: 'minecraft:splash_potion', count: 6, tag: '{Potion:"minecraft:healing"}' },
          { item: 'minecraft:potion',        count: 3, tag: '{Potion:"minecraft:regeneration"}' },
        ],
      }
    case 'support':
      return {
        armor: [
          'minecraft:chainmail_boots',
          'minecraft:chainmail_leggings',
          'minecraft:diamond_chestplate',
          'minecraft:chainmail_helmet',
        ],
        extras: [
          { item: 'minecraft:cooked_beef', count: 32 },
          { item: 'minecraft:arrow', count: 256 },
        ],
      }
    default:
      return null
  }
}

// ========== 2. 武器解析 ==========

/** 主武器 id -> 物品（Java类型保证NBT正确） */
function resolveMainWeapon(id) {
  switch (id) {
    case 'sword':    return Item.of('minecraft:iron_sword')
    case 'bow':      return Item.of('minecraft:bow')
    case 'crossbow': return Item.of('minecraft:crossbow')
    case 'trident':  return Item.of('minecraft:trident')
    case 'ak47':
      return Item.of('tacz:modern_kinetic_gun', {
        custom_data: {
          HasBulletInBarrel: 1,
          GunId: 'tacz:ak47',
          GunFireMode: 'AUTO',
          GunCurrentAmmoCount: 30,
        },
      })
    default:         return null
  }
}

/** 副武器 id -> 物品 */
function resolveOffhandWeapon(id) {
  switch (id) {
    case 'shield': return Item.of('minecraft:shield')
    case 'totem':  return Item.of('minecraft:totem_of_undying')
    case 'mars':
      return Item.of('tacz:modern_kinetic_gun', {
        custom_data: {
          GunId: 'lavender:mars',
        },
      })
    default:       return null
  }
}

// ========== 3. TACZ 弹药配置 ==========

/**
 * 弹药配置（支持特殊武器覆盖）
 *   ammoId      — 弹药类型
 *   main        — 主武器总发数
 *   offhand     — 副武器总发数
 *   boxCapacity — 每个弹药盒容量
 *   level       — 弹药盒等级（2=钻石）
 */
const TACZ_AMMO = {
  ak47: { ammoId: 'tacz:762x39', main: 210, offhand: 50, boxCapacity: 60, level: 2 },
  mars: { ammoId: 'tacz:45acp',  main: 210, offhand: 50, boxCapacity: 60, level: 2 },
}

/** 给玩家发放弹药盒（按需拆分多盒） */
function giveTaczAmmo(player, weaponId, slot) {
  var cfg = TACZ_AMMO[weaponId]
  if (!cfg) return

  var total = slot === 'main' ? cfg.main : cfg.offhand
  var remaining = total

  while (remaining > 0) {
    var boxAmount = Math.min(remaining, cfg.boxCapacity)
    var box = Item.of('tacz:ammo_box', {
      custom_data: {
        AmmoCount: boxAmount,
        AmmoId: cfg.ammoId,
        Level: cfg.level,
      },
    })
    player.give(box)
    remaining -= boxAmount
  }
}

// ========== 4. 装备发放核心 ==========

/** 护甲槽位名（靴裤胸盔） */
var ARMOR_SLOTS = ['feet', 'legs', 'chest', 'head']

/**
 * 给单个玩家发放职业装备
 * @param {Internal.ServerPlayer} target
 * @returns {boolean} 是否成功
 */
function giveLoadout(target) {
  var prof   = target.persistentData.profession
  var mainWp = target.persistentData.mainWeapon
  var offWp  = target.persistentData.offhandWeapon

  if (!prof) {
    target.tell(Component.string('§c[装备发放] 请先使用职业选择器选择兵种！'))
    return false
  }
  if (!mainWp) {
    target.tell(Component.string('§c[装备发放] 请先选择主武器！'))
    return false
  }
  if (!offWp) {
    target.tell(Component.string('§c[装备发放] 请先选择副武器！'))
    return false
  }

  var config = getProfConfig(prof)
  if (!config) {
    target.tell(Component.string('§c[装备发放] 未知兵种: [' + prof + ']'))
    return false
  }

  // -------- ① 清空全身 + 背包 --------
  ARMOR_SLOTS.forEach(function(slot) {
    target.setItemSlot(slot, Item.of('minecraft:air'))
  })
  target.setItemSlot('mainhand', Item.of('minecraft:air'))
  target.setItemSlot('offhand',  Item.of('minecraft:air'))
  target.getInventory().clear()
  // 保留职业选择器
  target.give(Item.of('kubejs:profession_selector'))

  // -------- ② 护甲直接穿戴到身上 --------
  for (var i = 0; i < 4; i++) {
    target.setItemSlot(ARMOR_SLOTS[i], Item.of(config.armor[i]))
  }

  // -------- ③ 主武器 (直接装备主手 + 背包备用) --------
  var mainItem = resolveMainWeapon(mainWp)
  if (mainItem) {
    target.setItemSlot('mainhand', mainItem)
    target.give(mainItem.copy())
  }

  // -------- ④ 副武器 (直接装备副手 + 背包备用) --------
  var offhandItem = resolveOffhandWeapon(offWp)
  if (offhandItem) {
    target.setItemSlot('offhand', offhandItem)
    target.give(offhandItem.copy())
  }

  // -------- ⑤ 兵种额外物品 --------
  config.extras.forEach(function(entry) {
    var stack = entry.tag
      ? Item.of(entry.item, entry.tag)
      : Item.of(entry.item)
    stack.setCount(entry.count)
    target.give(stack)
  })

  // -------- ⑥ TACZ 弹药补给（主手210发 / 副手50发） --------
  giveTaczAmmo(target, mainWp, 'main')
  giveTaczAmmo(target, offWp, 'offhand')

  target.tell(Component.string('§a✔ 装备已发放完毕！'))
  return true
}

// ========== 5. 目标解析 ==========

/**
 * 解析选择器字符串为玩家列表
 */
function parseTargets(selector, executor, server) {
  var all = server.getPlayers()
  var list = []

  if (selector === '@a') {
    for (var i = 0; i < all.size(); i++) list.push(all.get(i))
  } else if (selector === '@p' || selector === '@s') {
    list.push(executor)
  } else if (selector === '@r') {
    var size = all.size()
    if (size > 0) list.push(all.get(Math.floor(Math.random() * size)))
  } else {
    for (var i = 0; i < all.size(); i++) {
      var p = all.get(i)
      if (p.getName().getString().toLowerCase() === selector.toLowerCase()) {
        list.push(p)
        break
      }
    }
  }
  return list
}

/**
 * 获取玩家当前职业选择的摘要字符串
 */
function getPlayerSummary(target) {
  var prof   = target.persistentData.profession || '§7无'
  var mainWp = target.persistentData.mainWeapon  || '§7无'
  var offWp  = target.persistentData.offhandWeapon || '§7无'
  var pName  = target.getName().getString()

  return '§e' + pName + ' §7→ 职业: §f' + prof + ' §7| 主手: §f' + mainWp + ' §7| 副手: §f' + offWp
}

// ========== 6. 命令入口 ==========

ServerEvents.basicCommand('profequip', event => {
  var player = event.getPlayer()
  if (!player || !player.isOp()) {
    player.tell(Component.string('§c你没有权限使用此指令'))
    return
  }

  var args = event.input.trim().split(/\s+/)
  var subCmd = args[0] || ''

  // ---------- help ----------
  if (subCmd === 'help' || subCmd === '?') {
    player.tell(Component.string('§6===== /profequip 帮助 ====='))
    player.tell(Component.string('§e/profequip give [<target>] §7— 发放装备 (留空=自己)'))
    player.tell(Component.string('§e/profequip list          §7— 查看在线玩家选择'))
    player.tell(Component.string('§e/profequip help          §7— 显示此帮助'))
    player.tell(Component.string('§7目标支持: @a @p @s @r <玩家名>'))
    return
  }

  // ---------- list ----------
  if (subCmd === 'list') {
    var server = event.getServer()
    var all = server.getPlayers()
    player.tell(Component.string('§6===== 当前在线玩家职业选择 ====='))
    for (var i = 0; i < all.size(); i++) {
      player.tell(Component.string(getPlayerSummary(all.get(i))))
    }
    return
  }

  // ---------- give [<target>] ----------
  if (subCmd === 'give' || subCmd === '') {
    if (args.length < 2 || subCmd === '') {
      giveLoadout(player)
      return
    }

    var targetStr = args[1]
    var server = event.getServer()
    var targets = parseTargets(targetStr, player, server)

    if (targets.length === 0) {
      player.tell(Component.string('§c未找到有效的目标玩家'))
      return
    }

    var success = 0
    targets.forEach(function(t) {
      if (giveLoadout(t)) success++
    })

    player.tell(Component.string('§a已为 ' + success + ' 名玩家发放装备'))
    return
  }

  // ---------- 未知子命令 ----------
  player.tell(Component.string('§c用法: /profequip give [<target>] | list | help'))
})
