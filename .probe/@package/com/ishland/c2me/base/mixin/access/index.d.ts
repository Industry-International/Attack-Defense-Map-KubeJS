import { $Long2ObjectLinkedOpenHashMap, $Long2LongMap, $Long2ObjectOpenHashMap, $Long2IntMap, $LongSet, $Long2ByteMap, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $PerlinNoise, $ImprovedNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $Queue, $List, $EnumSet, $List_, $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $SortedArraySet } from "@package/net/minecraft/util";
import { $IntSupplier_ } from "@package/java/util/function";
import { $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder, $BlockPos_, $Direction_, $Direction, $Direction8 } from "@package/net/minecraft/core";
import { $DistanceManager, $ChunkHolder, $Ticket, $FullChunkStatus_, $ServerChunkCache$MainThreadExecutor, $ServerLevel, $ChunkMap, $ThreadedLevelLightEngine$TaskType_, $DistanceManager$PlayerTicketTracker, $ServerPlayer, $TickingTracker, $ThreadedLevelLightEngine } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $WorldGenContext, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Runnable_, $Runnable } from "@package/java/lang";
import { $BoundingBox, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Xoroshiro128PlusPlus } from "@package/net/minecraft/world/level/levelgen";
import { $ShufflingList$WeightedEntry } from "@package/net/minecraft/world/entity/ai/behavior";
import { $LevelReader, $ChunkPos, $LevelHeightAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $SavedTick, $SerializableTickContainer, $ScheduledTick } from "@package/net/minecraft/world/ticks";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $PalettedContainerRO, $PalettedContainer, $LevelChunk, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $RegionFileVersion, $RegionStorageInfo, $SimpleRegionStorage, $RegionFile, $IOWorker } from "@package/net/minecraft/world/level/chunk/storage";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $PiecesContainer, $StructurePieceType } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $Double2DoubleFunction, $DoubleList, $Double2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Rotation, $Mirror } from "@package/net/minecraft/world/level/block";

