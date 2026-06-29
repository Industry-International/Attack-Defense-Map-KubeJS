---
name: 职业数据库开发
description: 职业系统（Profession）数据包开发指南。涵盖 JSON 数据包结构设计、注册表管理、武器类型分组、武器数据文件编写、职业配置填写。适用于所有涉及 profession 模块新增/修改武器、职业、配置的开发任务。
---

# 职业数据库开发

## 1. 概述

职业系统使用 **JSON 数据包驱动**。所有配置在 `data/profession_db/` 目录中，JS 代码只负责加载和消费数据。

## 2. 数据包结构

```
kubejs/data/profession_db/
├── _registry.json                        ← 注册文件（单一入口）
├── _slot_definitions.json                ← 配件槽位布局定义
├── guide.md                              ← 填写手册
│
├── assault/
│   ├── meta.json                         ← 职业元数据（不含 files/enabled）
│   ├── weapons.json                      ← 武器分类列表（按类型嵌套分组）
│   ├── armor.json                        ← 护甲配置
│   ├── extras.json                       ← 额外物品
│   ├── non_tacz.json                     ← 非TACZ武器显示+弹药
│   └── tacz/                             ← TACZ 系枪械（平放，无子分类目录）
│       ├── tacz--ak47.json
│       └── ...
├── medic/ ... (同结构)
├── scout/ ...
├── support/ ...
├── pilot/ ...
└── sailor/ ...
```

**关键规则**：
- 配置文件（`meta.json`/`weapons.json` 等）**直接放在职业根目录**，不再使用 `config/` 子目录
- 武器文件放在 `tacz/` 子目录，平放（无 `rifle/`/`smg/` 等子分类）
- 不存在 `gui/` 和 `data/` 目录（V1 遗留结构已移除）

### 2.1 文件名命名约定

| 组成部分 | 格式 | 说明 |
|---------|------|------|
| 职业目录 | 小写英文 | `assault/`, `medic/` |
| 配置目录 | 职业根目录 | 不再使用 `config/` 子目录 |
| 武器子目录 | `tacz/` | 仅平放，无子分类 |
| 武器文件 | `<模组前缀>--<weaponId>.json` | `tacz--ak47.json` |
| 职业元数据 | `meta.json` | 无 enabled/files 字段 |
| 护甲配置 | `armor.json` | |
| 额外物品 | `extras.json` | |
| 武器列表 | `weapons.json` | 按类型嵌套分组 |
| 非TACZ武器 | `non_tacz.json` | |

### 2.2 武器类型分组

`weapons.json` 使用**嵌套对象**按类型分组（不再使用扁平数组）：

```json
{
  "weaponLists": {
    "primary": {
      "rifle":   ["ak47", "scar_l"],
      "smg":     ["hk_mp5a5"],
      "shotgun": ["darne1912"]
    },
    "secondary": {
      "pistol": ["glock_17"]
    },
    "tertiary": {
      "other": ["snowball"]
    }
  }
}
```

类型 key（`rifle`/`smg`/`shotgun`）在 GUI 中自动作为分类名显示。新增类型只需在此添加 key 即可，**无需改 JS 或武器文件**。

旧格式（扁平数组 `["ak47", ...]`）仍被兼容，但不推荐。

---

## 3. 文件格式详解

