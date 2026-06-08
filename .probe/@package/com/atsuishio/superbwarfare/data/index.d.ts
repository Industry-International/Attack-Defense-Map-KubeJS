import { $Function1_, $Function1 } from "@package/kotlin/jvm/functions";
import { $JsonObject_, $JsonObject } from "@package/com/google/gson";
import { $Serializable } from "@package/java/io";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $Consumer_, $UnaryOperator_, $IntFunction_, $Predicate_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $JsonElement } from "@package/kotlinx/serialization/json";
import { $Object } from "@package/java/lang";
import { $Spliterator, $Comparator, $Iterator, $List, $SequencedCollection, $ListIterator, $Collection_, $List_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $KMutableProperty1 } from "@package/kotlin/reflect";
export * as gun from "@package/com/atsuishio/superbwarfare/data/gun";
export * as vehicle from "@package/com/atsuishio/superbwarfare/data/vehicle";

declare module "@package/com/atsuishio/superbwarfare/data" {
    export class $Prop$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $StringToObject<T extends $DeserializeFromString> {
        static Companion: $StringToObject$Companion;
        value: T;
        constructor(arg0: T);
    }
    export class $Prop<DATA extends $DefaultDataSupplier<DEFAULT_DATA>, DEFAULT_DATA, FIELD, RESULT, SELF extends $Prop<DATA, DEFAULT_DATA, FIELD, RESULT, SELF>> {
        getDefault(arg0: DEFAULT_DATA): RESULT;
        deserialize(arg0: $JsonElement): RESULT;
        getTransform(): $Function1<FIELD, RESULT>;
        getProp(): $KMutableProperty1<DEFAULT_DATA, FIELD>;
        getSerializer(): $KSerializer<FIELD>;
        getSerializationName(): string;
        static Companion: $Prop$Companion;
        static props: $List<$Prop<never, never, never, never, never>>;
        get transform(): $Function1<FIELD, RESULT>;
        get prop(): $KMutableProperty1<DEFAULT_DATA, FIELD>;
        get serializer(): $KSerializer<FIELD>;
        get serializationName(): string;
    }
    export class $ModColor {
        get(): number;
        setColor(arg0: number): void;
        getColor(): number;
        static Companion: $ModColor$Companion;
        constructor(arg0: number);
        constructor();
    }
    export class $ObjectToList<T> implements $List<T>, $KMappedMarker {
        remove(arg0: number): T;
        remove(arg0: $Object): boolean;
        size(): number;
        get(arg0: number): T;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Object): number;
        isEmpty(): boolean;
        replaceAll(arg0: $UnaryOperator_<T>): void;
        add(arg0: T): boolean;
        add(arg0: number, arg1: T): void;
        subList(arg0: number, arg1: number): $List<T>;
        toArray<T>(arg0: T[]): T[];
        toArray(): $Object[];
        iterator(): $Iterator<T>;
        contains(arg0: $Object): boolean;
        addAll(arg0: number, arg1: $Collection_<T>): boolean;
        addAll(arg0: $Collection_<T>): boolean;
        set(arg0: number, arg1: T): T;
        sort(arg0: $Comparator<T>): void;
        copy(arg0: $List_<T>): $ObjectToList<T>;
        getSize(): number;
        addFirst(arg0: T): void;
        addLast(arg0: T): void;
        removeFirst(): T;
        removeLast(): T;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        listIterator(): $ListIterator<T>;
        listIterator(arg0: number): $ListIterator<T>;
        containsAll(arg0: $Collection_<never>): boolean;
        static copy$default(arg0: $ObjectToList<any>, arg1: $List_<any>, arg2: number, arg3: $Object): $ObjectToList<any>;
        component1(): $List<T>;
        spliterator(): $Spliterator<T>;
        getFirst(): T;
        getLast(): T;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<T>;
        removeIf(arg0: $Predicate_<T>): boolean;
        parallelStream(): $Stream<T>;
        forEach(arg0: $Consumer_<T>): void;
        reversed(): $SequencedCollection<T>;
        static Companion: $ObjectToList$Companion;
        list: $List<T>;
        constructor(arg0: $List_<T>);
        constructor(...arg0: T[]);
        [Symbol.iterator](): Iterator<T>
        get empty(): boolean;
        get first(): T;
        get last(): T;
    }
    export class $ModColor$Companion {
        serializer(): $KSerializer<$ModColor>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $StringToObject$Companion {
        serializer<T>(arg0: $KSerializer<T>): $KSerializer<$StringToObject<T>>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $DefaultDataSupplier<T> {
    }
    export interface $DefaultDataSupplier<T> {
        getDefault(): T;
        get default(): T;
    }
    /**
     * Values that may be interpreted as {@link $DefaultDataSupplier}.
     */
    export type $DefaultDataSupplier_<T> = (() => T);
    export class $PropertyModifier<DATA extends $DefaultDataSupplier<DEFAULT_DATA>, DEFAULT_DATA> {
    }
    export interface $PropertyModifier<DATA extends $DefaultDataSupplier<DEFAULT_DATA>, DEFAULT_DATA> {
        modifyProperty(arg0: $PMC<DATA, DEFAULT_DATA>): void;
    }
    /**
     * Values that may be interpreted as {@link $PropertyModifier}.
     */
    export type $PropertyModifier_<DATA, DEFAULT_DATA> = ((arg0: $PMC<DATA, DEFAULT_DATA>) => void);
    export class $IDBasedData<T extends $IDBasedData<T>> {
    }
    export interface $IDBasedData<T extends $IDBasedData<T>> extends $Serializable {
        limit(): void;
        getId(): string;
        copy(): T;
        toJson(): $JsonObject;
        setId(arg0: string): void;
        fromJson(arg0: $JsonObject_): T;
    }
    export class $PMC<DATA extends $DefaultDataSupplier<DEFAULT_DATA>, DEFAULT_DATA> {
        reset(): void;
        get<T extends $Prop<DATA, DEFAULT_DATA, never, RESULT, never>, RESULT>(arg0: T): RESULT;
        set<T extends $Prop<DATA, DEFAULT_DATA, never, RESULT, never>, RESULT>(arg0: T, arg1: RESULT): void;
        getData(): DATA;
        modify<T extends $Prop<DATA, DEFAULT_DATA, never, RESULT, never>, RESULT>(arg0: T, arg1: $Function1_<RESULT, RESULT>): void;
        constructor(arg0: DATA);
        get data(): DATA;
    }
    export class $StringOrVec3$Companion {
        serializer(): $KSerializer<$StringOrVec3>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $StringOrVec3 {
        getString(): string;
        isString(): boolean;
        isVec3(): boolean;
        getVec3(): $Vec3;
        static Companion: $StringOrVec3$Companion;
        constructor(arg0: $Vec3_);
        constructor(arg0: string);
        constructor();
        constructor(arg0: $Vec3_, arg1: number, arg2: $DefaultConstructorMarker);
    }
    export class $ObjectToList$Companion {
        serializer<T>(arg0: $KSerializer<T>): $KSerializer<$ObjectToList<T>>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $DeserializeFromString {
    }
    export interface $DeserializeFromString {
        deserializeFromString(arg0: string): void;
    }
    /**
     * Values that may be interpreted as {@link $DeserializeFromString}.
     */
    export type $DeserializeFromString_ = ((arg0: string) => void);
}