declare module "@package/com/ishland/c2me/base/mixin/access" {
    export class $IThreadedAnvilChunkStorageTicketManager {
    }
    export interface $IThreadedAnvilChunkStorageTicketManager {
        c2me$getSuperClass(): $ChunkMap;
    }
    /**
     * Values that may be interpreted as {@link $IThreadedAnvilChunkStorageTicketManager}.
     */
    export type $IThreadedAnvilChunkStorageTicketManager_ = (() => $ChunkMap);
    export class $IXoroshiro128PlusPlusRandom {
    }
    export interface $IXoroshiro128PlusPlusRandom {
        getImplementation(): $Xoroshiro128PlusPlus;
        get implementation(): $Xoroshiro128PlusPlus;
    }
    /**
     * Values that may be interpreted as {@link $IXoroshiro128PlusPlusRandom}.
     */
    export type $IXoroshiro128PlusPlusRandom_ = (() => $Xoroshiro128PlusPlus);
    export class $IChunkGenerator {
    }
    export interface $IChunkGenerator {
    }
    export class $ISimplexNoiseSampler {
    }
    export interface $ISimplexNoiseSampler {
        getPermutation(): number[];
        get permutation(): number[];
    }
    /**
     * Values that may be interpreted as {@link $ISimplexNoiseSampler}.
     */
    export type $ISimplexNoiseSampler_ = (() => number[]);
    export class $IMultiNoiseBiomeSource {
    }
    export interface $IMultiNoiseBiomeSource {
    }
    export class $ISimulationDistanceLevelPropagator {
    }
    export interface $ISimulationDistanceLevelPropagator {
        getLevels(): $Long2ByteMap;
        get levels(): $Long2ByteMap;
    }
    /**
     * Values that may be interpreted as {@link $ISimulationDistanceLevelPropagator}.
     */
    export type $ISimulationDistanceLevelPropagator_ = (() => $Long2ByteMap);
    export class $IChunkTicket {
    }
    export interface $IChunkTicket {
        invokeIsExpired(arg0: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IChunkTicket}.
     */
    export type $IChunkTicket_ = ((arg0: number) => boolean);
    export class $ISerializingRegionBasedStorage {
    }
    export interface $ISerializingRegionBasedStorage {
        getStorageAccess(): $SimpleRegionStorage;
        get storageAccess(): $SimpleRegionStorage;
    }
    /**
     * Values that may be interpreted as {@link $ISerializingRegionBasedStorage}.
     */
    export type $ISerializingRegionBasedStorage_ = (() => $SimpleRegionStorage);
    export class $IChunkTicketManagerNearbyChunkTicketUpdater {
    }
    export interface $IChunkTicketManagerNearbyChunkTicketUpdater {
        getDistances(): $Long2IntMap;
        get distances(): $Long2IntMap;
    }
    /**
     * Values that may be interpreted as {@link $IChunkTicketManagerNearbyChunkTicketUpdater}.
     */
    export type $IChunkTicketManagerNearbyChunkTicketUpdater_ = (() => $Long2IntMap);
    export class $IChunkNoiseSamplerDensityInterpolator {
    }
    export interface $IChunkNoiseSamplerDensityInterpolator {
        invokeInterpolateX(arg0: number): void;
        invokeInterpolateY(arg0: number): void;
        invokeInterpolateZ(arg0: number): void;
    }
    export class $IRegionBasedStorage {
    }
    export interface $IRegionBasedStorage {
        invokeGetRegionFile(arg0: $ChunkPos): $RegionFile;
    }
    /**
     * Values that may be interpreted as {@link $IRegionBasedStorage}.
     */
    export type $IRegionBasedStorage_ = ((arg0: $ChunkPos) => $RegionFile);
    export class $IStructureStart {
    }
    export interface $IStructureStart {
        getChildren(): $PiecesContainer;
        getStructure(): $Structure;
        getReferences(): number;
        get children(): $PiecesContainer;
        get structure(): $Structure;
        get references(): number;
    }
    export class $IServerLightingProvider {
    }
    export interface $IServerLightingProvider {
        invokeUpdateChunkStatus(arg0: $ChunkPos): void;
        invokeEnqueue(arg0: number, arg1: number, arg2: $IntSupplier_, arg3: $ThreadedLevelLightEngine$TaskType_, arg4: $Runnable_): void;
    }
    export class $IRegionFile {
    }
    export interface $IRegionFile {
        getCompressionFormat(): $RegionFileVersion;
        invokeWriteChunk(arg0: $ChunkPos, arg1: $ByteBuffer): void;
        get compressionFormat(): $RegionFileVersion;
    }
    export class $ITACSTicketManager {
    }
    export interface $ITACSTicketManager {
        getField_17443(): $ChunkMap;
        get field_17443(): $ChunkMap;
    }
    /**
     * Values that may be interpreted as {@link $ITACSTicketManager}.
     */
    export type $ITACSTicketManager_ = (() => $ChunkMap);
    export class $IChunkTicketManagerDistanceFromNearestPlayerTracker {
    }
    export interface $IChunkTicketManagerDistanceFromNearestPlayerTracker {
        getMaxDistance(): number;
        get maxDistance(): number;
    }
    /**
     * Values that may be interpreted as {@link $IChunkTicketManagerDistanceFromNearestPlayerTracker}.
     */
    export type $IChunkTicketManagerDistanceFromNearestPlayerTracker_ = (() => number);
    export class $IBlendingData {
    }
    export interface $IBlendingData {
        getSurfaceHeights(): number[];
        getOldHeightLimit(): $LevelHeightAccessor;
        get surfaceHeights(): number[];
        get oldHeightLimit(): $LevelHeightAccessor;
    }
    export class $IChunkTickScheduler<T> {
    }
    export interface $IChunkTickScheduler<T> extends $SerializableTickContainer<T> {
        getTicks(): $List<$SavedTick<T>>;
        getTickQueue(): $Queue<$ScheduledTick<T>>;
        get ticks(): $List<$SavedTick<T>>;
        get tickQueue(): $Queue<$ScheduledTick<T>>;
    }
    export class $INbtCompound {
    }
    export interface $INbtCompound {
    }
    export class $ISimpleRandom {
    }
    export interface $ISimpleRandom {
        getSeed(): number;
        invokeSetSeed(arg0: number): void;
        get seed(): number;
    }
    export class $ISimpleTickScheduler<T> {
    }
    export interface $ISimpleTickScheduler<T> extends $SerializableTickContainer<T> {
        getScheduledTicks(): $List<$SavedTick<T>>;
        get scheduledTicks(): $List<$SavedTick<T>>;
    }
    export class $IChunkTicketManager {
    }
    export interface $IChunkTicketManager {
        getNearbyChunkTicketUpdater(): $DistanceManager$PlayerTicketTracker;
        getSimulationDistanceTracker(): $TickingTracker;
        invokeSetWatchDistance(arg0: number): void;
        getTicketsByPosition(): $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        getPlayersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        get nearbyChunkTicketUpdater(): $DistanceManager$PlayerTicketTracker;
        get simulationDistanceTracker(): $TickingTracker;
        get ticketsByPosition(): $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        get playersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
    }
    export class $IUpgradeData {
    }
    export interface $IUpgradeData {
        getSidesToUpgrade(): $EnumSet<$Direction8>;
        getCenterIndicesToUpgrade(): number[][];
        get sidesToUpgrade(): $EnumSet<$Direction8>;
        get centerIndicesToUpgrade(): number[][];
    }
    export class $IPerlinNoiseSampler {
    }
    export interface $IPerlinNoiseSampler {
        getPermutation(): number[];
        get permutation(): number[];
    }
    /**
     * Values that may be interpreted as {@link $IPerlinNoiseSampler}.
     */
    export type $IPerlinNoiseSampler_ = (() => number[]);
    export class $IStructureWeightSampler {
    }
    export interface $IStructureWeightSampler {
    }
    export class $IInterpolatedNoiseSampler {
    }
    export interface $IInterpolatedNoiseSampler {
        getMaxValue(): number;
        getXzScale(): number;
        getYFactor(): number;
        getYScale(): number;
        getScaledXzScale(): number;
        getScaledYScale(): number;
        getXzFactor(): number;
        getLowerInterpolatedNoise(): $PerlinNoise;
        getInterpolationNoise(): $PerlinNoise;
        getUpperInterpolatedNoise(): $PerlinNoise;
        getSmearScaleMultiplier(): number;
        get maxValue(): number;
        get xzScale(): number;
        get YFactor(): number;
        get YScale(): number;
        get scaledXzScale(): number;
        get scaledYScale(): number;
        get xzFactor(): number;
        get lowerInterpolatedNoise(): $PerlinNoise;
        get interpolationNoise(): $PerlinNoise;
        get upperInterpolatedNoise(): $PerlinNoise;
        get smearScaleMultiplier(): number;
    }
    export class $IStructurePiece {
    }
    export interface $IStructurePiece {
        getType(): $StructurePieceType;
        getRotation(): $Rotation;
        getBoundingBox(): $BoundingBox;
        getMirror(): $Mirror;
        getChainLength(): number;
        getFacing(): $Direction;
        get type(): $StructurePieceType;
        get rotation(): $Rotation;
        get boundingBox(): $BoundingBox;
        get mirror(): $Mirror;
        get chainLength(): number;
        get facing(): $Direction;
    }
    export class $IXoroshiro128PlusPlusRandomDeriver {
    }
    export interface $IXoroshiro128PlusPlusRandomDeriver {
        getSeedHi(): number;
        getSeedLo(): number;
        get seedHi(): number;
        get seedLo(): number;
    }
    export class $IServerEntityManager {
    }
    export interface $IServerEntityManager {
        invokeGetLoadedChunks(): $LongSet;
    }
    /**
     * Values that may be interpreted as {@link $IServerEntityManager}.
     */
    export type $IServerEntityManager_ = (() => $LongSet);
    export class $IChunkNoiseSampler {
    }
    export interface $IChunkNoiseSampler {
        getHorizontalCellBlockCount(): number;
        getMinimumCellY(): number;
        getCellBlockZ(): number;
        getCellBlockX(): number;
        getCellBlockY(): number;
        getStartBiomeX(): number;
        getStartBlockZ(): number;
        getStartBiomeZ(): number;
        getStartBlockX(): number;
        getStartBlockY(): number;
        getIsSamplingForCaches(): boolean;
        getVerticalCellCount(): number;
        getHorizontalCellCount(): number;
        getIsInInterpolationLoop(): boolean;
        getVerticalCellBlockCount(): number;
        get horizontalCellBlockCount(): number;
        get minimumCellY(): number;
        get cellBlockZ(): number;
        get cellBlockX(): number;
        get cellBlockY(): number;
        get startBiomeX(): number;
        get startBlockZ(): number;
        get startBiomeZ(): number;
        get startBlockX(): number;
        get startBlockY(): number;
        get isSamplingForCaches(): boolean;
        get verticalCellCount(): number;
        get horizontalCellCount(): number;
        get isInInterpolationLoop(): boolean;
        get verticalCellBlockCount(): number;
    }
    export class $IXoroshiro128PlusPlusRandomImpl {
    }
    export interface $IXoroshiro128PlusPlusRandomImpl {
        getSeedHi(): number;
        setSeedLo(arg0: number): void;
        getSeedLo(): number;
        setSeedHi(arg0: number): void;
    }
    export class $IServerChunkManager {
    }
    export interface $IServerChunkManager {
        getMainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
        getTicketManager(): $DistanceManager;
        invokeUpdateChunks(): boolean;
        get mainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
        get ticketManager(): $DistanceManager;
    }
    export class $IState<S> {
    }
    export interface $IState<S> {
        getCodec(): $MapCodec<S>;
        get codec(): $MapCodec<S>;
    }
    /**
     * Values that may be interpreted as {@link $IState}.
     */
    export type $IState_<S> = (() => $MapCodec_<S>);
    export class $IFlowableFluid {
    }
    export interface $IFlowableFluid {
        invokeGetLevelDecreasePerBlock(arg0: $LevelReader): number;
        invokeReceivesFlow(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
        invokeIsMatchingAndStill(arg0: $FluidState): boolean;
    }
    export class $IVersionedChunkStorage {
    }
    export interface $IVersionedChunkStorage {
        invokeGetStorageKey(): $RegionStorageInfo;
        getWorker(): $IOWorker;
        get worker(): $IOWorker;
    }
    export class $IStorageIoWorker {
    }
    export interface $IStorageIoWorker {
        invokeGetOrComputeBlendingStatus(arg0: number, arg1: number): $CompletableFuture<$BitSet>;
    }
    /**
     * Values that may be interpreted as {@link $IStorageIoWorker}.
     */
    export type $IStorageIoWorker_ = ((arg0: number, arg1: number) => $CompletableFuture<$BitSet>);
    export class $IDensityFunctionsCaveScaler {
        static invokeScaleTunnels(value: number): number;
        static invokeScaleCaves(value: number): number;
    }
    export interface $IDensityFunctionsCaveScaler {
    }
    export class $ISyncedClientOptions {
    }
    export interface $ISyncedClientOptions {
        setViewDistance(arg0: number): void;
        set viewDistance(value: number);
    }
    /**
     * Values that may be interpreted as {@link $ISyncedClientOptions}.
     */
    export type $ISyncedClientOptions_ = ((arg0: number) => void);
    export class $IThreadedAnvilChunkStorage {
    }
    export interface $IThreadedAnvilChunkStorage {
        getMainThreadExecutor(): $BlockableEventLoop<$Runnable>;
        getWorldGenerationProgressListener(): $ChunkProgressListener;
        getWorld(): $ServerLevel;
        getPointOfInterestStorage(): $PoiManager;
        invokeUpdateHolderMap(): boolean;
        invokeGetChunkHolder(arg0: number): $ChunkHolder;
        invokeSendToPlayers(arg0: $LevelChunk): void;
        getGenerationContext(): $WorldGenContext;
        getCurrentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        invokeOnChunkStatusChange(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
        invokeGetUpdatedChunkNbt(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        getLightingProvider(): $ThreadedLevelLightEngine;
        getTotalChunksLoadedCount(): $AtomicInteger;
        setChunkHolderListDirty(arg0: boolean): void;
        getChunkToNextSaveTimeMs(): $Long2LongMap;
        invokeSave(arg0: $ChunkAccess): boolean;
        get mainThreadExecutor(): $BlockableEventLoop<$Runnable>;
        get worldGenerationProgressListener(): $ChunkProgressListener;
        get world(): $ServerLevel;
        get pointOfInterestStorage(): $PoiManager;
        get generationContext(): $WorldGenContext;
        get currentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        get lightingProvider(): $ThreadedLevelLightEngine;
        get totalChunksLoadedCount(): $AtomicInteger;
        set chunkHolderListDirty(value: boolean);
        get chunkToNextSaveTimeMs(): $Long2LongMap;
    }
    export class $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper {
    }
    export interface $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper {
        getScaleFunction(): $Double2DoubleFunction;
        get scaleFunction(): $Double2DoubleFunction;
    }
    /**
     * Values that may be interpreted as {@link $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper}.
     */
    export type $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper_ = (() => $Double2DoubleFunction_);
    export class $IBlockEntity {
    }
    export interface $IBlockEntity {
    }
    export class $IAquiferSamplerFluidLevel {
    }
    export interface $IAquiferSamplerFluidLevel {
    }
    export class $IWeightedList<U> {
    }
    export interface $IWeightedList<U> {
        getEntries(): $List<$ShufflingList$WeightedEntry<U>>;
        get entries(): $List<$ShufflingList$WeightedEntry<U>>;
    }
    /**
     * Values that may be interpreted as {@link $IWeightedList}.
     */
    export type $IWeightedList_<U> = (() => $List_<$ShufflingList$WeightedEntry<U>>);
    export class $IBlender {
        static getBLENDING_CHUNK_DISTANCE_THRESHOLD(): number;
        static get BLENDING_CHUNK_DISTANCE_THRESHOLD(): number;
    }
    export interface $IBlender {
    }
    export class $IOctavePerlinNoiseSampler {
    }
    export interface $IOctavePerlinNoiseSampler {
        getAmplitudes(): $DoubleList;
        getPersistence(): number;
        getLacunarity(): number;
        getOctaveSamplers(): $ImprovedNoise[];
        get amplitudes(): $DoubleList;
        get persistence(): number;
        get lacunarity(): number;
        get octaveSamplers(): $ImprovedNoise[];
    }
    export class $IWorldChunk {
    }
    export interface $IWorldChunk {
        isLoadedToWorld(): boolean;
        get loadedToWorld(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IWorldChunk}.
     */
    export type $IWorldChunk_ = (() => boolean);
    export class $IAtomicSimpleRandomDeriver {
    }
    export interface $IAtomicSimpleRandomDeriver {
        getSeed(): number;
        get seed(): number;
    }
    /**
     * Values that may be interpreted as {@link $IAtomicSimpleRandomDeriver}.
     */
    export type $IAtomicSimpleRandomDeriver_ = (() => number);
    export class $IChunkSection {
    }
    export interface $IChunkSection {
        getBiomeContainer(): $PalettedContainerRO<$Holder<$Biome>>;
        getBlockStateContainer(): $PalettedContainer<$BlockState>;
        get biomeContainer(): $PalettedContainerRO<$Holder<$Biome>>;
        get blockStateContainer(): $PalettedContainer<$BlockState>;
    }
    export class $IChunkHolder {
    }
    export interface $IChunkHolder {
        invokeUpdateFutures(arg0: $ChunkMap, arg1: $Executor_): void;
    }
    /**
     * Values that may be interpreted as {@link $IChunkHolder}.
     */
    export type $IChunkHolder_ = ((arg0: $ChunkMap, arg1: $Executor) => void);
    export class $IBelowZeroRetrogen {
    }
    export interface $IBelowZeroRetrogen {
        getMissingBedrock(): $BitSet;
        invokeGetTargetStatus(): $ChunkStatus;
        get missingBedrock(): $BitSet;
    }
    export class $IWeightedListEntry {
    }
    export interface $IWeightedListEntry {
        invokeGetShuffledOrder(): number;
        invokeSetShuffledOrder(arg0: number): void;
    }
}
