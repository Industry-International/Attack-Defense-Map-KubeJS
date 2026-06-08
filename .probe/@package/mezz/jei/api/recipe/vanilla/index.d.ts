import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CraftingBookCategory_, $Ingredient_, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/recipe/vanilla" {
    export class $IVanillaRecipeFactory {
    }
    export interface $IVanillaRecipeFactory {
        createGrindstoneRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: number, arg4: number, arg5: $ResourceLocation_): $IJeiGrindstoneRecipe;
        createShapedRecipeBuilder(arg0: $CraftingBookCategory_, arg1: $List_<$ItemStack_>): $IJeiShapedRecipeBuilder;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_): $IJeiBrewingRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
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
        getMinXpReward(): number;
        getMaxXpReward(): number;
        getBottomInputs(): $List<$ItemStack>;
        isOutputRenderOnly(): boolean;
        getTopInputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get outputs(): $List<$ItemStack>;
        get minXpReward(): number;
        get maxXpReward(): number;
        get bottomInputs(): $List<$ItemStack>;
        get outputRenderOnly(): boolean;
        get topInputs(): $List<$ItemStack>;
    }
    export class $IJeiBrewingRecipe {
    }
    export interface $IJeiBrewingRecipe {
        getIngredients(): $List<$ItemStack>;
        getPotionInputs(): $List<$ItemStack>;
        getPotionOutput(): $ItemStack;
        getBrewingSteps(): number;
        getUid(): $ResourceLocation;
        get ingredients(): $List<$ItemStack>;
        get potionInputs(): $List<$ItemStack>;
        get potionOutput(): $ItemStack;
        get brewingSteps(): number;
        get uid(): $ResourceLocation;
    }
    export class $IJeiAnvilRecipe {
    }
    export interface $IJeiAnvilRecipe {
        getLeftInputs(): $List<$ItemStack>;
        getRightInputs(): $List<$ItemStack>;
        getUid(): $ResourceLocation;
        getOutputs(): $List<$ItemStack>;
        get leftInputs(): $List<$ItemStack>;
        get rightInputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get outputs(): $List<$ItemStack>;
    }
}
