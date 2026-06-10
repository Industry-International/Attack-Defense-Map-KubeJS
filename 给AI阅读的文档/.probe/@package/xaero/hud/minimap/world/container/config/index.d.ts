import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        getServerTeleportCommandRotationFormat(): string;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        isUsingDefaultTeleportCommand(): boolean;
        getServerTeleportCommandFormat(): string;
        setServerTeleportCommandFormat(arg0: string): void;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        setUsingMultiworldDetection(arg0: boolean): void;
        setSortType(arg0: $WaypointsSort_): void;
        toggleSortType(): void;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        setLoaded(arg0: boolean): void;
        isSortReversed(): boolean;
        getSortType(): $WaypointsSort;
        isIgnoreHeightmaps(): boolean;
        isTeleportationEnabled(): boolean;
        setIgnoreHeightmaps(arg0: boolean): void;
        isIgnoreServerLevelId(): boolean;
        setIgnoreServerLevelId(arg0: boolean): void;
        setDefaultMultiworldId(arg0: string): void;
        isUsingMultiworldDetection(): boolean;
        getDefaultMultiworldId(): string;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        resetSubWorldConnections(arg0: boolean): void;
        setTeleportationEnabled(arg0: boolean): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
