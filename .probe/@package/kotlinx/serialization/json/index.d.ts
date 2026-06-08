import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Function_, $BiFunction_, $BiConsumer_ } from "@package/java/util/function";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $Map_, $Map, $Map$Entry, $Collection, $Set } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/kotlinx/serialization/json" {
    export class $JsonElement {
        static Companion: $JsonElement$Companion;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $JsonObject extends $JsonElement implements $Map<string, $JsonElement>, $KMappedMarker {
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        get(arg0: string): $JsonElement;
        put(arg0: string, arg1: $JsonElement): $JsonElement;
        values(): $Collection<$JsonElement>;
        clear(): void;
        isEmpty(): boolean;
        replace(arg0: string, arg1: $JsonElement, arg2: $JsonElement): boolean;
        replace(arg0: string, arg1: $JsonElement): $JsonElement;
        replaceAll(arg0: $BiFunction_<string, $JsonElement, $JsonElement>): void;
        merge(arg0: string, arg1: $JsonElement, arg2: $BiFunction_<$JsonElement, $JsonElement, $JsonElement>): $JsonElement;
        entrySet(): $Set<$Map$Entry<string, $JsonElement>>;
        putAll(arg0: $Map_<string, $JsonElement>): void;
        putIfAbsent(arg0: string, arg1: $JsonElement): $JsonElement;
        compute(arg0: string, arg1: $BiFunction_<string, $JsonElement, $JsonElement>): $JsonElement;
        containsKey(arg0: string): boolean;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: string, arg1: $Function_<string, $JsonElement>): $JsonElement;
        keySet(): $Set<string>;
        containsValue(arg0: $Object): boolean;
        containsValue(arg0: $JsonElement): boolean;
        computeIfPresent(arg0: string, arg1: $BiFunction_<string, $JsonElement, $JsonElement>): $JsonElement;
        getSize(): number;
        getEntries(): $Set<$Map$Entry<string, $JsonElement>>;
        getKeys(): $Set<string>;
        getValues(): $Collection<$JsonElement>;
        forEach(arg0: $BiConsumer_<string, $JsonElement>): void;
        getOrDefault(arg0: $Object, arg1: $JsonElement): $JsonElement;
        remove(arg0: $Object): $JsonElement;
        static Companion: $JsonObject$Companion;
        constructor(arg0: $Map_<string, $JsonElement>);
        get empty(): boolean;
        get entries(): $Set<$Map$Entry<string, $JsonElement>>;
        get keys(): $Set<string>;
    }
    export class $JsonObject$Companion {
        serializer(): $KSerializer<$JsonObject>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $JsonElement$Companion {
        serializer(): $KSerializer<$JsonElement>;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
