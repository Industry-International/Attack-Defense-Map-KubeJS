import { $AreaClaimResult } from "@package/xaero/pac/common/claims/result/api";

declare module "@package/xaero/pac/client/claims/tracker/result/api" {
    export class $IClaimsManagerClaimResultListenerAPI {
    }
    export interface $IClaimsManagerClaimResultListenerAPI {
        onClaimResult(arg0: $AreaClaimResult): void;
    }
    /**
     * Values that may be interpreted as {@link $IClaimsManagerClaimResultListenerAPI}.
     */
    export type $IClaimsManagerClaimResultListenerAPI_ = ((arg0: $AreaClaimResult) => void);
    export class $IClaimsManagerClaimResultTrackerRegisterAPI {
    }
    export interface $IClaimsManagerClaimResultTrackerRegisterAPI {
        register(arg0: $IClaimsManagerClaimResultListenerAPI_): void;
    }
    /**
     * Values that may be interpreted as {@link $IClaimsManagerClaimResultTrackerRegisterAPI}.
     */
    export type $IClaimsManagerClaimResultTrackerRegisterAPI_ = ((arg0: $IClaimsManagerClaimResultListenerAPI) => void);
}
