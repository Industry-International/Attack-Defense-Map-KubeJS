import { $IRecipeCategoryDecorator } from "@package/mezz/jei/api/recipe/category/extensions";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IGhostIngredientHandler, $IGuiContainerHandler, $IScreenHandler_, $IGlobalGuiHandler } from "@package/mezz/jei/api/gui/handlers";
import { $IExtendableSmithingRecipeCategory } from "@package/mezz/jei/api/recipe/category/extensions/vanilla/smithing";
import { $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $IJeiHelpers, $IColorHelper } from "@package/mezz/jei/api/helpers";
import { $Collection_, $List_, $Collection } from "@package/java/util";
import { $IExtendableCraftingRecipeCategory } from "@package/mezz/jei/api/recipe/category/extensions/vanilla/crafting";
import { $IRecipeTransferManager, $IRecipeTransferHandler, $IUniversalRecipeTransferHandler, $IRecipeTransferHandlerHelper, $IRecipeTransferInfo } from "@package/mezz/jei/api/recipe/transfer";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IRecipesGui, $IEditModeConfig, $IJeiFeatures, $IIngredientListOverlay, $IScreenHelper, $IIngredientVisibility, $IIngredientFilter, $IBookmarkOverlay, $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType, $IIngredientHelper, $IIngredientRenderer, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $IRecipeButtonControllerFactory_, $ISimpleRecipeManagerPlugin, $IRecipeManagerPlugin, $IRecipeManagerPluginHelper } from "@package/mezz/jei/api/recipe/advanced";
import { $ISubtypeInterpreter, $IIngredientSubtypeInterpreter_, $ISubtypeManager } from "@package/mezz/jei/api/ingredients/subtypes";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Class } from "@package/java/lang";

