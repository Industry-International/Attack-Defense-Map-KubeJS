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
│   └── tacz/                             ← TACZ 系枪械（平放）
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

> 武器 ID 必须对应 `tacz/*.json` 中的 `weaponId` 字段。

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

`tag` 字段支持 NBT 格式。

### `non_tacz.json` — 非TACZ显示+弹药

```json
{
  "nonTaczDisplay": {
    "snowball": { "item": "minecraft:snowball", "i18n": true }
  },
  "nonTaczAmmo": {
    "snowball": { "item": "minecraft:snowball", "count": 16 }
  }
}
```

| i18n | 名称来源 |
|------|---------|
| `true` | `offhand.kubejs.<武器ID>` 翻译键，需语言文件 |
| 无/`false` | 物品自身内置名 |

---

## 三、武器数据 — `tacz/*.json`

每把 TACZ 枪械一个独立 JSON 文件，放在职业目录下的 `tacz/` 子目录中。

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
    "muzzle": ["tacz:muzzle_silencer_knight_qd"],
    "stock": ["tacz:oem_stock_heavy", "tacz:oem_stock_light"],
    "extended_mag": ["tacz:extended_mag_1", "tacz:extended_mag_2", "tacz:extended_mag_3"]
  }
}
```

| 字段 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `weaponId` | ✓ | string | 武器内部标识，必须匹配 `weapons.json` 中的 ID |
| `gunId` | ✓ | string | TACZ GunId（如 `tacz:ak47`） |
| `mod` | 推荐 | string | 模组来源 |
| `displayName` | 推荐 | string | 显示名（仅文档） |
| `gunFireMode` | ✓ | string | `AUTO` / `SEMI` / `BURST` |
| `gunCurrentAmmoCount` | ✓ | int | 弹匣容量 |
| `ammo` | ✓ | object | 弹药配置（有 `level` → 发弹药盒；无 `level` → 直接发弹药物品） |
| `attachments` | ✗ | object | 配件配置，slotKey 对照 `_slot_definitions.json` |

---

## 四、新增操作指南

| 操作 | 步骤 |
|------|------|
| **新增 TACZ 枪械** | ① `tacz/` 下创建 JSON ② `weapons.json` 加 ID ③ `_registry.json` 的 `files` 加路径 |
| **新增职业** | ① `_registry.json` 加条目 ② 创建职业目录 ③ 创建配置文件和 `tacz/` 子目录 |

---

## 五、注意事项

1. **`_registry.json` 是加载器的唯一入口**，职业不在其中声明则不会被加载
2. **`files` 路径相对于职业目录**，如 `tacz/tacz--ak47.json` → `<职业>/tacz/tacz--ak47.json`
3. **配置文件直接放职业根目录**（`meta.json`, `weapons.json`, `armor.json`, `extras.json`, `non_tacz.json`）
4. **武器文件放 `tacz/` 子目录**，命名格式保留 `<模组>--<标识符>.json` 以区分来源
5. **修改后 `/kubejs reload`** 重新加载
6. **enabled 开关在 `_registry.json` 中**，不在 `meta.json` 里
