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
        handler$bmm000$veil$isSectionVisible(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        renderLayer(arg0: $ChunkRenderMatrices_, arg1: $TerrainRenderPass, arg2: number, arg3: number, arg4: number): void;
        needsUpdate(): boolean;
        getSectionsWithGlobalEntities(): $Collection<$RenderSection>;
        processGFNIMovement(arg0: $CameraMovement_): void;
        getVisibleChunkCount(): number;
        getTotalSections(): number;
        onSectionAdded(arg0: number, arg1: number, arg2: number): void;
        createRebuildTask(arg0: $RenderSection, arg1: number): $ChunkBuilderMeshingTask;
        scheduleSort(arg0: number, arg1: boolean): void;
        createSortTask(arg0: $RenderSection, arg1: number): $ChunkBuilderSortingTask;
        onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
        onChunkAdded(arg0: number, arg1: number): void;
        getDebugStrings(): $Collection<string>;
        isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
        tickVisibleRenders(): void;
        updateCameraState(arg0: $Vector3dc, arg1: $Camera): void;
        updateChunks(arg0: boolean): void;
        cleanupAndFlip(): void;
        isSectionVisible(arg0: number, arg1: number, arg2: number): boolean;
        getRenderLists(): $SortedRenderLists;
        markGraphDirty(): void;
        uploadChunks(): void;
        onChunkRemoved(arg0: number, arg1: number): void;
        getSectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        getChunkRenderer(): $ChunkRenderer;
        getTaskLists(): $Map<$ChunkUpdateType, $ArrayDeque<$RenderSection>>;
        setRenderLists(arg0: $SortedRenderLists): void;
        setTaskLists(arg0: $Map_<$ChunkUpdateType_, $ArrayDeque<$RenderSection>>): void;
        constructor(arg0: $ClientLevel, arg1: number, arg2: $CommandList);
        get builder(): $ChunkBuilder;
        get sectionsWithGlobalEntities(): $Collection<$RenderSection>;
        get visibleChunkCount(): number;
        get totalSections(): number;
        get debugStrings(): $Collection<string>;
        get sectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        get chunkRenderer(): $ChunkRenderer;
    }
    export class $ChunkUpdateType extends $Enum<$ChunkUpdateType> {
        getMaximumQueueSize(): number;
        static values(): $ChunkUpdateType[];
        static valueOf(arg0: string): $ChunkUpdateType;
        isImportant(): boolean;
        static getPromotionUpdateType(arg0: $ChunkUpdateType_, arg1: $ChunkUpdateType_): $ChunkUpdateType;
        getTaskEffort(): number;
        static SORT: $ChunkUpdateType;
        static REBUILD: $ChunkUpdateType;
        static INITIAL_BUILD: $ChunkUpdateType;
        static IMPORTANT_REBUILD: $ChunkUpdateType;
        static IMPORTANT_SORT: $ChunkUpdateType;
        get maximumQueueSize(): number;
        get important(): boolean;
        get taskEffort(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChunkUpdateType}.
     */
    export type $ChunkUpdateType_ = "sort" | "initial_build" | "rebuild" | "important_rebuild" | "important_sort";
    export class $RenderSection implements $RenderSectionExtension {
        getIncomingDirections(): number;
        veil$addIncomingDirections(arg0: number): void;
        addIncomingDirections(arg0: number): void;
        setIncomingDirections(arg0: number): void;
        getVisibilityData(): number;
        veil$markRendered(): void;
        getAdjacentMask(): number;
        getPosition(): $SectionPos;
        "delete"(): void;
        getRegion(): $RenderRegion;
        getFlags(): number;
        getCenterX(): number;
        getCenterZ(): number;
        handler$bmn000$veil$getIncomingDirections(arg0: $CallbackInfoReturnable<any>): void;
        setInfo(arg0: $BuiltSectionInfo): boolean;
        getSectionIndex(): number;
        isBuilt(): boolean;
        getAdjacent(arg0: number): $RenderSection;
        getLastVisibleFrame(): number;
        getLastSubmittedFrame(): number;
        setLastSubmittedFrame(arg0: number): void;
        getTaskCancellationToken(): $CancellationToken;
        setTaskCancellationToken(arg0: $CancellationToken): void;
        setLastVisibleFrame(arg0: number): void;
        veil$hasNotRendered(): boolean;
        getCulledBlockEntities(): $BlockEntity[];
        getGlobalBlockEntities(): $BlockEntity[];
        getChunkY(): number;
        isDisposed(): boolean;
        getChunkZ(): number;
        getChunkX(): number;
        getCenterY(): number;
        setLastUploadFrame(arg0: number): void;
        getTranslucentData(): $TranslucentData;
        getLastUploadFrame(): number;
        getAnimatedSprites(): $TextureAtlasSprite[];
        setTranslucentData(arg0: $TranslucentData): void;
        prepareTrigger(arg0: boolean): void;
        setPendingUpdate(arg0: $ChunkUpdateType_): void;
        getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
        getSquaredDistance(arg0: $BlockPos_): number;
        setAdjacentNode(arg0: number, arg1: $RenderSection): void;
        getPendingUpdate(): $ChunkUpdateType;
        getOriginY(): number;
        getOriginZ(): number;
        getOriginX(): number;
        adjacentEast: $RenderSection;
        adjacentUp: $RenderSection;
        adjacentWest: $RenderSection;
        adjacentSouth: $RenderSection;
        adjacentDown: $RenderSection;
        adjacentNorth: $RenderSection;
        constructor(arg0: $RenderRegion, arg1: number, arg2: number, arg3: number);
        get visibilityData(): number;
        get adjacentMask(): number;
        get position(): $SectionPos;
        get region(): $RenderRegion;
        get flags(): number;
        get centerX(): number;
        get centerZ(): number;
        set info(value: $BuiltSectionInfo);
        get sectionIndex(): number;
        get built(): boolean;
        get culledBlockEntities(): $BlockEntity[];
        get globalBlockEntities(): $BlockEntity[];
        get chunkY(): number;
        get disposed(): boolean;
        get chunkZ(): number;
        get chunkX(): number;
        get centerY(): number;
        get animatedSprites(): $TextureAtlasSprite[];
        get originY(): number;
        get originZ(): number;
        get originX(): number;
    }
    export class $ChunkRenderer {
    }
    export interface $ChunkRenderer {
        "delete"(arg0: $CommandList): void;
        render(arg0: $ChunkRenderMatrices_, arg1: $CommandList, arg2: $ChunkRenderListIterable_, arg3: $TerrainRenderPass, arg4: $CameraTransform): void;
    }
    export class $ChunkRenderMatrices extends $Record {
        static from(arg0: $PoseStack): $ChunkRenderMatrices;
        projection(): $Matrix4fc;
        modelView(): $Matrix4fc;
        constructor(projection: $Matrix4fc, modelView: $Matrix4fc);
    }
    export class $ExtendedBlockEntityType<T extends $BlockEntity> {
        static addRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): void;
        static shouldRender<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: T): boolean;
        static removeRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): boolean;
    }
    export interface $ExtendedBlockEntityType<T extends $BlockEntity> {
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): boolean;
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): void;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<T>[];
    }
}
