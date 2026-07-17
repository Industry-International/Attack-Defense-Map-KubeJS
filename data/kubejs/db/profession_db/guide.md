# 职业数据库 — 填写指南（v2 标准化结构）

## 目录结构

```
kubejs/data/profession_db/
├── _registry.json                        ← 注册文件（单一入口，职业+文件列表）
├── _slot_definitions.json                ← 配件槽位布局定义
├── guide.md                              ← 本文件
│
├── assault/
│   ├── meta.json                         ← 职业元数据
│   ├── weapons.json                      ← 武器分类列表（primary/secondary/tertiary）
│   ├── armor.json                        ← 护甲配置
│   ├── extras.json                       ← 额外物品
│   ├── non_tacz.json                     ← 非TACZ武器显示+弹药
│   └── tacz/                             ← TACZ 系枪械（平放，无子分类目录）
│       ├── tacz--ak47.json
│       └── ...
├── medic/
│   ├── meta.json
│   ├── weapons.json
│   ├── ...
│   └── tacz/
└── ...
```

**规则**：职业根目录下直接放配置文件，`tacz/` 子目录放武器。不再使用 `gui/` 和 `data/` 分层。

---

## 一、`_registry.json` — 注册文件（单一入口）

声明所有职业及其数据文件列表。加载器只依赖此文件发现数据。

```json
{
  "version": 2,
  "professions": {
    "assault": {
      "enabled": true,
      "displayName": "突击兵",
      "description": "CQB 高机动 全自动压制",
      "tag": "assault",
      "files": [
        "meta.json",
        "weapons.json",
        "armor.json",
        "extras.json",
        "non_tacz.json",
        "tacz/tacz--ak47.json",
        "tacz/tacz--scar_l.json"
      ]
    }
  }
}
```

| 字段 | 必填 | 说明 |
|------|------|------|
| `enabled` | ✗ | 默认 `true`，设为 `false` 跳过该职业 |
| `displayName` | 推荐 | 中文显示名（仅文档用途） |
| `description` | 推荐 | 职业描述 |
| `tag` | ✓ | 游戏内 scoreboard 标签名，从 `gui/meta.json` 迁移至此 |
| `files` | ✓ | 路径相对于职业目录，如 `tacz/tacz--ak47.json` → `<职业>/tacz/tacz--ak47.json` |

> **所有文件路径都从职业目录开始**。路径必须匹配磁盘上的实际位置。

---

## 二、职业配置文件

### `meta.json` — 职业元数据

```json
{
  "professionId": "assault",
  "displayName": "突击兵",
  "tag": "assault"
}
```

| 字段 | 必填 | 说明 |
|------|------|------|
| `professionId` | ✓ | 必须与 `_registry.json` key 一致 |
| `tag` | ✓ | 游戏内 scoreboard 标签名 |

> 注意：`meta.json` 不再包含 `enabled` 和 `files` 字段，它们已迁移到 `_registry.json`。

### `weapons.json` — 武器分类列表

支持**两种格式**。推荐使用嵌套对象（按类型分组）：

**新格式（推荐，按类型分组）：**

```json
{
  "weaponLists": {
    "primary": {
      "rifle":   ["ak47", "scar_l"],
      "smg":     ["hk_mp5a5"],
      "shotgun": ["darne1912"]
    },
    "secondary": {
      "pistol": ["glock_17", "ruby"]
    },
    "tertiary": {
      "other": ["snowball"]
    }
  }
}
```

**旧格式（兼容，扁平数组）：**

```json
{
  "weaponLists": {
    "primary":   ["ak47", "scar_l"],
    "secondary": ["mars", "ruby"],
    "tertiary":  ["snowball"]
  }
}
```

| 字段 | 说明 |
|------|------|
| `primary` | 主武器分类/ID列表 |
| `secondary` | 副武器分类/ID列表 |
| `tertiary` | 特殊武器分类/ID列表 |

**新格式**的类型 key（`rifle`/`smg`/`shotgun`）在 GUI 中自动作为分类名显示，新增类型只需在此添加 key 即可。每种类型的展示图标自动取该类型第一把武器的 GunId。

