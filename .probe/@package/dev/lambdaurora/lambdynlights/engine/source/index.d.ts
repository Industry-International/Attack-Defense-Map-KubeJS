import { $LongConsumer_ } from "@package/java/util/function";
import { $LongSet, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $Stream } from "@package/java/util/stream";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CellHasher } from "@package/dev/lambdaurora/lambdynlights/engine";
import { $ChunkRebuildStatus } from "@package/dev/lambdaurora/lambdynlights/engine/scheduler";
import { $SpatialLookupEntry } from "@package/dev/lambdaurora/lambdynlights/engine/lookup";

declare module "@package/dev/lambdaurora/lambdynlights/engine/source" {
    export class $EntityDynamicLightSource {
    }
    export interface $EntityDynamicLightSource extends $DynamicLightSource {
        resetDynamicLight(): void;
        getDynamicLightY(): number;
        getDynamicLightX(): number;
        getDynamicLightZ(): number;
        getLuminance(): number;
        dynamicLightTick(): void;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        isDynamicLightEnabled(): boolean;
        get dynamicLightY(): number;
        get dynamicLightX(): number;
        get dynamicLightZ(): number;
        get luminance(): number;
        get dynamicLightEnabled(): boolean;
    }
    export class $EntityDynamicLightSourceBehavior {
        static tickEntity(entity: $Entity): void;
    }
    export interface $EntityDynamicLightSourceBehavior extends $EntityDynamicLightSource {
        updateDynamicLightPreviousCoordinates(): void;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        lambdynlights$setTrackedLitChunkPos(arg0: $LongSet): void;
        setLuminance(arg0: number): void;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        setDynamicLightEnabled(enabled: boolean): void;
        getDynamicLightPrevZ(): number;
        getLastDynamicLuminance(): number;
        getDynamicLightPrevY(): number;
        getDynamicLightPrevX(): number;
        setLastDynamicLuminance(arg0: number): void;
        set luminance(value: number);
        set dynamicLightEnabled(value: boolean);
        get dynamicLightPrevZ(): number;
        get dynamicLightPrevY(): number;
        get dynamicLightPrevX(): number;
    }
    export class $DynamicLightSource {
        static gatherClosestChunks(x: number, y: number, z: number, chunkConsumer: $LongConsumer_): void;
    }
    export interface $DynamicLightSource {
        getDynamicLightId(): number;
        getDynamicLightChunksToRebuild(arg0: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        splitIntoDynamicLightEntries(arg0: $CellHasher): $Stream<$SpatialLookupEntry>;
        get dynamicLightId(): number;
    }
}
