import { $SyncedPlayerTrackerSystemManager, $SyncedPlayerTracker } from "@package/xaero/map/server/radar/tracker";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Path_ } from "@package/java/nio/file";
import { $LevelMapProperties } from "@package/xaero/map/server/level";
export * as player from "@package/xaero/map/server/player";
export * as radar from "@package/xaero/map/server/radar";
export * as level from "@package/xaero/map/server/level";

declare module "@package/xaero/map/server" {
    export class $MinecraftServerData {
        static get(arg0: $MinecraftServer): $MinecraftServerData;
        getLevelProperties(arg0: $Path_): $LevelMapProperties;
        getSyncedPlayerTracker(): $SyncedPlayerTracker;
        getSyncedPlayerTrackerSystemManager(): $SyncedPlayerTrackerSystemManager;
        constructor(arg0: $SyncedPlayerTrackerSystemManager, arg1: $SyncedPlayerTracker);
        get syncedPlayerTracker(): $SyncedPlayerTracker;
        get syncedPlayerTrackerSystemManager(): $SyncedPlayerTrackerSystemManager;
    }
    export class $IMinecraftServer {
    }
    export interface $IMinecraftServer {
        setXaeroWorldMapServerData(arg0: $MinecraftServerData): void;
        getXaeroWorldMapServerData(): $MinecraftServerData;
    }
}
