import { $FramebufferRenderTargetAccessor } from "@package/foundry/veil/mixin/framebuffer/accessor";
import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $CallbackInfoReturnable, $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Blaze3dRenderTargetExt } from "@package/net/irisshaders/iris/targets";
import { $Enum } from "@package/java/lang";
import { $RenderTargetExtension, $PerformanceRenderTargetExtension } from "@package/foundry/veil/ext";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $Blaze3dRenderTargetExt, $FramebufferRenderTargetAccessor, $PerformanceRenderTargetExtension, $RenderTargetExtension {
        clear(arg0: boolean): void;
        resize(arg0: number, arg1: number, arg2: boolean): void;
        copyDepthFrom(arg0: $RenderTarget): void;
        bindWrite(arg0: boolean): void;
        veil$clearColorBuffer(arg0: boolean): void;
        destroyBuffers(): void;
        setClearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        checkStatus(): void;
        blitToScreen(arg0: number, arg1: number): void;
        blitToScreen(arg0: number, arg1: number, arg2: boolean): void;
        unbindWrite(): void;
        veil$setWrapper(arg0: $AdvancedFbo): void;
        veil$getTexture(arg0: number): number;
        isStencilEnabled(): boolean;
        setFilterMode(arg0: number): void;
        createBuffers(arg0: number, arg1: number, arg2: boolean): void;
        enableStencil(): void;
        getDepthTextureId(): number;
        handler$blh000$veil$bindRead(arg0: $CallbackInfo): void;
        handler$jab000$axiom$blitToScreen(ci: $CallbackInfo): void;
        handler$blh000$veil$destroyBuffers(arg0: $CallbackInfo): void;
        handler$blh000$veil$createBuffers(arg0: $CallbackInfo): void;
        handler$bko000$veil$copyDepthFrom(arg0: $RenderTarget, arg1: $CallbackInfo): void;
        handler$blh000$veil$bindWrite(arg0: boolean, arg1: $CallbackInfo): void;
        handler$dcj000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        iris$getDepthBufferVersion(): number;
        handler$bko000$veil$clear(arg0: boolean, arg1: $CallbackInfo): void;
        iris$getColorBufferVersion(): number;
        handler$blh000$veil$getDepthTextureId(arg0: $CallbackInfoReturnable<any>): void;
        handler$blh000$veil$getColorTextureId(arg0: $CallbackInfoReturnable<any>): void;
        unbindRead(): void;
        bindRead(): void;
        getColorTextureId(): number;
        getClearChannels(): number[];
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(arg0: boolean);
        get stencilEnabled(): boolean;
        get depthTextureId(): number;
        get colorTextureId(): number;
        get clearChannels(): number[];
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        constructor(arg0: number, arg1: number);
    }
    export class $RenderPipeline {
        recordRenderCall(arg0: $RenderCall_): void;
        endRecording(): void;
        beginRecording(): boolean;
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        canBeginRecording(): boolean;
        endProcessing(): void;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        canBeginProcessing(): boolean;
        beginProcessing(): boolean;
        processRecordedQueue(): void;
        constructor();
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $MainTarget$Dimension {
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean);
    }
}
