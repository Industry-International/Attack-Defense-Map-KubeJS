import { $Long2ReferenceMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ChunkBuilder } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
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
import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $RenderSectionManagerAccessor } from "@package/foundry/veil/forge/mixin/client/perspective/sodium";
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
export * as lists from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
export * as compile from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
export * as translucent_sorting from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
export * as map from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
export * as vertex from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex";
export * as region from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
export * as terrain from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk" {
    export class $RenderSectionManager implements $RenderSectionManagerAccessor, $RenderSectionManagerAccessor$1 {
        update(arg0: $Camera, arg1: $Viewport, arg2: boolean): void;
        destroy(): void;
        getBuilder(): $ChunkBuilder;
        getVisibleChunkCount(): number;
        scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getTotalSections(): number;
        renderLayer(arg0: $ChunkRenderMatrices_, arg1: $TerrainRenderPass, arg2: number, arg3: number, arg4: number): void;
        needsUpdate(): boolean;
        handler$bmn000$veil$isSectionVisible(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        onChunkRemoved(arg0: number, arg1: number): void;
        updateCameraState(arg0: $Vector3dc, arg1: $Camera): void;
        getRenderLists(): $SortedRenderLists;
        uploadChunks(): void;
        cleanupAndFlip(): void;
        onChunkAdded(arg0: number, arg1: number): void;
        markGraphDirty(): void;
        tickVisibleRenders(): void;
        updateChunks(arg0: boolean): void;
        isSectionVisible(arg0: number, arg1: number, arg2: number): boolean;
        isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
        getDebugStrings(): $Collection<string>;
        getSectionsWithGlobalEntities(): $Collection<$RenderSection>;
        processGFNIMovement(arg0: $CameraMovement_): void;
        onSectionAdded(arg0: number, arg1: number, arg2: number): void;
        createRebuildTask(arg0: $RenderSection, arg1: number): $ChunkBuilderMeshingTask;
        onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
        scheduleSort(arg0: number, arg1: boolean): void;
        createSortTask(arg0: $RenderSection, arg1: number): $ChunkBuilderSortingTask;
        getTaskLists(): $Map<$ChunkUpdateType, $ArrayDeque<$RenderSection>>;
        getChunkRenderer(): $ChunkRenderer;
        getSectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        setRenderLists(arg0: $SortedRenderLists): void;
        setTaskLists(arg0: $Map_<$ChunkUpdateType_, $ArrayDeque<$RenderSection>>): void;
        constructor(arg0: $ClientLevel, arg1: number, arg2: $CommandList);
        get builder(): $ChunkBuilder;
        get visibleChunkCount(): number;
        get totalSections(): number;
        get debugStrings(): $Collection<string>;
        get sectionsWithGlobalEntities(): $Collection<$RenderSection>;
        get chunkRenderer(): $ChunkRenderer;
        get sectionByPosition(): $Long2ReferenceMap<$RenderSection>;
    }
    export class $ChunkUpdateType extends $Enum<$ChunkUpdateType> {
        static values(): $ChunkUpdateType[];
        static valueOf(arg0: string): $ChunkUpdateType;
        static getPromotionUpdateType(arg0: $ChunkUpdateType_, arg1: $ChunkUpdateType_): $ChunkUpdateType;
        isImportant(): boolean;
        getTaskEffort(): number;
        getMaximumQueueSize(): number;
        static SORT: $ChunkUpdateType;
        static REBUILD: $ChunkUpdateType;
        static INITIAL_BUILD: $ChunkUpdateType;
        static IMPORTANT_REBUILD: $ChunkUpdateType;
        static IMPORTANT_SORT: $ChunkUpdateType;
        get important(): boolean;
        get taskEffort(): number;
        get maximumQueueSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChunkUpdateType}.
     */
    export type $ChunkUpdateType_ = "sort" | "initial_build" | "rebuild" | "important_rebuild" | "important_sort";
    export class $RenderSection implements $RenderSectionExtension {
        "delete"(): void;
        getRegion(): $RenderRegion;
        getFlags(): number;
        setInfo(arg0: $BuiltSectionInfo): boolean;
        isBuilt(): boolean;
        getLastVisibleFrame(): number;
        setTaskCancellationToken(arg0: $CancellationToken): void;
        setLastVisibleFrame(arg0: number): void;
        getLastSubmittedFrame(): number;
        veil$hasNotRendered(): boolean;
        getTaskCancellationToken(): $CancellationToken;
        setLastSubmittedFrame(arg0: number): void;
        getCenterZ(): number;
        getCenterX(): number;
        getPosition(): $SectionPos;
        getCenterY(): number;
        getSectionIndex(): number;
        isDisposed(): boolean;
        getChunkX(): number;
        getChunkY(): number;
        getChunkZ(): number;
        getAdjacent(arg0: number): $RenderSection;
        getGlobalBlockEntities(): $BlockEntity[];
        getCulledBlockEntities(): $BlockEntity[];
        getAnimatedSprites(): $TextureAtlasSprite[];
        getPendingUpdate(): $ChunkUpdateType;
        setPendingUpdate(arg0: $ChunkUpdateType_): void;
        getTranslucentData(): $TranslucentData;
        setLastUploadFrame(arg0: number): void;
        getLastUploadFrame(): number;
        prepareTrigger(arg0: boolean): void;
        setAdjacentNode(arg0: number, arg1: $RenderSection): void;
        getSquaredDistance(arg0: $BlockPos_): number;
        getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
        setTranslucentData(arg0: $TranslucentData): void;
        getOriginZ(): number;
        getOriginY(): number;
        getOriginX(): number;
        handler$bmo000$veil$getIncomingDirections(arg0: $CallbackInfoReturnable<any>): void;
        addIncomingDirections(arg0: number): void;
        getIncomingDirections(): number;
        setIncomingDirections(arg0: number): void;
        veil$addIncomingDirections(arg0: number): void;
        getAdjacentMask(): number;
        veil$markRendered(): void;
        getVisibilityData(): number;
        adjacentEast: $RenderSection;
        adjacentUp: $RenderSection;
        adjacentWest: $RenderSection;
        adjacentSouth: $RenderSection;
        adjacentDown: $RenderSection;
        adjacentNorth: $RenderSection;
        constructor(arg0: $RenderRegion, arg1: number, arg2: number, arg3: number);
        get region(): $RenderRegion;
        get flags(): number;
        set info(value: $BuiltSectionInfo);
        get built(): boolean;
        get centerZ(): number;
        get centerX(): number;
        get position(): $SectionPos;
        get centerY(): number;
        get sectionIndex(): number;
        get disposed(): boolean;
        get chunkX(): number;
        get chunkY(): number;
        get chunkZ(): number;
        get globalBlockEntities(): $BlockEntity[];
        get culledBlockEntities(): $BlockEntity[];
        get animatedSprites(): $TextureAtlasSprite[];
        get originZ(): number;
        get originY(): number;
        get originX(): number;
        get adjacentMask(): number;
        get visibilityData(): number;
    }
    export class $ChunkRenderer {
    }
    export interface $ChunkRenderer {
        "delete"(arg0: $CommandList): void;
        render(arg0: $ChunkRenderMatrices_, arg1: $CommandList, arg2: $ChunkRenderListIterable_, arg3: $TerrainRenderPass, arg4: $CameraTransform): void;
    }
    export class $ChunkRenderMatrices extends $Record {
        static from(arg0: $PoseStack): $ChunkRenderMatrices;
        modelView(): $Matrix4fc;
        projection(): $Matrix4fc;
        constructor(projection: $Matrix4fc, modelView: $Matrix4fc);
    }
    export class $ExtendedBlockEntityType<T extends $BlockEntity> {
        static shouldRender<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: T): boolean;
        static removeRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): boolean;
        static addRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): void;
    }
    export interface $ExtendedBlockEntityType<T extends $BlockEntity> {
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): boolean;
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): void;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<T>[];
    }
}
