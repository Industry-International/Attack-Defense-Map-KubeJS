# SBW 载具系统 — KubeJS → Java 模组迁移指引

> **目标**：将弹药补给站和载具部署台两个方块从 KubeJS 迁移到 Java 模组。
> **策略**：使用**新方块 ID** 与现有 KubeJS 共存，不破坏已有存档。

---

## 一、迁移范围

### 1.1 需要迁移（核心模块）

| 模块 | KubeJS 位置 | Java 目标 |
|------|-------------|-----------|
| **弹药补给站 方块 + BlockEntity** | `startup_scripts/src/item/ammo_crate_block.js`<br>`server_scripts/sbw_vehicle/ammo_replenish/main.js` | `block/AmmoCrateBlock.java`<br>`block/AmmoCrateBlockEntity.java` |
| **弹药补给站 GUI** | `startup_scripts/src/blocks/ammo_crate/gui.js` | `gui/ammo_station/AmmoStationMenu.java`<br>`gui/ammo_station/AmmoStationScreen.java` |
| **载具部署台 方块 + BlockEntity** | `startup_scripts/src/item/vehicle_deployer_block.js`<br>`server_scripts/sbw_vehicle/block_main.js` | `block/VehicleDeployerBlock.java`<br>`block/VehicleDeployerBlockEntity.java` |
| **载具部署台 GUI** | `startup_scripts/src/blocks/vehicle_deployer/gui.js` | `gui/vehicle_deployer/DeployerMenu.java`<br>`gui/vehicle_deployer/DeployerScreen.java` |
| **载具数据库加载器** | `server_scripts/sbw_vehicle/tools/database.js` | `data/VehicleDataLoader.java`<br>`data/VehicleDatabase.java` |
| **弹药类型映射** | `kubejs/data/sbw_vehicle_db/_ammo_types.json` | `data/AmmoTypeRegistry.java` |
| **JSON → NBT 转换** | `server_scripts/sbw_vehicle/tools/nbt.js` | `util/JsonToNBTConverter.java` |
| **载具部署（summon）** | `server_scripts/sbw_vehicle/deploy.js` | `deploy/VehicleDeployer.java` |
| **死亡事件（反查部署台）** | `server_scripts/sbw_vehicle/main.js` (EntityEvents.death) | `event/VehicleDeathHandler.java` |
| **服务器生命周期** | `server_scripts/sbw_vehicle/main.js` (ServerEvents.loaded/unloaded) | `event/ServerLifecycleHandler.java` |
| **数据文件** | `kubejs/data/sbw_vehicle_db/*.json` | `resources/data/<modid>/sbw_vehicle_db/*.json` |

### 1.2 不迁移，保持 KubeJS

| 模块 | 原因 |
|------|------|
| `module_manager/` | 轻量模块开关，KubeJS 足够 |
| `profession/` | 职业系统，和 KubeJS 物品紧密耦合 |
| `team/` + 队伍选择器物品 | 简单的物品交互 |
| `team_revive/` | 复活券系统 |
| `spawn_compass/` | 出生点指南针 |
| `blast_resistance/` | 方块属性修改（纯配方案） |
| `naval_balance_block_properties.js` | 方块属性修改 |
| `taov_returned_autocannon.js` | TaCZ 枪械相关 |
| `taov_returned_repair_parts.js` | 修复部件 |

---

## 二、项目结构

### 2.1 建议 Mod 信息

```
Mod ID:     sbwvehiclesys （或你喜欢的短 ID）
Mod 名称:   SBW Vehicle System
运行时名称: sbw_vehicle_system （包名用这个）
```

### 2.2 完整包结构

