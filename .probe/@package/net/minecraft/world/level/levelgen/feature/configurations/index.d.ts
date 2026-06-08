import { $FeatureSize } from "@package/net/minecraft/world/level/levelgen/feature/featuresize";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $TreeDecorator } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $Codec } from "@package/com/mojang/serialization";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $TrunkPlacer } from "@package/net/minecraft/world/level/levelgen/feature/trunkplacers";
import { $FoliagePlacer } from "@package/net/minecraft/world/level/levelgen/feature/foliageplacers";
import { $RuleBasedBlockStateProvider_, $BlockStateProvider, $RuleBasedBlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $RuleTest, $RuleTest_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $RootPlacer } from "@package/net/minecraft/world/level/levelgen/feature/rootplacers";
import { $List, $List_ } from "@package/java/util";
import { $CaveSurface_, $PlacedFeature, $CaveSurface } from "@package/net/minecraft/world/level/levelgen/placement";
import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockPos, $Holder_, $HolderSet, $HolderSet_, $Holder, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $FloatProvider, $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SpikeFeature$EndSpike, $ConfiguredFeature, $WeightedPlacedFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $MultifaceBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $GeodeLayerSettings, $GeodeBlockSettings, $GeodeCrackSettings } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/feature/configurations" {
    export class $UnderwaterMagmaConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$UnderwaterMagmaConfiguration>;
        floorSearchRange: number;
        placementRadiusAroundFloor: number;
        placementProbabilityPerValidPosition: number;
        constructor(arg0: number, arg1: number, arg2: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $OreConfiguration$TargetBlockState {
        static CODEC: $Codec<$OreConfiguration$TargetBlockState>;
        state: $BlockState;
        target: $RuleTest;
        constructor(arg0: $RuleTest_, arg1: $BlockState_);
    }
    export class $RandomFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        features: $List<$WeightedPlacedFeature>;
        static CODEC: $Codec<$RandomFeatureConfiguration>;
        defaultFeature: $Holder<$PlacedFeature>;
        constructor(arg0: $List_<$WeightedPlacedFeature>, arg1: $Holder_<$PlacedFeature>);
    }
    export class $VegetationPatchConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        vegetationFeature: $Holder<$PlacedFeature>;
        extraEdgeColumnChance: number;
        static CODEC: $Codec<$VegetationPatchConfiguration>;
        depth: $IntProvider;
        surface: $CaveSurface;
        vegetationChance: number;
        extraBottomBlockChance: number;
        replaceable: $TagKey<$Block>;
        xzRadius: $IntProvider;
        groundState: $BlockStateProvider;
        verticalRange: number;
        constructor(arg0: $TagKey_<$Block>, arg1: $BlockStateProvider, arg2: $Holder_<$PlacedFeature>, arg3: $CaveSurface_, arg4: $IntProvider_, arg5: number, arg6: number, arg7: number, arg8: $IntProvider_, arg9: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $RootSystemConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        hangingRootsVerticalSpan: number;
        static CODEC: $Codec<$RootSystemConfiguration>;
        allowedVerticalWaterForTree: number;
        hangingRootPlacementAttempts: number;
        rootReplaceable: $TagKey<$Block>;
        rootStateProvider: $BlockStateProvider;
        requiredVerticalSpaceForTree: number;
        rootPlacementAttempts: number;
        allowedTreePosition: $BlockPredicate;
        hangingRootRadius: number;
        hangingRootStateProvider: $BlockStateProvider;
        rootRadius: number;
        rootColumnMaxHeight: number;
        treeFeature: $Holder<$PlacedFeature>;
        constructor(arg0: $Holder_<$PlacedFeature>, arg1: number, arg2: number, arg3: $TagKey_<$Block>, arg4: $BlockStateProvider, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $BlockStateProvider, arg10: number, arg11: number, arg12: $BlockPredicate);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $ReplaceBlockConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$ReplaceBlockConfiguration>;
        targetStates: $List<$OreConfiguration$TargetBlockState>;
        constructor(arg0: $BlockState_, arg1: $BlockState_);
        constructor(arg0: $List_<$OreConfiguration$TargetBlockState>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $TwistingVinesConfig extends $Record implements $FeatureConfiguration {
        maxHeight(): number;
        spreadHeight(): number;
        spreadWidth(): number;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$TwistingVinesConfig>;
        constructor(arg0: number, arg1: number, arg2: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $LargeDripstoneConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        minRadiusForWind: number;
        static CODEC: $Codec<$LargeDripstoneConfiguration>;
        maxColumnRadiusToCaveHeightRatio: number;
        heightScale: $FloatProvider;
        stalactiteBluntness: $FloatProvider;
        columnRadius: $IntProvider;
        floorToCeilingSearchRange: number;
        stalagmiteBluntness: $FloatProvider;
        windSpeed: $FloatProvider;
        minBluntnessForWind: number;
        constructor(arg0: number, arg1: $IntProvider_, arg2: $FloatProvider, arg3: number, arg4: $FloatProvider, arg5: $FloatProvider, arg6: $FloatProvider, arg7: number, arg8: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $FeatureConfiguration {
        static NONE: $NoneFeatureConfiguration;
    }
    export interface $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $NetherForestVegetationConfig extends $BlockPileConfiguration {
        static CODEC: $Codec<$NetherForestVegetationConfig>;
        spreadHeight: number;
        spreadWidth: number;
        stateProvider: $BlockStateProvider;
        constructor(arg0: $BlockStateProvider, arg1: number, arg2: number);
    }
    export class $SculkPatchConfiguration extends $Record implements $FeatureConfiguration {
        chargeCount(): number;
        amountPerCharge(): number;
        catalystChance(): number;
        extraRareGrowths(): $IntProvider;
        growthRounds(): number;
        spreadAttempts(): number;
        spreadRounds(): number;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SculkPatchConfiguration>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $IntProvider_, arg6: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $CountConfiguration implements $FeatureConfiguration {
        count(): $IntProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$CountConfiguration>;
        constructor(arg0: number);
        constructor(arg0: $IntProvider_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $HugeMushroomFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        capProvider: $BlockStateProvider;
        static CODEC: $Codec<$HugeMushroomFeatureConfiguration>;
        stemProvider: $BlockStateProvider;
        foliageRadius: number;
        constructor(arg0: $BlockStateProvider, arg1: $BlockStateProvider, arg2: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $TreeConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        foliagePlacer: $FoliagePlacer;
        trunkProvider: $BlockStateProvider;
        static CODEC: $Codec<$TreeConfiguration>;
        trunkPlacer: $TrunkPlacer;
        rootPlacer: ($RootPlacer) | undefined;
        decorators: $List<$TreeDecorator>;
        foliageProvider: $BlockStateProvider;
        ignoreVines: boolean;
        minimumSize: $FeatureSize;
        forceDirt: boolean;
        dirtProvider: $BlockStateProvider;
        constructor(arg0: $BlockStateProvider, arg1: $TrunkPlacer, arg2: $BlockStateProvider, arg3: $FoliagePlacer, arg4: ($RootPlacer) | undefined, arg5: $BlockStateProvider, arg6: $FeatureSize, arg7: $List_<$TreeDecorator>, arg8: boolean, arg9: boolean);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $RandomPatchConfiguration extends $Record implements $FeatureConfiguration {
        feature(): $Holder<$PlacedFeature>;
        tries(): number;
        ySpread(): number;
        xzSpread(): number;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$RandomPatchConfiguration>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Holder_<$PlacedFeature>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $BlockStateConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$BlockStateConfiguration>;
        state: $BlockState;
        constructor(arg0: $BlockState_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $TreeConfiguration$TreeConfigurationBuilder {
        build(): $TreeConfiguration;
        ignoreVines(): $TreeConfiguration$TreeConfigurationBuilder;
        decorators(arg0: $List_<$TreeDecorator>): $TreeConfiguration$TreeConfigurationBuilder;
        forceDirt(): $TreeConfiguration$TreeConfigurationBuilder;
        dirt(arg0: $BlockStateProvider): $TreeConfiguration$TreeConfigurationBuilder;
        trunkProvider: $BlockStateProvider;
        foliageProvider: $BlockStateProvider;
        constructor(arg0: $BlockStateProvider, arg1: $TrunkPlacer, arg2: $BlockStateProvider, arg3: $FoliagePlacer, arg4: ($RootPlacer) | undefined, arg5: $FeatureSize);
        constructor(arg0: $BlockStateProvider, arg1: $TrunkPlacer, arg2: $BlockStateProvider, arg3: $FoliagePlacer, arg4: $FeatureSize);
    }
    export class $NoneFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$NoneFeatureConfiguration>;
        static INSTANCE: $NoneFeatureConfiguration;
        constructor();
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $ReplaceSphereConfiguration implements $FeatureConfiguration {
        radius(): $IntProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$ReplaceSphereConfiguration>;
        targetState: $BlockState;
        replaceState: $BlockState;
        constructor(arg0: $BlockState_, arg1: $BlockState_, arg2: $IntProvider_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $SpringConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        holeCount: number;
        static CODEC: $Codec<$SpringConfiguration>;
        rockCount: number;
        requiresBlockBelow: boolean;
        state: $FluidState;
        validBlocks: $HolderSet<$Block>;
        constructor(arg0: $FluidState, arg1: boolean, arg2: number, arg3: number, arg4: $HolderSet_<$Block>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $EndGatewayConfiguration implements $FeatureConfiguration {
        static knownExit(arg0: $BlockPos_, arg1: boolean): $EndGatewayConfiguration;
        getExit(): ($BlockPos) | undefined;
        isExitExact(): boolean;
        static delayedExitSearch(): $EndGatewayConfiguration;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$EndGatewayConfiguration>;
        get exit(): ($BlockPos) | undefined;
        get exitExact(): boolean;
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $OreConfiguration implements $FeatureConfiguration {
        static target(arg0: $RuleTest_, arg1: $BlockState_): $OreConfiguration$TargetBlockState;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        discardChanceOnAirExposure: number;
        static CODEC: $Codec<$OreConfiguration>;
        size: number;
        targetStates: $List<$OreConfiguration$TargetBlockState>;
        constructor(arg0: $RuleTest_, arg1: $BlockState_, arg2: number);
        constructor(arg0: $RuleTest_, arg1: $BlockState_, arg2: number, arg3: number);
        constructor(arg0: $List_<$OreConfiguration$TargetBlockState>, arg1: number);
        constructor(arg0: $List_<$OreConfiguration$TargetBlockState>, arg1: number, arg2: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $LayerConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$LayerConfiguration>;
        state: $BlockState;
        height: number;
        constructor(arg0: number, arg1: $BlockState_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $GeodeConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$GeodeConfiguration>;
        geodeLayerSettings: $GeodeLayerSettings;
        useAlternateLayer0Chance: number;
        pointOffset: $IntProvider;
        minGenOffset: number;
        noiseMultiplier: number;
        maxGenOffset: number;
        usePotentialPlacementsChance: number;
        geodeBlockSettings: $GeodeBlockSettings;
        geodeCrackSettings: $GeodeCrackSettings;
        invalidBlocksThreshold: number;
        placementsRequireLayer0Alternate: boolean;
        static CHANCE_RANGE: $Codec<number>;
        distributionPoints: $IntProvider;
        outerWallDistance: $IntProvider;
        constructor(arg0: $GeodeBlockSettings, arg1: $GeodeLayerSettings, arg2: $GeodeCrackSettings, arg3: number, arg4: number, arg5: boolean, arg6: $IntProvider_, arg7: $IntProvider_, arg8: $IntProvider_, arg9: number, arg10: number, arg11: number, arg12: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $DeltaFeatureConfiguration implements $FeatureConfiguration {
        size(): $IntProvider;
        contents(): $BlockState;
        rim(): $BlockState;
        rimSize(): $IntProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$DeltaFeatureConfiguration>;
        constructor(arg0: $BlockState_, arg1: $BlockState_, arg2: $IntProvider_, arg3: $IntProvider_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $DiskConfiguration extends $Record implements $FeatureConfiguration {
        target(): $BlockPredicate;
        halfHeight(): number;
        radius(): $IntProvider;
        stateProvider(): $RuleBasedBlockStateProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$DiskConfiguration>;
        constructor(arg0: $RuleBasedBlockStateProvider_, arg1: $BlockPredicate, arg2: $IntProvider_, arg3: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $RandomBooleanFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$RandomBooleanFeatureConfiguration>;
        featureTrue: $Holder<$PlacedFeature>;
        featureFalse: $Holder<$PlacedFeature>;
        constructor(arg0: $Holder_<$PlacedFeature>, arg1: $Holder_<$PlacedFeature>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $SimpleRandomFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        features: $HolderSet<$PlacedFeature>;
        static CODEC: $Codec<$SimpleRandomFeatureConfiguration>;
        constructor(arg0: $HolderSet_<$PlacedFeature>);
    }
    export class $BlockPileConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$BlockPileConfiguration>;
        stateProvider: $BlockStateProvider;
        constructor(arg0: $BlockStateProvider);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $MultifaceGrowthConfiguration implements $FeatureConfiguration {
        getShuffledDirectionsExcept(arg0: $RandomSource, arg1: $Direction_): $List<$Direction>;
        getShuffledDirections(arg0: $RandomSource): $List<$Direction>;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        canPlaceOnWall: boolean;
        chanceOfSpreading: number;
        static CODEC: $Codec<$MultifaceGrowthConfiguration>;
        canPlaceOnCeiling: boolean;
        searchRange: number;
        canPlaceOnFloor: boolean;
        canBePlacedOn: $HolderSet<$Block>;
        placeBlock: $MultifaceBlock;
        constructor(arg0: $MultifaceBlock, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: $HolderSet_<$Block>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $ProbabilityFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$ProbabilityFeatureConfiguration>;
        probability: number;
        constructor(arg0: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $SimpleBlockConfiguration extends $Record implements $FeatureConfiguration {
        toPlace(): $BlockStateProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SimpleBlockConfiguration>;
        constructor(arg0: $BlockStateProvider);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $ColumnFeatureConfiguration implements $FeatureConfiguration {
        height(): $IntProvider;
        reach(): $IntProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$ColumnFeatureConfiguration>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $BlockColumnConfiguration extends $Record implements $FeatureConfiguration {
        static layer(arg0: $IntProvider_, arg1: $BlockStateProvider): $BlockColumnConfiguration$Layer;
        layers(): $List<$BlockColumnConfiguration$Layer>;
        direction(): $Direction;
        static simple(arg0: $IntProvider_, arg1: $BlockStateProvider): $BlockColumnConfiguration;
        allowedPlacement(): $BlockPredicate;
        prioritizeTip(): boolean;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$BlockColumnConfiguration>;
        constructor(arg0: $List_<$BlockColumnConfiguration$Layer_>, arg1: $Direction_, arg2: $BlockPredicate, arg3: boolean);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $DripstoneClusterConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        chanceOfDripstoneColumnAtMaxDistanceFromCenter: number;
        heightDeviation: number;
        static CODEC: $Codec<$DripstoneClusterConfiguration>;
        density: $FloatProvider;
        dripstoneBlockLayerThickness: $IntProvider;
        maxStalagmiteStalactiteHeightDiff: number;
        floorToCeilingSearchRange: number;
        wetness: $FloatProvider;
        radius: $IntProvider;
        maxDistanceFromCenterAffectingHeightBias: number;
        maxDistanceFromEdgeAffectingChanceOfDripstoneColumn: number;
        height: $IntProvider;
        constructor(arg0: number, arg1: $IntProvider_, arg2: $IntProvider_, arg3: number, arg4: number, arg5: $IntProvider_, arg6: $FloatProvider, arg7: $FloatProvider, arg8: number, arg9: number, arg10: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $BlockColumnConfiguration$Layer extends $Record {
        state(): $BlockStateProvider;
        height(): $IntProvider;
        static CODEC: $Codec<$BlockColumnConfiguration$Layer>;
        constructor(arg0: $IntProvider_, arg1: $BlockStateProvider);
    }
    export class $SpikeConfiguration implements $FeatureConfiguration {
        getSpikes(): $List<$SpikeFeature$EndSpike>;
        isCrystalInvulnerable(): boolean;
        getCrystalBeamTarget(): $BlockPos;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SpikeConfiguration>;
        constructor(arg0: boolean, arg1: $List_<$SpikeFeature$EndSpike>, arg2: $BlockPos_);
        get spikes(): $List<$SpikeFeature$EndSpike>;
        get crystalInvulnerable(): boolean;
        get crystalBeamTarget(): $BlockPos;
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $PointedDripstoneConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$PointedDripstoneConfiguration>;
        chanceOfTallerDripstone: number;
        chanceOfSpreadRadius3: number;
        chanceOfSpreadRadius2: number;
        chanceOfDirectionalSpread: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
}
