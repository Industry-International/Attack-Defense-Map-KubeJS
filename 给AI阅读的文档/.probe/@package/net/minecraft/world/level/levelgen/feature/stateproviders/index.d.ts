import { $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters_, $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $List, $List_ } from "@package/java/util";
import { $Products$P4, $Products$P3 } from "@package/com/mojang/datafixers";
import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $RandomSource, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SimpleWeightedRandomList$Builder, $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/levelgen/feature/stateproviders" {
    export class $BlockStateProviderType<P extends $BlockStateProvider> {
        codec(): $MapCodec<P>;
        static RANDOMIZED_INT_STATE_PROVIDER: $BlockStateProviderType<$RandomizedIntStateProvider>;
        static DUAL_NOISE_PROVIDER: $BlockStateProviderType<$DualNoiseProvider>;
        static ROTATED_BLOCK_PROVIDER: $BlockStateProviderType<$RotatedBlockProvider>;
        static SIMPLE_STATE_PROVIDER: $BlockStateProviderType<$SimpleStateProvider>;
        static WEIGHTED_STATE_PROVIDER: $BlockStateProviderType<$WeightedStateProvider>;
        static NOISE_THRESHOLD_PROVIDER: $BlockStateProviderType<$NoiseThresholdProvider>;
        static NOISE_PROVIDER: $BlockStateProviderType<$NoiseProvider>;
        constructor(codec: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateProviderType}.
     */
    export type $BlockStateProviderType_<P> = RegistryTypes.WorldgenBlockStateProviderType;
    export class $BlockStateProvider {
        type(): $BlockStateProviderType<never>;
        getState(random: $RandomSource, pos: $BlockPos_): $BlockState;
        static simple(state: $BlockState_): $SimpleStateProvider;
        static simple(block: $Block_): $SimpleStateProvider;
        static CODEC: $Codec<$BlockStateProvider>;
        constructor();
    }
    export class $DualNoiseProvider extends $NoiseProvider {
        getSlowNoiseValue(pos: $BlockPos_): number;
        static CODEC: $MapCodec<$DualNoiseProvider>;
        seed: number;
        noise: $NormalNoise;
        scale: number;
        parameters: $NormalNoise$NoiseParameters;
        states: $List<$BlockState>;
        constructor(variety: $InclusiveRange_<number>, slowNoiseParameters: $NormalNoise$NoiseParameters_, slowScale: number, seed: number, arg4: $NormalNoise$NoiseParameters_, parameters: number, scale: $List_<$BlockState_>);
    }
    export class $NoiseProvider extends $NoiseBasedStateProvider {
        getRandomState(possibleStates: $List_<$BlockState_>, delta: number): $BlockState;
        getRandomState(possibleStates: $List_<$BlockState_>, pos: $BlockPos_, delta: number): $BlockState;
        static noiseProviderCodec<P extends $NoiseProvider>(instance: $RecordCodecBuilder$Instance<P>): $Products$P4<$RecordCodecBuilder$Mu<P>, number, $NormalNoise$NoiseParameters, number, $List<$BlockState>>;
        static CODEC: $MapCodec<$NoiseProvider>;
        seed: number;
        noise: $NormalNoise;
        scale: number;
        parameters: $NormalNoise$NoiseParameters;
        states: $List<$BlockState>;
        constructor(seed: number, arg1: $NormalNoise$NoiseParameters_, parameters: number, scale: $List_<$BlockState_>);
    }
    export class $RuleBasedBlockStateProvider$Rule extends $Record {
        ifTrue(): $BlockPredicate;
        then(): $BlockStateProvider;
        static CODEC: $Codec<$RuleBasedBlockStateProvider$Rule>;
        constructor(arg0: $BlockPredicate, arg1: $BlockStateProvider);
    }
    export class $NoiseBasedStateProvider extends $BlockStateProvider {
        getNoiseValue(pos: $BlockPos_, delta: number): number;
        static noiseCodec<P extends $NoiseBasedStateProvider>(instance: $RecordCodecBuilder$Instance<P>): $Products$P3<$RecordCodecBuilder$Mu<P>, number, $NormalNoise$NoiseParameters, number>;
        static CODEC: $Codec<$BlockStateProvider>;
        seed: number;
        noise: $NormalNoise;
        scale: number;
        parameters: $NormalNoise$NoiseParameters;
        constructor(seed: number, arg1: $NormalNoise$NoiseParameters_, parameters: number);
    }
    export class $RandomizedIntStateProvider extends $BlockStateProvider {
        static CODEC: $MapCodec<$RandomizedIntStateProvider>;
        constructor(source: $BlockStateProvider, property: $IntegerProperty, values: $IntProvider_);
        constructor(source: $BlockStateProvider, propertyName: string, values: $IntProvider_);
    }
    export class $WeightedStateProvider extends $BlockStateProvider {
        static CODEC: $MapCodec<$WeightedStateProvider>;
        constructor(builder: $SimpleWeightedRandomList$Builder<$BlockState_>);
        constructor(weightedList: $SimpleWeightedRandomList<$BlockState_>);
    }
    export interface $BlockStateProviderType<P> extends RegistryMarked<RegistryTypes.WorldgenBlockStateProviderTypeTag, RegistryTypes.WorldgenBlockStateProviderType> {}
    export class $RotatedBlockProvider extends $BlockStateProvider {
        static CODEC: $MapCodec<$RotatedBlockProvider>;
        constructor(block: $Block_);
    }
    export class $RuleBasedBlockStateProvider extends $Record {
        getState(level: $WorldGenLevel, random: $RandomSource, pos: $BlockPos_): $BlockState;
        fallback(): $BlockStateProvider;
        rules(): $List<$RuleBasedBlockStateProvider$Rule>;
        static simple(block: $Block_): $RuleBasedBlockStateProvider;
        static simple(fallback: $BlockStateProvider): $RuleBasedBlockStateProvider;
        static CODEC: $Codec<$RuleBasedBlockStateProvider>;
        constructor(arg0: $BlockStateProvider, arg1: $List_<$RuleBasedBlockStateProvider$Rule_>);
    }
    export class $NoiseThresholdProvider extends $NoiseBasedStateProvider {
        static CODEC: $MapCodec<$NoiseThresholdProvider>;
        seed: number;
        noise: $NormalNoise;
        scale: number;
        parameters: $NormalNoise$NoiseParameters;
        constructor(seed: number, arg1: $NormalNoise$NoiseParameters_, parameters: number, scale: number, threshold: number, highChance: $BlockState_, defaultState: $List_<$BlockState_>, lowStates: $List_<$BlockState_>);
    }
    export class $SimpleStateProvider extends $BlockStateProvider {
        static CODEC: $MapCodec<$SimpleStateProvider>;
        constructor(state: $BlockState_);
    }
}
