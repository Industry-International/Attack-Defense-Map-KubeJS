import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/mod/chloeprime/gunsmithlib/mixin/interactkey" {
    export class $StairBlockAccessor {
    }
    export interface $StairBlockAccessor {
        getBaseState(): $BlockState;
        get baseState(): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $StairBlockAccessor}.
     */
    export type $StairBlockAccessor_ = (() => $BlockState_);
}
