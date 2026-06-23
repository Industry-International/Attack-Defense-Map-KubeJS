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
        getLastSyncedData(): $SyncedTrackedPlayer;
        setOpacData(arg0: $Object): void;
        getOpacData(): $Object;
        ensureLastSyncedData(): $SyncedTrackedPlayer;
        setLastTrackedPlayerSync(arg0: number): void;
        setClientModNetworkVersion(arg0: number): void;
        getClientModNetworkVersion(): number;
        getLastTrackedPlayerSync(): number;
        getCurrentlySyncedPlayers(): $Set<$UUID>;
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
