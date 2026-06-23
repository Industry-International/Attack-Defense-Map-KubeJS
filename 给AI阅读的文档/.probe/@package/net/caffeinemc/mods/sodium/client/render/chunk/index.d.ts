import { $Long2ReferenceMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ChunkBuilder, $ChunkJob } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
import { $TextProvider } from "@package/net/caffeinemc/mods/sodium/client/gui/options";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Camera } from "@package/net/minecraft/client";
import { $BlockEntityRenderPredicate_, $BlockEntityRenderPredicate } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
import { $Map_, $Map, $ArrayDeque, $Collection } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $CameraMovement_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger";
import { $CameraTransform, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RenderSectionManagerAccessor } from "@package/foundry/veil/forge/mixin/client/perspective/sodium";
import { $SortBehavior_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
import { $RenderSectionManagerAccessor as $RenderSectionManagerAccessor$1 } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $ChunkBuilderMeshingTask, $ChunkBuilderSortingTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";
import { $TranslucentData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $RenderSectionExtension } from "@package/foundry/veil/forge/ext";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SortedRenderLists, $ChunkRenderListIterable_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3dc, $Matrix4fc } from "@package/org/joml";
export * as data from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
export * as translucent_sorting from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
export * as lists from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
export * as compile from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
export * as map from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
export * as vertex from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex";
export * as region from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
export * as terrain from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk" {
    export class $RenderSectionManager implements $RenderSectionManagerAccessor, $RenderSectionManagerAccessor$1 {
        update(arg0: $Camera, arg1: $Viewport, arg2: boolean): void;
        destroy(): void;
        handler$bmj000$veil$isSectionVisible(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getBuilder(): $ChunkBuilder;
        onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
        onSectionAdded(arg0: number, arg1: number, arg2: number): void;
        scheduleSort(arg0: number, arg1: boolean): void;
        createRebuildTask(arg0: $RenderSection, arg1: number): $ChunkBuilderMeshingTask;
        createSortTask(arg0: $RenderSection, arg1: number): $ChunkBuilderSortingTask;
        getSectionsWithGlobalEntities(): $Collection<$RenderSection>;
        needsUpdate(): boolean;
        scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getTotalSections(): number;
        renderLayer(arg0: $ChunkRenderMatrices_, arg1: $TerrainRenderPass, arg2: number, arg3: number, arg4: number): void;
        updateChunks(arg0: boolean): void;
        prepareFrame(arg0: $Vector3dc): void;
        getVisibleChunkCount(): number;
        getDebugStrings(): $Collection<string>;
        processGFNIMovement(arg0: $CameraMovement_): void;
        finalizeRenderLists(arg0: $Viewport): void;
        beforeSectionUpdates(): void;
        uploadChunks(): void;
        onChunkRemoved(arg0: number, arg1: number): void;
        tickVisibleRenders(): void;
        markGraphDirty(): void;
        onChunkAdded(arg0: number, arg1: number): void;
        getRenderLists(): $SortedRenderLists;
        cleanupAndFlip(): void;
        isSectionVisible(arg0: number, arg1: number, arg2: number): boolean;
        isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
        getSectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        getChunkRenderer(): $ChunkRenderer;
        getTaskLists(): $Map<$TaskQueueType, $ArrayDeque<$RenderSection>>;
        setRenderLists(arg0: $SortedRenderLists): void;
        setTaskLists(arg0: $Map_<$TaskQueueType_, $ArrayDeque<$RenderSection>>): void;
        constructor(arg0: $ClientLevel, arg1: number, arg2: $SortBehavior_, arg3: $CommandList);
        get builder(): $ChunkBuilder;
        get sectionsWithGlobalEntities(): $Collection<$RenderSection>;
        get totalSections(): number;
        get visibleChunkCount(): number;
        get debugStrings(): $Collection<string>;
        get sectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        get chunkRenderer(): $ChunkRenderer;
    }
    export class $TaskQueueType extends $Enum<$TaskQueueType> {
        static values(): $TaskQueueType[];
        static valueOf(arg0: string): $TaskQueueType;
        queueSizeLimit(): number;
        allowsUnlimitedUploadDuration(): boolean;
        static ALWAYS_DEFER: $TaskQueueType;
        static ZERO_FRAME_DEFER: $TaskQueueType;
        static ONE_FRAME_DEFER: $TaskQueueType;
        static INITIAL_BUILD: $TaskQueueType;
    }
    /**
     * Values that may be interpreted as {@link $TaskQueueType}.
     */
    export type $TaskQueueType_ = "zero_frame_defer" | "one_frame_defer" | "always_defer" | "initial_build";
    export class $RenderSection implements $RenderSectionExtension {
        getPosition(): $SectionPos;
        "delete"(): void;
        getRegion(): $RenderRegion;
        getFlags(): number;
        getCenterY(): number;
        getSectionIndex(): number;
        getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
        getSquaredDistance(arg0: $BlockPos_): number;
        setPendingUpdate(arg0: number, arg1: number): void;
        getAnimatedSprites(): $TextureAtlasSprite[];
        getRunningJob(): $ChunkJob;
        getTranslucentData(): $TranslucentData;
        setTranslucentData(arg0: $TranslucentData): void;
        prepareTrigger(arg0: boolean): void;
        setAdjacentNode(arg0: number, arg1: $RenderSection): void;
        getLastUploadFrame(): number;
        getPendingUpdate(): number;
        clearPendingUpdate(): void;
        setRunningJob(arg0: $ChunkJob): void;
        setLastUploadFrame(arg0: number): void;
        getCenterX(): number;
        getCenterZ(): number;
        setInfo(arg0: $BuiltSectionInfo): boolean;
        getAdjacent(arg0: number): $RenderSection;
        isBuilt(): boolean;
        isDisposed(): boolean;
        getOriginX(): number;
        getOriginY(): number;
        veil$markRendered(): void;
        getVisibilityData(): number;
        getAdjacentMask(): number;
        getGlobalBlockEntities(): $BlockEntity[];
        getCulledBlockEntities(): $BlockEntity[];
        handler$bmk000$veil$getIncomingDirections(arg0: $CallbackInfoReturnable<any>): void;
        getChunkZ(): number;
        getChunkX(): number;
        getOriginZ(): number;
        setLastMeshResultSize(arg0: number): void;
        getLastVisibleFrame(): number;
        getLastSubmittedFrame(): number;
        setLastSubmittedFrame(arg0: number): void;
        setLastVisibleFrame(arg0: number): void;
        veil$hasNotRendered(): boolean;
        getLastMeshResultSize(): number;
        setIncomingDirections(arg0: number): void;
        veil$addIncomingDirections(arg0: number): void;
        addIncomingDirections(arg0: number): void;
        getPendingUpdateSince(): number;
        getIncomingDirections(): number;
        getChunkY(): number;
        adjacentEast: $RenderSection;
        adjacentUp: $RenderSection;
        adjacentWest: $RenderSection;
        adjacentSouth: $RenderSection;
        adjacentDown: $RenderSection;
        adjacentNorth: $RenderSection;
        constructor(arg0: $RenderRegion, arg1: number, arg2: number, arg3: number);
        get position(): $SectionPos;
        get region(): $RenderRegion;
        get flags(): number;
        get centerY(): number;
        get sectionIndex(): number;
        get animatedSprites(): $TextureAtlasSprite[];
        get centerX(): number;
        get centerZ(): number;
        set info(value: $BuiltSectionInfo);
        get built(): boolean;
        get disposed(): boolean;
        get originX(): number;
        get originY(): number;
        get visibilityData(): number;
        get adjacentMask(): number;
        get globalBlockEntities(): $BlockEntity[];
        get culledBlockEntities(): $BlockEntity[];
        get chunkZ(): number;
        get chunkX(): number;
        get originZ(): number;
        get pendingUpdateSince(): number;
        get chunkY(): number;
    }
    export class $ChunkRenderer {
    }
    export interface $ChunkRenderer {
        "delete"(arg0: $CommandList): void;
        render(arg0: $ChunkRenderMatrices_, arg1: $CommandList, arg2: $ChunkRenderListIterable_, arg3: $TerrainRenderPass, arg4: $CameraTransform, arg5: boolean): void;
    }
    export class $DeferMode extends $Enum<$DeferMode> implements $TextProvider {
        static values(): $DeferMode[];
        static valueOf(arg0: string): $DeferMode;
        getLocalizedName(): $Component;
        getImportantRebuildQueueType(): $TaskQueueType;
        static ONE_FRAME: $DeferMode;
        static ALWAYS: $DeferMode;
        static ZERO_FRAMES: $DeferMode;
        get localizedName(): $Component;
        get importantRebuildQueueType(): $TaskQueueType;
    }
    /**
     * Values that may be interpreted as {@link $DeferMode}.
     */
    export type $DeferMode_ = "always" | "one_frame" | "zero_frames";
    export class $ChunkRenderMatrices extends $Record {
        static from(arg0: $PoseStack): $ChunkRenderMatrices;
        modelView(): $Matrix4fc;
        projection(): $Matrix4fc;
        constructor(projection: $Matrix4fc, modelView: $Matrix4fc);
    }
    export class $ExtendedBlockEntityType<T extends $BlockEntity> {
        static removeRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): boolean;
        static shouldRender<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: T): boolean;
        static addRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): void;
    }
    export interface $ExtendedBlockEntityType<T extends $BlockEntity> {
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): void;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<T>[];
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): boolean;
    }
}
