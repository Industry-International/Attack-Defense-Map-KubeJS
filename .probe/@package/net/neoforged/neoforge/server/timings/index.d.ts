import { $Entity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $WeakReference } from "@package/java/lang/ref";

declare module "@package/net/neoforged/neoforge/server/timings" {
    export class $ObjectTimings<T> {
        getObject(): $WeakReference<T>;
        getAverageTimings(): number;
        constructor(arg0: T, arg1: number[]);
        get object(): $WeakReference<T>;
        get averageTimings(): number;
    }
    export class $TimeTracker<T> {
        reset(): void;
        enable(arg0: number): void;
        trackStart(arg0: T): void;
        trackEnd(arg0: T): void;
        getTimingData(): $ImmutableList<$ObjectTimings<T>>;
        static ENTITY_UPDATE: $TimeTracker<$Entity>;
        static BLOCK_ENTITY_UPDATE: $TimeTracker<$BlockEntity>;
        constructor();
        get timingData(): $ImmutableList<$ObjectTimings<T>>;
    }
}
