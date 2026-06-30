// TAOV Returned 方块 — 全部设为基岩级（3600000 抗爆 / -1 硬度）
BlockEvents.modification(event => {
  event.modify('taov_returned:player_cannon_controller', block => {
    block.explosionResistance = 3600000
    block.destroySpeed = -1
  })
  event.modify('taov_returned:schematic_anchor', block => {
    block.explosionResistance = 3600000
    block.destroySpeed = -1
  })
  event.modify('taov_returned:periscope_scope', block => {
    block.explosionResistance = 3600000
    block.destroySpeed = -1
  })
  event.modify('taov_returned:player_helm', block => {
    block.explosionResistance = 3600000
    block.destroySpeed = -1
  })
})
