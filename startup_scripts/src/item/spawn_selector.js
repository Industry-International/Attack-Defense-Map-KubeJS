// ============================================================
// 出生点选择器 - 物品注册（i18n 规范）
// 材质复用原版钟（minecraft:item/clock）
// ============================================================

StartupEvents.registry('item', event => {
  event.create('spawn_selector')
    .translationKey('item.kubejs.spawn_selector')
    .maxStackSize(1)
  // 材质由 assets/kubejs/models/item/spawn_selector.json 指定（复用原版钟）
})
