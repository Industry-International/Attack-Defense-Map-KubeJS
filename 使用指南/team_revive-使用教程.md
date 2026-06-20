# 队伍复活券系统（Team Revive）使用教程

## 概述

队伍复活券系统参考**三角洲攻防模式**的复活券模型：

- 每个队伍拥有一个可消耗的**复活券池**
- 玩家死亡时消耗 **1 张**复活券
- 券归零时触发淘汰函数（只触发一次）
- 可通过指令为队伍增加复活券（不可超过上限）
- 未配置的队伍不使用复活券系统

## 目录结构

```
server_scripts/team_revive/
├── config.js    ← 配置文件（队伍参数、淘汰函数路径、计分板状态检测）
└── main.js      ← 核心逻辑（死亡事件、复活券管理、指令注册）
```

---

## 一、配置说明

### `config.js`

```js
const TEAM_REVIVE_CONFIG = {
  teams: {
    attacker: { max: 200, initial: 200 },  // 进攻方：上限200，开局200
  },
  broadcastDeathCount: true,       // 死亡时向全队广播剩余券数
  functionPath: "game:eliminated", // 淘汰时调用的数据包函数
  scoreHolder: 'state',           // 计分板虚拟玩家名
  scoreObjective: 'game_state',   // 游戏状态计分板目标
  activeValue: 1,                 // 游戏进行中的分数值
  persistKey: 'team_revive',      // 持久化数据键名
  eliminatedKey: 'team_revive_eliminated', // 淘汰标记键名
}
```

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `teams` | 使用复活券的队伍配置（键=队伍名，值={max, initial}） | `{ attacker: { max: 200, initial: 200 } }` |
| `broadcastDeathCount` | 死亡时是否向全队广播剩余券数 | `true` |
| `functionPath` | 淘汰时调用的数据包 function 路径 | `"game:eliminated"` |
| `scoreHolder` | 用于检测游戏状态的计分板虚拟玩家名 | `'state'` |
| `scoreObjective` | 游戏状态计分板目标名 | `'game_state'` |
| `activeValue` | 游戏进行中的分数值 | `1` |
| `persistKey` | 持久化存储根键名 | `'team_revive'` |
| `eliminatedKey` | 淘汰标记键名 | `'team_revive_eliminated'` |

> **游戏状态检测**：系统通过计分板 `game_state` 中虚拟玩家 `state` 的分数来判断游戏是否进行中。分数等于 `activeValue`（默认1）时才处理死亡消耗，否则跳过。

---

## 二、核心机制

### 复活券生命周期

```
[游戏开始]
    │
    ▼
初始化复活券池 → attacker: 200 张
    │
    ▼（玩家死亡）
消耗 1 张复活券 → 向全队广播剩余券数
    │
    ├── 券数 > 0 → 继续游戏
    │
    └── 券数 = 0 → 触发淘汰
                      │
                      ▼
              调用数据包函数 game:eliminated
              全局广播淘汰消息（msg.kubejs.team_revive.eliminated）
              标记队伍为已淘汰（防止重复触发）
```

### 淘汰防重复机制

- 使用 `server.persistentData.team_revive_eliminated` 记录已淘汰队伍
- 已被标记淘汰的队伍再次死亡不再消耗复活券
- 淘汰函数**只触发一次**

### 数据持久化

- 复活券数存储在 `server.persistentData.team_revive`（JSON 字符串）
- 淘汰标记存储在 `server.persistentData.team_revive_eliminated`
- 重启服务器后数据保留

---

## 三、指令参考

| 指令 | 权限 | 说明 |
|------|------|------|
| `/team_revive add <数量>` | OP 2 | 为进攻方增加复活券（不超过上限） |
| `/team_revive reset` | OP 2 | 重置所有队伍复活券到初始值，清除淘汰标记 |
| `/team_revive status [<队伍>]` | OP 2 | 查看复活券状态（不指定队伍时显示全部） |

### 使用示例

```mcfunction
# 为进攻方增加 50 张复活券
/team_revive add 50

# 查看所有队伍状态
/team_revive status

# 查看指定队伍状态
/team_revive status attacker

# 重置所有复活券
/team_revive reset
```

---

## 四、翻译键

语言文件位于 `assets/kubejs/lang/{en_us,zh_cn}.json`：

| 翻译键 | 说明 |
|--------|------|
| `msg.kubejs.team_revive.add_done` | 增加复活券成功消息 |
| `msg.kubejs.team_revive.reset_done` | 重置成功消息 |
| `msg.kubejs.team_revive.status_header` | 状态列表标题 |
| `msg.kubejs.team_revive.status_line` | 状态列表行 |
| `msg.kubejs.team_revive.status_single` | 单队伍状态 |
| `msg.kubejs.team_revive.status_empty` | 状态列表为空 |
| `msg.kubejs.team_revive.no_config` | 队伍未配置复活券 |
| `msg.kubejs.team_revive.usage` | 指令用法提示 |
| `msg.kubejs.team_revive.tickets_left` | 死亡广播剩余券数 |
| `msg.kubejs.team_revive.eliminated` | 队伍被淘汰广播 |

---

## 五、公开全局函数

其他 KubeJS 脚本可直接调用：

| 函数 | 参数 | 说明 |
|------|------|------|
| `addTeamTickets(server, teamName, amount)` | server, 队伍名, 数量 | 为指定队伍增加复活券 |
| `getTeamTickets(server, teamName)` | server, 队伍名 | 获取指定队伍当前复活券数 |
| `resetAll(server)` | server | 重置所有队伍复活券 |
| `isTeamEliminated(server, teamName)` | server, 队伍名 | 检查队伍是否已被淘汰 |

### 调用示例

```js
// 在其他事件中调用
EntityEvents.death(event => {
  let server = event.server
  let teamName = 'attacker'
  let tickets = getTeamTickets(server, teamName)
  console.log(`进攻方剩余复活券: ${tickets}`)
})
```

---

## 六、与其他模块的关系

| 模块 | 关系说明 | 文档 |
|------|---------|------|
| **队伍选择器** | 玩家通过队伍选择器加入进攻方/防守方，复活券系统自动读取玩家的 `team` 归属 | [队伍选择器](./team-使用教程.md) |
| **指令系统** | `/team_revive` 指令是独立注册的管理指令 | [指令使用](./指令使用.md) |
| **职业系统** | 独立模块，无直接依赖 | [职业系统](./profession-使用教程.md) |

---

## 七、注意事项

1. **游戏状态检测**：只有 `game_state` 计分板中 `state` 的分数等于 `activeValue`（默认1）时，死亡才消耗复活券
2. **队伍名大小写**：配置中的队伍名用小写，系统自动忽略大小写
3. **淘汰只触发一次**：`eliminatedKey` 标记防止重复触发淘汰函数
4. **修改后刷新**：`/kubejs reload`
5. **语言文件修改**：`F3+T` 刷新资源包
