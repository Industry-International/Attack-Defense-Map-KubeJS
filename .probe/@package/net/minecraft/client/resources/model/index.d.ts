import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedModelMixin } from "@package/net/fabricmc/fabric/mixin/renderer/client";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBakedModelExtension, $IModelBakerExtension, $ModelStateExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $IAcceleratedBakedModel } from "@package/com/github/argon4w/acceleratedrendering/features/items";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $ModelBakeryAccessor as $ModelBakeryAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $FabricBakedModelManager } from "@package/net/fabricmc/fabric/api/client/model/loading/v1";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $OctahedralGroup, $Transformation } from "@package/com/mojang/math";
import { $Matrix4f, $Matrix3f } from "@package/org/joml";
import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $AccessorWeightedBakedModel } from "@package/xfacthd/framedblocks/mixin/client";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ResourceModelManagerAccessor, $ResourceAtlasSetAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $Comparator, $Map, $List, $Map_, $Collection_, $List_, $Collection, $BitSet } from "@package/java/util";
import { $IAcceleratedVertexConsumer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $AcceleratedModelRenderContext_ } from "@package/com/github/argon4w/acceleratedrendering/features/items/contexts";
import { $ModelBakeryAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $SimpleBakedModelAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $Supplier_, $Predicate_, $Function, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockStatesLoaderHooks, $BlockStatesLoaderHooks$LoadingOverride_, $BakerImplHooks, $ModelLoadingEventDispatcher, $ModelLoaderHooks } from "@package/net/fabricmc/fabric/impl/client/model/loading";
import { $WeightedEntry$Wrapper_ } from "@package/net/minecraft/util/random";
import { $TextureAtlasSprite, $SpriteLoader$Preparations_, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $RuntimeException, $Comparable, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $IAcceleratedRenderer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BlockModel, $ItemOverrides, $BakedQuad, $ItemTransforms, $ItemModelGenerator, $BlockModelDefinition, $BlockModelDefinition$Context } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation, $ResourceLocation_, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $SimpleModelAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";

