// ============================================================
// 弹药补给箱 - 方块注册（方块驱动版）
//
// 每个方块通过 persistentData 独立存储配置：
//   - slots:         各弹药类型及补充量
//   - scanRange:     扫描半径
//   - enterDelay:    载具驶入后等待 tick 数再补充
//   - cooldown:      补充后的冷却 tick 数
//   - weaponAmmoThreshold: 武器预装弹补充阈值
//
// 方块放置时自动写入默认配置（server_scripts 中定义）。
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
