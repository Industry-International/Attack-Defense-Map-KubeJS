import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/com/mrh0/createaddition/mixin" {
    export class $FireBlockInvoker {
    }
    export interface $FireBlockInvoker {
        invokeSpreadPlacement(arg0: $BlockGetter, arg1: $BlockPos_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $FireBlockInvoker}.
     */
    export type $FireBlockInvoker_ = ((arg0: $BlockGetter, arg1: $BlockPos) => $BlockState_);
}
