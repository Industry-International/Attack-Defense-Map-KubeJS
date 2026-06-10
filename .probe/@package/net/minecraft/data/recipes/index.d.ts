import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AbstractCookingRecipe, $RecipeSerializer_, $Recipe, $AbstractCookingRecipe$Factory_, $SingleItemRecipe$Factory_, $CraftingBookCategory, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $FabricRecipeExporter } from "@package/net/fabricmc/fabric/api/datagen/v1/recipe";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $List_, $Map } from "@package/java/util";
import { $RecipeOutputMixin } from "@package/net/fabricmc/fabric/mixin/datagen/recipe";
import { $ItemPredicate$Builder, $InventoryChangeTrigger$TriggerInstance, $ItemPredicate_, $EnterBlockTrigger$TriggerInstance, $MinMaxBounds$Ints_ } from "@package/net/minecraft/advancements/critereon";
import { $BlockFamily, $DataProvider, $PackOutput$PathProvider, $PackOutput, $CachedOutput_, $BlockFamily$Variant_ } from "@package/net/minecraft/data";
import { $AdvancementHolder_, $Advancement$Builder, $Criterion_, $Criterion } from "@package/net/minecraft/advancements";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $IRecipeOutputExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
export * as packs from "@package/net/minecraft/data/recipes/packs";

