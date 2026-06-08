import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $Reader, $InputStream, $Closeable } from "@package/java/io";
import { $Annotation } from "@package/java/lang/annotation";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Event as $Event$1 } from "@package/jdk/internal/event";
import { $Enum, $Object, $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
export * as consumer from "@package/jdk/jfr/consumer";

declare module "@package/jdk/jfr" {
    export class $Event extends $Event$1 {
    }
    export class $RecordingState extends $Enum<$RecordingState> {
        static values(): $RecordingState[];
        static valueOf(arg0: string): $RecordingState;
        static NEW: $RecordingState;
        static DELAYED: $RecordingState;
        static CLOSED: $RecordingState;
        static RUNNING: $RecordingState;
        static STOPPED: $RecordingState;
    }
    /**
     * Values that may be interpreted as {@link $RecordingState}.
     */
    export type $RecordingState_ = "new" | "delayed" | "running" | "stopped" | "closed";
    export class $Configuration {
        getDescription(): string;
        getName(): string;
        static create(arg0: $Path_): $Configuration;
        static create(arg0: $Reader): $Configuration;
        getProvider(): string;
        getContents(): string;
        getLabel(): string;
        getSettings(): $Map<string, string>;
        static getConfiguration(arg0: string): $Configuration;
        static getConfigurations(): $List<$Configuration>;
        get description(): string;
        get name(): string;
        get provider(): string;
        get contents(): string;
        get label(): string;
        get settings(): $Map<string, string>;
        static get configurations(): $List<$Configuration>;
    }
    export class $AnnotationElement {
        getValue(arg0: string): $Object;
        getTypeName(): string;
        getAnnotation<A>(arg0: $Class<$Annotation>): A;
        hasValue(arg0: string): boolean;
        getValues(): $List<$Object>;
        getAnnotationElements(): $List<$AnnotationElement>;
        getValueDescriptors(): $List<$ValueDescriptor>;
        getTypeId(): number;
        constructor(arg0: $Class<$Annotation>);
        constructor(arg0: $Class<$Annotation>, arg1: $Object);
        constructor(arg0: $Class<$Annotation>, arg1: $Map_<string, $Object>);
        get typeName(): string;
        get values(): $List<$Object>;
        get annotationElements(): $List<$AnnotationElement>;
        get valueDescriptors(): $List<$ValueDescriptor>;
        get typeId(): number;
    }
    export class $ValueDescriptor {
        getContentType(): string;
        getDescription(): string;
        getName(): string;
        isArray(): boolean;
        getTypeName(): string;
        getFields(): $List<$ValueDescriptor>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getLabel(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        getTypeId(): number;
        constructor(arg0: $Class<never>, arg1: string);
        constructor(arg0: $Class<never>, arg1: string, arg2: $List_<$AnnotationElement>);
        get contentType(): string;
        get description(): string;
        get name(): string;
        get array(): boolean;
        get typeName(): string;
        get fields(): $List<$ValueDescriptor>;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
        get typeId(): number;
    }
    export class $EventType {
        getDescription(): string;
        getName(): string;
        isEnabled(): boolean;
        getFields(): $List<$ValueDescriptor>;
        getField(arg0: string): $ValueDescriptor;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getId(): number;
        getSettingDescriptors(): $List<$SettingDescriptor>;
        getLabel(): string;
        getCategoryNames(): $List<string>;
        getAnnotationElements(): $List<$AnnotationElement>;
        static getEventType(arg0: $Class<$Event>): $EventType;
        get description(): string;
        get name(): string;
        get enabled(): boolean;
        get fields(): $List<$ValueDescriptor>;
        get id(): number;
        get settingDescriptors(): $List<$SettingDescriptor>;
        get label(): string;
        get categoryNames(): $List<string>;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $Recording implements $Closeable {
        getName(): string;
        start(): void;
        stop(): boolean;
        setName(arg0: string): void;
        getId(): number;
        getState(): $RecordingState;
        close(): void;
        copy(arg0: boolean): $Recording;
        dump(arg0: $Path_): void;
        getSize(): number;
        enable(arg0: $Class<$Event>): $EventSettings;
        enable(arg0: string): $EventSettings;
        getDuration(): $Duration;
        getDumpOnExit(): boolean;
        getStream(arg0: $Instant, arg1: $Instant): $InputStream;
        getDestination(): $Path;
        getMaxSize(): number;
        getMaxAge(): $Duration;
        setToDisk(arg0: boolean): void;
        setSettings(arg0: $Map_<string, string>): void;
        setMaxAge(arg0: $Duration_): void;
        setMaxSize(arg0: number): void;
        setDuration(arg0: $Duration_): void;
        setDumpOnExit(arg0: boolean): void;
        scheduleStart(arg0: $Duration_): void;
        isToDisk(): boolean;
        getSettings(): $Map<string, string>;
        setDestination(arg0: $Path_): void;
        getStartTime(): $Instant;
        getStopTime(): $Instant;
        disable(arg0: string): $EventSettings;
        disable(arg0: $Class<$Event>): $EventSettings;
        constructor(arg0: $Map_<string, string>);
        constructor(arg0: $Configuration);
        constructor();
        get id(): number;
        get state(): $RecordingState;
        get size(): number;
        get startTime(): $Instant;
        get stopTime(): $Instant;
    }
    export class $SettingDescriptor {
        getContentType(): string;
        getDescription(): string;
        getName(): string;
        getTypeName(): string;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getDefaultValue(): string;
        getLabel(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        getTypeId(): number;
        get contentType(): string;
        get description(): string;
        get name(): string;
        get typeName(): string;
        get defaultValue(): string;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
        get typeId(): number;
    }
    export class $EventSettings {
        "with"(arg0: string, arg1: string): $EventSettings;
        withStackTrace(): $EventSettings;
        withoutStackTrace(): $EventSettings;
        withoutThreshold(): $EventSettings;
        withPeriod(arg0: $Duration_): $EventSettings;
        withThreshold(arg0: $Duration_): $EventSettings;
    }
}
