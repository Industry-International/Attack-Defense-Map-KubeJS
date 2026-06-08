import { $JsonElement_ } from "@package/com/google/gson";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $KubeIconTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/client/icon";
import { $CustomRecipeSchemaFunctionRegistry_, $RecipeSchemaFunctionRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/schema/function";
import { $Map_ } from "@package/java/util";
import { $EventGroupRegistry_ } from "@package/dev/latvian/mods/kubejs/event";
import { $RecipeComponentTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/component";
import { $Consumer_ } from "@package/java/util/function";
import { $AttachedData, $NameProvider$Registry_ } from "@package/dev/latvian/mods/kubejs/util";
import { $RecipePostProcessorTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing";
import { $KubeJSPlugin, $ClassFilter } from "@package/dev/latvian/mods/kubejs/plugin";
import { $RecipeFactoryRegistry, $RecipeMappingRegistry, $RecipeSchemaRegistry } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Object } from "@package/java/lang";
import { $DataComponentTypeInfoRegistry_, $BindingRegistry_, $TypeDescriptionRegistry, $RecordDefaultsRegistry_, $TypeWrapperRegistry, $ScriptManager } from "@package/dev/latvian/mods/kubejs/script";
import { $BlockEntityAttachmentRegistry_ } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $IngredientActionTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/ingredientaction";
import { $LangKubeEvent_ } from "@package/dev/latvian/mods/kubejs/client";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeAssetGenerator, $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataExport } from "@package/dev/latvian/mods/kubejs/server";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $RecipeViewerEntryType } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $ServerRegistryRegistry_, $BuilderTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RecipeManagerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $LocalWebServer_, $LocalWebServerAPIRegistry_, $LocalWebServerRegistry } from "@package/dev/latvian/mods/kubejs/web";

declare module "@package/dev/latvian/mods/kubejs/integration/architectury" {
    export class $ArchitecturyIntegration implements $KubeJSPlugin {
        registerTypeWrappers(registry: $TypeWrapperRegistry): void;
        static wrapArchFluid(o: $Object): $FluidStack;
        init(): void;
        initStartup(): void;
        /**
         * @deprecated
         */
        clearCaches(): void;
        afterScriptsLoaded(manager: $ScriptManager): void;
        registerBuilderTypes(registry: $BuilderTypeRegistry_): void;
        beforeScriptsLoaded(manager: $ScriptManager): void;
        registerRecordDefaults(registry: $RecordDefaultsRegistry_): void;
        registerServerRegistries(registry: $ServerRegistryRegistry_): void;
        registerTypeDescriptions(registry: $TypeDescriptionRegistry): void;
        attachServerData(event: $AttachedData<$MinecraftServer>): void;
        attachPlayerData(event: $AttachedData<$Player>): void;
        registerRecipeFactories(registry: $RecipeFactoryRegistry): void;
        registerEvents(registry: $EventGroupRegistry_): void;
        afterInit(): void;
        registerClasses(filter: $ClassFilter): void;
        exportServerData(arg0: $DataExport): void;
        registerIconTypes(registry: $KubeIconTypeRegistry_): void;
        registerBindings(bindings: $BindingRegistry_): void;
        attachLevelData(event: $AttachedData<$Level_>): void;
        registerRecipeSchemas(registry: $RecipeSchemaRegistry): void;
        localWebServerStarted(server: $LocalWebServer_): void;
        beforeRecipeLoading(event: $RecipesKubeEvent, manager: $RecipeManagerKJS, recipeJsons: $Map_<$ResourceLocation_, $JsonElement_>): void;
        registerRecipeMappings(registry: $RecipeMappingRegistry): void;
        registerLocalWebServerAPIs(registry: $LocalWebServerAPIRegistry_): void;
        registerRecipeComponents(registry: $RecipeComponentTypeRegistry_): void;
        registerItemNameProviders(registry: $NameProvider$Registry_<$Item, $ItemStack>): void;
        registerLocalWebServer(registry: $LocalWebServerRegistry): void;
        generateAssets(generator: $KubeAssetGenerator): void;
        generateData(generator: $KubeDataGenerator): void;
        generateLang(event: $LangKubeEvent_): void;
        registerRecipePostProcessors(registry: $RecipePostProcessorTypeRegistry_): void;
        registerBlockEntityAttachments(registry: $BlockEntityAttachmentRegistry_): void;
        registerIngredientActionTypes(registry: $IngredientActionTypeRegistry_): void;
        registerRecipeViewerEntryTypes(registry: $Consumer_<$RecipeViewerEntryType>): void;
        registerLocalWebServerWithAuth(registry: $LocalWebServerRegistry): void;
        registerRecipeSchemaFunctionTypes(registry: $RecipeSchemaFunctionRegistry_): void;
        registerCustomRecipeSchemaFunctions(registry: $CustomRecipeSchemaFunctionRegistry_): void;
        registerDataComponentTypeDescriptions(registry: $DataComponentTypeInfoRegistry_): void;
        breakpoint(args: $Object[]): void;
        constructor();
    }
}
