import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Long2ObjectLinkedOpenHashMap, $Long2LongMap, $Long2IntMap, $LongSet, $Long2ByteMap, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $PerlinNoise, $SimplexNoise, $ImprovedNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $Queue, $List, $EnumSet, $List_, $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $IntSupplier_, $Supplier } from "@package/java/util/function";
import { $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $ObjectListIterator, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $DistanceManager, $ChunkHolder, $FullChunkStatus_, $ServerChunkCache$MainThreadExecutor, $ServerLevel, $ChunkMap, $ThreadedLevelLightEngine$TaskType_, $ServerPlayer, $TickingTracker, $ThreadedLevelLightEngine } from "@package/net/minecraft/server/level";
import { $Holder_, $Holder, $BlockPos_, $Direction_, $Direction, $Direction8 } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $WorldGenContext, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Runnable_, $Runnable } from "@package/java/lang";
import { $BoundingBox, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Beardifier$Rigid, $PositionalRandomFactory, $Xoroshiro128PlusPlus, $DensityFunctions$BeardifierOrMarker, $RandomState, $Aquifer$FluidPicker, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";
import { $ShufflingList$WeightedEntry } from "@package/net/minecraft/world/entity/ai/behavior";
import { $LevelReader, $ChunkPos, $LevelHeightAccessor, $BlockGetter, $StructureManager } from "@package/net/minecraft/world/level";
import { $SavedTick, $SerializableTickContainer, $ScheduledTick } from "@package/net/minecraft/world/ticks";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Blender } from "@package/net/minecraft/world/level/levelgen/blending";
import { $Climate$RTree, $Climate$Parameter_, $Climate$RTree$Node, $Climate$ParameterList, $Climate$Parameter, $Biome } from "@package/net/minecraft/world/level/biome";
import { $PalettedContainerRO, $LevelChunk, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $RegionFileVersion, $RegionStorageInfo, $SimpleRegionStorage, $RegionFile, $IOWorker } from "@package/net/minecraft/world/level/chunk/storage";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $PiecesContainer, $StructurePieceType } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $Double2DoubleFunction, $DoubleList, $Double2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Rotation, $Mirror } from "@package/net/minecraft/world/level/block";

