import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $ClientboundDebugSamplePacket_ } from "@package/net/minecraft/network/protocol/game";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/util/debugchart" {
    export class $DebugSampleSubscriptionTracker$SubscriptionStartedAt extends $Record {
    }
    export class $DebugSampleSubscriptionTracker$SubscriptionRequest extends $Record {
    }
    export class $LocalSampleLogger extends $AbstractSampleLogger implements $SampleStorage {
        size(): number;
        reset(): void;
        get(arg0: number, arg1: number): number;
        get(arg0: number): number;
        capacity(): number;
        static CAPACITY: number;
        defaults: number[];
        sample: number[];
        constructor(arg0: number);
        constructor(arg0: number, arg1: number[]);
    }
    export class $SampleStorage {
    }
    export interface $SampleStorage {
        size(): number;
        reset(): void;
        get(arg0: number, arg1: number): number;
        get(arg0: number): number;
        capacity(): number;
    }
    export class $TpsDebugDimensions extends $Enum<$TpsDebugDimensions> {
        static values(): $TpsDebugDimensions[];
        static valueOf(arg0: string): $TpsDebugDimensions;
        static IDLE: $TpsDebugDimensions;
        static FULL_TICK: $TpsDebugDimensions;
        static TICK_SERVER_METHOD: $TpsDebugDimensions;
        static SCHEDULED_TASKS: $TpsDebugDimensions;
    }
    /**
     * Values that may be interpreted as {@link $TpsDebugDimensions}.
     */
    export type $TpsDebugDimensions_ = "full_tick" | "tick_server_method" | "scheduled_tasks" | "idle";
    export class $DebugSampleSubscriptionTracker {
        broadcast(arg0: $ClientboundDebugSamplePacket_): void;
        tick(arg0: number): void;
        subscribe(arg0: $ServerPlayer, arg1: $RemoteDebugSampleType_): void;
        shouldLogSamples(arg0: $RemoteDebugSampleType_): boolean;
        static STOP_SENDING_AFTER_MS: number;
        static STOP_SENDING_AFTER_TICKS: number;
        constructor(arg0: $PlayerList);
    }
    export class $RemoteDebugSampleType extends $Enum<$RemoteDebugSampleType> {
        static values(): $RemoteDebugSampleType[];
        static valueOf(arg0: string): $RemoteDebugSampleType;
        static TICK_TIME: $RemoteDebugSampleType;
    }
    /**
     * Values that may be interpreted as {@link $RemoteDebugSampleType}.
     */
    export type $RemoteDebugSampleType_ = "tick_time";
    export class $AbstractSampleLogger implements $SampleLogger {
        logPartialSample(arg0: number, arg1: number): void;
        useSample(): void;
        logSample(arg0: number): void;
        logFullSample(arg0: number[]): void;
        resetSample(): void;
        defaults: number[];
        sample: number[];
        constructor(arg0: number, arg1: number[]);
    }
    export class $SampleLogger {
    }
    export interface $SampleLogger {
        logPartialSample(arg0: number, arg1: number): void;
        logSample(arg0: number): void;
        logFullSample(arg0: number[]): void;
    }
    export class $RemoteSampleLogger extends $AbstractSampleLogger {
        defaults: number[];
        sample: number[];
        constructor(arg0: number, arg1: $DebugSampleSubscriptionTracker, arg2: $RemoteDebugSampleType_);
        constructor(arg0: number, arg1: $DebugSampleSubscriptionTracker, arg2: $RemoteDebugSampleType_, arg3: number[]);
    }
}
