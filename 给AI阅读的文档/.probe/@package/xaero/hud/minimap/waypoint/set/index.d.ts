import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $List_, $Collection_ } from "@package/java/util";

declare module "@package/xaero/hud/minimap/waypoint/set" {
    export class $WaypointSet {
        getName(): string;
        remove(arg0: $Waypoint): void;
        remove(arg0: number): $Waypoint;
        size(): number;
        get(arg0: number): $Waypoint;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $Waypoint, arg1: boolean): void;
        add(arg0: $Waypoint): void;
        addAll(arg0: $Collection_<$Waypoint>, arg1: boolean): void;
        addAll(arg0: $Collection_<$Waypoint>): void;
        set(arg0: number, arg1: $Waypoint): $Waypoint;
        removeAll(arg0: $Collection_<$Waypoint>): void;
        addTo(arg0: $List_<$Waypoint>): void;
        getWaypoints(): $Iterable<$Waypoint>;
        get name(): string;
        get empty(): boolean;
        get waypoints(): $Iterable<$Waypoint>;
    }
}
