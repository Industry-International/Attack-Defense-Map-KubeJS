import { $JsonElement, $JsonObject_ } from "@package/com/google/gson";
import { $Function_, $BiFunction_, $Supplier, $Function } from "@package/java/util/function";
import { $Property, $Property$Value_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $StateDefinition } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Comparable } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/data/models/blockstates" {
    export class $MultiPartGenerator$Entry implements $Supplier<$JsonElement> {
    }
    export class $PropertyDispatch {
        getDefinedProperties(): $List<$Property<never>>;
        static properties<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>, T4 extends $Comparable<T4>, T5 extends $Comparable<T5>>(arg0: $Property<T1>, arg1: $Property<T2>, arg2: $Property<T3>, arg3: $Property<T4>, arg4: $Property<T5>): $PropertyDispatch$C5<T1, T2, T3, T4, T5>;
        static properties<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>>(arg0: $Property<T1>, arg1: $Property<T2>): $PropertyDispatch$C2<T1, T2>;
        static properties<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>>(arg0: $Property<T1>, arg1: $Property<T2>, arg2: $Property<T3>): $PropertyDispatch$C3<T1, T2, T3>;
        static properties<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>, T4 extends $Comparable<T4>>(arg0: $Property<T1>, arg1: $Property<T2>, arg2: $Property<T3>, arg3: $Property<T4>): $PropertyDispatch$C4<T1, T2, T3, T4>;
        static property<T1 extends $Comparable<T1>>(arg0: $Property<T1>): $PropertyDispatch$C1<T1>;
        getEntries(): $Map<$Selector, $List<$Variant>>;
        putValue(arg0: $Selector, arg1: $List_<$Variant>): void;
        constructor();
        get definedProperties(): $List<$Property<never>>;
        get entries(): $Map<$Selector, $List<$Variant>>;
    }
    export class $Condition$TerminalCondition implements $Condition {
        term<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T): $Condition$TerminalCondition;
        term<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T, ...arg2: T[]): $Condition$TerminalCondition;
        get(): $JsonElement;
        validate(arg0: $StateDefinition<never, never>): void;
        negatedTerm<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T, ...arg2: T[]): $Condition$TerminalCondition;
        negatedTerm<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T): $Condition$TerminalCondition;
        constructor();
    }
    export class $PropertyDispatch$PentaFunction<P1, P2, P3, P4, P5, R> {
    }
    export interface $PropertyDispatch$PentaFunction<P1, P2, P3, P4, P5, R> {
        apply(arg0: P1, arg1: P2, arg2: P3, arg3: P4, arg4: P5): R;
    }
    /**
     * Values that may be interpreted as {@link $PropertyDispatch$PentaFunction}.
     */
    export type $PropertyDispatch$PentaFunction_<P1, P2, P3, P4, P5, R> = ((arg0: P1, arg1: P2, arg2: P3, arg3: P4, arg4: P5) => R);
    export class $VariantProperties$Rotation extends $Enum<$VariantProperties$Rotation> {
        static values(): $VariantProperties$Rotation[];
        static valueOf(arg0: string): $VariantProperties$Rotation;
        static R180: $VariantProperties$Rotation;
        static R90: $VariantProperties$Rotation;
        value: number;
        static R0: $VariantProperties$Rotation;
        static R270: $VariantProperties$Rotation;
    }
    /**
     * Values that may be interpreted as {@link $VariantProperties$Rotation}.
     */
    export type $VariantProperties$Rotation_ = "r0" | "r90" | "r180" | "r270";
    export class $Variant implements $Supplier<$JsonElement> {
        static merge(arg0: $Variant, arg1: $Variant): $Variant;
        "with"<T>(arg0: $VariantProperty<T>, arg1: T): $Variant;
        static variant(): $Variant;
        static convertList(arg0: $List_<$Variant>): $JsonElement;
        get(): $JsonElement;
        constructor();
    }
    export class $VariantProperties {
        static Y_ROT: $VariantProperty<$VariantProperties$Rotation>;
        static X_ROT: $VariantProperty<$VariantProperties$Rotation>;
        static UV_LOCK: $VariantProperty<boolean>;
        static MODEL: $VariantProperty<$ResourceLocation>;
        static WEIGHT: $VariantProperty<number>;
        constructor();
    }
    export class $Selector {
        static of(...arg0: $Property$Value_<never>[]): $Selector;
        getKey(): string;
        static empty(): $Selector;
        extend(arg0: $Selector): $Selector;
        extend(arg0: $Property$Value_<never>): $Selector;
        get key(): string;
    }
    export class $Condition$CompositeCondition implements $Condition {
        validate(arg0: $StateDefinition<never, never>): void;
        get(): $JsonElement;
        constructor(arg0: $Condition$Operation_, arg1: $List_<$Condition>);
    }
    export class $VariantProperty<T> {
        withValue(arg0: T): $VariantProperty$Value;
        serializer: $Function<T, $JsonElement>;
        key: string;
        constructor(arg0: string, arg1: $Function_<T, $JsonElement>);
    }
    export class $Condition {
        static condition(): $Condition$TerminalCondition;
        static or(...arg0: $Condition[]): $Condition;
        static and(...arg0: $Condition[]): $Condition;
    }
    export interface $Condition extends $Supplier<$JsonElement> {
        validate(arg0: $StateDefinition<never, never>): void;
    }
    export class $PropertyDispatch$QuadFunction<P1, P2, P3, P4, R> {
    }
    export interface $PropertyDispatch$QuadFunction<P1, P2, P3, P4, R> {
        apply(arg0: P1, arg1: P2, arg2: P3, arg3: P4): R;
    }
    /**
     * Values that may be interpreted as {@link $PropertyDispatch$QuadFunction}.
     */
    export type $PropertyDispatch$QuadFunction_<P1, P2, P3, P4, R> = ((arg0: P1, arg1: P2, arg2: P3, arg3: P4) => R);
    export class $PropertyDispatch$TriFunction<P1, P2, P3, R> {
    }
    export interface $PropertyDispatch$TriFunction<P1, P2, P3, R> {
        apply(arg0: P1, arg1: P2, arg2: P3): R;
    }
    /**
     * Values that may be interpreted as {@link $PropertyDispatch$TriFunction}.
     */
    export type $PropertyDispatch$TriFunction_<P1, P2, P3, R> = ((arg0: P1, arg1: P2, arg2: P3) => R);
    export class $BlockStateGenerator {
    }
    export interface $BlockStateGenerator extends $Supplier<$JsonElement> {
        getBlock(): $Block;
        get block(): $Block;
    }
    export class $VariantProperty$Value {
        getKey(): $VariantProperty<T>;
        addToVariant(arg0: $JsonObject_): void;
        this$0: $VariantProperty<any>;
        get key(): $VariantProperty<T>;
    }
    export class $Condition$Operation extends $Enum<$Condition$Operation> {
        static values(): $Condition$Operation[];
        static valueOf(arg0: string): $Condition$Operation;
        static OR: $Condition$Operation;
        static AND: $Condition$Operation;
        id: string;
    }
    /**
     * Values that may be interpreted as {@link $Condition$Operation}.
     */
    export type $Condition$Operation_ = "and" | "or";
    export class $MultiPartGenerator$ConditionalEntry extends $MultiPartGenerator$Entry {
    }
    export class $MultiVariantGenerator implements $BlockStateGenerator {
        "with"(arg0: $PropertyDispatch): $MultiVariantGenerator;
        getBlock(): $Block;
        static multiVariant(arg0: $Block_, ...arg1: $Variant[]): $MultiVariantGenerator;
        static multiVariant(arg0: $Block_, arg1: $Variant): $MultiVariantGenerator;
        static multiVariant(arg0: $Block_): $MultiVariantGenerator;
        get(): $JsonElement;
        get block(): $Block;
    }
    export class $PropertyDispatch$C4<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>, T4 extends $Comparable<T4>> extends $PropertyDispatch {
        generate(arg0: $PropertyDispatch$QuadFunction_<T1, T2, T3, T4, $Variant>): $PropertyDispatch;
        select(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: $Variant): $PropertyDispatch$C4<T1, T2, T3, T4>;
        select(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: $List_<$Variant>): $PropertyDispatch$C4<T1, T2, T3, T4>;
        generateList(arg0: $PropertyDispatch$QuadFunction_<T1, T2, T3, T4, $List<$Variant>>): $PropertyDispatch;
        constructor(arg0: $Property<T1>, arg1: $Property<T2>, arg2: $Property<T3>, arg3: $Property<T4>);
    }
    export class $PropertyDispatch$C3<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>> extends $PropertyDispatch {
        generate(arg0: $PropertyDispatch$TriFunction_<T1, T2, T3, $Variant>): $PropertyDispatch;
        select(arg0: T1, arg1: T2, arg2: T3, arg3: $List_<$Variant>): $PropertyDispatch$C3<T1, T2, T3>;
        select(arg0: T1, arg1: T2, arg2: T3, arg3: $Variant): $PropertyDispatch$C3<T1, T2, T3>;
        generateList(arg0: $PropertyDispatch$TriFunction_<T1, T2, T3, $List<$Variant>>): $PropertyDispatch;
        constructor(arg0: $Property<T1>, arg1: $Property<T2>, arg2: $Property<T3>);
    }
    export class $PropertyDispatch$C2<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>> extends $PropertyDispatch {
        generate(arg0: $BiFunction_<T1, T2, $Variant>): $PropertyDispatch;
        select(arg0: T1, arg1: T2, arg2: $Variant): $PropertyDispatch$C2<T1, T2>;
        select(arg0: T1, arg1: T2, arg2: $List_<$Variant>): $PropertyDispatch$C2<T1, T2>;
        generateList(arg0: $BiFunction_<T1, T2, $List<$Variant>>): $PropertyDispatch;
        constructor(arg0: $Property<T1>, arg1: $Property<T2>);
    }
    export class $PropertyDispatch$C1<T1 extends $Comparable<T1>> extends $PropertyDispatch {
        generate(arg0: $Function_<T1, $Variant>): $PropertyDispatch;
        select(arg0: T1, arg1: $List_<$Variant>): $PropertyDispatch$C1<T1>;
        select(arg0: T1, arg1: $Variant): $PropertyDispatch$C1<T1>;
        generateList(arg0: $Function_<T1, $List<$Variant>>): $PropertyDispatch;
        constructor(arg0: $Property<T1>);
    }
    export class $PropertyDispatch$C5<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>, T4 extends $Comparable<T4>, T5 extends $Comparable<T5>> extends $PropertyDispatch {
        generate(arg0: $PropertyDispatch$PentaFunction_<T1, T2, T3, T4, T5, $Variant>): $PropertyDispatch;
        select(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: $Variant): $PropertyDispatch$C5<T1, T2, T3, T4, T5>;
        select(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: $List_<$Variant>): $PropertyDispatch$C5<T1, T2, T3, T4, T5>;
        generateList(arg0: $PropertyDispatch$PentaFunction_<T1, T2, T3, T4, T5, $List<$Variant>>): $PropertyDispatch;
        constructor(arg0: $Property<T1>, arg1: $Property<T2>, arg2: $Property<T3>, arg3: $Property<T4>, arg4: $Property<T5>);
    }
    export class $MultiPartGenerator implements $BlockStateGenerator {
        get(): $JsonElement;
        "with"(arg0: $Condition, arg1: $List_<$Variant>): $MultiPartGenerator;
        "with"(arg0: $Condition, ...arg1: $Variant[]): $MultiPartGenerator;
        "with"(arg0: $Condition, arg1: $Variant): $MultiPartGenerator;
        "with"(arg0: $Variant): $MultiPartGenerator;
        "with"(arg0: $List_<$Variant>): $MultiPartGenerator;
        getBlock(): $Block;
        static multiPart(arg0: $Block_): $MultiPartGenerator;
        get block(): $Block;
    }
}
