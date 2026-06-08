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
        onClientTick(): void;
        getForcedFairPlay(): boolean;
        checkFBO(): void;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        updateZoom(): void;
        getSession(): $MinimapSession;
        onPlayerTick(): void;
        serverHasMod(): boolean;
        getMinimapInterface(): $MinimapInterface;
        isToResetImage(): boolean;
        setToResetImage(arg0: boolean): void;
        isManualCaveMode(): boolean;
        getMinimapZoom(): number;
        getRadarSession(): $RadarSession;
        getMinimapWriter(): $MinimapWriter;
        isEnlargedMap(): boolean;
        canUseFrameBuffer(): boolean;
        getFBOBufferSize(): number;
        toggleManualCaveMode(): void;
        getLastMapDimension(): $ResourceKey<$Level>;
        getLastMapDimensionScale(): number;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        setNoMinimapMessageReceived(arg0: boolean): void;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        isCaveModeDisplayed(): boolean;
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
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
        static hasMinimapItem(arg0: $Player): boolean;
        updateMinimapItem(): void;
        setServerModNetworkVersion(arg0: number): void;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        getMinimapItem(): $Item;
        getMinimapSize(): number;
        setEnlargedMap(arg0: boolean): void;
        instantZoom(): void;
        getNoMinimapMessageReceived(): boolean;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        getTargetZoom(): number;
        isConsideringNetherFairPlayMessage(): boolean;
        getServerModNetworkVersion(): number;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        get forcedFairPlay(): boolean;
        get session(): $MinimapSession;
        get minimapInterface(): $MinimapInterface;
        get manualCaveMode(): boolean;
        get minimapZoom(): number;
        get radarSession(): $RadarSession;
        get minimapWriter(): $MinimapWriter;
        get FBOBufferSize(): number;
        set fairPlayOnlyMessageReceived(value: boolean);
        get caveModeDisplayed(): boolean;
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get minimapItem(): $Item;
        get minimapSize(): number;
        get entityRadar(): $MinimapRadar;
        get targetZoom(): number;
    }
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        constructor(arg0: $HudMod);
    }
}
