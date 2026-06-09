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
          HasBulletInBarrel: $ByteTag.valueOf(1),
          GunId: 'tacz:ak47',
          GunFireMode: 'AUTO',
          GunCurrentAmmoCount: $IntTag.valueOf(30),
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
          HasBulletInBarrel: $ByteTag.valueOf(1),
          GunId: 'lavender:mars',
        },
      })
    default:       return null
  }
}

// ========== 3. TACZ 弹药配置 ==========

/**
 * 弹药配置
 *   ammoId      — 弹药类型
 *   main        — 主武器弹药盒装弹量
 *   offhand     — 副武器弹药盒装弹量
 *   level       — 弹药盒等级（2=钻石）
 */
const TACZ_AMMO = {
  ak47: { ammoId: 'tacz:762x39', main: 210, level: 2 },
  mars: { ammoId: 'tacz:45acp', offhand: 50, level: 2 },
}

/** 给玩家发放一个弹药盒（主手/副手各一盒） */
function giveAmmoBox(player, weaponId, slot) {
  // 1. 强制转字符串 + 清除首尾空白
  let pureId = String(weaponId || "").trim();
  // 2. 移除 首尾英文双引号 " （核心修复）
  pureId = pureId.replace(/^"|"$/g, "");
  var cfg = TACZ_AMMO[pureId]

  if (!cfg) {
    player.tell(Component.string(`§c❌ 匹配失败：在 TACZ_AMMO 中未找到该武器配置`));
    player.tell(Component.string(`§7==============================`));
    return
  }

  var total = slot === 'main' ? cfg.main : cfg.offhand
  var box = Item.of('tacz:ammo_box', {
    custom_data: {
      AmmoCount: $IntTag.valueOf(total),
      AmmoId: cfg.ammoId,
      Level: $IntTag.valueOf(cfg.level)
    },
  })
  player.give(box)
}

// ========== 4. 配件配置应用 ==========

/** slotKey 转 TACZ NBT 中的 Attachment 键名 (e.g. extended_mag → AttachmentEXTENDED_MAG) */
function attachmentKey(slotKey) {
  return 'Attachment' + slotKey.toUpperCase()
}

/**
 * 将玩家保存的配件配置写入枪械物品 NBT
 * TACZ 实际 NBT 格式:
 *   custom_data.Attachment{大写槽名} = {
 *     components: { "minecraft:custom_data": { AttachmentId: "tacz:xxx" } },
 *     count: 1,
 *     id: "tacz:attachment"
 *   }
 * @param {Internal.ItemStack} gunStack
 * @param {Internal.ServerPlayer} player
 * @param {string} weaponId - 武器 id (如 'ak47')
 */
function applySavedAttachments(gunStack, player, weaponId) {
  var raw = player.persistentData.taczAttachments
  if (!raw) return
  var all
  try { all = JSON.parse(raw) } catch(e) { return }
  var attMap = all[weaponId]
  if (!attMap || Object.keys(attMap).length === 0) return

  // 读取现有 NBT
  var nbt = gunStack.getNbt()
  if (!nbt) nbt = new $CompoundTag()
  var custom = nbt.getCompound('custom_data')
  if (custom.isEmpty()) custom = new $CompoundTag()

  for (var slotKey in attMap) {
    if (!attMap.hasOwnProperty(slotKey)) continue
    var attId = 'tacz:' + attMap[slotKey]

    // 构造配件 NBT
    var attCompound = new $CompoundTag()
    var components = new $CompoundTag()
    var mcCustomData = new $CompoundTag()
    mcCustomData.putString('AttachmentId', attId)
    components.put('minecraft:custom_data', mcCustomData)
    attCompound.put('components', components)
    attCompound.putInt('count', 1)
    attCompound.putString('id', 'tacz:attachment')

    custom.put(attachmentKey(slotKey), attCompound)
  }

  nbt.put('custom_data', custom)
  gunStack.setNbt(nbt)
}

// ========== 5. 装备发放核心 ==========

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

  // -------- ① 清空全身(护甲槽) + 背包 --------
  var armorSlots = ['feet', 'legs', 'chest', 'head']
  armorSlots.forEach(function(slot) {
    target.setItemSlot(slot, Item.of('minecraft:air'))
  })
  target.getInventory().clear()
  // 保留职业选择器
  target.give(Item.of('kubejs:profession_selector'))

  // -------- ② 护甲直接装备到身上 --------
  for (var i = 0; i < 4; i++) {
    target.setItemSlot(armorSlots[i], Item.of(config.armor[i]))
  }

  // -------- ③ 主武器（给到背包） --------
  var mainItem = resolveMainWeapon(mainWp)
  if (mainItem) {
    applySavedAttachments(mainItem, target, mainWp)
    target.give(mainItem)
  }

  // -------- ④ 副武器（给到背包） --------
  var offhandItem = resolveOffhandWeapon(offWp)
  if (offhandItem) {
    applySavedAttachments(offhandItem, target, offWp)
    target.give(offhandItem)
  }

  // -------- ⑤ 兵种额外物品 --------
  config.extras.forEach(function(entry) {
    var stack = entry.tag
      ? Item.of(entry.item, entry.tag)
      : Item.of(entry.item)
    stack.setCount(entry.count)
    target.give(stack)
  })

  // -------- ⑥ 弹药盒（给到背包） --------
  giveAmmoBox(target, mainWp, 'main')
  giveAmmoBox(target, offWp, 'offhand')

  target.tell(Component.string('§a✔ 装备已发放完毕！'))
  return true
}

// ========== 6. 目标解析 ==========

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

// ========== 7. 命令入口 ==========

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
