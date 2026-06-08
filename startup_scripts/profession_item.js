// ============================================================
// 职业选择器 - 物品注册（i18n 规范）
// ============================================================
// 使用翻译键，文本定义在 assets/kubejs/lang/ 下
// ============================================================

StartupEvents.registry('item', event => {
  event.create('profession_selector')
    // displayName 也可用 translatable，但这里直接用翻译键更简洁
    .translationKey('item.kubejs.profession_selector')
    .maxStackSize(1)
})
