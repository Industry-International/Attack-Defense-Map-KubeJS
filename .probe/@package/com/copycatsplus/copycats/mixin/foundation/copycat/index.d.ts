import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Map_, $Map } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/copycatsplus/copycats/mixin/foundation/copycat" {
    export class $ChunkAccessAccessor {
    }
    export interface $ChunkAccessAccessor {
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        get blockEntities(): $Map<$BlockPos, $BlockEntity>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkAccessAccessor}.
     */
    export type $ChunkAccessAccessor_ = (() => $Map_<$BlockPos_, $BlockEntity>);
    export class $BlockEntityAccessor {
    }
    export interface $BlockEntityAccessor {
        callSaveMetadata(arg0: $CompoundTag_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAccessor}.
     */
    export type $BlockEntityAccessor_ = ((arg0: $CompoundTag) => void);
}
