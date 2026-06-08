import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BoundingBox3d, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Path_, $Path } from "@package/java/nio/file";
import { $GlobalSavedSubLevelPointer, $GlobalSavedSubLevelPointer_, $SubLevelHoldingChunk, $SavedSubLevelPointer_ } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $AutoCloseable } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";

declare module "@package/dev/ryanhcode/sable/sublevel/storage/serialization" {
    export class $SubLevelData {
        bounds(): $BoundingBox3d;
        dependencies(): $List<$UUID>;
        uuid(): $UUID;
        pose(): $Pose3d;
        fullTag(): $CompoundTag;
        setOriginLoadedChunk(arg0: $ChunkPos): void;
        getOriginLoadedChunk(): $ChunkPos;
        constructor(arg0: $UUID_, arg1: $BoundingBox3d, arg2: $Pose3d, arg3: $List_<$UUID_>, arg4: $CompoundTag_);
    }
    export class $SubLevelStorage implements $AutoCloseable {
        flush(): void;
        close(): void;
        getFolder(): $Path;
        attemptLoadSubLevel(arg0: $ChunkPos, arg1: $SavedSubLevelPointer_): $SubLevelData;
        attemptLoadHoldingChunk(arg0: $ChunkPos): $SubLevelHoldingChunk;
        attemptSaveHoldingChunk(arg0: $ChunkPos, arg1: $SubLevelHoldingChunk): void;
        attemptSaveSubLevel(arg0: $ChunkPos, arg1: $SubLevelData): $GlobalSavedSubLevelPointer;
        attemptSaveSubLevel(arg0: $GlobalSavedSubLevelPointer_, arg1: $SubLevelData): void;
        static MAX_CACHE_SIZE: number;
        constructor(arg0: $Path_);
        get folder(): $Path;
    }
}