declare module "@package/mezz/jei/api/registration" {
    export class $IVanillaCategoryExtensionRegistration {
    }
    export interface $IVanillaCategoryExtensionRegistration {
        getJeiHelpers(): $IJeiHelpers;
        getCraftingCategory(): $IExtendableCraftingRecipeCategory;
        getSmithingCategory(): $IExtendableSmithingRecipeCategory;
        get jeiHelpers(): $IJeiHelpers;
        get craftingCategory(): $IExtendableCraftingRecipeCategory;
        get smithingCategory(): $IExtendableSmithingRecipeCategory;
    }
    export class $IModInfoRegistration {
    }
    export interface $IModInfoRegistration {
        addModAliases(arg0: string, arg1: $Collection_<string>): void;
        addModAliases(arg0: string, ...arg1: string[]): void;
    }
    /**
     * Values that may be interpreted as {@link $IModInfoRegistration}.
     */
    export type $IModInfoRegistration_ = ((arg0: string, arg1: $Collection<string>) => void);
    export class $IRecipeCatalystRegistration {
    }
    export interface $IRecipeCatalystRegistration {
        getJeiHelpers(): $IJeiHelpers;
        getIngredientManager(): $IIngredientManager;
        addRecipeCatalysts(arg0: $RecipeType<never>, ...arg1: $ItemStack_[]): void;
        addRecipeCatalysts<T>(arg0: $RecipeType<never>, arg1: $IIngredientType_<T>, arg2: $List_<T>): void;
        addRecipeCatalysts(arg0: $RecipeType<never>, ...arg1: $ItemLike_[]): void;
        addRecipeCatalyst<T>(arg0: $IIngredientType_<T>, arg1: T, ...arg2: $RecipeType<never>[]): void;
        addRecipeCatalyst(arg0: $ItemStack_, ...arg1: $RecipeType<never>[]): void;
        addRecipeCatalyst(arg0: $ItemLike_, ...arg1: $RecipeType<never>[]): void;
        get jeiHelpers(): $IJeiHelpers;
        get ingredientManager(): $IIngredientManager;
    }
    export class $IExtraIngredientRegistration {
    }
    export interface $IExtraIngredientRegistration {
        addExtraIngredients<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        addExtraItemStacks(arg0: $Collection_<$ItemStack_>): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtraIngredientRegistration}.
     */
    export type $IExtraIngredientRegistration_ = ((arg0: $IIngredientType<any>, arg1: $Collection<any>) => void);
    export class $IRecipeCategoryRegistration {
    }
    export interface $IRecipeCategoryRegistration {
        getJeiHelpers(): $IJeiHelpers;
        addRecipeCategories(...arg0: $IRecipeCategory<never>[]): void;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $ISubtypeRegistration {
    }
    export interface $ISubtypeRegistration {
        /**
         * @deprecated
         */
        registerSubtypeInterpreter(arg0: $Item_, arg1: $IIngredientSubtypeInterpreter_<$ItemStack>): void;
        /**
         * @deprecated
         */
        registerSubtypeInterpreter<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: $IIngredientSubtypeInterpreter_<I>): void;
        registerSubtypeInterpreter(arg0: $Item_, arg1: $ISubtypeInterpreter<$ItemStack_>): void;
        registerSubtypeInterpreter<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: $ISubtypeInterpreter<I>): void;
    }
    export class $IAdvancedRegistration {
    }
    export interface $IAdvancedRegistration {
        getJeiHelpers(): $IJeiHelpers;
        addRecipeCategoryDecorator<T>(arg0: $RecipeType<T>, arg1: $IRecipeCategoryDecorator<T>): void;
        addRecipeButtonFactory(arg0: $IRecipeButtonControllerFactory_): void;
        getJeiFeatures(): $IJeiFeatures;
        addRecipeManagerPlugin(arg0: $IRecipeManagerPlugin): void;
        addTypedRecipeManagerPlugin<T>(arg0: $RecipeType<T>, arg1: $ISimpleRecipeManagerPlugin<T>): void;
        getRecipeManagerPluginHelper(): $IRecipeManagerPluginHelper;
        get jeiHelpers(): $IJeiHelpers;
        get jeiFeatures(): $IJeiFeatures;
        get recipeManagerPluginHelper(): $IRecipeManagerPluginHelper;
    }
    export class $IIngredientAliasRegistration {
    }
    export interface $IIngredientAliasRegistration {
        addAlias<I>(arg0: $ITypedIngredient<I>, arg1: string): void;
        addAlias<I>(arg0: $IIngredientType_<I>, arg1: I, arg2: string): void;
        addAlias(arg0: $ItemStack_, arg1: string): void;
        addAliases<I>(arg0: $Collection_<$ITypedIngredient<I>>, arg1: string): void;
        addAliases<I>(arg0: $IIngredientType_<I>, arg1: $Collection_<I>, arg2: $Collection_<string>): void;
        addAliases<I>(arg0: $Collection_<$ITypedIngredient<I>>, arg1: $Collection_<string>): void;
        addAliases<I>(arg0: $IIngredientType_<I>, arg1: $Collection_<I>, arg2: string): void;
        addAliases<I>(arg0: $ITypedIngredient<I>, arg1: $Collection_<string>): void;
        addAliases<I>(arg0: $IIngredientType_<I>, arg1: I, arg2: $Collection_<string>): void;
    }
    export class $IRuntimeRegistration {
    }
    export interface $IRuntimeRegistration {
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        getJeiHelpers(): $IJeiHelpers;
        getRecipeManager(): $IRecipeManager;
        getRecipeTransferManager(): $IRecipeTransferManager;
        getScreenHelper(): $IScreenHelper;
        getEditModeConfig(): $IEditModeConfig;
        getIngredientManager(): $IIngredientManager;
        setIngredientListOverlay(arg0: $IIngredientListOverlay): void;
        setIngredientFilter(arg0: $IIngredientFilter): void;
        setBookmarkOverlay(arg0: $IBookmarkOverlay): void;
        setRecipesGui(arg0: $IRecipesGui): void;
        get ingredientVisibility(): $IIngredientVisibility;
        get jeiHelpers(): $IJeiHelpers;
        get recipeManager(): $IRecipeManager;
        get recipeTransferManager(): $IRecipeTransferManager;
        get screenHelper(): $IScreenHelper;
        get editModeConfig(): $IEditModeConfig;
        get ingredientManager(): $IIngredientManager;
        set ingredientListOverlay(value: $IIngredientListOverlay);
        set ingredientFilter(value: $IIngredientFilter);
        set bookmarkOverlay(value: $IBookmarkOverlay);
        set recipesGui(value: $IRecipesGui);
    }
    export class $IRecipeRegistration {
    }
    export interface $IRecipeRegistration {
        addRecipes<T>(arg0: $RecipeType<T>, arg1: $List_<T>): void;
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        getJeiHelpers(): $IJeiHelpers;
        getIngredientManager(): $IIngredientManager;
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        addIngredientInfo<T>(arg0: $List_<T>, arg1: $IIngredientType_<T>, ...arg2: $Component_[]): void;
        addIngredientInfo(arg0: $ItemLike_, ...arg1: $Component_[]): void;
        addIngredientInfo<T>(arg0: T, arg1: $IIngredientType_<T>, ...arg2: $Component_[]): void;
        addItemStackInfo(arg0: $ItemStack_, ...arg1: $Component_[]): void;
        addItemStackInfo(arg0: $List_<$ItemStack_>, ...arg1: $Component_[]): void;
        get ingredientVisibility(): $IIngredientVisibility;
        get jeiHelpers(): $IJeiHelpers;
        get ingredientManager(): $IIngredientManager;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
    }
    export class $IGuiHandlerRegistration {
    }
    export interface $IGuiHandlerRegistration {
        getJeiHelpers(): $IJeiHelpers;
        addGuiContainerHandler<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: $IGuiContainerHandler<T>): void;
        addGuiScreenHandler<T extends $Screen>(arg0: $Class<T>, arg1: $IScreenHandler_<T>): void;
        addGhostIngredientHandler<T extends $Screen>(arg0: $Class<T>, arg1: $IGhostIngredientHandler<T>): void;
        addGenericGuiContainerHandler<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: $IGuiContainerHandler<never>): void;
        addRecipeClickArea<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: number, arg2: number, arg3: number, arg4: number, ...arg5: $RecipeType<never>[]): void;
        addGlobalGuiHandler(arg0: $IGlobalGuiHandler): void;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IRecipeTransferRegistration {
    }
    export interface $IRecipeTransferRegistration {
        getJeiHelpers(): $IJeiHelpers;
        getTransferHelper(): $IRecipeTransferHandlerHelper;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferInfo<C, R>): void;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler<C, R>, arg1: $RecipeType<R>): void;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $Class<C>, arg1: $MenuType_<C>, arg2: $RecipeType<R>, arg3: number, arg4: number, arg5: number, arg6: number): void;
        addUniversalRecipeTransferHandler<C extends $AbstractContainerMenu>(arg0: $IUniversalRecipeTransferHandler<C>): void;
        /**
         * @deprecated
         */
        addUniversalRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler<C, R>): void;
        get jeiHelpers(): $IJeiHelpers;
        get transferHelper(): $IRecipeTransferHandlerHelper;
    }
    export class $IModIngredientRegistration {
    }
    export interface $IModIngredientRegistration {
        /**
         * @deprecated
         */
        register<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>, arg2: $IIngredientHelper<V>, arg3: $IIngredientRenderer<V>): void;
        register<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>, arg2: $IIngredientHelper<V>, arg3: $IIngredientRenderer<V>, arg4: $Codec<V>): void;
        getSubtypeManager(): $ISubtypeManager;
        getColorHelper(): $IColorHelper;
        get subtypeManager(): $ISubtypeManager;
        get colorHelper(): $IColorHelper;
    }
}
