import { $StructureTemplatePool, $StructureTemplatePool_ } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Lifecycle } from "@package/com/mojang/serialization";
import { $MobSpawnSettings$Builder, $BiomeGenerationSettings$Builder } from "@package/net/minecraft/world/level/biome";
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters_ } from "@package/net/minecraft/world/level/levelgen/synth";
import { $StructureProcessorList_, $StructureProcessorList } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $List } from "@package/java/util";
import { $ToFloatFunction, $CubicSpline } from "@package/net/minecraft/util";
import { $Holder$Reference, $Registry, $HolderGetter, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ConfiguredWorldCarver_, $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $StructureSet_, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $SurfaceRules$RuleSource } from "@package/net/minecraft/world/level/levelgen";
import { $DimensionType_ } from "@package/net/minecraft/world/level/dimension";
export * as features from "@package/net/minecraft/data/worldgen/features";
export * as biome from "@package/net/minecraft/data/worldgen/biome";
export * as placement from "@package/net/minecraft/data/worldgen/placement";

declare module "@package/net/minecraft/data/worldgen" {
    export class $ProcessorLists {
        static bootstrap(arg0: $BootstrapContext<$StructureProcessorList_>): void;
        static STREET_SAVANNA: $ResourceKey<$StructureProcessorList>;
        static FOSSIL_ROT: $ResourceKey<$StructureProcessorList>;
        static FOSSIL_DIAMONDS: $ResourceKey<$StructureProcessorList>;
        static ZOMBIE_SNOWY: $ResourceKey<$StructureProcessorList>;
        static OUTPOST_ROT: $ResourceKey<$StructureProcessorList>;
        static FARM_PLAINS: $ResourceKey<$StructureProcessorList>;
        static HIGH_WALL: $ResourceKey<$StructureProcessorList>;
        static ANCIENT_CITY_GENERIC_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static FARM_SNOWY: $ResourceKey<$StructureProcessorList>;
        static BRIDGE: $ResourceKey<$StructureProcessorList>;
        static STREET_PLAINS: $ResourceKey<$StructureProcessorList>;
        static RAMPART_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static BOTTOM_RAMPART: $ResourceKey<$StructureProcessorList>;
        static TRAIL_RUINS_TOWER_TOP_ARCHAEOLOGY: $ResourceKey<$StructureProcessorList>;
        static STREET_SNOWY_OR_TAIGA: $ResourceKey<$StructureProcessorList>;
        static ANCIENT_CITY_START_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static ENTRANCE_REPLACEMENT: $ResourceKey<$StructureProcessorList>;
        static MOSSIFY_20_PERCENT: $ResourceKey<$StructureProcessorList>;
        static HOUSING: $ResourceKey<$StructureProcessorList>;
        static ZOMBIE_TAIGA: $ResourceKey<$StructureProcessorList>;
        static EMPTY: $ResourceKey<$StructureProcessorList>;
        static TRAIL_RUINS_ROADS_ARCHAEOLOGY: $ResourceKey<$StructureProcessorList>;
        static ZOMBIE_SAVANNA: $ResourceKey<$StructureProcessorList>;
        static FARM_SAVANNA: $ResourceKey<$StructureProcessorList>;
        static TREASURE_ROOMS: $ResourceKey<$StructureProcessorList>;
        static MOSSIFY_70_PERCENT: $ResourceKey<$StructureProcessorList>;
        static TRAIL_RUINS_HOUSES_ARCHAEOLOGY: $ResourceKey<$StructureProcessorList>;
        static ZOMBIE_DESERT: $ResourceKey<$StructureProcessorList>;
        static BASTION_GENERIC_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static ROOF: $ResourceKey<$StructureProcessorList>;
        static ZOMBIE_PLAINS: $ResourceKey<$StructureProcessorList>;
        static HIGH_RAMPART: $ResourceKey<$StructureProcessorList>;
        static SIDE_WALL_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static ANCIENT_CITY_WALLS_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static STABLE_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static FARM_TAIGA: $ResourceKey<$StructureProcessorList>;
        static MOSSIFY_10_PERCENT: $ResourceKey<$StructureProcessorList>;
        static FARM_DESERT: $ResourceKey<$StructureProcessorList>;
        static FOSSIL_COAL: $ResourceKey<$StructureProcessorList>;
        static TRIAL_CHAMBERS_COPPER_BULB_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        constructor();
    }
    export class $BastionBridgePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $AncientCityStructurePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $TerrainProvider {
        static overworldOffset<C, I extends $ToFloatFunction<C>>(arg0: I, arg1: I, arg2: I, arg3: boolean): $CubicSpline<C, I>;
        static buildErosionOffsetSpline<C, I extends $ToFloatFunction<C>>(arg0: I, arg1: I, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: boolean, arg10: $ToFloatFunction<number>): $CubicSpline<C, I>;
        static overworldFactor<C, I extends $ToFloatFunction<C>>(arg0: I, arg1: I, arg2: I, arg3: I, arg4: boolean): $CubicSpline<C, I>;
        static overworldJaggedness<C, I extends $ToFloatFunction<C>>(arg0: I, arg1: I, arg2: I, arg3: I, arg4: boolean): $CubicSpline<C, I>;
        constructor();
    }
    export class $SnowyVillagePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $Pools {
        static register(arg0: $BootstrapContext<$StructureTemplatePool_>, arg1: string, arg2: $StructureTemplatePool_): void;
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static parseKey(arg0: string): $ResourceKey<$StructureTemplatePool>;
        static createKey(arg0: string): $ResourceKey<$StructureTemplatePool>;
        static EMPTY: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $BastionHousingUnitsPools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $PillagerOutpostPools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $StructureSets {
        static bootstrap(arg0: $BootstrapContext<$StructureSet_>): void;
    }
    export interface $StructureSets {
    }
    export class $TrialChambersStructurePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static spawner(arg0: string): string;
        static HALLWAY_FALLBACK: $ResourceKey<$StructureTemplatePool>;
        static START: $ResourceKey<$StructureTemplatePool>;
        static ALIAS_BINDINGS: $List<$PoolAliasBinding>;
        static CHAMBER_CAP_FALLBACK: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $BootstrapContext<T> {
    }
    export interface $BootstrapContext<T> {
        lookup<S>(arg0: $ResourceKey_<$Registry<S>>): $HolderGetter<S>;
        register(arg0: $ResourceKey_<T>, arg1: T, arg2: $Lifecycle): $Holder$Reference<T>;
        register(arg0: $ResourceKey_<T>, arg1: T): $Holder$Reference<T>;
        registryLookup<S>(arg0: $ResourceKey_<$Registry<S>>): ($HolderLookup$RegistryLookup<S>) | undefined;
    }
    export class $SavannaVillagePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $TaigaVillagePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $SurfaceRuleData {
        static end(): $SurfaceRules$RuleSource;
        static air(): $SurfaceRules$RuleSource;
        static nether(): $SurfaceRules$RuleSource;
        static overworld(): $SurfaceRules$RuleSource;
        static overworldLike(arg0: boolean, arg1: boolean, arg2: boolean): $SurfaceRules$RuleSource;
        constructor();
    }
    export class $BastionPieces {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $BastionHoglinStablePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $BastionTreasureRoomPools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $VillagePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $PlainVillagePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $Carvers {
        static bootstrap(arg0: $BootstrapContext<$ConfiguredWorldCarver_<never>>): void;
        static CAVE: $ResourceKey<$ConfiguredWorldCarver<never>>;
        static CANYON: $ResourceKey<$ConfiguredWorldCarver<never>>;
        static CAVE_EXTRA_UNDERGROUND: $ResourceKey<$ConfiguredWorldCarver<never>>;
        static NETHER_CAVE: $ResourceKey<$ConfiguredWorldCarver<never>>;
        constructor();
    }
    export class $AncientCityStructurePieces {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $DesertVillagePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $Structures {
        static bootstrap(arg0: $BootstrapContext<$Structure_>): void;
        constructor();
    }
    export class $DimensionTypes {
        static bootstrap(arg0: $BootstrapContext<$DimensionType_>): void;
        constructor();
    }
    export class $NoiseData {
        static bootstrap(arg0: $BootstrapContext<$NormalNoise$NoiseParameters_>): void;
        /**
         * @deprecated
         */
        static DEFAULT_SHIFT: $NormalNoise$NoiseParameters;
        constructor();
    }
    export class $BiomeDefaultFeatures {
        static monsters(arg0: $MobSpawnSettings$Builder, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        static endSpawns(arg0: $MobSpawnSettings$Builder): void;
        static addExtraEmeralds(arg0: $BiomeGenerationSettings$Builder): void;
        static addExtraGold(arg0: $BiomeGenerationSettings$Builder): void;
        static addInfestedStone(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultOres(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultOres(arg0: $BiomeGenerationSettings$Builder, arg1: boolean): void;
        static addSwampClayDisk(arg0: $BiomeGenerationSettings$Builder): void;
        static addMossyStoneBlock(arg0: $BiomeGenerationSettings$Builder): void;
        static addRareBerryBushes(arg0: $BiomeGenerationSettings$Builder): void;
        static addDripstone(arg0: $BiomeGenerationSettings$Builder): void;
        static addTaigaTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addBirchTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addTallBirchTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addBadlandGrass(arg0: $BiomeGenerationSettings$Builder): void;
        static addJungleTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addWarmFlowers(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultGrass(arg0: $BiomeGenerationSettings$Builder): void;
        static addSavannaTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addSavannaGrass(arg0: $BiomeGenerationSettings$Builder): void;
        static addPlainGrass(arg0: $BiomeGenerationSettings$Builder): void;
        static addOtherBirchTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addWaterTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addGroveTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addTaigaGrass(arg0: $BiomeGenerationSettings$Builder): void;
        static addForestFlowers(arg0: $BiomeGenerationSettings$Builder): void;
        static addBadlandsTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addMountainTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addForestGrass(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultFlowers(arg0: $BiomeGenerationSettings$Builder): void;
        static addSnowyTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addJungleGrass(arg0: $BiomeGenerationSettings$Builder): void;
        static addPlainVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addSwampVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addJungleMelons(arg0: $BiomeGenerationSettings$Builder): void;
        static addJungleVines(arg0: $BiomeGenerationSettings$Builder): void;
        static warmOceanSpawns(arg0: $MobSpawnSettings$Builder, arg1: number, arg2: number): void;
        static snowySpawns(arg0: $MobSpawnSettings$Builder): void;
        static mooshroomSpawns(arg0: $MobSpawnSettings$Builder): void;
        static farmAnimals(arg0: $MobSpawnSettings$Builder): void;
        static desertSpawns(arg0: $MobSpawnSettings$Builder): void;
        static addAncientDebris(arg0: $BiomeGenerationSettings$Builder): void;
        static oceanSpawns(arg0: $MobSpawnSettings$Builder, arg1: number, arg2: number, arg3: number): void;
        static addLukeWarmKelp(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultSprings(arg0: $BiomeGenerationSettings$Builder): void;
        static plainsSpawns(arg0: $MobSpawnSettings$Builder): void;
        static addSurfaceFreezing(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultSeagrass(arg0: $BiomeGenerationSettings$Builder): void;
        static addIcebergs(arg0: $BiomeGenerationSettings$Builder): void;
        static commonSpawns(arg0: $MobSpawnSettings$Builder, arg1: number): void;
        static commonSpawns(arg0: $MobSpawnSettings$Builder): void;
        static baseJungleSpawns(arg0: $MobSpawnSettings$Builder): void;
        static addFrozenSprings(arg0: $BiomeGenerationSettings$Builder): void;
        static caveSpawns(arg0: $MobSpawnSettings$Builder): void;
        static addBlueIce(arg0: $BiomeGenerationSettings$Builder): void;
        static addSculk(arg0: $BiomeGenerationSettings$Builder): void;
        static addFerns(arg0: $BiomeGenerationSettings$Builder): void;
        static addCommonBerryBushes(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultMonsterRoom(arg0: $BiomeGenerationSettings$Builder): void;
        static addSparseJungleTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addDesertVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addMountainForestTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addMangroveSwampDisks(arg0: $BiomeGenerationSettings$Builder): void;
        static addMangroveSwampVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addLightBambooVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultSoftDisks(arg0: $BiomeGenerationSettings$Builder): void;
        static addShatteredSavannaTrees(arg0: $BiomeGenerationSettings$Builder): void;
        static addLushCavesSpecialOres(arg0: $BiomeGenerationSettings$Builder): void;
        static addShatteredSavannaGrass(arg0: $BiomeGenerationSettings$Builder): void;
        static addBambooVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addSavannaExtraGrass(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultCarversAndLakes(arg0: $BiomeGenerationSettings$Builder): void;
        static addMushroomFieldVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultMushrooms(arg0: $BiomeGenerationSettings$Builder): void;
        static addBadlandExtraVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addGiantTaigaVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultExtraVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static dripstoneCavesSpawns(arg0: $MobSpawnSettings$Builder): void;
        static addMeadowVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addFossilDecoration(arg0: $BiomeGenerationSettings$Builder): void;
        static addDesertExtraDecoration(arg0: $BiomeGenerationSettings$Builder): void;
        static addDesertExtraVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addSparseJungleMelons(arg0: $BiomeGenerationSettings$Builder): void;
        static addNetherDefaultOres(arg0: $BiomeGenerationSettings$Builder): void;
        static addCherryGroveVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addSwampExtraVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addLushCavesVegetationFeatures(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultUndergroundVariety(arg0: $BiomeGenerationSettings$Builder): void;
        static addColdOceanExtraVegetation(arg0: $BiomeGenerationSettings$Builder): void;
        static addDefaultCrystalFormations(arg0: $BiomeGenerationSettings$Builder): void;
        constructor();
    }
    export class $TrailRuinsStructurePools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $BastionSharedPools {
        static bootstrap(arg0: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
}
