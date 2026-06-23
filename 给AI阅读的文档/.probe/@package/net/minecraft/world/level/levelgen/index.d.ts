import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $MapCodec_, $DataResult, $DynamicOps, $Codec, $Lifecycle, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SimplexNoise, $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters_, $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $Set_, $Map, $OptionalInt, $List, $Map_, $List_, $OptionalLong, $Set, $BitSet } from "@package/java/util";
import { $RandomSource, $CubicSpline, $ToFloatFunction, $KeyDispatchDataCodec, $StringRepresentable, $KeyDispatchDataCodec_ } from "@package/net/minecraft/util";
import { $Function, $Supplier, $Predicate_, $Predicate, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $ArrayCache } from "@package/com/ishland/c2me/opts/dfc/common/util";
import { $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos_, $Holder$Reference, $RegistryAccess$Frozen, $Holder, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $HolderGetter, $Holder_, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $CarvingContext } from "@package/net/minecraft/world/level/levelgen/carver";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $StringBuilder, $Enum, $Record } from "@package/java/lang";
import { $TerrainAdjustment_, $BoundingBox, $TerrainAdjustment } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ISimpleRandom, $IAtomicSimpleRandomDeriver, $IXoroshiro128PlusPlusRandomSplitter, $IDensityFunctionTypesEndIslands, $IBelowZeroRetrogen, $IXoroshiro128PlusPlusRandomImpl, $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper, $IAquiferSamplerFluidLevel, $IXoroshiro128PlusPlusRandom, $IXoroshiro128PlusPlusRandomDeriver, $IDensityFunctionsCaveScaler, $IChunkNoiseSamplerDensityInterpolator, $IStructureWeightSampler, $IChunkNoiseSampler, $ICheckedRandomSplitter, $IAquiferSamplerImpl, $INoiseChunkGenerator } from "@package/com/ishland/c2me/base/mixin/access";
import { $EvalType_ } from "@package/com/ishland/c2me/opts/dfc/common/ast";
import { $ChunkPos, $NoiseColumn, $LevelSimulatedReader, $CustomSpawner, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $Blender$BlendingOutput, $Blender } from "@package/net/minecraft/world/level/levelgen/blending";
import { $BiomeResolver_, $BiomeSource, $Climate$ParameterPoint, $Climate$Sampler, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeResolver, $Climate$ParameterPoint_, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorSettings } from "@package/net/minecraft/world/level/levelgen/flat";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $ProtoChunk, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $PrimaryLevelData$SpecialWorldProperty, $PrimaryLevelData$SpecialWorldProperty_ } from "@package/net/minecraft/world/level/storage";
import { $CaveSurface_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $IFastCacheLike, $ICoordinatesFilling, $NoiseRouterExtension, $IPreloadedCoordinates, $IArrayCacheCapable } from "@package/com/ishland/c2me/opts/dfc/common/ducks";
import { $ExtendedSurfaceContext } from "@package/org/embeddedt/modernfix/world/gen";
import { $Stream } from "@package/java/util/stream";
import { $DebugChunkGeneratorAccessor } from "@package/net/fabricmc/fabric/mixin/registry/sync";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Double2DoubleFunction } from "@package/it/unimi/dsi/fastutil/doubles";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LevelStem_, $DimensionType, $LevelStem, $DimensionType_ } from "@package/net/minecraft/world/level/dimension";
export * as structure from "@package/net/minecraft/world/level/levelgen/structure";
export * as placement from "@package/net/minecraft/world/level/levelgen/placement";
export * as feature from "@package/net/minecraft/world/level/levelgen/feature";
export * as blockpredicates from "@package/net/minecraft/world/level/levelgen/blockpredicates";
export * as blending from "@package/net/minecraft/world/level/levelgen/blending";
export * as synth from "@package/net/minecraft/world/level/levelgen/synth";
export * as carver from "@package/net/minecraft/world/level/levelgen/carver";
export * as heightproviders from "@package/net/minecraft/world/level/levelgen/heightproviders";
export * as flat from "@package/net/minecraft/world/level/levelgen/flat";
export * as presets from "@package/net/minecraft/world/level/levelgen/presets";
export * as material from "@package/net/minecraft/world/level/levelgen/material";