```
com/yourmod/sbw_vehicle_system/
├── SbwVehicleSystem.java                  // @Mod 主类
├── SbwVehicleSystemNetworking.java        // SimpleChannel 注册
│
├── registry/
│   ├── ModBlocks.java                     // 方块注册（DEFERRED）
│   ├── ModBlockEntities.java              // BlockEntity 注册
│   └── ModMenuTypes.java                  // MenuType 注册
│
├── block/
│   ├── ammo_crate/
│   │   ├── AmmoCrateBlock.java            // 方块行为
│   │   └── AmmoCrateBlockEntity.java      // BE + Tick + 补给逻辑
│   └── vehicle_deployer/
│       ├── VehicleDeployerBlock.java      // 方块行为
│       └── VehicleDeployerBlockEntity.java // BE + Tick + 部署逻辑
│
├── gui/
│   ├── ammo_station/
│   │   ├── AmmoStationMenu.java           // 容器（服务端）
│   │   ├── AmmoStationScreen.java         // 渲染（客户端）
│   │   └── AmmoStationData.java           // 数据包载荷
│   └── vehicle_deployer/
│       ├── DeployerMenu.java
│       ├── DeployerScreen.java
│       └── DeployerData.java
│
├── data/
│   ├── VehicleDataLoader.java             // 资源加载（_registry.json → 所有车辆）
│   ├── VehicleDatabase.java               // 运行时数据库（byId / byCategory 索引）
│   └── AmmoTypeRegistry.java              // 弹药类型短名 ↔ 完整 ID 映射
│
├── network/
│   ├── C2SSaveAmmoConfig.java             // 保存弹药配置（C2S）
│   ├── C2SSaveDeployerConfig.java         // 保存部署配置（C2S）
│   └── C2STriggerDeploy.java             // 触发立即部署（C2S）
│
├── event/
│   ├── ServerLifecycleHandler.java        // 服务端启动/关闭
│   └── VehicleDeathHandler.java           // 载具死亡反查部署台
│
├── deploy/
│   └── VehicleDeployerHelper.java         // summon 载具 + NBT 合并
│
└── util/
    ├── JsonToNBTConverter.java            // JSON 对象 → CompoundTag（替代 nbt.js 的 toNBT）
    └── ModLogger.java                     // 统一日志前缀
```

---

## 三、方块 ID 命名约定

使用新 ID 与现有 KubeJS 方块 ID 共存：

| 功能 | KubeJS 旧 ID | Java 新 ID |
|------|-------------|-----------|
| 弹药补给站 | `kubejs:ammo_crate` | `sbwvehiclesys:ammo_station` |
| 载具部署台 | `kubejs:vehicle_deployer` | `sbwvehiclesys:vehicle_deployer` |

**共存方式**：旧方块保留不动，新方块用 `/give` 获取测试。全部验证通过后再考虑是否需要将旧方块替换。

---

## 四、数据文件迁移

### 4.1 原路径（KubeJS 数据包）

```
kubejs/data/sbw_vehicle_db/
├── _registry.json                  ← 注册文件（含分类和文件列表）
├── _ammo_types.json                ← 弹药类型定义
├── main_battle_tank/               ← 分类目录
│   └── superbwarfare--t_90a.json
├── infantry_fighting_vehicle/
│   ├── superbwarfare--bmp_2.json
│   └── ...
├── aircraft/
│   ├── superbwarfare--a_10a.json
│   └── ...
├── artillery/
├── air_defense/
├── defense_turret/
├── drone/
├── helicopter/
├── naval/
├── utility_vehicle/
└── guide.md
```

### 4.2 迁移后路径（Java Mod）

```
src/main/resources/
└── data/
    └── sbwvehiclesys/
        └── sbw_vehicle_db/
            ├── _registry.json
            ├── _ammo_types.json
            ├── main_battle_tank/
            ├── infantry_fighting_vehicle/
            ├── aircraft/
            ├── artillery/
            ├── air_defense/
            ├── defense_turret/
            ├── drone/
            ├── helicopter/
            ├── naval/
            ├── utility_vehicle/
            └── ...（直接复制所有 JSON，内容不变）
```

### 4.3 加载方式

