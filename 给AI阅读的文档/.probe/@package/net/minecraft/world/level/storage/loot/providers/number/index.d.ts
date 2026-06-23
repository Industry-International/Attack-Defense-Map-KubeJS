import { $ScoreboardNameProvider } from "@package/net/minecraft/world/level/storage/loot/providers/score";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LevelBasedValue } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContextUser, $ValidationContext, $LootContext, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/providers/number" {
    /**
     * Provides a float or int based on a `LootContext`.
     */
    export class $NumberProvider {
    }
    export interface $NumberProvider extends $LootContextUser {
        getInt(lootContext: $LootContext): number;
        getFloat(lootContext: $LootContext): number;
        getType(): $LootNumberProviderType;
        get type(): $LootNumberProviderType;
    }
    /**
     * Values that may be interpreted as {@link $NumberProvider}.
     */
    export type $NumberProvider_ = number | [min: number, max: number, ] | { min: number, max: number,  } | { n: number, p: number,  } | { value: number,  };
    /**
     * Generates a random number which is uniformly distributed between a minimum and a maximum.
     * Minimum and maximum are themselves NumberProviders.
     */
    export class $UniformGenerator extends $Record implements $NumberProvider {
        min(): $NumberProvider;
        max(): $NumberProvider;
        getInt(lootContext: $LootContext): number;
        getFloat(lootContext: $LootContext): number;
        getType(): $LootNumberProviderType;
        static between(min: number, max: number): $UniformGenerator;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        static CODEC: $MapCodec<$UniformGenerator>;
        constructor(min: $NumberProvider_, max: $NumberProvider_);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A `NumberProvider` that provides a constant value.
     */
    export class $ConstantValue extends $Record implements $NumberProvider {
        value(): number;
        getFloat(lootContext: $LootContext): number;
        getType(): $LootNumberProviderType;
        static exactly(value: number): $ConstantValue;
        getInt(lootContext: $LootContext): number;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static INLINE_CODEC: $Codec<$ConstantValue>;
        static CODEC: $MapCodec<$ConstantValue>;
        constructor(value: number);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $StorageValue extends $Record implements $NumberProvider {
        getInt(lootContext: $LootContext): number;
        getFloat(lootContext: $LootContext): number;
        getType(): $LootNumberProviderType;
        path(): $NbtPathArgument$NbtPath;
        storage(): $ResourceLocation;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static CODEC: $MapCodec<$StorageValue>;
        constructor(arg0: $ResourceLocation_, arg1: $NbtPathArgument$NbtPath);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Registration for `LootNumberProviderType`.
     * 
     * @see LootNumberProviderType
     * @see NumberProvider
     */
    export class $NumberProviders {
        static STORAGE: $LootNumberProviderType;
        static CODEC: $Codec<$NumberProvider>;
        static SCORE: $LootNumberProviderType;
        static BINOMIAL: $LootNumberProviderType;
        static UNIFORM: $LootNumberProviderType;
        static CONSTANT: $LootNumberProviderType;
        static ENCHANTMENT_LEVEL: $LootNumberProviderType;
        constructor();
    }
    export interface $LootNumberProviderType extends RegistryMarked<RegistryTypes.LootNumberProviderTypeTag, RegistryTypes.LootNumberProviderType> {}
    /**
     * Provides a number by reading the score of a scoreboard member whose name is provided by a `ScoreboardNameProvider`.
     * Additionally a scale can be provided, which will be multiplied with the score.
     */
    export class $ScoreboardValue extends $Record implements $NumberProvider {
        target(): $ScoreboardNameProvider;
        getFloat(lootContext: $LootContext): number;
        scale(): number;
        getType(): $LootNumberProviderType;
        score(): string;
        static fromScoreboard(entityTarget: $LootContext$EntityTarget_, score: string): $ScoreboardValue;
        static fromScoreboard(entityTarget: $LootContext$EntityTarget_, score: string, scale: number): $ScoreboardValue;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getInt(lootContext: $LootContext): number;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        static CODEC: $MapCodec<$ScoreboardValue>;
        constructor(target: $ScoreboardNameProvider, score: string, scale: number);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $EnchantmentLevelProvider extends $Record implements $NumberProvider {
        static forEnchantmentLevel(amount: $LevelBasedValue): $EnchantmentLevelProvider;
        getFloat(lootContext: $LootContext): number;
        getType(): $LootNumberProviderType;
        amount(): $LevelBasedValue;
        getInt(lootContext: $LootContext): number;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static CODEC: $MapCodec<$EnchantmentLevelProvider>;
        constructor(arg0: $LevelBasedValue);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * The SerializerType for `NumberProvider`.
     */
    export class $LootNumberProviderType extends $Record {
        codec(): $MapCodec<$NumberProvider>;
        constructor(arg0: $MapCodec_<$NumberProvider_>);
    }
    /**
     * Values that may be interpreted as {@link $LootNumberProviderType}.
     */
    export type $LootNumberProviderType_ = RegistryTypes.LootNumberProviderType;
    /**
     * A number provider which generates a random number based on a binomial distribution.
     */
    export class $BinomialDistributionGenerator extends $Record implements $NumberProvider {
        getInt(lootContext: $LootContext): number;
        getFloat(lootContext: $LootContext): number;
        n(): $NumberProvider;
        p(): $NumberProvider;
        getType(): $LootNumberProviderType;
        static binomial(n: number, p: number): $BinomialDistributionGenerator;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        static CODEC: $MapCodec<$BinomialDistributionGenerator>;
        constructor(n: $NumberProvider_, p: $NumberProvider_);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
}
