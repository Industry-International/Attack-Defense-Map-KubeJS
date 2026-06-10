import { $Level } from "@package/net/minecraft/world/level";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";
import { $UUID_ } from "@package/java/util";
import { $SyncedTrackedPlayer } from "@package/xaero/common/server/radar/tracker";

declare module "@package/xaero/hud/minimap/player/tracker/synced" {
    export class $ClientSyncedTrackedPlayerManager {
        remove(arg0: $UUID_): void;
        reset(): void;
        update(arg0: $UUID_, arg1: number, arg2: number, arg3: number, arg4: $ResourceKey_<$Level>): void;
        getPlayers(): $Iterable<$SyncedTrackedPlayer>;
        get players(): $Iterable<$SyncedTrackedPlayer>;
    }
}
