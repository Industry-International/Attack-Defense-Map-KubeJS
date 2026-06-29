# 职业数据库 — 填写指南

## 目录结构

```
kubejs/data/profession_db/
├── _registry.json                        ← 注册文件（控制加载 + 文件列表）
├── _slot_definitions.json                ← 配件槽位布局定义
├── 填写指南.md
│
├── assault/
│   ├── config/                           ← 职业配置目录
│   │   ├── meta.json                     ← 职业元数据
│   │   ├── armor.json                    ← 护甲配置
│   │   ├── extras.json                   ← 额外物品
│   │   ├── weapons.json                  ← 武器分类列表
│   │   └── non_tacz.json                 ← 非TACZ武器显示+弹药
│   └── tacz/                             ← TACZ 系枪械
│       ├── tacz--ak47.json
│       └── ...
├── medic/
│   ├── config/
│   │   ├── meta.json
│   │   ├── armor.json
│   │   ├── extras.json
│   │   ├── weapons.json
│   │   └── non_tacz.json
│   └── tacz/
└── ...
```

## 一、`_registry.json` — 注册文件

```json
{
  "version": 1,
  "professions": {
    "assault": {
      "enabled": true,
      "displayName": "突击兵",
      "description": "CQB 高机动",
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

| 字段 | 必填 | 说明 |
|------|------|------|
| `files` | 是 | 路径相对于职业目录，支持子目录（如 `config/armor.json`） |

> **所有文件路径都从职业目录开始**：`config/armor.json` → `<职业>/config/armor.json`

---

## 二、`config/` 职业配置

### `config/meta.json` — 职业元数据

```json
{
  "professionId": "assault",
  "displayName": "突击兵",
  "tag": "assault"
}
```

### `config/armor.json` — 护甲配置

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

### `config/extras.json` — 额外物品

```json
{
  "extras": [
    { "item": "minecraft:cooked_beef", "count": 32 },
    { "item": "kubejs:spawn_selector", "count": 1 },
    { "item": "minecraft:splash_potion", "count": 6, "tag": { "minecraft:potion_contents": { "potion": "minecraft:healing" } } }
  ]
}
```

### `config/weapons.json` — 武器分类列表

```json
{
  "weaponLists": {
    "primary":   ["ak47", "scar_l"],
    "secondary": ["mars", "ruby"],
    "tertiary":  ["snowball"]
  }
}
```

> `weaponId` 必须与武器文件中的 `weaponId` 字段匹配。

### `config/non_tacz.json` — 非TACZ显示+弹药

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

## 三、武器数据 — 如 `tacz/tacz--ak47.json`

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
    "muzzle": ["tacz:muzzle_silencer_knight_qd"]
  }
}
```

---

## 四、各目录职责速查

| 目录 | 用途 | 放入什么 |
|------|------|---------|
| `config/` | 职业配置 | `meta.json` / `armor.json` / `extras.json` / `weapons.json` / `non_tacz.json` |
| `tacz/` | TACZ 系枪械 | 每把枪独立 `.json`，含 gunId/弹药/配件 |
| `sbw/` | SBW 卓越前线武器 | SBW 武器数据 |
| `misc/` | 其他模组武器 | 其他武器数据 |

---

## 五、新增操作指南

| 操作 | 步骤 |
|------|------|
| **新增 TACZ 枪械** | ① `tacz/` 下创建 JSON ② `weapons.json` 加 ID ③ `_registry.json` 加 `tacz/文件名` |
| **新增 SBW 武器** | ① 创建 `sbw/` 目录放 JSON ② `weapons.json` 加 ID ③ `_registry.json` 加 `sbw/文件名` |
| **新增职业** | ① `_registry.json` 加条目 ② 创建职业目录 ③ 创建 `config/` + 武器子目录 |

## 六、注意事项

1. **职业根目录不能有 JSON 文件**，全部放子目录
2. **`files` 路径相对于职业目录**，如 `config/armor.json` → `<职业>/config/armor.json`
3. **`_profession.json` 已被拆分** → `config/meta.json` + `armor.json` + `extras.json` + `weapons.json` + `non_tacz.json`
4. **修改后 `/kubejs reload`**
