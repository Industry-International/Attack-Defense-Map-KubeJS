---
name: CBC方块抗爆与装甲属性修改
description: 快速修改方块的 Minecraft 爆炸抗性/硬度，以及 Create Big Cannons (CBC) 及其附属模组的方块装甲属性（toughness/hardness）和弹药属性。适用于海军平衡和火炮对抗相关的开发任务。
---

# CBC方块抗爆与装甲属性修改

本项目包含两套独立的方块防护系统，修改时需要**同时处理**才能达到预期效果：

1. **Minecraft 原生属性** — 由 KubeJS `BlockEvents.modification` 或注册时设置
2. **CBC Block Armor 系统** — 通过数据包 JSON 文件定义，决定炮弹的穿深/伤害交互

---

## 1. Minecraft 原生方块属性

### 可用属性

| 属性 | 含义 | 基岩参考值 |
|------|------|-----------|
| `explosionResistance` | 爆炸抗性（抗爆） | 3,600,000 |
| `destroySpeed` | 硬度（挖掘时间） | -1（不可破坏） |

### 修改方式一：注册时设置（kubejs 自定义方块）

```javascript
// startup_scripts/src/item/xxx_block.js
StartupEvents.registry('block', event => {
  event.create('my_block')
    .hardness(3.0)       // destroySpeed
    .resistance(8.0)     // explosionResistance
})
```

### 修改方式二：BlockEvents.modification（已有方块/覆盖注册值）

```javascript
// startup_scripts/blast_resistance/xxx.js
BlockEvents.modification(event => {
  event.modify('namespace:block_id', block => {
    block.explosionResistance = 3600000   // 基岩级
    block.destroySpeed = -1               // 不可破坏
  })
})
```

> **注意**：修改已有 kubejs 注册的方块时，`BlockEvents.modification` 会**覆盖**注册时设的值。
>
> 已存在的 blast_resistance 文件：
> - `startup_scripts/blast_resistance/taov_returned.js` — TAOV Returned 方块
> - `startup_scripts/blast_resistance/kubejs.js` — KubeJS 自定义方块
> - `startup_scripts/naval_balance_block_properties.js` — 其他海军平衡方块

---

## 2. CBC Block Armor 系统（方块装甲韧性/硬度）

这是 **Create Big Cannons** 模组自带的装甲系统，**独立于 Minecraft 原生的爆炸抗性**。炮弹穿透判定使用这里的值，不读原生的 `explosionResistance`。

### 数据文件路径

```
kubejs/data/<命名空间>/block_armor/<block_id>.json        ← 针对单个方块
kubejs/data/<命名空间>/block_armor/tags/<tag_name>.json   ← 针对方块标签
```

### 文件格式

```json
{
  "toughness": 32,
  "hardness": 1.7
}
```

| 字段 | 含义 | 说明 |
|------|------|------|
| `toughness` | **韧性**（抗穿透） | 越高越难被炮弹击穿。与弹药 `penetration` 对抗 |
| `hardness` | **硬度**（耐久） | 越高越能承受炮弹伤害 |

### 当前项目的已知 block_armor 配置

| 方块/标签 | 命名空间 | toughness | hardness |
|-----------|---------|-----------|----------|
| `netherite_block` | `minecraft` | 1200 | 50 |
| `#naval_heavy_alloy_blocks` | `create` | 128 | 4 |
| `#locometal_antipen` | `railways` | 64 | 2.0 |
| `#locometal_normal` / `#naval_weighted_blocks` / `#naval_sheetmetals` | 多个 | 32 | 1.7 |
| `player_cannon_controller` | `taov_returned` | 20 | 10 |
| `#locometal_antiblast` | `railways` | 16 | 1.3 |
| `#naval_casings` | `create` | 14 | 1 |
| `adventure_floater` | `taov_returned` | 3 | 0.2 |
| 默认（未配置的方块） | — | 0 | 0 |

> **提示**：`toughness` 越高抗穿透越好，`hardness` 越高越能吸收伤害。建议对照弹药 penetration/toughness 来调。

### 方块标签参考

当通过 `#<tag>` 引用时，需要在对应命名空间下定义标签文件：

```
kubejs/data/<命名空间>/tags/block/<tag_name>.json
```

