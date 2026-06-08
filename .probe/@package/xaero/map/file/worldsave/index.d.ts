import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $MapRegion, $OverlayManager } from "@package/xaero/map/region";
import { $Executor } from "@package/xaero/map/executor";
import { $RegionFile } from "@package/net/minecraft/world/level/chunk/storage";
import { $HolderLookup, $Registry } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Path } from "@package/java/nio/file";
import { $MapProcessor } from "@package/xaero/map";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Object, $Enum } from "@package/java/lang";
import { $WorldDataBiomeManager } from "@package/xaero/map/file/worldsave/biome";
import { $BlockStateShortShapeCache } from "@package/xaero/map/cache";
export * as biome from "@package/xaero/map/file/worldsave/biome";

declare module "@package/xaero/map/file/worldsave" {
    export class $WorldDataHandler {
        getWorldDir(): $Path;
        static onServerWorldUnload(arg0: $ServerLevel): void;
        handleRenderExecutor(): void;
        prepareSingleplayer(arg0: $Level_, arg1: $MapProcessor): void;
        buildRegion(arg0: $MapRegion, arg1: $HolderLookup<$Block_>, arg2: $Registry<$Block_>, arg3: $Registry<$Fluid_>, arg4: boolean, arg5: number[]): $WorldDataHandler$Result;
        getWorldServer(): $ServerLevel;
        getWorldDataReader(): $WorldDataReader;
        constructor(arg0: $WorldDataReader, arg1: $Executor);
        get worldDir(): $Path;
        get worldServer(): $ServerLevel;
        get worldDataReader(): $WorldDataReader;
    }
    export class $WorldDataReader {
        setMapProcessor(arg0: $MapProcessor): void;
        readChunk(arg0: $RegionFile, arg1: $ChunkPos): $CompoundTag;
        buildRegion(arg0: $MapRegion, arg1: $ServerLevel, arg2: $HolderLookup<$Block_>, arg3: $Registry<$Block_>, arg4: $Registry<$Fluid_>, arg5: boolean, arg6: number[], arg7: $Executor): boolean;
        taskCreationSync: $Object;
        constructor(arg0: $OverlayManager, arg1: $BlockStateShortShapeCache, arg2: $WorldDataBiomeManager, arg3: number);
        set mapProcessor(value: $MapProcessor);
    }
    export class $WorldDataHandler$Result extends $Enum<$WorldDataHandler$Result> {
        static values(): $WorldDataHandler$Result[];
        static valueOf(arg0: string): $WorldDataHandler$Result;
        static SUCCESS: $WorldDataHandler$Result;
        static CANCEL: $WorldDataHandler$Result;
        static FAIL: $WorldDataHandler$Result;
    }
    /**
     * Values that may be interpreted as {@link $WorldDataHandler$Result}.
     */
    export type $WorldDataHandler$Result_ = "success" | "fail" | "cancel";
}
