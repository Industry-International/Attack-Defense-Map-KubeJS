import { $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";

declare module "@package/xfacthd/framedblocks/api/predicate/contex" {
    export class $ConTexMode extends $Enum<$ConTexMode> {
        static values(): $ConTexMode[];
        static valueOf(arg0: string): $ConTexMode;
        atleast(arg0: $ConTexMode_): boolean;
        static FULL_FACE: $ConTexMode;
        static FULL_EDGE: $ConTexMode;
        static DETAILED: $ConTexMode;
        static NONE: $ConTexMode;
    }
    /**
     * Values that may be interpreted as {@link $ConTexMode}.
     */
    export type $ConTexMode_ = "none" | "full_face" | "full_edge" | "detailed";
    export class $ConnectionPredicate {
        static FULL_EDGE: $ConnectionPredicate;
        static FULL_FACE: $ConnectionPredicate;
        static FALSE: $ConnectionPredicate;
    }
    export interface $ConnectionPredicate {
        canConnectFullEdge(arg0: $BlockState_, arg1: $Direction_, arg2: $Direction_): boolean;
        canConnectDetailed(arg0: $BlockState_, arg1: $Direction_, arg2: $Direction_): boolean;
    }
}
