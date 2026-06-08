import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Path_ } from "@package/java/nio/file";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $LevelMapProperties } from "@package/xaero/common/server/level";
import { $SyncedPlayerTrackerSystemManager, $SyncedPlayerTracker } from "@package/xaero/common/server/radar/tracker";
export * as radar from "@package/xaero/common/server/radar";
export * as mods from "@package/xaero/common/server/mods";
export * as player from "@package/xaero/common/server/player";
export * as level from "@package/xaero/common/server/level";

declare module "@package/xaero/common/server" {
    export class $MinecraftServerData {
        static get(arg0: $MinecraftServer): $MinecraftServerData;
        getModMain(): $IXaeroMinimap;
        getLevelProperties(arg0: $Path_): $LevelMapProperties;
        getSyncedPlayerTracker(): $SyncedPlayerTracker;
        getSyncedPlayerTrackerSystemManager(): $SyncedPlayerTrackerSystemManager;
        constructor(arg0: $SyncedPlayerTrackerSystemManager, arg1: $SyncedPlayerTracker, arg2: $IXaeroMinimap);
        get modMain(): $IXaeroMinimap;
        get syncedPlayerTracker(): $SyncedPlayerTracker;
        get syncedPlayerTrackerSystemManager(): $SyncedPlayerTrackerSystemManager;
    }
    export class $IMinecraftServer {
    }
    export interface $IMinecraftServer {
        getXaeroMinimapServerData(): $MinecraftServerData;
        setXaeroMinimapServerData(arg0: $MinecraftServerData): void;
    }
}
