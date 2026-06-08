import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $SubLevelHoldingChunk } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $HoldingSubLevel } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/sshakusora/waystonessable/mixin/accessor" {
    export class $SubLevelHoldingChunkAccessor {
    }
    export interface $SubLevelHoldingChunkAccessor {
        waystonesSable$getLoadedHoldingSubLevels(): $Object2ObjectMap<$UUID, $HoldingSubLevel>;
    }
    /**
     * Values that may be interpreted as {@link $SubLevelHoldingChunkAccessor}.
     */
    export type $SubLevelHoldingChunkAccessor_ = (() => $Object2ObjectMap<$UUID_, $HoldingSubLevel>);
    export class $SubLevelHoldingChunkMapAccessor {
    }
    export interface $SubLevelHoldingChunkMapAccessor {
        waystonesSable$getLoadedHoldingChunks(): $Long2ObjectMap<$SubLevelHoldingChunk>;
    }
    /**
     * Values that may be interpreted as {@link $SubLevelHoldingChunkMapAccessor}.
     */
    export type $SubLevelHoldingChunkMapAccessor_ = (() => $Long2ObjectMap<$SubLevelHoldingChunk>);
}
