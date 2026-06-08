import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Map_, $Map } from "@package/java/util";
export * as video_source from "@package/net/mehvahdjukaar/vista/client/video_source";

declare module "@package/net/mehvahdjukaar/vista/client" {
    export class $IClientChunkCacheExt {
    }
    export interface $IClientChunkCacheExt {
        vista$getPinnedChunks(): $Map<number, $LevelChunk>;
    }
    /**
     * Values that may be interpreted as {@link $IClientChunkCacheExt}.
     */
    export type $IClientChunkCacheExt_ = (() => $Map_<number, $LevelChunk>);
}
