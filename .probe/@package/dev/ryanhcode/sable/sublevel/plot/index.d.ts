import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $UUID_, $Map$Entry, $Set, $List, $List_, $Collection } from "@package/java/util";
import { $LevelPlotAccessor } from "@package/dev/kyanbirb/touys/mixin/sub_level_template";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $ChunkHolder, $ChunkResult, $ChunkHolder$PlayerProvider_, $ChunkHolder$LevelChangeListener_, $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $Holder$Reference, $Holder_, $Holder, $Direction_, $HolderLookup } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $BlockEntitySubLevelActor, $BlockEntitySubLevelReactionWheel } from "@package/dev/ryanhcode/sable/api/block";
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
import { $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReferenceArray, $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $Vector3dc } from "@package/org/joml";
export * as heat from "@package/dev/ryanhcode/sable/sublevel/plot/heat";

declare module "@package/dev/ryanhcode/sable/sublevel/plot" {
    export class $ClientLevelPlot extends $LevelPlot {
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $ClientSubLevel);
    }
    export class $LevelPlot implements $LevelPlotAccessor {
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $Vec3_): boolean;
        contains(arg0: $ChunkPos): boolean;
        contains(arg0: $Vector3dc): boolean;
        tick(): void;
        getLightEngine(): $LevelLightEngine;
        getSubLevel(): $SubLevel;
        onRemove(): void;
        updateBoundingBox(): void;
        addChunkHolder(arg0: $ChunkPos, arg1: $PlotChunkHolder, arg2: boolean): void;
        getBlockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        getBlockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        getBoundingBox(): $BoundingBox3ic;
        toGlobal(arg0: $ChunkPos): $ChunkPos;
        setBoundingBox(arg0: $BoundingBox3ic): void;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        toLocal(arg0: $ChunkPos): $ChunkPos;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        onBlockChange(arg0: $BlockPos_, arg1: $BlockState_): void;
        getBlockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        getEmbeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        getChunkMin(): $ChunkPos;
        getCenterBlock(): $BlockPos;
        newEmptyChunk(arg0: $ChunkPos): void;
        getLoadedChunks(): $Collection<$PlotChunkHolder>;
        getChunkMax(): $ChunkPos;
        getCenterChunk(): $ChunkPos;
        expandIfNecessary(arg0: $BlockPos_): void;
        touys$getExpandPlotIfNecessary(): boolean;
        touys$setExpandPlotIfNecessary(arg0: boolean): void;
        touys$getContainer(): $SubLevelContainer;
        touys$getBiome(): $ResourceKey<$Biome>;
        touys$getLogSize(): number;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $SubLevel);
        get lightEngine(): $LevelLightEngine;
        get subLevel(): $SubLevel;
        get blockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        get blockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        get blockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        get embeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        get chunkMin(): $ChunkPos;
        get centerBlock(): $BlockPos;
        get loadedChunks(): $Collection<$PlotChunkHolder>;
        get chunkMax(): $ChunkPos;
        get centerChunk(): $ChunkPos;
    }
    export class $PlotChunkHolder extends $ChunkHolder {
        static create(arg0: $Level_, arg1: $ChunkPos, arg2: $LevelLightEngine, arg3: $LevelChunk): $PlotChunkHolder;
        getBoundingBox(): $BoundingBox3ic;
        getChunk(): $LevelChunk;
        handleBlockChange(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: $BlockState_): void;
        getHeatSection(arg0: number): $HeatDataChunkSection;
        setHeatSection(arg0: number, arg1: $HeatDataChunkSection): void;
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
        get boundingBox(): $BoundingBox3ic;
        get chunk(): $LevelChunk;
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
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        hasChunk(arg0: number, arg1: number): boolean;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getLightEngine(): $LevelLightEngine;
        dimensionType(): $DimensionType;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        getBiomeManager(): $BiomeManager;
        nextSubTickCount(): number;
        getSkyDarken(): number;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        getBlockTicks(): $LevelTickAccess<$Block>;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        getLevelData(): $LevelData;
        getFluidState(arg0: $BlockPos_): $FluidState;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        enabledFeatures(): $FeatureFlagSet;
        getWorldBorder(): $WorldBorder;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        getChunkSource(): $ChunkSource;
        isClientSide(): boolean;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Vec3_, arg2: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        getServer(): $MinecraftServer;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        getEntities(arg0: $Entity, arg1: $AABB_): $List<$Entity>;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity>): $Player;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number): T;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getPlayerByUUID(arg0: $UUID_): $Player;
        handler$zeo000$openpartiesandclaims$onGetEntitiesOfClass(arg0: $Class<any>, arg1: $AABB_, arg2: $Predicate_<any>, arg3: $CallbackInfoReturnable<any>): void;
        localvar$zeo000$openpartiesandclaims$onGetEntityCollisions(arg0: $List_<any>, arg1: $Entity, arg2: $AABB_): $List<any>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        isWaterAt(arg0: $BlockPos_): boolean;
        hasBiomes(): boolean;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        getHeight(): number;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        getMinBuildHeight(): number;
        containsAnyLiquid(arg0: $AABB_): boolean;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        dayTime(): number;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number): void;
        getDifficulty(): $Difficulty;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        self(): $EntityGetter;
        canSeeSky(arg0: $BlockPos_): boolean;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        isUnobstructed(arg0: $Entity): boolean;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        getCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        collidesWithSuffocatingBlock(arg0: $Entity, arg1: $AABB_): boolean;
        noCollision(arg0: $Entity, arg1: $AABB_): boolean;
        noCollision(arg0: $Entity): boolean;
        noCollision(arg0: $AABB_): boolean;
        noBlockCollision(arg0: $Entity, arg1: $AABB_): boolean;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        getBlockCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        getDirectSignalTo(arg0: $BlockPos_): number;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        addFreshEntity(arg0: $Entity): boolean;
        getTimeOfDay(arg0: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getEntities(): $EntityArrayList;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        clip(arg0: $ClipContext): $BlockHitResult;
        handler$iak000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getLightEmission(arg0: $BlockPos_): number;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getMinSection(): number;
        getSectionsCount(): number;
        getSectionIndex(arg0: number): number;
        getMaxBuildHeight(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getModelData(arg0: $BlockPos_): $ModelData;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        constructor(arg0: $LevelPlot);
        get level(): $ServerLevel;
        get lightEngine(): $LevelLightEngine;
        get seaLevel(): number;
        get biomeManager(): $BiomeManager;
        get skyDarken(): number;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get blockTicks(): $LevelTickAccess<$Block>;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get clientSide(): boolean;
        get random(): $RandomSource;
        get server(): $MinecraftServer;
        get minBuildHeight(): number;
        get difficulty(): $Difficulty;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get moonBrightness(): number;
        get moonPhase(): number;
        get maxLightLevel(): number;
        get maxSection(): number;
        get minSection(): number;
        get sectionsCount(): number;
        get maxBuildHeight(): number;
    }
}
