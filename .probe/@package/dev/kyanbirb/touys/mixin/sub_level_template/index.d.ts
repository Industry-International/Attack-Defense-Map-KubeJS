import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/kyanbirb/touys/mixin/sub_level_template" {
    export class $LevelPlotAccessor {
    }
    export interface $LevelPlotAccessor {
        touys$getExpandPlotIfNecessary(): boolean;
        touys$setExpandPlotIfNecessary(arg0: boolean): void;
        touys$getContainer(): $SubLevelContainer;
        touys$getBiome(): $ResourceKey<$Biome>;
        touys$getLogSize(): number;
    }
}
