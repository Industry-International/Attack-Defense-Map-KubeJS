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
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        dynamicLightTick(): void;
        getLuminance(): number;
        getDynamicLightZ(): number;
        resetDynamicLight(): void;
        getDynamicLightX(): number;
        getDynamicLightY(): number;
        isDynamicLightEnabled(): boolean;
        get luminance(): number;
        get dynamicLightZ(): number;
        get dynamicLightX(): number;
        get dynamicLightY(): number;
        get dynamicLightEnabled(): boolean;
    }
    export class $EntityDynamicLightSourceBehavior {
        static tickEntity(entity: $Entity): void;
    }
    export interface $EntityDynamicLightSourceBehavior extends $EntityDynamicLightSource {
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        setLuminance(arg0: number): void;
        lambdynlights$setTrackedLitChunkPos(arg0: $LongSet): void;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        updateDynamicLightPreviousCoordinates(): void;
        getDynamicLightPrevX(): number;
        getDynamicLightPrevY(): number;
        setDynamicLightEnabled(enabled: boolean): void;
        setLastDynamicLuminance(arg0: number): void;
        getLastDynamicLuminance(): number;
        getDynamicLightPrevZ(): number;
        set luminance(value: number);
        get dynamicLightPrevX(): number;
        get dynamicLightPrevY(): number;
        set dynamicLightEnabled(value: boolean);
        get dynamicLightPrevZ(): number;
    }
    export class $DynamicLightSource {
        static gatherClosestChunks(x: number, y: number, z: number, chunkConsumer: $LongConsumer_): void;
    }
    export interface $DynamicLightSource {
        splitIntoDynamicLightEntries(arg0: $CellHasher): $Stream<$SpatialLookupEntry>;
        getDynamicLightChunksToRebuild(arg0: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        getDynamicLightId(): number;
        get dynamicLightId(): number;
    }
}
