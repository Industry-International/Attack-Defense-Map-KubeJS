// ============================================================
// 职业选择器 - GUI 交互（服务端 · i18n 规范）
// ============================================================
// 所有显示文本均通过 Text.translate() 引用翻译键，
// 翻译定义在 assets/kubejs/lang/{en_us,zh_cn}.json 中。
// ============================================================

// ========== 数据定义（可自由修改） ==========

// 职业列表（id 用作翻译键后缀）
const PROFESSIONS = [
  { id: 'warrior'  },
  { id: 'archer'   },
  { id: 'mage'     },
  { id: 'medic'    },
  { id: 'engineer' },
  { id: 'assassin' },
]

// 主武器列表
const MAIN_WEAPONS = [
  { id: 'sword'    },
  { id: 'bow'      },
  { id: 'crossbow' },
  { id: 'trident'  },
]

// 副武器列表
const OFFHAND_WEAPONS = [
  { id: 'shield' },
  { id: 'totem'  },
]

// ========== 辅助工具 ==========

// 匿名玻璃板（无名称）
function filler(color) {
  return Item.of(color).withCustomName(Text.of(''))
}

const PANE = {
  black: filler('minecraft:black_stained_glass_pane'),
  gray:  filler('minecraft:gray_stained_glass_pane'),
  blue:  filler('minecraft:blue_stained_glass_pane'),
  red:   filler('minecraft:red_stained_glass_pane'),
  green: filler('minecraft:green_stained_glass_pane'),
}

// ========== 主要交互逻辑 ==========

ItemEvents.rightClicked('kubejs:profession_selector', event => {
  const { player, hand } = event

  if (hand !== 'main_hand') return

  player.openChestGUI(Text.translate('gui.kubejs.profession_select.title'), 6, gui => {

    // ============================================================
    // 边界装饰（第0列和第8列）
    // ============================================================
    for (let row = 2; row < 6; row++) {
      gui.slot(0, row, slot => { slot.setItem(PANE.gray) })
      gui.slot(8, row, slot => { slot.setItem(PANE.gray) })
    }

    // ============================================================
    // 第1行 (row=0): 职业选择
    // ============================================================
    const profStart = Math.floor((9 - PROFESSIONS.length) / 2)
    PROFESSIONS.forEach((prof, i) => {
      gui.slot(profStart + i, 0, slot => {
        slot.setItem(
          Item.of('minecraft:knowledge_book')
            .withCustomName(Text.translate('profession.kubejs.' + prof.id))
            .withLore([Text.translate('profession.kubejs.' + prof.id + '.desc')])
        )
        slot.setLeftClicked(() => {
          player.tell(Text.translate('msg.kubejs.profession_select.selected', Text.translate('profession.kubejs.' + prof.id)))
        })
      })
    })

    // 分隔线
    for (let x = 1; x < 8; x++) {
      gui.slot(x, 1, slot => { slot.setItem(PANE.blue) })
    }

    // ============================================================
    // 第3行 (row=2): 主武器选择 — 标题
    // ============================================================
    gui.slot(4, 2, slot => {
      slot.setItem(
        Item.of('minecraft:crossbow')
          .withCustomName(Text.translate('gui.kubejs.profession_select.choose_main'))
      )
    })

    // 分隔线
    for (let x = 1; x < 8; x++) {
      gui.slot(x, 3, slot => { slot.setItem(PANE.green) })
    }

    // ============================================================
    // 第4行 (row=3): 主武器具体选项
    // ============================================================
    const weaponStartCol = Math.floor((9 - MAIN_WEAPONS.length) / 2)
    MAIN_WEAPONS.forEach((wp, i) => {
      gui.slot(weaponStartCol + i, 3, slot => {
        slot.setItem(
          Item.of('minecraft:iron_sword')
            .withCustomName(Text.translate('weapon.kubejs.' + wp.id))
        )
        slot.setLeftClicked(() => {
          player.tell(Text.translate('msg.kubejs.profession_select.main_weapon', Text.translate('weapon.kubejs.' + wp.id)))
        })
      })
    })

    // ============================================================
    // 第5行 (row=4): 副武器选择 — 标题
    // ============================================================
    gui.slot(4, 4, slot => {
      slot.setItem(
        Item.of('minecraft:shield')
          .withCustomName(Text.translate('gui.kubejs.profession_select.choose_offhand'))
      )
    })

    // 分隔线
    for (let x = 1; x < 8; x++) {
      gui.slot(x, 5, slot => { slot.setItem(PANE.red) })
    }

    // ============================================================
    // 第6行 (row=5): 副武器具体选项
    // ============================================================
    const offhandStartCol = Math.floor((9 - OFFHAND_WEAPONS.length) / 2)
    OFFHAND_WEAPONS.forEach((wp, i) => {
      gui.slot(offhandStartCol + i, 5, slot => {
        slot.setItem(
          Item.of('minecraft:shield')
            .withCustomName(Text.translate('offhand.kubejs.' + wp.id))
        )
        slot.setLeftClicked(() => {
          player.tell(Text.translate('msg.kubejs.profession_select.offhand_weapon', Text.translate('offhand.kubejs.' + wp.id)))
        })
      })
    })

    // ============================================================
    // 关闭GUI回调
    // ============================================================
    gui.closed = () => {
      player.tell(Text.translate('msg.kubejs.profession_select.closed'))
    }
  })
})
