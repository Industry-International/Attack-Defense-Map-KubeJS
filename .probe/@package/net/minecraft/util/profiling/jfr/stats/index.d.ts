import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ColumnPos_, $ColumnPos } from "@package/net/minecraft/server/level";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $RecordedEvent } from "@package/jdk/jfr/consumer";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $Record } from "@package/java/lang";
import { $Comparator, $List, $Map_, $Map, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/util/profiling/jfr/stats" {
    export class $FileIOStat extends $Record {
        bytes(): number;
        duration(): $Duration;
        path(): string;
        static summary(arg0: $Duration_, arg1: $List_<$FileIOStat_>): $FileIOStat$Summary;
        constructor(arg0: $Duration_, arg1: string, arg2: number);
    }
    export class $TimedStat {
    }
    export interface $TimedStat {
        duration(): $Duration;
    }
    /**
     * Values that may be interpreted as {@link $TimedStat}.
     */
    export type $TimedStat_ = (() => $Duration_);
    export class $IoSummary<T> {
        getTotalCount(): number;
        getTotalSize(): number;
        getSizePerSecond(): number;
        getCountsPerSecond(): number;
        largestSizeContributors(): $List<$Pair<T, $IoSummary$CountAndSize>>;
        constructor(arg0: $Duration_, arg1: $List_<$Pair<T, $IoSummary$CountAndSize_>>);
        get totalCount(): number;
        get totalSize(): number;
        get sizePerSecond(): number;
        get countsPerSecond(): number;
    }
    export class $ChunkGenStat extends $Record implements $TimedStat {
        static from(arg0: $RecordedEvent): $ChunkGenStat;
        status(): $ChunkStatus;
        duration(): $Duration;
        level(): string;
        worldPos(): $ColumnPos;
        chunkPos(): $ChunkPos;
        constructor(arg0: $Duration_, arg1: $ChunkPos, arg2: $ColumnPos_, arg3: $ChunkStatus_, arg4: string);
    }
    export class $GcHeapStat$Timing extends $Enum<$GcHeapStat$Timing> {
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat$Timing}.
     */
    export type $GcHeapStat$Timing_ = "before_gc" | "after_gc";
    export class $IoSummary$CountAndSize extends $Record {
        add(arg0: $IoSummary$CountAndSize_): $IoSummary$CountAndSize;
        totalSize(): number;
        totalCount(): number;
        averageSize(): number;
        static SIZE_THEN_COUNT: $Comparator<$IoSummary$CountAndSize>;
        constructor(arg0: number, arg1: number);
    }
    export class $FileIOStat$Summary extends $Record {
        counts(): number;
        totalBytes(): number;
        bytesPerSecond(): number;
        topTenContributorsByTotalBytes(): $List<$Pair<string, number>>;
        countsPerSecond(): number;
        timeSpentInIO(): $Duration;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Duration_, arg5: $List_<$Pair<string, number>>);
    }
    export class $TimedStatSummary<T extends $TimedStat> extends $Record {
        count(): number;
        fastest(): T;
        static summary<T extends $TimedStat>(arg0: $List_<T>): $TimedStatSummary<T>;
        totalDuration(): $Duration;
        percentilesNanos(): $Map<number, number>;
        secondSlowest(): T;
        slowest(): T;
        constructor(arg0: T, arg1: T, arg2: T, arg3: number, arg4: $Map_<number, number>, arg5: $Duration_);
    }
    export class $ThreadAllocationStat extends $Record {
        static from(arg0: $RecordedEvent): $ThreadAllocationStat;
        timestamp(): $Instant;
        threadName(): string;
        totalBytes(): number;
        static summary(arg0: $List_<$ThreadAllocationStat_>): $ThreadAllocationStat$Summary;
        constructor(arg0: $Instant, arg1: string, arg2: number);
    }
    export class $TickTimeStat extends $Record {
        static from(arg0: $RecordedEvent): $TickTimeStat;
        timestamp(): $Instant;
        currentAverage(): $Duration;
        constructor(arg0: $Instant, arg1: $Duration_);
    }
    export class $GcHeapStat$Summary extends $Record {
        duration(): $Duration;
        allocationRateBytesPerSecond(): number;
        gcTotalDuration(): $Duration;
        totalGCs(): number;
        gcOverHead(): number;
        constructor(arg0: $Duration_, arg1: $Duration_, arg2: number, arg3: number);
    }
    export class $GcHeapStat extends $Record {
        static from(arg0: $RecordedEvent): $GcHeapStat;
        timestamp(): $Instant;
        timing(): $GcHeapStat$Timing;
        static summary(arg0: $Duration_, arg1: $List_<$GcHeapStat_>, arg2: $Duration_, arg3: number): $GcHeapStat$Summary;
        heapUsed(): number;
        constructor(arg0: $Instant, arg1: number, arg2: $GcHeapStat$Timing_);
    }
    export class $ChunkIdentification extends $Record {
        x(): number;
        static from(arg0: $RecordedEvent): $ChunkIdentification;
        z(): number;
        level(): string;
        dimension(): string;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    export class $CpuLoadStat extends $Record {
        static from(arg0: $RecordedEvent): $CpuLoadStat;
        system(): number;
        jvm(): number;
        userJvm(): number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $PacketIdentification extends $Record {
        static from(arg0: $RecordedEvent): $PacketIdentification;
        direction(): string;
        protocolId(): string;
        packetId(): string;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    export class $ThreadAllocationStat$Summary extends $Record {
        allocationsPerSecondByThread(): $Map<string, number>;
        constructor(arg0: $Map_<string, number>);
    }
}
