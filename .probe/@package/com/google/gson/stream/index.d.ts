import { $Writer, $Reader, $Flushable, $Closeable } from "@package/java/io";
import { $Number, $Enum } from "@package/java/lang";

declare module "@package/com/google/gson/stream" {
    export class $JsonToken extends $Enum<$JsonToken> {
        static values(): $JsonToken[];
        static valueOf(arg0: string): $JsonToken;
        static NUMBER: $JsonToken;
        static NULL: $JsonToken;
        static END_DOCUMENT: $JsonToken;
        static BEGIN_OBJECT: $JsonToken;
        static END_ARRAY: $JsonToken;
        static STRING: $JsonToken;
        static END_OBJECT: $JsonToken;
        static BEGIN_ARRAY: $JsonToken;
        static BOOLEAN: $JsonToken;
        static NAME: $JsonToken;
    }
    /**
     * Values that may be interpreted as {@link $JsonToken}.
     */
    export type $JsonToken_ = "begin_array" | "end_array" | "begin_object" | "end_object" | "name" | "string" | "number" | "boolean" | "null" | "end_document";
    export class $JsonWriter implements $Closeable, $Flushable {
        name(arg0: string): $JsonWriter;
        value(arg0: boolean): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: boolean): $JsonWriter;
        value(arg0: string): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: $Number): $JsonWriter;
        flush(): void;
        close(): void;
        setLenient(arg0: boolean): void;
        isLenient(): boolean;
        setHtmlSafe(arg0: boolean): void;
        getSerializeNulls(): boolean;
        beginObject(): $JsonWriter;
        setSerializeNulls(arg0: boolean): void;
        nullValue(): $JsonWriter;
        setIndent(arg0: string): void;
        isHtmlSafe(): boolean;
        jsonValue(arg0: string): $JsonWriter;
        endArray(): $JsonWriter;
        beginArray(): $JsonWriter;
        endObject(): $JsonWriter;
        constructor(arg0: $Writer);
        set indent(value: string);
    }
    export class $JsonReader implements $Closeable {
        hasNext(): boolean;
        close(): void;
        getPath(): string;
        peek(): $JsonToken;
        nextDouble(): number;
        nextInt(): number;
        setLenient(arg0: boolean): void;
        isLenient(): boolean;
        nextLong(): number;
        nextBoolean(): boolean;
        beginObject(): void;
        getPreviousPath(): string;
        nextNull(): void;
        nextName(): string;
        endArray(): void;
        beginArray(): void;
        nextString(): string;
        endObject(): void;
        skipValue(): void;
        constructor(arg0: $Reader);
        get path(): string;
        get previousPath(): string;
    }
}
