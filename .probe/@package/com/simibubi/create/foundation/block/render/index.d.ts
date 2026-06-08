import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Set, $Set_ } from "@package/java/util";

declare module "@package/com/simibubi/create/foundation/block/render" {
    export class $BlockDestructionProgressExtension {
    }
    export interface $BlockDestructionProgressExtension {
        create$setExtraPositions(arg0: $Set_<$BlockPos_>): void;
        create$getExtraPositions(): $Set<$BlockPos>;
    }
}
