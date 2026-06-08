import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object } from "@package/java/lang";
import { $UUID_, $Set, $UUID } from "@package/java/util";
import { $SyncedTrackedPlayer } from "@package/xaero/common/server/radar/tracker";

declare module "@package/xaero/common/server/player" {
    export class $ServerPlayerTickHandler {
        tick(arg0: $ServerPlayer): void;
        constructor();
    }
    export class $ServerPlayerData {
        static get(arg0: $ServerPlayer): $ServerPlayerData;
        hasMod(): boolean;
        ensureLastSyncedData(): $SyncedTrackedPlayer;
        getCurrentlySyncedPlayers(): $Set<$UUID>;
        setLastTrackedPlayerSync(arg0: number): void;
        setClientModNetworkVersion(arg0: number): void;
        getClientModNetworkVersion(): number;
        getLastTrackedPlayerSync(): number;
        setOpacData(arg0: $Object): void;
        getOpacData(): $Object;
        getLastSyncedData(): $SyncedTrackedPlayer;
        ensureCurrentlySyncedPlayers(): $Set<$UUID>;
        constructor(arg0: $UUID_);
        get currentlySyncedPlayers(): $Set<$UUID>;
        get lastSyncedData(): $SyncedTrackedPlayer;
    }
    export class $IServerPlayer {
    }
    export interface $IServerPlayer {
        getXaeroMinimapPlayerData(): $ServerPlayerData;
        setXaeroMinimapPlayerData(arg0: $ServerPlayerData): void;
    }
}
