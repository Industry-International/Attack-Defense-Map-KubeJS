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
        setRaining(isRaining: boolean): $WeatherCheck$Builder;
        setThundering(isRaining: boolean): $WeatherCheck$Builder;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        constructor();
        set raining(value: boolean);
        set thundering(value: boolean);
    }
    /**
     * A LootItemCondition that checks whether it currently raining or thundering.
     * Both checks are optional.
     */
    export class $WeatherCheck extends $Record implements $LootItemCondition {
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        static weather(): $WeatherCheck$Builder;
        isRaining(): (boolean) | undefined;
        isThundering(): (boolean) | undefined;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        /**
         * Get the parameters used by this object.
         */
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
        setProperties(statePredicateBuilder: $StatePropertiesPredicate$Builder): $LootItemBlockStatePropertyCondition$Builder;
        build(): $LootItemCondition;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        constructor(block: $Block_);
        set properties(value: $StatePropertiesPredicate$Builder);
    }
    /**
     * A LootItemCondition that provides a random chance based on the level of a certain enchantment on the tool.
     * The chances are given as an array of float values that represent the given chance (0..1) for the enchantment level corresponding to the index.
     * `[0.2, 0.3, 0.6]` would provide a 20% chance for not enchanted, 30% chance for enchanted at level 1 and 60% chance for enchanted at level 2 or above.
     */
    export class $BonusLevelTableCondition extends $Record implements $LootItemCondition {
        values(): $List<number>;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        enchantment(): $Holder<$Enchantment>;
        static bonusLevelFlatChance(enchantment: $Holder_<$Enchantment>, ...values: number[]): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$BonusLevelTableCondition>;
        constructor(arg0: $Holder_<$Enchantment>, arg1: $List_<number>);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootItemRandomChanceWithEnchantedBonusCondition extends $Record implements $LootItemCondition {
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        static randomChanceAndLootingBoost(registries: $HolderLookup$Provider, base: number, perLevelAfterFirst: number): $LootItemCondition$Builder;
        enchantment(): $Holder<$Enchantment>;
        unenchantedChance(): number;
        enchantedChance(): $LevelBasedValue;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
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
        /**
         * Add a check that the score for the given `objectiveName` is within `scoreRange`.
         */
        withScore(objectiveName: string, scoreRange: $IntRange): $EntityHasScoreCondition$Builder;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        constructor(entityTarget: $LootContext$EntityTarget_);
    }
    /**
     * A LootItemCondition that checks the tool against an `ItemPredicate`.
     */
    export class $MatchTool extends $Record implements $LootItemCondition {
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): ($ItemPredicate) | undefined;
        static toolMatches(toolPredicateBuilder: $ItemPredicate$Builder): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$MatchTool>;
        constructor(arg0: ($ItemPredicate_) | undefined);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A LootItemCondition which checks `LootContextParams#ORIGIN` and `LootContextParams#DAMAGE_SOURCE` against a `DamageSourcePredicate`.
     */
    export class $DamageSourceCondition extends $Record implements $LootItemCondition {
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): ($DamageSourcePredicate) | undefined;
        static hasDamageSource(builder: $DamageSourcePredicate$Builder): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$DamageSourceCondition>;
        constructor(arg0: ($DamageSourcePredicate_) | undefined);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A LootItemCondition that checks a given `EntityPredicate` against a given `EntityTarget`.
     */
    export class $LootItemEntityPropertyCondition extends $Record implements $LootItemCondition {
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): ($EntityPredicate) | undefined;
        entityTarget(): $LootContext$EntityTarget;
        static hasProperties(target: $LootContext$EntityTarget_, predicateBuilder: $EntityPredicate$Builder): $LootItemCondition$Builder;
        static hasProperties(target: $LootContext$EntityTarget_, entityPredicate: $EntityPredicate_): $LootItemCondition$Builder;
        static entityPresent(target: $LootContext$EntityTarget_): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemEntityPropertyCondition>;
        constructor(arg0: ($EntityPredicate_) | undefined, arg1: $LootContext$EntityTarget_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Registry for `LootItemConditionType`.
     * 
     * @see LootItemCondition
     */
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
    /**
     * The SerializerType for `LootItemCondition`.
     */
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
    /**
     * A LootItemCondition that succeeds with a given probability.
     */
    export class $LootItemRandomChanceCondition extends $Record implements $LootItemCondition {
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        static randomChance(chance: $NumberProvider_): $LootItemCondition$Builder;
        static randomChance(chance: number): $LootItemCondition$Builder;
        chance(): $NumberProvider;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        /**
         * Get the parameters used by this object.
         */
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
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        active(): boolean;
        static enchantmentActiveCheck(): $LootItemCondition$Builder;
        static enchantmentInactiveCheck(): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EnchantmentActiveCheck>;
        constructor(arg0: boolean);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A LootItemCondition that checks the day time against an `IntRange` after applying an optional modulo division.
     */
    export class $TimeCheck extends $Record implements $LootItemCondition {
        value(): $IntRange;
        test(context: $LootContext): boolean;
        static time(timeRange: $IntRange): $TimeCheck$Builder;
        getType(): $LootItemConditionType;
        period(): (number) | undefined;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$TimeCheck>;
        constructor(arg0: (number) | undefined, arg1: $IntRange);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Base interface for builders that can accept loot conditions.
     * 
     * @see LootItemCondition
     */
    export class $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
    }
    export interface $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
        unwrap(): T;
        when<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemCondition$Builder>): T;
        when(conditionBuilder: $LootItemCondition$Builder_): T;
    }
    export class $CompositeLootItemCondition implements $LootItemCondition {
        test(context: $LootContext): boolean;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        static createCodec<T extends $CompositeLootItemCondition>(factory: $Function_<$List<$LootItemCondition>, T>): $MapCodec<T>;
        static createInlineCodec<T extends $CompositeLootItemCondition>(factory: $Function_<$List<$LootItemCondition>, T>): $Codec<T>;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        terms: $List<$LootItemCondition>;
        constructor(terms: $List_<$LootItemCondition>, composedPredicate: $Predicate_<$LootContext>);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A LootItemCondition that checks whether an item should survive from an explosion or not.
     * This condition checks the explosion radius loot parameter.
     */
    export class $ExplosionCondition implements $LootItemCondition {
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        static survivesExplosion(): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ExplosionCondition>;
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A condition based on `LootContext`.
     * 
     * @see `LootItemConditions`
     * @see `PredicateManager`
     */
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
    /**
     * A LootItemCondition that inverts the output of another one.
     */
    export class $InvertedLootItemCondition extends $Record implements $LootItemCondition {
        term(): $LootItemCondition;
        test(context: $LootContext): boolean;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        getType(): $LootItemConditionType;
        static invert(toInvert: $LootItemCondition$Builder_): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$InvertedLootItemCondition>;
        constructor(term: $LootItemCondition);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A LootItemCondition that checks whether the block state matches a given Block and `StatePropertiesPredicate`.
     */
    export class $LootItemBlockStatePropertyCondition extends $Record implements $LootItemCondition {
        test(context: $LootContext): boolean;
        properties(): ($StatePropertiesPredicate) | undefined;
        getType(): $LootItemConditionType;
        block(): $Holder<$Block>;
        static hasBlockStateProperties(block: $Block_): $LootItemBlockStatePropertyCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemBlockStatePropertyCondition>;
        constructor(arg0: $Holder_<$Block>, arg1: ($StatePropertiesPredicate_) | undefined);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $TimeCheck$Builder implements $LootItemCondition$Builder {
        setPeriod(period: number): $TimeCheck$Builder;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        build(): $LootItemCondition;
        constructor(timeRange: $IntRange);
        set period(value: number);
    }
    export class $LootItemCondition$Builder {
    }
    export interface $LootItemCondition$Builder {
        build(): $LootItemCondition;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
    }
    /**
     * Values that may be interpreted as {@link $LootItemCondition$Builder}.
     */
    export type $LootItemCondition$Builder_ = (() => $LootItemCondition);
    export class $AllOfCondition extends $CompositeLootItemCondition {
        static allOf(...conditions: $LootItemCondition$Builder_[]): $AllOfCondition$Builder;
        static allOf(conditions: $List_<$LootItemCondition>): $AllOfCondition;
        static INLINE_CODEC: $Codec<$AllOfCondition>;
        static CODEC: $MapCodec<$AllOfCondition>;
        terms: $List<$LootItemCondition>;
        constructor(conditions: $List_<$LootItemCondition>);
    }
    /**
     * A LootItemCondition that checks if an Entity selected by a `EntityTarget` has a given set of scores.
     * If one of the given objectives does not exist or the entity does not have a score for that objective, the condition fails.
     */
    export class $EntityHasScoreCondition extends $Record implements $LootItemCondition {
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        hasScore(lootContext: $LootContext, targetEntity: $Entity, scoreboard: $Scoreboard, objectiveName: string, scoreRange: $IntRange): boolean;
        scores(): $Map<string, $IntRange>;
        static hasScores(entityTarget: $LootContext$EntityTarget_): $EntityHasScoreCondition$Builder;
        entityTarget(): $LootContext$EntityTarget;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EntityHasScoreCondition>;
        constructor(scores: $Map_<string, $IntRange>, entityTarget: $LootContext$EntityTarget_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A LootItemCondition that refers to another LootItemCondition by its ID.
     */
    export class $ConditionReference extends $Record implements $LootItemCondition {
        name(): $ResourceKey<$LootItemCondition>;
        test(context: $LootContext): boolean;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        getType(): $LootItemConditionType;
        static conditionReference(name: $ResourceKey_<$LootItemCondition>): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ConditionReference>;
        constructor(arg0: $ResourceKey_<$LootItemCondition>);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A LootItemCondition that matches if the last damage to an entity was done by a player.
     * 
     * @see LootContextParams#LAST_DAMAGE_PLAYER
     */
    export class $LootItemKilledByPlayerCondition implements $LootItemCondition {
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        static killedByPlayer(): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemKilledByPlayerCondition>;
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $AnyOfCondition extends $CompositeLootItemCondition {
        static anyOf(...conditions: $LootItemCondition$Builder_[]): $AnyOfCondition$Builder;
        static CODEC: $MapCodec<$AnyOfCondition>;
        terms: $List<$LootItemCondition>;
        constructor(conditions: $List_<$LootItemCondition>);
    }
    /**
     * LootItemCondition that checks the `ORIGIN` position against a `LocationPredicate` after applying an offset to the origin position.
     */
    export class $LocationCheck extends $Record implements $LootItemCondition {
        test(context: $LootContext): boolean;
        offset(): $BlockPos;
        getType(): $LootItemConditionType;
        predicate(): ($LocationPredicate) | undefined;
        static checkLocation(locationPredicateBuilder: $LocationPredicate$Builder, offset: $BlockPos_): $LootItemCondition$Builder;
        static checkLocation(locationPredicateBuilder: $LocationPredicate$Builder): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LocationCheck>;
        constructor(arg0: ($LocationPredicate_) | undefined, arg1: $BlockPos_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * LootItemCondition that checks if a number provided by a `NumberProvider` is within an `IntRange`.
     */
    export class $ValueCheckCondition extends $Record implements $LootItemCondition {
        test(context: $LootContext): boolean;
        provider(): $NumberProvider;
        getType(): $LootItemConditionType;
        range(): $IntRange;
        static hasValue(provider: $NumberProvider_, range: $IntRange): $LootItemCondition$Builder;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ValueCheckCondition>;
        constructor(provider: $NumberProvider_, range: $IntRange);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $CompositeLootItemCondition$Builder implements $LootItemCondition$Builder {
        create(conditions: $List_<$LootItemCondition>): $LootItemCondition;
        build(): $LootItemCondition;
        addTerm(condition: $LootItemCondition$Builder_): void;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
        constructor(...conditions: $LootItemCondition$Builder_[]);
    }
}
