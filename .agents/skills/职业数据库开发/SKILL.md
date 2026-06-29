---
name: 职业数据库开发
description: 职业系统（Profession）数据包开发指南。涵盖 JSON 数据包结构设计、注册表管理、武器数据文件编写、职业配置填写、以及从硬编码到数据化的迁移流程。适用于所有涉及 profession 模块新增/修改武器、职业、配件配置的开发任务。
---

# 职业数据库开发

## 1. 概述

职业系统原本通过 **6 个硬编码 JS 文件**（`b_tacz_prof_*.js`）管理所有职业的武器、配件、护甲和额外物品。这种方式在新增武器或调整配置时需要修改 JS 代码，不便于维护和扩展。

通过参考 `sbw_vehicle` 模块的数据包模式，职业系统已重构为 **JSON 数据包驱动**。所有配置移至 `data/profession_db/` 目录，JS 代码只负责加载和消费数据。

## 2. 数据包结构

```
kubejs/data/profession_db/
├── _registry.json                        ← 注册文件
├── _slot_definitions.json                ← 配件槽位布局定义
├── 填写指南.md                           ← 填写手册
│
├── assault/                              ← 职业目录（无 JSON 文件）
│   ├── config/                           ← 职业配置目录
│   │   ├── meta.json                     ← 职业元数据
│   │   ├── armor.json                    ← 护甲配置
│   │   ├── extras.json                   ← 额外物品
│   │   ├── weapons.json                  ← 武器分类列表
│   │   └── non_tacz.json                 ← 非TACZ武器显示+弹药
│   └── tacz/                            ← TACZ 系枪械
│       ├── tacz--ak47.json
│       ├── tacz--scar_l.json
│       ├── lavender--darne1912.json
│       ├── lavender--berretam1918.json
│       └── bf1--vg15.json
├── medic/
│   ├── config/
│   │   ├── meta.json
│   │   ├── armor.json
│   │   ├── extras.json
│   │   ├── weapons.json
│   │   └── non_tacz.json
│   └── tacz/
│       ├── tacz--hk_mp5a5.json
│       ├── tacz--aug.json
│       ├── bf1--liu.json
│       └── lavender--howell.json
├── scout/
│   ├── config/...
│   └── tacz/
├── support/
│   ├── config/...
│   └── tacz/
├── pilot/
│   ├── config/...
│   └── tacz/
└── sailor/
    ├── config/...
    └── tacz/
```

### 2.1 文件名命名约定

| 组成部分 | 格式 | 示例 |
|---------|------|------|
| 职业目录 | 小写英文 | `assault/`, `medic/` |
| 配置目录 | `config/` | 固定名 |
| 武器子目录 | 武器类型 | `tacz/`, `sbw/`, `misc/` |
| 职业元数据 | `config/meta.json` | 固定名 |
| 护甲配置 | `config/armor.json` | 固定名 |
| 额外物品 | `config/extras.json` | 固定名 |
| 武器列表 | `config/weapons.json` | 固定名 |
| 非TACZ武器 | `config/non_tacz.json` | 固定名 |
| 武器文件 | `<模组前缀>--<weaponId>.json` | `tacz--ak47.json` |

### 2.2 子目录分类

| 子目录 | 用途 | 文件路径示例 |
|--------|------|-------------|
| `config/` | 职业级配置（元数据/护甲/武器列表等） | `config/armor.json` |
| `tacz/` | TACZ 系枪械（含 TaCZ/Lavender/BF1） | `tacz/tacz--ak47.json` |
| `sbw/` | SBW 卓越前线武器 | `sbw/superbwarfare--sentinel.json` |
| `misc/` | 其他模组武器 | `misc/...` |

> **职业根目录不允许有 JSON 文件**。所有文件必须放入子目录。

## 3. 文件格式详解

### 3.1 `_registry.json` — 注册文件

声明所有职业及其数据文件列表。加载器通过此文件发现和组织数据。

```json
{
  "version": 1,
  "professions": {
    "assault": {
      "enabled": true,
      "displayName": "突击兵",
      "description": "CQB 高机动 全自动压制",
      "tag": "assault",
      "files": [
        "config/meta.json",
        "config/armor.json",
        "config/extras.json",
        "config/weapons.json",
        "config/non_tacz.json",
        "tacz/tacz--ak47.json"
      ]
    }
  }
}
```

**关键规则**：
- `enabled: false` 的条目会被跳过（不加载）
- `tag` 必须对应游戏内 scoreboard 标签
- `files` 中的路径**相对于职业目录**，必须含有子目录前缀
- 未在 `files` 中列出的文件不会被加载

