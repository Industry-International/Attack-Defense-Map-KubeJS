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
        getFBOBufferSize(): number;
        isToResetImage(): boolean;
        setToResetImage(arg0: boolean): void;
        getMinimapZoom(): number;
        isManualCaveMode(): boolean;
        getSession(): $MinimapSession;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        onPlayerTick(): void;
        getRadarSession(): $RadarSession;
        getMinimapWriter(): $MinimapWriter;
        isEnlargedMap(): boolean;
        serverHasMod(): boolean;
        isCaveModeDisplayed(): boolean;
        getLastMapDimension(): $ResourceKey<$Level>;
        getLastMapDimensionScale(): number;
        getMinimapItem(): $Item;
        getMinimapSize(): number;
        getForcedFairPlay(): boolean;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        setNoMinimapMessageReceived(arg0: boolean): void;
        instantZoom(): void;
        setEnlargedMap(arg0: boolean): void;
        onClientTick(): void;
        getMinimapInterface(): $MinimapInterface;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        getTargetZoom(): number;
        canUseFrameBuffer(): boolean;
        getNoMinimapMessageReceived(): boolean;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        toggleManualCaveMode(): void;
        setServerModNetworkVersion(arg0: number): void;
        updateZoom(): void;
        isConsideringNetherFairPlayMessage(): boolean;
        updateMinimapItem(): void;
        static hasMinimapItem(arg0: $Player): boolean;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        /**
         * @deprecated
         */
        setLastPlayerDimDiv(arg0: number): void;
        getMinimapBufferSize(arg0: number): number;
        setLastMapDimension(arg0: $ResourceKey_<$Level>): void;
        setLastMapDimensionScale(arg0: number): void;
        checkFBO(): void;
        getServerModNetworkVersion(): number;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        get FBOBufferSize(): number;
        get minimapZoom(): number;
        get manualCaveMode(): boolean;
        get session(): $MinimapSession;
        get radarSession(): $RadarSession;
        get minimapWriter(): $MinimapWriter;
        get caveModeDisplayed(): boolean;
        get minimapItem(): $Item;
        get minimapSize(): number;
        get forcedFairPlay(): boolean;
        set fairPlayOnlyMessageReceived(value: boolean);
        get minimapInterface(): $MinimapInterface;
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        get entityRadar(): $MinimapRadar;
        get targetZoom(): number;
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
    }
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        constructor(arg0: $HudMod);
    }
}
