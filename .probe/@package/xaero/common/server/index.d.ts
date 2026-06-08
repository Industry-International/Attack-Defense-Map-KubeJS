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
        getSyncedPlayerTrackerSystemManager(): $SyncedPlayerTrackerSystemManager;
        getModMain(): $IXaeroMinimap;
        getSyncedPlayerTracker(): $SyncedPlayerTracker;
        getLevelProperties(arg0: $Path_): $LevelMapProperties;
        constructor(arg0: $SyncedPlayerTrackerSystemManager, arg1: $SyncedPlayerTracker, arg2: $IXaeroMinimap);
        get syncedPlayerTrackerSystemManager(): $SyncedPlayerTrackerSystemManager;
        get modMain(): $IXaeroMinimap;
        get syncedPlayerTracker(): $SyncedPlayerTracker;
    }
    export class $IMinecraftServer {
    }
    export interface $IMinecraftServer {
        setXaeroMinimapServerData(arg0: $MinecraftServerData): void;
        getXaeroMinimapServerData(): $MinecraftServerData;
    }
}
