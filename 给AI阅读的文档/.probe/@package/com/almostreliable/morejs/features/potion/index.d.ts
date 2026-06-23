import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $IBrewingRecipe, $BrewingRecipe } from "@package/net/neoforged/neoforge/common/brewing";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $PotionBrewing$Mix_, $Potion, $PotionBrewing$Mix, $PotionBrewing$Builder, $Potion_ } from "@package/net/minecraft/world/item/alchemy";
import { $List } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/com/almostreliable/morejs/features/potion" {
    export class $CustomBrewingFilter extends $Record implements $Predicate<$BrewingRecipe> {
        test(arg0: $BrewingRecipe): boolean;
        input(): ($Ingredient) | undefined;
        output(): ($Ingredient) | undefined;
        ingredient(): ($Ingredient) | undefined;
        or(arg0: $Predicate_<$BrewingRecipe>): $Predicate<$BrewingRecipe>;
        negate(): $Predicate<$BrewingRecipe>;
        and(arg0: $Predicate_<$BrewingRecipe>): $Predicate<$BrewingRecipe>;
        constructor(ingredient: ($Ingredient_) | undefined, input: ($Ingredient_) | undefined, output: ($Ingredient_) | undefined);
    }
    export class $PotionBrewingFilter extends $Record implements $Predicate<$PotionBrewing$Mix<$Potion>> {
        test(arg0: $PotionBrewing$Mix_<$Potion_>): boolean;
        input(): ($HolderSet<$Potion>) | undefined;
        output(): ($HolderSet<$Potion>) | undefined;
        ingredient(): ($Ingredient) | undefined;
        or(arg0: $Predicate_<$PotionBrewing$Mix<$Potion>>): $Predicate<$PotionBrewing$Mix<$Potion>>;
        negate(): $Predicate<$PotionBrewing$Mix<$Potion>>;
        and(arg0: $Predicate_<$PotionBrewing$Mix<$Potion>>): $Predicate<$PotionBrewing$Mix<$Potion>>;
        constructor(ingredient: ($Ingredient_) | undefined, input: ($HolderSet_<$Potion>) | undefined, output: ($HolderSet_<$Potion>) | undefined);
    }
    export class $PotionBrewingRegisterEvent implements $KubeEvent {
        removeContainer(arg0: $Ingredient_): void;
        validateContainer(arg0: $Ingredient_, arg1: $Item_, arg2: $Item_): void;
        addPotionBrewing(arg0: $Ingredient_, arg1: $Potion_, arg2: $Potion_): void;
        addPotionBrewing(arg0: $Ingredient_, arg1: $Potion_): void;
        addContainerRecipe(arg0: $Ingredient_, arg1: $Item_, arg2: $Item_): void;
        addCustomBrewing(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_): void;
        getCustomBrewingRecipes(): $List<$IBrewingRecipe>;
        removePotionBrewing(arg0: $PotionBrewingFilter_): void;
        removeCustomBrewing(arg0: $CustomBrewingFilter_): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $PotionBrewing$Builder);
        get customBrewingRecipes(): $List<$IBrewingRecipe>;
    }
}
