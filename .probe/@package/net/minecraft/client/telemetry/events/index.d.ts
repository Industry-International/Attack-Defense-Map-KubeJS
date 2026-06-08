import { $Duration_ } from "@package/java/time";
import { $GameType_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $TelemetryProperty_, $TelemetryEventSender_, $TelemetryPropertyMap$Builder } from "@package/net/minecraft/client/telemetry";
import { $Record } from "@package/java/lang";
import { $Ticker, $Stopwatch } from "@package/com/google/common/base";

declare module "@package/net/minecraft/client/telemetry/events" {
    export class $GameLoadTimesEvent {
        send(arg0: $TelemetryEventSender_): void;
        setBootstrapTime(arg0: number): void;
        endStep(arg0: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>): void;
        beginStep(arg0: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>): void;
        beginStep(arg0: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>, arg1: $Stopwatch): void;
        static INSTANCE: $GameLoadTimesEvent;
        constructor(arg0: $Ticker);
        set bootstrapTime(value: number);
    }
    export class $WorldLoadTimesEvent {
        send(arg0: $TelemetryEventSender_): void;
        constructor(arg0: boolean, arg1: $Duration_);
    }
    export class $WorldUnloadEvent {
        setTime(arg0: number): void;
        send(arg0: $TelemetryEventSender_): void;
        onPlayerInfoReceived(): void;
        constructor();
        set time(value: number);
    }
    export class $AggregatedTelemetryEvent {
        start(): void;
        stop(): void;
        tick(arg0: $TelemetryEventSender_): void;
        getSampleCount(): number;
        sendEvent(arg0: $TelemetryEventSender_): void;
        takeSample(): void;
        shouldTakeSample(): boolean;
        shouldSentEvent(): boolean;
        constructor();
        get sampleCount(): number;
    }
    export class $GameLoadTimesEvent$Measurement extends $Record {
        millis(): number;
        static CODEC: $Codec<$GameLoadTimesEvent$Measurement>;
        constructor(arg0: number);
    }
    export class $PerformanceMetricsEvent extends $AggregatedTelemetryEvent {
        constructor();
    }
    export class $WorldLoadEvent {
        send(arg0: $TelemetryEventSender_): boolean;
        setGameMode(arg0: $GameType_, arg1: boolean): void;
        addProperties(arg0: $TelemetryPropertyMap$Builder): void;
        setServerBrand(arg0: string): void;
        constructor(arg0: string);
        set serverBrand(value: string);
    }
}
