import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $Runnable_ } from "@package/java/lang";
import { $Task } from "@package/com/ishland/flowsched/executor";

declare module "@package/com/ishland/c2me/base/common/scheduler" {
    export class $SchedulingManager {
        enqueue(task: $AbstractPosAwarePrioritizedTask): void;
        enqueue(pos: number, command: $Runnable_): void;
        getId(): number;
        updatePriorityFromLevelOnMain(pos: number, level: number): void;
        updatePriorityFromLevel(pos: number, level: number): void;
        positionedExecutor(pos: number): $Executor;
        setConsolidatingLevelUpdates(value: boolean): void;
        setCurrentSyncLoad(pos: $ChunkPos): void;
        static MAX_LEVEL: number;
        constructor(executor: $Executor_);
        get id(): number;
        set consolidatingLevelUpdates(value: boolean);
        set currentSyncLoad(value: $ChunkPos);
    }
    export class $AbstractPosAwarePrioritizedTask implements $Task {
        priority(): number;
        setPriority(priority: number): void;
        getPos(): number;
        addPostExec(runnable: $Runnable_): void;
        constructor(pos: number);
        get pos(): number;
    }
    export class $IVanillaChunkManager {
    }
    export interface $IVanillaChunkManager {
        c2me$getSchedulingManager(): $SchedulingManager;
    }
    /**
     * Values that may be interpreted as {@link $IVanillaChunkManager}.
     */
    export type $IVanillaChunkManager_ = (() => $SchedulingManager);
    export class $ISyncLoadManager {
    }
    export interface $ISyncLoadManager {
        getCurrentSyncLoad(): $ChunkPos;
        get currentSyncLoad(): $ChunkPos;
    }
    /**
     * Values that may be interpreted as {@link $ISyncLoadManager}.
     */
    export type $ISyncLoadManager_ = (() => $ChunkPos);
}
