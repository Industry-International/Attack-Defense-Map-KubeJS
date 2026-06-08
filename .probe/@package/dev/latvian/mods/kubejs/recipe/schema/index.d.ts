import { $JsonObject_, $JsonObject, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $RecipeSerializer, $RecipeSerializer_ } from "@package/net/minecraft/world/item/crafting";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $List, $SequencedCollection, $LinkedHashMap, $Map_, $List_, $Map } from "@package/java/util";
import { $RecipeFunctionInstance, $RecipeFunctionInstance_, $RecipeSchemaFunction } from "@package/dev/latvian/mods/kubejs/recipe/schema/function";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $RecipeComponentType, $RecipeComponent, $ComponentRole, $ComponentValueMap, $ComponentRole_ } from "@package/dev/latvian/mods/kubejs/recipe/component";
import { $RecipeScriptContext, $RecipeTypeFunction, $KubeRecipe, $RecipeKey, $RecipeTypeRegistryContext, $RecipeTypeRegistryContext_ } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Supplier_, $Function, $Supplier } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $OpsContainer, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceLocation_, $ResourceKey, $RegistryOps, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipePostProcessor } from "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $SourceLine_, $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
export * as minecraft from "@package/dev/latvian/mods/kubejs/recipe/schema/minecraft";
export * as function from "@package/dev/latvian/mods/kubejs/recipe/schema/function";
export * as postprocessing from "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing";

