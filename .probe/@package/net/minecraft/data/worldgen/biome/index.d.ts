import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $HolderGetter } from "@package/net/minecraft/core";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ConfiguredWorldCarver_ } from "@package/net/minecraft/world/level/levelgen/carver";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";

declare module "@package/net/minecraft/data/worldgen/biome" {
    export class $EndBiomes {
        static smallEndIslands(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static theEnd(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static endMidlands(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static endHighlands(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static endBarrens(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        constructor();
    }
    export class $NetherBiomes {
        static netherWastes(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static warpedForest(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static crimsonForest(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static soulSandValley(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static basaltDeltas(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        constructor();
    }
    export class $OverworldBiomes {
        static plains(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean, arg3: boolean, arg4: boolean): $Biome;
        static jungle(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static desert(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static savanna(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean, arg3: boolean): $Biome;
        static taiga(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static swamp(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static badlands(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static grove(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static river(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static beach(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean, arg3: boolean): $Biome;
        static ocean(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static forest(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean, arg3: boolean, arg4: boolean): $Biome;
        static calculateSkyColor(arg0: number): number;
        static mangroveSwamp(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static oldGrowthTaiga(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static windsweptHills(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static sparseJungle(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static bambooJungle(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static frozenPeaks(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static jaggedPeaks(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static lukeWarmOcean(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static frozenOcean(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static mushroomFields(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static snowySlopes(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static dripstoneCaves(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static lushCaves(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static stonyPeaks(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static deepDark(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static darkForest(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static warmOcean(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static coldOcean(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static theVoid(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static meadowOrCherryGrove(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static SWAMP_SKELETON_WEIGHT: number;
        static NORMAL_WATER_FOG_COLOR: number;
        static NORMAL_WATER_COLOR: number;
        constructor();
    }
    export class $BiomeData {
        static bootstrap(arg0: $BootstrapContext<$Biome_>): void;
        constructor();
    }
}
