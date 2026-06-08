import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $List } from "@package/java/util";
import { $BlockRecipe, $BlockRecipeType, $BlockRecipeIngredient, $BlockRecipeSerializer } from "@package/rbasamoyai/createbigcannons/crafting";

declare module "@package/rbasamoyai/createbigcannons/crafting/boring" {
    export class $DrillBoringBlockRecipe implements $BlockRecipe {
        matches(arg0: $Level_, arg1: $BlockPos_): boolean;
        matches(arg0: $BlockState_, arg1: $Direction_): boolean;
        getType(): $BlockRecipeType<never>;
        getResultState(arg0: $BlockState_): $BlockState;
        assembleInWorld(arg0: $Level_, arg1: $BlockPos_): void;
        getSerializer(): $BlockRecipeSerializer<never>;
        ingredients(): $List<$ItemStack>;
        getResultBlock(): $Block;
        constructor(arg0: $BlockRecipeIngredient, arg1: $Block_, arg2: boolean);
        get type(): $BlockRecipeType<never>;
        get serializer(): $BlockRecipeSerializer<never>;
        get resultBlock(): $Block;
    }
}
