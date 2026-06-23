import { $ProbabilityFeatureConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $ChunkPos, $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $CarvingMask, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Set } from "@package/java/util";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $RegistryAccess, $HolderSet, $BlockPos$MutableBlockPos, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $FloatProvider } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $Record } from "@package/java/lang";
import { $Aquifer, $RandomState, $VerticalAnchor, $SurfaceRules$RuleSource, $WorldGenerationContext, $NoiseChunk, $VerticalAnchor_, $NoiseBasedChunkGenerator } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/carver" {
    export interface $WorldCarver<C> extends RegistryMarked<RegistryTypes.WorldgenCarverTag, RegistryTypes.WorldgenCarver> {}
    export class $CarverDebugSettings {
        static of(debugMode: boolean, airState: $BlockState_, waterState: $BlockState_, lavaState: $BlockState_, barrierState: $BlockState_): $CarverDebugSettings;
        static of(airState: $BlockState_, waterState: $BlockState_, lavaState: $BlockState_, barrierState: $BlockState_): $CarverDebugSettings;
        static of(debugMode: boolean, airState: $BlockState_): $CarverDebugSettings;
        getAirState(): $BlockState;
        getBarrierState(): $BlockState;
        getWaterState(): $BlockState;
        getLavaState(): $BlockState;
        isDebugMode(): boolean;
        static CODEC: $Codec<$CarverDebugSettings>;
        static DEFAULT: $CarverDebugSettings;
        get airState(): $BlockState;
        get barrierState(): $BlockState;
        get waterState(): $BlockState;
        get lavaState(): $BlockState;
        get debugMode(): boolean;
    }
    /**
     * A carver which creates Minecraft's most common cave types.
     */
    export class $CaveWorldCarver extends $WorldCarver<$CaveCarverConfiguration> {
        createRoom(context: $CarvingContext, config: $CaveCarverConfiguration, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, aquifer: $Aquifer, x: number, arg6: number, y: number, arg8: number, z: number, arg10: $CarvingMask, radius: $WorldCarver$CarveSkipChecker_): void;
        getYScale(): number;
        /**
         * Carves the given chunk with caves that originate from the given `chunkPos`.
         * This method is invoked 289 times in order to generate each chunk (once for every position in an 8 chunk radius, or 17x17 chunk area, centered around the target chunk).
         * 
         * @see net.minecraft.world.level.chunk.ChunkGenerator#applyCarvers
         */
        carve(context: $CarvingContext, config: $CaveCarverConfiguration, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        getThickness(random: $RandomSource): number;
        getCaveBound(): number;
        createTunnel(context: $CarvingContext, config: $CaveCarverConfiguration, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, seed: number, arg5: $Aquifer, aquifer: number, x: number, arg8: number, y: number, arg10: number, z: number, arg12: number, horizontalRadiusMultiplier: number, arg14: number, verticalRadiusMultiplier: number, arg16: number, thickness: $CarvingMask, yaw: $WorldCarver$CarveSkipChecker_): void;
        isStartChunk(config: $CaveCarverConfiguration, random: $RandomSource): boolean;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static LAVA: $FluidState;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static CAVE_AIR: $BlockState;
        static AIR: $BlockState;
        liquids: $Set<$Fluid>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static WATER: $FluidState;
        constructor(codec: $Codec<$CaveCarverConfiguration>);
        get YScale(): number;
        get caveBound(): number;
    }
    export class $CarvingContext extends $WorldGenerationContext {
        /**
         * @deprecated
         */
        registryAccess(): $RegistryAccess;
        randomState(): $RandomState;
        /**
         * @deprecated
         */
        topMaterial(biomeMapper: $Function_<$BlockPos, $Holder<$Biome>>, access: $ChunkAccess, pos: $BlockPos_, hasFluid: boolean): ($BlockState) | undefined;
        constructor(generator: $NoiseBasedChunkGenerator, registryAccess: $RegistryAccess, level: $LevelHeightAccessor, noiseChunk: $NoiseChunk, randomState: $RandomState, surfaceRule: $SurfaceRules$RuleSource);
    }
    /**
     * A carver responsible for creating ravines, or canyons.
     */
    export class $CanyonWorldCarver extends $WorldCarver<$CanyonCarverConfiguration> {
        /**
         * Carves the given chunk with caves that originate from the given `chunkPos`.
         * This method is invoked 289 times in order to generate each chunk (once for every position in an 8 chunk radius, or 17x17 chunk area, centered around the target chunk).
         * 
         * @see net.minecraft.world.level.chunk.ChunkGenerator#applyCarvers
         */
        carve(context: $CarvingContext, config: $CanyonCarverConfiguration, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        isStartChunk(config: $CanyonCarverConfiguration, random: $RandomSource): boolean;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static LAVA: $FluidState;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static CAVE_AIR: $BlockState;
        static AIR: $BlockState;
        liquids: $Set<$Fluid>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static WATER: $FluidState;
        constructor(codec: $Codec<$CanyonCarverConfiguration>);
    }
    export class $CanyonCarverConfiguration extends $CarverConfiguration {
        verticalRotation: $FloatProvider;
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $Codec<$CanyonCarverConfiguration>;
        shape: $CanyonCarverConfiguration$CanyonShapeConfiguration;
        probability: number;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>, verticalRotation: $FloatProvider, shape: $CanyonCarverConfiguration$CanyonShapeConfiguration);
        constructor(config: $CarverConfiguration, verticalRotation: $FloatProvider, shape: $CanyonCarverConfiguration$CanyonShapeConfiguration);
    }
    export class $NetherWorldCarver extends $CaveWorldCarver {
        carveBlock(arg0: $CarvingContext, arg1: $CaveCarverConfiguration, arg2: $ChunkAccess, arg3: $Function_<$BlockPos, $Holder<$Biome>>, arg4: $CarvingMask, arg5: $BlockPos$MutableBlockPos, arg6: $BlockPos$MutableBlockPos, arg7: $Aquifer, arg8: $MutableBoolean): boolean;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static LAVA: $FluidState;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static CAVE_AIR: $BlockState;
        static AIR: $BlockState;
        liquids: $Set<$Fluid>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static WATER: $FluidState;
        constructor(arg0: $Codec<$CaveCarverConfiguration>);
    }
    /**
     * Used to define certain positions to skip or ignore when carving.
     */
    export class $WorldCarver$CarveSkipChecker {
    }
    export interface $WorldCarver$CarveSkipChecker {
        shouldSkip(context: $CarvingContext, relativeX: number, arg2: number, relativeY: number, arg4: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldCarver$CarveSkipChecker}.
     */
    export type $WorldCarver$CarveSkipChecker_ = ((arg0: $CarvingContext, arg1: number, arg2: number, arg3: number, arg4: number) => boolean);
    export class $CarverConfiguration extends $ProbabilityFeatureConfiguration {
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $MapCodec<$CarverConfiguration>;
        probability: number;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>);
    }
    export interface $ConfiguredWorldCarver<WC> extends RegistryMarked<RegistryTypes.WorldgenConfiguredCarverTag, RegistryTypes.WorldgenConfiguredCarver> {}
    export class $CaveCarverConfiguration extends $CarverConfiguration {
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $Codec<$CaveCarverConfiguration>;
        horizontalRadiusMultiplier: $FloatProvider;
        verticalRadiusMultiplier: $FloatProvider;
        probability: number;
        floorLevel: $FloatProvider;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(config: $CarverConfiguration, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, replaceable: $HolderSet_<$Block>, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
    }
    export class $WorldCarver<C extends $CarverConfiguration> {
        configured(config: C): $ConfiguredWorldCarver<C>;
        getRange(): number;
        /**
         * Carves a single block, replacing it with the appropriate state if possible, and handles replacing exposed dirt with grass.
         */
        carveBlock(context: $CarvingContext, config: C, chunk: $ChunkAccess, biomeGetter: $Function_<$BlockPos, $Holder<$Biome>>, carvingMask: $CarvingMask, pos: $BlockPos$MutableBlockPos, checkPos: $BlockPos$MutableBlockPos, aquifer: $Aquifer, reachedSurface: $MutableBoolean): boolean;
        /**
         * Carves the given chunk with caves that originate from the given `chunkPos`.
         * This method is invoked 289 times in order to generate each chunk (once for every position in an 8 chunk radius, or 17x17 chunk area, centered around the target chunk).
         * 
         * @see net.minecraft.world.level.chunk.ChunkGenerator#applyCarvers
         */
        carve(context: $CarvingContext, config: C, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        /**
         * Carves blocks in an ellipsoid (more accurately a spheroid), defined by a center (x, y, z) position, with a horizontal and vertical radius (the semi-axes)
         */
        carveEllipsoid(context: $CarvingContext, config: C, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, aquifer: $Aquifer, x: number, arg6: number, y: number, arg8: number, z: number, arg10: $CarvingMask, horizontalRadius: $WorldCarver$CarveSkipChecker_): boolean;
        canReplaceBlock(config: C, state: $BlockState_): boolean;
        configuredCodec(): $MapCodec<$ConfiguredWorldCarver<C>>;
        isStartChunk(config: C, random: $RandomSource): boolean;
        static canReach(chunkPos: $ChunkPos, x: number, arg2: number, z: number, arg4: number, branchIndex: number): boolean;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static LAVA: $FluidState;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static CAVE_AIR: $BlockState;
        static AIR: $BlockState;
        liquids: $Set<$Fluid>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static WATER: $FluidState;
        constructor(codec: $Codec<C>);
        get range(): number;
    }
    /**
     * Values that may be interpreted as {@link $WorldCarver}.
     */
    export type $WorldCarver_<C> = RegistryTypes.WorldgenCarver;
    export class $CanyonCarverConfiguration$CanyonShapeConfiguration {
        static CODEC: $Codec<$CanyonCarverConfiguration$CanyonShapeConfiguration>;
        thickness: $FloatProvider;
        distanceFactor: $FloatProvider;
        horizontalRadiusFactor: $FloatProvider;
        widthSmoothness: number;
        verticalRadiusDefaultFactor: number;
        verticalRadiusCenterFactor: number;
        constructor(distanceFactor: $FloatProvider, thickness: $FloatProvider, widthSmoothness: number, horizontalRadiusFactor: $FloatProvider, verticalRadiusDefaultFactor: number, verticalRadiusCenterFactor: number);
    }
    export class $ConfiguredWorldCarver<WC extends $CarverConfiguration> extends $Record {
        config(): WC;
        carve(context: $CarvingContext, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        worldCarver(): $WorldCarver<WC>;
        isStartChunk(random: $RandomSource): boolean;
        static CODEC: $Codec<$Holder<$ConfiguredWorldCarver<never>>>;
        static DIRECT_CODEC: $Codec<$ConfiguredWorldCarver<never>>;
        static LIST_CODEC: $Codec<$HolderSet<$ConfiguredWorldCarver<never>>>;
        constructor(worldCarver: $WorldCarver_<WC>, config: WC);
    }
    /**
     * Values that may be interpreted as {@link $ConfiguredWorldCarver}.
     */
    export type $ConfiguredWorldCarver_<WC> = RegistryTypes.WorldgenConfiguredCarver;
}
