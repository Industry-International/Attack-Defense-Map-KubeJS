import { $Supplier_, $Consumer_, $LongSupplier_ } from "@package/java/util/function";
import { $MetricsPersister } from "@package/net/minecraft/util/profiling/metrics/storage";
import { $MetricsSamplerProvider, $MetricSampler, $MetricsSamplerProvider_ } from "@package/net/minecraft/util/profiling/metrics";
import { $Path } from "@package/java/nio/file";
import { $ProfilerFiller, $ProfileResults, $ProfileCollector } from "@package/net/minecraft/util/profiling";
import { $Executor_ } from "@package/java/util/concurrent";
import { $Set } from "@package/java/util";

declare module "@package/net/minecraft/util/profiling/metrics/profiling" {
    export class $ServerMetricsSamplersProvider$CpuStats {
    }
    export class $InactiveMetricsRecorder implements $MetricsRecorder {
        end(): void;
        cancel(): void;
        getProfiler(): $ProfilerFiller;
        endTick(): void;
        startTick(): void;
        isRecording(): boolean;
        static INSTANCE: $MetricsRecorder;
        constructor();
        get profiler(): $ProfilerFiller;
        get recording(): boolean;
    }
    export class $ActiveMetricsRecorder implements $MetricsRecorder {
        end(): void;
        cancel(): void;
        getProfiler(): $ProfilerFiller;
        static createStarted(arg0: $MetricsSamplerProvider_, arg1: $LongSupplier_, arg2: $Executor_, arg3: $MetricsPersister, arg4: $Consumer_<$ProfileResults>, arg5: $Consumer_<$Path>): $ActiveMetricsRecorder;
        endTick(): void;
        startTick(): void;
        isRecording(): boolean;
        static registerGlobalCompletionCallback(arg0: $Consumer_<$Path>): void;
        static PROFILING_MAX_DURATION_SECONDS: number;
        get profiler(): $ProfilerFiller;
        get recording(): boolean;
    }
    export class $ServerMetricsSamplersProvider implements $MetricsSamplerProvider {
        static tickTimeSampler(arg0: $LongSupplier_): $MetricSampler;
        samplers(arg0: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
        static runtimeIndependentSamplers(): $Set<$MetricSampler>;
        constructor(arg0: $LongSupplier_, arg1: boolean);
    }
    export class $ProfilerSamplerAdapter {
        newSamplersFoundInProfiler(arg0: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
        constructor();
    }
    export class $MetricsRecorder {
    }
    export interface $MetricsRecorder {
        end(): void;
        cancel(): void;
        getProfiler(): $ProfilerFiller;
        endTick(): void;
        startTick(): void;
        isRecording(): boolean;
        get profiler(): $ProfilerFiller;
        get recording(): boolean;
    }
}
