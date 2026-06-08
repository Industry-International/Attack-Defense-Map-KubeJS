import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/org/embeddedt/modernfix/common/mixin/perf/reduce_blockstate_cache_rebuilds" {
    export class $BlockBehaviourInvoker {
    }
    export interface $BlockBehaviourInvoker {
        invokeGetFluidState(arg0: $BlockState_): $FluidState;
        invokeIsRandomlyTicking(arg0: $BlockState_): boolean;
    }
}
