import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $List, $List_, $Map } from "@package/java/util";
import { $CatVariant } from "@package/net/minecraft/world/entity/animal";
import { $DataProvider, $PackOutput$PathProvider, $PackOutput, $CachedOutput_ } from "@package/net/minecraft/data";
import { $Function_, $Function } from "@package/java/util/function";
import { $HolderLookup$Provider, $Registry } from "@package/net/minecraft/core";
import { $IIntrinsicHolderTagAppenderExtension, $ITagAppenderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path } from "@package/java/nio/file";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $TagBuilder, $TagEntry, $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $Item, $Instrument } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorPreset } from "@package/net/minecraft/world/level/levelgen/flat";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/data/tags" {
    export class $ItemTagsProvider extends $IntrinsicHolderTagsProvider<$Item> {
        /**
         * Copies the entries from a block tag into an item tag.
         */
        copy(blockTag: $TagKey_<$Block>, itemTag: $TagKey_<$Item>): void;
        registryKey: $ResourceKey<$Registry<$Item>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, blockTags: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup_<$Item>>, arg3: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>, arg4: string, arg5: $ExistingFileHelper);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>, arg3: string, arg4: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, parentProvider: $CompletableFuture<$TagsProvider$TagLookup_<$Item>>, blockTags: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>);
    }
    export class $GameEventTagsProvider extends $TagsProvider<$GameEvent> {
        registryKey: $ResourceKey<$Registry<$GameEvent>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        static VIBRATIONS_EXCEPT_FLAP: $List<$ResourceKey<$GameEvent>>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $FlatLevelGeneratorPresetTagsProvider extends $TagsProvider<$FlatLevelGeneratorPreset> {
        registryKey: $ResourceKey<$Registry<$FlatLevelGeneratorPreset>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $DamageTypeTagsProvider extends $TagsProvider<$DamageType> {
        registryKey: $ResourceKey<$Registry<$DamageType>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $EntityTypeTagsProvider extends $IntrinsicHolderTagsProvider<$EntityType<never>> {
        registryKey: $ResourceKey<$Registry<$EntityType<never>>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $PoiTypeTagsProvider extends $TagsProvider<$PoiType> {
        registryKey: $ResourceKey<$Registry<$PoiType>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $StructureTagsProvider extends $TagsProvider<$Structure> {
        registryKey: $ResourceKey<$Registry<$Structure>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $BiomeTagsProvider extends $TagsProvider<$Biome> {
        registryKey: $ResourceKey<$Registry<$Biome>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $TradeRebalanceEnchantmentTagsProvider extends $TagsProvider<$Enchantment> {
        registryKey: $ResourceKey<$Registry<$Enchantment>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(packOutput: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $IntrinsicHolderTagsProvider<T> extends $TagsProvider<T> {
        registryKey: $ResourceKey<$Registry<T>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(arg0: $PackOutput, arg1: $ResourceKey_<$Registry<T>>, arg2: $CompletableFuture<$HolderLookup$Provider>, arg3: $CompletableFuture<$TagsProvider$TagLookup_<T>>, arg4: $Function_<T, $ResourceKey<T>>, arg5: string, arg6: $ExistingFileHelper);
        constructor(arg0: $PackOutput, arg1: $ResourceKey_<$Registry<T>>, arg2: $CompletableFuture<$HolderLookup$Provider>, arg3: $Function_<T, $ResourceKey<T>>, arg4: string, arg5: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, registryKey: $ResourceKey_<$Registry<T>>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, parentProvider: $CompletableFuture<$TagsProvider$TagLookup_<T>>, keyExtractor: $Function_<T, $ResourceKey<T>>);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, registryKey: $ResourceKey_<$Registry<T>>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, keyExtractor: $Function_<T, $ResourceKey<T>>);
    }
    export class $EnchantmentTagsProvider extends $TagsProvider<$Enchantment> {
        tooltipOrder(provider: $HolderLookup$Provider, ...values: $ResourceKey_<$Enchantment>[]): void;
        registryKey: $ResourceKey<$Registry<$Enchantment>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $PaintingVariantTagsProvider extends $TagsProvider<$PaintingVariant> {
        registryKey: $ResourceKey<$Registry<$PaintingVariant>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $FluidTagsProvider extends $IntrinsicHolderTagsProvider<$Fluid> {
        registryKey: $ResourceKey<$Registry<$Fluid>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $TagsProvider$TagAppender<T> implements $ITagAppenderExtension<T> {
        add(...keys: $ResourceKey_<T>[]): $TagsProvider$TagAppender<T>;
        add(arg0: $TagEntry): $TagsProvider$TagAppender<T>;
        add(key: $ResourceKey_<T>): $TagsProvider$TagAppender<T>;
        addAll(keys: $List_<$ResourceKey_<T>>): $TagsProvider$TagAppender<T>;
        getInternalBuilder(): $TagBuilder;
        /**
         * @deprecated
         */
        getModID(): string;
        addOptional(location: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        addOptionalTag(location: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        addTag(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $TagKey_<T>, ...arg1: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceLocation_, ...arg1: $ResourceLocation_[]): $TagsProvider$TagAppender<T>;
        remove(key: $ResourceKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        remove(location: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        replace(value: boolean): $TagsProvider$TagAppender<T>;
        replace(): $TagsProvider$TagAppender<T>;
        addOptionalTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        addOptionalTag(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        addTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        builder: $TagBuilder;
        constructor(builder: $TagBuilder);
        /**
         * @deprecated
         */
        constructor(arg0: $TagBuilder, arg1: string);
        get internalBuilder(): $TagBuilder;
        get modID(): string;
    }
    export class $BannerPatternTagsProvider extends $TagsProvider<$BannerPattern> {
        registryKey: $ResourceKey<$Registry<$BannerPattern>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $VanillaEnchantmentTagsProvider extends $EnchantmentTagsProvider {
        registryKey: $ResourceKey<$Registry<$Enchantment>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CatVariantTagsProvider extends $TagsProvider<$CatVariant> {
        registryKey: $ResourceKey<$Registry<$CatVariant>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $TagsProvider$TagLookup<T> {
        static empty<T>(): $TagsProvider$TagLookup<T>;
    }
    export interface $TagsProvider$TagLookup<T> extends $Function<$TagKey<T>, ($TagBuilder) | undefined> {
        contains(key: $TagKey_<$TagKey<T>>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TagsProvider$TagLookup}.
     */
    export type $TagsProvider$TagLookup_<T> = (() => void);
    export class $WorldPresetTagsProvider extends $TagsProvider<$WorldPreset> {
        registryKey: $ResourceKey<$Registry<$WorldPreset>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
    export class $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T> extends $TagsProvider$TagAppender<T> implements $IIntrinsicHolderTagAppenderExtension<T> {
        add(...values: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        add(value: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        getKey(arg0: T): $ResourceKey<T>;
        addTag(tag: $TagKey_<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(resourceKey: $ResourceKey_<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(value: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: T, ...arg1: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        replace(value: boolean): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        addTags(...arg0: $TagKey_<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        builder: $TagBuilder;
        constructor(arg0: $TagBuilder, arg1: $Function_<T, $ResourceKey<T>>, arg2: string);
    }
    export class $VanillaItemTagsProvider extends $ItemTagsProvider {
        registryKey: $ResourceKey<$Registry<$Item>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>);
    }
    export class $TradeRebalanceStructureTagsProvider extends $TagsProvider<$Structure> {
        registryKey: $ResourceKey<$Registry<$Structure>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $VanillaBlockTagsProvider extends $IntrinsicHolderTagsProvider<$Block> {
        registryKey: $ResourceKey<$Registry<$Block>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $TagsProvider$1CombinedData<T> extends $Record {
    }
    export class $TagsProvider<T> implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        getPath(arg0: $ResourceLocation_): $Path;
        tag(tag: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        contentsGetter(): $CompletableFuture<$TagsProvider$TagLookup<T>>;
        addTags(provider: $HolderLookup$Provider): void;
        getOrCreateRawBuilder(tag: $TagKey_<T>): $TagBuilder;
        createContentsProvider(): $CompletableFuture<$HolderLookup$Provider>;
        registryKey: $ResourceKey<$Registry<T>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(output: $PackOutput, registryKey: $ResourceKey_<$Registry<T>>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $ResourceKey_<$Registry<T>>, arg2: $CompletableFuture<$HolderLookup$Provider>, arg3: string, arg4: $ExistingFileHelper);
        constructor(arg0: $PackOutput, arg1: $ResourceKey_<$Registry<T>>, arg2: $CompletableFuture<$HolderLookup$Provider>, arg3: $CompletableFuture<$TagsProvider$TagLookup_<T>>, arg4: string, arg5: $ExistingFileHelper);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, registryKey: $ResourceKey_<$Registry<T>>, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, parentProvider: $CompletableFuture<$TagsProvider$TagLookup_<T>>);
        get name(): string;
    }
    export class $InstrumentTagsProvider extends $TagsProvider<$Instrument> {
        registryKey: $ResourceKey<$Registry<$Instrument>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string, arg3: $ExistingFileHelper);
    }
}
