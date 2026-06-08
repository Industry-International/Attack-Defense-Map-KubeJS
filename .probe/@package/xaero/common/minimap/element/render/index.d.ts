import { $MinimapElementRenderer as $MinimapElementRenderer$1, $MinimapElementRendererHandler as $MinimapElementRendererHandler$1 } from "@package/xaero/hud/minimap/element/render";
import { $MinimapRendererHelper } from "@package/xaero/common/minimap/render";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/common/minimap/element/render" {
    /**
     * @deprecated
     */
    export class $MinimapElementRenderer<E, RC> extends $MinimapElementRenderer$1<E, RC> {
        /**
         * @deprecated
         */
        shouldRender(arg0: number): boolean;
        /**
         * @deprecated
         */
        renderElement(arg0: number, arg1: boolean, arg2: boolean, arg3: $GuiGraphics, arg4: $MultiBufferSource$BufferSource, arg5: $Font, arg6: $RenderTarget, arg7: $MinimapRendererHelper, arg8: $Entity, arg9: $Player, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: E, arg17: number, arg18: number, arg19: boolean, arg20: number): boolean;
        /**
         * @deprecated
         */
        postRender(arg0: number, arg1: $Entity, arg2: $Player, arg3: number, arg4: number, arg5: number, arg6: $IXaeroMinimap, arg7: $MultiBufferSource$BufferSource, arg8: $MultiTextureRenderTypeRendererProvider): void;
        /**
         * @deprecated
         */
        preRender(arg0: number, arg1: $Entity, arg2: $Player, arg3: number, arg4: number, arg5: number, arg6: $IXaeroMinimap, arg7: $MultiBufferSource$BufferSource, arg8: $MultiTextureRenderTypeRendererProvider): void;
        /**
         * @deprecated
         */
        constructor(arg0: $MinimapElementReader<E, RC>, arg1: $MinimapElementRenderProvider<E, RC>, arg2: RC);
    }
    /**
     * @deprecated
     */
    export class $MinimapElementRendererHandler extends $MinimapElementRendererHandler$1 {
        /**
         * @deprecated
         */
        add(arg0: $MinimapElementRenderer<never, never>): void;
    }
}