### 3.1 `_registry.json` — 注册文件

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
        "meta.json", "weapons.json", "armor.json", "extras.json", "non_tacz.json",
        "tacz/tacz--ak47.json"
      ]
    }
  }
}
```

**关键规则**：
- `enabled: false` 跳过该职业
- `tag` 对应游戏内 scoreboard 标签
- `files` 路径**相对于职业目录**

### 3.2 职业配置文件

#### `meta.json`

```json
{ "professionId": "assault", "displayName": "突击兵", "tag": "assault" }
```

不再包含 `enabled` 和 `files` 字段（在 `_registry.json` 中）。

#### `weapons.json`

见上方 2.2 节。加载器自动识别嵌套对象（新格式）和扁平数组（旧格式）。

#### `armor.json` / `extras.json` / `non_tacz.json`

格式不变。护甲顺序靴→腿→胸→头。

### 3.3 武器数据文件

```json
{
  "weaponId": "ak47",
  "gunId": "tacz:ak47",
  "mod": "tacz",
  "displayName": "AK47",
  "gunFireMode": "AUTO",
  "gunCurrentAmmoCount": 30,
  "ammo": { "ammoId": "tacz:762x39", "main": 210, "level": 2 },
  "attachments": { "scope": ["..."], "muzzle": ["..."], ... }
}
```

**注意**：不再需要 `type` 字段（类型信息从 `weapons.json` 的嵌套结构推断）。

---

## 4. GUI 流程

### 4.1 完整操作流程

```
右键职业选择器
  → 职业选择页（选择职业）
  → 武器配置页（主/副/特殊 三入口）
    → 类型选择页（步枪/冲锋枪/霰弹枪/... + 全部）
      → 武器列表页（左键选中，右键配件改装）
        → 配件改装（返回时智能回到原位）
```

### 4.2 类型选择页

- 第一位固定为"全部"（宝箱图标），点击进入该分类所有武器
- 其余类型自动从 `weapons.json` 的 key 生成
- 每种类型的展示图标**自动取该类型第一把武器的 GunId**
- 新增类型只需在 `weapons.json` 加分组 + 语言文件加翻译

### 4.3 配件改装智能返回

`openAttachmentMenu` 的 `returnPage` 参数由调用方构造，包含当前页面的完整上下文（分类+类型+页码）。

返回路径：
- `primary:rifle:0` → 返回步枪列表 → 返回类型选择 → 返回武器配置
- `primary:0`（全部） → 返回全部列表 → 返回武器配置

---

## 5. 加载器参考

### 5.1 加载器 `a_database.js`

从 `_registry.json` 单入口加载，解析嵌套 weaponLists：

```javascript
function _parseCategoryData(categoryData) {
  // 自动识别对象（新格式，按类型分组）和数组（旧格式，扁平）
  var isObj = typeof categoryData === 'object' && categoryData !== null && !Array.isArray(categoryData)
  // ... 提取 typeMap 和 flatIds
}

function getWeaponTypes(profession, category) {
  // 新格式返回类型名数组，旧格式返回 ["all"]
}

function getProfessionWeaponListByType(profession, category, type) {
  // 新格式按类型过滤，旧格式返回全部
}
```

### 5.2 空处理

所有渲染函数已加 null/undefined 守卫：
- 空数据项显示**屏障方块** + 控制台 `[职业数据库]` 警告
- `openPage` 收到空页面直接返回
- `getTypeDisplayItem` 收到空类型返回屏障

---

## 6. 新增操作指南

| 操作 | 步骤 |
|------|------|
| **新增 TACZ 枪械** | ① `tacz/` 下创建 JSON ② `weapons.json` 对应类型分组加 ID ③ `_registry.json` 的 `files` 加路径 |
| **新增武器类型** | ① `weapons.json` 加类型 key ② 语言文件加 `type.kubejs.<类型名>` |
| **新增职业** | ① `_registry.json` 加条目 ② 创建职业目录 ③ 创建 5 个配置文件和 `tacz/` 子目录 |

---

## 7. 注意事项

1. **配置文件放职业根目录**，不用 `config/` 子目录
2. **武器文件不放 type 字段**，类型从 `weapons.json` 的嵌套结构推断
3. **`_registry.json` 是唯一入口**，不在其中声明的文件不会被加载
4. **修改后 `/kubejs reload`**
5. **enabled 开关在 `_registry.json` 中**，不在 `meta.json` 里
6. **新增类型无需改 JS**，只需改 `weapons.json` + 语言文件