**旧格式**的扁平数组不会显示类型选择页，直接显示全部武器列表。

> 武器 ID 必须对应 `tacz/*.json` 中的 `weaponId` 字段（TACZ 武器），或 `non_tacz.json` 中的 key（非 TACZ 武器）。

### `armor.json` — 护甲配置

```json
{
  "armor": [
    "minecraft:iron_boots",
    "minecraft:iron_leggings",
    "minecraft:iron_chestplate",
    "minecraft:iron_helmet"
  ]
}
```

顺序：靴→腿→胸→头（不可逆）。

### `extras.json` — 额外物品

```json
{
  "extras": [
    { "item": "minecraft:cooked_beef", "count": 32 },
    { "item": "kubejs:spawn_selector", "count": 1 },
    { "item": "minecraft:splash_potion", "count": 6, "tag": { "minecraft:potion_contents": { "potion": "minecraft:healing" } } }
  ]
}
```

- `item`：物品ID（必填）
- `count`：数量（必填）
- `tag`：数据组件（可选），格式为 1.21.1 的组件对象，如 `{"minecraft:unbreakable":{}}`，**不要使用旧版 NBT 格式 `{Unbreakable:1b}`**

发放时会自动按物品最大堆叠拆分多组。

### `non_tacz.json` — 非TACZ显示+弹药

```json
{
  "nonTaczDisplay": {
    "snowball": { "item": "minecraft:snowball", "i18n": true },
    "igla_9k38": { "item": "superbwarfare:igla_9k38", "i18n": false },
    "rpg": { "item": "superbwarfare:rpg", "i18n": false }
  },
  "nonTaczAmmo": {
    "snowball": { "item": "minecraft:snowball", "count": 16 },
    "igla_9k38": { "item": "superbwarfare:medium_anti_air_missile", "count": 2 },
    "rpg": [
      { "item": "superbwarfare:rpg_rocket_standard", "count": 4 },
      { "item": "superbwarfare:rpg_rocket_tbg", "count": 2 }
    ]
  }
}
```

`nonTaczDisplay` 字段：

| i18n | 名称来源 |
|------|---------|
| `true` | `offhand.kubejs.<武器ID>` 翻译键，需语言文件 |
| 无/`false` | 物品自身内置名 |

`nonTaczAmmo` 支持两种格式：

| 格式 | 示例 | 说明 |
|------|------|------|
| 单对象 | `{"item":"...","count":N}` | 单一弹药类型，向后兼容 |
| 数组 | `[{"item":"...","count":N}, ...]` | **多种弹药**（如 RPG 标准弹+温压弹），发放时全部给予 |

> `item` 字段填写纯物品ID即可，**不要使用方括号 SNBT 格式**（如 `superbwarfare:igla_9k38[custom_data=...]`），KubeJS 7 不兼容。

---

## 三、武器数据 — `tacz/*.json`（详细）

每把 TACZ 枪械一个独立 JSON 文件，放在职业目录下的 `tacz/` 子目录中。

### 3.1 文件名规则

格式：**`<模组前缀>--<标识符>.json`**

| 模组 | 前缀 | 示例 |
|------|------|------|
| 原版 TaCZ | `tacz` | `tacz--ak47.json` |
| Lavender | `lavender` | `lavender--darne1912.json` |
| BF1 | `bf1` | `bf1--man_m95.json` |
| 同一武器不同版本 | 加后缀 | `tacz--glock_17_sailor.json`（水手特供版） |

> 文件名中的 `weaponId` 部分（`--` 后面）必须与 `weapons.json` 列表中的 ID 完全一致。

### 3.2 完整字段一览

