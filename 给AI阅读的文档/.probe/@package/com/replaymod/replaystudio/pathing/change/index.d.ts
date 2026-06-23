import { $Timeline } from "@package/com/replaymod/replaystudio/pathing/path";

declare module "@package/com/replaymod/replaystudio/pathing/change" {
    export class $Change {
    }
    export interface $Change {
        undo(arg0: $Timeline): void;
        apply(arg0: $Timeline): void;
    }
}
