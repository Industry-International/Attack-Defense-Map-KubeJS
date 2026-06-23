import { $IClaimingModeAPI } from "@package/xaero/pac/common/claims/player/mode/api";
import { $ServerPlayer } from "@package/net/minecraft/server/level";

declare module "@package/xaero/pac/common/server/player/data/api" {
    export class $ServerPlayerDataAPI {
        static from(arg0: $ServerPlayer): $ServerPlayerDataAPI;
        /**
         * @deprecated
         */
        isClaimsServerMode(): boolean;
        isClaimsAdminMode(): boolean;
        getClaimingMode(): $IClaimingModeAPI;
        isClaimsNonallyMode(): boolean;
        constructor();
        get claimsServerMode(): boolean;
        get claimsAdminMode(): boolean;
        get claimingMode(): $IClaimingModeAPI;
        get claimsNonallyMode(): boolean;
    }
}
