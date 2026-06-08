import { $Level_ } from "@package/net/minecraft/world/level";
import { $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PropertySetter } from "@package/rbasamoyai/createbigcannons/base";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $NonNullSupplier_ } from "@package/com/tterrag/registrate/util/nullness";
import { $BlockRecipe, $BlockRecipeType, $BlockRecipeSerializer } from "@package/rbasamoyai/createbigcannons/crafting";

declare module "@package/rbasamoyai/createbigcannons/crafting/casting" {
    export interface $CannonCastShape extends RegistryMarked<RegistryTypes.CreatebigcannonsCannonCastShapesTag, RegistryTypes.CreatebigcannonsCannonCastShapes> {}
    export class $CannonCastingRecipe implements $BlockRecipe {
        matches(arg0: $Level_, arg1: $BlockPos_): boolean;
        getType(): $BlockRecipeType<never>;
        shape(): $CannonCastShape;
        getSerializer(): $BlockRecipeSerializer<never>;
        ingredient(): $FluidIngredient;
        getResultBlock(): $Block;
        assembleInWorld(arg0: $Level_, arg1: $BlockPos_): void;
        constructor(arg0: $CannonCastShape_, arg1: $FluidIngredient_, arg2: $Block_);
        get type(): $BlockRecipeType<never>;
        get serializer(): $BlockRecipeSerializer<never>;
        get resultBlock(): $Block;
    }
    export class $CannonCastShape {
        static register(): void;
        castMould(): $Block;
        applyTo(arg0: $BlockState_): $BlockState;
        diameter(): number;
        isLarge(): boolean;
        texturesCanConnect(): boolean;
        fluidSize(): number;
        static VERY_LARGE: $CannonCastShape;
        static AUTOCANNON_BARREL: $CannonCastShape;
        static VERY_SMALL: $CannonCastShape;
        static MEDIUM: $CannonCastShape;
        static SCREW_BREECH: $CannonCastShape;
        static AUTOCANNON_BREECH: $CannonCastShape;
        static SLIDING_BREECH: $CannonCastShape;
        static AUTOCANNON_BARREL_FLANGED: $CannonCastShape;
        static SMALL: $CannonCastShape;
        static LARGE: $CannonCastShape;
        static CANNON_END: $CannonCastShape;
        static AUTOCANNON_RECOIL_SPRING: $CannonCastShape;
        static DROP_MORTAR_END: $CannonCastShape;
        constructor(arg0: number, arg1: number, arg2: $NonNullSupplier_<$Block>, ...arg3: $PropertySetter<never>[]);
        constructor(arg0: number, arg1: number, arg2: $NonNullSupplier_<$Block>, arg3: boolean, arg4: boolean, ...arg5: $PropertySetter<never>[]);
        get large(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CannonCastShape}.
     */
    export type $CannonCastShape_ = RegistryTypes.CreatebigcannonsCannonCastShapes;
}
