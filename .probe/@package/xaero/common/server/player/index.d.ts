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
        setXaeroMinimapPlayerData(arg0: $ServerPlayerData): void;
        getXaeroMinimapPlayerData(): $ServerPlayerData;
    }
}
