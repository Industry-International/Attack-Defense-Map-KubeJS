import { $LevelHeightAccessor, $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $Long2ObjectOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $WorldGenRegion } from "@package/net/minecraft/server/level";
import { $Direction8_, $Direction8 } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $BiomeResolver, $BiomeResolver_ } from "@package/net/minecraft/world/level/biome";
import { $ProtoChunk, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Record } from "@package/java/lang";
import { $Map_, $Set } from "@package/java/util";
import { $IBlendingData, $IBlender } from "@package/com/ishland/c2me/base/mixin/access";
import { $DensityFunction$FunctionContext } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/blending" {
    export class $BlendingData implements $IBlendingData {
        static sideByGenerationAge(level: $WorldGenLevel, chunkX: number, chunkZ: number, oldNoiseGeneration: boolean): $Set<$Direction8>;
        getHeight(x: number, y: number, z: number): number;
        getDensity(x: number, y: number, z: number): number;
        static getOrUpdateBlendingData(region: $WorldGenRegion, chunkX: number, chunkZ: number): $BlendingData;
        getAreaWithOldGeneration(): $LevelHeightAccessor;
        iterateDensities(x: number, z: number, minY: number, maxY: number, consumer: $BlendingData$DensityConsumer_): void;
        iterateBiomes(x: number, y: number, z: number, consumer: $BlendingData$BiomeConsumer_): void;
        iterateHeights(x: number, z: number, consumer: $BlendingData$HeightConsumer_): void;
        getOldHeightLimit(): $LevelHeightAccessor;
        getSurfaceHeights(): number[];
        static CELL_RATIO: number;
        static CODEC: $Codec<$BlendingData>;
        static CELL_HEIGHT: number;
        static NO_VALUE: number;
        static CELL_WIDTH: number;
        get areaWithOldGeneration(): $LevelHeightAccessor;
        get oldHeightLimit(): $LevelHeightAccessor;
        get surfaceHeights(): number[];
    }
    export class $Blender$BlendingOutput extends $Record {
        alpha(): number;
        blendingOffset(): number;
        constructor(arg0: number, arg1: number);
    }
    export class $Blender$DistanceGetter {
    }
    export interface $Blender$DistanceGetter {
        getDistance(x: number, arg1: number, y: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Blender$DistanceGetter}.
     */
    export type $Blender$DistanceGetter_ = ((arg0: number, arg1: number, arg2: number) => number);
    export class $BlendingData$BiomeConsumer {
    }
    export interface $BlendingData$BiomeConsumer {
    }
    /**
     * Values that may be interpreted as {@link $BlendingData$BiomeConsumer}.
     */
    export type $BlendingData$BiomeConsumer_ = (() => void);
    export class $BlendingData$HeightConsumer {
    }
    export interface $BlendingData$HeightConsumer {
    }
    /**
     * Values that may be interpreted as {@link $BlendingData$HeightConsumer}.
     */
    export type $BlendingData$HeightConsumer_ = (() => void);
    export class $BlendingData$DensityConsumer {
    }
    export interface $BlendingData$DensityConsumer {
    }
    /**
     * Values that may be interpreted as {@link $BlendingData$DensityConsumer}.
     */
    export type $BlendingData$DensityConsumer_ = (() => void);
    export class $Blender implements $IBlender {
        static of(region: $WorldGenRegion | null): $Blender;
        static empty(): $Blender;
        blendDensity(context: $DensityFunction$FunctionContext, density: number): number;
        getBiomeResolver(resolver: $BiomeResolver_): $BiomeResolver;
        static addAroundOldChunksCarvingMaskFilter(level: $WorldGenLevel, chunk: $ProtoChunk): void;
        static generateBorderTicks(region: $WorldGenRegion, chunk: $ChunkAccess): void;
        blendOffsetAndFactor(x: number, z: number): $Blender$BlendingOutput;
        static makeOldChunkDistanceGetter(blendingData: $BlendingData | null, surroundingBlendingData: $Map_<$Direction8_, $BlendingData>): $Blender$DistanceGetter;
        static getBLENDING_CHUNK_DISTANCE_THRESHOLD$c2me_base_$md$dd6cb9$0(): number;
        constructor(heightAndBiomeBlendingData: $Long2ObjectOpenHashMap<$BlendingData>, densityBlendingData: $Long2ObjectOpenHashMap<$BlendingData>);
        static get BLENDING_CHUNK_DISTANCE_THRESHOLD$c2me_base_$md$dd6cb9$0(): number;
    }
    export class $Blender$CellValueGetter {
    }
    export interface $Blender$CellValueGetter {
    }
    /**
     * Values that may be interpreted as {@link $Blender$CellValueGetter}.
     */
    export type $Blender$CellValueGetter_ = (() => void);
}