示例（naval_casings 标签）：
```json
{
  "replace": false,
  "values": [
    "create:andesite_casing",
    "create:brass_casing",
    "create:copper_casing",
    "create:railway_casing",
    "create:shadow_steel_casing",
    "create:refined_radiance_casing"
  ]
}
```

---

## 3. Sable 物理属性系统（naval_balance）

除了 CBC 装甲属性外，还有一套 Sable 物理属性系统，定义船的浮力/摩擦/质量等。

### 数据文件路径

```
kubejs/data/naval_balance/physics_block_properties/<name>.json
```

### 文件格式

```json
{
  "properties": {
    "sable:mass": 2,
    "sable:friction": 0.3
  },
  "selector": "#railways:locometal_normal"
}
```

| 字段 | 含义 |
|------|------|
| `sable:mass` | 方块质量（影响船的吃水和重心） |
| `sable:friction` | 摩擦系数 |
| `sable:floating_material` | 浮力材质（引用 `data/sable/floating_materials/`） |
| `selector` | 作用目标（单个方块ID 或 `#tag`） |

---

## 4. CBC 弹药属性（炮弹）

### 数据文件路径

```
kubejs/data/<命名空间>/munition_properties/projectiles/<弹药名>.json
```

### 当前项目已定义的弹药

#### CBC 本体弹药

| 弹药 | 来源 | penetration | toughness | durability_mass | explosive_power | entity_damage |
|------|------|------------|-----------|----------------|----------------|-------------|
| `ap_autocannon` | `createbigcannons` | 2.0 | 1.5 | 0.05 | — | 40.0 |
| `flak_autocannon` | `createbigcannons` | 0.5 | 0.5 | 0.05 | 1.5 | 25.0 |

#### CBC_AT 附属弹药

| 弹药 | 来源 | penetration | toughness | durability_mass | explosive_power | 特点 |
|------|------|------------|-----------|----------------|----------------|------|
| `apds_item` | `cbc_at` | 2.5 | 1.25 | 1.75 | — | 高穿深穿甲弹 |
| `apdsfs_item` | `cbc_at` | 2.77 | 1.3 | 1.66 | — | 更高穿深（杆式） |
| `he_item` | `cbc_at` | 0.9 | 0.4 | 1.0 | 1.575 | 高爆弹 |
| `hei_item` | `cbc_at` | 1.0 | 0.4 | 1.0 | 1.5 | 高爆燃烧弹 |

### 弹药属性说明

| 字段 | 含义 | 说明 |
|------|------|------|
| `penetration` | **穿深** | 与方块 `hardness` 对抗，`penetration > hardness` 才能击穿 |
| `toughness` | **穿透韧性** | 与方块 `toughness` 对抗，决定击穿后是否还能继续飞行 |
| `durability_mass` | **耐久质量** | 越高对炮管磨损越大 |
| `explosive_power` | **爆炸威力** | 爆炸伤害倍率 |
| `entity_damage` | **实体伤害** | 直接命中实体造成的伤害 |
| `deflection` | **跳弹概率** | 0~1，越高越容易跳弹 |
| `ignores_entity_armor` | **无视实体护甲** | true = 穿甲弹 |
| `can_squib` | **是否可堵膛** | 如果炮弹推不动会堵在炮管里 |
| `shrapnel_count` / `shrapnel_spread` | **破片** | 高爆弹的破片数量和散布 |
| `incendiary` | **燃烧** | 是否引燃目标 |

---

## 5. 快速操作指南

### 场景：让一个方块对炮弹免疫（如基岩级）

**三步走：**

1. **Minecraft 抗爆+硬度** — `BlockEvents.modification` 或注册时设置：
   ```javascript
   block.explosionResistance = 3600000
   block.destroySpeed = -1
   ```

2. **CBC 装甲韧性+硬度** — 创建 block_armor JSON：
   ```json
   // data/your_mod/block_armor/your_block.json
   { "toughness": 9999, "hardness": 9999 }
   ```

3. **弹药平衡** — 如果调太高导致某些炮弹完全打不动，可微调对应弹药的 `penetration` / `toughness`。

### 场景：调某个现存方块的装甲

找到或创建 `data/<命名空间>/block_armor/<方块ID>.json` 或 `data/<命名空间>/block_armor/tags/<标签名>.json` 修改 toughness / hardness 即可。

