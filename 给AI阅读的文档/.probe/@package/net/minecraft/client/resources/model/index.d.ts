import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $AccessorWeightedBakedModel } from "@package/xfacthd/framedblocks/mixin/client";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $BakedModelMixin } from "@package/net/fabricmc/fabric/mixin/renderer/client";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $ResourceModelManagerAccessor, $ResourceAtlasSetAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $Comparator, $Map, $List, $Map_, $Collection_, $List_, $Collection, $BitSet } from "@package/java/util";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $ModelBakeryAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SimpleBakedModelAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $Supplier_, $Predicate_, $Function, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBakedModelExtension, $IModelBakerExtension, $ModelStateExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockStatesLoaderHooks, $BlockStatesLoaderHooks$LoadingOverride_, $BakerImplHooks, $ModelLoadingEventDispatcher, $ModelLoaderHooks } from "@package/net/fabricmc/fabric/impl/client/model/loading";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $WeightedEntry$Wrapper_ } from "@package/net/minecraft/util/random";
import { $TextureAtlasSprite, $SpriteLoader$Preparations_, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $RuntimeException, $Comparable, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $ModelBakeryAccessor as $ModelBakeryAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $FabricBakedModelManager } from "@package/net/fabricmc/fabric/api/client/model/loading/v1";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BlockModel, $ItemOverrides, $BakedQuad, $ItemTransforms, $ItemModelGenerator, $BlockModelDefinition, $BlockModelDefinition$Context } from "@package/net/minecraft/client/renderer/block/model";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $ResourceLocation, $ResourceLocation_, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $SimpleModelAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $OctahedralGroup, $Transformation } from "@package/com/mojang/math";
import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";

