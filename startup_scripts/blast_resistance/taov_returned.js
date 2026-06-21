BlockEvents.modification(event => {
  event.modify('taov_returned:player_cannon_controller', block => {
    block.explosionResistance = 20
  })
})