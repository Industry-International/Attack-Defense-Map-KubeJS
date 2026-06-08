import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $NoiseChunk$BlockStateFiller, $NoiseChunk$BlockStateFiller_, $DensityFunction$FunctionContext, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/material" {
    export class $WorldGenMaterialRule {
    }
    export interface $WorldGenMaterialRule {
        apply(arg0: $NoiseChunk, arg1: number, arg2: number, arg3: number): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $WorldGenMaterialRule}.
     */
    export type $WorldGenMaterialRule_ = ((arg0: $NoiseChunk, arg1: number, arg2: number, arg3: number) => $BlockState_);
    export class $MaterialRuleList extends $Record implements $NoiseChunk$BlockStateFiller {
        calculate(arg: $DensityFunction$FunctionContext): $BlockState;
        materialRuleList(): $List<$NoiseChunk$BlockStateFiller>;
        constructor(arg0: $List_<$NoiseChunk$BlockStateFiller_>);
    }
}