declare module "@package/dev/latvian/mods/kubejs/recipe/schema" {
    export class $RecipeOptional<T> {
        static unit<T>(value: T): $RecipeOptional<T>;
        static DEFAULT: $RecipeOptional<never>;
    }
    export interface $RecipeOptional<T> {
        isDefault(): boolean;
        getDefaultValue(type: $RecipeSchemaType): T;
        getInformativeValue(): T;
        get default(): boolean;
        get informativeValue(): T;
    }
    /**
     * Values that may be interpreted as {@link $RecipeOptional}.
     */
    export type $RecipeOptional_<T> = ((type: $RecipeSchemaType) => T);
    export class $RecipeSchemaData extends $Record {
        parent(): ($ResourceLocation) | undefined;
        merge(): $RecipeSchemaData$MergeData;
        constructors(): ($List<$RecipeSchemaData$ConstructorData>) | undefined;
        keys(): ($List<$RecipeSchemaData$RecipeKeyData>) | undefined;
        mappings(): $List<string>;
        functions(): ($Map<string, $RecipeSchemaFunction>) | undefined;
        unique(): ($List<string>) | undefined;
        hidden(): (boolean) | undefined;
        overrideType(): ($ResourceLocation) | undefined;
        postProcessors(): ($List<$RecipePostProcessor>) | undefined;
        recipeFactory(): ($ResourceLocation) | undefined;
        mergeUnique(): boolean;
        mergeConstructors(): boolean;
        overrideKeys(): $Map<string, $JsonElement>;
        mergeKeys(): boolean;
        mergePostProcessors(): boolean;
        static CODEC: $Function<$RecipeTypeRegistryContext, $Codec<$RecipeSchemaData>>;
        constructor(parent: $ResourceLocation_, overrideType: $ResourceLocation_, recipeFactory: $ResourceLocation_, keys: $List_<$RecipeSchemaData$RecipeKeyData_>, constructors: $List_<$RecipeSchemaData$ConstructorData_>, functions: $Map_<string, $RecipeSchemaFunction>, overrideKeys: $Map_<string, $JsonElement_>, hidden: boolean, mappings: $List_<string>, unique: $List_<string>, postProcessors: $List_<$RecipePostProcessor>, merge: $RecipeSchemaData$MergeData_);
        constructor(parent: ($ResourceLocation_) | undefined, overrideType: ($ResourceLocation_) | undefined, recipeFactory: ($ResourceLocation_) | undefined, keys: ($List_<$RecipeSchemaData$RecipeKeyData_>) | undefined, constructors: ($List_<$RecipeSchemaData$ConstructorData_>) | undefined, functions: ($Map_<string, $RecipeSchemaFunction>) | undefined, overrideKeys: $Map_<string, $JsonElement_>, hidden: (boolean) | undefined, mappings: $List_<string>, unique: ($List_<string>) | undefined, postProcessors: ($List_<$RecipePostProcessor>) | undefined, merge: $RecipeSchemaData$MergeData_);
    }
    export class $UnknownRecipeSchemaType extends $RecipeSchemaType {
        schema: $RecipeSchema;
        parent: $RecipeSchemaType;
        serializerType: string;
        namespace: $RecipeNamespace;
        serializerKey: $ResourceKey<$RecipeSerializer<never>>;
        id: $ResourceLocation;
        constructor(namespace: $RecipeNamespace, id: $ResourceLocation_, serializer: $RecipeSerializer_<never>);
    }
    export class $RegistryAwareSchema {
    }
    export interface $RegistryAwareSchema {
        create(cx: $RegistryAccessContainer): $RecipeSchema;
    }
    /**
     * Values that may be interpreted as {@link $RegistryAwareSchema}.
     */
    export type $RegistryAwareSchema_ = ((cx: $RegistryAccessContainer) => $RecipeSchema);
    export class $RecipeSchemaRegistry implements $KubeEvent {
        register(id: $ResourceLocation_, schema: $RegistryAwareSchema_): void;
        register(id: $ResourceLocation_, schema: $RecipeSchema): void;
        namespace(namespace: string): $RecipeNamespace;
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
        constructor(storage: $RecipeSchemaStorage);
    }
    export class $KubeRecipeFactory extends $Record {
        factory(): $Supplier<$KubeRecipe>;
        id(): $ResourceLocation;
        create(type: $RecipeTypeFunction, sourceLine: $SourceLine_, save: boolean): $KubeRecipe;
        recipeType(): $TypeInfo;
        static DEFAULT: $KubeRecipeFactory;
        constructor(id: $ResourceLocation_, recipeType: $Class<never>, factory: $Supplier_<$KubeRecipe>);
        constructor(id: $ResourceLocation_, recipeType: $TypeInfo_, factory: $Supplier_<$KubeRecipe>);
    }
    export class $RecipeOptional$Unit<T> {
    }
    export interface $RecipeOptional$Unit<T> extends $RecipeOptional<T> {
        value(): T;
        getDefaultValue(type: $RecipeSchemaType): T;
        getInformativeValue(): T;
        get informativeValue(): T;
    }
    /**
     * Values that may be interpreted as {@link $RecipeOptional$Unit}.
     */
    export type $RecipeOptional$Unit_<T> = (() => T);
    export class $RecipeSchemaStorage$StoredRecipeComponentType {
        init(ctx: $RecipeTypeRegistryContext_): void;
        constructor(type: $RecipeComponentType<never>);
    }
    export class $JsonRecipeSchemaLoader$RecipeSchemaBuilder {
    }
    export class $RecipeSchemaData$ConstructorData extends $Record {
        keys(): $List<string>;
        overrides(): $Map<string, $JsonElement>;
        static CODEC: $Codec<$RecipeSchemaData$ConstructorData>;
        constructor(keys: $List_<string>, overrides: $Map_<string, $JsonElement_>);
    }
    export class $UnknownKubeRecipe extends $KubeRecipe {
        newRecipe: boolean;
        static RECIPE_FACTORY: $KubeRecipeFactory;
        type: $RecipeTypeFunction;
        sourceLine: $SourceLine;
        originalJson: $JsonObject;
        removed: boolean;
        creationError: boolean;
        static TYPE_INFO: $TypeInfo;
        json: $JsonObject;
        static CHANGED_MARKER: string;
        changed: boolean;
        constructor();
    }
    export class $RecipeMappingRegistry implements $KubeEvent {
        register(name: string, type: $ResourceLocation_): void;
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
        constructor(storage: $RecipeSchemaStorage);
    }
    export class $RecipeConstructor {
        toString(ops: $OpsContainer): string;
        defaultValue<T>(key: $RecipeKey<T>, value: $RecipeOptional_<T>): $RecipeConstructor;
        override<T>(key: $RecipeKey<T>, value: $RecipeOptional_<T>): $RecipeConstructor;
        create(sourceLine: $SourceLine_, type: $RecipeTypeFunction, schemaType: $RecipeSchemaType, from: $ComponentValueMap): $KubeRecipe;
        toJson(type: $RecipeSchemaType, ops: $DynamicOps<$JsonElement_>): $JsonObject;
        setValues(cx: $RecipeScriptContext, schemaType: $RecipeSchemaType, from: $ComponentValueMap): void;
        overrideValue<T>(key: $RecipeKey<T>, value: T): $RecipeConstructor;
        keys: $List<$RecipeKey<never>>;
        defaultValues: $Map<$RecipeKey<never>, $RecipeOptional<never>>;
        overrides: $Map<$RecipeKey<never>, $RecipeOptional<never>>;
        constructor(keys: $List_<$RecipeKey<never>>);
        constructor(...keys: $RecipeKey<never>[]);
    }
    export class $RecipeOptional$Unit$Impl<T> extends $Record implements $RecipeOptional$Unit<T> {
        value(): T;
        getDefaultValue(type: $RecipeSchemaType): T;
        getInformativeValue(): T;
        isDefault(): boolean;
        constructor(value: T);
        get informativeValue(): T;
        get default(): boolean;
    }
    export class $RecipeNamespace extends $LinkedHashMap<string, $RecipeSchemaType> {
        register(id: string, type: $RegistryAwareSchema_): $RecipeNamespace;
        register(id: string, type: $RecipeSchema): $RecipeNamespace;
        special(id: string): $RecipeNamespace;
        withExistingParent(id: string, parent: $ResourceLocation_): $RecipeNamespace;
        shaped(id: string): $RecipeNamespace;
        shapeless(id: string): $RecipeNamespace;
        getRegisteredOrThrow(id: string): $RecipeSchemaType;
        registerBasic(id: string, ...keys: $RecipeKey<never>[]): $RecipeNamespace;
        name: string;
        storage: $RecipeSchemaStorage;
        constructor(storage: $RecipeSchemaStorage, name: string);
    }
    export class $RecipeFactoryRegistry {
        register(type: $KubeRecipeFactory_): void;
        register(id: $ResourceLocation_, typeClass: $Class<never>, factory: $Supplier_<$KubeRecipe>): void;
        constructor(storage: $RecipeSchemaStorage);
    }
    export class $UnknownRecipeSchema extends $RecipeSchema {
        functions: $Map<string, $RecipeFunctionInstance>;
        static SCHEMA: $RecipeSchema;
        recipeFactory: $KubeRecipeFactory;
        keys: $List<$RecipeKey<never>>;
        keyOverrides: $Map<$RecipeKey<never>, $RecipeOptional<never>>;
        includedKeys: $List<$RecipeKey<never>>;
    }
    export class $RecipeSchemaData$MergeData extends $Record {
        constructors(): boolean;
        keys(): boolean;
        unique(): boolean;
        postProcessors(): boolean;
        static CODEC: $Codec<$RecipeSchemaData$MergeData>;
        static DEFAULT: $RecipeSchemaData$MergeData;
        constructor(keys: boolean, constructors: boolean, unique: boolean, postProcessors: boolean);
    }
    export class $RecipeSchemaStorage {
        namespace(namespace: string): $RecipeNamespace;
        fireEvents(registries: $RegistryAccessContainer, resourceManager: $ResourceManager): void;
        mappings: $Map<string, $ResourceLocation>;
        recipeTypes: $Map<$ResourceLocation, $KubeRecipeFactory>;
        schemaTypes: $Map<string, $RecipeSchemaType>;
        recipeComponentCodec: $Codec<$RecipeComponent<never>>;
        recipePostProcessorCodec: $Codec<$RecipePostProcessor>;
        namespaces: $Map<string, $RecipeNamespace>;
        constructor(manager: $ServerScriptManager);
    }
    export class $RecipeOptional$Constant<T> extends $Record implements $RecipeOptional$Unit<T> {
        value(): T;
        getDefaultValue(type: $RecipeSchemaType): T;
        getInformativeValue(): T;
        isDefault(): boolean;
        constructor(value: T);
        get informativeValue(): T;
        get default(): boolean;
    }
    export class $RecipeSchemaType {
        getSerializer(): $RecipeSerializer<never>;
        schema: $RecipeSchema;
        parent: $RecipeSchemaType;
        serializerType: string;
        namespace: $RecipeNamespace;
        serializerKey: $ResourceKey<$RecipeSerializer<never>>;
        id: $ResourceLocation;
        constructor(namespace: $RecipeNamespace, id: $ResourceLocation_, schema: $RecipeSchema);
        get serializer(): $RecipeSerializer<never>;
    }
    export class $JsonRecipeSchemaLoader {
        static load(ctx: $RecipeTypeRegistryContext_, jsonOps: $DynamicOps<$JsonElement_>, event: $RecipeSchemaRegistry, resourceManager: $ResourceManager): void;
        constructor();
    }
    export class $RecipeSchema {
        isHidden(): boolean;
        getKey<T>(id: string): $RecipeKey<T>;
        factory(factory: $KubeRecipeFactory_): $RecipeSchema;
        addConstructor(...keys: $RecipeKey<never>[]): $RecipeSchema;
        "constructor"(arg0: $RecipeConstructor): $RecipeSchema;
        constructors(): $Int2ObjectMap<$RecipeConstructor>;
        "function"(arg0: $RecipeFunctionInstance_): $RecipeSchema;
        toJson(storage: $RecipeSchemaStorage, schemaType: $RecipeSchemaType, ops: $RegistryOps<$JsonElement_>): $JsonObject;
        deserialize(sourceLine: $SourceLine_, type: $RecipeTypeFunction, id: $ResourceLocation_, json: $JsonObject_): $KubeRecipe;
        minRequiredArguments(): number;
        constructorsGenerated(): boolean;
        addToListOpFunction<T>(name: string, key: $RecipeKey<$List_<T>>): $RecipeSchema;
        postProcessor(processor: $RecipePostProcessor): $RecipeSchema;
        uniqueId(key: $RecipeKey<never>): $RecipeSchema;
        outputCount(): number;
        postProcessors(): $List<$RecipePostProcessor>;
        inputCount(): number;
        uniqueIds(keys: $SequencedCollection<$RecipeKey<never>>): $RecipeSchema;
        uniqueIds(): $List<$RecipeKey<never>>;
        buildUniqueId(r: $KubeRecipe): string;
        typeOverride(id: $ResourceLocation_): $RecipeSchema;
        getOptionalKey<T>(id: string): $RecipeKey<T>;
        setOpFunction<T>(name: string, key: $RecipeKey<T>, value: T): $RecipeSchema;
        functions: $Map<string, $RecipeFunctionInstance>;
        recipeFactory: $KubeRecipeFactory;
        keys: $List<$RecipeKey<never>>;
        keyOverrides: $Map<$RecipeKey<never>, $RecipeOptional<never>>;
        includedKeys: $List<$RecipeKey<never>>;
        constructor(keyOverrides: $Map_<$RecipeKey<never>, $RecipeOptional_<never>>, keys: $List_<$RecipeKey<never>>);
        constructor(...keys: $RecipeKey<never>[]);
        get hidden(): boolean;
    }
    export class $RecipeSchemaData$RecipeKeyData extends $Record {
        name(): string;
        type(): $RecipeComponent<never>;
        optional(): ($JsonElement) | undefined;
        excluded(): boolean;
        functionNames(): $List<string>;
        role(): $ComponentRole;
        defaultOptional(): boolean;
        alternativeNames(): $List<string>;
        alwaysWrite(): boolean;
        static CODEC: $Function<$RecipeTypeRegistryContext, $Codec<$RecipeSchemaData$RecipeKeyData>>;
        constructor(name: string, role: $ComponentRole_, type: $RecipeComponent<never>, optional: ($JsonElement_) | undefined, defaultOptional: boolean, alternativeNames: $List_<string>, excluded: boolean, functionNames: $List_<string>, alwaysWrite: boolean);
    }
}
