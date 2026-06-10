# 职业系统（Profession）使用教程

## 目录结构

```
server_scripts/profession/
├── profession_gui.js               ← GUI 交互（职业选择、武器配置、配件改装）
├── profequip_cmd.js                ← /profequip 指令（装备发放）
├── kubejsadmin_cmd.js              ← /kubejsadmin 指令（管理员清空）
├── config/
│   └── a_tacz_config.js            ← 共享工具（Java 类加载、GUI 布局、持久化函数）
└── prof_configs/
    ├── b_tacz_prof_assault.js      ← 突击兵全套配置（TACZ枪械+非TACZ武器+护甲+额外物品）
    ├── b_tacz_prof_medic.js        ← 医疗兵全套配置（同上）
    ├── b_tacz_prof_scout.js        ← 侦察兵全套配置（同上）
    ├── b_tacz_prof_support.js      ← 支援兵全套配置（同上）
    └── z_tacz_config_build.js      ← 汇总构建（最后加载，生成查表函数 + getProfConfig）
```

加载顺序（由文件名前缀控制）：
1. `config/a_tacz_config.js` — 基础工具 + PROF_CONFIGS 容器
2. `prof_configs/b_tacz_prof_*.js` — 各职业**完整配置**（TACZ + 非TACZ + 护甲 + 额外物品）
3. `prof_configs/z_tacz_config_build.js` — 汇总查表 + getProfConfig
4. `profession_gui.js` — GUI
5. `profequip_cmd.js` — 装备发放
6. `kubejsadmin_cmd.js` — 管理指令

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
                   【武器配置页】 ←── 左上角「取消选择职业」可返回
                   ┌──────────────┐
                   │ 主武器 │ 副武器 │ 特殊武器 │  ← 左键进入选择列表
                   │  (已选显示实际武器)    │     ← 右键清空该选择
                   └──────────────┘
                        │
                    选择武器 → 返回武器配置页
                        │
                    TACZ 枪械可右键打开【配件改装】
```

### 各页面标题规则

| 页面 | 标题格式 |
|------|---------|
| 职业选择页 | `§8职业选择` |
| 武器配置页 | `§c突击兵 §8武器配置` |
| 主武器列表 | `§c突击兵 §8主武器配置界面` |
| 副武器列表 | `§c突击兵 §8副武器配置界面` |
| 特殊武器列表 | `§c突击兵 §8特殊武器配置界面` |
| 配件改装 | 保持默认（枪械名 + 配件配置） |

---

## 二、武器类型

### 1. TACZ 枪械

使用 `tacz:modern_kinetic_gun` 物品 + GunId NBT 区分。

**配置文件示例（`b_tacz_prof_assault.js` — 完整结构）：**

```js
PROF_CONFIGS.assault = {
  // ===== TACZ 枪械 =====
  guns: {
    primary: {                    // 主武器
      ak47: {                     // 武器 ID（内部标识）
        gunId: 'tacz:ak47',       // TACZ GunId
        GunFireMode: 'AUTO',
        GunCurrentAmmoCount: 30,
        ammo: {                   // 弹药配置
          ammoId: 'tacz:762x39',  // 弹药类型
          main: 210,              // 主武器备弹
          level: 2,               // 弹药等级（有 level → 弹药盒）
        },
        attachments: {            // 可用配件列表
          scope: [{id:'tacz:scope_reflex'}, ...],
          muzzle: [{id:'tacz:muzzle_silencer_knight_qd'}, ...],
          stock: [{id:'tacz:stock_heavy'}, ...],
        },
      },
    },
    secondary: { /* 副武器，同上 */ },
    tertiary: {},  // 特殊武器（非 TACZ 时 guns 可以为空）
  },
  weapons: {
    primary:   ['ak47', 'scar_l'],   // 主武器可选列表
    secondary: ['mars'],             // 副武器可选列表
    tertiary:  ['snowball'],         // 特殊武器可选列表
  },

  // ===== 非 TACZ 武器（可选）=====
  nonTaczDisplay: {
    snowball: { item: 'minecraft:snowball', i18n: true },
  },
  nonTaczAmmo: {
    snowball: { item: 'minecraft:snowball', count: 16 },
  },

  // ===== 护甲 =====
  armor: [
    'minecraft:iron_boots',
    'minecraft:iron_leggings',
    'minecraft:iron_chestplate',
    'minecraft:iron_helmet',
  ],

  // ===== 额外物品 =====
  extras: [
    { item: 'minecraft:cooked_beef', count: 32 },
  ],
}
```

### 2. 非 TACZ 武器（特殊武器）

在 **`b_tacz_prof_xxx.js` 内** 用 `nonTaczDisplay` 表映射为实际物品。

**配置示例（含弹药）：**

```js
// b_tacz_prof_assault.js（与 guns/weapons 同级）
PROF_CONFIGS.assault = {
  // ... TACZ guns + weapons ...

  // ===== 非 TACZ 武器 =====
  nonTaczDisplay: {
    snowball: { item: 'minecraft:snowball', i18n: true },  // 有 i18n → 用 KubeJS 翻译键
  },
  nonTaczAmmo: {
    snowball: { item: 'minecraft:snowball', count: 16 },
  },
}
```

> 所有职业的 `nonTaczDisplay` / `nonTaczAmmo` 在 `z_tacz_config_build.js` 加载时自动合并为全局查表。
> 如需新增非 TACZ 武器，只需在对应职业的 `b_tacz_prof_xxx.js` 中添加即可。

### i18n 标记说明

`VANILLA_WEAPON_DISPLAY` 中每条记录的 `i18n` 字段控制名称来源：

| i18n | 名称来源 | 需要语言文件？ | 适用场景 |
|------|---------|--------------|---------|
| 未设置 / `false` | 物品自身内置名（模组/原版） | 不需要 | `superbwarfare:sentinel`（模组自带"哨兵狙击步枪"） |
| `true` | `offhand.kubejs.<id>` 翻译键 | 需要 | `minecraft:snowball`（原版雪球，需要覆写为"雪球"） |

---

## 三、弹药系统

### TACZ 弹药

在 `b_tacz_prof_*.js` 的 `guns` 中配置：

```js
// 有 level → 发放弹药盒（tacz:ammo_box）
ammo: { ammoId: 'tacz:762x39', main: 210, level: 2 }

