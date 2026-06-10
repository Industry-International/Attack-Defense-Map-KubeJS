import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $MinimapElementRenderInfo } from "@package/xaero/hud/minimap/element/render";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $MinimapRendererHelper } from "@package/xaero/common/minimap/render";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $MinimapElementRenderer } from "@package/xaero/common/minimap/element/render";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Waypoint, $WaypointsManager } from "@package/xaero/common/minimap/waypoints";
import { $Window } from "@package/com/mojang/blaze3d/platform";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as world from "@package/xaero/hud/minimap/waypoint/render/world";

declare module "@package/xaero/hud/minimap/waypoint/render" {
    export class $WaypointDeleter {
        begin(): void;
        add(arg0: $Waypoint): void;
        deleteCollected(arg0: $MinimapSession, arg1: $MinimapWorld, arg2: boolean): void;
        constructor(arg0: $IXaeroMinimap);
    }
    /**
     * @deprecated
     */
    export class $WaypointsGuiRenderer extends $WaypointMapRenderer {
    }
    export class $WaypointMapRenderContext extends $AbstractWaypointRenderContext {
        dimCoordinateScale: number;
        constructor();
    }
    export class $WaypointMapRenderer extends $MinimapElementRenderer<$Waypoint, $WaypointMapRenderContext> {
        renderElement(arg0: $Waypoint, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $MinimapElementRenderInfo, arg8: $GuiGraphics, arg9: $MultiBufferSource$BufferSource): boolean;
        drawSetChange(arg0: $MinimapSession, arg1: $GuiGraphics, arg2: $Window): void;
        /**
         * @deprecated
         */
        drawSetChange(arg0: $WaypointsManager, arg1: $GuiGraphics, arg2: $Window): void;
        drawIconOnGUI(arg0: $GuiGraphics, arg1: $MinimapRendererHelper, arg2: $Waypoint, arg3: number, arg4: number, arg5: number, arg6: $MultiBufferSource$BufferSource, arg7: $VertexConsumer, arg8: $VertexConsumer): void;
        /**
         * @deprecated
         */
        drawIconOnGUI(arg0: $GuiGraphics, arg1: $MinimapRendererHelper, arg2: $Waypoint, arg3: number, arg4: number, arg5: $MultiBufferSource$BufferSource, arg6: $VertexConsumer, arg7: $VertexConsumer): void;
        /**
         * @deprecated
         */
        updateWaypointCollection(): void;
    }
}
