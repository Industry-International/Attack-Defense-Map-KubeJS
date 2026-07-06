// ============================================================
// 自杀笔记 - 物品注册（i18n 规范）
// 手持右键即可自杀
// ============================================================

StartupEvents.registry('item', event => {
  event.create('suicide_note')
    .translationKey('item.kubejs.suicide_note')
    .maxStackSize(1)
    .texture('kubejs:item/suicide_note')
    .tooltip(Text.translate('item.kubejs.suicide_note.tooltip'))
})
