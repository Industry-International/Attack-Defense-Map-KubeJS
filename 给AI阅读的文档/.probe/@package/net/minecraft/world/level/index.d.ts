import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Codec, $Lifecycle, $Dynamic, $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $IgnoringClipContext } from "@package/me/muksc/tacztweaks/mixininterface/feature/raytracer";
import { $EntityType_, $MobCategory_, $EquipmentTable_, $MobCategory, $Entity, $EntityType, $LivingEntity, $EquipmentTable, $Mob } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource, $StringRepresentable$EnumCodec, $InclusiveRange_, $StringRepresentable, $InclusiveRange } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $LevelAccessor as $LevelAccessor$1 } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/super_glue";
import { $WorldViewMixin } from "@package/net/fabricmc/fabric/mixin/rendering/data";
import { $InteractionResult, $Difficulty_, $DifficultyInstance, $TickRateManager, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockGetterExtension, $ILevelReaderExtension, $IOwnedSpawner, $ILevelExtension, $IBlockAndTintGetterExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RequiredArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $StructureCheckResult, $StructureCheck, $StructureStart, $Structure, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $EntityTypeTest, $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $StructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $Item, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $BiomeManager$NoiseBiomeSource, $Biome, $BiomeManager, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $Abilities, $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelChunk, $StructureAccess, $BlockColumn, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $LevelData, $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $ExplosionAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $ExplosionAccessor, $ClipContextAccessor } from "@package/me/muksc/tacztweaks/mixin/accessor";
import { $CommandSource, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ModelDataManager, $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $LevelExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_sublevel_collision";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $EntityGetterKJS, $GameRulesKJS, $LevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $GameRulesIntRuleAccessor, $GameRulesAccessor } from "@package/net/fabricmc/fabric/mixin/gamerule";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";
import { $FabricBlockView } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $ClipContextExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $UUID_, $ArrayList, $Map, $List, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $LevelAccessor as $LevelAccessor$2 } from "@package/mod/chloeprime/gunsmithlib/mixin";
import { $ForcedChunkManager$TicketTracker } from "@package/net/neoforged/neoforge/common/world/chunk";
import { $LevelExtension as $LevelExtension$1 } from "@package/dev/engine_room/flywheel/impl/extension";
import { $Supplier_, $BiConsumer_, $Supplier, $Consumer_, $Predicate_, $Predicate, $BiConsumer, $Consumer, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $ServerLevel, $WorldGenRegion, $ChunkMap, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2IntOpenHashMap, $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder, $Direction_, $Direction, $HolderLookup, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Iterable, $Iterable_, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $WorldOptions, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $RuleKeyExtensions } from "@package/net/fabricmc/fabric/impl/gamerule";
import { $LoadedChunksCache } from "@package/net/fabricmc/fabric/impl/event/lifecycle";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Fireworks_, $FireworkExplosion_ } from "@package/net/minecraft/world/item/component";
import { $AbstractIterator } from "@package/com/google/common/collect";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $Stream } from "@package/java/util/stream";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CustomGameRuleCategory } from "@package/net/fabricmc/fabric/api/gamerule/v1";
import { $LevelReusedVectors } from "@package/dev/ryanhcode/sable/api/math";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $BlockViewMixin } from "@package/net/fabricmc/fabric/mixin/blockview";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource, $DamageSources, $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as levelgen from "@package/net/minecraft/world/level/levelgen";
export * as lighting from "@package/net/minecraft/world/level/lighting";
export * as block from "@package/net/minecraft/world/level/block";
export * as material from "@package/net/minecraft/world/level/material";
export * as portal from "@package/net/minecraft/world/level/portal";
export * as chunk from "@package/net/minecraft/world/level/chunk";
export * as biome from "@package/net/minecraft/world/level/biome";
export * as border from "@package/net/minecraft/world/level/border";
export * as entity from "@package/net/minecraft/world/level/entity";
export * as storage from "@package/net/minecraft/world/level/storage";
export * as gameevent from "@package/net/minecraft/world/level/gameevent";
export * as saveddata from "@package/net/minecraft/world/level/saveddata";
export * as pathfinder from "@package/net/minecraft/world/level/pathfinder";
export * as timers from "@package/net/minecraft/world/level/timers";
export * as dimension from "@package/net/minecraft/world/level/dimension";
export * as redstone from "@package/net/minecraft/world/level/redstone";
export * as validation from "@package/net/minecraft/world/level/validation";