### 快速参考命令（日志）

```bash
# 查看 KubeJS 启动日志（检查 blast_resistance 是否加载成功）
cat ../logs/kubejs/kubejs.log | grep -i "blast\|resistance\|armor"
```

---

## 6. 已有相关文件一览

### 修改的方块列表（Minecraft 属性）

| 文件 | 方块 | explosionResistance | destroySpeed |
|------|------|-------------------|-------------|
| `startup_scripts/blast_resistance/taov_returned.js` | 4个 taov_returned 方块 | 3,600,000 | -1 |
| `startup_scripts/blast_resistance/kubejs.js` | kubejs:vehicle_deployer, kubejs:ammo_crate | 3,600,000 | -1 |
| `startup_scripts/naval_balance_block_properties.js` | railways/create 方块 | 14~32 | — |

### Block Armor 配置文件

| 文件 | toughness | hardness |
|------|-----------|----------|
| `data/minecraft/block_armor/netherite_block.json` | 1200 | 50 |
| `data/create/block_armor/tags/naval_heavy_alloy_blocks.json` | 128 | 4 |
| `data/create/block_armor/tags/naval_casings.json` | 14 | 1 |
| `data/railways/block_armor/tags/locometal_normal.json` | 32 | 1.7 |
| `data/railways/block_armor/tags/locometal_antiblast.json` | 16 | 1.3 |
| `data/railways/block_armor/tags/locometal_antipen.json` | 64 | 2.0 |
| `data/synaxis/block_armor/tags/naval_weighted_blocks.json` | 32 | 1.7 |
| `data/immersiveengineering/block_armor/tags/naval_sheetmetals.json` | 32 | 1.7 |
| `data/taov_returned/block_armor/player_cannon_controller.json` | 20 | 10 |
| `data/taov_returned/block_armor/adventure_floater.json` | 3 | 0.2 |

### 弹药属性文件

| 文件 | 类型 |
|------|------|
| `data/createbigcannons/munition_properties/projectiles/ap_autocannon.json` | 穿甲机炮 |
| `data/createbigcannons/munition_properties/projectiles/flak_autocannon.json` | 高爆机炮 |
| `data/cbc_at/munition_properties/projectiles/apds_item.json` | 脱壳穿甲弹 |
| `data/cbc_at/munition_properties/projectiles/apdsfs_item.json` | 杆式脱壳穿甲弹 |
| `data/cbc_at/munition_properties/projectiles/he_item.json` | 高爆弹 |
| `data/cbc_at/munition_properties/projectiles/hei_item.json` | 高爆燃烧弹 |

### Sable 物理属性

| 文件 | 作用目标 |
|------|---------|
| `data/naval_balance/physics_block_properties/create_casings.json` | `#create:naval_casings` |
| `data/naval_balance/physics_block_properties/create_heavy_alloy_blocks.json` | `#create:naval_heavy_alloy_blocks` |
| `data/naval_balance/physics_block_properties/railways_locometal_normal.json` | `#railways:locometal_normal` |
| `data/naval_balance/physics_block_properties/railways_locometal_antiblast.json` | `#railways:locometal_antiblast` |
| `data/naval_balance/physics_block_properties/railways_locometal_antipen.json` | `#railways:locometal_antipen` |
| `data/naval_balance/physics_block_properties/minecraft_netherite_block.json` | `minecraft:netherite_block` |
| `data/naval_balance/physics_block_properties/adventure_floater.json` | `taov_returned:adventure_floater` |

---

## 7. 注意事项

1. **两个系统独立生效**：即使把 `explosionResistance` 改到 3,600,000，CBC 炮弹仍然根据 `block_armor` 的 toughness/hardness 判定穿透和伤害。反之亦然。
2. **同时修改才是完整防护**：要让一个方块完全免疫 CBC 炮弹，需要**同时**提高它的 `block_armor` 属性和 Minecraft 原生属性。
3. **注意命名空间**：`block_armor` 文件放在哪个命名空间下，那个命名空间必须存在于数据包中。推荐使用 `minecraft`、`create`、`taov_returned` 等已有命名空间。
4. **标签路径**：`block_armor/tags/xxx.json` 中的标签名不需要和 `tags/block/xxx.json` 中的一致，但推荐保持一致以便管理。
