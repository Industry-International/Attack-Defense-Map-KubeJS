import { $Interpolator } from "@package/com/replaymod/replaystudio/pathing/interpolation";
import { $Timeline } from "@package/com/replaymod/replaystudio/pathing/path";
import { $JsonWriter, $JsonReader } from "@package/com/google/gson/stream";
export * as path from "@package/com/replaymod/replaystudio/pathing/path";
export * as change from "@package/com/replaymod/replaystudio/pathing/change";
export * as property from "@package/com/replaymod/replaystudio/pathing/property";
export * as interpolation from "@package/com/replaymod/replaystudio/pathing/interpolation";

declare module "@package/com/replaymod/replaystudio/pathing" {
    export class $PathingRegistry {
    }
    export interface $PathingRegistry {
        deserializeInterpolator(arg0: $JsonReader): $Interpolator;
        serializeInterpolator(arg0: $JsonWriter, arg1: $Interpolator): void;
        createTimeline(): $Timeline;
    }
}
