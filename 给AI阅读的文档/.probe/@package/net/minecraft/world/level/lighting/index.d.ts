import { $ChunkPos, $LevelHeightAccessor, $BlockGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $LongPredicate_ } from "@package/java/util/function";
import { $Long2ObjectOpenHashMap, $LongLinkedOpenHashSet, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos_, $Direction_, $SectionPos, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SkyLightSectionStorageExtension } from "@package/dev/engine_room/flywheel/backend";
import { $DataLayer, $LightChunk, $LightChunkGetter, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum, $Object } from "@package/java/lang";
import { $SequencedSet } from "@package/java/util";
import { $LayerLightSectionStorageAccessor, $SkyDataLayerStorageMapAccessor, $LightEngineAccessor } from "@package/dev/engine_room/flywheel/backend/mixin/light";

declare module "@package/net/minecraft/world/level/lighting" {
    export class $LayerLightEventListener {
    }
    export interface $LayerLightEventListener extends $LightEventListener {
        getLightValue(levelPos: $BlockPos_): number;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
    }
    export class $DynamicGraphMinFixedPoint {
        removeIf(predicate: $LongPredicate_): void;
        getLevel(chunkPos: number): number;
        setLevel(chunkPos: number, arg1: number): void;
        getQueueSize(): number;
        checkNode(levelPos: number): void;
        hasWork(): boolean;
        isSource(pos: number): boolean;
        runUpdates(toUpdateCount: number): number;
        checkEdge(fromPos: number, arg1: number, toPos: number, arg3: boolean): void;
        checkNeighborsAfterUpdate(pos: number, arg1: number, level: boolean): void;
        /**
         * Returns level propagated from start position with specified level to the neighboring end position.
         */
        computeLevelFromNeighbor(startPos: number, arg1: number, endPos: number): number;
        removeFromQueue(levelPos: number): void;
        /**
         * Returns level propagated from start position with specified level to the neighboring end position.
         */
        getComputedLevel(startPos: number, arg1: number, endPos: number): number;
        checkNeighbor(fromPos: number, arg1: number, toPos: number, arg3: boolean): void;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
        get queueSize(): number;
    }
    export class $LightEngine$QueueEntry {
        static getFromLevel(entry: number): number;
        static isFromEmptyShape(entry: number): boolean;
        static increaseSkySourceInDirections(down: boolean, north: boolean, south: boolean, west: boolean, east: boolean): number;
        static decreaseSkipOneDirection(level: number, direction: $Direction_): number;
        static decreaseAllDirections(level: number): number;
        static increaseOnlyOneDirection(level: number, fromEmptyShape: boolean, direction: $Direction_): number;
        static isIncreaseFromEmission(entry: number): boolean;
        static increaseLightFromEmission(level: number, fromEmptyShape: boolean): number;
        static shouldPropagateInDirection(entry: number, arg1: $Direction_): boolean;
        static increaseSkipOneDirection(level: number, fromEmptyShape: boolean, direction: $Direction_): number;
        constructor();
    }
    export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
        getLayer(index: number): $DataLayer;
        copy(): M;
        clearCache(): void;
        disableCache(): void;
        setLayer(sectionPos: number, arg1: $DataLayer): void;
        hasLayer(sectionPos: number): boolean;
        removeLayer(index: number): $DataLayer;
        copyDataLayer(index: number): $DataLayer;
        map: $Long2ObjectOpenHashMap<$DataLayer>;
        constructor(map: $Long2ObjectOpenHashMap<$DataLayer>);
    }
    export class $LevelLightEngine implements $LightEventListener {
        getDebugData(lightLayer: $LightLayer_, sectionPos: $SectionPos): string;
        getMaxLightSection(): number;
        getMinLightSection(): number;
        queueSectionData(lightLayer: $LightLayer_, sectionPos: $SectionPos, dataLayer: $DataLayer | null): void;
        hasLightWork(): boolean;
        checkBlock(pos: $BlockPos_): void;
        setLightEnabled(pos: $ChunkPos, retain: boolean): void;
        runLightUpdates(): number;
        lightOnInSection(sectionPos: $SectionPos): boolean;
        retainData(pos: $ChunkPos, retain: boolean): void;
        getLayerListener(type: $LightLayer_): $LayerLightEventListener;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        propagateLightSources(chunkPos: $ChunkPos): void;
        getLightSectionCount(): number;
        getDebugSectionType(lightLayer: $LightLayer_, sectionPos: $SectionPos): $LayerLightSectionStorage$SectionType;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(lightChunkGetter: $LightChunkGetter, blockLight: boolean, skyLight: boolean);
        get maxLightSection(): number;
        get minLightSection(): number;
        get lightSectionCount(): number;
    }
    export class $SpatialLongSet$InternalMap extends $Long2LongLinkedOpenHashMap {
        firstKey(): number;
        lastKey(): number;
    }
    export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
        static values(): $LayerLightSectionStorage$SectionType[];
        static valueOf(arg0: string): $LayerLightSectionStorage$SectionType;
        display(): string;
        static LIGHT_ONLY: $LayerLightSectionStorage$SectionType;
        static LIGHT_AND_DATA: $LayerLightSectionStorage$SectionType;
        static EMPTY: $LayerLightSectionStorage$SectionType;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorage$SectionType}.
     */
    export type $LayerLightSectionStorage$SectionType_ = "empty" | "light_only" | "light_and_data";
    export class $SpatialLongSet extends $LongLinkedOpenHashSet {
        last(): number;
        reversed(): $SequencedSet<number>;
        constructor(expectedSize: number, loadFactor: number);
    }
    export class $SkyLightEngine extends $LightEngine<$SkyLightSectionStorage$SkyDataLayerStorageMap, $SkyLightSectionStorage> {
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $SkyLightSectionStorage;
        constructor(chunkSource: $LightChunkGetter);
        constructor(chunkSource: $LightChunkGetter, sectionStorage: $SkyLightSectionStorage);
    }
    export class $LayerLightSectionStorage$SectionState {
    }
    export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $LightEngineAccessor<any, any> {
        getState(pos: $BlockPos_): $BlockState;
        getLightValue(levelPos: $BlockPos_): number;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        getDebugData(sectionPos: number): string;
        static isEmptyShape(state: $BlockState_): boolean;
        propagateIncrease(packedPos: number, arg1: number, queueEntry: number): void;
        enqueueIncrease(packedPos1: number, arg1: number): void;
        shapeOccludes(packedPos1: number, arg1: $BlockState_, state1: number, packedPos2: $BlockState_, arg4: $Direction_): boolean;
        propagateDecrease(packedPos1: number, arg1: number): void;
        queueSectionData(sectionPos: number, arg1: $DataLayer | null): void;
        hasLightWork(): boolean;
        enqueueDecrease(packedPos1: number, arg1: number): void;
        checkBlock(pos: $BlockPos_): void;
        static hasDifferentLightProperties(level: $BlockGetter, pos: $BlockPos_, state1: $BlockState_, state2: $BlockState_): boolean;
        static getLightBlockInto(level: $BlockGetter, state1: $BlockState_, pos1: $BlockPos_, state2: $BlockState_, pos2: $BlockPos_, direction: $Direction_, defaultReturnValue: number): number;
        setLightEnabled(chunkPos: $ChunkPos, retainData: boolean): void;
        runLightUpdates(): number;
        retainData(chunkPos: $ChunkPos, retainData: boolean): void;
        getOpacity(state: $BlockState_, pos: $BlockPos_): number;
        checkNode(packedPos: number): void;
        getOcclusionShape(state: $BlockState_, pos: number, arg2: $Direction_): $VoxelShape;
        static getOcclusionShape(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, direction: $Direction_): $VoxelShape;
        getChunk(x: number, z: number): $LightChunk;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        flywheel$storage(): $Object;
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $Object;
        constructor(chunkSource: $LightChunkGetter, storage: $Object);
    }
    export class $LeveledPriorityQueue {
        isEmpty(): boolean;
        enqueue(value: number, arg1: number): void;
        dequeue(value: number, arg1: number, levelIndex: number): void;
        removeFirstLong(): number;
        constructor(levelCount: number, expectedSize: number);
        get empty(): boolean;
    }
    export class $SkyLightSectionStorage extends $LayerLightSectionStorage<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyLightSectionStorageExtension {
        getLightValue(packedPos: number, arg1: boolean): number;
        isAboveData(sectionPos: number): boolean;
        getBottomSectionY(): number;
        getTopSectionY(levelPos: number): number;
        hasLightDataAtOrBelow(y: number): boolean;
        flywheel$skyDataLayer(sectionPos: number): $DataLayer;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: $SkyLightSectionStorage$SkyDataLayerStorageMap;
        chunkSource: $LightChunkGetter;
        updatingSectionData: $SkyLightSectionStorage$SkyDataLayerStorageMap;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(chunkSource: $LightChunkGetter);
        get bottomSectionY(): number;
    }
    export class $LayerLightEventListener$DummyLightLayerEventListener extends $Enum<$LayerLightEventListener$DummyLightLayerEventListener> implements $LayerLightEventListener {
        static values(): $LayerLightEventListener$DummyLightLayerEventListener[];
        static valueOf(arg0: string): $LayerLightEventListener$DummyLightLayerEventListener;
        getLightValue(levelPos: $BlockPos_): number;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        hasLightWork(): boolean;
        checkBlock(pos: $BlockPos_): void;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
        runLightUpdates(): number;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        propagateLightSources(chunkPos: $ChunkPos): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static INSTANCE: $LayerLightEventListener$DummyLightLayerEventListener;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightEventListener$DummyLightLayerEventListener}.
     */
    export type $LayerLightEventListener$DummyLightLayerEventListener_ = "instance";
    export class $LightEventListener {
    }
    export interface $LightEventListener {
        hasLightWork(): boolean;
        checkBlock(pos: $BlockPos_): void;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
        runLightUpdates(): number;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        propagateLightSources(chunkPos: $ChunkPos): void;
    }
    export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
        getLightValue(levelPos: number): number;
        getDataLayerData(sectionPos: number): $DataLayer;
        swapSectionMap(): void;
        getStoredLevel(levelPos: number): number;
        queueSectionData(sectionPos: number, arg1: $DataLayer | null): void;
        setStoredLevel(levelPos: number, arg1: number): void;
        hasInconsistencies(): boolean;
        setLightEnabled(sectionColumnPos: number, arg1: boolean): void;
        lightOnInSection(sectionPos: number): boolean;
        retainData(sectionColumnPos: number, arg1: boolean): void;
        updateSectionStatus(sectionColumnPos: number, arg1: boolean): void;
        markNewInconsistencies(lightEngine: $LightEngine<M, never>): void;
        getDataLayerToWrite(sectionPos: number): $DataLayer;
        storingLightForSection(sectionPos: number): boolean;
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        getDataLayer(map: M, sectionPos: number): $DataLayer;
        getDataLayer(sectionPos: number, arg1: boolean): $DataLayer;
        onNodeRemoved(sectionPos: number): void;
        putSectionState(sectionPos: number, arg1: number): void;
        createDataLayer(sectionPos: number): $DataLayer;
        onNodeAdded(sectionPos: number): void;
        markSectionAndNeighborsAsAffected(sectionPos: number): void;
        flywheel$callGetDataLayer(sectionPos: number, arg1: boolean): $DataLayer;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: M;
        chunkSource: $LightChunkGetter;
        updatingSectionData: M;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(layer: $LightLayer_, chunkSource: $LightChunkGetter, updatingSectionData: M);
    }
    export class $ChunkSkyLightSources {
        update(level: $BlockGetter, x: number, y: number, z: number): boolean;
        getLowestSourceY(x: number, z: number): number;
        fillFrom(chunk: $ChunkAccess): void;
        getHighestLowestSourceY(): number;
        static NEGATIVE_INFINITY: number;
        constructor(level: $LevelHeightAccessor);
        get highestLowestSourceY(): number;
    }
    export class $BlockLightSectionStorage$BlockDataLayerStorageMap extends $DataLayerStorageMap<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
        map: $Long2ObjectOpenHashMap<$DataLayer>;
    }
    export class $SkyLightSectionStorage$SkyDataLayerStorageMap extends $DataLayerStorageMap<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyDataLayerStorageMapAccessor {
        map: $Long2ObjectOpenHashMap<$DataLayer>;
    }
    export class $BlockLightEngine extends $LightEngine<$BlockLightSectionStorage$BlockDataLayerStorageMap, $BlockLightSectionStorage> {
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $BlockLightSectionStorage;
        constructor(chunkSource: $LightChunkGetter);
        constructor(chunkSource: $LightChunkGetter, storage: $BlockLightSectionStorage);
    }
    export class $BlockLightSectionStorage extends $LayerLightSectionStorage<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: $BlockLightSectionStorage$BlockDataLayerStorageMap;
        chunkSource: $LightChunkGetter;
        updatingSectionData: $BlockLightSectionStorage$BlockDataLayerStorageMap;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(chunkSource: $LightChunkGetter);
    }
}
