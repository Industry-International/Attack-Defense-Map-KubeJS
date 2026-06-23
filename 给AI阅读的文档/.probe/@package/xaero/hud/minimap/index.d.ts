import { $WaypointWorldRenderer } from "@package/xaero/hud/minimap/waypoint/render/world";
import { $MinimapElementOverMapRendererHandler } from "@package/xaero/hud/minimap/element/render/over";
import { $MinimapSafeModeRenderer, $MinimapFBORenderer } from "@package/xaero/common/minimap/render";
import { $WaypointsIngameRenderer, $WaypointsGuiRenderer } from "@package/xaero/common/minimap/waypoints/render";
import { $InfoDisplays } from "@package/xaero/hud/minimap/info";
import { $MinimapElementWorldRendererHandler } from "@package/xaero/hud/minimap/element/render/world";
import { $HudMod } from "@package/xaero/common";
import { $Throwable } from "@package/java/lang";
import { $WaypointMapRenderer, $WaypointsGuiRenderer as $WaypointsGuiRenderer$1 } from "@package/xaero/hud/minimap/waypoint/render";
import { $CompassRenderer } from "@package/xaero/hud/minimap/compass/render";
export * as element from "@package/xaero/hud/minimap/element";
export * as radar from "@package/xaero/hud/minimap/radar";
export * as waypoint from "@package/xaero/hud/minimap/waypoint";
export * as info from "@package/xaero/hud/minimap/info";
export * as world from "@package/xaero/hud/minimap/world";
export * as module from "@package/xaero/hud/minimap/module";
export * as player from "@package/xaero/hud/minimap/player";
export * as compass from "@package/xaero/hud/minimap/compass";
export * as common from "@package/xaero/hud/minimap/common";

declare module "@package/xaero/hud/minimap" {
    export class $Minimap {
        checkCrashes(): void;
        getCrashedWith(): $Throwable;
        getCompassRenderer(): $CompassRenderer;
        getWorldRendererHandler(): $MinimapElementWorldRendererHandler;
        getOverMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        getInfoDisplays(): $InfoDisplays;
        setCrashedWith(arg0: $Throwable): void;
        /**
         * @deprecated
         */
        getWaypointsGuiRenderer(): $WaypointsGuiRenderer;
        /**
         * @deprecated
         */
        getWaypointsIngameRenderer(): $WaypointsIngameRenderer;
        getMinimapSafeModeRenderer(): $MinimapSafeModeRenderer;
        getWaypointWorldRenderer(): $WaypointWorldRenderer;
        getWaypointMapRenderer(): $WaypointMapRenderer;
        getMinimapFBORenderer(): $MinimapFBORenderer;
        /**
         * @deprecated
         */
        getWaypointGuiRenderer(): $WaypointsGuiRenderer$1;
        getModMain(): $HudMod;
        usingFBO(): boolean;
        constructor(arg0: $HudMod);
        get compassRenderer(): $CompassRenderer;
        get worldRendererHandler(): $MinimapElementWorldRendererHandler;
        get overMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        get infoDisplays(): $InfoDisplays;
        get waypointsGuiRenderer(): $WaypointsGuiRenderer;
        get waypointsIngameRenderer(): $WaypointsIngameRenderer;
        get minimapSafeModeRenderer(): $MinimapSafeModeRenderer;
        get waypointWorldRenderer(): $WaypointWorldRenderer;
        get waypointMapRenderer(): $WaypointMapRenderer;
        get minimapFBORenderer(): $MinimapFBORenderer;
        get waypointGuiRenderer(): $WaypointsGuiRenderer$1;
        get modMain(): $HudMod;
    }
}