| 字段 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `weaponId` | **✓** | string | 武器内部标识，必须匹配 `weapons.json` 中列表里的 ID（参见 3.3） |
| `gunId` | **✓** | string | TACZ 的 GunId，格式 `<模组ID>:<枪名>`，如 `tacz:ak47`、`lavender:darne1912`（参见 3.4） |
| `mod` | 推荐 | string | 模组来源，如 `tacz`、`lavender`、`bf1`。仅文档用途 |
| `displayName` | 推荐 | string | 人类可读的显示名，如 `"AK47"`、`"Glock 17"`。仅文档用途 |
| `gunFireMode` | **✓** | string | 射击模式，取值 `AUTO` / `SEMI` / `BURST`（参见 3.5） |
| `gunCurrentAmmoCount` | **✓** | int | 每个弹匣的容量，即一发弹匣装多少发子弹（参见 3.6） |
| `ammo` | **✓** | object | 弹药配置：弹药 ID、数量、是否使用弹药盒（参见 3.7） |
| `attachments` | ✗ | object | 配件配置：key 是槽位名，value 是配件 ID 数组（参见 3.8） |

### 3.3 字段详解：`weaponId`

这是**武器在本系统中的唯一标识符**，用于串联 `weapons.json` → `tacz/*.json` → 弹药发放/配件改装等所有逻辑。

**必须满足**：
- `weapons.json` 中武器列表里写的 ID 与此完全一致
- 同一职业下不能重复
- 不同职业下不要求唯一（但通常保持一致）

**特别注意**：`weaponId` **不是** TACZ 的 GunId。你可以随意取名，只要前后一致即可。

**示例比对**：
```
weapons.json 写: "ak47"  → 对应 tacz--ak47.json 中的 "weaponId": "ak47"
weapons.json 写: "lavenderdarne1912"  → 对应 lavender--darne1912.json 中的 "weaponId": "lavenderdarne1912"
```

### 3.4 字段详解：`gunId`

这是 **TACZ 模组内部识别枪械的 ID**，格式为 `<模组ID>:<枪名>`。

| 例子 | 说明 |
|------|------|
| `tacz:ak47` | 原版 TaCZ 的 AK47 |
| `tacz:glock_17` | 原版 TaCZ 的 Glock 17 |
| `lavender:darne1912` | Lavender 模组的 Darne M1912 霰弹枪 |
| `bf1:man_m95` | BF1 模组的 Man M95 栓动步枪 |

> 如果你不确定某把枪的 GunId，可以在游戏中拿该枪，执行 `/kubejs hand` 查看物品 ID 和 NBT 中的 `GunId` 字段。

### 3.5 字段详解：`gunFireMode`

枪械发给玩家时的**默认开火模式**。不决定枪械的实际能力，只决定发给玩家时的初始状态。

| 值 | 含义 | 常见于 |
|----|------|--------|
| `"AUTO"` | 全自动（按住连射） | 突击步枪、冲锋枪、机枪 |
| `"SEMI"` | 半自动（单发） | 手枪、狙击步枪、射手步枪 |
| `"BURST"` | 三连发 | 较少见 |

> **注意**：许多全自动枪械（如 AK47）游戏内支持切换模式（AUTO/SEMI），此处仅设置默认值，玩家仍可在游戏中手动切换。

### 3.6 字段详解：`gunCurrentAmmoCount`

**弹匣容量**——即玩家每次换弹后弹匣里有多少发子弹。

| 枪械 | 值 | 说明 |
|------|----|------|
| AK47 / SCAR-L | `30` | 标准步枪弹匣 |
| Glock 17 | `17` | 标准手枪弹匣 |
| P320 | `12` | 紧凑型手枪 |
| M1911 | `7` | 老式手枪 |
| Darne M1912 | `2` | 双管霰弹枪 |
| Man M95 | `5` | 栓动步枪弹仓 |

### 3.7 字段详解：`ammo`（弹药配置）— **重点**

弹药配置决定发给玩家多少子弹、什么子弹、以什么形式发放。

```json
"ammo": {
  "ammoId": "tacz:762x39",    // 弹药 ID（必填）
  "main": 210,                  // 主武器槽位时的弹药总数
  "offhand": 50,               // 副手武器槽位时的弹药总数（可选）
  "level": 2                    // 弹药等级（可选）
}
```

#### 3.7.1 `ammoId` — 弹药 ID

