import { $Long2ObjectFunction_, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $SectionBufferBuilderPack, $RenderBuffers, $SectionBufferBuilderPool, $RenderType, $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $IPinnableRenderSection } from "@package/net/mehvahdjukaar/vista/common/chunk_tracking";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Set_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $RenderSectionAccessor } from "@package/dev/ryanhcode/sable/mixin/sublevel_render";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $AddSectionGeometryEvent$AdditionalSectionRenderer_ } from "@package/net/neoforged/neoforge/client/event";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos$MutableBlockPos, $Holder, $BlockPos_, $Direction_, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $ClipContext, $ClipBlockStateContext, $LightLayer_, $ChunkPos, $Level, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $RenderDataMapConsumer } from "@package/net/fabricmc/fabric/impl/blockview/client";
import { $ForceChunkLoadingHook$IBlockOnChunkRebuilds } from "@package/com/replaymod/render/hooks";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $CompiledSectionAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $MeshData, $MeshData$SortState, $VertexSorting_, $ByteBufferBuilder$Result, $VertexSorting, $VertexBuffer } from "@package/com/mojang/blaze3d/vertex";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $RenderSectionExtension, $RenderSectionExtension$DirtyListener_ } from "@package/dev/ryanhcode/sable/mixinterface/sublevel_render/vanilla";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/net/minecraft/client/renderer/chunk" {
    export class $SectionRenderDispatcher$RenderSection implements $IPinnableRenderSection, $RenderSectionAccessor, $RenderSectionExtension {
        isDirty(): boolean;
        getBuffer(arg0: $RenderType): $VertexBuffer;
        getOrigin(): $BlockPos;
        rebuildSectionAsync(arg0: $SectionRenderDispatcher, arg1: $RenderRegionCache): void;
        updateGlobalBlockEntities(arg0: $Collection_<$BlockEntity>): void;
        setDirty(arg0: boolean): void;
        releaseBuffers(): void;
        getBoundingBox(): $AABB;
        getCompiled(): $SectionRenderDispatcher$CompiledSection;
        setNotDirty(): void;
        isDirtyFromPlayer(): boolean;
        hasAllNeighbors(): boolean;
        handler$hhf000$sable$setDirty(arg0: boolean, arg1: $CallbackInfo): void;
        setOrigin(arg0: number, arg1: number, arg2: number): void;
        vista$setPinned(arg0: boolean): void;
        cancelTasks(): boolean;
        sable$setListening(arg0: boolean): void;
        isAxisAlignedWith(arg0: number, arg1: number, arg2: number): boolean;
        setCompiled(arg0: $SectionRenderDispatcher$CompiledSection): void;
        compileSync(arg0: $RenderRegionCache): void;
        getRelativeOrigin(arg0: $Direction_): $BlockPos;
        vista$isPinned(): boolean;
        resortTransparency(arg0: $RenderType, arg1: $SectionRenderDispatcher): boolean;
        createCompileTask(arg0: $RenderRegionCache): $SectionRenderDispatcher$RenderSection$CompileTask;
        getDistToPlayerSqr(): number;
        sable$addDirtyListener(arg0: $RenderSectionExtension$DirtyListener_): void;
        createVertexSorting(): $VertexSorting;
        getGlobalBlockEntities(): $Set<$BlockEntity>;
        compiled: $AtomicReference<$SectionRenderDispatcher$CompiledSection>;
        static SIZE: number;
        origin: $BlockPos$MutableBlockPos;
        this$0: $SectionRenderDispatcher;
        index: number;
        constructor(arg0: $SectionRenderDispatcher, arg1: number, arg2: number, arg3: number, arg4: number);
        get boundingBox(): $AABB;
        get dirtyFromPlayer(): boolean;
        get distToPlayerSqr(): number;
        get globalBlockEntities(): $Set<$BlockEntity>;
    }
    export class $SectionRenderDispatcher implements $ForceChunkLoadingHook$IBlockOnChunkRebuilds {
        schedule(arg0: $SectionRenderDispatcher$RenderSection$CompileTask): void;
        setLevel(arg0: $ClientLevel): void;
        dispose(): void;
        getStats(): string;
        uploadAllPendingUploads(): void;
        uploadEverythingBlocking(): boolean;
        setCamera(arg0: $Vec3_): void;
        blockUntilClear(): void;
        rebuildSectionSync(arg0: $SectionRenderDispatcher$RenderSection, arg1: $RenderRegionCache): void;
        getCameraPosition(): $Vec3;
        uploadSectionIndexBuffer(arg0: $ByteBufferBuilder$Result, arg1: $VertexBuffer): $CompletableFuture<void>;
        getFreeBufferCount(): number;
        getToBatchCount(): number;
        getToUpload(): number;
        isQueueEmpty(): boolean;
        uploadSectionLayer(arg0: $MeshData, arg1: $VertexBuffer): $CompletableFuture<void>;
        bufferPool: $SectionBufferBuilderPool;
        renderer: $LevelRenderer;
        sectionCompiler: $SectionCompiler;
        level: $ClientLevel;
        fixedBuffers: $SectionBufferBuilderPack;
        constructor(arg0: $ClientLevel, arg1: $LevelRenderer, arg2: $Executor_, arg3: $RenderBuffers, arg4: $BlockRenderDispatcher, arg5: $BlockEntityRenderDispatcher);
        get stats(): string;
        set camera(value: $Vec3_);
        get cameraPosition(): $Vec3;
        get freeBufferCount(): number;
        get toBatchCount(): number;
        get toUpload(): number;
        get queueEmpty(): boolean;
    }
    export class $RenderRegionCache$ChunkInfo {
        chunk(): $LevelChunk;
        renderChunk(): $RenderChunk;
        constructor(arg0: $LevelChunk);
    }
    export class $RenderChunk {
    }
    export class $SectionRenderDispatcher$CompiledSection implements $CompiledSectionAccess {
        isEmpty(arg0: $RenderType): boolean;
        getRenderableBlockEntities(): $List<$BlockEntity>;
        facesCanSeeEachother(arg0: $Direction_, arg1: $Direction_): boolean;
        hasNoRenderableLayers(): boolean;
        getHasBlocks(): $Set<$RenderType>;
        transparencyState: $MeshData$SortState;
        hasBlocks: $Set<$RenderType>;
        visibilitySet: $VisibilitySet;
        static UNCOMPILED: $SectionRenderDispatcher$CompiledSection;
        static EMPTY: $SectionRenderDispatcher$CompiledSection;
        renderableBlockEntities: $List<$BlockEntity>;
        constructor();
    }
    export class $RenderChunkRegion implements $BlockAndTintGetter, $RenderDataMapConsumer, $RenderAttachedBlockView, $SubLevelContainerHolder {
        static index(arg0: number, arg1: number, arg2: number, arg3: number): number;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        getMinBuildHeight(): number;
        hasBiomes(): boolean;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getHeight(): number;
        getLightEngine(): $LevelLightEngine;
        getModelData(arg0: $BlockPos_): $ModelData;
        sable$getPlotContainer(): $SubLevelContainer;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        fabric_acceptRenderDataMap(arg0: $Long2ObjectMap<any>): void;
        canSeeSky(arg0: $BlockPos_): boolean;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        handler$iaa000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getSectionsCount(): number;
        getMaxBuildHeight(): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionIndex(arg0: number): number;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        static RADIUS: number;
        level: $Level;
        chunks: $RenderChunk[];
        static SIZE: number;
        /**
         * @deprecated
         */
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: $RenderChunk[]);
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: $RenderChunk[], arg4: $Long2ObjectFunction_<$ModelData>);
        get minBuildHeight(): number;
        get height(): number;
        get lightEngine(): $LevelLightEngine;
        get maxLightLevel(): number;
        get sectionsCount(): number;
        get maxBuildHeight(): number;
        get minSection(): number;
        get maxSection(): number;
    }
    export class $SectionCompiler {
        compile(arg0: $SectionPos, arg1: $RenderChunkRegion, arg2: $VertexSorting_, arg3: $SectionBufferBuilderPack, arg4: $List_<$AddSectionGeometryEvent$AdditionalSectionRenderer_>): $SectionCompiler$Results;
        compile(arg0: $SectionPos, arg1: $RenderChunkRegion, arg2: $VertexSorting_, arg3: $SectionBufferBuilderPack): $SectionCompiler$Results;
        constructor(arg0: $BlockRenderDispatcher, arg1: $BlockEntityRenderDispatcher);
    }
    export class $SectionRenderDispatcher$RenderSection$CompileTask implements $Comparable<$SectionRenderDispatcher$RenderSection$CompileTask> {
    }
    export class $VisGraph {
        resolve(): $VisibilitySet;
        setOpaque(arg0: $BlockPos_): void;
        constructor();
        set opaque(value: $BlockPos_);
    }
    export class $VisibilitySet {
        add(arg0: $Set_<$Direction_>): void;
        set(arg0: $Direction_, arg1: $Direction_, arg2: boolean): void;
        setAll(arg0: boolean): void;
        visibilityBetween(arg0: $Direction_, arg1: $Direction_): boolean;
        constructor();
        set all(value: boolean);
    }
    export class $RenderRegionCache {
        createRegion(arg0: $Level_, arg1: $SectionPos, arg2: boolean): $RenderChunkRegion;
        createRegion(arg0: $Level_, arg1: $SectionPos): $RenderChunkRegion;
        constructor();
    }
    export class $SectionRenderDispatcher$RenderSection$RebuildTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
        this$1: $SectionRenderDispatcher$RenderSection;
        region: $RenderChunkRegion;
    }
    export class $SectionRenderDispatcher$RenderSection$ResortTransparencyTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
    }
    export class $SectionRenderDispatcher$SectionTaskResult extends $Enum<$SectionRenderDispatcher$SectionTaskResult> {
    }
    /**
     * Values that may be interpreted as {@link $SectionRenderDispatcher$SectionTaskResult}.
     */
    export type $SectionRenderDispatcher$SectionTaskResult_ = "successful" | "cancelled";
    export class $SectionCompiler$Results {
        release(): void;
        transparencyState: $MeshData$SortState;
        visibilitySet: $VisibilitySet;
        globalBlockEntities: $List<$BlockEntity>;
        blockEntities: $List<$BlockEntity>;
        renderedLayers: $Map<$RenderType, $MeshData>;
        constructor();
    }
}
