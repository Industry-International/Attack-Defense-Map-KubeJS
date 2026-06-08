import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ServerPlayerData } from "@package/xaero/common/server/player";

declare module "@package/xaero/common/server/mods/opac" {
    export class $SupportOPACServer {
        getReceiveLocationsFromPartyConfigValue(arg0: $ServerPlayer): boolean;
        getReceiveLocationsFromMutualAlliesConfigValue(arg0: $ServerPlayer): boolean;
        isPositionSyncAllowed(arg0: number, arg1: $ServerPlayerData, arg2: boolean): boolean;
        updateShareLocationConfigValues(arg0: $ServerPlayer, arg1: $ServerPlayerData): void;
        constructor();
    }
}
