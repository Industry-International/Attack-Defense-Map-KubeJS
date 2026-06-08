import { $Level } from "@package/net/minecraft/world/level";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $MinecraftServerData } from "@package/xaero/common/server";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerPlayerData } from "@package/xaero/common/server/player";
import { $Iterable } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/common/server/radar/tracker" {
    export class $SyncedTrackedPlayer {
        getY(): number;
        getX(): number;
        update(arg0: $Player): void;
        getId(): $UUID;
        copyFrom(arg0: $SyncedTrackedPlayer): void;
        getDimensionKey(): $ResourceKey<$Level>;
        getZ(): number;
        setPos(arg0: number, arg1: number, arg2: number): $SyncedTrackedPlayer;
        setDimension(arg0: $ResourceKey_<$Level>): $SyncedTrackedPlayer;
        matchesEnough(arg0: $Player, arg1: number): boolean;
        constructor(arg0: $UUID_, arg1: number, arg2: number, arg3: number, arg4: $ResourceKey_<$Level>);
        get y(): number;
        get x(): number;
        get id(): $UUID;
        get dimensionKey(): $ResourceKey<$Level>;
        get z(): number;
        set dimension(value: $ResourceKey_<$Level>);
    }
    export class $SyncedPlayerTrackerSystemManager {
        register(arg0: string, arg1: $ISyncedPlayerTrackerSystem): void;
        getSystems(): $Iterable<$ISyncedPlayerTrackerSystem>;
        constructor();
        get systems(): $Iterable<$ISyncedPlayerTrackerSystem>;
    }
    export class $SyncedPlayerTracker {
        onTick(arg0: $MinecraftServer, arg1: $ServerPlayer, arg2: $MinecraftServerData, arg3: $ServerPlayerData): void;
        constructor(arg0: $IXaeroMinimap);
    }
    export class $ISyncedPlayerTrackerSystem {
    }
    export interface $ISyncedPlayerTrackerSystem {
        isPartySystem(): boolean;
        getTrackingLevel(arg0: $Player, arg1: $Player): number;
        get partySystem(): boolean;
    }
}
