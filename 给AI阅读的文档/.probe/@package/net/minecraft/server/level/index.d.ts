import { $Long2ObjectLinkedOpenHashMap, $Long2ObjectOpenHashMap, $Long2IntLinkedOpenHashMap, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongMap, $Long2IntMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $PlayerAdvancements, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $ServerLevelExt, $ServerPlayerExt, $ThreadedLevelLightEngineExt } from "@package/com/moulberry/axiom/hooks";
import { $ISyncLoadManager, $IVanillaChunkManager, $SchedulingManager } from "@package/com/ishland/c2me/base/common/scheduler";
import { $EntityDimensions, $WalkAnimationState, $HumanoidArm_, $PortalProcessor, $Entity, $Entity$RemovalReason_, $HumanoidArm, $Entity$RemovalReason, $LivingEntity, $Mob, $Pose, $ReputationEventHandler_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $IServerChunkCacheExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ServerLevelSceneExtension } from "@package/dev/ryanhcode/sable/mixinterface/physics";
import { $BoundingBox, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ServerPlayerAccessor } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $OutgoingChatMessage, $RemoteChatSession, $RemoteChatSession_, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $ServerPlayerRespawnExtension } from "@package/dev/ryanhcode/sable/mixinterface/respawn_point";
import { $ChunkTicketManagerExtension } from "@package/com/ishland/c2me/notickvd/common";
import { $LevelChunk, $ImposterProtoChunk, $ChunkGeneratorStructureState, $LightChunkGetter, $ChunkSource, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $DimensionDataStorage, $LevelStorageSource$LevelStorageAccess, $LevelData, $WritableLevelData, $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $BlockDestructionProgressExtension } from "@package/com/simibubi/create/foundation/block/render";
import { $Duration_ } from "@package/java/time";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $ChunkMapAccessor, $ChunkMapAccessor$TrackedEntityAccessor } from "@package/com/railwayteam/railways/neoforge/mixin";
import { $BlockableEventLoop, $ProcessorHandle, $ProcessorMailbox } from "@package/net/minecraft/util/thread";
import { $ChunkMapAccessor$TrackedEntity, $ChunkMapAccessor as $ChunkMapAccessor$1 } from "@package/cn/chloeprime/commons_impl/mixin";
import { $LevelStem_, $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ServerStatsCounter, $ServerRecipeBook } from "@package/net/minecraft/stats";
import { $ICapabilityInvalidationListener_ } from "@package/net/neoforged/neoforge/capabilities";
import { $IWorldMapServerLevel } from "@package/xaero/map/core";
import { $PacketAndPayloadAcceptor } from "@package/net/neoforged/neoforge/network/bundle";
import { $ServerStatus_ } from "@package/net/minecraft/network/protocol/status";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $IOpenPACServerPlayer } from "@package/xaero/pac/common/server/player/data";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $ServerLevelAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Set_, $ArrayList, $Stack, $List, $List_, $Collection, $Queue, $Comparator, $Set, $UUID } from "@package/java/util";
import { $BlockPos, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder, $Direction_, $HolderLookup, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $ServerPlayerDataAPI } from "@package/xaero/pac/common/server/player/data/api";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $BlockApiCacheImpl, $ServerWorldCache } from "@package/net/fabricmc/fabric/impl/lookup/block";
import { $Throwable, $IllegalStateException, $Runnable, $Enum, $Comparable, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $TicketDistanceLevelPropagatorExtension, $IChunkSystemAccess } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";
import { $Writer } from "@package/java/io";
import { $CustomSpawner_, $Explosion, $LightLayer_, $ChunkPos, $BlockGetter, $Level$ExplosionInteraction_, $ColorResolver_, $ExplosionDamageCalculator, $Level_, $GameType, $GameType_, $EntityGetter, $ClipContext, $ClipBlockStateContext, $WorldGenLevel, $NaturalSpawner$SpawnState, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $SynchedEntityData, $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerWorldPropertiesRegistry } from "@package/com/moulberry/axiom/world_properties/server";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DimensionTransition$PostDimensionTransition_, $PortalForcer, $DimensionTransition, $DimensionTransition_ } from "@package/net/minecraft/world/level/portal";
import { $DamageSource, $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either, $Pair as $Pair$1 } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ServerPlayerData as $ServerPlayerData$1, $IServerPlayer as $IServerPlayer$2 } from "@package/xaero/common/server/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ServerChunkCacheAccessor } from "@package/dev/ryanhcode/sable/mixin/level_accelerator";
import { $RandomSource, $ProgressListener, $StaticCache2D, $Unit, $SortedArraySet } from "@package/net/minecraft/util";
import { $IServerPlayer, $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $ConductorEntity, $ServerPlayerPossessionAccess } from "@package/com/railwayteam/railways/content/conductor";
import { $BossEvent$BossBarColor, $BossEvent$BossBarOverlay_, $InteractionResult, $BossEvent$BossBarOverlay, $InteractionHand_, $Container, $BossEvent, $RandomSequences, $DifficultyInstance, $BossEvent$BossBarColor_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $ReportedException } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $AbstractContainerMenu, $InventoryMenu, $PlayerEnderChestContainer } from "@package/net/minecraft/world/inventory";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $AccessorServerPlayerGameMode } from "@package/com/sk89q/worldedit/neoforge/mixin";
import { $DuckChunkHolder } from "@package/com/ishland/c2me/opts/scheduling/common";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $PersistentEntitySectionManager, $EntityInLevelCallback, $EntityTypeTest, $LevelCallback, $EntityTickList, $ChunkStatusUpdateListener_ } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $TextFilter, $ServerPlayerConnection, $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Inventory, $ChatVisiblity, $Player, $ChatVisiblity_ } from "@package/net/minecraft/world/entity/player";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ChunkScanAccess, $ChunkStorage, $IOWorker } from "@package/net/minecraft/world/level/chunk/storage";
import { $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $AtomicReferenceArray, $AtomicReference, $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS, $ServerLevelKJS, $ServerPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ExtraChunkViewData, $IChunkViewWithZones } from "@package/net/mehvahdjukaar/vista/common/chunk_tracking";
import { $ServerChunkLoadingManagerAccessor, $EntityTrackerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $DynamicGraphMinFixedPoint, $LightEngine, $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $IntConsumer_, $BooleanSupplier_, $Supplier, $Consumer_, $Predicate_, $IntSupplier_, $IntConsumer, $IntSupplier, $Function_ } from "@package/java/util/function";
import { $ServerWorldCapabilities } from "@package/xaero/map/capabilities";
import { $PathTypeCache } from "@package/net/minecraft/world/level/pathfinder";
import { $ObjectCollection, $Object2DoubleMap, $ObjectIterator, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $OBB$Part } from "@package/com/atsuishio/superbwarfare/tools";
import { $Path_ } from "@package/java/nio/file";
import { $TheChunkSystem } from "@package/com/ishland/c2me/rewrites/chunksystem/common";
import { $ChunkStep_, $ChunkStatus, $ChunkStatus_, $WorldGenContext } from "@package/net/minecraft/world/level/chunk/status";
import { $IMixinServerPlayer_neoforge } from "@package/com/seibel/distanthorizons/common/wrappers/misc";
import { $IChunkTicket, $ISimulationDistanceLevelPropagator, $IChunkTicketManager, $IServerChunkManager, $ITACSTicketManager, $IChunkHolder, $IChunkTicketManagerDistanceFromNearestPlayerTracker, $ISyncedClientOptions, $IChunkTicketManagerNearbyChunkTicketUpdater, $IServerLightingProvider, $IThreadedAnvilChunkStorage, $IThreadedAnvilChunkStorageTicketManager } from "@package/com/ishland/c2me/base/mixin/access";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $ChunkLevelTypeEventTracker } from "@package/net/fabricmc/fabric/impl/event/lifecycle";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Logger } from "@package/org/slf4j";
import { $IThreadedAnvilChunkStorage as $IThreadedAnvilChunkStorage$1 } from "@package/com/ishland/c2me/opts/scheduling/common/idle_tasks";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $ServerboundPlayerActionPacket$Action_, $CommonPlayerSpawnInfo, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Raid, $Raids } from "@package/net/minecraft/world/entity/raid";
import { $ServerPlayerData as $ServerPlayerData$2, $IServerPlayer as $IServerPlayer$1 } from "@package/xaero/map/server/player";
import { $Stream } from "@package/java/util/stream";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as progress from "@package/net/minecraft/server/level/progress";

