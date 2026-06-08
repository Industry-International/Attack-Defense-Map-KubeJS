import { $Codec } from "@package/com/mojang/serialization";
import { $ShaderUniformAccess } from "@package/foundry/veil/api/client/render/shader/uniform";
import { $ShaderTextureSource$Context } from "@package/foundry/veil/api/client/render/shader/texture";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $PostPipelineStageRegistry$PipelineType } from "@package/foundry/veil/api/client/registry";
import { $CharSequence } from "@package/java/lang";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $UniformAccess, $ShaderProgram, $TextureUniformAccess } from "@package/foundry/veil/api/client/render/shader/program";

declare module "@package/foundry/veil/api/client/render/post" {
    export class $PostPipeline$Context {
    }
    export interface $PostPipeline$Context extends $ShaderTextureSource$Context {
        getPipeline(arg0: $ResourceLocation_): $PostPipeline;
        getFramebufferOrDraw(arg0: $ResourceLocation_): $AdvancedFbo;
        getShader(arg0: $ResourceLocation_): $ShaderProgram;
        setFramebuffer(arg0: $ResourceLocation_, arg1: $AdvancedFbo): void;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): void;
        clearSamplers(arg0: $TextureUniformAccess): void;
        applySamplers(arg0: $TextureUniformAccess): void;
        getDrawFramebuffer(): $AdvancedFbo;
        get drawFramebuffer(): $AdvancedFbo;
    }
    export class $PostPipeline {
        static CODEC: $Codec<$PostPipeline>;
    }
    export interface $PostPipeline extends $UniformAccess, $NativeResource {
        apply(arg0: $PostPipeline$Context): void;
        getType(): $PostPipelineStageRegistry$PipelineType<$PostPipeline>;
        free(): void;
        getUniformLocation(arg0: $CharSequence): number;
        getUniformBlock(arg0: $CharSequence): number;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        getStorageBlock(arg0: $CharSequence): number;
        hasUniform(arg0: $CharSequence): boolean;
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
        hasUniformBlock(arg0: $CharSequence): boolean;
        hasStorageBlock(arg0: $CharSequence): boolean;
        getUniformSafe(arg0: $CharSequence): $ShaderUniformAccess;
        get type(): $PostPipelineStageRegistry$PipelineType<$PostPipeline>;
    }
}
