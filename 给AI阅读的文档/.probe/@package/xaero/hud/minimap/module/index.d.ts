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
        getWorldManager(): $MinimapWorldManager;
        getMc(): $Minecraft;
        getRadarSession(): $RadarSession;
        getWaypointSession(): $WaypointSession;
        getProcessor(): $MinimapProcessor;
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        getWorldManagerIO(): $MinimapWorldManagerIO;
        getWorldState(): $MinimapWorldState;
        getDimensionHelper(): $MinimapDimensionHelper;
        getWorldStateUpdater(): $MinimapWorldStateUpdater;
        getConfiguredWidth(): number;
        getHideMinimapUnderF3(): boolean;
        getHideMinimapUnderScreen(): boolean;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get worldManager(): $MinimapWorldManager;
        get mc(): $Minecraft;
        get radarSession(): $RadarSession;
        get waypointSession(): $WaypointSession;
        get processor(): $MinimapProcessor;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get worldManagerIO(): $MinimapWorldManagerIO;
        get worldState(): $MinimapWorldState;
        get dimensionHelper(): $MinimapDimensionHelper;
        get worldStateUpdater(): $MinimapWorldStateUpdater;
        get configuredWidth(): number;
        get hideMinimapUnderF3(): boolean;
        get hideMinimapUnderScreen(): boolean;
    }
}
