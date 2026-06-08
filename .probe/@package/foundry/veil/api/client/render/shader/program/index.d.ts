import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Codec } from "@package/com/mojang/serialization";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $ShaderTextureSource, $ShaderTextureSource$Context_ } from "@package/foundry/veil/api/client/render/shader/texture";
import { $Map_, $Map, $Set, $Set_ } from "@package/java/util";
import { $GlStateManager$DestFactor, $GlStateManager$SourceFactor_, $GlStateManager$DestFactor_, $GlStateManager$SourceFactor } from "@package/com/mojang/blaze3d/platform";
import { $ShaderFeature, $ShaderPreDefinitions, $ShaderFeature_ } from "@package/foundry/veil/api/client/render/shader";
import { $ShaderUniformAccess } from "@package/foundry/veil/api/client/render/shader/uniform";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexFormat, $VertexFormat$Mode_ } from "@package/com/mojang/blaze3d/vertex";
import { $AbstractTexture } from "@package/net/minecraft/client/renderer/texture";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $CharSequence, $Record } from "@package/java/lang";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $CompiledShader } from "@package/foundry/veil/api/client/render/shader/compiler";
import { $Matrix4fc } from "@package/org/joml";

declare module "@package/foundry/veil/api/client/render/shader/program" {
    export class $TextureUniformAccess {
        static setFramebufferSamplers(arg0: $ShaderInstance, arg1: $AdvancedFbo): void;
    }
    export interface $TextureUniformAccess {
        bindSamplers(arg0: number): void;
        bindSamplers(arg0: $ShaderTextureSource$Context_, arg1: number): void;
        removeTexture(arg0: $CharSequence): void;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number): void;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): void;
        setTexture(arg0: $CharSequence, arg1: $ResourceLocation_): void;
        setTexture(arg0: $CharSequence, arg1: $ResourceLocation_, arg2: number): void;
        setTexture(arg0: $CharSequence, arg1: $AbstractTexture): void;
        setTexture(arg0: $CharSequence, arg1: $AbstractTexture, arg2: number): void;
        setFramebufferSamplers(arg0: $AdvancedFbo): void;
        clearSamplers(): void;
    }
    export class $ProgramDefinition extends $Record {
        compute(): $ResourceLocation;
        fragment(): $ResourceLocation;
        definitions(): string[];
        definitionDefaults(): $Map<string, string>;
        shaders(): $Int2ObjectMap<$ResourceLocation>;
        tesselationEvaluation(): $ResourceLocation;
        vertex(): $ResourceLocation;
        requiredFeatures(): $ShaderFeature[];
        samplers(): $Map<string, $ShaderTextureSource>;
        tesselationControl(): $ResourceLocation;
        blendMode(): $ShaderBlendMode;
        geometry(): $ResourceLocation;
        getMacros(arg0: $Set_<string>, arg1: $ShaderPreDefinitions): $Map<string, string>;
        constructor(vertex: $ResourceLocation_, tesselationControl: $ResourceLocation_, tesselationEvaluation: $ResourceLocation_, geometry: $ResourceLocation_, fragment: $ResourceLocation_, compute: $ResourceLocation_, definitions: string[], definitionDefaults: $Map_<string, string>, samplers: $Map_<string, $ShaderTextureSource>, shaders: $Int2ObjectMap<$ResourceLocation_>, requiredFeatures: $ShaderFeature_[], blendMode: $ShaderBlendMode_);
    }
    export class $ShaderProgram {
        static unbind(): void;
    }
    export interface $ShaderProgram extends $NativeResource, $UniformAccess, $TextureUniformAccess {
        getName(): $ResourceLocation;
        getDefinition(): $ProgramDefinition;
        bind(): void;
        isValid(): boolean;
        getFormat(): $VertexFormat;
        getComputeShader(): $CompiledShader;
        getVertexShader(): $CompiledShader;
        hasFragment(): boolean;
        hasGeometry(): boolean;
        getGeometryShader(): $CompiledShader;
        getFragmentShader(): $CompiledShader;
        getProgram(): number;
        getDefinitionDependencies(): $Set<string>;
        /**
         * @deprecated
         */
        toShaderInstance(): $ShaderInstance;
        setDefaultUniforms(arg0: $VertexFormat$Mode_): void;
        setDefaultUniforms(arg0: $VertexFormat$Mode_, arg1: $Matrix4fc, arg2: $Matrix4fc): void;
        getRequiredFeatures(): $Set<$ShaderFeature>;
        getShaders(): $Int2ObjectMap<$CompiledShader>;
        isCompute(): boolean;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        hasTesselation(): boolean;
        getActiveDynamicBuffers(): number;
        hasVertex(): boolean;
        getTessellationEvaluationShader(): $CompiledShader;
        getTessellationControlShader(): $CompiledShader;
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
        get name(): $ResourceLocation;
        get definition(): $ProgramDefinition;
        get valid(): boolean;
        get format(): $VertexFormat;
        get computeShader(): $CompiledShader;
        get vertexShader(): $CompiledShader;
        get geometryShader(): $CompiledShader;
        get fragmentShader(): $CompiledShader;
        get program(): number;
        get definitionDependencies(): $Set<string>;
        get requiredFeatures(): $Set<$ShaderFeature>;
        get shaders(): $Int2ObjectMap<$CompiledShader>;
        get compute(): boolean;
        get activeDynamicBuffers(): number;
        get tessellationEvaluationShader(): $CompiledShader;
        get tessellationControlShader(): $CompiledShader;
    }
    export class $UniformAccess {
    }
    export interface $UniformAccess {
        getStorageBlock(arg0: $CharSequence): number;
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
        hasUniform(arg0: $CharSequence): boolean;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        getUniformBlock(arg0: $CharSequence): number;
        hasUniformBlock(arg0: $CharSequence): boolean;
        getUniformSafe(arg0: $CharSequence): $ShaderUniformAccess;
        getUniformLocation(arg0: $CharSequence): number;
        hasStorageBlock(arg0: $CharSequence): boolean;
    }
    export class $ShaderBlendMode extends $Record {
        apply(): void;
        srcColorFactor(): $GlStateManager$SourceFactor;
        dstColorFactor(): $GlStateManager$DestFactor;
        srcAlphaFactor(): $GlStateManager$SourceFactor;
        dstAlphaFactor(): $GlStateManager$DestFactor;
        hasEquation(): boolean;
        alphaEquation(): $ShaderBlendMode$BlendEquation;
        colorEquation(): $ShaderBlendMode$BlendEquation;
        static CODEC: $Codec<$ShaderBlendMode>;
        static DESTINATION_FACTOR_CODEC: $Codec<$GlStateManager$DestFactor>;
        static SOURCE_FACTOR_CODEC: $Codec<$GlStateManager$SourceFactor>;
        constructor(colorEquation: $ShaderBlendMode$BlendEquation, alphaEquation: $ShaderBlendMode$BlendEquation, srcColorFactor: $GlStateManager$SourceFactor_, dstColorFactor: $GlStateManager$DestFactor_, srcAlphaFactor: $GlStateManager$SourceFactor_, dstAlphaFactor: $GlStateManager$DestFactor_);
    }
}
