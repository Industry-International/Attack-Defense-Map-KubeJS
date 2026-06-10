import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $List_, $Set, $List } from "@package/java/util";
import { $BlockRecipe, $BlockRecipeType, $BlockRecipeIngredient, $BlockRecipeSerializer } from "@package/rbasamoyai/createbigcannons/crafting";

declare module "@package/rbasamoyai/createbigcannons/crafting/builtup" {
    export class $BuiltUpHeatingRecipe implements $BlockRecipe {
        matches(arg0: $Level_, arg1: $BlockPos_): boolean;
        layers(): $Set<$BlockRecipeIngredient>;
        getType(): $BlockRecipeType<never>;
        layerList(): $List<$BlockRecipeIngredient>;
        getSerializer(): $BlockRecipeSerializer<never>;
        getResultBlock(): $Block;
        assembleInWorld(arg0: $Level_, arg1: $BlockPos_): void;
        constructor(arg0: $List_<$BlockRecipeIngredient>, arg1: $Block_);
        get type(): $BlockRecipeType<never>;
        get serializer(): $BlockRecipeSerializer<never>;
        get resultBlock(): $Block;
    }
}
