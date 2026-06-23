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
        withThresholdAlert(thresholdTest: $MetricSampler$ThresholdTest_): $MetricSampler$MetricSamplerBuilder<T>;
        withBeforeTick(beforeTick: $Consumer_<T>): $MetricSampler$MetricSamplerBuilder<T>;
        constructor(name: string, category: $MetricCategory_, sampler: $ToDoubleFunction_<T>, context: T);
    }
    export class $MetricSampler$SamplerResult {
        valueAtTick(tick: number): number;
        getLastTick(): number;
        getFirstTick(): number;
        constructor(firstTick: number, lastTick: number, recording: $Int2DoubleMap);
        get lastTick(): number;
        get firstTick(): number;
    }
    export class $MetricSampler$ThresholdTest {
    }
    export interface $MetricSampler$ThresholdTest {
        test(value: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MetricSampler$ThresholdTest}.
     */
    export type $MetricSampler$ThresholdTest_ = ((arg0: number) => boolean);
    export class $MetricSampler {
        getSampler(): $DoubleSupplier;
        getName(): string;
        static builder<T>(name: string, category: $MetricCategory_, sampler: $ToDoubleFunction_<T>, context: T): $MetricSampler$MetricSamplerBuilder<T>;
        result(): $MetricSampler$SamplerResult;
        static create<T>(name: string, category: $MetricCategory_, context: T, sampler: $ToDoubleFunction_<T>): $MetricSampler;
        static create(name: string, category: $MetricCategory_, sampler: $DoubleSupplier_): $MetricSampler;
        getCategory(): $MetricCategory;
        triggersThreshold(): boolean;
        onEndTick(tickTime: number): void;
        onFinished(): void;
        onStartTick(): void;
        thresholdTest: $MetricSampler$ThresholdTest;
        constructor(name: string, category: $MetricCategory_, sampler: $DoubleSupplier_, beforeTick: $Runnable_ | null, thresholdTest: $MetricSampler$ThresholdTest_ | null);
        get sampler(): $DoubleSupplier;
        get name(): string;
        get category(): $MetricCategory;
    }
    export class $MetricsSamplerProvider {
    }
    export interface $MetricsSamplerProvider {
        samplers(profiles: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
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
        add(key: $ProfilerMeasured_): void;
        getRegisteredSamplers(): $List<$MetricSampler>;
        static INSTANCE: $MetricsRegistry;
        get registeredSamplers(): $List<$MetricSampler>;
    }
    export class $MetricsRegistry$AggregatedMetricSampler extends $MetricSampler {
        thresholdTest: $MetricSampler$ThresholdTest;
    }
    export class $MetricCategory extends $Enum<$MetricCategory> {
        getDescription(): string;
        static values(): $MetricCategory[];
        static valueOf(arg0: string): $MetricCategory;
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
        test(value: number): boolean;
        constructor(percentageIncreaseThreshold: number);
    }
}
