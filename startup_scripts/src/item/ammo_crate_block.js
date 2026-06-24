// ============================================================
// 弹药补给箱 - 方块注册（i18n 规范）
//
// 像木桶一样有 open 属性：
//   open=false → barrel_top（关闭）
//   open=true  → barrel_top_open（打开）
//
// 纹理使用原版材质（无需额外 PNG）：
//   top:    minecraft:block/barrel_top / barrel_top_open
//   bottom: minecraft:block/oak_planks
//   side:   minecraft:block/barrel_side
// ============================================================

StartupEvents.registry('block', event => {
  event.create('ammo_crate')
    .translationKey('block.kubejs.ammo_crate')
    .property(Java.loadClass('net.minecraft.world.level.block.state.properties.BooleanProperty').create('open'))
    .noDrops()
    .hardness(2.0)
    .resistance(6.0)
    .requiresTool(true)
    .soundType('wood')
})
