import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Set_, $Set } from "@package/java/util";

declare module "@package/com/simibubi/create/foundation/block/render" {
    export class $BlockDestructionProgressExtension {
    }
    export interface $BlockDestructionProgressExtension {
        create$getExtraPositions(): $Set<$BlockPos>;
        create$setExtraPositions(arg0: $Set_<$BlockPos_>): void;
    }
}
