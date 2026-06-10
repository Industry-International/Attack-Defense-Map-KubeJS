import { $MinimapElementRenderer, $MinimapElementRenderInfo } from "@package/xaero/hud/minimap/element/render";
import { $Predicate } from "@package/java/util/function";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AbstractWaypointRenderContext, $AbstractWaypointRenderProvider } from "@package/xaero/hud/minimap/waypoint/render";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/xaero/hud/minimap/waypoint/render/world" {
    export class $WaypointWorldRenderProvider extends $AbstractWaypointRenderProvider<$WaypointWorldRenderContext> {
        /**
         * @deprecated
         */
        begin(arg0: number, arg1: $WaypointWorldRenderContext): void;
        /**
         * @deprecated
         */
        end(arg0: number, arg1: $WaypointWorldRenderContext): void;
        /**
         * @deprecated
         */
        hasNext(arg0: number, arg1: $WaypointWorldRenderContext): boolean;
        /**
         * @deprecated
         */
        getNext(arg0: number, arg1: $WaypointWorldRenderContext): $Waypoint;
        /**
         * @deprecated
         */
        setupContextAndGetNext(arg0: number, arg1: $WaypointWorldRenderContext): $Waypoint;
        filter: $Predicate<$Waypoint>;
        constructor();
    }
    export class $WaypointWorldRenderer extends $MinimapElementRenderer<$Waypoint, $WaypointWorldRenderContext> {
        renderElement(arg0: $Waypoint, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $MinimapElementRenderInfo, arg8: $GuiGraphics, arg9: $MultiBufferSource$BufferSource): boolean;
    }
    export class $WaypointWorldRenderContext extends $AbstractWaypointRenderContext {
        interactionBoxTop: number;
        onlyMainInfo: boolean;
        renderEntityPos: $Vec3;
        interactionBoxLeft: number;
        dimCoordinateScale: number;
        constructor();
    }
}
