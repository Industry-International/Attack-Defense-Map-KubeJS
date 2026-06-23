import { $Int2ByteFunction_, $IntSpliterator, $Int2ShortFunction, $IntIterator, $Int2ObjectFunction_, $Int2CharFunction, $Int2DoubleFunction_, $Int2ReferenceFunction_, $Int2IntFunction_, $Int2LongFunction_, $Int2CharFunction_, $Int2FloatFunction_, $Int2LongFunction, $Int2IntFunction, $Int2DoubleFunction, $Int2FloatFunction, $Int2ByteFunction, $Int2ObjectFunction, $Int2ReferenceFunction, $Int2BooleanFunction, $Int2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Long2ReferenceFunction_, $Long2LongFunction, $Long2FloatFunction, $Long2ShortFunction, $Long2BooleanFunction, $Long2ObjectFunction, $Long2CharFunction_, $Long2ReferenceFunction, $Long2FloatFunction_, $Long2ByteFunction_, $Long2CharFunction, $Long2ObjectFunction_, $Long2ShortFunction_, $Long2IntFunction, $Long2LongFunction_, $Long2ByteFunction, $Long2IntFunction_, $Long2DoubleFunction, $Long2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Byte2ReferenceFunction, $Byte2LongFunction_, $Byte2DoubleFunction, $Byte2ShortFunction, $Byte2LongFunction, $Byte2ShortFunction_, $Byte2BooleanFunction, $Byte2ByteFunction, $Byte2IntFunction_, $Byte2ObjectFunction_, $Byte2FloatFunction, $Byte2DoubleFunction_, $Byte2CharFunction, $Byte2ObjectFunction, $Byte2ByteFunction_, $Byte2CharFunction_, $Byte2ReferenceFunction_, $Byte2IntFunction, $Byte2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/bytes";
import { $Function } from "@package/it/unimi/dsi/fastutil";
import { $PrimitiveIterator, $Map, $Map$Entry, $ListIterator, $Spliterator, $List, $Collection, $Comparator, $Set, $Iterator, $Spliterator$OfPrimitive } from "@package/java/util";
import { $Float2LongFunction_, $Float2FloatFunction_, $Float2ShortFunction, $Float2BooleanFunction, $Float2ObjectFunction_, $Float2IntFunction, $Float2ObjectFunction, $Float2ShortFunction_, $Float2CharFunction, $Float2DoubleFunction, $Float2ReferenceFunction_, $Float2FloatFunction, $Float2IntFunction_, $Float2ReferenceFunction, $Float2CharFunction_, $Float2ByteFunction_, $Float2LongFunction, $Float2DoubleFunction_, $Float2ByteFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $IntPredicate, $IntFunction_, $IntToDoubleFunction, $Function as $Function$1, $UnaryOperator, $BiConsumer_, $IntConsumer_, $IntToLongFunction, $IntUnaryOperator, $UnaryOperator_, $IntFunction, $Consumer_, $Predicate_, $Predicate, $Consumer, $IntConsumer, $IntPredicate_, $Function_, $IntUnaryOperator_, $BiFunction_ } from "@package/java/util/function";
import { $Object2LongFunction_, $Reference2ShortFunction, $Reference2FloatFunction_, $Object2ShortFunction, $Object2ObjectFunction_, $Reference2IntFunction_, $Object2ShortFunction_, $ObjectCollection, $Object2ByteFunction_, $Reference2ByteFunction_, $Object2BooleanFunction, $Object2ReferenceFunction_, $Reference2ReferenceFunction, $Reference2ObjectFunction_, $Object2CharFunction_, $Object2FloatFunction, $Reference2CharFunction, $Reference2FloatFunction, $Object2CharFunction, $Reference2DoubleFunction_, $Object2DoubleFunction, $Reference2IntFunction, $Object2IntFunction, $Object2IntFunction_, $Reference2CharFunction_, $Reference2BooleanFunction, $Object2DoubleFunction_, $Object2ReferenceFunction, $Reference2DoubleFunction, $Object2LongFunction, $Reference2LongFunction, $Reference2ShortFunction_, $Reference2ObjectFunction, $Object2FloatFunction_, $Object2ByteFunction, $Reference2ByteFunction, $Reference2ReferenceFunction_, $Reference2LongFunction_, $Object2ObjectFunction, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Stream, $IntStream } from "@package/java/util/stream";
import { $Double2FloatFunction, $Double2IntFunction, $Double2IntFunction_, $Double2ByteFunction_, $Double2ByteFunction, $Double2ReferenceFunction, $Double2ObjectFunction_, $Double2ShortFunction, $Double2FloatFunction_, $Double2LongFunction_, $Double2DoubleFunction_, $Double2LongFunction, $Double2DoubleFunction, $Double2ObjectFunction, $Double2BooleanFunction, $Double2CharFunction_, $Double2CharFunction, $Double2ReferenceFunction_, $Double2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Char2BooleanFunction, $Char2ObjectFunction_, $Char2LongFunction, $Char2ShortFunction_, $Char2FloatFunction, $Char2IntFunction_, $Char2DoubleFunction_, $Char2ObjectFunction, $Char2CharFunction_, $Char2IntFunction, $Char2FloatFunction_, $Char2ByteFunction_, $Char2CharFunction, $Char2ShortFunction, $Char2LongFunction_, $Char2ReferenceFunction_, $Char2DoubleFunction, $Char2ByteFunction, $Char2ReferenceFunction } from "@package/it/unimi/dsi/fastutil/chars";
import { $Boolean2FloatFunction_, $Boolean2ReferenceFunction_, $BooleanCollection, $Boolean2LongFunction_, $Boolean2ShortFunction_, $Boolean2CharFunction_, $Boolean2IntFunction_, $Boolean2ObjectFunction_, $Boolean2ByteFunction_, $Boolean2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Comparable, $Iterable, $Object } from "@package/java/lang";

declare module "@package/it/unimi/dsi/fastutil/shorts" {
    export class $Short2BooleanMap$Entry {
    }
    export interface $Short2BooleanMap$Entry extends $Map$Entry<number, boolean> {
        /**
         * @deprecated
         */
        getValue(): boolean;
        /**
         * @deprecated
         */
        setValue(arg0: boolean): boolean;
        setValue(arg0: boolean): boolean;
        getBooleanValue(): boolean;
        getShortKey(): number;
        getKey(): number;
        get booleanValue(): boolean;
        get shortKey(): number;
        get key(): number;
    }
    export class $Short2DoubleFunction {
    }
    export interface $Short2DoubleFunction extends $Function<number, number>, $IntToDoubleFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        composeInt(arg0: $Int2ShortFunction_): $Int2DoubleFunction;
        andThenInt(arg0: $Double2IntFunction_): $Short2IntFunction;
        andThenByte(arg0: $Double2ByteFunction_): $Short2ByteFunction;
        composeFloat(arg0: $Float2ShortFunction_): $Float2DoubleFunction;
        composeDouble(arg0: $Double2ShortFunction_): $Double2DoubleFunction;
        andThenLong(arg0: $Double2LongFunction_): $Short2LongFunction;
        andThenShort(arg0: $Double2ShortFunction_): $Short2ShortFunction;
        andThenDouble(arg0: $Double2DoubleFunction_): $Short2DoubleFunction;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        composeByte(arg0: $Byte2ShortFunction_): $Byte2DoubleFunction;
        composeShort(arg0: $Short2ShortFunction_): $Short2DoubleFunction;
        andThenChar(arg0: $Double2CharFunction_): $Short2CharFunction;
        composeChar(arg0: $Char2ShortFunction_): $Char2DoubleFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Short2FloatFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Short2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2ShortFunction_<T>): $Object2DoubleFunction<T>;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Short2ReferenceFunction<T>;
        composeLong(arg0: $Long2ShortFunction_): $Long2DoubleFunction;
        composeReference<T>(arg0: $Reference2ShortFunction_<T>): $Reference2DoubleFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Short2DoubleFunction}.
     */
    export type $Short2DoubleFunction_ = ((arg0: number) => number);
    export class $ShortPredicate {
    }
    export interface $ShortPredicate extends $Predicate<number>, $IntPredicate {
        /**
         * @deprecated
         */
        test(arg0: number): boolean;
        test(arg0: number): boolean;
        /**
         * @deprecated
         */
        test(arg0: number): boolean;
        or(arg0: $ShortPredicate_): $ShortPredicate;
        or(arg0: $IntPredicate_): $ShortPredicate;
        /**
         * @deprecated
         */
        or(arg0: $Predicate_<number>): $Predicate<number>;
        and(arg0: $ShortPredicate_): $ShortPredicate;
        /**
         * @deprecated
         */
        and(arg0: $Predicate_<number>): $Predicate<number>;
        negate(): $Predicate<number>;
    }
    /**
     * Values that may be interpreted as {@link $ShortPredicate}.
     */
    export type $ShortPredicate_ = ((arg0: number) => boolean);
    export class $Short2ObjectMap$Entry<V> {
    }
    export interface $Short2ObjectMap$Entry<V> extends $Map$Entry<number, V> {
        /**
         * @deprecated
         */
        getKey(): number;
        getShortKey(): number;
        get key(): number;
        get shortKey(): number;
    }
    export class $ShortComparator {
    }
    export interface $ShortComparator extends $Comparator<number> {
        /**
         * @deprecated
         */
        compare(arg0: number, arg1: number): number;
        compare(arg0: number, arg1: number): number;
        reversed(): $ShortComparator;
        thenComparing(arg0: $Comparator<number>): $Comparator<number>;
        thenComparing(arg0: $ShortComparator): $ShortComparator;
    }
    export class $ShortConsumer {
    }
    export interface $ShortConsumer extends $Consumer<number>, $IntConsumer {
        /**
         * @deprecated
         */
        accept(arg0: number): void;
        /**
         * @deprecated
         */
        accept(arg0: number): void;
        accept(arg0: number): void;
        /**
         * @deprecated
         */
        andThen(arg0: $Consumer_<number>): $Consumer<number>;
        andThen(arg0: $ShortConsumer_): $ShortConsumer;
    }
    /**
     * Values that may be interpreted as {@link $ShortConsumer}.
     */
    export type $ShortConsumer_ = ((arg0: number) => void);
    export class $Short2LongFunction {
    }
    export interface $Short2LongFunction extends $Function<number, number>, $IntToLongFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsLong(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        composeInt(arg0: $Int2ShortFunction_): $Int2LongFunction;
        andThenInt(arg0: $Long2IntFunction_): $Short2IntFunction;
        andThenByte(arg0: $Long2ByteFunction_): $Short2ByteFunction;
        composeFloat(arg0: $Float2ShortFunction_): $Float2LongFunction;
        composeDouble(arg0: $Double2ShortFunction_): $Double2LongFunction;
        andThenLong(arg0: $Long2LongFunction_): $Short2LongFunction;
        andThenShort(arg0: $Long2ShortFunction_): $Short2ShortFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Short2DoubleFunction;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        composeByte(arg0: $Byte2ShortFunction_): $Byte2LongFunction;
        composeShort(arg0: $Short2ShortFunction_): $Short2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Short2CharFunction;
        composeChar(arg0: $Char2ShortFunction_): $Char2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Short2FloatFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Short2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2ShortFunction_<T>): $Object2LongFunction<T>;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Short2ReferenceFunction<T>;
        composeLong(arg0: $Long2ShortFunction_): $Long2LongFunction;
        composeReference<T>(arg0: $Reference2ShortFunction_<T>): $Reference2LongFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Short2LongFunction}.
     */
    export type $Short2LongFunction_ = ((arg0: number) => number);
    export class $ShortCollection {
    }
    export interface $ShortCollection extends $Collection<number>, $ShortIterable {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        add(arg0: number): boolean;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        toArray(arg0: number[]): number[];
        iterator(): $ShortIterator;
        /**
         * @deprecated
         */
        stream(): $Stream<number>;
        intStream(): $IntStream;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        contains(arg0: number): boolean;
        addAll(arg0: $ShortCollection): boolean;
        /**
         * @deprecated
         */
        removeIf(arg0: $Predicate_<number>): boolean;
        removeIf(arg0: $ShortPredicate_): boolean;
        removeIf(arg0: $IntPredicate_): boolean;
        removeAll(arg0: $ShortCollection): boolean;
        retainAll(arg0: $ShortCollection): boolean;
        containsAll(arg0: $ShortCollection): boolean;
        /**
         * @deprecated
         */
        parallelStream(): $Stream<number>;
        rem(arg0: number): boolean;
        intIterator(): $IntIterator;
        intParallelStream(): $IntStream;
        intSpliterator(): $IntSpliterator;
        toShortArray(): number[];
        /**
         * @deprecated
         */
        toShortArray(arg0: number[]): number[];
        spliterator(): $Spliterator<number>;
    }
    export class $Short2ReferenceFunction<V> {
    }
    export interface $Short2ReferenceFunction<V> extends $Function<number, V>, $IntFunction<V> {
        remove(arg0: number): V;
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: number): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        put(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        apply(arg0: number): V;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
        composeInt(arg0: $Int2ShortFunction_): $Int2ReferenceFunction<V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Short2IntFunction;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Short2ByteFunction;
        composeFloat(arg0: $Float2ShortFunction_): $Float2ReferenceFunction<V>;
        composeDouble(arg0: $Double2ShortFunction_): $Double2ReferenceFunction<V>;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Short2LongFunction;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Short2ShortFunction;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Short2DoubleFunction;
        defaultReturnValue(): V;
        defaultReturnValue(arg0: V): void;
        composeByte(arg0: $Byte2ShortFunction_): $Byte2ReferenceFunction<V>;
        composeShort(arg0: $Short2ShortFunction_): $Short2ReferenceFunction<V>;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Short2CharFunction;
        composeChar(arg0: $Char2ShortFunction_): $Char2ReferenceFunction<V>;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Short2FloatFunction;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Short2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2ShortFunction_<T>): $Object2ReferenceFunction<T, V>;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Short2ReferenceFunction<T>;
        composeLong(arg0: $Long2ShortFunction_): $Long2ReferenceFunction<V>;
        composeReference<T>(arg0: $Reference2ShortFunction_<T>): $Reference2ReferenceFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Short2ReferenceFunction}.
     */
    export type $Short2ReferenceFunction_<V> = ((arg0: number) => V);
    export class $Short2CharFunction {
    }
    export interface $Short2CharFunction extends $Function<number, string>, $IntUnaryOperator {
        remove(arg0: number): string;
        /**
         * @deprecated
         */
        get(arg0: $Object): string;
        get(arg0: number): string;
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: string): string;
        getOrDefault(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, string>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<string, T>): $Function$1<number, T>;
        composeInt(arg0: $Int2ShortFunction_): $Int2CharFunction;
        andThenInt(arg0: $Char2IntFunction_): $Short2IntFunction;
        andThenByte(arg0: $Char2ByteFunction_): $Short2ByteFunction;
        composeFloat(arg0: $Float2ShortFunction_): $Float2CharFunction;
        composeDouble(arg0: $Double2ShortFunction_): $Double2CharFunction;
        andThenLong(arg0: $Char2LongFunction_): $Short2LongFunction;
        andThenShort(arg0: $Char2ShortFunction_): $Short2ShortFunction;
        andThenDouble(arg0: $Char2DoubleFunction_): $Short2DoubleFunction;
        defaultReturnValue(): string;
        defaultReturnValue(arg0: string): void;
        composeByte(arg0: $Byte2ShortFunction_): $Byte2CharFunction;
        composeShort(arg0: $Short2ShortFunction_): $Short2CharFunction;
        andThenChar(arg0: $Char2CharFunction_): $Short2CharFunction;
        composeChar(arg0: $Char2ShortFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Short2FloatFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Short2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2ShortFunction_<T>): $Object2CharFunction<T>;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Short2ReferenceFunction<T>;
        composeLong(arg0: $Long2ShortFunction_): $Long2CharFunction;
        composeReference<T>(arg0: $Reference2ShortFunction_<T>): $Reference2CharFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Short2CharFunction}.
     */
    export type $Short2CharFunction_ = ((arg0: number) => string);
    export class $ShortIterable {
        [Symbol.iterator](): Iterator<number>
    }
    export interface $ShortIterable extends $Iterable<number> {
        forEach(arg0: $ShortConsumer_): void;
        /**
         * @deprecated
         */
        forEach(arg0: $Consumer_<number>): void;
        forEach(arg0: $IntConsumer_): void;
        intIterator(): $IntIterator;
        intSpliterator(): $IntSpliterator;
        iterator(): $Iterator<number>;
        spliterator(): $Spliterator<number>;
        [Symbol.iterator](): Iterator<number>
    }
    /**
     * Values that may be interpreted as {@link $ShortIterable}.
     */
    export type $ShortIterable_ = (() => $Iterator<number>);
    export class $Short2ByteFunction {
    }
    export interface $Short2ByteFunction extends $Function<number, number>, $IntUnaryOperator {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        composeInt(arg0: $Int2ShortFunction_): $Int2ByteFunction;
        andThenInt(arg0: $Byte2IntFunction_): $Short2IntFunction;
        andThenByte(arg0: $Byte2ByteFunction_): $Short2ByteFunction;
        composeFloat(arg0: $Float2ShortFunction_): $Float2ByteFunction;
        composeDouble(arg0: $Double2ShortFunction_): $Double2ByteFunction;
        andThenLong(arg0: $Byte2LongFunction_): $Short2LongFunction;
        andThenShort(arg0: $Byte2ShortFunction_): $Short2ShortFunction;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Short2DoubleFunction;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        composeByte(arg0: $Byte2ShortFunction_): $Byte2ByteFunction;
        composeShort(arg0: $Short2ShortFunction_): $Short2ByteFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Short2CharFunction;
        composeChar(arg0: $Char2ShortFunction_): $Char2ByteFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Short2FloatFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Short2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2ShortFunction_<T>): $Object2ByteFunction<T>;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Short2ReferenceFunction<T>;
        composeLong(arg0: $Long2ShortFunction_): $Long2ByteFunction;
        composeReference<T>(arg0: $Reference2ShortFunction_<T>): $Reference2ByteFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Short2ByteFunction}.
     */
    export type $Short2ByteFunction_ = ((arg0: number) => number);
    export class $ShortSpliterator {
    }
    export interface $ShortSpliterator extends $Spliterator$OfPrimitive<number, $ShortConsumer, $ShortSpliterator> {
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        skip(arg0: number): number;
        /**
         * @deprecated
         */
        tryAdvance(arg0: $Consumer_<number>): boolean;
        trySplit(): $Spliterator<number>;
        getComparator(): $Comparator<number>;
        get comparator(): $Comparator<number>;
    }
    export class $Short2ObjectFunction<V> {
    }
    export interface $Short2ObjectFunction<V> extends $Function<number, V>, $IntFunction<V> {
        remove(arg0: number): V;
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: number): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        put(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        apply(arg0: number): V;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
        composeInt(arg0: $Int2ShortFunction_): $Int2ObjectFunction<V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Short2IntFunction;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Short2ByteFunction;
        composeFloat(arg0: $Float2ShortFunction_): $Float2ObjectFunction<V>;
        composeDouble(arg0: $Double2ShortFunction_): $Double2ObjectFunction<V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Short2LongFunction;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Short2ShortFunction;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Short2DoubleFunction;
        defaultReturnValue(): V;
        defaultReturnValue(arg0: V): void;
        composeByte(arg0: $Byte2ShortFunction_): $Byte2ObjectFunction<V>;
        composeShort(arg0: $Short2ShortFunction_): $Short2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Short2CharFunction;
        composeChar(arg0: $Char2ShortFunction_): $Char2ObjectFunction<V>;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Short2FloatFunction;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Short2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2ShortFunction_<T>): $Object2ObjectFunction<T, V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Short2ReferenceFunction<T>;
        composeLong(arg0: $Long2ShortFunction_): $Long2ObjectFunction<V>;
        composeReference<T>(arg0: $Reference2ShortFunction_<T>): $Reference2ObjectFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Short2ObjectFunction}.
     */
    export type $Short2ObjectFunction_<V> = ((arg0: number) => V);
    export class $Short2BooleanFunction {
    }
    export interface $Short2BooleanFunction extends $Function<number, boolean>, $IntPredicate {
        remove(arg0: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        get(arg0: $Object): boolean;
        get(arg0: number): boolean;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: boolean): boolean;
        put(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        test(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, boolean>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<boolean, T>): $Function$1<number, T>;
        composeInt(arg0: $Int2ShortFunction_): $Int2BooleanFunction;
        andThenInt(arg0: $Boolean2IntFunction_): $Short2IntFunction;
        andThenByte(arg0: $Boolean2ByteFunction_): $Short2ByteFunction;
        composeFloat(arg0: $Float2ShortFunction_): $Float2BooleanFunction;
        composeDouble(arg0: $Double2ShortFunction_): $Double2BooleanFunction;
        andThenLong(arg0: $Boolean2LongFunction_): $Short2LongFunction;
        andThenShort(arg0: $Boolean2ShortFunction_): $Short2ShortFunction;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Short2DoubleFunction;
        defaultReturnValue(): boolean;
        defaultReturnValue(arg0: boolean): void;
        composeByte(arg0: $Byte2ShortFunction_): $Byte2BooleanFunction;
        composeShort(arg0: $Short2ShortFunction_): $Short2BooleanFunction;
        andThenChar(arg0: $Boolean2CharFunction_): $Short2CharFunction;
        composeChar(arg0: $Char2ShortFunction_): $Char2BooleanFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Short2FloatFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Short2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2ShortFunction_<T>): $Object2BooleanFunction<T>;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Short2ReferenceFunction<T>;
        composeLong(arg0: $Long2ShortFunction_): $Long2BooleanFunction;
        composeReference<T>(arg0: $Reference2ShortFunction_<T>): $Reference2BooleanFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Short2BooleanFunction}.
     */
    export type $Short2BooleanFunction_ = ((arg0: number) => boolean);
    export class $Short2ObjectMap<V> {
    }
    export interface $Short2ObjectMap<V> extends $Short2ObjectFunction<V>, $Map<number, V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: number, arg1: $Object): boolean;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        values(): $ObjectCollection<V>;
        clear(): void;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        replace(arg0: number, arg1: V): V;
        merge(arg0: number, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: number, arg1: V): V;
        compute(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        forEach(arg0: $BiConsumer_<number, V>): void;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: number, arg1: $Short2ObjectFunction_<V>): V;
        computeIfAbsent(arg0: number, arg1: $IntFunction_<V>): V;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        short2ObjectEntrySet(): $ObjectSet<$Short2ObjectMap$Entry<V>>;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Short2ObjectFunction_<V>): V;
        entrySet(): $Set<$Map$Entry<number, V>>;
        keySet(): $Set<number>;
    }
    export class $ShortList {
        static of(arg0: number): $ShortList;
        static of(): $ShortList;
        static of(arg0: number, arg1: number, arg2: number): $ShortList;
        static of(...arg0: number[]): $ShortList;
        static of(arg0: number, arg1: number): $ShortList;
        [Symbol.iterator](): Iterator<number>
    }
    export interface $ShortList extends $List<number>, $Comparable<$List<number>>, $ShortCollection {
        getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        /**
         * @deprecated
         */
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        size(arg0: number): void;
        /**
         * @deprecated
         */
        indexOf(arg0: $Object): number;
        indexOf(arg0: number): number;
        getShort(arg0: number): number;
        /**
         * @deprecated
         */
        lastIndexOf(arg0: $Object): number;
        lastIndexOf(arg0: number): number;
        replaceAll(arg0: $ShortUnaryOperator_): void;
        replaceAll(arg0: $IntUnaryOperator_): void;
        /**
         * @deprecated
         */
        replaceAll(arg0: $UnaryOperator_<number>): void;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        add(arg0: number): boolean;
        add(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        add(arg0: number, arg1: number): void;
        subList(arg0: number, arg1: number): $ShortList;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        spliterator(): $ShortSpliterator;
        addAll(arg0: $ShortList): boolean;
        addAll(arg0: number, arg1: $ShortCollection): boolean;
        addAll(arg0: number, arg1: $ShortList): boolean;
        set(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        set(arg0: number, arg1: number): number;
        sort(arg0: $ShortComparator): void;
        /**
         * @deprecated
         */
        sort(arg0: $Comparator<number>): void;
        unstableSort(arg0: $ShortComparator): void;
        /**
         * @deprecated
         */
        unstableSort(arg0: $Comparator<number>): void;
        setElements(arg0: number, arg1: number[]): void;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        setElements(arg0: number[]): void;
        removeElements(arg0: number, arg1: number): void;
        addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        addElements(arg0: number, arg1: number[]): void;
        removeShort(arg0: number): number;
        get(arg0: number): number;
        iterator(): $Iterator<number>;
        listIterator(): $ListIterator<number>;
        listIterator(arg0: number): $ListIterator<number>;
        [Symbol.iterator](): Iterator<number>
    }
    export class $Short2BooleanMap {
    }
    export interface $Short2BooleanMap extends $Short2BooleanFunction, $Map<number, boolean> {
        remove(arg0: number, arg1: boolean): boolean;
        size(): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: boolean): boolean;
        values(): $BooleanCollection;
        clear(): void;
        replace(arg0: number, arg1: boolean, arg2: boolean): boolean;
        replace(arg0: number, arg1: boolean): boolean;
        merge(arg0: number, arg1: boolean, arg2: $BiFunction_<boolean, boolean, boolean>): boolean;
        putIfAbsent(arg0: number, arg1: boolean): boolean;
        compute(arg0: number, arg1: $BiFunction_<number, boolean, boolean>): boolean;
        forEach(arg0: $BiConsumer_<number, boolean>): void;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: number, arg1: $IntPredicate_): boolean;
        computeIfAbsent(arg0: number, arg1: $Short2BooleanFunction_): boolean;
        containsValue(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, boolean, boolean>): boolean;
        defaultReturnValue(arg0: boolean): void;
        defaultReturnValue(): boolean;
        short2BooleanEntrySet(): $ObjectSet<$Short2BooleanMap$Entry>;
        computeIfAbsentNullable(arg0: number, arg1: $IntFunction_<boolean>): boolean;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Short2BooleanFunction_): boolean;
        remove(arg0: number): boolean;
        get(arg0: number): boolean;
        entrySet(): $Set<$Map$Entry<number, boolean>>;
        keySet(): $Set<number>;
    }
    export class $ShortSet {
        static of(arg0: number, arg1: number): $ShortSet;
        static of(): $ShortSet;
        static of(...arg0: number[]): $ShortSet;
        static of(arg0: number): $ShortSet;
        static of(arg0: number, arg1: number, arg2: number): $ShortSet;
    }
    export interface $ShortSet extends $ShortCollection, $Set<number> {
        remove(arg0: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        spliterator(): $ShortSpliterator;
        /**
         * @deprecated
         */
        rem(arg0: number): boolean;
        iterator(): $ShortIterator;
    }
    export class $Short2FloatFunction {
    }
    export interface $Short2FloatFunction extends $Function<number, number>, $IntToDoubleFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        composeInt(arg0: $Int2ShortFunction_): $Int2FloatFunction;
        andThenInt(arg0: $Float2IntFunction_): $Short2IntFunction;
        andThenByte(arg0: $Float2ByteFunction_): $Short2ByteFunction;
        composeFloat(arg0: $Float2ShortFunction_): $Float2FloatFunction;
        composeDouble(arg0: $Double2ShortFunction_): $Double2FloatFunction;
        andThenLong(arg0: $Float2LongFunction_): $Short2LongFunction;
        andThenShort(arg0: $Float2ShortFunction_): $Short2ShortFunction;
        andThenDouble(arg0: $Float2DoubleFunction_): $Short2DoubleFunction;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        composeByte(arg0: $Byte2ShortFunction_): $Byte2FloatFunction;
        composeShort(arg0: $Short2ShortFunction_): $Short2FloatFunction;
        andThenChar(arg0: $Float2CharFunction_): $Short2CharFunction;
        composeChar(arg0: $Char2ShortFunction_): $Char2FloatFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Short2FloatFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Short2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2ShortFunction_<T>): $Object2FloatFunction<T>;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Short2ReferenceFunction<T>;
        composeLong(arg0: $Long2ShortFunction_): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2ShortFunction_<T>): $Reference2FloatFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Short2FloatFunction}.
     */
    export type $Short2FloatFunction_ = ((arg0: number) => number);
    export class $Short2ShortFunction {
        static identity(): $Short2ShortFunction;
    }
    export interface $Short2ShortFunction extends $Function<number, number>, $IntUnaryOperator {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        composeInt(arg0: $Int2ShortFunction_): $Int2ShortFunction;
        andThenInt(arg0: $Short2IntFunction_): $Short2IntFunction;
        andThenByte(arg0: $Short2ByteFunction_): $Short2ByteFunction;
        composeFloat(arg0: $Float2ShortFunction_): $Float2ShortFunction;
        composeDouble(arg0: $Double2ShortFunction_): $Double2ShortFunction;
        andThenLong(arg0: $Short2LongFunction_): $Short2LongFunction;
        andThenShort(arg0: $Short2ShortFunction_): $Short2ShortFunction;
        andThenDouble(arg0: $Short2DoubleFunction_): $Short2DoubleFunction;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        composeByte(arg0: $Byte2ShortFunction_): $Byte2ShortFunction;
        composeShort(arg0: $Short2ShortFunction_): $Short2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Short2CharFunction;
        composeChar(arg0: $Char2ShortFunction_): $Char2ShortFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Short2FloatFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Short2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2ShortFunction_<T>): $Object2ShortFunction<T>;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Short2ReferenceFunction<T>;
        composeLong(arg0: $Long2ShortFunction_): $Long2ShortFunction;
        composeReference<T>(arg0: $Reference2ShortFunction_<T>): $Reference2ShortFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Short2ShortFunction}.
     */
    export type $Short2ShortFunction_ = ((arg0: number) => number);
    export class $ShortUnaryOperator {
        static identity(): $ShortUnaryOperator;
        static negation(): $ShortUnaryOperator;
    }
    export interface $ShortUnaryOperator extends $UnaryOperator<number>, $IntUnaryOperator {
        /**
         * @deprecated
         */
        apply(arg0: number): number;
        apply(arg0: number): number;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ShortUnaryOperator}.
     */
    export type $ShortUnaryOperator_ = ((arg0: number) => number);
    export class $ShortIterator {
    }
    export interface $ShortIterator extends $PrimitiveIterator<number, $ShortConsumer> {
        forEachRemaining(arg0: $IntConsumer_): void;
        forEachRemaining(arg0: $ShortConsumer_): void;
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        skip(arg0: number): number;
        nextShort(): number;
        next(): number;
    }
    export class $Short2IntFunction {
    }
    export interface $Short2IntFunction extends $Function<number, number>, $IntUnaryOperator {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        composeInt(arg0: $Int2ShortFunction_): $Int2IntFunction;
        andThenInt(arg0: $Int2IntFunction_): $Short2IntFunction;
        andThenByte(arg0: $Int2ByteFunction_): $Short2ByteFunction;
        composeFloat(arg0: $Float2ShortFunction_): $Float2IntFunction;
        composeDouble(arg0: $Double2ShortFunction_): $Double2IntFunction;
        andThenLong(arg0: $Int2LongFunction_): $Short2LongFunction;
        andThenShort(arg0: $Int2ShortFunction_): $Short2ShortFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Short2DoubleFunction;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        composeByte(arg0: $Byte2ShortFunction_): $Byte2IntFunction;
        composeShort(arg0: $Short2ShortFunction_): $Short2IntFunction;
        andThenChar(arg0: $Int2CharFunction_): $Short2CharFunction;
        composeChar(arg0: $Char2ShortFunction_): $Char2IntFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Short2FloatFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Short2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2ShortFunction_<T>): $Object2IntFunction<T>;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Short2ReferenceFunction<T>;
        composeLong(arg0: $Long2ShortFunction_): $Long2IntFunction;
        composeReference<T>(arg0: $Reference2ShortFunction_<T>): $Reference2IntFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Short2IntFunction}.
     */
    export type $Short2IntFunction_ = ((arg0: number) => number);
}
