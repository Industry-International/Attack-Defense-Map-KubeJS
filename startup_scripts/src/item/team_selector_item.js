// ============================================================
// 队伍选择器 - 物品注册（i18n 规范）
// 仿照 profession_item.js 模式，使用翻译键
// 文本定义在 assets/kubejs/lang/ 下
// ============================================================

StartupEvents.registry('item', event => {
  event.create('team_selector')
    .translationKey('item.kubejs.team_selector')
    .maxStackSize(1)
    .texture('kubejs:item/team_selector')
})
