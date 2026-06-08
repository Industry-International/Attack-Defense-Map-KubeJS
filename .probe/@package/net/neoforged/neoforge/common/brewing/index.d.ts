import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/common/brewing" {
    export class $IBrewingRecipe {
    }
    export interface $IBrewingRecipe {
        getOutput(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        isInput(arg0: $ItemStack_): boolean;
        isIngredient(arg0: $ItemStack_): boolean;
    }
    export class $BrewingRecipeRegistry extends $Record {
        getOutput(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        isValidIngredient(arg0: $ItemStack_): boolean;
        recipes(): $List<$IBrewingRecipe>;
        hasOutput(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        isValidInput(arg0: $ItemStack_): boolean;
        constructor(recipes: $List_<$IBrewingRecipe>);
    }
    export class $BrewingRecipe implements $IBrewingRecipe {
        getOutput(): $ItemStack;
        getOutput(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        isInput(arg0: $ItemStack_): boolean;
        isIngredient(arg0: $ItemStack_): boolean;
        getInput(): $Ingredient;
        getIngredient(): $Ingredient;
        constructor(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_);
    }
}