```java
// VehicleDataLoader.java
// 在 ServerLifecycleHandler 中调用
public class VehicleDataLoader {
    public static VehicleDatabase load(ResourceManager manager) {
        // 1. 读 _registry.json
        ResourceLocation registryPath = ResourceLocation.fromNamespaceAndPath(
            "sbwvehiclesys", "sbw_vehicle_db/_registry.json"
        );
        // 2. 遍历 categories → files
        // 3. 读每辆载具的 JSON
        // 4. 构建 byId / byCategory 索引
        // 5. 返回 VehicleDatabase 实例
    }
}
```

---

## 五、核心技术实现对照

### 5.1 方块注册（替代 startup_scripts block registry）

**KubeJS 版（删除前保留）**：
```javascript
// ammo_crate_block.js
StartupEvents.registry('block', event => {
  event.create('ammo_crate')
    .blockEntity(info => { info.serverTicking(); info.tickFrequency(20) })
})
```

**Java 版**：
```java
// ModBlocks.java
public static final DeferredRegister<Block> BLOCKS =
    DeferredRegister.create(Registries.BLOCK, MODID);

public static final Supplier<Block> AMMO_STATION = BLOCKS.register("ammo_station",
    () -> new AmmoCrateBlock(BlockBehaviour.Properties.of()
        .strength(2.0f, 6.0f)
        .sound(SoundType.WOOD)
        .noLootTable()
        .noOcclusion()
    )
);

// AmmoCrateBlock.java
public class AmmoCrateBlock extends BaseEntityBlock {
    @Override
    public BlockEntity newBlockEntity(BlockPos pos, BlockState state) {
        return new AmmoCrateBlockEntity(pos, state);
    }

    @Override
    public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) {
        return level.isClientSide ? null
            : createTickerHelper(type, ModBlockEntities.AMMO_STATION.get(), AmmoCrateBlockEntity::tick);
    }
}
```

### 5.2 BlockEntity + Tick（替代 BlockEvents.blockEntityTick）

**KubeJS 版**：
```javascript
BlockEvents.blockEntityTick('kubejs:ammo_crate', event => {
  if (event.level.isClientSide()) return
  // ... 补给逻辑 ...
})
```

**Java 版**：
```java
// AmmoCrateBlockEntity.java
public class AmmoCrateBlockEntity extends BlockEntity {
    private AmmoStationConfig config;
    private long cooldownEnd;
    private Map<String, Long> vehicleTimers = new HashMap<>();

    public AmmoCrateBlockEntity(BlockPos pos, BlockState state) {
        super(ModBlockEntities.AMMO_STATION.get(), pos, state);
    }

    public static void tick(Level level, BlockPos pos, BlockState state, AmmoCrateBlockEntity be) {
        // 每 tick 调用（tickFrequency 在注册时控制）
        if (level.getGameTime() % 20 != 0) return; // 每 20 tick 执行
        be.executeReplenish();
    }

    private void executeReplenish() {
        // ← 搬 ammo_replenish/main.js 的 executeStationReplenish() 逻辑
        //   包括：读取配置 → 检查冷却 → AABB扫描 → 停留计时 → 补给
    }

    @Override
    protected void saveAdditional(CompoundTag tag) {
        super.saveAdditional(tag);
        tag.putString("StationConfig", configToJson(config));
        tag.putLong("CooldownEnd", cooldownEnd);
        tag.putString("VehicleTimers", timersToJson(vehicleTimers));
    }

    @Override
    public void load(CompoundTag tag) {
        super.load(tag);
        config = jsonToConfig(tag.getString("StationConfig"));
        cooldownEnd = tag.getLong("CooldownEnd");
        vehicleTimers = jsonToTimers(tag.getString("VehicleTimers"));
    }
}
```

### 5.3 GUI（替代 LDLib2 UI）

**不再使用 LDLib2**，使用 Minecraft Forge 标准 `AbstractContainerMenu` + `AbstractContainerScreen`。

**关键映射**：

