import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Executor_ } from "@package/java/util/concurrent";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/server/level/progress" {
    export class $ChunkProgressListener {
        static calculateDiameter(arg0: number): number;
    }
    export interface $ChunkProgressListener {
        start(): void;
        stop(): void;
        updateSpawnPos(arg0: $ChunkPos): void;
        onStatusChange(arg0: $ChunkPos, arg1: $ChunkStatus_): void;
    }
    export class $ChunkProgressListenerFactory {
    }
    export interface $ChunkProgressListenerFactory {
        create(arg0: number): $ChunkProgressListener;
    }
    /**
     * Values that may be interpreted as {@link $ChunkProgressListenerFactory}.
     */
    export type $ChunkProgressListenerFactory_ = ((arg0: number) => $ChunkProgressListener);
    export class $ProcessorChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        static createStarted(arg0: $ChunkProgressListener, arg1: $Executor_): $ProcessorChunkProgressListener;
        updateSpawnPos(arg0: $ChunkPos): void;
        onStatusChange(arg0: $ChunkPos, arg1: $ChunkStatus_): void;
    }
    export class $StoringChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        static create(arg0: number): $StoringChunkProgressListener;
        getStatus(arg0: number, arg1: number): $ChunkStatus;
        getProgress(): number;
        static createFromGameruleRadius(arg0: number): $StoringChunkProgressListener;
        updateSpawnPos(arg0: $ChunkPos): void;
        getDiameter(): number;
        onStatusChange(arg0: $ChunkPos, arg1: $ChunkStatus_): void;
        getFullDiameter(): number;
        static createCompleted(): $StoringChunkProgressListener;
        get progress(): number;
        get diameter(): number;
        get fullDiameter(): number;
    }
    export class $LoggerChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        static create(arg0: number): $LoggerChunkProgressListener;
        getProgress(): number;
        static createFromGameruleRadius(arg0: number): $LoggerChunkProgressListener;
        updateSpawnPos(arg0: $ChunkPos): void;
        onStatusChange(arg0: $ChunkPos, arg1: $ChunkStatus_): void;
        static createCompleted(): $LoggerChunkProgressListener;
        get progress(): number;
    }
}
