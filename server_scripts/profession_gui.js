// ============================================================
// 职业选择器 - GUI 交互（服务端）
// ============================================================
// 右键职业选择器物品 → 打开 6×9 箱子菜单
//   第1行 (row=0): 职业选择
//   第2行 (row=1): 主武器选择 + 副武器选择
//   第3~6行: 玩家背包（由KubeJS自动处理）
//
// 扩展指南：
//   1. 在 PROFESSIONS 数组中添加/修改职业
//   2. 在 MAIN_WEAPONS / OFFHAND_WEAPONS 中修改武器
//   3. 在 click 回调中实现实际的职业/武器分配逻辑
// ============================================================

// ========== 数据定义（可自由修改） ==========

// 职业列表
const PROFESSIONS = [
  { id: 'warrior',    name: '§c战士',     icon: 'minecraft:iron_sword' },
  { id: 'archer',     name: '§b弓箭手',   icon: 'minecraft:bow' },
  { id: 'mage',       name: '§d法师',     icon: 'minecraft:enchanting_table' },
  { id: 'medic',      name: '§a医疗兵',   icon: 'minecraft:golden_apple' },
  { id: 'engineer',   name: '§6工程师',   icon: 'minecraft:redstone' },
  { id: 'assassin',   name: '§8刺客',     icon: 'minecraft:netherite_sword' },
]

// 主武器列表
const MAIN_WEAPONS = [
  { id: 'sword',      name: '§f铁剑',     icon: 'minecraft:iron_sword' },
  { id: 'bow',        name: '§f弓',       icon: 'minecraft:bow' },
  { id: 'crossbow',   name: '§f弩',       icon: 'minecraft:crossbow' },
  { id: 'trident',    name: '§b三叉戟',   icon: 'minecraft:trident' },
]

// 副武器列表
const OFFHAND_WEAPONS = [
  { id: 'shield',       name: '§6盾牌',     icon: 'minecraft:shield' },
  { id: 'totem',        name: '§e不死图腾', icon: 'minecraft:totem_of_undying' },
]

// ========== 辅助工具 ==========

// 创建占位玻璃板
function pane(color) {
  return Item.of(color).withCustomName(Text.of(''))
}

const GLASS = {
  B: pane('minecraft:black_stained_glass_pane'),
  G: pane('minecraft:gray_stained_glass_pane'),
  L: pane('minecraft:light_blue_stained_glass_pane'),
}

// ========== 主要交互逻辑 ==========

ItemEvents.rightClicked('kubejs:profession_selector', event => {
  const { player, hand } = event

  // 只主手触发，防止副手重复触发
  if (hand !== 'main_hand') return

  // 打开 6×9 箱子菜单
  player.openChestGUI(Text.of('§8职业选择'), 6, gui => {

    // ============================================================
    // 第1行 (row=0, slots 0~8): 职业选择
    // ============================================================
    // 用最大9格排列职业，居中对齐
    const profStart = Math.floor((9 - PROFESSIONS.length) / 2)
    PROFESSIONS.forEach((prof, i) => {
      gui.slot(profStart + i, 0, slot => {
        slot.setItem(
          Item.of(prof.icon)
            .withCustomName(Text.of(prof.name))
            .withLore([Text.of('§7点击选择')])
        )
        slot.setLeftClicked(() => {
          // ===== TODO: 在此实现选择职业的具体逻辑 =====
          // 例如：存储到玩家 persistent data、施加效果、给予物品等
          player.tell(`§a[职业选择] 你选择了: ${prof.name}`)
        })
      })
    })

    // 分隔装饰
    for (let x = 0; x < 9; x++) {
      gui.slot(x, 1, slot => {
        if (x === 0 || x === 8) slot.setItem(GLASS.B)
        else slot.setItem(GLASS.G)
      })
    }

    // ============================================================
    // 第2行 (row=1, slots 9~17): 主武器 + 副武器
    //   - 左侧：主武器选择
    //   - 右侧：副武器选择
    //   中间用分隔线隔开
    // ============================================================

    // 主武器：占第1~4列（slots 9~12）
    // 标题
    gui.slot(0, 1, slot => {
      slot.setItem(
        Item.of('minecraft:crossbow')
          .withCustomName(Text.of('§b§l主武器'))
      )
    })
    MAIN_WEAPONS.forEach((wp, i) => {
      gui.slot(1 + i, 1, slot => {
        slot.setItem(
          Item.of(wp.icon).withCustomName(Text.of(wp.name))
        )
        slot.setLeftClicked(() => {
          // ===== TODO: 在此实现分配主武器的逻辑 =====
          player.tell(`§a[职业选择] 主武器: ${wp.name}`)
        })
      })
    })

    // 中间分隔
    gui.slot(5, 1, slot => { slot.setItem(GLASS.B) })

    // 副武器：占第6~8列（slots 14~16）
    gui.slot(6, 1, slot => {
      slot.setItem(
        Item.of('minecraft:shield')
          .withCustomName(Text.of('§e§l副武器'))
      )
    })
    OFFHAND_WEAPONS.forEach((wp, i) => {
      gui.slot(7 + i, 1, slot => {
        slot.setItem(
          Item.of(wp.icon).withCustomName(Text.of(wp.name))
        )
        slot.setLeftClicked(() => {
          // ===== TODO: 在此实现分配副武器的逻辑 =====
          player.tell(`§a[职业选择] 副武器: ${wp.name}`)
        })
      })
    })

    // ============================================================
    // 第3~6行 (rows 2~5): 默认显示玩家背包（由 ChestMenuData 的
    // playerSlots: true 自动处理）
    // ============================================================

    // ============================================================
    // 关闭GUI回调
    // ============================================================
    gui.closed = () => {
      player.tell('§7[职业选择] 界面已关闭')
    }
  })
})
