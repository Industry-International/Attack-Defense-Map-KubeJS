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
        setNoMinimapMessageReceived(arg0: boolean): void;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        isToResetImage(): boolean;
        setToResetImage(arg0: boolean): void;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        onClientTick(): void;
        updateMinimapItem(): void;
        getSession(): $MinimapSession;
        getRadarSession(): $RadarSession;
        isEnlargedMap(): boolean;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        onPlayerTick(): void;
        getMinimapItem(): $Item;
        /**
         * @deprecated
         */
        setLastPlayerDimDiv(arg0: number): void;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        setLastMapDimensionScale(arg0: number): void;
        getMinimapBufferSize(arg0: number): number;
        setLastMapDimension(arg0: $ResourceKey_<$Level>): void;
        getMinimapZoom(): number;
        isManualCaveMode(): boolean;
        getMinimapWriter(): $MinimapWriter;
        setEnlargedMap(arg0: boolean): void;
        instantZoom(): void;
        getMinimapInterface(): $MinimapInterface;
        getForcedFairPlay(): boolean;
        serverHasMod(): boolean;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        static hasMinimapItem(arg0: $Player): boolean;
        getMinimapSize(): number;
        getFBOBufferSize(): number;
        canUseFrameBuffer(): boolean;
        getTargetZoom(): number;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        toggleManualCaveMode(): void;
        getNoMinimapMessageReceived(): boolean;
        setServerModNetworkVersion(arg0: number): void;
        updateZoom(): void;
        isCaveModeDisplayed(): boolean;
        getLastMapDimension(): $ResourceKey<$Level>;
        getLastMapDimensionScale(): number;
        checkFBO(): void;
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        isConsideringNetherFairPlayMessage(): boolean;
        getServerModNetworkVersion(): number;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        set fairPlayOnlyMessageReceived(value: boolean);
        get session(): $MinimapSession;
        get radarSession(): $RadarSession;
        get minimapItem(): $Item;
        get minimapZoom(): number;
        get manualCaveMode(): boolean;
        get minimapWriter(): $MinimapWriter;
        get minimapInterface(): $MinimapInterface;
        get forcedFairPlay(): boolean;
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get minimapSize(): number;
        get FBOBufferSize(): number;
        get targetZoom(): number;
        get entityRadar(): $MinimapRadar;
        get caveModeDisplayed(): boolean;
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
    }
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        constructor(arg0: $HudMod);
    }
}
