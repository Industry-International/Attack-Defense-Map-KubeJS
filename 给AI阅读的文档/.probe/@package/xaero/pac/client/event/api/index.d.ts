import { $Event } from "@package/net/neoforged/bus/api";
import { $IClaimsManagerTrackerRegisterAPI, $IClaimsManagerTrackerRegisterAPI_ } from "@package/xaero/pac/common/claims/tracker/api";
import { $IClaimsManagerClaimResultTrackerRegisterAPI, $IClaimsManagerClaimResultTrackerRegisterAPI_ } from "@package/xaero/pac/client/claims/tracker/result/api";

declare module "@package/xaero/pac/client/event/api" {
    export class $OPACClientAddonRegisterEvent extends $Event {
        getClaimsManagerTrackerAPI(): $IClaimsManagerTrackerRegisterAPI;
        getClaimsManagerClaimResultTrackerAPI(): $IClaimsManagerClaimResultTrackerRegisterAPI;
        constructor(arg0: $IClaimsManagerTrackerRegisterAPI_, arg1: $IClaimsManagerClaimResultTrackerRegisterAPI_);
        get claimsManagerTrackerAPI(): $IClaimsManagerTrackerRegisterAPI;
        get claimsManagerClaimResultTrackerAPI(): $IClaimsManagerClaimResultTrackerRegisterAPI;
    }
}
