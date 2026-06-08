// Vanilla explosion resistance overrides migrated from the TAOV balance pack.
const DYE_COLORS = [
  'white', 'light_gray', 'gray', 'black',
  'brown', 'red', 'orange', 'yellow',
  'lime', 'green', 'cyan', 'light_blue',
  'blue', 'purple', 'magenta', 'pink'
]

function railwaysPalette(suffixes) {
  const ids = suffixes.map(suffix => `railways:${suffix}`)
  DYE_COLORS.forEach(color => {
    suffixes.forEach(suffix => ids.push(`railways:${color}_${suffix}`))
  })
  return ids
}

const LOCOMETAL_NORMAL = railwaysPalette([
  'plated_locometal',
  'flat_slashed_locometal',
  'flat_riveted_locometal'
])

const LOCOMETAL_ANTIBLAST = railwaysPalette([
  'brass_wrapped_locometal',
  'copper_wrapped_locometal',
  'iron_wrapped_locometal'
])

const LOCOMETAL_ANTIPEN = railwaysPalette([
  'slashed_locometal',
  'riveted_locometal',
  'locometal_pillar',
  'locometal_smokebox'
])

const CREATE_CASINGS = [
  'create:andesite_casing',
  'create:brass_casing',
  'create:copper_casing',
  'create:railway_casing',
  'create:shadow_steel_casing',
  'create:refined_radiance_casing'
]

BlockEvents.modification(event => {
  function setExplosionResistance(ids, value) {
    ids.forEach(id => {
      event.modify(id, block => {
        block.setExplosionResistance(value)
      })
    })
  }

  setExplosionResistance(LOCOMETAL_NORMAL, 21)
  setExplosionResistance(LOCOMETAL_ANTIBLAST, 32)
  setExplosionResistance(LOCOMETAL_ANTIPEN, 17)
  setExplosionResistance(CREATE_CASINGS, 14)
  setExplosionResistance(['minecraft:netherite_block'], 4)
})
