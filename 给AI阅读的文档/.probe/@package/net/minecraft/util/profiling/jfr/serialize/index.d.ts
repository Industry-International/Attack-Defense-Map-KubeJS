import { $Gson } from "@package/com/google/gson";
import { $JfrStatsResult_ } from "@package/net/minecraft/util/profiling/jfr/parse";

declare module "@package/net/minecraft/util/profiling/jfr/serialize" {
    export class $JfrResultJsonSerializer {
        format(arg0: $JfrStatsResult_): string;
        gson: $Gson;
        constructor();
    }
}
