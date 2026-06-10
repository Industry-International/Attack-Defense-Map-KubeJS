import { $MinimapElementRenderLocation, $MinimapElementRenderInfo } from "@package/xaero/hud/minimap/element/render";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $MinimapElementRenderer } from "@package/xaero/common/minimap/element/render";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/hud/minimap/radar/render/element" {
    export class $RadarRenderer extends $MinimapElementRenderer<$Entity, $RadarRenderContext> {
        renderElement(arg0: $Entity, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $MinimapElementRenderInfo, arg8: $GuiGraphics, arg9: $MultiBufferSource$BufferSource): boolean;
        renderSingleEntity(arg0: $Entity, arg1: boolean, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean, arg6: $MinimapElementRenderLocation, arg7: $RenderTarget, arg8: $GuiGraphics): void;
    }
}
