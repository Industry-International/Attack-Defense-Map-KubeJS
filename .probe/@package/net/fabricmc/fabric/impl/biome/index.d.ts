import { $ImprovedNoise } from "@package/net/minecraft/world/level/levelgen/synth";

declare module "@package/net/fabricmc/fabric/impl/biome" {
    export class $MultiNoiseSamplerHooks {
    }
    export interface $MultiNoiseSamplerHooks {
        fabric_getSeed(): number;
        fabric_getEndBiomesSampler(): $ImprovedNoise;
        fabric_setSeed(arg0: number): void;
    }
}
