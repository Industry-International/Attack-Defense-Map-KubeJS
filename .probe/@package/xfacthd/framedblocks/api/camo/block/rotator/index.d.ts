import { $BiConsumer_ } from "@package/java/util/function";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/xfacthd/framedblocks/api/camo/block/rotator" {
    export class $BlockCamoRotator {
        static of(arg0: $Block_): $BlockCamoRotator;
        static DEFAULT: $BlockCamoRotator;
    }
    export interface $BlockCamoRotator {
        rotate(arg0: $BlockState_): $BlockState;
        canRotate(arg0: $BlockState_): boolean;
    }
    export class $RegisterBlockCamoRotatorsEvent extends $Event {
        register(arg0: $Block_, arg1: $BlockCamoRotator): void;
        constructor(arg0: $BiConsumer_<$Block, $BlockCamoRotator>);
    }
}
