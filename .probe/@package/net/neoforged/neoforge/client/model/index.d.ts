import { $JsonDeserializationContext_, $JsonObject_, $Gson, $JsonElement_ } from "@package/com/google/gson";
import { $RenderType, $ItemModelShaper } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $SimpleBakedModel, $ModelState, $BakedModel, $ModelResourceLocation, $ModelManager, $ModelBaker, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $IAcceleratedVertexConsumer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $RenderTypeGroup, $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IAcceleratedBakedModel } from "@package/com/github/argon4w/acceleratedrendering/features/items";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $IGeometryLoader, $IGeometryBakingContext, $SimpleUnbakedGeometry, $IUnbakedGeometry } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $BlockModel, $BlockElement, $ItemOverrides, $BakedQuad, $ItemTransforms, $BlockModel$Deserializer } from "@package/net/minecraft/client/renderer/block/model";
import { $ImmutableList, $ImmutableMap } from "@package/com/google/common/collect";
import { $ModelData, $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Transformation } from "@package/com/mojang/math";
export * as generators from "@package/net/neoforged/neoforge/client/model/generators";
export * as obj from "@package/net/neoforged/neoforge/client/model/obj";
export * as renderable from "@package/net/neoforged/neoforge/client/model/renderable";
export * as pipeline from "@package/net/neoforged/neoforge/client/model/pipeline";
export * as lighting from "@package/net/neoforged/neoforge/client/model/lighting";
export * as data from "@package/net/neoforged/neoforge/client/model/data";
export * as geometry from "@package/net/neoforged/neoforge/client/model/geometry";

