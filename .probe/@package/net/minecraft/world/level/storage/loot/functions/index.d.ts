import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Set_, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $Products$P1 } from "@package/com/mojang/datafixers";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_, $BiFunction, $UnaryOperator, $Consumer, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $HolderSet_, $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable_, $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootContextUser, $ContainerComponentManipulator, $ValidationContext, $LootContext, $LootTable, $IntRange, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack, $Instrument } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Fireworks, $WritableBookContent_, $FireworkExplosion$Shape, $WrittenBookContent_, $WritableBookContent, $FireworkExplosion_, $FireworkExplosion$Shape_, $WrittenBookContent, $FireworkExplosion } from "@package/net/minecraft/world/item/component";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Filterable_ } from "@package/net/minecraft/server/network";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $ItemPredicate_ } from "@package/net/minecraft/advancements/critereon";
import { $NbtProvider } from "@package/net/minecraft/world/level/storage/loot/providers/nbt";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $BannerPatternLayers_, $BlockEntityType_, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/storage/loot/functions" {
    export class $LootItemFunction$Builder {
    }
    export interface $LootItemFunction$Builder {
        build(): $LootItemFunction;
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunction$Builder}.
     */
    export type $LootItemFunction$Builder_ = (() => $LootItemFunction);
    export class $ApplyBonusCount extends $LootItemConditionalFunction {
        static addBonusBinomialDistributionCount(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $LootItemConditionalFunction$Builder<never>;
        static addUniformBonusCount(arg0: $Holder_<$Enchantment>, arg1: number): $LootItemConditionalFunction$Builder<never>;
        static addUniformBonusCount(arg0: $Holder_<$Enchantment>): $LootItemConditionalFunction$Builder<never>;
        static addOreBonusCount(arg0: $Holder_<$Enchantment>): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ApplyBonusCount>;
    }
    export class $SetPotionFunction extends $LootItemConditionalFunction {
        static setPotion(arg0: $Holder_<$Potion>): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetPotionFunction>;
        static set potion(value: $Holder_<$Potion>);
    }
    export class $EnchantWithLevelsFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantWithLevelsFunction$Builder> {
        fromOptions(arg0: $HolderSet_<$Enchantment>): $EnchantWithLevelsFunction$Builder;
        constructor(arg0: $NumberProvider_);
    }
    export class $LimitCount extends $LootItemConditionalFunction {
        static limitCount(arg0: $IntRange): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$LimitCount>;
    }
    export class $CopyCustomDataFunction extends $LootItemConditionalFunction {
        /**
         * @deprecated
         */
        static copyData(arg0: $NbtProvider): $CopyCustomDataFunction$Builder;
        static copyData(arg0: $LootContext$EntityTarget_): $CopyCustomDataFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyCustomDataFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $NbtProvider, arg2: $List_<$CopyCustomDataFunction$CopyOperation_>);
    }
    export class $SetStewEffectFunction$Builder extends $LootItemConditionalFunction$Builder<$SetStewEffectFunction$Builder> {
        withEffect(arg0: $Holder_<$MobEffect>, arg1: $NumberProvider_): $SetStewEffectFunction$Builder;
        constructor();
    }
    export class $SetAttributesFunction extends $LootItemConditionalFunction {
        static modifier(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $NumberProvider_): $SetAttributesFunction$ModifierBuilder;
        static setAttributes(): $SetAttributesFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetAttributesFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$SetAttributesFunction$Modifier_>, arg2: boolean);
    }
    export class $LootItemFunction {
        static decorate(arg0: $BiFunction_<$ItemStack, $LootContext, $ItemStack>, arg1: $Consumer_<$ItemStack>, arg2: $LootContext): $Consumer<$ItemStack>;
    }
    export interface $LootItemFunction extends $LootContextUser, $BiFunction<$ItemStack, $LootContext, $ItemStack> {
        getType(): $LootItemFunctionType<$LootItemFunction>;
        get type(): $LootItemFunctionType<$LootItemFunction>;
    }
    export class $ApplyBonusCount$FormulaType extends $Record {
    }
    export class $SetOminousBottleAmplifierFunction extends $LootItemConditionalFunction {
        amplifier(): $NumberProvider;
        static setAmplifier(arg0: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetOminousBottleAmplifierFunction>;
    }
    export class $SetContainerLootTable extends $LootItemConditionalFunction {
        static withLootTable(arg0: $BlockEntityType_<never>, arg1: $ResourceKey_<$LootTable>, arg2: number): $LootItemConditionalFunction$Builder<never>;
        static withLootTable(arg0: $BlockEntityType_<never>, arg1: $ResourceKey_<$LootTable>): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetContainerLootTable>;
    }
    export class $SequenceFunction implements $LootItemFunction {
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static of(arg0: $List_<$LootItemFunction>): $SequenceFunction;
        validate(arg0: $ValidationContext): void;
        getType(): $LootItemFunctionType<$SequenceFunction>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        static INLINE_CODEC: $Codec<$SequenceFunction>;
        static CODEC: $MapCodec<$SequenceFunction>;
        get type(): $LootItemFunctionType<$SequenceFunction>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ListOperation$ReplaceAll implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$ReplaceAll>;
        static INSTANCE: $ListOperation$ReplaceAll;
    }
    export class $SetItemCountFunction extends $LootItemConditionalFunction {
        static setCount(arg0: $NumberProvider_, arg1: boolean): $LootItemConditionalFunction$Builder<never>;
        static setCount(arg0: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetItemCountFunction>;
    }
    export class $LootItemFunctions {
        static compose(arg0: $List_<$BiFunction_<$ItemStack, $LootContext, $ItemStack>>): $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static SET_WRITTEN_BOOK_PAGES: $LootItemFunctionType<$SetWrittenBookPagesFunction>;
        static ENCHANTED_COUNT_INCREASE: $LootItemFunctionType<$EnchantedCountIncreaseFunction>;
        static COPY_NAME: $LootItemFunctionType<$CopyNameFunction>;
        static SET_LOOT_TABLE: $LootItemFunctionType<$SetContainerLootTable>;
        static EXPLOSION_DECAY: $LootItemFunctionType<$ApplyExplosionDecay>;
        static ROOT_CODEC: $Codec<$LootItemFunction>;
        static SET_CUSTOM_DATA: $LootItemFunctionType<$SetCustomDataFunction>;
        static FURNACE_SMELT: $LootItemFunctionType<$SmeltItemFunction>;
        static SET_ATTRIBUTES: $LootItemFunctionType<$SetAttributesFunction>;
        static MODIFY_CONTENTS: $LootItemFunctionType<$ModifyContainerContents>;
        static COPY_COMPONENTS: $LootItemFunctionType<$CopyComponentsFunction>;
        static SET_BOOK_COVER: $LootItemFunctionType<$SetBookCoverFunction>;
        static SET_COMPONENTS: $LootItemFunctionType<$SetComponentsFunction>;
        static ENCHANT_WITH_LEVELS: $LootItemFunctionType<$EnchantWithLevelsFunction>;
        static SET_FIREWORK_EXPLOSION: $LootItemFunctionType<$SetFireworkExplosionFunction>;
        static LIMIT_COUNT: $LootItemFunctionType<$LimitCount>;
        static SET_LORE: $LootItemFunctionType<$SetLoreFunction>;
        static SEQUENCE: $LootItemFunctionType<$SequenceFunction>;
        static REFERENCE: $LootItemFunctionType<$FunctionReference>;
        static SET_DAMAGE: $LootItemFunctionType<$SetItemDamageFunction>;
        static EXPLORATION_MAP: $LootItemFunctionType<$ExplorationMapFunction>;
        static SET_CUSTOM_MODEL_DATA: $LootItemFunctionType<$SetCustomModelDataFunction>;
        static SET_ENCHANTMENTS: $LootItemFunctionType<$SetEnchantmentsFunction>;
        static APPLY_BONUS: $LootItemFunctionType<$ApplyBonusCount>;
        static CODEC: $Codec<$Holder<$LootItemFunction>>;
        static FILL_PLAYER_HEAD: $LootItemFunctionType<$FillPlayerHead>;
        static SET_CONTENTS: $LootItemFunctionType<$SetContainerContents>;
        static SET_WRITABLE_BOOK_PAGES: $LootItemFunctionType<$SetWritableBookPagesFunction>;
        static SET_POTION: $LootItemFunctionType<$SetPotionFunction>;
        static COPY_CUSTOM_DATA: $LootItemFunctionType<$CopyCustomDataFunction>;
        static SET_COUNT: $LootItemFunctionType<$SetItemCountFunction>;
        static SET_NAME: $LootItemFunctionType<$SetNameFunction>;
        static TOGGLE_TOOLTIPS: $LootItemFunctionType<$ToggleTooltips>;
        static SET_FIREWORKS: $LootItemFunctionType<$SetFireworksFunction>;
        static IDENTITY: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static SET_BANNER_PATTERN: $LootItemFunctionType<$SetBannerPatternFunction>;
        static SET_ITEM: $LootItemFunctionType<$SetItemFunction>;
        static COPY_STATE: $LootItemFunctionType<$CopyBlockState>;
        static SET_STEW_EFFECT: $LootItemFunctionType<$SetStewEffectFunction>;
        static SET_OMINOUS_BOTTLE_AMPLIFIER: $LootItemFunctionType<$SetOminousBottleAmplifierFunction>;
        static ENCHANT_RANDOMLY: $LootItemFunctionType<$EnchantRandomlyFunction>;
        static SET_INSTRUMENT: $LootItemFunctionType<$SetInstrumentFunction>;
        static TYPED_CODEC: $Codec<$LootItemFunction>;
        static FILTERED: $LootItemFunctionType<$FilteredFunction>;
        constructor();
    }
    export class $LootItemConditionalFunction$Builder<T extends $LootItemConditionalFunction$Builder<T>> implements $LootItemFunction$Builder, $ConditionUserBuilder<T> {
        unwrap(): T;
        getConditions(): $List<$LootItemCondition>;
        getThis(): T;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        when(arg0: $LootItemCondition$Builder_): T;
        constructor();
        get conditions(): $List<$LootItemCondition>;
        get this(): T;
    }
    export class $SetCustomDataFunction extends $LootItemConditionalFunction {
        /**
         * @deprecated
         */
        static setCustomData(arg0: $CompoundTag_): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetCustomDataFunction>;
        static set customData(value: $CompoundTag_);
    }
    export class $SetLoreFunction extends $LootItemConditionalFunction {
        static setLore(): $SetLoreFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetLoreFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$Component_>, arg2: $ListOperation, arg3: ($LootContext$EntityTarget_) | undefined);
    }
    export class $SetFireworkExplosionFunction extends $LootItemConditionalFunction {
        static DEFAULT_VALUE: $FireworkExplosion;
        trail: (boolean) | undefined;
        twinkle: (boolean) | undefined;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetFireworkExplosionFunction>;
        fadeColors: ($IntList) | undefined;
        shape: ($FireworkExplosion$Shape) | undefined;
        colors: ($IntList) | undefined;
        constructor(arg0: $List_<$LootItemCondition>, arg1: ($FireworkExplosion$Shape_) | undefined, arg2: ($IntList) | undefined, arg3: ($IntList) | undefined, arg4: (boolean) | undefined, arg5: (boolean) | undefined);
    }
    export class $SetFireworksFunction extends $LootItemConditionalFunction {
        static DEFAULT_VALUE: $Fireworks;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetFireworksFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: ($ListOperation$StandAlone_<$FireworkExplosion_>) | undefined, arg2: (number) | undefined);
    }
    export class $CopyBlockState$Builder extends $LootItemConditionalFunction$Builder<$CopyBlockState$Builder> {
        copy(arg0: $Property<never>): $CopyBlockState$Builder;
        constructor(arg0: $Block_);
    }
    export class $CopyCustomDataFunction$Builder extends $LootItemConditionalFunction$Builder<$CopyCustomDataFunction$Builder> {
        copy(arg0: string, arg1: string): $CopyCustomDataFunction$Builder;
        copy(arg0: string, arg1: string, arg2: $CopyCustomDataFunction$MergeStrategy_): $CopyCustomDataFunction$Builder;
        constructor(arg0: $NbtProvider);
    }
    export class $EnchantedCountIncreaseFunction extends $LootItemConditionalFunction {
        static lootingMultiplier(arg0: $HolderLookup$Provider, arg1: $NumberProvider_): $EnchantedCountIncreaseFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$EnchantedCountIncreaseFunction>;
        static NO_LIMIT: number;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $Holder_<$Enchantment>, arg2: $NumberProvider_, arg3: number);
    }
    export class $ListOperation {
        static codec(arg0: number): $MapCodec<$ListOperation>;
        static UNLIMITED_CODEC: $MapCodec<$ListOperation>;
    }
    export interface $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
    }
    export class $SetNameFunction$Target extends $Enum<$SetNameFunction$Target> implements $StringRepresentable {
        static values(): $SetNameFunction$Target[];
        static valueOf(arg0: string): $SetNameFunction$Target;
        component(): $DataComponentType<$Component>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SetNameFunction$Target>;
        static CUSTOM_NAME: $SetNameFunction$Target;
        static ITEM_NAME: $SetNameFunction$Target;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SetNameFunction$Target}.
     */
    export type $SetNameFunction$Target_ = "custom_name" | "item_name";
    export class $ApplyBonusCount$UniformBonusCount extends $Record implements $ApplyBonusCount$Formula {
    }
    export class $LootItemConditionalFunction$DummyBuilder extends $LootItemConditionalFunction$Builder<$LootItemConditionalFunction$DummyBuilder> {
    }
    export class $SetAttributesFunction$Builder extends $LootItemConditionalFunction$Builder<$SetAttributesFunction$Builder> {
        withModifier(arg0: $SetAttributesFunction$ModifierBuilder): $SetAttributesFunction$Builder;
        constructor(arg0: boolean);
        constructor();
    }
    export class $EnchantedCountIncreaseFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantedCountIncreaseFunction$Builder> {
        setLimit(arg0: number): $EnchantedCountIncreaseFunction$Builder;
        getThis(): $EnchantedCountIncreaseFunction$Builder;
        constructor(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_);
        set limit(value: number);
        get this(): $EnchantedCountIncreaseFunction$Builder;
    }
    export class $CopyComponentsFunction$Builder extends $LootItemConditionalFunction$Builder<$CopyComponentsFunction$Builder> {
        include(arg0: $DataComponentType_<never>): $CopyComponentsFunction$Builder;
        exclude(arg0: $DataComponentType_<never>): $CopyComponentsFunction$Builder;
        constructor(arg0: $CopyComponentsFunction$Source_);
    }
    export class $SetNameFunction extends $LootItemConditionalFunction {
        static setName(arg0: $Component_, arg1: $SetNameFunction$Target_): $LootItemConditionalFunction$Builder<never>;
        static setName(arg0: $Component_, arg1: $SetNameFunction$Target_, arg2: $LootContext$EntityTarget_): $LootItemConditionalFunction$Builder<never>;
        static createResolver(arg0: $LootContext, arg1: $LootContext$EntityTarget_): $UnaryOperator<$Component>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetNameFunction>;
    }
    export class $SetContainerContents$Builder extends $LootItemConditionalFunction$Builder<$SetContainerContents$Builder> {
        withEntry(arg0: $LootPoolEntryContainer$Builder<never>): $SetContainerContents$Builder;
        constructor(arg0: $ContainerComponentManipulator<never>);
    }
    export class $CopyCustomDataFunction$MergeStrategy extends $Enum<$CopyCustomDataFunction$MergeStrategy> implements $StringRepresentable {
        static values(): $CopyCustomDataFunction$MergeStrategy[];
        static valueOf(arg0: string): $CopyCustomDataFunction$MergeStrategy;
        merge(arg0: $Tag_, arg1: $NbtPathArgument$NbtPath, arg2: $List_<$Tag_>): void;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyCustomDataFunction$MergeStrategy>;
        static MERGE: $CopyCustomDataFunction$MergeStrategy;
        static REPLACE: $CopyCustomDataFunction$MergeStrategy;
        static APPEND: $CopyCustomDataFunction$MergeStrategy;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyCustomDataFunction$MergeStrategy}.
     */
    export type $CopyCustomDataFunction$MergeStrategy_ = "replace" | "append" | "merge";
    export class $SmeltItemFunction extends $LootItemConditionalFunction {
        static smelted(): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SmeltItemFunction>;
    }
    export class $FilteredFunction extends $LootItemConditionalFunction {
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$FilteredFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $ItemPredicate_, arg2: $LootItemFunction);
    }
    export class $ExplorationMapFunction$Builder extends $LootItemConditionalFunction$Builder<$ExplorationMapFunction$Builder> {
        setDestination(arg0: $TagKey_<$Structure>): $ExplorationMapFunction$Builder;
        setZoom(arg0: number): $ExplorationMapFunction$Builder;
        setMapDecoration(arg0: $Holder_<$MapDecorationType>): $ExplorationMapFunction$Builder;
        setSkipKnownStructures(arg0: boolean): $ExplorationMapFunction$Builder;
        setSearchRadius(arg0: number): $ExplorationMapFunction$Builder;
        constructor();
        set destination(value: $TagKey_<$Structure>);
        set zoom(value: number);
        set mapDecoration(value: $Holder_<$MapDecorationType>);
        set skipKnownStructures(value: boolean);
        set searchRadius(value: number);
    }
    export class $SetStewEffectFunction extends $LootItemConditionalFunction {
        static stewEffect(): $SetStewEffectFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetStewEffectFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$SetStewEffectFunction$EffectEntry_>);
    }
    export class $ListOperation$ReplaceSection extends $Record implements $ListOperation {
        size(): (number) | undefined;
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        offset(): number;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$ReplaceSection>;
        constructor(arg0: number);
        constructor(arg0: number, arg1: (number) | undefined);
    }
    export class $CopyNameFunction$NameSource extends $Enum<$CopyNameFunction$NameSource> implements $StringRepresentable {
        static values(): $CopyNameFunction$NameSource[];
        static valueOf(arg0: string): $CopyNameFunction$NameSource;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyNameFunction$NameSource>;
        static LAST_DAMAGE_PLAYER: $CopyNameFunction$NameSource;
        param: $LootContextParam<never>;
        static BLOCK_ENTITY: $CopyNameFunction$NameSource;
        static THIS: $CopyNameFunction$NameSource;
        static ATTACKING_ENTITY: $CopyNameFunction$NameSource;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyNameFunction$NameSource}.
     */
    export type $CopyNameFunction$NameSource_ = "this" | "attacking_entity" | "last_damage_player" | "block_entity" | string;
    export class $SetAttributesFunction$Modifier extends $Record {
    }
    export class $CopyBlockState extends $LootItemConditionalFunction {
        static copyState(arg0: $Block_): $CopyBlockState$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyBlockState>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $Holder_<$Block>, arg2: $Set_<$Property<never>>);
    }
    export class $SetInstrumentFunction extends $LootItemConditionalFunction {
        static setInstrumentOptions(arg0: $TagKey_<$Instrument>): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetInstrumentFunction>;
        static set instrumentOptions(value: $TagKey_<$Instrument>);
    }
    export class $ListOperation$Insert extends $Record implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        offset(): number;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$Insert>;
        constructor(arg0: number);
    }
    export class $ApplyBonusCount$BinomialWithBonusCount extends $Record implements $ApplyBonusCount$Formula {
    }
    export class $EnchantRandomlyFunction extends $LootItemConditionalFunction {
        static randomApplicableEnchantment(arg0: $HolderLookup$Provider): $EnchantRandomlyFunction$Builder;
        static randomEnchantment(): $EnchantRandomlyFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$EnchantRandomlyFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: ($HolderSet_<$Enchantment>) | undefined, arg2: boolean);
    }
    export class $ModifyContainerContents extends $LootItemConditionalFunction {
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ModifyContainerContents>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $ContainerComponentManipulator<never>, arg2: $LootItemFunction);
    }
    export class $SetComponentsFunction extends $LootItemConditionalFunction {
        static setComponent<T>(arg0: $DataComponentType_<T>, arg1: T): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetComponentsFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $DataComponentPatch_);
    }
    export class $ListOperation$Type extends $Enum<$ListOperation$Type> implements $StringRepresentable {
        static values(): $ListOperation$Type[];
        static valueOf(arg0: string): $ListOperation$Type;
        mapCodec(): $MapCodec<$ListOperation>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ListOperation$Type>;
        static INSERT: $ListOperation$Type;
        static REPLACE_ALL: $ListOperation$Type;
        static APPEND: $ListOperation$Type;
        static REPLACE_SECTION: $ListOperation$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$Type}.
     */
    export type $ListOperation$Type_ = "replace_all" | "replace_section" | "insert" | "append";
    export class $SetBookCoverFunction extends $LootItemConditionalFunction {
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetBookCoverFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: ($Filterable_<string>) | undefined, arg2: (string) | undefined, arg3: (number) | undefined);
    }
    export class $SetBannerPatternFunction$Builder extends $LootItemConditionalFunction$Builder<$SetBannerPatternFunction$Builder> {
        addPattern(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_): $SetBannerPatternFunction$Builder;
        getThis(): $SetBannerPatternFunction$Builder;
        constructor(arg0: boolean);
        get this(): $SetBannerPatternFunction$Builder;
    }
    export class $ApplyBonusCount$Formula {
    }
    export interface $ApplyBonusCount$Formula {
    }
    export class $SetWrittenBookPagesFunction extends $LootItemConditionalFunction {
        apply(arg0: $WrittenBookContent_): $WrittenBookContent;
        static PAGE_CODEC: $Codec<$Component>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetWrittenBookPagesFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$Filterable_<$Component_>>, arg2: $ListOperation);
    }
    export class $ListOperation$Append implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$Append>;
        static INSTANCE: $ListOperation$Append;
    }
    export class $EnchantRandomlyFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantRandomlyFunction$Builder> {
        allowingIncompatibleEnchantments(): $EnchantRandomlyFunction$Builder;
        withOneOf(arg0: $HolderSet_<$Enchantment>): $EnchantRandomlyFunction$Builder;
        getThis(): $EnchantRandomlyFunction$Builder;
        withEnchantment(arg0: $Holder_<$Enchantment>): $EnchantRandomlyFunction$Builder;
        constructor();
        get this(): $EnchantRandomlyFunction$Builder;
    }
    export interface $LootItemFunctionType extends RegistryMarked<RegistryTypes.LootFunctionTypeTag, RegistryTypes.LootFunctionType> {}
    export class $LootItemFunctionType<T extends $LootItemFunction> extends $Record {
        codec(): $MapCodec<T>;
        constructor(arg0: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunctionType}.
     */
    export type $LootItemFunctionType_<T> = RegistryTypes.LootFunctionType;
    export class $ToggleTooltips extends $LootItemConditionalFunction {
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ToggleTooltips>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $Map_<$ToggleTooltips$ComponentToggle_<never>, boolean>);
    }
    export class $SetEnchantmentsFunction extends $LootItemConditionalFunction {
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetEnchantmentsFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $Map_<$Holder_<$Enchantment>, $NumberProvider_>, arg2: boolean);
    }
    export class $SetEnchantmentsFunction$Builder extends $LootItemConditionalFunction$Builder<$SetEnchantmentsFunction$Builder> {
        withEnchantment(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $SetEnchantmentsFunction$Builder;
        constructor();
        constructor(arg0: boolean);
    }
    export class $ApplyBonusCount$OreDrops extends $Record implements $ApplyBonusCount$Formula {
    }
    export class $ToggleTooltips$ComponentToggle<T> extends $Record {
    }
    export class $LootItemConditionalFunction implements $LootItemFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        validate(arg0: $ValidationContext): void;
        getType(): $LootItemFunctionType<$LootItemConditionalFunction>;
        static simpleBuilder(arg0: $Function_<$List<$LootItemCondition>, $LootItemFunction>): $LootItemConditionalFunction$Builder<never>;
        static commonFields<T extends $LootItemConditionalFunction>(arg0: $RecordCodecBuilder$Instance<T>): $Products$P1<$RecordCodecBuilder$Mu<T>, $List<$LootItemCondition>>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        predicates: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootItemCondition>);
        get type(): $LootItemFunctionType<$LootItemConditionalFunction>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $CopyComponentsFunction extends $LootItemConditionalFunction {
        static copyComponents(arg0: $CopyComponentsFunction$Source_): $CopyComponentsFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyComponentsFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $CopyComponentsFunction$Source_, arg2: ($List_<$DataComponentType_<never>>) | undefined, arg3: ($List_<$DataComponentType_<never>>) | undefined);
    }
    export class $ListOperation$StandAlone<T> extends $Record {
        value(): $List<T>;
        apply(arg0: $List_<T>): $List<T>;
        operation(): $ListOperation;
        static codec<T>(arg0: $Codec<T>, arg1: number): $Codec<$ListOperation$StandAlone<T>>;
        constructor(arg0: $List_<T>, arg1: $ListOperation);
    }
    export class $SetCustomModelDataFunction extends $LootItemConditionalFunction {
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetCustomModelDataFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $NumberProvider_);
    }
    export class $CopyComponentsFunction$Source extends $Enum<$CopyComponentsFunction$Source> implements $StringRepresentable {
        get(arg0: $LootContext): $DataComponentMap;
        static values(): $CopyComponentsFunction$Source[];
        static valueOf(arg0: string): $CopyComponentsFunction$Source;
        getSerializedName(): string;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyComponentsFunction$Source>;
        static BLOCK_ENTITY: $CopyComponentsFunction$Source;
        get serializedName(): string;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyComponentsFunction$Source}.
     */
    export type $CopyComponentsFunction$Source_ = "block_entity";
    export class $FillPlayerHead extends $LootItemConditionalFunction {
        static fillPlayerHead(arg0: $LootContext$EntityTarget_): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$FillPlayerHead>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $LootContext$EntityTarget_);
    }
    export class $SetContainerContents extends $LootItemConditionalFunction {
        static setContents(arg0: $ContainerComponentManipulator<never>): $SetContainerContents$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetContainerContents>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $ContainerComponentManipulator<never>, arg2: $List_<$LootPoolEntryContainer>);
        static set contents(value: $ContainerComponentManipulator<never>);
    }
    export class $FunctionReference extends $LootItemConditionalFunction {
        static functionReference(arg0: $ResourceKey_<$LootItemFunction>): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$FunctionReference>;
    }
    export class $SetLoreFunction$Builder extends $LootItemConditionalFunction$Builder<$SetLoreFunction$Builder> {
        setMode(arg0: $ListOperation): $SetLoreFunction$Builder;
        setResolutionContext(arg0: $LootContext$EntityTarget_): $SetLoreFunction$Builder;
        getThis(): $SetLoreFunction$Builder;
        addLine(arg0: $Component_): $SetLoreFunction$Builder;
        constructor();
        set mode(value: $ListOperation);
        set resolutionContext(value: $LootContext$EntityTarget_);
        get this(): $SetLoreFunction$Builder;
    }
    export class $SetItemDamageFunction extends $LootItemConditionalFunction {
        static setDamage(arg0: $NumberProvider_, arg1: boolean): $LootItemConditionalFunction$Builder<never>;
        static setDamage(arg0: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetItemDamageFunction>;
    }
    export class $ToggleTooltips$TooltipWither<T> {
    }
    export interface $ToggleTooltips$TooltipWither<T> {
    }
    /**
     * Values that may be interpreted as {@link $ToggleTooltips$TooltipWither}.
     */
    export type $ToggleTooltips$TooltipWither_<T> = (() => void);
    export class $ExplorationMapFunction extends $LootItemConditionalFunction {
        static makeExplorationMap(): $ExplorationMapFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static DEFAULT_ZOOM: number;
        static CODEC: $MapCodec<$ExplorationMapFunction>;
        static DEFAULT_DECORATION: $Holder<$MapDecorationType>;
        static DEFAULT_SKIP_EXISTING: boolean;
        static DEFAULT_DESTINATION: $TagKey<$Structure>;
        static DEFAULT_SEARCH_RADIUS: number;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $TagKey_<$Structure>, arg2: $Holder_<$MapDecorationType>, arg3: number, arg4: number, arg5: boolean);
    }
    export class $ApplyExplosionDecay extends $LootItemConditionalFunction {
        static explosionDecay(): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ApplyExplosionDecay>;
    }
    export class $SetBannerPatternFunction extends $LootItemConditionalFunction {
        static setBannerPattern(arg0: boolean): $SetBannerPatternFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetBannerPatternFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $BannerPatternLayers_, arg2: boolean);
        static set bannerPattern(value: boolean);
    }
    export class $SetItemFunction extends $LootItemConditionalFunction {
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetItemFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $Holder_<$Item>);
    }
    export class $FunctionUserBuilder<T extends $FunctionUserBuilder<T>> {
    }
    export interface $FunctionUserBuilder<T extends $FunctionUserBuilder<T>> {
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply(arg0: $LootItemFunction$Builder_): T;
        unwrap(): T;
    }
    export class $EnchantWithLevelsFunction extends $LootItemConditionalFunction {
        static enchantWithLevels(arg0: $HolderLookup$Provider, arg1: $NumberProvider_): $EnchantWithLevelsFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$EnchantWithLevelsFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $NumberProvider_, arg2: ($HolderSet_<$Enchantment>) | undefined);
    }
    export class $SetAttributesFunction$ModifierBuilder {
        build(): $SetAttributesFunction$Modifier;
        forSlot(arg0: $EquipmentSlotGroup_): $SetAttributesFunction$ModifierBuilder;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $NumberProvider_);
    }
    export class $SetStewEffectFunction$EffectEntry extends $Record {
    }
    export class $SetWritableBookPagesFunction extends $LootItemConditionalFunction {
        apply(arg0: $WritableBookContent_): $WritableBookContent;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetWritableBookPagesFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$Filterable_<string>>, arg2: $ListOperation);
    }
    export class $CopyNameFunction extends $LootItemConditionalFunction {
        static copyName(arg0: $CopyNameFunction$NameSource_): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyNameFunction>;
    }
    export class $CopyCustomDataFunction$CopyOperation extends $Record {
    }
}
