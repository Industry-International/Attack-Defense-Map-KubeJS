import { $ClipContext$Block_, $Level, $ClipContext$Fluid_, $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ParticleRenderType_, $ParticleRenderType, $Particle } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Camera } from "@package/net/minecraft/client";
import { $Comparator, $Map, $Set, $Set_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $PositionedRect } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Consumer_, $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $VertexConsumer, $VertexFormatElement_, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
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
        setOnLookingAt(arg0: $Consumer_<$BlockHitResult>): $WorldSceneRenderer;
        render(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getParticleManager(): $ParticleManager;
        project(arg0: $Vector3f): $Vector3f;
        setBlocked(arg0: $Set_<$BlockPos_>): $WorldSceneRenderer;
        isUseCache(): boolean;
        useOrtho(arg0: boolean): $WorldSceneRenderer;
        getEyePos(): $Vector3f;
        rayTrace(arg0: $Vector3f): $BlockHitResult;
        setFov(arg0: number): $WorldSceneRenderer;
        isSyncCompile(): boolean;
        setBeforeWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        removeRenderedBlocks(arg0: $Collection_<$BlockPos_>): $WorldSceneRenderer;
        setAfterWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        getFov(): number;
        setClipFluid(arg0: $ClipContext$Fluid_): $WorldSceneRenderer;
        setCameraLookAt(arg0: $Vector3f, arg1: number, arg2: number, arg3: number): void;
        setCameraLookAt(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f): void;
        addRenderedBlocks(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $WorldSceneRenderer;
        setBeforeBatchEnd(arg0: $BiConsumer_<$MultiBufferSource, number>): $WorldSceneRenderer;
        getLastTraceResult(): $BlockHitResult;
        setParticleManager(arg0: $ParticleManager): $WorldSceneRenderer;
        syncCompile(arg0: boolean): $WorldSceneRenderer;
        useCacheBuffer(arg0: boolean): $WorldSceneRenderer;
        needCompileCache(): $WorldSceneRenderer;
        isCompiling(): boolean;
        getCompileProgress(): number;
        setCameraOrtho(arg0: number, arg1: number, arg2: number): void;
        setCameraOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        releaseResource(): void;
        setClipBlock(arg0: $ClipContext$Block_): $WorldSceneRenderer;
        removeAllRenderedBlocks(): $WorldSceneRenderer;
        getPositionRectRevert(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        static setDefaultRenderLayerState(arg0: $RenderType): void;
        setSceneEntityRenderHook(arg0: $ISceneEntityRenderHook): $WorldSceneRenderer;
        setSyncCompileTimeBudgetNanos(arg0: number): $WorldSceneRenderer;
        getSyncCompileTimeBudgetNanos(): number;
        getSyncCompileMaxBlocksPerFrame(): number;
        setSyncCompileMaxBlocksPerFrame(arg0: number): $WorldSceneRenderer;
        deleteCacheBuffer(): $WorldSceneRenderer;
        getPositionedRect(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        setEndBatchLast(arg0: boolean): $WorldSceneRenderer;
        isEndBatchLast(): boolean;
        getLookAt(): $Vector3f;
        getWorldUp(): $Vector3f;
        getLastHit(): $Vector3f;
        unProject(arg0: number, arg1: number): $Vector3f;
        unProject(arg0: number, arg1: number, arg2: boolean): $Vector3f;
        world: $Level;
        renderedBlocksMap: $Map<$Collection<$BlockPos>, $WorldSceneRenderer$RenderedBlocksEntry>;
        constructor(arg0: $Level_);
        set onLookingAt(value: $Consumer_<$BlockHitResult>);
        set blocked(value: $Set_<$BlockPos_>);
        get useCache(): boolean;
        get eyePos(): $Vector3f;
        set beforeWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set afterWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set clipFluid(value: $ClipContext$Fluid_);
        set beforeBatchEnd(value: $BiConsumer_<$MultiBufferSource, number>);
        get lastTraceResult(): $BlockHitResult;
        get compiling(): boolean;
        get compileProgress(): number;
        set clipBlock(value: $ClipContext$Block_);
        static set defaultRenderLayerState(value: $RenderType);
        set sceneEntityRenderHook(value: $ISceneEntityRenderHook);
        get lookAt(): $Vector3f;
        get worldUp(): $Vector3f;
        get lastHit(): $Vector3f;
    }
    export class $WorldSceneRenderer$RenderedBlocksEntry extends $Record {
        snapshot(): $Set<$BlockPos>;
        hook(): $ISceneBlockRenderHook;
        constructor(snapshot: $Set_<$BlockPos_>, hook: $ISceneBlockRenderHook);
    }
    export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setColorMultiplier(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setOffsetY(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setOffsetX(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        addOffset(arg0: number, arg1: number, arg2: number): void;
        clearColor(): void;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        clearOffset(): void;
        setOffsetZ(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        wrapMethod$cob000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$cob000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        setOverlay(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        constructor(arg0: $VertexConsumer);
        set offsetY(value: number);
        set offsetX(value: number);
        set offsetZ(value: number);
        set whiteAlpha(value: number);
        set overlay(value: number);
        set light(value: number);
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
