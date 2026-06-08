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
    export class $NumberProvider {
    }
    export interface $NumberProvider extends $LootContextUser {
        getInt(arg0: $LootContext): number;
        getFloat(arg0: $LootContext): number;
        getType(): $LootNumberProviderType;
        get type(): $LootNumberProviderType;
    }
    /**
     * Values that may be interpreted as {@link $NumberProvider}.
     */
    export type $NumberProvider_ = number | [min: number, max: number, ] | { min: number, max: number,  } | { n: number, p: number,  } | { value: number,  };
    export class $UniformGenerator extends $Record implements $NumberProvider {
        min(): $NumberProvider;
        max(): $NumberProvider;
        getInt(arg0: $LootContext): number;
        getFloat(arg0: $LootContext): number;
        getType(): $LootNumberProviderType;
        static between(arg0: number, arg1: number): $UniformGenerator;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        static CODEC: $MapCodec<$UniformGenerator>;
        constructor(arg0: $NumberProvider_, arg1: $NumberProvider_);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ConstantValue extends $Record implements $NumberProvider {
        value(): number;
        getFloat(arg0: $LootContext): number;
        getType(): $LootNumberProviderType;
        static exactly(arg0: number): $ConstantValue;
        getInt(arg0: $LootContext): number;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static INLINE_CODEC: $Codec<$ConstantValue>;
        static CODEC: $MapCodec<$ConstantValue>;
        constructor(arg0: number);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $StorageValue extends $Record implements $NumberProvider {
        getInt(arg0: $LootContext): number;
        getFloat(arg0: $LootContext): number;
        getType(): $LootNumberProviderType;
        path(): $NbtPathArgument$NbtPath;
        storage(): $ResourceLocation;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static CODEC: $MapCodec<$StorageValue>;
        constructor(arg0: $ResourceLocation_, arg1: $NbtPathArgument$NbtPath);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
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
    export class $ScoreboardValue extends $Record implements $NumberProvider {
        target(): $ScoreboardNameProvider;
        getFloat(arg0: $LootContext): number;
        scale(): number;
        getType(): $LootNumberProviderType;
        score(): string;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static fromScoreboard(arg0: $LootContext$EntityTarget_, arg1: string, arg2: number): $ScoreboardValue;
        static fromScoreboard(arg0: $LootContext$EntityTarget_, arg1: string): $ScoreboardValue;
        getInt(arg0: $LootContext): number;
        validate(arg0: $ValidationContext): void;
        static CODEC: $MapCodec<$ScoreboardValue>;
        constructor(arg0: $ScoreboardNameProvider, arg1: string, arg2: number);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $EnchantmentLevelProvider extends $Record implements $NumberProvider {
        getFloat(arg0: $LootContext): number;
        getType(): $LootNumberProviderType;
        amount(): $LevelBasedValue;
        static forEnchantmentLevel(arg0: $LevelBasedValue): $EnchantmentLevelProvider;
        getInt(arg0: $LootContext): number;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static CODEC: $MapCodec<$EnchantmentLevelProvider>;
        constructor(arg0: $LevelBasedValue);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootNumberProviderType extends $Record {
        codec(): $MapCodec<$NumberProvider>;
        constructor(arg0: $MapCodec_<$NumberProvider_>);
    }
    /**
     * Values that may be interpreted as {@link $LootNumberProviderType}.
     */
    export type $LootNumberProviderType_ = RegistryTypes.LootNumberProviderType;
    export class $BinomialDistributionGenerator extends $Record implements $NumberProvider {
        getInt(arg0: $LootContext): number;
        getFloat(arg0: $LootContext): number;
        n(): $NumberProvider;
        p(): $NumberProvider;
        getType(): $LootNumberProviderType;
        static binomial(arg0: number, arg1: number): $BinomialDistributionGenerator;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        static CODEC: $MapCodec<$BinomialDistributionGenerator>;
        constructor(arg0: $NumberProvider_, arg1: $NumberProvider_);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
}
