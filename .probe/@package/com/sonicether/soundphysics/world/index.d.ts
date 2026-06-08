import { $ChunkPos, $LevelHeightAccessor, $ClipContext, $BlockGetter, $ClipBlockStateContext, $Level_ } from "@package/net/minecraft/world/level";
import { $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UpgradeData, $LevelChunkSection, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Map } from "@package/java/util";
import { $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Object } from "@package/java/lang";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $Vec3_, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Heightmap$Types, $Heightmap, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/com/sonicether/soundphysics/world" {
    export class $ClonedClientLevel implements $ClientLevelProxy {
        getOrigin(): $BlockPos;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getChunk(arg0: number, arg1: number): $ClonedLevelChunk;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getMinBuildHeight(): number;
        getHeight(): number;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getTick(): number;
        getLightEmission(arg0: $BlockPos_): number;
        clip(arg0: $ClipContext): $BlockHitResult;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getMaxLightLevel(): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        handler$iak000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        getSectionIndex(arg0: number): number;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        constructor(arg0: $ClientLevel, arg1: $BlockPos_, arg2: number, arg3: number);
        get origin(): $BlockPos;
        get minBuildHeight(): number;
        get height(): number;
        get tick(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $CachingClientLevel {
    }
    export interface $CachingClientLevel {
        sound_physics_remastered$getCachedClone(): $ClonedClientLevel;
        sound_physics_remastered$setCachedClone(arg0: $ClonedClientLevel): void;
    }
    export class $ClonedLevelChunk extends $ChunkAccess {
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        saveTimePoint: number;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $Level_, arg1: $ChunkPos, arg2: $LevelChunkSection[]);
    }
    export class $ClientLevelProxy {
    }
    export interface $ClientLevelProxy extends $BlockGetter {
    }
}
