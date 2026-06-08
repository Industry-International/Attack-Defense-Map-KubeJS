import { $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/almostreliable/morejs/util" {
    export class $WeightedList<T> {
        map<T2>(arg0: $Function_<T, T2>): $WeightedList<T2>;
        roll(): T;
        roll(arg0: $RandomSource): T;
    }
    export class $BlockPosFinder {
    }
    export interface $BlockPosFinder {
        findPosition(arg0: $ServerLevel, arg1: $Entity): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $BlockPosFinder}.
     */
    export type $BlockPosFinder_ = ((arg0: $ServerLevel, arg1: $Entity) => $BlockPos_);
    export class $WeightedList$Builder<T> {
        add(arg0: number, arg1: T): $WeightedList$Builder<T>;
        build(): $WeightedList<T>;
        constructor();
    }
}
