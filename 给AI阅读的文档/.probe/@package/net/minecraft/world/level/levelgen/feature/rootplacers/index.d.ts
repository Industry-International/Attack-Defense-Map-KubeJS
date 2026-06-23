import { $LevelSimulatedReader } from "@package/net/minecraft/world/level";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $List } from "@package/java/util";
import { $Products$P3 } from "@package/com/mojang/datafixers";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/levelgen/feature/rootplacers" {
    export class $RootPlacer {
        type(): $RootPlacerType<never>;
        placeRoot(level: $LevelSimulatedReader, blockSetter: $BiConsumer_<$BlockPos, $BlockState>, random: $RandomSource, pos: $BlockPos_, treeConfig: $TreeConfiguration): void;
        placeRoots(level: $LevelSimulatedReader, blockSetter: $BiConsumer_<$BlockPos, $BlockState>, random: $RandomSource, pos: $BlockPos_, trunkOrigin: $BlockPos_, treeConfig: $TreeConfiguration): boolean;
        getPotentiallyWaterloggedState(level: $LevelSimulatedReader, pos: $BlockPos_, state: $BlockState_): $BlockState;
        static rootPlacerParts<P extends $RootPlacer>(instance: $RecordCodecBuilder$Instance<P>): $Products$P3<$RecordCodecBuilder$Mu<P>, $IntProvider, $BlockStateProvider, ($AboveRootPlacement) | undefined>;
        canPlaceRoot(level: $LevelSimulatedReader, pos: $BlockPos_): boolean;
        getTrunkOrigin(pos: $BlockPos_, random: $RandomSource): $BlockPos;
        static CODEC: $Codec<$RootPlacer>;
        aboveRootPlacement: ($AboveRootPlacement) | undefined;
        trunkOffsetY: $IntProvider;
        rootProvider: $BlockStateProvider;
        constructor(trunkOffset: $IntProvider_, rootProvider: $BlockStateProvider, aboveRootPlacement: ($AboveRootPlacement_) | undefined);
    }
    export class $AboveRootPlacement extends $Record {
        aboveRootPlacementChance(): number;
        aboveRootProvider(): $BlockStateProvider;
        static CODEC: $Codec<$AboveRootPlacement>;
        constructor(arg0: $BlockStateProvider, arg1: number);
    }
    export interface $RootPlacerType<P> extends RegistryMarked<RegistryTypes.WorldgenRootPlacerTypeTag, RegistryTypes.WorldgenRootPlacerType> {}
    export class $MangroveRootPlacement extends $Record {
        randomSkewChance(): number;
        muddyRootsIn(): $HolderSet<$Block>;
        maxRootLength(): number;
        muddyRootsProvider(): $BlockStateProvider;
        maxRootWidth(): number;
        canGrowThrough(): $HolderSet<$Block>;
        static CODEC: $Codec<$MangroveRootPlacement>;
        constructor(arg0: $HolderSet_<$Block>, arg1: $HolderSet_<$Block>, arg2: $BlockStateProvider, arg3: number, arg4: number, arg5: number);
    }
    export class $MangroveRootPlacer extends $RootPlacer {
        potentialRootPositions(pos: $BlockPos_, direction: $Direction_, random: $RandomSource, trunkOrigin: $BlockPos_): $List<$BlockPos>;
        static CODEC: $MapCodec<$MangroveRootPlacer>;
        static ROOT_WIDTH_LIMIT: number;
        aboveRootPlacement: ($AboveRootPlacement) | undefined;
        trunkOffsetY: $IntProvider;
        static ROOT_LENGTH_LIMIT: number;
        rootProvider: $BlockStateProvider;
        constructor(trunkOffset: $IntProvider_, rootProvider: $BlockStateProvider, aboveRootPlacement: ($AboveRootPlacement_) | undefined, mangroveRootPlacement: $MangroveRootPlacement_);
    }
    export class $RootPlacerType<P extends $RootPlacer> {
        codec(): $MapCodec<P>;
        static MANGROVE_ROOT_PLACER: $RootPlacerType<$MangroveRootPlacer>;
        constructor(codec: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $RootPlacerType}.
     */
    export type $RootPlacerType_<P> = RegistryTypes.WorldgenRootPlacerType;
}
