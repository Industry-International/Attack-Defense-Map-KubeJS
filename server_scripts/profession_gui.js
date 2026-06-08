// ============================================================
// 职业选择器 - GUI 交互（服务端 · i18n 规范）
// ============================================================
// 单页面设计：在一个 GUI 内通过点击入口切换显示内容
// 流程：主界面（三个入口）→ 职业选择页 → 主武器页 → 副武器页
// 翻译定义在 assets/kubejs/lang/{en_us,zh_cn}.json 中
// ============================================================

// ========== 数据定义 ==========

const PROFESSIONS = [
  { id: 'warrior'  }, { id: 'archer'   }, { id: 'mage'     },
  { id: 'medic'    }, { id: 'engineer' }, { id: 'assassin' },
]
const MAIN_WEAPONS = [
  { id: 'sword'    }, { id: 'bow'      }, { id: 'crossbow' },
  { id: 'trident'  },
]
const OFFHAND_WEAPONS = [
  { id: 'shield' }, { id: 'totem'  },
]

// ========== 辅助工具 ==========

function filler(color) {
  return Item.of(color).withCustomName(Text.of(''))
}
const PANE = {
  black: filler('minecraft:black_stained_glass_pane'),
  gray:  filler('minecraft:gray_stained_glass_pane'),
  red:   filler('minecraft:red_stained_glass_pane'),
  green: filler('minecraft:green_stained_glass_pane'),
  lime:  filler('minecraft:lime_stained_glass_pane'),
}

// ========== 核心逻辑 ==========

