import { $PrintWriter } from "@package/java/io";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $XaeroPath } from "@package/xaero/hud/path";

declare module "@package/xaero/hud/minimap/world/connection" {
    export class $MinimapWorldConnectionManager {
        isConnected(arg0: $MinimapWorld, arg1: $MinimapWorld): boolean;
        isEmpty(): boolean;
        save(arg0: $PrintWriter): void;
        removeConnection(arg0: $MinimapWorld, arg1: $MinimapWorld): void;
        addConnection(arg0: $MinimapWorld, arg1: $MinimapWorld): void;
        addConnection(arg0: $XaeroPath, arg1: $XaeroPath): void;
        renameDimension(arg0: string, arg1: string): void;
        swapConnections(arg0: $MinimapWorld, arg1: $MinimapWorld): void;
        get empty(): boolean;
    }
}
