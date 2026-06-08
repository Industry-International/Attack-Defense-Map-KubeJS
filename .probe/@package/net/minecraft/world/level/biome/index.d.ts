import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ImprovedNoise, $PerlinSimplexNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $EntityType_, $MobCategory_, $EntityType, $MobCategory } from "@package/net/minecraft/world/entity";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Set_, $Map, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_, $ToIntFunction, $Function_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $SoundEvent, $Music } from "@package/net/minecraft/sounds";
import { $ExtendedBiome } from "@package/net/irisshaders/iris/mixinterface";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $HolderGetter, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Weight, $WeightedRandomList, $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $ConfiguredWorldCarver_, $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $BiomeManagerAccessor as $BiomeManagerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $Enum, $Iterable, $Record } from "@package/java/lang";
import { $IMultiNoiseBiomeSource } from "@package/com/ishland/c2me/base/mixin/access";
import { $BiomeManagerAccessor } from "@package/org/embeddedt/modernfix/common/mixin/perf/optimize_surface_rules";
import { $GenerationStep$Carving, $DensityFunction, $GenerationStep$Carving_, $DensityFunction$FunctionContext, $GenerationStep$Decoration_, $DensityFunction_ } from "@package/net/minecraft/world/level/levelgen";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $LevelReader } from "@package/net/minecraft/world/level";
import { $MultiNoiseSamplerHooks } from "@package/net/fabricmc/fabric/impl/biome";
import { $PlacedFeature, $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModifiableBiomeInfo } from "@package/net/neoforged/neoforge/common/world";

