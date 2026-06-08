// ============================================================
// 职业选择器 - 物品注册
// ============================================================
// 注册一个右键可打开职业选择GUI的特殊物品
// 
// 可自定义项（搜索 "TODO" 查看）：
//   - 物品ID: "profession_selector"
//   - 显示名称
//   - 材质纹理
//   -  lore 描述
// ============================================================

StartupEvents.registry('item', event => {
  event.create('profession_selector')
    // TODO: 自定义显示名称
    .displayName('§6职业选择器')
    // TODO: 自定义物品纹理（需准备对应assets资源）
    // .texture('kubejs:item/profession_selector')
    // TODO: 自定义物品标签/种类
    // .tag('c:tools')
    .maxStackSize(1)
    .tooltip('§e右键打开职业选择界面')
    .tooltip('§7选择你的职业、主武器和副武器')
})
