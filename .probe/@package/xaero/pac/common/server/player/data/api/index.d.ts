import { $ServerPlayer } from "@package/net/minecraft/server/level";

declare module "@package/xaero/pac/common/server/player/data/api" {
    export class $ServerPlayerDataAPI {
        static from(arg0: $ServerPlayer): $ServerPlayerDataAPI;
        isClaimsServerMode(): boolean;
        isClaimsAdminMode(): boolean;
        isClaimsNonallyMode(): boolean;
        constructor();
        get claimsServerMode(): boolean;
        get claimsAdminMode(): boolean;
        get claimsNonallyMode(): boolean;
    }
}
