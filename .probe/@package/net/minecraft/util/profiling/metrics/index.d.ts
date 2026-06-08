import { $Int2DoubleMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Supplier_, $DoubleSupplier, $DoubleSupplier_, $Consumer_, $Supplier, $ToDoubleFunction_ } from "@package/java/util/function";
import { $ProfileCollector } from "@package/net/minecraft/util/profiling";
import { $Runnable_, $Enum } from "@package/java/lang";
import { $Set_, $List, $List_, $Set } from "@package/java/util";
export * as profiling from "@package/net/minecraft/util/profiling/metrics/profiling";
export * as storage from "@package/net/minecraft/util/profiling/metrics/storage";

declare module "@package/net/minecraft/util/profiling/metrics" {
    export class $MetricSampler$MetricSamplerBuilder<T> {
        build(): $MetricSampler;
        withBeforeTick(arg0: $Consumer_<T>): $MetricSampler$MetricSamplerBuilder<T>;
        withThresholdAlert(arg0: $MetricSampler$ThresholdTest_): $MetricSampler$MetricSamplerBuilder<T>;
        constructor(arg0: string, arg1: $MetricCategory_, arg2: $ToDoubleFunction_<T>, arg3: T);
    }
    export class $MetricSampler$SamplerResult {
        getFirstTick(): number;
        valueAtTick(arg0: number): number;
        getLastTick(): number;
        constructor(arg0: number, arg1: number, arg2: $Int2DoubleMap);
        get firstTick(): number;
        get lastTick(): number;
    }
    export class $MetricSampler$ThresholdTest {
    }
    export interface $MetricSampler$ThresholdTest {
        test(arg0: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MetricSampler$ThresholdTest}.
     */
    export type $MetricSampler$ThresholdTest_ = ((arg0: number) => boolean);
    export class $MetricSampler {
        getName(): string;
        static builder<T>(arg0: string, arg1: $MetricCategory_, arg2: $ToDoubleFunction_<T>, arg3: T): $MetricSampler$MetricSamplerBuilder<T>;
        result(): $MetricSampler$SamplerResult;
        static create<T>(arg0: string, arg1: $MetricCategory_, arg2: T, arg3: $ToDoubleFunction_<T>): $MetricSampler;
        static create(arg0: string, arg1: $MetricCategory_, arg2: $DoubleSupplier_): $MetricSampler;
        getCategory(): $MetricCategory;
        onStartTick(): void;
        onFinished(): void;
        onEndTick(arg0: number): void;
        getSampler(): $DoubleSupplier;
        triggersThreshold(): boolean;
        thresholdTest: $MetricSampler$ThresholdTest;
        constructor(arg0: string, arg1: $MetricCategory_, arg2: $DoubleSupplier_, arg3: $Runnable_, arg4: $MetricSampler$ThresholdTest_);
        get name(): string;
        get category(): $MetricCategory;
        get sampler(): $DoubleSupplier;
    }
    export class $MetricsSamplerProvider {
    }
    export interface $MetricsSamplerProvider {
        samplers(arg0: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
    }
    /**
     * Values that may be interpreted as {@link $MetricsSamplerProvider}.
     */
    export type $MetricsSamplerProvider_ = ((arg0: $Supplier<$ProfileCollector>) => $Set_<$MetricSampler>);
    export class $ProfilerMeasured {
    }
    export interface $ProfilerMeasured {
        profiledMetrics(): $List<$MetricSampler>;
    }
    /**
     * Values that may be interpreted as {@link $ProfilerMeasured}.
     */
    export type $ProfilerMeasured_ = (() => $List_<$MetricSampler>);
    export class $MetricsRegistry {
        add(arg0: $ProfilerMeasured_): void;
        getRegisteredSamplers(): $List<$MetricSampler>;
        static INSTANCE: $MetricsRegistry;
        get registeredSamplers(): $List<$MetricSampler>;
    }
    export class $MetricsRegistry$AggregatedMetricSampler extends $MetricSampler {
        thresholdTest: $MetricSampler$ThresholdTest;
    }
    export class $MetricCategory extends $Enum<$MetricCategory> {
        static values(): $MetricCategory[];
        static valueOf(arg0: string): $MetricCategory;
        getDescription(): string;
        static JVM: $MetricCategory;
        static PATH_FINDING: $MetricCategory;
        static EVENT_LOOPS: $MetricCategory;
        static TICK_LOOP: $MetricCategory;
        static CHUNK_RENDERING: $MetricCategory;
        static CPU: $MetricCategory;
        static MAIL_BOXES: $MetricCategory;
        static CHUNK_RENDERING_DISPATCHING: $MetricCategory;
        static GPU: $MetricCategory;
        get description(): string;
    }
    /**
     * Values that may be interpreted as {@link $MetricCategory}.
     */
    export type $MetricCategory_ = "path_finding" | "event_loops" | "mail_boxes" | "tick_loop" | "jvm" | "chunk_rendering" | "chunk_rendering_dispatching" | "cpu" | "gpu";
    export class $MetricSampler$ValueIncreasedByPercentage implements $MetricSampler$ThresholdTest {
        test(arg0: number): boolean;
        constructor(arg0: number);
    }
}
