import { $IVanillaCategoryExtensionRegistration, $IGuiHandlerRegistration, $IAdvancedRegistration, $IRecipeCategoryRegistration, $IIngredientAliasRegistration, $IModIngredientRegistration, $IRecipeRegistration, $IRuntimeRegistration, $ISubtypeRegistration, $IModInfoRegistration_, $IRecipeCatalystRegistration, $IRecipeTransferRegistration, $IExtraIngredientRegistration_ } from "@package/mezz/jei/api/registration";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IPlatformFluidHelper } from "@package/mezz/jei/api/helpers";
import { $IJeiConfigManager_ } from "@package/mezz/jei/api/runtime/config";
import { $IJeiRuntime } from "@package/mezz/jei/api/runtime";
export * as ingredients from "@package/mezz/jei/api/ingredients";
export * as recipe from "@package/mezz/jei/api/recipe";
export * as registration from "@package/mezz/jei/api/registration";
export * as helpers from "@package/mezz/jei/api/helpers";
export * as runtime from "@package/mezz/jei/api/runtime";
export * as gui from "@package/mezz/jei/api/gui";

declare module "@package/mezz/jei/api" {
    export class $IModPlugin {
    }
    export interface $IModPlugin {
        registerItemSubtypes(arg0: $ISubtypeRegistration): void;
        registerFluidSubtypes<T>(arg0: $ISubtypeRegistration, arg1: $IPlatformFluidHelper<T>): void;
        registerIngredients(arg0: $IModIngredientRegistration): void;
        registerExtraIngredients(arg0: $IExtraIngredientRegistration_): void;
        registerIngredientAliases(arg0: $IIngredientAliasRegistration): void;
        registerRecipes(arg0: $IRecipeRegistration): void;
        onRuntimeAvailable(arg0: $IJeiRuntime): void;
        getPluginUid(): $ResourceLocation;
        registerModInfo(arg0: $IModInfoRegistration_): void;
        registerAdvanced(arg0: $IAdvancedRegistration): void;
        registerRuntime(arg0: $IRuntimeRegistration): void;
        registerCategories(arg0: $IRecipeCategoryRegistration): void;
        registerVanillaCategoryExtensions(arg0: $IVanillaCategoryExtensionRegistration): void;
        registerRecipeTransferHandlers(arg0: $IRecipeTransferRegistration): void;
        registerRecipeCatalysts(arg0: $IRecipeCatalystRegistration): void;
        onConfigManagerAvailable(arg0: $IJeiConfigManager_): void;
        registerGuiHandlers(arg0: $IGuiHandlerRegistration): void;
        onRuntimeUnavailable(): void;
        get pluginUid(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IModPlugin}.
     */
    export type $IModPlugin_ = (() => $ResourceLocation_);
}
