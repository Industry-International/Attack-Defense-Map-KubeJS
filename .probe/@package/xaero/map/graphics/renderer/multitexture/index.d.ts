import { $IntConsumer_ } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BufferBuilder } from "@package/com/mojang/blaze3d/vertex";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/xaero/map/graphics/renderer/multitexture" {
    export class $MultiTextureRenderTypeRenderer {
        begin(arg0: number): $BufferBuilder;
    }
    export class $MultiTextureRenderTypeRendererProvider {
        draw(arg0: $MultiTextureRenderTypeRenderer): void;
        static defaultTextureBind(arg0: number): void;
        getRenderer(arg0: $IntConsumer_, arg1: $IntConsumer_, arg2: $RenderType): $MultiTextureRenderTypeRenderer;
        getRenderer(arg0: $IntConsumer_, arg1: $IntConsumer_, arg2: $Runnable_, arg3: $RenderType): $MultiTextureRenderTypeRenderer;
        constructor(arg0: number);
    }
}
