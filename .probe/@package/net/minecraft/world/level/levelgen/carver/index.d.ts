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
    export interface $WorldCarver extends RegistryMarked<RegistryTypes.WorldgenCarverTag, RegistryTypes.WorldgenCarver> {}
    export class $CarverDebugSettings {
        static of(arg0: boolean, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockState_, arg4: $BlockState_): $CarverDebugSettings;
        static of(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockState_): $CarverDebugSettings;
        static of(arg0: boolean, arg1: $BlockState_): $CarverDebugSettings;
        getWaterState(): $BlockState;
        getBarrierState(): $BlockState;
        getLavaState(): $BlockState;
        getAirState(): $BlockState;
        isDebugMode(): boolean;
        static CODEC: $Codec<$CarverDebugSettings>;
        static DEFAULT: $CarverDebugSettings;
        get waterState(): $BlockState;
        get barrierState(): $BlockState;
        get lavaState(): $BlockState;
        get airState(): $BlockState;
        get debugMode(): boolean;
    }
    export class $CaveWorldCarver extends $WorldCarver<$CaveCarverConfiguration> {
        carve(arg0: $CarvingContext, arg1: $CaveCarverConfiguration, arg2: $ChunkAccess, arg3: $Function_<$BlockPos, $Holder<$Biome>>, arg4: $RandomSource, arg5: $Aquifer, arg6: $ChunkPos, arg7: $CarvingMask): boolean;
        createRoom(arg0: $CarvingContext, arg1: $CaveCarverConfiguration, arg2: $ChunkAccess, arg3: $Function_<$BlockPos, $Holder<$Biome>>, arg4: $Aquifer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $CarvingMask, arg11: $WorldCarver$CarveSkipChecker_): void;
        getYScale(): number;
        getThickness(arg0: $RandomSource): number;
        createTunnel(arg0: $CarvingContext, arg1: $CaveCarverConfiguration, arg2: $ChunkAccess, arg3: $Function_<$BlockPos, $Holder<$Biome>>, arg4: number, arg5: $Aquifer, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number, arg17: $CarvingMask, arg18: $WorldCarver$CarveSkipChecker_): void;
        getCaveBound(): number;
        isStartChunk(arg0: $CaveCarverConfiguration, arg1: $RandomSource): boolean;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static LAVA: $FluidState;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static CAVE_AIR: $BlockState;
        static AIR: $BlockState;
        liquids: $Set<$Fluid>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static WATER: $FluidState;
        constructor(arg0: $Codec<$CaveCarverConfiguration>);
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
        topMaterial(arg0: $Function_<$BlockPos, $Holder<$Biome>>, arg1: $ChunkAccess, arg2: $BlockPos_, arg3: boolean): ($BlockState) | undefined;
        constructor(arg0: $NoiseBasedChunkGenerator, arg1: $RegistryAccess, arg2: $LevelHeightAccessor, arg3: $NoiseChunk, arg4: $RandomState, arg5: $SurfaceRules$RuleSource);
    }
    export class $CanyonWorldCarver extends $WorldCarver<$CanyonCarverConfiguration> {
        carve(arg0: $CarvingContext, arg1: $CanyonCarverConfiguration, arg2: $ChunkAccess, arg3: $Function_<$BlockPos, $Holder<$Biome>>, arg4: $RandomSource, arg5: $Aquifer, arg6: $ChunkPos, arg7: $CarvingMask): boolean;
        isStartChunk(arg0: $CanyonCarverConfiguration, arg1: $RandomSource): boolean;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static LAVA: $FluidState;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static CAVE_AIR: $BlockState;
        static AIR: $BlockState;
        liquids: $Set<$Fluid>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static WATER: $FluidState;
        constructor(arg0: $Codec<$CanyonCarverConfiguration>);
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
        constructor(arg0: number, arg1: $HeightProvider, arg2: $FloatProvider, arg3: $VerticalAnchor_, arg4: $CarverDebugSettings, arg5: $HolderSet_<$Block>, arg6: $FloatProvider, arg7: $CanyonCarverConfiguration$CanyonShapeConfiguration);
        constructor(arg0: $CarverConfiguration, arg1: $FloatProvider, arg2: $CanyonCarverConfiguration$CanyonShapeConfiguration);
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
    export class $WorldCarver$CarveSkipChecker {
    }
    export interface $WorldCarver$CarveSkipChecker {
        shouldSkip(arg0: $CarvingContext, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
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
        constructor(arg0: number, arg1: $HeightProvider, arg2: $FloatProvider, arg3: $VerticalAnchor_, arg4: $CarverDebugSettings, arg5: $HolderSet_<$Block>);
    }
    export interface $ConfiguredWorldCarver extends RegistryMarked<RegistryTypes.WorldgenConfiguredCarverTag, RegistryTypes.WorldgenConfiguredCarver> {}
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
        constructor(arg0: $CarverConfiguration, arg1: $FloatProvider, arg2: $FloatProvider, arg3: $FloatProvider);
        constructor(arg0: number, arg1: $HeightProvider, arg2: $FloatProvider, arg3: $VerticalAnchor_, arg4: $HolderSet_<$Block>, arg5: $FloatProvider, arg6: $FloatProvider, arg7: $FloatProvider);
        constructor(arg0: number, arg1: $HeightProvider, arg2: $FloatProvider, arg3: $VerticalAnchor_, arg4: $CarverDebugSettings, arg5: $HolderSet_<$Block>, arg6: $FloatProvider, arg7: $FloatProvider, arg8: $FloatProvider);
    }
    export class $WorldCarver<C extends $CarverConfiguration> {
        getRange(): number;
        configured(arg0: C): $ConfiguredWorldCarver<C>;
        carveBlock(arg0: $CarvingContext, arg1: C, arg2: $ChunkAccess, arg3: $Function_<$BlockPos, $Holder<$Biome>>, arg4: $CarvingMask, arg5: $BlockPos$MutableBlockPos, arg6: $BlockPos$MutableBlockPos, arg7: $Aquifer, arg8: $MutableBoolean): boolean;
        carve(arg0: $CarvingContext, arg1: C, arg2: $ChunkAccess, arg3: $Function_<$BlockPos, $Holder<$Biome>>, arg4: $RandomSource, arg5: $Aquifer, arg6: $ChunkPos, arg7: $CarvingMask): boolean;
        static canReach(arg0: $ChunkPos, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        configuredCodec(): $MapCodec<$ConfiguredWorldCarver<C>>;
        isStartChunk(arg0: C, arg1: $RandomSource): boolean;
        carveEllipsoid(arg0: $CarvingContext, arg1: C, arg2: $ChunkAccess, arg3: $Function_<$BlockPos, $Holder<$Biome>>, arg4: $Aquifer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $CarvingMask, arg11: $WorldCarver$CarveSkipChecker_): boolean;
        canReplaceBlock(arg0: C, arg1: $BlockState_): boolean;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static LAVA: $FluidState;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static CAVE_AIR: $BlockState;
        static AIR: $BlockState;
        liquids: $Set<$Fluid>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static WATER: $FluidState;
        constructor(arg0: $Codec<C>);
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
        constructor(arg0: $FloatProvider, arg1: $FloatProvider, arg2: number, arg3: $FloatProvider, arg4: number, arg5: number);
    }
    export class $ConfiguredWorldCarver<WC extends $CarverConfiguration> extends $Record {
        config(): WC;
        carve(arg0: $CarvingContext, arg1: $ChunkAccess, arg2: $Function_<$BlockPos, $Holder<$Biome>>, arg3: $RandomSource, arg4: $Aquifer, arg5: $ChunkPos, arg6: $CarvingMask): boolean;
        isStartChunk(arg0: $RandomSource): boolean;
        worldCarver(): $WorldCarver<WC>;
        static CODEC: $Codec<$Holder<$ConfiguredWorldCarver<never>>>;
        static DIRECT_CODEC: $Codec<$ConfiguredWorldCarver<never>>;
        static LIST_CODEC: $Codec<$HolderSet<$ConfiguredWorldCarver<never>>>;
        constructor(arg0: $WorldCarver_<WC>, arg1: WC);
    }
    /**
     * Values that may be interpreted as {@link $ConfiguredWorldCarver}.
     */
    export type $ConfiguredWorldCarver_<WC> = RegistryTypes.WorldgenConfiguredCarver;
}
