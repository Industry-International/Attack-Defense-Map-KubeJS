import { $ClipContext$Block_, $Level, $ClipContext$Fluid_, $Level_ } from "@package/net/minecraft/world/level";
import { $IAcceleratedRenderer_ } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $IMemoryLayout } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory";
import { $MultiBufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ParticleRenderType_, $ParticleRenderType, $Particle } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Camera } from "@package/net/minecraft/client";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Comparator, $Map, $Set, $Set_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $PositionedRect } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Consumer_, $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $VertexFormatElement, $VertexConsumer, $VertexFormatElement_, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ServerMesh_ } from "@package/com/github/argon4w/acceleratedrendering/core/meshes";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix3f, $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/client/scene" {
    export class $ISceneBlockRenderHook {
    }
    export interface $ISceneBlockRenderHook {
        apply(arg0: $RenderType): void;
        applyVertexConsumerWrapper(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $WorldSceneRenderer$VertexConsumerWrapper, arg4: $RenderType, arg5: number): void;
        applyBESR(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $PoseStack, arg4: number): void;
    }
    export class $ISceneEntityRenderHook {
    }
    export interface $ISceneEntityRenderHook {
        applyEntity(arg0: $Level_, arg1: $Entity, arg2: $PoseStack, arg3: number): void;
    }
    export class $WorldSceneRenderer {
        render(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        rayTrace(arg0: $Vector3f): $BlockHitResult;
        getParticleManager(): $ParticleManager;
        setCameraLookAt(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f): void;
        setCameraLookAt(arg0: $Vector3f, arg1: number, arg2: number, arg3: number): void;
        useCacheBuffer(arg0: boolean): $WorldSceneRenderer;
        setBeforeBatchEnd(arg0: $BiConsumer_<$MultiBufferSource, number>): $WorldSceneRenderer;
        setClipFluid(arg0: $ClipContext$Fluid_): $WorldSceneRenderer;
        setCameraOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setCameraOrtho(arg0: number, arg1: number, arg2: number): void;
        isCompiling(): boolean;
        releaseResource(): void;
        getLastTraceResult(): $BlockHitResult;
        needCompileCache(): $WorldSceneRenderer;
        setParticleManager(arg0: $ParticleManager): $WorldSceneRenderer;
        getCompileProgress(): number;
        syncCompile(arg0: boolean): $WorldSceneRenderer;
        addRenderedBlocks(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $WorldSceneRenderer;
        setClipBlock(arg0: $ClipContext$Block_): $WorldSceneRenderer;
        isSyncCompile(): boolean;
        getPositionRectRevert(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        removeAllRenderedBlocks(): $WorldSceneRenderer;
        static setDefaultRenderLayerState(arg0: $RenderType): void;
        setSceneEntityRenderHook(arg0: $ISceneEntityRenderHook): $WorldSceneRenderer;
        project(arg0: $Vector3f): $Vector3f;
        setOnLookingAt(arg0: $Consumer_<$BlockHitResult>): $WorldSceneRenderer;
        setBlocked(arg0: $Set_<$BlockPos_>): $WorldSceneRenderer;
        getFov(): number;
        setBeforeWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        removeRenderedBlocks(arg0: $Collection_<$BlockPos_>): $WorldSceneRenderer;
        setAfterWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        useOrtho(arg0: boolean): $WorldSceneRenderer;
        getEyePos(): $Vector3f;
        isUseCache(): boolean;
        unProject(arg0: number, arg1: number): $Vector3f;
        unProject(arg0: number, arg1: number, arg2: boolean): $Vector3f;
        getLookAt(): $Vector3f;
        getLastHit(): $Vector3f;
        getWorldUp(): $Vector3f;
        setSyncCompileMaxBlocksPerFrame(arg0: number): $WorldSceneRenderer;
        getSyncCompileTimeBudgetNanos(): number;
        getSyncCompileMaxBlocksPerFrame(): number;
        setSyncCompileTimeBudgetNanos(arg0: number): $WorldSceneRenderer;
        deleteCacheBuffer(): $WorldSceneRenderer;
        getPositionedRect(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        setEndBatchLast(arg0: boolean): $WorldSceneRenderer;
        isEndBatchLast(): boolean;
        setFov(arg0: number): $WorldSceneRenderer;
        world: $Level;
        renderedBlocksMap: $Map<$Collection<$BlockPos>, $WorldSceneRenderer$RenderedBlocksEntry>;
        constructor(arg0: $Level_);
        set beforeBatchEnd(value: $BiConsumer_<$MultiBufferSource, number>);
        set clipFluid(value: $ClipContext$Fluid_);
        get compiling(): boolean;
        get lastTraceResult(): $BlockHitResult;
        get compileProgress(): number;
        set clipBlock(value: $ClipContext$Block_);
        static set defaultRenderLayerState(value: $RenderType);
        set sceneEntityRenderHook(value: $ISceneEntityRenderHook);
        set onLookingAt(value: $Consumer_<$BlockHitResult>);
        set blocked(value: $Set_<$BlockPos_>);
        set beforeWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set afterWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        get eyePos(): $Vector3f;
        get useCache(): boolean;
        get lookAt(): $Vector3f;
        get lastHit(): $Vector3f;
        get worldUp(): $Vector3f;
    }
    export class $WorldSceneRenderer$RenderedBlocksEntry extends $Record {
        snapshot(): $Set<$BlockPos>;
        hook(): $ISceneBlockRenderHook;
        constructor(snapshot: $Set_<$BlockPos_>, hook: $ISceneBlockRenderHook);
    }
    export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        addOffset(arg0: number, arg1: number, arg2: number): void;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        clearColor(): void;
        setOffsetX(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setOffsetY(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setOffsetZ(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        clearOffset(): void;
        setColorMultiplier(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        isAccelerated(): boolean;
        setLight(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        getLayout(): $IMemoryLayout<$VertexFormatElement>;
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPolygonSize(): number;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        downloadTexture(): $NativeImage;
        endTransform(): void;
        getRenderType(): $RenderType;
        doRender<T>(arg0: $IAcceleratedRenderer_<T>, arg1: T, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        constructor(arg0: $VertexConsumer);
        set offsetX(value: number);
        set offsetY(value: number);
        set offsetZ(value: number);
        set overlay(value: number);
        set whiteAlpha(value: number);
        get accelerated(): boolean;
        set light(value: number);
        get layout(): $IMemoryLayout<$VertexFormatElement>;
        get polygonSize(): number;
        get renderType(): $RenderType;
    }
    export class $ParticleManager {
        tick(): void;
        setLevel(arg0: $Level_): void;
        render(arg0: $PoseStack, arg1: $Camera, arg2: number, arg3: $Predicate_<$ParticleRenderType>): void;
        getParticleAmount(): number;
        addParticle(arg0: $Particle): void;
        static makeParticleRenderTypeComparator(arg0: $List_<$ParticleRenderType_>): $Comparator<$ParticleRenderType>;
        clearAllParticles(): void;
        level: $Level;
        constructor();
        get particleAmount(): number;
    }
}