// 无 level → 直接发弹药物品（tacz:762x39 × 210）
ammo: { ammoId: 'tacz:762x39', main: 210 }
```

### 非 TACZ 弹药

在 `b_tacz_prof_*.js` 的 `nonTaczAmmo` 中配置（与 TACZ 弹药的 `guns.ammo` 路径不同）：

```js
// 在职业配置的 nonTaczAmmo 中定义
nonTaczAmmo: {
  sentinel: { item: 'superbwarfare:sniper_ammo', count: 30 },
  snowball: { item: 'minecraft:snowball',        count: 16 },
}
```

> 超堆叠上限时自动拆分：比如 `count: 120` 但物品最大堆叠 99，会分为 99 + 21 两组发放。

---

## 四、指令参考

详细的指令使用说明请参阅 **[指令使用.md](./指令使用.md)**，此处仅作简要说明。

### `/profequip`

装备发放指令，需要 OP 2 级权限。支持控制台/命令方块/数据包/玩家。

```
/profequip give [<targets>]  发放装备（留空给自己，控制台必须指定目标）
/profequip list              查看在线玩家的选择状态
/profequip help              显示帮助
```

### `/kubejsadmin`

管理员清空指令，需要 OP 2 级权限。

```
/kubejsadmin profession <targets>  清空职业选择 + 移除标签
/kubejsadmin menu <targets>        清空队伍配置
```

---

## 五、语言文件

位置：`assets/kubejs/lang/{en_us,zh_cn}.json`

### 常用翻译键

| 键 | 说明 |
|---|------|
| `gui.kubejs.profession_select.title` | 职业选择页标题 |
| `gui.kubejs.profession_select.subtitle.weapon_config` | 武器配置页副标题 |
| `gui.kubejs.profession_select.hint` | 武器配置页操作提示 |
| `profession.kubejs.assault` | 突击兵名称 |
| `profession.kubejs.assault.desc` | 突击兵描述 |
| `weapon.kubejs.<id>` | 非 TACZ 主武器名称（i18n 用） |
| `offhand.kubejs.<id>` | 非 TACZ 副/特殊武器名称（i18n 用） |
| `msg.kubejs.profession_select.main_weapon` | 选择主武器消息 |
| `msg.kubejs.profession_select.main_cleared` | 清空主武器消息 |

---

## 六、新增武器快速指南

### 新增 TACZ 枪械

1. 在 `b_tacz_prof_xxx.js` 的 `guns.{类别}` 中添加枪械配置
2. 在 `weapons.{类别}` 列表中添加武器 ID
3. 无需语言文件（TACZ 自动使用模组名）

### 新增非 TACZ 特殊武器

1. `b_tacz_prof_xxx.js` → `nonTaczDisplay` 添加物品映射 + 名称来源（`i18n` 标记）
2. `b_tacz_prof_xxx.js` → `nonTaczAmmo` 添加弹药（可选）
3. `b_tacz_prof_xxx.js` → `weapons.tertiary` 添加武器 ID
4. 语言文件（仅当需要 KubeJS 覆写名称时）

### 新增职业

1. `profession_gui.js` → `PROFESSIONS` 数组添加职业 ID
2. 新建 `b_tacz_prof_xxx.js` **完整配置**（TACZ枪械 + 非TACZ武器 + 护甲 + 额外物品）
3. `a_tacz_config.js` → `PROF_TAG_LIST` 添加标签
4. 语言文件添加职业名和描述

---

## 七、注意事项

1. **cleanId**：从 `player.persistentData` 读取的 ID 用于翻译键时，必须用 `cleanId()` 消去引号
2. **文件加载顺序**：`config/` → `prof_configs/b_*.js` → `prof_configs/z_*.js` → 其他
3. **配件改装**：仅 TACZ 枪械支持，非 TACZ 武器右键无配件菜单
4. **弹药发放**：自动走背包优先（9~35号槽），背包满才放快捷栏
5. **修改后刷新**：`/kubejs reload`（脚本）+ `F3+T`（语言文件）
6. **TACZ 配件 ID 必须完整**：`tacz:oem_stock_tactical` 中的 `oem_` 是 OEM 原厂配件的**命名约定**，不是会被剥离的前缀，必须完整写入。写 `tacz:stock_tactical`（缺 `oem_`）是不存在的 ID 且无效。具体每把枪允许哪些配件，查阅 `data/tacz/tacz_tags/attachments/allow_attachments/` 下的对应文件。
