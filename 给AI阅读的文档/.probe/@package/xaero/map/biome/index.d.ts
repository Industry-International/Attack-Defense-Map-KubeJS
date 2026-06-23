import { $BlockAndTintGetter, $ChunkPos, $ClipContext, $ColorResolver_, $ClipBlockStateContext, $LightLayer_, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $MapTile } from "@package/xaero/map/region";
import { $Biome_, $Biome } from "@package/net/minecraft/world/level/biome";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Registry, $BlockPos$MutableBlockPos, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $MapWriter, $MapProcessor } from "@package/xaero/map";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $Vec3_, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BrokenBlockTintCache } from "@package/xaero/map/cache";

declare module "@package/xaero/map/biome" {
    export class $BiomeColorCalculator {
        prepare(arg0: boolean): void;
        getBiomeAtPos(arg0: $BlockPos_, arg1: $MapTile, arg2: number, arg3: $MapProcessor): $ResourceKey<$Biome>;
        getBiomeColor(arg0: $ColorResolver_, arg1: boolean, arg2: $BlockPos$MutableBlockPos, arg3: $MapTile, arg4: number, arg5: $Registry<$Biome_>, arg6: $MapProcessor): number;
        UNREACHABLE_BIOME: $ResourceKey<$Biome>;
        RIVER_BIOME: $ResourceKey<$Biome>;
        constructor();
    }
    export class $BiomeGetter {
        getBiome(arg0: $Level_, arg1: $BlockPos_, arg2: $Registry<$Biome_>): $ResourceKey<$Biome>;
        UNKNOWN_BIOME: $ResourceKey<$Biome>;
        PLACEHOLDER_BIOME: $ResourceKey<$Biome>;
        constructor();
    }
    export class $BlockTintProvider implements $BlockAndTintGetter {
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getHeight(): number;
        getLightEngine(): $LevelLightEngine;
        getMinBuildHeight(): number;
        getBiomeColor(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean, arg3: $MapTile, arg4: number): number;
        canSeeSky(arg0: $BlockPos_): boolean;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getLightEmission(arg0: $BlockPos_): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        handler$hna000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        clip(arg0: $ClipContext): $BlockHitResult;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getSectionsCount(): number;
        getMinSection(): number;
        getSectionIndex(arg0: number): number;
        getMaxBuildHeight(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        constructor(arg0: $Registry<$Biome_>, arg1: $BiomeColorCalculator, arg2: $MapProcessor, arg3: $BrokenBlockTintCache, arg4: $MapWriter);
        get height(): number;
        get lightEngine(): $LevelLightEngine;
        get minBuildHeight(): number;
        get maxLightLevel(): number;
        get maxSection(): number;
        get sectionsCount(): number;
        get minSection(): number;
        get maxBuildHeight(): number;
    }
}