TaCZ 枪械使用的弹药物品 ID，格式 `<模组ID>:<弹药名>`。

| 弹药 ID | 对应枪械 |
|---------|---------|
| `tacz:762x39` | AK47 等 7.62mm 步枪 |
| `tacz:556x45` | SCAR-L 等 5.56mm 步枪 |
| `tacz:9mm` | Glock 17、MP5 等 9mm 手枪/SMG |
| `tacz:45acp` | P320、M1911、汤姆逊等 .45 手枪 |
| `tacz:30_06` | Man M95 等 .30-06 步枪 |
| `lavender:12ga` | Darne M1912 等 12 号霰弹 |
| `lavender:griffin9x19` | Berreta M1918 等 9mm Griffon |

#### 3.7.2 `main` vs `offhand` — 弹药数量

这是**新手最容易困惑的地方**。TaCZ JS 的发放逻辑区分了**主武器弹药**和**副武器弹药**：

```
发放时判断：
  slot === 'main'   → 使用 ammo.main    （该枪在主武器位时发这么多）
  slot !== 'main'    → 使用 ammo.offhand  （该枪在副手位时发这么多）
```

**实际对应规则**：

| `weapons.json` 分类 | 发放时用的字段 | 必须填写 |
|---------------------|---------------|---------|
| `primary`（主武器） | `main` | **是** |
| `secondary`（副武器） | `offhand` | **是** |
| `tertiary`（特殊） | 看具体逻辑 | 通常填 `main` |

**典型配置模式**：

```jsonc
// 突击兵 AK47 — 作为主武器，只填 main
"ammo": { "ammoId": "tacz:762x39", "main": 210, "level": 2 }

// 医疗兵 Glock 17 — 作为副武器，只填 offhand
"ammo": { "ammoId": "tacz:9mm", "offhand": 50, "level": 1 }

// 水手 Glock 17 — 作为主武器，只填 main（文件名虽不同但功能相同）
"ammo": { "ammoId": "tacz:9mm", "main": 100, "level": 1 }

// 如果同一把枪既能做主武器也能做副武器，可以两个都填
"ammo": { "ammoId": "tacz:9mm", "main": 150, "offhand": 50, "level": 1 }
```

> **如果你不确定填哪个**：该枪在 `weapons.json` 中放在 `primary` 下就填 `main`，放在 `secondary` 下就填 `offhand`。

#### 3.7.3 `level` — 弹药等级（弹药盒 vs 散装弹药）

**有 `level`** → 发放时给玩家一个**弹药盒（`tacz:ammo_box`）**，内含 `level` 等级的子弹。弹药盒发给副手的背包系统里。

```jsonc
// 给一个弹药盒，内含 210 发 2 级 7.62x39 子弹
"ammo": { "ammoId": "tacz:762x39", "main": 210, "level": 2 }
```

**无 `level`** → 直接发放**散装弹药物品**（即 `ammoId` 本身），发给副手的背包系统里。

```jsonc
// 直接给 210 个 tacz:762x39 物品
"ammo": { "ammoId": "tacz:762x39", "main": 210 }
```

**如何选择？**
- 大多数 TaCZ 枪械使用**弹药等级系统**（`level: 1`/`2`/`3`），用弹药盒发放
- 一些特殊弹药或早期版本枪械可能直接用散装弹药物品
- **如果你不确定**：先填 `"level": 2`（中级弹药盒），这是最常见的选择

### 3.8 字段详解：`attachments`（配件配置）

配件按**槽位**组织，每个槽位对应一个配件类型。槽位 key 必须与 `_slot_definitions.json` 中定义的 key 一致。

#### 3.8.1 可用槽位一览（来自 `_slot_definitions.json`）

