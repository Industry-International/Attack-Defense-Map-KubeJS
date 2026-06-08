import { $ServerPlayer } from "@package/net/minecraft/server/level";

declare module "@package/xaero/pac/common/server/player/data/api" {
    export class $ServerPlayerDataAPI {
        static from(arg0: $ServerPlayer): $ServerPlayerDataAPI;
        isClaimsNonallyMode(): boolean;
        isClaimsServerMode(): boolean;
        isClaimsAdminMode(): boolean;
        constructor();
        get claimsNonallyMode(): boolean;
        get claimsServerMode(): boolean;
        get claimsAdminMode(): boolean;
    }
}
