const TAOV_RETURNED_BLOCKS_PER_REPAIR_PART = 1

ServerEvents.loaded(event => {
  event.server.runCommandSilent(
    `taov_returned_repair_parts blocks_per_part ${TAOV_RETURNED_BLOCKS_PER_REPAIR_PART}`
  )
})