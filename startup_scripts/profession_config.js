// ============================================================
// 职业配置器 - 物品注册
// ============================================================
StartupEvents.registry('item', event => {
    event.create('profession_configurator')
        .displayName('§6职业配置器')
        .tooltip('§7右键打开配置界面')
        .maxStackSize(1)
})
