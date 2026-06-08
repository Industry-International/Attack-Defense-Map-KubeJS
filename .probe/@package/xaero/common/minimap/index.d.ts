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
        instantZoom(): void;
        setEnlargedMap(arg0: boolean): void;
        getTargetZoom(): number;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        getMinimapInterface(): $MinimapInterface;
        onPlayerTick(): void;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        getMinimapZoom(): number;
        setToResetImage(arg0: boolean): void;
        isManualCaveMode(): boolean;
        isToResetImage(): boolean;
        getRadarSession(): $RadarSession;
        isEnlargedMap(): boolean;
        updateMinimapItem(): void;
        getMinimapWriter(): $MinimapWriter;
        getNoMinimapMessageReceived(): boolean;
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        canUseFrameBuffer(): boolean;
        getFBOBufferSize(): number;
        getSession(): $MinimapSession;
        static hasMinimapItem(arg0: $Player): boolean;
        setNoMinimapMessageReceived(arg0: boolean): void;
        toggleManualCaveMode(): void;
        serverHasMod(): boolean;
        getForcedFairPlay(): boolean;
        onClientTick(): void;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        getMinimapItem(): $Item;
        getMinimapSize(): number;
        setServerModNetworkVersion(arg0: number): void;
        updateZoom(): void;
        getMinimapBufferSize(arg0: number): number;
        /**
         * @deprecated
         */
        setLastPlayerDimDiv(arg0: number): void;
        setLastMapDimensionScale(arg0: number): void;
        setLastMapDimension(arg0: $ResourceKey_<$Level>): void;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        checkFBO(): void;
        isCaveModeDisplayed(): boolean;
        getLastMapDimensionScale(): number;
        getLastMapDimension(): $ResourceKey<$Level>;
        getServerModNetworkVersion(): number;
        isConsideringNetherFairPlayMessage(): boolean;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        get targetZoom(): number;
        set fairPlayOnlyMessageReceived(value: boolean);
        get minimapInterface(): $MinimapInterface;
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get minimapZoom(): number;
        get manualCaveMode(): boolean;
        get radarSession(): $RadarSession;
        get minimapWriter(): $MinimapWriter;
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        get FBOBufferSize(): number;
        get session(): $MinimapSession;
        get forcedFairPlay(): boolean;
        get entityRadar(): $MinimapRadar;
        get minimapItem(): $Item;
        get minimapSize(): number;
        get caveModeDisplayed(): boolean;
    }
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        constructor(arg0: $HudMod);
    }
}