| LDLib2 组件 | Minecraft 对应 |
|-------------|---------------|
| `Label().setText(...)` | `GuiGraphics.drawString(font, text, x, y, color)` |
| `TextField().setNumbersOnlyInt(...)` | `EditBox(font, x, y, width, height)` + `setFilter(Pattern.compile("\\d*").asPredicate())` |
| `Button().setText(...).setOnServerClick(...)` | `Button.builder(text, onPress).bounds(x, y, w, h).build()` |
| `TabView().addTab(tab, page)` | 手动：`Button[] tabs` + `int currentTab` + `switch` 渲染不同区域 |
| `Selector().setCandidates(list)` | `EditBox` 手动补全，或 `Button` 列表弹出 |
| `InventorySlots()` | `addSlot(new Slot(inventory, slot, x, y))` |
| `UIElement().lss('width', 270)` | 在 `renderBg()` 中用固定坐标布局 |
| `DataBinding (C2S)` | **SimpleChannel 数据包** |

### 5.4 网络通信（替代 LDLib2 C2S DataBinding）

```java
// SbwVehicleSystemNetworking.java
public class SbwVehicleSystemNetworking {
    private static final String PROTOCOL_VERSION = "1";
    public static final SimpleChannel CHANNEL = NetworkRegistry.newSimpleChannel(
        ResourceLocation.fromNamespaceAndPath(MODID, "main"),
        () -> PROTOCOL_VERSION,
        PROTOCOL_VERSION::equals,
        PROTOCOL_VERSION::equals
    );

    private static int id = 0;

    public static void register() {
        CHANNEL.registerMessage(id++, C2SSaveAmmoConfig.class,
            C2SSaveAmmoConfig::encode, C2SSaveAmmoConfig::decode, C2SSaveAmmoConfig::handle);
        CHANNEL.registerMessage(id++, C2SSaveDeployerConfig.class,
            C2SSaveDeployerConfig::encode, C2SSaveDeployerConfig::decode, C2SSaveDeployerConfig::handle);
        CHANNEL.registerMessage(id++, C2STriggerDeploy.class,
            C2STriggerDeploy::encode, C2STriggerDeploy::decode, C2STriggerDeploy::handle);
    }
}
```

```java
// C2SSaveAmmoConfig.java（示例）
public class C2SSaveAmmoConfig {
    private final BlockPos pos;
    private final int scanRange;
    private final int cooldown;
    private final int enterDelay;
    private final Map<String, Integer> slots;

    public C2SSaveAmmoConfig(BlockPos pos, int scanRange, int cooldown, int enterDelay, Map<String, Integer> slots) {
        this.pos = pos; this.scanRange = scanRange; this.cooldown = cooldown;
        this.enterDelay = enterDelay; this.slots = slots;
    }

    public void encode(FriendlyByteBuf buf) {
        buf.writeBlockPos(pos);
        buf.writeInt(scanRange); buf.writeInt(cooldown); buf.writeInt(enterDelay);
        buf.writeMap(slots, FriendlyByteBuf::writeUtf, FriendlyByteBuf::writeInt);
    }

    public static C2SSaveAmmoConfig decode(FriendlyByteBuf buf) {
        return new C2SSaveAmmoConfig(
            buf.readBlockPos(), buf.readInt(), buf.readInt(), buf.readInt(),
            buf.readMap(FriendlyByteBuf::readUtf, FriendlyByteBuf::readInt)
        );
    }

    public void handle(Supplier<NetworkEvent.Context> ctx) {
        ctx.get().enqueueWork(() -> {
            var be = ctx.get().getSender().level().getBlockEntity(pos);
            if (be instanceof AmmoCrateBlockEntity station) {
                station.applyConfig(scanRange, cooldown, enterDelay, slots);
            }
        });
        ctx.get().setPacketHandled(true);
    }
}
```

### 5.5 载具部署（替代 deploy.js）

