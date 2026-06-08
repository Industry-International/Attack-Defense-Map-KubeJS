import { $Event } from "@package/net/neoforged/bus/api";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $ModelResourceLocation } from "@package/net/minecraft/client/resources/model";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Pattern } from "@package/java/util/regex";
import { $Spliterator, $Iterator, $List, $List_, $Map, $Map$Entry } from "@package/java/util";
import { $Dialog } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $IRenderer } from "@package/com/lowdragmc/lowdraglib2/client/renderer";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceContainer, $ResourceProviderContainer } from "@package/com/lowdragmc/lowdraglib2/editor/ui/resource";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $UITemplate, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Enum, $Runnable_, $Iterable } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/com/lowdragmc/lowdraglib2/editor/resource" {
    export class $IResourcePath {
        static parse(arg0: string): $IResourcePath;
        static CODEC: $Codec<$IResourcePath>;
        static PATH_WITH_TYPE_PATTERN: $Pattern;
        /**
         * @deprecated
         */
        static V0: $Codec<$IResourcePath>;
        /**
         * @deprecated
         */
        static V1: $Codec<$IResourcePath>;
        static V2: $Codec<$IResourcePath>;
    }
    export interface $IResourcePath {
        getType(): $ResourceProviderType;
        getPath(): string;
        getResourceName(): string;
        getPathWithType(): string;
        get type(): $ResourceProviderType;
        get path(): string;
        get resourceName(): string;
        get pathWithType(): string;
    }
    export class $EditorResourceEvent extends $Event implements $IModBusEvent {
        resourceInstance: $ResourceInstance<never>;
        constructor(arg0: $ResourceInstance<never>);
    }
    export class $IRendererResource extends $Resource<$IRenderer> {
        onPrepareTextureAtlas(arg0: $ResourceLocation_, arg1: $Consumer_<$ResourceLocation>): void;
        onAdditionalModel(arg0: $Consumer_<$ModelResourceLocation>): void;
        reloadResourcesAndRefreshOpenedContainers(): void;
        refreshOpenedContainers(): void;
        serializeResource(arg0: $IRenderer, arg1: $HolderLookup$Provider): $Tag;
        static INSTANCE: $IRendererResource;
        constructor();
    }
    export class $Resource<T> {
        getName(): string;
        getDisplayName(): $Component;
        getIcon(): $IGuiTexture;
        getFileExtension(): string;
        getResourceInstance(): $ResourceInstance<T>;
        buildBuiltin(arg0: $BuiltinResourceProvider<T>): void;
        buildBuiltin(arg0: $ResourceInstance<T>): void;
        getDefaultUIWidth(): number;
        setDefaultUIWidth(arg0: number): void;
        createResourceProviderContainer(arg0: $IResourceProvider<T>): $ResourceProviderContainer<T>;
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): T;
        setDefaultDisplayMode(arg0: $Resource$DisplayMode_): void;
        getDefaultDisplayMode(): $Resource$DisplayMode;
        serializeResource(arg0: T, arg1: $HolderLookup$Provider): $Tag;
        constructor();
        get name(): string;
        get displayName(): $Component;
        get icon(): $IGuiTexture;
        get fileExtension(): string;
        get resourceInstance(): $ResourceInstance<T>;
    }
    export class $EditorResourceEvent$LoadBuiltin extends $EditorResourceEvent {
        resourceInstance: $ResourceInstance<never>;
        constructor<T>(arg0: $ResourceInstance<T>);
    }
    export class $BuiltinResourceProvider<T> extends $ResourceProvider<T> {
        resourceInstance: $ResourceInstance<T>;
        name: string;
        static TYPE: $ResourceProviderType;
        constructor(arg0: string, arg1: $ResourceInstance<T>);
    }
    export class $Resources {
        static of(...arg0: $Resource<never>[]): $Resources;
        resources: $ImmutableList<$Resource<never>>;
        static EMPTY: $Resources;
        constructor(arg0: $List_<$Resource<never>>);
    }
    export class $ColorsResource extends $Resource<number> {
        serializeResource(arg0: number, arg1: $HolderLookup$Provider): $Tag;
        static INSTANCE: $ColorsResource;
        constructor();
    }
    export class $ResourceProviderType {
        getTypeName(): string;
        getIcon(): $IGuiTexture;
        createFullPath(arg0: string): $IResourcePath;
        fromNbt<T>(arg0: $ResourceInstance<T>, arg1: $CompoundTag_): $ResourceProvider<T>;
        supportCustom(): boolean;
        onCreateCustom<T>(arg0: $ResourceContainer<T>): void;
        constructor();
        get typeName(): string;
        get icon(): $IGuiTexture;
    }
    export class $IResourceProvider<T> {
    }
    export interface $IResourceProvider<T> extends $Iterable<$Map$Entry<$IResourcePath, T>> {
        getName(): string;
        getResource(arg0: $IResourcePath): $Map$Entry<$IResourcePath, T>;
        getType(): $ResourceProviderType;
        createSubPath(arg0: string): $IResourcePath;
        removeResource(arg0: $IResourcePath): $Map$Entry<$IResourcePath, T>;
        addResource(arg0: $IResourcePath, arg1: $Map$Entry<$IResourcePath, T>): boolean;
        serializeNBT(): $CompoundTag;
        canRemove(arg0: $IResourcePath): boolean;
        getResourceInstance(): $ResourceInstance<$Map$Entry<$IResourcePath, T>>;
        hasResource(arg0: $IResourcePath): boolean;
        checkAndUpdateResourceProvider(): boolean;
        getResourceName(arg0: $IResourcePath): string;
        canEdit(arg0: $IResourcePath): boolean;
        canRename(arg0: $IResourcePath): boolean;
        canCopy(arg0: $IResourcePath): boolean;
        supportAdd(): boolean;
        onMenu(arg0: $TreeBuilder$Menu): void;
        getResourceOrSupply(arg0: $IResourcePath, arg1: $Supplier_<$Map$Entry<$IResourcePath, T>>): $Map$Entry<$IResourcePath, T>;
        createProviderToggle(): $UIElement;
        getResourceOrDefault(arg0: $IResourcePath, arg1: $Map$Entry<$IResourcePath, T>): $Map$Entry<$IResourcePath, T>;
        get name(): string;
        get type(): $ResourceProviderType;
        get resourceInstance(): $ResourceInstance<$Map$Entry<$IResourcePath, T>>;
    }
    export class $ResourceInstance<T> implements $INBTSerializable<$CompoundTag> {
        getResource(arg0: $IResourcePath): $CompoundTag;
        clearCache(): void;
        getDisplayMode(): $Resource$DisplayMode;
        setDisplayMode(arg0: $Resource$DisplayMode_): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        listAllResources(): $List<$Map$Entry<$IResourcePath, $CompoundTag>>;
        addBuiltinProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        getCustomProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
        addCustomProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        createSelectorDialog(arg0: number, arg1: number, arg2: $Consumer_<$CompoundTag>, arg3: $Runnable_): $Dialog;
        removeCustomProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        getBuiltinProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
        removeBuiltinProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        getUiWidth(): number;
        setUiWidth(arg0: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        resource: $Resource<$CompoundTag>;
        constructor(arg0: $Resource<$CompoundTag_>);
        get customProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
        get builtinProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
    }
    export class $Resource$DisplayMode extends $Enum<$Resource$DisplayMode> {
        static values(): $Resource$DisplayMode[];
        static valueOf(arg0: string): $Resource$DisplayMode;
        static GRID: $Resource$DisplayMode;
        static LIST: $Resource$DisplayMode;
    }
    /**
     * Values that may be interpreted as {@link $Resource$DisplayMode}.
     */
    export type $Resource$DisplayMode_ = "list" | "grid";
    export class $TexturesResource extends $Resource<$IGuiTexture> {
        serializeResource(arg0: $IGuiTexture_, arg1: $HolderLookup$Provider): $Tag;
        static INSTANCE: $TexturesResource;
        constructor();
    }
    export class $ResourceProvider<T> implements $IResourceProvider<T> {
        iterator(): $Iterator<$Map$Entry<$IResourcePath, T>>;
        getResource(arg0: $IResourcePath): T;
        getContents(): $Map<$IResourcePath, T>;
        removeResource(arg0: string): T;
        removeResource(arg0: $IResourcePath): T;
        addResource(arg0: $IResourcePath, arg1: T): boolean;
        addResource(arg0: string, arg1: T): boolean;
        canRemove(arg0: $IResourcePath): boolean;
        getResourceInstance(): $ResourceInstance<T>;
        hasResource(arg0: $IResourcePath): boolean;
        canEdit(arg0: $IResourcePath): boolean;
        canRename(arg0: $IResourcePath): boolean;
        canCopy(arg0: $IResourcePath): boolean;
        supportResourcePath(arg0: $IResourcePath): boolean;
        serializeNBT(): $CompoundTag;
        checkAndUpdateResourceProvider(): boolean;
        getResourceName(arg0: $IResourcePath): string;
        supportAdd(): boolean;
        onMenu(arg0: $TreeBuilder$Menu): void;
        getResourceOrSupply(arg0: $IResourcePath, arg1: $Supplier_<T>): T;
        createProviderToggle(): $UIElement;
        getResourceOrDefault(arg0: $IResourcePath, arg1: T): T;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        resourceInstance: $ResourceInstance<T>;
        [Symbol.iterator](): Iterator<$Map$Entry<$IResourcePath, T>>
        get contents(): $Map<$IResourcePath, T>;
    }
    export class $UIResource extends $Resource<$UITemplate> {
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): $UITemplate;
        serializeResource(arg0: $UITemplate, arg1: $HolderLookup$Provider): $Tag;
        static INSTANCE: $UIResource;
        constructor();
    }
}
