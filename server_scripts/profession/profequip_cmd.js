// ============================================================
// 职业装备发放命令 - profequip（重构版）
// 指令: /profequip give [<targets>]
//       /profequip help
//       /profequip list
// 目标: @a @p @s @r <玩家名> (留空 = 自己)
// 权限: OP 2 级
// ============================================================
// 模块划分:
//   1. 兵种基础配置（护甲 + 额外物品）
//   2. 武器解析器（TACZ / 非 TACZ）
//   3. 弹药发放（TACZ 弹药盒 / 非 TACZ 物品）
//   4. 配件应用（仅 TACZ）
//   5. 装备发放核心（主武器 + 副武器 + 特殊武器 + 护甲 + 弹药）
//   6. 目标解析
//   7. 命令入口
// ============================================================

// ========== 1. 兵种基础配置 ==========

/** 根据兵种ID获取护甲与额外物品 */
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
          { item: 'minecraft:splash_potion', count: 6, tag: { 'minecraft:potion_contents': { potion: 'minecraft:healing' } } },
          { item: 'minecraft:potion',        count: 3, tag: { 'minecraft:potion_contents': { potion: 'minecraft:regeneration' } } },
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
        ],
      }
    default:
      return null
  }
}

// ========== 2. 武器解析器 ==========

/** 判断武器是否为 TACZ 枪械（通过 getTaczConfig 查表） */
function isTaczWeapon(id) {
  return getTaczConfig(id) !== null
}

/** 解析 TACZ 枪械为物品 */
function resolveTaczWeapon(id) {
  var cfg = getTaczConfig(id)
  return cfg ? resolveTaczGun(cfg) : null
}

/** 解析非 TACZ 武器为物品（从 VANILLA_WEAPON_DISPLAY 查表） */
function resolveVanillaWeapon(id) {
  var cfg = VANILLA_WEAPON_DISPLAY[id]
  return cfg ? Item.of(cfg.item) : null
}

/**
 * 通用武器解析（自动判断 TACZ / 非 TACZ）
 * @param {string} id - 武器 ID
 * @returns {Internal.ItemStack|null}
 */
function resolveWeapon(id) {
  var pureId = cleanId(id)
  // 先尝试 TACZ
  var taczItem = resolveTaczWeapon(pureId)
  if (taczItem) return taczItem
  // 再尝试非 TACZ
  return resolveVanillaWeapon(pureId)
}

// ========== 3. 弹药发放 ==========

/** 优先放入背包（9~35号槽），背包满则回退到 give */
function giveToBackpack(player, stack) {
  var inv = player.getInventory()
  for (var i = 9; i <= 35; i++) {
    if (inv.getItem(i).isEmpty()) {
      inv.setItem(i, stack)
      return
    }
  }
  player.give(stack)
}

/** 给玩家发放 TACZ 弹药（有 level 给弹药盒，无 level 给散装弹药） */
function giveTaczAmmo(player, weaponId, slot) {
  var pureId = cleanId(weaponId)
  var cfg = getTaczConfig(pureId)
  if (!cfg || !cfg.ammo) return

  var ammo = cfg.ammo
  var total = slot === 'main' ? ammo.main : ammo.offhand
  if (!total) return

  if (ammo.level != null) {
    // 有等级 → 弹药盒
    var box = Item.of('tacz:ammo_box', {
      custom_data: {
        AmmoCount: $IntTag.valueOf(total),
        AmmoId: ammo.ammoId,
        Level: $IntTag.valueOf(ammo.level),
      },
    })
    giveToBackpack(player, box)
  } else {
    // 无等级 → 直接发弹药物品
    var stack = Item.of(ammo.ammoId)
    stack.setCount(total)
    giveToBackpack(player, stack)
  }
}

/** 给玩家发放非 TACZ 武器弹药（从 VANILLA_WEAPON_AMMO 查表，超堆叠上限自动拆分） */
function giveVanillaAmmo(player, weaponId) {
  var pureId = cleanId(weaponId)
  var ammoCfg = VANILLA_WEAPON_AMMO[pureId]
  if (!ammoCfg) return

  var template = Item.of(ammoCfg.item)
  var max = template.getMaxStackSize()
  var remaining = ammoCfg.count
  while (remaining > 0) {
    var stack = template.copy()
    var take = Math.min(remaining, max)
    stack.setCount(take)
    giveToBackpack(player, stack)
    remaining -= take
  }
}

/**
 * 通用弹药发放（自动判断 TACZ / 非 TACZ）
 * @param {Internal.ServerPlayer} player
 * @param {string} weaponId - 武器 ID
 * @param {string} [slot] - TACZ 用：'main' 或 'offhand'（非 TACZ 忽略此参数）
 */
function giveWeaponAmmo(player, weaponId, slot) {
  var pureId = cleanId(weaponId)
  if (isTaczWeapon(pureId)) {
    giveTaczAmmo(player, pureId, slot || 'main')
  } else {
    giveVanillaAmmo(player, pureId)
  }
}

// ========== 4. 配件配置应用（仅 TACZ）==========

/** slotKey 转 TACZ NBT 中的 Attachment 键名 */
function attachmentKey(slotKey) {
  return 'Attachment' + slotKey.toUpperCase()
}

/**
 * 将玩家保存的配件配置写入 TACZ 枪械物品 NBT
 */
