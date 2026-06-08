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
        ensureCurrentlySyncedPlayers(): $Set<$UUID>;
        getLastTrackedPlayerSync(): number;
        setClientModNetworkVersion(arg0: number): void;
        getClientModNetworkVersion(): number;
        ensureLastSyncedData(): $SyncedTrackedPlayer;
        setLastTrackedPlayerSync(arg0: number): void;
        getCurrentlySyncedPlayers(): $Set<$UUID>;
        getLastSyncedData(): $SyncedTrackedPlayer;
        getOpacData(): $Object;
        setOpacData(arg0: $Object): void;
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
