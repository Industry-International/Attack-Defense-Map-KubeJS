import { $BiomeManager$NoiseBiomeSource } from "@package/net/minecraft/world/level/biome";

declare module "@package/org/embeddedt/modernfix/common/mixin/perf/optimize_surface_rules" {
    export class $BiomeManagerAccessor {
    }
    export interface $BiomeManagerAccessor {
        mfix$getZoomSeed(): number;
        mfix$getBiomeSource(): $BiomeManager$NoiseBiomeSource;
    }
}