declare module "@package/net/minecraft/client/resources/model" {
    export class $BakedModel {
    }
    export interface $BakedModel extends $IBakedModelExtension, $FabricBakedModel, $BakedModelMixin {
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        useAmbientOcclusion(): boolean;
        isGui3d(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
        get particleIcon(): $TextureAtlasSprite;
    }
    export class $ModelBakery implements $ModelBakeryAccessor, $ModelBakeryAccessor$1, $ModelLoaderHooks {
        bakeModels(textureGetter: $ModelBakery$TextureGetter_): void;
        getBakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        getModelGroups(): $Object2IntMap<$BlockState>;
        fabric_add(modelLocation: $ModelResourceLocation_, model: $UnbakedModel): void;
        fabric_getOrLoadModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        fabric_getMissingModel(): $UnbakedModel;
        fabric_getDispatcher(): $ModelLoadingEventDispatcher;
        wrapOperation$cai000$ldlib2$injectStateToModelLocation(arg0: $Logger, arg1: string, arg2: $Object[], arg3: $Operation_<any>): void;
        modifyExpressionValue$cai000$ldlib2$changeLoadedModel(arg0: $Collection_<any>, arg1: $ModelResourceLocation_, arg2: $LocalRef<any>): $Collection<any>;
        callGetModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        getMissingModel(): $UnbakedModel;
        getTopLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
        invokeGetModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        getUnbakedCache(): $Map<$ResourceLocation, $UnbakedModel>;
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
        constructor(blockColors: $BlockColors, profilerFiller: $ProfilerFiller, modelResources: $Map_<$ResourceLocation_, $BlockModel>, blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>);
        get bakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        get modelGroups(): $Object2IntMap<$BlockState>;
        get missingModel(): $UnbakedModel;
        get topLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
        get unbakedCache(): $Map<$ResourceLocation, $UnbakedModel>;
    }
    export class $UnbakedModel {
    }
    export interface $UnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $BuiltInModel implements $BakedModel {
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        useAmbientOcclusion(): boolean;
        isGui3d(): boolean;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * A null `RenderType` is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
         */
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        isVanillaAdapter(): boolean;
        constructor(itemTransforms: $ItemTransforms, overrides: $ItemOverrides, particleTexture: $TextureAtlasSprite, usesBlockLight: boolean);
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
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
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getModelBakery(): $ModelBakery;
        getBlockModelShaper(): $BlockModelShaper;
        updateMaxMipLevel(level: number): void;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        requiresRender(oldState: $BlockState_, newState: $BlockState_): boolean;
        getModel(modelLocation: $ModelResourceLocation_): $BakedModel;
        getMissingModel(): $BakedModel;
        getFabricDependencies(): $Collection<any>;
        getFabricId(): $ResourceLocation;
        getName(): string;
        getModel(arg0: $ResourceLocation_): $BakedModel;
        getAtlases(): $AtlasSet;
        getMaxMipmapLevels(): number;
        bakedRegistry: $Map<$ModelResourceLocation, $BakedModel>;
        constructor(textureManager: $TextureManager, blockColors: $BlockColors, maxMipmapLevels: number);
        get modelBakery(): $ModelBakery;
        get blockModelShaper(): $BlockModelShaper;
        get missingModel(): $BakedModel;
        get fabricDependencies(): $Collection<any>;
        get fabricId(): $ResourceLocation;
        get name(): string;
        get atlases(): $AtlasSet;
        get maxMipmapLevels(): number;
    }
    export class $WeightedBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel, $AccessorWeightedBakedModel {
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        isGui3d(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        isVanillaAdapter(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        getQuads(state: $BlockState_ | null, side: $Direction_ | null, rand: $RandomSource, extraData: $ModelData, renderType: $RenderType): $List<any>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        framedblocks$getWrappedModel(): $BakedModel;
        isVanilla: boolean;
        constructor(list: $List_<$WeightedEntry$Wrapper_<$BakedModel>>);
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
    }
    export class $WeightedBakedModel$Builder {
        add(model: $BakedModel | null, weight: number): $WeightedBakedModel$Builder;
        build(): $BakedModel;
        constructor();
    }
    export class $ModelBaker {
    }
    export interface $ModelBaker extends $IModelBakerExtension {
        getModel(location: $ResourceLocation_): $UnbakedModel;
        /**
         * @deprecated
         */
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
    }
    export class $SimpleBakedModel$Builder {
        /**
         * @deprecated
         */
        build(): $BakedModel;
        build(arg0: $RenderTypeGroup_): $BakedModel;
        item(): $SimpleBakedModel$Builder;
        particle(particleIcon: $TextureAtlasSprite): $SimpleBakedModel$Builder;
        addCulledFace(facing: $Direction_, quad: $BakedQuad): $SimpleBakedModel$Builder;
        addUnculledFace(quad: $BakedQuad): $SimpleBakedModel$Builder;
        handler$igc000$ferritecore$deduplicate(arg0: $BakedQuad, arg1: $CallbackInfoReturnable<any>): void;
        handler$igc000$ferritecore$deduplicate(arg0: $Direction_, arg1: $BakedQuad, arg2: $CallbackInfoReturnable<any>): void;
        constructor(blockModel: $BlockModel, overrides: $ItemOverrides, isGui3d: boolean);
        constructor(hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, transforms: $ItemTransforms, overrides: $ItemOverrides);
    }
    export class $MultiPartBakedModel$Builder {
        add(predicate: $Predicate_<$BlockState>, model: $BakedModel): void;
        build(): $BakedModel;
        redirect$ifp000$ferritecore$build(arg0: $List_<any>): $MultiPartBakedModel;
        constructor();
    }
    export class $Material {
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>, withGlint: boolean): $VertexConsumer;
        texture(): $ResourceLocation;
        atlasLocation(): $ResourceLocation;
        sprite(): $TextureAtlasSprite;
        renderType(renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        static COMPARATOR: $Comparator<$Material>;
        constructor(atlasLocation: $ResourceLocation_, texture: $ResourceLocation_);
    }
    export class $BlockModelRotation extends $Enum<$BlockModelRotation> implements $ModelState {
        static values(): $BlockModelRotation[];
        static valueOf(arg0: string): $BlockModelRotation;
        actualRotation(): $OctahedralGroup;
        static by(x: number, y: number): $BlockModelRotation;
        getRotation(): $Transformation;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        isUvLocked(): boolean;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
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
        readyForUpload(): $CompletableFuture<void>;
        getSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        upload(): void;
        constructor(atlas: $TextureAtlas, preperations: $SpriteLoader$Preparations_);
    }
    export class $BlockStateModelLoader$LoadedJson extends $Record {
        data(): $JsonElement;
        source(): string;
        parse(blockStateId: $ResourceLocation_, context: $BlockModelDefinition$Context): $BlockModelDefinition;
        constructor(arg0: string, arg1: $JsonElement_);
    }
    export class $ModelBakery$TextureGetter {
    }
    export interface $ModelBakery$TextureGetter {
        get(modelLocation: $ModelResourceLocation_, material: $Material): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$TextureGetter}.
     */
    export type $ModelBakery$TextureGetter_ = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite);
    export class $AtlasSet$AtlasEntry extends $Record implements $AutoCloseable {
        close(): void;
        atlas(): $TextureAtlas;
        atlasInfoLocation(): $ResourceLocation;
        constructor(arg0: $TextureAtlas, arg1: $ResourceLocation_);
    }
    export class $SimpleBakedModel implements $BakedModel, $SimpleBakedModelAccessor, $SimpleModelAccess, $IBakedModelExtension {
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        useAmbientOcclusion(): boolean;
        isGui3d(): boolean;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<any>;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * A null `RenderType` is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
         */
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        isVanillaAdapter(): boolean;
        getFabulousItemRenderTypes(): $List<$RenderType>;
        getBlockRenderTypes(): $ChunkRenderTypeSet;
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
        constructor(unculledFaces: $List_<$BakedQuad>, culledFaces: $Map_<$Direction_, $List_<$BakedQuad>>, hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, particleIcon: $TextureAtlasSprite, transforms: $ItemTransforms, overrides: $ItemOverrides);
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides, arg8: $RenderTypeGroup_);
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelManager$ReloadState extends $Record {
        modelCache(): $Map<$BlockState, $BakedModel>;
        atlasPreparations(): $Map<$ResourceLocation, $AtlasSet$StitchResult>;
        readyForUpload(): $CompletableFuture<void>;
        missingModel(): $BakedModel;
        modelBakery(): $ModelBakery;
        constructor(modelBakery: $ModelBakery, missingModel: $BakedModel, modelCache: $Map_<$BlockState_, $BakedModel>, atlasPreparations: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, readyForUpload: $CompletableFuture<void>);
    }
    export class $BlockStateModelLoader implements $BlockStatesLoaderHooks {
        getModelGroups(): $Object2IntMap<$BlockState>;
        static getValueHelper<T extends $Comparable<T>>(property: $Property<T>, propertyName: string): T;
        fabric_setLoadingOverride(arg0: $BlockStatesLoaderHooks$LoadingOverride_): void;
        loadAllBlockStates(): void;
        static SINGLETON_MODEL_GROUP: number;
        static BLOCKSTATE_LISTER: $FileToIdConverter;
        constructor(blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>, profiler: $ProfilerFiller, missingModel: $UnbakedModel, blockColors: $BlockColors, discoveredModelOutput: $BiConsumer_<$ModelResourceLocation, $UnbakedModel>);
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $BlockStateModelLoader$LoadedModel extends $Record {
    }
    export class $MultiPartBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel {
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        getOverrides(): $ItemOverrides;
        getSelectors(arg0: $BlockState_ | null): $BitSet;
        usesBlockLight(): boolean;
        useAmbientOcclusion(): boolean;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        isGui3d(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        isVanillaAdapter(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        getQuads(state: $BlockState_ | null, side: $Direction_ | null, rand: $RandomSource, extraData: $ModelData, renderType: $RenderType): $List<any>;
        redirect$iga000$ferritecore$redirectCachePut(arg0: $Map_<any, any>, arg1: $Object, arg2: $Object): $Object;
        redirect$iga000$ferritecore$redirectCacheGet(arg0: $Map_<any, any>, arg1: $Object): $Object;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        particleIcon: $TextureAtlasSprite;
        isVanilla: boolean;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        overrides: $ItemOverrides;
        constructor(selectors: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>);
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
        get customRenderer(): boolean;
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
        static standalone(id: $ResourceLocation_): $ModelResourceLocation;
        getVariant(): string;
        variant(): string;
        static inventory(id: $ResourceLocation_): $ModelResourceLocation;
        static vanilla(path: string, variant: string): $ModelResourceLocation;
        static INVENTORY_VARIANT: string;
        static STANDALONE_VARIANT: string;
        constructor(id: $ResourceLocation_, variant: string);
    }
    export class $ModelBakery$ModelBakerImpl implements $ModelBaker, $BakerImplHooks {
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        getModel(location: $ResourceLocation_): $UnbakedModel;
        getTopLevelModel(location: $ModelResourceLocation_): $UnbakedModel;
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
        bake(location: $ResourceLocation_, state: $ModelState, sprites: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        bakeUncached(model: $UnbakedModel, state: $ModelState, sprites: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        bakeUncached(model: $UnbakedModel, state: $ModelState): $BakedModel;
        fabric_getTextureGetter(): $Function<any, any>;
        this$0: $ModelBakery;
        constructor(textureGetter: $ModelBakery, modelLocation: $ModelBakery$TextureGetter_, arg2: $ModelResourceLocation_);
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
    export class $AtlasSet implements $AutoCloseable, $ResourceAtlasSetAccessor {
        close(): void;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        scheduleLoad(resourceManager: $ResourceManager, mipLevel: number, executor: $Executor_): $Map<$ResourceLocation, $CompletableFuture<$AtlasSet$StitchResult>>;
        getAtlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
        constructor(atlasMap: $Map_<$ResourceLocation_, $ResourceLocation_>, textureManager: $TextureManager);
        get atlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
    }
}
