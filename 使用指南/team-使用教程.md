# 队伍选择器（Team Selector）使用教程

## 目录结构

```
server_scripts/team/
└── team_selector_gui.js    ← 队伍选择器 GUI（6行界面，数据包 function 协作）
```

## GUI 操作流程

```
右键队伍选择器 (kubejs:team_selector)
    │
    ▼
┌─────────────────────────────────┐
│ ✖                   §8队伍选择   │
├─────────────────────────────────┤
│                                 │
│  ⚔进攻方    👁观战    🛡防守方   │
│                                 │
│                                 │
│         ✖ 退出队伍              │
│                                 │
├─────────────────────────────────┤
└─────────────────────────────────┘
```

## 功能说明

| 按钮 | 位置 (col,row) | 物品 | 功能 |
|------|:-------------:|------|------|
| **进攻方** | (2,2) | 铁剑 | 加入进攻方队伍，播放拾取音效 |
| **观战** | (4,2) | 末影之眼 | 切换为观战模式，播放拾取音效 |
| **防守方** | (6,2) | 盾牌 | 加入防守方队伍，播放拾取音效 |
| **退出队伍** | (4,4) | 红色叉号 | 离开当前队伍，播放拒绝音效（仅在有队伍时显示） |
| **退出 GUI** | (0,0) | 左箭头 | 直接关闭 GUI |

### 视觉反馈

- 当前队伍对应的图标会显示**附魔光效**（`enchantment_glint_override`）
- 加入/切换队伍时播放 `entity.experience_orb.pickup` 音效
- 退出队伍时播放 `entity.villager.no` 音效

## 数据协作

队伍选择器本身只处理 GUI 显示和音效反馈，**实际的队伍加入/离开逻辑**由**数据包 function** 处理：

| 操作 | 调用的数据包 function |
|------|----------------------|
| 加入进攻方 | `game:teams/join_attacker` |
| 加入防守方 | `game:teams/join_defender` |
| 切换观战 | `game:teams/join_spectator` |
| 离开队伍 | `game:teams/leave_team` |

数据包 function 通过以下方式执行：
```mcfunction
execute as <玩家名> run function game:teams/join_attacker
```

队伍状态存储在 `player.persistentData.team` 中，数据包 function 和 GUI 共同维护此状态。

## 翻译键

队伍选择器的语言文件位于 `assets/kubejs/lang/{en_us,zh_cn}.json`：

| 键 | 说明 |
|---|------|
| `gui.kubejs.team_select.title` | 标题 |
| `gui.kubejs.team_select.exit` | 退出按钮 |
| `gui.kubejs.team_select.attack` | 进攻方按钮名 |
| `gui.kubejs.team_select.defense` | 防守方按钮名 |
| `gui.kubejs.team_select.spectator` | 观战按钮名 |
| `gui.kubejs.team_select.leave` | 退出队伍按钮名 |
| `msg.kubejs.team_select.joined_attack` | 加入进攻方消息 |
| `msg.kubejs.team_select.joined_defense` | 加入防守方消息 |
| `msg.kubejs.team_select.cleared` | 退出队伍消息 |

## 修改后刷新

- 脚本修改：`/kubejs reload`
- 语言文件修改：`F3+T` 刷新资源包
