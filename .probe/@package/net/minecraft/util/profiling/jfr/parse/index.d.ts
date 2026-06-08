import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Path_ } from "@package/java/nio/file";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $TickTimeStat, $TickTimeStat_, $GcHeapStat$Summary, $FileIOStat$Summary, $ThreadAllocationStat$Summary, $PacketIdentification_, $GcHeapStat$Summary_, $IoSummary$CountAndSize, $ChunkGenStat, $CpuLoadStat, $ThreadAllocationStat$Summary_, $ChunkIdentification_, $FileIOStat$Summary_, $ChunkGenStat_, $ChunkIdentification, $CpuLoadStat_, $PacketIdentification, $TimedStatSummary, $IoSummary } from "@package/net/minecraft/util/profiling/jfr/stats";

declare module "@package/net/minecraft/util/profiling/jfr/parse" {
    export class $JfrStatsParser {
        static parse(arg0: $Path_): $JfrStatsResult;
    }
    export class $JfrStatsResult extends $Record {
        fileReads(): $FileIOStat$Summary;
        fileWrites(): $FileIOStat$Summary;
        readChunks(): $IoSummary<$ChunkIdentification>;
        asJson(): string;
        tickTimes(): $List<$TickTimeStat>;
        recordingDuration(): $Duration;
        heapSummary(): $GcHeapStat$Summary;
        receivedPacketsSummary(): $IoSummary<$PacketIdentification>;
        threadAllocationSummary(): $ThreadAllocationStat$Summary;
        worldCreationDuration(): $Duration;
        writtenChunks(): $IoSummary<$ChunkIdentification>;
        recordingEnded(): $Instant;
        recordingStarted(): $Instant;
        cpuLoadStats(): $List<$CpuLoadStat>;
        chunkGenSummary(): $List<$Pair<$ChunkStatus, $TimedStatSummary<$ChunkGenStat>>>;
        chunkGenStats(): $List<$ChunkGenStat>;
        sentPacketsSummary(): $IoSummary<$PacketIdentification>;
        constructor(arg0: $Instant, arg1: $Instant, arg2: $Duration_, arg3: $Duration_, arg4: $List_<$TickTimeStat_>, arg5: $List_<$CpuLoadStat_>, arg6: $GcHeapStat$Summary_, arg7: $ThreadAllocationStat$Summary_, arg8: $IoSummary<$PacketIdentification_>, arg9: $IoSummary<$PacketIdentification_>, arg10: $IoSummary<$ChunkIdentification_>, arg11: $IoSummary<$ChunkIdentification_>, arg12: $FileIOStat$Summary_, arg13: $FileIOStat$Summary_, arg14: $List_<$ChunkGenStat_>);
    }
    export class $JfrStatsParser$MutableCountAndSize {
        increment(arg0: number): void;
        toCountAndSize(): $IoSummary$CountAndSize;
        constructor();
    }
}
