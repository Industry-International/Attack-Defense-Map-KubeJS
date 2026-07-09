# 出生点选择器（Spawn Selector）使用教程

## 目录结构

```
server_scripts/spawn_compass/
├── config.js       ← 配置常量 + 工具函数（出生点定义、可见性读写、队伍查询）
├── command.js      ← 管理员指令（/spawn_selector visible/invisible/list）
├── gui.js          ← 右键物品 GUI（4行界面，出生点选择/加入战场/随机传送/允许开关）
└── main.js         ← 事件入口（仅处理右键物品事件）
```

## GUI 布局

```
┌──────────────────────────────────────────────────────┐
│ 🟡🟡🟡🟡🟡🟡🟡🟡🟡                               │ 行0 顶边框
├──────────────────────────────────────────────────────┤
│ 🟡│✕退出│  │🧭标题│🟢允许│👁当前│  │⬡随机│🟡   │ 行1
├──────────────────────────────────────────────────────┤
│ 🟡│🗺A1│🗺B1│🗺C1│🗺C2│  │  │  │🟡             │ 行2 出生点一字排开
├──────────────────────────────────────────────────────┤
│ 🟡🟡🟡🟡🟡🟡🟡│⚔加入战场│🟡                │ 行3 底边框
└──────────────────────────────────────────────────────┘
```

### 行1 功能说明

| slot | 物品 | 功能 |
|:----:|------|------|
| 0 | 淡黄玻璃 | 边框 |
| 1 | 屏障 | 关闭 GUI |
| 3 | 指南针 | 标题（仅显示） |
| 4 | 绿/灰染料 | **允许他人复活**开关（点击切换，所有在线且开启的玩家可通过随机传送找到你） |
| 5 | 末影之眼 | 当前已选择的出生点（显示点名） |
| 7 | 末影珍珠 | **随机传送**到一名允许复活的玩家附近 |
| 8 | 淡黄玻璃 | 边框 |

### 行2 出生点

显示当前队伍可见的出生点（按 `/spawn_selector visible` 配置），点击选择/取消。已选中的出生点有附魔光效。

### 行3 加入战场

右下角铁剑按钮 **⚔ 加入战场** → 执行流程：
1. 传送到玩家已选中的出生点
2. 添加原版 tag `yes_start_1`
3. 延迟 8 tick 后服务器身份执行 `profequip give`

### 翻译键

| 键 | 说明 |
|---|------|
| `item.kubejs.spawn_selector` | 物品名 |
| `spawn.kubejs.point_*` | 各出生点的名称 |
| `gui.kubejs.spawn_selector.title` | GUI 标题 |
| `gui.kubejs.spawn_selector.exit` | 退出按钮 |
| `gui.kubejs.spawn_selector.current` / `current_none` | 当前选择状态 |
| `gui.kubejs.spawn_selector.allow_respawn.on` / `.off` | 允许复活开关 |
| `gui.kubejs.spawn_selector.random_teleport` | 随机传送按钮 |
| `gui.kubejs.spawn_selector.join_battle` | 加入战场按钮 |
| `gui.kubejs.spawn_selector.selected_mark` | 已选中标记 |
| `msg.kubejs.spawn_selector.*` | 提示消息 |

## 管理员指令

| 指令 | 说明 | 示例 |
|------|------|------|
| `/spawn_selector visible <pointId> <team>` | 让出生点对某队伍可见 | `/spawn_selector visible A1 attack` |
| `/spawn_selector invisible <pointId>` | 禁用出生点（清除所有可见队伍） | `/spawn_selector invisible A1` |
| `/spawn_selector list` | 查看所有出生点状态 | `/spawn_selector list` |

- **`<pointId>`** 自动补全 `config.js` 中定义的出生点
- **`<team>`** 自动读取**原版计分板队伍**补全（即 `/team` 命令创建的队伍）

### 数据包协作示例

```
# 防守方初始可见
/spawn_selector visible attacker defense

# 进攻方占领了 A1
/spawn_selector visible A1 attack

# A1 被夺回，禁用
/spawn_selector invisible A1
```

## 配置出生点

编辑 `config.js` 中的 `SPAWN_POINTS`：

```javascript
const SPAWN_POINTS = {
  attacker: { nameKey: 'spawn.kubejs.point_attacker', pos: "-265.43 109 -30.04",    dimension: 'minecraft:overworld' },
  A1:       { nameKey: 'spawn.kubejs.point_a1',       pos: "-357.67 120.00 -51.19", dimension: 'minecraft:overworld' },
  // ...
}
```

`pos` 为 `"x y z"` 格式，对应原版 `/tp x y z` 的坐标写法。

## 修改后刷新

- 脚本修改：`/kubejs reload`
- 语言文件修改：`F3+T` 刷新资源包
- 新增出生点后还需 `/spawn_selector list` 确认可见性

---

## 模块集成

出生点选择器受 `/module` 命令管理，模块 ID 为 `spawn_compass`。

### 模块禁用时的自动清理

执行 `/module spawn_compass off` 后自动执行：

| 清理项 | 说明 |
|--------|------|
| 在线玩家的 `spawn_selected` | 清空已选的出生点 |
| 在线玩家的 `spawn_allow_respawn` | 关闭允许他人复活 |
| server 级 `spawn_visibility` | 重置为 `{}`，所有出生点不可见 |
| 内存死亡倒计时 | 清空倒计时表 |

> 离线玩家的残留数据由模块守卫（`isModuleEnabled`）拦截，不会影响功能。

### 使用示例

```mcfunction
# 游戏开始：启用模块
/module spawn_compass on
/spawn_selector visible attacker attack
/spawn_selector visible defender defense

# 游戏结束：停用模块（自动清理所有选择数据）
/module spawn_compass off
```

---

## 相关文档

| 文档 | 说明 |
|------|------|
| **[使用指南总览](./README.md)** | 所有模块的索引总览 |
| **[指令使用](./指令使用.md)** | 全部 KubeJS 管理员指令大全 |
| **[可调用接口参考](./可调用接口参考.md)** | 全局 API、变量、函数速查 |
| **[启动脚本配置](./startup_configs-使用教程.md)** | 物品注册（出生点选择器物品 `kubejs:spawn_selector`） |
