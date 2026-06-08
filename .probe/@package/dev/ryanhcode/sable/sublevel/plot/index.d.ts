import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $UUID_, $Map$Entry, $Set, $List, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ServerLevelPlotAccessor, $LevelPlotAccessor } from "@package/dev/kyanbirb/touys/mixin/sub_level_template";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $ObjectCollection } from "@package/it/unimi/dsi/fastutil/objects";
import { $ChunkHolder, $ChunkResult, $ChunkHolder$PlayerProvider_, $ChunkHolder$LevelChangeListener_, $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Holder$Reference, $Registry, $Holder_, $Holder, $Direction_, $HolderLookup } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $BlockEntitySubLevelActor, $BlockSubLevelLiftProvider$LiftProviderContext, $BlockEntitySubLevelReactionWheel } from "@package/dev/ryanhcode/sable/api/block";
import { $Iterable, $Class, $Object } from "@package/java/lang";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $ServerLevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $EntityGetter, $ClipContext, $ClipBlockStateContext, $CommonLevelAccessor, $LevelHeightAccessor, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $TickPriority_, $LevelTickAccess } from "@package/net/minecraft/world/ticks";
import { $BoundingBox3ic } from "@package/dev/ryanhcode/sable/companion/math";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelData } from "@package/net/minecraft/world/level/storage";
import { $ServerSubLevel, $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReferenceArray, $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SubLevelContainer, $KinematicContraption } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $Vector3dc } from "@package/org/joml";
export * as heat from "@package/dev/ryanhcode/sable/sublevel/plot/heat";