declare module "@package/com/ishland/c2me/base/mixin/access" {
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
        invokeGetBiomeEntries(): $Climate$ParameterList<$Holder<$Biome>>;
    }
    /**
     * Values that may be interpreted as {@link $IMultiNoiseBiomeSource}.
     */
    export type $IMultiNoiseBiomeSource_ = (() => $Climate$ParameterList<$Holder_<$Biome>>);
    export class $IDensityFunctionTypesEndIslands {
    }
    export interface $IDensityFunctionTypesEndIslands {
        getSampler(): $SimplexNoise;
        get sampler(): $SimplexNoise;
    }
    /**
     * Values that may be interpreted as {@link $IDensityFunctionTypesEndIslands}.
     */
    export type $IDensityFunctionTypesEndIslands_ = (() => $SimplexNoise);
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
    export class $IPlayerEntity {
    }
    export interface $IPlayerEntity {
    }
    export class $IMultiNoiseUtilSearchTreeTreeLeafNode<T> {
    }
    export interface $IMultiNoiseUtilSearchTreeTreeLeafNode<T> {
        getValue(): T;
        get value(): T;
    }
    /**
     * Values that may be interpreted as {@link $IMultiNoiseUtilSearchTreeTreeLeafNode}.
     */
    export type $IMultiNoiseUtilSearchTreeTreeLeafNode_<T> = (() => T);
    export class $IChunkTicket {
    }
    export interface $IChunkTicket {
    }
    export class $INbtList {
    }
    export interface $INbtList {
    }
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
    export class $IDoublePerlinNoiseSampler {
    }
    export interface $IDoublePerlinNoiseSampler {
        getSecondSampler(): $PerlinNoise;
        getFirstSampler(): $PerlinNoise;
        getAmplitude(): number;
        get secondSampler(): $PerlinNoise;
        get firstSampler(): $PerlinNoise;
        get amplitude(): number;
    }
    export class $IChunkNoiseSamplerDensityInterpolator {
    }
    export interface $IChunkNoiseSamplerDensityInterpolator {
        invokeSwapBuffers(): void;
        invokeInterpolateY(arg0: number): void;
        invokeInterpolateX(arg0: number): void;
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
        getReferences(): number;
        getStructure(): $Structure;
        get children(): $PiecesContainer;
        get references(): number;
        get structure(): $Structure;
    }
    export class $IServerLightingProvider {
    }
    export interface $IServerLightingProvider {
        invokeEnqueue(arg0: number, arg1: number, arg2: $IntSupplier_, arg3: $ThreadedLevelLightEngine$TaskType_, arg4: $Runnable_): void;
        invokeUpdateChunkStatus(arg0: $ChunkPos): void;
    }
    export class $IRegionFile {
    }
    export interface $IRegionFile {
        invokeWriteChunk(arg0: $ChunkPos, arg1: $ByteBuffer): void;
        getCompressionFormat(): $RegionFileVersion;
        get compressionFormat(): $RegionFileVersion;
    }
    export class $IChunkLevelManager {
    }
    export interface $IChunkLevelManager {
        getSimulationDistanceLevelPropagator(): $TickingTracker;
        invokeSetWatchDistance(arg0: number): void;
        getPlayersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        get simulationDistanceLevelPropagator(): $TickingTracker;
        get playersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
    }
    export class $IBlendingData {
    }
    export interface $IBlendingData {
        getOldHeightLimit(): $LevelHeightAccessor;
        getSurfaceHeights(): number[];
        get oldHeightLimit(): $LevelHeightAccessor;
        get surfaceHeights(): number[];
    }
    export class $IAquiferSamplerImpl {
    }
    export interface $IAquiferSamplerImpl {
        getFluidLevelSampler(): $Aquifer$FluidPicker;
        getSizeX(): number;
        getStartY(): number;
        getStartX(): number;
        getBlockPositions(): number[];
        getSizeZ(): number;
        getRandomDeriver(): $PositionalRandomFactory;
        getStartZ(): number;
        get fluidLevelSampler(): $Aquifer$FluidPicker;
        get sizeX(): number;
        get startY(): number;
        get startX(): number;
        get blockPositions(): number[];
        get sizeZ(): number;
        get randomDeriver(): $PositionalRandomFactory;
        get startZ(): number;
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
    export class $IThreadExecutor {
    }
    export interface $IThreadExecutor {
        invokeRunTask(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IThreadExecutor}.
     */
    export type $IThreadExecutor_ = (() => boolean);
    export class $IMultiNoiseUtilSearchTree<T> {
    }
    export interface $IMultiNoiseUtilSearchTree<T> {
        getFirstNode(): $Climate$RTree$Node<T>;
        get firstNode(): $Climate$RTree$Node<T>;
    }
    /**
     * Values that may be interpreted as {@link $IMultiNoiseUtilSearchTree}.
     */
    export type $IMultiNoiseUtilSearchTree_<T> = (() => $Climate$RTree$Node<T>);
    export class $IMultiNoiseUtilSearchTreeTreeBranchNode<T> {
    }
    export interface $IMultiNoiseUtilSearchTreeTreeBranchNode<T> {
        getSubTree(): $Climate$RTree$Node<T>[];
        get subTree(): $Climate$RTree$Node<T>[];
    }
    /**
     * Values that may be interpreted as {@link $IMultiNoiseUtilSearchTreeTreeBranchNode}.
     */
    export type $IMultiNoiseUtilSearchTreeTreeBranchNode_<T> = (() => $Climate$RTree$Node<T>[]);
    export class $ISimpleTickScheduler<T> {
    }
    export interface $ISimpleTickScheduler<T> extends $SerializableTickContainer<T> {
        getScheduledTicks(): $List<$SavedTick<T>>;
        get scheduledTicks(): $List<$SavedTick<T>>;
    }
    export class $IMultiNoiseUtilSearchTreeTreeNode {
    }
    export interface $IMultiNoiseUtilSearchTreeTreeNode {
        getParameters(): $Climate$Parameter[];
        get parameters(): $Climate$Parameter[];
    }
    /**
     * Values that may be interpreted as {@link $IMultiNoiseUtilSearchTreeTreeNode}.
     */
    export type $IMultiNoiseUtilSearchTreeTreeNode_ = (() => $Climate$Parameter_[]);
    export class $IThreadedAnvilChunkStorageLevelManager {
    }
    export interface $IThreadedAnvilChunkStorageLevelManager {
        c2me$getSuperClass(): $ChunkMap;
    }
    /**
     * Values that may be interpreted as {@link $IThreadedAnvilChunkStorageLevelManager}.
     */
    export type $IThreadedAnvilChunkStorageLevelManager_ = (() => $ChunkMap);
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
    export class $IChunkLevelManagerNearbyChunkTicketUpdater {
    }
    export interface $IChunkLevelManagerNearbyChunkTicketUpdater {
        getDistances(): $Long2IntMap;
        get distances(): $Long2IntMap;
    }
    /**
     * Values that may be interpreted as {@link $IChunkLevelManagerNearbyChunkTicketUpdater}.
     */
    export type $IChunkLevelManagerNearbyChunkTicketUpdater_ = (() => $Long2IntMap);
    export class $IStructureWeightSampler {
        static getSTRUCTURE_WEIGHT_TABLE(): number[];
        static get STRUCTURE_WEIGHT_TABLE(): number[];
    }
    export interface $IStructureWeightSampler {
        getJunctionsIter(): $ObjectListIterator<$JigsawJunction>;
        getPiecesIter(): $ObjectListIterator<$Beardifier$Rigid>;
        get junctionsIter(): $ObjectListIterator<$JigsawJunction>;
        get piecesIter(): $ObjectListIterator<$Beardifier$Rigid>;
    }
    export class $IInterpolatedNoiseSampler {
    }
    export interface $IInterpolatedNoiseSampler {
        getXzScale(): number;
        getYFactor(): number;
        getMaxValue(): number;
        getScaledXzScale(): number;
        getScaledYScale(): number;
        getXzFactor(): number;
        getYScale(): number;
        getInterpolationNoise(): $PerlinNoise;
        getUpperInterpolatedNoise(): $PerlinNoise;
        getLowerInterpolatedNoise(): $PerlinNoise;
        getSmearScaleMultiplier(): number;
        get xzScale(): number;
        get YFactor(): number;
        get maxValue(): number;
        get scaledXzScale(): number;
        get scaledYScale(): number;
        get xzFactor(): number;
        get YScale(): number;
        get interpolationNoise(): $PerlinNoise;
        get upperInterpolatedNoise(): $PerlinNoise;
        get lowerInterpolatedNoise(): $PerlinNoise;
        get smearScaleMultiplier(): number;
    }
    export class $IXoroshiro128PlusPlusRandomSplitter {
    }
    export interface $IXoroshiro128PlusPlusRandomSplitter {
        getSeedHi(): number;
        getSeedLo(): number;
        get seedHi(): number;
        get seedLo(): number;
    }
    export class $IStructurePiece {
    }
    export interface $IStructurePiece {
        getType(): $StructurePieceType;
        getChainLength(): number;
        getFacing(): $Direction;
        getRotation(): $Rotation;
        getBoundingBox(): $BoundingBox;
        getMirror(): $Mirror;
        get type(): $StructurePieceType;
        get chainLength(): number;
        get facing(): $Direction;
        get rotation(): $Rotation;
        get boundingBox(): $BoundingBox;
        get mirror(): $Mirror;
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
        getStartBlockX(): number;
        getStartBlockY(): number;
        getStartBlockZ(): number;
        getMinimumCellY(): number;
        getStartBiomeX(): number;
        getStartBiomeZ(): number;
        getCellBlockX(): number;
        getCellBlockY(): number;
        getStartCellZ(): number;
        getBeardifying(): $DensityFunctions$BeardifierOrMarker;
        getStartCellX(): number;
        getCellBlockZ(): number;
        getVerticalCellCount(): number;
        getIsSamplingForCaches(): boolean;
        getIsInInterpolationLoop(): boolean;
        invokeSampleBlockState(): $BlockState;
        getHorizontalBiomeEnd(): number;
        getHorizontalCellCount(): number;
        getVerticalCellBlockCount(): number;
        get horizontalCellBlockCount(): number;
        get startBlockX(): number;
        get startBlockY(): number;
        get startBlockZ(): number;
        get minimumCellY(): number;
        get startBiomeX(): number;
        get startBiomeZ(): number;
        get cellBlockX(): number;
        get cellBlockY(): number;
        get startCellZ(): number;
        get beardifying(): $DensityFunctions$BeardifierOrMarker;
        get startCellX(): number;
        get cellBlockZ(): number;
        get verticalCellCount(): number;
        get isSamplingForCaches(): boolean;
        get isInInterpolationLoop(): boolean;
        get horizontalBiomeEnd(): number;
        get horizontalCellCount(): number;
        get verticalCellBlockCount(): number;
    }
    export class $IXoroshiro128PlusPlusRandomImpl {
    }
    export interface $IXoroshiro128PlusPlusRandomImpl {
        setSeedLo(arg0: number): void;
        getSeedHi(): number;
        setSeedHi(arg0: number): void;
        getSeedLo(): number;
    }
    export class $IServerChunkManager {
    }
    export interface $IServerChunkManager {
        getTicketManager(): $DistanceManager;
        getMainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
        invokeUpdateChunks(): boolean;
        get ticketManager(): $DistanceManager;
        get mainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
    }
    export class $IChunkLevelManagerDistanceFromNearestPlayerTracker {
    }
    export interface $IChunkLevelManagerDistanceFromNearestPlayerTracker {
        getMaxDistance(): number;
        get maxDistance(): number;
    }
    /**
     * Values that may be interpreted as {@link $IChunkLevelManagerDistanceFromNearestPlayerTracker}.
     */
    export type $IChunkLevelManagerDistanceFromNearestPlayerTracker_ = (() => number);
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
        invokeIsMatchingAndStill(arg0: $FluidState): boolean;
        invokeGetLevelDecreasePerBlock(arg0: $LevelReader): number;
        invokeReceivesFlow(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
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
        static invokeScaleCaves(value: number): number;
        static invokeScaleTunnels(value: number): number;
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
    export class $ICheckedRandomSplitter {
    }
    export interface $ICheckedRandomSplitter {
        getSeed(): number;
        get seed(): number;
    }
    /**
     * Values that may be interpreted as {@link $ICheckedRandomSplitter}.
     */
    export type $ICheckedRandomSplitter_ = (() => number);
    export class $IThreadedAnvilChunkStorage {
    }
    export interface $IThreadedAnvilChunkStorage {
        getWorld(): $ServerLevel;
        getWorldGenerationProgressListener(): $ChunkProgressListener;
        getMainThreadExecutor(): $BlockableEventLoop<$Runnable>;
        invokeSendToPlayers(arg0: $LevelChunk): void;
        getPointOfInterestStorage(): $PoiManager;
        getCurrentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        invokeUpdateHolderMap(): boolean;
        invokeGetUpdatedChunkNbt(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        setChunkHolderListDirty(arg0: boolean): void;
        getGenerationContext(): $WorldGenContext;
        getTotalChunksLoadedCount(): $AtomicInteger;
        invokeGetChunkHolder(arg0: number): $ChunkHolder;
        invokeOnChunkStatusChange(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
        getLightingProvider(): $ThreadedLevelLightEngine;
        getChunkToNextSaveTimeMs(): $Long2LongMap;
        invokeSave(arg0: $ChunkAccess): boolean;
        get world(): $ServerLevel;
        get worldGenerationProgressListener(): $ChunkProgressListener;
        get mainThreadExecutor(): $BlockableEventLoop<$Runnable>;
        get pointOfInterestStorage(): $PoiManager;
        get currentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        set chunkHolderListDirty(value: boolean);
        get generationContext(): $WorldGenContext;
        get totalChunksLoadedCount(): $AtomicInteger;
        get lightingProvider(): $ThreadedLevelLightEngine;
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
    export class $INoiseChunkGenerator {
    }
    export interface $INoiseChunkGenerator {
        invokeCreateChunkNoiseSampler(arg0: $ChunkAccess, arg1: $StructureManager, arg2: $Blender, arg3: $RandomState): $NoiseChunk;
        getFluidLevelSampler(): $Supplier<$Aquifer$FluidPicker>;
        get fluidLevelSampler(): $Supplier<$Aquifer$FluidPicker>;
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
        getOctaveSamplers(): $ImprovedNoise[];
        getLacunarity(): number;
        getAmplitudes(): $DoubleList;
        getPersistence(): number;
        get octaveSamplers(): $ImprovedNoise[];
        get lacunarity(): number;
        get amplitudes(): $DoubleList;
        get persistence(): number;
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
    export class $IMultiNoiseUtilEntries<T> {
    }
    export interface $IMultiNoiseUtilEntries<T> {
        getTree(): $Climate$RTree<T>;
        get tree(): $Climate$RTree<T>;
    }
    /**
     * Values that may be interpreted as {@link $IMultiNoiseUtilEntries}.
     */
    export type $IMultiNoiseUtilEntries_<T> = (() => $Climate$RTree<T>);
    export class $IChunkSection {
    }
    export interface $IChunkSection {
        setBiomeContainer(arg0: $PalettedContainerRO<$Holder_<$Biome>>): void;
        set biomeContainer(value: $PalettedContainerRO<$Holder_<$Biome>>);
    }
    /**
     * Values that may be interpreted as {@link $IChunkSection}.
     */
    export type $IChunkSection_ = ((arg0: $PalettedContainerRO<$Holder<$Biome>>) => void);
    export class $IChunkHolder {
    }
    export interface $IChunkHolder {
        invokeCombineSavingFuture(arg0: $CompletableFuture<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $IChunkHolder}.
     */
    export type $IChunkHolder_ = ((arg0: $CompletableFuture<never>) => void);
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
