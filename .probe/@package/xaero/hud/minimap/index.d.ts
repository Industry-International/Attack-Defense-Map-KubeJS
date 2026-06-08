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
        getWaypointWorldRenderer(): $WaypointWorldRenderer;
        getMinimapFBORenderer(): $MinimapFBORenderer;
        getMinimapSafeModeRenderer(): $MinimapSafeModeRenderer;
        /**
         * @deprecated
         */
        getWaypointsIngameRenderer(): $WaypointsIngameRenderer;
        getWaypointMapRenderer(): $WaypointMapRenderer;
        /**
         * @deprecated
         */
        getWaypointGuiRenderer(): $WaypointsGuiRenderer$1;
        /**
         * @deprecated
         */
        getWaypointsGuiRenderer(): $WaypointsGuiRenderer;
        getWorldRendererHandler(): $MinimapElementWorldRendererHandler;
        getOverMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        getModMain(): $HudMod;
        usingFBO(): boolean;
        checkCrashes(): void;
        getCompassRenderer(): $CompassRenderer;
        getCrashedWith(): $Throwable;
        getInfoDisplays(): $InfoDisplays;
        setCrashedWith(arg0: $Throwable): void;
        constructor(arg0: $HudMod);
        get waypointWorldRenderer(): $WaypointWorldRenderer;
        get minimapFBORenderer(): $MinimapFBORenderer;
        get minimapSafeModeRenderer(): $MinimapSafeModeRenderer;
        get waypointsIngameRenderer(): $WaypointsIngameRenderer;
        get waypointMapRenderer(): $WaypointMapRenderer;
        get waypointGuiRenderer(): $WaypointsGuiRenderer$1;
        get waypointsGuiRenderer(): $WaypointsGuiRenderer;
        get worldRendererHandler(): $MinimapElementWorldRendererHandler;
        get overMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        get modMain(): $HudMod;
        get compassRenderer(): $CompassRenderer;
        get infoDisplays(): $InfoDisplays;
    }
}