declare module "@package/net/minecraft/server/level" {
    export class $ChunkTrackingView$Positioned extends $Record implements $ChunkTrackingView, $IChunkViewWithZones {
        contains(arg0: number, arg1: number, arg2: boolean): boolean;
        forEach(arg0: $Consumer_<$ChunkPos>): void;
        center(): $ChunkPos;
        maxX(): number;
        minX(): number;
        viewDistance(): number;
        minZ(): number;
        maxZ(): number;
        squareIntersects(arg0: $ChunkTrackingView$Positioned_): boolean;
        vista$setExtraZones(arg0: $ExtraChunkViewData): void;
        vista$getExtraZones(): $ExtraChunkViewData;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $ChunkPos): boolean;
        isInViewDistance(arg0: number, arg1: number): boolean;
        constructor(arg0: $ChunkPos, arg1: number);
    }
    export class $PlayerRespawnLogic {
        static getOverworldRespawnPos(arg0: $ServerLevel, arg1: number, arg2: number): $BlockPos;
        static getSpawnPosInChunk(arg0: $ServerLevel, arg1: $ChunkPos): $BlockPos;
        constructor();
    }
    export class $Ticket<T> implements $Comparable<$Ticket<never>>, $IChunkTicket {
        compareTo(arg0: $Ticket<never>): number;
        getType(): $TicketType<$Ticket<never>>;
        timedOut(arg0: number): boolean;
        setCreatedTick(arg0: number): void;
        isForceTicks(): boolean;
        getTicketLevel(): number;
        invokeIsExpired(arg0: number): boolean;
        constructor(arg0: $TicketType<$Ticket<never>>, arg1: number, arg2: $Ticket<never>);
        constructor(arg0: $TicketType<$Ticket<never>>, arg1: number, arg2: $Ticket<never>, arg3: boolean);
        get type(): $TicketType<$Ticket<never>>;
        set createdTick(value: number);
        get forceTicks(): boolean;
        get ticketLevel(): number;
    }
    export class $TicketType<T> {
        static create<T>(arg0: string, arg1: $Comparator<T>): $TicketType<T>;
        static create<T>(arg0: string, arg1: $Comparator<T>, arg2: number): $TicketType<T>;
        timeout(): number;
        getComparator(): $Comparator<T>;
        static PLAYER: $TicketType<$ChunkPos>;
        static POST_TELEPORT: $TicketType<number>;
        static DRAGON: $TicketType<$Unit>;
        static START: $TicketType<$Unit>;
        static FORCED: $TicketType<$ChunkPos>;
        static UNKNOWN: $TicketType<$ChunkPos>;
        static PORTAL: $TicketType<$BlockPos>;
        constructor(arg0: string, arg1: $Comparator<T>, arg2: number);
        get comparator(): $Comparator<T>;
    }
    export class $ChunkHolder$PlayerProvider {
    }
    export interface $ChunkHolder$PlayerProvider {
        getPlayers(arg0: $ChunkPos, arg1: boolean): $List<$ServerPlayer>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$PlayerProvider}.
     */
    export type $ChunkHolder$PlayerProvider_ = ((arg0: $ChunkPos, arg1: boolean) => $List_<$ServerPlayer>);
    export class $ServerBossEvent extends $BossEvent {
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        removePlayer(arg0: $ServerPlayer): void;
        addPlayer(arg0: $ServerPlayer): void;
        getPlayers(): $Collection<$ServerPlayer>;
        removeAllPlayers(): void;
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        constructor(arg0: $Component_, arg1: $BossEvent$BossBarColor_, arg2: $BossEvent$BossBarOverlay_);
        get players(): $Collection<$ServerPlayer>;
    }
    export class $ChunkHolder$LevelChangeListener {
    }
    export interface $ChunkHolder$LevelChangeListener {
        onLevelChange(arg0: $ChunkPos, arg1: $IntSupplier_, arg2: number, arg3: $IntConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$LevelChangeListener}.
     */
    export type $ChunkHolder$LevelChangeListener_ = ((arg0: $ChunkPos, arg1: $IntSupplier, arg2: number, arg3: $IntConsumer) => void);
    export class $ChunkHolder extends $GenerationChunkHolder implements $ChunkLevelTypeEventTracker, $IChunkHolder, $DuckChunkHolder {
        getSaveSyncFuture(): $CompletableFuture<never>;
        getSendSyncFuture(): $CompletableFuture<never>;
        isReadyForSaving(): boolean;
        addSendDependency(arg0: $CompletableFuture<never>): void;
        getFullChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getChunkToSend(): $LevelChunk;
        getTickingChunk(): $LevelChunk;
        c2me$undirtyLight(): void;
        setQueueLevel(arg0: number): void;
        updateFutures(arg0: $ChunkMap, arg1: $Executor_): void;
        setTicketLevel(arg0: number): void;
        addSaveDependency(arg0: $CompletableFuture<never>): void;
        getEntityTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        broadcastChanges(arg0: $LevelChunk): void;
        blockChanged(arg0: $BlockPos_): void;
        fabric_getCurrentEventLevelType(): $FullChunkStatus;
        fabric_setCurrentEventLevelType(arg0: $FullChunkStatus_): void;
        c2me$queueLightSectionDirty(lightType: $LightLayer_, sectionY: number): void;
        wasAccessibleSinceLastSave(): boolean;
        refreshAccessibility(): void;
        getTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        sectionLightChanged(arg0: $LightLayer_, arg1: number): void;
        c2me$shouldScheduleUndirty(): boolean;
        invokeUpdateFutures(arg0: $ChunkMap, arg1: $Executor_): void;
        static UNLOADED_LEVEL_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        entityTickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        tickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        startedWork: $AtomicReference<$ChunkStatus>;
        futures: $AtomicReferenceArray<$CompletableFuture<$ChunkResult<$ChunkAccess>>>;
        fullChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        constructor(arg0: $ChunkPos, arg1: number, arg2: $LevelHeightAccessor, arg3: $LevelLightEngine, arg4: $ChunkHolder$LevelChangeListener_, arg5: $ChunkHolder$PlayerProvider_);
        get saveSyncFuture(): $CompletableFuture<never>;
        get sendSyncFuture(): $CompletableFuture<never>;
        get readyForSaving(): boolean;
        get chunkToSend(): $LevelChunk;
        get tickingChunk(): $LevelChunk;
        set queueLevel(value: number);
        set ticketLevel(value: number);
    }
    export class $WorldGenRegion implements $WorldGenLevel {
        getSeed(): number;
        /**
         * @deprecated
         */
        getLevel(): $ServerLevel;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        isOldChunkAround(arg0: $ChunkPos, arg1: number): boolean;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getCenter(): $ChunkPos;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        hasChunk(arg0: number, arg1: number): boolean;
        getShade(arg0: $Direction_, arg1: boolean): number;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Vec3_, arg2: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        getServer(): $MinecraftServer;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        setCurrentlyGenerating(arg0: $Supplier_<string>): void;
        addFreshEntity(arg0: $Entity): boolean;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getMinBuildHeight(): number;
        getHeight(): number;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        enabledFeatures(): $FeatureFlagSet;
        getWorldBorder(): $WorldBorder;
        registryAccess(): $RegistryAccess;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getLevelData(): $LevelData;
        dimensionType(): $DimensionType;
        getLightEngine(): $LevelLightEngine;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        getSeaLevel(): number;
        getSkyDarken(): number;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        getBiomeManager(): $BiomeManager;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity>): $Player;
        nextSubTickCount(): number;
        isClientSide(): boolean;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        ensureCanWrite(arg0: $BlockPos_): boolean;
        getChunkSource(): $ChunkSource;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
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
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        getTimeOfDay(arg0: number): number;
        getMoonPhase(): number;
        getMoonBrightness(): number;
        getEntities(arg0: $Entity, arg1: $AABB_): $List<$Entity>;
        localvar$zeo000$openpartiesandclaims$onGetEntityCollisions(arg0: $List_<any>, arg1: $Entity, arg2: $AABB_): $List<any>;
        handler$zeo000$openpartiesandclaims$onGetEntitiesOfClass(arg0: $Class<any>, arg1: $AABB_, arg2: $Predicate_<any>, arg3: $CallbackInfoReturnable<any>): void;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
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
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
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
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        self(): $EntityGetter;
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
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity): boolean;
        getEntities(): $EntityArrayList;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
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
        constructor(arg0: $ServerLevel, arg1: $StaticCache2D<$GenerationChunkHolder>, arg2: $ChunkStep_, arg3: $ChunkAccess);
        get seed(): number;
        get level(): $ServerLevel;
        get center(): $ChunkPos;
        get random(): $RandomSource;
        get server(): $MinecraftServer;
        set currentlyGenerating(value: $Supplier_<string>);
        get minBuildHeight(): number;
        get worldBorder(): $WorldBorder;
        get levelData(): $LevelData;
        get lightEngine(): $LevelLightEngine;
        get seaLevel(): number;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get clientSide(): boolean;
        get chunkSource(): $ChunkSource;
        get difficulty(): $Difficulty;
        get moonPhase(): number;
        get moonBrightness(): number;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get minSection(): number;
        get maxSection(): number;
    }
    export class $ChunkTrackingView {
        static of(arg0: $ChunkPos, arg1: number): $ChunkTrackingView;
        static difference(arg0: $ChunkTrackingView, arg1: $ChunkTrackingView, arg2: $Consumer_<$ChunkPos>, arg3: $Consumer_<$ChunkPos>): void;
        static isInViewDistance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        static isWithinDistance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
        static EMPTY: $ChunkTrackingView;
    }
    export interface $ChunkTrackingView {
        contains(arg0: number, arg1: number, arg2: boolean): boolean;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $ChunkPos): boolean;
        forEach(arg0: $Consumer_<$ChunkPos>): void;
        isInViewDistance(arg0: number, arg1: number): boolean;
    }
    export class $GenerationChunkHolder {
        getLatestStatus(): $ChunkStatus;
        getAllFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        getQueueLevel(): number;
        isStatusDisallowed(arg0: $ChunkStatus_): boolean;
        getChunkIfPresent(arg0: $ChunkStatus_): $ChunkAccess;
        getOrCreateFuture(arg0: $ChunkStatus_): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        acquireStatusBump(arg0: $ChunkStatus_): boolean;
        replaceProtoChunk(arg0: $ImposterProtoChunk): void;
        completeFuture(arg0: $ChunkStatus_, arg1: $ChunkAccess): void;
        scheduleChunkGenerationTask(arg0: $ChunkStatus_, arg1: $ChunkMap): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        findHighestStatusWithPendingFuture(arg0: $ChunkStatus_): $ChunkStatus;
        failAndClearPendingFuturesBetween(arg0: $ChunkStatus_, arg1: $ChunkStatus_): void;
        getPos(): $ChunkPos;
        getFullStatus(): $FullChunkStatus;
        getPersistedStatus(): $ChunkStatus;
        removeTask(arg0: $ChunkGenerationTask): void;
        applyStep(arg0: $ChunkStep_, arg1: $GeneratingChunkMap, arg2: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getLatestChunk(): $ChunkAccess;
        getTicketLevel(): number;
        getGenerationRefCount(): number;
        decreaseGenerationRefCount(): void;
        getChunkIfPresentUnchecked(arg0: $ChunkStatus_): $ChunkAccess;
        increaseGenerationRefCount(): void;
        failAndClearPendingFuture(arg0: number, arg1: $CompletableFuture<$ChunkResult<$ChunkAccess>>): void;
        rescheduleChunkTask(arg0: $ChunkMap, arg1: $ChunkStatus_): void;
        updateHighestAllowedStatus(arg0: $ChunkMap): void;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        startedWork: $AtomicReference<$ChunkStatus>;
        futures: $AtomicReferenceArray<$CompletableFuture<$ChunkResult<$ChunkAccess>>>;
        constructor(arg0: $ChunkPos);
        get latestStatus(): $ChunkStatus;
        get allFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        get queueLevel(): number;
        get fullStatus(): $FullChunkStatus;
        get persistedStatus(): $ChunkStatus;
        get latestChunk(): $ChunkAccess;
        get ticketLevel(): number;
        get generationRefCount(): number;
    }
    export class $ChunkResult<T> {
        static of<T>(arg0: T): $ChunkResult<T>;
        static orElse<R>(arg0: $ChunkResult<R>, arg1: R): R;
        static error<T>(arg0: $Supplier_<string>): $ChunkResult<T>;
        static error<T>(arg0: string): $ChunkResult<T>;
    }
    export interface $ChunkResult<T> {
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        getError(): string;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        get success(): boolean;
    }
    export class $ServerChunkCache$ChunkAndHolder extends $Record {
        holder(): $ChunkHolder;
        chunk(): $LevelChunk;
        constructor(chunk: $LevelChunk, holder: $ChunkHolder);
    }
    export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension, $ServerChunkCacheAccessor, $IServerChunkManager, $ISyncLoadManager {
        save(arg0: boolean): void;
        broadcast(arg0: $Entity, arg1: $Packet<never>): void;
        move(arg0: $ServerPlayer): void;
        pollTask(): boolean;
        getLevel(): $Level;
        getGenerator(): $ChunkGenerator;
        getChunkDebugData(arg0: $ChunkPos): string;
        getPendingTasksCount(): number;
        setViewDistance(arg0: number): void;
        removeTicketsOnClosing(): void;
        getTickingGenerated(): number;
        getChunkFuture(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        broadcastAndSend(arg0: $Entity, arg1: $Packet<never>): void;
        getLightEngine(): $ThreadedLevelLightEngine;
        getGeneratorState(): $ChunkGeneratorStructureState;
        getDataStorage(): $DimensionDataStorage;
        chunkScanner(): $ChunkScanAccess;
        randomState(): $RandomState;
        blockChanged(arg0: $BlockPos_): void;
        getPoiManager(): $PoiManager;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        isPositionTicking(arg0: number): boolean;
        getLastSpawnState(): $NaturalSpawner$SpawnState;
        removeEntity(arg0: $Entity): void;
        addEntity(arg0: $Entity): void;
        setSimulationDistance(arg0: number): void;
        runDistanceManagerUpdates(): boolean;
        getCurrentSyncLoad(): $ChunkPos;
        handler$dfk000$smoothchunk$onSaveALlChunks(arg0: boolean, arg1: $CallbackInfo): void;
        handler$hec000$sable$init(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: $ChunkProgressListener, arg10: $ChunkStatusUpdateListener_, arg11: $Supplier_<any>, arg12: $CallbackInfo): void;
        self(): $ServerChunkCache;
        broadcast(arg0: $Entity, arg1: $CustomPacketPayload_): void;
        broadcastAndSend(arg0: $Entity, arg1: $CustomPacketPayload_): void;
        getTicketManager(): $DistanceManager;
        getMainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
        invokeGetVisibleChunkIfPresent(arg0: number): $ChunkHolder;
        invokeUpdateChunks(): boolean;
        mainThread: $Thread;
        mainThreadProcessor: $ServerChunkCache$MainThreadExecutor;
        distanceManager: $DistanceManager;
        level: $ServerLevel;
        lightEngine: $ThreadedLevelLightEngine;
        chunkMap: $ChunkMap;
        constructor(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: $ChunkProgressListener, arg10: $ChunkStatusUpdateListener_, arg11: $Supplier_<$DimensionDataStorage>);
        get generator(): $ChunkGenerator;
        get pendingTasksCount(): number;
        set viewDistance(value: number);
        get tickingGenerated(): number;
        get generatorState(): $ChunkGeneratorStructureState;
        get dataStorage(): $DimensionDataStorage;
        get poiManager(): $PoiManager;
        get lastSpawnState(): $NaturalSpawner$SpawnState;
        set simulationDistance(value: number);
        get currentSyncLoad(): $ChunkPos;
        get ticketManager(): $DistanceManager;
        get mainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
    }
    export class $ChunkResult$Success<T> extends $Record implements $ChunkResult<T> {
        value(): T;
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        getError(): string;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        constructor(arg0: T);
        get success(): boolean;
    }
    export class $PlayerMap {
        ignored(arg0: $ServerPlayer): boolean;
        ignoredOrUnknown(arg0: $ServerPlayer): boolean;
        unIgnorePlayer(arg0: $ServerPlayer): void;
        getAllPlayers(): $Set<$ServerPlayer>;
        ignorePlayer(arg0: $ServerPlayer): void;
        removePlayer(arg0: $ServerPlayer): void;
        addPlayer(arg0: $ServerPlayer, arg1: boolean): void;
        constructor();
        get allPlayers(): $Set<$ServerPlayer>;
    }
    export class $ChunkLevel {
        static isLoaded(arg0: number): boolean;
        static generationStatus(arg0: number): $ChunkStatus;
        static isEntityTicking(arg0: number): boolean;
        static isBlockTicking(arg0: number): boolean;
        static fullStatus(arg0: number): $FullChunkStatus;
        static byStatus(arg0: $FullChunkStatus_): number;
        static byStatus(arg0: $ChunkStatus_): number;
        static getStatusAroundFullChunk(arg0: number, arg1: $ChunkStatus_): $ChunkStatus;
        static getStatusAroundFullChunk(arg0: number): $ChunkStatus;
        static RADIUS_AROUND_FULL_CHUNK: number;
        static ENTITY_TICKING_LEVEL: number;
        static MAX_LEVEL: number;
        static BLOCK_TICKING_LEVEL: number;
        constructor();
    }
    export class $ServerEntity {
        getLastSentYRot(): number;
        getPositionBase(): $Vec3;
        getLastSentXRot(): number;
        sendPairingData(arg0: $ServerPlayer, arg1: $PacketAndPayloadAcceptor<$ClientGamePacketListener>): void;
        getLastSentMovement(): $Vec3;
        sendChanges(): void;
        removePairing(arg0: $ServerPlayer): void;
        addPairing(arg0: $ServerPlayer): void;
        getLastSentYHeadRot(): number;
        static FORCED_POS_UPDATE_PERIOD: number;
        constructor(arg0: $ServerLevel, arg1: $Entity, arg2: number, arg3: boolean, arg4: $Consumer_<$Packet<never>>);
        get lastSentYRot(): number;
        get positionBase(): $Vec3;
        get lastSentXRot(): number;
        get lastSentMovement(): $Vec3;
        get lastSentYHeadRot(): number;
    }
    export class $GeneratingChunkMap {
    }
    export interface $GeneratingChunkMap {
        acquireGeneration(arg0: number): $GenerationChunkHolder;
        releaseGeneration(arg0: $GenerationChunkHolder): void;
        runGenerationTasks(): void;
        applyStep(arg0: $GenerationChunkHolder, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        scheduleGenerationTask(arg0: $ChunkStatus_, arg1: $ChunkPos): $ChunkGenerationTask;
    }
    export class $ColumnPos extends $Record {
        x(): number;
        z(): number;
        static asLong(arg0: number, arg1: number): number;
        static getX(arg0: number): number;
        toLong(): number;
        static getZ(arg0: number): number;
        toChunkPos(): $ChunkPos;
        constructor(arg0: number, arg1: number);
    }
    export class $ChunkTaskPriorityQueue<T> {
        release(arg0: number, arg1: boolean): void;
        pop(): $Stream<$Either<T, $Runnable>>;
        submit(arg0: (T) | undefined, arg1: number, arg2: number): void;
        hasWork(): boolean;
        resortChunkTasks(arg0: number, arg1: $ChunkPos, arg2: number): void;
        getAcquired(): $LongSet;
        static PRIORITY_LEVEL_COUNT: number;
        constructor(arg0: string, arg1: number);
        get acquired(): $LongSet;
    }
    export class $ChunkGenerationTask {
        static create(arg0: $GeneratingChunkMap, arg1: $ChunkStatus_, arg2: $ChunkPos): $ChunkGenerationTask;
        runUntilWait(): $CompletableFuture<never>;
        getCenter(): $GenerationChunkHolder;
        markForCancellation(): void;
        targetStatus: $ChunkStatus;
        get center(): $GenerationChunkHolder;
    }
    export class $ServerChunkCache$MainThreadExecutor extends $BlockableEventLoop<$Runnable> {
        this$0: $ServerChunkCache;
        constructor(arg0: $ServerChunkCache, arg1: $Level_);
    }
    export class $BlockDestructionProgress implements $Comparable<$BlockDestructionProgress>, $BlockDestructionProgressExtension {
        compareTo(arg0: $BlockDestructionProgress): number;
        getId(): number;
        getPos(): $BlockPos;
        getProgress(): number;
        getUpdatedRenderTick(): number;
        create$setExtraPositions(arg0: $Set_<any>): void;
        create$getExtraPositions(): $Set<any>;
        setProgress(arg0: number): void;
        updateTick(arg0: number): void;
        constructor(arg0: number, arg1: $BlockPos_);
        get id(): number;
        get pos(): $BlockPos;
        get updatedRenderTick(): number;
    }
    export class $TickingTracker extends $ChunkTracker implements $ISimulationDistanceLevelPropagator {
        getLevel(arg0: $ChunkPos): number;
        replacePlayerTicketsLevel(arg0: number): void;
        runAllUpdates(): void;
        removeTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        removeTicket(arg0: number, arg1: $Ticket<never>): void;
        addTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        addTicket(arg0: number, arg1: $Ticket<never>): void;
        getTicketDebugString(arg0: number): string;
        getLevels(): $Long2ByteMap;
        levelCount: number;
        chunks: $Long2ByteMap;
        static SOURCE: number;
        static MAX_LEVEL: number;
        constructor();
        get levels(): $Long2ByteMap;
    }
    export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable, $ThreadedLevelLightEngineExt, $IServerLightingProvider {
        close(): void;
        axiom$checkSectionBlocks(cx: number, cy: number, cz: number, array: number[]): void;
        axiom$waitForPendingTasks(cx: number, cz: number): $CompletableFuture<any>;
        lightChunk(arg0: $ChunkAccess, arg1: boolean): $CompletableFuture<$ChunkAccess>;
        updateChunkStatus(arg0: $ChunkPos): void;
        tryScheduleUpdate(): void;
        initializeLight(arg0: $ChunkAccess, arg1: boolean): $CompletableFuture<$ChunkAccess>;
        waitForPendingTasks(arg0: number, arg1: number): $CompletableFuture<never>;
        runUpdate(): void;
        invokeUpdateChunkStatus(arg0: $ChunkPos): void;
        invokeEnqueue(arg0: number, arg1: number, arg2: $IntSupplier_, arg3: $ThreadedLevelLightEngine$TaskType_, arg4: $Runnable_): void;
        static DEFAULT_BATCH_SIZE: number;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(arg0: $LightChunkGetter, arg1: $ChunkMap, arg2: boolean, arg3: $ProcessorMailbox<$Runnable_>, arg4: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    export class $ThreadedLevelLightEngine$TaskType extends $Enum<$ThreadedLevelLightEngine$TaskType> {
        static values(): $ThreadedLevelLightEngine$TaskType[];
        static valueOf(arg0: string): $ThreadedLevelLightEngine$TaskType;
        static PRE_UPDATE: $ThreadedLevelLightEngine$TaskType;
        static POST_UPDATE: $ThreadedLevelLightEngine$TaskType;
    }
    /**
     * Values that may be interpreted as {@link $ThreadedLevelLightEngine$TaskType}.
     */
    export type $ThreadedLevelLightEngine$TaskType_ = "pre_update" | "post_update";
    export class $ChunkTaskPriorityQueueSorter$Release {
        task: $Runnable;
        pos: number;
        clearQueue: boolean;
        constructor(arg0: $Runnable_, arg1: number, arg2: boolean);
    }
    export class $DistanceManager$FixedPlayerDistanceChunkTracker extends $ChunkTracker implements $IChunkTicketManagerDistanceFromNearestPlayerTracker {
        runAllUpdates(): void;
        onLevelChange(arg0: number, arg1: number, arg2: number): void;
        getMaxDistance(): number;
        levelCount: number;
        chunks: $Long2ByteMap;
        this$0: $DistanceManager;
        static SOURCE: number;
        maxDistance: number;
        constructor(arg0: $DistanceManager, arg1: number);
    }
    export class $DistanceManager$PlayerTicketTracker extends $DistanceManager$FixedPlayerDistanceChunkTracker implements $IChunkTicketManagerNearbyChunkTicketUpdater {
        updateViewDistance(arg0: number): void;
        getDistances(): $Long2IntMap;
        levelCount: number;
        chunks: $Long2ByteMap;
        this$0: $DistanceManager;
        static SOURCE: number;
        maxDistance: number;
        constructor(arg0: $DistanceManager, arg1: number);
        get distances(): $Long2IntMap;
    }
    export class $DemoMode extends $ServerPlayerGameMode {
        static DEMO_DAYS: number;
        static TOTAL_PLAY_TICKS: number;
        level: $ServerLevel;
        player: $ServerPlayer;
        constructor(arg0: $ServerPlayer);
    }
    export class $ChunkTracker extends $DynamicGraphMinFixedPoint {
        update(arg0: number, arg1: number, arg2: boolean): void;
        getLevelFromSource(arg0: number): number;
        levelCount: number;
        static SOURCE: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $ChunkResult$Fail<T> extends $Record implements $ChunkResult<T> {
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        error(): $Supplier<string>;
        getError(): string;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        constructor(arg0: $Supplier_<string>);
        get success(): boolean;
    }
    export class $ChunkTaskPriorityQueueSorter$Message<T> {
        task: $Function<$ProcessorHandle<$Unit>, T>;
        pos: number;
        level: $IntSupplier;
        constructor(arg0: $Function_<$ProcessorHandle<$Unit>, T>, arg1: number, arg2: $IntSupplier_);
    }
    export class $FullChunkStatus extends $Enum<$FullChunkStatus> {
        static values(): $FullChunkStatus[];
        static valueOf(arg0: string): $FullChunkStatus;
        isOrAfter(arg0: $FullChunkStatus_): boolean;
        static ENTITY_TICKING: $FullChunkStatus;
        static INACCESSIBLE: $FullChunkStatus;
        static FULL: $FullChunkStatus;
        static BLOCK_TICKING: $FullChunkStatus;
    }
    /**
     * Values that may be interpreted as {@link $FullChunkStatus}.
     */
    export type $FullChunkStatus_ = "inaccessible" | "full" | "block_ticking" | "entity_ticking";
    export class $ServerLevel$EntityCallbacks implements $LevelCallback<$Entity> {
        onDestroyed(arg0: $Entity): void;
        onCreated(arg0: $Entity): void;
        onTrackingStart(arg0: $Entity): void;
        onTickingStart(arg0: $Entity): void;
        onSectionChange(arg0: $Entity): void;
        onTickingEnd(arg0: $Entity): void;
        onTrackingEnd(arg0: $Entity): void;
        this$0: $ServerLevel;
        constructor(arg0: $ServerLevel);
    }
    export class $ClientInformation extends $Record implements $ISyncedClientOptions {
        write(arg0: $FriendlyByteBuf): void;
        language(): string;
        allowsListing(): boolean;
        textFilteringEnabled(): boolean;
        chatVisibility(): $ChatVisiblity;
        static createDefault(): $ClientInformation;
        modelCustomisation(): number;
        viewDistance(): number;
        mainHand(): $HumanoidArm;
        chatColors(): boolean;
        setViewDistance(arg0: number): void;
        static MAX_LANGUAGE_LENGTH: number;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: string, arg1: number, arg2: $ChatVisiblity_, arg3: boolean, arg4: number, arg5: $HumanoidArm_, arg6: boolean, arg7: boolean);
    }
    export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider, $GeneratingChunkMap, $ChunkMapAccessor$1, $ChunkMapAccessor, $ServerChunkLoadingManagerAccessor, $IThreadedAnvilChunkStorage, $IVanillaChunkManager, $IChunkSystemAccess, $IThreadedAnvilChunkStorage$1 {
        size(): number;
        generator(): $ChunkGenerator;
        broadcast(arg0: $Entity, arg1: $Packet<never>): void;
        move(arg0: $ServerPlayer): void;
        tick(arg0: $BooleanSupplier_): void;
        tick(): void;
        getChunks(): $Iterable<$ChunkHolder>;
        getChunkQueueLevel(arg0: number): $IntSupplier;
        saveChunkIfNeeded(arg0: $ChunkHolder): boolean;
        promoteChunkMap(): boolean;
        acquireGeneration(arg0: number): $GenerationChunkHolder;
        isChunkTracked(arg0: $ServerPlayer, arg1: number, arg2: number): boolean;
        releaseGeneration(arg0: $GenerationChunkHolder): void;
        getChunkDebugData(arg0: $ChunkPos): string;
        scheduleUnload(arg0: number, arg1: $ChunkHolder): void;
        runGenerationTasks(): void;
        updatePlayerStatus(arg0: $ServerPlayer, arg1: boolean): void;
        getChunkToSend(arg0: number): $LevelChunk;
        scheduleOnMainThreadMailbox(arg0: $ChunkTaskPriorityQueueSorter$Message<$Runnable_>): void;
        anyPlayerCloseEnoughForSpawning(arg0: $ChunkPos): boolean;
        hasWork(): boolean;
        saveAllChunks(arg0: boolean): void;
        getStorageName(): string;
        getTickingGenerated(): number;
        c2me$runOneChunkAutoSave(): boolean;
        c2me$getTheChunkSystem(): $TheChunkSystem;
        broadcastAndSend(arg0: $Entity, arg1: $Packet<never>): void;
        getLightEngine(): $ThreadedLevelLightEngine;
        getPlayersWatching(arg0: $Entity): $List<$ServerPlayer>;
        randomState(): $RandomState;
        getDistanceManager(): $DistanceManager;
        getPoiManager(): $PoiManager;
        debugFuturesAndCreateReportedException(arg0: $IllegalStateException, arg1: string): $ReportedException;
        removeEntity(arg0: $Entity): void;
        addEntity(arg0: $Entity): void;
        getPlayers(arg0: $ChunkPos, arg1: boolean): $List<$ServerPlayer>;
        dumpChunks(arg0: $Writer): void;
        resendBiomesForChunks(arg0: $List_<$ChunkAccess>): void;
        onFullChunkStatusChange(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
        redirect$dfh000$smoothchunk$smoothChunksaveChunks(arg0: $ObjectCollection<any>): $ObjectIterator<any>;
        generatorState(): $ChunkGeneratorStructureState;
        applyStep(arg0: $GenerationChunkHolder, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        getVisibleChunkIfPresent(pos: number): $ChunkHolder;
        setServerViewDistance(arg0: number): void;
        getUpdatingChunkIfPresent(pos: number): $ChunkHolder;
        prepareEntityTickingChunk(arg0: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getPlayerViewDistance(arg0: $ServerPlayer): number;
        markChunkPendingToSend(arg0: $ServerPlayer, arg1: $ChunkPos): void;
        updateChunkScheduling(pos: number, level: number, holder: $ChunkHolder, i: number): $ChunkHolder;
        prepareTickingChunk(arg0: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        prepareAccessibleChunk(arg0: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        waitForLightBeforeSending(arg0: $ChunkPos, arg1: number): void;
        scheduleGenerationTask(arg0: $ChunkStatus_, arg1: $ChunkPos): $ChunkGenerationTask;
        getPlayersCloseForSpawning(arg0: $ChunkPos): $List<$ServerPlayer>;
        c2me$getSchedulingManager(): $SchedulingManager;
        getEntityMap(): $Int2ObjectMap<$ChunkMap$TrackedEntity>;
        getWorldGenerationProgressListener(): $ChunkProgressListener;
        getMainThreadExecutor(): $BlockableEventLoop<$Runnable>;
        getWorld(): $ServerLevel;
        invokeSave(arg0: $ChunkAccess): boolean;
        getGenerationContext(): $WorldGenContext;
        getTotalChunksLoadedCount(): $AtomicInteger;
        invokeGetChunkHolder(arg0: number): $ChunkHolder;
        invokeOnChunkStatusChange(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
        getChunkToNextSaveTimeMs(): $Long2LongMap;
        setChunkHolderListDirty(arg0: boolean): void;
        invokeUpdateHolderMap(): boolean;
        invokeGetUpdatedChunkNbt(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        getPointOfInterestStorage(): $PoiManager;
        invokeSendToPlayers(arg0: $LevelChunk): void;
        getCurrentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        getLightingProvider(): $ThreadedLevelLightEngine;
        fixerUpper: $DataFixer;
        toDrop: $LongSet;
        level: $ServerLevel;
        updatingChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        static $assertionsDisabled: boolean;
        static MAX_VIEW_DISTANCE: number;
        mainThreadExecutor: $BlockableEventLoop<$Runnable>;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        pendingUnloads: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        unloadQueue: $Queue<$Runnable>;
        static MIN_VIEW_DISTANCE: number;
        visibleChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        modified: boolean;
        static FORCED_TICKET_LEVEL: number;
        worker: $IOWorker;
        chunkSaveCooldowns: $Long2LongMap;
        constructor(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $BlockableEventLoop<$Runnable_>, arg6: $LightChunkGetter, arg7: $ChunkGenerator, arg8: $ChunkProgressListener, arg9: $ChunkStatusUpdateListener_, arg10: $Supplier_<$DimensionDataStorage>, arg11: number, arg12: boolean);
        get chunks(): $Iterable<$ChunkHolder>;
        get storageName(): string;
        get tickingGenerated(): number;
        get lightEngine(): $ThreadedLevelLightEngine;
        get distanceManager(): $DistanceManager;
        get poiManager(): $PoiManager;
        set serverViewDistance(value: number);
        get entityMap(): $Int2ObjectMap<$ChunkMap$TrackedEntity>;
        get worldGenerationProgressListener(): $ChunkProgressListener;
        get world(): $ServerLevel;
        get generationContext(): $WorldGenContext;
        get totalChunksLoadedCount(): $AtomicInteger;
        get chunkToNextSaveTimeMs(): $Long2LongMap;
        set chunkHolderListDirty(value: boolean);
        get pointOfInterestStorage(): $PoiManager;
        get currentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        get lightingProvider(): $ThreadedLevelLightEngine;
    }
    export class $ServerPlayerGameMode implements $AccessorServerPlayerGameMode {
        tick(): void;
        setLevel(arg0: $ServerLevel): void;
        destroyAndAck(arg0: $BlockPos_, arg1: number, arg2: string): void;
        getPreviousGameModeForPlayer(): $GameType;
        setGameModeForPlayer(arg0: $GameType_, arg1: $GameType_): void;
        changeGameModeForPlayer(arg0: $GameType_): boolean;
        getGameModeForPlayer(): $GameType;
        destroyBlock(arg0: $BlockPos_): boolean;
        useItem(arg0: $ServerPlayer, arg1: $Level_, arg2: $ItemStack_, arg3: $InteractionHand_): $InteractionResult;
        isCreative(): boolean;
        useItemOn(arg0: $ServerPlayer, arg1: $Level_, arg2: $ItemStack_, arg3: $InteractionHand_, arg4: $BlockHitResult): $InteractionResult;
        isSurvival(): boolean;
        handleBlockBreakAction(arg0: $BlockPos_, arg1: $ServerboundPlayerActionPacket$Action_, arg2: $Direction_, arg3: number, arg4: number): void;
        isDestroyingBlock(): boolean;
        level: $ServerLevel;
        player: $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get previousGameModeForPlayer(): $GameType;
        get creative(): boolean;
        get survival(): boolean;
        get destroyingBlock(): boolean;
    }
    export class $ChunkMap$DistanceManager extends $DistanceManager implements $ITACSTicketManager, $IThreadedAnvilChunkStorageTicketManager {
        c2me$getSuperClass(): $ChunkMap;
        getField_17443(): $ChunkMap;
        ticketThrottlerInput: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        ticketsToRelease: $LongSet;
        chunksToUpdateFutures: $Set<$ChunkHolder>;
        tickets: $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        ticketThrottler: $ChunkTaskPriorityQueueSorter;
        this$0: $ChunkMap;
        playersPerChunk: $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        static LOGGER: $Logger;
        mainThreadExecutor: $Executor;
        ticketThrottlerReleaser: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static PLAYER_TICKET_LEVEL: number;
        constructor(arg0: $ChunkMap, arg1: $Executor_, arg2: $Executor_);
        get field_17443(): $ChunkMap;
    }
    export class $ServerPlayer$RespawnPosAngle extends $Record {
        position(): $Vec3;
        static of(arg0: $Vec3_, arg1: $BlockPos_): $ServerPlayer$RespawnPosAngle;
        yaw(): number;
        constructor(position: $Vec3_, yaw: number);
    }
    export class $DistanceManager implements $IChunkTicketManager, $ChunkTicketManagerExtension {
        tickingTracker(): $TickingTracker;
        hasPlayersNearby(arg0: number): boolean;
        updateSimulationDistance(arg0: number): void;
        isChunkToRemove(arg0: number): boolean;
        shouldForceTicks(arg0: number): boolean;
        purgeStaleTickets(): void;
        c2me$closeNoTickVD(): void;
        c2me$getPendingLoadsCount(): number;
        removeTicketsOnClosing(): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        inBlockTickingRange(arg0: number): boolean;
        getNaturalSpawnChunkCount(): number;
        inEntityTickingRange(arg0: number): boolean;
        hasTickets(): boolean;
        runAllUpdates(arg0: $ChunkMap): boolean;
        getDebugStatus(): string;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        updateChunkForced(arg0: $ChunkPos, arg1: boolean): void;
        removeTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        removeTicket(arg0: number, arg1: $Ticket<never>): void;
        removePlayer(arg0: $SectionPos, arg1: $ServerPlayer): void;
        getChunk(arg0: number): $ChunkHolder;
        addPlayer(arg0: $SectionPos, arg1: $ServerPlayer): void;
        addTicket(arg0: number, arg1: $Ticket<never>): void;
        addTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T): void;
        handler$dkp000$c2me_notickvd$mapSimulationDistance(simulationDistance: number, ci: $CallbackInfo): void;
        updatePlayerTickets(viewDistance: number): void;
        updateChunkScheduling(arg0: number, arg1: number, arg2: $ChunkHolder, arg3: number): $ChunkHolder;
        getTicketDebugString(arg0: number): string;
        getPlayersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        getTicketsByPosition(): $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        invokeSetWatchDistance(arg0: number): void;
        getNearbyChunkTicketUpdater(): $DistanceManager$PlayerTicketTracker;
        getSimulationDistanceTracker(): $TickingTracker;
        ticketThrottlerInput: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        ticketsToRelease: $LongSet;
        chunksToUpdateFutures: $Set<$ChunkHolder>;
        tickets: $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        ticketThrottler: $ChunkTaskPriorityQueueSorter;
        playersPerChunk: $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        static LOGGER: $Logger;
        mainThreadExecutor: $Executor;
        ticketThrottlerReleaser: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static PLAYER_TICKET_LEVEL: number;
        constructor(arg0: $Executor_, arg1: $Executor_);
        get naturalSpawnChunkCount(): number;
        get debugStatus(): string;
        get playersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        get ticketsByPosition(): $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        get nearbyChunkTicketUpdater(): $DistanceManager$PlayerTicketTracker;
        get simulationDistanceTracker(): $TickingTracker;
    }
    export class $ServerPlayer extends $Player implements $VeilPacketManager$PacketSink, $IServerPlayer$2, $IServerPlayer$1, $ServerPlayerAccessor, $ServerPlayerKJS, $IServerPlayer, $IMixinServerPlayer_neoforge, $PlayerFreezeExtension, $ServerPlayerRespawnExtension, $ServerPlayerExt, $ServerPlayerPossessionAccess, $IOpenPACServerPlayer {
        getLanguage(): string;
        resetSentInfo(): void;
        hasDisconnected(): boolean;
        sendChatMessage(arg0: $OutgoingChatMessage, arg1: boolean, arg2: $ChatType$Bound_): void;
        getIpAddress(): string;
        doCheckFallDamage(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        showEndCredits(): void;
        setServerLevel(arg0: $ServerLevel): void;
        getRespawnAngle(): number;
        isRespawnForced(): boolean;
        setPlayerInput(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        initInventoryMenu(): void;
        /**
         * Changes the player's gamemode.
         * 
         * @param gameMode One of: `'survival'`, `'creative'`, `'adventure'`, `'spectator'`.
         */
        setGameMode(arg0: $GameType_): boolean;
        serverLevel(): $ServerLevel;
        allowsListing(): boolean;
        handler$jgj000$axiom$isInvulnerableTo(cir: $CallbackInfoReturnable<any>): void;
        findRespawnPositionAndUseSpawnBlock(arg0: boolean, arg1: $DimensionTransition$PostDimensionTransition_): $DimensionTransition;
        handler$icd000$tacz$initialGunOperateData(arg0: $ServerPlayer, arg1: boolean, arg2: $CallbackInfo): void;
        getStatsCounter(): $ServerStatsCounter;
        disconnect(): void;
        distantHorizons$getDimensionChangeDestination(): $ServerLevel;
        handler$zed000$openpartiesandclaims$onAttackPre(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$zed000$openpartiesandclaims$onAttack(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$glg000$distanthorizons$changeDimension(dimensionTransition: $DimensionTransition_, cir: $CallbackInfoReturnable<any>): void;
        handler$glg000$distanthorizons$setServerLevel(level: $ServerLevel, ci: $CallbackInfo): void;
        teleportTo(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        sendPacket(arg0: $Packet<any>): void;
        getRespawnPosition(): $BlockPos;
        setExperienceLevels(arg0: number): void;
        requestedViewDistance(): number;
        isChangingDimension(): boolean;
        setExperiencePoints(arg0: number): void;
        drop(arg0: boolean): boolean;
        trackEnteredOrExitedLavaOnVehicle(): void;
        railways$setPossessedConductor(arg0: $ConductorEntity): void;
        setSpawnExtraParticlesOnFall(arg0: boolean): void;
        static findRespawnAndUseSpawnBlock(arg0: $ServerLevel, arg1: $BlockPos_, arg2: number, arg3: boolean, arg4: boolean): ($ServerPlayer$RespawnPosAngle) | undefined;
        railways$getPossessedConductor(): $ConductorEntity;
        wrapMethod$hdd000$sable$teleportTo(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $Set_<any>, arg5: number, arg6: number, arg7: $Operation_<any>): boolean;
        restoreFrom(arg0: $ServerPlayer, arg1: boolean): void;
        getTabListDisplayName(): $Component;
        hasChangedDimension(): void;
        checkRidingStatistics(arg0: number, arg1: number, arg2: number): void;
        shouldFilterMessageTo(arg0: $ServerPlayer): boolean;
        resetLastActionTime(): void;
        clearRaidOmenPosition(): void;
        setChunkTrackingView(arg0: $ChunkTrackingView): void;
        createCommonSpawnInfo(arg0: $ServerLevel): $CommonPlayerSpawnInfo;
        getRespawnDimension(): $ResourceKey<$Level>;
        checkMovementStatistics(arg0: number, arg1: number, arg2: number): void;
        handler$hbc006$sable$tick(arg0: $CallbackInfo): void;
        setRaidOmenPosition(arg0: $BlockPos_): void;
        setTabListHeaderFooter(arg0: $Component_, arg1: $Component_): void;
        getChunkTrackingView(): $ChunkTrackingView;
        getRaidOmenPosition(): $BlockPos;
        getXaeroMinimapPlayerData(): $ServerPlayerData$1;
        trackStartFallingPosition(): void;
        sable$getQueuedFreeze(): $Pair<any, any>;
        copyRespawnPosition(arg0: $ServerPlayer): void;
        getXaero_OPAC_PlayerData(): $ServerPlayerDataAPI;
        setXaeroMinimapPlayerData(arg0: $ServerPlayerData$1): void;
        getXaeroWorldMapPlayerData(): $ServerPlayerData$2;
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData$2): void;
        axiom$isNoPhysicalTrigger(): boolean;
        setXaero_OPAC_PlayerData(arg0: $ServerPlayerDataAPI): void;
        sable$getRespawnPoint(): $UUID;
        axiom$setNoPhysicalTrigger(noPhysicalTrigger: boolean): void;
        sable$takeQueuedFreezeFrom(arg0: $ServerPlayer): void;
        sendSystemMessage(arg0: $Component_, arg1: boolean): void;
        getAdvancements(): $PlayerAdvancements;
        updateOptions(arg0: $ClientInformation_): void;
        lookAt(arg0: $EntityAnchorArgument$Anchor_, arg1: $Entity, arg2: $EntityAnchorArgument$Anchor_): void;
        setRespawnPosition(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_, arg2: number, arg3: boolean, arg4: boolean): void;
        xaerolib_getData(): $ServerPlayerData;
        xaerolib_setData(arg0: $ServerPlayerData): void;
        getChatVisibility(): $ChatVisiblity;
        setTabListHeader(arg0: $Component_): void;
        canChatInColor(): boolean;
        getTextFilter(): $TextFilter;
        loadGameTypes(arg0: $CompoundTag_): void;
        getLastActionTime(): number;
        clientInformation(): $ClientInformation;
        getChatSession(): $RemoteChatSession;
        refreshTabListName(): void;
        getLastSectionPos(): $SectionPos;
        getTabListHeader(): $Component;
        setLastSectionPos(arg0: $SectionPos): void;
        getTabListFooter(): $Component;
        setKnownMovement(arg0: $Vec3_): void;
        getRecipeBook(): $ServerRecipeBook;
        setChatSession(arg0: $RemoteChatSession_): void;
        sendServerStatus(arg0: $ServerStatus_): void;
        setTabListFooter(arg0: $Component_): void;
        doTick(): void;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        unlockAdvancement(id: $ResourceLocation_): void;
        getSpawnLocation(): $LevelBlock;
        setSpawnLocation(c: $LevelBlock): void;
        captureInventory(autoRestore: boolean): $Container;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        revokeAdvancement(id: $ResourceLocation_): void;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        getCamera(): $Entity;
        setCamera(arg0: $Entity): void;
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        lerpYRot: number;
        static USE_ITEM_INTERVAL: number;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        jumpTriggerTime: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        simulated$currentTypeWriter: $BlockPos;
        removalReason: $Entity$RemovalReason;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        boardingCooldown: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        noCulling: boolean;
        sbw$currentHitPart: $OBB$Part;
        gameMode: $ServerPlayerGameMode;
        appliedScale: number;
        object: $Object;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        noActionTime: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        yCloak: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        static FLAG_FALL_FLYING: number;
        xOld: number;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        invulnerableTime: number;
        wasUnderwater: boolean;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventory: $Inventory;
        random: $RandomSource;
        lerpSteps: number;
        yOld: number;
        static HAND_SLOTS: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        levelCallback: $EntityInLevelCallback;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        animStep: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        oBob: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        static FLAG_ONFIRE: number;
        sbw$beastKilled: boolean;
        zza: number;
        passengers: $ImmutableList<$Entity>;
        rotOffs: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static WAKE_UP_DURATION: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        zo: number;
        wonGame: boolean;
        lastHurt: number;
        walkAnimation: $WalkAnimationState;
        lastDamageSource: $DamageSource;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static SWIMMING_BB_HEIGHT: number;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        static $assertionsDisabled: boolean;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        xCloakO: number;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        rotA: number;
        static ENDER_SLOT_OFFSET: number;
        firstTick: boolean;
        static HELD_ITEM_SLOT: number;
        uuid: $UUID;
        lastHurtByPlayer: $Player;
        static SWING_DURATION: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        enderChestInventory: $PlayerEnderChestContainer;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        oRun: number;
        bob: number;
        experienceProgress: number;
        create_diesel_generators$turretPos: $BlockPos;
        totalExperience: number;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        foodData: $FoodData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MAIN_HAND: $EntityDataAccessor<number>;
        static EQUIPMENT_SLOT_OFFSET: number;
        defaultFlySpeed: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        static DATA_SHOULDER_LEFT: $EntityDataAccessor<$CompoundTag>;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        lastDamageStamp: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        fishing: $FishingHook;
        static SWIMMING_BB_WIDTH: number;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        static TOTAL_AIR_SUPPLY: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static DATA_SHOULDER_RIGHT: $EntityDataAccessor<$CompoundTag>;
        currentExplosionCause: $Entity;
        constructor(arg0: $MinecraftServer, arg1: $ServerLevel, arg2: $GameProfile, arg3: $ClientInformation_);
        get language(): string;
        get ipAddress(): string;
        get respawnAngle(): number;
        get respawnForced(): boolean;
        get statsCounter(): $ServerStatsCounter;
        set experienceLevels(value: number);
        get changingDimension(): boolean;
        set experiencePoints(value: number);
        set spawnExtraParticlesOnFall(value: boolean);
        get tabListDisplayName(): $Component;
        get respawnDimension(): $ResourceKey<$Level>;
        get advancements(): $PlayerAdvancements;
        get chatVisibility(): $ChatVisiblity;
        get textFilter(): $TextFilter;
        get lastActionTime(): number;
        set knownMovement(value: $Vec3_);
        get recipeBook(): $ServerRecipeBook;
        set creativeMode(value: boolean);
        get op(): boolean;
    }
    export class $ChunkTaskPriorityQueueSorter implements $ChunkHolder$LevelChangeListener, $AutoCloseable {
        static message<T>(arg0: $GenerationChunkHolder, arg1: $Function_<$ProcessorHandle<$Unit>, T>): $ChunkTaskPriorityQueueSorter$Message<T>;
        static message(arg0: $GenerationChunkHolder, arg1: $Runnable_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message(arg0: $Runnable_, arg1: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message<T>(arg0: $Function_<$ProcessorHandle<$Unit>, T>, arg1: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<T>;
        close(): void;
        static release(arg0: $Runnable_, arg1: number, arg2: boolean): $ChunkTaskPriorityQueueSorter$Release;
        hasWork(): boolean;
        getReleaseProcessor(arg0: $ProcessorHandle<$Runnable_>): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        getProcessor<T>(arg0: $ProcessorHandle<T>, arg1: boolean): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<T>>;
        onLevelChange(arg0: $ChunkPos, arg1: $IntSupplier_, arg2: number, arg3: $IntConsumer_): void;
        getDebugStatus(): string;
        constructor(arg0: $List_<$ProcessorHandle<never>>, arg1: $Executor_, arg2: number);
        get debugStatus(): string;
    }
    export class $ServerLevel extends $Level implements $WorldGenLevel, $VeilPacketManager$PacketSink, $IWorldMapServerLevel, $ServerWorldCache, $ServerLevelKJS, $ServerLevelAccessor, $ServerLevelSceneExtension, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $ServerLevelExt {
        save(arg0: $ProgressListener, arg1: boolean, arg2: boolean): void;
        unload(arg0: $LevelChunk): void;
        tick(arg0: $BooleanSupplier_): void;
        getSeed(): number;
        getLevel(): $ServerLevel;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $Predicate_<T>, arg2: $List_<T>, arg3: number): void;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $Predicate_<T>, arg2: $List_<T>): void;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $Predicate_<T>): $List<T>;
        redirect$fli000$observable$onTickBlock(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        redirect$fli000$observable$onTickPassenger(entity: $Entity): void;
        redirect$fli000$observable$onTickLiquid(state: $FluidState, level: $Level_, pos: $BlockPos_): void;
        handler$jgi000$axiom$onPlayerJoinedWorld(serverPlayer: $ServerPlayer, ci: $CallbackInfo): void;
        sendPacket(arg0: $Packet<any>): void;
        handler$dfn000$immersiveengineering$wireBlockCallback(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_, arg3: number, arg4: $CallbackInfo): void;
        sable$getPlotContainer(): $SubLevelContainer;
        handler$zec000$openpartiesandclaims$onIsPositionEntityTicking(arg0: $BlockPos_, arg1: $CallbackInfoReturnable<any>): void;
        isFlat(): boolean;
        addDuringTeleport(arg0: $Entity): void;
        resetEmptyTime(): void;
        canSleepThroughNights(): boolean;
        removePlayerImmediately(arg0: $ServerPlayer, arg1: $Entity$RemovalReason_): void;
        getStructureManager(): $StructureTemplateManager;
        findNearestMapStructure(arg0: $TagKey_<$Structure>, arg1: $BlockPos_, arg2: number, arg3: boolean): $BlockPos;
        setWeatherParameters(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        findLightningTargetAround(arg0: $BlockPos_): $BlockPos;
        registerCapabilityListener(arg0: $BlockPos_, arg1: $ICapabilityInvalidationListener_): void;
        addLegacyChunkEntities(arg0: $Stream<$Entity>): void;
        addWorldGenChunkEntities(arg0: $Stream<$Entity>): void;
        getXaero_wm_capabilities(): $ServerWorldCapabilities;
        fabric_registerCache(arg0: $BlockPos_, arg1: $BlockApiCacheImpl<any, any>): void;
        axiom$markChunkDirty(cx: number, cz: number): void;
        isNaturalSpawningAllowed(arg0: $ChunkPos): boolean;
        isNaturalSpawningAllowed(arg0: $BlockPos_): boolean;
        onStructureStartsAvailable(arg0: $ChunkAccess): void;
        setXaero_wm_capabilities(arg0: $ServerWorldCapabilities): void;
        fabric_invalidateCache(arg0: $BlockPos_): void;
        axiom$getWorldProperties(): $ServerWorldPropertiesRegistry;
        isPositionEntityTicking(arg0: $BlockPos_): boolean;
        tryAddFreshEntityWithPassengers(arg0: $Entity): boolean;
        cleanCapabilityListenerReferences(): void;
        wrapMethod$hdg000$sable$preExplode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_, arg9: $ParticleOptions_, arg10: $ParticleOptions_, arg11: $Holder_<any>, arg12: $Operation_<any>): $Explosion;
        axiom$getPendingLightUpdates(cx: number, cy: number, cz: number): number[];
        axiom$relightChunkStarlight(cx: number, cz: number): void;
        handler$jgi000$axiom$afterInit(ci: $CallbackInfo): void;
        handler$hed000$sable$saveSubLevels(arg0: $ProgressListener, arg1: boolean, arg2: boolean, arg3: $CallbackInfo): void;
        handler$hbh000$sable$kickEntity(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        axiom$processTasks(): void;
        addWithUUID(arg0: $Entity): boolean;
        sendParticles<T extends $ParticleOptions>(arg0: $ServerPlayer, arg1: T, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): boolean;
        sendParticles(arg0: $ServerPlayer, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: $Packet<never>): boolean;
        sendParticles<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): number;
        /**
         * @deprecated
         */
        setDragonFight(arg0: $EndDragonFight): void;
        structureManager(): $StructureManager;
        getDataStorage(): $DimensionDataStorage;
        getRandomPlayer(): $ServerPlayer;
        addNewPlayer(arg0: $ServerPlayer): void;
        getLogicalHeight(): number;
        isHandlingTick(): boolean;
        addRespawnedPlayer(arg0: $ServerPlayer): void;
        /**
         * @deprecated
         */
        getEntityOrPart(arg0: number): $Entity;
        findClosestBiome3d(arg0: $Predicate_<$Holder<$Biome>>, arg1: $BlockPos_, arg2: number, arg3: number, arg4: number): $Pair$1<$BlockPos, $Holder<$Biome>>;
        getPortalForcer(): $PortalForcer;
        setDefaultSpawnPos(arg0: $BlockPos_, arg1: number): void;
        tickPrecipitation(arg0: $BlockPos_): void;
        tickCustomSpawners(arg0: boolean, arg1: boolean): void;
        getPoiManager(): $PoiManager;
        tickNonPassenger(arg0: $Entity): void;
        resetWeatherCycle(): void;
        setChunkForced(arg0: number, arg1: number, arg2: boolean): boolean;
        isCloseToVillage(arg0: $BlockPos_, arg1: number): boolean;
        getForcedChunks(): $LongSet;
        clearBlockEvents(arg0: $BoundingBox): void;
        getAllEntities(): $Iterable<$Entity>;
        getDragonFight(): $EndDragonFight;
        saveDebugReport(arg0: $Path_): void;
        getRandomSequences(): $RandomSequences;
        getPathTypeCache(): $PathTypeCache;
        areEntitiesLoaded(arg0: number): boolean;
        getWatchdogStats(): string;
        onReputationEvent(arg0: $ReputationEventType, arg1: $Entity, arg2: $ReputationEventHandler_): void;
        sectionsToVillage(arg0: $SectionPos): number;
        startTickingChunk(arg0: $LevelChunk): void;
        getRandomSequence(arg0: $ResourceLocation_): $RandomSource;
        observable$track(entity: $Entity, consumer: $Consumer_<any>): void;
        sable$getSceneID(): number;
        sable$setSceneID(arg0: number): void;
        redirect$fli000$observable$onTickNonPassenger(entity: $Entity): void;
        handler$zec000$openpartiesandclaims$preTick(arg0: $BooleanSupplier_, arg1: $CallbackInfo): void;
        getChunkSource(): $ServerChunkCache;
        tickTime(): void;
        setDayTime(arg0: number): void;
        getDragons(): $List<$EnderDragon>;
        getPlayers(arg0: $Predicate_<$ServerPlayer>): $List<$ServerPlayer>;
        getPlayers(arg0: $Predicate_<$ServerPlayer>, arg1: number): $List<$ServerPlayer>;
        tickChunk(arg0: $LevelChunk, arg1: number): void;
        getRaids(): $Raids;
        getRaidAt(arg0: $BlockPos_): $Raid;
        isRaided(arg0: $BlockPos_): boolean;
        isVillage(arg0: $SectionPos): boolean;
        isVillage(arg0: $BlockPos_): boolean;
        updateSleepingPlayerList(): void;
        getPersistentData(): $CompoundTag;
        setCurrentlyGenerating(arg0: $Supplier_<string>): void;
        ensureCanWrite(arg0: $BlockPos_): boolean;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        self(): $EntityGetter;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        create$getEntityTickList(): $EntityTickList;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static RAIN_DELAY: $IntProvider;
        xaero_wm_capabilities: $ServerWorldCapabilities;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        navigatingMobs: $Set<$Mob>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        entityTickList: $EntityTickList;
        raids: $Raids;
        rainLevel: number;
        dragonParts: $Int2ObjectMap<$PartEntity<never>>;
        oThunderLevel: number;
        static THUNDER_DURATION: $IntProvider;
        serverLevelData: $ServerLevelData;
        static RAIN_DURATION: $IntProvider;
        players: $List<$ServerPlayer>;
        static $assertionsDisabled: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        isUpdatingNavigations: boolean;
        addend: number;
        entityManager: $PersistentEntitySectionManager<$Entity>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static END_SPAWN_POINT: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $MinecraftServer, arg1: $Executor_, arg2: $LevelStorageSource$LevelStorageAccess, arg3: $ServerLevelData, arg4: $ResourceKey_<$Level>, arg5: $LevelStem_, arg6: $ChunkProgressListener, arg7: boolean, arg8: number, arg9: $List_<$CustomSpawner_>, arg10: boolean, arg11: $RandomSequences);
        get seed(): number;
        get level(): $ServerLevel;
        get flat(): boolean;
        get dataStorage(): $DimensionDataStorage;
        get randomPlayer(): $ServerPlayer;
        get logicalHeight(): number;
        get handlingTick(): boolean;
        get portalForcer(): $PortalForcer;
        get poiManager(): $PoiManager;
        get forcedChunks(): $LongSet;
        get allEntities(): $Iterable<$Entity>;
        get randomSequences(): $RandomSequences;
        get pathTypeCache(): $PathTypeCache;
        get watchdogStats(): string;
        get chunkSource(): $ServerChunkCache;
        get dragons(): $List<$EnderDragon>;
        get persistentData(): $CompoundTag;
        set currentlyGenerating(value: $Supplier_<string>);
    }
    export class $SectionTracker extends $DynamicGraphMinFixedPoint {
        update(arg0: number, arg1: number, arg2: boolean): void;
        getLevelFromSource(arg0: number): number;
        levelCount: number;
        static SOURCE: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $ChunkMap$TrackedEntity implements $ChunkMapAccessor$TrackedEntity, $ChunkMapAccessor$TrackedEntityAccessor, $EntityTrackerAccessor {
        broadcast(arg0: $Packet<never>): void;
        broadcastRemoved(): void;
        updatePlayer(arg0: $ServerPlayer): void;
        broadcastAndSend(arg0: $Packet<never>): void;
        removePlayer(arg0: $ServerPlayer): void;
        updatePlayers(arg0: $List_<$ServerPlayer>): void;
        localvar$eml000$railways$securitycraft$modifyFlag(arg0: boolean): boolean;
        getSeenBy(): $Set<$ServerPlayerConnection>;
        getPlayersTracking(): $Set<$ServerPlayerConnection>;
        serverEntity: $ServerEntity;
        lastSectionPos: $SectionPos;
        this$0: $ChunkMap;
        entity: $Entity;
        constructor(arg0: $ChunkMap, arg1: $Entity, arg2: number, arg3: number, arg4: boolean);
        get seenBy(): $Set<$ServerPlayerConnection>;
        get playersTracking(): $Set<$ServerPlayerConnection>;
    }
    export class $DistanceManager$ChunkTicketTracker extends $ChunkTracker implements $TicketDistanceLevelPropagatorExtension {
        runDistanceUpdates(arg0: number): number;
        c2me$getTicketLevelUpdates(): $Long2IntLinkedOpenHashMap;
        levelCount: number;
        this$0: $DistanceManager;
        static SOURCE: number;
        constructor(arg0: $DistanceManager);
    }
}
