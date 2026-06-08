import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapDimensionHelper, $MinimapWorldManager } from "@package/xaero/hud/minimap/world";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapWorldManagerIO } from "@package/xaero/hud/minimap/world/io";
import { $HudMod } from "@package/xaero/common";
import { $ModuleSession, $HudModule } from "@package/xaero/hud/module";
import { $Minecraft } from "@package/net/minecraft/client";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $MinimapWorldState, $MinimapWorldStateUpdater } from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/module" {
    export class $MinimapSession extends $ModuleSession<$MinimapSession> {
        getWorldState(): $MinimapWorldState;
        getWorldManagerIO(): $MinimapWorldManagerIO;
        getProcessor(): $MinimapProcessor;
        getWaypointSession(): $WaypointSession;
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        getMc(): $Minecraft;
        getWorldManager(): $MinimapWorldManager;
        getRadarSession(): $RadarSession;
        getWorldStateUpdater(): $MinimapWorldStateUpdater;
        getDimensionHelper(): $MinimapDimensionHelper;
        getConfiguredWidth(): number;
        getHideMinimapUnderF3(): boolean;
        getHideMinimapUnderScreen(): boolean;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get worldState(): $MinimapWorldState;
        get worldManagerIO(): $MinimapWorldManagerIO;
        get processor(): $MinimapProcessor;
        get waypointSession(): $WaypointSession;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get mc(): $Minecraft;
        get worldManager(): $MinimapWorldManager;
        get radarSession(): $RadarSession;
        get worldStateUpdater(): $MinimapWorldStateUpdater;
        get dimensionHelper(): $MinimapDimensionHelper;
        get configuredWidth(): number;
        get hideMinimapUnderF3(): boolean;
        get hideMinimapUnderScreen(): boolean;
    }
}
