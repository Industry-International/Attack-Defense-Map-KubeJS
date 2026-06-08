import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $SubLevelHoldingChunkMapAccessor, $SubLevelHoldingChunkAccessor } from "@package/com/sshakusora/waystonessable/mixin/accessor";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SubLevelStorage } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $HoldingSubLevel } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Iterable, $AutoCloseable, $Record } from "@package/java/lang";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $ServerSubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/ryanhcode/sable/sublevel/storage/holding" {
    export class $GlobalSavedSubLevelPointer extends $Record {
        local(): $SavedSubLevelPointer;
        chunkPos(): $ChunkPos;
        storageIndex(): number;
        subLevelIndex(): number;
        static CODEC: $Codec<$GlobalSavedSubLevelPointer>;
        constructor(chunkPos: $ChunkPos, storageIndex: number, subLevelIndex: number);
    }
    export class $SubLevelHoldingChunkMap implements $AutoCloseable, $SubLevelHoldingChunkMapAccessor {
        close(): void;
        updateChunkStatus(arg0: $ChunkPos, arg1: boolean): void;
        processChanges(): void;
        getHoldingSubLevel(arg0: $UUID_): $HoldingSubLevel;
        saveAll(): void;
        getStorage(): $SubLevelStorage;
        queueDeletion(arg0: $ServerSubLevel): void;
        moveToUnloaded(arg0: $ServerSubLevel, arg1: $ChunkPos): void;
        waystonesSable$getLoadedHoldingChunks(): $Long2ObjectMap<$SubLevelHoldingChunk>;
        static VERBOSE: boolean;
        constructor(arg0: $ServerLevel, arg1: $ServerSubLevelContainer);
        get storage(): $SubLevelStorage;
    }
    export class $SavedSubLevelPointer extends $Record {
        static unpack(arg0: number): $SavedSubLevelPointer;
        storageIndex(): number;
        subLevelIndex(): number;
        packed(): number;
        constructor(storageIndex: number, subLevelIndex: number);
    }
    export class $SubLevelHoldingChunk implements $SubLevelHoldingChunkAccessor {
        static from(arg0: $ChunkPos, arg1: $CompoundTag_): $SubLevelHoldingChunk;
        writeTo(arg0: $CompoundTag_): void;
        getSubLevelPointers(): $List<$SavedSubLevelPointer>;
        acceptHoldingSubLevel(arg0: $HoldingSubLevel): void;
        getChunkPos(): $ChunkPos;
        getLoadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
        collectReadySubLevels(arg0: $ServerLevel, arg1: $Object2ObjectMap<$UUID_, $HoldingSubLevel>): void;
        waystonesSable$getLoadedHoldingSubLevels(): $Object2ObjectMap<$UUID, $HoldingSubLevel>;
        constructor(arg0: $ChunkPos);
        get subLevelPointers(): $List<$SavedSubLevelPointer>;
        get chunkPos(): $ChunkPos;
        get loadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
    }
}
