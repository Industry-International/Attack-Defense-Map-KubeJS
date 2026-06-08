import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/net/mehvahdjukaar/moonlight/api/block" {
    export class $IBlockHolder {
    }
    export interface $IBlockHolder {
        setHeldBlock(arg0: $BlockState_): boolean;
        setHeldBlock(arg0: $BlockState_, arg1: number): boolean;
        getHeldBlock(arg0: number): $BlockState;
        getHeldBlock(): $BlockState;
    }
}