ItemEvents.rightClicked('kubejs:profession_selector', event => {
  const { player, hand } = event
  if (hand !== 'main_hand') return

  // 用于跟踪当前页面：'main' | 'profession' | 'weapon' | 'offhand'
  let currentPage = 'main'

  function renderPage(page) {
    currentPage = page
    player.openChestGUI(Text.translate('gui.kubejs.profession_select.title'), 6, gui => {

      // ============ 页面渲染函数 ============

      if (page === 'main')     renderMainPage(gui, player)
      else if (page === 'profession') renderProfessionPage(gui, player)
      else if (page === 'weapon')     renderWeaponPage(gui, player)
      else if (page === 'offhand')    renderOffhandPage(gui, player)

      // 所有页面共用的边框
      for (let r = 2; r < 6; r++) {
        gui.slot(0, r, s => { s.setItem(PANE.gray) })
        gui.slot(8, r, s => { s.setItem(PANE.gray) })
      }
    })
  }

  // ========== 主页面 ==========

  function renderMainPage(gui, player) {
    const prof = player.persistentData.profession
    const wp   = player.persistentData.mainWeapon
    const off  = player.persistentData.offhandWeapon

    // 分隔列
    gui.slot(1, 2, s => { s.setItem(PANE.black) })
    gui.slot(3, 2, s => { s.setItem(PANE.black) })
    gui.slot(5, 2, s => { s.setItem(PANE.black) })
    gui.slot(7, 2, s => { s.setItem(PANE.black) })

    // 入口1: 职业选择
    gui.slot(2, 2, slot => {
      const icon = prof
        ? Item.of('minecraft:knowledge_book').withCustomName(Text.translate('gui.kubejs.profession_select.entry_profession_done'))
            .withLore([Text.translate('profession.kubejs.' + prof)])
        : Item.of('minecraft:knowledge_book').withCustomName(Text.translate('gui.kubejs.profession_select.entry_profession'))
            .withLore([Text.translate('gui.kubejs.profession_select.hint_click')])
      slot.setItem(icon)
      slot.setLeftClicked(() => renderPage('profession'))
    })

    // 入口2: 主武器（锁定/可用）
    if (prof) {
      gui.slot(4, 2, slot => {
        const icon = wp
          ? Item.of('minecraft:crossbow').withCustomName(Text.translate('gui.kubejs.profession_select.entry_weapon_done'))
              .withLore([Text.translate('weapon.kubejs.' + wp)])
          : Item.of('minecraft:crossbow').withCustomName(Text.translate('gui.kubejs.profession_select.entry_weapon'))
              .withLore([Text.translate('gui.kubejs.profession_select.hint_click')])
        slot.setItem(icon)
        slot.setLeftClicked(() => renderPage('weapon'))
      })
    } else {
      gui.slot(4, 2, slot => {
        slot.setItem(
          Item.of('minecraft:gray_stained_glass_pane')
            .withCustomName(Text.translate('gui.kubejs.profession_select.locked'))
            .withLore([Text.translate('gui.kubejs.profession_select.lock_profession')])
        )
      })
    }

    // 入口3: 副武器（锁定/可用）
    if (wp) {
      gui.slot(6, 2, slot => {
        const icon = off
          ? Item.of('minecraft:shield').withCustomName(Text.translate('gui.kubejs.profession_select.entry_offhand_done'))
              .withLore([Text.translate('offhand.kubejs.' + off)])
          : Item.of('minecraft:shield').withCustomName(Text.translate('gui.kubejs.profession_select.entry_offhand'))
              .withLore([Text.translate('gui.kubejs.profession_select.hint_click')])
        slot.setItem(icon)
        slot.setLeftClicked(() => renderPage('offhand'))
      })
    } else {
      gui.slot(6, 2, slot => {
        slot.setItem(
          Item.of('minecraft:gray_stained_glass_pane')
            .withCustomName(Text.translate('gui.kubejs.profession_select.locked'))
            .withLore([prof
              ? Text.translate('gui.kubejs.profession_select.lock_weapon')
              : Text.translate('gui.kubejs.profession_select.lock_profession')
            ])
        )
      })
    }

    // 状态行
    gui.slot(2, 3, slot => {
      slot.setItem(
        Item.of('minecraft:knowledge_book')
          .withCustomName(Text.translate('gui.kubejs.profession_select.status_profession'))
          .withLore([prof ? Text.translate('profession.kubejs.' + prof) : Text.translate('gui.kubejs.profession_select.none')])
      )
    })
    gui.slot(4, 3, slot => {
      slot.setItem(
        Item.of('minecraft:crossbow')
          .withCustomName(Text.translate('gui.kubejs.profession_select.status_weapon'))
          .withLore([wp ? Text.translate('weapon.kubejs.' + wp) : Text.translate('gui.kubejs.profession_select.none')])
      )
    })
    gui.slot(6, 3, slot => {
      slot.setItem(
        Item.of('minecraft:shield')
          .withCustomName(Text.translate('gui.kubejs.profession_select.status_offhand'))
          .withLore([off ? Text.translate('offhand.kubejs.' + off) : Text.translate('gui.kubejs.profession_select.none')])
      )
    })
    for (let x = 2; x < 7; x++) gui.slot(x, 4, s => { s.setItem(PANE.gray) })
  }

  // ========== 职业选择页面 ==========

  function renderProfessionPage(gui, player) {
    // 返回按钮
    gui.slot(0, 0, slot => {
      slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
      slot.setLeftClicked(() => renderPage('main'))
    })
    // 标题
    gui.slot(4, 0, slot => {
      slot.setItem(Item.of('minecraft:knowledge_book').withCustomName(Text.translate('gui.kubejs.profession_select.choose_profession')))
    })
    for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

    const start = Math.floor((9 - PROFESSIONS.length) / 2)
    PROFESSIONS.forEach((prof, i) => {
      gui.slot(start + i, 2, slot => {
        slot.setItem(
          Item.of('minecraft:knowledge_book')
            .withCustomName(Text.translate('profession.kubejs.' + prof.id))
            .withLore([Text.translate('profession.kubejs.' + prof.id + '.desc')])
        )
        slot.setLeftClicked(() => {
          player.persistentData.profession = prof.id
          player.tell(Text.translate('msg.kubejs.profession_select.selected', Text.translate('profession.kubejs.' + prof.id)))
          renderPage('main')
        })
      })
    })
  }

  // ========== 主武器选择页面 ==========

  function renderWeaponPage(gui, player) {
    gui.slot(0, 0, slot => {
      slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
      slot.setLeftClicked(() => renderPage('main'))
    })
    gui.slot(4, 0, slot => {
      slot.setItem(Item.of('minecraft:crossbow').withCustomName(Text.translate('gui.kubejs.profession_select.choose_main')))
    })
    for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

    const start = Math.floor((9 - MAIN_WEAPONS.length) / 2)
    MAIN_WEAPONS.forEach((wp, i) => {
      gui.slot(start + i, 2, slot => {
        slot.setItem(Item.of('minecraft:iron_sword').withCustomName(Text.translate('weapon.kubejs.' + wp.id)))
        slot.setLeftClicked(() => {
          player.persistentData.mainWeapon = wp.id
          player.tell(Text.translate('msg.kubejs.profession_select.main_weapon', Text.translate('weapon.kubejs.' + wp.id)))
          renderPage('main')
        })
      })
    })
  }

  // ========== 副武器选择页面 ==========

  function renderOffhandPage(gui, player) {
    gui.slot(0, 0, slot => {
      slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
      slot.setLeftClicked(() => renderPage('main'))
    })
    gui.slot(4, 0, slot => {
      slot.setItem(Item.of('minecraft:shield').withCustomName(Text.translate('gui.kubejs.profession_select.choose_offhand')))
    })
    for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

    const start = Math.floor((9 - OFFHAND_WEAPONS.length) / 2)
    OFFHAND_WEAPONS.forEach((wp, i) => {
      gui.slot(start + i, 2, slot => {
        slot.setItem(Item.of('minecraft:shield').withCustomName(Text.translate('offhand.kubejs.' + wp.id)))
        slot.setLeftClicked(() => {
          player.persistentData.offhandWeapon = wp.id
          player.tell(Text.translate('msg.kubejs.profession_select.offhand_weapon', Text.translate('offhand.kubejs.' + wp.id)))
          renderPage('main')
        })
      })
    })
  }

  // ========== 启动：打开主页面 ==========
  renderPage('main')
})
