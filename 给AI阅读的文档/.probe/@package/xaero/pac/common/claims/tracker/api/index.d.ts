import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IPlayerChunkClaimAPI } from "@package/xaero/pac/common/claims/player/api";

declare module "@package/xaero/pac/common/claims/tracker/api" {
    export class $IClaimsManagerTrackerRegisterAPI {
    }
    export interface $IClaimsManagerTrackerRegisterAPI {
        register(arg0: $IClaimsManagerListenerAPI): void;
    }
    /**
     * Values that may be interpreted as {@link $IClaimsManagerTrackerRegisterAPI}.
     */
    export type $IClaimsManagerTrackerRegisterAPI_ = ((arg0: $IClaimsManagerListenerAPI) => void);
    export class $IClaimsManagerTrackerAPI {
    }
    export interface $IClaimsManagerTrackerAPI extends $IClaimsManagerTrackerRegisterAPI {
        register(arg0: $IClaimsManagerListenerAPI): void;
    }
    /**
     * Values that may be interpreted as {@link $IClaimsManagerTrackerAPI}.
     */
    export type $IClaimsManagerTrackerAPI_ = ((arg0: $IClaimsManagerListenerAPI) => void);
    export class $IClaimsManagerListenerAPI {
    }
    export interface $IClaimsManagerListenerAPI {
        onWholeRegionChange(arg0: $ResourceLocation_, arg1: number, arg2: number): void;
        onDimensionChange(arg0: $ResourceLocation_): void;
        onChunkChange(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: $IPlayerChunkClaimAPI | null): void;
    }
}
