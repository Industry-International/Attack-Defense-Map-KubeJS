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
    export class $LootPoolEntryContainer implements $ComposableEntryContainer {
        validate(arg0: $ValidationContext): void;
        getType(): $LootPoolEntryType;
        canRun(arg0: $LootContext): boolean;
        static commonFields<T extends $LootPoolEntryContainer>(arg0: $RecordCodecBuilder$Instance<T>): $Products$P1<$RecordCodecBuilder$Mu<T>, $List<$LootItemCondition>>;
        conditions: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootItemCondition>);
        get type(): $LootPoolEntryType;
    }
    export class $LootPoolSingletonContainer extends $LootPoolEntryContainer {
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        static simpleBuilder(arg0: $LootPoolSingletonContainer$EntryConstructor_): $LootPoolSingletonContainer$Builder<never>;
        static singletonFields<T extends $LootPoolSingletonContainer>(arg0: $RecordCodecBuilder$Instance<T>): $Products$P4<$RecordCodecBuilder$Mu<T>, number, number, $List<$LootItemCondition>, $List<$LootItemFunction>>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(arg0: number, arg1: number, arg2: $List_<$LootItemCondition>, arg3: $List_<$LootItemFunction>);
    }
    export class $EntryGroup$Builder extends $LootPoolEntryContainer$Builder<$EntryGroup$Builder> {
        getThis(): $EntryGroup$Builder;
        constructor(...arg0: $LootPoolEntryContainer$Builder<never>[]);
        get this(): $EntryGroup$Builder;
    }
    export class $NestedLootTable extends $LootPoolSingletonContainer {
        static lootTableReference(arg0: $ResourceKey_<$LootTable>): $LootPoolSingletonContainer$Builder<never>;
        static inlineLootTable(arg0: $LootTable): $LootPoolSingletonContainer$Builder<never>;
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
        constructor(...arg0: $LootPoolEntryContainer$Builder<never>[]);
    }
    export class $DynamicLoot extends $LootPoolSingletonContainer {
        static dynamicEntry(arg0: $ResourceLocation_): $LootPoolSingletonContainer$Builder<never>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static CODEC: $MapCodec<$DynamicLoot>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $CompositeEntryBase extends $LootPoolEntryContainer {
        compose(arg0: $List_<$ComposableEntryContainer_>): $ComposableEntryContainer;
        static createCodec<T extends $CompositeEntryBase>(arg0: $CompositeEntryBase$CompositeEntryConstructor_<T>): $MapCodec<T>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>);
    }
    export class $AlternativesEntry extends $CompositeEntryBase {
        static alternatives(...arg0: $LootPoolEntryContainer$Builder<never>[]): $AlternativesEntry$Builder;
        static alternatives<E>(arg0: $Collection_<E>, arg1: $Function_<E, $LootPoolEntryContainer$Builder<never>>): $AlternativesEntry$Builder;
        static CODEC: $MapCodec<$AlternativesEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>);
    }
    export class $TagEntry extends $LootPoolSingletonContainer {
        static tagContents(arg0: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        static expandTag(arg0: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static CODEC: $MapCodec<$TagEntry>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $LootItem extends $LootPoolSingletonContainer implements $LootItemAccessor {
        static lootTableItem(arg0: $ItemLike_): $LootPoolSingletonContainer$Builder<never>;
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
    export class $LootPoolEntry {
    }
    export interface $LootPoolEntry {
        getWeight(arg0: number): number;
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
    }
    export class $LootPoolSingletonContainer$Builder<T extends $LootPoolSingletonContainer$Builder<T>> extends $LootPoolEntryContainer$Builder<T> implements $FunctionUserBuilder<T> {
        getFunctions(): $List<$LootItemFunction>;
        setQuality(arg0: number): T;
        setWeight(arg0: number): T;
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply(arg0: $LootItemFunction$Builder_): T;
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
        constructor(...arg0: $LootPoolEntryContainer$Builder<never>[]);
        get this(): $SequentialEntry$Builder;
    }
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
        create(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>): T;
    }
    /**
     * Values that may be interpreted as {@link $CompositeEntryBase$CompositeEntryConstructor}.
     */
    export type $CompositeEntryBase$CompositeEntryConstructor_<T> = ((arg0: $List<$LootPoolEntryContainer>, arg1: $List<$LootItemCondition>) => T);
    export class $SequentialEntry extends $CompositeEntryBase {
        static sequential(...arg0: $LootPoolEntryContainer$Builder<never>[]): $SequentialEntry$Builder;
        static CODEC: $MapCodec<$SequentialEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>);
    }
    export class $ComposableEntryContainer {
    }
    export interface $ComposableEntryContainer {
    }
    /**
     * Values that may be interpreted as {@link $ComposableEntryContainer}.
     */
    export type $ComposableEntryContainer_ = (() => void);
    export class $LootPoolEntryContainer$Builder<T extends $LootPoolEntryContainer$Builder<T>> implements $ConditionUserBuilder<T> {
        append(arg0: $LootPoolEntryContainer$Builder<never>): $EntryGroup$Builder;
        unwrap(): T;
        build(): $LootPoolEntryContainer;
        getConditions(): $List<$LootItemCondition>;
        then(arg0: $LootPoolEntryContainer$Builder<never>): $SequentialEntry$Builder;
        getThis(): T;
        otherwise(arg0: $LootPoolEntryContainer$Builder<never>): $AlternativesEntry$Builder;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        when(arg0: $LootItemCondition$Builder_): T;
        constructor();
        get conditions(): $List<$LootItemCondition>;
        get this(): T;
    }
    export class $EntryGroup extends $CompositeEntryBase {
        static list(...arg0: $LootPoolEntryContainer$Builder<never>[]): $EntryGroup$Builder;
        static CODEC: $MapCodec<$EntryGroup>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>);
    }
}
