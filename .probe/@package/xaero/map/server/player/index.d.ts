import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SyncedTrackedPlayer } from "@package/xaero/map/server/radar/tracker";
import { $Object } from "@package/java/lang";
import { $UUID_, $Set, $UUID } from "@package/java/util";

declare module "@package/xaero/map/server/player" {
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
        getXaeroWorldMapPlayerData(): $ServerPlayerData;
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData): void;
    }
}
