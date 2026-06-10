import { $Reader, $Writer } from "@package/java/io";
import { $Consumer_ } from "@package/java/util/function";
import { $Annotation } from "@package/java/lang/annotation";
import { $BigDecimal, $BigInteger } from "@package/java/math";
import { $Field, $Type } from "@package/java/lang/reflect";
import { $TypeToken } from "@package/com/google/gson/reflect";
import { $Excluder } from "@package/com/google/gson/internal";
import { $Enum, $Class, $Number, $Object, $Iterable, $Appendable } from "@package/java/lang";
import { $Spliterator, $Iterator, $List, $Collection, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $JsonWriter, $JsonReader } from "@package/com/google/gson/stream";
export * as stream from "@package/com/google/gson/stream";
export * as internal from "@package/com/google/gson/internal";
export * as reflect from "@package/com/google/gson/reflect";

declare module "@package/com/google/gson" {
    export class $FieldAttributes {
        getName(): string;
        getDeclaringClass(): $Class<never>;
        getAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getAnnotations(): $Collection<$Annotation>;
        getDeclaredClass(): $Class<never>;
        getDeclaredType(): $Type;
        hasModifier(arg0: number): boolean;
        constructor(arg0: $Field);
        get name(): string;
        get declaringClass(): $Class<never>;
        get annotations(): $Collection<$Annotation>;
        get declaredClass(): $Class<never>;
        get declaredType(): $Type;
    }
    export class $FieldNamingStrategy {
    }
    export interface $FieldNamingStrategy {
        translateName(arg0: $Field): string;
    }
    /**
     * Values that may be interpreted as {@link $FieldNamingStrategy}.
     */
    export type $FieldNamingStrategy_ = ((arg0: $Field) => string);
    export class $GsonBuilder {
        create(): $Gson;
        setLenient(): $GsonBuilder;
        enableComplexMapKeySerialization(): $GsonBuilder;
        addSerializationExclusionStrategy(arg0: $ExclusionStrategy): $GsonBuilder;
        registerTypeHierarchyAdapter(arg0: $Class<never>, arg1: $Object): $GsonBuilder;
        setVersion(arg0: number): $GsonBuilder;
        addDeserializationExclusionStrategy(arg0: $ExclusionStrategy): $GsonBuilder;
        disableInnerClassSerialization(): $GsonBuilder;
        excludeFieldsWithoutExposeAnnotation(): $GsonBuilder;
        serializeSpecialFloatingPointValues(): $GsonBuilder;
        generateNonExecutableJson(): $GsonBuilder;
        setPrettyPrinting(): $GsonBuilder;
        setDateFormat(arg0: string): $GsonBuilder;
        setDateFormat(arg0: number, arg1: number): $GsonBuilder;
        setDateFormat(arg0: number): $GsonBuilder;
        disableJdkUnsafe(): $GsonBuilder;
        serializeNulls(): $GsonBuilder;
        setFieldNamingPolicy(arg0: $FieldNamingPolicy_): $GsonBuilder;
        registerTypeAdapterFactory(arg0: $TypeAdapterFactory_): $GsonBuilder;
        setLongSerializationPolicy(arg0: $LongSerializationPolicy_): $GsonBuilder;
        addReflectionAccessFilter(arg0: $ReflectionAccessFilter_): $GsonBuilder;
        setExclusionStrategies(...arg0: $ExclusionStrategy[]): $GsonBuilder;
        setObjectToNumberStrategy(arg0: $ToNumberStrategy_): $GsonBuilder;
        setNumberToNumberStrategy(arg0: $ToNumberStrategy_): $GsonBuilder;
        setFieldNamingStrategy(arg0: $FieldNamingStrategy_): $GsonBuilder;
        excludeFieldsWithModifiers(...arg0: number[]): $GsonBuilder;
        disableHtmlEscaping(): $GsonBuilder;
        registerTypeAdapter(arg0: $Type, arg1: $Object): $GsonBuilder;
        constructor();
        set version(value: number);
        set fieldNamingPolicy(value: $FieldNamingPolicy_);
        set longSerializationPolicy(value: $LongSerializationPolicy_);
        set exclusionStrategies(value: $ExclusionStrategy[]);
        set objectToNumberStrategy(value: $ToNumberStrategy_);
        set numberToNumberStrategy(value: $ToNumberStrategy_);
        set fieldNamingStrategy(value: $FieldNamingStrategy_);
    }
    export class $ToNumberStrategy {
    }
    export interface $ToNumberStrategy {
        readNumber(arg0: $JsonReader): $Number;
    }
    /**
     * Values that may be interpreted as {@link $ToNumberStrategy}.
     */
    export type $ToNumberStrategy_ = ((arg0: $JsonReader) => $Number);
    export class $JsonElement {
        getAsInt(): number;
        getAsDouble(): number;
        getAsLong(): number;
        getAsBoolean(): boolean;
        getAsString(): string;
        getAsJsonPrimitive(): $JsonPrimitive;
        getAsNumber(): $Number;
        getAsBigDecimal(): $BigDecimal;
        isJsonArray(): boolean;
        getAsJsonObject(): $JsonObject;
        /**
         * @deprecated
         */
        getAsCharacter(): string;
        getAsJsonNull(): $JsonNull;
        isJsonObject(): boolean;
        isJsonPrimitive(): boolean;
        getAsBigInteger(): $BigInteger;
        getAsJsonArray(): $JsonArray;
        getAsFloat(): number;
        getAsByte(): number;
        isJsonNull(): boolean;
        deepCopy(): $JsonElement;
        getAsShort(): number;
        /**
         * @deprecated
         */
        constructor();
        get asInt(): number;
        get asDouble(): number;
        get asLong(): number;
        get asBoolean(): boolean;
        get asString(): string;
        get asJsonPrimitive(): $JsonPrimitive;
        get asNumber(): $Number;
        get asBigDecimal(): $BigDecimal;
        get jsonArray(): boolean;
        get asJsonObject(): $JsonObject;
        get asCharacter(): string;
        get asJsonNull(): $JsonNull;
        get jsonObject(): boolean;
        get jsonPrimitive(): boolean;
        get asBigInteger(): $BigInteger;
        get asJsonArray(): $JsonArray;
        get asFloat(): number;
        get asByte(): number;
        get jsonNull(): boolean;
        get asShort(): number;
    }
    /**
     * Values that may be interpreted as {@link $JsonElement}.
     */
    export type $JsonElement_ = $JsonObject | $JsonArray | $JsonPrimitive;
    export class $JsonObject extends $JsonElement {
        remove(arg0: string): $JsonElement;
        size(): number;
        get(arg0: string): $JsonElement;
        isEmpty(): boolean;
        add(arg0: string, arg1: $JsonElement_): void;
        entrySet(): $Set<$Map$Entry<string, $JsonElement>>;
        keySet(): $Set<string>;
        has(arg0: string): boolean;
        getAsJsonPrimitive(arg0: string): $JsonPrimitive;
        getAsJsonObject(arg0: string): $JsonObject;
        getAsJsonArray(arg0: string): $JsonArray;
        asMap(): $Map<string, $JsonElement>;
        addProperty(arg0: string, arg1: string): void;
        addProperty(arg0: string, arg1: string): void;
        addProperty(arg0: string, arg1: $Number): void;
        addProperty(arg0: string, arg1: boolean): void;
        constructor();
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $JsonObject}.
     */
    export type $JsonObject_ = object;
    export class $ReflectionAccessFilter {
        static BLOCK_INACCESSIBLE_JAVA: $ReflectionAccessFilter;
        static BLOCK_ALL_ANDROID: $ReflectionAccessFilter;
        static BLOCK_ALL_PLATFORM: $ReflectionAccessFilter;
        static BLOCK_ALL_JAVA: $ReflectionAccessFilter;
    }
    export interface $ReflectionAccessFilter {
        check(arg0: $Class<never>): $ReflectionAccessFilter$FilterResult;
    }
    /**
     * Values that may be interpreted as {@link $ReflectionAccessFilter}.
     */
    export type $ReflectionAccessFilter_ = ((arg0: $Class<never>) => $ReflectionAccessFilter$FilterResult_);
    export class $JsonNull extends $JsonElement {
        deepCopy(): $JsonNull;
        static INSTANCE: $JsonNull;
        /**
         * @deprecated
         */
        constructor();
    }
    export class $JsonPrimitive extends $JsonElement {
        isBoolean(): boolean;
        isString(): boolean;
        deepCopy(): $JsonPrimitive;
        isNumber(): boolean;
        constructor(arg0: string);
        constructor(arg0: string);
        constructor(arg0: $Number);
        constructor(arg0: boolean);
        get boolean(): boolean;
        get string(): boolean;
        get number(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $JsonPrimitive}.
     */
    export type $JsonPrimitive_ = number | string | boolean | null;
    export class $LongSerializationPolicy extends $Enum<$LongSerializationPolicy> {
        static values(): $LongSerializationPolicy[];
        static valueOf(arg0: string): $LongSerializationPolicy;
        serialize(arg0: number): $JsonElement;
        static STRING: $LongSerializationPolicy;
        static DEFAULT: $LongSerializationPolicy;
    }
    /**
     * Values that may be interpreted as {@link $LongSerializationPolicy}.
     */
    export type $LongSerializationPolicy_ = "default" | "string";
    export class $JsonArray extends $JsonElement implements $Iterable<$JsonElement> {
        remove(arg0: $JsonElement_): boolean;
        remove(arg0: number): $JsonElement;
        size(): number;
        get(arg0: number): $JsonElement;
        isEmpty(): boolean;
        add(arg0: string): void;
        add(arg0: boolean): void;
        add(arg0: string): void;
        add(arg0: $JsonElement_): void;
        add(arg0: $Number): void;
        iterator(): $Iterator<$JsonElement>;
        contains(arg0: $JsonElement_): boolean;
        addAll(arg0: $JsonArray_): void;
        set(arg0: number, arg1: $JsonElement_): $JsonElement;
        asList(): $List<$JsonElement>;
        deepCopy(): $JsonArray;
        spliterator(): $Spliterator<$JsonElement>;
        forEach(arg0: $Consumer_<$JsonElement>): void;
        constructor();
        constructor(arg0: number);
        [Symbol.iterator](): Iterator<$JsonElement>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $JsonArray}.
     */
    export type $JsonArray_ = any[];
    export class $ExclusionStrategy {
    }
    export interface $ExclusionStrategy {
        shouldSkipField(arg0: $FieldAttributes): boolean;
        shouldSkipClass(arg0: $Class<never>): boolean;
    }
    export class $TypeAdapterFactory {
    }
    export interface $TypeAdapterFactory {
        create<T>(arg0: $Gson, arg1: $TypeToken<T>): $TypeAdapter<T>;
    }
    /**
     * Values that may be interpreted as {@link $TypeAdapterFactory}.
     */
    export type $TypeAdapterFactory_ = ((arg0: $Gson, arg1: $TypeToken<any>) => $TypeAdapter<any>);
    export class $Gson {
        getAdapter<T>(arg0: $TypeToken<T>): $TypeAdapter<T>;
        getAdapter<T>(arg0: $Class<T>): $TypeAdapter<T>;
        htmlSafe(): boolean;
        toJsonTree(arg0: $Object, arg1: $Type): $JsonElement;
        toJsonTree(arg0: $Object): $JsonElement;
        toJson(arg0: $Object): string;
        toJson(arg0: $JsonElement_, arg1: $JsonWriter): void;
        toJson(arg0: $Object, arg1: $Appendable): void;
        toJson(arg0: $JsonElement_): string;
        toJson(arg0: $Object, arg1: $Type, arg2: $Appendable): void;
        toJson(arg0: $JsonElement_, arg1: $Appendable): void;
        toJson(arg0: $Object, arg1: $Type): string;
        toJson(arg0: $Object, arg1: $Type, arg2: $JsonWriter): void;
        /**
         * @deprecated
         */
        excluder(): $Excluder;
        fieldNamingStrategy(): $FieldNamingStrategy;
        newJsonReader(arg0: $Reader): $JsonReader;
        newJsonWriter(arg0: $Writer): $JsonWriter;
        serializeNulls(): boolean;
        getDelegateAdapter<T>(arg0: $TypeAdapterFactory_, arg1: $TypeToken<T>): $TypeAdapter<T>;
        fromJson<T>(arg0: $JsonReader, arg1: $TypeToken<T>): T;
        fromJson<T>(arg0: $JsonElement_, arg1: $Class<T>): T;
        fromJson<T>(arg0: $JsonReader, arg1: $Type): T;
        fromJson<T>(arg0: $JsonElement_, arg1: $Type): T;
        fromJson<T>(arg0: $JsonElement_, arg1: $TypeToken<T>): T;
        fromJson<T>(arg0: string, arg1: $Type): T;
        fromJson<T>(arg0: string, arg1: $TypeToken<T>): T;
        fromJson<T>(arg0: string, arg1: $Class<T>): T;
        fromJson<T>(arg0: $Reader, arg1: $Type): T;
        fromJson<T>(arg0: $Reader, arg1: $TypeToken<T>): T;
        fromJson<T>(arg0: $Reader, arg1: $Class<T>): T;
        newBuilder(): $GsonBuilder;
        constructor();
    }
    export class $TypeAdapter<T> {
        write(arg0: $JsonWriter, arg1: T): void;
        read(arg0: $JsonReader): T;
        toJsonTree(arg0: T): $JsonElement;
        toJson(arg0: $Writer, arg1: T): void;
        toJson(arg0: T): string;
        nullSafe(): $TypeAdapter<T>;
        fromJsonTree(arg0: $JsonElement_): T;
        fromJson(arg0: string): T;
        fromJson(arg0: $Reader): T;
        constructor();
    }
    export class $JsonSerializationContext {
    }
    export interface $JsonSerializationContext {
        serialize(arg0: $Object): $JsonElement;
        serialize(arg0: $Object, arg1: $Type): $JsonElement;
    }
    export class $JsonDeserializer<T> {
    }
    export interface $JsonDeserializer<T> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): T;
    }
    /**
     * Values that may be interpreted as {@link $JsonDeserializer}.
     */
    export type $JsonDeserializer_<T> = ((arg0: $JsonElement, arg1: $Type, arg2: $JsonDeserializationContext) => T);
    export class $JsonSerializer<T> {
    }
    export interface $JsonSerializer<T> {
        serialize(arg0: T, arg1: $Type, arg2: $JsonSerializationContext): $JsonElement;
    }
    /**
     * Values that may be interpreted as {@link $JsonSerializer}.
     */
    export type $JsonSerializer_<T> = ((arg0: T, arg1: $Type, arg2: $JsonSerializationContext) => $JsonElement_);
    export class $ReflectionAccessFilter$FilterResult extends $Enum<$ReflectionAccessFilter$FilterResult> {
        static values(): $ReflectionAccessFilter$FilterResult[];
        static valueOf(arg0: string): $ReflectionAccessFilter$FilterResult;
        static BLOCK_INACCESSIBLE: $ReflectionAccessFilter$FilterResult;
        static BLOCK_ALL: $ReflectionAccessFilter$FilterResult;
        static INDECISIVE: $ReflectionAccessFilter$FilterResult;
        static ALLOW: $ReflectionAccessFilter$FilterResult;
    }
    /**
     * Values that may be interpreted as {@link $ReflectionAccessFilter$FilterResult}.
     */
    export type $ReflectionAccessFilter$FilterResult_ = "allow" | "indecisive" | "block_inaccessible" | "block_all";
    export class $FieldNamingPolicy extends $Enum<$FieldNamingPolicy> implements $FieldNamingStrategy {
        static values(): $FieldNamingPolicy[];
        static valueOf(arg0: string): $FieldNamingPolicy;
        static IDENTITY: $FieldNamingPolicy;
        static UPPER_CAMEL_CASE_WITH_SPACES: $FieldNamingPolicy;
        static UPPER_CAMEL_CASE: $FieldNamingPolicy;
        static LOWER_CASE_WITH_DOTS: $FieldNamingPolicy;
        static LOWER_CASE_WITH_UNDERSCORES: $FieldNamingPolicy;
        static UPPER_CASE_WITH_UNDERSCORES: $FieldNamingPolicy;
        static LOWER_CASE_WITH_DASHES: $FieldNamingPolicy;
    }
    /**
     * Values that may be interpreted as {@link $FieldNamingPolicy}.
     */
    export type $FieldNamingPolicy_ = "identity" | "upper_camel_case" | "upper_camel_case_with_spaces" | "upper_case_with_underscores" | "lower_case_with_underscores" | "lower_case_with_dashes" | "lower_case_with_dots";
    export class $JsonDeserializationContext {
    }
    export interface $JsonDeserializationContext {
        deserialize<T>(arg0: $JsonElement_, arg1: $Type): T;
    }
    /**
     * Values that may be interpreted as {@link $JsonDeserializationContext}.
     */
    export type $JsonDeserializationContext_ = ((arg0: $JsonElement, arg1: $Type) => any);
}
