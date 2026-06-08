import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List, $Map_, $List_, $Map, $Set } from "@package/java/util";
import { $StatePropertiesPredicate_, $StatePropertiesPredicate, $EntityPredicate$Builder, $LocationPredicate, $ItemPredicate, $DamageSourcePredicate_, $LocationPredicate$Builder, $ItemPredicate$Builder, $StatePropertiesPredicate$Builder, $ItemPredicate_, $EntityPredicate_, $DamageSourcePredicate$Builder, $LocationPredicate_, $EntityPredicate, $DamageSourcePredicate } from "@package/net/minecraft/advancements/critereon";
import { $Predicate, $Function_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LevelBasedValue, $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Iterable_, $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContextUser, $ValidationContext, $LootContext, $IntRange, $LootContext$EntityTarget, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/predicates" {
    export class $WeatherCheck$Builder implements $LootItemCondition$Builder {
        build(): $WeatherCheck;
        setThundering(arg0: boolean): $WeatherCheck$Builder;
        setRaining(arg0: boolean): $WeatherCheck$Builder;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        constructor();
        set thundering(value: boolean);
        set raining(value: boolean);
    }
    export class $WeatherCheck extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        static weather(): $WeatherCheck$Builder;
        isRaining(): (boolean) | undefined;
        isThundering(): (boolean) | undefined;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$WeatherCheck>;
        constructor(arg0: (boolean) | undefined, arg1: (boolean) | undefined);
        get type(): $LootItemConditionType;
        get raining(): (boolean) | undefined;
        get thundering(): (boolean) | undefined;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootItemBlockStatePropertyCondition$Builder implements $LootItemCondition$Builder {
        setProperties(arg0: $StatePropertiesPredicate$Builder): $LootItemBlockStatePropertyCondition$Builder;
        build(): $LootItemCondition;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        constructor(arg0: $Block_);
        set properties(value: $StatePropertiesPredicate$Builder);
    }
    export class $BonusLevelTableCondition extends $Record implements $LootItemCondition {
        values(): $List<number>;
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        enchantment(): $Holder<$Enchantment>;
        static bonusLevelFlatChance(arg0: $Holder_<$Enchantment>, ...arg1: number[]): $LootItemCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$BonusLevelTableCondition>;
        constructor(arg0: $Holder_<$Enchantment>, arg1: $List_<number>);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootItemRandomChanceWithEnchantedBonusCondition extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        unenchantedChance(): number;
        enchantedChance(): $LevelBasedValue;
        static randomChanceAndLootingBoost(arg0: $HolderLookup$Provider, arg1: number, arg2: number): $LootItemCondition$Builder;
        enchantment(): $Holder<$Enchantment>;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemRandomChanceWithEnchantedBonusCondition>;
        constructor(arg0: number, arg1: $LevelBasedValue, arg2: $Holder_<$Enchantment>);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $EntityHasScoreCondition$Builder implements $LootItemCondition$Builder {
        build(): $LootItemCondition;
        withScore(arg0: string, arg1: $IntRange): $EntityHasScoreCondition$Builder;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        constructor(arg0: $LootContext$EntityTarget_);
    }
    export class $MatchTool extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): ($ItemPredicate) | undefined;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static toolMatches(arg0: $ItemPredicate$Builder): $LootItemCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$MatchTool>;
        constructor(arg0: ($ItemPredicate_) | undefined);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $DamageSourceCondition extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): ($DamageSourcePredicate) | undefined;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static hasDamageSource(arg0: $DamageSourcePredicate$Builder): $LootItemCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$DamageSourceCondition>;
        constructor(arg0: ($DamageSourcePredicate_) | undefined);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootItemEntityPropertyCondition extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): ($EntityPredicate) | undefined;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        entityTarget(): $LootContext$EntityTarget;
        static entityPresent(arg0: $LootContext$EntityTarget_): $LootItemCondition$Builder;
        static hasProperties(arg0: $LootContext$EntityTarget_, arg1: $EntityPredicate_): $LootItemCondition$Builder;
        static hasProperties(arg0: $LootContext$EntityTarget_, arg1: $EntityPredicate$Builder): $LootItemCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemEntityPropertyCondition>;
        constructor(arg0: ($EntityPredicate_) | undefined, arg1: $LootContext$EntityTarget_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootItemConditions {
        static ENTITY_PROPERTIES: $LootItemConditionType;
        static TIME_CHECK: $LootItemConditionType;
        static RANDOM_CHANCE: $LootItemConditionType;
        static DAMAGE_SOURCE_PROPERTIES: $LootItemConditionType;
        static ALL_OF: $LootItemConditionType;
        static MATCH_TOOL: $LootItemConditionType;
        static ANY_OF: $LootItemConditionType;
        static ENTITY_SCORES: $LootItemConditionType;
        static WEATHER_CHECK: $LootItemConditionType;
        static VALUE_CHECK: $LootItemConditionType;
        static TABLE_BONUS: $LootItemConditionType;
        static BLOCK_STATE_PROPERTY: $LootItemConditionType;
        static REFERENCE: $LootItemConditionType;
        static INVERTED: $LootItemConditionType;
        static LOCATION_CHECK: $LootItemConditionType;
        static RANDOM_CHANCE_WITH_ENCHANTED_BONUS: $LootItemConditionType;
        static KILLED_BY_PLAYER: $LootItemConditionType;
        static SURVIVES_EXPLOSION: $LootItemConditionType;
        static ENCHANTMENT_ACTIVE_CHECK: $LootItemConditionType;
        constructor();
    }
    export class $LootItemConditionType extends $Record {
        codec(): $MapCodec<$LootItemCondition>;
        constructor(arg0: $MapCodec_<$LootItemCondition>);
    }
    /**
     * Values that may be interpreted as {@link $LootItemConditionType}.
     */
    export type $LootItemConditionType_ = RegistryTypes.LootConditionType;
    export class $AllOfCondition$Builder extends $CompositeLootItemCondition$Builder {
        constructor(...arg0: $LootItemCondition$Builder_[]);
    }
    export interface $LootItemConditionType extends RegistryMarked<RegistryTypes.LootConditionTypeTag, RegistryTypes.LootConditionType> {}
    export class $LootItemRandomChanceCondition extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        chance(): $NumberProvider;
        static randomChance(arg0: $NumberProvider_): $LootItemCondition$Builder;
        static randomChance(arg0: number): $LootItemCondition$Builder;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemRandomChanceCondition>;
        constructor(arg0: $NumberProvider_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $EnchantmentActiveCheck extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        active(): boolean;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static enchantmentInactiveCheck(): $LootItemCondition$Builder;
        static enchantmentActiveCheck(): $LootItemCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EnchantmentActiveCheck>;
        constructor(arg0: boolean);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $TimeCheck extends $Record implements $LootItemCondition {
        value(): $IntRange;
        test(arg0: $LootContext): boolean;
        static time(arg0: $IntRange): $TimeCheck$Builder;
        getType(): $LootItemConditionType;
        period(): (number) | undefined;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$TimeCheck>;
        constructor(arg0: (number) | undefined, arg1: $IntRange);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
    }
    export interface $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
        unwrap(): T;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        when(arg0: $LootItemCondition$Builder_): T;
    }
    export class $CompositeLootItemCondition implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        validate(arg0: $ValidationContext): void;
        static createCodec<T extends $CompositeLootItemCondition>(arg0: $Function_<$List<$LootItemCondition>, T>): $MapCodec<T>;
        static createInlineCodec<T extends $CompositeLootItemCondition>(arg0: $Function_<$List<$LootItemCondition>, T>): $Codec<T>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        terms: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $Predicate_<$LootContext>);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ExplosionCondition implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static survivesExplosion(): $LootItemCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ExplosionCondition>;
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootItemCondition {
        static CODEC: $Codec<$Holder<$LootItemCondition>>;
        static DIRECT_CODEC: $Codec<$LootItemCondition>;
        static TYPED_CODEC: $Codec<$LootItemCondition>;
    }
    export interface $LootItemCondition extends $LootContextUser, $Predicate<$LootContext> {
        getType(): $LootItemConditionType;
        get type(): $LootItemConditionType;
    }
    export class $AnyOfCondition$Builder extends $CompositeLootItemCondition$Builder {
        constructor(...arg0: $LootItemCondition$Builder_[]);
    }
    export class $InvertedLootItemCondition extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        validate(arg0: $ValidationContext): void;
        getType(): $LootItemConditionType;
        static invert(arg0: $LootItemCondition$Builder_): $LootItemCondition$Builder;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        term(): $LootItemCondition;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$InvertedLootItemCondition>;
        constructor(arg0: $LootItemCondition);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootItemBlockStatePropertyCondition extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        properties(): ($StatePropertiesPredicate) | undefined;
        getType(): $LootItemConditionType;
        block(): $Holder<$Block>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static hasBlockStateProperties(arg0: $Block_): $LootItemBlockStatePropertyCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemBlockStatePropertyCondition>;
        constructor(arg0: $Holder_<$Block>, arg1: ($StatePropertiesPredicate_) | undefined);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $TimeCheck$Builder implements $LootItemCondition$Builder {
        setPeriod(arg0: number): $TimeCheck$Builder;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        build(): $LootItemCondition;
        constructor(arg0: $IntRange);
        set period(value: number);
    }
    export class $LootItemCondition$Builder {
    }
    export interface $LootItemCondition$Builder {
        build(): $LootItemCondition;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
    }
    /**
     * Values that may be interpreted as {@link $LootItemCondition$Builder}.
     */
    export type $LootItemCondition$Builder_ = (() => $LootItemCondition);
    export class $AllOfCondition extends $CompositeLootItemCondition {
        static allOf(...arg0: $LootItemCondition$Builder_[]): $AllOfCondition$Builder;
        static allOf(arg0: $List_<$LootItemCondition>): $AllOfCondition;
        static INLINE_CODEC: $Codec<$AllOfCondition>;
        static CODEC: $MapCodec<$AllOfCondition>;
        terms: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootItemCondition>);
    }
    export class $EntityHasScoreCondition extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        entityTarget(): $LootContext$EntityTarget;
        hasScore(arg0: $LootContext, arg1: $Entity, arg2: $Scoreboard, arg3: string, arg4: $IntRange): boolean;
        scores(): $Map<string, $IntRange>;
        static hasScores(arg0: $LootContext$EntityTarget_): $EntityHasScoreCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EntityHasScoreCondition>;
        constructor(arg0: $Map_<string, $IntRange>, arg1: $LootContext$EntityTarget_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ConditionReference extends $Record implements $LootItemCondition {
        name(): $ResourceKey<$LootItemCondition>;
        test(arg0: $LootContext): boolean;
        validate(arg0: $ValidationContext): void;
        getType(): $LootItemConditionType;
        static conditionReference(arg0: $ResourceKey_<$LootItemCondition>): $LootItemCondition$Builder;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ConditionReference>;
        constructor(arg0: $ResourceKey_<$LootItemCondition>);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootItemKilledByPlayerCondition implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        getType(): $LootItemConditionType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static killedByPlayer(): $LootItemCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemKilledByPlayerCondition>;
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $AnyOfCondition extends $CompositeLootItemCondition {
        static anyOf(...arg0: $LootItemCondition$Builder_[]): $AnyOfCondition$Builder;
        static CODEC: $MapCodec<$AnyOfCondition>;
        terms: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootItemCondition>);
    }
    export class $LocationCheck extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        offset(): $BlockPos;
        getType(): $LootItemConditionType;
        predicate(): ($LocationPredicate) | undefined;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static checkLocation(arg0: $LocationPredicate$Builder): $LootItemCondition$Builder;
        static checkLocation(arg0: $LocationPredicate$Builder, arg1: $BlockPos_): $LootItemCondition$Builder;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LocationCheck>;
        constructor(arg0: ($LocationPredicate_) | undefined, arg1: $BlockPos_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ValueCheckCondition extends $Record implements $LootItemCondition {
        test(arg0: $LootContext): boolean;
        provider(): $NumberProvider;
        getType(): $LootItemConditionType;
        range(): $IntRange;
        static hasValue(arg0: $NumberProvider_, arg1: $IntRange): $LootItemCondition$Builder;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ValueCheckCondition>;
        constructor(arg0: $NumberProvider_, arg1: $IntRange);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $CompositeLootItemCondition$Builder implements $LootItemCondition$Builder {
        create(arg0: $List_<$LootItemCondition>): $LootItemCondition;
        build(): $LootItemCondition;
        addTerm(arg0: $LootItemCondition$Builder_): void;
        or(arg0: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(arg0: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        constructor(...arg0: $LootItemCondition$Builder_[]);
    }
}
