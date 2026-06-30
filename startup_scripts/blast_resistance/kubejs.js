// KubeJS 自定义方块 — 全部设为基岩级（3600000 抗爆 / -1 硬度）
BlockEvents.modification(event => {
  event.modify('kubejs:vehicle_deployer', block => {
    block.explosionResistance = 3600000
    block.destroySpeed = -1
  })
  event.modify('kubejs:ammo_crate', block => {
    block.explosionResistance = 3600000
    block.destroySpeed = -1
  })
})
