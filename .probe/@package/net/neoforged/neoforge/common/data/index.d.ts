import { $Codec } from "@package/com/mojang/serialization";
import { $IntrinsicHolderTagsProvider } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $Resource } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Set_, $Collection_, $List_, $Map } from "@package/java/util";
import { $SpriteSource } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $DataProvider, $PackOutput$PathProvider, $PackOutput, $PackOutput$Target_, $CachedOutput_ } from "@package/net/minecraft/data";
import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $BiConsumer, $Consumer, $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $RegistrySetBuilder$PatchedRegistries_, $Registry, $RegistrySetBuilder } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $OverlayMetadataSection$OverlayEntry, $OverlayMetadataSection$OverlayEntry_, $PackType_, $PackType } from "@package/net/minecraft/server/packs";
import { $WithConditions$Builder, $WithConditions_, $ICondition, $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $Enum, $Record } from "@package/java/lang";
import { $File_ } from "@package/java/io";
import { $Level } from "@package/net/minecraft/world/level";
import { $DataMapValueRemover, $DataMapFile, $AdvancedDataMapType, $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $TagBuilder, $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistriesDatapackGenerator } from "@package/net/minecraft/data/registries";
import { $MobEffect_, $MobEffect } from "@package/net/minecraft/world/effect";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $AdvancementSubProvider, $AdvancementProvider as $AdvancementProvider$1 } from "@package/net/minecraft/data/advancements";
export * as internal from "@package/net/neoforged/neoforge/common/data/internal";
export * as fixes from "@package/net/neoforged/neoforge/common/data/fixes";

