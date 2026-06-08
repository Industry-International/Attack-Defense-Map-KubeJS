import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $ChunkBuildContext, $BuilderTaskOutput } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
import { $ChunkVertexType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $Throwable } from "@package/java/lang";
import { $ChunkBuilderTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor" {
    export class $ChunkJob {
    }
    export interface $ChunkJob extends $CancellationToken {
        execute(arg0: $ChunkBuildContext): void;
        isStarted(): boolean;
        getEffort(): number;
        get started(): boolean;
        get effort(): number;
    }
    export class $ChunkJobTyped<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput> implements $ChunkJob {
        execute(arg0: $ChunkBuildContext): void;
        isStarted(): boolean;
        isCancelled(): boolean;
        setCancelled(): void;
        getEffort(): number;
        get started(): boolean;
        get effort(): number;
    }
    export class $ChunkJobResult<OUTPUT> {
        unwrap(): OUTPUT;
        static exceptionally<OUTPUT>(arg0: $Throwable): $ChunkJobResult<OUTPUT>;
        static successfully<OUTPUT>(arg0: OUTPUT): $ChunkJobResult<OUTPUT>;
    }
    export class $ChunkBuilder {
        shutdown(): void;
        getTotalThreadCount(): number;
        isBuildQueueEmpty(): boolean;
        getScheduledEffort(): number;
        scheduleTask<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput>(arg0: TASK, arg1: boolean, arg2: $Consumer_<$ChunkJobResult<OUTPUT>>): $ChunkJobTyped<TASK, OUTPUT>;
        getBusyThreadCount(): number;
        getScheduledJobCount(): number;
        getHighEffortSchedulingBudget(): number;
        getLowEffortSchedulingBudget(): number;
        tryStealTask(arg0: $ChunkJob): void;
        static EFFORT_PER_THREAD_PER_FRAME: number;
        static HIGH_EFFORT: number;
        static LOW_EFFORT: number;
        constructor(arg0: $ClientLevel, arg1: $ChunkVertexType);
        get totalThreadCount(): number;
        get buildQueueEmpty(): boolean;
        get scheduledEffort(): number;
        get busyThreadCount(): number;
        get scheduledJobCount(): number;
        get highEffortSchedulingBudget(): number;
        get lowEffortSchedulingBudget(): number;
    }
}
