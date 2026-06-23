import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $RegisterEvent } from "@package/net/neoforged/neoforge/registries";
import { $ModelGenerator } from "@package/dev/latvian/mods/kubejs/client";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $Spliterator, $Iterator, $List, $Map_, $List_, $Map } from "@package/java/util";
import { $KubeStartupEvent, $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $Consumer, $Supplier_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Registry } from "@package/net/minecraft/core";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityAttributeModificationEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record, $Class, $Object, $Iterable } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/latvian/mods/kubejs/registry" {
    export class $BuilderTypeRegistryHandler$RegConsumer<T> extends $Record implements $BuilderTypeRegistry$Callback<T> {
        /**
         * @deprecated
         */
        add(type: string, builderType: $Class<$BuilderBase<T>>, factory: $BuilderFactory_): void;
    }
    export class $BuilderBase<T> implements $Supplier<T> {
        get(): T;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
         */
        displayName(name: $Component_): this;
        /**
         * Adds a tag to this object, e.g. `minecraft:stone`.
         */
        tag(tag: $ResourceLocation_[]): this;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
         */
        translationKey(key: string): this;
        /**
         * Combined method of formattedDisplayName().displayName(name).
         */
        formattedDisplayName(name: $Component_): this;
        /**
         * Makes displayName() override language files.
         */
        formattedDisplayName(): this;
        getBuilderTranslationKey(): string;
        getTranslationKeyGroup(): string;
        registryKey: $ResourceKey<$Registry<T>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
        get builderTranslationKey(): string;
        get translationKeyGroup(): string;
    }
    export class $BuilderTypeRegistry$Callback<T> {
    }
    export interface $BuilderTypeRegistry$Callback<T> {
        add(type: $ResourceLocation_, builderType: $Class<$BuilderBase<T>>, factory: $BuilderFactory_): void;
        /**
         * @deprecated
         */
        add(type: string, builderType: $Class<$BuilderBase<T>>, factory: $BuilderFactory_): void;
        addDefault(builderType: $Class<$BuilderBase<T>>, factory: $BuilderFactory_): void;
    }
    export class $ServerRegistryRegistry {
    }
    export interface $ServerRegistryRegistry {
        register<T>(registry: $ResourceKey_<$Registry<T>>, directCodec: $Codec<T>, typeInfo: $TypeInfo_): void;
        register<T>(registry: $ResourceKey_<$Registry<T>>, directCodec: $Codec<T>, type: $Class<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerRegistryRegistry}.
     */
    export type $ServerRegistryRegistry_ = ((registry: $ResourceKey<$Registry<any>>, directCodec: $Codec<any>, typeInfo: $TypeInfo) => void);
    export class $BuilderTypeRegistryHandler extends $Record implements $BuilderTypeRegistry, $ServerRegistryRegistry {
        map(): $Map<$ResourceKey<never>, $BuilderTypeRegistryHandler$Info<never>>;
        of<T>(registry: $ResourceKey_<$Registry<T>>, callback: $Consumer_<$BuilderTypeRegistry$Callback<T>>): void;
        static info<T>(key: $ResourceKey_<$Registry<T>>): $BuilderTypeRegistryHandler$Info<T>;
        register<T>(registry: $ResourceKey_<$Registry<T>>, directCodec: $Codec<T>, typeInfo: $TypeInfo_): void;
        addDefault<T>(registry: $ResourceKey_<$Registry<T>>, builderType: $Class<$BuilderBase<T>>, factory: $BuilderFactory_): void;
        register<T>(registry: $ResourceKey_<$Registry<T>>, directCodec: $Codec<T>, type: $Class<T>): void;
        static INFO: $Lazy<$Map<$ResourceKey<never>, $BuilderTypeRegistryHandler$Info<never>>>;
        constructor(map: $Map_<$ResourceKey_<never>, $BuilderTypeRegistryHandler$Info<never>>);
    }
    export class $RegistryEventHandler {
        static registerEntityAttributes(event: $EntityAttributeModificationEvent): void;
        static registerAll(event: $RegisterEvent): void;
        constructor();
    }
    export class $BuilderFactory {
    }
    export interface $BuilderFactory {
        createBuilder(id: $ResourceLocation_): $BuilderBase<any>;
    }
    /**
     * Values that may be interpreted as {@link $BuilderFactory}.
     */
    export type $BuilderFactory_ = ((id: $ResourceLocation) => $BuilderBase<any>);
    export class $CustomBuilderObject extends $BuilderBase<any> {
        registryKey: $ResourceKey<$Registry<$Object>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_, object: $Supplier_<$Object>);
    }
    export class $RegistryKubeEvent<T> implements $KubeStartupEvent, $AdditionalObjectRegistry {
        add<R>(registry: $ResourceKey_<$Registry<R>>, builder: $BuilderBase<R>): void;
        createCustom(id: $ResourceLocation_, object: $Supplier_<$Object>): $CustomBuilderObject;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        created: $List<$BuilderBase<T>>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>);
    }
    export class $ServerRegistryKubeEvent<T> implements $KubeEvent {
        create(id: $ResourceLocation_): $BuilderBase<T>;
        create(id: $ResourceLocation_, type: $ResourceLocation_): $BuilderBase<T>;
        createCustom(id: $ResourceLocation_, object: $Supplier_<$Object>): $CustomBuilderObject;
        createFromJson(id: $ResourceLocation_, json: $JsonElement_): $CustomBuilderObject;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        registryKey: $ResourceKey<$Registry<T>>;
        codec: $Codec<T>;
        jsonOps: $DynamicOps<$JsonElement>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>, jsonOps: $DynamicOps<$JsonElement_>, codec: $Codec<T>, builders: $List_<$BuilderBase<never>>);
    }
    export class $RegistryCallback<T> {
    }
    export interface $RegistryCallback<T> {
        accept(id: $ResourceLocation_, obj: $Supplier_<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistryCallback}.
     */
    export type $RegistryCallback_<T> = ((id: $ResourceLocation, obj: $Supplier<T>) => void);
    export class $RegistryObjectStorage<T> implements $Iterable<$BuilderBase<T>> {
        iterator(): $Iterator<$BuilderBase<$BuilderBase<T>>>;
        static of<T>(key: $ResourceKey_<$Registry<T>>): $RegistryObjectStorage<T>;
        spliterator(): $Spliterator<$BuilderBase<T>>;
        forEach(arg0: $Consumer_<$BuilderBase<T>>): void;
        static ITEM: $RegistryObjectStorage<$Item>;
        static CODEC: $Codec<$RegistryObjectStorage<never>>;
        static FLUID_TYPE: $RegistryObjectStorage<$FluidType>;
        static ALL_BUILDERS: $List<$BuilderBase<never>>;
        static FLUID: $RegistryObjectStorage<$Fluid>;
        objects: $Map<$ResourceLocation, $BuilderBase<$BuilderBase<T>>>;
        static BLOCK: $RegistryObjectStorage<$Block>;
        static BLOCK_ENTITY: $RegistryObjectStorage<$BlockEntityType<never>>;
        key: $ResourceKey<$Registry<$BuilderBase<T>>>;
        [Symbol.iterator](): Iterator<$BuilderBase<$BuilderBase<T>>>
    }
    export class $BuilderTypeRegistryHandler$Info<T> {
        typeInfo(): $TypeInfo;
        types(): $List<$BuilderType<T>>;
        defaultType(): $BuilderType<T>;
        namedType(name: $ResourceLocation_): $BuilderType<T>;
        directCodec(): $Codec<T>;
        constructor();
    }
    export class $ModelledBuilderBase<T> extends $BuilderBase<T> {
        /**
         * Directly set the texture map.
         */
        textures(map: $Map_<string, string>): this;
        /**
         * Sets the texture by given key.
         */
        texture(key: string[], tex: string): this;
        /**
         * Sets the texture.
         */
        texture(tex: string): this;
        /**
         * Sets the parent model.
         */
        parentModel(id: $ResourceLocation_): this;
        /**
         * Replaces default model with custom generator.
         */
        modelGenerator(generator: $Consumer_<$ModelGenerator>): this;
        registryKey: $ResourceKey<$Registry<T>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $BuilderTypeRegistry {
    }
    export interface $BuilderTypeRegistry {
        of<T>(registry: $ResourceKey_<$Registry<T>>, callback: $Consumer_<$BuilderTypeRegistry$Callback<T>>): void;
        addDefault<T>(registry: $ResourceKey_<$Registry<T>>, builderType: $Class<$BuilderBase<T>>, factory: $BuilderFactory_): void;
    }
    /**
     * Values that may be interpreted as {@link $BuilderTypeRegistry}.
     */
    export type $BuilderTypeRegistry_ = ((registry: $ResourceKey<$Registry<any>>, callback: $Consumer<$BuilderTypeRegistry$Callback<any>>) => void);
    export class $RegistryType$Scanner {
        static init(): void;
        static scan(registryName: $ResourceLocation_, location: $ResourceLocation_): void;
        constructor();
    }
    export class $BuilderType<T> extends $Record {
        type(): $ResourceLocation;
        factory(): $BuilderFactory;
        builderClass(): $Class<$BuilderBase<T>>;
        constructor(type: $ResourceLocation_, builderClass: $Class<$BuilderBase<T>>, factory: $BuilderFactory_);
    }
    export class $RegistryType<T> extends $Record {
        type(): $TypeInfo;
        static lookup(target: $TypeInfo_): $RegistryType<never>;
        static register<T>(key: $ResourceKey_<$Registry<T>>, type: $TypeInfo_): void;
        key(): $ResourceKey<$Registry<T>>;
        static ofClass<T>(type: $Class<T>): $RegistryType<T>;
        baseClass(): $Class<never>;
        static ofType(typeInfo: $TypeInfo_): $RegistryType<never>;
        static ofKey<T>(key: $ResourceKey_<$Registry<T>>): $RegistryType<T>;
        static allOfClass<T>(type: $Class<T>): $List<$RegistryType<T>>;
        constructor(key: $ResourceKey_<$Registry<T>>, baseClass: $Class<never>, type: $TypeInfo_);
    }
    export class $AdditionalObjectRegistry {
    }
    export interface $AdditionalObjectRegistry {
        add<T>(registry: $ResourceKey_<$Registry<T>>, builder: $BuilderBase<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $AdditionalObjectRegistry}.
     */
    export type $AdditionalObjectRegistry_ = ((registry: $ResourceKey<$Registry<any>>, builder: $BuilderBase<any>) => void);
}
