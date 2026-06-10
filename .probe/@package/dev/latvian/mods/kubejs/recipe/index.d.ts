import { $JsonObject_, $JsonObject, $JsonElement_ } from "@package/com/google/gson";
import { $ReloadableServerResources } from "@package/net/minecraft/server";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $CraftingInput, $Ingredient, $Ingredient_, $RecipeSerializer, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Compostable, $Compostable_ } from "@package/net/neoforged/neoforge/registries/datamaps/builtin";
import { $Map, $Set, $List, $Map_, $List_, $Collection, $SequencedSet } from "@package/java/util";
import { $RecipeSchemaFunction } from "@package/dev/latvian/mods/kubejs/recipe/schema/function";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $DependencySorter$Entry } from "@package/net/minecraft/util";
import { $DataProvider, $CachedOutput_ } from "@package/net/minecraft/data";
import { $RecipeComponentValue, $RecipeComponent, $RecipeValidationContext, $ComponentRole, $ComponentRole_ } from "@package/dev/latvian/mods/kubejs/recipe/component";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Predicate, $Supplier } from "@package/java/util/function";
import { $Registry, $HolderLookup$Provider, $Holder } from "@package/net/minecraft/core";
import { $SlotFilter_, $WrappedJS, $TickDuration_, $RegistryOpsContainer, $ErrorStack, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipePostProcessor } from "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing";
import { $ConditionalOps } from "@package/net/neoforged/neoforge/common/conditions";
import { $CustomJavaToJsWrapper } from "@package/dev/latvian/mods/rhino/util";
import { $RecipeSchemaStorage, $RecipeSchemaData$RecipeKeyData_, $RecipeNamespace, $RecipeSchemaType, $RecipeSchema, $RecipeOptional_, $RecipeSchemaData_, $RecipeSchemaData$RecipeKeyData, $RecipeSchemaData$ConstructorData_ } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $RecipeFilter_, $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Record, $Object } from "@package/java/lang";
import { $WithScriptContext, $SourceLine, $SourceLine_ } from "@package/dev/latvian/mods/kubejs/script";
import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { Minecraft$Stonecutting, Minecraft$CampfireCooking, Minecraft$Smoking, Minecraft$SmithingTransform, Minecraft$SmithingTrim, DocumentedRecipes, Minecraft$Smelting, Kubejs$Shaped, Minecraft$Blasting, Kubejs$Shapeless } from "@side-only/server/events/recipes";
import { $TagKey, $TagLoader$EntryWithSource_, $TagKey_, $TagLoader$EntryWithSource } from "@package/net/minecraft/tags";
import { $IngredientAction } from "@package/dev/latvian/mods/kubejs/recipe/ingredientaction";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $Pattern } from "@package/java/util/regex";
import { $VirtualDataMapFile } from "@package/dev/latvian/mods/kubejs/script/data";
import { $GatherDataEvent } from "@package/net/neoforged/neoforge/data/event";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_, $RegistryOps$RegistryInfoLookup } from "@package/net/minecraft/resources";
import { $RecipeLikeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Scriptable, $Context, $NativeJavaObject, $BaseFunction } from "@package/dev/latvian/mods/rhino";
export * as special from "@package/dev/latvian/mods/kubejs/recipe/special";
export * as schema from "@package/dev/latvian/mods/kubejs/recipe/schema";
export * as component from "@package/dev/latvian/mods/kubejs/recipe/component";
export * as viewer from "@package/dev/latvian/mods/kubejs/recipe/viewer";
export * as ingredientaction from "@package/dev/latvian/mods/kubejs/recipe/ingredientaction";
export * as filter from "@package/dev/latvian/mods/kubejs/recipe/filter";
export * as match from "@package/dev/latvian/mods/kubejs/recipe/match";

