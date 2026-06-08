import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $OptionalInt } from "@package/java/util";

declare module "@package/net/minecraft/world/level/levelgen/feature/featuresize" {
    export class $FeatureSizeType<P extends $FeatureSize> {
        codec(): $MapCodec<P>;
        static THREE_LAYERS_FEATURE_SIZE: $FeatureSizeType<$ThreeLayersFeatureSize>;
        static TWO_LAYERS_FEATURE_SIZE: $FeatureSizeType<$TwoLayersFeatureSize>;
        constructor(arg0: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $FeatureSizeType}.
     */
    export type $FeatureSizeType_<P> = RegistryTypes.WorldgenFeatureSizeType;
    export class $FeatureSize {
        type(): $FeatureSizeType<never>;
        minClippedHeight(): $OptionalInt;
        getSizeAtHeight(arg0: number, arg1: number): number;
        static minClippedHeightCodec<S extends $FeatureSize>(): $RecordCodecBuilder<S, $OptionalInt>;
        static CODEC: $Codec<$FeatureSize>;
        static MAX_WIDTH: number;
        constructor(arg0: $OptionalInt);
    }
    export class $ThreeLayersFeatureSize extends $FeatureSize {
        static CODEC: $MapCodec<$ThreeLayersFeatureSize>;
        static MAX_WIDTH: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $OptionalInt);
    }
    export interface $FeatureSizeType extends RegistryMarked<RegistryTypes.WorldgenFeatureSizeTypeTag, RegistryTypes.WorldgenFeatureSizeType> {}
    export class $TwoLayersFeatureSize extends $FeatureSize {
        static CODEC: $MapCodec<$TwoLayersFeatureSize>;
        static MAX_WIDTH: number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $OptionalInt);
    }
}
