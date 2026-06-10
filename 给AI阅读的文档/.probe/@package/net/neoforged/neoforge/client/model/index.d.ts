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
        static toABGR(arg0: number): number;
        static applying(arg0: $Transformation): $IQuadTransformer;
        static settingMaxEmissivity(): $IQuadTransformer;
        static applyingLightmap(arg0: number, arg1: number): $IQuadTransformer;
        static applyingLightmap(arg0: number): $IQuadTransformer;
        static applyingColor(arg0: number): $IQuadTransformer;
        static applyingColor(arg0: number, arg1: number, arg2: number, arg3: number): $IQuadTransformer;
        static applyingColor(arg0: number, arg1: number, arg2: number): $IQuadTransformer;
        static settingEmissivity(arg0: number): $IQuadTransformer;
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
        isAcceleratedInHand(): boolean;
        useAmbientOcclusion(): boolean;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isCustomRenderer(): boolean;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        getTransforms(): $ItemTransforms;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        isAcceleratedInGui(): boolean;
        getCustomColor(arg0: number, arg1: number): number;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getParticleIcon(): $TextureAtlasSprite;
        isAccelerated(): boolean;
        usesBlockLight(): boolean;
        isGui3d(): boolean;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        isVanillaAdapter(): boolean;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $TextureAtlasSprite, arg4: $ItemOverrides, arg5: $BakedModel, arg6: $ImmutableMap<$ItemDisplayContext_, $BakedModel>);
        get overrides(): $ItemOverrides;
        get acceleratedInHand(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get acceleratedInGui(): boolean;
        get accelerated(): boolean;
        get gui3d(): boolean;
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
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        bake(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel;
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
        skyLight(): number;
        blockLight(): number;
        ambientOcclusion(): boolean;
        static CODEC: $Codec<$ExtraFaceData>;
        static COLOR: $Codec<number>;
        static DEFAULT: $ExtraFaceData;
        constructor(color: number, blockLight: number, skyLight: number, ambientOcclusion: boolean);
    }
    export class $SimpleModelState implements $ModelState {
        isUvLocked(): boolean;
        getRotation(): $Transformation;
        mayApplyArbitraryRotation(): boolean;
        constructor(arg0: $Transformation, arg1: boolean);
        constructor(arg0: $Transformation);
        get uvLocked(): boolean;
        get rotation(): $Transformation;
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
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getParticleIcon(): $TextureAtlasSprite;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        usesBlockLight(): boolean;
        isGui3d(): boolean;
        isAcceleratedInHand(): boolean;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        isAcceleratedInGui(): boolean;
        getCustomColor(arg0: number, arg1: number): number;
        isAccelerated(): boolean;
        isVanillaAdapter(): boolean;
        constructor(arg0: T);
        get overrides(): $ItemOverrides;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get gui3d(): boolean;
        get acceleratedInHand(): boolean;
        get acceleratedInGui(): boolean;
        get accelerated(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $CompositeModel$Baked implements $IDynamicBakedModel, $IAcceleratedBakedModel {
        static builder(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $TextureAtlasSprite, arg4: $ItemOverrides, arg5: $ItemTransforms): $CompositeModel$Baked$Builder;
        static builder(arg0: $IGeometryBakingContext, arg1: $TextureAtlasSprite, arg2: $ItemOverrides, arg3: $ItemTransforms): $CompositeModel$Baked$Builder;
        getChildren(): $ImmutableMap<any, any>;
        getOverrides(): $ItemOverrides;
        isAcceleratedInHand(): boolean;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        useAmbientOcclusion(): boolean;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isCustomRenderer(): boolean;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        getTransforms(): $ItemTransforms;
        isAcceleratedInGui(): boolean;
        getCustomColor(arg0: number, arg1: number): number;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getParticleIcon(): $TextureAtlasSprite;
        isAccelerated(): boolean;
        usesBlockLight(): boolean;
        isGui3d(): boolean;
        getPart(arg0: string): $BakedModel;
        handler$cif000$acceleratedrendering$checkAccelerationSupport(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $TextureAtlasSprite, arg4: $ItemTransforms, arg5: $ItemOverrides, arg6: $ImmutableMap<any, any>, arg7: $ImmutableList<any>, arg8: $CallbackInfo): void;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        isVanillaAdapter(): boolean;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $TextureAtlasSprite, arg4: $ItemTransforms, arg5: $ItemOverrides, arg6: $ImmutableMap<string, $BakedModel>, arg7: $ImmutableList<$BakedModel>);
        get children(): $ImmutableMap<any, any>;
        get overrides(): $ItemOverrides;
        get acceleratedInHand(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get acceleratedInGui(): boolean;
        get accelerated(): boolean;
        get gui3d(): boolean;
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
        setParticle(arg0: $TextureAtlasSprite): $CompositeModel$Baked$Builder;
        addLayer(arg0: $BakedModel): void;
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
        withFluid(arg0: $Fluid_): $DynamicFluidContainerModel;
        static getLayerRenderTypes(arg0: boolean): $RenderTypeGroup;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        getConfigurableComponentNames(): $Set<string>;
        get configurableComponentNames(): $Set<string>;
    }
    export class $CompositeModel implements $IUnbakedGeometry<$CompositeModel> {
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        bake(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel;
        getConfigurableComponentNames(): $Set<string>;
        constructor(arg0: $ImmutableMap<string, $BlockModel>, arg1: $ImmutableList<string>);
        get configurableComponentNames(): $Set<string>;
    }
    export class $DynamicFluidContainerModel$Loader implements $IGeometryLoader<$DynamicFluidContainerModel> {
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): $DynamicFluidContainerModel;
        static INSTANCE: $DynamicFluidContainerModel$Loader;
    }
}
