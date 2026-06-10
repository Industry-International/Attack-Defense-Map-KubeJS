import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/eu/ha3/presencefootsteps/api" {
    export class $DerivedBlock {
        static getBaseOf(arg0: $BlockState_): $BlockState;
    }
    export interface $DerivedBlock {
        getBaseBlockState(): $BlockState;
        get baseBlockState(): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $DerivedBlock}.
     */
    export type $DerivedBlock_ = (() => $BlockState_);
    export class $DerivedBlock$Settings {
    }
    export interface $DerivedBlock$Settings {
        getBaseBlock(): $Block;
        setBaseBlock(arg0: $Block_): void;
    }
}