```java
// VehicleDeployerHelper.java
public class VehicleDeployerHelper {
    public static void spawnVehicle(ServerLevel level, BlockPos deployerPos, CompoundTag pd) {
        String vehicleType = pd.getString("vehicleType");

        // 1. 从数据库拿 nbtTemplate
        VehicleDatabase db = VehicleDatabase.getInstance();
        CompoundTag nbt = db.getNbtTemplate(vehicleType);
        if (nbt == null) nbt = new CompoundTag();

        // 2. 叠加 Rotation
        double ox = pd.getDouble("offsetX"), oy = pd.getDouble("offsetY"), oz = pd.getDouble("offsetZ");
        float yaw = pd.getFloat("yaw"), pitch = pd.getFloat("pitch");
        double x = deployerPos.getX() + ox + 0.5, y = deployerPos.getY() + oy, z = deployerPos.getZ() + oz + 0.5;
        nbt.putFloat("Rotation", yaw); // 或 ListTag

        // 3. 叠加 Tags
        String tag = "sbw_deploy_" + deployerPos.getX() + "_" + deployerPos.getY() + "_" + deployerPos.getZ();
        nbt.putString("Tags", tag);

        // 4. 叠加用户 deployNBT
        String userNbtStr = pd.getString("deployNBT");
        if (!userNbtStr.isEmpty() && !"{}".equals(userNbtStr)) {
            nbt.merge(JsonToNBTConverter.parse(userNbtStr));
        }

        // 5. /summon 实现方式一：使用命令
        level.getServer().getCommands().performPrefixedCommand(
            level.getServer().createCommandSourceStack(),
            "summon " + vehicleType + " " + x + " " + y + " " + z + " " + nbt
        );

        // 6. 1 tick 后捕获 UUID 写回方块
        level.getServer().execute(() -> {
            // 遍历实体匹配 tag，写入 deployedUUID
        });
    }
}
```

### 5.6 死亡事件（替代 EntityEvents.death）

```java
// VehicleDeathHandler.java
@Mod.EventBusSubscriber(modid = MODID)
public class VehicleDeathHandler {
    @SubscribeEvent
    public static void onEntityDeath(LivingDeathEvent event) {
        var entity = event.getEntity();
        // 检查标签 sbw_deploy_ 开头
        for (String tag : entity.getTags()) {
            if (tag.startsWith("sbw_deploy_")) {
                handleDeployedVehicleDeath(entity, tag);
                break;
            }
        }
    }

    private static void handleDeployedVehicleDeath(LivingEntity entity, String tag) {
        // 解析坐标 → 找到部署台 → 清 UUID + 设置冷却
        String[] parts = tag.split("_");
        int bx = Integer.parseInt(parts[2]);
        int by = Integer.parseInt(parts[3]);
        int bz = Integer.parseInt(parts[4]);
        // ...
    }
}
```

---

## 六、迁移步骤（建议按顺序执行）

### Phase 1：基础骨架
- [ ] 创建 NeoForge MDK 项目
- [ ] 配置 `mods.toml`（modid: `sbwvehiclesys`）
- [ ] 创建 `ModBlocks`、`ModBlockEntities`、`ModMenuTypes` 注册类
- [ ] 注册两个方块（新 ID），跑进游戏验证 `/give` 可获取

### Phase 2：数据层
- [ ] 复制所有 `sbw_vehicle_db/` JSON 到 resources 目录
- [ ] 实现 `VehicleDataLoader.java`（ResourceManager 读取）
- [ ] 实现 `VehicleDatabase.java`（运行时内存缓存）
- [ ] 实现 `AmmoTypeRegistry.java`（弹药映射）
- [ ] 实现 `JsonToNBTConverter.java`（替代 nbt.js 的 `toNBT`）
- [ ] 实现 `ServerLifecycleHandler.java`（启动时加载数据库）

### Phase 3：BlockEntity + Tick 逻辑
- [ ] 实现 `VehicleDeployerBlock.java` + `VehicleDeployerBlockEntity.java`
  - [ ] `ensurePD()` 初始化逻辑（替代 block_main.js 的 `ensurePD`）
  - [ ] Tick 生命周期（替代 block_main.js 的 `BlockEvents.blockEntityTick`）
  - [ ] `PendingDeploy` 标记处理
- [ ] 实现 `AmmoCrateBlock.java` + `AmmoCrateBlockEntity.java`
  - [ ] 默认配置写入（替代 ammo_replenish/main.js 的 `BlockEvents.placed`）
  - [ ] Tick 补给逻辑（替代 `executeStationReplenish` 全部）
