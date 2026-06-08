import { $JsonDeserializationContext_, $JsonObject_, $JsonObject, $JsonDeserializationContext } from "@package/com/google/gson";
import { $Function_, $Function } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $RenderTypeGroup } from "@package/net/neoforged/neoforge/client";
import { $Direction_ } from "@package/net/minecraft/core";
import { $ExtraFaceData_, $IModelBuilder, $IQuadTransformer } from "@package/net/neoforged/neoforge/client/model";
import { $BlockModel, $BlockElement, $ItemTransforms, $BlockElementFace_, $ItemOverrides, $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List, $Map_, $Set, $List_ } from "@package/java/util";
import { $Transformation } from "@package/com/mojang/math";

declare module "@package/net/neoforged/neoforge/client/model/geometry" {
    export class $BlockGeometryBakingContext implements $IGeometryBakingContext {
        copyFrom(arg0: $BlockGeometryBakingContext): void;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState, arg3: $ItemOverrides): $BakedModel;
        isGui3d(): boolean;
        setGui3d(arg0: boolean): void;
        useBlockLight(): boolean;
        useAmbientOcclusion(): boolean;
        getTransforms(): $ItemTransforms;
        getMaterial(arg0: string): $Material;
        hasCustomGeometry(): boolean;
        getCustomGeometry(): $IUnbakedGeometry<never>;
        setRenderTypeHint(arg0: $ResourceLocation_): void;
        setCustomGeometry(arg0: $IUnbakedGeometry_<never>): void;
        setRootTransform(arg0: $Transformation): void;
        getModelName(): string;
        hasMaterial(arg0: string): boolean;
        getRenderTypeHint(): $ResourceLocation;
        isComponentVisible(arg0: string, arg1: boolean): boolean;
        getRootTransform(): $Transformation;
        getRenderType(arg0: $ResourceLocation_): $RenderTypeGroup;
        owner: $BlockModel;
        visibilityData: $BlockGeometryBakingContext$VisibilityData;
        constructor(arg0: $BlockModel);
        get transforms(): $ItemTransforms;
        get modelName(): string;
    }
    export class $UnbakedGeometryHelper {
        static bake(arg0: $BlockModel, arg1: $ModelBaker, arg2: $BlockModel, arg3: $Function_<$Material, $TextureAtlasSprite>, arg4: $ModelState, arg5: boolean): $BakedModel;
        static bakeElements(arg0: $List_<$BlockElement>, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $List<$BakedQuad>;
        static bakeElements(arg0: $IModelBuilder<never>, arg1: $List_<$BlockElement>, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState): void;
        static createUnbakedItemMaskElements(arg0: number, arg1: $TextureAtlasSprite): $List<$BlockElement>;
        static createUnbakedItemMaskElements(arg0: number, arg1: $TextureAtlasSprite, arg2: $ExtraFaceData_): $List<$BlockElement>;
        static createUnbakedItemElements(arg0: number, arg1: $TextureAtlasSprite, arg2: $ExtraFaceData_): $List<$BlockElement>;
        static createUnbakedItemElements(arg0: number, arg1: $TextureAtlasSprite): $List<$BlockElement>;
        static bakeElementFace(arg0: $BlockElement, arg1: $BlockElementFace_, arg2: $TextureAtlasSprite, arg3: $Direction_, arg4: $ModelState): $BakedQuad;
        static applyRootTransform(arg0: $ModelState, arg1: $Transformation): $IQuadTransformer;
        static composeRootTransformIntoModelState(arg0: $ModelState, arg1: $Transformation): $ModelState;
        static resolveDirtyMaterial(arg0: string, arg1: $IGeometryBakingContext): $Material;
        constructor();
    }
    export class $SimpleUnbakedGeometry<T extends $SimpleUnbakedGeometry<T>> implements $IUnbakedGeometry<T> {
        bake(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        getConfigurableComponentNames(): $Set<string>;
        constructor();
        get configurableComponentNames(): $Set<string>;
    }
    export class $IGeometryBakingContext {
    }
    export interface $IGeometryBakingContext {
        isGui3d(): boolean;
        getRenderType(arg0: $ResourceLocation_): $RenderTypeGroup;
        useBlockLight(): boolean;
        useAmbientOcclusion(): boolean;
        getTransforms(): $ItemTransforms;
        getMaterial(arg0: string): $Material;
        getModelName(): string;
        hasMaterial(arg0: string): boolean;
        getRenderTypeHint(): $ResourceLocation;
        isComponentVisible(arg0: string, arg1: boolean): boolean;
        getRootTransform(): $Transformation;
        get gui3d(): boolean;
        get transforms(): $ItemTransforms;
        get modelName(): string;
        get renderTypeHint(): $ResourceLocation;
        get rootTransform(): $Transformation;
    }
    export class $StandaloneGeometryBakingContext implements $IGeometryBakingContext {
        static builder(): $StandaloneGeometryBakingContext$Builder;
        static builder(arg0: $IGeometryBakingContext): $StandaloneGeometryBakingContext$Builder;
        static create(arg0: $ResourceLocation_): $StandaloneGeometryBakingContext;
        static create(arg0: $ResourceLocation_, arg1: $Map_<string, $ResourceLocation_>): $StandaloneGeometryBakingContext;
        static create(arg0: $Map_<string, $ResourceLocation_>): $StandaloneGeometryBakingContext;
        isGui3d(): boolean;
        useBlockLight(): boolean;
        useAmbientOcclusion(): boolean;
        getTransforms(): $ItemTransforms;
        getMaterial(arg0: string): $Material;
        getModelName(): string;
        hasMaterial(arg0: string): boolean;
        getRenderTypeHint(): $ResourceLocation;
        isComponentVisible(arg0: string, arg1: boolean): boolean;
        getRootTransform(): $Transformation;
        getRenderType(arg0: $ResourceLocation_): $RenderTypeGroup;
        static LOCATION: $ResourceLocation;
        static INSTANCE: $StandaloneGeometryBakingContext;
        get gui3d(): boolean;
        get transforms(): $ItemTransforms;
        get modelName(): string;
        get renderTypeHint(): $ResourceLocation;
        get rootTransform(): $Transformation;
    }
    export class $BlockGeometryBakingContext$VisibilityData {
        copyFrom(arg0: $BlockGeometryBakingContext$VisibilityData): void;
        isVisible(arg0: string, arg1: boolean): boolean;
        hasCustomVisibility(arg0: string): boolean;
        setVisibilityState(arg0: string, arg1: boolean): void;
        constructor();
    }
    export class $GeometryLoaderManager {
        static get(arg0: $ResourceLocation_): $IGeometryLoader<never>;
        static init(): void;
        static getLoaderList(): string;
        static get loaderList(): string;
    }
    export class $IUnbakedGeometry<T extends $IUnbakedGeometry<T>> {
    }
    export interface $IUnbakedGeometry<T extends $IUnbakedGeometry<T>> {
        bake(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>, arg1: $IGeometryBakingContext): void;
        getConfigurableComponentNames(): $Set<string>;
        get configurableComponentNames(): $Set<string>;
    }
    /**
     * Values that may be interpreted as {@link $IUnbakedGeometry}.
     */
    export type $IUnbakedGeometry_<T> = ((arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides) => $BakedModel);
    export class $IGeometryLoader<T extends $IUnbakedGeometry<T>> {
    }
    export interface $IGeometryLoader<T extends $IUnbakedGeometry<T>> {
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): T;
    }
    /**
     * Values that may be interpreted as {@link $IGeometryLoader}.
     */
    export type $IGeometryLoader_<T> = ((arg0: $JsonObject, arg1: $JsonDeserializationContext) => T);
    export class $StandaloneGeometryBakingContext$Builder {
        build(arg0: $ResourceLocation_): $StandaloneGeometryBakingContext;
        withUseBlockLight(arg0: boolean): $StandaloneGeometryBakingContext$Builder;
        withTextures(arg0: $Map_<string, $ResourceLocation_>, arg1: $ResourceLocation_): $StandaloneGeometryBakingContext$Builder;
        withTextures(arg0: $ResourceLocation_, arg1: $Map_<string, $ResourceLocation_>, arg2: $ResourceLocation_): $StandaloneGeometryBakingContext$Builder;
        withRootTransform(arg0: $Transformation): $StandaloneGeometryBakingContext$Builder;
        withTransforms(arg0: $ItemTransforms): $StandaloneGeometryBakingContext$Builder;
        withRenderTypeHint(arg0: $ResourceLocation_): $StandaloneGeometryBakingContext$Builder;
        withMaterials(arg0: $Map_<string, $Material>, arg1: $Material): $StandaloneGeometryBakingContext$Builder;
        withVisibleComponents(arg0: $Object2BooleanMap<string>): $StandaloneGeometryBakingContext$Builder;
        withUseAmbientOcclusion(arg0: boolean): $StandaloneGeometryBakingContext$Builder;
        withGui3d(arg0: boolean): $StandaloneGeometryBakingContext$Builder;
    }
}
