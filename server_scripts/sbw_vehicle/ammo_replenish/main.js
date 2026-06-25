// ============================================================
// 弹药补给站 - 临时GUI测试版
// ============================================================
//
// ⚠ 临时版本：blockEntityTick 已禁用，仅保留GUI测试功能
//   右键点击方块时用默认配置打开GUI
// ============================================================

// ============================================================
// 【临时禁用】BlockEntity Tick
// ============================================================
// BlockEvents.blockEntityTick('kubejs:ammo_crate', event => {
//   // 待GUI测试通过后再启用
// })

// ============================================================
// 右键交互：打开 LDLib2 配置 GUI（临时简化版）
// ============================================================

BlockEvents.rightClicked('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return
  let player = event.player
  let pos = event.block.getPos()

  try {
    // 临时：直接用默认配置填充缓存，不读取方块NBT
    let cacheData = JSON.stringify({
      pos: { x: pos.getX(), y: pos.getY(), z: pos.getZ() },
      dim: event.level.getDimension().toString(),
      config: JSON.parse(JSON.stringify(DEFAULT_STATION_CONFIG))
    })
    global.ammoStationGuiCache.put(player.uuid, cacheData)
    LDLib2UIFactory.openBlockUI(player, pos, 'kubejs:ammo_station_cfg')
  } catch (e) {
    console.log('[弹药补给站] GUI打开失败: ' + e)
    player.tell(Component.literal('§c[弹药补给站] GUI加载失败: ' + e))
  }

  event.cancel()
})