- [ ] 实现 `VehicleDeployerHelper.java`（替代 deploy.js 的 `spawnVehicleForBlock`）
- [ ] 实现 `VehicleDeathHandler.java`

### Phase 4：网络
- [ ] 注册 `SimpleChannel`
- [ ] 实现 `C2SSaveAmmoConfig.java`
- [ ] 实现 `C2SSaveDeployerConfig.java`
- [ ] 实现 `C2STriggerDeploy.java`

### Phase 5：GUI
- [ ] 弹药补给站 GUI：`AmmoStationMenu.java` + `AmmoStationScreen.java`
  - [ ] 基础设置页（扫描范围 + 冷却 + 驶入等待）
  - [ ] 分页弹药配置（炮弹 / 小口径 / 枪火箭 / 导弹航弹 / MCSP上下）
  - [ ] 保存 + 重置按钮
- [ ] 载具部署台 GUI：`DeployerMenu.java` + `DeployerScreen.java`
  - [ ] 载具选择页（类别选择器 + 载具选择器 + ID 输入）
  - [ ] 基础参数页（重生延迟 / 自动重生 / 带弹药）
  - [ ] 坐标偏移页（XYZ + Yaw + Pitch）
  - [ ] NBT 简单模式页（Energy / Health / Invulnerable / Decoy）
  - [ ] NBT 高级模式页（原始 JSON 编辑）
  - [ ] 保存 + 重置 + 立即部署按钮

### Phase 6：测试
- [ ] 单机测试：两个方块的放置 + GUI 配置 + 保存 + 部署/补给
- [ ] 单机测试：载具死亡后自动重生
- [ ] 专有服务端测试：确认无客户端报错
- [ ] 专有服务端测试：多人同时操作
- [ ] 重启测试：持久化数据正确恢复

---

## 七、关键避坑点

### 7.1 方块配置持久化

KubeJS 用的是 `block.entity.persistentData`（这是 KubeJS 加的 API）。

**Java 中不要用 persistentData**，而是：

```java
// 在 BlockEntity 中重写 saveAdditional / load
@Override
protected void saveAdditional(CompoundTag tag) {
    super.saveAdditional(tag);
    // 所有自定义数据写到这里
    tag.putString("StationConfig", configJson);
}

@Override
public void load(CompoundTag tag) {
    super.load(tag);
    // 从这里读取
    configJson = tag.getString("StationConfig");
}
```

### 7.2 右键打开 GUI

KubeJS 用 `LDLib2UIFactory.openBlockUI()`。

**Java 中**：

```java
// VehicleDeployerBlock.java
@Override
public InteractionResult useWithoutItem(BlockState state, Level level, BlockPos pos, Player player, BlockHitResult hit) {
    if (!level.isClientSide && player instanceof ServerPlayer serverPlayer) {
        // 读取数据库 → 写入缓存 → 打开 Menu
        var be = (VehicleDeployerBlockEntity) level.getBlockEntity(pos);
        serverPlayer.openMenu(be);  // BlockEntity 实现 MenuProvider
    }
    return InteractionResult.SUCCESS;
}
```

### 7.3 BlockEntity 的 serverTicking

KubeJS 用 `info.serverTicking()` + `info.tickFrequency(20)`。

**Java 中**：
```java
// ModBlockEntities.java 注册时不控制 tick 频率
// tick 频率在 AmmoCrateBlockEntity.tick() 里自己控制：
public static void tick(Level level, BlockPos pos, BlockState state, AmmoCrateBlockEntity be) {
    if (level.getGameTime() % 20 != 0) return;  // 每 20 tick
    be.executeReplenish();
}
```

### 7.4 NBT 操作差异

