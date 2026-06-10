import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource_, $BlockEntityWithoutLevelRenderer, $RenderType } from "@package/net/minecraft/client/renderer";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $BakedModel, $ModelResourceLocation, $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Map_, $BitSet, $Collection } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Comparable_, $ThreadLocal, $Enum } from "@package/java/lang";
import { $ModelBlockRendererCacheExtension } from "@package/dev/ryanhcode/sable/mixinterface/dynamic_directional_shading";
export * as model from "@package/net/minecraft/client/renderer/block/model";

declare module "@package/net/minecraft/client/renderer/block" {
    export class $ModelBlockRenderer$Cache implements $ModelBlockRendererCacheExtension {
        enable(): void;
        getLightColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        disable(): void;
        getShadeBrightness(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        sable$setOnSubLevel(arg0: boolean): void;
        sable$getOnSubLevel(): boolean;
    }
    export class $BlockRenderDispatcher implements $ResourceManagerReloadListener, $IdentifiableResourceReloadListener {
        getBlockModelShaper(): $BlockModelShaper;
        getFabricDependencies(): $Collection<any>;
        renderBreakingTexture(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer, arg5: $ModelData): void;
        /**
         * @deprecated
         */
        renderBreakingTexture(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer): void;
        getBlockModel(arg0: $BlockState_): $BakedModel;
        getFabricId(): $ResourceLocation;
        /**
         * @deprecated
         */
        renderSingleBlock(arg0: $BlockState_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number): void;
        renderSingleBlock(arg0: $BlockState_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number, arg5: $ModelData, arg6: $RenderType): void;
        onResourceManagerReload(arg0: $ResourceManager): void;
        getModelRenderer(): $ModelBlockRenderer;
        wrapMethod$cnj000$aeronautics$renderBreakingTexture(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer, arg5: $ModelData, arg6: $Operation_<any>): void;
        getLiquidBlockRenderer(): $LiquidBlockRenderer;
        renderBatched(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer, arg5: boolean, arg6: $RandomSource): void;
        renderBatched(arg0: $BlockState_, arg1: $BlockPos_, arg2: $BlockAndTintGetter, arg3: $PoseStack, arg4: $VertexConsumer, arg5: boolean, arg6: $RandomSource, arg7: $ModelData, arg8: $RenderType): void;
        renderLiquid(arg0: $BlockPos_, arg1: $BlockAndTintGetter, arg2: $VertexConsumer, arg3: $BlockState_, arg4: $FluidState): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        modelRenderer: $ModelBlockRenderer;
        constructor(arg0: $BlockModelShaper, arg1: $BlockEntityWithoutLevelRenderer, arg2: $BlockColors);
        get blockModelShaper(): $BlockModelShaper;
        get fabricDependencies(): $Collection<any>;
        get fabricId(): $ResourceLocation;
        get liquidBlockRenderer(): $LiquidBlockRenderer;
        get name(): string;
    }
    export class $ModelBlockRenderer$AmbientVertexRemap extends $Enum<$ModelBlockRenderer$AmbientVertexRemap> {
    }
    /**
     * Values that may be interpreted as {@link $ModelBlockRenderer$AmbientVertexRemap}.
     */
    export type $ModelBlockRenderer$AmbientVertexRemap_ = "down" | "up" | "north" | "south" | "west" | "east";
    export class $ModelBlockRenderer$AmbientOcclusionFace {
        calculate(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Direction_, arg4: number[], arg5: $BitSet, arg6: boolean): void;
        brightness: number[];
        lightmap: number[];
        constructor();
    }
    export class $ModelBlockRenderer$SizeInfo extends $Enum<$ModelBlockRenderer$SizeInfo> {
    }
    /**
     * Values that may be interpreted as {@link $ModelBlockRenderer$SizeInfo}.
     */
    export type $ModelBlockRenderer$SizeInfo_ = "down" | "up" | "north" | "south" | "west" | "east" | "flip_down" | "flip_up" | "flip_north" | "flip_south" | "flip_west" | "flip_east";
    export class $ModelBlockRenderer {
        static clearCache(): void;
        wrapOperation$hgf000$sable$getShade(arg0: $BlockAndTintGetter, arg1: $Direction_, arg2: boolean, arg3: $Operation_<any>): number;
        calculateShape(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: number[], arg4: $Direction_, arg5: number[], arg6: $BitSet): void;
        renderModel(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $BlockState_, arg3: $BakedModel, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $ModelData, arg10: $RenderType): void;
        /**
         * @deprecated
         */
        renderModel(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $BlockState_, arg3: $BakedModel, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        handler$cij000$acceleratedrendering$renderModelFast(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $BlockState_, arg3: $BakedModel, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $ModelData, arg10: $RenderType, arg11: $CallbackInfo): void;
        tesselateBlock(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number, arg10: $ModelData, arg11: $RenderType): void;
        /**
         * @deprecated
         */
        tesselateBlock(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number): void;
        static enableCaching(): void;
        tesselateWithoutAO(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number, arg10: $ModelData, arg11: $RenderType): void;
        /**
         * @deprecated
         */
        tesselateWithoutAO(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number): void;
        /**
         * @deprecated
         */
        tesselateWithAO(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number): void;
        tesselateWithAO(arg0: $BlockAndTintGetter, arg1: $BakedModel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer, arg6: boolean, arg7: $RandomSource, arg8: number, arg9: number, arg10: $ModelData, arg11: $RenderType): void;
        static CACHE: $ThreadLocal<$ModelBlockRenderer$Cache>;
        static DIRECTIONS: $Direction[];
        constructor(arg0: $BlockColors);
    }
    export class $BlockModelShaper {
        getTexture(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getParticleIcon(arg0: $BlockState_): $TextureAtlasSprite;
        getModelManager(): $ModelManager;
        getBlockModel(arg0: $BlockState_): $BakedModel;
        static statePropertiesToString(arg0: $Map_<$Property<never>, $Comparable_<never>>): string;
        static stateToModelLocation(arg0: $BlockState_): $ModelResourceLocation;
        static stateToModelLocation(arg0: $ResourceLocation_, arg1: $BlockState_): $ModelResourceLocation;
        replaceCache(arg0: $Map_<$BlockState_, $BakedModel>): void;
        constructor(arg0: $ModelManager);
        get modelManager(): $ModelManager;
    }
    export class $LiquidBlockRenderer {
        static shouldRenderFace(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockState_, arg4: $Direction_, arg5: $FluidState): boolean;
        static shouldRenderFace(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockState_): boolean;
        handler$zjf000$fabric_rendering_fluids_v1$onHeadRender(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $VertexConsumer, arg3: $BlockState_, arg4: $FluidState, arg5: $CallbackInfo): void;
        handler$zjf000$fabric_rendering_fluids_v1$onResourceReloadReturn(arg0: $CallbackInfo): void;
        setupSprites(): void;
        tesselate(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $VertexConsumer, arg3: $BlockState_, arg4: $FluidState): void;
        constructor();
    }
    export class $ModelBlockRenderer$AdjacencyInfo extends $Enum<$ModelBlockRenderer$AdjacencyInfo> {
    }
    /**
     * Values that may be interpreted as {@link $ModelBlockRenderer$AdjacencyInfo}.
     */
    export type $ModelBlockRenderer$AdjacencyInfo_ = "down" | "up" | "north" | "south" | "west" | "east";
}