| 槽位 key | 中文名 | 说明 |
|----------|--------|------|
| `scope` | 瞄具 | 红点、全息、倍镜等 |
| `muzzle` | 枪口 | 消音器、制退器、补偿器、刺刀等 |
| `stock` | 枪托 | 轻重枪托、战术枪托等 |
| `grip` | 握把 | 前握把、垂直握把等 |
| `laser` | 激光 | 激光指示器、战术灯等 |
| `extended_mag` | 弹匣 | 扩容弹匣（1/2/3 级） |
| `bayonet` | 刺刀 | 近战刺刀配件 |
| `ammo_mod` | 弹药 | 弹药改装件 |

#### 3.8.2 格式

每个 slot 对应一个**配件 ID 数组**，列出该槽位可用的所有配件。数组为空 `[]` 或字段不存在都表示没有该槽位的配件可选。

```jsonc
"attachments": {
    "scope": [
        "tacz:sight_t1",             // T1 红点
        "tacz:scope_acog_ta31",      // ACOG 4 倍镜
        "lavender:scope_rifles_x4"   // Lavender 4 倍步枪镜
    ],
    "muzzle": [
        "tacz:muzzle_silencer_knight_qd",  // Knight 消音器
        "tacz:muzzle_brake_cthulhu"        // Cthulhu 制退器
    ],
    "extended_mag": [
        "tacz:extended_mag_1",       // 扩容弹匣 I 级
        "tacz:extended_mag_2",       // 扩容弹匣 II 级
        "tacz:extended_mag_3"        // 扩容弹匣 III 级
    ]
}
```

#### 3.8.3 常见配件 ID 速查

| 类别 | 常用配件 ID | 说明 |
|------|------------|------|
| 瞄具 | `tacz:sight_t1` | T1 红点 |
| 瞄具 | `tacz:sight_552` | 552 全息 |
| 瞄具 | `tacz:scope_acog_ta31` | ACOG 4 倍 |
| 瞄具 | `tacz:scope_lpvo_1_6` | LPVO 1-6 倍 |
| 瞄具 | `tacz:scope_elcan_4x` | Elcan 4 倍 |
| 瞄具 | `tacz:sight_rmr_dot` | RMR 红点（手枪） |
| 瞄具 | `tacz:sight_acro_pistol` | ACRO 手枪红点 |
| 瞄具 | `tacz:scope_standard_8x` | 8 倍标准镜（狙击） |
| 瞄具 | `lavender:scope_rifles_x4` | Lavender 4 倍镜 |
| 瞄具 | `lavender:scope_rifles_x8_2` | Lavender 8 倍镜 |
| 瞄具 | `bf1:sniper_scope` | BF1 狙击镜 |
| 瞄具 | `bf1:marksman_scope` | BF1 神射手镜 |
| 枪口 | `tacz:muzzle_silencer_knight_qd` | Knight 消音器 |
| 枪口 | `tacz:muzzle_silencer_mirage` | Mirage 消音器 |
| 枪口 | `tacz:muzzle_brake_cthulhu` | Cthulhu 制退器 |
| 枪口 | `tacz:muzzle_brake_pioneer` | Pioneer 制退器 |
| 枪口 | `tacz:muzzle_compensator_trident` | Trident 补偿器 |
| 枪托 | `tacz:oem_stock_heavy` | 重型枪托 |
| 枪托 | `tacz:oem_stock_light` | 轻型枪托 |
| 枪托 | `tacz:stock_carbon_bone_c5` | 碳纤维枪托 |
| 枪托 | `tacz:stock_tactical_ar` | 战术 AR 枪托 |
| 弹匣 | `tacz:extended_mag_1` | 扩容弹匣 I（+少量） |
| 弹匣 | `tacz:extended_mag_2` | 扩容弹匣 II（+中量） |
| 弹匣 | `tacz:extended_mag_3` | 扩容弹匣 III（+大量） |
| 激光 | `tacz:laser_compact` | 紧凑型激光 |
| 激光 | `tacz:laser_lopro` | LoPro 激光 |
| 激光 | `tacz:laser_nightstick` | 夜巡激光 |
| 握把 | `tacz:grip_vertical` | 垂直握把 |
| 握把 | `tacz:grip_angle` | 直角握把 |
| 刺刀 | `tacz:bayonet_m9` | M9 刺刀 |
| 刺刀 | `tacz:bayonet_6h3` | 6H3 刺刀 |

