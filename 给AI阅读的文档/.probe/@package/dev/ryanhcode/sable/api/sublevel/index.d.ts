import { $ChunkPos, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MassTracker } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $SubLevelPhysicsSystem, $SubLevelTrackingSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $BoundingBox3dc, $BoundingBox3i, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $LevelPlot, $PlotChunkHolder } from "@package/dev/ryanhcode/sable/sublevel/plot";
import { $SubLevelRemovalReason_ } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ServerSubLevel, $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $UUID, $List, $Map, $BitSet, $UUID_, $Collection } from "@package/java/util";
import { $MixinSubLevelContainer } from "@package/top/leonx/irisveil/compat/sable/mixin";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ClientSableInterpolationState } from "@package/dev/ryanhcode/sable/network/client";
import { $FloatingClusterContainer } from "@package/dev/ryanhcode/sable/physics/floating_block";
import { $SubLevelLoadingTicketType_, $SubLevelTicketInfo } from "@package/dev/ryanhcode/sable/api/sublevel/ticket";
import { $Iterable } from "@package/java/lang";
import { $BlockSubLevelLiftProvider$LiftProviderContext } from "@package/dev/ryanhcode/sable/api/block";
import { $Vector2i, $Vector3dc, $Quaterniond } from "@package/org/joml";
export * as ticket from "@package/dev/ryanhcode/sable/api/sublevel/ticket";

declare module "@package/dev/ryanhcode/sable/api/sublevel" {
    export class $ClientSubLevelContainer extends $SubLevelContainer {
        getInterpolation(): $ClientSableInterpolationState;
        freeLightingScene(arg0: number): void;
        getLightingSceneId(arg0: $ClientSubLevel): number;
        addDebugInfo(arg0: $Consumer_<string>): void;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        get interpolation(): $ClientSableInterpolationState;
    }
    export class $SubLevelObserver {
    }
    export interface $SubLevelObserver {
        tick(arg0: $SubLevelContainer): void;
        onSubLevelRemoved(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        onSubLevelAdded(arg0: $SubLevel): void;
    }
    export class $SubLevelTrackingPlugin {
    }
    export interface $SubLevelTrackingPlugin {
        sendTrackingData(arg0: number): void;
        neededPlayers(): $Iterable<$UUID>;
    }
    export class $KinematicContraption {
    }
    export interface $KinematicContraption {
        sable$getLocalPose(arg0: $Pose3d, arg1: number): $Pose3d;
        sable$getLocalBounds(arg0: $BoundingBox3i): void;
        sable$getOrientation(arg0: number): $Quaterniond;
        sable$getOrientation(): $Quaterniond;
        sable$liftProviders(): $Map<$BlockPos, $BlockSubLevelLiftProvider$LiftProviderContext>;
        sable$getMassTracker(): $MassTracker;
        sable$shouldCollide(): boolean;
        sable$isValid(): boolean;
        sable$getPosition(): $Vector3dc;
        sable$getPosition(arg0: number): $Vector3dc;
        sable$blockGetter(): $BlockGetter;
        sable$getFloatingClusterContainer(): $FloatingClusterContainer;
    }
    export class $ServerSubLevelContainer extends $SubLevelContainer {
        initialize(): void;
        close(): void;
        getLevel(): $ServerLevel;
        getHoldingChunkMap(): $SubLevelHoldingChunkMap;
        takePhysicsSystem(arg0: $SubLevelPhysicsSystem): void;
        takeTrackingSystem(arg0: $SubLevelTrackingSystem): void;
        trackingSystem(): $SubLevelTrackingSystem;
        removeForceLoadTicket<T>(arg0: $ServerSubLevel, arg1: $SubLevelLoadingTicketType_<T>, arg2: T): boolean;
        loadTickets(arg0: $Object2ObjectMap<$UUID_, $SubLevelTicketInfo>): void;
        getAllTickets(): $Map<$UUID, $SubLevelTicketInfo>;
        addForceLoadTicket<T>(arg0: $ServerSubLevel, arg1: $SubLevelLoadingTicketType_<T>, arg2: T): boolean;
        physicsSystem(): $SubLevelPhysicsSystem;
        collectForceLoadedSubLevels(): $Collection<$ServerSubLevel>;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        get level(): $ServerLevel;
        get holdingChunkMap(): $SubLevelHoldingChunkMap;
        get allTickets(): $Map<$UUID, $SubLevelTicketInfo>;
    }
    export class $SubLevelContainer implements $MixinSubLevelContainer {
        getIndex(arg0: number, arg1: number): number;
        tick(): void;
        getLevel(): $Level;
        static getContainer(arg0: $Level_): $SubLevelContainer;
        static getContainer(arg0: $ServerLevel): $ServerSubLevelContainer;
        static getContainer(arg0: $ClientLevel): $ClientSubLevelContainer;
        inBounds(arg0: $ChunkPos): boolean;
        inBounds(arg0: $BlockPos_): boolean;
        inBounds(arg0: $Vector3dc): boolean;
        inBounds(arg0: number, arg1: number): boolean;
        getOrigin(): $Vector2i;
        getLogSideLength(): number;
        newPopulatedChunk(arg0: $ChunkPos, arg1: $LevelChunk): void;
        getLoadedCount(): number;
        queryIntersecting(arg0: $BoundingBox3dc): $Iterable<$SubLevel>;
        allocateSubLevel(arg0: $UUID_, arg1: number, arg2: number, arg3: $Pose3d): $SubLevel;
        getPlayersTracking(arg0: $ChunkPos): $List<$ServerPlayer>;
        removeSubLevel(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        removeSubLevel(arg0: number, arg1: number, arg2: $SubLevelRemovalReason_): void;
        getLogPlotSize(): number;
        static getClientContainer$irisveil_$md$dd6cb9$0(arg0: $ClientLevel): $ClientSubLevelContainer;
        getPlot(arg0: number, arg1: number): $LevelPlot;
        getPlot(arg0: $ChunkPos): $LevelPlot;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        getAllSubLevels(): $List<$SubLevel>;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        allocateNewSubLevel(arg0: $Pose3d): $SubLevel;
        processSubLevelRemovals(): void;
        addObserver(arg0: $SubLevelObserver): void;
        getOccupancy(): $BitSet;
        getSubLevel(arg0: $UUID_): $SubLevel;
        getSubLevel(arg0: number, arg1: number): $SubLevel;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        get level(): $Level;
        get origin(): $Vector2i;
        get logSideLength(): number;
        get loadedCount(): number;
        get logPlotSize(): number;
        get allSubLevels(): $List<$SubLevel>;
        get occupancy(): $BitSet;
    }
}
