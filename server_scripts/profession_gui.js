// ============================================================
// 职业选择器 - GUI 交互（服务端）
// ============================================================
// 右键职业选择器物品时打开 6×9 箱子菜单
// 第1行 (row=0): 职业选择
// 第2行 (row=1): 主武器选择 + 副武器选择
//
// 扩展指南：
//   1. 在 professions 数组中添加/修改职业
//   2. 在 weapons 和 offhandWeapons 数组中添加/修改武器
//   3. 在 click 回调中实现实际的职业/武器分配逻辑
// ============================================================

// ========== 数据定义（可自由修改） ==========

// TODO: 定义可选的职业列表
const PROFESSIONS = [
  { id: 'warrior',    name: '§c战士',     icon: 'minecraft:iron_sword',    desc: '§7近战输出，高生存' },
  { id: 'archer',     name: '§b弓箭手',   icon: 'minecraft:bow',          desc: '§7远程输出，敏捷' },
  { id: 'mage',       name: '§d法师',     icon: 'minecraft:enchanting_table', desc: '§7魔法输出，AOE' },
  { id: 'medic',      name: '§a医疗兵',   icon: 'minecraft:golden_apple', desc: '§7治疗与支援' },
  { id: 'engineer',   name: '§6工程师',   icon: 'minecraft:redstone',     desc: '§7建造与机械' },
  { id: 'assassin',   name: '§8刺客',     icon: 'minecraft:netherite_sword', desc: '§7高爆发，潜行' },
]

// TODO: 定义可选的主武器列表（按职业分组，或全局通用）
const MAIN_WEAPONS = [
  { id: 'sword',      name: '§f铁剑',     icon: 'minecraft:iron_sword' },
  { id: 'bow',        name: '§f弓',       icon: 'minecraft:bow' },
  { id: 'crossbow',   name: '§f弩',       icon: 'minecraft:crossbow' },
  { id: 'trident',    name: '§b三叉戟',   icon: 'minecraft:trident' },
]

// TODO: 定义可选的副武器列表
const OFFHAND_WEAPONS = [
  { id: 'shield',       name: '§6盾牌',     icon: 'minecraft:shield' },
  { id: 'totem',        name: '§e不死图腾', icon: 'minecraft:totem_of_undying' },
]

// ========== 辅助工具 ==========

// 创建占位玻璃板（填充空白格子）
function filler(color) {
  return Item.of(color).withCustomName(Text.of(''))
}

const PANE = {
  black:  filler('minecraft:black_stained_glass_pane'),
  gray:   filler('minecraft:gray_stained_glass_pane'),
  blue:   filler('minecraft:blue_stained_glass_pane'),
  red:    filler('minecraft:red_stained_glass_pane'),
  green:  filler('minecraft:green_stained_glass_pane'),
}

// ========== 主要交互逻辑 ==========

ItemEvents.rightClicked('kubejs:profession_selector', event => {
  const { player, hand } = event

  // 防止副手也触发（只主手触发）
  if (hand !== 'main_hand') return

  // 打开 6 行（6×9 = 54 格）的箱子菜单
  player.openChestGUI(Text.of('§8╔ 职业选择 ╗'), 6, gui => {

    // ============================================================
    // 边界装饰（第0列和第8列 - 用玻璃板做边框）
    // ============================================================
    for (let row = 2; row < 6; row++) {
      // 第0列装饰
      gui.slot(0, row, slot => {
        slot.setItem(PANE.gray)
      })
      // 第8列装饰
      gui.slot(8, row, slot => {
        slot.setItem(PANE.gray)
      })
    }

    // ============================================================
    // 第1行 (row=0): 职业选择
    // ============================================================
    // 用最大9格排列职业，居中对齐
    const profStart = Math.floor((9 - PROFESSIONS.length) / 2)
    PROFESSIONS.forEach((prof, i) => {
      gui.slot(profStart + i, 0, slot => {
        slot.setItem(
          Item.of(prof.icon)
            .withCustomName(Text.of(prof.name))
            .withLore([Text.of(prof.desc)])
        )
        slot.setLeftClicked(() => {
          // ===== TODO: 在此实现选择职业的具体逻辑 =====
          // 例如：存储到玩家 persistent data、施加效果、给予物品等
          player.tell(`§a[职业选择] 你选择了: ${prof.name}`)
        })
      })
    })

    // 版块分隔线（第2行顶部用玻璃板填充）
    for (let x = 1; x < 8; x++) {
      gui.slot(x, 1, slot => {
        slot.setItem(PANE.blue)
      })
    }

    // ============================================================
    // 第3行 (row=2): 主武器选择 — 标题
    // ============================================================
    gui.slot(4, 2, slot => {
      slot.setItem(
        Item.of('minecraft:crossbow')
          .withCustomName(Text.of('§b§l← 选择主武器 →'))
      )
    })

    // 分隔线
    for (let x = 1; x < 8; x++) {
      gui.slot(x, 3, slot => {
        slot.setItem(PANE.green)
      })
    }

    // ============================================================
    // 第4行 (row=3): 主武器具体选项
    // ============================================================
    // 等间距排列主武器
    const weaponStartCol = Math.floor((9 - MAIN_WEAPONS.length) / 2)
    MAIN_WEAPONS.forEach((wp, i) => {
      gui.slot(weaponStartCol + i, 3, slot => {
        slot.setItem(
          Item.of(wp.icon).withCustomName(Text.of(wp.name))
        )
        slot.setLeftClicked(() => {
          // ===== TODO: 在此实现分配主武器的逻辑 =====
          player.tell(`§a[职业选择] 主武器: ${wp.name}`)
        })
      })
    })

    // ============================================================
    // 第5行 (row=4): 副武器选择 — 标题
    // ============================================================
    gui.slot(4, 4, slot => {
      slot.setItem(
        Item.of('minecraft:shield')
          .withCustomName(Text.of('§e§l← 选择副武器 →'))
      )
    })

    // 分隔线
    for (let x = 1; x < 8; x++) {
      gui.slot(x, 5, slot => {
        slot.setItem(PANE.red)
      })
    }

    // ============================================================
    // 第6行 (row=5): 副武器具体选项
    // ============================================================
    // 等间距排列副武器
    const offhandStartCol = Math.floor((9 - OFFHAND_WEAPONS.length) / 2)
    OFFHAND_WEAPONS.forEach((wp, i) => {
      gui.slot(offhandStartCol + i, 5, slot => {
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
    // 关闭GUI回调
    // ============================================================
    gui.closed = () => {
      player.tell('§7[职业选择] 界面已关闭')
    }
  })
})
