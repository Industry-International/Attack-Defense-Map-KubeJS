import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $MinimapElementReader } from "@package/xaero/hud/minimap/element/render";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $WaypointRenderProvider as $WaypointRenderProvider$1, $WaypointsGuiRenderer as $WaypointsGuiRenderer$1, $WaypointMapRenderContext, $WaypointReader as $WaypointReader$1 } from "@package/xaero/hud/minimap/waypoint/render";
import { $WaypointWorldRenderProvider, $WaypointWorldRenderer, $WaypointWorldRenderContext } from "@package/xaero/hud/minimap/waypoint/render/world";
import { $Predicate } from "@package/java/util/function";
import { $MinimapRendererHelper } from "@package/xaero/common/minimap/render";
import { $VertexConsumer, $Tesselator, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ModSettings } from "@package/xaero/common/settings";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vector4f, $Matrix4f } from "@package/org/joml";

declare module "@package/xaero/common/minimap/waypoints/render" {
    /**
     * @deprecated
     */
    export class $WaypointReader extends $WaypointReader$1 {
        /**
         * @deprecated
         */
        isInteractable(arg0: number, arg1: $Waypoint): boolean;
        /**
         * @deprecated
         */
        getBoxScale(arg0: number, arg1: $Waypoint, arg2: $WaypointMapRenderContext): number;
        constructor();
    }
    /**
     * @deprecated
     */
    export class $WaypointGuiRenderContext extends $WaypointMapRenderContext {
        dimCoordinateScale: number;
        constructor();
    }
    /**
     * @deprecated
     */
    export class $WaypointsIngameRenderer extends $WaypointWorldRenderer {
        /**
         * @deprecated
         */
        render(arg0: $MinimapSession, arg1: number, arg2: $MinimapProcessor, arg3: $Matrix4f, arg4: $Matrix4f): void;
        /**
         * @deprecated
         */
        drawIconInWorld(arg0: $PoseStack, arg1: $MinimapRendererHelper, arg2: $Waypoint, arg3: $ModSettings, arg4: $Tesselator, arg5: $Font, arg6: string, arg7: string, arg8: number, arg9: boolean, arg10: $MultiBufferSource$BufferSource, arg11: $VertexConsumer, arg12: boolean, arg13: string): void;
        /**
         * @deprecated
         */
        drawAsOverlay(arg0: $PoseStack, arg1: $PoseStack, arg2: $MinimapRendererHelper, arg3: $Waypoint, arg4: $ModSettings, arg5: $Tesselator, arg6: $Font, arg7: string, arg8: string, arg9: number, arg10: boolean, arg11: $MultiBufferSource$BufferSource, arg12: $VertexConsumer, arg13: $Matrix4f, arg14: number, arg15: number, arg16: number, arg17: number, arg18: boolean, arg19: string): void;
        constructor(arg0: $MinimapElementReader<$Waypoint, $WaypointWorldRenderContext>, arg1: $WaypointWorldRenderProvider, arg2: $WaypointWorldRenderContext, arg3: $Vector4f);
    }
    /**
     * @deprecated
     */
    export class $WaypointsGuiRenderer extends $WaypointsGuiRenderer$1 {
        /**
         * @deprecated
         */
        renderElement(arg0: number, arg1: boolean, arg2: boolean, arg3: $GuiGraphics, arg4: $MultiBufferSource$BufferSource, arg5: $Font, arg6: $RenderTarget, arg7: $MinimapRendererHelper, arg8: $Entity, arg9: $Player, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: $Waypoint, arg17: number, arg18: number, arg19: boolean, arg20: number): boolean;
        /**
         * @deprecated
         */
        drawIconOnGUI(arg0: $GuiGraphics, arg1: $MinimapRendererHelper, arg2: $Waypoint, arg3: $ModSettings, arg4: number, arg5: number, arg6: $MultiBufferSource$BufferSource, arg7: $VertexConsumer): void;
        /**
         * @deprecated
         */
        updateWaypointCollection(arg0: $IXaeroMinimap): void;
        constructor(arg0: $WaypointReader, arg1: $WaypointRenderProvider, arg2: $WaypointGuiRenderContext);
    }
    /**
     * @deprecated
     */
    export class $WaypointRenderProvider extends $WaypointRenderProvider$1 {
        begin(arg0: number, arg1: $WaypointMapRenderContext): void;
        end(arg0: number, arg1: $WaypointMapRenderContext): void;
        hasNext(arg0: number, arg1: $WaypointMapRenderContext): boolean;
        getNext(arg0: number, arg1: $WaypointMapRenderContext): $Waypoint;
        setupContextAndGetNext(arg0: number, arg1: $WaypointMapRenderContext): $Waypoint;
        filter: $Predicate<$Waypoint>;
        constructor();
    }
}
