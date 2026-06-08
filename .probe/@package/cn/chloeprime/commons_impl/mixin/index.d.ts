import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ChunkMap$TrackedEntity } from "@package/net/minecraft/server/level";
import { $ServerPlayerConnection } from "@package/net/minecraft/server/network";
import { $Set, $Set_ } from "@package/java/util";
export * as client from "@package/cn/chloeprime/commons_impl/mixin/client";

declare module "@package/cn/chloeprime/commons_impl/mixin" {
    export class $ChunkMapAccessor {
    }
    export interface $ChunkMapAccessor {
        getEntityMap(): $Int2ObjectMap<$ChunkMap$TrackedEntity>;
        get entityMap(): $Int2ObjectMap<$ChunkMap$TrackedEntity>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkMapAccessor}.
     */
    export type $ChunkMapAccessor_ = (() => $Int2ObjectMap<$ChunkMap$TrackedEntity>);
    export class $ChunkMapAccessor$TrackedEntity {
    }
    export interface $ChunkMapAccessor$TrackedEntity {
        getSeenBy(): $Set<$ServerPlayerConnection>;
        get seenBy(): $Set<$ServerPlayerConnection>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkMapAccessor$TrackedEntity}.
     */
    export type $ChunkMapAccessor$TrackedEntity_ = (() => $Set_<$ServerPlayerConnection>);
}
