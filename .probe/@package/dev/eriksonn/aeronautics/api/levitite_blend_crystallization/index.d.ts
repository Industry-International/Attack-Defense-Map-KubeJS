import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/dev/eriksonn/aeronautics/api/levitite_blend_crystallization" {
    export class $CrystalPropagationContext {
    }
    export interface $CrystalPropagationContext {
        getCatalyzerTag(): $TagKey<$Block>;
        onCrystallize(arg0: $Level_, arg1: $BlockPos_): void;
        shouldCrystallize(arg0: $Level_, arg1: number, arg2: boolean): boolean;
        onCrystallizationFail(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: boolean): void;
        getContextForSpread(arg0: $Level_, arg1: $BlockPos_): $CrystalPropagationContext;
        onDefaultCrystallize(arg0: $Level_, arg1: $BlockPos_): void;
        getCrystalBlockState(arg0: $Level_, arg1: $BlockPos_): $BlockState;
        onCrystallizationInitialize(arg0: $Level_, arg1: $BlockPos_, arg2: boolean): void;
        canSpreadTo(arg0: $FluidState): boolean;
        getNewAge(arg0: $Level_, arg1: number, arg2: boolean): number;
        get catalyzerTag(): $TagKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $CrystalPropagationContext}.
     */
    export type $CrystalPropagationContext_ = RegistryTypes.AeronauticsLevititeCrystalPropagationContext;
    export interface $CrystalPropagationContext extends RegistryMarked<RegistryTypes.AeronauticsLevititeCrystalPropagationContextTag, RegistryTypes.AeronauticsLevititeCrystalPropagationContext> {}
}
