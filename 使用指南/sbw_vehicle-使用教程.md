# SBW 卓越前线 — 载具自动部署系统

## 概述

本系统实现 SBW（Superb Warfare）模组载具的**自动部署**与**自动重生**。游戏开始时自动在指定坐标生成配置好的载具，载具被摧毁后按配置延迟自动重生。

---

## 目录

- [功能特性](#功能特性)
- [配置指南](#配置指南)
  - [基本配置项](#基本配置项)
  - [deployNBT 模板详解](#deploynbt-模板详解)
  - [每辆载具独立配置](#每辆载具独立配置)
  - [maxCount 最大数量控制](#maxcount-最大数量控制)
- [指令使用](#指令使用)
- [配置文件参考](#配置文件参考)
- [常见问题](#常见问题)

---

## 功能特性

| 功能 | 说明 |
|------|------|
| 自动部署 | 游戏开始（`game_state == 1`）时自动部署所有载具 |
| 独立标签 | 每辆载具携带唯一标签，存活期间不重复生成 |
| 自动重生 | 载具被摧毁后，按**每辆载具独立配置**的延迟自动重新生成 |
| 双向检测 | `EntityEvents.death` + 定期扫描（每 40tick），防止漏检 |
| UUID 索引 | 生成时保存实体 UUID，O(1) 查找替代全量遍历 |
| 模板化部署 | 部署时自动应用初始 NBT（能量、弹药、预装填、部件状态等） |
| 无残留清除 | clear/reset 使用 `discard()` 直接移除，不留掉落物 |
| maxCount 控制 | 每辆载具可设置最大存活数，超限自动清理，防止重复部署 |

---

## 配置指南

配置文件：`server_scripts/sbw_vehicle/config.js`

### 基本配置项

```js
const SBW_VEHICLE_CONFIG = {
  scoreHolder: 'state',       // 游戏状态计分板虚拟玩家名
  scoreObjective: 'game_state', // 计分板目标名
  activeValue: 1,               // 表示"游戏进行中"的分数值
  persistKey: 'sbw_vehicle',    // 持久化数据存储键名
  tagPrefix: 'sbw_vehicle_',    // 实体标签前缀（用于追踪）
}
```

### deployNBT 模板详解

每辆载具配置中的 `deployNBT` 定义了部署时应用的初始 NBT。以下为完整字段说明：

#### 核心属性

| 字段 | 类型 | 默认 | 说明 |
|------|------|------|------|
| `Energy` | int | 0 | 载具能量/电力。影响武器可用性，0=没电 |
| `Health` | float | 500.0 | 载具总生命值，归零则摧毁 |
| `Invulnerable` | 0/1 | 0 | 无敌模式，1=无法被伤害 |
| `IsWreck` | 0/1 | 0 | 是否残骸状态，1=已报废形态 |
| `Power` | float | 0.0 | 动力输出，影响移动速度 |

#### 部件健康度

每个部件有 `Health`（健康度）和 `Damaged`（是否损坏）两个字段。当 `Health` 归零时 `Damaged` 自动变为 1。

| 字段 | 类型 | 默认 | 说明 |
|------|------|------|------|
| `LeftWheelHealth` | float | 100.0 | 左轮健康度 |
| `LeftWheelDamaged` | 0/1 | 0 | 左轮是否损坏 |
| `RightWheelHealth` | float | 100.0 | 右轮健康度 |
| `RightWheelDamaged` | 0/1 | 0 | 右轮是否损坏 |
| `MainEngineHealth` | float | 150.0 | 主引擎健康度 |
| `MainEngineDamaged` | 0/1 | 0 | 主引擎是否损坏 |
| `SubEngineHealth` | float | 150.0 | 副引擎健康度 |
| `SubEngineDamaged` | 0/1 | 0 | 副引擎是否损坏 |
| `TurretHealth` | float | 100.0 | 炮塔健康度 |
| `TurretDamaged` | 0/1 | 0 | 炮塔是否损坏 |
| `TurretBurned` | 0/1 | 0 | 炮塔是否烧毁 |
| `TurretBurnTimer` | int | 0 | 炮塔燃烧计时（tick） |

#### 武器系统

| 字段 | 类型 | 默认 | 说明 |
|------|------|------|------|
| `DecoyReady` | 0/1 | 1 | 诱饵弹是否装填就绪 |
| `ChargeProgress` | float | 0.0 | 特殊武器充能进度（0.0~1.0） |

`WeaponState` 是嵌套的复合标签，结构如下：

```js
WeaponState: {
  Cannon: {                   // 主炮
    components: {
      "minecraft:custom_data": {
        GunData: { Ammo: 1 }  // Ammo = 预装填的炮弹数
      }
    }
  },
  MachineGun: {               // 同轴机枪
    components: {
      "minecraft:custom_data": {
        GunData: { Ammo: 200 }
      }
    }
  },
  PassengerMachineGun: {      // 乘客机枪
    components: {
      "minecraft:custom_data": {
        GunData: { Ammo: 200 }
      }
    }
  }
}
```

#### 弹药库存

```js
Inventory: {
  Items: [
    { Slot: 0,  count: 63, id: 'superbwarfare:large_shell_ap' },
    { Slot: 1,  count: 64, id: 'superbwarfare:large_shell_he' },
    // 更多弹药...
  ]
}
```

`Slot` 编号范围：`0~53`（共 54 格）

#### 弹药类型参考

| 物品 ID | 说明 |
|---------|------|
| `superbwarfare:large_shell_ap` | 大口径 AP 弹（穿甲弹） |
| `superbwarfare:large_shell_he` | 大口径 HE 弹（高爆弹） |
| `superbwarfare:small_shell_ap` | 小口径 AP 弹 |
| `superbwarfare:small_shell_he` | 小口径 HE 弹 |
| `superbwarfare:rifle_ammo` | 步枪弹（机枪用） |
| `superbwarfare:heavy_ammo` | 重弹 |
| `superbwarfare:missile` | 导弹 |
| `superbwarfare:rocket` | 火箭弹 |

#### 特殊 NBT 类型提示

大多数字段直接用 JS 数字/布尔即可。如需指定特定 NBT 类型：

```js
// 例如需要明确存为 ByteTag
SomeField: { __nbt_type: "byte", value: 1 }

// 支持的类型: byte, short, long, float, double
```

### 每辆载具独立配置

每辆载具在 `teams` 下独立配置，`deployNBT` 写在该载具内部：

```js
teams: {
  attack: {
    vehicles: [
      {
        id: 'attack_tank_1',           // 唯一标识符
        vehicleType: 'superbwarfare:t_90a',  // 载具实体类型
        pos: [0.5, 64, 0.5, 90, 0],    // [x, y, z, yaw, pitch]
        respawnDelay: 1200,             // 重生延迟（tick，1200=60秒）
        maxCount: 1,                    // （可选）最大同时存活数
        deployNBT: {                    // ↓↓↓ 部署模板 ↓↓↓
          Energy: 10000000,
          Health: 500.0,
          // ... 更多字段见上方参考
        }
      },
      // 更多载具...
    ]
  }
}
```

**关键规则：**
- `deployNBT` 不写或设为 `null` → **白板生成**（无能量、无弹药）
- 每辆载具的 `deployNBT` **完全独立**，修改一辆不影响其他
- 每辆载具可配置不同的 `respawnDelay`

### maxCount 最大数量控制

| 功能 | 说明 |
|------|------|
| 部署检查 | 部署前扫描世界存活数，已达上限则跳过生成 |
| 定期清理 | 每 40tick（2秒）扫描发现超限，自动 `discard()` 多余的 |
| 保留策略 | 优先保留 store 中注册的载具，丢弃无状态记录的 |
| 跨队隔离 | 不同队伍的同名 ID 通过队伍前缀隔离（如 `attack_tank_1` / `defense_tank_1`） |

> 不设置或设为 `0` 表示不限制数量。

---

## 指令使用

详见 **[指令使用.md](./指令使用.md)**，快速参考：

| 指令 | 说明 | 权限 |
|------|------|------|
| `/sbw_vehicle deploy [<队伍>]` | 部署指定/所有队伍的载具 | OP 2 |
| `/sbw_vehicle redeploy` | 强制重新部署（清旧+重部署） | OP 2 |
| `/sbw_vehicle reset` | 重置所有载具状态 | OP 2 |
| `/sbw_vehicle clear [<队伍>]` | 调试：清除载具实体+重置状态 | OP 2 |
| `/sbw_vehicle status` | 查看各载具状态 | OP 2 |

---

## 配置文件参考

| 文件 | 说明 |
|------|------|
| `server_scripts/sbw_vehicle/config.js` | 载具配置（队伍、坐标、deployNBT 模板） |
| `server_scripts/sbw_vehicle/main.js` | 核心逻辑（部署、重生、扫描、事件） |
| `server_scripts/sbw_vehicle/command.js` | 指令注册 |
| `assets/kubejs/lang/zh_cn.json` | 中文语言文件 |
| `assets/kubejs/lang/en_us.json` | 英文语言文件 |

---

## 常见问题

### Q: 载具生成后没有能量/弹药

A: 检查该载具配置中是否写了 `deployNBT`。不写 = 白板生成。参考上方 `attack_tank_1` 的模板。

### Q: 载具被摧毁后没有重生

A: 检查：1) `respawnDelay` 是否大于 0；2) 游戏是否在 `game_state == 1` 状态；3) 控制台是否有报错。

### Q: 如何调整重生速度？

A: 修改该载具的 `respawnDelay` 值（单位：tick，20tick=1秒）。例如 `respawnDelay: 600` = 30 秒重生。

### Q: 如何让不同载具有不同的弹药配置？

A: 每辆载具的 `deployNBT.Inventory.Items` 独立配置，互不影响。

### Q: clear/reset 后地上有掉落物

A: 已修复。现在 clear/reset 使用 `discard()` 替代 `kill()`，载具直接消失不留掉落物。

### Q: 不小心重复部署，出现了多辆同ID的载具

A: 已修复。配置 `maxCount: 1` 后，部署前检测存活数达到上限就跳过；定期扫描也会自动清理超限的多余载具。

### Q: 两队用同一个载具 ID 会冲突吗？

A: 不会。不同队伍的载具通过 `{队伍名}_{ID}` 格式隔离。例如进攻方 `attack_tank_1` 和防守方 `defense_tank_1` 是独立的。

### Q: 修改配置文件后需要做什么？

A: 执行 `/kubejs reload` 重新加载脚本。如果是新加的载具，还需重新部署：`/sbw_vehicle redeploy`。

---

> 详细 NBT 字段参考请直接查看 `server_scripts/sbw_vehicle/config.js` 中的注释手册（第 47~102 行）。
