import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $MapCodec_, $DataResult, $DynamicOps, $Codec, $Lifecycle, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters_, $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $Set_, $Map, $OptionalInt, $List, $Map_, $List_, $OptionalLong, $Set, $BitSet } from "@package/java/util";
import { $RandomSource, $CubicSpline, $ToFloatFunction, $KeyDispatchDataCodec, $StringRepresentable, $KeyDispatchDataCodec_ } from "@package/net/minecraft/util";
import { $Function, $Supplier, $Predicate_, $Predicate, $Function_, $BiFunction_ } from "@package/java/util/function";
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
import { $ISimpleRandom, $IAtomicSimpleRandomDeriver, $IBelowZeroRetrogen, $IXoroshiro128PlusPlusRandomImpl, $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper, $IAquiferSamplerFluidLevel, $IXoroshiro128PlusPlusRandom, $IXoroshiro128PlusPlusRandomDeriver, $IDensityFunctionsCaveScaler, $IChunkNoiseSamplerDensityInterpolator, $IStructureWeightSampler, $IChunkNoiseSampler } from "@package/com/ishland/c2me/base/mixin/access";
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        constructor(arg0: $Holder_<$DensityFunction>);
    }
    export class $Xoroshiro128PlusPlus implements $IXoroshiro128PlusPlusRandomImpl {
        nextLong(): number;
        getSeedHi(): number;
        setSeedLo(arg0: number): void;
        getSeedLo(): number;
        setSeedHi(arg0: number): void;
        static CODEC: $Codec<$Xoroshiro128PlusPlus>;
        constructor(arg0: $RandomSupport$Seed128bit_);
        constructor(arg0: number, arg1: number);
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static ZERO: $DensityFunctions$Constant;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Constant>;
        constructor(arg0: number);
    }
    export class $SurfaceRules$ConditionSource {
        static bootstrap(arg0: $Registry<$MapCodec_<$SurfaceRules$ConditionSource>>): $MapCodec<$SurfaceRules$ConditionSource>;
        static CODEC: $Codec<$SurfaceRules$ConditionSource>;
    }
    export interface $SurfaceRules$ConditionSource extends $Function<$SurfaceRules$Context, $SurfaceRules$Condition> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$ConditionSource>;
    }
    export class $NoiseChunk$CacheOnce implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        this$0: $NoiseChunk;
        constructor(arg0: $NoiseChunk, arg1: $DensityFunction_);
    }
    export class $OreVeinifier$VeinType extends $Enum<$OreVeinifier$VeinType> {
    }
    /**
     * Values that may be interpreted as {@link $OreVeinifier$VeinType}.
     */
    export type $OreVeinifier$VeinType_ = "copper" | "iron";
    export class $DensityFunctions$ShiftB extends $Record implements $DensityFunctions$ShiftNoise {
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        offsetNoise(): $DensityFunction$NoiseHolder;
        compute(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$ShiftB>;
        constructor(arg0: $DensityFunction$NoiseHolder_);
    }
    export class $DensityFunctions$ShiftA extends $Record implements $DensityFunctions$ShiftNoise {
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        offsetNoise(): $DensityFunction$NoiseHolder;
        compute(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$ShiftA>;
        constructor(arg0: $DensityFunction$NoiseHolder_);
    }
    export class $SurfaceRules$VerticalGradientConditionSource$1VerticalGradientCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $NoiseRouter extends $Record {
        depth(): $DensityFunction;
        continents(): $DensityFunction;
        ridges(): $DensityFunction;
        vegetation(): $DensityFunction;
        lavaNoise(): $DensityFunction;
        veinToggle(): $DensityFunction;
        veinGap(): $DensityFunction;
        veinRidged(): $DensityFunction;
        erosion(): $DensityFunction;
        temperature(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $NoiseRouter;
        initialDensityWithoutJaggedness(): $DensityFunction;
        finalDensity(): $DensityFunction;
        barrierNoise(): $DensityFunction;
        fluidLevelSpreadNoise(): $DensityFunction;
        fluidLevelFloodednessNoise(): $DensityFunction;
        static CODEC: $Codec<$NoiseRouter>;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_, arg5: $DensityFunction_, arg6: $DensityFunction_, arg7: $DensityFunction_, arg8: $DensityFunction_, arg9: $DensityFunction_, arg10: $DensityFunction_, arg11: $DensityFunction_, arg12: $DensityFunction_, arg13: $DensityFunction_, arg14: $DensityFunction_);
    }
    export class $RandomState {
        static create(arg0: $HolderGetter$Provider_, arg1: $ResourceKey_<$NoiseGeneratorSettings>, arg2: number): $RandomState;
        static create(arg0: $NoiseGeneratorSettings_, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>, arg2: number): $RandomState;
        router(): $NoiseRouter;
        sampler(): $Climate$Sampler;
        surfaceSystem(): $SurfaceSystem;
        getOrCreateNoise(arg0: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
        getOrCreateRandomFactory(arg0: $ResourceLocation_): $PositionalRandomFactory;
        aquiferRandom(): $PositionalRandomFactory;
        oreRandom(): $PositionalRandomFactory;
        random: $PositionalRandomFactory;
    }
    export class $WorldgenRandom$Algorithm extends $Enum<$WorldgenRandom$Algorithm> {
        static values(): $WorldgenRandom$Algorithm[];
        static valueOf(arg0: string): $WorldgenRandom$Algorithm;
        newInstance(arg0: number): $RandomSource;
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        constructor(arg0: $DensityFunctions$MulOrAdd$Type_, arg1: $DensityFunction_, arg2: number, arg3: number, arg4: number);
    }
    export class $DensityFunctions$PureTransformer {
    }
    export interface $DensityFunctions$PureTransformer extends $DensityFunction {
        transform(arg0: number): number;
        compute(arg0: $DensityFunction$FunctionContext): number;
        input(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
    }
    export class $RandomState$1NoiseWiringHelper implements $DensityFunction$Visitor {
        visitNoise(arg0: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
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
        computeFluid(arg0: number, arg1: number, arg2: number): $Aquifer$FluidStatus;
    }
    /**
     * Values that may be interpreted as {@link $Aquifer$FluidPicker}.
     */
    export type $Aquifer$FluidPicker_ = ((arg0: number, arg1: number, arg2: number) => $Aquifer$FluidStatus);
    export class $DensityFunctions$RangeChoice extends $Record implements $DensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        minInclusive(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        maxExclusive(): number;
        whenInRange(): $DensityFunction;
        whenOutOfRange(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static INSTANCE: $DensityFunctions$BeardifierMarker;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BeardifierMarker}.
     */
    export type $DensityFunctions$BeardifierMarker_ = "instance";
    export class $WorldDimensions$Complete extends $Record {
        dimensions(): $Registry<$LevelStem>;
        lifecycle(): $Lifecycle;
        specialWorldProperty(): $PrimaryLevelData$SpecialWorldProperty;
        dimensionsRegistryAccess(): $RegistryAccess$Frozen;
        constructor(dimensions: $Registry<$LevelStem_>, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_);
    }
    export class $RandomSupport {
        static mixStafford13(arg0: number): number;
        static seedFromHashOf(arg0: string): $RandomSupport$Seed128bit;
        static generateUniqueSeed(): number;
        static upgradeSeedTo128bit(arg0: number): $RandomSupport$Seed128bit;
        static upgradeSeedTo128bitUnmixed(arg0: number): $RandomSupport$Seed128bit;
        static GOLDEN_RATIO_64: number;
        static SILVER_RATIO_64: number;
        constructor();
    }
    export class $XoroshiroRandomSource$XoroshiroPositionalRandomFactory implements $PositionalRandomFactory, $IXoroshiro128PlusPlusRandomDeriver {
        at(arg0: number, arg1: number, arg2: number): $RandomSource;
        parityConfigString(arg0: $StringBuilder): void;
        fromHashOf(arg0: string): $RandomSource;
        fromSeed(arg0: number): $RandomSource;
        at(arg0: $BlockPos_): $RandomSource;
        fromHashOf(arg0: $ResourceLocation_): $RandomSource;
        getSeedHi(): number;
        getSeedLo(): number;
        constructor(arg0: number, arg1: number);
        get seedHi(): number;
        get seedLo(): number;
    }
    export class $DensityFunctions$Mapped extends $Record implements $DensityFunctions$PureTransformer {
        type(): $DensityFunctions$Mapped$Type;
        transform(arg0: number): number;
        static create(arg0: $DensityFunctions$Mapped$Type_, arg1: $DensityFunction_): $DensityFunctions$Mapped;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunctions$Mapped;
        compute(arg0: $DensityFunction$FunctionContext): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        constructor(arg0: $DensityFunctions$Mapped$Type_, arg1: $DensityFunction_, arg2: number, arg3: number);
    }
    export class $SurfaceRules$SequenceRule extends $Record implements $SurfaceRules$SurfaceRule {
        rules(): $List<$SurfaceRules$SurfaceRule>;
        tryApply(i: number, j: number, k: number): $BlockState;
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
        static invokeScaleCaves$c2me_base_$md$6ffaf3$0(arg0: number): number;
        static invokeScaleTunnels$c2me_base_$md$6ffaf3$1(arg0: number): number;
        static getSpaghettiRarity3D(arg0: number): number;
        static getSphaghettiRarity2D(arg0: number): number;
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
        static bootstrap(arg0: $Registry<$MapCodec_<$SurfaceRules$RuleSource>>): $MapCodec<$SurfaceRules$RuleSource>;
        static CODEC: $Codec<$SurfaceRules$RuleSource>;
    }
    export interface $SurfaceRules$RuleSource extends $Function<$SurfaceRules$Context, $SurfaceRules$SurfaceRule> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
    }
    export class $Aquifer {
        static create(arg0: $NoiseChunk, arg1: $ChunkPos, arg2: $NoiseRouter_, arg3: $PositionalRandomFactory, arg4: number, arg5: number, arg6: $Aquifer$FluidPicker_): $Aquifer;
        static createDisabled(arg0: $Aquifer$FluidPicker_): $Aquifer;
    }
    export interface $Aquifer {
        computeSubstance(arg0: $DensityFunction$FunctionContext, arg1: number): $BlockState;
        shouldScheduleFluidUpdate(): boolean;
    }
    export class $DensityFunction$Visitor {
    }
    export interface $DensityFunction$Visitor {
        apply(arg0: $DensityFunction_): $DensityFunction;
        visitNoise(arg0: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$Visitor}.
     */
    export type $DensityFunction$Visitor_ = ((arg0: $DensityFunction) => $DensityFunction_);
    export class $Column$Ray extends $Column {
        constructor(arg0: number, arg1: boolean);
    }
    export class $PatrolSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        constructor();
    }
    export class $DensityFunction {
        static CODEC: $Codec<$Holder<$DensityFunction>>;
        static DIRECT_CODEC: $Codec<$DensityFunction>;
        static HOLDER_HELPER_CODEC: $Codec<$DensityFunction>;
    }
    export interface $DensityFunction {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        square(): $DensityFunction;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction}.
     */
    export type $DensityFunction_ = RegistryTypes.WorldgenDensityFunction;
    export class $NoiseChunk$CacheAllInCell implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        noiseFiller: $DensityFunction;
        values: number[];
        this$0: $NoiseChunk;
        constructor(arg0: $NoiseChunk, arg1: $DensityFunction_);
    }
    export class $DensityFunction$SinglePointContext extends $Record implements $DensityFunction$FunctionContext {
        blockY(): number;
        blockZ(): number;
        blockX(): number;
        getBlender(): $Blender;
        constructor(arg0: number, arg1: number, arg2: number);
        get blender(): $Blender;
    }
    export class $LegacyRandomSource$LegacyPositionalRandomFactory implements $PositionalRandomFactory, $IAtomicSimpleRandomDeriver {
        at(x: number, y: number, z: number): $RandomSource;
        parityConfigString(arg0: $StringBuilder): void;
        fromHashOf(string: string): $RandomSource;
        fromSeed(arg0: number): $RandomSource;
        at(arg0: $BlockPos_): $RandomSource;
        fromHashOf(arg0: $ResourceLocation_): $RandomSource;
        getSeed(): number;
        constructor(arg0: number);
        get seed(): number;
    }
    export class $WorldGenerationContext {
        getGenDepth(): number;
        getMinGenY(): number;
        constructor(arg0: $ChunkGenerator, arg1: $LevelHeightAccessor);
        get genDepth(): number;
        get minGenY(): number;
    }
    export class $NoiseChunk$NoiseInterpolator implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IChunkNoiseSamplerDensityInterpolator {
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        updateForX(arg0: number): void;
        updateForY(arg0: number): void;
        updateForZ(arg0: number): void;
        selectCellYZ(arg0: number, arg1: number): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        invokeInterpolateX(arg0: number): void;
        invokeInterpolateY(arg0: number): void;
        invokeInterpolateZ(arg0: number): void;
        this$0: $NoiseChunk;
        slice0: number[][];
        slice1: number[][];
        constructor(arg0: $NoiseChunk, arg1: $DensityFunction_);
    }
    export class $NoiseChunk$BlockStateFiller {
    }
    export interface $NoiseChunk$BlockStateFiller {
        calculate(arg0: $DensityFunction$FunctionContext): $BlockState;
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
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
        get(arg0: $ResourceKey_<$LevelStem>): ($LevelStem) | undefined;
        dimensions(): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        isDebug(): boolean;
        levels(): $ImmutableSet<$ResourceKey<$Level>>;
        overworld(): $ChunkGenerator;
        bake(arg0: $Registry<$LevelStem_>): $WorldDimensions$Complete;
        static keysInOrder(arg0: $Stream<$ResourceKey_<$LevelStem>>): $Stream<$ResourceKey<$LevelStem>>;
        replaceOverworldGenerator(arg0: $RegistryAccess, arg1: $ChunkGenerator): $WorldDimensions;
        static withOverworld(arg0: $Registry<$DimensionType_>, arg1: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, arg2: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static withOverworld(arg0: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, arg1: $Holder_<$DimensionType>, arg2: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static checkStability(arg0: $ResourceKey_<$LevelStem>, arg1: $LevelStem_): $Lifecycle;
        static CODEC: $MapCodec<$WorldDimensions>;
        constructor(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>);
        constructor(arg0: $Registry<$LevelStem_>);
        get debug(): boolean;
    }
    export class $DensityFunctions$Marker extends $Record implements $DensityFunctions$MarkerOrMarked {
        type(): $DensityFunctions$Marker$Type;
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        constructor(arg0: $DensityFunctions$Marker$Type_, arg1: $DensityFunction_);
    }
    export class $WorldGenSettings extends $Record {
        static encode<T>(arg0: $DynamicOps<T>, arg1: $WorldOptions, arg2: $RegistryAccess): $DataResult<T>;
        static encode<T>(arg0: $DynamicOps<T>, arg1: $WorldOptions, arg2: $WorldDimensions_): $DataResult<T>;
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
        static end(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static dummy(): $NoiseGeneratorSettings;
        static bootstrap(arg0: $BootstrapContext<$NoiseGeneratorSettings_>): void;
        static overworld(arg0: $BootstrapContext<never>, arg1: boolean, arg2: boolean): $NoiseGeneratorSettings;
        static caves(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static nether(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        defaultBlock(): $BlockState;
        surfaceRule(): $SurfaceRules$RuleSource;
        seaLevel(): number;
        noiseSettings(): $NoiseSettings;
        defaultFluid(): $BlockState;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        noiseRouter(): $NoiseRouter;
        oreVeinsEnabled(): boolean;
        isAquifersEnabled(): boolean;
        static floatingIslands(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        getRandomSource(): $WorldgenRandom$Algorithm;
        aquifersEnabled(): boolean;
        useLegacyRandomSource(): boolean;
        /**
         * @deprecated
         */
        disableMobGeneration(): boolean;
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
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        offsetNoise(): $DensityFunction$NoiseHolder;
        compute(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Shift>;
        constructor(arg0: $DensityFunction$NoiseHolder_);
    }
    /**
     * @deprecated
     */
    export class $DebugLevelSource extends $ChunkGenerator implements $DebugChunkGeneratorAccessor {
        static initValidStates(): void;
        static getBlockStateFor(arg0: number, arg1: number): $BlockState;
        static setBLOCK_STATES$fabric_registry_sync_v0_$md$6ffaf3$0(arg0: $List_<any>): void;
        static setX_SIDE_LENGTH$fabric_registry_sync_v0_$md$6ffaf3$1(arg0: number): void;
        static setZ_SIDE_LENGTH$fabric_registry_sync_v0_$md$6ffaf3$2(arg0: number): void;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$DebugLevelSource>;
        static BARRIER_HEIGHT: number;
        static BARRIER: $BlockState;
        biomeSource: $BiomeSource;
        static AIR: $BlockState;
        static HEIGHT: number;
        constructor(arg0: $Holder$Reference<$Biome_>);
        static set BLOCK_STATES$fabric_registry_sync_v0_$md$6ffaf3$0(value: $List_<any>);
        static set x_SIDE_LENGTH$fabric_registry_sync_v0_$md$6ffaf3$1(value: number);
        static set z_SIDE_LENGTH$fabric_registry_sync_v0_$md$6ffaf3$2(value: number);
    }
    export class $WorldOptions {
        seed(): number;
        static randomSeed(): number;
        generateBonusChest(): boolean;
        generateStructures(): boolean;
        withSeed(arg0: $OptionalLong): $WorldOptions;
        isOldCustomizedWorld(): boolean;
        static defaultWithRandomSeed(): $WorldOptions;
        withStructures(arg0: boolean): $WorldOptions;
        withBonusChest(arg0: boolean): $WorldOptions;
        static parseSeed(arg0: string): $OptionalLong;
        static CODEC: $MapCodec<$WorldOptions>;
        static DEMO_OPTIONS: $WorldOptions;
        constructor(arg0: number, arg1: boolean, arg2: boolean);
        get oldCustomizedWorld(): boolean;
    }
    export class $GeodeLayerSettings {
        filling: number;
        static CODEC: $Codec<$GeodeLayerSettings>;
        outerLayer: number;
        innerLayer: number;
        middleLayer: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $Beardifier implements $DensityFunctions$BeardifierOrMarker, $IStructureWeightSampler {
        compute(pos: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        static forStructuresInChunk(arg0: $StructureManager, arg1: $ChunkPos): $Beardifier;
        static getBeardContribution(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static getBuryContribution(x: number, y: number, z: number): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        junctionIterator: $ObjectListIterator<$JigsawJunction>;
        static BEARD_KERNEL_RADIUS: number;
        pieceIterator: $ObjectListIterator<$Beardifier$Rigid>;
        constructor(arg0: $ObjectListIterator<$Beardifier$Rigid_>, arg1: $ObjectListIterator<$JigsawJunction>);
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
        update(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): boolean;
        static primeHeightmaps(arg0: $ChunkAccess, arg1: $Set_<$Heightmap$Types_>): void;
        getFirstAvailable(arg0: number, arg1: number): number;
        setRawData(arg0: $ChunkAccess, arg1: $Heightmap$Types_, arg2: number[]): void;
        getRawData(): number[];
        getHighestTaken(arg0: number, arg1: number): number;
        static MATERIAL_MOTION_BLOCKING: $Predicate<$BlockState>;
        static NOT_AIR: $Predicate<$BlockState>;
        constructor(arg0: $ChunkAccess, arg1: $Heightmap$Types_);
    }
    export class $SurfaceRules$LazyCondition implements $SurfaceRules$Condition {
        test(): boolean;
        compute(): boolean;
        getContextLastUpdate(): number;
        result: boolean;
        context: $SurfaceRules$Context;
        constructor(arg0: $SurfaceRules$Context);
        get contextLastUpdate(): number;
    }
    export class $NoiseRouterData {
        static end(arg0: $HolderGetter<$DensityFunction_>): $NoiseRouter;
        static bootstrap(arg0: $BootstrapContext<$DensityFunction_>): $Holder<$DensityFunction>;
        static overworld(arg0: $HolderGetter<$DensityFunction_>, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>, arg2: boolean, arg3: boolean): $NoiseRouter;
        static none(): $NoiseRouter;
        static caves(arg0: $HolderGetter<$DensityFunction_>, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static nether(arg0: $HolderGetter<$DensityFunction_>, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static peaksAndValleys(arg0: number): number;
        static floatingIslands(arg0: $HolderGetter<$DensityFunction_>, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
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
        static read(arg0: $CompoundTag_): $BelowZeroRetrogen;
        hasBedrockHole(arg0: number, arg1: number): boolean;
        targetStatus(): $ChunkStatus;
        static getBiomeResolver(arg0: $BiomeResolver_, arg1: $ChunkAccess): $BiomeResolver;
        hasBedrockHoles(): boolean;
        static replaceOldBedrock(arg0: $ProtoChunk): void;
        applyBedrockMask(arg0: $ProtoChunk): void;
        getMissingBedrock(): $BitSet;
        invokeGetTargetStatus(): $ChunkStatus;
        static CODEC: $Codec<$BelowZeroRetrogen>;
        static UPGRADE_HEIGHT_ACCESSOR: $LevelHeightAccessor;
        get missingBedrock(): $BitSet;
    }
    export class $PositionalRandomFactory {
    }
    export interface $PositionalRandomFactory {
        at(arg0: $BlockPos_): $RandomSource;
        at(arg0: number, arg1: number, arg2: number): $RandomSource;
        parityConfigString(arg0: $StringBuilder): void;
        fromHashOf(arg0: string): $RandomSource;
        fromHashOf(arg0: $ResourceLocation_): $RandomSource;
        fromSeed(arg0: number): $RandomSource;
    }
    export class $DensityFunctions$ShiftNoise {
    }
    export interface $DensityFunctions$ShiftNoise extends $DensityFunction {
        compute(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        offsetNoise(): $DensityFunction$NoiseHolder;
    }
    export class $SurfaceRules$Context$TemperatureHelperCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $DensityFunctions$Spline$Coordinate extends $Record implements $ToFloatFunction<$DensityFunctions$Spline$Point> {
        apply(arg0: $DensityFunctions$Spline$Point_): number;
        "function"(): $Holder<$DensityFunction>;
        maxValue(): number;
        minValue(): number;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunctions$Spline$Coordinate;
        comap<C2>(arg0: $Function_<C2, $DensityFunctions$Spline$Point>): $ToFloatFunction<C2>;
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
        terrainAdjustment(): $TerrainAdjustment;
        groundLevelDelta(): number;
        constructor(box: $BoundingBox, terrainAdjustment: $TerrainAdjustment_, groundLevelDelta: number);
    }
    export class $XoroshiroRandomSource implements $RandomSource, $IXoroshiro128PlusPlusRandom {
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        setSeed(arg0: number): void;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        consumeCount(arg0: number): void;
        nextInt(arg0: number, arg1: number): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        triangle(arg0: number, arg1: number): number;
        getImplementation(): $Xoroshiro128PlusPlus;
        static CODEC: $Codec<$XoroshiroRandomSource>;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $RandomSupport$Seed128bit_);
        constructor(arg0: number);
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
        static INSTANCE: $DensityFunctions$BlendOffset;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendOffset}.
     */
    export type $DensityFunctions$BlendOffset_ = "instance";
    export class $VerticalAnchor {
        static top(): $VerticalAnchor;
        static absolute(arg0: number): $VerticalAnchor;
        static bottom(): $VerticalAnchor;
        static aboveBottom(arg0: number): $VerticalAnchor;
        static belowTop(arg0: number): $VerticalAnchor;
        static CODEC: $Codec<$VerticalAnchor>;
        static TOP: $VerticalAnchor;
        static BOTTOM: $VerticalAnchor;
    }
    export interface $VerticalAnchor {
        resolveY(arg0: $WorldGenerationContext): number;
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
        transform(arg0: $DensityFunction$FunctionContext, arg1: number): number;
        compute(arg0: $DensityFunction$FunctionContext): number;
        input(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
    }
    export class $SurfaceRules$SurfaceRule {
    }
    export interface $SurfaceRules$SurfaceRule {
        tryApply(arg0: number, arg1: number, arg2: number): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SurfaceRule}.
     */
    export type $SurfaceRules$SurfaceRule_ = ((arg0: number, arg1: number, arg2: number) => $BlockState_);
    export class $DensityFunction$NoiseHolder extends $Record {
        getValue(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        noiseData(): $Holder<$NormalNoise$NoiseParameters>;
        noise(): $NormalNoise;
        static CODEC: $Codec<$DensityFunction$NoiseHolder>;
        constructor(arg0: $Holder_<$NormalNoise$NoiseParameters>);
        constructor(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: $NormalNoise);
    }
    export class $NoiseChunk implements $DensityFunction$ContextProvider, $DensityFunction$FunctionContext, $IChunkNoiseSampler {
        wrap(arg0: $DensityFunction_): $DensityFunction;
        cellWidth(): number;
        cellHeight(): number;
        static forChunk(arg0: $ChunkAccess, arg1: $RandomState, arg2: $DensityFunctions$BeardifierOrMarker, arg3: $NoiseGeneratorSettings_, arg4: $Aquifer$FluidPicker_, arg5: $Blender): $NoiseChunk;
        updateForX(arg0: number, arg1: number): void;
        updateForY(arg0: number, arg1: number): void;
        updateForZ(arg0: number, arg1: number): void;
        aquifer(): $Aquifer;
        swapSlices(): void;
        forIndex(arg0: number): $NoiseChunk;
        preliminarySurfaceLevel(arg0: number, arg1: number): number;
        blockY(): number;
        blockZ(): number;
        getBlender(): $Blender;
        blockX(): number;
        selectCellYZ(arg0: number, arg1: number): void;
        stopInterpolation(): void;
        advanceCellX(arg0: number): void;
        fillAllDirectly(arg0: number[], arg1: $DensityFunction_): void;
        getInterpolatedState(): $BlockState;
        initializeForFirstCellX(): void;
        cachedClimateSampler(arg0: $NoiseRouter_, arg1: $List_<$Climate$ParameterPoint_>): $Climate$Sampler;
        getOrComputeBlendingOutput(arg0: number, arg1: number): $Blender$BlendingOutput;
        getHorizontalCellBlockCount(): number;
        getMinimumCellY(): number;
        getCellBlockZ(): number;
        getCellBlockX(): number;
        getCellBlockY(): number;
        getStartBiomeX(): number;
        getStartBlockZ(): number;
        getStartBiomeZ(): number;
        getStartBlockX(): number;
        getStartBlockY(): number;
        getIsSamplingForCaches(): boolean;
        getVerticalCellCount(): number;
        getHorizontalCellCount(): number;
        getIsInInterpolationLoop(): boolean;
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
        interpolationCounter: number;
        constructor(arg0: number, arg1: $RandomState, arg2: number, arg3: number, arg4: $NoiseSettings_, arg5: $DensityFunctions$BeardifierOrMarker, arg6: $NoiseGeneratorSettings_, arg7: $Aquifer$FluidPicker_, arg8: $Blender);
        get blender(): $Blender;
        get interpolatedState(): $BlockState;
        get horizontalCellBlockCount(): number;
        get minimumCellY(): number;
        get cellBlockZ(): number;
        get cellBlockX(): number;
        get cellBlockY(): number;
        get startBiomeX(): number;
        get startBlockZ(): number;
        get startBiomeZ(): number;
        get startBlockX(): number;
        get startBlockY(): number;
        get isSamplingForCaches(): boolean;
        get verticalCellCount(): number;
        get horizontalCellCount(): number;
        get isInInterpolationLoop(): boolean;
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
        transform(arg0: $DensityFunction$FunctionContext, arg1: number): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        noise(): $DensityFunction$NoiseHolder;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        rarityValueMapper(): $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        compute(arg0: $DensityFunction$FunctionContext): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
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
        next(arg0: number): number;
        setSeed(arg0: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextInt(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        triangle(arg0: number, arg1: number): number;
        constructor(arg0: number);
        set seed(value: number);
    }
    export class $SurfaceRules$BiomeConditionSource$1BiomeCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $Aquifer$NoiseBasedAquifer implements $Aquifer {
        getIndex(arg0: number, arg1: number, arg2: number): number;
        gridZ(arg0: number): number;
        computeSubstance(pos: $DensityFunction$FunctionContext, density: number): $BlockState;
        shouldScheduleFluidUpdate(): boolean;
        gridX(arg0: number): number;
        gridY(arg0: number): number;
        static similarity(arg0: number, arg1: number): number;
        minGridY: number;
        minGridX: number;
        minGridZ: number;
        gridSizeX: number;
        aquiferLocationCache: number[];
        gridSizeZ: number;
        aquiferCache: $Aquifer$FluidStatus[];
        barrierNoise: $DensityFunction;
        lavaNoise: $DensityFunction;
        constructor(arg0: $NoiseChunk, arg1: $ChunkPos, arg2: $NoiseRouter_, arg3: $PositionalRandomFactory, arg4: number, arg5: number, arg6: $Aquifer$FluidPicker_);
    }
    export class $SurfaceRules$TestRuleSource extends $Record implements $SurfaceRules$RuleSource {
        apply(arg0: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
        thenRun(): $SurfaceRules$RuleSource;
        ifTrue(): $SurfaceRules$ConditionSource;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$TestRuleSource>;
        constructor(arg0: $SurfaceRules$ConditionSource, arg1: $SurfaceRules$RuleSource);
    }
    export class $DensityFunctions$YClampedGradient extends $Record implements $DensityFunction$SimpleFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fromValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        toValue(): number;
        fromY(): number;
        toY(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$YClampedGradient>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $WorldDimensions$1Entry extends $Record {
    }
    export class $Column$Range extends $Column {
        floor(): number;
        ceiling(): number;
        height(): number;
        constructor(arg0: number, arg1: number);
    }
    export class $FlatLevelSource extends $ChunkGenerator {
        settings(): $FlatLevelGeneratorSettings;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$FlatLevelSource>;
        biomeSource: $BiomeSource;
        constructor(arg0: $FlatLevelGeneratorSettings);
    }
    export class $SingleThreadedRandomSource implements $BitRandomSource, $ISimpleRandom {
        next(arg0: number): number;
        setSeed(arg0: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextInt(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        triangle(arg0: number, arg1: number): number;
        getSeed(): number;
        invokeSetSeed(arg0: number): void;
        constructor(arg0: number);
    }
    export class $SurfaceRules$WaterConditionSource$1WaterCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $WorldgenRandom extends $LegacyRandomSource {
        getCount(): number;
        static seedSlimeChunk(arg0: number, arg1: number, arg2: number, arg3: number): $RandomSource;
        setLargeFeatureSeed(arg0: number, arg1: number, arg2: number): void;
        setLargeFeatureWithSalt(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setDecorationSeed(arg0: number, arg1: number, arg2: number): number;
        setFeatureSeed(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $RandomSource);
        get count(): number;
    }
    export class $DensityFunction$FunctionContext {
    }
    export interface $DensityFunction$FunctionContext {
        blockY(): number;
        blockZ(): number;
        getBlender(): $Blender;
        blockX(): number;
        get blender(): $Blender;
    }
    export class $RandomSupport$Seed128bit extends $Record {
        xor(arg0: number, arg1: number): $RandomSupport$Seed128bit;
        xor(arg0: $RandomSupport$Seed128bit_): $RandomSupport$Seed128bit;
        mixed(): $RandomSupport$Seed128bit;
        seedLo(): number;
        seedHi(): number;
        constructor(arg0: number, arg1: number);
    }
    export class $SurfaceRules$BiomeConditionSource implements $SurfaceRules$ConditionSource {
        apply(arg0: $SurfaceRules$Context): $SurfaceRules$Condition;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$ConditionSource>;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$BiomeConditionSource>;
        biomes: $List<$ResourceKey<$Biome>>;
        biomeNameTest: $Predicate<$ResourceKey<$Biome>>;
        constructor(arg0: $List_<$ResourceKey_<$Biome>>);
    }
    /**
     * @deprecated
     */
    export class $ThreadSafeLegacyRandomSource implements $BitRandomSource {
        next(arg0: number): number;
        setSeed(arg0: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextInt(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        triangle(arg0: number, arg1: number): number;
        constructor(arg0: number);
        set seed(value: number);
    }
    export class $DensityFunctions$EndIslandDensityFunction implements $DensityFunction$SimpleFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$EndIslandDensityFunction>;
        constructor(arg0: number);
    }
    export class $DensityFunctions$Spline$Point extends $Record {
        context(): $DensityFunction$FunctionContext;
        constructor(arg0: $DensityFunction$FunctionContext);
    }
    export class $MarsagliaPolarGaussian {
        reset(): void;
        nextGaussian(): number;
        randomSource: $RandomSource;
        constructor(arg0: $RandomSource);
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
        constructor(arg0: $BlockStateProvider, arg1: $BlockStateProvider, arg2: $BlockStateProvider, arg3: $BlockStateProvider, arg4: $BlockStateProvider, arg5: $List_<$BlockState_>, arg6: $TagKey_<$Block>, arg7: $TagKey_<$Block>);
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        this$0: $NoiseChunk;
        constructor(arg0: $NoiseChunk);
    }
    export class $DensityFunctions {
        static min(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static max(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static add(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static map(arg0: $DensityFunction_, arg1: $DensityFunctions$Mapped$Type_): $DensityFunction;
        static constant(arg0: number): $DensityFunction;
        static zero(): $DensityFunction;
        static bootstrap(arg0: $Registry<$MapCodec_<$DensityFunction_>>): $MapCodec<$DensityFunction>;
        static shift(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static mul(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static singleArgumentCodec<A, O>(arg0: $Codec<A>, arg1: $Function_<A, O>, arg2: $Function_<O, A>): $KeyDispatchDataCodec<O>;
        static lerp(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_): $DensityFunction;
        static lerp(arg0: $DensityFunction_, arg1: number, arg2: $DensityFunction_): $DensityFunction;
        static noise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number): $DensityFunction;
        static noise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number): $DensityFunction;
        static noise(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static singleFunctionArgumentCodec<O>(arg0: $Function_<$DensityFunction, O>, arg1: $Function_<O, $DensityFunction>): $KeyDispatchDataCodec<O>;
        static doubleFunctionArgumentCodec<O>(arg0: $BiFunction_<$DensityFunction, $DensityFunction, O>, arg1: $Function_<O, $DensityFunction>, arg2: $Function_<O, $DensityFunction>): $KeyDispatchDataCodec<O>;
        static interpolated(arg0: $DensityFunction_): $DensityFunction;
        static shiftedNoise2d(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: number, arg3: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static rangeChoice(arg0: $DensityFunction_, arg1: number, arg2: number, arg3: $DensityFunction_, arg4: $DensityFunction_): $DensityFunction;
        static blendDensity(arg0: $DensityFunction_): $DensityFunction;
        static weirdScaledSampler(arg0: $DensityFunction_, arg1: $Holder_<$NormalNoise$NoiseParameters>, arg2: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_): $DensityFunction;
        static yClampedGradient(arg0: number, arg1: number, arg2: number, arg3: number): $DensityFunction;
        static blendOffset(): $DensityFunction;
        static mappedNoise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number, arg3: number, arg4: number): $DensityFunction;
        static mappedNoise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number): $DensityFunction;
        static mappedNoise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number, arg3: number): $DensityFunction;
        static cacheAllInCell(arg0: $DensityFunction_): $DensityFunction;
        static cache2d(arg0: $DensityFunction_): $DensityFunction;
        static spline(arg0: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>): $DensityFunction;
        static makeCodec<O>(arg0: $MapCodec_<O>): $KeyDispatchDataCodec<O>;
        static flatCache(arg0: $DensityFunction_): $DensityFunction;
        static cacheOnce(arg0: $DensityFunction_): $DensityFunction;
        static endIslands(arg0: number): $DensityFunction;
        static blendAlpha(): $DensityFunction;
        static shiftA(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static shiftB(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
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
        static create(arg0: $DensityFunctions$TwoArgumentSimpleFunction$Type_, arg1: $DensityFunction_, arg2: $DensityFunction_): $DensityFunctions$TwoArgumentSimpleFunction;
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        constructor(arg0: $DensityFunctions$TwoArgumentSimpleFunction$Type_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: number, arg4: number);
    }
    export class $GenerationStep {
        constructor();
    }
    export class $SurfaceRules$NotCondition extends $Record implements $SurfaceRules$Condition {
    }
    export class $Column {
        static line(): $Column;
        static create(arg0: $OptionalInt, arg1: $OptionalInt): $Column;
        static scan(arg0: $LevelSimulatedReader, arg1: $BlockPos_, arg2: number, arg3: $Predicate_<$BlockState>, arg4: $Predicate_<$BlockState>): ($Column) | undefined;
        static around(arg0: number, arg1: number): $Column$Range;
        static above(arg0: number): $Column;
        static below(arg0: number): $Column;
        getHeight(): $OptionalInt;
        static inside(arg0: number, arg1: number): $Column$Range;
        static fromLowest(arg0: number): $Column;
        getFloor(): $OptionalInt;
        getCeiling(): $OptionalInt;
        withFloor(arg0: $OptionalInt): $Column;
        static fromHighest(arg0: number): $Column;
        withCeiling(arg0: $OptionalInt): $Column;
        constructor();
        get height(): $OptionalInt;
        get floor(): $OptionalInt;
        get ceiling(): $OptionalInt;
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
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
        getSerializedName(): string;
        sendToClient(): boolean;
        getSerializationKey(): string;
        keepAfterWorldgen(): boolean;
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
        next(arg0: number): number;
        nextDouble(): number;
        nextInt(arg0: number): number;
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
    export class $NoiseBasedChunkGenerator extends $ChunkGenerator {
        stable(arg0: $ResourceKey_<$NoiseGeneratorSettings>): boolean;
        generatorSettings(): $Holder<$NoiseGeneratorSettings>;
        buildSurface(arg0: $ChunkAccess, arg1: $WorldGenerationContext, arg2: $RandomState, arg3: $StructureManager, arg4: $BiomeManager, arg5: $Registry<$Biome_>, arg6: $Blender): void;
        iterateNoiseColumn(arg0: $LevelHeightAccessor, arg1: $RandomState, arg2: number, arg3: number, arg4: $MutableObject<$NoiseColumn>, arg5: $Predicate_<$BlockState>): $OptionalInt;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$NoiseBasedChunkGenerator>;
        biomeSource: $BiomeSource;
        constructor(arg0: $BiomeSource, arg1: $Holder_<$NoiseGeneratorSettings>);
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
        mfix$getPossibleBiomes(): $Set<any>;
        mfix$applyPossibleBiomes(): void;
        getSurfaceSecondary(): number;
        getMinSurfaceLevel(): number;
        updateXZ(arg0: number, arg1: number): void;
        updateY(i: number, j: number, k: number, l: number, m: number, n: number): void;
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
        constructor(arg0: $SurfaceSystem, arg1: $RandomState, arg2: $ChunkAccess, arg3: $NoiseChunk, arg4: $Function_<$BlockPos, $Holder<$Biome>>, arg5: $Registry<$Biome_>, arg6: $WorldGenerationContext);
        get surfaceSecondary(): number;
        get minSurfaceLevel(): number;
    }
    export class $NoiseSettings extends $Record {
        static create(arg0: number, arg1: number, arg2: number, arg3: number): $NoiseSettings;
        height(): number;
        minY(): number;
        getCellWidth(): number;
        getCellHeight(): number;
        noiseSizeVertical(): number;
        clampToHeightAccessor(arg0: $LevelHeightAccessor): $NoiseSettings;
        noiseSizeHorizontal(): number;
        static CODEC: $Codec<$NoiseSettings>;
        static END_NOISE_SETTINGS: $NoiseSettings;
        static CAVES_NOISE_SETTINGS: $NoiseSettings;
        static OVERWORLD_NOISE_SETTINGS: $NoiseSettings;
        static FLOATING_ISLANDS_NOISE_SETTINGS: $NoiseSettings;
        static NETHER_NOISE_SETTINGS: $NoiseSettings;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get cellWidth(): number;
        get cellHeight(): number;
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
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        xzScale(): number;
        shiftZ(): $DensityFunction;
        shiftX(): $DensityFunction;
        shiftY(): $DensityFunction;
        yScale(): number;
        noise(): $DensityFunction$NoiseHolder;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$ShiftedNoise>;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: number, arg4: number, arg5: $DensityFunction$NoiseHolder_);
    }
    export class $DensityFunctions$Spline extends $Record implements $DensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        spline(): $CubicSpline<$DensityFunctions$Spline$Point, $DensityFunctions$Spline$Coordinate>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
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
    export class $NoiseChunk$Cache2D implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        constructor(arg0: $DensityFunction_);
    }
    export class $SurfaceSystem {
        getBand(arg0: number, arg1: number, arg2: number): $BlockState;
        /**
         * @deprecated
         */
        topMaterial(arg0: $SurfaceRules$RuleSource, arg1: $CarvingContext, arg2: $Function_<$BlockPos, $Holder<$Biome>>, arg3: $ChunkAccess, arg4: $NoiseChunk, arg5: $BlockPos_, arg6: boolean): ($BlockState) | undefined;
        buildSurface(arg0: $RandomState, arg1: $BiomeManager, arg2: $Registry<$Biome_>, arg3: boolean, arg4: $WorldGenerationContext, arg5: $ChunkAccess, arg6: $NoiseChunk, arg7: $SurfaceRules$RuleSource): void;
        getSurfaceSecondary(arg0: number, arg1: number): number;
        getSurfaceDepth(arg0: number, arg1: number): number;
        constructor(arg0: $RandomState, arg1: $BlockState_, arg2: number, arg3: $PositionalRandomFactory);
    }
    export class $DensityFunction$ContextProvider {
    }
    export interface $DensityFunction$ContextProvider {
        forIndex(arg0: number): $DensityFunction$FunctionContext;
        fillAllDirectly(arg0: number[], arg1: $DensityFunction_): void;
    }
    export class $SurfaceRules$Context$HoleCondition extends $SurfaceRules$LazyXZCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules {
        static register<A>(arg0: $Registry<$MapCodec_<A>>, arg1: string, arg2: $KeyDispatchDataCodec_<A>): $MapCodec<A>;
        static state(arg0: $BlockState_): $SurfaceRules$RuleSource;
        static sequence(...arg0: $SurfaceRules$RuleSource[]): $SurfaceRules$RuleSource;
        static not(arg0: $SurfaceRules$ConditionSource): $SurfaceRules$ConditionSource;
        static isBiome(...arg0: $ResourceKey_<$Biome>[]): $SurfaceRules$ConditionSource;
        static temperature(): $SurfaceRules$ConditionSource;
        static bandlands(): $SurfaceRules$RuleSource;
        static hole(): $SurfaceRules$ConditionSource;
        static steep(): $SurfaceRules$ConditionSource;
        static ifTrue(arg0: $SurfaceRules$ConditionSource, arg1: $SurfaceRules$RuleSource): $SurfaceRules$RuleSource;
        static verticalGradient(arg0: string, arg1: $VerticalAnchor_, arg2: $VerticalAnchor_): $SurfaceRules$ConditionSource;
        static yStartCheck(arg0: $VerticalAnchor_, arg1: number): $SurfaceRules$ConditionSource;
        static yBlockCheck(arg0: $VerticalAnchor_, arg1: number): $SurfaceRules$ConditionSource;
        static noiseCondition(arg0: $ResourceKey_<$NormalNoise$NoiseParameters>, arg1: number): $SurfaceRules$ConditionSource;
        static noiseCondition(arg0: $ResourceKey_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number): $SurfaceRules$ConditionSource;
        static waterStartCheck(arg0: number, arg1: number): $SurfaceRules$ConditionSource;
        static waterBlockCheck(arg0: number, arg1: number): $SurfaceRules$ConditionSource;
        static stoneDepthCheck(arg0: number, arg1: boolean, arg2: number, arg3: $CaveSurface_): $SurfaceRules$ConditionSource;
        static stoneDepthCheck(arg0: number, arg1: boolean, arg2: $CaveSurface_): $SurfaceRules$ConditionSource;
        static abovePreliminarySurface(): $SurfaceRules$ConditionSource;
        static ON_FLOOR: $SurfaceRules$ConditionSource;
        static UNDER_FLOOR: $SurfaceRules$ConditionSource;
        static DEEP_UNDER_FLOOR: $SurfaceRules$ConditionSource;
        static ON_CEILING: $SurfaceRules$ConditionSource;
        static UNDER_CEILING: $SurfaceRules$ConditionSource;
        static VERY_DEEP_UNDER_FLOOR: $SurfaceRules$ConditionSource;
        constructor();
    }
    export class $Aquifer$FluidStatus implements $IAquiferSamplerFluidLevel {
        at(arg0: number): $BlockState;
        fluidLevel: number;
        fluidType: $BlockState;
        constructor(arg0: number, arg1: $BlockState_);
    }
    export class $DensityFunctions$BeardifierOrMarker {
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
    }
    export interface $DensityFunctions$BeardifierOrMarker extends $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
    }
    export class $NoiseChunk$FlatCache implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        values: number[][];
        this$0: $NoiseChunk;
        constructor(arg0: $NoiseChunk, arg1: $DensityFunction_, arg2: boolean);
    }
    export class $OreVeinifier {
        static create(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $PositionalRandomFactory): $NoiseChunk$BlockStateFiller;
    }
    export class $DensityFunctions$Noise extends $Record implements $DensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        /**
         * @deprecated
         */
        xzScale(): number;
        yScale(): number;
        noise(): $DensityFunction$NoiseHolder;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        halfNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Noise>;
        static DATA_CODEC: $MapCodec<$DensityFunctions$Noise>;
        constructor(arg0: $DensityFunction$NoiseHolder_, arg1: number, arg2: number);
    }
    export class $GeodeCrackSettings {
        static CODEC: $Codec<$GeodeCrackSettings>;
        generateCrackChance: number;
        crackPointOffset: number;
        baseCrackSize: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $DensityFunctions$Clamp extends $Record implements $DensityFunctions$PureTransformer {
        transform(arg0: number): number;
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
        squeeze(): $DensityFunction;
        cube(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Clamp>;
        constructor(arg0: $DensityFunction_, arg1: number, arg2: number);
    }
    export class $Noises {
        static instantiate(arg0: $HolderGetter<$NormalNoise$NoiseParameters_>, arg1: $PositionalRandomFactory, arg2: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
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
        apply(materialRuleContext: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
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