| KubeJS | Java |
|--------|------|
| `entity.nbt` | `entity.serializeNBT()` / `CompoundTag` 手动构建 |
| `nbt.getString('key')` | `tag.getString("key")` |
| `nbt.putString('key', val)` | `tag.putString("key", val)` |
| `nbt.getCompound('Inventory')` | `tag.getCompound("Inventory")` |
| `nbt.getList('Items', 10)` | `tag.getList("Items", Tag.TAG_COMPOUND)` |
| `server.runCommandSilent('data merge entity ...')` | `entity.deserializeNBT(tag)` 或直接修改 NBT 后 `EntityLoader.update()` |
| `server.runCommandSilent('summon ... ' + nbt.toString())` | `level.getServer().getCommands().performPrefixedCommand(...)` 或 `EntityType.loadEntityRecursive()` |

### 7.5 Rhino 遗留问题（不复存在）

原本 KubeJS + Rhino 的限制在 Java 中全部不存在：
- ✅ C2S 网络通信：SimpleChannel 稳定可靠
- ✅ Java 类引用：直接 `import`，不需要 `Java.loadClass()`
- ✅ 跨文件函数可见性：`public` / `private` 控制
- ✅ 服务端/客户端分离：`@OnlyIn(Dist.CLIENT)` + 物理分包

---

## 八、共存与替换策略

### 8.1 并行运行规划

```
mods/
├── superbwarfare-1.21.1-xxx.jar        ← SBW 本体（不变）
├── kubejs-1.21.1-xxx.jar              ← KubeJS（保留，运行其他脚本）
├── sbwvehiclesys-1.21.1-xxx.jar       ← 新的 Java 模组
└── ...
```

KubeJS 原有的 `kubejs:ammo_crate` 和 `kubejs:vehicle_deployer` 方块继续存在，不会消失。

### 8.2 替换旧方块（可选，留到最终阶段）

```java
// 迁移工具命令
@Mod.EventBusSubscriber
public class MigrationCommands {
    @SubscribeEvent
    public static void registerCommands(RegisterCommandsEvent event) {
        event.getDispatcher().register(
            Commands.literal("sbw_migrate")
                .requires(s -> s.hasPermission(2))
                .then(Commands.literal("deployer")
                    .executes(ctx -> {
                        // 用新方块替换所有旧 deployer
                        ServerLevel level = ctx.getSource().getLevel();
                        // /fill ~-10 ~-10 ~-10 ~10 ~10 ~10 sbwvehiclesys:vehicle_deployer replace kubejs:vehicle_deployer
                        return 1;
                    })
                )
                .then(Commands.literal("ammo")
                    .executes(ctx -> {
                        // 用新方块替换所有旧 ammo_crate
                        return 1;
                    })
                )
        );
    }
}
```

### 8.3 清理计划（全部验证通过后）

1. 删除可选：`startup_scripts/src/item/ammo_crate_block.js`
2. 删除可选：`startup_scripts/src/item/vehicle_deployer_block.js`
3. 删除可选：`startup_scripts/src/blocks/ammo_crate/gui.js`
4. 删除可选：`startup_scripts/src/blocks/vehicle_deployer/gui.js`
5. 删除可选：`server_scripts/sbw_vehicle/` 下全部文件
6. 保留：数据文件（Java mod 已有，KubeJS 的不影响）

---

## 九、参考资源

- NeoForge 1.21.1 官方文档：[https://docs.neoforged.net/](https://docs.neoforged.net/)
- 原 KubeJS 代码（保留参考）：
  - `startup_scripts/src/blocks/ammo_crate/gui.js`
  - `startup_scripts/src/blocks/vehicle_deployer/gui.js`
  - `server_scripts/sbw_vehicle/block_main.js`
  - `server_scripts/sbw_vehicle/deploy.js`
  - `server_scripts/sbw_vehicle/main.js`
  - `server_scripts/sbw_vehicle/ammo_replenish/main.js`
  - `server_scripts/sbw_vehicle/ammo_replenish/a_config.js`
  - `server_scripts/sbw_vehicle/tools/database.js`
  - `server_scripts/sbw_vehicle/tools/nbt.js`
- 数据文件（直接复制）：
  - `kubejs/data/sbw_vehicle_db/`
