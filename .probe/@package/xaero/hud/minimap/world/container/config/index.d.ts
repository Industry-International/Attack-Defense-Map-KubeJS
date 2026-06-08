import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        getServerTeleportCommandFormat(): string;
        setUsingMultiworldDetection(arg0: boolean): void;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        isUsingDefaultTeleportCommand(): boolean;
        setServerTeleportCommandFormat(arg0: string): void;
        isIgnoreHeightmaps(): boolean;
        getSortType(): $WaypointsSort;
        isSortReversed(): boolean;
        setLoaded(arg0: boolean): void;
        isTeleportationEnabled(): boolean;
        setDefaultMultiworldId(arg0: string): void;
        getDefaultMultiworldId(): string;
        setTeleportationEnabled(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        isUsingMultiworldDetection(): boolean;
        resetSubWorldConnections(arg0: boolean): void;
        setIgnoreServerLevelId(arg0: boolean): void;
        isIgnoreServerLevelId(): boolean;
        setIgnoreHeightmaps(arg0: boolean): void;
        getServerTeleportCommandRotationFormat(): string;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        setSortType(arg0: $WaypointsSort_): void;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        toggleSortType(): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
