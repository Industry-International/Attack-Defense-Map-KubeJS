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
        setFramebuffer(arg0: $ResourceLocation_, arg1: $AdvancedFbo): void;
        applySamplers(arg0: $TextureUniformAccess): void;
        clearSamplers(arg0: $TextureUniformAccess): void;
        getShader(arg0: $ResourceLocation_): $ShaderProgram;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): void;
        getFramebufferOrDraw(arg0: $ResourceLocation_): $AdvancedFbo;
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
        getUniformBlock(arg0: $CharSequence): number;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        getUniformLocation(arg0: $CharSequence): number;
        hasUniformBlock(arg0: $CharSequence): boolean;
        getUniformSafe(arg0: $CharSequence): $ShaderUniformAccess;
        hasStorageBlock(arg0: $CharSequence): boolean;
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
        hasUniform(arg0: $CharSequence): boolean;
        getStorageBlock(arg0: $CharSequence): number;
        get type(): $PostPipelineStageRegistry$PipelineType<$PostPipeline>;
    }
}
