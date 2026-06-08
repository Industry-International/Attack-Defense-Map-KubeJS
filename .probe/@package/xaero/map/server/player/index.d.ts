import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SyncedTrackedPlayer } from "@package/xaero/map/server/radar/tracker";
import { $Object } from "@package/java/lang";
import { $UUID_, $Set, $UUID } from "@package/java/util";

declare module "@package/xaero/map/server/player" {
    export class $ServerPlayerData {
        static get(arg0: $ServerPlayer): $ServerPlayerData;
        hasMod(): boolean;
        getOpacData(): $Object;
        setOpacData(arg0: $Object): void;
        getLastSyncedData(): $SyncedTrackedPlayer;
        ensureCurrentlySyncedPlayers(): $Set<$UUID>;
        getClientModNetworkVersion(): number;
        setLastTrackedPlayerSync(arg0: number): void;
        getCurrentlySyncedPlayers(): $Set<$UUID>;
        setClientModNetworkVersion(arg0: number): void;
        getLastTrackedPlayerSync(): number;
        ensureLastSyncedData(): $SyncedTrackedPlayer;
        constructor(arg0: $UUID_);
        get lastSyncedData(): $SyncedTrackedPlayer;
        get currentlySyncedPlayers(): $Set<$UUID>;
    }
    export class $IServerPlayer {
    }
    export interface $IServerPlayer {
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData): void;
        getXaeroWorldMapPlayerData(): $ServerPlayerData;
    }
}
