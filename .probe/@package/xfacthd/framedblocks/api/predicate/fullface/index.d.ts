import { $BiPredicate, $BiPredicate_ } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/xfacthd/framedblocks/api/predicate/fullface" {
    export class $FullFacePredicate {
        static NOT_DIR: $FullFacePredicate;
        static DOWN: $FullFacePredicate;
        static HOR_DIR: $FullFacePredicate;
        static HOR_DIR_OPPOSITE: $FullFacePredicate;
        static TRUE: $FullFacePredicate;
        static DIR: $FullFacePredicate;
        static DIR_AXIS: $FullFacePredicate;
        static TOP: $FullFacePredicate;
        static HOR_DIR_AXIS: $FullFacePredicate;
        static NOT_AXIS: $FullFacePredicate;
        static NOT_HOR_DIR: $FullFacePredicate;
        static FALSE: $FullFacePredicate;
        static DIR_OPPOSITE: $FullFacePredicate;
        static Y_AXIS: $FullFacePredicate;
        static AXIS: $FullFacePredicate;
    }
    export interface $FullFacePredicate extends $BiPredicate<$BlockState, $Direction> {
        test(arg0: $BlockState_, arg1: $Direction_): boolean;
        and(arg0: $BiPredicate_<$BlockState, $Direction>): $FullFacePredicate;
        or(arg0: $BiPredicate_<$BlockState, $Direction>): $BiPredicate<$BlockState, $Direction>;
    }
    /**
     * Values that may be interpreted as {@link $FullFacePredicate}.
     */
    export type $FullFacePredicate_ = ((arg0: $BlockState, arg1: $Direction) => boolean);
}
