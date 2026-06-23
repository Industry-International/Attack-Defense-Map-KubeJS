import { $JsonDeserializationContext_, $JsonObject_ } from "@package/com/google/gson";
import { $InputStream } from "@package/java/io";
import { $ObjModelAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $IGeometryBakingContext, $SimpleUnbakedGeometry, $IGeometryLoader } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Pair as $Pair$1 } from "@package/com/mojang/datafixers/util";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Material, $UnbakedModel, $ModelState, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Set, $Set_, $Collection } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $Direction } from "@package/net/minecraft/core";
import { $CompositeRenderable$PartBuilder, $CompositeRenderable } from "@package/net/neoforged/neoforge/client/model/renderable";
import { $IModelBuilder } from "@package/net/neoforged/neoforge/client/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record, $AutoCloseable } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $Vector4f } from "@package/org/joml";

declare module "@package/net/neoforged/neoforge/client/model/obj" {
    export class $ObjModel$ModelMesh {
    }
    /**
     * A model loaded from an OBJ file.
     * 
     * Supports positions, texture coordinates, normals and colors. The material library
     * has support for numerous features, including support for `ResourceLocation` textures (non-standard).
     */
    export class $ObjModel extends $SimpleUnbakedGeometry<$ObjModel> implements $ObjModelAccessor {
        static parse(arg0: $ObjTokenizer, arg1: $ObjModel$ModelSettings_): $ObjModel;
        bakeRenderable(configuration: $IGeometryBakingContext): $CompositeRenderable;
        getRootComponentNames(): $Set<string>;
        invokeMakeQuad(arg0: number[][], arg1: number, arg2: $Vector4f, arg3: $Vector4f, arg4: $TextureAtlasSprite, arg5: $Transformation): $Pair<$BakedQuad, $Direction>;
        emissiveAmbient: boolean;
        automaticCulling: boolean;
        mtlOverride: string;
        modelLocation: $ResourceLocation;
        flipV: boolean;
        shadeQuads: boolean;
        get rootComponentNames(): $Set<string>;
    }
    /**
     * An OBJ material library (MTL), composed of named materials.
     */
    export class $ObjMaterialLibrary {
        getMaterial(arg0: string): $ObjMaterialLibrary$Material;
        static EMPTY: $ObjMaterialLibrary;
        constructor(reader: $ObjTokenizer);
    }
    /**
     * A tokenizer for OBJ and MTL files.
     * 
     * Joins split lines and ignores comments.
     */
    export class $ObjTokenizer implements $AutoCloseable {
        close(): void;
        readAndSplitLine(ignoreEmptyLines: boolean): string[];
        constructor(inputStream: $InputStream);
    }
    export class $ObjModel$ModelObject {
        name(): string;
        getTextures(owner: $IGeometryBakingContext, modelGetter: $Function_<$ResourceLocation, $UnbakedModel>, missingTextureErrors: $Set_<$Pair$1<string, string>>): $Collection<$Material>;
        bake(builder: $CompositeRenderable$PartBuilder<never>, configuration: $IGeometryBakingContext): void;
        addQuads(owner: $IGeometryBakingContext, modelBuilder: $IModelBuilder<never>, baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelTransform: $ModelState): void;
    }
    export class $ObjModel$ModelGroup extends $ObjModel$ModelObject {
    }
    /**
     * A loader for OBJ models.
     * 
     * Allows the user to enable automatic face culling, toggle quad shading, flip UVs, render emissively and specify a
     * material library override.
     */
    export class $ObjLoader implements $IGeometryLoader<$ObjModel>, $ResourceManagerReloadListener {
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        loadMaterialLibrary(materialLocation: $ResourceLocation_): $ObjMaterialLibrary;
        loadModel(settings: $ObjModel$ModelSettings_): $ObjModel;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): $ObjModel;
        static INSTANCE: $ObjLoader;
        constructor();
        get name(): string;
    }
    export class $ObjModel$ModelSettings extends $Record {
        shadeQuads(): boolean;
        modelLocation(): $ResourceLocation;
        flipV(): boolean;
        mtlOverride(): string;
        automaticCulling(): boolean;
        emissiveAmbient(): boolean;
        constructor(modelLocation: $ResourceLocation_, automaticCulling: boolean, shadeQuads: boolean, flipV: boolean, emissiveAmbient: boolean, mtlOverride: string);
    }
    export class $ObjMaterialLibrary$Material {
        ambientColorMap: string;
        ambientColor: $Vector4f;
        specularColor: $Vector4f;
        specularColorMap: string;
        diffuseColorMap: string;
        transparency: number;
        name: string;
        dissolve: number;
        diffuseColor: $Vector4f;
        specularHighlight: number;
        diffuseTintIndex: number;
        constructor(name: string);
    }
}
