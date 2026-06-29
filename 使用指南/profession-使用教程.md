# 职业系统（Profession）使用教程

## 目录结构

```
kubejs/
├── data/profession_db/                ← 数据包（JSON 驱动）
│   ├── _registry.json                 ← 注册文件（职业 + 文件列表）
│   ├── _slot_definitions.json         ← 配件槽位布局
│   ├── guide.md                       ← 数据包填写指南
│   ├── assault/
│   │   ├── meta.json                  ← 职业元数据
│   │   ├── weapons.json               ← 武器分类列表（按类型分组）
│   │   ├── armor.json                 ← 护甲配置
│   │   ├── extras.json                ← 额外物品
│   │   ├── non_tacz.json              ← 非TACZ武器
│   │   └── tacz/                      ← TACZ 枪械数据
│   │       ├── tacz--ak47.json
│   │       └── ...
│   ├── medic/ ... (同 assault)
│   ├── scout/ ...
│   ├── support/ ...
│   ├── pilot/ ...
│   └── sailor/ ...
│
└── server_scripts/profession/         ← JS 加载器 + GUI
    ├── config/
    │   ├── a_database.js              ← 加载器（读取 JSON 数据包）
    │   └── a_tacz_config.js           ← 配件改装 GUI + 共享工具
    ├── profession_gui.js              ← GUI 交互（职业选择/武器配置/类型选择/配件改装）
    ├── profession_backpack.js         ← 背包系统
    ├── profequip_cmd.js               ← 装备发放指令
    ├── kubejsadmin_cmd.js             ← 管理员指令
    └── no_job_tag.js                  ← 无职业标签管理
```

---

## 一、GUI 操作流程

```
右键职业选择器
    │
    ├── 已选择职业 → 直接进入【武器配置页】
    └── 未选择职业 → 进入【职业选择页】
                        │
                    选择职业（突击兵/侦察兵/医疗兵/支援兵）
                        │
                        ▼
                   【武器配置页】
                   ┌──────────────────────┐
                   │ 主武器 │ 副武器 │ 特殊武器 │  ← 左键进入类型选择
                   │    (已选显示实际武器)     │  ← 右键清空该选择
                   ├──────────────────────┤
                   │ ⬆加载背包 │ ★给予装备 │ ⬇保存背包 │
                   └──────────────────────┘
                        │ 点击类型入口
                        ▼
                   【类型选择页】（新增）
                   ┌──────────────────────┐
                   │ [§e全部] [§6步枪]     │
                   │ [§b冲锋枪] [§e霰弹枪]  │  ← 每种类型自动取第一把枪模型
                   └──────────────────────┘
                        │ 点击类型
                        ▼
                   【武器列表页】（标题 = 职业名 + 类型名 + "配置"）
                   ┌──────────────────────┐
                   │ AK47  SCAR-L  VG1-5   │  ← 左键选中，右键配件改装
                   │ ...                   │
                   └──────────────────────┘
```

### 武器配置页按钮一览

| 位置 | 按钮 | 功能 |
|------|------|------|
| (0,0) | `§c← 取消选择职业` | 清空职业+武器选择，返回职业选择页 |
| (2,3) | 主武器图标 | 左键进入类型选择，右键清空主武器 |
| (4,3) | 副武器图标 | 左键进入类型选择，右键清空副武器 |
| (6,3) | 特殊武器图标 | 左键进入类型选择，右键清空特殊武器 |
| (0,5) | `⬆ 加载背包` | 从已保存的背包槽位加载武器配置 |
| (4,5) | `§a✔ 给予装备` | 清空背包 → 发放全套职业装备 |
| (8,5) | `⬇ 保存到背包` | 将当前武器配置保存到背包槽位 |
| (8,0) | `✖ 删除背包` | 删除指定背包槽位的数据 |

### 各页面标题规则

| 页面 | 标题格式 |
|------|---------|
| 职业选择页 | `§8职业选择` |
| 武器配置页 | `职业名 §8武器配置` |
| 类型选择页 | `职业名 §8主武器/副武器/特殊武器` |
| 武器列表页（有类型） | `职业名 类型名配置`（如 `§c突击兵 §6步枪配置`） |
| 武器列表页（全部） | `职业名 §8主武器配置界面` |
| 配件改装 | 枪械名 + 配件配置（不变） |

---

## 二、武器类型分类

### weapons.json 按类型分组

武器列表使用**嵌套对象**按类型分组，不再使用扁平数组：

```json
{
  "weaponLists": {
    "primary": {
      "rifle":   ["ak47", "scar_l", "gewehr_1_5"],
      "smg":     ["lavenderberretam1918"],
      "shotgun": ["lavenderdarne1912"]
    },
    "secondary": {
      "pistol": ["mars", "ruby"]
    },
    "tertiary": {
      "other": ["snowball"]
    }
  }
}
```

类型 key（如 `rifle`/`smg`/`shotgun`）作为类型选择页的分类名，自动显示。新增类型只需在此添加分组，无需改任何 JS 或加 type 字段到武器文件。