declare module "@package/net/minecraft/world/level/levelgen" {
    export class $DensityFunctions$HolderHolder extends $Record implements $DensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        "function"(): $Holder<$DensityFunction>;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        constructor(arg0: $Holder_<$DensityFunction>);
    }
    export class $Xoroshiro128PlusPlus implements $IXoroshiro128PlusPlusRandomImpl {
        nextLong(): number;
        setSeedLo(arg0: number): void;
        getSeedHi(): number;
        setSeedHi(arg0: number): void;
        getSeedLo(): number;
        static CODEC: $Codec<$Xoroshiro128PlusPlus>;
        constructor(seed: $RandomSupport$Seed128bit_);
        constructor(seedLo: number, arg1: number);
    }
    export class $DensityFunctions$Constant extends $Record implements $DensityFunction$SimpleFunction {
        value(): number;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static ZERO: $DensityFunctions$Constant;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Constant>;
        constructor(arg0: number);
    }
    export class $SurfaceRules$ConditionSource {
        static bootstrap(registry: $Registry<$MapCodec_<$SurfaceRules$ConditionSource>>): $MapCodec<$SurfaceRules$ConditionSource>;
        static CODEC: $Codec<$SurfaceRules$ConditionSource>;
    }
    export interface $SurfaceRules$ConditionSource extends $Function<$SurfaceRules$Context, $SurfaceRules$Condition> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$ConditionSource>;
    }
    export class $NoiseChunk$CacheOnce implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$isActualCache(): boolean;
        c2me$withDelegate(delegate: $DensityFunction_): $DensityFunction;
        c2me$getDelegate(): $DensityFunction;
        c2me$describeCacheLike(): string;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        this$0: $NoiseChunk;
        constructor(_function: $NoiseChunk, arg1: $DensityFunction_);
    }
    export class $OreVeinifier$VeinType extends $Enum<$OreVeinifier$VeinType> {
    }
    /**
     * Values that may be interpreted as {@link $OreVeinifier$VeinType}.
     */
    export type $OreVeinifier$VeinType_ = "copper" | "iron";
    export class $DensityFunctions$ShiftB extends $Record implements $DensityFunctions$ShiftNoise {
        compute(arg0: $DensityFunction$FunctionContext): number;
        offsetNoise(): $DensityFunction$NoiseHolder;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        compute(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$ShiftB>;
        constructor(arg0: $DensityFunction$NoiseHolder_);
    }
    export class $DensityFunctions$ShiftA extends $Record implements $DensityFunctions$ShiftNoise {
        compute(arg0: $DensityFunction$FunctionContext): number;
        offsetNoise(): $DensityFunction$NoiseHolder;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        compute(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$ShiftA>;
        constructor(arg0: $DensityFunction$NoiseHolder_);
    }
    export class $SurfaceRules$VerticalGradientConditionSource$1VerticalGradientCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $NoiseRouter extends $Record implements $NoiseRouterExtension {
        erosion(): $DensityFunction;
        vegetation(): $DensityFunction;
        ridges(): $DensityFunction;
        continents(): $DensityFunction;
        lavaNoise(): $DensityFunction;
        veinRidged(): $DensityFunction;
        veinGap(): $DensityFunction;
        veinToggle(): $DensityFunction;
        depth(): $DensityFunction;
        barrierNoise(): $DensityFunction;
        temperature(): $DensityFunction;
        finalDensity(): $DensityFunction;
        c2me$setOriginalNoiseRouter(originalNoiseRouter: $NoiseRouter_): void;
        initialDensityWithoutJaggedness(): $DensityFunction;
        c2me$getOriginalNoiseRouter(): $NoiseRouter;
        c2me$setFinalFinalDensity(densityFunction: $DensityFunction_): void;
        c2me$getFinalFinalDensity(): $DensityFunction;
        fluidLevelSpreadNoise(): $DensityFunction;
        fluidLevelFloodednessNoise(): $DensityFunction;
        mapAll(visitor: $DensityFunction$Visitor_): $NoiseRouter;
        static CODEC: $Codec<$NoiseRouter>;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_, arg5: $DensityFunction_, arg6: $DensityFunction_, arg7: $DensityFunction_, arg8: $DensityFunction_, arg9: $DensityFunction_, arg10: $DensityFunction_, arg11: $DensityFunction_, arg12: $DensityFunction_, arg13: $DensityFunction_, arg14: $DensityFunction_);
    }
    export class $RandomState {
        router(): $NoiseRouter;
        static create(registries: $HolderGetter$Provider_, settingsKey: $ResourceKey_<$NoiseGeneratorSettings>, levelSeed: number): $RandomState;
        static create(settings: $NoiseGeneratorSettings_, noiseParametersGetter: $HolderGetter<$NormalNoise$NoiseParameters_>, levelSeed: number): $RandomState;
        sampler(): $Climate$Sampler;
        getOrCreateNoise(resourceKey: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
        getOrCreateRandomFactory(location: $ResourceLocation_): $PositionalRandomFactory;
        surfaceSystem(): $SurfaceSystem;
        aquiferRandom(): $PositionalRandomFactory;
        oreRandom(): $PositionalRandomFactory;
        random: $PositionalRandomFactory;
    }
    export class $WorldgenRandom$Algorithm extends $Enum<$WorldgenRandom$Algorithm> {
        static values(): $WorldgenRandom$Algorithm[];
        static valueOf(arg0: string): $WorldgenRandom$Algorithm;
        newInstance(seed: number): $RandomSource;
        static LEGACY: $WorldgenRandom$Algorithm;
        static XOROSHIRO: $WorldgenRandom$Algorithm;
    }
    /**
     * Values that may be interpreted as {@link $WorldgenRandom$Algorithm}.
     */
    export type $WorldgenRandom$Algorithm_ = "legacy" | "xoroshiro";
    export class $DensityFunctions$MulOrAdd extends $Record implements $DensityFunctions$PureTransformer, $DensityFunctions$TwoArgumentSimpleFunction {
        type(): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        transform(arg0: number): number;
        argument(): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        argument1(): $DensityFunction;
        argument2(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        specificType(): $DensityFunctions$MulOrAdd$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        constructor(arg0: $DensityFunctions$MulOrAdd$Type_, arg1: $DensityFunction_, arg2: number, arg3: number, arg4: number);
    }
    export class $DensityFunctions$PureTransformer {
    }
    export interface $DensityFunctions$PureTransformer extends $DensityFunction {
        transform(value: number): number;
        compute(context: $DensityFunction$FunctionContext): number;
        input(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
    }
    export class $RandomState$1NoiseWiringHelper implements $DensityFunction$Visitor {
        visitNoise(noiseHolder: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
    }
    export class $DensityFunctions$MulOrAdd$Type extends $Enum<$DensityFunctions$MulOrAdd$Type> {
        static values(): $DensityFunctions$MulOrAdd$Type[];
        static valueOf(arg0: string): $DensityFunctions$MulOrAdd$Type;
        static ADD: $DensityFunctions$MulOrAdd$Type;
        static MUL: $DensityFunctions$MulOrAdd$Type;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$MulOrAdd$Type}.
     */
    export type $DensityFunctions$MulOrAdd$Type_ = "mul" | "add";
    export class $SurfaceRules$BlockRuleSource extends $Record implements $SurfaceRules$RuleSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
    }
    export class $GenerationStep$Decoration extends $Enum<$GenerationStep$Decoration> implements $StringRepresentable {
        getName(): string;
        static values(): $GenerationStep$Decoration[];
        static valueOf(arg0: string): $GenerationStep$Decoration;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static RAW_GENERATION: $GenerationStep$Decoration;
        static UNDERGROUND_STRUCTURES: $GenerationStep$Decoration;
        static LOCAL_MODIFICATIONS: $GenerationStep$Decoration;
        static TOP_LAYER_MODIFICATION: $GenerationStep$Decoration;
        static CODEC: $Codec<$GenerationStep$Decoration>;
        static UNDERGROUND_DECORATION: $GenerationStep$Decoration;
        static LAKES: $GenerationStep$Decoration;
        static SURFACE_STRUCTURES: $GenerationStep$Decoration;
        static STRONGHOLDS: $GenerationStep$Decoration;
        static FLUID_SPRINGS: $GenerationStep$Decoration;
        static VEGETAL_DECORATION: $GenerationStep$Decoration;
        static UNDERGROUND_ORES: $GenerationStep$Decoration;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GenerationStep$Decoration}.
     */
    export type $GenerationStep$Decoration_ = "raw_generation" | "lakes" | "local_modifications" | "underground_structures" | "surface_structures" | "strongholds" | "underground_ores" | "underground_decoration" | "fluid_springs" | "vegetal_decoration" | "top_layer_modification";
    export class $SurfaceRules$TestRule extends $Record implements $SurfaceRules$SurfaceRule {
    }
    export class $Aquifer$FluidPicker {
    }
    export interface $Aquifer$FluidPicker {
        computeFluid(x: number, y: number, z: number): $Aquifer$FluidStatus;
    }
    /**
     * Values that may be interpreted as {@link $Aquifer$FluidPicker}.
     */
    export type $Aquifer$FluidPicker_ = ((arg0: number, arg1: number, arg2: number) => $Aquifer$FluidStatus);
    export class $DensityFunctions$RangeChoice extends $Record implements $DensityFunction {
        compute(context: $DensityFunction$FunctionContext): number;
        input(): $DensityFunction;
        maxValue(): number;
        whenInRange(): $DensityFunction;
        whenOutOfRange(): $DensityFunction;
        minValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        minInclusive(): number;
        maxExclusive(): number;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$RangeChoice>;
        static DATA_CODEC: $MapCodec<$DensityFunctions$RangeChoice>;
        constructor(arg0: $DensityFunction_, arg1: number, arg2: number, arg3: $DensityFunction_, arg4: $DensityFunction_);
    }
    export class $DensityFunctions$BeardifierMarker extends $Enum<$DensityFunctions$BeardifierMarker> implements $DensityFunctions$BeardifierOrMarker {
        static values(): $DensityFunctions$BeardifierMarker[];
        static valueOf(arg0: string): $DensityFunctions$BeardifierMarker;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static INSTANCE: $DensityFunctions$BeardifierMarker;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BeardifierMarker}.
     */
    export type $DensityFunctions$BeardifierMarker_ = "instance";
    export class $WorldDimensions$Complete extends $Record {
        dimensions(): $Registry<$LevelStem>;
        specialWorldProperty(): $PrimaryLevelData$SpecialWorldProperty;
        lifecycle(): $Lifecycle;
        dimensionsRegistryAccess(): $RegistryAccess$Frozen;
        constructor(dimensions: $Registry<$LevelStem_>, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_);
    }
    export class $RandomSupport {
        static mixStafford13(seed: number): number;
        static upgradeSeedTo128bit(seed: number): $RandomSupport$Seed128bit;
        static upgradeSeedTo128bitUnmixed(seed: number): $RandomSupport$Seed128bit;
        static seedFromHashOf(string: string): $RandomSupport$Seed128bit;
        static generateUniqueSeed(): number;
        static GOLDEN_RATIO_64: number;
        static SILVER_RATIO_64: number;
        constructor();
    }
    export class $XoroshiroRandomSource$XoroshiroPositionalRandomFactory implements $PositionalRandomFactory, $IXoroshiro128PlusPlusRandomDeriver, $IXoroshiro128PlusPlusRandomSplitter {
        at(x: number, y: number, z: number): $RandomSource;
        fromSeed(seed: number): $RandomSource;
        fromHashOf(name: string): $RandomSource;
        parityConfigString(builder: $StringBuilder): void;
        at(pos: $BlockPos_): $RandomSource;
        fromHashOf(name: $ResourceLocation_): $RandomSource;
        getSeedHi(): number;
        getSeedLo(): number;
        constructor(seedLo: number, arg1: number);
        get seedHi(): number;
        get seedLo(): number;
    }
    export class $DensityFunctions$Mapped extends $Record implements $DensityFunctions$PureTransformer {
        type(): $DensityFunctions$Mapped$Type;
        transform(value: number): number;
        static create(type: $DensityFunctions$Mapped$Type_, input: $DensityFunction_): $DensityFunctions$Mapped;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunctions$Mapped;
        compute(context: $DensityFunction$FunctionContext): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        constructor(arg0: $DensityFunctions$Mapped$Type_, arg1: $DensityFunction_, arg2: number, arg3: number);
    }
    export class $SurfaceRules$SequenceRule extends $Record implements $SurfaceRules$SurfaceRule {
        tryApply(i: number, j: number, k: number): $BlockState;
        rules(): $List<$SurfaceRules$SurfaceRule>;
        constructor(arg0: $List_<$SurfaceRules$SurfaceRule_>);
    }
    export class $PhantomSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        constructor();
    }
    export class $SurfaceRules$StoneDepthCheck extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    export class $NoiseRouterData$QuantizedSpaghettiRarity implements $IDensityFunctionsCaveScaler {
        static getSpaghettiRarity3D(value: number): number;
        static getSphaghettiRarity2D(value: number): number;
        static invokeScaleTunnels$c2me_base_$md$dd6cb9$1(value: number): number;
        static invokeScaleCaves$c2me_base_$md$dd6cb9$0(value: number): number;
        constructor();
    }
    export class $Density {
        static UNRECOVERABLY_DENSE: number;
        static UNRECOVERABLY_THIN: number;
        static SURFACE: number;
        constructor();
    }
    export class $DensityFunction$SimpleFunction {
    }
    export interface $DensityFunction$SimpleFunction extends $DensityFunction {
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
    }
    export class $SurfaceRules$StateRule extends $Record implements $SurfaceRules$SurfaceRule {
    }
    export class $SurfaceRules$RuleSource {
        static bootstrap(registry: $Registry<$MapCodec_<$SurfaceRules$RuleSource>>): $MapCodec<$SurfaceRules$RuleSource>;
        static CODEC: $Codec<$SurfaceRules$RuleSource>;
    }
    export interface $SurfaceRules$RuleSource extends $Function<$SurfaceRules$Context, $SurfaceRules$SurfaceRule> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
    }
    /**
     * Aquifers are responsible for non-sea level fluids found in terrain generation, but also managing that different aquifers don't intersect with each other in ways that would create undesirable fluid placement.
     * The aquifer interface itself is a modifier on a per-block basis. It computes a block state to be placed for each position in the world.
     * 
     * Aquifers work by first partitioning a single chunk into a low resolution grid. They then generate, via various noise layers, an `AquiferStatus` at each grid point.
     * At each point, the grid cell containing that point is calculated, and then of the eight grid corners, the three closest aquifers are found, by square euclidean distance.
     * Borders between aquifers are created by comparing nearby aquifers to see if the given point is near-equidistant from them, indicating a border if so, or fluid/air depending on the aquifer height if not.
     */
    export class $Aquifer {
        /**
         * Creates a standard noise based aquifer. This aquifer will place liquid (both water and lava), air, and stone as described above.
         */
        static create(chunk: $NoiseChunk, chunkPos: $ChunkPos, noiseRouter: $NoiseRouter_, positionalRandomFactory: $PositionalRandomFactory, minY: number, height: number, globalFluidPicker: $Aquifer$FluidPicker_): $Aquifer;
        /**
         * Creates a disabled, or no-op aquifer. This will fill any open areas below sea level with the default fluid.
         */
        static createDisabled(defaultFluid: $Aquifer$FluidPicker_): $Aquifer;
    }
    export interface $Aquifer {
        /**
         * Returns `true` if there should be a fluid update scheduled - due to a fluid block being placed in a possibly unsteady position - at the last position passed into `#computeState`.
         * This **must** be invoked only after `#computeState`, and will be using the same parameters as that method.
         */
        shouldScheduleFluidUpdate(): boolean;
        computeSubstance(context: $DensityFunction$FunctionContext, substance: number): $BlockState;
    }
    export class $DensityFunction$Visitor {
    }
    export interface $DensityFunction$Visitor {
        visitNoise(noiseHolder: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
        apply(densityFunction: $DensityFunction_): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$Visitor}.
     */
    export type $DensityFunction$Visitor_ = ((arg0: $DensityFunction) => $DensityFunction_);
    export class $Column$Ray extends $Column {
        constructor(edge: number, pointingUp: boolean);
    }
    export class $PatrolSpawner implements $CustomSpawner {
        tick(level: $ServerLevel, spawnEnemies: boolean, spawnFriendlies: boolean): number;
        constructor();
    }
    export class $DensityFunction {
        static CODEC: $Codec<$Holder<$DensityFunction>>;
        static DIRECT_CODEC: $Codec<$DensityFunction>;
        static HOLDER_HELPER_CODEC: $Codec<$DensityFunction>;
    }
    export interface $DensityFunction {
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        square(): $DensityFunction;
        minValue(): number;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction}.
     */
    export type $DensityFunction_ = RegistryTypes.WorldgenDensityFunction;
    export class $NoiseChunk$CacheAllInCell implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$isActualCache(): boolean;
        c2me$withDelegate(delegate: $DensityFunction_): $DensityFunction;
        c2me$getDelegate(): $DensityFunction;
        c2me$describeCacheLike(): string;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        noiseFiller: $DensityFunction;
        values: number[];
        this$0: $NoiseChunk;
        constructor(noiseFilter: $NoiseChunk, arg1: $DensityFunction_);
    }
    export class $DensityFunction$SinglePointContext extends $Record implements $DensityFunction$FunctionContext {
        blockX(): number;
        blockZ(): number;
        blockY(): number;
        getBlender(): $Blender;
        constructor(arg0: number, arg1: number, arg2: number);
        get blender(): $Blender;
    }
    export class $LegacyRandomSource$LegacyPositionalRandomFactory implements $PositionalRandomFactory, $IAtomicSimpleRandomDeriver, $ICheckedRandomSplitter {
        at(x: number, y: number, z: number): $RandomSource;
        fromSeed(seed: number): $RandomSource;
        fromHashOf(name: string): $RandomSource;
        parityConfigString(builder: $StringBuilder): void;
        at(pos: $BlockPos_): $RandomSource;
        fromHashOf(name: $ResourceLocation_): $RandomSource;
        getSeed(): number;
        constructor(seed: number);
        get seed(): number;
    }
    export class $WorldGenerationContext {
        getMinGenY(): number;
        getGenDepth(): number;
        constructor(generator: $ChunkGenerator, level: $LevelHeightAccessor);
        get minGenY(): number;
        get genDepth(): number;
    }
    export class $NoiseChunk$NoiseInterpolator implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IChunkNoiseSamplerDensityInterpolator, $IFastCacheLike {
        updateForY(x: number): void;
        updateForX(x: number): void;
        updateForZ(x: number): void;
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        selectCellYZ(y: number, z: number): void;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$isActualCache(): boolean;
        c2me$withDelegate(delegate: $DensityFunction_): $DensityFunction;
        c2me$getDelegate(): $DensityFunction;
        c2me$describeCacheLike(): string;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        invokeSwapBuffers(): void;
        invokeInterpolateY(x: number): void;
        invokeInterpolateX(x: number): void;
        invokeInterpolateZ(x: number): void;
        this$0: $NoiseChunk;
        slice0: number[][];
        slice1: number[][];
        constructor(noiseFilter: $NoiseChunk, arg1: $DensityFunction_);
    }
    export class $NoiseChunk$BlockStateFiller {
    }
    export interface $NoiseChunk$BlockStateFiller {
        calculate(context: $DensityFunction$FunctionContext): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $NoiseChunk$BlockStateFiller}.
     */
    export type $NoiseChunk$BlockStateFiller_ = ((arg0: $DensityFunction$FunctionContext) => $BlockState_);
    export class $DensityFunctions$Mapped$Type extends $Enum<$DensityFunctions$Mapped$Type> implements $StringRepresentable {
        static values(): $DensityFunctions$Mapped$Type[];
        static valueOf(arg0: string): $DensityFunctions$Mapped$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HALF_NEGATIVE: $DensityFunctions$Mapped$Type;
        codec: $KeyDispatchDataCodec<$DensityFunctions$Mapped>;
        static ABS: $DensityFunctions$Mapped$Type;
        static SQUARE: $DensityFunctions$Mapped$Type;
        static QUARTER_NEGATIVE: $DensityFunctions$Mapped$Type;
        static SQUEEZE: $DensityFunctions$Mapped$Type;
        static CUBE: $DensityFunctions$Mapped$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Mapped$Type}.
     */
    export type $DensityFunctions$Mapped$Type_ = "abs" | "square" | "cube" | "half_negative" | "quarter_negative" | "squeeze";
    export class $NoiseChunk$BlendAlpha implements $NoiseChunk$NoiseChunkDensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        wrapped(): $DensityFunction;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        this$0: $NoiseChunk;
        constructor(arg0: $NoiseChunk);
    }
    export class $GenerationStep$Carving extends $Enum<$GenerationStep$Carving> implements $StringRepresentable {
        getName(): string;
        static values(): $GenerationStep$Carving[];
        static valueOf(arg0: string): $GenerationStep$Carving;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$GenerationStep$Carving>;
        static LIQUID: $GenerationStep$Carving;
        static AIR: $GenerationStep$Carving;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GenerationStep$Carving}.
     */
    export type $GenerationStep$Carving_ = "air" | "liquid";
    export class $WorldDimensions extends $Record {
        get(stemKey: $ResourceKey_<$LevelStem>): ($LevelStem) | undefined;
        dimensions(): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        isDebug(): boolean;
        levels(): $ImmutableSet<$ResourceKey<$Level>>;
        overworld(): $ChunkGenerator;
        static keysInOrder(stemKeys: $Stream<$ResourceKey_<$LevelStem>>): $Stream<$ResourceKey<$LevelStem>>;
        bake(stemRegistry: $Registry<$LevelStem_>): $WorldDimensions$Complete;
        replaceOverworldGenerator(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator): $WorldDimensions;
        static withOverworld(stemMap: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, dimensionType: $Holder_<$DimensionType>, chunkGenerator: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static withOverworld(dimensionTypeRegistry: $Registry<$DimensionType_>, stemMap: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, chunkGenerator: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static checkStability(key: $ResourceKey_<$LevelStem>, stem: $LevelStem_): $Lifecycle;
        static CODEC: $MapCodec<$WorldDimensions>;
        constructor(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>);
        constructor(stemRegistry: $Registry<$LevelStem_>);
        get debug(): boolean;
    }
    export class $DensityFunctions$Marker extends $Record implements $DensityFunctions$MarkerOrMarked, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        wrapped(): $DensityFunction;
        minValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$isActualCache(): boolean;
        c2me$withDelegate(delegate: $DensityFunction_): $DensityFunction;
        c2me$getDelegate(): $DensityFunction;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        c2me$describeCacheLike(): string;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        constructor(arg0: $DensityFunctions$Marker$Type_, arg1: $DensityFunction_);
    }
    export class $WorldGenSettings extends $Record {
        static encode<T>(ops: $DynamicOps<T>, options: $WorldOptions, access: $RegistryAccess): $DataResult<T>;
        static encode<T>(ops: $DynamicOps<T>, options: $WorldOptions, dimensions: $WorldDimensions_): $DataResult<T>;
        dimensions(): $WorldDimensions;
        options(): $WorldOptions;
        static CODEC: $Codec<$WorldGenSettings>;
        constructor(arg0: $WorldOptions, arg1: $WorldDimensions_);
    }
    export class $SurfaceRules$LazyXZCondition extends $SurfaceRules$LazyCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $NoiseGeneratorSettings extends $Record {
        static nether(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static caves(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static end(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static dummy(): $NoiseGeneratorSettings;
        static bootstrap(context: $BootstrapContext<$NoiseGeneratorSettings_>): void;
        seaLevel(): number;
        oreVeinsEnabled(): boolean;
        noiseRouter(): $NoiseRouter;
        aquifersEnabled(): boolean;
        getRandomSource(): $WorldgenRandom$Algorithm;
        static floatingIslands(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        isAquifersEnabled(): boolean;
        static overworld(context: $BootstrapContext<never>, large: boolean, amplified: boolean): $NoiseGeneratorSettings;
        noiseSettings(): $NoiseSettings;
        defaultFluid(): $BlockState;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        useLegacyRandomSource(): boolean;
        /**
         * @deprecated
         */
        disableMobGeneration(): boolean;
        surfaceRule(): $SurfaceRules$RuleSource;
        defaultBlock(): $BlockState;
        static AMPLIFIED: $ResourceKey<$NoiseGeneratorSettings>;
        static CODEC: $Codec<$Holder<$NoiseGeneratorSettings>>;
        static OVERWORLD: $ResourceKey<$NoiseGeneratorSettings>;
        static NETHER: $ResourceKey<$NoiseGeneratorSettings>;
        static CAVES: $ResourceKey<$NoiseGeneratorSettings>;
        static DIRECT_CODEC: $Codec<$NoiseGeneratorSettings>;
        static END: $ResourceKey<$NoiseGeneratorSettings>;
        static FLOATING_ISLANDS: $ResourceKey<$NoiseGeneratorSettings>;
        static LARGE_BIOMES: $ResourceKey<$NoiseGeneratorSettings>;
        constructor(arg0: $NoiseSettings_, arg1: $BlockState_, arg2: $BlockState_, arg3: $NoiseRouter_, arg4: $SurfaceRules$RuleSource, arg5: $List_<$Climate$ParameterPoint_>, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean);
        get randomSource(): $WorldgenRandom$Algorithm;
    }
    /**
     * Values that may be interpreted as {@link $NoiseGeneratorSettings}.
     */
    export type $NoiseGeneratorSettings_ = RegistryTypes.WorldgenNoiseSettings;
    export class $DensityFunctions$Shift extends $Record implements $DensityFunctions$ShiftNoise {
        compute(arg0: $DensityFunction$FunctionContext): number;
        offsetNoise(): $DensityFunction$NoiseHolder;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        compute(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Shift>;
        constructor(arg0: $DensityFunction$NoiseHolder_);
    }
    /**
     * @deprecated
     */
    export class $DebugLevelSource extends $ChunkGenerator implements $DebugChunkGeneratorAccessor {
        static setZ_SIDE_LENGTH$fabric_registry_sync_v0_$md$dd6cb9$2(arg0: number): void;
        static setX_SIDE_LENGTH$fabric_registry_sync_v0_$md$dd6cb9$1(arg0: number): void;
        static setBLOCK_STATES$fabric_registry_sync_v0_$md$dd6cb9$0(arg0: $List_<any>): void;
        static initValidStates(): void;
        static getBlockStateFor(chunkX: number, chunkZ: number): $BlockState;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$DebugLevelSource>;
        static BARRIER_HEIGHT: number;
        static BARRIER: $BlockState;
        biomeSource: $BiomeSource;
        static AIR: $BlockState;
        static HEIGHT: number;
        constructor(biome: $Holder$Reference<$Biome_>);
        static set z_SIDE_LENGTH$fabric_registry_sync_v0_$md$dd6cb9$2(value: number);
        static set x_SIDE_LENGTH$fabric_registry_sync_v0_$md$dd6cb9$1(value: number);
        static set BLOCK_STATES$fabric_registry_sync_v0_$md$dd6cb9$0(value: $List_<any>);
    }
    export class $WorldOptions {
        seed(): number;
        generateBonusChest(): boolean;
        withSeed(seed: $OptionalLong): $WorldOptions;
        generateStructures(): boolean;
        static randomSeed(): number;
        static defaultWithRandomSeed(): $WorldOptions;
        isOldCustomizedWorld(): boolean;
        withBonusChest(generateBonusChest: boolean): $WorldOptions;
        withStructures(generateBonusChest: boolean): $WorldOptions;
        static parseSeed(seed: string): $OptionalLong;
        static CODEC: $MapCodec<$WorldOptions>;
        static DEMO_OPTIONS: $WorldOptions;
        constructor(seed: number, arg1: boolean, generateStructures: boolean);
        get oldCustomizedWorld(): boolean;
    }
    export class $GeodeLayerSettings {
        filling: number;
        static CODEC: $Codec<$GeodeLayerSettings>;
        outerLayer: number;
        innerLayer: number;
        middleLayer: number;
        constructor(filling: number, arg1: number, innerLayer: number, arg3: number);
    }
    /**
     * Modifies terrain noise to be flatter near structures such as villages.
     */
    export class $Beardifier implements $DensityFunctions$BeardifierOrMarker, $IStructureWeightSampler {
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        static forStructuresInChunk(structureManager: $StructureManager, chunkPos: $ChunkPos): $Beardifier;
        static getSTRUCTURE_WEIGHT_TABLE$c2me_base_$md$dd6cb9$0(): number[];
        static getBeardContribution(x: number, y: number, z: number, height: number): number;
        static getBuryContribution(x: number, y: number, y: number): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        getJunctionsIter(): $ObjectListIterator<$JigsawJunction>;
        getPiecesIter(): $ObjectListIterator<$Beardifier$Rigid>;
        junctionIterator: $ObjectListIterator<$JigsawJunction>;
        static BEARD_KERNEL_RADIUS: number;
        pieceIterator: $ObjectListIterator<$Beardifier$Rigid>;
        constructor(pieceIterator: $ObjectListIterator<$Beardifier$Rigid_>, junctionIterator: $ObjectListIterator<$JigsawJunction>);
        static get STRUCTURE_WEIGHT_TABLE$c2me_base_$md$dd6cb9$0(): number[];
        get junctionsIter(): $ObjectListIterator<$JigsawJunction>;
        get piecesIter(): $ObjectListIterator<$Beardifier$Rigid>;
    }
    export class $SurfaceRules$YConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    export class $SurfaceRules$WaterConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    export class $SurfaceRules$NoiseThresholdConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    export class $Heightmap {
        update(x: number, y: number, z: number, state: $BlockState_): boolean;
        setRawData(chunk: $ChunkAccess, type: $Heightmap$Types_, data: number[]): void;
        getRawData(): number[];
        getHighestTaken(x: number, z: number): number;
        getFirstAvailable(x: number, z: number): number;
        static primeHeightmaps(chunk: $ChunkAccess, types: $Set_<$Heightmap$Types_>): void;
        static MATERIAL_MOTION_BLOCKING: $Predicate<$BlockState>;
        static NOT_AIR: $Predicate<$BlockState>;
        constructor(chunk: $ChunkAccess, type: $Heightmap$Types_);
    }
    export class $SurfaceRules$LazyCondition implements $SurfaceRules$Condition {
        test(): boolean;
        compute(): boolean;
        getContextLastUpdate(): number;
        result: boolean;
        context: $SurfaceRules$Context;
        constructor(context: $SurfaceRules$Context);
        get contextLastUpdate(): number;
    }
    export class $NoiseRouterData {
        static nether(densityFunctions: $HolderGetter<$DensityFunction_>, noiseParameters: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static caves(densityFunctions: $HolderGetter<$DensityFunction_>, noiseParameters: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static end(densityFunctions: $HolderGetter<$DensityFunction_>): $NoiseRouter;
        static bootstrap(context: $BootstrapContext<$DensityFunction_>): $Holder<$DensityFunction>;
        static floatingIslands(densityFunctions: $HolderGetter<$DensityFunction_>, noiseParameters: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static overworld(densityFunctions: $HolderGetter<$DensityFunction_>, noiseParameters: $HolderGetter<$NormalNoise$NoiseParameters_>, large: boolean, amplified: boolean): $NoiseRouter;
        static none(): $NoiseRouter;
        static peaksAndValleys(weirdness: number): number;
        static ISLAND_CHUNK_DISTANCE: number;
        static CONTINENTS: $ResourceKey<$DensityFunction>;
        static JAGGEDNESS: $ResourceKey<$DensityFunction>;
        static GLOBAL_OFFSET: number;
        static RIDGES_FOLDED: $ResourceKey<$DensityFunction>;
        static FACTOR: $ResourceKey<$DensityFunction>;
        static EROSION: $ResourceKey<$DensityFunction>;
        static ISLAND_CHUNK_DISTANCE_SQR: number;
        static EROSION_LARGE: $ResourceKey<$DensityFunction>;
        static OFFSET: $ResourceKey<$DensityFunction>;
        static CONTINENTS_LARGE: $ResourceKey<$DensityFunction>;
        static RIDGES: $ResourceKey<$DensityFunction>;
        static DEPTH: $ResourceKey<$DensityFunction>;
        constructor();
    }
    export class $SurfaceRules$StoneDepthCheck$1StoneDepthCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $BelowZeroRetrogen implements $IBelowZeroRetrogen {
        static read(tag: $CompoundTag_): $BelowZeroRetrogen;
        hasBedrockHole(x: number, z: number): boolean;
        static getBiomeResolver(resolver: $BiomeResolver_, access: $ChunkAccess): $BiomeResolver;
        targetStatus(): $ChunkStatus;
        hasBedrockHoles(): boolean;
        applyBedrockMask(chunk: $ProtoChunk): void;
        static replaceOldBedrock(chunk: $ProtoChunk): void;
        getMissingBedrock(): $BitSet;
        invokeGetTargetStatus(): $ChunkStatus;
        static CODEC: $Codec<$BelowZeroRetrogen>;
        static UPGRADE_HEIGHT_ACCESSOR: $LevelHeightAccessor;
        get missingBedrock(): $BitSet;
    }
    export class $PositionalRandomFactory {
    }
    export interface $PositionalRandomFactory {
        at(pos: $BlockPos_): $RandomSource;
        at(x: number, y: number, z: number): $RandomSource;
        fromSeed(seed: number): $RandomSource;
        fromHashOf(name: string): $RandomSource;
        fromHashOf(name: $ResourceLocation_): $RandomSource;
        parityConfigString(builder: $StringBuilder): void;
    }
    export class $DensityFunctions$ShiftNoise {
    }
    export interface $DensityFunctions$ShiftNoise extends $DensityFunction {
        compute(x: number, arg1: number, y: number): number;
        maxValue(): number;
        offsetNoise(): $DensityFunction$NoiseHolder;
        minValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
    }
    export class $SurfaceRules$Context$TemperatureHelperCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $DensityFunctions$Spline$Coordinate extends $Record implements $ToFloatFunction<$DensityFunctions$Spline$Point> {
        apply(object: $DensityFunctions$Spline$Point_): number;
        "function"(): $Holder<$DensityFunction>;
        maxValue(): number;
        minValue(): number;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunctions$Spline$Coordinate;
        comap<C2>(converter: $Function_<C2, $DensityFunctions$Spline$Point>): $ToFloatFunction<C2>;
        static CODEC: $Codec<$DensityFunctions$Spline$Coordinate>;
        constructor(arg0: $Holder_<$DensityFunction>);
    }
    export class $SurfaceRules$Steep extends $Enum<$SurfaceRules$Steep> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Steep}.
     */
    export type $SurfaceRules$Steep_ = "instance";
    export class $Heightmap$Usage extends $Enum<$Heightmap$Usage> {
        static values(): $Heightmap$Usage[];
        static valueOf(arg0: string): $Heightmap$Usage;
        static WORLDGEN: $Heightmap$Usage;
        static LIVE_WORLD: $Heightmap$Usage;
        static CLIENT: $Heightmap$Usage;
    }
    /**
     * Values that may be interpreted as {@link $Heightmap$Usage}.
     */
    export type $Heightmap$Usage_ = "worldgen" | "live_world" | "client";
    export class $VerticalAnchor$AboveBottom extends $Record implements $VerticalAnchor {
        offset(): number;
        resolveY(arg0: $WorldGenerationContext): number;
        static CODEC: $Codec<$VerticalAnchor$AboveBottom>;
        constructor(arg0: number);
    }
    export class $Beardifier$Rigid extends $Record {
        box(): $BoundingBox;
        groundLevelDelta(): number;
        terrainAdjustment(): $TerrainAdjustment;
        constructor(box: $BoundingBox, terrainAdjustment: $TerrainAdjustment_, groundLevelDelta: number);
    }
    export class $XoroshiroRandomSource implements $RandomSource, $IXoroshiro128PlusPlusRandom {
        nextDouble(): number;
        nextInt(bound: number): number;
        nextInt(): number;
        setSeed(seed: number): void;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextGaussian(): number;
        fork(): $RandomSource;
        consumeCount(count: number): void;
        forkPositional(): $PositionalRandomFactory;
        nextInt(min: number, max: number): number;
        triangle(min: number, arg1: number): number;
        nextIntBetweenInclusive(min: number, max: number): number;
        getImplementation(): $Xoroshiro128PlusPlus;
        static CODEC: $Codec<$XoroshiroRandomSource>;
        constructor(seedLo: number, arg1: number);
        constructor(seed: $RandomSupport$Seed128bit_);
        constructor(seed: number);
        set seed(value: number);
        get implementation(): $Xoroshiro128PlusPlus;
    }
    export class $SurfaceRules$AbovePreliminarySurface extends $Enum<$SurfaceRules$AbovePreliminarySurface> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$AbovePreliminarySurface}.
     */
    export type $SurfaceRules$AbovePreliminarySurface_ = "instance";
    export class $DensityFunctions$BlendDensity extends $Record implements $DensityFunctions$TransformerWithContext {
        transform(arg0: $DensityFunction$FunctionContext, arg1: number): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        compute(arg0: $DensityFunction$FunctionContext): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$BlendDensity>;
        constructor(arg0: $DensityFunction_);
    }
    export class $SurfaceRules$NoiseThresholdConditionSource$1NoiseThresholdCondition extends $SurfaceRules$LazyXZCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules$VerticalGradientConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    export class $DensityFunctions$BlendOffset extends $Enum<$DensityFunctions$BlendOffset> implements $DensityFunction$SimpleFunction {
        static values(): $DensityFunctions$BlendOffset[];
        static valueOf(arg0: string): $DensityFunctions$BlendOffset;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
        static INSTANCE: $DensityFunctions$BlendOffset;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendOffset}.
     */
    export type $DensityFunctions$BlendOffset_ = "instance";
    /**
     * Represents a resolvable height value, or y coordinate, based on the world minimum and maximum height.
     * Can take one of the following three forms:
     * 
     * - An absolute y value (`Absolute`).
     * - A height above the lowest valid y value in the level (`AboveBottom`).
     * - A height below the highest valid y value in the level (`BelowTop`).
     */
    export class $VerticalAnchor {
        static top(): $VerticalAnchor;
        static absolute(value: number): $VerticalAnchor;
        static bottom(): $VerticalAnchor;
        static belowTop(value: number): $VerticalAnchor;
        static aboveBottom(value: number): $VerticalAnchor;
        static CODEC: $Codec<$VerticalAnchor>;
        static TOP: $VerticalAnchor;
        static BOTTOM: $VerticalAnchor;
    }
    export interface $VerticalAnchor {
        resolveY(context: $WorldGenerationContext): number;
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor}.
     */
    export type $VerticalAnchor_ = ((arg0: $WorldGenerationContext) => number);
    export class $VerticalAnchor$BelowTop extends $Record implements $VerticalAnchor {
        offset(): number;
        resolveY(arg0: $WorldGenerationContext): number;
        static CODEC: $Codec<$VerticalAnchor$BelowTop>;
        constructor(arg0: number);
    }
    export class $DensityFunctions$TransformerWithContext {
    }
    export interface $DensityFunctions$TransformerWithContext extends $DensityFunction {
        transform(context: $DensityFunction$FunctionContext, value: number): number;
        compute(context: $DensityFunction$FunctionContext): number;
        input(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
    }
    export class $SurfaceRules$SurfaceRule {
    }
    export interface $SurfaceRules$SurfaceRule {
        tryApply(x: number, y: number, z: number): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SurfaceRule}.
     */
    export type $SurfaceRules$SurfaceRule_ = ((arg0: number, arg1: number, arg2: number) => $BlockState_);
    export class $DensityFunction$NoiseHolder extends $Record {
        noiseData(): $Holder<$NormalNoise$NoiseParameters>;
        getValue(x: number, arg1: number, y: number): number;
        maxValue(): number;
        noise(): $NormalNoise;
        static CODEC: $Codec<$DensityFunction$NoiseHolder>;
        constructor(noiseData: $Holder_<$NormalNoise$NoiseParameters>);
        constructor(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: $NormalNoise | null);
    }
    export class $NoiseChunk implements $DensityFunction$ContextProvider, $DensityFunction$FunctionContext, $IChunkNoiseSampler, $ICoordinatesFilling, $IPreloadedCoordinates, $IArrayCacheCapable {
        aquifer(): $Aquifer;
        cellWidth(): number;
        cellHeight(): number;
        swapSlices(): void;
        updateForY(cellEndBlockX: number, x: number): void;
        updateForX(cellEndBlockX: number, x: number): void;
        static forChunk(chunk: $ChunkAccess, state: $RandomState, beardifierOrMarker: $DensityFunctions$BeardifierOrMarker, noiseGeneratorSettings: $NoiseGeneratorSettings_, fluidPicke: $Aquifer$FluidPicker_, blender: $Blender): $NoiseChunk;
        updateForZ(cellEndBlockX: number, x: number): void;
        wrap(densityFunction: $DensityFunction_): $DensityFunction;
        fillAllDirectly(values: number[], _function: $DensityFunction_): void;
        blockX(): number;
        blockZ(): number;
        getBlender(): $Blender;
        blockY(): number;
        selectCellYZ(y: number, z: number): void;
        advanceCellX(increment: number): void;
        stopInterpolation(): void;
        initializeForFirstCellX(): void;
        getInterpolatedState(): $BlockState;
        cachedClimateSampler(noiseRouter: $NoiseRouter_, points: $List_<$Climate$ParameterPoint_>): $Climate$Sampler;
        c2me$getArrayCache(): $ArrayCache;
        preliminarySurfaceLevel(x: number, z: number): number;
        getOrComputeBlendingOutput(chunkX: number, chunkZ: number): $Blender$BlendingOutput;
        c2me$fillCoordinates(x: number[], y: number[], z: number[]): void;
        c2me$getYArray(): number[];
        c2me$getZArray(): number[];
        c2me$getXArray(): number[];
        forIndex(arrayIndex: number): $DensityFunction$FunctionContext;
        getHorizontalCellBlockCount(): number;
        getStartBlockX(): number;
        getStartBlockY(): number;
        getStartBlockZ(): number;
        getMinimumCellY(): number;
        getStartBiomeX(): number;
        getStartBiomeZ(): number;
        getCellBlockX(): number;
        getCellBlockY(): number;
        getStartCellZ(): number;
        getBeardifying(): $DensityFunctions$BeardifierOrMarker;
        getStartCellX(): number;
        getCellBlockZ(): number;
        getVerticalCellCount(): number;
        getIsSamplingForCaches(): boolean;
        getIsInInterpolationLoop(): boolean;
        invokeSampleBlockState(): $BlockState;
        getHorizontalBiomeEnd(): number;
        getHorizontalCellCount(): number;
        getVerticalCellBlockCount(): number;
        cellStartBlockY: number;
        cellCountY: number;
        interpolating: boolean;
        arrayInterpolationCounter: number;
        firstNoiseZ: number;
        fillingCell: boolean;
        cellNoiseMinY: number;
        noiseSizeXZ: number;
        inCellZ: number;
        inCellY: number;
        inCellX: number;
        cellCaches: $List<$NoiseChunk$CacheAllInCell>;
        cellCountXZ: number;
        firstNoiseX: number;
        interpolators: $List<$NoiseChunk$NoiseInterpolator>;
        arrayIndex: number;
        c2me$interpolatorsArray: $NoiseChunk$NoiseInterpolator[];
        interpolationCounter: number;
        constructor(cellCountXZ: number, random: $RandomState, firstNoiseX: number, firstNoiseZ: number, noiseSettings: $NoiseSettings_, beardifier: $DensityFunctions$BeardifierOrMarker, noiseGeneratorSettings: $NoiseGeneratorSettings_, fluidPicker: $Aquifer$FluidPicker_, blendifier: $Blender);
        get blender(): $Blender;
        get interpolatedState(): $BlockState;
        get horizontalCellBlockCount(): number;
        get startBlockX(): number;
        get startBlockY(): number;
        get startBlockZ(): number;
        get minimumCellY(): number;
        get startBiomeX(): number;
        get startBiomeZ(): number;
        get cellBlockX(): number;
        get cellBlockY(): number;
        get startCellZ(): number;
        get beardifying(): $DensityFunctions$BeardifierOrMarker;
        get startCellX(): number;
        get cellBlockZ(): number;
        get verticalCellCount(): number;
        get isSamplingForCaches(): boolean;
        get isInInterpolationLoop(): boolean;
        get horizontalBiomeEnd(): number;
        get horizontalCellCount(): number;
        get verticalCellBlockCount(): number;
    }
    export class $DensityFunctions$Marker$Type extends $Enum<$DensityFunctions$Marker$Type> implements $StringRepresentable {
        static values(): $DensityFunctions$Marker$Type[];
        static valueOf(arg0: string): $DensityFunctions$Marker$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CacheAllInCell: $DensityFunctions$Marker$Type;
        codec: $KeyDispatchDataCodec<$DensityFunctions$MarkerOrMarked>;
        static CacheOnce: $DensityFunctions$Marker$Type;
        static FlatCache: $DensityFunctions$Marker$Type;
        static Interpolated: $DensityFunctions$Marker$Type;
        static Cache2D: $DensityFunctions$Marker$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Marker$Type}.
     */
    export type $DensityFunctions$Marker$Type_ = "interpolated" | "flat_cache" | "cache_2d" | "cache_once" | "cache_all_in_cell";
    export class $DensityFunctions$WeirdScaledSampler extends $Record implements $DensityFunctions$TransformerWithContext {
        transform(context: $DensityFunction$FunctionContext, value: number): number;
        input(): $DensityFunction;
        maxValue(): number;
        rarityValueMapper(): $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        noise(): $DensityFunction$NoiseHolder;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        compute(context: $DensityFunction$FunctionContext): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$WeirdScaledSampler>;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction$NoiseHolder_, arg2: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_);
    }
    export class $VerticalAnchor$Absolute extends $Record implements $VerticalAnchor {
        y(): number;
        resolveY(arg0: $WorldGenerationContext): number;
        static CODEC: $Codec<$VerticalAnchor$Absolute>;
        constructor(arg0: number);
    }
    export class $LegacyRandomSource implements $BitRandomSource {
        next(size: number): number;
        setSeed(seed: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(size: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextInt(min: number, max: number): number;
        triangle(min: number, arg1: number): number;
        nextIntBetweenInclusive(min: number, max: number): number;
        consumeCount(count: number): void;
        constructor(seed: number);
        set seed(value: number);
    }
    export class $SurfaceRules$BiomeConditionSource$1BiomeCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $Aquifer$NoiseBasedAquifer implements $Aquifer, $IAquiferSamplerImpl {
        /**
         * @return A cache index based on grid positions.
         */
        getIndex(gridX: number, gridY: number, gridZ: number): number;
        /**
         * Compares two distances (between aquifers).
         * @return `1.0` if the distances are equal, and returns smaller values the more different in absolute value the two distances are.
         */
        static similarity(firstDistance: number, secondDistance: number): number;
        gridY(x: number): number;
        gridX(x: number): number;
        /**
         * Returns `true` if there should be a fluid update scheduled - due to a fluid block being placed in a possibly unsteady position - at the last position passed into `#computeState`.
         * This **must** be invoked only after `#computeState`, and will be using the same parameters as that method.
         */
        shouldScheduleFluidUpdate(): boolean;
        computeSubstance(context: $DensityFunction$FunctionContext, substance: number): $BlockState;
        gridZ(x: number): number;
        getFluidLevelSampler(): $Aquifer$FluidPicker;
        getSizeX(): number;
        getStartY(): number;
        getStartX(): number;
        getBlockPositions(): number[];
        getSizeZ(): number;
        getRandomDeriver(): $PositionalRandomFactory;
        getStartZ(): number;
        minGridY: number;
        minGridX: number;
        minGridZ: number;
        gridSizeX: number;
        aquiferLocationCache: number[];
        gridSizeZ: number;
        aquiferCache: $Aquifer$FluidStatus[];
        barrierNoise: $DensityFunction;
        lavaNoise: $DensityFunction;
        constructor(noiseChunk: $NoiseChunk, chunkPos: $ChunkPos, noiseRouter: $NoiseRouter_, positionalRandomFactory: $PositionalRandomFactory, minY: number, height: number, globalFluidPicker: $Aquifer$FluidPicker_);
        get fluidLevelSampler(): $Aquifer$FluidPicker;
        get sizeX(): number;
        get startY(): number;
        get startX(): number;
        get blockPositions(): number[];
        get sizeZ(): number;
        get randomDeriver(): $PositionalRandomFactory;
        get startZ(): number;
    }
    export class $SurfaceRules$TestRuleSource extends $Record implements $SurfaceRules$RuleSource {
        apply(context: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
        thenRun(): $SurfaceRules$RuleSource;
        ifTrue(): $SurfaceRules$ConditionSource;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$TestRuleSource>;
        constructor(arg0: $SurfaceRules$ConditionSource, arg1: $SurfaceRules$RuleSource);
    }
    export class $DensityFunctions$YClampedGradient extends $Record implements $DensityFunction$SimpleFunction {
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        toY(): number;
        fromY(): number;
        toValue(): number;
        fromValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$YClampedGradient>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $WorldDimensions$1Entry extends $Record {
    }
    export class $Column$Range extends $Column {
        floor(): number;
        ceiling(): number;
        height(): number;
        constructor(floor: number, ceiling: number);
    }
    export class $FlatLevelSource extends $ChunkGenerator {
        settings(): $FlatLevelGeneratorSettings;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$FlatLevelSource>;
        biomeSource: $BiomeSource;
        constructor(settings: $FlatLevelGeneratorSettings);
    }
    export class $SingleThreadedRandomSource implements $BitRandomSource, $ISimpleRandom {
        next(size: number): number;
        setSeed(seed: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(size: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextInt(min: number, max: number): number;
        triangle(min: number, arg1: number): number;
        nextIntBetweenInclusive(min: number, max: number): number;
        consumeCount(count: number): void;
        getSeed(): number;
        invokeSetSeed(seed: number): void;
        constructor(seed: number);
    }
    export class $SurfaceRules$WaterConditionSource$1WaterCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $WorldgenRandom extends $LegacyRandomSource {
        getCount(): number;
        /**
         * Seeds the current random for placing features.
         * Each feature is seeded differently in order to seem more random. However, it does not do a good job of this, and issues can arise from the salt being small with features that have the same decoration step and are close together in the feature lists.
         */
        setFeatureSeed(decorationSeed: number, arg1: number, index: number): void;
        /**
         * Seeds the current random for chunk decoration, including spawning mobs and for use in feature placement.
         * The coordinates correspond to the minimum block position within a given chunk.
         */
        setDecorationSeed(levelSeed: number, arg1: number, minChunkBlockX: number): number;
        /**
         * Seeds the current random for placing the starts of structure features.
         * The region coordinates are the region which the target chunk lies in. For example, witch hut regions are 32x32 chunks, so all chunks within that region would be seeded identically.
         * The size of the regions themselves are determined by the `spacing` of the structure settings.
         */
        setLargeFeatureWithSalt(levelSeed: number, arg1: number, regionX: number, regionZ: number): void;
        /**
         * Seeds the current random for placing features.
         * Each feature is seeded differently in order to seem more random. However, it does not do a good job of this, and issues can arise from the salt being small with features that have the same decoration step and are close together in the feature lists.
         */
        setLargeFeatureSeed(decorationSeed: number, arg1: number, index: number): void;
        /**
         * Creates a new `RandomSource`, seeded for determining whether a chunk is a slime chunk or not.
         */
        static seedSlimeChunk(chunkX: number, chunkZ: number, levelSeed: number, arg3: number): $RandomSource;
        constructor(randomSource: $RandomSource);
        get count(): number;
    }
    export class $DensityFunction$FunctionContext {
    }
    export interface $DensityFunction$FunctionContext {
        blockX(): number;
        blockZ(): number;
        getBlender(): $Blender;
        blockY(): number;
        get blender(): $Blender;
    }
    export class $RandomSupport$Seed128bit extends $Record {
        xor(seedLo: number, arg1: number): $RandomSupport$Seed128bit;
        xor(seed: $RandomSupport$Seed128bit_): $RandomSupport$Seed128bit;
        mixed(): $RandomSupport$Seed128bit;
        seedLo(): number;
        seedHi(): number;
        constructor(arg0: number, arg1: number);
    }
    export class $SurfaceRules$BiomeConditionSource implements $SurfaceRules$ConditionSource {
        apply(context: $SurfaceRules$Context): $SurfaceRules$Condition;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$ConditionSource>;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$BiomeConditionSource>;
        biomes: $List<$ResourceKey<$Biome>>;
        biomeNameTest: $Predicate<$ResourceKey<$Biome>>;
        constructor(biomes: $List_<$ResourceKey_<$Biome>>);
    }
    /**
     * @deprecated
     */
    export class $ThreadSafeLegacyRandomSource implements $BitRandomSource {
        next(size: number): number;
        setSeed(seed: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(size: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextInt(min: number, max: number): number;
        triangle(min: number, arg1: number): number;
        nextIntBetweenInclusive(min: number, max: number): number;
        consumeCount(count: number): void;
        constructor(seed: number);
        set seed(value: number);
    }
    export class $DensityFunctions$EndIslandDensityFunction implements $DensityFunction$SimpleFunction, $IDensityFunctionTypesEndIslands {
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        getSampler(): $SimplexNoise;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$EndIslandDensityFunction>;
        constructor(seed: number);
        get sampler(): $SimplexNoise;
    }
    export class $DensityFunctions$Spline$Point extends $Record {
        context(): $DensityFunction$FunctionContext;
        constructor(arg0: $DensityFunction$FunctionContext);
    }
    export class $MarsagliaPolarGaussian {
        reset(): void;
        nextGaussian(): number;
        randomSource: $RandomSource;
        constructor(randomSource: $RandomSource);
    }
    export interface $NoiseGeneratorSettings extends RegistryMarked<RegistryTypes.WorldgenNoiseSettingsTag, RegistryTypes.WorldgenNoiseSettings> {}
    export class $GeodeBlockSettings {
        static CODEC: $Codec<$GeodeBlockSettings>;
        outerLayerProvider: $BlockStateProvider;
        innerLayerProvider: $BlockStateProvider;
        alternateInnerLayerProvider: $BlockStateProvider;
        innerPlacements: $List<$BlockState>;
        cannotReplace: $TagKey<$Block>;
        middleLayerProvider: $BlockStateProvider;
        invalidBlocks: $TagKey<$Block>;
        fillingProvider: $BlockStateProvider;
        constructor(fillingProvider: $BlockStateProvider, innerLayerProvider: $BlockStateProvider, alternateInnerLayerProvider: $BlockStateProvider, middleLayerProvider: $BlockStateProvider, outerLayerProvider: $BlockStateProvider, innerPlacements: $List_<$BlockState_>, cannotReplace: $TagKey_<$Block>, invalidBlocks: $TagKey_<$Block>);
    }
    export class $NoiseChunk$BlendOffset implements $NoiseChunk$NoiseChunkDensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        wrapped(): $DensityFunction;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        this$0: $NoiseChunk;
        constructor(arg0: $NoiseChunk);
    }
    export class $DensityFunctions {
        static min(argument1: $DensityFunction_, argument2: $DensityFunction_): $DensityFunction;
        static max(argument1: $DensityFunction_, argument2: $DensityFunction_): $DensityFunction;
        static add(argument1: $DensityFunction_, argument2: $DensityFunction_): $DensityFunction;
        static map(input: $DensityFunction_, type: $DensityFunctions$Mapped$Type_): $DensityFunction;
        static constant(value: number): $DensityFunction;
        static zero(): $DensityFunction;
        static bootstrap(registry: $Registry<$MapCodec_<$DensityFunction_>>): $MapCodec<$DensityFunction>;
        static shift(noiseData: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static mul(argument1: $DensityFunction_, argument2: $DensityFunction_): $DensityFunction;
        static noise(noiseData: $Holder_<$NormalNoise$NoiseParameters>, fromY: number, arg2: number): $DensityFunction;
        static noise(noiseData: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static noise(noiseData: $Holder_<$NormalNoise$NoiseParameters>, yScale: number): $DensityFunction;
        static blendOffset(): $DensityFunction;
        static mappedNoise(noiseData: $Holder_<$NormalNoise$NoiseParameters>, xzScale: number, arg2: number, yScale: number, arg4: number): $DensityFunction;
        static mappedNoise(noiseData: $Holder_<$NormalNoise$NoiseParameters>, fromY: number, arg2: number): $DensityFunction;
        static mappedNoise(noiseData: $Holder_<$NormalNoise$NoiseParameters>, yScale: number, arg2: number, fromY: number): $DensityFunction;
        static weirdScaledSampler(input: $DensityFunction_, noiseData: $Holder_<$NormalNoise$NoiseParameters>, rarityValueMapper: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_): $DensityFunction;
        static rangeChoice(input: $DensityFunction_, minInclusive: number, arg2: number, maxExclusive: $DensityFunction_, arg4: $DensityFunction_): $DensityFunction;
        static shiftedNoise2d(shiftX: $DensityFunction_, shiftZ: $DensityFunction_, xzScale: number, arg3: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static blendDensity(input: $DensityFunction_): $DensityFunction;
        static cacheAllInCell(input: $DensityFunction_): $DensityFunction;
        static yClampedGradient(fromY: number, toY: number, fromValue: number, arg3: number): $DensityFunction;
        static interpolated(input: $DensityFunction_): $DensityFunction;
        static lerp(deltaFunction: $DensityFunction_, min: number, arg2: $DensityFunction_): $DensityFunction;
        static lerp(deltaFunction: $DensityFunction_, minFunction: $DensityFunction_, maxFunction: $DensityFunction_): $DensityFunction;
        static singleFunctionArgumentCodec<O>(fromFunction: $Function_<$DensityFunction, O>, toFunction: $Function_<O, $DensityFunction>): $KeyDispatchDataCodec<O>;
        static doubleFunctionArgumentCodec<O>(fromFunction: $BiFunction_<$DensityFunction, $DensityFunction, O>, primary: $Function_<O, $DensityFunction>, secondary: $Function_<O, $DensityFunction>): $KeyDispatchDataCodec<O>;
        static cacheOnce(input: $DensityFunction_): $DensityFunction;
        static cache2d(input: $DensityFunction_): $DensityFunction;
        static flatCache(input: $DensityFunction_): $DensityFunction;
        static makeCodec<O>(mapCodec: $MapCodec_<O>): $KeyDispatchDataCodec<O>;
        static shiftA(noiseData: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static shiftB(noiseData: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static endIslands(seed: number): $DensityFunction;
        static spline(spline: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>): $DensityFunction;
        static blendAlpha(): $DensityFunction;
        static singleArgumentCodec<A, O>(codec: $Codec<A>, fromFunction: $Function_<A, O>, toFunction: $Function_<O, A>): $KeyDispatchDataCodec<O>;
        static MAX_REASONABLE_NOISE_VALUE: number;
        static NOISE_VALUE_CODEC: $Codec<number>;
        static DIRECT_CODEC: $Codec<$DensityFunction>;
    }
    export interface $DensityFunction extends RegistryMarked<RegistryTypes.WorldgenDensityFunctionTag, RegistryTypes.WorldgenDensityFunction> {}
    export class $DensityFunctions$WeirdScaledSampler$RarityValueMapper extends $Enum<$DensityFunctions$WeirdScaledSampler$RarityValueMapper> implements $StringRepresentable, $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper {
        static values(): $DensityFunctions$WeirdScaledSampler$RarityValueMapper[];
        static valueOf(arg0: string): $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        getScaleFunction(): $Double2DoubleFunction;
        static TYPE2: $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        static CODEC: $Codec<$DensityFunctions$WeirdScaledSampler$RarityValueMapper>;
        maxRarity: number;
        mapper: $Double2DoubleFunction;
        static TYPE1: $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
        get scaleFunction(): $Double2DoubleFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$WeirdScaledSampler$RarityValueMapper}.
     */
    export type $DensityFunctions$WeirdScaledSampler$RarityValueMapper_ = "type_1" | "type_2";
    export class $DensityFunctions$TwoArgumentSimpleFunction {
        static create(type: $DensityFunctions$TwoArgumentSimpleFunction$Type_, argument1: $DensityFunction_, argument2: $DensityFunction_): $DensityFunctions$TwoArgumentSimpleFunction;
        static LOGGER: $Logger;
    }
    export interface $DensityFunctions$TwoArgumentSimpleFunction extends $DensityFunction {
        type(): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        argument1(): $DensityFunction;
        argument2(): $DensityFunction;
    }
    export class $DensityFunctions$Ap2 extends $Record implements $DensityFunctions$TwoArgumentSimpleFunction {
        type(): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        argument1(): $DensityFunction;
        argument2(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        constructor(arg0: $DensityFunctions$TwoArgumentSimpleFunction$Type_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: number, arg4: number);
    }
    /**
     * Represents individual steps that the features and carvers chunk status go through, respectively.
     */
    export class $GenerationStep {
        constructor();
    }
    export class $SurfaceRules$NotCondition extends $Record implements $SurfaceRules$Condition {
    }
    /**
     * A representation of an integer valued interval, either bounded or unbounded.
     * While the class itself does not imply any coordinate in particular, this is practically used to represent a column in the Y direction.
     */
    export class $Column {
        /**
         * @return A column of the unbounded interval (-infinity, infinity).
         */
        static line(): $Column;
        static create(floor: $OptionalInt, ceiling: $OptionalInt): $Column;
        /**
         * Scans for a column of states satisfying `columnPredicate`, up to a length of `maxDistance` from the origin, and ending with a state which satisfies `tipPredicate`.
         * @return A column representing the tips found. The column will be bounded if a tip was reached in the given direction, unbounded otherwise.
         */
        static scan(level: $LevelSimulatedReader, pos: $BlockPos_, maxDistance: number, columnPredicate: $Predicate_<$BlockState>, tipPredicate: $Predicate_<$BlockState>): ($Column) | undefined;
        /**
         * @return A column of the unbounded interval (floor, infinity).
         */
        static above(floor: number): $Column;
        /**
         * @return A column of the unbounded interval (floor, infinity).
         */
        static below(floor: number): $Column;
        /**
         * @return A column of the closed interval [floor, ceiling].
         */
        static around(floor: number, ceiling: number): $Column$Range;
        getCeiling(): $OptionalInt;
        withFloor(ceiling: $OptionalInt): $Column;
        getFloor(): $OptionalInt;
        withCeiling(ceiling: $OptionalInt): $Column;
        /**
         * @return A column of the unbounded interval (floor, infinity).
         */
        static fromHighest(floor: number): $Column;
        getHeight(): $OptionalInt;
        /**
         * @return A column of the closed interval [floor, ceiling].
         */
        static inside(floor: number, ceiling: number): $Column$Range;
        /**
         * @return A column of the unbounded interval (floor, infinity).
         */
        static fromLowest(floor: number): $Column;
        constructor();
        get ceiling(): $OptionalInt;
        get floor(): $OptionalInt;
        get height(): $OptionalInt;
    }
    export class $Column$Line extends $Column {
        static INSTANCE: $Column$Line;
    }
    export class $DensityFunctions$BlendAlpha extends $Enum<$DensityFunctions$BlendAlpha> implements $DensityFunction$SimpleFunction {
        static values(): $DensityFunctions$BlendAlpha[];
        static valueOf(arg0: string): $DensityFunctions$BlendAlpha;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
        static INSTANCE: $DensityFunctions$BlendAlpha;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendAlpha}.
     */
    export type $DensityFunctions$BlendAlpha_ = "instance";
    export class $Heightmap$Types extends $Enum<$Heightmap$Types> implements $StringRepresentable {
        static values(): $Heightmap$Types[];
        static valueOf(arg0: string): $Heightmap$Types;
        isOpaque(): $Predicate<$BlockState>;
        sendToClient(): boolean;
        getSerializedName(): string;
        keepAfterWorldgen(): boolean;
        getSerializationKey(): string;
        getRemappedEnumConstantName(): string;
        static OCEAN_FLOOR: $Heightmap$Types;
        static MOTION_BLOCKING_NO_LEAVES: $Heightmap$Types;
        static CODEC: $Codec<$Heightmap$Types>;
        static MOTION_BLOCKING: $Heightmap$Types;
        static WORLD_SURFACE: $Heightmap$Types;
        static OCEAN_FLOOR_WG: $Heightmap$Types;
        static WORLD_SURFACE_WG: $Heightmap$Types;
        get opaque(): $Predicate<$BlockState>;
        get serializedName(): string;
        get serializationKey(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Heightmap$Types}.
     */
    export type $Heightmap$Types_ = "world_surface_wg" | "world_surface" | "ocean_floor_wg" | "ocean_floor" | "motion_blocking" | "motion_blocking_no_leaves";
    export class $BitRandomSource {
        static FLOAT_MULTIPLIER: number;
        static DOUBLE_MULTIPLIER: number;
    }
    export interface $BitRandomSource extends $RandomSource {
        next(size: number): number;
        nextDouble(): number;
        nextInt(size: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
    }
    export class $SurfaceRules$YConditionSource$1YCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $DensityFunctions$MarkerOrMarked {
    }
    export interface $DensityFunctions$MarkerOrMarked extends $DensityFunction {
        type(): $DensityFunctions$Marker$Type;
        wrapped(): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
    }
    export class $NoiseBasedChunkGenerator extends $ChunkGenerator implements $INoiseChunkGenerator {
        iterateNoiseColumn(level: $LevelHeightAccessor, random: $RandomState, x: number, z: number, column: $MutableObject<$NoiseColumn> | null, stoppingState: $Predicate_<$BlockState> | null): $OptionalInt;
        generatorSettings(): $Holder<$NoiseGeneratorSettings>;
        buildSurface(chunk: $ChunkAccess, context: $WorldGenerationContext, random: $RandomState, structureManager: $StructureManager, biomeManager: $BiomeManager, biomes: $Registry<$Biome_>, blender: $Blender): void;
        stable(settings: $ResourceKey_<$NoiseGeneratorSettings>): boolean;
        invokeCreateChunkNoiseSampler(chunk: $ChunkAccess, structureManager: $StructureManager, blender: $Blender, random: $RandomState): $NoiseChunk;
        getFluidLevelSampler(): $Supplier<$Aquifer$FluidPicker>;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$NoiseBasedChunkGenerator>;
        biomeSource: $BiomeSource;
        constructor(biomeSource: $BiomeSource, settings: $Holder_<$NoiseGeneratorSettings>);
        get fluidLevelSampler(): $Supplier<$Aquifer$FluidPicker>;
    }
    export class $DensityFunctions$TwoArgumentSimpleFunction$Type extends $Enum<$DensityFunctions$TwoArgumentSimpleFunction$Type> implements $StringRepresentable {
        static values(): $DensityFunctions$TwoArgumentSimpleFunction$Type[];
        static valueOf(arg0: string): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ADD: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        codec: $KeyDispatchDataCodec<$DensityFunctions$TwoArgumentSimpleFunction>;
        static MIN: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        static MUL: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        static MAX: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$TwoArgumentSimpleFunction$Type}.
     */
    export type $DensityFunctions$TwoArgumentSimpleFunction$Type_ = "add" | "mul" | "min" | "max";
    export class $SurfaceRules$Context implements $ExtendedSurfaceContext {
        updateXZ(blockX: number, blockZ: number): void;
        updateY(stoneDepthAbove: number, stoneDepthBelow: number, waterHeight: number, blockX: number, blockY: number, blockZ: number): void;
        mfix$applyPossibleBiomes(): void;
        getSurfaceSecondary(): number;
        mfix$getPossibleBiomes(): $Set<any>;
        getMinSurfaceLevel(): number;
        waterHeight: number;
        stoneDepthBelow: number;
        steep: $SurfaceRules$Condition;
        lastUpdateXZ: number;
        chunk: $ChunkAccess;
        randomState: $RandomState;
        blockX: number;
        blockY: number;
        blockZ: number;
        abovePreliminarySurface: $SurfaceRules$Condition;
        lastUpdateY: number;
        hole: $SurfaceRules$Condition;
        system: $SurfaceSystem;
        pos: $BlockPos$MutableBlockPos;
        biome: $Supplier<$Holder<$Biome>>;
        mfix$possibleBiomes: $Set<any>;
        temperature: $SurfaceRules$Condition;
        context: $WorldGenerationContext;
        surfaceDepth: number;
        stoneDepthAbove: number;
        constructor(system: $SurfaceSystem, randomState: $RandomState, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, biomeGetter: $Function_<$BlockPos, $Holder<$Biome>>, arg5: $Registry<$Biome_>, context: $WorldGenerationContext);
        get surfaceSecondary(): number;
        get minSurfaceLevel(): number;
    }
    export class $NoiseSettings extends $Record {
        static create(minY: number, height: number, noiseSizeHorizontal: number, noiseSizeVertical: number): $NoiseSettings;
        noiseSizeVertical(): number;
        height(): number;
        minY(): number;
        getCellHeight(): number;
        getCellWidth(): number;
        clampToHeightAccessor(heightAccessor: $LevelHeightAccessor): $NoiseSettings;
        noiseSizeHorizontal(): number;
        static CODEC: $Codec<$NoiseSettings>;
        static END_NOISE_SETTINGS: $NoiseSettings;
        static CAVES_NOISE_SETTINGS: $NoiseSettings;
        static OVERWORLD_NOISE_SETTINGS: $NoiseSettings;
        static FLOATING_ISLANDS_NOISE_SETTINGS: $NoiseSettings;
        static NETHER_NOISE_SETTINGS: $NoiseSettings;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get cellHeight(): number;
        get cellWidth(): number;
    }
    export class $SurfaceRules$Hole extends $Enum<$SurfaceRules$Hole> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Hole}.
     */
    export type $SurfaceRules$Hole_ = "instance";
    export class $DensityFunctions$ShiftedNoise extends $Record implements $DensityFunction {
        xzScale(): number;
        shiftY(): $DensityFunction;
        shiftX(): $DensityFunction;
        shiftZ(): $DensityFunction;
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        noise(): $DensityFunction$NoiseHolder;
        minValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        yScale(): number;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$ShiftedNoise>;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: number, arg4: number, arg5: $DensityFunction$NoiseHolder_);
    }
    export class $DensityFunctions$Spline extends $Record implements $DensityFunction {
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        spline(): $CubicSpline<$DensityFunctions$Spline$Point, $DensityFunctions$Spline$Coordinate>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Spline>;
        constructor(arg0: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>);
    }
    export class $SurfaceRules$Condition {
    }
    export interface $SurfaceRules$Condition {
        test(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Condition}.
     */
    export type $SurfaceRules$Condition_ = (() => boolean);
    export class $SurfaceRules$LazyYCondition extends $SurfaceRules$LazyCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $NoiseChunk$NoiseChunkDensityFunction {
    }
    export interface $NoiseChunk$NoiseChunkDensityFunction extends $DensityFunction {
    }
    export class $NoiseChunk$Cache2D implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$isActualCache(): boolean;
        c2me$withDelegate(delegate: $DensityFunction_): $DensityFunction;
        c2me$getDelegate(): $DensityFunction;
        c2me$describeCacheLike(): string;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        constructor(_function: $DensityFunction_);
    }
    export class $SurfaceSystem {
        getBand(x: number, y: number, z: number): $BlockState;
        buildSurface(randomState: $RandomState, biomeManager: $BiomeManager, biomes: $Registry<$Biome_>, useLegacyRandomSource: boolean, context: $WorldGenerationContext, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, ruleSource: $SurfaceRules$RuleSource): void;
        getSurfaceSecondary(x: number, z: number): number;
        getSurfaceDepth(x: number, z: number): number;
        /**
         * @deprecated
         */
        topMaterial(rule: $SurfaceRules$RuleSource, context: $CarvingContext, biomeGetter: $Function_<$BlockPos, $Holder<$Biome>>, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, pos: $BlockPos_, hasFluid: boolean): ($BlockState) | undefined;
        constructor(randomState: $RandomState, defaultBlock: $BlockState_, seaLevel: number, noiseRandom: $PositionalRandomFactory);
    }
    export class $DensityFunction$ContextProvider {
    }
    export interface $DensityFunction$ContextProvider {
        forIndex(arrayIndex: number): $DensityFunction$FunctionContext;
        fillAllDirectly(values: number[], _function: $DensityFunction_): void;
    }
    export class $SurfaceRules$Context$HoleCondition extends $SurfaceRules$LazyXZCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules {
        static isBiome(...biomes: $ResourceKey_<$Biome>[]): $SurfaceRules$ConditionSource;
        static register<A>(registry: $Registry<$MapCodec_<A>>, name: string, codec: $KeyDispatchDataCodec_<A>): $MapCodec<A>;
        static state(resultState: $BlockState_): $SurfaceRules$RuleSource;
        static sequence(...rules: $SurfaceRules$RuleSource[]): $SurfaceRules$RuleSource;
        static not(target: $SurfaceRules$ConditionSource): $SurfaceRules$ConditionSource;
        static waterStartCheck(offset: number, surfaceDepthMultiplier: number): $SurfaceRules$ConditionSource;
        static yStartCheck(anchor: $VerticalAnchor_, surfaceDepthMultiplier: number): $SurfaceRules$ConditionSource;
        static yBlockCheck(anchor: $VerticalAnchor_, surfaceDepthMultiplier: number): $SurfaceRules$ConditionSource;
        static waterBlockCheck(offset: number, surfaceDepthMultiplier: number): $SurfaceRules$ConditionSource;
        static noiseCondition(noise: $ResourceKey_<$NormalNoise$NoiseParameters>, minThreshold: number, arg2: number): $SurfaceRules$ConditionSource;
        static noiseCondition(noise: $ResourceKey_<$NormalNoise$NoiseParameters>, minThreshold: number): $SurfaceRules$ConditionSource;
        static verticalGradient(randomName: string, trueAtAndBelow: $VerticalAnchor_, falseAtAndAbove: $VerticalAnchor_): $SurfaceRules$ConditionSource;
        static stoneDepthCheck(offset: number, addSurfaceDepth: boolean, secondaryDepthRange: number, surfaceType: $CaveSurface_): $SurfaceRules$ConditionSource;
        static stoneDepthCheck(offset: number, addSurfaceDepth: boolean, surfaceType: $CaveSurface_): $SurfaceRules$ConditionSource;
        static temperature(): $SurfaceRules$ConditionSource;
        static ifTrue(ifTrue: $SurfaceRules$ConditionSource, thenRun: $SurfaceRules$RuleSource): $SurfaceRules$RuleSource;
        static abovePreliminarySurface(): $SurfaceRules$ConditionSource;
        static steep(): $SurfaceRules$ConditionSource;
        static hole(): $SurfaceRules$ConditionSource;
        static bandlands(): $SurfaceRules$RuleSource;
        static ON_FLOOR: $SurfaceRules$ConditionSource;
        static UNDER_FLOOR: $SurfaceRules$ConditionSource;
        static DEEP_UNDER_FLOOR: $SurfaceRules$ConditionSource;
        static ON_CEILING: $SurfaceRules$ConditionSource;
        static UNDER_CEILING: $SurfaceRules$ConditionSource;
        static VERY_DEEP_UNDER_FLOOR: $SurfaceRules$ConditionSource;
        constructor();
    }
    export class $Aquifer$FluidStatus implements $IAquiferSamplerFluidLevel {
        at(y: number): $BlockState;
        fluidLevel: number;
        fluidType: $BlockState;
        constructor(fluidLevel: number, fluidType: $BlockState_);
    }
    export class $DensityFunctions$BeardifierOrMarker {
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
    }
    export interface $DensityFunctions$BeardifierOrMarker extends $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
    }
    export class $NoiseChunk$FlatCache implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$isActualCache(): boolean;
        c2me$withDelegate(delegate: $DensityFunction_): $DensityFunction;
        c2me$getDelegate(): $DensityFunction;
        c2me$describeCacheLike(): string;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        values: number[][];
        this$0: $NoiseChunk;
        constructor(noiseFiller: $NoiseChunk, computeValues: $DensityFunction_, arg2: boolean);
    }
    export class $OreVeinifier {
        static create(veinToggle: $DensityFunction_, veinRidged: $DensityFunction_, veinGap: $DensityFunction_, random: $PositionalRandomFactory): $NoiseChunk$BlockStateFiller;
    }
    export class $DensityFunctions$Noise extends $Record implements $DensityFunction {
        /**
         * @deprecated
         */
        xzScale(): number;
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        noise(): $DensityFunction$NoiseHolder;
        minValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        yScale(): number;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Noise>;
        static DATA_CODEC: $MapCodec<$DensityFunctions$Noise>;
        constructor(arg0: $DensityFunction$NoiseHolder_, arg1: number, arg2: number);
    }
    export class $GeodeCrackSettings {
        static CODEC: $Codec<$GeodeCrackSettings>;
        generateCrackChance: number;
        crackPointOffset: number;
        baseCrackSize: number;
        constructor(generateCrackChance: number, arg1: number, baseCrackSize: number);
    }
    export class $DensityFunctions$Clamp extends $Record implements $DensityFunctions$PureTransformer {
        transform(value: number): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        compute(context: $DensityFunction$FunctionContext): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Clamp>;
        constructor(arg0: $DensityFunction_, arg1: number, arg2: number);
    }
    export class $Noises {
        static instantiate(noises: $HolderGetter<$NormalNoise$NoiseParameters_>, random: $PositionalRandomFactory, resourceKey: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
        static PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CONTINENTALNESS_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_MODULATOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CLAY_BANDS_OFFSET: $ResourceKey<$NormalNoise$NoiseParameters>;
        static EROSION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SOUL_SAND_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PILLAR_RARENESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_RIDGE_B: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_RIDGE_A: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_ENTRANCE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEIN_B: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CONTINENTALNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEIN_A: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEININESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_FLUID_LEVEL_FLOODEDNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D: $ResourceKey<$NormalNoise$NoiseParameters>;
        static RIDGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PATCH: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHER_WART: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHER_STATE_SELECTOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_PILLAR_ROOF: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_LAVA: $ResourceKey<$NormalNoise$NoiseParameters>;
        static VEGETATION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_ROUGHNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_ROUGHNESS_MODULATOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_CHEESE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_GAP: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_BARRIER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static JAGGED: $ResourceKey<$NormalNoise$NoiseParameters>;
        static GRAVEL: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SHIFT: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SURFACE_SECONDARY: $ResourceKey<$NormalNoise$NoiseParameters>;
        static TEMPERATURE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_ELEVATION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_2: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_1: $ResourceKey<$NormalNoise$NoiseParameters>;
        static VEGETATION_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static POWDER_SNOW: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_PILLAR_ROOF: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static GRAVEL_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_RARITY: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHERRACK: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PILLAR_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static EROSION_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SWAMP: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PACKED_ICE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_FLUID_LEVEL_SPREAD: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CALCITE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static TEMPERATURE_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        constructor();
    }
    export class $SurfaceRules$SequenceRuleSource extends $Record implements $SurfaceRules$RuleSource {
        apply(context: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
        sequence(): $List<$SurfaceRules$RuleSource>;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$SequenceRuleSource>;
        constructor(arg0: $List_<$SurfaceRules$RuleSource>);
    }
    export class $SurfaceRules$Context$SteepMaterialCondition extends $SurfaceRules$LazyXZCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules$NotConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    export class $SurfaceRules$Context$AbovePreliminarySurfaceCondition implements $SurfaceRules$Condition {
    }
    export class $SurfaceRules$Temperature extends $Enum<$SurfaceRules$Temperature> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Temperature}.
     */
    export type $SurfaceRules$Temperature_ = "instance";
    export class $SurfaceRules$Bandlands extends $Enum<$SurfaceRules$Bandlands> implements $SurfaceRules$RuleSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Bandlands}.
     */
    export type $SurfaceRules$Bandlands_ = "instance";
}