declare module "@package/dev/ryanhcode/sable/sublevel/plot" {
    export class $ClientLevelPlot extends $LevelPlot {
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $ClientSubLevel);
    }
    export class $LevelPlot implements $LevelPlotAccessor {
        contains(arg0: $Vec3_): boolean;
        contains(arg0: $ChunkPos): boolean;
        contains(arg0: $Vector3dc): boolean;
        contains(arg0: number, arg1: number): boolean;
        tick(): void;
        getBlockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        getBlockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        setBoundingBox(arg0: $BoundingBox3ic): void;
        onRemove(): void;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        onBlockChange(arg0: $BlockPos_, arg1: $BlockState_): void;
        getSubLevel(): $SubLevel;
        toGlobal(arg0: $ChunkPos): $ChunkPos;
        toLocal(arg0: $ChunkPos): $ChunkPos;
        getBoundingBox(): $BoundingBox3ic;
        getLightEngine(): $LevelLightEngine;
        getCenterBlock(): $BlockPos;
        getCenterChunk(): $ChunkPos;
        newEmptyChunk(arg0: $ChunkPos): void;
        getChunkMin(): $ChunkPos;
        getChunkMax(): $ChunkPos;
        expandIfNecessary(arg0: $BlockPos_): void;
        addChunkHolder(arg0: $ChunkPos, arg1: $PlotChunkHolder, arg2: boolean): void;
        updateBoundingBox(): void;
        getEmbeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        getBlockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        getLoadedChunks(): $Collection<$PlotChunkHolder>;
        touys$setExpandPlotIfNecessary(arg0: boolean): void;
        touys$getExpandPlotIfNecessary(): boolean;
        touys$getContainer(): $SubLevelContainer;
        touys$getBiome(): $ResourceKey<$Biome>;
        touys$getLogSize(): number;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $SubLevel);
        get blockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        get blockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        get subLevel(): $SubLevel;
        get lightEngine(): $LevelLightEngine;
        get centerBlock(): $BlockPos;
        get centerChunk(): $ChunkPos;
        get chunkMin(): $ChunkPos;
        get chunkMax(): $ChunkPos;
        get embeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        get blockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        get loadedChunks(): $Collection<$PlotChunkHolder>;
    }
    export class $PlotChunkHolder extends $ChunkHolder {
        static create(arg0: $Level_, arg1: $ChunkPos, arg2: $LevelLightEngine, arg3: $LevelChunk): $PlotChunkHolder;
        getChunk(): $LevelChunk;
        handleBlockChange(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: $BlockState_): void;
        getBoundingBox(): $BoundingBox3ic;
        setHeatSection(arg0: number, arg1: $HeatDataChunkSection): void;
        getHeatSection(arg0: number): $HeatDataChunkSection;
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
        constructor(arg0: $LevelChunk, arg1: $ChunkPos, arg2: $LevelHeightAccessor, arg3: $LevelLightEngine, arg4: $ChunkHolder$LevelChangeListener_, arg5: $ChunkHolder$PlayerProvider_);
        get chunk(): $LevelChunk;
        get boundingBox(): $BoundingBox3ic;
    }
    export class $HeatDataChunkSection {
        get(arg0: number, arg1: number, arg2: number): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static getIndex(arg0: number, arg1: number, arg2: number): number;
        static SIZE: number;
        constructor();
    }
    export class $EmbeddedPlotLevelAccessor implements $CommonLevelAccessor, $ServerLevelAccessor {
        getLevel(): $ServerLevel;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        getBlockState(arg0: $BlockPos_): $BlockState;
        hasChunk(arg0: number, arg1: number): boolean;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        getChunkSource(): $ChunkSource;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Vec3_, arg2: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        getServer(): $MinecraftServer;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        isClientSide(): boolean;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getLevelData(): $LevelData;
        getWorldBorder(): $WorldBorder;
        enabledFeatures(): $FeatureFlagSet;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getFluidState(arg0: $BlockPos_): $FluidState;
        nextSubTickCount(): number;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        getBiomeManager(): $BiomeManager;
        getSkyDarken(): number;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        getLightEngine(): $LevelLightEngine;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        dimensionType(): $DimensionType;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        getEntities(arg0: $Entity, arg1: $AABB_): $List<$Entity>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        handler$zeo000$openpartiesandclaims$onGetEntitiesOfClass(arg0: $Class<any>, arg1: $AABB_, arg2: $Predicate_<any>, arg3: $CallbackInfoReturnable<any>): void;
        localvar$zeo000$openpartiesandclaims$onGetEntityCollisions(arg0: $List_<any>, arg1: $Entity, arg2: $AABB_): $List<any>;
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity>): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number): T;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        getPlayerByUUID(arg0: $UUID_): $Player;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        isWaterAt(arg0: $BlockPos_): boolean;
        hasBiomes(): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        getMinBuildHeight(): number;
        containsAnyLiquid(arg0: $AABB_): boolean;
        getHeight(): number;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        dayTime(): number;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        getDifficulty(): $Difficulty;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: $TickPriority_): void;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        self(): $EntityGetter;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        canSeeSky(arg0: $BlockPos_): boolean;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBlockCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        getCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        noCollision(arg0: $Entity, arg1: $AABB_): boolean;
        noCollision(arg0: $AABB_): boolean;
        noCollision(arg0: $Entity): boolean;
        noBlockCollision(arg0: $Entity, arg1: $AABB_): boolean;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        isUnobstructed(arg0: $Entity): boolean;
        collidesWithSuffocatingBlock(arg0: $Entity, arg1: $AABB_): boolean;
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        getDirectSignalTo(arg0: $BlockPos_): number;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity): boolean;
        getTimeOfDay(arg0: number): number;
        getMoonPhase(): number;
        getMoonBrightness(): number;
        getEntities(): $EntityArrayList;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getLightEmission(arg0: $BlockPos_): number;
        clip(arg0: $ClipContext): $BlockHitResult;
        getMaxLightLevel(): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        handler$iak000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        getSectionIndex(arg0: number): number;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        constructor(arg0: $LevelPlot);
        get level(): $ServerLevel;
        get chunkSource(): $ChunkSource;
        get random(): $RandomSource;
        get server(): $MinecraftServer;
        get clientSide(): boolean;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get biomeManager(): $BiomeManager;
        get skyDarken(): number;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get lightEngine(): $LevelLightEngine;
        get seaLevel(): number;
        get minBuildHeight(): number;
        get difficulty(): $Difficulty;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get moonPhase(): number;
        get moonBrightness(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $ServerLevelPlot extends $LevelPlot implements $ServerLevelPlotAccessor {
        load(arg0: $CompoundTag_): void;
        save(): $CompoundTag;
        setBiome(arg0: $ResourceKey_<$Biome>): void;
        removeContraption(arg0: $KinematicContraption): void;
        addContraption(arg0: $KinematicContraption): void;
        getLiftProviders(): $ObjectCollection<$BlockSubLevelLiftProvider$LiftProviderContext>;
        getContraptions(): $ObjectCollection<$KinematicContraption>;
        kickAllEntities(): void;
        destroyAllBlocks(): void;
        static invokeLogLoadingErrors$touys_$md$5bc4b9$0(arg0: $ChunkPos, arg1: number, arg2: string): void;
        touys$getLightEngine(): $LevelLightEngine;
        touys$invokeNewNonLitChunk(arg0: $ChunkPos): void;
        touys$invokeLightChunk(arg0: $LevelChunk): void;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $ServerSubLevel);
        set biome(value: $ResourceKey_<$Biome>);
        get liftProviders(): $ObjectCollection<$BlockSubLevelLiftProvider$LiftProviderContext>;
        get contraptions(): $ObjectCollection<$KinematicContraption>;
    }
}
