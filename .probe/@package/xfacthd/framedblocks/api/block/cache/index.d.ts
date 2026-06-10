import { $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IBlockType } from "@package/xfacthd/framedblocks/api/type";

declare module "@package/xfacthd/framedblocks/api/block/cache" {
    export class $IStateCacheAccessor {
    }
    export interface $IStateCacheAccessor {
        framedblocks$initCache(arg0: $StateCache): void;
        framedblocks$getCache(): $StateCache;
    }
    export class $StateCache {
        hasAnyFullFace(): boolean;
        canConnectFullEdge(arg0: $Direction_, arg1: $Direction_): boolean;
        canConnectDetailed(arg0: $Direction_, arg1: $Direction_): boolean;
        hasAnyDetailedConnections(): boolean;
        mayConnect(arg0: $Direction_): boolean;
        isFullFace(arg0: $Direction_): boolean;
        static EMPTY: $StateCache;
        constructor(arg0: $BlockState_, arg1: $IBlockType);
    }
}
