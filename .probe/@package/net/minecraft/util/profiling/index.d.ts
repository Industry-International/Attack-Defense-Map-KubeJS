import { $Supplier_, $IntSupplier_, $LongSupplier_ } from "@package/java/util/function";
import { $Object2LongMap, $Object2LongOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $MetricCategory_, $MetricCategory } from "@package/net/minecraft/util/profiling/metrics";
import { $Path_ } from "@package/java/nio/file";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $List, $Map_, $Set } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
export * as jfr from "@package/net/minecraft/util/profiling/jfr";
export * as metrics from "@package/net/minecraft/util/profiling/metrics";

declare module "@package/net/minecraft/util/profiling" {
    export class $EmptyProfileResults implements $ProfileResults {
        getTimes(arg0: string): $List<$ResultField>;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getStartTimeNano(): number;
        saveResults(arg0: $Path_): boolean;
        getProfilerResults(): string;
        getNanoDuration(): number;
        getTickDuration(): number;
        static EMPTY: $EmptyProfileResults;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get startTimeNano(): number;
        get profilerResults(): string;
        get nanoDuration(): number;
        get tickDuration(): number;
    }
    export class $ActiveProfiler implements $ProfileCollector {
        push(arg0: $Supplier_<string>): void;
        push(arg0: string): void;
        pop(): void;
        getEntry(arg0: string): $ActiveProfiler$PathEntry;
        getResults(): $ProfileResults;
        popPush(arg0: $Supplier_<string>): void;
        popPush(arg0: string): void;
        endTick(): void;
        startTick(): void;
        markForCharting(arg0: $MetricCategory_): void;
        incrementCounter(arg0: string, arg1: number): void;
        incrementCounter(arg0: $Supplier_<string>, arg1: number): void;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        incrementCounter(arg0: $Supplier_<string>): void;
        incrementCounter(arg0: string): void;
        constructor(arg0: $LongSupplier_, arg1: $IntSupplier_, arg2: boolean);
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $InactiveProfiler implements $ProfileCollector {
        push(arg0: $Supplier_<string>): void;
        push(arg0: string): void;
        pop(): void;
        getEntry(arg0: string): $ActiveProfiler$PathEntry;
        getResults(): $ProfileResults;
        popPush(arg0: string): void;
        popPush(arg0: $Supplier_<string>): void;
        endTick(): void;
        startTick(): void;
        markForCharting(arg0: $MetricCategory_): void;
        incrementCounter(arg0: $Supplier_<string>, arg1: number): void;
        incrementCounter(arg0: string, arg1: number): void;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        incrementCounter(arg0: $Supplier_<string>): void;
        incrementCounter(arg0: string): void;
        static INSTANCE: $InactiveProfiler;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $ActiveProfiler$PathEntry implements $ProfilerPathEntry {
        getCount(): number;
        getDuration(): number;
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        minDuration: number;
        counters: $Object2LongOpenHashMap<string>;
        count: number;
        maxDuration: number;
        accumulatedDuration: number;
        constructor();
        get duration(): number;
    }
    export class $ProfilerFiller {
        static tee(arg0: $ProfilerFiller, arg1: $ProfilerFiller): $ProfilerFiller;
        static ROOT: string;
    }
    export interface $ProfilerFiller {
        push(arg0: string): void;
        push(arg0: $Supplier_<string>): void;
        pop(): void;
        popPush(arg0: string): void;
        popPush(arg0: $Supplier_<string>): void;
        endTick(): void;
        startTick(): void;
        markForCharting(arg0: $MetricCategory_): void;
        incrementCounter(arg0: string, arg1: number): void;
        incrementCounter(arg0: $Supplier_<string>, arg1: number): void;
        incrementCounter(arg0: $Supplier_<string>): void;
        incrementCounter(arg0: string): void;
    }
    export class $ContinuousProfiler {
        isEnabled(): boolean;
        enable(): void;
        disable(): void;
        getResults(): $ProfileResults;
        getFiller(): $ProfilerFiller;
        constructor(arg0: $LongSupplier_, arg1: $IntSupplier_);
        get enabled(): boolean;
        get results(): $ProfileResults;
        get filler(): $ProfilerFiller;
    }
    export class $ProfilerPathEntry {
    }
    export interface $ProfilerPathEntry {
        getCount(): number;
        getDuration(): number;
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        get count(): number;
        get duration(): number;
        get counters(): $Object2LongMap<string>;
        get maxDuration(): number;
    }
    export class $SingleTickProfiler {
        static createTickProfiler(arg0: string): $SingleTickProfiler;
        endTick(): void;
        startTick(): $ProfilerFiller;
        static decorateFiller(arg0: $ProfilerFiller, arg1: $SingleTickProfiler): $ProfilerFiller;
        constructor(arg0: $LongSupplier_, arg1: string, arg2: number);
    }
    export class $ResultField implements $Comparable<$ResultField> {
        compareTo(arg0: $ResultField): number;
        getColor(): number;
        globalPercentage: number;
        percentage: number;
        count: number;
        name: string;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number);
        get color(): number;
    }
    export class $FilledProfileResults implements $ProfileResults {
        getTimes(arg0: string): $List<$ResultField>;
        getTickDuration(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getStartTimeNano(): number;
        saveResults(arg0: $Path_): boolean;
        getProfilerResults(): string;
        getProfilerResults(arg0: number, arg1: number): string;
        getNanoDuration(): number;
        constructor(arg0: $Map_<string, $ProfilerPathEntry>, arg1: number, arg2: number, arg3: number, arg4: number);
        get tickDuration(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get startTimeNano(): number;
        get nanoDuration(): number;
    }
    export class $ProfileResults {
        static demanglePath(arg0: string): string;
        static PATH_SEPARATOR: string;
    }
    export interface $ProfileResults {
        getTimes(arg0: string): $List<$ResultField>;
        getNanoDuration(): number;
        getTickDuration(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getStartTimeNano(): number;
        saveResults(arg0: $Path_): boolean;
        getProfilerResults(): string;
        get nanoDuration(): number;
        get tickDuration(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get startTimeNano(): number;
        get profilerResults(): string;
    }
    export class $ProfileCollector {
    }
    export interface $ProfileCollector extends $ProfilerFiller {
        getEntry(arg0: string): $ActiveProfiler$PathEntry;
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $FilledProfileResults$CounterCollector {
    }
}
