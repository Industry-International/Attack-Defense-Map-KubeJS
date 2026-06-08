

StartupEvents.registry('item', event => {
    event.create('kubejs:menu')
        .texture('layer0', 'minecraft:item/structure_void')
        .glow(true)
        .maxStackSize(1)
})

// 设置稀有度、显示名称、隐藏 tooltip
ItemEvents.modification(event => {
    event.modify('kubejs:menu', item => {
        item.set('minecraft:rarity', 'epic')
        item.setItemName(Component.string('§6菜 单'))
        item.set('minecraft:hide_tooltip', true)
    })
})