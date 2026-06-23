import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $LootItemAccessor } from "@package/com/jesz/createdieselgenerators/mixins";
import { $FunctionUserBuilder, $LootItemFunction$Builder, $LootItemFunction$Builder_, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Collection_, $List_ } from "@package/java/util";
import { $Products$P1, $Products$P4 } from "@package/com/mojang/datafixers";
import { $Function_, $Consumer_, $BiFunction } from "@package/java/util/function";
import { $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Iterable_, $Record } from "@package/java/lang";
import { $ValidationContext, $LootContext, $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/entries" {
    /**
     * Base class for loot pool entry containers. This class just stores a list of conditions that are checked before the entry generates loot.
     */
    export class $LootPoolEntryContainer implements $ComposableEntryContainer {
        validate(validationContext: $ValidationContext): void;
        getType(): $LootPoolEntryType;
        canRun(lootContext: $LootContext): boolean;
        static commonFields<T extends $LootPoolEntryContainer>(instance: $RecordCodecBuilder$Instance<T>): $Products$P1<$RecordCodecBuilder$Mu<T>, $List<$LootItemCondition>>;
        conditions: $List<$LootItemCondition>;
        constructor(conditions: $List_<$LootItemCondition>);
        get type(): $LootPoolEntryType;
    }
    /**
     * A LootPoolEntryContainer that expands into a single LootPoolEntry.
     */
    export class $LootPoolSingletonContainer extends $LootPoolEntryContainer {
        /**
         * Generate the loot stacks of this entry.
         * Contrary to the method name this method does not always generate one stack, it can also generate zero or multiple stacks.
         */
        createItemStack(stackConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): void;
        static simpleBuilder(entryBuilder: $LootPoolSingletonContainer$EntryConstructor_): $LootPoolSingletonContainer$Builder<never>;
        static singletonFields<T extends $LootPoolSingletonContainer>(instance: $RecordCodecBuilder$Instance<T>): $Products$P4<$RecordCodecBuilder$Mu<T>, number, number, $List<$LootItemCondition>, $List<$LootItemFunction>>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
    }
    export class $EntryGroup$Builder extends $LootPoolEntryContainer$Builder<$EntryGroup$Builder> {
        getThis(): $EntryGroup$Builder;
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
        get this(): $EntryGroup$Builder;
    }
    export class $NestedLootTable extends $LootPoolSingletonContainer {
        static lootTableReference(lootTable: $ResourceKey_<$LootTable>): $LootPoolSingletonContainer$Builder<never>;
        static inlineLootTable(lootTable: $LootTable): $LootPoolSingletonContainer$Builder<never>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static CODEC: $MapCodec<$NestedLootTable>;
        functions: $List<$LootItemFunction>;
        contents: $Either<$ResourceKey<$LootTable>, $LootTable>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    /**
     * A loot pool entry that does not generate any items.
     */
    export class $EmptyLootItem extends $LootPoolSingletonContainer {
        static emptyItem(): $LootPoolSingletonContainer$Builder<never>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static CODEC: $MapCodec<$EmptyLootItem>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $LootPoolSingletonContainer$EntryConstructor {
    }
    export interface $LootPoolSingletonContainer$EntryConstructor {
    }
    /**
     * Values that may be interpreted as {@link $LootPoolSingletonContainer$EntryConstructor}.
     */
    export type $LootPoolSingletonContainer$EntryConstructor_ = (() => void);
    export class $AlternativesEntry$Builder extends $LootPoolEntryContainer$Builder<$AlternativesEntry$Builder> {
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
    }
    /**
     * A loot pool entry container that will generate the dynamic drops with a given name.
     * 
     * @see LootContext.DynamicDrops
     */
    export class $DynamicLoot extends $LootPoolSingletonContainer {
        static dynamicEntry(dynamicDropsName: $ResourceLocation_): $LootPoolSingletonContainer$Builder<never>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static CODEC: $MapCodec<$DynamicLoot>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    /**
     * Base class for loot pool entry containers that delegate to one or more children.
     * The actual functionality is provided by composing the children into one composed container (see `#compose`).
     */
    export class $CompositeEntryBase extends $LootPoolEntryContainer {
        compose(children: $List_<$ComposableEntryContainer_>): $ComposableEntryContainer;
        static createCodec<T extends $CompositeEntryBase>(factory: $CompositeEntryBase$CompositeEntryConstructor_<T>): $MapCodec<T>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
    /**
     * A composite loot pool entry container that expands all its children in order until one of them succeeds.
     * This container succeeds if one of its children succeeds.
     */
    export class $AlternativesEntry extends $CompositeEntryBase {
        static alternatives(...children: $LootPoolEntryContainer$Builder<never>[]): $AlternativesEntry$Builder;
        static alternatives<E>(childrenSources: $Collection_<E>, toChildrenFunction: $Function_<E, $LootPoolEntryContainer$Builder<never>>): $AlternativesEntry$Builder;
        static CODEC: $MapCodec<$AlternativesEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
    /**
     * A loot pool entry container that generates based on an item tag.
     * If `expand` is set to true, it will expand into separate LootPoolEntries for every item in the tag, otherwise it will simply generate all items in the tag.
     */
    export class $TagEntry extends $LootPoolSingletonContainer {
        static expandTag(tag: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        static tagContents(tag: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static CODEC: $MapCodec<$TagEntry>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    /**
     * A loot pool entry that always generates a given item.
     */
    export class $LootItem extends $LootPoolSingletonContainer implements $LootItemAccessor {
        static lootTableItem(item: $ItemLike_): $LootPoolSingletonContainer$Builder<never>;
        getItem(): $Holder<$Item>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static CODEC: $MapCodec<$LootItem>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        get item(): $Holder<$Item>;
    }
    /**
     * A loot pool entry generates zero or more stacks of items based on the LootContext.
     * Each loot pool entry has a weight that determines how likely it is to be generated within a given loot pool.
     */
    export class $LootPoolEntry {
    }
    export interface $LootPoolEntry {
        /**
         * Generate the loot stacks of this entry.
         * Contrary to the method name this method does not always generate one stack, it can also generate zero or multiple stacks.
         */
        createItemStack(stackConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): void;
        /**
         * Gets the effective weight based on the loot entry's weight and quality multiplied by looter's luck.
         */
        getWeight(luck: number): number;
    }
    export class $LootPoolSingletonContainer$Builder<T extends $LootPoolSingletonContainer$Builder<T>> extends $LootPoolEntryContainer$Builder<T> implements $FunctionUserBuilder<T> {
        getFunctions(): $List<$LootItemFunction>;
        setQuality(quality: number): T;
        setWeight(quality: number): T;
        apply<E>(builderSources: E[], toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): T;
        apply<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): T;
        apply(functionBuilder: $LootItemFunction$Builder_): T;
        unwrap(): T;
        weight: number;
        quality: number;
        constructor();
        get functions(): $List<$LootItemFunction>;
    }
    export class $LootPoolSingletonContainer$DummyBuilder extends $LootPoolSingletonContainer$Builder<$LootPoolSingletonContainer$DummyBuilder> {
        weight: number;
        quality: number;
    }
    /**
     * Registration for `LootPoolEntryType`.
     */
    export class $LootPoolEntries {
        static ITEM: $LootPoolEntryType;
        static GROUP: $LootPoolEntryType;
        static CODEC: $Codec<$LootPoolEntryContainer>;
        static SEQUENCE: $LootPoolEntryType;
        static ALTERNATIVES: $LootPoolEntryType;
        static LOOT_TABLE: $LootPoolEntryType;
        static TAG: $LootPoolEntryType;
        static EMPTY: $LootPoolEntryType;
        static DYNAMIC: $LootPoolEntryType;
        constructor();
    }
    export class $LootPoolSingletonContainer$EntryBase implements $LootPoolEntry {
    }
    export interface $LootPoolEntryType extends RegistryMarked<RegistryTypes.LootPoolEntryTypeTag, RegistryTypes.LootPoolEntryType> {}
    export class $SequentialEntry$Builder extends $LootPoolEntryContainer$Builder<$SequentialEntry$Builder> {
        getThis(): $SequentialEntry$Builder;
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
        get this(): $SequentialEntry$Builder;
    }
    /**
     * The SerializerType for `LootPoolEntryContainer`.
     */
    export class $LootPoolEntryType extends $Record {
        codec(): $MapCodec<$LootPoolEntryContainer>;
        constructor(arg0: $MapCodec_<$LootPoolEntryContainer>);
    }
    /**
     * Values that may be interpreted as {@link $LootPoolEntryType}.
     */
    export type $LootPoolEntryType_ = RegistryTypes.LootPoolEntryType;
    export class $CompositeEntryBase$CompositeEntryConstructor<T extends $CompositeEntryBase> {
    }
    export interface $CompositeEntryBase$CompositeEntryConstructor<T extends $CompositeEntryBase> {
        create(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>): T;
    }
    /**
     * Values that may be interpreted as {@link $CompositeEntryBase$CompositeEntryConstructor}.
     */
    export type $CompositeEntryBase$CompositeEntryConstructor_<T> = ((arg0: $List<$LootPoolEntryContainer>, arg1: $List<$LootItemCondition>) => T);
    /**
     * A composite loot pool entry container that expands all its children in order until one of them fails.
     * This container succeeds if all children succeed.
     */
    export class $SequentialEntry extends $CompositeEntryBase {
        static sequential(...children: $LootPoolEntryContainer$Builder<never>[]): $SequentialEntry$Builder;
        static CODEC: $MapCodec<$SequentialEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
    /**
     * Base interface for loot pool entry containers.
     * A loot pool entry container holds one or more loot pools and will expand into those.
     * Additionally, the container can either succeed or fail, based on its conditions.
     */
    export class $ComposableEntryContainer {
    }
    export interface $ComposableEntryContainer {
    }
    /**
     * Values that may be interpreted as {@link $ComposableEntryContainer}.
     */
    export type $ComposableEntryContainer_ = (() => void);
    export class $LootPoolEntryContainer$Builder<T extends $LootPoolEntryContainer$Builder<T>> implements $ConditionUserBuilder<T> {
        append(childBuilder: $LootPoolEntryContainer$Builder<never>): $EntryGroup$Builder;
        unwrap(): T;
        build(): $LootPoolEntryContainer;
        getConditions(): $List<$LootItemCondition>;
        then(childBuilder: $LootPoolEntryContainer$Builder<never>): $SequentialEntry$Builder;
        getThis(): T;
        otherwise(childBuilder: $LootPoolEntryContainer$Builder<never>): $AlternativesEntry$Builder;
        when<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemCondition$Builder>): T;
        when(conditionBuilder: $LootItemCondition$Builder_): T;
        constructor();
        get conditions(): $List<$LootItemCondition>;
        get this(): T;
    }
    /**
     * A composite loot pool entry container that expands all its children in order.
     * This container always succeeds.
     */
    export class $EntryGroup extends $CompositeEntryBase {
        static list(...children: $LootPoolEntryContainer$Builder<never>[]): $EntryGroup$Builder;
        static CODEC: $MapCodec<$EntryGroup>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
}
