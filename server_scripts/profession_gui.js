// ============================================================
// 职业选择器 - GUI 交互（服务端 · i18n 规范）
// ============================================================
// 单页面设计：主界面（三个入口居中）→ 职业选 → 主武器 → 副武器
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
}

// ========== 核心逻辑 ==========

ItemEvents.rightClicked('kubejs:profession_selector', event => {
  const { player, hand } = event
  if (hand !== 'main_hand') return

  function openPage(page) {
    player.openChestGUI(Text.translate('gui.kubejs.profession_select.title'), 6, gui => {

      // ----- 子页面加边框（主页面按固定布局） -----
      if (page !== 'main') {
        for (let r = 2; r < 6; r++) {
          gui.slot(0, r, s => { s.setItem(PANE.gray) })
          gui.slot(8, r, s => { s.setItem(PANE.gray) })
        }
      }

      if (page === 'main')        renderMain(gui)
      else if (page === 'prof')   renderProf(gui)
      else if (page === 'weapon') renderWeapon(gui)
      else if (page === 'offhand') renderOffhand(gui)
    })
  }

  // ========== 主页面：三个入口居中 ==========

  function renderMain(gui) {
    const prof = player.persistentData.profession
    const wp   = player.persistentData.mainWeapon
    const off  = player.persistentData.offhandWeapon

    // row 0: 全部空白（不设任何物品）
    // row 1: 全部空白

    // row 2: 三个长方形顶部边框 [  ][gray][gray][gray][gray][gray][gray][gray][  ]
    for (let x = 1; x < 8; x++) gui.slot(x, 2, s => { s.setItem(PANE.gray) })

    // row 3: 三个长方形左右边框 [  ][gray][职业][gray][主武器][gray][副武器][gray][  ]
    for (let x of [1,3,5,7]) gui.slot(x, 3, s => { s.setItem(PANE.gray) })
    // col 2: 职业
    gui.slot(2, 3, slot => {
      slot.setItem(
        Item.of('minecraft:knowledge_book')
          .withCustomName(Text.translate('gui.kubejs.profession_select.status_profession'))
          .withLore([prof ? Text.translate('profession.kubejs.' + prof) : Text.of('')]))
      slot.setLeftClicked(() => openPage('prof'))
    })
    // col 4: 主武器（锁定/可用）
    gui.slot(4, 3, slot => {
      if (!prof) {
        slot.setItem(PANE.gray)
      } else {
        slot.setItem(
          Item.of('minecraft:crossbow')
            .withCustomName(Text.translate('gui.kubejs.profession_select.status_weapon'))
            .withLore([wp ? Text.translate('weapon.kubejs.' + wp) : Text.of('')]))
        slot.setLeftClicked(() => openPage('weapon'))
      }
    })
    // col 6: 副武器（锁定/可用）
    gui.slot(6, 3, slot => {
      if (!wp) {
        slot.setItem(PANE.gray)
      } else {
        slot.setItem(
          Item.of('minecraft:shield')
            .withCustomName(Text.translate('gui.kubejs.profession_select.status_offhand'))
            .withLore([off ? Text.translate('offhand.kubejs.' + off) : Text.of('')]))
        slot.setLeftClicked(() => openPage('offhand'))
      }
    })

    // row 4: 三个长方形底部边框 [  ][gray][gray][gray][gray][gray][gray][gray][  ]
    for (let x = 1; x < 8; x++) gui.slot(x, 4, s => { s.setItem(PANE.gray) })

    // row 5: 全部空白
  }

  // ========== 职业选择 ==========

  function renderProf(gui) {
    gui.slot(0, 0, slot => {
      slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
      slot.setLeftClicked(() => openPage('main'))
    })
    for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

    const start = Math.floor((9 - PROFESSIONS.length) / 2)
    PROFESSIONS.forEach((prof, i) => {
      gui.slot(start + i, 2, slot => {
        slot.setItem(
          Item.of('minecraft:knowledge_book')
            .withCustomName(Text.translate('profession.kubejs.' + prof.id))
            .withLore([Text.translate('profession.kubejs.' + prof.id + '.desc')]))
        slot.setLeftClicked(() => {
          player.persistentData.profession = prof.id
          player.tell(Text.translate('msg.kubejs.profession_select.selected', Text.translate('profession.kubejs.' + prof.id)))
          openPage('main')
        })
      })
    })
  }

  // ========== 主武器选择 ==========

  function renderWeapon(gui) {
    gui.slot(0, 0, slot => {
      slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
      slot.setLeftClicked(() => openPage('main'))
    })
    for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

    const start = Math.floor((9 - MAIN_WEAPONS.length) / 2)
    MAIN_WEAPONS.forEach((wp, i) => {
      gui.slot(start + i, 2, slot => {
        slot.setItem(Item.of('minecraft:iron_sword').withCustomName(Text.translate('weapon.kubejs.' + wp.id)))
        slot.setLeftClicked(() => {
          player.persistentData.mainWeapon = wp.id
          player.tell(Text.translate('msg.kubejs.profession_select.main_weapon', Text.translate('weapon.kubejs.' + wp.id)))
          openPage('main')
        })
      })
    })
  }

  // ========== 副武器选择 ==========

  function renderOffhand(gui) {
    gui.slot(0, 0, slot => {
      slot.setItem(Item.of('minecraft:barrier').withCustomName(Text.translate('gui.kubejs.profession_select.back')))
      slot.setLeftClicked(() => openPage('main'))
    })
    for (let x = 1; x < 8; x++) gui.slot(x, 1, s => { s.setItem(PANE.gray) })

    const start = Math.floor((9 - OFFHAND_WEAPONS.length) / 2)
    OFFHAND_WEAPONS.forEach((wp, i) => {
      gui.slot(start + i, 2, slot => {
        slot.setItem(Item.of('minecraft:shield').withCustomName(Text.translate('offhand.kubejs.' + wp.id)))
        slot.setLeftClicked(() => {
          player.persistentData.offhandWeapon = wp.id
          player.tell(Text.translate('msg.kubejs.profession_select.offhand_weapon', Text.translate('offhand.kubejs.' + wp.id)))
          openPage('main')
        })
      })
    })
  }

  // ========== 启动 ==========
  openPage('main')
})