declare module "@package/net/neoforged/neoforge/client/model" {
    export class $QuadTransformers {
        static empty(): $IQuadTransformer;
        static applying(arg0: $Transformation): $IQuadTransformer;
        static toABGR(arg0: number): number;
        static applyingLightmap(arg0: number, arg1: number): $IQuadTransformer;
        static applyingLightmap(arg0: number): $IQuadTransformer;
        static applyingColor(arg0: number, arg1: number, arg2: number, arg3: number): $IQuadTransformer;
        static applyingColor(arg0: number): $IQuadTransformer;
        static applyingColor(arg0: number, arg1: number, arg2: number): $IQuadTransformer;
        static settingEmissivity(arg0: number): $IQuadTransformer;
        static settingMaxEmissivity(): $IQuadTransformer;
        static set tingEmissivity(value: number);
    }
    export class $ItemLayerModel implements $IUnbakedGeometry<$ItemLayerModel> {
        bake(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        getConfigurableComponentNames(): $Set<string>;
        get configurableComponentNames(): $Set<string>;
    }
    export class $SeparateTransformsModel$Baked implements $IDynamicBakedModel, $IAcceleratedBakedModel {
        getOverrides(): $ItemOverrides;
        getParticleIcon(): $TextureAtlasSprite;
        isAcceleratedInHand(): boolean;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        isAccelerated(): boolean;
        useAmbientOcclusion(): boolean;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isAcceleratedInGui(): boolean;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getCustomColor(arg0: number, arg1: number): number;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        isVanillaAdapter(): boolean;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $TextureAtlasSprite, arg4: $ItemOverrides, arg5: $BakedModel, arg6: $ImmutableMap<$ItemDisplayContext_, $BakedModel>);
        get overrides(): $ItemOverrides;
        get acceleratedInHand(): boolean;
        get gui3d(): boolean;
        get accelerated(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get acceleratedInGui(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ElementsModel extends $SimpleUnbakedGeometry<$ElementsModel> {
        constructor(arg0: $List_<$BlockElement>);
    }
    export class $ExtendedBlockModelDeserializer extends $BlockModel$Deserializer {
        static deserializeGeometry(arg0: $JsonDeserializationContext_, arg1: $JsonObject_): $IUnbakedGeometry<never>;
        static INSTANCE: $Gson;
        constructor();
    }
    export class $ItemLayerModel$Loader implements $IGeometryLoader<$ItemLayerModel> {
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): $ItemLayerModel;
        static INSTANCE: $ItemLayerModel$Loader;
        constructor();
    }
    export class $SeparateTransformsModel implements $IUnbakedGeometry<$SeparateTransformsModel> {
        bake(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        getConfigurableComponentNames(): $Set<string>;
        constructor(arg0: $BlockModel, arg1: $ImmutableMap<$ItemDisplayContext_, $BlockModel>);
        get configurableComponentNames(): $Set<string>;
    }
    export class $DynamicFluidContainerModel$ContainedFluidOverrideHandler extends $ItemOverrides {
        static NO_OVERRIDE: number;
        static EMPTY: $ItemOverrides;
    }
    export class $IModelBuilder$Simple implements $IModelBuilder<$IModelBuilder$Simple> {
        /**
         * @deprecated
         */
        build(): $BakedModel;
        addCulledFace(arg0: $Direction_, arg1: $BakedQuad): $IModelBuilder$Simple;
        addUnculledFace(arg0: $BakedQuad): $IModelBuilder$Simple;
    }
    export class $ElementsModel$Loader implements $IGeometryLoader<$ElementsModel> {
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): $ElementsModel;
        static INSTANCE: $ElementsModel$Loader;
    }
    export class $EmptyModel extends $SimpleUnbakedGeometry<$EmptyModel> {
        static INSTANCE: $EmptyModel;
        static BAKED: $BakedModel;
        static LOADER: $IGeometryLoader<$EmptyModel>;
    }
    export class $IQuadTransformer {
        static UV2: number;
        static STRIDE: number;
        static POSITION: number;
        static UV1: number;
        static COLOR: number;
        static UV0: number;
        static NORMAL: number;
    }
    export interface $IQuadTransformer {
        andThen(arg0: $IQuadTransformer_): $IQuadTransformer;
        process(arg0: $List_<$BakedQuad>): $List<$BakedQuad>;
        process(arg0: $BakedQuad): $BakedQuad;
        processInPlace(arg0: $BakedQuad): void;
        processInPlace(arg0: $List_<$BakedQuad>): void;
    }
    /**
     * Values that may be interpreted as {@link $IQuadTransformer}.
     */
    export type $IQuadTransformer_ = ((arg0: $BakedQuad) => void);
    export class $IModelBuilder$Collecting implements $IModelBuilder<$IModelBuilder$Collecting> {
        build(): $BakedModel;
        addCulledFace(arg0: $Direction_, arg1: $BakedQuad): $IModelBuilder$Collecting;
        addUnculledFace(arg0: $BakedQuad): $IModelBuilder$Collecting;
    }
    export class $CompositeModel$Loader implements $IGeometryLoader<$CompositeModel> {
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): $CompositeModel;
        static INSTANCE: $CompositeModel$Loader;
    }
    export class $ExtraFaceData extends $Record {
        static read(arg0: $JsonElement_, arg1: $ExtraFaceData_): $ExtraFaceData;
        color(): number;
        blockLight(): number;
        ambientOcclusion(): boolean;
        skyLight(): number;
        static CODEC: $Codec<$ExtraFaceData>;
        static COLOR: $Codec<number>;
        static DEFAULT: $ExtraFaceData;
        constructor(color: number, blockLight: number, skyLight: number, ambientOcclusion: boolean);
    }
    export class $SimpleModelState implements $ModelState {
        getRotation(): $Transformation;
        isUvLocked(): boolean;
        mayApplyArbitraryRotation(): boolean;
        constructor(arg0: $Transformation, arg1: boolean);
        constructor(arg0: $Transformation);
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    export class $CompositeModel$Data {
        get(arg0: string): $ModelData;
        static builder(): $CompositeModel$Data$Builder;
        static resolve(arg0: $ModelData, arg1: string): $ModelData;
        static PROPERTY: $ModelProperty<$CompositeModel$Data>;
    }
    export class $IDynamicBakedModel {
    }
    export interface $IDynamicBakedModel extends $BakedModel {
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
    }
    export class $BakedModelWrapper<T extends $BakedModel> implements $BakedModel {
        getOverrides(): $ItemOverrides;
        getParticleIcon(): $TextureAtlasSprite;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        useAmbientOcclusion(): boolean;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        isAcceleratedInHand(): boolean;
        isAccelerated(): boolean;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isAcceleratedInGui(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getCustomColor(arg0: number, arg1: number): number;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        isVanillaAdapter(): boolean;
        constructor(arg0: T);
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get acceleratedInHand(): boolean;
        get accelerated(): boolean;
        get acceleratedInGui(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $CompositeModel$Baked implements $IDynamicBakedModel, $IAcceleratedBakedModel {
        static builder(arg0: $IGeometryBakingContext, arg1: $TextureAtlasSprite, arg2: $ItemOverrides, arg3: $ItemTransforms): $CompositeModel$Baked$Builder;
        static builder(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $TextureAtlasSprite, arg4: $ItemOverrides, arg5: $ItemTransforms): $CompositeModel$Baked$Builder;
        getChildren(): $ImmutableMap<any, any>;
        getPart(arg0: string): $BakedModel;
        getOverrides(): $ItemOverrides;
        getParticleIcon(): $TextureAtlasSprite;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        isAcceleratedInHand(): boolean;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        isAccelerated(): boolean;
        useAmbientOcclusion(): boolean;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isAcceleratedInGui(): boolean;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getCustomColor(arg0: number, arg1: number): number;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        handler$cif000$acceleratedrendering$checkAccelerationSupport(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $TextureAtlasSprite, arg4: $ItemTransforms, arg5: $ItemOverrides, arg6: $ImmutableMap<any, any>, arg7: $ImmutableList<any>, arg8: $CallbackInfo): void;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        isVanillaAdapter(): boolean;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $TextureAtlasSprite, arg4: $ItemTransforms, arg5: $ItemOverrides, arg6: $ImmutableMap<string, $BakedModel>, arg7: $ImmutableList<$BakedModel>);
        get children(): $ImmutableMap<any, any>;
        get overrides(): $ItemOverrides;
        get acceleratedInHand(): boolean;
        get gui3d(): boolean;
        get accelerated(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get acceleratedInGui(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $CompositeModel$Data$Builder {
        "with"(arg0: string, arg1: $ModelData): $CompositeModel$Data$Builder;
        build(): $CompositeModel$Data;
        constructor();
    }
    export class $SeparateTransformsModel$Loader implements $IGeometryLoader<$SeparateTransformsModel> {
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): $SeparateTransformsModel;
        static INSTANCE: $SeparateTransformsModel$Loader;
    }
    export class $EmptyModel$Baked extends $SimpleBakedModel {
        itemRenderTypes: $List<$RenderType>;
        fabulousItemRenderTypes: $List<$RenderType>;
        unculledFaces: $List<$BakedQuad>;
        culledFaces: $Map<$Direction, $List<$BakedQuad>>;
        particleIcon: $TextureAtlasSprite;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        blockRenderTypes: $ChunkRenderTypeSet;
        overrides: $ItemOverrides;
    }
    export class $IModelBuilder<T extends $IModelBuilder<T>> {
        static of(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $ItemTransforms, arg4: $ItemOverrides, arg5: $TextureAtlasSprite, arg6: $RenderTypeGroup_): $IModelBuilder<never>;
        static collecting(arg0: $List_<$BakedQuad>): $IModelBuilder<never>;
    }
    export interface $IModelBuilder<T extends $IModelBuilder<T>> {
        build(): $BakedModel;
        addUnculledFace(arg0: $BakedQuad): T;
        addCulledFace(arg0: $Direction_, arg1: $BakedQuad): T;
    }
    export class $RegistryAwareItemModelShaper extends $ItemModelShaper {
        getLocation(arg0: $ItemStack_): $ModelResourceLocation;
        shapes: $Int2ObjectMap<$ModelResourceLocation>;
        constructor(arg0: $ModelManager);
    }
    export class $CompositeModel$Baked$Builder {
        build(): $BakedModel;
        addLayer(arg0: $BakedModel): void;
        setParticle(arg0: $TextureAtlasSprite): $CompositeModel$Baked$Builder;
        addQuads(arg0: $RenderTypeGroup_, arg1: $Collection_<$BakedQuad>): $CompositeModel$Baked$Builder;
        addQuads(arg0: $RenderTypeGroup_, ...arg1: $BakedQuad[]): $CompositeModel$Baked$Builder;
        set particle(value: $TextureAtlasSprite);
    }
    export class $DynamicFluidContainerModel$Colors implements $ItemColor {
        getColor(arg0: $ItemStack_, arg1: number): number;
        constructor();
    }
    export class $DynamicFluidContainerModel implements $IUnbakedGeometry<$DynamicFluidContainerModel> {
        bake(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel;
        static getLayerRenderTypes(arg0: boolean): $RenderTypeGroup;
        withFluid(arg0: $Fluid_): $DynamicFluidContainerModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        getConfigurableComponentNames(): $Set<string>;
        get configurableComponentNames(): $Set<string>;
    }
    export class $CompositeModel implements $IUnbakedGeometry<$CompositeModel> {
        bake(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        getConfigurableComponentNames(): $Set<string>;
        constructor(arg0: $ImmutableMap<string, $BlockModel>, arg1: $ImmutableList<string>);
        get configurableComponentNames(): $Set<string>;
    }
    export class $DynamicFluidContainerModel$Loader implements $IGeometryLoader<$DynamicFluidContainerModel> {
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): $DynamicFluidContainerModel;
        static INSTANCE: $DynamicFluidContainerModel$Loader;
    }
}