declare module "@package/net/neoforged/neoforge/common/data" {
    export class $SoundDefinition$Sound {
        stream(arg0: boolean): $SoundDefinition$Sound;
        stream(): $SoundDefinition$Sound;
        weight(arg0: number): $SoundDefinition$Sound;
        attenuationDistance(arg0: number): $SoundDefinition$Sound;
        preload(arg0: boolean): $SoundDefinition$Sound;
        preload(): $SoundDefinition$Sound;
        static sound(arg0: $ResourceLocation_, arg1: $SoundDefinition$SoundType_): $SoundDefinition$Sound;
        pitch(arg0: number): $SoundDefinition$Sound;
        pitch(arg0: number): $SoundDefinition$Sound;
        volume(arg0: number): $SoundDefinition$Sound;
        volume(arg0: number): $SoundDefinition$Sound;
    }
    export class $GlobalLootModifierProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        add<T extends $IGlobalLootModifier>(arg0: string, arg1: T, ...arg2: $ICondition[]): void;
        add<T extends $IGlobalLootModifier>(arg0: string, arg1: T, arg2: $List_<$ICondition>): void;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
        get name(): string;
    }
    export class $SoundDefinitionsProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        registerSounds(): void;
        get name(): string;
    }
    export class $DataMapProvider$Builder<T, R> {
        remove(arg0: $ResourceLocation_): $DataMapProvider$Builder<T, R>;
        remove(arg0: $TagKey_<R>): $DataMapProvider$Builder<T, R>;
        remove(arg0: $Holder_<R>): $DataMapProvider$Builder<T, R>;
        replace(arg0: boolean): $DataMapProvider$Builder<T, R>;
        add(arg0: $ResourceKey_<R>, arg1: T, arg2: boolean, ...arg3: $ICondition[]): $DataMapProvider$Builder<T, R>;
        add(arg0: $ResourceLocation_, arg1: T, arg2: boolean, ...arg3: $ICondition[]): $DataMapProvider$Builder<T, R>;
        add(arg0: $Holder_<R>, arg1: T, arg2: boolean, ...arg3: $ICondition[]): $DataMapProvider$Builder<T, R>;
        add(arg0: $TagKey_<R>, arg1: T, arg2: boolean, ...arg3: $ICondition[]): $DataMapProvider$Builder<T, R>;
        build(): $WithConditions<$DataMapFile<T, R>>;
        conditions(...arg0: $ICondition[]): $DataMapProvider$Builder<T, R>;
        constructor(arg0: $DataMapType<R, T>);
    }
    export class $SpriteSourceProvider extends $JsonCodecProvider<$List<$SpriteSource>> {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $ExistingFileHelper$IResourceType {
    }
    export interface $ExistingFileHelper$IResourceType {
        getPrefix(): string;
        getSuffix(): string;
        getPackType(): $PackType;
        get prefix(): string;
        get suffix(): string;
        get packType(): $PackType;
    }
    export class $ParticleDescriptionProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        get name(): string;
    }
    export class $JsonCodecProvider<T> implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        conditionally(arg0: $ResourceLocation_, arg1: $Consumer_<$WithConditions$Builder<T>>): void;
        unconditional(arg0: $ResourceLocation_, arg1: T): void;
        constructor(arg0: $PackOutput, arg1: $PackOutput$Target_, arg2: string, arg3: $PackType_, arg4: $Codec<T>, arg5: $CompletableFuture<$HolderLookup$Provider>, arg6: string, arg7: $ExistingFileHelper);
        get name(): string;
    }
    export class $DataMapProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        builder<T, R>(arg0: $DataMapType<R, T>): $DataMapProvider$Builder<T, R>;
        builder<T, R, VR extends $DataMapValueRemover<R, T>>(arg0: $AdvancedDataMapType<R, T, VR>): $DataMapProvider$AdvancedBuilder<T, R, VR>;
        get name(): string;
    }
    export class $DataMapProvider$AdvancedBuilder<T, R, VR extends $DataMapValueRemover<R, T>> extends $DataMapProvider$Builder<T, R> {
        remove(arg0: $ResourceLocation_, arg1: VR): $DataMapProvider$AdvancedBuilder<T, R, VR>;
        remove(arg0: $Holder_<R>, arg1: VR): $DataMapProvider$AdvancedBuilder<T, R, VR>;
        remove(arg0: $TagKey_<R>, arg1: VR): $DataMapProvider$AdvancedBuilder<T, R, VR>;
        constructor(arg0: $AdvancedDataMapType<R, T, VR>);
    }
    export class $SoundDefinition$SoundType extends $Enum<$SoundDefinition$SoundType> {
        static values(): $SoundDefinition$SoundType[];
        static valueOf(arg0: string): $SoundDefinition$SoundType;
        static SOUND: $SoundDefinition$SoundType;
        static EVENT: $SoundDefinition$SoundType;
    }
    /**
     * Values that may be interpreted as {@link $SoundDefinition$SoundType}.
     */
    export type $SoundDefinition$SoundType_ = "sound" | "event";
    export class $ExistingFileHelper$ResourceType implements $ExistingFileHelper$IResourceType {
        getPrefix(): string;
        getSuffix(): string;
        getPackType(): $PackType;
        constructor(arg0: $PackType_, arg1: string, arg2: string);
        get prefix(): string;
        get suffix(): string;
        get packType(): $PackType;
    }
    export class $DatapackBuiltinEntriesProvider extends $RegistriesDatapackGenerator {
        getRegistryProvider(): $CompletableFuture<$HolderLookup$Provider>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $RegistrySetBuilder, arg3: $Consumer_<$BiConsumer<$ResourceKey<never>, $ICondition>>, arg4: $Set_<string>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $RegistrySetBuilder, arg3: $Map_<$ResourceKey_<never>, $List_<$ICondition>>, arg4: $Set_<string>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $RegistrySetBuilder, arg3: $Set_<string>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$RegistrySetBuilder$PatchedRegistries_>, arg2: $Set_<string>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$RegistrySetBuilder$PatchedRegistries_>, arg2: $Consumer_<$BiConsumer<$ResourceKey<never>, $ICondition>>, arg3: $Set_<string>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$RegistrySetBuilder$PatchedRegistries_>, arg2: $Map_<$ResourceKey_<never>, $List_<$ICondition>>, arg3: $Set_<string>);
        get registryProvider(): $CompletableFuture<$HolderLookup$Provider>;
    }
    export class $AdvancementProvider extends $AdvancementProvider$1 {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper, arg3: $List_<$AdvancementProvider$AdvancementGenerator_>);
    }
    export class $SpriteSourceProvider$SourceList extends $Record {
    }
    export class $ExistingFileHelper {
        isEnabled(): boolean;
        getResource(arg0: $ResourceLocation_, arg1: $PackType_, arg2: string, arg3: string): $Resource;
        getResource(arg0: $ResourceLocation_, arg1: $PackType_): $Resource;
        exists(arg0: $ResourceLocation_, arg1: $ExistingFileHelper$IResourceType): boolean;
        exists(arg0: $ResourceLocation_, arg1: $PackType_): boolean;
        exists(arg0: $ResourceLocation_, arg1: $PackType_, arg2: string, arg3: string): boolean;
        getResourceStack(arg0: $ResourceLocation_, arg1: $PackType_): $List<$Resource>;
        trackGenerated(arg0: $ResourceLocation_, arg1: $ExistingFileHelper$IResourceType): void;
        trackGenerated(arg0: $ResourceLocation_, arg1: $PackType_, arg2: string, arg3: string): void;
        constructor(arg0: $Collection_<$Path_>, arg1: $Set_<string>, arg2: boolean, arg3: string, arg4: $File_);
        get enabled(): boolean;
    }
    export class $BlockTagsProvider extends $IntrinsicHolderTagsProvider<$Block> {
        registryKey: $ResourceKey<$Registry<$Block>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $AdvancementProvider$AdvancementGenerator {
    }
    export interface $AdvancementProvider$AdvancementGenerator {
        generate(arg0: $HolderLookup$Provider, arg1: $Consumer_<$AdvancementHolder>, arg2: $ExistingFileHelper): void;
        toSubProvider(arg0: $ExistingFileHelper): $AdvancementSubProvider;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementProvider$AdvancementGenerator}.
     */
    export type $AdvancementProvider$AdvancementGenerator_ = ((arg0: $HolderLookup$Provider, arg1: $Consumer<$AdvancementHolder>, arg2: $ExistingFileHelper) => void);
    export class $SoundDefinition {
        replace(arg0: boolean): $SoundDefinition;
        "with"(...arg0: $SoundDefinition$Sound[]): $SoundDefinition;
        "with"(arg0: $SoundDefinition$Sound): $SoundDefinition;
        static definition(): $SoundDefinition;
        subtitle(arg0: string): $SoundDefinition;
    }
    export class $LanguageProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        add(arg0: $ItemStack_, arg1: string): void;
        add(arg0: string, arg1: string): void;
        add(arg0: $Item_, arg1: string): void;
        add(arg0: $MobEffect_, arg1: string): void;
        add(arg0: $EntityType_<never>, arg1: string): void;
        add(arg0: $TagKey_<never>, arg1: string): void;
        add(arg0: $Block_, arg1: string): void;
        addItem(arg0: $Supplier_<$Item>, arg1: string): void;
        addEntityType(arg0: $Supplier_<$EntityType<never>>, arg1: string): void;
        addBlock(arg0: $Supplier_<$Block>, arg1: string): void;
        addEffect(arg0: $Supplier_<$MobEffect>, arg1: string): void;
        addTag(arg0: $Supplier_<$TagKey<never>>, arg1: string): void;
        addItemStack(arg0: $Supplier_<$ItemStack>, arg1: string): void;
        addDimension(arg0: $ResourceKey_<$Level>, arg1: string): void;
        constructor(arg0: $PackOutput, arg1: string, arg2: string);
        get name(): string;
    }
    export class $GeneratingOverlayMetadataSection extends $Record {
        overlays(): $List<$WithConditions<$OverlayMetadataSection$OverlayEntry>>;
        static NEOFORGE_TYPE: $MetadataSectionType<$GeneratingOverlayMetadataSection>;
        static TYPE: $MetadataSectionType<$GeneratingOverlayMetadataSection>;
        constructor(overlays: $List_<$WithConditions_<$OverlayMetadataSection$OverlayEntry_>>);
    }
}
