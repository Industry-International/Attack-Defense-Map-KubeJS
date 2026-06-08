import { $GameType_, $Level_ } from "@package/net/minecraft/world/level";
import { $LongList } from "@package/it/unimi/dsi/fastutil/longs";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Minecraft, $User } from "@package/net/minecraft/client";
import { $UUID, $List, $Map_, $List_, $Map, $Set } from "@package/java/util";
import { $GameLoadTimesEvent$Measurement } from "@package/net/minecraft/client/telemetry/events";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Instant, $Duration_ } from "@package/java/time";
import { $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $Consumer, $Consumer_ } from "@package/java/util/function";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $FileChannel } from "@package/java/nio/channels";
import { $TelemetrySession, $TelemetryPropertyContainer, $UserApiService, $TelemetryEvent } from "@package/com/mojang/authlib/minecraft";
export * as events from "@package/net/minecraft/client/telemetry/events";

declare module "@package/net/minecraft/client/telemetry" {
    export class $ClientTelemetryManager implements $AutoCloseable {
        close(): void;
        getOutsideSessionSender(): $TelemetryEventSender;
        getLogDirectory(): $Path;
        createWorldSessionManager(arg0: boolean, arg1: $Duration_, arg2: string): $WorldSessionTelemetryManager;
        constructor(arg0: $Minecraft, arg1: $UserApiService, arg2: $User);
        get outsideSessionSender(): $TelemetryEventSender;
        get logDirectory(): $Path;
    }
    export class $TelemetryProperty$ServerType extends $Enum<$TelemetryProperty$ServerType> implements $StringRepresentable {
        static values(): $TelemetryProperty$ServerType[];
        static valueOf(arg0: string): $TelemetryProperty$ServerType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static OTHER: $TelemetryProperty$ServerType;
        static CODEC: $Codec<$TelemetryProperty$ServerType>;
        static LOCAL: $TelemetryProperty$ServerType;
        static REALM: $TelemetryProperty$ServerType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty$ServerType}.
     */
    export type $TelemetryProperty$ServerType_ = "realm" | "local" | "server";
    export class $TelemetryEventLog implements $AutoCloseable {
        close(): void;
        logger(): $TelemetryEventLogger;
        constructor(arg0: $FileChannel, arg1: $Executor_);
    }
    export class $WorldSessionTelemetryManager {
        setTime(arg0: number): void;
        tick(): void;
        onDisconnect(): void;
        onServerBrandReceived(arg0: string): void;
        onPlayerInfoReceived(arg0: $GameType_, arg1: boolean): void;
        worldSessionStart(): void;
        onAdvancementDone(arg0: $Level_, arg1: $AdvancementHolder_): void;
        constructor(arg0: $TelemetryEventSender_, arg1: boolean, arg2: $Duration_, arg3: string);
        set time(value: number);
    }
    export class $TelemetryEventInstance extends $Record {
        type(): $TelemetryEventType;
        properties(): $TelemetryPropertyMap;
        "export"(arg0: $TelemetrySession): $TelemetryEvent;
        static CODEC: $Codec<$TelemetryEventInstance>;
        constructor(arg0: $TelemetryEventType, arg1: $TelemetryPropertyMap);
    }
    export class $TelemetryEventLogger {
    }
    export interface $TelemetryEventLogger {
        log(arg0: $TelemetryEventInstance_): void;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventLogger}.
     */
    export type $TelemetryEventLogger_ = ((arg0: $TelemetryEventInstance) => void);
    export class $TelemetryPropertyMap$Builder {
        put<T>(arg0: $TelemetryProperty_<T>, arg1: T): $TelemetryPropertyMap$Builder;
        putAll(arg0: $TelemetryPropertyMap): $TelemetryPropertyMap$Builder;
        build(): $TelemetryPropertyMap;
        putIfNotNull<T>(arg0: $TelemetryProperty_<T>, arg1: T): $TelemetryPropertyMap$Builder;
        constructor();
    }
    export class $TelemetryLogManager implements $AutoCloseable {
        close(): void;
        static open(arg0: $Path_): $CompletableFuture<($TelemetryLogManager) | undefined>;
        openLogger(): $CompletableFuture<($TelemetryEventLogger) | undefined>;
    }
    export class $TelemetryProperty<T> extends $Record {
        id(): string;
        static create<T>(arg0: string, arg1: string, arg2: $Codec<T>, arg3: $TelemetryProperty$Exporter_<T>): $TelemetryProperty<T>;
        static makeLong(arg0: string, arg1: string): $TelemetryProperty<number>;
        static string(arg0: string, arg1: string): $TelemetryProperty<string>;
        "export"(arg0: $TelemetryPropertyMap, arg1: $TelemetryPropertyContainer): void;
        static integer(arg0: string, arg1: string): $TelemetryProperty<number>;
        static uuid(arg0: string, arg1: string): $TelemetryProperty<$UUID>;
        static bool(arg0: string, arg1: string): $TelemetryProperty<boolean>;
        title(): $MutableComponent;
        codec(): $Codec<T>;
        exportKey(): string;
        static gameLoadMeasurement(arg0: string, arg1: string): $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static longSamples(arg0: string, arg1: string): $TelemetryProperty<$LongList>;
        exporter(): $TelemetryProperty$Exporter<T>;
        static RENDER_TIME_SAMPLES: $TelemetryProperty<$LongList>;
        static LOAD_TIME_BOOTSTRAP_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static USED_MEMORY_SAMPLES: $TelemetryProperty<$LongList>;
        static LOAD_TIME_TOTAL_TIME_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static GAME_VERSION: $TelemetryProperty<string>;
        static EVENT_TIMESTAMP_UTC: $TelemetryProperty<$Instant>;
        static USER_ID: $TelemetryProperty<string>;
        static OPT_IN: $TelemetryProperty<boolean>;
        static WORLD_SESSION_ID: $TelemetryProperty<$UUID>;
        static MINECRAFT_SESSION_ID: $TelemetryProperty<$UUID>;
        static DEDICATED_MEMORY_KB: $TelemetryProperty<number>;
        static PLATFORM: $TelemetryProperty<string>;
        static GAME_MODE: $TelemetryProperty<$TelemetryProperty$GameMode>;
        static CLIENT_ID: $TelemetryProperty<string>;
        static TICKS_SINCE_LOAD: $TelemetryProperty<number>;
        static SECONDS_SINCE_LOAD: $TelemetryProperty<number>;
        static SERVER_MODDED: $TelemetryProperty<boolean>;
        static OPERATING_SYSTEM: $TelemetryProperty<string>;
        static ADVANCEMENT_GAME_TIME: $TelemetryProperty<number>;
        static CLIENT_MODDED: $TelemetryProperty<boolean>;
        static NUMBER_OF_SAMPLES: $TelemetryProperty<number>;
        static LAUNCHER_NAME: $TelemetryProperty<string>;
        static NEW_WORLD: $TelemetryProperty<boolean>;
        static SERVER_TYPE: $TelemetryProperty<$TelemetryProperty$ServerType>;
        static REALMS_MAP_CONTENT: $TelemetryProperty<string>;
        static RENDER_DISTANCE: $TelemetryProperty<number>;
        static LOAD_TIME_PRE_WINDOW_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static ADVANCEMENT_ID: $TelemetryProperty<string>;
        static LOAD_TIME_LOADING_OVERLAY_MS: $TelemetryProperty<$GameLoadTimesEvent$Measurement>;
        static FRAME_RATE_SAMPLES: $TelemetryProperty<$LongList>;
        static WORLD_LOAD_TIME_MS: $TelemetryProperty<number>;
        constructor(arg0: string, arg1: string, arg2: $Codec<T>, arg3: $TelemetryProperty$Exporter_<T>);
    }
    export class $TelemetryPropertyMap {
        get<T>(arg0: $TelemetryProperty_<T>): T;
        static builder(): $TelemetryPropertyMap$Builder;
        propertySet(): $Set<$TelemetryProperty<never>>;
        static createCodec(arg0: $List_<$TelemetryProperty_<never>>): $MapCodec<$TelemetryPropertyMap>;
        entries: $Map<$TelemetryProperty<never>, $Object>;
        constructor(arg0: $Map_<$TelemetryProperty_<never>, $Object>);
    }
    export class $TelemetryProperty$GameMode extends $Enum<$TelemetryProperty$GameMode> implements $StringRepresentable {
        static values(): $TelemetryProperty$GameMode[];
        static valueOf(arg0: string): $TelemetryProperty$GameMode;
        id(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SURVIVAL: $TelemetryProperty$GameMode;
        static SPECTATOR: $TelemetryProperty$GameMode;
        static CODEC: $Codec<$TelemetryProperty$GameMode>;
        static CREATIVE: $TelemetryProperty$GameMode;
        static ADVENTURE: $TelemetryProperty$GameMode;
        static HARDCORE: $TelemetryProperty$GameMode;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty$GameMode}.
     */
    export type $TelemetryProperty$GameMode_ = "survival" | "creative" | "adventure" | "spectator" | "hardcore";
    export class $TelemetryEventType {
        static values(): $List<$TelemetryEventType>;
        static builder(arg0: string, arg1: string): $TelemetryEventType$Builder;
        contains<T>(arg0: $TelemetryProperty_<T>): boolean;
        id(): string;
        properties(): $List<$TelemetryProperty<never>>;
        "export"(arg0: $TelemetrySession, arg1: $TelemetryPropertyMap): $TelemetryEvent;
        description(): $MutableComponent;
        title(): $MutableComponent;
        codec(): $MapCodec<$TelemetryEventInstance>;
        isOptIn(): boolean;
        static CODEC: $Codec<$TelemetryEventType>;
        static WORLD_LOADED: $TelemetryEventType;
        static ADVANCEMENT_MADE: $TelemetryEventType;
        static WORLD_UNLOADED: $TelemetryEventType;
        static PERFORMANCE_METRICS: $TelemetryEventType;
        static GAME_LOAD_TIMES: $TelemetryEventType;
        static REGISTRY: $Map<string, $TelemetryEventType>;
        static WORLD_LOAD_TIMES: $TelemetryEventType;
        constructor(arg0: string, arg1: string, arg2: $List_<$TelemetryProperty_<never>>, arg3: boolean);
        get optIn(): boolean;
    }
    export class $TelemetryEventType$Builder {
        register(): $TelemetryEventType;
        optIn(): $TelemetryEventType$Builder;
        define<T>(arg0: $TelemetryProperty_<T>): $TelemetryEventType$Builder;
        defineAll(arg0: $List_<$TelemetryProperty_<never>>): $TelemetryEventType$Builder;
        constructor(arg0: string, arg1: string);
    }
    export class $TelemetryEventSender {
        static DISABLED: $TelemetryEventSender;
    }
    export interface $TelemetryEventSender {
        send(arg0: $TelemetryEventType, arg1: $Consumer_<$TelemetryPropertyMap$Builder>): void;
        decorate(arg0: $Consumer_<$TelemetryPropertyMap$Builder>): $TelemetryEventSender;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventSender}.
     */
    export type $TelemetryEventSender_ = ((arg0: $TelemetryEventType, arg1: $Consumer<$TelemetryPropertyMap$Builder>) => void);
    export class $TelemetryProperty$Exporter<T> {
    }
    export interface $TelemetryProperty$Exporter<T> {
        apply(arg0: $TelemetryPropertyContainer, arg1: string, arg2: T): void;
    }
    /**
     * Values that may be interpreted as {@link $TelemetryProperty$Exporter}.
     */
    export type $TelemetryProperty$Exporter_<T> = ((arg0: $TelemetryPropertyContainer, arg1: string, arg2: T) => void);
}
