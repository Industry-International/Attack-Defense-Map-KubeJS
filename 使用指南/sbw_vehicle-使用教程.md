# SBW 载具部署台 — 数据驱动部署系统

## 概述

本系统实现 SBW（Superb Warfare）模组载具的**数据包驱动自动部署**。所有载具数据通过 Node.js 脚本从模组 JAR 中提取，分类组织为数据包目录结构，由 KubeJS 运行时自动发现加载。

### 核心流程

```
模组 JAR  →  extract_vehicle_data.js (Node.js)  →  数据包目录  →  KubeJS 自动发现  →  部署台 GUI/部署
```

---

## 目录

- [数据包架构](#数据包架构)
  - [目录结构](#目录结构)
  - [_registry.json 声明文件](#_registryjson-声明文件)
  - [单个载具 JSON 格式](#单个载具-json-格式)
- [载具分类系统](#载具分类系统)
  - [分类映射](#分类映射)
  - [添加新载具/分类](#添加新载具分类)
- [部署台方块](#部署台方块)
  - [方块注册](#方块注册)
  - [GUI 配置界面](#gui-配置界面)
  - [持久化存储](#持久化存储)
- [部署逻辑](#部署逻辑)
  - [NBT 构建顺序](#nbt-构建顺序)
  - [双模式 NBT 配置](#双模式-nbt-配置)
  - [UUID 捕获机制](#uuid-捕获机制)
- [提取脚本](#提取脚本)
- [文件结构](#文件结构)
- [常见问题](#常见问题)

---

## 数据包架构

数据包根目录：`kubejs/data/kubejs/db/sbw_vehicle_db/`

### 目录结构

```
kubejs/data/kubejs/db/sbw_vehicle_db/
├── _registry.json                        ← 注册声明文件
├── _ammo_types.json                      ← 弹药类型注册表（v2：ammoCategories 嵌套分类，含 default/tabName/color）
├── guide.md                              ← 本文件
├── infantry_fighting_vehicle/            ← 步兵战车/装甲车 (14辆)
├── utility_vehicle/                      ← 多功能车/运输车 (14辆)
├── artillery/                            ← 火炮/火箭炮 (8辆)
├── aircraft/                             ← 固定翼飞机 (4辆)
├── defense_turret/                       ← 固定防御 (4辆)
├── naval/                                ← 水上载具 (2辆)
├── helicopter/                           ← 直升机 (2辆)
├── air_defense/                          ← 防空单位 (1辆)
└── drone/                                ← 无人机 (1辆)
```

每个分类目录下包含该分类的所有载具 JSON 文件，文件名格式：`mod--vehiclename.json`（如 `superbwarfare--t_90a.json`）。

### _registry.json 声明文件

```json
{
  "version": 2,
  "_comment": "SBW 载具数据库注册文件 — 在此声明允许使用的分类目录",
  "categories": {
    "main_battle_tank": {
      "enabled": true,
      "displayName": "主战坦克",
      "description": "Main Battle Tanks",
      "files": ["superbwarfare--t_90a.json", "superbwarfare--ztz_99a.json", ...]
    },
    ...
  }
}
```

- `enabled: false` 可禁用整个分类（该分类的载具不会被加载）
- `files` 列表由提取脚本自动生成，供 KubeJS 加载器读取

### 单个载具 JSON 格式

每个 JSON 文件包含该载具的完整数据，**自包含、无需二次分类**：

```json
{
  "vehicleId": "superbwarfare:t_90a",
  "mod": "superbwarfare",
  "category": "main_battle_tank",
  "baseName": "t_90a",
  "displayType": "Tank",

  "maxHealth": 500,
  "maxEnergy": 10000000,
  "hasDecoy": true,
  "engineType": "Track",
  "mass": 47,
  "parts": ["WheelRight", "WheelLeft", "MainEngine", "Turret"],
  "weapons": [
    { "key": "Cannon", "ammoTypes": ["superbwarfare:large_shell_ap", ...], ... }
  ],

  "nbtTemplate": {
    "Energy": 10000000,
    "Health": 500,
    "Invulnerable": 0,
    "LeftWheelHealth": 100,
    "LeftWheelDamaged": 0,
    "RightWheelHealth": 100,
    "RightWheelDamaged": 0,
    "MainEngineHealth": 150,
    "TurretHealth": 100,
    "WeaponState": { ... },
    "Inventory": { "Items": [...] }
  },

  "ammoSlots": {
    "superbwarfare:large_shell_ap": 32,
    "superbwarfare:rifle_ammo": 192
  }
}
```

---

## 载具分类系统

### 分类映射

载具分类由提取脚本根据模组数据的 `Type` 字段自动映射：

| displayType | 分类目录 | 中文名 | 数量 |
|-------------|---------|--------|------|
| `Tank` | `main_battle_tank` | 主战坦克 | 23 |
| `APC` | `infantry_fighting_vehicle` | 步兵战车/装甲车 | 14 |
| `Car` | `utility_vehicle` | 多功能车/运输车 | 14 |
| `Artillery` | `artillery` | 火炮/火箭炮 | 8 |
| `Airplane` | `aircraft` | 固定翼飞机 | 4 |
| `Defense` | `defense_turret` | 固定防御 | 4 |
| `Boat` | `naval` | 水上载具 | 2 |
| `Helicopter` | `helicopter` | 直升机 | 2 |
| `AA` | `air_defense` | 防空单位 | 1 |
| `Drone` | `drone` | 无人机 | 1 |

映射在提取脚本 `extract_vehicle_data.js` 中的 `DISPLAY_TYPE_CATEGORY` 常量定义。**这是唯一需要维护分类逻辑的地方**，JS 运行时不再做二次分类。

### 添加新载具/分类

**添加新载具**：重新运行提取脚本即可自动检测模组 JAR 中的新载具并生成 JSON。

**添加新分类**：
1. 在 `extract_vehicle_data.js` 的 `DISPLAY_TYPE_CATEGORY` 中添加映射
2. 在 `CATEGORY_DISPLAY` 和 `CATEGORY_DESC` 中添加显示名
3. 重新运行脚本

---

## 部署台方块

方块 ID: `kubejs:vehicle_deployer`

### 方块注册

```javascript
// startup_scripts/src/item/vehicle_deployer_block.js
StartupEvents.registry('block', event => {
  event.create('vehicle_deployer')
    .noDrops()
    .hardness(3.0)
    .blockEntity(info => {
      info.serverTicking()
      info.tickFrequency(20)     // 每 20 tick（1秒）执行一次
    })
})
```

### GUI 配置界面

通过 LDLib2 实现，共有 5 个标签页：

| 页签 | 功能 |
|------|------|
| `载具` | 分类下拉 + 载具下拉联动 + ID 直接输入 |
| `基础` | 重生延迟（tick）、自动重生（0/1）、生成带弹药（0/1） |
| `坐标` | 部署偏移（X/Y/Z）、朝向/俯仰 |
| `⚙NBT简单` | 参数化编辑 Energy、Health、无敌、诱饵弹 |
| `⚡NBT高级` | 原始 JSON 自定义 deployNBT |

**载具选择**：

两级联动下拉框：
- 类别下拉（主战坦克/步兵战车/...）→ 切换时自动更新载具列表
- 载具下拉（t_90a/bmp_2/...）→ 选中时自动填入 ID 输入框
- 也支持直接在 ID 输入框手动输入完整 ID

### 持久化存储

所有配置存储在方块的 `block.entity.persistentData` 中：

| 字段 | 类型 | 默认 | 说明 |
|------|------|------|------|
| `inited` | byte | 1 | 初始化标记（独立于配置数据） |
| `vehicleType` | string | '' | 载具实体 ID，如 `superbwarfare:t_90a` |
| `respawnDelay` | int | 600 | 重生延迟（tick，30秒） |
| `autoRespawn` | byte | 1 | 自动重生（1=开，0=关） |
| `spawnWithAmmo` | byte | 1 | 生成带弹药（1=是，0=否） |
| `offsetX/Y/Z` | double | 0/1/0 | 部署位置偏移 |
| `yaw/pitch` | float | 0 | 部署朝向 |
| `deployNBT` | string(JSON) | '{}' | 自定义部署 NBT |
| `deployedUUID` | string | '' | 已部署载具的 UUID |
| `cooldownEnd` | long | 0 | 冷却结束 gameTime |

**持久化原则**：
- 使用独立 `inited` 标记判断是否初始化（而非 `vehicleType`）
- Tick 内自行调用初始化函数，不依赖玩家右键
- 每次写入 NBT 后立即 `block.entity.setChanged()`
- `cooldownEnd` 重启后做范围校验（超过 1 小时视为异常，自动重置）

---

## 部署逻辑

部署代码位于 `server_scripts/sbw_vehicle/deploy.js`。

### NBT 构建顺序

部署时按以下顺序构建召唤 NBT，**后面的覆盖前面的**：

```
1. 数据库 vehicleData.nbtTemplate
   → Energy, Health, Inventory, WeaponState, 部件健康度...
2. 叠加 Rotation / Tags（位置相关，始终覆盖）
3. 叠加用户 deployNBT（手动输入的 JSON，覆盖前面）
4. spawnWithAmmo 检查（0 → 清空 Inventory，不携带弹药）
```

流程：
```javascript
function spawnVehicleForBlock(block, server, pd) {
  // 1. 从数据库取 nbtTemplate 作为基础
  var vehicleInfo = getVehicleById(vehicleType)
  var nbt = toNBT(vehicleInfo.nbtTemplate)  // 满血、满能量、有弹药

  // 2. 加位置标签
  nbt.put('Rotation', ...)
  nbt.put('Tags', ...)

  // 3. 叠加用户自定义 deployNBT
  mergeDeployNBT(nbt, JSON.parse(deployNBTStr))

  // 4. ★ spawnWithAmmo=0 → 清空弹药
  if (spawnWithAmmo === 0 && nbt.contains('Inventory')) {
    nbt.remove('Inventory')
  }

  // 5. summon
  server.runCommandSilent('summon ' + vehicleType + ' ... ' + nbt.toString())
}
```

**重要：** 如果 `deployNBT` 为 `{}`（默认），则完全使用数据库模板，车辆生成即为满状态。

### 双模式 NBT 配置

**简单模式（⚙NBT简单页签）**：
- 预填 Energy、Health、无敌、诱饵弹等核心属性
- 点击「应用数据库默认值」按钮直接写入完整模板
- 适合快速调整几个关键数值

**高级模式（⚡NBT高级页签）**：
- 自由编辑完整 JSON
- 留空 `{}` 则使用数据库完整默认值
- 填写部分字段（如 `{"Health": 9999}`）则与数据库模板合并
- 适合完全自定义

### UUID 捕获机制

部署后 1 tick 通过 `server.scheduleInTicks(1, callback)` 异步捕获：

1. `summon` 命令执行
2. 1 tick 后遍历世界实体，按部署标签匹配
3. 匹配到实体 → 获取 UUID → 写入 `persistentData.deployedUUID`
4. 后续 Tick 通过 UUID 检查实体存活状态

---

## 提取脚本

脚本位置：`.agents/scripts/extract_vehicle_data.js`

### 使用方法

```bash
cd kubejs/.agents/scripts/
node extract_vehicle_data.js
```

### 功能

- 从 SBW 和 MCSP 模组的 JAR 中自动提取所有载具配置
- 根据 `displayType` 自动分类
- 生成完整的 `nbtTemplate`（含 Energy、Health、武器状态、弹药库存、部件健康度）
- 从武器配置自动推导 `ammoSlots` 弹药补给映射
- 输出为分类目录结构 + `_registry.json`

### 部件 NBT 字段名映射

提取脚本处理了 OBB 部件名到 NBT 字段名的映射：

| OBB 部件名 | NBT 字段前缀 | 生成字段 |
|-----------|-------------|---------|
| `WheelLeft` | `LeftWheel` | `LeftWheelHealth`, `LeftWheelDamaged` |
| `WheelRight` | `RightWheel` | `RightWheelHealth`, `RightWheelDamaged` |
| `MainEngine` | `MainEngine` | `MainEngineHealth`, `MainEngineDamaged` |
| `Turret` | `Turret` | `TurretHealth`, `TurretDamaged` |

---

## 文件结构

| 文件 | 说明 |
|------|------|
| `.agents/scripts/extract_vehicle_data.js` | **数据提取脚本**（Node.js，从 JAR 生成数据包） |
| `data/kubejs/db/sbw_vehicle_db/_registry.json` | **注册声明文件**（声明允许的分类和文件列表） |
| `data/kubejs/db/sbw_vehicle_db/_ammo_types.json` | **弹药类型注册表**（v2 ammoCategories 嵌套分类格式，含 default/tabName/color，共 29 种弹药 6 个分类） |
| `data/kubejs/db/sbw_vehicle_db/guide.md` | **数据库填写指南** |
| `data/kubejs/db/sbw_vehicle_db/各分类目录/*.json` | **单个载具数据**（自包含，含 nbtTemplate + ammoSlots） |
| `server_scripts/sbw_vehicle/main.js` | 模块入口 + 死亡事件监听 |
| `server_scripts/sbw_vehicle/block_main.js` | **方块行为逻辑**（放置、右键、Tick） |
| `server_scripts/sbw_vehicle/deploy.js` | **部署工具**（查数据库 → 构建 NBT → summon） |
| `server_scripts/sbw_vehicle/command.js` | 指令注册（start/stop/status/clear） |
| `server_scripts/sbw_vehicle/tools/database.js` | **数据库加载器**（自动发现数据包） |
| `server_scripts/sbw_vehicle/tools/a_java_refs.js` | Java 类引用 |
| `server_scripts/sbw_vehicle/tools/nbt.js` | JSON → NBT 转换工具 |
| `server_scripts/sbw_vehicle/tools/log.js` | 日志工具 |
| `server_scripts/sbw_vehicle/ammo_replenish/` | **弹药补给站**子系统 |
| `data/kubejs/blocks/ammo_crate.json` | **弹药补给站默认配置**（scanRange/cooldown/enterDelay） |
| `data/kubejs/blocks/vehicle_deployer.json` | **载具部署台默认配置**（deployer_default + default_simple_nbt） |
| `startup_scripts/src/blocks/vehicle_deployer/gui.js` | **LDLib2 GUI**（5个页签） |
| `startup_scripts/src/item/vehicle_deployer_block.js` | 方块注册 |

---

## 常见问题

### Q: 部署后载具是损坏的

A: 检查 `nbtTemplate` 中的部件字段名是否正确。轮子字段应为 `LeftWheelHealth`/`RightWheelHealth`（而非 `WheelLeftHealth`）。重新运行提取脚本可修复。

### Q: 部署后载具没有能量/弹药

A: 检查部署台的 deployNBT 是否为 `{}`。如果是，则部署时会从数据库读取完整模板（含能量和弹药）。如果 deployNBT 有自定义内容，请确认包含 `Energy` 和 `Inventory.Items` 字段。

### Q: GUI 下拉框没有载具列表

A: 数据库未加载或缓存失效。检查日志是否有 `[数据库] 加载完成` 字样。若无，确认 `data/sbw_vehicle_db/_registry.json` 存在且格式正确。

### Q: 保存后重新打开 GUI，配置不见了

A: 检查日志是否有 `'global' cannot be assigned` 错误。KubeJS 7 中 server_scripts 不能赋值 `global`，数据库使用内部 `$vehicleDB` 变量存储。

### Q: 如何添加新载具？

A: 重新运行提取脚本：`cd kubejs/.agents/scripts/ && node extract_vehicle_data.js`，然后 `/kubejs reload`。

### Q: 如何手动编辑载具数据？

A: 直接编辑 `data/sbw_vehicle_db/` 下对应分类目录中的 JSON 文件，修改后 `/kubejs reload` 即可。修改 `nbtTemplate` 会影响部署时的默认值。

### Q: 载具部署后没有自动重生

A: 检查：
1. 部署台的「自动重生」是否设为 1
2. 载具被摧毁后是否触发了"载具已消失"日志
3. `respawnDelay` 是否合理（默认 600 tick = 30 秒）

### Q: 点击立即部署生成了多辆载具叠在一起

A: 系统已内置防重复部署校验：
- **立即部署**按钮按下时，先检查 `deployedUUID` 对应的实体是否存活
- 若已有存活载具 → 拒绝部署，日志记录 `[部署台] 立即部署被拒绝：已有存活载具`
- 自动重生路径同样先检查 UUID 再部署（不会叠在一起）

### Q: 如何让载具生成时不携带弹药？

A: 打开部署台 GUI → 基础页 → 将「生成带弹药」设为 `0` → 保存。之后该部署台生成的载具 Inventory 为空，需通过弹药补给站补充。

### Q: 系统提示 `redeclaration of const`

A: 某些 Java 类引用（`$CompoundTag`、`$ByteTag`、`$IntTag`）已在其他脚本（如 `a_tacz_config.js`）用 `const` 声明。`a_java_refs.js` 中不应重复声明它们。
