import { $Level_ } from "@package/net/minecraft/world/level";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/com/simibubi/create/content/equipment/wrench" {
    export class $IWrenchable {
        static playRotateSound(arg0: $Level_, arg1: $BlockPos_): void;
        static playRemoveSound(arg0: $Level_, arg1: $BlockPos_): void;
    }
    export interface $IWrenchable {
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
    }
}
