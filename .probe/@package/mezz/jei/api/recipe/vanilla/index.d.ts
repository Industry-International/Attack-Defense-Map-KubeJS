import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CraftingBookCategory_, $Ingredient_, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/recipe/vanilla" {
    export class $IVanillaRecipeFactory {
    }
    export interface $IVanillaRecipeFactory {
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): $IJeiBrewingRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createShapedRecipeBuilder(arg0: $CraftingBookCategory_, arg1: $List_<$ItemStack_>): $IJeiShapedRecipeBuilder;
        createGrindstoneRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: number, arg4: number, arg5: $ResourceLocation_): $IJeiGrindstoneRecipe;
    }
    export class $IJeiShapedRecipeBuilder {
    }
    export interface $IJeiShapedRecipeBuilder {
        group(arg0: string): $IJeiShapedRecipeBuilder;
        pattern(arg0: string): $IJeiShapedRecipeBuilder;
        build(): $CraftingRecipe;
        define(arg0: string, arg1: $Ingredient_): $IJeiShapedRecipeBuilder;
    }
    export class $IJeiGrindstoneRecipe {
    }
    export interface $IJeiGrindstoneRecipe {
        getUid(): $ResourceLocation;
        getOutputs(): $List<$ItemStack>;
        getTopInputs(): $List<$ItemStack>;
        getBottomInputs(): $List<$ItemStack>;
        getMinXpReward(): number;
        getMaxXpReward(): number;
        isOutputRenderOnly(): boolean;
        get uid(): $ResourceLocation;
        get outputs(): $List<$ItemStack>;
        get topInputs(): $List<$ItemStack>;
        get bottomInputs(): $List<$ItemStack>;
        get minXpReward(): number;
        get maxXpReward(): number;
        get outputRenderOnly(): boolean;
    }
    export class $IJeiBrewingRecipe {
    }
    export interface $IJeiBrewingRecipe {
        getIngredients(): $List<$ItemStack>;
        getUid(): $ResourceLocation;
        getBrewingSteps(): number;
        getPotionInputs(): $List<$ItemStack>;
        getPotionOutput(): $ItemStack;
        get ingredients(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get brewingSteps(): number;
        get potionInputs(): $List<$ItemStack>;
        get potionOutput(): $ItemStack;
    }
    export class $IJeiAnvilRecipe {
    }
    export interface $IJeiAnvilRecipe {
        getUid(): $ResourceLocation;
        getOutputs(): $List<$ItemStack>;
        getLeftInputs(): $List<$ItemStack>;
        getRightInputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get outputs(): $List<$ItemStack>;
        get leftInputs(): $List<$ItemStack>;
        get rightInputs(): $List<$ItemStack>;
    }
}
