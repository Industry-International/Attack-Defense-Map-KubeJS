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
        getDataLayerData(arg0: $SectionPos): $DataLayer;
        getLightValue(arg0: $BlockPos_): number;
    }
    export class $DynamicGraphMinFixedPoint {
        removeIf(arg0: $LongPredicate_): void;
        getLevel(arg0: number): number;
        setLevel(arg0: number, arg1: number): void;
        getQueueSize(): number;
        checkNode(arg0: number): void;
        hasWork(): boolean;
        isSource(arg0: number): boolean;
        runUpdates(arg0: number): number;
        checkNeighborsAfterUpdate(arg0: number, arg1: number, arg2: boolean): void;
        computeLevelFromNeighbor(arg0: number, arg1: number, arg2: number): number;
        removeFromQueue(arg0: number): void;
        checkNeighbor(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getComputedLevel(arg0: number, arg1: number, arg2: number): number;
        checkEdge(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        levelCount: number;
        static SOURCE: number;
        constructor(arg0: number, arg1: number, arg2: number);
        get queueSize(): number;
    }
    export class $LightEngine$QueueEntry {
        static increaseSkySourceInDirections(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): number;
        static isFromEmptyShape(arg0: number): boolean;
        static getFromLevel(arg0: number): number;
        static isIncreaseFromEmission(arg0: number): boolean;
        static decreaseAllDirections(arg0: number): number;
        static shouldPropagateInDirection(arg0: number, arg1: $Direction_): boolean;
        static decreaseSkipOneDirection(arg0: number, arg1: $Direction_): number;
        static increaseSkipOneDirection(arg0: number, arg1: boolean, arg2: $Direction_): number;
        static increaseOnlyOneDirection(arg0: number, arg1: boolean, arg2: $Direction_): number;
        static increaseLightFromEmission(arg0: number, arg1: boolean): number;
        constructor();
    }
    export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
        getLayer(arg0: number): $DataLayer;
        copy(): M;
        clearCache(): void;
        setLayer(arg0: number, arg1: $DataLayer): void;
        disableCache(): void;
        removeLayer(arg0: number): $DataLayer;
        hasLayer(arg0: number): boolean;
        copyDataLayer(arg0: number): $DataLayer;
        map: $Long2ObjectOpenHashMap<$DataLayer>;
        constructor(arg0: $Long2ObjectOpenHashMap<$DataLayer>);
    }
    export class $LevelLightEngine implements $LightEventListener {
        retainData(arg0: $ChunkPos, arg1: boolean): void;
        queueSectionData(arg0: $LightLayer_, arg1: $SectionPos, arg2: $DataLayer): void;
        getMinLightSection(): number;
        hasLightWork(): boolean;
        getMaxLightSection(): number;
        getDebugData(arg0: $LightLayer_, arg1: $SectionPos): string;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getLayerListener(arg0: $LightLayer_): $LayerLightEventListener;
        checkBlock(arg0: $BlockPos_): void;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        getDebugSectionType(arg0: $LightLayer_, arg1: $SectionPos): $LayerLightSectionStorage$SectionType;
        getLightSectionCount(): number;
        propagateLightSources(arg0: $ChunkPos): void;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        runLightUpdates(): number;
        lightOnInSection(arg0: $SectionPos): boolean;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(arg0: $LightChunkGetter, arg1: boolean, arg2: boolean);
        get minLightSection(): number;
        get maxLightSection(): number;
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
        constructor(arg0: number, arg1: number);
    }
    export class $SkyLightEngine extends $LightEngine<$SkyLightSectionStorage$SkyDataLayerStorageMap, $SkyLightSectionStorage> {
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $SkyLightSectionStorage;
        constructor(arg0: $LightChunkGetter);
        constructor(arg0: $LightChunkGetter, arg1: $SkyLightSectionStorage);
    }
    export class $LayerLightSectionStorage$SectionState {
    }
    export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $LightEngineAccessor<any, any> {
        getState(arg0: $BlockPos_): $BlockState;
        static hasDifferentLightProperties(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): boolean;
        retainData(arg0: $ChunkPos, arg1: boolean): void;
        getOpacity(arg0: $BlockState_, arg1: $BlockPos_): number;
        checkNode(arg0: number): void;
        queueSectionData(arg0: number, arg1: $DataLayer): void;
        shapeOccludes(arg0: number, arg1: $BlockState_, arg2: number, arg3: $BlockState_, arg4: $Direction_): boolean;
        hasLightWork(): boolean;
        static isEmptyShape(arg0: $BlockState_): boolean;
        getDebugData(arg0: number): string;
        getDataLayerData(arg0: $SectionPos): $DataLayer;
        enqueueIncrease(arg0: number, arg1: number): void;
        enqueueDecrease(arg0: number, arg1: number): void;
        propagateIncrease(arg0: number, arg1: number, arg2: number): void;
        propagateDecrease(arg0: number, arg1: number): void;
        getLightValue(arg0: $BlockPos_): number;
        checkBlock(arg0: $BlockPos_): void;
        static getOcclusionShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): $VoxelShape;
        getOcclusionShape(arg0: $BlockState_, arg1: number, arg2: $Direction_): $VoxelShape;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        static getLightBlockInto(arg0: $BlockGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $Direction_, arg6: number): number;
        getDebugSectionType(arg0: number): $LayerLightSectionStorage$SectionType;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        runLightUpdates(): number;
        getChunk(arg0: number, arg1: number): $LightChunk;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        flywheel$storage(): $Object;
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $Object;
        constructor(arg0: $LightChunkGetter, arg1: $Object);
    }
    export class $LeveledPriorityQueue {
        isEmpty(): boolean;
        enqueue(arg0: number, arg1: number): void;
        dequeue(arg0: number, arg1: number, arg2: number): void;
        removeFirstLong(): number;
        constructor(arg0: number, arg1: number);
        get empty(): boolean;
    }
    export class $SkyLightSectionStorage extends $LayerLightSectionStorage<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyLightSectionStorageExtension {
        getBottomSectionY(): number;
        getTopSectionY(arg0: number): number;
        isAboveData(arg0: number): boolean;
        getLightValue(arg0: number, arg1: boolean): number;
        hasLightDataAtOrBelow(arg0: number): boolean;
        flywheel$skyDataLayer(section: number): $DataLayer;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: $SkyLightSectionStorage$SkyDataLayerStorageMap;
        chunkSource: $LightChunkGetter;
        updatingSectionData: $SkyLightSectionStorage$SkyDataLayerStorageMap;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(arg0: $LightChunkGetter);
        get bottomSectionY(): number;
    }
    export class $LayerLightEventListener$DummyLightLayerEventListener extends $Enum<$LayerLightEventListener$DummyLightLayerEventListener> implements $LayerLightEventListener {
        static values(): $LayerLightEventListener$DummyLightLayerEventListener[];
        static valueOf(arg0: string): $LayerLightEventListener$DummyLightLayerEventListener;
        hasLightWork(): boolean;
        getDataLayerData(arg0: $SectionPos): $DataLayer;
        getLightValue(arg0: $BlockPos_): number;
        checkBlock(arg0: $BlockPos_): void;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        propagateLightSources(arg0: $ChunkPos): void;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        runLightUpdates(): number;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
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
        checkBlock(arg0: $BlockPos_): void;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        propagateLightSources(arg0: $ChunkPos): void;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        runLightUpdates(): number;
    }
    export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
        retainData(arg0: number, arg1: boolean): void;
        queueSectionData(arg0: number, arg1: $DataLayer): void;
        hasInconsistencies(): boolean;
        swapSectionMap(): void;
        getDataLayerData(arg0: number): $DataLayer;
        setStoredLevel(arg0: number, arg1: number): void;
        getStoredLevel(arg0: number): number;
        getLightValue(arg0: number): number;
        updateSectionStatus(arg0: number, arg1: boolean): void;
        getDebugSectionType(arg0: number): $LayerLightSectionStorage$SectionType;
        markNewInconsistencies(arg0: $LightEngine<M, never>): void;
        getDataLayerToWrite(arg0: number): $DataLayer;
        storingLightForSection(arg0: number): boolean;
        setLightEnabled(arg0: number, arg1: boolean): void;
        lightOnInSection(arg0: number): boolean;
        putSectionState(arg0: number, arg1: number): void;
        onNodeAdded(arg0: number): void;
        getDataLayer(arg0: M, arg1: number): $DataLayer;
        getDataLayer(arg0: number, arg1: boolean): $DataLayer;
        onNodeRemoved(arg0: number): void;
        createDataLayer(arg0: number): $DataLayer;
        markSectionAndNeighborsAsAffected(arg0: number): void;
        flywheel$callGetDataLayer(arg0: number, arg1: boolean): $DataLayer;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: M;
        chunkSource: $LightChunkGetter;
        updatingSectionData: M;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(arg0: $LightLayer_, arg1: $LightChunkGetter, arg2: M);
    }
    export class $ChunkSkyLightSources {
        update(arg0: $BlockGetter, arg1: number, arg2: number, arg3: number): boolean;
        getLowestSourceY(arg0: number, arg1: number): number;
        fillFrom(arg0: $ChunkAccess): void;
        getHighestLowestSourceY(): number;
        static NEGATIVE_INFINITY: number;
        constructor(arg0: $LevelHeightAccessor);
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
        constructor(arg0: $LightChunkGetter);
        constructor(arg0: $LightChunkGetter, arg1: $BlockLightSectionStorage);
    }
    export class $BlockLightSectionStorage extends $LayerLightSectionStorage<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: $BlockLightSectionStorage$BlockDataLayerStorageMap;
        chunkSource: $LightChunkGetter;
        updatingSectionData: $BlockLightSectionStorage$BlockDataLayerStorageMap;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(arg0: $LightChunkGetter);
    }
}