#### 3.8.4 无配件的情况

如果枪械没有配件槽或不想配置任何配件，写空对象即可：

```jsonc
// Darne M1912 — 双管霰弹枪，无配件
"attachments": {}
```

也可以直接省略 `attachments` 字段（加载器会处理为无配件）。

### 3.9 完整示例合集

#### 示例 1：标准主武器（AK47）

```json
{
  "weaponId": "ak47",
  "gunId": "tacz:ak47",
  "mod": "tacz",
  "displayName": "AK47",
  "gunFireMode": "AUTO",
  "gunCurrentAmmoCount": 30,
  "ammo": {
    "ammoId": "tacz:762x39",
    "main": 210,
    "level": 2
  },
  "attachments": {
    "scope": ["lavender:scope_rifles_x4"],
    "muzzle": ["tacz:muzzle_silencer_knight_qd", "tacz:muzzle_silencer_mirage", "tacz:muzzle_brake_cthulhu"],
    "stock": ["tacz:oem_stock_heavy", "tacz:oem_stock_light"],
    "extended_mag": ["tacz:extended_mag_1", "tacz:extended_mag_2", "tacz:extended_mag_3"]
  }
}
```

#### 示例 2：标准副武器（Glock 17——医疗兵版）

```json
{
  "weaponId": "glock_17",
  "gunId": "tacz:glock_17",
  "mod": "tacz",
  "displayName": "Glock 17",
  "gunFireMode": "SEMI",
  "gunCurrentAmmoCount": 17,
  "ammo": {
    "ammoId": "tacz:9mm",
    "offhand": 50,
    "level": 1
  },
  "attachments": {
    "scope": ["tacz:sight_rmr_dot", "tacz:sight_acro_pistol", "tacz:sight_fastfire_pistol"],
    "muzzle": ["tacz:muzzle_silencer_knight_qd", "tacz:muzzle_silencer_mirage"],
    "extended_mag": ["tacz:extended_mag_1", "tacz:extended_mag_2"],
    "laser": ["tacz:laser_compact", "tacz:laser_lopro", "tacz:laser_nightstick"]
  }
}
```

> **注意**：`ammo` 中用的是 `offhand` 而不是 `main`，因为 Glock 17 在此职业中作为副武器（`secondary` 分类）使用。

#### 示例 3：无配件枪械（Darne M1912 霰弹枪）

```json
{
  "weaponId": "lavenderdarne1912",
  "gunId": "lavender:darne1912",
  "mod": "lavender",
  "displayName": "Darne M1912",
  "gunFireMode": "AUTO",
  "gunCurrentAmmoCount": 2,
  "ammo": {
    "ammoId": "lavender:12ga",
    "main": 64,
    "level": 2
  },
  "attachments": {}
}
```

#### 示例 4：大量配件选项（Man M95 狙击枪——仅展示配件部分）

狙击枪通常只有瞄具和枪口槽，但可以给非常多的可选配件：

```json
{
  "weaponId": "man_m95",
  "gunId": "bf1:man_m95",
  "mod": "bf1",
  "displayName": "Man M95",
  "gunFireMode": "SEMI",
  "gunCurrentAmmoCount": 5,
  "ammo": {
    "ammoId": "tacz:30_06",
    "main": 100,
    "level": 2
  },
  "attachments": {
    "scope": [
      "tacz:sight_t1", "tacz:sight_t2", "tacz:sight_552",
      "tacz:scope_acog_ta31", "tacz:scope_lpvo_1_6",
      "tacz:scope_elcan_4x", "tacz:scope_standard_8x",
      "tacz:scope_vudu", "lavender:scope_rifles_x4",
      "lavender:scope_rifles_x8_2", "bf1:sniper_scope",
      "bf1:marksman_scope"
    ],
    "muzzle": [
      "tacz:muzzle_silencer_knight_qd", "tacz:muzzle_silencer_mirage",
      "tacz:muzzle_brake_cthulhu", "tacz:muzzle_brake_pioneer",
      "tacz:muzzle_compensator_trident", "tacz:bayonet_m9"
    ]
  }
}
```

