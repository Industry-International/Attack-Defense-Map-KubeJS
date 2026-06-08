// ============================================================
// 职业配置器 v3 - 逐步调试版
// ============================================================

// ---- 职业数据 ----
var PROFESSIONS = [
    { id: 'warrior',  icon: 'minecraft:stone_sword',     name: '§c战士' },
    { id: 'mage',     icon: 'minecraft:enchanting_table', name: '§b法师' },
    { id: 'archer',   icon: 'minecraft:bow',              name: '§a射手' },
    { id: 'assassin', icon: 'minecraft:iron_sword',       name: '§8刺客' },
    { id: 'ranger',   icon: 'minecraft:crossbow',         name: '§2游侠' },
]

// ---- 玩家数据 ----
function data(player) {
    var d = player.persistentData.profession
    if (!d) {
        d = { type: 'warrior', weapon: null, offhand: null }
        player.persistentData.profession = d
    }
    return d
}

// ---- 测试步骤1: 先看事件能不能触发 ----
// ItemEvents.rightClicked 是最直接的方式
ItemEvents.rightClicked('kubejs:profession_configurator', function(event) {
    console.log('§e[职业配置器] rightClicked 事件触发!')
    console.log('  玩家: ' + event.player.name)
    console.log('  手: ' + event.hand)
    console.log('  客户端? ' + event.player.level.isClientSide())
    
    if (event.hand !== 'main_hand') return
    if (event.player.level.isClientSide()) return
    
    event.cancel()
    
    // 打开一个最简单的测试 GUI
    testGUI(event.player)
})

// ---- 也绑定 firstRightClicked (某些版本需要) ----
ItemEvents.firstRightClicked('kubejs:profession_configurator', function(event) {
    console.log('§e[职业配置器] firstRightClicked 事件触发!')
    
    if (event.hand !== 'main_hand') return
    if (event.player.level.isClientSide()) return
    
    event.cancel()
    testGUI(event.player)
})

// ---- 最简单的测试 GUI (3行, 只有一个按钮) ----
function testGUI(player) {
    console.log('§e[职业配置器] 尝试打开 GUI...')
    
    try {
        player.openChestGUI(Text.of('§6测试菜单'), 3, function(gui) {
            console.log('§e[职业配置器] GUI 回调执行!')
            
            // 放一个钻石按钮在(0,0)
            var btn = Item.of('minecraft:diamond')
            btn.setName(Text.of('§b测试按钮'))
            
            gui.button(0, 0, btn, Text.of('§7点击测试'), function() {
                player.tell(Text.of('§a✔ 按钮点击成功!'))
                console.log('§e[职业配置器] 按钮被点击!')
            })
            
            // 关闭事件
            gui.closed = function() {
                console.log('§e[职业配置器] GUI 已关闭')
            }
        })
        console.log('§e[职业配置器] openChestGUI 调用完成')
    } catch(err) {
        console.log('§c[职业配置器] 打开 GUI 出错: ' + err)
        player.tell(Text.of('§c错误: ' + err))
    }
}

// ============================================================
// 如果上面的测试 GUI 能打开, 下面才是正式的配置 GUI
// ============================================================

function openProfessionGUI(player) {
    var d = data(player)
    
    try {
        player.openChestGUI(Text.of('§8[ §6职业配置 §8]'), 3, function(gui) {
            
            // ---- 第1行: 职业选择 (y=0) ----
            for (var i = 0; i < PROFESSIONS.length; i++) {
                var p = PROFESSIONS[i]
                var sel = (d.type === p.id)
                var icon = Item.of(p.icon)
                icon.setName(Text.of((sel ? '§e▶ ' : '  ') + p.name))
                
                // 用函数隔离闭包
                profBtn(gui, i, p, icon, player, d)
            }
            
            // ---- 第2行: 武器 (y=1) ----
            // 主武器图标
            var mainIcon = d.weapon ? Item.of(d.weapon) : Item.of('minecraft:shield')
            mainIcon.setName(Text.of(d.weapon ? '§e主武器' : '§7[空] 主武器'))
            gui.button(0, 1, mainIcon, Text.of('§7手持武器点击此处设置'), function() {
                var held = player.getMainHandItem()
                if (!held.isEmpty() && held.id !== 'kubejs:profession_configurator') {
                    d.weapon = held.id
                    player.tell(Text.of('§a✔ 主武器: ' + held.displayName))
                    refresh(player)
                } else {
                    player.tell(Text.of('§c先手持武器再点击!'))
                }
            })
            
            // 副武器图标
            var offIcon = d.offhand ? Item.of(d.offhand) : Item.of('minecraft:iron_axe')
            offIcon.setName(Text.of(d.offhand ? '§6副武器' : '§7[空] 副武器'))
            gui.button(1, 1, offIcon, Text.of('§7手持物品点击此处设置'), function() {
                var held = player.getMainHandItem()
                if (!held.isEmpty() && held.id !== 'kubejs:profession_configurator') {
                    d.offhand = held.id
                    player.tell(Text.of('§a✔ 副武器: ' + held.displayName))
                    refresh(player)
                } else {
                    player.tell(Text.of('§c先手持物品再点击!'))
                }
            })
            
            // 清除武器 (x=7, y=1)
            gui.button(7, 1, Item.of('minecraft:barrier').setName(Text.of('§c清除主武器')),
                Text.of('§7点击清除'), function() {
                    d.weapon = null; refresh(player)
                })
            
            // 清除副武器 (x=8, y=1)
            gui.button(8, 1, Item.of('minecraft:barrier').setName(Text.of('§c清除副武器')),
                Text.of('§7点击清除'), function() {
                    d.offhand = null; refresh(player)
                })
            
            // ---- 第3行: 信息 + 关闭 (y=2) ----
            gui.button(8, 2, Item.of('minecraft:oak_door').setName(Text.of('§c关闭')),
                Text.of('§7关闭'), function() {
                    player.closeMenu()
                })
            
            gui.closed = function() {
                player.persistentData.profession = d
            }
        })
    } catch(err) {
        console.log('§c[职业配置器] 正式GUI出错: ' + err)
        player.tell(Text.of('§c错误: ' + err))
    }
}

function profBtn(gui, idx, prof, icon, player, d) {
    gui.button(idx, 0, icon, Text.of('§7选择 ' + prof.name), function() {
        d.type = prof.id
        player.tell(Text.of('§a✔ 职业: ' + prof.name))
        refresh(player)
    })
}

function refresh(player) {
    player.persistentData.profession = player.persistentData.profession
    player.closeMenu()
    openProfessionGUI(player)
}

// ---- 登录赠送 ----
PlayerEvents.loggedIn(function(event) {
    var d = data(event.player)
    if (!d._given) {
        event.player.give(Item.of('kubejs:profession_configurator'))
        d._given = true
        event.player.persistentData.profession = d
        event.player.tell(Text.of('§6✦ 获得职业配置器!'))
    }
})
