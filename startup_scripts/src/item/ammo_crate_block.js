// ============================================================
// 弹药补给箱 - 方块注册（i18n 规范）
//
// 像木桶一样有 open 属性：
//   open=false → barrel_top（关闭）
//   open=true  → barrel_top_open（打开）
//
// 注册 BlockEntity 并启用 serverTicking，
// 让每个方块独立运行自己的 tick 逻辑（而非全局循环）。
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
    .blockEntity(info => {
      // 启用服务端 ticking，让每个方块自行驱动逻辑
      info.serverTicking()
      info.tickFrequency(20) // 每 20 tick（1秒）执行一次
    })
})