declare module "@package/net/minecraft/world/level/biome" {
    export class $AmbientMoodSettings {
        getSoundEvent(): $Holder<$SoundEvent>;
        getTickDelay(): number;
        getSoundPositionOffset(): number;
        getBlockSearchExtent(): number;
        static CODEC: $Codec<$AmbientMoodSettings>;
        static LEGACY_CAVE_SETTINGS: $AmbientMoodSettings;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: number, arg2: number, arg3: number);
        get soundEvent(): $Holder<$SoundEvent>;
        get tickDelay(): number;
        get soundPositionOffset(): number;
        get blockSearchExtent(): number;
    }
    export interface $Biome extends RegistryMarked<RegistryTypes.WorldgenBiomeTag, RegistryTypes.WorldgenBiome> {}
    export class $Biome$Precipitation extends $Enum<$Biome$Precipitation> implements $StringRepresentable {
        static values(): $Biome$Precipitation[];
        static valueOf(arg0: string): $Biome$Precipitation;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static RAIN: $Biome$Precipitation;
        static CODEC: $Codec<$Biome$Precipitation>;
        static SNOW: $Biome$Precipitation;
        static NONE: $Biome$Precipitation;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Biome$Precipitation}.
     */
    export type $Biome$Precipitation_ = "none" | "rain" | "snow";
    export class $MobSpawnSettings {
        getMobs(arg0: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        getCreatureProbability(): number;
        getMobSpawnCost(arg0: $EntityType_<never>): $MobSpawnSettings$MobSpawnCost;
        getEntityTypes(): $Set<$EntityType<never>>;
        getSpawnerTypes(): $Set<$MobCategory>;
        static CODEC: $MapCodec<$MobSpawnSettings>;
        creatureGenerationProbability: number;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        static EMPTY: $MobSpawnSettings;
        static EMPTY_MOB_LIST: $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        constructor(arg0: number, arg1: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>, arg2: $Map_<$EntityType_<never>, $MobSpawnSettings$MobSpawnCost_>);
        get creatureProbability(): number;
        get entityTypes(): $Set<$EntityType<never>>;
        get spawnerTypes(): $Set<$MobCategory>;
    }
    export class $BiomeResolver {
    }
    export interface $BiomeResolver {
        getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_): $Holder<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeResolver}.
     */
    export type $BiomeResolver_ = ((arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler) => $Holder_<$Biome>);
    export class $Climate$RTree$Node<T> {
    }
    export class $BiomeManager$NoiseBiomeSource {
    }
    export interface $BiomeManager$NoiseBiomeSource {
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeManager$NoiseBiomeSource}.
     */
    export type $BiomeManager$NoiseBiomeSource_ = ((arg0: number, arg1: number, arg2: number) => $Holder_<$Biome>);
    export class $MultiNoiseBiomeSourceParameterList {
        parameters(): $Climate$ParameterList<$Holder<$Biome>>;
        static knownPresets(): $Map<$MultiNoiseBiomeSourceParameterList$Preset, $Climate$ParameterList<$ResourceKey<$Biome>>>;
        static CODEC: $Codec<$Holder<$MultiNoiseBiomeSourceParameterList>>;
        static DIRECT_CODEC: $Codec<$MultiNoiseBiomeSourceParameterList>;
        constructor(arg0: $MultiNoiseBiomeSourceParameterList$Preset_, arg1: $HolderGetter<$Biome_>);
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList}.
     */
    export type $MultiNoiseBiomeSourceParameterList_ = RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterList;
    export class $BiomeSources {
        static bootstrap(arg0: $Registry<$MapCodec_<$BiomeSource>>): $MapCodec<$BiomeSource>;
        constructor();
    }
    export class $FeatureSorter$1FeatureData extends $Record {
    }
    export class $Climate$SpawnFinder {
    }
    export class $Biome$TemperatureModifier extends $Enum<$Biome$TemperatureModifier> implements $StringRepresentable {
        getName(): string;
        static values(): $Biome$TemperatureModifier[];
        static valueOf(arg0: string): $Biome$TemperatureModifier;
        getSerializedName(): string;
        modifyTemperature(arg0: $BlockPos_, arg1: number): number;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Biome$TemperatureModifier>;
        static NONE: $Biome$TemperatureModifier;
        static FROZEN: $Biome$TemperatureModifier;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Biome$TemperatureModifier}.
     */
    export type $Biome$TemperatureModifier_ = "none" | "frozen";
    export class $BiomeSpecialEffects$Builder {
        build(): $BiomeSpecialEffects;
        fogColor(arg0: number): $BiomeSpecialEffects$Builder;
        skyColor(arg0: number): $BiomeSpecialEffects$Builder;
        waterColor(arg0: number): $BiomeSpecialEffects$Builder;
        waterFogColor(arg0: number): $BiomeSpecialEffects$Builder;
        backgroundMusic(arg0: $Music): $BiomeSpecialEffects$Builder;
        grassColorModifier(arg0: $BiomeSpecialEffects$GrassColorModifier_): $BiomeSpecialEffects$Builder;
        grassColorOverride(arg0: number): $BiomeSpecialEffects$Builder;
        foliageColorOverride(arg0: number): $BiomeSpecialEffects$Builder;
        ambientMoodSound(arg0: $AmbientMoodSettings): $BiomeSpecialEffects$Builder;
        ambientParticle(arg0: $AmbientParticleSettings): $BiomeSpecialEffects$Builder;
        ambientLoopSound(arg0: $Holder_<$SoundEvent>): $BiomeSpecialEffects$Builder;
        ambientAdditionsSound(arg0: $AmbientAdditionsSettings): $BiomeSpecialEffects$Builder;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
        constructor();
    }
    export class $Climate$RTree$Leaf<T> extends $Climate$RTree$Node<T> {
    }
    export class $Climate$RTree$SubTree<T> extends $Climate$RTree$Node<T> {
    }
    export class $Climate$TargetPoint extends $Record {
        depth(): number;
        weirdness(): number;
        erosion(): number;
        toParameterArray(): number[];
        temperature(): number;
        humidity(): number;
        continentalness(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $Biome$BiomeBuilder {
        build(): $Biome;
        specialEffects(arg0: $BiomeSpecialEffects): $Biome$BiomeBuilder;
        generationSettings(arg0: $BiomeGenerationSettings): $Biome$BiomeBuilder;
        hasPrecipitation(arg0: boolean): $Biome$BiomeBuilder;
        mobSpawnSettings(arg0: $MobSpawnSettings): $Biome$BiomeBuilder;
        temperature(arg0: number): $Biome$BiomeBuilder;
        downfall(arg0: number): $Biome$BiomeBuilder;
        temperatureAdjustment(arg0: $Biome$TemperatureModifier_): $Biome$BiomeBuilder;
        constructor();
    }
    export class $BiomeSpecialEffects$GrassColorModifier extends $Enum<$BiomeSpecialEffects$GrassColorModifier> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $BiomeSpecialEffects$GrassColorModifier[];
        static valueOf(arg0: string): $BiomeSpecialEffects$GrassColorModifier;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        modifyColor(arg0: number, arg1: number, arg2: number): number;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$BiomeSpecialEffects$GrassColorModifier>;
        static SWAMP: $BiomeSpecialEffects$GrassColorModifier;
        static NONE: $BiomeSpecialEffects$GrassColorModifier;
        static DARK_FOREST: $BiomeSpecialEffects$GrassColorModifier;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BiomeSpecialEffects$GrassColorModifier}.
     */
    export type $BiomeSpecialEffects$GrassColorModifier_ = "none" | "dark_forest" | "swamp";
    export class $BiomeGenerationSettings$Builder extends $BiomeGenerationSettings$PlainBuilder {
        addFeature(arg0: $GenerationStep$Decoration_, arg1: $ResourceKey_<$PlacedFeature>): $BiomeGenerationSettings$Builder;
        addCarver(arg0: $GenerationStep$Carving_, arg1: $ResourceKey_<$ConfiguredWorldCarver<never>>): $BiomeGenerationSettings$Builder;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        carvers: $Map<$GenerationStep$Carving, $List<$Holder<$ConfiguredWorldCarver<never>>>>;
        constructor(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>);
    }
    export class $FeatureSorter {
        static buildFeaturesPerStep<T>(arg0: $List_<T>, arg1: $Function_<T, $List<$HolderSet<$PlacedFeature>>>, arg2: boolean): $List<$FeatureSorter$StepFeatureData>;
        constructor();
    }
    export class $MobSpawnSettings$Builder {
        build(): $MobSpawnSettings;
        addSpawn(arg0: $MobCategory_, arg1: $MobSpawnSettings$SpawnerData): $MobSpawnSettings$Builder;
        creatureGenerationProbability(arg0: number): $MobSpawnSettings$Builder;
        addMobCharge(arg0: $EntityType_<never>, arg1: number, arg2: number): $MobSpawnSettings$Builder;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>;
        constructor();
    }
    export class $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
    }
    export interface $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider}.
     */
    export type $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_ = (() => void);
    export class $BiomeGenerationSettings {
        hasFeature(arg0: $PlacedFeature_): boolean;
        features(): $List<$HolderSet<$PlacedFeature>>;
        getFlowerFeatures(): $List<$ConfiguredFeature<never, never>>;
        getCarvers(arg0: $GenerationStep$Carving_): $Iterable<$Holder<$ConfiguredWorldCarver<never>>>;
        getCarvingStages(): $Set<$GenerationStep$Carving>;
        static CODEC: $MapCodec<$BiomeGenerationSettings>;
        carvers: $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        featureSet: $Supplier<$Set<$PlacedFeature>>;
        static EMPTY: $BiomeGenerationSettings;
        flowerFeatures: $Supplier<$List<$ConfiguredFeature<never, never>>>;
        constructor(arg0: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>, arg1: $List_<$HolderSet_<$PlacedFeature>>);
        get carvingStages(): $Set<$GenerationStep$Carving>;
    }
    export class $BiomeGenerationSettings$PlainBuilder {
        build(): $BiomeGenerationSettings;
        addFeature(arg0: number, arg1: $Holder_<$PlacedFeature>): $BiomeGenerationSettings$PlainBuilder;
        addFeature(arg0: $GenerationStep$Decoration_, arg1: $Holder_<$PlacedFeature>): $BiomeGenerationSettings$PlainBuilder;
        addCarver(arg0: $GenerationStep$Carving_, arg1: $Holder_<$ConfiguredWorldCarver<never>>): $BiomeGenerationSettings$PlainBuilder;
        addFeatureStepsUpTo(arg0: number): void;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        carvers: $Map<$GenerationStep$Carving, $List<$Holder<$ConfiguredWorldCarver<never>>>>;
        constructor();
    }
    export class $MobSpawnSettings$SpawnerData extends $WeightedEntry$IntrusiveBase {
        static CODEC: $Codec<$MobSpawnSettings$SpawnerData>;
        minCount: number;
        type: $EntityType<never>;
        maxCount: number;
        constructor(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $EntityType_<never>, arg1: $Weight, arg2: number, arg3: number);
    }
    export class $MobSpawnSettings$MobSpawnCost extends $Record {
        charge(): number;
        energyBudget(): number;
        static CODEC: $Codec<$MobSpawnSettings$MobSpawnCost>;
        constructor(energyBudget: number, charge: number);
    }
    export class $Climate {
        static target(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Climate$TargetPoint;
        static empty(): $Climate$Sampler;
        static parameters(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number): $Climate$ParameterPoint;
        static parameters(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Climate$ParameterPoint;
        static findSpawnPosition(arg0: $List_<$Climate$ParameterPoint_>, arg1: $Climate$Sampler_): $BlockPos;
        static quantizeCoord(arg0: number): number;
        static unquantizeCoord(arg0: number): number;
        static PARAMETER_COUNT: number;
        constructor();
    }
    export class $MultiNoiseBiomeSourceParameterLists {
        static bootstrap(arg0: $BootstrapContext<$MultiNoiseBiomeSourceParameterList_>): void;
        static OVERWORLD: $ResourceKey<$MultiNoiseBiomeSourceParameterList>;
        static NETHER: $ResourceKey<$MultiNoiseBiomeSourceParameterList>;
        constructor();
    }
    export class $AmbientParticleSettings {
        getOptions(): $ParticleOptions;
        canSpawn(arg0: $RandomSource): boolean;
        static CODEC: $Codec<$AmbientParticleSettings>;
        constructor(arg0: $ParticleOptions_, arg1: number);
        get options(): $ParticleOptions;
    }
    export class $TheEndBiomeSource extends $BiomeSource {
        static create(arg0: $HolderGetter<$Biome_>): $TheEndBiomeSource;
        static CODEC: $MapCodec<$TheEndBiomeSource>;
    }
    export class $BiomeSpecialEffects {
        getAmbientAdditionsSettings(): ($AmbientAdditionsSettings) | undefined;
        getBackgroundMusic(): ($Music) | undefined;
        getFogColor(): number;
        getWaterColor(): number;
        getSkyColor(): number;
        getWaterFogColor(): number;
        getAmbientParticleSettings(): ($AmbientParticleSettings) | undefined;
        getGrassColorModifier(): $BiomeSpecialEffects$GrassColorModifier;
        getGrassColorOverride(): (number) | undefined;
        getAmbientMoodSettings(): ($AmbientMoodSettings) | undefined;
        getFoliageColorOverride(): (number) | undefined;
        getAmbientLoopSoundEvent(): ($Holder<$SoundEvent>) | undefined;
        skyColor: number;
        static CODEC: $Codec<$BiomeSpecialEffects>;
        waterFogColor: number;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        foliageColorOverride: (number) | undefined;
        grassColorOverride: (number) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientParticleSettings: ($AmbientParticleSettings) | undefined;
        waterColor: number;
        backgroundMusic: ($Music) | undefined;
        grassColorModifier: $BiomeSpecialEffects$GrassColorModifier;
        fogColor: number;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (number) | undefined, arg5: (number) | undefined, arg6: $BiomeSpecialEffects$GrassColorModifier_, arg7: ($AmbientParticleSettings) | undefined, arg8: ($Holder_<$SoundEvent>) | undefined, arg9: ($AmbientMoodSettings) | undefined, arg10: ($AmbientAdditionsSettings) | undefined, arg11: ($Music) | undefined);
    }
    export class $Climate$Parameter extends $Record {
        min(): number;
        max(): number;
        distance(arg0: number): number;
        distance(arg0: $Climate$Parameter_): number;
        span(arg0: $Climate$Parameter_): $Climate$Parameter;
        static span(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_): $Climate$Parameter;
        static span(arg0: number, arg1: number): $Climate$Parameter;
        static point(arg0: number): $Climate$Parameter;
        static CODEC: $Codec<$Climate$Parameter>;
        constructor(arg0: number, arg1: number);
    }
    export class $Climate$ParameterList<T> {
        values(): $List<$Pair<$Climate$ParameterPoint, T>>;
        findValue(arg0: $Climate$TargetPoint_): T;
        static codec<T>(arg0: $MapCodec_<T>): $Codec<$Climate$ParameterList<T>>;
        findValueIndex(arg0: $Climate$TargetPoint_): T;
        findValueIndex(arg0: $Climate$TargetPoint_, arg1: $Climate$DistanceMetric_<T>): T;
        findValueBruteForce(arg0: $Climate$TargetPoint_): T;
        constructor(arg0: $List_<$Pair<$Climate$ParameterPoint_, T>>);
    }
    export class $Biome$ClimateSettings extends $Record {
        hasPrecipitation(): boolean;
        temperature(): number;
        downfall(): number;
        temperatureModifier(): $Biome$TemperatureModifier;
        static CODEC: $MapCodec<$Biome$ClimateSettings>;
        constructor(hasPrecipitation: boolean, temperature: number, temperatureModifier: $Biome$TemperatureModifier_, downfall: number);
    }
    export class $FixedBiomeSource extends $BiomeSource implements $BiomeManager$NoiseBiomeSource {
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        static CODEC: $MapCodec<$FixedBiomeSource>;
        constructor(arg0: $Holder_<$Biome>);
    }
    export class $OverworldBiomeBuilder {
        getTemperatureThresholds(): $Climate$Parameter[];
        getErosionThresholds(): $Climate$Parameter[];
        getWeirdnessThresholds(): $Climate$Parameter[];
        getHumidityThresholds(): $Climate$Parameter[];
        getPeaksAndValleysThresholds(): $Climate$Parameter[];
        getContinentalnessThresholds(): $Climate$Parameter[];
        addBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        static isDeepDarkRegion(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction$FunctionContext): boolean;
        static getDebugStringForPeaksAndValleys(arg0: number): string;
        getDebugStringForTemperature(arg0: number): string;
        getDebugStringForContinentalness(arg0: number): string;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        getDebugStringForErosion(arg0: number): string;
        getDebugStringForHumidity(arg0: number): string;
        static HIGH_START: number;
        static FAR_INLAND_START: number;
        static NEAR_INLAND_START: number;
        static PEAK_START: number;
        static EROSION_INDEX_2_START: number;
        static MID_INLAND_START: number;
        static EROSION_INDEX_1_START: number;
        constructor();
        get temperatureThresholds(): $Climate$Parameter[];
        get erosionThresholds(): $Climate$Parameter[];
        get weirdnessThresholds(): $Climate$Parameter[];
        get humidityThresholds(): $Climate$Parameter[];
        get peaksAndValleysThresholds(): $Climate$Parameter[];
        get continentalnessThresholds(): $Climate$Parameter[];
    }
    export class $MultiNoiseBiomeSourceParameterList$Preset extends $Record {
        id(): $ResourceLocation;
        provider(): $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider;
        usedBiomes(): $Stream<$ResourceKey<$Biome>>;
        static generateOverworldBiomes<T>(arg0: $Function_<$ResourceKey<$Biome>, T>): $Climate$ParameterList<T>;
        static OVERWORLD: $MultiNoiseBiomeSourceParameterList$Preset;
        static CODEC: $Codec<$MultiNoiseBiomeSourceParameterList$Preset>;
        static NETHER: $MultiNoiseBiomeSourceParameterList$Preset;
        static BY_NAME: $Map<$ResourceLocation, $MultiNoiseBiomeSourceParameterList$Preset>;
        constructor(arg0: $ResourceLocation_, arg1: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_);
    }
    export class $Biome implements $ExtendedBiome {
        getPrecipitationAt(arg0: $BlockPos_): $Biome$Precipitation;
        getModifiedClimateSettings(): $Biome$ClimateSettings;
        getModifiedSpecialEffects(): $BiomeSpecialEffects;
        getBackgroundMusic(): ($Music) | undefined;
        getGrassColor(arg0: number, arg1: number): number;
        getAmbientParticle(): ($AmbientParticleSettings) | undefined;
        getAmbientMood(): ($AmbientMoodSettings) | undefined;
        getBaseTemperature(): number;
        getBiomeCategory(): number;
        getFoliageColor(): number;
        coldEnoughToSnow(arg0: $BlockPos_): boolean;
        getMobSettings(): $MobSpawnSettings;
        hasPrecipitation(): boolean;
        warmEnoughToRain(arg0: $BlockPos_): boolean;
        getFogColor(): number;
        getSpecialEffects(): $BiomeSpecialEffects;
        getWaterColor(): number;
        getAmbientLoop(): ($Holder<$SoundEvent>) | undefined;
        setBiomeCategory(arg0: number): void;
        getSkyColor(): number;
        getDownfall(): number;
        getWaterFogColor(): number;
        getGenerationSettings(): $BiomeGenerationSettings;
        shouldSnow(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        shouldFreeze(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean): boolean;
        shouldFreeze(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        shouldMeltFrozenOceanIcebergSlightly(arg0: $BlockPos_): boolean;
        wrapMethod$hdp000$sable$preventFreezing(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean, arg3: $Operation_<any>): boolean;
        modifiableBiomeInfo(): $ModifiableBiomeInfo;
        getAmbientAdditions(): ($AmbientAdditionsSettings) | undefined;
        static CODEC: $Codec<$Holder<$Biome>>;
        static NETWORK_CODEC: $Codec<$Biome>;
        /**
         * @deprecated
         */
        static BIOME_INFO_NOISE: $PerlinSimplexNoise;
        mobSettings: $MobSpawnSettings;
        static FROZEN_TEMPERATURE_NOISE: $PerlinSimplexNoise;
        static DIRECT_CODEC: $Codec<$Biome>;
        static LIST_CODEC: $Codec<$HolderSet<$Biome>>;
        generationSettings: $BiomeGenerationSettings;
        constructor(arg0: $Biome$ClimateSettings_, arg1: $BiomeSpecialEffects, arg2: $BiomeGenerationSettings, arg3: $MobSpawnSettings);
        get modifiedClimateSettings(): $Biome$ClimateSettings;
        get modifiedSpecialEffects(): $BiomeSpecialEffects;
        get backgroundMusic(): ($Music) | undefined;
        get ambientParticle(): ($AmbientParticleSettings) | undefined;
        get ambientMood(): ($AmbientMoodSettings) | undefined;
        get baseTemperature(): number;
        get foliageColor(): number;
        get fogColor(): number;
        get specialEffects(): $BiomeSpecialEffects;
        get waterColor(): number;
        get ambientLoop(): ($Holder<$SoundEvent>) | undefined;
        get skyColor(): number;
        get downfall(): number;
        get waterFogColor(): number;
        get ambientAdditions(): ($AmbientAdditionsSettings) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $Biome}.
     */
    export type $Biome_ = RegistryTypes.WorldgenBiome;
    export interface $MultiNoiseBiomeSourceParameterList extends RegistryMarked<RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterListTag, RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterList> {}
    export class $Climate$DistanceMetric<T> {
    }
    export interface $Climate$DistanceMetric<T> {
    }
    /**
     * Values that may be interpreted as {@link $Climate$DistanceMetric}.
     */
    export type $Climate$DistanceMetric_<T> = (() => void);
    export class $Climate$RTree<T> {
    }
    export class $BiomeManager implements $BiomeManagerAccessor, $BiomeManagerAccessor$1 {
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        static obfuscateSeed(arg0: number): number;
        getNoiseBiomeAtPosition(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getNoiseBiomeAtPosition(arg0: $BlockPos_): $Holder<$Biome>;
        getNoiseBiomeAtQuart(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        withDifferentSource(arg0: $BiomeManager$NoiseBiomeSource_): $BiomeManager;
        catnip$getBiomeZoomSeed(): number;
        mfix$getZoomSeed(): number;
        mfix$getBiomeSource(): $BiomeManager$NoiseBiomeSource;
        biomeZoomSeed: number;
        static CHUNK_CENTER_QUART: number;
        constructor(arg0: $BiomeManager$NoiseBiomeSource_, arg1: number);
    }
    export class $Climate$Sampler extends $Record implements $MultiNoiseSamplerHooks {
        depth(): $DensityFunction;
        weirdness(): $DensityFunction;
        erosion(): $DensityFunction;
        sample(arg0: number, arg1: number, arg2: number): $Climate$TargetPoint;
        temperature(): $DensityFunction;
        humidity(): $DensityFunction;
        fabric_getSeed(): number;
        findSpawnPosition(): $BlockPos;
        continentalness(): $DensityFunction;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        fabric_getEndBiomesSampler(): $ImprovedNoise;
        fabric_setSeed(arg0: number): void;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_, arg5: $DensityFunction_, arg6: $List_<$Climate$ParameterPoint_>);
    }
    export class $Climate$SpawnFinder$Result extends $Record {
    }
    export class $AmbientAdditionsSettings {
        getSoundEvent(): $Holder<$SoundEvent>;
        getTickChance(): number;
        static CODEC: $Codec<$AmbientAdditionsSettings>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: number);
        get soundEvent(): $Holder<$SoundEvent>;
        get tickChance(): number;
    }
    export class $Climate$ParameterPoint extends $Record {
        offset(): number;
        depth(): $Climate$Parameter;
        fitness(arg0: $Climate$TargetPoint_): number;
        weirdness(): $Climate$Parameter;
        erosion(): $Climate$Parameter;
        temperature(): $Climate$Parameter;
        humidity(): $Climate$Parameter;
        parameterSpace(): $List<$Climate$Parameter>;
        continentalness(): $Climate$Parameter;
        static CODEC: $Codec<$Climate$ParameterPoint>;
        constructor(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number);
    }
    export class $FeatureSorter$StepFeatureData extends $Record {
        features(): $List<$PlacedFeature>;
        indexMapping(): $ToIntFunction<$PlacedFeature>;
        constructor(arg0: $List_<$PlacedFeature_>);
        constructor(arg0: $List_<$PlacedFeature_>, arg1: $ToIntFunction_<$PlacedFeature>);
    }
    export class $CheckerboardColumnBiomeSource extends $BiomeSource {
        static CODEC: $MapCodec<$CheckerboardColumnBiomeSource>;
        constructor(arg0: $HolderSet_<$Biome>, arg1: number);
    }
    export class $Biomes {
        static BEACH: $ResourceKey<$Biome>;
        static SAVANNA: $ResourceKey<$Biome>;
        static SUNFLOWER_PLAINS: $ResourceKey<$Biome>;
        static THE_VOID: $ResourceKey<$Biome>;
        static BIRCH_FOREST: $ResourceKey<$Biome>;
        static FROZEN_OCEAN: $ResourceKey<$Biome>;
        static WINDSWEPT_HILLS: $ResourceKey<$Biome>;
        static DEEP_LUKEWARM_OCEAN: $ResourceKey<$Biome>;
        static OLD_GROWTH_SPRUCE_TAIGA: $ResourceKey<$Biome>;
        static DEEP_FROZEN_OCEAN: $ResourceKey<$Biome>;
        static END_HIGHLANDS: $ResourceKey<$Biome>;
        static END_MIDLANDS: $ResourceKey<$Biome>;
        static FLOWER_FOREST: $ResourceKey<$Biome>;
        static CHERRY_GROVE: $ResourceKey<$Biome>;
        static ERODED_BADLANDS: $ResourceKey<$Biome>;
        static END_BARRENS: $ResourceKey<$Biome>;
        static SNOWY_TAIGA: $ResourceKey<$Biome>;
        static DEEP_DARK: $ResourceKey<$Biome>;
        static JUNGLE: $ResourceKey<$Biome>;
        static ICE_SPIKES: $ResourceKey<$Biome>;
        static OCEAN: $ResourceKey<$Biome>;
        static SMALL_END_ISLANDS: $ResourceKey<$Biome>;
        static FROZEN_RIVER: $ResourceKey<$Biome>;
        static DARK_FOREST: $ResourceKey<$Biome>;
        static THE_END: $ResourceKey<$Biome>;
        static SNOWY_PLAINS: $ResourceKey<$Biome>;
        static COLD_OCEAN: $ResourceKey<$Biome>;
        static SNOWY_SLOPES: $ResourceKey<$Biome>;
        static WINDSWEPT_SAVANNA: $ResourceKey<$Biome>;
        static LUSH_CAVES: $ResourceKey<$Biome>;
        static DRIPSTONE_CAVES: $ResourceKey<$Biome>;
        static MEADOW: $ResourceKey<$Biome>;
        static STONY_SHORE: $ResourceKey<$Biome>;
        static WINDSWEPT_FOREST: $ResourceKey<$Biome>;
        static PLAINS: $ResourceKey<$Biome>;
        static OLD_GROWTH_BIRCH_FOREST: $ResourceKey<$Biome>;
        static SAVANNA_PLATEAU: $ResourceKey<$Biome>;
        static SPARSE_JUNGLE: $ResourceKey<$Biome>;
        static STONY_PEAKS: $ResourceKey<$Biome>;
        static JAGGED_PEAKS: $ResourceKey<$Biome>;
        static RIVER: $ResourceKey<$Biome>;
        static MANGROVE_SWAMP: $ResourceKey<$Biome>;
        static WARPED_FOREST: $ResourceKey<$Biome>;
        static WOODED_BADLANDS: $ResourceKey<$Biome>;
        static NETHER_WASTES: $ResourceKey<$Biome>;
        static LUKEWARM_OCEAN: $ResourceKey<$Biome>;
        static WINDSWEPT_GRAVELLY_HILLS: $ResourceKey<$Biome>;
        static BAMBOO_JUNGLE: $ResourceKey<$Biome>;
        static DEEP_COLD_OCEAN: $ResourceKey<$Biome>;
        static OLD_GROWTH_PINE_TAIGA: $ResourceKey<$Biome>;
        static BADLANDS: $ResourceKey<$Biome>;
        static MUSHROOM_FIELDS: $ResourceKey<$Biome>;
        static DEEP_OCEAN: $ResourceKey<$Biome>;
        static TAIGA: $ResourceKey<$Biome>;
        static DESERT: $ResourceKey<$Biome>;
        static SNOWY_BEACH: $ResourceKey<$Biome>;
        static WARM_OCEAN: $ResourceKey<$Biome>;
        static BASALT_DELTAS: $ResourceKey<$Biome>;
        static FOREST: $ResourceKey<$Biome>;
        static SWAMP: $ResourceKey<$Biome>;
        static SOUL_SAND_VALLEY: $ResourceKey<$Biome>;
        static GROVE: $ResourceKey<$Biome>;
        static FROZEN_PEAKS: $ResourceKey<$Biome>;
        static CRIMSON_FOREST: $ResourceKey<$Biome>;
        constructor();
    }
    export class $MultiNoiseBiomeSource extends $BiomeSource implements $IMultiNoiseBiomeSource {
        getNoiseBiome(arg0: $Climate$TargetPoint_): $Holder<$Biome>;
        stable(arg0: $ResourceKey_<$MultiNoiseBiomeSourceParameterList>): boolean;
        static createFromList(arg0: $Climate$ParameterList<$Holder_<$Biome>>): $MultiNoiseBiomeSource;
        static createFromPreset(arg0: $Holder_<$MultiNoiseBiomeSourceParameterList>): $MultiNoiseBiomeSource;
        static CODEC: $MapCodec<$MultiNoiseBiomeSource>;
        static DIRECT_CODEC: $MapCodec<$Climate$ParameterList<$Holder<$Biome>>>;
    }
    export class $BiomeSource implements $BiomeResolver {
        getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_): $Holder<$Biome>;
        codec(): $MapCodec<$BiomeSource>;
        findClosestBiome3d(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Holder<$Biome>>, arg5: $Climate$Sampler_, arg6: $LevelReader): $Pair<$BlockPos, $Holder<$Biome>>;
        getBiomesWithin(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Climate$Sampler_): $Set<$Holder<$Biome>>;
        addDebugInfo(arg0: $List_<string>, arg1: $BlockPos_, arg2: $Climate$Sampler_): void;
        possibleBiomes(): $Set<$Holder<$Biome>>;
        fabric_modifyBiomeSet(arg0: $Set_<any>): $Set<any>;
        collectPossibleBiomes(): $Stream<$Holder<$Biome>>;
        findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Holder<$Biome>>, arg5: $RandomSource, arg6: $Climate$Sampler_): $Pair<$BlockPos, $Holder<$Biome>>;
        findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Predicate_<$Holder<$Biome>>, arg6: $RandomSource, arg7: boolean, arg8: $Climate$Sampler_): $Pair<$BlockPos, $Holder<$Biome>>;
        static CODEC: $Codec<$BiomeSource>;
        constructor();
    }
}
