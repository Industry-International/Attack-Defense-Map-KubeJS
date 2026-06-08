import { $Writer } from "@package/java/io";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $LongSet, $Long2ObjectFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Logger } from "@package/org/slf4j";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $Set, $UUID_, $List_ } from "@package/java/util";
import { $AbortableIterationConsumer$Continuation, $AbortableIterationConsumer_ } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $FullChunkStatus_, $FullChunkStatus } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream, $LongStream } from "@package/java/util/stream";
import { $Enum, $Iterable, $AutoCloseable, $Class } from "@package/java/lang";
import { $ITryFlushable } from "@package/com/ishland/c2me/opts/scheduling/common";
import { $IServerEntityManager } from "@package/com/ishland/c2me/base/mixin/access";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/entity" {
    export class $EntityTickList {
        remove(arg0: $Entity): void;
        add(arg0: $Entity): void;
        contains(arg0: $Entity): boolean;
        forEach(arg0: $Consumer_<$Entity>): void;
        constructor();
    }
    export class $Visibility extends $Enum<$Visibility> {
        static values(): $Visibility[];
        static valueOf(arg0: string): $Visibility;
        isAccessible(): boolean;
        isTicking(): boolean;
        static fromFullChunkStatus(arg0: $FullChunkStatus_): $Visibility;
        static TICKING: $Visibility;
        static TRACKED: $Visibility;
        static HIDDEN: $Visibility;
        get accessible(): boolean;
        get ticking(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Visibility}.
     */
    export type $Visibility_ = "hidden" | "tracked" | "ticking";
    export class $EntityPersistentStorage<T> {
    }
    export interface $EntityPersistentStorage<T> extends $AutoCloseable {
        flush(arg0: boolean): void;
        close(): void;
        loadEntities(arg0: $ChunkPos): $CompletableFuture<$ChunkEntities<T>>;
        storeEntities(arg0: $ChunkEntities<T>): void;
    }
    export class $ChunkStatusUpdateListener {
    }
    export interface $ChunkStatusUpdateListener {
        onChunkStatusChange(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusUpdateListener}.
     */
    export type $ChunkStatusUpdateListener_ = ((arg0: $ChunkPos, arg1: $FullChunkStatus) => void);
    export class $EntitySection<T extends $EntityAccess> {
        remove(arg0: T): boolean;
        size(): number;
        isEmpty(): boolean;
        add(arg0: T): void;
        getEntities(arg0: $AABB_, arg1: $AbortableIterationConsumer_<T>): $AbortableIterationConsumer$Continuation;
        getEntities(): $Stream<T>;
        getEntities<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): $AbortableIterationConsumer$Continuation;
        getStatus(): $Visibility;
        updateChunkStatus(arg0: $Visibility_): $Visibility;
        constructor(arg0: $Class<T>, arg1: $Visibility_);
        get empty(): boolean;
        get status(): $Visibility;
    }
    export class $PersistentEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $EntityTypeTest<B, T extends B> {
        static forClass<B, T extends B>(arg0: $Class<T>): $EntityTypeTest<B, T>;
        static forExactClass<B, T extends B>(arg0: $Class<T>): $EntityTypeTest<B, T>;
    }
    export interface $EntityTypeTest<B, T extends B> {
        tryCast(arg0: B): T;
        getBaseClass(): $Class<B>;
        get baseClass(): $Class<B>;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        getId(): number;
        blockPosition(): $BlockPos;
        getUUID(): $UUID;
        getBoundingBox(): $AABB;
        getPassengersAndSelf(): $Stream<$EntityAccess>;
        getSelfAndPassengers(): $Stream<$EntityAccess>;
        setRemoved(arg0: $Entity$RemovalReason_): void;
        setLevelCallback(arg0: $EntityInLevelCallback): void;
        shouldBeSaved(): boolean;
        isAlwaysTicking(): boolean;
        get id(): number;
        get UUID(): $UUID;
        get boundingBox(): $AABB;
        get passengersAndSelf(): $Stream<$EntityAccess>;
        get selfAndPassengers(): $Stream<$EntityAccess>;
        set removed(value: $Entity$RemovalReason_);
        set levelCallback(value: $EntityInLevelCallback);
        get alwaysTicking(): boolean;
    }
    export class $EntityLookup<T extends $EntityAccess> {
        remove(arg0: T): void;
        add(arg0: T): void;
        count(): number;
        getEntities<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        getEntity(arg0: $UUID_): T;
        getEntity(arg0: number): T;
        getAllEntities(): $Iterable<T>;
        constructor();
        get allEntities(): $Iterable<T>;
    }
    export class $LevelEntityGetter<T extends $EntityAccess> {
    }
    export interface $LevelEntityGetter<T extends $EntityAccess> {
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        get(arg0: $AABB_, arg1: $Consumer_<T>): void;
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        get(arg0: $UUID_): T;
        get(arg0: number): T;
        getAll(): $Iterable<T>;
        get all(): $Iterable<T>;
    }
    export class $LevelCallback<T> {
    }
    export interface $LevelCallback<T> {
        onCreated(arg0: T): void;
        onDestroyed(arg0: T): void;
        onSectionChange(arg0: T): void;
        onTickingEnd(arg0: T): void;
        onTrackingStart(arg0: T): void;
        onTickingStart(arg0: T): void;
        onTrackingEnd(arg0: T): void;
    }
    export class $PersistentEntitySectionManager<T extends $EntityAccess> implements $AutoCloseable, $IServerEntityManager, $ITryFlushable {
        count(): number;
        close(): void;
        isLoaded(arg0: $UUID_): boolean;
        tick(): void;
        gatherStats(): string;
        startTracking(arg0: T): void;
        startTicking(arg0: T): void;
        stopTicking(arg0: T): void;
        autoSave(): void;
        saveAll(): void;
        addNewEntityWithoutEvent(arg0: T): boolean;
        addWorldGenChunkEntities(arg0: $Stream<T>): void;
        addLegacyChunkEntities(arg0: $Stream<T>): void;
        updateChunkStatus(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
        updateChunkStatus(arg0: $ChunkPos, arg1: $Visibility_): void;
        addNewEntity(arg0: T): boolean;
        areEntitiesLoaded(arg0: number): boolean;
        getEntityGetter(): $LevelEntityGetter<T>;
        dumpSections(arg0: $Writer): void;
        canPositionTick(arg0: $ChunkPos): boolean;
        canPositionTick(arg0: $BlockPos_): boolean;
        c2me$tryFlush(): boolean;
        redirect$dfj000$smoothchunk$processUnloadsSafe(arg0: $PersistentEntitySectionManager<any>): void;
        stopTracking(arg0: T): void;
        removeSectionIfEmpty(arg0: number, arg1: $EntitySection<T>): void;
        static getEffectiveStatus<T extends $EntityAccess>(arg0: T, arg1: $Visibility_): $Visibility;
        invokeGetLoadedChunks(): $LongSet;
        visibleEntityStorage: $EntityLookup<T>;
        callbacks: $LevelCallback<T>;
        static LOGGER: $Logger;
        sectionStorage: $EntitySectionStorage<T>;
        knownUuids: $Set<$UUID>;
        constructor(arg0: $Class<T>, arg1: $LevelCallback<T>, arg2: $EntityPersistentStorage<T>);
        get entityGetter(): $LevelEntityGetter<T>;
    }
    export class $EntityInLevelCallback {
        static NULL: $EntityInLevelCallback;
    }
    export interface $EntityInLevelCallback {
        onRemove(arg0: $Entity$RemovalReason_): void;
        onMove(): void;
    }
    export class $PersistentEntitySectionManager$ChunkLoadStatus extends $Enum<$PersistentEntitySectionManager$ChunkLoadStatus> {
    }
    /**
     * Values that may be interpreted as {@link $PersistentEntitySectionManager$ChunkLoadStatus}.
     */
    export type $PersistentEntitySectionManager$ChunkLoadStatus_ = "fresh" | "pending" | "loaded";
    export class $EntitySectionStorage<T extends $EntityAccess> {
        forEachAccessibleNonEmptySection(arg0: $AABB_, arg1: $AbortableIterationConsumer_<$EntitySection<T>>): void;
        getExistingSectionPositionsInChunk(arg0: number): $LongStream;
        getAllChunksWithExistingSections(): $LongSet;
        remove(arg0: number): void;
        count(): number;
        getOrCreateSection(arg0: number): $EntitySection<T>;
        getEntities<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        getEntities(arg0: $AABB_, arg1: $AbortableIterationConsumer_<T>): void;
        getExistingSectionsInChunk(arg0: number): $Stream<$EntitySection<T>>;
        getSection(arg0: number): $EntitySection<T>;
        constructor(arg0: $Class<T>, arg1: $Long2ObjectFunction_<$Visibility>);
        get allChunksWithExistingSections(): $LongSet;
    }
    export class $TransientEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $TransientEntitySectionManager<T extends $EntityAccess> {
        count(): number;
        gatherStats(): string;
        startTicking(arg0: $ChunkPos): void;
        stopTicking(arg0: $ChunkPos): void;
        addEntity(arg0: T): void;
        getEntityGetter(): $LevelEntityGetter<T>;
        removeSectionIfEmpty(arg0: number, arg1: $EntitySection<T>): void;
        entityStorage: $EntityLookup<T>;
        callbacks: $LevelCallback<T>;
        static LOGGER: $Logger;
        sectionStorage: $EntitySectionStorage<T>;
        constructor(arg0: $Class<T>, arg1: $LevelCallback<T>);
        get entityGetter(): $LevelEntityGetter<T>;
    }
    export class $LevelEntityGetterAdapter<T extends $EntityAccess> implements $LevelEntityGetter<T> {
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        get(arg0: $AABB_, arg1: $Consumer_<T>): void;
        get(arg0: $UUID_): T;
        get(arg0: number): T;
        getAll(): $Iterable<T>;
        constructor(arg0: $EntityLookup<T>, arg1: $EntitySectionStorage<T>);
        get all(): $Iterable<T>;
    }
    export class $ChunkEntities<T> {
        isEmpty(): boolean;
        getEntities(): $Stream<T>;
        getPos(): $ChunkPos;
        constructor(arg0: $ChunkPos, arg1: $List_<T>);
        get empty(): boolean;
        get entities(): $Stream<T>;
        get pos(): $ChunkPos;
    }
}
