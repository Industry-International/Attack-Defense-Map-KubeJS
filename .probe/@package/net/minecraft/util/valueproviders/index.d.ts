import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/util/valueproviders" {
    export class $ClampedNormalFloat extends $FloatProvider {
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $ClampedNormalFloat;
        static sample(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static CODEC: $MapCodec<$ClampedNormalFloat>;
    }
    export class $TrapezoidFloat extends $FloatProvider {
        static of(arg0: number, arg1: number, arg2: number): $TrapezoidFloat;
        static CODEC: $MapCodec<$TrapezoidFloat>;
    }
    export interface $FloatProviderType extends RegistryMarked<RegistryTypes.FloatProviderTypeTag, RegistryTypes.FloatProviderType> {}
    export interface $IntProviderType extends RegistryMarked<RegistryTypes.IntProviderTypeTag, RegistryTypes.IntProviderType> {}
    export class $FloatProviderType<P extends $FloatProvider> {
        static register<P extends $FloatProvider>(arg0: string, arg1: $MapCodec_<P>): $FloatProviderType<P>;
        static UNIFORM: $FloatProviderType<$UniformFloat>;
        static CONSTANT: $FloatProviderType<$ConstantFloat>;
        static CLAMPED_NORMAL: $FloatProviderType<$ClampedNormalFloat>;
        static TRAPEZOID: $FloatProviderType<$TrapezoidFloat>;
    }
    export interface $FloatProviderType<P extends $FloatProvider> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $FloatProviderType}.
     */
    export type $FloatProviderType_<P> = RegistryTypes.FloatProviderType | (() => $MapCodec_<P>);
    export class $IntProviderType<P extends $IntProvider> {
        static register<P extends $IntProvider>(arg0: string, arg1: $MapCodec_<P>): $IntProviderType<P>;
        static BIASED_TO_BOTTOM: $IntProviderType<$BiasedToBottomInt>;
        static CLAMPED: $IntProviderType<$ClampedInt>;
        static WEIGHTED_LIST: $IntProviderType<$WeightedListInt>;
        static UNIFORM: $IntProviderType<$UniformInt>;
        static CONSTANT: $IntProviderType<$ConstantInt>;
        static CLAMPED_NORMAL: $IntProviderType<$ClampedNormalInt>;
    }
    export interface $IntProviderType<P extends $IntProvider> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $IntProviderType}.
     */
    export type $IntProviderType_<P> = RegistryTypes.IntProviderType | (() => $MapCodec_<P>);
    export class $WeightedListInt extends $IntProvider {
        static CODEC: $MapCodec<$WeightedListInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
        constructor(arg0: $SimpleWeightedRandomList<$IntProvider_>);
    }
    export class $ClampedInt extends $IntProvider {
        static of(arg0: $IntProvider_, arg1: number, arg2: number): $ClampedInt;
        static CODEC: $MapCodec<$ClampedInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
        constructor(arg0: $IntProvider_, arg1: number, arg2: number);
    }
    export class $IntProvider {
        getType(): $IntProviderType<never>;
        getMinValue(): number;
        getMaxValue(): number;
        static validateCodec<T extends $IntProvider>(arg0: number, arg1: number, arg2: $Codec<T>): $Codec<T>;
        static codec(arg0: number, arg1: number): $Codec<$IntProvider>;
        sample(arg0: $RandomSource): number;
        static CODEC: $Codec<$IntProvider>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
        constructor();
        get type(): $IntProviderType<never>;
        get minValue(): number;
        get maxValue(): number;
    }
    /**
     * Values that may be interpreted as {@link $IntProvider}.
     */
    export type $IntProvider_ = number | [min: number, max: number, ] | { bounds: [min: number, max: number, ],  } | { min: number, max: number,  } | { min_inclusive: number, max_inclusive: number,  } | { value: number,  } | { clamped: $IntProvider,  } | { clamped_normal: $IntProvider,  };
    export class $UniformInt extends $IntProvider {
        static of(arg0: number, arg1: number): $UniformInt;
        static CODEC: $MapCodec<$UniformInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
    }
    export class $BiasedToBottomInt extends $IntProvider {
        static of(arg0: number, arg1: number): $BiasedToBottomInt;
        static CODEC: $MapCodec<$BiasedToBottomInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
    }
    export class $MultipliedFloats implements $SampledFloat {
        sample(arg0: $RandomSource): number;
        constructor(...arg0: $SampledFloat_[]);
    }
    export class $SampledFloat {
    }
    export interface $SampledFloat {
        sample(arg0: $RandomSource): number;
    }
    /**
     * Values that may be interpreted as {@link $SampledFloat}.
     */
    export type $SampledFloat_ = ((arg0: $RandomSource) => number);
    export class $ClampedNormalInt extends $IntProvider {
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $ClampedNormalInt;
        static sample(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static CODEC: $MapCodec<$ClampedNormalInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
    }
    export class $UniformFloat extends $FloatProvider {
        static of(arg0: number, arg1: number): $UniformFloat;
        static CODEC: $MapCodec<$UniformFloat>;
    }
    export class $ConstantFloat extends $FloatProvider {
        getValue(): number;
        static of(arg0: number): $ConstantFloat;
        static ZERO: $ConstantFloat;
        static CODEC: $MapCodec<$ConstantFloat>;
        get value(): number;
    }
    export class $ConstantInt extends $IntProvider {
        getValue(): number;
        static of(arg0: number): $ConstantInt;
        static ZERO: $ConstantInt;
        static CODEC: $MapCodec<$ConstantInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
        get value(): number;
    }
    export class $FloatProvider implements $SampledFloat {
        getType(): $FloatProviderType<never>;
        getMinValue(): number;
        getMaxValue(): number;
        static codec(arg0: number, arg1: number): $Codec<$FloatProvider>;
        static CODEC: $Codec<$FloatProvider>;
        constructor();
        get type(): $FloatProviderType<never>;
        get minValue(): number;
        get maxValue(): number;
    }
}
