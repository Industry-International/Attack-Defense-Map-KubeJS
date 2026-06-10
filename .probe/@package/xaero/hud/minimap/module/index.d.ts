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
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        getProcessor(): $MinimapProcessor;
        getWorldManagerIO(): $MinimapWorldManagerIO;
        getWorldState(): $MinimapWorldState;
        getDimensionHelper(): $MinimapDimensionHelper;
        getMc(): $Minecraft;
        getRadarSession(): $RadarSession;
        getWorldStateUpdater(): $MinimapWorldStateUpdater;
        getWaypointSession(): $WaypointSession;
        getConfiguredWidth(): number;
        getWorldManager(): $MinimapWorldManager;
        getHideMinimapUnderF3(): boolean;
        getHideMinimapUnderScreen(): boolean;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get processor(): $MinimapProcessor;
        get worldManagerIO(): $MinimapWorldManagerIO;
        get worldState(): $MinimapWorldState;
        get dimensionHelper(): $MinimapDimensionHelper;
        get mc(): $Minecraft;
        get radarSession(): $RadarSession;
        get worldStateUpdater(): $MinimapWorldStateUpdater;
        get waypointSession(): $WaypointSession;
        get configuredWidth(): number;
        get worldManager(): $MinimapWorldManager;
        get hideMinimapUnderF3(): boolean;
        get hideMinimapUnderScreen(): boolean;
    }
}
