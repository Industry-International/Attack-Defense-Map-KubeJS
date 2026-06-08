import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/xfacthd/framedblocks/api/predicate/cull" {
    export class $SideSkipPredicate {
        static FALSE: $SideSkipPredicate;
    }
    export interface $SideSkipPredicate {
        test(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $Direction_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SideSkipPredicate}.
     */
    export type $SideSkipPredicate_ = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockState, arg4: $Direction) => boolean);
}
