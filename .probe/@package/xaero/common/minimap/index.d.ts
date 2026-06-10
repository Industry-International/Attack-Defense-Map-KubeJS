import { $Level } from "@package/net/minecraft/world/level";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Item } from "@package/net/minecraft/world/item";
import { $ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$1 } from "@package/xaero/hud/minimap/player/tracker/synced";
import { $ClientSyncedTrackedPlayerManager } from "@package/xaero/common/minimap/radar/tracker/synced";
import { $HudMod, $IXaeroMinimap } from "@package/xaero/common";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MinimapWriter } from "@package/xaero/common/minimap/write";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapElementOverMapRendererHandler } from "@package/xaero/common/minimap/element/render/over";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $MinimapRadar } from "@package/xaero/common/minimap/radar";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as radar from "@package/xaero/common/minimap/radar";
export * as region from "@package/xaero/common/minimap/region";
export * as waypoints from "@package/xaero/common/minimap/waypoints";
export * as render from "@package/xaero/common/minimap/render";
export * as highlight from "@package/xaero/common/minimap/highlight";
export * as write from "@package/xaero/common/minimap/write";
export * as mcworld from "@package/xaero/common/minimap/mcworld";
export * as element from "@package/xaero/common/minimap/element";

declare module "@package/xaero/common/minimap" {
    export class $MinimapProcessor {
        cleanup(): void;
        getSession(): $MinimapSession;
        getNoMinimapMessageReceived(): boolean;
        isConsideringNetherFairPlayMessage(): boolean;
        getForcedFairPlay(): boolean;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        getMinimapInterface(): $MinimapInterface;
        setEnlargedMap(arg0: boolean): void;
        instantZoom(): void;
        onPlayerTick(): void;
        serverHasMod(): boolean;
        onClientTick(): void;
        updateMinimapItem(): void;
        setNoMinimapMessageReceived(arg0: boolean): void;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        getMinimapWriter(): $MinimapWriter;
        getRadarSession(): $RadarSession;
        isEnlargedMap(): boolean;
        static hasMinimapItem(arg0: $Player): boolean;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        getMinimapSize(): number;
        getMinimapItem(): $Item;
        isToResetImage(): boolean;
        setToResetImage(arg0: boolean): void;
        isManualCaveMode(): boolean;
        getMinimapZoom(): number;
        toggleManualCaveMode(): void;
        checkFBO(): void;
        updateZoom(): void;
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        setServerModNetworkVersion(arg0: number): void;
        getTargetZoom(): number;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        getServerModNetworkVersion(): number;
        isCaveModeDisplayed(): boolean;
        getLastMapDimensionScale(): number;
        getLastMapDimension(): $ResourceKey<$Level>;
        getMinimapBufferSize(arg0: number): number;
        setLastMapDimensionScale(arg0: number): void;
        setLastMapDimension(arg0: $ResourceKey_<$Level>): void;
        /**
         * @deprecated
         */
        setLastPlayerDimDiv(arg0: number): void;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        canUseFrameBuffer(): boolean;
        getFBOBufferSize(): number;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        get session(): $MinimapSession;
        get forcedFairPlay(): boolean;
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get minimapInterface(): $MinimapInterface;
        set fairPlayOnlyMessageReceived(value: boolean);
        get minimapWriter(): $MinimapWriter;
        get radarSession(): $RadarSession;
        get minimapSize(): number;
        get minimapItem(): $Item;
        get manualCaveMode(): boolean;
        get minimapZoom(): number;
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        get targetZoom(): number;
        get entityRadar(): $MinimapRadar;
        get caveModeDisplayed(): boolean;
        get FBOBufferSize(): number;
    }
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        /**
         * @deprecated
         */
        getOverMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        constructor(arg0: $HudMod);
        get overMapRendererHandler(): $MinimapElementOverMapRendererHandler;
    }
}
