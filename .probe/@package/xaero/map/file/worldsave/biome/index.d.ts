import { $Holder, $Registry } from "@package/net/minecraft/core";
import { $BiomeManager, $BiomeManager$NoiseBiomeSource, $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";

declare module "@package/xaero/map/file/worldsave/biome" {
    export class $WorldDataBiomeManager implements $BiomeManager$NoiseBiomeSource {
        clear(): void;
        getBiome(arg0: $BiomeManager, arg1: number, arg2: number, arg3: number): $Biome;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        resetChunkBiomeData(arg0: number, arg1: number, arg2: $Biome_, arg3: $Registry<$Biome_>): void;
        addBiomeSectionForRegionChunk(arg0: number, arg1: number, arg2: number, arg3: $WorldDataReaderSectionBiomeData): void;
        constructor();
    }
}
