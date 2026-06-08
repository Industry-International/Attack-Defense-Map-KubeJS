import { $FullChunkStatus_, $FullChunkStatus } from "@package/net/minecraft/server/level";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Set } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/impl/event/lifecycle" {
    export class $LoadedChunksCache {
    }
    export interface $LoadedChunksCache {
        fabric_getLoadedChunks(): $Set<$LevelChunk>;
        fabric_markUnloaded(arg0: $LevelChunk): void;
        fabric_markLoaded(arg0: $LevelChunk): void;
    }
    export class $ChunkLevelTypeEventTracker {
    }
    export interface $ChunkLevelTypeEventTracker {
        fabric_setCurrentEventLevelType(arg0: $FullChunkStatus_): void;
        fabric_getCurrentEventLevelType(): $FullChunkStatus;
    }
}
