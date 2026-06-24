// ============================================================
// 弹药补给箱 - 方块注册（i18n 规范）
//
// 纹理使用原版材质（无需额外 PNG）：
//   top:    minecraft:block/barrel_top      — 桶盖
//   bottom: minecraft:block/oak_planks      — 橡木板
//   side:   minecraft:block/barrel_side     — 桶身
// ============================================================

StartupEvents.registry('block', event => {
  event.create('ammo_crate')
    .translationKey('block.kubejs.ammo_crate')
    .parentModel('minecraft:block/cube_bottom_top')
    .texture('top', 'minecraft:block/barrel_top')
    .texture('bottom', 'minecraft:block/oak_planks')
    .texture('side', 'minecraft:block/barrel_side')
    .hardness(2.0)
    .resistance(6.0)
    .requiresTool(true)
    .soundType('wood')
})
