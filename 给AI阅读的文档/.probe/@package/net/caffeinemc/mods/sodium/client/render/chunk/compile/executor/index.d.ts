import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $BuilderTaskOutput, $ChunkBuildContext } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
import { $JobEffort_, $JobEffort } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation";
import { $ChunkVertexType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $Throwable } from "@package/java/lang";
import { $ChunkBuilderTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor" {
    export class $ChunkJob {
    }
    export interface $ChunkJob extends $CancellationToken {
        isBlocking(): boolean;
        execute(arg0: $ChunkBuildContext): void;
        isStarted(): boolean;
        getEstimatedSize(): number;
        getEstimatedDuration(): number;
        getEstimatedUploadDuration(): number;
        get blocking(): boolean;
        get started(): boolean;
        get estimatedSize(): number;
        get estimatedDuration(): number;
        get estimatedUploadDuration(): number;
    }
    export class $ChunkJobTyped<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput> implements $ChunkJob {
        isBlocking(): boolean;
        execute(arg0: $ChunkBuildContext): void;
        isStarted(): boolean;
        isCancelled(): boolean;
        getEstimatedSize(): number;
        setCancelled(): void;
        getEstimatedDuration(): number;
        getEstimatedUploadDuration(): number;
        get blocking(): boolean;
        get started(): boolean;
        get estimatedSize(): number;
        get estimatedDuration(): number;
        get estimatedUploadDuration(): number;
    }
    export class $ChunkJobResult<OUTPUT> {
        unwrap(): OUTPUT;
        getJobEffort(): $JobEffort;
        static exceptionally<OUTPUT>(arg0: $Throwable): $ChunkJobResult<OUTPUT>;
        static successfully<OUTPUT>(arg0: OUTPUT, arg1: $JobEffort_): $ChunkJobResult<OUTPUT>;
        static successfully<OUTPUT>(arg0: OUTPUT): $ChunkJobResult<OUTPUT>;
        get jobEffort(): $JobEffort;
    }
    export class $ChunkBuilder {
        shutdown(): void;
        getTotalThreadCount(): number;
        tryStealTask(arg0: $ChunkJob): void;
        getBusyThreadCount(): number;
        scheduleTask<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput>(arg0: TASK, arg1: boolean, arg2: $Consumer_<$ChunkJobResult<OUTPUT>>, arg3: boolean): $ChunkJobTyped<TASK, OUTPUT>;
        getBusyFraction(arg0: number): number;
        isBuildQueueEmpty(): boolean;
        getTotalRemainingDuration(arg0: number): number;
        getScheduledJobCount(): number;
        constructor(arg0: $ClientLevel, arg1: $ChunkVertexType);
        get totalThreadCount(): number;
        get busyThreadCount(): number;
        get buildQueueEmpty(): boolean;
        get scheduledJobCount(): number;
    }
}
