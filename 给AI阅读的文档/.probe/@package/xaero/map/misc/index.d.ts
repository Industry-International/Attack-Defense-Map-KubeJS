import { $Level_ } from "@package/net/minecraft/world/level";
import { $MapWriter } from "@package/xaero/map";

declare module "@package/xaero/map/misc" {
    export class $CaveStartCalculator {
        getCaving(arg0: number, arg1: number, arg2: number, arg3: $Level_): number;
        constructor(arg0: $MapWriter);
    }
}
