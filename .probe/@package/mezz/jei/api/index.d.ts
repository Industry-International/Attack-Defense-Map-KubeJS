import { $IGuiHandlerRegistration, $IVanillaCategoryExtensionRegistration, $IAdvancedRegistration, $IRecipeCategoryRegistration, $IIngredientAliasRegistration, $IRecipeRegistration, $IModIngredientRegistration, $IRuntimeRegistration, $ISubtypeRegistration, $IModInfoRegistration_, $IRecipeCatalystRegistration, $IRecipeTransferRegistration, $IExtraIngredientRegistration_ } from "@package/mezz/jei/api/registration";
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
        registerFluidSubtypes<T>(arg0: $ISubtypeRegistration, arg1: $IPlatformFluidHelper<T>): void;
        registerItemSubtypes(arg0: $ISubtypeRegistration): void;
        registerIngredients(arg0: $IModIngredientRegistration): void;
        registerIngredientAliases(arg0: $IIngredientAliasRegistration): void;
        onConfigManagerAvailable(arg0: $IJeiConfigManager_): void;
        onRuntimeUnavailable(): void;
        registerExtraIngredients(arg0: $IExtraIngredientRegistration_): void;
        registerGuiHandlers(arg0: $IGuiHandlerRegistration): void;
        registerRecipeCatalysts(arg0: $IRecipeCatalystRegistration): void;
        registerRecipes(arg0: $IRecipeRegistration): void;
        registerCategories(arg0: $IRecipeCategoryRegistration): void;
        registerModInfo(arg0: $IModInfoRegistration_): void;
        registerAdvanced(arg0: $IAdvancedRegistration): void;
        getPluginUid(): $ResourceLocation;
        registerRuntime(arg0: $IRuntimeRegistration): void;
        registerRecipeTransferHandlers(arg0: $IRecipeTransferRegistration): void;
        registerVanillaCategoryExtensions(arg0: $IVanillaCategoryExtensionRegistration): void;
        onRuntimeAvailable(arg0: $IJeiRuntime): void;
        get pluginUid(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IModPlugin}.
     */
    export type $IModPlugin_ = (() => $ResourceLocation_);
}
