// ============================================================
// 职业选择器 - 物品注册（i18n 规范）
// ============================================================
// 使用翻译键，文本定义在 assets/kubejs/lang/ 下
// ============================================================

StartupEvents.registry('item', event => {
  event.create('profession_selector')
    .translationKey('item.kubejs.profession_selector')
    .maxStackSize(1)
    .texture('kubejs:item/profession_selector')
})
