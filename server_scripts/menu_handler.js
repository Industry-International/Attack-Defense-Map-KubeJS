// ============================================================
// 队伍选择菜单 - 可重复选择覆盖
// ============================================================

var ATTACK = 'attack'
var DEFENSE = 'defense'
var NONE = 'none'

function getTeam(p) { return p.persistentData.team || NONE }
function setTeam(p, t) { p.persistentData.team = t }

// 创建菜单物品（用空名称覆盖 tooltip，去除"minecraft"等蓝字来源提示，保留按钮显示名）
function menuItem(id) {
    return Item.of(id).set('minecraft:custom_name', Component.empty())
}

// 给物品加上附魔光效（不消耗真实附魔）
function withGlow(item) {
    return item.set('minecraft:enchantment_glint_override', true)
}

// ---------- 打开队伍选择菜单 ----------
function openTeamMenu(player) {
    var current = getTeam(player)
    var selected = current === ATTACK ? Component.translatable('team.attack')
                  : current === DEFENSE ? Component.translatable('team.defense')
                  : Component.translatable('team.none')

    player.openChestGUI(Component.translatable('menu.title'), 6, function(gui) {
        var glass = 'minecraft:gray_stained_glass_pane'

        // === 边框：灰色玻璃板 ===
        // 上边框
        for (var x = 0; x <= 8; x++) {
            gui.button(x, 0, menuItem(glass), Component.empty(), function() {})
        }
        // 下边框（左下角放返回箭头）
        gui.button(0, 5, menuItem('immersiveengineering:warning_sign_arrow_double_left'),
            Component.translatable('menu.back'), function() {})
        for (var x = 1; x <= 8; x++) {
            gui.button(x, 5, menuItem(glass), Component.empty(), function() {})
        }
        // 左右侧柱
        for (var y = 1; y <= 4; y++) {
            gui.button(0, y, menuItem(glass), Component.empty(), function() {})
            gui.button(8, y, menuItem(glass), Component.empty(), function() {})
        }

        // === 进攻方 (第2行 第2列) ===
        var attackItem = current === ATTACK
            ? withGlow(menuItem('minecraft:blaze_powder'))
            : menuItem('minecraft:blaze_powder')
        gui.button(2, 2, attackItem, Component.translatable('team.attack'), function() {
            setTeam(player, ATTACK)
            player.tell(Component.translatable('team.joined_attack'))
            openTeamMenu(player)
        })

        // === 防守方 (第2行 第6列) ===
        var defenseItem = current === DEFENSE
            ? withGlow(menuItem('minecraft:shield'))
            : menuItem('minecraft:shield')
        gui.button(6, 2, defenseItem, Component.translatable('team.defense'), function() {
            setTeam(player, DEFENSE)
            player.tell(Component.translatable('team.joined_defense'))
            openTeamMenu(player)
        })

        // === 状态显示 (第3行) ===
        gui.button(4, 3, menuItem('minecraft:compass'),
            Component.translatable('menu.status').append(Component.string(' ')).append(selected), function() {})
    })
}

// ---------- 入口：右键菜单物品 ----------
ItemEvents.rightClicked('kubejs:menu', function(event) {
    var player = event.player
    openTeamMenu(player)
})