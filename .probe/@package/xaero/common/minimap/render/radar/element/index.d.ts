import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $RadarRenderContext, $RadarElementReader, $RadarRenderer as $RadarRenderer$1, $RadarRenderProvider } from "@package/xaero/hud/minimap/radar/render/element";
import { $MinimapElementRenderLocation } from "@package/xaero/hud/minimap/element/render";
import { $MultiBufferSource$BufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $EntityRadarCategory } from "@package/xaero/hud/minimap/radar/category";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MinimapRendererHelper } from "@package/xaero/common/minimap/render";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $RadarIconManager } from "@package/xaero/hud/minimap/radar/icon";
import { $MultiTextureRenderTypeRenderer } from "@package/xaero/common/graphics/renderer/multitexture";
import { $MinimapRadar } from "@package/xaero/common/minimap/radar";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/common/minimap/render/radar/element" {
    /**
     * @deprecated
     */
    export class $RadarRenderer extends $RadarRenderer$1 {
        /**
         * @deprecated
         */
        renderElement(arg0: number, arg1: boolean, arg2: boolean, arg3: $GuiGraphics, arg4: $MultiBufferSource$BufferSource, arg5: $Font, arg6: $RenderTarget, arg7: $MinimapRendererHelper, arg8: $Entity, arg9: $Player, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: $Entity, arg17: number, arg18: number, arg19: boolean, arg20: number): boolean;
        /**
         * @deprecated
         */
        renderEntityDotToFBO(arg0: number, arg1: boolean, arg2: $GuiGraphics, arg3: $MinimapProcessor, arg4: $Player, arg5: $Entity, arg6: $Entity, arg7: number, arg8: boolean, arg9: boolean, arg10: $MinimapRadar, arg11: number, arg12: boolean, arg13: boolean, arg14: boolean, arg15: boolean, arg16: number, arg17: $MultiBufferSource$BufferSource, arg18: $RenderType, arg19: $VertexConsumer, arg20: $MultiTextureRenderTypeRenderer, arg21: $VertexConsumer, arg22: number, arg23: boolean, arg24: number, arg25: boolean, arg26: number, arg27: number, arg28: number, arg29: number, arg30: number, arg31: $EntityRadarCategory, arg32: $MinimapRendererHelper, arg33: $Font, arg34: $RenderTarget, arg35: number): void;
        /**
         * @deprecated
         */
        renderEntityDotToFBO(arg0: $MinimapElementRenderLocation, arg1: boolean, arg2: $GuiGraphics, arg3: $MinimapProcessor, arg4: $Player, arg5: $Entity, arg6: $Entity, arg7: number, arg8: boolean, arg9: boolean, arg10: $MinimapRadar, arg11: number, arg12: boolean, arg13: boolean, arg14: boolean, arg15: boolean, arg16: number, arg17: $MultiBufferSource$BufferSource, arg18: $RenderType, arg19: $VertexConsumer, arg20: $MultiTextureRenderTypeRenderer, arg21: $VertexConsumer, arg22: number, arg23: boolean, arg24: number, arg25: boolean, arg26: number, arg27: number, arg28: number, arg29: number, arg30: number, arg31: $EntityRadarCategory, arg32: $MinimapRendererHelper, arg33: $Font, arg34: $RenderTarget, arg35: number): void;
        constructor(arg0: $RadarIconManager, arg1: $Minimap, arg2: $RadarElementReader, arg3: $RadarRenderProvider, arg4: $RadarRenderContext);
    }
}
