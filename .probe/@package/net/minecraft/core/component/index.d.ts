import { $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $UUID_, $Set_, $Map, $Map$Entry, $Set, $Spliterator, $Iterator, $List, $Map_, $List_ } from "@package/java/util";
import { $EncoderCache, $Unit_, $Unit } from "@package/net/minecraft/util";
import { $LockCode } from "@package/net/minecraft/world";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate } from "@package/java/util/function";
import { $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Registry, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $IDataComponentHolderExtension, $IDataComponentMapBuilderExtensions } from "@package/net/neoforged/neoforge/common/extensions";
import { $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { RegistryMarked, RegistryTypes, DataComponentTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MapId } from "@package/net/minecraft/world/level/saveddata/maps";
import { $DataComponentsAccessor } from "@package/org/embeddedt/modernfix/common/mixin/perf/encoder_cache_leak";
import { $Iterable, $Record, $Object } from "@package/java/lang";
import { $ArmorTrim } from "@package/net/minecraft/world/item/armortrim";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Rarity, $Rarity_, $DyeColor, $DyeColor_, $AdventureModePredicate, $Instrument, $JukeboxPlayable } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ItemLore, $ItemAttributeModifiers, $Fireworks, $CustomData, $Unbreakable, $ItemContainerContents, $MapPostProcessing, $MapItemColor, $BlockItemStateProperties, $DebugStickState, $WritableBookContent, $Tool, $ChargedProjectiles, $SuspiciousStewEffects, $MapDecorations, $CustomModelData, $DyedItemColor, $LodestoneTracker, $SeededContainerLoot, $WrittenBookContent, $BundleContents, $ResolvableProfile, $FireworkExplosion } from "@package/net/minecraft/world/item/component";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties } from "@package/net/minecraft/world/food";
import { $PotionContents, $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $FabricComponentMapBuilder } from "@package/net/fabricmc/fabric/api/item/v1";
import { $PotDecorations, $BeehiveBlockEntity$Occupant, $BannerPatternLayers } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/core/component" {
    export class $DataComponentPredicate implements $Predicate<$DataComponentMap> {
        test(arg0: $DataComponentHolder_): boolean;
        test(arg0: $DataComponentMap_): boolean;
        static builder(): $DataComponentPredicate$Builder;
        static allOf(arg0: $DataComponentMap_): $DataComponentPredicate;
        asPatch(): $DataComponentPatch;
        alwaysMatches(): boolean;
        or(arg0: $Predicate_<$DataComponentMap>): $Predicate<$DataComponentMap>;
        negate(): $Predicate<$DataComponentMap>;
        and(arg0: $Predicate_<$DataComponentMap>): $Predicate<$DataComponentMap>;
        static CODEC: $Codec<$DataComponentPredicate>;
        static EMPTY: $DataComponentPredicate;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentPredicate>;
        constructor(arg0: $List_<$TypedDataComponent_<never>>);
    }
    export class $DataComponentPatch {
        size(): number;
        get<T>(arg0: $DataComponentType_<T>): (T) | undefined;
        static toString(arg0: $Reference2ObjectMap<$DataComponentType_<never>, (never) | undefined>): string;
        isEmpty(): boolean;
        split(): $DataComponentPatch$SplitResult;
        static builder(): $DataComponentPatch$Builder;
        entrySet(): $Set<$Map$Entry<$DataComponentType<never>, (never) | undefined>>;
        forget(arg0: $Predicate_<$DataComponentType<never>>): $DataComponentPatch;
        static CODEC: $Codec<$DataComponentPatch>;
        static EMPTY: $DataComponentPatch;
        map: $Reference2ObjectMap<$DataComponentType<never>, (never) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentPatch>;
        constructor(arg0: $Reference2ObjectMap<$DataComponentType_<never>, (never) | undefined>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch}.
     */
    export type $DataComponentPatch_ = Partial<DataComponentTypes.InputMap>;
    export class $DataComponentMap {
        static builder(): $DataComponentMap$Builder;
        static composite(arg0: $DataComponentMap_, arg1: $DataComponentMap_): $DataComponentMap;
        static makeCodecFromMap(arg0: $Codec<$Map_<$DataComponentType_<never>, $Object>>): $Codec<$DataComponentMap>;
        static makeCodec(arg0: $Codec<$DataComponentType_<never>>): $Codec<$DataComponentMap>;
        static CODEC: $Codec<$DataComponentMap>;
        static EMPTY: $DataComponentMap;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
    }
    export interface $DataComponentMap extends $Iterable<$TypedDataComponent<never>> {
        size(): number;
        get<T>(arg0: $DataComponentType_<T>): T;
        isEmpty(): boolean;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(arg0: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        keySet(): $Set<$DataComponentType<never>>;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        has(arg0: $DataComponentType_<never>): boolean;
        getTyped<T>(arg0: $DataComponentType_<T>): $TypedDataComponent<T>;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentMap}.
     */
    export type $DataComponentMap_ = Partial<DataComponentTypes.InputMap>;
    export class $DataComponentPredicate$Builder {
        build(): $DataComponentPredicate;
        expect<T>(arg0: $DataComponentType_<T>, arg1: T): $DataComponentPredicate$Builder;
        constructor();
    }
    export class $DataComponentPatch$PatchKey extends $Record {
    }
    export class $TypedDataComponent<T> extends $Record {
        type(): $DataComponentType<T>;
        value(): T;
        static createUnchecked<T>(arg0: $DataComponentType_<T>, arg1: $Object): $TypedDataComponent<T>;
        static fromEntryUnchecked(arg0: $Map$Entry<$DataComponentType_<never>, $Object>): $TypedDataComponent<never>;
        encodeValue<D>(arg0: $DynamicOps<D>): $DataResult<D>;
        applyTo(arg0: $PatchedDataComponentMap): void;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TypedDataComponent<never>>;
        constructor(arg0: $DataComponentType_<T>, arg1: T);
    }
    export class $DataComponentType<T> {
        static builder<T>(): $DataComponentType$Builder<T>;
        static CODEC: $Codec<$DataComponentType<never>>;
        static VALUE_MAP_CODEC: $Codec<$Map<$DataComponentType<never>, $Object>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentType<never>>;
        static PERSISTENT_CODEC: $Codec<$DataComponentType<never>>;
    }
    export interface $DataComponentType<T> {
        isTransient(): boolean;
        codec(): $Codec<T>;
        codecOrThrow(): $Codec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        get transient(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentType}.
     */
    export type $DataComponentType_<T> = RegistryTypes.DataComponentType | RegistryTypes.EnchantmentEffectComponentType;
    export class $PatchedDataComponentMap implements $DataComponentMap {
        remove<T>(arg0: $DataComponentType_<T>): T;
        size(): number;
        get<T>(arg0: $DataComponentType_<T>): T;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        set<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        keySet(): $Set<$DataComponentType<never>>;
        copy(): $PatchedDataComponentMap;
        setAll(arg0: $DataComponentMap_): void;
        applyPatch(arg0: $DataComponentPatch_): void;
        isPatchEmpty(): boolean;
        asPatch(): $DataComponentPatch;
        static fromPatch(arg0: $DataComponentMap_, arg1: $DataComponentPatch_): $PatchedDataComponentMap;
        restorePatch(arg0: $DataComponentPatch_): void;
        isEmpty(): boolean;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(arg0: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        has(arg0: $DataComponentType_<never>): boolean;
        getTyped<T>(arg0: $DataComponentType_<T>): $TypedDataComponent<T>;
        spliterator(): $Spliterator<$TypedDataComponent<never>>;
        forEach(arg0: $Consumer_<$TypedDataComponent<never>>): void;
        copyOnWrite: boolean;
        constructor(arg0: $DataComponentMap_);
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        set all(value: $DataComponentMap_);
        get patchEmpty(): boolean;
        get empty(): boolean;
    }
    export class $DataComponentMap$Builder implements $IDataComponentMapBuilderExtensions, $FabricComponentMapBuilder, $ComponentFunctions {
        addAll(arg0: $DataComponentMap_): $DataComponentMap$Builder;
        build(): $DataComponentMap;
        getOrCreate(arg0: $DataComponentType_<any>, arg1: $Supplier_<any>): $Object;
        getOrEmpty(arg0: $DataComponentType_<any>): $List<any>;
        kjs$get(type: $DataComponentType_<any>): $Object;
        kjs$remove(type: $DataComponentType_<any>): $ComponentFunctions;
        setUnchecked<T>(arg0: $DataComponentType_<T>, arg1: $Object): void;
        kjs$getComponentMap(): $DataComponentMap;
        setAdditionalTooltipHidden(): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        setDyedColor(color: $KubeColor_): void;
        setBaseColor(color: $DyeColor_): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        setPotionId(potion: $Holder_<$Potion>): void;
        setEntityData(tag: $CompoundTag_): void;
        setRarity(rarity: $Rarity_): void;
        setCustomData(tag: $CompoundTag_): void;
        setCustomName(name: $Component_): void;
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        getCustomData(): $CompoundTag;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setLockCode(lock: string): void;
        resetComponents(): $ComponentFunctions;
        getComponentString(): string;
        setGlintOverride(override: boolean): void;
        setPotionContents(contents: $PotionContents_): void;
        setTooltipHidden(): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setCustomModelData(data: number): void;
        constructor();
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set blockStateProperties(value: $Map_<string, string>);
        set dyedColorWithTooltip(value: $KubeColor_);
        set dyedColor(value: $KubeColor_);
        set baseColor(value: $DyeColor_);
        set unit(value: $DataComponentType_<$Unit_>);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set rarity(value: $Rarity_);
        set lockCode(value: string);
        get componentString(): string;
        set glintOverride(value: boolean);
        set potionContents(value: $PotionContents_);
        set customModelData(value: number);
    }
    export class $DataComponentPatch$SplitResult extends $Record {
        added(): $DataComponentMap;
        removed(): $Set<$DataComponentType<never>>;
        static EMPTY: $DataComponentPatch$SplitResult;
        constructor(added: $DataComponentMap_, removed: $Set_<$DataComponentType_<never>>);
    }
    export class $DataComponentPatch$Builder implements $ComponentFunctions {
        remove<T>(arg0: $DataComponentType_<T>): $DataComponentPatch$Builder;
        build(): $DataComponentPatch;
        kjs$get(type: $DataComponentType_<any>): $Object;
        kjs$remove(type: $DataComponentType_<any>): $ComponentFunctions;
        setAdditionalTooltipHidden(): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        setDyedColor(color: $KubeColor_): void;
        setBaseColor(color: $DyeColor_): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        setPotionId(potion: $Holder_<$Potion>): void;
        setEntityData(tag: $CompoundTag_): void;
        setRarity(rarity: $Rarity_): void;
        setCustomData(tag: $CompoundTag_): void;
        setCustomName(name: $Component_): void;
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        getCustomData(): $CompoundTag;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setLockCode(lock: string): void;
        getComponentMap(): $DataComponentMap;
        resetComponents(): $ComponentFunctions;
        getComponentString(): string;
        setGlintOverride(override: boolean): void;
        setPotionContents(contents: $PotionContents_): void;
        setTooltipHidden(): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setCustomModelData(data: number): void;
        constructor();
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set blockStateProperties(value: $Map_<string, string>);
        set dyedColorWithTooltip(value: $KubeColor_);
        set dyedColor(value: $KubeColor_);
        set baseColor(value: $DyeColor_);
        set unit(value: $DataComponentType_<$Unit_>);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set rarity(value: $Rarity_);
        set lockCode(value: string);
        get componentMap(): $DataComponentMap;
        get componentString(): string;
        set glintOverride(value: boolean);
        set potionContents(value: $PotionContents_);
        set customModelData(value: number);
    }
    export class $DataComponentHolder {
    }
    export interface $DataComponentHolder extends $IDataComponentHolderExtension {
        get<T>(arg0: $DataComponentType_<T>): T;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        has(arg0: $DataComponentType_<never>): boolean;
        getComponents(): $DataComponentMap;
        get components(): $DataComponentMap;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentHolder}.
     */
    export type $DataComponentHolder_ = (() => $DataComponentMap_);
    export interface $DataComponentType extends RegistryMarked<RegistryTypes.EnchantmentEffectComponentTypeTag, RegistryTypes.EnchantmentEffectComponentType> {}
    export class $DataComponentType$Builder$SimpleType<T> implements $DataComponentType<T> {
        isTransient(): boolean;
        codecOrThrow(): $Codec<T>;
        get transient(): boolean;
    }
    export class $DataComponents implements $DataComponentsAccessor {
        static bootstrap(arg0: $Registry<$DataComponentType_<never>>): $DataComponentType<never>;
        static mfix$getCache$modernfix_$md$d64506$0(): $EncoderCache;
        static CONTAINER_LOOT: $DataComponentType<$SeededContainerLoot>;
        static TRIM: $DataComponentType<$ArmorTrim>;
        static BASE_COLOR: $DataComponentType<$DyeColor>;
        static BLOCK_STATE: $DataComponentType<$BlockItemStateProperties>;
        static LOCK: $DataComponentType<$LockCode>;
        static CUSTOM_MODEL_DATA: $DataComponentType<$CustomModelData>;
        static BUNDLE_CONTENTS: $DataComponentType<$BundleContents>;
        static RARITY: $DataComponentType<$Rarity>;
        static UNBREAKABLE: $DataComponentType<$Unbreakable>;
        static FIRE_RESISTANT: $DataComponentType<$Unit>;
        static WRITTEN_BOOK_CONTENT: $DataComponentType<$WrittenBookContent>;
        static ITEM_NAME: $DataComponentType<$Component>;
        static POTION_CONTENTS: $DataComponentType<$PotionContents>;
        static NOTE_BLOCK_SOUND: $DataComponentType<$ResourceLocation>;
        static ENCHANTMENTS: $DataComponentType<$ItemEnchantments>;
        static ATTRIBUTE_MODIFIERS: $DataComponentType<$ItemAttributeModifiers>;
        static ENCODER_CACHE: $EncoderCache;
        static CREATIVE_SLOT_LOCK: $DataComponentType<$Unit>;
        static CUSTOM_DATA: $DataComponentType<$CustomData>;
        static MAP_COLOR: $DataComponentType<$MapItemColor>;
        static MAP_DECORATIONS: $DataComponentType<$MapDecorations>;
        static BLOCK_ENTITY_DATA: $DataComponentType<$CustomData>;
        static MAX_STACK_SIZE: $DataComponentType<number>;
        static DAMAGE: $DataComponentType<number>;
        static CAN_PLACE_ON: $DataComponentType<$AdventureModePredicate>;
        static BEES: $DataComponentType<$List<$BeehiveBlockEntity$Occupant>>;
        static ENCHANTMENT_GLINT_OVERRIDE: $DataComponentType<boolean>;
        static DYED_COLOR: $DataComponentType<$DyedItemColor>;
        static BUCKET_ENTITY_DATA: $DataComponentType<$CustomData>;
        static CAN_BREAK: $DataComponentType<$AdventureModePredicate>;
        static DEBUG_STICK_STATE: $DataComponentType<$DebugStickState>;
        static FIREWORKS: $DataComponentType<$Fireworks>;
        static REPAIR_COST: $DataComponentType<number>;
        static MAP_POST_PROCESSING: $DataComponentType<$MapPostProcessing>;
        static CUSTOM_NAME: $DataComponentType<$Component>;
        static LODESTONE_TRACKER: $DataComponentType<$LodestoneTracker>;
        static TOOL: $DataComponentType<$Tool>;
        static STORED_ENCHANTMENTS: $DataComponentType<$ItemEnchantments>;
        static RECIPES: $DataComponentType<$List<$ResourceLocation>>;
        static POT_DECORATIONS: $DataComponentType<$PotDecorations>;
        static PROFILE: $DataComponentType<$ResolvableProfile>;
        static LORE: $DataComponentType<$ItemLore>;
        static COMMON_ITEM_COMPONENTS: $DataComponentMap;
        static MAX_DAMAGE: $DataComponentType<number>;
        static FIREWORK_EXPLOSION: $DataComponentType<$FireworkExplosion>;
        static MAP_ID: $DataComponentType<$MapId>;
        static HIDE_ADDITIONAL_TOOLTIP: $DataComponentType<$Unit>;
        static SUSPICIOUS_STEW_EFFECTS: $DataComponentType<$SuspiciousStewEffects>;
        static HIDE_TOOLTIP: $DataComponentType<$Unit>;
        static INSTRUMENT: $DataComponentType<$Holder<$Instrument>>;
        static INTANGIBLE_PROJECTILE: $DataComponentType<$Unit>;
        static ENTITY_DATA: $DataComponentType<$CustomData>;
        static CHARGED_PROJECTILES: $DataComponentType<$ChargedProjectiles>;
        static WRITABLE_BOOK_CONTENT: $DataComponentType<$WritableBookContent>;
        static CONTAINER: $DataComponentType<$ItemContainerContents>;
        static OMINOUS_BOTTLE_AMPLIFIER: $DataComponentType<number>;
        static JUKEBOX_PLAYABLE: $DataComponentType<$JukeboxPlayable>;
        static BANNER_PATTERNS: $DataComponentType<$BannerPatternLayers>;
        static FOOD: $DataComponentType<$FoodProperties>;
        constructor();
    }
    export class $DataComponentMap$Builder$SimpleMap extends $Record implements $DataComponentMap {
        size(): number;
        isEmpty(): boolean;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(arg0: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        has(arg0: $DataComponentType_<never>): boolean;
        getTyped<T>(arg0: $DataComponentType_<T>): $TypedDataComponent<T>;
        spliterator(): $Spliterator<$TypedDataComponent<never>>;
        forEach(arg0: $Consumer_<$TypedDataComponent<never>>): void;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        get empty(): boolean;
    }
    export class $DataComponentType$Builder<T> {
        build(): $DataComponentType<T>;
        persistent(arg0: $Codec<T>): $DataComponentType$Builder<T>;
        networkSynchronized(arg0: $StreamCodec<$RegistryFriendlyByteBuf, T>): $DataComponentType$Builder<T>;
        cacheEncoding(): $DataComponentType$Builder<T>;
        constructor();
    }
}