declare module "@package/net/minecraft/world/level" {
    export class $EntityGetter {
    }
    export interface $EntityGetter extends $EntityGetterKJS {
        getEntities(arg0: $Entity, arg1: $AABB_): $List<$Entity>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        localvar$zeo000$openpartiesandclaims$onGetEntityCollisions(arg0: $List_<any>, arg1: $Entity, arg2: $AABB_): $List<any>;
        handler$zeo000$openpartiesandclaims$onGetEntitiesOfClass(arg0: $Class<any>, arg1: $AABB_, arg2: $Predicate_<any>, arg3: $CallbackInfoReturnable<any>): void;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity>): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number): T;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getPlayerByUUID(arg0: $UUID_): $Player;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
    }
    export class $GameRules$IntegerValue extends $GameRules$Value<$GameRules$IntegerValue> implements $GameRulesIntRuleAccessor {
        get(): number;
        set(arg0: number, arg1: $MinecraftServer): void;
        copy(): $GameRules$IntegerValue;
        static create(arg0: number, arg1: $BiConsumer_<$MinecraftServer, $GameRules$IntegerValue>): $GameRules$Type<$GameRules$IntegerValue>;
        static create(arg0: number): $GameRules$Type<$GameRules$IntegerValue>;
        static create(arg0: number, arg1: number, arg2: number, arg3: $BiConsumer_<$MinecraftServer, $GameRules$IntegerValue>): $GameRules$Type<$GameRules$IntegerValue>;
        setFrom(arg0: $GameRules$IntegerValue, arg1: $MinecraftServer): void;
        getSelf(): $GameRules$IntegerValue;
        tryDeserialize(arg0: string): boolean;
        getValue(): number;
        setValue(arg0: number): void;
        type: $GameRules$Type<$GameRules$IntegerValue>;
        constructor(arg0: $GameRules$Type<$GameRules$IntegerValue>, arg1: number);
        get self(): $GameRules$IntegerValue;
    }
    export class $LightLayer extends $Enum<$LightLayer> {
        static values(): $LightLayer[];
        static valueOf(arg0: string): $LightLayer;
        static SKY: $LightLayer;
        static BLOCK: $LightLayer;
    }
    /**
     * Values that may be interpreted as {@link $LightLayer}.
     */
    export type $LightLayer_ = "sky" | "block";
    export class $GameType extends $Enum<$GameType> implements $StringRepresentable {
        getName(): string;
        static values(): $GameType[];
        static valueOf(arg0: string): $GameType;
        getId(): number;
        static byName(arg0: string, arg1: $GameType_): $GameType;
        static byName(arg0: string): $GameType;
        getSerializedName(): string;
        getShortDisplayName(): $Component;
        updatePlayerAbilities(arg0: $Abilities): void;
        isCreative(): boolean;
        isSurvival(): boolean;
        static byNullableId(arg0: number): $GameType;
        static getNullableId(arg0: $GameType_): number;
        getLongDisplayName(): $Component;
        isBlockPlacingRestricted(): boolean;
        static byId(arg0: number): $GameType;
        getRemappedEnumConstantName(): string;
        static SURVIVAL: $GameType;
        static SPECTATOR: $GameType;
        static CODEC: $StringRepresentable$EnumCodec<$GameType>;
        static CREATIVE: $GameType;
        static ADVENTURE: $GameType;
        static DEFAULT_MODE: $GameType;
        get id(): number;
        get serializedName(): string;
        get shortDisplayName(): $Component;
        get creative(): boolean;
        get survival(): boolean;
        get longDisplayName(): $Component;
        get blockPlacingRestricted(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GameType}.
     */
    export type $GameType_ = "survival" | "creative" | "adventure" | "spectator";
    export class $SignalGetter {
        static DIRECTIONS: $Direction[];
    }
    export interface $SignalGetter extends $BlockGetter {
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        getDirectSignalTo(arg0: $BlockPos_): number;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
    }
    export class $LevelAccessor {
    }
    export interface $LevelAccessor extends $CommonLevelAccessor, $LevelTimeAccess {
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        hasChunk(arg0: number, arg1: number): boolean;
        dayTime(): number;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Vec3_, arg2: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        getServer(): $MinecraftServer;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        getLevelData(): $LevelData;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number, arg3: $TickPriority_): void;
        nextSubTickCount(): number;
        getDifficulty(): $Difficulty;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getChunkSource(): $ChunkSource;
        get random(): $RandomSource;
        get server(): $MinecraftServer;
        get levelData(): $LevelData;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get difficulty(): $Difficulty;
        get chunkSource(): $ChunkSource;
    }
    export class $NaturalSpawner$SpawnState {
        getMobCategoryCounts(): $Object2IntMap<$MobCategory>;
        getSpawnableChunkCount(): number;
        canSpawnForCategory(arg0: $MobCategory_, arg1: $ChunkPos): boolean;
        constructor(arg0: number, arg1: $Object2IntOpenHashMap<$MobCategory_>, arg2: $PotentialCalculator, arg3: $LocalMobCapCalculator);
        get mobCategoryCounts(): $Object2IntMap<$MobCategory>;
        get spawnableChunkCount(): number;
    }
    export class $ServerLevelAccessor {
    }
    export interface $ServerLevelAccessor extends $LevelAccessor {
        getLevel(): $ServerLevel;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        get level(): $ServerLevel;
    }
    export class $WorldDataConfiguration extends $Record {
        dataPacks(): $DataPackConfig;
        enabledFeatures(): $FeatureFlagSet;
        expandFeatures(arg0: $FeatureFlagSet): $WorldDataConfiguration;
        static CODEC: $Codec<$WorldDataConfiguration>;
        static ENABLED_FEATURES_ID: string;
        static DEFAULT: $WorldDataConfiguration;
        constructor(arg0: $DataPackConfig, arg1: $FeatureFlagSet);
    }
    export class $StructureManager {
        addReference(arg0: $StructureStart): void;
        registryAccess(): $RegistryAccess;
        startsForStructure(arg0: $SectionPos, arg1: $Structure_): $List<$StructureStart>;
        startsForStructure(arg0: $ChunkPos, arg1: $Predicate_<$Structure>): $List<$StructureStart>;
        getAllStructuresAt(arg0: $BlockPos_): $Map<$Structure, $LongSet>;
        getStartForStructure(arg0: $SectionPos, arg1: $Structure_, arg2: $StructureAccess): $StructureStart;
        setStartForStructure(arg0: $SectionPos, arg1: $Structure_, arg2: $StructureStart, arg3: $StructureAccess): void;
        addReferenceForStructure(arg0: $SectionPos, arg1: $Structure_, arg2: number, arg3: $StructureAccess): void;
        getStructureWithPieceAt(arg0: $BlockPos_, arg1: $Predicate_<$Holder<$Structure>>): $StructureStart;
        getStructureWithPieceAt(arg0: $BlockPos_, arg1: $HolderSet_<$Structure>): $StructureStart;
        getStructureWithPieceAt(arg0: $BlockPos_, arg1: $Structure_): $StructureStart;
        getStructureWithPieceAt(arg0: $BlockPos_, arg1: $TagKey_<$Structure>): $StructureStart;
        structureHasPieceAt(arg0: $BlockPos_, arg1: $StructureStart): boolean;
        fillStartsForStructure(arg0: $Structure_, arg1: $LongSet, arg2: $Consumer_<$StructureStart>): void;
        shouldGenerateStructures(): boolean;
        checkStructurePresence(arg0: $ChunkPos, arg1: $Structure_, arg2: $StructurePlacement, arg3: boolean): $StructureCheckResult;
        getStructureAt(arg0: $BlockPos_, arg1: $Structure_): $StructureStart;
        hasAnyStructureAt(arg0: $BlockPos_): boolean;
        forWorldGenRegion(arg0: $WorldGenRegion): $StructureManager;
        constructor(arg0: $LevelAccessor, arg1: $WorldOptions, arg2: $StructureCheck);
    }
    export class $PotentialCalculator$PointCharge {
    }
    export class $GrassColor {
        static get(arg0: number, arg1: number): number;
        static init(arg0: number[]): void;
        static getDefaultColor(): number;
        static pixels: number[];
        constructor();
        static get defaultColor(): number;
    }
    export class $GameRules implements $GameRulesAccessor, $GameRulesKJS {
        getBoolean(arg0: $GameRules$Key<$GameRules$BooleanValue>): boolean;
        getInt(arg0: $GameRules$Key<$GameRules$IntegerValue>): number;
        static register<T extends $GameRules$Value<T>>(arg0: string, arg1: $GameRules$Category_, arg2: $GameRules$Type<T>): $GameRules$Key<T>;
        copy(): $GameRules;
        createTag(): $CompoundTag;
        getRule<T extends $GameRules$Value<T>>(arg0: $GameRules$Key<T>): T;
        static visitGameRuleTypes(arg0: $GameRules$GameRuleTypeVisitor): void;
        static getRuleTypes$fabric_game_rule_api_v1_$md$9aa1a5$0(): $Map<any, any>;
        set(rule: string, value: string): void;
        get(rule: string): $GameRules$Value<any>;
        assignFrom(arg0: $GameRules, arg1: $MinecraftServer): void;
        kjs$getBoolean(rule: string): boolean;
        kjs$getString(rule: string): string;
        kjs$getInt(rule: string): number;
        static RULE_MAX_COMMAND_CHAIN_LENGTH: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_DROWNING_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_LOGADMINCOMMANDS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_REDUCEDDEBUGINFO: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_WEATHER_CYCLE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FORGIVE_DEAD_PLAYERS: $GameRules$Key<$GameRules$BooleanValue>;
        static DEFAULT_RANDOM_TICK_SPEED: number;
        static RULE_TNT_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_NATURAL_REGENERATION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DISABLE_ELYTRA_MOVEMENT_CHECK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_COMMAND_MODIFICATION_BLOCK_LIMIT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SPAWN_CHUNK_RADIUS: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_ANNOUNCE_ADVANCEMENTS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_COMMANDBLOCKOUTPUT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOMOBSPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PROJECTILESCANBREAKBLOCKS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DAYLIGHT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DISABLE_RAIDS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FIRE_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_SLEEPING_PERCENTAGE: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_WATER_SOURCE_CONVERSION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOBLOCKDROPS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_BLOCK_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SPECTATORSGENERATECHUNKS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_VINES_SPREAD: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_IMMEDIATE_RESPAWN: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOENTITYDROPS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_KEEPINVENTORY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_RANDOMTICKING: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_DO_TRADER_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOMOBLOOT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_GLOBAL_SOUND_EVENTS: $GameRules$Key<$GameRules$BooleanValue>;
        static LOGGER: $Logger;
        static RULE_DO_PATROL_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_NETHER_PORTAL_DEFAULT_DELAY: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_FALL_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOINSOMNIA: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MOB_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_LIMITED_CRAFTING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_WARDEN_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOFIRETICK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MOBGRIEFING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_NETHER_PORTAL_CREATIVE_DELAY: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SHOWDEATHMESSAGES: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MAX_ENTITY_CRAMMING: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SPAWN_RADIUS: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_UNIVERSAL_ANGER: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FREEZE_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SNOW_ACCUMULATION_HEIGHT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_LAVA_SOURCE_CONVERSION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SENDCOMMANDFEEDBACK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MAX_COMMAND_FORK_COUNT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_ENDER_PEARLS_VANISH_ON_DEATH: $GameRules$Key<$GameRules$BooleanValue>;
        constructor();
        constructor(arg0: $DynamicLike<never>);
        static get ruleTypes$fabric_game_rule_api_v1_$md$9aa1a5$0(): $Map<any, any>;
    }
    export class $ChunkPos {
        static hash(arg0: number, arg1: number): number;
        static rangeClosed(arg0: $ChunkPos, arg1: $ChunkPos): $Stream<$ChunkPos>;
        static rangeClosed(arg0: $ChunkPos, arg1: number): $Stream<$ChunkPos>;
        static asLong(arg0: number, arg1: number): number;
        static asLong(arg0: $BlockPos_): number;
        static getX(arg0: number): number;
        toLong(): number;
        distanceSquared(arg0: number): number;
        distanceSquared(arg0: $ChunkPos): number;
        getMinBlockX(): number;
        getMinBlockZ(): number;
        static getZ(arg0: number): number;
        getMaxBlockZ(): number;
        getChessboardDistance(arg0: $ChunkPos): number;
        getChessboardDistance(arg0: number, arg1: number): number;
        getMiddleBlockPosition(arg0: number): $BlockPos;
        getMaxBlockX(): number;
        getRegionX(): number;
        getBlockAt(arg0: number, arg1: number, arg2: number): $BlockPos;
        getRegionZ(): number;
        getBlockZ(arg0: number): number;
        getBlockX(arg0: number): number;
        static minFromRegion(arg0: number, arg1: number): $ChunkPos;
        static maxFromRegion(arg0: number, arg1: number): $ChunkPos;
        getRegionLocalX(): number;
        getWorldPosition(): $BlockPos;
        getRegionLocalZ(): number;
        getMiddleBlockZ(): number;
        getMiddleBlockX(): number;
        static ZERO: $ChunkPos;
        static REGION_MAX_INDEX: number;
        static INVALID_CHUNK_POS: number;
        x: number;
        static REGION_SIZE: number;
        z: number;
        constructor(arg0: number);
        constructor(arg0: $BlockPos_);
        constructor(arg0: number, arg1: number);
        get minBlockX(): number;
        get minBlockZ(): number;
        get maxBlockZ(): number;
        get maxBlockX(): number;
        get regionX(): number;
        get regionZ(): number;
        get regionLocalX(): number;
        get worldPosition(): $BlockPos;
        get regionLocalZ(): number;
        get middleBlockZ(): number;
        get middleBlockX(): number;
    }
    export class $ColorResolver {
    }
    export interface $ColorResolver {
        getColor(arg0: $Biome_, arg1: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ColorResolver}.
     */
    export type $ColorResolver_ = ((arg0: $Biome, arg1: number, arg2: number) => number);
    export class $PotentialCalculator {
        addCharge(arg0: $BlockPos_, arg1: number): void;
        getPotentialEnergyChange(arg0: $BlockPos_, arg1: number): number;
        constructor();
    }
    export class $BlockGetter {
        static traverseBlocks<T, C>(arg0: $Vec3_, arg1: $Vec3_, arg2: C, arg3: $BiFunction_<C, $BlockPos, T>, arg4: $Function_<C, T>): T;
    }
    export interface $BlockGetter extends $LevelHeightAccessor, $IBlockGetterExtension, $FabricBlockView, $BlockViewMixin {
        handler$ibc000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getFluidState(arg0: $BlockPos_): $FluidState;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        get maxLightLevel(): number;
    }
    export class $NaturalSpawner$SpawnPredicate {
    }
    export interface $NaturalSpawner$SpawnPredicate {
        test(arg0: $EntityType_<never>, arg1: $BlockPos_, arg2: $ChunkAccess): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$SpawnPredicate}.
     */
    export type $NaturalSpawner$SpawnPredicate_ = ((arg0: $EntityType<never>, arg1: $BlockPos, arg2: $ChunkAccess) => boolean);
    export class $GameRules$Value<T extends $GameRules$Value<T>> {
        copy(): T;
        deserialize(arg0: string): void;
        serialize(): string;
        setFrom(arg0: T, arg1: $MinecraftServer): void;
        getSelf(): T;
        getCommandResult(): number;
        setFromArgument(arg0: $CommandContext<$CommandSourceStack>, arg1: string): void;
        updateFromArgument(arg0: $CommandContext<$CommandSourceStack>, arg1: string): void;
        onChanged(arg0: $MinecraftServer): void;
        type: $GameRules$Type<T>;
        constructor(arg0: $GameRules$Type<T>);
        get self(): T;
        get commandResult(): number;
    }
    export class $LevelSettings {
        static parse(arg0: $Dynamic<never>, arg1: $WorldDataConfiguration_): $LevelSettings;
        copy(): $LevelSettings;
        levelName(): string;
        withLifecycle(arg0: $Lifecycle): $LevelSettings;
        getLifecycle(): $Lifecycle;
        getDataConfiguration(): $WorldDataConfiguration;
        difficulty(): $Difficulty;
        gameType(): $GameType;
        allowCommands(): boolean;
        gameRules(): $GameRules;
        hardcore(): boolean;
        withDataConfiguration(arg0: $WorldDataConfiguration_): $LevelSettings;
        withGameType(arg0: $GameType_): $LevelSettings;
        withDifficulty(arg0: $Difficulty_): $LevelSettings;
        constructor(arg0: string, arg1: $GameType_, arg2: boolean, arg3: $Difficulty_, arg4: boolean, arg5: $GameRules, arg6: $WorldDataConfiguration_);
        constructor(arg0: string, arg1: $GameType_, arg2: boolean, arg3: $Difficulty_, arg4: boolean, arg5: $GameRules, arg6: $WorldDataConfiguration_, arg7: $Lifecycle);
        get lifecycle(): $Lifecycle;
        get dataConfiguration(): $WorldDataConfiguration;
    }
    export class $Explosion$BlockInteraction extends $Enum<$Explosion$BlockInteraction> {
        static values(): $Explosion$BlockInteraction[];
        static valueOf(arg0: string): $Explosion$BlockInteraction;
        static TRIGGER_BLOCK: $Explosion$BlockInteraction;
        static DESTROY_WITH_DECAY: $Explosion$BlockInteraction;
        static DESTROY: $Explosion$BlockInteraction;
        static KEEP: $Explosion$BlockInteraction;
    }
    /**
     * Values that may be interpreted as {@link $Explosion$BlockInteraction}.
     */
    export type $Explosion$BlockInteraction_ = "keep" | "destroy" | "destroy_with_decay" | "trigger_block";
    export class $GameRules$Key<T extends $GameRules$Value<T>> implements $RuleKeyExtensions {
        getId(): string;
        getCategory(): $GameRules$Category;
        getDescriptionId(): string;
        fabric_setCustomCategory(arg0: $CustomGameRuleCategory): void;
        fabric_getCustomCategory(): $CustomGameRuleCategory;
        id: string;
        constructor(arg0: string, arg1: $GameRules$Category_);
        get category(): $GameRules$Category;
        get descriptionId(): string;
    }
    export interface $Level extends RegistryMarked<RegistryTypes.DimensionTag, RegistryTypes.Dimension> {}
    export class $NaturalSpawner$AfterSpawnCallback {
    }
    export interface $NaturalSpawner$AfterSpawnCallback {
        run(arg0: $Mob, arg1: $ChunkAccess): void;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$AfterSpawnCallback}.
     */
    export type $NaturalSpawner$AfterSpawnCallback_ = ((arg0: $Mob, arg1: $ChunkAccess) => void);
    export class $LevelReader {
    }
    export interface $LevelReader extends $BlockAndTintGetter, $CollisionGetter, $SignalGetter, $BiomeManager$NoiseBiomeSource, $ILevelReaderExtension, $WorldViewMixin, $RenderAttachedBlockView {
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        /**
         * @deprecated
         */
        hasChunk(arg0: number, arg1: number): boolean;
        hasBiomes(): boolean;
        isWaterAt(arg0: $BlockPos_): boolean;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getMinBuildHeight(): number;
        containsAnyLiquid(arg0: $AABB_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        getHeight(): number;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        dimensionType(): $DimensionType;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        getSkyDarken(): number;
        getBiomeManager(): $BiomeManager;
        isClientSide(): boolean;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        get minBuildHeight(): number;
        get seaLevel(): number;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get clientSide(): boolean;
    }
    export class $LevelWriter {
    }
    export interface $LevelWriter {
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
    }
    export class $NaturalSpawner$ChunkGetter {
    }
    export interface $NaturalSpawner$ChunkGetter {
        query(arg0: number, arg1: $Consumer_<$LevelChunk>): void;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$ChunkGetter}.
     */
    export type $NaturalSpawner$ChunkGetter_ = ((arg0: number, arg1: $Consumer<$LevelChunk>) => void);
    export class $CommonLevelAccessor {
    }
    export interface $CommonLevelAccessor extends $EntityGetter, $LevelReader, $LevelSimulatedRW {
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
    }
    export class $LevelSimulatedRW {
    }
    export interface $LevelSimulatedRW extends $LevelSimulatedReader, $LevelWriter {
    }
    export class $GameRules$Type<T extends $GameRules$Value<T>> {
        createArgument(arg0: string): $RequiredArgumentBuilder<$CommandSourceStack, never>;
        callVisitor(arg0: $GameRules$GameRuleTypeVisitor, arg1: $GameRules$Key<T>): void;
        createRule(): T;
        argument: $Supplier<$ArgumentType<never>>;
        callback: $BiConsumer<$MinecraftServer, T>;
        constructor(arg0: $Supplier_<$ArgumentType<never>>, arg1: $Function_<$GameRules$Type<T>, T>, arg2: $BiConsumer_<$MinecraftServer, T>, arg3: $GameRules$VisitorCaller_<T>);
    }
    export class $EmptyBlockGetter extends $Enum<$EmptyBlockGetter> implements $BlockGetter {
        static values(): $EmptyBlockGetter[];
        static valueOf(arg0: string): $EmptyBlockGetter;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getMinBuildHeight(): number;
        getHeight(): number;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        handler$ibc000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionIndex(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        static INSTANCE: $EmptyBlockGetter;
        get minBuildHeight(): number;
        get height(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get minSection(): number;
        get maxSection(): number;
    }
    /**
     * Values that may be interpreted as {@link $EmptyBlockGetter}.
     */
    export type $EmptyBlockGetter_ = "instance";
    export class $ExplosionDamageCalculator {
        shouldBlockExplode(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: number): boolean;
        getBlockExplosionResistance(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $FluidState): (number) | undefined;
        shouldDamageEntity(arg0: $Explosion, arg1: $Entity): boolean;
        getEntityDamageAmount(arg0: $Explosion, arg1: $Entity): number;
        getKnockbackMultiplier(arg0: $Entity): number;
        constructor();
    }
    export class $GameRules$Category extends $Enum<$GameRules$Category> {
        static values(): $GameRules$Category[];
        static valueOf(arg0: string): $GameRules$Category;
        getDescriptionId(): string;
        static PLAYER: $GameRules$Category;
        static DROPS: $GameRules$Category;
        static MOBS: $GameRules$Category;
        static CHAT: $GameRules$Category;
        static UPDATES: $GameRules$Category;
        static MISC: $GameRules$Category;
        static SPAWNING: $GameRules$Category;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $GameRules$Category}.
     */
    export type $GameRules$Category_ = "player" | "mobs" | "spawning" | "drops" | "updates" | "chat" | "misc";
    export class $WorldGenLevel {
    }
    export interface $WorldGenLevel extends $ServerLevelAccessor {
        getSeed(): number;
        setCurrentlyGenerating(arg0: $Supplier_<string>): void;
        ensureCanWrite(arg0: $BlockPos_): boolean;
        get seed(): number;
        set currentlyGenerating(value: $Supplier_<string>);
    }
    export class $BlockEventData extends $Record {
        pos(): $BlockPos;
        block(): $Block;
        paramA(): number;
        paramB(): number;
        constructor(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: number);
    }
    export class $FoliageColor {
        static get(arg0: number, arg1: number): number;
        static init(arg0: number[]): void;
        static getDefaultColor(): number;
        static getEvergreenColor(): number;
        static getMangroveColor(): number;
        static getBirchColor(): number;
        static pixels: number[];
        constructor();
        static get defaultColor(): number;
        static get evergreenColor(): number;
        static get mangroveColor(): number;
        static get birchColor(): number;
    }
    export class $Level extends $AttachmentHolder implements $LevelAccessor, $AutoCloseable, $ILevelExtension, $LevelAccessor$2, $Trackable, $LevelExtension$1, $LoadedChunksCache, $LevelKJS, $LevelExtension, $LevelAccessor$1 {
        close(): void;
        isDebug(): boolean;
        isLoaded(arg0: $BlockPos_): boolean;
        getEntity(arg0: number): $Entity;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>, arg3: $List_<T>): void;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>, arg3: $List_<T>, arg4: number): void;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        getDimensionKey(): $ResourceKey<$Level>;
        disconnect(): void;
        getProfiler(): $ProfilerFiller;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getChunkAt(arg0: $BlockPos_): $LevelChunk;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        blockEntityChanged(arg0: $BlockPos_): void;
        flywheel$getAllLoadedEntities(): $Iterable<any>;
        updateNeighborsAtExceptFromFacing(arg0: $BlockPos_, arg1: $Block_, arg2: $Direction_): void;
        loadedAndEntityCanStandOnFace(arg0: $BlockPos_, arg1: $Entity, arg2: $Direction_): boolean;
        handler$eha000$superbwarfare$getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<any>, arg3: $CallbackInfoReturnable<any>): void;
        redirect$flh000$observable$redirectTick(blockEntity: $TickingBlockEntity): void;
        handler$zdi000$openpartiesandclaims$onDestroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number, arg4: $CallbackInfoReturnable<any>): void;
        isNight(): boolean;
        explode(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Level$ExplosionInteraction_): $Explosion;
        explode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_, arg9: $ParticleOptions_, arg10: $ParticleOptions_, arg11: $Holder_<$SoundEvent>): $Explosion;
        explode(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: $Level$ExplosionInteraction_): $Explosion;
        explode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_, arg9: boolean, arg10: $ParticleOptions_, arg11: $ParticleOptions_, arg12: $Holder_<$SoundEvent>): $Explosion;
        explode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: $Vec3_, arg4: number, arg5: boolean, arg6: $Level$ExplosionInteraction_): $Explosion;
        explode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_): $Explosion;
        isRaining(): boolean;
        blockEvent(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: number): void;
        noSave(): boolean;
        setMapData(arg0: $MapId_, arg1: $MapItemSavedData): void;
        getMapData(arg0: $MapId_): $MapItemSavedData;
        broadcastEntityEvent(arg0: $Entity, arg1: number): void;
        broadcastDamageEvent(arg0: $Entity, arg1: $DamageSource_): void;
        getRandom(): $RandomSource;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        playSound(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $SoundEvent_, arg5: $SoundSource_): void;
        playSound(arg0: $Entity, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        playSound(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $SoundEvent_, arg5: $SoundSource_, arg6: number, arg7: number): void;
        playSound(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $Holder_<$SoundEvent>, arg5: $SoundSource_, arg6: number, arg7: number): void;
        playSound(arg0: $Player, arg1: $Entity, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        getServer(): $MinecraftServer;
        updateNeighbourForOutputSignal(arg0: $BlockPos_, arg1: $Block_): void;
        fabric_getLoadedChunks(): $Set<any>;
        addBlockEntityTicker(arg0: $TickingBlockEntity): void;
        gatherChunkSourceStats(): string;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        destroyBlockProgress(arg0: number, arg1: $BlockPos_, arg2: number): void;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        getProfilerSupplier(): $Supplier<$ProfilerFiller>;
        fabric_markUnloaded(arg0: $LevelChunk): void;
        increaseMaxEntityRadius(arg0: number): number;
        getEntityByUUID(id: $UUID_): $Entity;
        addAlwaysVisibleParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        addAlwaysVisibleParticle(arg0: $ParticleOptions_, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        dimensionTypeRegistration(): $Holder<$DimensionType>;
        updateSkyBrightness(): void;
        addFreshBlockEntities(arg0: $Collection_<$BlockEntity>): void;
        addDestroyBlockEffect(arg0: $BlockPos_, arg1: $BlockState_): void;
        loadedAndEntityCanStandOn(arg0: $BlockPos_, arg1: $Entity): boolean;
        getSharedSpawnAngle(): number;
        getEntityByNetworkID(id: number): $Entity;
        sable$getJOMLSink(): $LevelReusedVectors;
        mayInteract(arg0: $Player, arg1: $BlockPos_): boolean;
        isRainingAt(arg0: $BlockPos_): boolean;
        getSharedSpawnPos(): $BlockPos;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getWorldBorder(): $WorldBorder;
        tickRateManager(): $TickRateManager;
        fillReportDetails(arg0: $CrashReport): $CrashReportCategory;
        registryAccess(): $RegistryAccess;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getLevelData(): $LevelData;
        getDayTimeFraction(): number;
        atl$getBaseClass(): $Class<any>;
        getData(): $AttachedData<any>;
        updateNeighborsAt(arg0: $BlockPos_, arg1: $Block_): void;
        shouldTickBlocksAt(arg0: $BlockPos_): boolean;
        shouldTickBlocksAt(arg0: number): boolean;
        removeBlockEntity(arg0: $BlockPos_): void;
        markAndNotifyBlock(arg0: $BlockPos_, arg1: $LevelChunk, arg2: $BlockState_, arg3: $BlockState_, arg4: number, arg5: number): void;
        getRainLevel(arg0: number): number;
        getThunderLevel(arg0: number): number;
        dimensionType(): $DimensionType;
        getLightEngine(): $LevelLightEngine;
        getSunAngle(arg0: number): number;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        setBlockEntity(arg0: $BlockEntity): void;
        setSpawnSettings(arg0: boolean, arg1: boolean): void;
        setBlockAndUpdate(arg0: $BlockPos_, arg1: $BlockState_): boolean;
        tickBlockEntities(): void;
        getSeaLevel(): number;
        sendBlockUpdated(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_, arg3: number): void;
        guardEntityTick<T extends $Entity>(arg0: $Consumer_<T>, arg1: T): void;
        isInWorldBounds(arg0: $BlockPos_): boolean;
        setBlocksDirty(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_): void;
        getSkyDarken(): number;
        prepareWeather(): void;
        getDayTimePerTick(): number;
        getRecipeManager(): $RecipeManager;
        isThundering(): boolean;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        createFireworks(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $List_<$FireworkExplosion_>): void;
        setDayTimeFraction(arg0: number): void;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        getBiomeManager(): $BiomeManager;
        setDayTimePerTick(arg0: number): void;
        fabric_markLoaded(arg0: $LevelChunk): void;
        getMcEntities(): $Iterable<any>;
        getMaxEntityRadius(): number;
        potionBrewing(): $PotionBrewing;
        getFreeMapId(): $MapId;
        setRainLevel(arg0: number): void;
        globalLevelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        setThunderLevel(arg0: number): void;
        setSkyFlashTime(arg0: number): void;
        getBlockRandomPos(arg0: number, arg1: number, arg2: number, arg3: number): $BlockPos;
        advanceDaytime(): number;
        sendPacketToServer(arg0: $Packet<never>): void;
        nextSubTickCount(): number;
        neighborChanged(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Block_, arg3: $BlockPos_, arg4: boolean): void;
        neighborChanged(arg0: $BlockPos_, arg1: $Block_, arg2: $BlockPos_): void;
        onBlockStateChange(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_): void;
        getGameRules(): $GameRules;
        playLocalSound(arg0: $Entity, arg1: $SoundEvent_, arg2: $SoundSource_, arg3: number, arg4: number): void;
        playLocalSound(arg0: $BlockPos_, arg1: $SoundEvent_, arg2: $SoundSource_, arg3: number, arg4: number, arg5: boolean): void;
        playLocalSound(arg0: number, arg1: number, arg2: number, arg3: $SoundEvent_, arg4: $SoundSource_, arg5: number, arg6: number, arg7: boolean): void;
        damageSources(): $DamageSources;
        shouldTickDeath(arg0: $Entity): boolean;
        isClientSide(): boolean;
        getScoreboard(): $Scoreboard;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        addParticle(arg0: $ParticleOptions_, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        playSeededSound(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $Holder_<$SoundEvent>, arg5: $SoundSource_, arg6: number, arg7: number, arg8: number): void;
        playSeededSound(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $SoundEvent_, arg5: $SoundSource_, arg6: number, arg7: number, arg8: number): void;
        playSeededSound(arg0: $Player, arg1: $Entity, arg2: $Holder_<$SoundEvent>, arg3: $SoundSource_, arg4: number, arg5: number, arg6: number): void;
        getTime(): number;
        handler$dmh000$yumi_mc_core$yumi$onPopulateCrashDetails(crashReport: $CrashReport, cir: $CallbackInfoReturnable<any>): void;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getDayTime(): number;
        isDay(): boolean;
        static isInSpawnableBounds(arg0: $BlockPos_): boolean;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        hasChunk(arg0: number, arg1: number): boolean;
        dayTime(): number;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number, arg3: $TickPriority_): void;
        getDifficulty(): $Difficulty;
        invalidateCapabilities(arg0: $BlockPos_): void;
        invalidateCapabilities(arg0: $ChunkPos): void;
        getModelDataManager(): $ModelDataManager;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: C): T;
        getDescriptionKey(): string;
        getDescription(): $Component;
        getPartEntities(): $Collection<$PartEntity<never>>;
        wrap(): $WeakReference<$Trackable>;
        startTracking(): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        isOverworld(): boolean;
        setTime(time: number): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        getDimension(): $ResourceLocation;
        createEntity(type: $EntityType_<never>): $Entity;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getSide(): $ScriptType;
        self(): $EntityGetter;
        tell(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        getTimeOfDay(arg0: number): number;
        getMoonPhase(): number;
        getMoonBrightness(): number;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getEntities(arg0: $Entity, arg1: $AABB_): $List<$Entity>;
        localvar$zeo000$openpartiesandclaims$onGetEntityCollisions(arg0: $List_<any>, arg1: $Entity, arg2: $AABB_): $List<any>;
        handler$zeo000$openpartiesandclaims$onGetEntitiesOfClass(arg0: $Class<any>, arg1: $AABB_, arg2: $Predicate_<any>, arg3: $CallbackInfoReturnable<any>): void;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity>): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number): T;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getPlayerByUUID(arg0: $UUID_): $Player;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        hasBiomes(): boolean;
        isWaterAt(arg0: $BlockPos_): boolean;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getMinBuildHeight(): number;
        containsAnyLiquid(arg0: $AABB_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        getHeight(): number;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        getDisplayName(): $Component;
        getEntities(): $EntityArrayList;
        canSeeSky(arg0: $BlockPos_): boolean;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        collidesWithSuffocatingBlock(arg0: $Entity, arg1: $AABB_): boolean;
        getCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        noCollision(arg0: $AABB_): boolean;
        noCollision(arg0: $Entity, arg1: $AABB_): boolean;
        noCollision(arg0: $Entity): boolean;
        noBlockCollision(arg0: $Entity, arg1: $AABB_): boolean;
        getBlockCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        isUnobstructed(arg0: $Entity): boolean;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        getDirectSignalTo(arg0: $BlockPos_): number;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity): boolean;
        handler$ibc000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionIndex(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        invokeGetEntities(): $LevelEntityGetter<$Entity>;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $WritableLevelData, arg1: $ResourceKey_<$Level>, arg2: $RegistryAccess, arg3: $Holder_<$DimensionType>, arg4: $Supplier_<$ProfilerFiller>, arg5: boolean, arg6: boolean, arg7: number, arg8: number);
        get debug(): boolean;
        get dimensionKey(): $ResourceKey<$Level>;
        get profiler(): $ProfilerFiller;
        get night(): boolean;
        get raining(): boolean;
        get server(): $MinecraftServer;
        get profilerSupplier(): $Supplier<$ProfilerFiller>;
        get sharedSpawnAngle(): number;
        get sharedSpawnPos(): $BlockPos;
        get worldBorder(): $WorldBorder;
        get data(): $AttachedData<any>;
        get lightEngine(): $LevelLightEngine;
        get seaLevel(): number;
        get skyDarken(): number;
        get recipeManager(): $RecipeManager;
        get thundering(): boolean;
        get biomeManager(): $BiomeManager;
        get mcEntities(): $Iterable<any>;
        get maxEntityRadius(): number;
        get freeMapId(): $MapId;
        set skyFlashTime(value: number);
        get gameRules(): $GameRules;
        get clientSide(): boolean;
        get scoreboard(): $Scoreboard;
        get day(): boolean;
        get difficulty(): $Difficulty;
        get modelDataManager(): $ModelDataManager;
        get descriptionKey(): string;
        get description(): $Component;
        get partEntities(): $Collection<$PartEntity<never>>;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get overworld(): boolean;
        get dimension(): $ResourceLocation;
        get side(): $ScriptType;
        get name(): $Component;
        get moonPhase(): number;
        get moonBrightness(): number;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get minBuildHeight(): number;
        get displayName(): $Component;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get minSection(): number;
        get maxSection(): number;
    }
    /**
     * Values that may be interpreted as {@link $Level}.
     */
    export type $Level_ = RegistryTypes.Dimension;
    export class $SpawnData extends $Record {
        getEntityToSpawn(): $CompoundTag;
        getEquipment(): ($EquipmentTable) | undefined;
        entityToSpawn(): $CompoundTag;
        getCustomSpawnRules(): ($SpawnData$CustomSpawnRules) | undefined;
        equipment(): ($EquipmentTable) | undefined;
        customSpawnRules(): ($SpawnData$CustomSpawnRules) | undefined;
        static CODEC: $Codec<$SpawnData>;
        static ENTITY_TAG: string;
        static LIST_CODEC: $Codec<$SimpleWeightedRandomList<$SpawnData>>;
        constructor();
        constructor(arg0: $CompoundTag_, arg1: ($SpawnData$CustomSpawnRules_) | undefined, arg2: ($EquipmentTable_) | undefined);
    }
    export class $ClipBlockStateContext {
        getFrom(): $Vec3;
        isTargetBlock(): $Predicate<$BlockState>;
        getTo(): $Vec3;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Predicate_<$BlockState>);
        get from(): $Vec3;
        get targetBlock(): $Predicate<$BlockState>;
        get to(): $Vec3;
    }
    export class $LocalMobCapCalculator$MobCounts {
    }
    export class $GameRules$GameRuleTypeVisitor {
    }
    export interface $GameRules$GameRuleTypeVisitor {
        visit<T extends $GameRules$Value<T>>(arg0: $GameRules$Key<T>, arg1: $GameRules$Type<T>): void;
        visitBoolean(arg0: $GameRules$Key<$GameRules$BooleanValue>, arg1: $GameRules$Type<$GameRules$BooleanValue>): void;
        visitInteger(arg0: $GameRules$Key<$GameRules$IntegerValue>, arg1: $GameRules$Type<$GameRules$IntegerValue>): void;
    }
    export class $CustomSpawner {
    }
    export interface $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomSpawner}.
     */
    export type $CustomSpawner_ = ((arg0: $ServerLevel, arg1: boolean, arg2: boolean) => number);
    export class $SpawnData$CustomSpawnRules extends $Record {
        isValidPosition(arg0: $BlockPos_, arg1: $ServerLevel): boolean;
        skyLightLimit(): $InclusiveRange<number>;
        blockLightLimit(): $InclusiveRange<number>;
        static CODEC: $Codec<$SpawnData$CustomSpawnRules>;
        constructor(arg0: $InclusiveRange_<number>, arg1: $InclusiveRange_<number>);
    }
    export class $BaseCommandBlock implements $CommandSource {
        getName(): $Component;
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        isValid(): boolean;
        getLevel(): $ServerLevel;
        setSuccessCount(arg0: number): void;
        performCommand(arg0: $Level_): boolean;
        setTrackOutput(arg0: boolean): void;
        setCommand(arg0: string): void;
        onUpdated(): void;
        isTrackOutput(): boolean;
        setLastOutput(arg0: $Component_): void;
        getLastOutput(): $Component;
        getPosition(): $Vec3;
        shouldInformAdmins(): boolean;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        setCustomName(arg0: $Component_): void;
        getCustomName(): $Component;
        sendSystemMessage(arg0: $Component_): void;
        getCommand(): string;
        usedBy(arg0: $Player): $InteractionResult;
        getSuccessCount(): number;
        createCommandSourceStack(): $CommandSourceStack;
        alwaysAccepts(): boolean;
        constructor();
        get name(): $Component;
        get valid(): boolean;
        get level(): $ServerLevel;
        get position(): $Vec3;
    }
    export class $ClipContext$ShapeGetter {
    }
    export interface $ClipContext$ShapeGetter {
        get(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$ShapeGetter}.
     */
    export type $ClipContext$ShapeGetter_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext) => $VoxelShape);
    export class $BaseSpawner implements $IOwnedSpawner {
        load(arg0: $Level_, arg1: $BlockPos_, arg2: $CompoundTag_): void;
        save(arg0: $CompoundTag_): $CompoundTag;
        getOwner(): $Either<$BlockEntity, $Entity>;
        broadcastEvent(arg0: $Level_, arg1: $BlockPos_, arg2: number): void;
        setNextSpawnData(arg0: $Level_, arg1: $BlockPos_, arg2: $SpawnData_): void;
        setEntityId(arg0: $EntityType_<never>, arg1: $Level_, arg2: $RandomSource, arg3: $BlockPos_): void;
        onEventTriggered(arg0: $Level_, arg1: number): boolean;
        clientTick(arg0: $Level_, arg1: $BlockPos_): void;
        getoSpin(): number;
        serverTick(arg0: $ServerLevel, arg1: $BlockPos_): void;
        getSpin(): number;
        getOrCreateDisplayEntity(arg0: $Level_, arg1: $BlockPos_): $Entity;
        static SPAWN_DATA_TAG: string;
        spawnPotentials: $SimpleWeightedRandomList<$SpawnData>;
        nextSpawnData: $SpawnData;
        constructor();
        get owner(): $Either<$BlockEntity, $Entity>;
        get oSpin(): number;
        get spin(): number;
    }
    export class $NaturalSpawner {
        static createState(arg0: number, arg1: $Iterable_<$Entity>, arg2: $NaturalSpawner$ChunkGetter_, arg3: $LocalMobCapCalculator): $NaturalSpawner$SpawnState;
        static isValidEmptySpawnBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState, arg4: $EntityType_<never>): boolean;
        static spawnMobsForChunkGeneration(arg0: $ServerLevelAccessor, arg1: $Holder_<$Biome>, arg2: $ChunkPos, arg3: $RandomSource): void;
        static spawnCategoryForChunk(arg0: $MobCategory_, arg1: $ServerLevel, arg2: $LevelChunk, arg3: $NaturalSpawner$SpawnPredicate_, arg4: $NaturalSpawner$AfterSpawnCallback_): void;
        static spawnCategoryForPosition(arg0: $MobCategory_, arg1: $ServerLevel, arg2: $BlockPos_): void;
        static spawnCategoryForPosition(arg0: $MobCategory_, arg1: $ServerLevel, arg2: $ChunkAccess, arg3: $BlockPos_, arg4: $NaturalSpawner$SpawnPredicate_, arg5: $NaturalSpawner$AfterSpawnCallback_): void;
        static isInNetherFortressBounds(arg0: $BlockPos_, arg1: $ServerLevel, arg2: $MobCategory_, arg3: $StructureManager): boolean;
        static spawnForChunk(arg0: $ServerLevel, arg1: $LevelChunk, arg2: $NaturalSpawner$SpawnState, arg3: boolean, arg4: boolean, arg5: boolean): void;
        static getRoughBiome(arg0: $BlockPos_, arg1: $ChunkAccess): $Biome;
        static SPAWN_DISTANCE_BLOCK: number;
        static MAGIC_NUMBER: number;
        static SPAWN_DISTANCE_CHUNK: number;
    }
    export class $DataPackConfig {
        addModPacks(arg0: $List_<string>): void;
        getDisabled(): $List<string>;
        getEnabled(): $List<string>;
        static CODEC: $Codec<$DataPackConfig>;
        static DEFAULT: $DataPackConfig;
        constructor(arg0: $List_<string>, arg1: $List_<string>);
        get disabled(): $List<string>;
        get enabled(): $List<string>;
    }
    export class $CollisionGetter {
    }
    export interface $CollisionGetter extends $BlockGetter {
        collidesWithSuffocatingBlock(arg0: $Entity, arg1: $AABB_): boolean;
        getCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        findFreePosition(arg0: $Entity, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        noCollision(arg0: $AABB_): boolean;
        noCollision(arg0: $Entity, arg1: $AABB_): boolean;
        noCollision(arg0: $Entity): boolean;
        noBlockCollision(arg0: $Entity, arg1: $AABB_): boolean;
        getBlockCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        getWorldBorder(): $WorldBorder;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        isUnobstructed(arg0: $Entity): boolean;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        get worldBorder(): $WorldBorder;
    }
    export class $GameRules$BooleanValue extends $GameRules$Value<$GameRules$BooleanValue> {
        get(): boolean;
        set(arg0: boolean, arg1: $MinecraftServer): void;
        copy(): $GameRules$BooleanValue;
        static create(arg0: boolean, arg1: $BiConsumer_<$MinecraftServer, $GameRules$BooleanValue>): $GameRules$Type<$GameRules$BooleanValue>;
        static create(arg0: boolean): $GameRules$Type<$GameRules$BooleanValue>;
        setFrom(arg0: $GameRules$BooleanValue, arg1: $MinecraftServer): void;
        getSelf(): $GameRules$BooleanValue;
        type: $GameRules$Type<$GameRules$BooleanValue>;
        constructor(arg0: $GameRules$Type<$GameRules$BooleanValue>, arg1: boolean);
        get self(): $GameRules$BooleanValue;
    }
    export class $Spawner {
        static getSpawnEntityDisplayName(arg0: $ItemStack_, arg1: string): $Component;
        static appendHoverText(arg0: $ItemStack_, arg1: $List_<$Component_>, arg2: string): void;
    }
    export interface $Spawner {
        setEntityId(arg0: $EntityType_<never>, arg1: $RandomSource): void;
    }
    /**
     * Values that may be interpreted as {@link $Spawner}.
     */
    export type $Spawner_ = ((arg0: $EntityType<never>, arg1: $RandomSource) => void);
    export class $LevelTimeAccess {
    }
    export interface $LevelTimeAccess extends $LevelReader {
        getTimeOfDay(arg0: number): number;
        dayTime(): number;
        getMoonPhase(): number;
        getMoonBrightness(): number;
        get moonPhase(): number;
        get moonBrightness(): number;
    }
    export class $GameRules$VisitorCaller<T extends $GameRules$Value<T>> {
    }
    export interface $GameRules$VisitorCaller<T extends $GameRules$Value<T>> {
        call(arg0: $GameRules$GameRuleTypeVisitor, arg1: $GameRules$Key<T>, arg2: $GameRules$Type<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $GameRules$VisitorCaller}.
     */
    export type $GameRules$VisitorCaller_<T> = ((arg0: $GameRules$GameRuleTypeVisitor, arg1: $GameRules$Key<T>, arg2: $GameRules$Type<T>) => void);
    export class $BlockCollisions<T> extends $AbstractIterator<T> {
        computeNext(): T;
        constructor(arg0: $CollisionGetter, arg1: $Entity, arg2: $AABB_, arg3: boolean, arg4: $BiFunction_<$BlockPos$MutableBlockPos, $VoxelShape, T>);
    }
    export class $NoiseColumn implements $BlockColumn {
        getBlock(arg0: number): $BlockState;
        setBlock(arg0: number, arg1: $BlockState_): void;
        constructor(arg0: number, arg1: $BlockState_[]);
    }
    export class $ItemLike {
    }
    export interface $ItemLike {
        asItem(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $ItemLike}.
     */
    export type $ItemLike_ = $Item_ | (() => $Item_);
    export class $PathNavigationRegion implements $BlockGetter, $CollisionGetter {
        getProfiler(): $ProfilerFiller;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getMinBuildHeight(): number;
        getHeight(): number;
        getWorldBorder(): $WorldBorder;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        handler$ibc000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        collidesWithSuffocatingBlock(arg0: $Entity, arg1: $AABB_): boolean;
        getCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        noCollision(arg0: $AABB_): boolean;
        noCollision(arg0: $Entity, arg1: $AABB_): boolean;
        noCollision(arg0: $Entity): boolean;
        noBlockCollision(arg0: $Entity, arg1: $AABB_): boolean;
        getBlockCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        isUnobstructed(arg0: $Entity): boolean;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionIndex(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        allEmpty: boolean;
        centerZ: number;
        centerX: number;
        level: $Level;
        chunks: $ChunkAccess[][];
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockPos_);
        get profiler(): $ProfilerFiller;
        get minBuildHeight(): number;
        get height(): number;
        get worldBorder(): $WorldBorder;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get minSection(): number;
        get maxSection(): number;
    }
    export class $SimpleExplosionDamageCalculator extends $ExplosionDamageCalculator {
        constructor(arg0: boolean, arg1: boolean, arg2: (number) | undefined, arg3: ($HolderSet_<$Block>) | undefined);
    }
    export class $LocalMobCapCalculator {
        canSpawn(arg0: $MobCategory_, arg1: $ChunkPos): boolean;
        addMob(arg0: $ChunkPos, arg1: $MobCategory_): void;
        constructor(arg0: $ChunkMap);
    }
    export class $LevelSimulatedReader {
    }
    export interface $LevelSimulatedReader {
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
    }
    export class $BlockAndTintGetter {
    }
    export interface $BlockAndTintGetter extends $BlockGetter, $IBlockAndTintGetterExtension {
        canSeeSky(arg0: $BlockPos_): boolean;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getLightEngine(): $LevelLightEngine;
        get lightEngine(): $LevelLightEngine;
    }
    export class $ClipContext implements $ClipContextExtension, $ClipContextAccessor, $IgnoringClipContext {
        getFrom(): $Vec3;
        sable$doNotProject(): boolean;
        getFluidShape(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getBlockShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        sable$setDoNotProject(arg0: boolean): void;
        sable$setSubLevelIgnoring(arg0: $Predicate_<any>): void;
        getTo(): $Vec3;
        sable$isIgnoreMainLevel(): boolean;
        sable$getSubLevelIgnoring(): $Predicate<any>;
        sable$getIgnoredSubLevel(): $SubLevel;
        tacztweaks$setIgnores(arg0: $Collection_<any>): void;
        sable$setIgnoreMainLevel(arg0: boolean): void;
        sable$setIgnoredSubLevel(arg0: $SubLevel): void;
        tacztweaks$getBlock(): $ClipContext$Block;
        tacztweaks$getFluid(): $ClipContext$Fluid;
        tacztweaks$getCollisionContext(): $CollisionContext;
        collisionContext: $CollisionContext;
        block: $ClipContext$Block;
        fluid: $ClipContext$Fluid;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $ClipContext$Block_, arg3: $ClipContext$Fluid_, arg4: $Entity);
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $ClipContext$Block_, arg3: $ClipContext$Fluid_, arg4: $CollisionContext);
        get from(): $Vec3;
        get to(): $Vec3;
    }
    export class $EntityBasedExplosionDamageCalculator extends $ExplosionDamageCalculator {
        constructor(arg0: $Entity);
    }
    export class $ForcedChunksSavedData extends $SavedData {
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ForcedChunksSavedData;
        static factory(): $SavedData$Factory<$ForcedChunksSavedData>;
        getChunks(): $LongSet;
        getBlockForcedChunks(): $ForcedChunkManager$TicketTracker<$BlockPos>;
        getEntityForcedChunks(): $ForcedChunkManager$TicketTracker<$UUID>;
        static FILE_ID: string;
        constructor();
        get chunks(): $LongSet;
        get blockForcedChunks(): $ForcedChunkManager$TicketTracker<$BlockPos>;
        get entityForcedChunks(): $ForcedChunkManager$TicketTracker<$UUID>;
    }
    export class $Level$ExplosionInteraction extends $Enum<$Level$ExplosionInteraction> implements $StringRepresentable {
        static values(): $Level$ExplosionInteraction[];
        static valueOf(arg0: string): $Level$ExplosionInteraction;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MOB: $Level$ExplosionInteraction;
        static CODEC: $Codec<$Level$ExplosionInteraction>;
        static TRIGGER: $Level$ExplosionInteraction;
        static BLOCK: $Level$ExplosionInteraction;
        static TNT: $Level$ExplosionInteraction;
        static NONE: $Level$ExplosionInteraction;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Level$ExplosionInteraction}.
     */
    export type $Level$ExplosionInteraction_ = "none" | "block" | "mob" | "tnt" | "trigger";
    export class $ClipContext$Block extends $Enum<$ClipContext$Block> implements $ClipContext$ShapeGetter {
        get(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        static values(): $ClipContext$Block[];
        static valueOf(arg0: string): $ClipContext$Block;
        static COLLIDER: $ClipContext$Block;
        static FALLDAMAGE_RESETTING: $ClipContext$Block;
        static OUTLINE: $ClipContext$Block;
        static VISUAL: $ClipContext$Block;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$Block}.
     */
    export type $ClipContext$Block_ = "collider" | "outline" | "visual" | "falldamage_resetting";
    export class $LevelHeightAccessor {
        static create(arg0: number, arg1: number): $LevelHeightAccessor;
    }
    export interface $LevelHeightAccessor {
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionIndex(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getMinBuildHeight(): number;
        getHeight(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get minSection(): number;
        get maxSection(): number;
        get minBuildHeight(): number;
        get height(): number;
    }
    export class $ClipContext$Fluid extends $Enum<$ClipContext$Fluid> {
        static values(): $ClipContext$Fluid[];
        static valueOf(arg0: string): $ClipContext$Fluid;
        canPick(arg0: $FluidState): boolean;
        static SOURCE_ONLY: $ClipContext$Fluid;
        static NONE: $ClipContext$Fluid;
        static ANY: $ClipContext$Fluid;
        static WATER: $ClipContext$Fluid;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$Fluid}.
     */
    export type $ClipContext$Fluid_ = "none" | "source_only" | "any" | "water";
    export class $Explosion implements $ExplosionAccess, $ExplosionAccessor {
        center(): $Vec3;
        static callAddOrAppendStack$immersiveengineering_$md$9aa1a5$0(arg0: $List_<any>, arg1: $ItemStack_, arg2: $BlockPos_): void;
        explode(): void;
        getDirectSourceEntity(): $Entity;
        getIndirectSourceEntity(): $LivingEntity;
        getBlockInteraction(): $Explosion$BlockInteraction;
        canTriggerBlocks(): boolean;
        static getDefaultDamageSource(arg0: $Level_, arg1: $Entity): $DamageSource;
        getLargeExplosionParticles(): $ParticleOptions;
        interactsWithBlocks(): boolean;
        getSmallExplosionParticles(): $ParticleOptions;
        finalizeExplosion(arg0: boolean): void;
        static getSeenPercent(arg0: $Vec3_, arg1: $Entity): number;
        getExplosionSound(): $Holder<$SoundEvent>;
        clearToBlow(): void;
        getHitPlayers(): $Map<$Player, $Vec3>;
        getToBlow(): $List<$BlockPos>;
        radius(): number;
        tacztweaks$setY(arg0: number): void;
        tacztweaks$setX(arg0: number): void;
        tacztweaks$setZ(arg0: number): void;
        level: $Level;
        blockInteraction: $Explosion$BlockInteraction;
        x: number;
        y: number;
        damageSource: $DamageSource;
        z: number;
        damageCalculator: $ExplosionDamageCalculator;
        source: $Entity;
        constructor(arg0: $Level_, arg1: $Entity, arg2: $DamageSource_, arg3: $ExplosionDamageCalculator, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: $Explosion$BlockInteraction_, arg10: $ParticleOptions_, arg11: $ParticleOptions_, arg12: $Holder_<$SoundEvent>);
        constructor(arg0: $Level_, arg1: $Entity, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: $Explosion$BlockInteraction_, arg8: $List_<$BlockPos_>);
        constructor(arg0: $Level_, arg1: $Entity, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $List_<$BlockPos_>, arg7: $Explosion$BlockInteraction_, arg8: $ParticleOptions_, arg9: $ParticleOptions_, arg10: $Holder_<$SoundEvent>);
        constructor(arg0: $Level_, arg1: $Entity, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: $Explosion$BlockInteraction_);
        get directSourceEntity(): $Entity;
        get indirectSourceEntity(): $LivingEntity;
        get largeExplosionParticles(): $ParticleOptions;
        get smallExplosionParticles(): $ParticleOptions;
        get explosionSound(): $Holder<$SoundEvent>;
        get hitPlayers(): $Map<$Player, $Vec3>;
        get toBlow(): $List<$BlockPos>;
    }
}
