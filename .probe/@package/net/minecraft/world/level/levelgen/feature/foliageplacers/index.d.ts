import { $LevelSimulatedReader } from "@package/net/minecraft/world/level";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Products$P3, $Products$P2 } from "@package/com/mojang/datafixers";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/feature/foliageplacers" {
    export interface $FoliagePlacerType extends RegistryMarked<RegistryTypes.WorldgenFoliagePlacerTypeTag, RegistryTypes.WorldgenFoliagePlacerType> {}
    export class $FoliagePlacer {
        type(): $FoliagePlacerType<never>;
        placeLeavesRowWithHangingLeavesBelow(arg0: $LevelSimulatedReader, arg1: $FoliagePlacer$FoliageSetter, arg2: $RandomSource, arg3: $TreeConfiguration, arg4: $BlockPos_, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number): void;
        foliageHeight(arg0: $RandomSource, arg1: number, arg2: $TreeConfiguration): number;
        static foliagePlacerParts<P extends $FoliagePlacer>(arg0: $RecordCodecBuilder$Instance<P>): $Products$P2<$RecordCodecBuilder$Mu<P>, $IntProvider, $IntProvider>;
        foliageRadius(arg0: $RandomSource, arg1: number): number;
        shouldSkipLocation(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
        placeLeavesRow(arg0: $LevelSimulatedReader, arg1: $FoliagePlacer$FoliageSetter, arg2: $RandomSource, arg3: $TreeConfiguration, arg4: $BlockPos_, arg5: number, arg6: number, arg7: boolean): void;
        createFoliage(arg0: $LevelSimulatedReader, arg1: $FoliagePlacer$FoliageSetter, arg2: $RandomSource, arg3: $TreeConfiguration, arg4: number, arg5: $FoliagePlacer$FoliageAttachment, arg6: number, arg7: number): void;
        createFoliage(arg0: $LevelSimulatedReader, arg1: $FoliagePlacer$FoliageSetter, arg2: $RandomSource, arg3: $TreeConfiguration, arg4: number, arg5: $FoliagePlacer$FoliageAttachment, arg6: number, arg7: number, arg8: number): void;
        static tryPlaceLeaf(arg0: $LevelSimulatedReader, arg1: $FoliagePlacer$FoliageSetter, arg2: $RandomSource, arg3: $TreeConfiguration, arg4: $BlockPos_): boolean;
        shouldSkipLocationSigned(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
        static CODEC: $Codec<$FoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
    }
    export class $FoliagePlacer$FoliageAttachment {
        pos(): $BlockPos;
        doubleTrunk(): boolean;
        radiusOffset(): number;
        constructor(arg0: $BlockPos_, arg1: number, arg2: boolean);
    }
    export class $FancyFoliagePlacer extends $BlobFoliagePlacer {
        static CODEC: $MapCodec<$FancyFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        height: number;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $RandomSpreadFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$RandomSpreadFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: $IntProvider_, arg3: number);
    }
    export class $PineFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$PineFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: $IntProvider_);
    }
    export class $FoliagePlacerType<P extends $FoliagePlacer> {
        codec(): $MapCodec<P>;
        static MEGA_PINE_FOLIAGE_PLACER: $FoliagePlacerType<$MegaPineFoliagePlacer>;
        static PINE_FOLIAGE_PLACER: $FoliagePlacerType<$PineFoliagePlacer>;
        static RANDOM_SPREAD_FOLIAGE_PLACER: $FoliagePlacerType<$RandomSpreadFoliagePlacer>;
        static MEGA_JUNGLE_FOLIAGE_PLACER: $FoliagePlacerType<$MegaJungleFoliagePlacer>;
        static SPRUCE_FOLIAGE_PLACER: $FoliagePlacerType<$SpruceFoliagePlacer>;
        static BUSH_FOLIAGE_PLACER: $FoliagePlacerType<$BushFoliagePlacer>;
        static ACACIA_FOLIAGE_PLACER: $FoliagePlacerType<$AcaciaFoliagePlacer>;
        static BLOB_FOLIAGE_PLACER: $FoliagePlacerType<$BlobFoliagePlacer>;
        static DARK_OAK_FOLIAGE_PLACER: $FoliagePlacerType<$DarkOakFoliagePlacer>;
        static CHERRY_FOLIAGE_PLACER: $FoliagePlacerType<$CherryFoliagePlacer>;
        static FANCY_FOLIAGE_PLACER: $FoliagePlacerType<$FancyFoliagePlacer>;
        constructor(arg0: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $FoliagePlacerType}.
     */
    export type $FoliagePlacerType_<P> = RegistryTypes.WorldgenFoliagePlacerType;
    export class $MegaPineFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$MegaPineFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: $IntProvider_);
    }
    export class $DarkOakFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$DarkOakFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
    }
    export class $BushFoliagePlacer extends $BlobFoliagePlacer {
        static CODEC: $MapCodec<$BushFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        height: number;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $BlobFoliagePlacer extends $FoliagePlacer {
        static blobParts<P extends $BlobFoliagePlacer>(arg0: $RecordCodecBuilder$Instance<P>): $Products$P3<$RecordCodecBuilder$Mu<P>, $IntProvider, $IntProvider, number>;
        static CODEC: $MapCodec<$BlobFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        height: number;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $SpruceFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$SpruceFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: $IntProvider_);
    }
    export class $CherryFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$CherryFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: $IntProvider_, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $MegaJungleFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$MegaJungleFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        height: number;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $AcaciaFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$AcaciaFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
    }
    export class $FoliagePlacer$FoliageSetter {
    }
    export interface $FoliagePlacer$FoliageSetter {
        set(arg0: $BlockPos_, arg1: $BlockState_): void;
        isSet(arg0: $BlockPos_): boolean;
    }
}
