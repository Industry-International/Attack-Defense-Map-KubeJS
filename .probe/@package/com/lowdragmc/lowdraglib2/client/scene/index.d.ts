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
        applyBESR(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $PoseStack, arg4: number): void;
        applyVertexConsumerWrapper(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $WorldSceneRenderer$VertexConsumerWrapper, arg4: $RenderType, arg5: number): void;
    }
    export class $ISceneEntityRenderHook {
    }
    export interface $ISceneEntityRenderHook {
        applyEntity(arg0: $Level_, arg1: $Entity, arg2: $PoseStack, arg3: number): void;
    }
    export class $WorldSceneRenderer {
        getParticleManager(): $ParticleManager;
        render(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        rayTrace(arg0: $Vector3f): $BlockHitResult;
        useOrtho(arg0: boolean): $WorldSceneRenderer;
        isUseCache(): boolean;
        getEyePos(): $Vector3f;
        setFov(arg0: number): $WorldSceneRenderer;
        setBlocked(arg0: $Set_<$BlockPos_>): $WorldSceneRenderer;
        isSyncCompile(): boolean;
        setBeforeBatchEnd(arg0: $BiConsumer_<$MultiBufferSource, number>): $WorldSceneRenderer;
        setClipFluid(arg0: $ClipContext$Fluid_): $WorldSceneRenderer;
        setClipBlock(arg0: $ClipContext$Block_): $WorldSceneRenderer;
        useCacheBuffer(arg0: boolean): $WorldSceneRenderer;
        isCompiling(): boolean;
        syncCompile(arg0: boolean): $WorldSceneRenderer;
        setCameraOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setCameraOrtho(arg0: number, arg1: number, arg2: number): void;
        needCompileCache(): $WorldSceneRenderer;
        setCameraLookAt(arg0: $Vector3f, arg1: number, arg2: number, arg3: number): void;
        setCameraLookAt(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f): void;
        getLastTraceResult(): $BlockHitResult;
        releaseResource(): void;
        getCompileProgress(): number;
        setParticleManager(arg0: $ParticleManager): $WorldSceneRenderer;
        addRenderedBlocks(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $WorldSceneRenderer;
        getFov(): number;
        setAfterWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        removeRenderedBlocks(arg0: $Collection_<$BlockPos_>): $WorldSceneRenderer;
        setBeforeWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        project(arg0: $Vector3f): $Vector3f;
        setOnLookingAt(arg0: $Consumer_<$BlockHitResult>): $WorldSceneRenderer;
        getSyncCompileTimeBudgetNanos(): number;
        setSyncCompileTimeBudgetNanos(arg0: number): $WorldSceneRenderer;
        setSyncCompileMaxBlocksPerFrame(arg0: number): $WorldSceneRenderer;
        getSyncCompileMaxBlocksPerFrame(): number;
        unProject(arg0: number, arg1: number): $Vector3f;
        unProject(arg0: number, arg1: number, arg2: boolean): $Vector3f;
        getLookAt(): $Vector3f;
        getWorldUp(): $Vector3f;
        getLastHit(): $Vector3f;
        static setDefaultRenderLayerState(arg0: $RenderType): void;
        setSceneEntityRenderHook(arg0: $ISceneEntityRenderHook): $WorldSceneRenderer;
        removeAllRenderedBlocks(): $WorldSceneRenderer;
        getPositionRectRevert(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        getPositionedRect(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        deleteCacheBuffer(): $WorldSceneRenderer;
        setEndBatchLast(arg0: boolean): $WorldSceneRenderer;
        isEndBatchLast(): boolean;
        world: $Level;
        renderedBlocksMap: $Map<$Collection<$BlockPos>, $WorldSceneRenderer$RenderedBlocksEntry>;
        constructor(arg0: $Level_);
        get useCache(): boolean;
        get eyePos(): $Vector3f;
        set blocked(value: $Set_<$BlockPos_>);
        set beforeBatchEnd(value: $BiConsumer_<$MultiBufferSource, number>);
        set clipFluid(value: $ClipContext$Fluid_);
        set clipBlock(value: $ClipContext$Block_);
        get compiling(): boolean;
        get lastTraceResult(): $BlockHitResult;
        get compileProgress(): number;
        set afterWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set beforeWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set onLookingAt(value: $Consumer_<$BlockHitResult>);
        get lookAt(): $Vector3f;
        get worldUp(): $Vector3f;
        get lastHit(): $Vector3f;
        static set defaultRenderLayerState(value: $RenderType);
        set sceneEntityRenderHook(value: $ISceneEntityRenderHook);
    }
    export class $WorldSceneRenderer$RenderedBlocksEntry extends $Record {
        snapshot(): $Set<$BlockPos>;
        hook(): $ISceneBlockRenderHook;
        constructor(snapshot: $Set_<$BlockPos_>, hook: $ISceneBlockRenderHook);
    }
    export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addOffset(arg0: number, arg1: number, arg2: number): void;
        clearColor(): void;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setOffsetY(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setOffsetX(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        setOffsetZ(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        clearOffset(): void;
        setColorMultiplier(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setColor(arg0: number): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        setOverlay(arg0: number): $VertexConsumer;
        isAccelerated(): boolean;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        getLayout(): $IMemoryLayout<$VertexFormatElement>;
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        getRenderType(): $RenderType;
        endTransform(): void;
        downloadTexture(): $NativeImage;
        getPolygonSize(): number;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        doRender<T>(arg0: $IAcceleratedRenderer_<T>, arg1: T, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        constructor(arg0: $VertexConsumer);
        set offsetY(value: number);
        set offsetX(value: number);
        set offsetZ(value: number);
        set overlay(value: number);
        get accelerated(): boolean;
        set whiteAlpha(value: number);
        set light(value: number);
        get layout(): $IMemoryLayout<$VertexFormatElement>;
        get renderType(): $RenderType;
        get polygonSize(): number;
    }
    export class $ParticleManager {
        tick(): void;
        setLevel(arg0: $Level_): void;
        render(arg0: $PoseStack, arg1: $Camera, arg2: number, arg3: $Predicate_<$ParticleRenderType>): void;
        getParticleAmount(): number;
        addParticle(arg0: $Particle): void;
        clearAllParticles(): void;
        static makeParticleRenderTypeComparator(arg0: $List_<$ParticleRenderType_>): $Comparator<$ParticleRenderType>;
        level: $Level;
        constructor();
        get particleAmount(): number;
    }
}