function applySavedAttachments(gunStack, player, weaponId) {
  var pureId = cleanId(weaponId)
  var raw
  try { raw = player.persistentData.getString('taczAttachments') } catch(e) { raw = null }
  if (!raw || raw === '') return
  var all
  try { all = JSON.parse(raw) } catch(e) { return }
  var attMap = all[pureId]
  if (!attMap || Object.keys(attMap).length === 0) return

  var custom = gunStack.getCustomData()
  if (custom === null) custom = new $CompoundTag()

  for (var slotKey in attMap) {
    if (!attMap.hasOwnProperty(slotKey)) continue
    var attId = attMap[slotKey]

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

  gunStack.setCustomData(custom)
}

// ========== 5. 装备发放核心 ==========

/**
 * 给单个玩家发放职业装备
 * 流程: 清空背包 → 护甲 → 主武器 + 弹药 → 副武器 + 弹药 → 特殊武器 + 弹药 → 额外物品
 */
function giveLoadout(target) {
  var prof   = target.persistentData.profession
  var mainWp = target.persistentData.mainWeapon
  var offWp  = target.persistentData.offhandWeapon
  var spWp   = target.persistentData.specialWeapon

  // -------- 前置检查（职业为必选，主/副武器缺失仅警告不阻塞）--------
  if (!prof) {
    target.tell(Component.string('§c[装备发放] 请先使用职业选择器选择兵种！'))
    return false
  }
  if (!mainWp) {
    target.tell(Component.string('§e[装备发放] 未选择主武器，跳过主武器发放'))
  }
  if (!offWp) {
    target.tell(Component.string('§e[装备发放] 未选择副武器，跳过副武器发放'))
  }

  var config = getProfConfig(prof)
  if (!config) {
    target.tell(Component.string('§c[装备发放] 未知兵种: [' + prof + ']'))
    return false
  }

  var pureMain = mainWp ? cleanId(mainWp) : null
  var pureOff  = offWp  ? cleanId(offWp)  : null
  var pureSp   = spWp   ? cleanId(spWp)   : null

  // -------- ① 清空全身(护甲槽) + 背包（保留职业选择器）--------
  var armorSlots = ['feet', 'legs', 'chest', 'head']
  armorSlots.forEach(function(slot) {
    target.setItemSlot(slot, Item.of('minecraft:air'))
  })
  target.getInventory().clear()
  target.give(Item.of('kubejs:profession_selector'))

  // -------- ② 护甲直接装备到身上 --------
  for (var i = 0; i < 4; i++) {
    target.setItemSlot(armorSlots[i], Item.of(config.armor[i]))
  }

  // -------- ③ 主武器（TACZ → 带配件 + 弹药盒）--------
  var mainItem = resolveWeapon(pureMain)
  if (mainItem) {
    if (isTaczWeapon(pureMain)) {
      applySavedAttachments(mainItem, target, pureMain)
    }
    target.give(mainItem)
    giveWeaponAmmo(target, pureMain, 'main')
  }

  // -------- ④ 副武器（TACZ → 带配件 + 弹药盒）--------
  var offItem = resolveWeapon(pureOff)
  if (offItem) {
    if (isTaczWeapon(pureOff)) {
      applySavedAttachments(offItem, target, pureOff)
    }
    target.give(offItem)
    giveWeaponAmmo(target, pureOff, 'offhand')
  }

  // -------- ⑤ 特殊武器（可选，支持 TACZ / 非 TACZ）--------
  if (pureSp) {
    var spItem = resolveWeapon(pureSp)
    if (spItem) {
      if (isTaczWeapon(pureSp)) {
        applySavedAttachments(spItem, target, pureSp)
      }
      target.give(spItem)
      giveWeaponAmmo(target, pureSp, 'main')
    }
  }

  // -------- ⑥ 兵种额外物品 --------
  config.extras.forEach(function(entry) {
    var stack = entry.tag
      ? Item.of(entry.item, entry.tag)
      : Item.of(entry.item)
    stack.setCount(entry.count)
    target.give(stack)
  })

  target.tell(Component.string('§a✔ 装备已发放完毕！'))
  return true
}

// ========== 6. 目标解析 ==========

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
 * 获取玩家当前职业选择的摘要字符串（含特殊武器）
 */
function getPlayerSummary(target) {
  var prof   = target.persistentData.profession || '§7无'
  var mainWp = target.persistentData.mainWeapon  || '§7无'
  var offWp  = target.persistentData.offhandWeapon || '§7无'
  var spWp   = target.persistentData.specialWeapon || '§7无'
  var pName  = target.getName().getString()

  return '§e' + pName + ' §7→ 职业: §f' + prof + ' §7| 主手: §f' + mainWp + ' §7| 副手: §f' + offWp + ' §7| 特殊: §f' + spWp
}

// ========== 7. 命令入口 ==========

ServerEvents.basicCommand('profequip', event => {
  var player = event.getPlayer()
  // 兼容控制台执行（player 为 null 时静默忽略）
  if (!player || !player.isOp()) {
    if (player) player.tell(Component.string('§c你没有权限使用此指令'))
    return
  }

  // ===== 临时调试：显示 event.input 原始值 =====
  player.tell(Component.string('§e[DEBUG] raw input: "' + String(event.input) + '"'))
  player.tell(Component.string('§e[DEBUG] input length: ' + String(event.input).length))
  // ==========================================

  var raw = String(event.input)
  var args = raw.trim().split(/\s+/)
  player.tell(Component.string('§e[DEBUG] args[0]="' + args[0] + '" len=' + args.length))
  // 兼容 KubeJS 7 部分版本 event.input 含指令名的情况
  if (args[0] === 'profequip' || args[0] === '/profequip') args = args.slice(1)
  player.tell(Component.string('§e[DEBUG] after fix args[0]="' + (args[0] || '') + '"'))
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
