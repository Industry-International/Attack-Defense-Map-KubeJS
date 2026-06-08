import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        setLoaded(arg0: boolean): void;
        getServerTeleportCommandRotationFormat(): string;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        isIgnoreHeightmaps(): boolean;
        setUsingMultiworldDetection(arg0: boolean): void;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        setServerTeleportCommandFormat(arg0: string): void;
        getServerTeleportCommandFormat(): string;
        isUsingDefaultTeleportCommand(): boolean;
        isTeleportationEnabled(): boolean;
        isSortReversed(): boolean;
        getSortType(): $WaypointsSort;
        setSortType(arg0: $WaypointsSort_): void;
        toggleSortType(): void;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        setIgnoreHeightmaps(arg0: boolean): void;
        resetSubWorldConnections(arg0: boolean): void;
        isIgnoreServerLevelId(): boolean;
        setDefaultMultiworldId(arg0: string): void;
        isUsingMultiworldDetection(): boolean;
        getDefaultMultiworldId(): string;
        setIgnoreServerLevelId(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        setTeleportationEnabled(arg0: boolean): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
