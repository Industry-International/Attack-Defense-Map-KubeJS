import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";
import { $ThreadLocal } from "@package/java/lang";

declare module "@package/org/embeddedt/modernfix/world/gen" {
    export class $ExtendedSurfaceContext {
        static COMPUTED_POSSIBLE_BIOMES: $ThreadLocal<$Set<$ResourceKey<$Biome>>>;
    }
    export interface $ExtendedSurfaceContext {
        mfix$getPossibleBiomes(): $Set<$ResourceKey<$Biome>>;
        mfix$applyPossibleBiomes(): void;
    }
}