### 3.2 `config/` 职业配置文件

#### `meta.json` — 职业元数据

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
| `displayName` | 推荐 | 中文显示名（仅文档用途） |
| `tag` | ✓ | 游戏内 scoreboard 标签名 |

#### `armor.json` — 护甲配置

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

#### `extras.json` — 额外物品

```json
{
  "extras": [
    { "item": "minecraft:cooked_beef", "count": 32 },
    { "item": "kubejs:spawn_selector", "count": 1 },
    { "item": "minecraft:splash_potion", "count": 6, "tag": { "minecraft:potion_contents": { "potion": "minecraft:healing" } } }
  ]
}
```

`tag` 字段支持 NBT 格式，如药水效果。

#### `weapons.json` — 武器分类列表

```json
{
  "weaponLists": {
    "primary":   ["ak47", "scar_l"],
    "secondary": ["mars", "ruby"],
    "tertiary":  ["snowball"]
  }
}
```

> 武器 ID 必须对应武器数据文件中的 `weaponId`。

#### `non_tacz.json` — 非TACZ武器显示+弹药

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

### 3.3 武器数据文件 — TACZ 枪械

每把 TACZ 枪械一个独立 JSON 文件，放在对应职业目录下的 `tacz/` 子目录中。

```json
{
  "weaponId": "ak47",
  "gunId": "tacz:ak47",
  "mod": "tacz",
  "displayName": "AK47",
  "category": "primary",
  "gunFireMode": "AUTO",
  "gunCurrentAmmoCount": 30,
  "ammo": {
    "ammoId": "tacz:762x39",
    "main": 210,
    "level": 2
  },
  "attachments": {
    "scope": ["lavender:scope_rifles_x4"],
    "muzzle": ["tacz:muzzle_silencer_knight_qd", "tacz:muzzle_brake_cthulhu"],
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
| `category` | ✓ | string | `primary` / `secondary` / `tertiary` |
| `gunFireMode` | ✓ | string | `AUTO` / `SEMI` / `BURST` |
| `gunCurrentAmmoCount` | ✓ | int | 弹匣容量 |
| `ammo` | ✓ | object | 弹药配置 |
| `attachments` | ✗ | object | 配件配置 |

**ammo**：有 `level` → 发弹药盒；无 `level` → 直接发弹药物品。

**attachments**：slotKey 对照 `_slot_definitions.json`。空数组=该槽位无可选配件。

## 4. 从硬编码迁移到数据包的流程

### 4.1 迁移步骤

1. **建目录**：`data/profession_db/<职业>/`
2. **注册**：`_registry.json` 添加职业条目和文件列表
3. **职业配置**：创建 `config/meta.json` + `armor.json` + `extras.json` + `weapons.json` + `non_tacz.json`
4. **迁移武器**：对每个 TACZ 枪械，在 `tacz/` 子目录下创建独立的武器 JSON 文件
5. **清理 JS**：删除或禁用对应的 `b_tacz_prof_*.js` 硬编码文件
6. **加载器**：编写 `database.js` 加载器（参考 sbw_vehicle 的 `tools/database.js`）
7. **重构调用**：将 `PROF_CONFIGS.xxx` 的引用替换为 `getProfessionDB()` 查询
8. **测试**：`/kubejs reload` 验证加载日志，检查 GUI 和装备发放

### 4.2 数据映射对照

| 硬编码 JS 字段 | 数据包目标 | 位置 |
|---------------|-----------|------|
| `PROF_CONFIGS.xxx.guns` | 武器数据文件 | `profession_db/<职业>/tacz/<模组前缀>--<weaponId>.json` |
| `PROF_CONFIGS.xxx.weapons` | `weaponLists` | `config/weapons.json` |
| `PROF_CONFIGS.xxx.armor` | `armor` | `config/armor.json` |
| `PROF_CONFIGS.xxx.extras` | `extras` | `config/extras.json` |
| `PROF_CONFIGS.xxx.nonTaczDisplay` | `nonTaczDisplay` | `config/non_tacz.json` |
| `PROF_CONFIGS.xxx.nonTaczAmmo` | `nonTaczAmmo` | `config/non_tacz.json` |
| `PROF_TAG_LIST` | `_registry.json` 的 tag 字段 | `_registry.json` |
| `ATTACH_SLOT_POS` | `_slot_definitions.json` 的 col/row | `_slot_definitions.json` |
| `GUN_TACZ_FLAT` | 加载器运行时构建 | JS 代码中 |
| `VANILLA_WEAPON_DISPLAY` | 加载器从 `nonTaczDisplay` 合并 | JS 代码中 |

## 5. 加载器设计参考

加载器应参考 `sbw_vehicle/tools/database.js` 的实现模式：

```javascript
var $DB_ROOT = 'kubejs/data/profession_db'
var $professionDB = null

