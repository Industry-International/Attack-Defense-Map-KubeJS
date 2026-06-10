import { $Instant } from "@package/java/time";
import { $MetricSampler } from "@package/net/minecraft/util/profiling/metrics";
import { $Path } from "@package/java/nio/file";
import { $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $List_, $Map_, $Set_ } from "@package/java/util";

declare module "@package/net/minecraft/util/profiling/metrics/storage" {
    export class $RecordedDeviation {
        tick: number;
        profilerResultAtTick: $ProfileResults;
        timestamp: $Instant;
        constructor(arg0: $Instant, arg1: number, arg2: $ProfileResults);
    }
    export class $MetricsPersister {
        saveReports(arg0: $Set_<$MetricSampler>, arg1: $Map_<$MetricSampler, $List_<$RecordedDeviation>>, arg2: $ProfileResults): $Path;
        static DEVIATIONS_DIR_NAME: string;
        static METRICS_DIR_NAME: string;
        static PROFILING_RESULTS_DIR: $Path;
        static PROFILING_RESULT_FILENAME: string;
        constructor(arg0: string);
    }
}
