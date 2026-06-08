import { $IntIterable } from "@package/it/unimi/dsi/fastutil/ints";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/hud/minimap/waypoint/server" {
    export class $ServerWaypointManager {
        remove(arg0: number): void;
        size(): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: number, arg1: $Waypoint): void;
        addDisabled(arg0: number): void;
        getById(arg0: number): $Waypoint;
        getIds(): $IntIterable;
        getWaypoints(): $Iterable<$Waypoint>;
        getBySlot(arg0: number): $Waypoint;
        constructor();
        get empty(): boolean;
        get ids(): $IntIterable;
        get waypoints(): $Iterable<$Waypoint>;
    }
}
