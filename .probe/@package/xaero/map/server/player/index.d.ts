import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SyncedTrackedPlayer } from "@package/xaero/map/server/radar/tracker";
import { $Object } from "@package/java/lang";
import { $UUID_, $Set, $UUID } from "@package/java/util";

declare module "@package/xaero/map/server/player" {
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
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData): void;
        getXaeroWorldMapPlayerData(): $ServerPlayerData;
    }
}
