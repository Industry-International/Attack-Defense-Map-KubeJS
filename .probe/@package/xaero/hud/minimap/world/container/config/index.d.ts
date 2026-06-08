import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        getServerTeleportCommandRotationFormat(): string;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        setLoaded(arg0: boolean): void;
        isIgnoreHeightmaps(): boolean;
        setIgnoreHeightmaps(arg0: boolean): void;
        isTeleportationEnabled(): boolean;
        isSortReversed(): boolean;
        getSortType(): $WaypointsSort;
        toggleSortReversed(): void;
        setSortType(arg0: $WaypointsSort_): void;
        setSortReversed(arg0: boolean): void;
        toggleSortType(): void;
        resetSubWorldConnections(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        setTeleportationEnabled(arg0: boolean): void;
        setIgnoreServerLevelId(arg0: boolean): void;
        isIgnoreServerLevelId(): boolean;
        getDefaultMultiworldId(): string;
        setDefaultMultiworldId(arg0: string): void;
        isUsingMultiworldDetection(): boolean;
        isUsingDefaultTeleportCommand(): boolean;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        getServerTeleportCommandFormat(): string;
        setServerTeleportCommandFormat(arg0: string): void;
        setUsingMultiworldDetection(arg0: boolean): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