function loadProfessionDB() {
  var registry = JsonIO.read($DB_ROOT + '/_registry.json')
  if (!registry || !registry.professions) return { loaded: false }

  var db = {
    loaded: true,
    professions: {},    // professionId → merged config
    weapons: {},        // weaponId → weapon data
    byProfession: {},   // professionId → [weaponId, ...]
  }

  var profKeys = Object.keys(registry.professions)
  for (var pi = 0; pi < profKeys.length; pi++) {
    var profKey = profKeys[pi]
    var profInfo = registry.professions[profKey]
    if (profInfo.enabled === false) continue

    var profDir = $DB_ROOT + '/' + profKey
    var profConfig = {}
    db.byProfession[profKey] = []

    for (var fi = 0; fi < profInfo.files.length; fi++) {
      var filePath = profDir + '/' + profInfo.files[fi]
      var data = JsonIO.read(filePath)
      if (!data) continue

      // 识别 config/ 下的配置文件，合并到 profConfig
      if (data.professionId) Object.assign(profConfig, { professionId: data.professionId, tag: data.tag })
      if (data.armor)        profConfig.armor = data.armor
      if (data.extras)       profConfig.extras = data.extras
      if (data.weaponLists)  profConfig.weaponLists = data.weaponLists
      if (data.nonTaczDisplay || data.nonTaczAmmo) {
        if (!profConfig.nonTaczDisplay) profConfig.nonTaczDisplay = {}
        if (!profConfig.nonTaczAmmo)   profConfig.nonTaczAmmo = {}
        if (data.nonTaczDisplay) Object.assign(profConfig.nonTaczDisplay, data.nonTaczDisplay)
        if (data.nonTaczAmmo)    Object.assign(profConfig.nonTaczAmmo, data.nonTaczAmmo)
      }
      // 识别武器文件
      if (data.weaponId && data.gunId) {
        db.weapons[data.weaponId] = data
        db.weapons[data.weaponId]._profession = profKey
        db.byProfession[profKey].push(data.weaponId)
      }
    }

    db.professions[profKey] = profConfig
  }

  $professionDB = db
  sbwLog('[职业数据库] 加载完成: ' + Object.keys(db.weapons).length + ' 把武器')
  return db
}

function getProfessionDB() {
  if ($professionDB && $professionDB.loaded) return $professionDB
  return loadProfessionDB()
}

function getProfessionConfig(professionId) {
  var db = getProfessionDB()
  return db.professions[professionId] || null
}

function getWeaponData(weaponId) {
  var db = getProfessionDB()
  return db.weapons[weaponId] || null
}
```

## 6. 注意事项

1. **职业根目录不能有 JSON 文件**，所有文件必须放子目录
2. **`_profession.json` 已被拆分** → `config/meta.json` + `armor.json` + `extras.json` + `weapons.json` + `non_tacz.json`
3. **武器文件通过 `weaponId` 关联**：`weapons.json` 中的 ID 必须对应武器文件的 `weaponId`
4. **非TACZ武器不需要武器文件**：只在 `non_tacz.json` 中配置即可
5. **`files` 中的路径相对于职业目录**：如 `tacz/tacz--ak47.json` → `<职业>/tacz/tacz--ak47.json`
6. **`_registry.json` 控制启用/禁用**：`enabled: false` 的整个职业都不会加载
7. **修改后 `/kubejs reload`**：数据包修改后需要重新加载脚本
8. **新增武器类型只需新建子目录**，在 `files` 中使用 `新目录/文件名` 即可，**无需改加载器**

## 7. 常见问题

**Q: 新增一把枪要改哪些文件？**
A: ① 在职业的 `tacz/` 下创建 JSON ② 修改 `config/weapons.json` 加 ID ③ `_registry.json` 加 `tacz/文件名`

**Q: 一个武器可以属于多个职业吗？**
A: 目前设计上每个武器文件放在对应职业目录下，不能跨职业共享。重复的武器数据需要在各职业目录下各放一份。

**Q: 扩展了新 slotKey 怎么办？**
A: 在 `_slot_definitions.json` 中添加新槽位定义，然后在武器文件的 `attachments` 中使用即可。

**Q: 新增武器类型（如 sbw 武器）怎么办？**
A: 在职业目录下新建 `sbw/` 子目录，放入武器 JSON，在 `_registry.json` 的 `files` 中使用 `sbw/文件名`。
