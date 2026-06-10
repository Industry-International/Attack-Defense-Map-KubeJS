import { $Int2ByteFunction_, $IntSpliterator, $Int2ShortFunction, $IntIterator, $Int2ObjectFunction_, $Int2CharFunction, $Int2DoubleFunction_, $Int2ReferenceFunction_, $Int2IntFunction_, $Int2LongFunction_, $Int2CharFunction_, $Int2FloatFunction_, $Int2LongFunction, $Int2IntFunction, $Int2DoubleFunction, $Int2FloatFunction, $Int2ByteFunction, $Int2ObjectFunction, $Int2ReferenceFunction, $Int2BooleanFunction, $Int2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Long2ReferenceFunction_, $Long2LongFunction, $Long2FloatFunction, $Long2ShortFunction, $Long2BooleanFunction, $Long2ObjectFunction, $Long2CharFunction_, $Long2ReferenceFunction, $Long2FloatFunction_, $Long2ByteFunction_, $Long2CharFunction, $Long2ObjectFunction_, $Long2ShortFunction_, $Long2IntFunction, $Long2LongFunction_, $Long2ByteFunction, $Long2IntFunction_, $Long2DoubleFunction, $Long2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Function } from "@package/it/unimi/dsi/fastutil";
import { $PrimitiveIterator, $ListIterator, $Spliterator, $List, $Collection, $Comparator, $Iterator, $Spliterator$OfPrimitive } from "@package/java/util";
import { $Float2LongFunction_, $Float2FloatFunction_, $Float2ShortFunction, $Float2BooleanFunction, $Float2ObjectFunction_, $Float2IntFunction, $Float2ObjectFunction, $Float2ShortFunction_, $Float2CharFunction, $Float2DoubleFunction, $Float2ReferenceFunction_, $Float2FloatFunction, $Float2IntFunction_, $Float2ReferenceFunction, $Float2CharFunction_, $Float2ByteFunction_, $Float2LongFunction, $Float2DoubleFunction_, $Float2ByteFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $IntPredicate, $IntBinaryOperator, $IntToDoubleFunction, $Function as $Function$1, $UnaryOperator, $IntConsumer_, $IntToLongFunction, $IntUnaryOperator, $UnaryOperator_, $IntFunction, $Consumer_, $BinaryOperator, $Predicate_, $Predicate, $Consumer, $IntConsumer, $IntPredicate_, $Function_, $IntUnaryOperator_ } from "@package/java/util/function";
import { $Object2LongFunction_, $Reference2ShortFunction, $Reference2FloatFunction_, $Object2ShortFunction, $Object2ObjectFunction_, $Reference2IntFunction_, $Object2ShortFunction_, $Object2ByteFunction_, $Reference2ByteFunction_, $Object2BooleanFunction, $Object2ReferenceFunction_, $Reference2ReferenceFunction, $Reference2ObjectFunction_, $Object2CharFunction_, $Object2FloatFunction, $Reference2CharFunction, $Reference2FloatFunction, $Object2CharFunction, $Reference2DoubleFunction_, $Object2DoubleFunction, $Reference2IntFunction, $Object2IntFunction, $Object2IntFunction_, $Reference2CharFunction_, $Reference2BooleanFunction, $Object2DoubleFunction_, $Object2ReferenceFunction, $Reference2DoubleFunction, $Object2LongFunction, $Reference2LongFunction, $Reference2ShortFunction_, $Reference2ObjectFunction, $Object2FloatFunction_, $Object2ByteFunction, $Reference2ByteFunction, $Reference2ReferenceFunction_, $Reference2LongFunction_, $Object2ObjectFunction, $ObjectBidirectionalIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $Stream, $IntStream } from "@package/java/util/stream";
import { $Double2FloatFunction, $Double2IntFunction, $Double2IntFunction_, $Double2ByteFunction_, $Double2ByteFunction, $Double2ReferenceFunction, $Double2ObjectFunction_, $Double2ShortFunction, $Double2FloatFunction_, $Double2LongFunction_, $Double2DoubleFunction_, $Double2LongFunction, $Double2DoubleFunction, $Double2ObjectFunction, $Double2BooleanFunction, $Double2CharFunction_, $Double2CharFunction, $Double2ReferenceFunction_, $Double2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Char2BooleanFunction, $Char2ObjectFunction_, $Char2LongFunction, $Char2ShortFunction_, $Char2FloatFunction, $Char2IntFunction_, $Char2DoubleFunction_, $Char2ObjectFunction, $Char2CharFunction_, $Char2IntFunction, $Char2FloatFunction_, $Char2ByteFunction_, $Char2CharFunction, $Char2ShortFunction, $Char2LongFunction_, $Char2ReferenceFunction_, $Char2DoubleFunction, $Char2ByteFunction, $Char2ReferenceFunction } from "@package/it/unimi/dsi/fastutil/chars";
import { $Boolean2FloatFunction_, $Boolean2ReferenceFunction_, $Boolean2LongFunction_, $Boolean2ShortFunction_, $Boolean2CharFunction_, $Boolean2IntFunction_, $Boolean2ObjectFunction_, $Boolean2ByteFunction_, $Boolean2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Comparable, $Iterable, $Object } from "@package/java/lang";
import { $Short2IntFunction_, $Short2ReferenceFunction_, $Short2FloatFunction, $Short2ShortFunction, $Short2BooleanFunction, $Short2ByteFunction, $Short2ByteFunction_, $Short2CharFunction_, $Short2ObjectFunction, $Short2IntFunction, $Short2LongFunction, $Short2LongFunction_, $Short2FloatFunction_, $Short2DoubleFunction, $Short2ObjectFunction_, $Short2ReferenceFunction, $Short2ShortFunction_, $Short2DoubleFunction_, $Short2CharFunction } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/it/unimi/dsi/fastutil/bytes" {
    export class $Byte2ShortFunction {
    }
    export interface $Byte2ShortFunction extends $Function<number, number>, $IntUnaryOperator {
        remove(arg0: number): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
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
        andThenLong(arg0: $Short2LongFunction_): $Byte2LongFunction;
        andThenDouble(arg0: $Short2DoubleFunction_): $Byte2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2ShortFunction<T>;
        composeDouble(arg0: $Double2ByteFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2ShortFunction;
        andThenByte(arg0: $Short2ByteFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Short2ShortFunction_): $Byte2ShortFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Byte2FloatFunction;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2ShortFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2ShortFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenChar(arg0: $Short2CharFunction_): $Byte2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2ShortFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2ShortFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2ShortFunction<T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeInt(arg0: $Int2ByteFunction_): $Int2ShortFunction;
        andThenInt(arg0: $Short2IntFunction_): $Byte2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2ShortFunction}.
     */
    export type $Byte2ShortFunction_ = ((arg0: number) => number);
    export class $Byte2LongFunction {
    }
    export interface $Byte2LongFunction extends $Function<number, number>, $IntToLongFunction {
        remove(arg0: number): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
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
        andThenLong(arg0: $Long2LongFunction_): $Byte2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Byte2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2LongFunction<T>;
        composeDouble(arg0: $Double2ByteFunction_): $Double2LongFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2LongFunction;
        andThenByte(arg0: $Long2ByteFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Long2ShortFunction_): $Byte2ShortFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Byte2FloatFunction;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2LongFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2LongFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenChar(arg0: $Long2CharFunction_): $Byte2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2LongFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2LongFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2LongFunction<T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeInt(arg0: $Int2ByteFunction_): $Int2LongFunction;
        andThenInt(arg0: $Long2IntFunction_): $Byte2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2LongFunction}.
     */
    export type $Byte2LongFunction_ = ((arg0: number) => number);
    export class $ByteBinaryOperator {
    }
    export interface $ByteBinaryOperator extends $BinaryOperator<number>, $IntBinaryOperator {
        /**
         * @deprecated
         */
        apply(arg0: number, arg1: number): number;
        apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ByteBinaryOperator}.
     */
    export type $ByteBinaryOperator_ = ((arg0: number, arg1: number) => number);
    export class $ByteList {
        static of(arg0: number): $ByteList;
        static of(): $ByteList;
        static of(arg0: number, arg1: number, arg2: number): $ByteList;
        static of(...arg0: number[]): $ByteList;
        static of(arg0: number, arg1: number): $ByteList;
    }
    export interface $ByteList extends $List<number>, $Comparable<$List<number>>, $ByteCollection {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        size(arg0: number): void;
        indexOf(arg0: number): number;
        /**
         * @deprecated
         */
        indexOf(arg0: $Object): number;
        getByte(arg0: number): number;
        lastIndexOf(arg0: number): number;
        /**
         * @deprecated
         */
        lastIndexOf(arg0: $Object): number;
        /**
         * @deprecated
         */
        replaceAll(arg0: $UnaryOperator_<number>): void;
        replaceAll(arg0: $IntUnaryOperator_): void;
        replaceAll(arg0: $ByteUnaryOperator_): void;
        /**
         * @deprecated
         */
        add(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        add(arg0: number): boolean;
        add(arg0: number, arg1: number): void;
        subList(arg0: number, arg1: number): $ByteList;
        iterator(): $ByteListIterator;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        spliterator(): $ByteSpliterator;
        addAll(arg0: $ByteList): boolean;
        addAll(arg0: number, arg1: $ByteCollection): boolean;
        addAll(arg0: number, arg1: $ByteList): boolean;
        set(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        set(arg0: number, arg1: number): number;
        sort(arg0: $ByteComparator): void;
        /**
         * @deprecated
         */
        sort(arg0: $Comparator<number>): void;
        listIterator(arg0: number): $ByteListIterator;
        getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        unstableSort(arg0: $ByteComparator): void;
        /**
         * @deprecated
         */
        unstableSort(arg0: $Comparator<number>): void;
        addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        addElements(arg0: number, arg1: number[]): void;
        removeElements(arg0: number, arg1: number): void;
        setElements(arg0: number[]): void;
        setElements(arg0: number, arg1: number[]): void;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        removeByte(arg0: number): number;
        get(arg0: number): number;
        listIterator(): $ListIterator<number>;
    }
    export class $Byte2IntFunction {
    }
    export interface $Byte2IntFunction extends $Function<number, number>, $IntUnaryOperator {
        remove(arg0: number): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
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
        andThenLong(arg0: $Int2LongFunction_): $Byte2LongFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Byte2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2IntFunction<T>;
        composeDouble(arg0: $Double2ByteFunction_): $Double2IntFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2IntFunction;
        andThenByte(arg0: $Int2ByteFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Int2ShortFunction_): $Byte2ShortFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Byte2FloatFunction;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2IntFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2IntFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenChar(arg0: $Int2CharFunction_): $Byte2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2IntFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2IntFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2IntFunction<T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeInt(arg0: $Int2ByteFunction_): $Int2IntFunction;
        andThenInt(arg0: $Int2IntFunction_): $Byte2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2IntFunction}.
     */
    export type $Byte2IntFunction_ = ((arg0: number) => number);
    export class $Byte2FloatFunction {
    }
    export interface $Byte2FloatFunction extends $Function<number, number>, $IntToDoubleFunction {
        remove(arg0: number): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
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
        andThenLong(arg0: $Float2LongFunction_): $Byte2LongFunction;
        andThenDouble(arg0: $Float2DoubleFunction_): $Byte2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2FloatFunction<T>;
        composeDouble(arg0: $Double2ByteFunction_): $Double2FloatFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2FloatFunction;
        andThenByte(arg0: $Float2ByteFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Float2ShortFunction_): $Byte2ShortFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Byte2FloatFunction;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2FloatFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2FloatFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenChar(arg0: $Float2CharFunction_): $Byte2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2FloatFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2FloatFunction<T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeInt(arg0: $Int2ByteFunction_): $Int2FloatFunction;
        andThenInt(arg0: $Float2IntFunction_): $Byte2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2FloatFunction}.
     */
    export type $Byte2FloatFunction_ = ((arg0: number) => number);
    export class $ByteUnaryOperator {
        static identity(): $ByteUnaryOperator;
        static negation(): $ByteUnaryOperator;
    }
    export interface $ByteUnaryOperator extends $UnaryOperator<number>, $IntUnaryOperator {
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
     * Values that may be interpreted as {@link $ByteUnaryOperator}.
     */
    export type $ByteUnaryOperator_ = ((arg0: number) => number);
    export class $BytePredicate {
    }
    export interface $BytePredicate extends $Predicate<number>, $IntPredicate {
        /**
         * @deprecated
         */
        test(arg0: number): boolean;
        test(arg0: number): boolean;
        /**
         * @deprecated
         */
        test(arg0: number): boolean;
        or(arg0: $BytePredicate_): $BytePredicate;
        or(arg0: $IntPredicate_): $BytePredicate;
        /**
         * @deprecated
         */
        or(arg0: $Predicate_<number>): $Predicate<number>;
        and(arg0: $BytePredicate_): $BytePredicate;
        /**
         * @deprecated
         */
        and(arg0: $Predicate_<number>): $Predicate<number>;
        negate(): $Predicate<number>;
    }
    /**
     * Values that may be interpreted as {@link $BytePredicate}.
     */
    export type $BytePredicate_ = ((arg0: number) => boolean);
    export class $Byte2BooleanFunction {
    }
    export interface $Byte2BooleanFunction extends $Function<number, boolean>, $IntPredicate {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        remove(arg0: number): boolean;
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
        andThenLong(arg0: $Boolean2LongFunction_): $Byte2LongFunction;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Byte2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2BooleanFunction<T>;
        composeDouble(arg0: $Double2ByteFunction_): $Double2BooleanFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2BooleanFunction;
        andThenByte(arg0: $Boolean2ByteFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Boolean2ShortFunction_): $Byte2ShortFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Byte2FloatFunction;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2BooleanFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2BooleanFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenChar(arg0: $Boolean2CharFunction_): $Byte2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2BooleanFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2BooleanFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2BooleanFunction<T>;
        defaultReturnValue(arg0: boolean): void;
        defaultReturnValue(): boolean;
        composeInt(arg0: $Int2ByteFunction_): $Int2BooleanFunction;
        andThenInt(arg0: $Boolean2IntFunction_): $Byte2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2BooleanFunction}.
     */
    export type $Byte2BooleanFunction_ = ((arg0: number) => boolean);
    export class $Byte2DoubleFunction {
    }
    export interface $Byte2DoubleFunction extends $Function<number, number>, $IntToDoubleFunction {
        remove(arg0: number): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
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
        andThenLong(arg0: $Double2LongFunction_): $Byte2LongFunction;
        andThenDouble(arg0: $Double2DoubleFunction_): $Byte2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2DoubleFunction<T>;
        composeDouble(arg0: $Double2ByteFunction_): $Double2DoubleFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2DoubleFunction;
        andThenByte(arg0: $Double2ByteFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Double2ShortFunction_): $Byte2ShortFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Byte2FloatFunction;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2DoubleFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2DoubleFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenChar(arg0: $Double2CharFunction_): $Byte2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2DoubleFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2DoubleFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2DoubleFunction<T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeInt(arg0: $Int2ByteFunction_): $Int2DoubleFunction;
        andThenInt(arg0: $Double2IntFunction_): $Byte2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2DoubleFunction}.
     */
    export type $Byte2DoubleFunction_ = ((arg0: number) => number);
    export class $ByteCollection {
    }
    export interface $ByteCollection extends $Collection<number>, $ByteIterable {
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
        iterator(): $ByteIterator;
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
        addAll(arg0: $ByteCollection): boolean;
        /**
         * @deprecated
         */
        removeIf(arg0: $Predicate_<number>): boolean;
        removeIf(arg0: $BytePredicate_): boolean;
        removeIf(arg0: $IntPredicate_): boolean;
        removeAll(arg0: $ByteCollection): boolean;
        retainAll(arg0: $ByteCollection): boolean;
        containsAll(arg0: $ByteCollection): boolean;
        /**
         * @deprecated
         */
        parallelStream(): $Stream<number>;
        rem(arg0: number): boolean;
        toByteArray(): number[];
        /**
         * @deprecated
         */
        toByteArray(arg0: number[]): number[];
        intIterator(): $IntIterator;
        intParallelStream(): $IntStream;
        intSpliterator(): $IntSpliterator;
        spliterator(): $Spliterator<number>;
    }
    export class $ByteBidirectionalIterator {
    }
    export interface $ByteBidirectionalIterator extends $ByteIterator, $ObjectBidirectionalIterator<number> {
        skip(arg0: number): number;
        /**
         * @deprecated
         */
        previous(): number;
        back(arg0: number): number;
        previousByte(): number;
    }
    export class $ByteIterator {
    }
    export interface $ByteIterator extends $PrimitiveIterator<number, $ByteConsumer> {
        forEachRemaining(arg0: $IntConsumer_): void;
        forEachRemaining(arg0: $ByteConsumer_): void;
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        skip(arg0: number): number;
        nextByte(): number;
        next(): number;
    }
    export class $ByteConsumer {
    }
    export interface $ByteConsumer extends $Consumer<number>, $IntConsumer {
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
        andThen(arg0: $ByteConsumer_): $ByteConsumer;
    }
    /**
     * Values that may be interpreted as {@link $ByteConsumer}.
     */
    export type $ByteConsumer_ = ((arg0: number) => void);
    export class $ByteComparator {
    }
    export interface $ByteComparator extends $Comparator<number> {
        /**
         * @deprecated
         */
        compare(arg0: number, arg1: number): number;
        compare(arg0: number, arg1: number): number;
        reversed(): $ByteComparator;
        thenComparing(arg0: $Comparator<number>): $Comparator<number>;
        thenComparing(arg0: $ByteComparator): $ByteComparator;
    }
    export class $Byte2CharFunction {
    }
    export interface $Byte2CharFunction extends $Function<number, string>, $IntUnaryOperator {
        remove(arg0: number): string;
        get(arg0: number): string;
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: string): string;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
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
        andThenLong(arg0: $Char2LongFunction_): $Byte2LongFunction;
        andThenDouble(arg0: $Char2DoubleFunction_): $Byte2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2CharFunction<T>;
        composeDouble(arg0: $Double2ByteFunction_): $Double2CharFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2CharFunction;
        andThenByte(arg0: $Char2ByteFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Char2ShortFunction_): $Byte2ShortFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Byte2FloatFunction;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2CharFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2CharFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenChar(arg0: $Char2CharFunction_): $Byte2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2CharFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2CharFunction<T>;
        defaultReturnValue(arg0: string): void;
        defaultReturnValue(): string;
        composeInt(arg0: $Int2ByteFunction_): $Int2CharFunction;
        andThenInt(arg0: $Char2IntFunction_): $Byte2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2CharFunction}.
     */
    export type $Byte2CharFunction_ = ((arg0: number) => string);
    export class $Byte2ReferenceFunction<V> {
    }
    export interface $Byte2ReferenceFunction<V> extends $Function<number, V>, $IntFunction<V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: number): V;
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
        andThenLong(arg0: $Reference2LongFunction_<V>): $Byte2LongFunction;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Byte2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2ReferenceFunction<T, V>;
        composeDouble(arg0: $Double2ByteFunction_): $Double2ReferenceFunction<V>;
        composeShort(arg0: $Short2ByteFunction_): $Short2ReferenceFunction<V>;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Byte2ByteFunction;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Byte2ShortFunction;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Byte2FloatFunction;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2ReferenceFunction<V>;
        composeFloat(arg0: $Float2ByteFunction_): $Float2ReferenceFunction<V>;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Byte2ObjectFunction<T>;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Byte2ReferenceFunction<T>;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Byte2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2ReferenceFunction<V>;
        composeLong(arg0: $Long2ByteFunction_): $Long2ReferenceFunction<V>;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2ReferenceFunction<T, V>;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        composeInt(arg0: $Int2ByteFunction_): $Int2ReferenceFunction<V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Byte2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2ReferenceFunction}.
     */
    export type $Byte2ReferenceFunction_<V> = ((arg0: number) => V);
    export class $Byte2ByteFunction {
        static identity(): $Byte2ByteFunction;
    }
    export interface $Byte2ByteFunction extends $Function<number, number>, $IntUnaryOperator {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
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
        andThenLong(arg0: $Byte2LongFunction_): $Byte2LongFunction;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Byte2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2ByteFunction<T>;
        composeDouble(arg0: $Double2ByteFunction_): $Double2ByteFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2ByteFunction;
        andThenByte(arg0: $Byte2ByteFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Byte2ShortFunction_): $Byte2ShortFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Byte2FloatFunction;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2ByteFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2ByteFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenChar(arg0: $Byte2CharFunction_): $Byte2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2ByteFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2ByteFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2ByteFunction<T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeInt(arg0: $Int2ByteFunction_): $Int2ByteFunction;
        andThenInt(arg0: $Byte2IntFunction_): $Byte2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2ByteFunction}.
     */
    export type $Byte2ByteFunction_ = ((arg0: number) => number);
    export class $ByteListIterator {
    }
    export interface $ByteListIterator extends $ByteBidirectionalIterator, $ListIterator<number> {
        remove(): void;
        /**
         * @deprecated
         */
        add(arg0: number): void;
        add(arg0: number): void;
        /**
         * @deprecated
         */
        set(arg0: number): void;
        set(arg0: number): void;
        next(): number;
        /**
         * @deprecated
         */
        previous(): number;
    }
    export class $Byte2ObjectFunction<V> {
    }
    export interface $Byte2ObjectFunction<V> extends $Function<number, V>, $IntFunction<V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: number): V;
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
        andThenLong(arg0: $Object2LongFunction_<V>): $Byte2LongFunction;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Byte2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2ObjectFunction<T, V>;
        composeDouble(arg0: $Double2ByteFunction_): $Double2ObjectFunction<V>;
        composeShort(arg0: $Short2ByteFunction_): $Short2ObjectFunction<V>;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Byte2ByteFunction;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Byte2ShortFunction;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Byte2FloatFunction;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2ObjectFunction<V>;
        composeFloat(arg0: $Float2ByteFunction_): $Float2ObjectFunction<V>;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Byte2ObjectFunction<T>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Byte2ReferenceFunction<T>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Byte2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2ObjectFunction<V>;
        composeLong(arg0: $Long2ByteFunction_): $Long2ObjectFunction<V>;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2ObjectFunction<T, V>;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        composeInt(arg0: $Int2ByteFunction_): $Int2ObjectFunction<V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Byte2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2ObjectFunction}.
     */
    export type $Byte2ObjectFunction_<V> = ((arg0: number) => V);
    export class $ByteIterable {
        [Symbol.iterator](): Iterator<number>
    }
    export interface $ByteIterable extends $Iterable<number> {
        forEach(arg0: $ByteConsumer_): void;
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
     * Values that may be interpreted as {@link $ByteIterable}.
     */
    export type $ByteIterable_ = (() => $Iterator<number>);
    export class $ByteSpliterator {
    }
    export interface $ByteSpliterator extends $Spliterator$OfPrimitive<number, $ByteConsumer, $ByteSpliterator> {
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
}