declare module "@package/net/minecraft/client/resources/model" {
    export class $BakedModel {
    }
    export interface $BakedModel extends $IBakedModelExtension, $IAcceleratedBakedModel, $FabricBakedModel, $BakedModelMixin {
        getOverrides(): $ItemOverrides;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        isAcceleratedInHand(): boolean;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        isAccelerated(): boolean;
        useAmbientOcclusion(): boolean;
        isCustomRenderer(): boolean;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isAcceleratedInGui(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getCustomColor(arg0: number, arg1: number): number;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        /**
         * @deprecated
         */
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        get overrides(): $ItemOverrides;
        get particleIcon(): $TextureAtlasSprite;
        get acceleratedInHand(): boolean;
        get gui3d(): boolean;
        get accelerated(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get acceleratedInGui(): boolean;
    }
    export class $ModelBakery implements $ModelBakeryAccessor, $ModelBakeryAccessor$1, $ModelLoaderHooks {
        getBakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        modifyExpressionValue$cag000$ldlib2$changeLoadedModel(arg0: $Collection_<any>, arg1: $ModelResourceLocation_, arg2: $LocalRef<any>): $Collection<any>;
        wrapOperation$cag000$ldlib2$injectStateToModelLocation(arg0: $Logger, arg1: string, arg2: $Object[], arg3: $Operation_<any>): void;
        getModelGroups(): $Object2IntMap<$BlockState>;
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
        fabric_add(arg0: $ModelResourceLocation_, arg1: $UnbakedModel): void;
        bakeModels(arg0: $ModelBakery$TextureGetter_): void;
        fabric_getDispatcher(): $ModelLoadingEventDispatcher;
        fabric_getOrLoadModel(arg0: $ResourceLocation_): $UnbakedModel;
        fabric_getMissingModel(): $UnbakedModel;
        callGetModel(arg0: $ResourceLocation_): $UnbakedModel;
        invokeGetModel(arg0: $ResourceLocation_): $UnbakedModel;
        getTopLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
        static BLOCK_ENTITY_MARKER: $BlockModel;
        static ITEM_MODEL_GENERATOR: $ItemModelGenerator;
        static NO_PATTERN_SHIELD: $Material;
        static DESTROY_STAGE_COUNT: number;
        static DESTROY_STAGES: $List<$ResourceLocation>;
        static BANNER_BASE: $Material;
        static GENERATION_MARKER: $BlockModel;
        static BREAKING_LOCATIONS: $List<$ResourceLocation>;
        static MISSING_MODEL_LOCATION: $ResourceLocation;
        static DESTROY_TYPES: $List<$RenderType>;
        static MISSING_MODEL_MESH: string;
        static FIRE_1: $Material;
        static LAVA_FLOW: $Material;
        bakedCache: $Map<$ModelBakery$BakedCacheKey, $BakedModel>;
        static SHIELD_BASE: $Material;
        static FIRE_0: $Material;
        static WATER_FLOW: $Material;
        static MODEL_LISTER: $FileToIdConverter;
        static WATER_OVERLAY: $Material;
        static MISSING_MODEL_VARIANT: $ModelResourceLocation;
        constructor(arg0: $BlockColors, arg1: $ProfilerFiller, arg2: $Map_<$ResourceLocation_, $BlockModel>, arg3: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>);
        get bakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        get modelGroups(): $Object2IntMap<$BlockState>;
        get topLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
    }
    export class $UnbakedModel {
    }
    export interface $UnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $BuiltInModel implements $BakedModel {
        getOverrides(): $ItemOverrides;
        getParticleIcon(): $TextureAtlasSprite;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        useAmbientOcclusion(): boolean;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        isAcceleratedInHand(): boolean;
        isAccelerated(): boolean;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isAcceleratedInGui(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getCustomColor(arg0: number, arg1: number): number;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        isVanillaAdapter(): boolean;
        constructor(arg0: $ItemTransforms, arg1: $ItemOverrides, arg2: $TextureAtlasSprite, arg3: boolean);
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get acceleratedInHand(): boolean;
        get accelerated(): boolean;
        get acceleratedInGui(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelState {
    }
    export interface $ModelState extends $ModelStateExtension {
        getRotation(): $Transformation;
        isUvLocked(): boolean;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    export class $ModelManager implements $PreparableReloadListener, $AutoCloseable, $ResourceModelManagerAccessor, $FabricBakedModelManager, $IdentifiableResourceReloadListener {
        close(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getMissingModel(): $BakedModel;
        getModelBakery(): $ModelBakery;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        requiresRender(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getModel(arg0: $ModelResourceLocation_): $BakedModel;
        updateMaxMipLevel(arg0: number): void;
        getAtlas(arg0: $ResourceLocation_): $TextureAtlas;
        getBlockModelShaper(): $BlockModelShaper;
        getName(): string;
        getModel(arg0: $ResourceLocation_): $BakedModel;
        getMaxMipmapLevels(): number;
        getAtlases(): $AtlasSet;
        bakedRegistry: $Map<$ModelResourceLocation, $BakedModel>;
        constructor(arg0: $TextureManager, arg1: $BlockColors, arg2: number);
        get missingModel(): $BakedModel;
        get modelBakery(): $ModelBakery;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get blockModelShaper(): $BlockModelShaper;
        get name(): string;
        get maxMipmapLevels(): number;
        get atlases(): $AtlasSet;
    }
    export class $WeightedBakedModel implements $BakedModel, $IDynamicBakedModel, $IAcceleratedBakedModel, $FabricBakedModel, $AccessorWeightedBakedModel {
        getOverrides(): $ItemOverrides;
        getList(): $List<any>;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getParticleIcon(): $TextureAtlasSprite;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        isAcceleratedInHand(): boolean;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        isAccelerated(): boolean;
        useAmbientOcclusion(): boolean;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isAcceleratedInGui(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getCustomColor(arg0: number, arg1: number): number;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        isVanillaAdapter(): boolean;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<any>;
        getTotalWeight(): number;
        handler$cih001$acceleratedrendering$checkAccelerationSupport(arg0: $List_<any>, arg1: $CallbackInfo): void;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        framedblocks$getWrappedModel(): $BakedModel;
        isVanilla: boolean;
        constructor(arg0: $List_<$WeightedEntry$Wrapper_<$BakedModel>>);
        get overrides(): $ItemOverrides;
        get list(): $List<any>;
        get acceleratedInHand(): boolean;
        get gui3d(): boolean;
        get accelerated(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get acceleratedInGui(): boolean;
        get vanillaAdapter(): boolean;
        get totalWeight(): number;
    }
    export class $WeightedBakedModel$Builder {
        add(arg0: $BakedModel, arg1: number): $WeightedBakedModel$Builder;
        build(): $BakedModel;
        constructor();
    }
    export class $ModelBaker {
    }
    export interface $ModelBaker extends $IModelBakerExtension {
        /**
         * @deprecated
         */
        bake(arg0: $ResourceLocation_, arg1: $ModelState): $BakedModel;
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
    }
    export class $SimpleBakedModel$Builder {
        /**
         * @deprecated
         */
        build(): $BakedModel;
        build(arg0: $RenderTypeGroup_): $BakedModel;
        item(): $SimpleBakedModel$Builder;
        handler$iio000$ferritecore$deduplicate(arg0: $Direction_, arg1: $BakedQuad, arg2: $CallbackInfoReturnable<any>): void;
        handler$iio000$ferritecore$deduplicate(arg0: $BakedQuad, arg1: $CallbackInfoReturnable<any>): void;
        particle(arg0: $TextureAtlasSprite): $SimpleBakedModel$Builder;
        addUnculledFace(arg0: $BakedQuad): $SimpleBakedModel$Builder;
        addCulledFace(arg0: $Direction_, arg1: $BakedQuad): $SimpleBakedModel$Builder;
        constructor(arg0: $BlockModel, arg1: $ItemOverrides, arg2: boolean);
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $ItemTransforms, arg4: $ItemOverrides);
    }
    export class $MultiPartBakedModel$Builder {
        add(arg0: $Predicate_<$BlockState>, arg1: $BakedModel): void;
        build(): $BakedModel;
        redirect$iil000$ferritecore$build(arg0: $List_<any>): $MultiPartBakedModel;
        constructor();
    }
    export class $Material {
        buffer(arg0: $MultiBufferSource_, arg1: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        buffer(arg0: $MultiBufferSource_, arg1: $Function_<$ResourceLocation, $RenderType>, arg2: boolean): $VertexConsumer;
        texture(): $ResourceLocation;
        sprite(): $TextureAtlasSprite;
        atlasLocation(): $ResourceLocation;
        renderType(arg0: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        static COMPARATOR: $Comparator<$Material>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
    }
    export class $BlockModelRotation extends $Enum<$BlockModelRotation> implements $ModelState {
        static values(): $BlockModelRotation[];
        static valueOf(arg0: string): $BlockModelRotation;
        static by(arg0: number, arg1: number): $BlockModelRotation;
        getRotation(): $Transformation;
        actualRotation(): $OctahedralGroup;
        isUvLocked(): boolean;
        mayApplyArbitraryRotation(): boolean;
        static X90_Y0: $BlockModelRotation;
        static X0_Y180: $BlockModelRotation;
        static X0_Y270: $BlockModelRotation;
        static X180_Y270: $BlockModelRotation;
        static X180_Y0: $BlockModelRotation;
        static X270_Y90: $BlockModelRotation;
        static X0_Y0: $BlockModelRotation;
        static X0_Y90: $BlockModelRotation;
        static X90_Y270: $BlockModelRotation;
        static X90_Y180: $BlockModelRotation;
        static X180_Y180: $BlockModelRotation;
        static X270_Y0: $BlockModelRotation;
        static X270_Y180: $BlockModelRotation;
        static X90_Y90: $BlockModelRotation;
        static X270_Y270: $BlockModelRotation;
        static X180_Y90: $BlockModelRotation;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelRotation}.
     */
    export type $BlockModelRotation_ = "x0_y0" | "x0_y90" | "x0_y180" | "x0_y270" | "x90_y0" | "x90_y90" | "x90_y180" | "x90_y270" | "x180_y0" | "x180_y90" | "x180_y180" | "x180_y270" | "x270_y0" | "x270_y90" | "x270_y180" | "x270_y270";
    export class $AtlasSet$StitchResult {
        missing(): $TextureAtlasSprite;
        upload(): void;
        readyForUpload(): $CompletableFuture<void>;
        getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        constructor(arg0: $TextureAtlas, arg1: $SpriteLoader$Preparations_);
    }
    export class $BlockStateModelLoader$LoadedJson extends $Record {
        data(): $JsonElement;
        source(): string;
        parse(arg0: $ResourceLocation_, arg1: $BlockModelDefinition$Context): $BlockModelDefinition;
        constructor(arg0: string, arg1: $JsonElement_);
    }
    export class $ModelBakery$TextureGetter {
    }
    export interface $ModelBakery$TextureGetter {
        get(arg0: $ModelResourceLocation_, arg1: $Material): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$TextureGetter}.
     */
    export type $ModelBakery$TextureGetter_ = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite);
    export class $AtlasSet$AtlasEntry extends $Record implements $AutoCloseable {
        close(): void;
        atlasInfoLocation(): $ResourceLocation;
        atlas(): $TextureAtlas;
        constructor(arg0: $TextureAtlas, arg1: $ResourceLocation_);
    }
    export class $SimpleBakedModel implements $BakedModel, $IAcceleratedBakedModel, $IAcceleratedRenderer<any>, $SimpleBakedModelAccessor, $SimpleModelAccess, $IBakedModelExtension {
        render(arg0: $VertexConsumer, arg1: $AcceleratedModelRenderContext_, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
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
        getCustomColor(arg0: number, arg1: number): number;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<any>;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        isVanillaAdapter(): boolean;
        getBlockRenderTypes(): $ChunkRenderTypeSet;
        getFabulousItemRenderTypes(): $List<$RenderType>;
        getItemRenderTypes(): $List<$RenderType>;
        itemRenderTypes: $List<$RenderType>;
        fabulousItemRenderTypes: $List<$RenderType>;
        unculledFaces: $List<$BakedQuad>;
        culledFaces: $Map<$Direction, $List<$BakedQuad>>;
        particleIcon: $TextureAtlasSprite;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        blockRenderTypes: $ChunkRenderTypeSet;
        overrides: $ItemOverrides;
        /**
         * @deprecated
         */
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides);
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides, arg8: $RenderTypeGroup_);
        get acceleratedInHand(): boolean;
        get gui3d(): boolean;
        get accelerated(): boolean;
        get customRenderer(): boolean;
        get acceleratedInGui(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelManager$ReloadState extends $Record {
        modelBakery(): $ModelBakery;
        modelCache(): $Map<$BlockState, $BakedModel>;
        atlasPreparations(): $Map<$ResourceLocation, $AtlasSet$StitchResult>;
        readyForUpload(): $CompletableFuture<void>;
        missingModel(): $BakedModel;
        constructor(modelBakery: $ModelBakery, missingModel: $BakedModel, modelCache: $Map_<$BlockState_, $BakedModel>, atlasPreparations: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, readyForUpload: $CompletableFuture<void>);
    }
    export class $BlockStateModelLoader implements $BlockStatesLoaderHooks {
        getModelGroups(): $Object2IntMap<$BlockState>;
        fabric_setLoadingOverride(arg0: $BlockStatesLoaderHooks$LoadingOverride_): void;
        loadAllBlockStates(): void;
        static getValueHelper<T extends $Comparable<T>>(arg0: $Property<T>, arg1: string): T;
        static SINGLETON_MODEL_GROUP: number;
        static BLOCKSTATE_LISTER: $FileToIdConverter;
        constructor(arg0: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>, arg1: $ProfilerFiller, arg2: $UnbakedModel, arg3: $BlockColors, arg4: $BiConsumer_<$ModelResourceLocation, $UnbakedModel>);
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $BlockStateModelLoader$LoadedModel extends $Record {
    }
    export class $MultiPartBakedModel implements $BakedModel, $IDynamicBakedModel, $IAcceleratedBakedModel, $FabricBakedModel {
        getOverrides(): $ItemOverrides;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        isAcceleratedInHand(): boolean;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        isAccelerated(): boolean;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        isCustomRenderer(): boolean;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isAcceleratedInGui(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getCustomColor(arg0: number, arg1: number): number;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        isVanillaAdapter(): boolean;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<any>;
        getSelectors(arg0: $BlockState_): $BitSet;
        getSelectors(): $List<any>;
        redirect$iim000$ferritecore$redirectCacheGet(arg0: $Map_<any, any>, arg1: $Object): $Object;
        redirect$iim000$ferritecore$redirectCachePut(arg0: $Map_<any, any>, arg1: $Object, arg2: $Object): $Object;
        handler$cig000$acceleratedrendering$checkAccelerationSupport(arg0: $List_<any>, arg1: $CallbackInfo): void;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        particleIcon: $TextureAtlasSprite;
        isVanilla: boolean;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        overrides: $ItemOverrides;
        constructor(arg0: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>);
        get acceleratedInHand(): boolean;
        get gui3d(): boolean;
        get accelerated(): boolean;
        get customRenderer(): boolean;
        get acceleratedInGui(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelBakery$BakedCacheKey extends $Record {
        id(): $ResourceLocation;
        isUvLocked(): boolean;
        transformation(): $Transformation;
        constructor(id: $ResourceLocation_, transformation: $Transformation, isUvLocked: boolean);
        get uvLocked(): boolean;
    }
    export class $BlockStateModelLoader$ModelGroupKey extends $Record {
    }
    export class $BlockStateModelLoader$BlockStateDefinitionException extends $RuntimeException {
    }
    export class $ModelResourceLocation extends $Record {
        id(): $ResourceLocation;
        static standalone(arg0: $ResourceLocation_): $ModelResourceLocation;
        getVariant(): string;
        variant(): string;
        static vanilla(arg0: string, arg1: string): $ModelResourceLocation;
        static inventory(arg0: $ResourceLocation_): $ModelResourceLocation;
        static INVENTORY_VARIANT: string;
        static STANDALONE_VARIANT: string;
        constructor(id: $ResourceLocation_, variant: string);
    }
    export class $ModelBakery$ModelBakerImpl implements $ModelBaker, $BakerImplHooks {
        bake(arg0: $ResourceLocation_, arg1: $ModelState): $BakedModel;
        bake(arg0: $ResourceLocation_, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        fabric_getTextureGetter(): $Function<any, any>;
        bakeUncached(arg0: $UnbakedModel, arg1: $ModelState): $BakedModel;
        bakeUncached(arg0: $UnbakedModel, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        getTopLevelModel(arg0: $ModelResourceLocation_): $UnbakedModel;
        this$0: $ModelBakery;
        constructor(arg0: $ModelBakery, arg1: $ModelBakery$TextureGetter_, arg2: $ModelResourceLocation_);
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
    export class $AtlasSet implements $AutoCloseable, $ResourceAtlasSetAccessor {
        close(): void;
        scheduleLoad(arg0: $ResourceManager, arg1: number, arg2: $Executor_): $Map<$ResourceLocation, $CompletableFuture<$AtlasSet$StitchResult>>;
        getAtlas(arg0: $ResourceLocation_): $TextureAtlas;
        getAtlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
        constructor(arg0: $Map_<$ResourceLocation_, $ResourceLocation_>, arg1: $TextureManager);
        get atlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
    }
}
