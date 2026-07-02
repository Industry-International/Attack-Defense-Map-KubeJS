// ============================================================
// 载具部署台 - 方块注册
//
// 每个部署台方块 = 一个载具位
// 通过 blockEntity + serverTicking 自我管理
// 所有配置存储在 persistentData 中
// ============================================================

StartupEvents.registry('block', event => {
  event.create('vehicle_deployer')
    .translationKey('block.kubejs.vehicle_deployer')
    .noDrops()
    .hardness(3.0)
    .resistance(8.0)
    .requiresTool(true)
    .soundType('metal')
    .blockEntity(info => {
      // 每 20 tick（1 秒）执行一次 tick
      info.serverTicking()
      info.tickFrequency(20)
    })
})
