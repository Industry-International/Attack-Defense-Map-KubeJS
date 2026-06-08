import { $PrintWriter } from "@package/java/io";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $EntityRadarBackwardsCompatibilityConfig } from "@package/xaero/hud/minimap/radar/category";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $WaypointWorld, $WaypointsManager } from "@package/xaero/common/minimap/waypoints";
import { $KeyMapping } from "@package/net/minecraft/client";

declare module "@package/xaero/common/settings" {
    export class $ModSettings {
        loadSettings(arg0: boolean): void;
        writeSettings(arg0: $PrintWriter): void;
        isIgnoreHeightmaps(): boolean;
        minimapDisabled(): boolean;
        resetServerSettings(): void;
        removeLoadedWaypointLines(): void;
        /**
         * @deprecated
         */
        getLegacySlimeChunksSeed(arg0: $XaeroPath): number;
        foundOldRadarSettings(): boolean;
        loadDefaultSettings(arg0: boolean): void;
        getLoadedWaypointLines(): string;
        /**
         * @deprecated
         */
        getSlimeChunks(arg0: $MinimapSession): boolean;
        /**
         * @deprecated
         */
        getSlimeChunks(arg0: $WaypointsManager): boolean;
        getAutoUIScale(): number;
        /**
         * @deprecated
         */
        saveWaypoints(arg0: $WaypointWorld, arg1: boolean): void;
        /**
         * @deprecated
         */
        saveWaypoints(arg0: $WaypointWorld): void;
        getMinimapScale(): number;
        readSetting(arg0: string[]): void;
        /**
         * @deprecated
         */
        getSlimeChunksSeed(arg0: $XaeroPath): number;
        /**
         * @deprecated
         */
        setSlimeChunksSeed(arg0: number, arg1: $XaeroPath): void;
        /**
         * @deprecated
         */
        saveAllWaypoints(arg0: $WaypointsManager): void;
        /**
         * @deprecated
         */
        isKeyRepeat(arg0: $KeyMapping): boolean;
        static setServerSettings(): void;
        /**
         * @deprecated
         */
        getMinimap(): boolean;
        /**
         * @deprecated
         */
        waypointsGUI(arg0: $WaypointsManager): boolean;
        waypointsGUI(arg0: $MinimapSession): boolean;
        static getTranslation(arg0: boolean): string;
        static canEditIngameSettings(): boolean;
        deathpointsDisabled(): boolean;
        showWaypointsDisabled(): boolean;
        saveSettings(): void;
        resetEntityRadarBackwardsCompatibilityConfig(): void;
        removeLegacySlimeChunksSeed(arg0: $XaeroPath): number;
        getUIScale(arg0: number, arg1: number, arg2: number): number;
        caveMapsDisabled(): boolean;
        getEntityRadarBackwardsCompatibilityConfig(): $EntityRadarBackwardsCompatibilityConfig;
        /**
         * @deprecated
         */
        static keyLargeMap: $KeyMapping;
        /**
         * @deprecated
         */
        static keyReverseEntityRadar: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleMap: $KeyMapping;
        /**
         * @deprecated
         */
        static keyBindZoom1: $KeyMapping;
        /**
         * @deprecated
         */
        static keyAllSets: $KeyMapping;
        /**
         * @deprecated
         */
        static keyManualCaveMode: $KeyMapping;
        showTimeLegacy: number;
        needsLegacySlimeSeedResave: boolean;
        /**
         * @deprecated
         */
        static keyToggleTrackedPlayersInWorld: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleMapWaypoints: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleGrid: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleSlimes: $KeyMapping;
        static defaultSettings: number;
        /**
         * @deprecated
         */
        static keyInstantWaypoint: $KeyMapping;
        showLightLevelLegacy: number;
        showCoordsLegacy: boolean;
        /**
         * @deprecated
         */
        static keyLightOverlay: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleTrackedPlayers: $KeyMapping;
        static format: string;
        /**
         * @deprecated
         */
        static newWaypoint: $KeyMapping;
        displayWeatherInfoLegacy: boolean;
        /**
         * @deprecated
         */
        static keyBindZoom: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleWaypoints: $KeyMapping;
        static serverSettings: number;
        /**
         * @deprecated
         */
        static keyWaypoints: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleTrackedPlayersOnMap: $KeyMapping;
        showBiomeLegacy: boolean;
        showDimensionNameLegacy: boolean;
        showAnglesLegacy: boolean;
        /**
         * @deprecated
         */
        static keyTogglePacChunkClaims: $KeyMapping;
        /**
         * @deprecated
         */
        static keySwitchSet: $KeyMapping;
        /**
         * @deprecated
         */
        static keyAlternativeListPlayers: $KeyMapping;
        /**
         * @deprecated
         */
        static keyToggleRadar: $KeyMapping;
        constructor(arg0: $IXaeroMinimap);
        get ignoreHeightmaps(): boolean;
        get loadedWaypointLines(): string;
        get autoUIScale(): number;
        get minimapScale(): number;
        get minimap(): boolean;
        get entityRadarBackwardsCompatibilityConfig(): $EntityRadarBackwardsCompatibilityConfig;
    }
}
