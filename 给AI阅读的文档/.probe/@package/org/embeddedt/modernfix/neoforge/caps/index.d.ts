import { $Set, $Set_ } from "@package/java/util";
import { $BaseCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/org/embeddedt/modernfix/neoforge/caps" {
    export class $ITrackingCapEvent {
    }
    export interface $ITrackingCapEvent {
        mfix$getTrackedCaps(): $Set<$BaseCapability<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $ITrackingCapEvent}.
     */
    export type $ITrackingCapEvent_ = (() => $Set_<$BaseCapability<never, never>>);
}