### 内置类型翻译

| key | 中文 | 英文 |
|-----|------|------|
| `type.kubejs.rifle` | §6步枪 | §6Rifle |
| `type.kubejs.smg` | §b冲锋枪 | §bSMG |
| `type.kubejs.shotgun` | §e霰弹枪 | §eShotgun |
| `type.kubejs.sniper` | §d狙击枪 | §dSniper |
| `type.kubejs.mg` | §c机枪 | §cMachine Gun |
| `type.kubejs.pistol` | §f手枪 | §fPistol |
| `type.kubejs.all` | §e全部 | §eAll |

新增类型只需在语言文件中添加对应的翻译 key（`type.kubejs.<类型名>`）。

### 类型图标自动适配

类型选择页的图标**自动取该类型第一把武器的 GunId** 作为展示模型。例如突击兵的霰弹枪会显示 `lavender:darne1912` 的模型。不需要硬编码映射表。

---

## 三、配件改装界面

### 智能返回

从配件改装点击返回时，自动回到进入配件改装之前的页面（包括类型过滤和页码信息）：

| 进入配件改装的路径 | 返回位置 |
|------------------|---------|
| 全部武器列表 → 右键武器 | 全部武器列表 |
| 步枪列表 → 右键武器 | 步枪列表 |
| 冲锋枪列表第2页 → 右键武器 | 冲锋枪列表第2页 |

### 配件改装按钮一览

| 位置 | 按钮 | 功能 |
|------|------|------|
| (0,0) | `§c← 返回` | **智能返回**上级武器列表 |
| (8,0) | `§c✖ 退出` | 直接关闭 GUI |
| (0,5) | `§a✔ 保存配件` | 保存配件配置并返回上级菜单 |
| (8,5) | `§c✖ 清空所有配件` | 清空该枪械所有配件 |

---

## 四、弹药系统（同原系统）

### TACZ 弹药

```json
// 武器 JSON 中的 ammo 字段
{ "ammoId": "tacz:762x39", "main": 210, "level": 2 }  // 有 level → 弹药盒
{ "ammoId": "tacz:762x39", "main": 210 }                // 无 level → 直接发物品
```

### 非 TACZ 弹药

在 `non_tacz.json` 中定义：

```json
{
  "nonTaczAmmo": {
    "snowball": { "item": "minecraft:snowball", "count": 16 }
  }
}
```

---

## 五、背包系统（同原系统）

每个职业独立拥有 **5 个背包槽位**，每位玩家数据独立。背包可保存**武器配置 + 配件配置**。

入口在武器配置页底部的三个按钮（加载/保存/删除）。

---

## 六、标签系统（同原系统）

| 标签 | 含义 | 生命周期 |
|------|------|---------|
| `no_loadout` | 未领取装备 | 打开GUI时添加，发放装备/关闭GUI时移除 |
| `no_job` | 未选择职业 | 登录时无职业自动添加，选择职业后移除 |

---

## 七、语言文件

位置：`assets/kubejs/lang/{en_us,zh_cn}.json`

### 新增类型相关翻译键

| 键 | 说明 |
|---|------|
| `type.kubejs.rifle` | 步枪类型名 |
| `type.kubejs.smg` | 冲锋枪类型名 |
| `type.kubejs.shotgun` | 霰弹枪类型名 |
| `type.kubejs.sniper` | 狙击枪类型名 |
| `type.kubejs.mg` | 机枪类型名 |
| `type.kubejs.pistol` | 手枪类型名 |
| `type.kubejs.all` | 全部选项（宝箱图标） |
| `gui.kubejs.type_select.hint` | 类型选择页操作提示 |
| `gui.kubejs.type_select.click_enter` | 类型图标描述 |
| `gui.kubejs.profession_select.subtitle.primary_type` | 类型选择页-主武器标题 |
| `gui.kubejs.profession_select.subtitle.secondary_type` | 类型选择页-副武器标题 |
| `gui.kubejs.profession_select.subtitle.tertiary_type` | 类型选择页-特殊武器标题 |
| `gui.kubejs.profession_select.subtitle.config` | 武器列表页-配置后缀 |

---

## 八、指令参考

| 指令 | 权限 | 说明 |
|------|------|------|
| `/profequip give [<targets>]` | OP 2 | 发放装备 |
| `/profequip list` | OP 2 | 查看玩家选择状态 |
| `/kubejsadmin profession <targets>` | OP 2 | 清空职业选择 |
| `/kubejsadmin menu <targets>` | OP 2 | 清空队伍配置 |

---

## 九、相关文档

| 文档 | 说明 |
|------|------|
| **[使用指南总览](./README.md)** | 所有模块的索引总览 |
| **[数据包填写指南](../data/profession_db/guide.md)** | 数据包 JSON 格式详解 |
| **[队伍选择器](./team-使用教程.md)** | 队伍选择 GUI 使用说明 |
| **[指令使用](./指令使用.md)** | 指令详情 |
