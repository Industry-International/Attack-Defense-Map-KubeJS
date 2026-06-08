

StartupEvents.registry('item', event => {
    event.create('kubejs:menu')
        .texture('layer0', 'minecraft:item/structure_void')
        .glow(true)
        .maxStackSize(1)
})