#### 示例 5：紧凑型手枪（P320——飞行员版，少配件）

```json
{
  "weaponId": "p320",
  "gunId": "tacz:p320",
  "mod": "tacz",
  "displayName": "P320",
  "gunFireMode": "SEMI",
  "gunCurrentAmmoCount": 12,
  "ammo": {
    "ammoId": "tacz:45acp",
    "main": 70,
    "level": 2
  },
  "attachments": {
    "scope": ["tacz:sight_rmr_dot", "tacz:sight_acro_pistol", "tacz:sight_fastfire_pistol"],
    "muzzle": ["tacz:muzzle_silencer_knight_qd", "tacz:muzzle_silencer_mirage"],
    "extended_mag": ["tacz:extended_mag_1", "tacz:extended_mag_2"],
    "laser": ["tacz:laser_compact", "tacz:laser_lopro"]
  }
}
```

### 3.10 常见错误与排查

| 问题 | 原因 | 解决方法 |
|------|------|---------|
| 武器在 GUI 中不显示 | `weaponId` 在 `weapons.json` 和 `tacz/*.json` 中不一致 | 确保两处 ID 完全相同 |
| 武器不发放 | `_registry.json` 的 `files` 未添加该武器路径 | 在 `files` 数组中加入 `"tacz/tacz--xxx.json"` |
| 弹药没给 | `main` / `offhand` 填错 | 主武器填 `main`，副武器填 `offhand` |
| 弹药给了但数量不对 | 弹药盒等级与需求不匹配 | 检查 `level` 值 |
| 配件改装界面不显示 | `attachments` 中 slotKey 拼写错误 | 对照 `_slot_definitions.json` 检查 key 名 |
| 配件点击无效 | 配件 ID 不存在或拼写错误 | 检查 `tacz:attachment` 物品的 NBT 中 `AttachmentId` |
| 修改后无变化 | 未执行 `/kubejs reload` | 执行重载命令 |

### 3.11 快速填写步骤（新武器）

```
① 决定 weaponId（例如 "new_gun"）
② weapons.json 中对应分类数组里添加 "new_gun"
③ 在 tacz/ 下创建文件 tacz--new_gun.json（模型组前缀请按实际模组名来）
④ 填写所有必填字段（weaponId, gunId, gunFireMode, gunCurrentAmmoCount, ammo）
⑤ 选填 attachments（没有就写 {}）
⑥ 在 _registry.json 的对应职业 files 数组中添加 "tacz/tacz--new_gun.json"
⑦ 执行 /kubejs reload 验证
```

---

## 四、新增操作指南

| 操作 | 步骤 |
|------|------|
| **新增 TACZ 枪械** | ① `tacz/` 下创建 JSON ② `weapons.json` 加 ID ③ `_registry.json` 的 `files` 加路径 |
| **新增非 TACZ 武器** | ① `weapons.json` 加 ID ② `non_tacz.json` 加显示+弹药配置 |
| **新增职业** | ① `_registry.json` 加条目 ② 创建职业目录 ③ 创建配置文件和 `tacz/` 子目录 |

---

## 五、注意事项

1. **`_registry.json` 是加载器的唯一入口**，职业不在其中声明则不会被加载
2. **`files` 路径相对于职业目录**，如 `tacz/tacz--ak47.json` → `<职业>/tacz/tacz--ak47.json`
3. **配置文件直接放职业根目录**（`meta.json`, `weapons.json`, `armor.json`, `extras.json`, `non_tacz.json`）
4. **武器文件放 `tacz/` 子目录**，命名格式 `<模组>--<标识符>.json` 以区分来源
5. **修改后 `/kubejs reload`** 重新加载
6. **enabled 开关在 `_registry.json` 中**，不在 `meta.json` 里
7. **`nonTaczAmmo` 支持数组格式**（多种弹药），单对象格式向后兼容
8. **物品 ID 不要用方括号 SNBT 格式**，直接写纯ID