declare module "@package/net/minecraft/data/recipes" {
    export class $SmithingTrimRecipeBuilder {
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        static smithingTrim(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $Ingredient_, arg3: $RecipeCategory_): $SmithingTrimRecipeBuilder;
        unlocks(arg0: string, arg1: $Criterion_<never>): $SmithingTrimRecipeBuilder;
        constructor(arg0: $RecipeCategory_, arg1: $Ingredient_, arg2: $Ingredient_, arg3: $Ingredient_);
    }
    export class $SpecialRecipeBuilder {
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        static special(arg0: $Function_<$CraftingBookCategory, $Recipe<never>>): $SpecialRecipeBuilder;
        constructor(arg0: $Function_<$CraftingBookCategory, $Recipe<never>>);
    }
    export class $RecipeProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        run(arg0: $CachedOutput_, arg1: $HolderLookup$Provider): $CompletableFuture<never>;
        static has(arg0: $MinMaxBounds$Ints_, arg1: $ItemLike_): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static has(arg0: $ItemLike_): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static has(arg0: $TagKey_<$Item>): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static wall(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static smeltingResultFromBase(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static bedFromPlanksAndWool(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static stonecutterResultFromBase(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static stonecutterResultFromBase(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_, arg4: number): void;
        static getSimpleRecipeName(arg0: $ItemLike_): string;
        static getConversionRecipeName(arg0: $ItemLike_, arg1: $ItemLike_): string;
        static getSmeltingRecipeName(arg0: $ItemLike_): string;
        static getBlastingRecipeName(arg0: $ItemLike_): string;
        static copySmithingTemplate(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $Ingredient_): void;
        static copySmithingTemplate(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static copySmithingTemplate(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $TagKey_<$Item>): void;
        static pressurePlateBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $RecipeBuilder;
        static banner(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static candle(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static carpet(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static slab(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static nineBlockStorageRecipesRecipesWithCustomUnpacking(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $RecipeCategory_, arg4: $ItemLike_, arg5: string, arg6: string): void;
        static stainedGlassPaneFromGlassPaneAndDye(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static coloredTerracottaFromTerracottaAndDye(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static nineBlockStorageRecipesWithCustomPacking(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $RecipeCategory_, arg4: $ItemLike_, arg5: string, arg6: string): void;
        buildAdvancement(arg0: $CachedOutput_, arg1: $HolderLookup$Provider, arg2: $AdvancementHolder_): $CompletableFuture<never>;
        buildAdvancement(arg0: $CachedOutput_, arg1: $HolderLookup$Provider, arg2: $AdvancementHolder_, ...arg3: $ICondition[]): $CompletableFuture<never>;
        static signBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static planksFromLog(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $TagKey_<$Item>, arg3: number): void;
        static planksFromLogs(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $TagKey_<$Item>, arg3: number): void;
        static threeByThreePacker(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static threeByThreePacker(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_, arg4: string): void;
        static fenceGateBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static twoByTwoPacker(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static fenceBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static trimSmithing(arg0: $RecipeOutput, arg1: $Item_, arg2: $ResourceLocation_): void;
        static stairBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static hangingSign(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static doorBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static slabBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $RecipeBuilder;
        static colorBlockWithDye(arg0: $RecipeOutput, arg1: $List_<$Item_>, arg2: $List_<$Item_>, arg3: string): void;
        static concretePowder(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static wallBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $RecipeBuilder;
        static polishedBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $RecipeBuilder;
        static mosaicBuilder(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static chiseledBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $ShapedRecipeBuilder;
        static generateRecipes(arg0: $RecipeOutput, arg1: $BlockFamily, arg2: $FeatureFlagSet): void;
        static getBaseBlock(arg0: $BlockFamily, arg1: $BlockFamily$Variant_): $Block;
        static inventoryTrigger(...arg0: $ItemPredicate_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static inventoryTrigger(...arg0: $ItemPredicate$Builder[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static netheriteSmithing(arg0: $RecipeOutput, arg1: $Item_, arg2: $RecipeCategory_, arg3: $Item_): void;
        static woodFromLogs(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static buttonBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static pressurePlate(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static trapdoorBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static cookRecipes<T extends $AbstractCookingRecipe>(arg0: $RecipeOutput, arg1: string, arg2: $RecipeSerializer_<T>, arg3: $AbstractCookingRecipe$Factory_<T>, arg4: number): void;
        static oreSmelting(arg0: $RecipeOutput, arg1: $List_<$ItemLike_>, arg2: $RecipeCategory_, arg3: $ItemLike_, arg4: number, arg5: number, arg6: string): void;
        buildRecipes(arg0: $RecipeOutput): void;
        buildRecipes(arg0: $RecipeOutput, arg1: $HolderLookup$Provider): void;
        static getItemName(arg0: $ItemLike_): string;
        static oreBlasting(arg0: $RecipeOutput, arg1: $List_<$ItemLike_>, arg2: $RecipeCategory_, arg3: $ItemLike_, arg4: number, arg5: number, arg6: string): void;
        static copperBulb(arg0: $RecipeOutput, arg1: $Block_, arg2: $Block_): void;
        generateForEnabledBlockFamilies(arg0: $RecipeOutput, arg1: $FeatureFlagSet): void;
        static stainedGlassFromGlassAndDye(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static stainedGlassPaneFromStainedGlass(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static nineBlockStorageRecipes(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $RecipeCategory_, arg4: $ItemLike_, arg5: string, arg6: string, arg7: string, arg8: string): void;
        static nineBlockStorageRecipes(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $RecipeCategory_, arg4: $ItemLike_): void;
        static oneToOneConversionRecipe(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_, arg3: string, arg4: number): void;
        static oneToOneConversionRecipe(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_, arg3: string): void;
        static simpleCookingRecipe<T extends $AbstractCookingRecipe>(arg0: $RecipeOutput, arg1: string, arg2: $RecipeSerializer_<T>, arg3: $AbstractCookingRecipe$Factory_<T>, arg4: number, arg5: $ItemLike_, arg6: $ItemLike_, arg7: number): void;
        static chestBoat(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static polished(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static cut(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static chiseled(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static cutBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $ShapedRecipeBuilder;
        static waxRecipes(arg0: $RecipeOutput, arg1: $FeatureFlagSet): void;
        static woodenBoat(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static grate(arg0: $RecipeOutput, arg1: $Block_, arg2: $Block_): void;
        static insideOf(arg0: $Block_): $Criterion<$EnterBlockTrigger$TriggerInstance>;
        static getHasName(arg0: $ItemLike_): string;
        static oreCooking<T extends $AbstractCookingRecipe>(arg0: $RecipeOutput, arg1: $RecipeSerializer_<T>, arg2: $AbstractCookingRecipe$Factory_<T>, arg3: $List_<$ItemLike_>, arg4: $RecipeCategory_, arg5: $ItemLike_, arg6: number, arg7: number, arg8: string, arg9: string): void;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $SmithingTransformRecipeBuilder {
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        unlocks(arg0: string, arg1: $Criterion_<never>): $SmithingTransformRecipeBuilder;
        static smithing(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $Ingredient_, arg3: $RecipeCategory_, arg4: $Item_): $SmithingTransformRecipeBuilder;
        constructor(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $Ingredient_, arg3: $RecipeCategory_, arg4: $Item_);
    }
    export class $ShapelessRecipeBuilder implements $RecipeBuilder {
        group(arg0: string): $ShapelessRecipeBuilder;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        requires(arg0: $Ingredient_): $ShapelessRecipeBuilder;
        requires(arg0: $ItemLike_, arg1: number): $ShapelessRecipeBuilder;
        requires(arg0: $Ingredient_, arg1: number): $ShapelessRecipeBuilder;
        requires(arg0: $ItemLike_): $ShapelessRecipeBuilder;
        requires(arg0: $TagKey_<$Item>): $ShapelessRecipeBuilder;
        getResult(): $Item;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemLike_): $ShapelessRecipeBuilder;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number): $ShapelessRecipeBuilder;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapelessRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $RecipeBuilder;
        result: $Item;
        criteria: $Map<string, $Criterion<never>>;
        category: $RecipeCategory;
        constructor(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
    }
    export class $ShapedRecipeBuilder implements $RecipeBuilder {
        pattern(arg0: string): $ShapedRecipeBuilder;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        getResult(): $Item;
        define(arg0: string, arg1: $ItemLike_): $ShapedRecipeBuilder;
        define(arg0: string, arg1: $TagKey_<$Item>): $ShapedRecipeBuilder;
        define(arg0: string, arg1: $Ingredient_): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemLike_): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number): $ShapedRecipeBuilder;
        showNotification(arg0: boolean): $ShapedRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        group(arg0: string): $RecipeBuilder;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $RecipeBuilder;
        constructor(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
        get result(): $Item;
    }
    export class $RecipeBuilder {
        static getDefaultRecipeId(arg0: $ItemLike_): $ResourceLocation;
        static determineBookCategory(arg0: $RecipeCategory_): $CraftingBookCategory;
        static ROOT_RECIPE_ADVANCEMENT: $ResourceLocation;
    }
    export interface $RecipeBuilder {
        group(arg0: string): $RecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        getResult(): $Item;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $RecipeBuilder;
        get result(): $Item;
    }
    export class $RecipeCategory extends $Enum<$RecipeCategory> {
        static values(): $RecipeCategory[];
        static valueOf(arg0: string): $RecipeCategory;
        getFolderName(): string;
        static BUILDING_BLOCKS: $RecipeCategory;
        static REDSTONE: $RecipeCategory;
        static TRANSPORTATION: $RecipeCategory;
        static COMBAT: $RecipeCategory;
        static MISC: $RecipeCategory;
        static BREWING: $RecipeCategory;
        static DECORATIONS: $RecipeCategory;
        static TOOLS: $RecipeCategory;
        static FOOD: $RecipeCategory;
        get folderName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategory}.
     */
    export type $RecipeCategory_ = "building_blocks" | "decorations" | "redstone" | "transportation" | "tools" | "combat" | "food" | "brewing" | "misc";
    export class $RecipeOutput {
    }
    export interface $RecipeOutput extends $IRecipeOutputExtension, $RecipeOutputMixin, $FabricRecipeExporter {
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_): void;
        advancement(): $Advancement$Builder;
    }
    export class $SingleItemRecipeBuilder implements $RecipeBuilder {
        group(arg0: string): $SingleItemRecipeBuilder;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        getResult(): $Item;
        static stonecutting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_): $SingleItemRecipeBuilder;
        static stonecutting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number): $SingleItemRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $RecipeBuilder;
        constructor(arg0: $RecipeCategory_, arg1: $SingleItemRecipe$Factory_<never>, arg2: $Ingredient_, arg3: $ItemLike_, arg4: number);
        get result(): $Item;
    }
    export class $SimpleCookingRecipeBuilder implements $RecipeBuilder {
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        static generic<T extends $AbstractCookingRecipe>(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: $RecipeSerializer_<T>, arg6: $AbstractCookingRecipe$Factory_<T>): $SimpleCookingRecipeBuilder;
        static generic<T extends $AbstractCookingRecipe>(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number, arg4: number, arg5: $RecipeSerializer_<T>, arg6: $AbstractCookingRecipe$Factory_<T>): $SimpleCookingRecipeBuilder;
        getResult(): $Item;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $SimpleCookingRecipeBuilder;
        static smelting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smelting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static blasting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static blasting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smoking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smoking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static campfireCooking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static campfireCooking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        group(arg0: string): $RecipeBuilder;
        get result(): $Item;
    }
}
