import { $Stream } from "@package/java/util/stream";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Set_ } from "@package/java/util";
import { $Iterable, $Enum } from "@package/java/lang";
import { $IPlayerChunkClaimAPI } from "@package/xaero/pac/common/claims/player/api";

declare module "@package/xaero/pac/common/claims/result/api" {
    export class $AreaClaimResult {
        getSize(): number;
        getBottom(): number;
        getTop(): number;
        getLeft(): number;
        getRight(): number;
        getResultTypesIterable(): $Iterable<$ClaimResult$Type>;
        getResultTypesStream(): $Stream<$ClaimResult$Type>;
        constructor(arg0: $Set_<$ClaimResult$Type_>, arg1: number, arg2: number, arg3: number, arg4: number);
        get size(): number;
        get bottom(): number;
        get top(): number;
        get left(): number;
        get right(): number;
        get resultTypesIterable(): $Iterable<$ClaimResult$Type>;
        get resultTypesStream(): $Stream<$ClaimResult$Type>;
    }
    export class $ClaimResult$Type extends $Enum<$ClaimResult$Type> {
        static values(): $ClaimResult$Type[];
        static valueOf(arg0: string): $ClaimResult$Type;
        static CLAIM_LIMIT_REACHED: $ClaimResult$Type;
        static UNCLAIMABLE_DIMENSION: $ClaimResult$Type;
        static SUCCESSFUL_CLAIM: $ClaimResult$Type;
        static REPLACEMENT_IN_PROGRESS: $ClaimResult$Type;
        static ALREADY_CLAIMED: $ClaimResult$Type;
        message: $Component;
        static SUCCESSFUL_UNCLAIM: $ClaimResult$Type;
        static NOT_CLAIMED_BY_USER: $ClaimResult$Type;
        static CLAIMS_ARE_DISABLED: $ClaimResult$Type;
        static NOT_CLAIMED_BY_USER_FORCELOAD: $ClaimResult$Type;
        static SUCCESSFUL_UNFORCELOAD: $ClaimResult$Type;
        fail: boolean;
        static ALREADY_UNFORCELOADED: $ClaimResult$Type;
        static FORCELOAD_LIMIT_REACHED: $ClaimResult$Type;
        static TOO_FAR: $ClaimResult$Type;
        static NO_SERVER_PERMISSION: $ClaimResult$Type;
        success: boolean;
        static ALREADY_FORCELOADABLE: $ClaimResult$Type;
        static TOO_MANY_CHUNKS: $ClaimResult$Type;
        static SUCCESSFUL_FORCELOAD: $ClaimResult$Type;
    }
    /**
     * Values that may be interpreted as {@link $ClaimResult$Type}.
     */
    export type $ClaimResult$Type_ = "already_forceloadable" | "already_unforceloaded" | "claims_are_disabled" | "too_many_chunks" | "unclaimable_dimension" | "not_claimed_by_user_forceload" | "not_claimed_by_user" | "already_claimed" | "forceload_limit_reached" | "claim_limit_reached" | "too_far" | "replacement_in_progress" | "no_server_permission" | "successful_unforceload" | "successful_unclaim" | "successful_forceload" | "successful_claim";
    export class $ClaimResult<C extends $IPlayerChunkClaimAPI> {
        getResultType(): $ClaimResult$Type;
        getClaimResult(): C;
        constructor(arg0: C, arg1: $ClaimResult$Type_);
        get resultType(): $ClaimResult$Type;
        get claimResult(): C;
    }
}
