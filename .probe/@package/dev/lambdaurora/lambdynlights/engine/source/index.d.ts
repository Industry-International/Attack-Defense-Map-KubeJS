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
        dynamicLightTick(): void;
        getLuminance(): number;
        isDynamicLightEnabled(): boolean;
        getDynamicLightX(): number;
        getDynamicLightZ(): number;
        getDynamicLightY(): number;
        resetDynamicLight(): void;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        get luminance(): number;
        get dynamicLightEnabled(): boolean;
        get dynamicLightX(): number;
        get dynamicLightZ(): number;
        get dynamicLightY(): number;
    }
    export class $EntityDynamicLightSourceBehavior {
        static tickEntity(entity: $Entity): void;
    }
    export interface $EntityDynamicLightSourceBehavior extends $EntityDynamicLightSource {
        setLuminance(arg0: number): void;
        getDynamicLightPrevX(): number;
        getDynamicLightPrevY(): number;
        getLastDynamicLuminance(): number;
        setLastDynamicLuminance(arg0: number): void;
        setDynamicLightEnabled(enabled: boolean): void;
        getDynamicLightPrevZ(): number;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        lambdynlights$setTrackedLitChunkPos(arg0: $LongSet): void;
        updateDynamicLightPreviousCoordinates(): void;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
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
        getDynamicLightChunksToRebuild(arg0: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        getDynamicLightId(): number;
        splitIntoDynamicLightEntries(arg0: $CellHasher): $Stream<$SpatialLookupEntry>;
        get dynamicLightId(): number;
    }
}