declare module "@package/dev/latvian/mods/kubejs/recipe" {
    export class $CachedTagLookup$Entry<T> extends $Record {
        lookup(): $CachedTagLookup<T>;
        key(): $ResourceKey<T>;
        registry(): $Registry<T>;
        constructor(key: $ResourceKey_<T>, registry: $Registry<T>, lookup: $CachedTagLookup<T>);
    }
    export class $KubeJSRecipeSerializers {
        static SHAPED: $Supplier<$RecipeSerializer<never>>;
        static SHAPELESS: $Supplier<$RecipeSerializer<never>>;
        static REGISTRY: $DeferredRegister<$RecipeSerializer<never>>;
    }
    export interface $KubeJSRecipeSerializers {
    }
    export class $RecipeSchemaProvider$SchemaDataBuilder {
        parent(parent: $ResourceLocation_): $RecipeSchemaProvider$SchemaDataBuilder;
        constructors(constructors: $List_<$RecipeSchemaData$ConstructorData_>): $RecipeSchemaProvider$SchemaDataBuilder;
        constructors(...constructors: $RecipeSchemaData$ConstructorData_[]): $RecipeSchemaProvider$SchemaDataBuilder;
        keys(keys: $List_<$RecipeKey<never>>): $RecipeSchemaProvider$SchemaDataBuilder;
        keys(...keys: $RecipeKey<never>[]): $RecipeSchemaProvider$SchemaDataBuilder;
        "function"(name: string, arg1: $RecipeSchemaFunction): $RecipeSchemaProvider$SchemaDataBuilder;
        mappings(mappings: $List_<string>): $RecipeSchemaProvider$SchemaDataBuilder;
        mappings(...mappings: string[]): $RecipeSchemaProvider$SchemaDataBuilder;
        functions(functions: $Map_<string, $RecipeSchemaFunction>): $RecipeSchemaProvider$SchemaDataBuilder;
        hidden(hidden: boolean): $RecipeSchemaProvider$SchemaDataBuilder;
        hidden(): $RecipeSchemaProvider$SchemaDataBuilder;
        postProcessors(...processors: $RecipePostProcessor[]): $RecipeSchemaProvider$SchemaDataBuilder;
        postProcessors(processors: $List_<$RecipePostProcessor>): $RecipeSchemaProvider$SchemaDataBuilder;
        overrideType(type: $ResourceLocation_): $RecipeSchemaProvider$SchemaDataBuilder;
        mergeData(keys: boolean, constructors: boolean, unique: boolean, postProcessors: boolean): $RecipeSchemaProvider$SchemaDataBuilder;
        keyDatas(...keys: $RecipeSchemaData$RecipeKeyData_[]): $RecipeSchemaProvider$SchemaDataBuilder;
        keyDatas(keys: $List_<$RecipeSchemaData$RecipeKeyData_>): $RecipeSchemaProvider$SchemaDataBuilder;
        recipeFactory(factory: $ResourceLocation_): $RecipeSchemaProvider$SchemaDataBuilder;
        keysForUniqueId(keys: $List_<string>): $RecipeSchemaProvider$SchemaDataBuilder;
        keysForUniqueId(...keys: string[]): $RecipeSchemaProvider$SchemaDataBuilder;
        overrideKey<T>(key: $RecipeKey<T>, optionalValue: T): $RecipeSchemaProvider$SchemaDataBuilder;
        constructor(this$0: $RecipeSchemaProvider);
    }
    export class $RecipeFunction extends $NativeJavaObject {
        static isValidIdentifier(name: string[]): boolean;
        builderFunctions: $Map<string, $BaseFunction>;
        recipe: $KubeRecipe;
        constructor(scope: $Scriptable, staticType: $TypeInfo_, recipe: $KubeRecipe);
    }
    export class $ModifyCraftingItemKubeEvent implements $KubeEvent {
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
        item: $ItemStack;
        grid: $RecipeInput;
        width: number;
        index: number;
        height: number;
        constructor(grid: $RecipeInput, width: number, height: number, item: $ItemStack_, index: number);
        constructor(grid: $CraftingInput, item: $ItemStack_, index: number);
    }
    export class $AfterRecipesLoadedKubeEvent implements $KubeEvent {
        remove(filter: $RecipeFilter_): number;
        forEachRecipe(filter: $RecipeFilter_, consumer: $Consumer_<$RecipeLikeKJS>): void;
        countRecipes(filter: $RecipeFilter_): number;
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
        constructor(resources: $ReloadableServerResources);
    }
    export class $CachedTagLookup<T> {
        values(key: $TagKey_<T>): $Set<T>;
        isEmpty(key: $TagKey_<T>): boolean;
        keys(value: T): $Set<$TagKey<T>>;
        build(builders: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): $Map<$ResourceLocation, $Collection<T>>;
        tagMap(): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
        keyToValue(): $Map<$TagKey<T>, $Set<T>>;
        bindingMap(): $Map<$TagKey<T>, $List<$Holder<T>>>;
        registry: $Registry<T>;
        originalMap: $Map<$ResourceLocation, $List<$TagLoader$EntryWithSource>>;
        constructor(registry: $Registry<T>, originalMap: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>);
    }
    export class $RecipeKey<T> {
        optional(): boolean;
        optional(value: $RecipeOptional_<T>): $RecipeKey<T>;
        optional(value: T): $RecipeKey<T>;
        toJson(storage: $RecipeSchemaStorage, type: $RecipeSchemaType, ops: $DynamicOps<$JsonElement_>): $JsonObject;
        alt(...names: string[]): $RecipeKey<T>;
        alt(name: string): $RecipeKey<T>;
        exclude(): $RecipeKey<T>;
        functionNames(names: $List_<string>): $RecipeKey<T>;
        functionNames(...names: string[]): $RecipeKey<T>;
        alwaysWrite(): $RecipeKey<T>;
        defaultOptional(): $RecipeKey<T>;
        noFunctions(): $RecipeKey<T>;
        getValidFunctionNames(): $List<string>;
        getPrimaryFunctionName(): string;
        excluded: boolean;
        codec: $Codec<T>;
        component: $RecipeComponent<T>;
        typeInfo: $TypeInfo;
        role: $ComponentRole;
        names: $SequencedSet<string>;
        name: string;
        constructor(component: $RecipeComponent<T>, name: string, role: $ComponentRole_);
        get validFunctionNames(): $List<string>;
        get primaryFunctionName(): string;
    }
    export class $CompostableRecipesKubeEvent extends $Record implements $KubeEvent {
        remove(match: $ItemPredicate_): void;
        replaceAll(): void;
        add(match: $ItemPredicate_, f: number): void;
        add(match: $ItemPredicate_, f: number, villager: boolean): void;
        removeAll(): void;
        compostables(): $VirtualDataMapFile<$Item, $Compostable>;
        addReplace(match: $ItemPredicate_, f: number): void;
        addReplace(match: $ItemPredicate_, f: number, villager: boolean): void;
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
        constructor(compostables: $VirtualDataMapFile<$Item_, $Compostable_>);
    }
    export class $CachedTagLookup$SortingEntry extends $Record implements $DependencySorter$Entry<$ResourceLocation> {
    }
    export class $RecipeTypeRegistryContext extends $Record {
        storage(): $RecipeSchemaStorage;
        registries(): $RegistryAccessContainer;
        recipeComponentCodec(): $Codec<$RecipeComponent<never>>;
        recipePostProcessorCodec(): $Codec<$RecipePostProcessor>;
        constructor(registries: $RegistryAccessContainer, storage: $RecipeSchemaStorage);
    }
    export class $KubeRecipe implements $RecipeLikeKJS, $CustomJavaToJsWrapper {
        group(g: string): $KubeRecipe;
        remove(): void;
        get(key: string): $Object;
        getValue<T>(key: $RecipeKey<T>): T;
        validate(cx: $RecipeValidationContext): void;
        merge(j: $JsonObject_): $KubeRecipe;
        id(id: $ResourceLocation_): $KubeRecipe;
        set(key: string, value: $Object): $KubeRecipe;
        getId(): string;
        save(): void;
        setValue<T>(key: $RecipeKey<T>, value: T): $KubeRecipe;
        getPath(): string;
        /**
         * @deprecated
         */
        stage(s: string): $KubeRecipe;
        deserialize(merge: boolean): void;
        serialize(): void;
        convertJavaToJs(scope: $Scriptable, staticType: $TypeInfo_): $Scriptable;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasChanged(): boolean;
        kjs$getSerializer(): $RecipeSerializer<never>;
        /**
         * @deprecated
         */
        kjs$getOrCreateId(): $ResourceLocation;
        /**
         * @deprecated
         */
        kjs$getSchema(): $RecipeSchema;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        /**
         * @deprecated
         */
        kjs$getGroup(): string;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        kjs$getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        modifyResult(id: string): $KubeRecipe;
        getSerializationTypeFunction(): $RecipeTypeFunction;
        getOriginalRecipeIngredients(): $List<$Ingredient>;
        getOriginalRecipe(): $Recipe<never>;
        afterLoaded(stack: $ErrorStack): void;
        afterLoaded(cx: $RecipeValidationContext): void;
        inputValues(): $RecipeComponentValue<never>[];
        getFromToString(): string;
        ingredientAction(filter: $SlotFilter_, action: $IngredientAction): $KubeRecipe;
        damageIngredient(filter: $SlotFilter_): $KubeRecipe;
        damageIngredient(filter: $SlotFilter_, damage: number): $KubeRecipe;
        outputValues(): $RecipeComponentValue<never>[];
        replaceIngredient(filter: $SlotFilter_, item: $ItemStack_): $KubeRecipe;
        serializeChanges(): $KubeRecipe;
        consumeIngredient(filter: $SlotFilter_): $KubeRecipe;
        keepIngredient(filter: $SlotFilter_): $KubeRecipe;
        customIngredientAction(filter: $SlotFilter_, id: string): $KubeRecipe;
        getOriginalRecipeResult(): $ItemStack;
        initValues(save: boolean): void;
        getMod(): string;
        getType(): $ResourceLocation;
        newRecipe: boolean;
        sourceLine: $SourceLine;
        originalJson: $JsonObject;
        removed: boolean;
        creationError: boolean;
        static TYPE_INFO: $TypeInfo;
        json: $JsonObject;
        static CHANGED_MARKER: string;
        type: $RecipeTypeFunction;
        changed: boolean;
        constructor();
        get path(): string;
        get serializationTypeFunction(): $RecipeTypeFunction;
        get originalRecipeIngredients(): $List<$Ingredient>;
        get originalRecipe(): $Recipe<never>;
        get fromToString(): string;
        get originalRecipeResult(): $ItemStack;
        get mod(): string;
    }
    export class $RecipeScriptContext {
    }
    export interface $RecipeScriptContext extends $WithScriptContext, $RecipeValidationContext, $KubeRecipeContext, $RecipeMatchContext {
    }
    export class $KubeRecipeContext {
    }
    export interface $KubeRecipeContext extends $RecipeLikeContext {
        ops(): $RegistryOpsContainer;
        registries(): $RegistryAccessContainer;
        recipe(): $RecipeLikeKJS;
    }
    /**
     * Values that may be interpreted as {@link $KubeRecipeContext}.
     */
    export type $KubeRecipeContext_ = (() => $RecipeLikeKJS);
    export class $RecipeScriptContext$Impl extends $Record implements $RecipeScriptContext {
        errors(): $ErrorStack;
        cx(): $Context;
        ops(): $RegistryOpsContainer;
        registries(): $RegistryAccessContainer;
        recipe(): $RecipeLikeKJS;
        constructor(recipe: $KubeRecipe);
        constructor(recipe: $KubeRecipe, errors: $ErrorStack);
    }
    export class $RecipesKubeEvent implements $KubeEvent {
        /**
         * @note_to_llm Focus on `getRecipes()` or the `get recipes()` function as they are the main way to add recipes.
         * Recipe event contains shortcut for vanilla recipe types, such as `shaped`, `shapeless`.
         * On the other hand, other recipes are registered using `recipes`, e.g. `event.recipes.create.mixing(...)`.
         * Recipe IDs are automatically generated and do not need to be specified unless necessary.
         * `DocumentedRecipes` in `@side-only/server/events/recipes` stores all the registered recipes, this is also the return type of `getRecipes()` or `recipes`.
         */
        remove(filter: $RecipeFilter_): void;
        stage(filter: $RecipeFilter_, stage: string): void;
        custom(json: $JsonObject_): $KubeRecipe;
        printTypes(): void;
        getRecipes(): DocumentedRecipes;
        addRecipe(r: $KubeRecipe, json: boolean): $KubeRecipe;
        findRecipes(filter: $RecipeFilter_): $Collection<$KubeRecipe>;
        replaceInput(filter: $RecipeFilter_, match: $ReplacementMatchInfo_, arg2: $Object): void;
        replaceOutput(filter: $RecipeFilter_, match: $ReplacementMatchInfo_, arg2: $Object): void;
        getRecipeFunction(id: string): $RecipeTypeFunction;
        forEachRecipe(filter: $RecipeFilter_, consumer: $Consumer_<$KubeRecipe>): void;
        countRecipes(filter: $RecipeFilter_): number;
        findRecipeIds(filter: $RecipeFilter_): $Collection<$ResourceLocation>;
        printAllTypes(): void;
        printExamples(type: string): void;
        containsRecipe(filter: $RecipeFilter_): boolean;
        recipeStream(filter: $RecipeFilter_): $Stream<$KubeRecipe>;
        takeId(recipe: $KubeRecipe, prefix: string, ids: string): $ResourceLocation;
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
        addedRecipes: $Collection<$KubeRecipe>;
        registries: $RegistryAccessContainer;
        removedRecipes: $Collection<$KubeRecipe>;
        recipeSchemaStorage: $RecipeSchemaStorage;
        ops: $RegistryOpsContainer;
        static CREATE_RECIPE_SKIP_ERROR: $Pattern;
        originalRecipes: $Map<$ResourceLocation, $KubeRecipe>;
        static POST_SKIP_ERROR: $Pattern;
        resourceManager: $ResourceManager;
        constructor(manager: $ServerScriptManager, resourceManager: $ResourceManager);
        smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
        stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
        shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
        campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
        shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
        blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
        smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
        smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
        smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
        get recipes(): DocumentedRecipes;
    }
    export class $RecipeSchemaProvider implements $DataProvider {
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        add(lookup: $HolderLookup$Provider): void;
        add(id: $ResourceLocation_, schema: $RecipeSchemaData_): void;
        add(id: $ResourceLocation_, builder: $Consumer_<$RecipeSchemaProvider$SchemaDataBuilder>): void;
        keyData(key: $RecipeKey<never>): $RecipeSchemaData$RecipeKeyData;
        onlyKeys(id: $ResourceLocation_, ...keys: $RecipeKey<never>[]): void;
        registryAccessContainer(): $RegistryAccessContainer;
        serverScriptManager(): $ServerScriptManager;
        recipeTypeRegistryContext(): $RecipeTypeRegistryContext;
        constructor(name: string, event: $GatherDataEvent);
        constructor(name: string, event: $GatherDataEvent, registryAccessContainer: $RegistryAccessContainer);
        get name(): string;
    }
    export class $CachedItemTagLookup extends $CachedTagLookup<$Item> {
        registry: $Registry<$Item>;
        originalMap: $Map<$ResourceLocation, $List<$TagLoader$EntryWithSource>>;
        constructor(registry: $Registry<$Item_>, originalMap: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>);
    }
    export class $RecipeTypeFunction extends $BaseFunction implements $WrappedJS {
        call(scope: $Scriptable, thisObj: $Scriptable, args0: $Object[]): $KubeRecipe;
        createRecipe(sourceLine: $SourceLine_, stack: $ErrorStack, args: $Object[]): $KubeRecipe;
        static DONTENUM: number;
        static CONST: number;
        idString: string;
        schemaType: $RecipeSchemaType;
        static UNINITIALIZED_CONST: number;
        serializerKey: $ResourceKey<$RecipeSerializer<never>>;
        static SKIP_ERROR: $Pattern;
        id: $ResourceLocation;
        event: $RecipesKubeEvent;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(event: $RecipesKubeEvent, schemaType: $RecipeSchemaType);
    }
    export class $RecipeLikeContext {
    }
    export interface $RecipeLikeContext {
        recipe(): $RecipeLikeKJS;
        ops(): $RegistryOpsContainer;
        registries(): $RegistryAccessContainer;
    }
    export class $RecipesKubeEvent$RecipeStreamFilter extends $Record implements $Predicate<$KubeRecipe> {
        or(arg0: $Predicate_<$KubeRecipe>): $Predicate<$KubeRecipe>;
        negate(): $Predicate<$KubeRecipe>;
        and(arg0: $Predicate_<$KubeRecipe>): $Predicate<$KubeRecipe>;
    }
    export class $KubeRecipeEventOps<T> extends $ConditionalOps<T> {
        delegate: $DynamicOps<T>;
        static DEFAULT_CONDITIONS_KEY: string;
        static SYNTHETIC_CODEC: $Codec<$KubeRecipe>;
        lookupProvider: $RegistryOps$RegistryInfoLookup;
        static KUBE_RECIPE_CODEC: $Codec<$KubeRecipe>;
        static MARK_SYNTHETIC: $Function<$KubeRecipe, $KubeRecipe>;
        static CONDITIONAL_VALUE_KEY: string;
        constructor(event: $RecipesKubeEvent, ops: $RegistryOps<T>);
    }
    export class $AfterRecipesLoadedKubeEvent$MatchCx extends $Record implements $RecipeMatchContext {
        recipe(): $RecipeLikeKJS;
        cx(): $Context;
        ops(): $RegistryOpsContainer;
        registries(): $RegistryAccessContainer;
        constructor(event: $AfterRecipesLoadedKubeEvent, recipe: $RecipeLikeKJS);
        constructor(registries: $RegistryAccessContainer, ops: $RegistryOpsContainer, recipe: $RecipeLikeKJS);
    }
    export class $NamespaceFunction extends $BaseFunction implements $WrappedJS {
        getMod(): string;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(namespace: $RecipeNamespace, map: $Map_<string, $RecipeTypeFunction>);
        get mod(): string;
    }
}
