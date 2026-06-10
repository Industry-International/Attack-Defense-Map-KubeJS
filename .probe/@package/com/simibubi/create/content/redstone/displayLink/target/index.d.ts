import { $DisplayTarget, $DisplayTarget_ } from "@package/com/simibubi/create/api/behaviour/display";
import { $Record } from "@package/java/lang";

declare module "@package/com/simibubi/create/content/redstone/displayLink/target" {
    export class $DisplayTargetStats extends $Record {
        type(): $DisplayTarget;
        maxColumns(): number;
        maxRows(): number;
        constructor(maxRows: number, maxColumns: number, type: $DisplayTarget_);
    }
}
