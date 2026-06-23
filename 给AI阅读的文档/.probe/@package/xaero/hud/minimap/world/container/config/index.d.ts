import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        isIgnoreHeightmaps(): boolean;
        setLoaded(arg0: boolean): void;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        getServerTeleportCommandRotationFormat(): string;
        isSortReversed(): boolean;
        getSortType(): $WaypointsSort;
        isTeleportationEnabled(): boolean;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        setServerTeleportCommandFormat(arg0: string): void;
        getServerTeleportCommandFormat(): string;
        setUsingMultiworldDetection(arg0: boolean): void;
        isUsingDefaultTeleportCommand(): boolean;
        setIgnoreHeightmaps(arg0: boolean): void;
        setSortReversed(arg0: boolean): void;
        setSortType(arg0: $WaypointsSort_): void;
        toggleSortReversed(): void;
        toggleSortType(): void;
        isUsingMultiworldDetection(): boolean;
        setTeleportationEnabled(arg0: boolean): void;
        isIgnoreServerLevelId(): boolean;
        setIgnoreServerLevelId(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        setDefaultMultiworldId(arg0: string): void;
        getDefaultMultiworldId(): string;
        resetSubWorldConnections(arg0: boolean): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
