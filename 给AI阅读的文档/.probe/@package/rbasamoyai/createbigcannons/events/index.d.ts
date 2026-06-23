import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";

declare module "@package/rbasamoyai/createbigcannons/events" {
    export class $ProjectileDamageEvent extends $Event implements $ICancellableEvent {
        getLevel(): $Level;
        getPos(): $BlockPos;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Level_, arg1: $BlockPos_);
        get level(): $Level;
        get pos(): $BlockPos;
    }
}
