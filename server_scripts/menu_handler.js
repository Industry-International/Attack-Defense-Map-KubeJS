const $SimpleMenuProvider = require('packages/net/minecraft/world/SimpleMenuProvider')
const $ChestMenu = require('packages/net/minecraft/world/inventory/ChestMenu')
const $MenuType = require('packages/net/minecraft/world/inventory/MenuType')


ItemEvents.rightClicked('kubejs:menu', event => {
    const { player } = event

    player.openMenu(new $SimpleMenuProvider(
        (id, inv, p) => new $ChestMenu($MenuType.GENERIC_9x6, id, inv, null, 6),
        Component.translatable('item.kubejs.menu')
    ))
})
