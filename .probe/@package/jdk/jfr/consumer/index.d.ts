import { $Duration, $Instant } from "@package/java/time";
import { $ValueDescriptor, $EventType } from "@package/jdk/jfr";
import { $List } from "@package/java/util";

declare module "@package/jdk/jfr/consumer" {
    export class $RecordedClassLoader extends $RecordedObject {
        getName(): string;
        getId(): number;
        getType(): $RecordedClass;
        get name(): string;
        get id(): number;
        get type(): $RecordedClass;
    }
    export class $RecordedMethod extends $RecordedObject {
        getName(): string;
        getModifiers(): number;
        isHidden(): boolean;
        getDescriptor(): string;
        getType(): $RecordedClass;
        get name(): string;
        get modifiers(): number;
        get hidden(): boolean;
        get descriptor(): string;
        get type(): $RecordedClass;
    }
    export class $RecordedFrame extends $RecordedObject {
        getMethod(): $RecordedMethod;
        getType(): string;
        getLineNumber(): number;
        isJavaFrame(): boolean;
        getBytecodeIndex(): number;
        get method(): $RecordedMethod;
        get type(): string;
        get lineNumber(): number;
        get javaFrame(): boolean;
        get bytecodeIndex(): number;
    }
    export class $RecordedClass extends $RecordedObject {
        getName(): string;
        getModifiers(): number;
        getClassLoader(): $RecordedClassLoader;
        getId(): number;
        get name(): string;
        get modifiers(): number;
        get classLoader(): $RecordedClassLoader;
        get id(): number;
    }
    export class $RecordedStackTrace extends $RecordedObject {
        getFrames(): $List<$RecordedFrame>;
        isTruncated(): boolean;
        get frames(): $List<$RecordedFrame>;
        get truncated(): boolean;
    }
    export class $RecordedObject {
        getClass(arg0: string): $RecordedClass;
        getBoolean(arg0: string): boolean;
        getByte(arg0: string): number;
        getShort(arg0: string): number;
        getChar(arg0: string): string;
        getInt(arg0: string): number;
        getLong(arg0: string): number;
        getFloat(arg0: string): number;
        getDouble(arg0: string): number;
        getValue<T>(arg0: string): T;
        getFields(): $List<$ValueDescriptor>;
        getString(arg0: string): string;
        getDuration(arg0: string): $Duration;
        getInstant(arg0: string): $Instant;
        getThread(arg0: string): $RecordedThread;
        hasField(arg0: string): boolean;
        get fields(): $List<$ValueDescriptor>;
    }
    export class $RecordedThreadGroup extends $RecordedObject {
        getName(): string;
        getParent(): $RecordedThreadGroup;
        get name(): string;
        get parent(): $RecordedThreadGroup;
    }
    export class $RecordedThread extends $RecordedObject {
        isVirtual(): boolean;
        getThreadGroup(): $RecordedThreadGroup;
        getId(): number;
        getJavaName(): string;
        getOSName(): string;
        getOSThreadId(): number;
        getJavaThreadId(): number;
        get virtual(): boolean;
        get threadGroup(): $RecordedThreadGroup;
        get id(): number;
        get javaName(): string;
        get OSName(): string;
        get OSThreadId(): number;
        get javaThreadId(): number;
    }
    export class $RecordedEvent extends $RecordedObject {
        getStackTrace(): $RecordedStackTrace;
        getDuration(): $Duration;
        getEndTime(): $Instant;
        getStartTime(): $Instant;
        getThread(): $RecordedThread;
        getEventType(): $EventType;
        get stackTrace(): $RecordedStackTrace;
        get duration(): $Duration;
        get endTime(): $Instant;
        get startTime(): $Instant;
        get thread(): $RecordedThread;
        get eventType(): $EventType;
    }
}
