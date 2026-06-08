import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/kyanbirb/touys/mixin/sub_level_template" {
    export class $ServerLevelPlotAccessor {
        static touys$invokeLogLoadingErrors(arg0: $ChunkPos, arg1: number, arg2: string): void;
    }
    export interface $ServerLevelPlotAccessor {
        touys$getLightEngine(): $LevelLightEngine;
        touys$invokeNewNonLitChunk(arg0: $ChunkPos): void;
        touys$invokeLightChunk(arg0: $LevelChunk): void;
    }
    export class $LevelPlotAccessor {
    }
    export interface $LevelPlotAccessor {
        touys$setExpandPlotIfNecessary(arg0: boolean): void;
        touys$getExpandPlotIfNecessary(): boolean;
        touys$getContainer(): $SubLevelContainer;
        touys$getBiome(): $ResourceKey<$Biome>;
        touys$getLogSize(): number;
    }
}
