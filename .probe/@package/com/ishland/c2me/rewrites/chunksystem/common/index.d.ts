import { $ItemHolder, $ItemStatus, $StatusAdvancingScheduler, $KeyStatusPair } from "@package/com/ishland/flowsched/scheduler";
import { $ChunkPos, $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $ChunkHolder$PlayerProvider_, $ChunkHolder, $ChunkResult, $FullChunkStatus, $ChunkMap, $GenerationChunkHolder } from "@package/net/minecraft/server/level";
import { $AtomicReference, $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $SchedulingManager } from "@package/com/ishland/c2me/base/common/scheduler";
import { $IFastChunkHolder } from "@package/com/ishland/c2me/base/common/theinterface";
import { $LevelChunk, $ProtoChunk, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Record, $Runnable } from "@package/java/lang";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $StaticCache2D } from "@package/net/minecraft/util";
export * as ducks from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";
export * as async_chunkio from "@package/com/ishland/c2me/rewrites/chunksystem/common/async_chunkio";

declare module "@package/com/ishland/c2me/rewrites/chunksystem/common" {
    export class $ChunkLoadingContext extends $Record {
        holder(): $ItemHolder<$ChunkPos, $ChunkState, $ChunkLoadingContext, $NewChunkHolderVanillaInterface>;
        dependencies(): $KeyStatusPair<$ChunkPos, $ChunkState, $ChunkLoadingContext>[];
        chunks(): $StaticCache2D<$GenerationChunkHolder>;
        tacs(): $ChunkMap;
        schedulingManager(): $SchedulingManager;
        constructor(holder: $ItemHolder<$ChunkPos, $ChunkState_, $ChunkLoadingContext_, $NewChunkHolderVanillaInterface>, tacs: $ChunkMap, schedulingManager: $SchedulingManager, chunks: $StaticCache2D<$GenerationChunkHolder>, dependencies: $KeyStatusPair<$ChunkPos, $ChunkState_, $ChunkLoadingContext_>[]);
    }
    export class $ChunkState extends $Record {
        chunk(): $ChunkAccess;
        protoChunk(): $ProtoChunk;
        reachedStatus(): $ChunkStatus;
        wasFullChunk(): boolean;
        constructor(chunk: $ChunkAccess, protoChunk: $ProtoChunk, reachedStatus: $ChunkStatus_, wasFullChunk: boolean);
    }
    export class $NewChunkHolderVanillaInterface extends $ChunkHolder implements $IFastChunkHolder {
        updateDeferredStatus(status: $NewChunkStatus): void;
        triggerDeferredLoad(requestedStatus: $NewChunkStatus): void;
        c2me$immediateWorldChunk(): $LevelChunk;
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
        constructor(chunkSystem: $TheChunkSystem, newHolder: $ItemHolder<$ChunkPos, $ChunkState_, $ChunkLoadingContext_, $NewChunkHolderVanillaInterface>, world: $LevelHeightAccessor, lightingProvider: $LevelLightEngine, playersWatchingChunkProvider: $ChunkHolder$PlayerProvider_);
    }
    export class $TheChunkSystem extends $StatusAdvancingScheduler<$ChunkPos, $ChunkState, $ChunkLoadingContext, $NewChunkHolderVanillaInterface> {
        vanillaIf$setLevel(pos: number, level: number): $ChunkHolder;
        vanillaIf$getManagedLevel(pos: number): number;
        static NO_OP: $Runnable;
        constructor(tacs: $ChunkMap);
    }
    export class $NewChunkStatus implements $ItemStatus<$ChunkPos, $ChunkState, $ChunkLoadingContext> {
        ordinal(): number;
        getDependencies(holder: $ItemHolder<$ChunkPos, $ChunkState_, $ChunkLoadingContext_, never>): $KeyStatusPair<$ChunkPos, $ChunkState, $ChunkLoadingContext>[];
        getEffectiveVanillaStatus(): $ChunkStatus;
        toChunkLevelType(): $FullChunkStatus;
        static fromVanillaLevel(level: number): $NewChunkStatus;
        static fromVanillaStatus(status: $ChunkStatus_): $NewChunkStatus;
        toVanillaLevel(): number;
        getAllStatuses(): $ItemStatus<$ChunkPos, $ChunkState, $ChunkLoadingContext>[];
        getNext(): $ItemStatus<$ChunkPos, $ChunkState, $ChunkLoadingContext>;
        getPrev(): $ItemStatus<$ChunkPos, $ChunkState, $ChunkLoadingContext>;
        getDependenciesToRemove(holder: $ItemHolder<$ChunkPos, $ChunkState_, $ChunkLoadingContext_, never>): $KeyStatusPair<$ChunkPos, $ChunkState, $ChunkLoadingContext>[];
        getDependenciesToAdd(holder: $ItemHolder<$ChunkPos, $ChunkState_, $ChunkLoadingContext_, never>): $KeyStatusPair<$ChunkPos, $ChunkState, $ChunkLoadingContext>[];
        static NEW: $NewChunkStatus;
        static ENTITY_TICKING: $NewChunkStatus;
        static SERVER_ACCESSIBLE: $NewChunkStatus;
        static vanillaLevelToStatus: $NewChunkStatus[];
        static ALL_STATUSES: $NewChunkStatus[];
        static DEFERRED: $NewChunkStatus;
        static DISK: $NewChunkStatus;
        static SERVER_ACCESSIBLE_CHUNK_SENDING: $NewChunkStatus;
        static BLOCK_TICKING: $NewChunkStatus;
        get effectiveVanillaStatus(): $ChunkStatus;
        get allStatuses(): $ItemStatus<$ChunkPos, $ChunkState, $ChunkLoadingContext>[];
        get next(): $ItemStatus<$ChunkPos, $ChunkState, $ChunkLoadingContext>;
        get prev(): $ItemStatus<$ChunkPos, $ChunkState, $ChunkLoadingContext>;
    }
}
