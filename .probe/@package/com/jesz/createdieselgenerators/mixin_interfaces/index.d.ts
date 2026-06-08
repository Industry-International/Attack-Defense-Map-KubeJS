import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/com/jesz/createdieselgenerators/mixin_interfaces" {
    export class $IEntity {
    }
    export interface $IEntity {
        getTurretPos(): $BlockPos;
        setTurretPos(arg0: $BlockPos_): void;
    }
}
