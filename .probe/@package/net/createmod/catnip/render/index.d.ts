import { $RenderType, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/net/createmod/catnip/render" {
    export class $BindableTexture {
    }
    export interface $BindableTexture {
        getLocation(): $ResourceLocation;
        bind(): void;
        get location(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $BindableTexture}.
     */
    export type $BindableTexture_ = (() => $ResourceLocation_);
    export class $SuperRenderTypeBuffer {
    }
    export interface $SuperRenderTypeBuffer extends $MultiBufferSource {
        getBuffer(arg0: $RenderType): $VertexConsumer;
        draw(arg0: $RenderType): void;
        draw(): void;
        getEarlyBuffer(arg0: $RenderType): $VertexConsumer;
        getLateBuffer(arg0: $RenderType): $VertexConsumer;
    }
}
