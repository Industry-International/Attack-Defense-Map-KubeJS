import { $ServerPlayer } from "@package/net/minecraft/server/level";

declare module "@package/xaero/pac/common/server/player/data/api" {
    export class $ServerPlayerDataAPI {
        static from(arg0: $ServerPlayer): $ServerPlayerDataAPI;
        isClaimsNonallyMode(): boolean;
        isClaimsAdminMode(): boolean;
        isClaimsServerMode(): boolean;
        constructor();
        get claimsNonallyMode(): boolean;
        get claimsAdminMode(): boolean;
        get claimsServerMode(): boolean;
    }
}
