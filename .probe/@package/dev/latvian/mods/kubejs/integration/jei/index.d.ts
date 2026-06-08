import { $IVanillaCategoryExtensionRegistration, $IRecipeCategoryRegistration, $IIngredientAliasRegistration, $IRecipeRegistration, $IRuntimeRegistration, $ISubtypeRegistration, $IModInfoRegistration_, $IRecipeCatalystRegistration, $IGuiHandlerRegistration, $IAdvancedRegistration, $IModIngredientRegistration, $IRecipeTransferRegistration, $IExtraIngredientRegistration_ } from "@package/mezz/jei/api/registration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IModPlugin } from "@package/mezz/jei/api";
import { $IPlatformFluidHelper } from "@package/mezz/jei/api/helpers";
import { $IJeiConfigManager_ } from "@package/mezz/jei/api/runtime/config";
import { $List, $Map_, $List_ } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IJeiRuntime } from "@package/mezz/jei/api/runtime";
import { $RemoteRecipeViewerDataUpdatedEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer/server";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType } from "@package/mezz/jei/api/ingredients";
import { $IRecipeManager } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RemoveEntriesKubeEvent, $AddEntriesKubeEvent, $RecipeViewerEntryType, $RemoveRecipesKubeEvent, $AddInformationKubeEvent, $RemoveCategoriesKubeEvent, $RegisterSubtypesKubeEvent, $SubtypeInterpreter, $SubtypeInterpreter_ } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $UidContext_, $IIngredientSubtypeInterpreter } from "@package/mezz/jei/api/ingredients/subtypes";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record, $Object } from "@package/java/lang";
import { $Context } from "@package/dev/latvian/mods/rhino";

declare module "@package/dev/latvian/mods/kubejs/integration/jei" {
    export class $JEIAddInformationKubeEvent implements $AddInformationKubeEvent {
        add(filter: $Object, info: $List_<$Component_>): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(type: $RecipeViewerEntryType, ingredientType: $IIngredientType_<never>, registration: $IRecipeRegistration);
    }
    export class $JEIRemoveCategoriesKubeEvent implements $RemoveCategoriesKubeEvent {
        remove(ids: $ResourceLocation_[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(recipeManager: $IRecipeManager, categories: $Map_<$ResourceLocation_, $IRecipeCategory<never>>);
    }
    export class $JEIRemoveEntriesKubeEvent implements $RemoveEntriesKubeEvent {
        remove(filter: $Object): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(r: $IJeiRuntime, type: $RecipeViewerEntryType, t: $IIngredientType_<never>);
    }
    export class $JEIRegisterSubtypesKubeEvent implements $RegisterSubtypesKubeEvent {
        register(filter: $Object, interpreter: $SubtypeInterpreter_): void;
        useComponents(filter: $Object, components: $List_<$DataComponentType_<never>>): void;
        useComponents(filter: $Object): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(type: $RecipeViewerEntryType, ingredientType: $IIngredientTypeWithSubtypes<never, never>, registration: $ISubtypeRegistration);
    }
    export class $JEIRemoveRecipesKubeEvent implements $RemoveRecipesKubeEvent {
        remove(recipesToRemove: $ResourceLocation_[]): void;
        removeFromCategory(category: $ResourceLocation_, recipesToRemove: $ResourceLocation_[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(recipeManager: $IRecipeManager, categories: $Map_<$ResourceLocation_, $IRecipeCategory<never>>);
    }
    export class $KubeJSJEIPlugin implements $IModPlugin {
        registerItemSubtypes(registration: $ISubtypeRegistration): void;
        registerFluidSubtypes<T>(registration: $ISubtypeRegistration, platformFluidHelper: $IPlatformFluidHelper<T>): void;
        registerRecipes(registration: $IRecipeRegistration): void;
        onRuntimeAvailable(runtime: $IJeiRuntime): void;
        getPluginUid(): $ResourceLocation;
        loadRemote(event: $RemoteRecipeViewerDataUpdatedEvent): void;
        registerIngredients(arg0: $IModIngredientRegistration): void;
        registerExtraIngredients(arg0: $IExtraIngredientRegistration_): void;
        registerIngredientAliases(arg0: $IIngredientAliasRegistration): void;
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
        static DISABLED: boolean;
        static ID: $ResourceLocation;
        constructor();
        get pluginUid(): $ResourceLocation;
    }
    export class $DataComponentTypeInterpreter extends $Record implements $IIngredientSubtypeInterpreter<any> {
        apply(from: $Object, context: $UidContext_): string;
        static of(keys: $List_<$DataComponentType_<never>>): $DataComponentTypeInterpreter;
        keys(): $List<$DataComponentType<never>>;
        static EMPTY: $DataComponentTypeInterpreter;
        constructor(keys: $List_<$DataComponentType_<never>>);
    }
    export class $JEIIntegration {
        static getEntries(type: $RecipeViewerEntryType, cx: $Context, filter: $Object): $Object[];
        static typeOf(type: $RecipeViewerEntryType): $IIngredientType<never>;
        constructor();
    }
    export class $JEIRegisterSubtypesKubeEvent$JEISubtypeInterpreter extends $Record implements $IIngredientSubtypeInterpreter<any> {
        apply(ingredient: $Object, context: $UidContext_): string;
        interpreter(): $SubtypeInterpreter;
        constructor(interpreter: $SubtypeInterpreter_);
    }
    export class $JEIAddEntriesKubeEvent implements $AddEntriesKubeEvent {
        add(items: $Object[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(r: $IJeiRuntime, type: $RecipeViewerEntryType, t: $IIngredientType_<never>);
    }
}
