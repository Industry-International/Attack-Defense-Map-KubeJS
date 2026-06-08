import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $IntStream } from "@package/java/util/stream";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $List_ } from "@package/java/util";
import { $Record, $StringBuilder } from "@package/java/lang";
import { $IPerlinNoiseSampler, $IInterpolatedNoiseSampler, $IOctavePerlinNoiseSampler, $ISimplexNoiseSampler } from "@package/com/ishland/c2me/base/mixin/access";
import { $DensityFunction$FunctionContext, $DensityFunction$ContextProvider, $DensityFunction, $DensityFunction$SimpleFunction, $DensityFunction$Visitor_ } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource, $KeyDispatchDataCodec } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/synth" {
    export class $NormalNoise {
        getValue(arg0: number, arg1: number, arg2: number): number;
        parameters(): $NormalNoise$NoiseParameters;
        static create(arg0: $RandomSource, arg1: $NormalNoise$NoiseParameters_): $NormalNoise;
        static create(arg0: $RandomSource, arg1: number, ...arg2: number[]): $NormalNoise;
        maxValue(): number;
        parityConfigString(arg0: $StringBuilder): void;
        /**
         * @deprecated
         */
        static createLegacyNetherBiome(arg0: $RandomSource, arg1: $NormalNoise$NoiseParameters_): $NormalNoise;
    }
    export class $BlendedNoise implements $DensityFunction$SimpleFunction, $IInterpolatedNoiseSampler {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        parityConfigString(arg0: $StringBuilder): void;
        static createUnseeded(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $BlendedNoise;
        withNewRandom(arg0: $RandomSource): $BlendedNoise;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        getMaxValue(): number;
        getYScale(): number;
        getScaledXzScale(): number;
        getXzFactor(): number;
        getScaledYScale(): number;
        getXzScale(): number;
        getYFactor(): number;
        getUpperInterpolatedNoise(): $PerlinNoise;
        getSmearScaleMultiplier(): number;
        getInterpolationNoise(): $PerlinNoise;
        getLowerInterpolatedNoise(): $PerlinNoise;
        static CODEC: $KeyDispatchDataCodec<$BlendedNoise>;
        constructor(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get YScale(): number;
        get scaledXzScale(): number;
        get xzFactor(): number;
        get scaledYScale(): number;
        get xzScale(): number;
        get YFactor(): number;
        get upperInterpolatedNoise(): $PerlinNoise;
        get smearScaleMultiplier(): number;
        get interpolationNoise(): $PerlinNoise;
        get lowerInterpolatedNoise(): $PerlinNoise;
    }
    export class $PerlinNoise implements $IOctavePerlinNoiseSampler {
        static wrap(value: number): number;
        /**
         * @deprecated
         */
        getValue(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        getValue(x: number, y: number, z: number): number;
        static create(arg0: $RandomSource, arg1: number, arg2: $DoubleList): $PerlinNoise;
        static create(arg0: $RandomSource, arg1: number, arg2: number, ...arg3: number[]): $PerlinNoise;
        static create(arg0: $RandomSource, arg1: $List_<number>): $PerlinNoise;
        static create(arg0: $RandomSource, arg1: $IntStream): $PerlinNoise;
        maxValue(): number;
        /**
         * @deprecated
         */
        static createLegacyForLegacyNetherBiome(arg0: $RandomSource, arg1: number, arg2: $DoubleList): $PerlinNoise;
        /**
         * @deprecated
         */
        static createLegacyForBlendedNoise(arg0: $RandomSource, arg1: $IntStream): $PerlinNoise;
        parityConfigString(arg0: $StringBuilder): void;
        firstOctave(): number;
        getOctaveNoise(arg0: number): $ImprovedNoise;
        maxBrokenValue(arg0: number): number;
        amplitudes(): $DoubleList;
        getAmplitudes(): $DoubleList;
        getPersistence(): number;
        getOctaveSamplers(): $ImprovedNoise[];
        getLacunarity(): number;
        constructor(arg0: $RandomSource, arg1: $Pair<number, $DoubleList>, arg2: boolean);
        get persistence(): number;
        get octaveSamplers(): $ImprovedNoise[];
        get lacunarity(): number;
    }
    export interface $NormalNoise$NoiseParameters extends RegistryMarked<RegistryTypes.WorldgenNoiseTag, RegistryTypes.WorldgenNoise> {}
    export class $ImprovedNoise implements $IPerlinNoiseSampler {
        parityConfigString(arg0: $StringBuilder): void;
        noise(arg0: number, arg1: number, arg2: number): number;
        /**
         * @deprecated
         */
        noise(x: number, y: number, z: number, yScale: number, yMax: number): number;
        noiseWithDerivative(arg0: number, arg1: number, arg2: number, arg3: number[]): number;
        getPermutation(): number[];
        zo: number;
        yo: number;
        xo: number;
        constructor(arg0: $RandomSource);
        get permutation(): number[];
    }
    export class $PerlinSimplexNoise {
        getValue(arg0: number, arg1: number, arg2: boolean): number;
        constructor(arg0: $RandomSource, arg1: $List_<number>);
    }
    export class $NormalNoise$NoiseParameters extends $Record {
        firstOctave(): number;
        amplitudes(): $DoubleList;
        static CODEC: $Codec<$Holder<$NormalNoise$NoiseParameters>>;
        static DIRECT_CODEC: $Codec<$NormalNoise$NoiseParameters>;
        constructor(arg0: number, arg1: $DoubleList);
        constructor(arg0: number, arg1: number, ...arg2: number[]);
        constructor(arg0: number, arg1: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $NormalNoise$NoiseParameters}.
     */
    export type $NormalNoise$NoiseParameters_ = RegistryTypes.WorldgenNoise;
    export class $NoiseUtils {
        static parityNoiseOctaveConfigString(arg0: $StringBuilder, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        static parityNoiseOctaveConfigString(arg0: $StringBuilder, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        static biasTowardsExtreme(arg0: number, arg1: number): number;
        constructor();
    }
    export class $SimplexNoise implements $ISimplexNoiseSampler {
        getValue(arg0: number, arg1: number): number;
        getValue(arg0: number, arg1: number, arg2: number): number;
        static dot(arg0: number[], arg1: number, arg2: number, arg3: number): number;
        getPermutation(): number[];
        zo: number;
        yo: number;
        xo: number;
        static GRADIENT: number[][];
        constructor(arg0: $RandomSource);
        get permutation(): number[];
    }
}
