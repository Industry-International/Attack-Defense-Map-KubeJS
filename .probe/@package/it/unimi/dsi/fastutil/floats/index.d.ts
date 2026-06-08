import { $Int2ByteFunction_, $Int2ShortFunction, $Int2ObjectFunction_, $Int2CharFunction, $Int2DoubleFunction_, $Int2ReferenceFunction_, $Int2IntFunction_, $Int2LongFunction_, $Int2CharFunction_, $Int2FloatFunction_, $Int2LongFunction, $Int2IntFunction, $Int2DoubleFunction, $Int2FloatFunction, $Int2ByteFunction, $Int2ObjectFunction, $Int2ReferenceFunction, $Int2BooleanFunction, $Int2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Function as $Function$1, $UnaryOperator, $DoubleToLongFunction, $DoubleFunction, $DoublePredicate, $DoubleConsumer, $DoubleBinaryOperator, $Consumer_, $BinaryOperator, $DoubleToIntFunction, $DoubleUnaryOperator, $Consumer, $Function_ } from "@package/java/util/function";
import { $Long2ReferenceFunction_, $Long2LongFunction, $Long2FloatFunction, $Long2ShortFunction, $Long2BooleanFunction, $Long2ObjectFunction, $Long2CharFunction_, $Long2ReferenceFunction, $Long2FloatFunction_, $Long2ByteFunction_, $Long2CharFunction, $Long2ObjectFunction_, $Long2ShortFunction_, $Long2IntFunction, $Long2LongFunction_, $Long2ByteFunction, $Long2IntFunction_, $Long2DoubleFunction, $Long2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Object2LongFunction_, $Reference2ShortFunction, $Reference2FloatFunction_, $Object2ShortFunction, $Object2ObjectFunction_, $Reference2IntFunction_, $Object2ShortFunction_, $Object2ByteFunction_, $Reference2ByteFunction_, $Object2BooleanFunction, $Object2ReferenceFunction_, $Reference2ReferenceFunction, $Reference2ObjectFunction_, $Object2CharFunction_, $Object2FloatFunction, $Reference2CharFunction, $Reference2FloatFunction, $Object2CharFunction, $Reference2DoubleFunction_, $Object2DoubleFunction, $Reference2IntFunction, $Object2IntFunction, $Object2IntFunction_, $Reference2CharFunction_, $Reference2BooleanFunction, $Object2DoubleFunction_, $Object2ReferenceFunction, $Reference2DoubleFunction, $Object2LongFunction, $Reference2LongFunction, $Reference2ShortFunction_, $Reference2ObjectFunction, $Object2FloatFunction_, $Object2ByteFunction, $Reference2ByteFunction, $Reference2ReferenceFunction_, $Reference2LongFunction_, $Object2ObjectFunction } from "@package/it/unimi/dsi/fastutil/objects";
import { $Byte2ReferenceFunction, $Byte2LongFunction_, $Byte2DoubleFunction, $Byte2ShortFunction, $Byte2LongFunction, $Byte2ShortFunction_, $Byte2BooleanFunction, $Byte2ByteFunction, $Byte2IntFunction_, $Byte2ObjectFunction_, $Byte2FloatFunction, $Byte2DoubleFunction_, $Byte2CharFunction, $Byte2ObjectFunction, $Byte2ByteFunction_, $Byte2CharFunction_, $Byte2ReferenceFunction_, $Byte2IntFunction, $Byte2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/bytes";
import { $Double2FloatFunction, $Double2IntFunction, $Double2IntFunction_, $Double2ByteFunction_, $Double2ByteFunction, $Double2ReferenceFunction, $Double2ObjectFunction_, $Double2ShortFunction, $Double2FloatFunction_, $Double2LongFunction_, $Double2DoubleFunction_, $Double2LongFunction, $Double2DoubleFunction, $Double2ObjectFunction, $Double2BooleanFunction, $Double2CharFunction_, $Double2CharFunction, $Double2ReferenceFunction_, $Double2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Char2BooleanFunction, $Char2ObjectFunction_, $Char2LongFunction, $Char2ShortFunction_, $Char2FloatFunction, $Char2IntFunction_, $Char2DoubleFunction_, $Char2ObjectFunction, $Char2CharFunction_, $Char2IntFunction, $Char2FloatFunction_, $Char2ByteFunction_, $Char2CharFunction, $Char2ShortFunction, $Char2LongFunction_, $Char2ReferenceFunction_, $Char2ByteFunction, $Char2DoubleFunction, $Char2ReferenceFunction } from "@package/it/unimi/dsi/fastutil/chars";
import { $Boolean2FloatFunction_, $Boolean2ReferenceFunction_, $Boolean2LongFunction_, $Boolean2ShortFunction_, $Boolean2CharFunction_, $Boolean2IntFunction_, $Boolean2ObjectFunction_, $Boolean2ByteFunction_, $Boolean2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Object } from "@package/java/lang";
import { $Comparator } from "@package/java/util";
import { $Pair, $Function } from "@package/it/unimi/dsi/fastutil";
import { $Short2IntFunction_, $Short2ReferenceFunction_, $Short2FloatFunction, $Short2ShortFunction, $Short2BooleanFunction, $Short2ByteFunction, $Short2ByteFunction_, $Short2CharFunction_, $Short2ObjectFunction, $Short2IntFunction, $Short2LongFunction, $Short2LongFunction_, $Short2FloatFunction_, $Short2DoubleFunction, $Short2ObjectFunction_, $Short2ReferenceFunction, $Short2ShortFunction_, $Short2DoubleFunction_, $Short2CharFunction } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/it/unimi/dsi/fastutil/floats" {
    export class $Float2LongFunction {
    }
    export interface $Float2LongFunction extends $Function<number, number>, $DoubleToLongFunction {
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
        andThenInt(arg0: $Long2IntFunction_): $Float2IntFunction;
        composeInt(arg0: $Int2FloatFunction_): $Int2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Float2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Float2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2FloatFunction_<T>): $Reference2LongFunction<T>;
        andThenLong(arg0: $Long2LongFunction_): $Float2LongFunction;
        andThenByte(arg0: $Long2ByteFunction_): $Float2ByteFunction;
        composeLong(arg0: $Long2FloatFunction_): $Long2LongFunction;
        andThenShort(arg0: $Long2ShortFunction_): $Float2ShortFunction;
        andThenChar(arg0: $Long2CharFunction_): $Float2CharFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Float2FloatFunction;
        composeObject<T>(arg0: $Object2FloatFunction_<T>): $Object2LongFunction<T>;
        composeDouble(arg0: $Double2FloatFunction_): $Double2LongFunction;
        composeByte(arg0: $Byte2FloatFunction_): $Byte2LongFunction;
        composeShort(arg0: $Short2FloatFunction_): $Short2LongFunction;
        composeFloat(arg0: $Float2FloatFunction_): $Float2LongFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Float2ObjectFunction<T>;
        composeChar(arg0: $Char2FloatFunction_): $Char2LongFunction;
    }
    /**
     * Values that may be interpreted as {@link $Float2LongFunction}.
     */
    export type $Float2LongFunction_ = ((arg0: number) => number);
    export class $Float2BooleanFunction {
    }
    export interface $Float2BooleanFunction extends $Function<number, boolean>, $DoublePredicate {
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
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, boolean>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<boolean, T>): $Function$1<number, T>;
        andThenInt(arg0: $Boolean2IntFunction_): $Float2IntFunction;
        composeInt(arg0: $Int2FloatFunction_): $Int2BooleanFunction;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Float2DoubleFunction;
        defaultReturnValue(arg0: boolean): void;
        defaultReturnValue(): boolean;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Float2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2FloatFunction_<T>): $Reference2BooleanFunction<T>;
        andThenLong(arg0: $Boolean2LongFunction_): $Float2LongFunction;
        andThenByte(arg0: $Boolean2ByteFunction_): $Float2ByteFunction;
        composeLong(arg0: $Long2FloatFunction_): $Long2BooleanFunction;
        andThenShort(arg0: $Boolean2ShortFunction_): $Float2ShortFunction;
        andThenChar(arg0: $Boolean2CharFunction_): $Float2CharFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Float2FloatFunction;
        composeObject<T>(arg0: $Object2FloatFunction_<T>): $Object2BooleanFunction<T>;
        composeDouble(arg0: $Double2FloatFunction_): $Double2BooleanFunction;
        composeByte(arg0: $Byte2FloatFunction_): $Byte2BooleanFunction;
        composeShort(arg0: $Short2FloatFunction_): $Short2BooleanFunction;
        composeFloat(arg0: $Float2FloatFunction_): $Float2BooleanFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Float2ObjectFunction<T>;
        composeChar(arg0: $Char2FloatFunction_): $Char2BooleanFunction;
    }
    /**
     * Values that may be interpreted as {@link $Float2BooleanFunction}.
     */
    export type $Float2BooleanFunction_ = ((arg0: number) => boolean);
    export class $FloatUnaryOperator {
        static identity(): $FloatUnaryOperator;
        static negation(): $FloatUnaryOperator;
    }
    export interface $FloatUnaryOperator extends $UnaryOperator<number>, $DoubleUnaryOperator {
        /**
         * @deprecated
         */
        apply(arg0: number): number;
        apply(arg0: number): number;
        /**
         * @deprecated
         */
        applyAsDouble(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $FloatUnaryOperator}.
     */
    export type $FloatUnaryOperator_ = ((arg0: number) => number);
    export class $FloatBinaryOperator {
    }
    export interface $FloatBinaryOperator extends $BinaryOperator<number>, $DoubleBinaryOperator {
        /**
         * @deprecated
         */
        apply(arg0: number, arg1: number): number;
        apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsDouble(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $FloatBinaryOperator}.
     */
    export type $FloatBinaryOperator_ = ((arg0: number, arg1: number) => number);
    export class $Float2IntFunction {
    }
    export interface $Float2IntFunction extends $Function<number, number>, $DoubleToIntFunction {
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
        andThenInt(arg0: $Int2IntFunction_): $Float2IntFunction;
        composeInt(arg0: $Int2FloatFunction_): $Int2IntFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Float2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Float2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2FloatFunction_<T>): $Reference2IntFunction<T>;
        andThenLong(arg0: $Int2LongFunction_): $Float2LongFunction;
        andThenByte(arg0: $Int2ByteFunction_): $Float2ByteFunction;
        composeLong(arg0: $Long2FloatFunction_): $Long2IntFunction;
        andThenShort(arg0: $Int2ShortFunction_): $Float2ShortFunction;
        andThenChar(arg0: $Int2CharFunction_): $Float2CharFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Float2FloatFunction;
        composeObject<T>(arg0: $Object2FloatFunction_<T>): $Object2IntFunction<T>;
        composeDouble(arg0: $Double2FloatFunction_): $Double2IntFunction;
        composeByte(arg0: $Byte2FloatFunction_): $Byte2IntFunction;
        composeShort(arg0: $Short2FloatFunction_): $Short2IntFunction;
        composeFloat(arg0: $Float2FloatFunction_): $Float2IntFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Float2ObjectFunction<T>;
        composeChar(arg0: $Char2FloatFunction_): $Char2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Float2IntFunction}.
     */
    export type $Float2IntFunction_ = ((arg0: number) => number);
    export class $FloatObjectPair<V> {
        static of<V>(arg0: number, arg1: V): $FloatObjectPair<V>;
        static lexComparator<V>(): $Comparator<$FloatObjectPair<V>>;
    }
    export interface $FloatObjectPair<V> extends $Pair<number, V> {
        first(arg0: number): $FloatObjectPair<V>;
        /**
         * @deprecated
         */
        first(): number;
        /**
         * @deprecated
         */
        first(arg0: number): $FloatObjectPair<V>;
        /**
         * @deprecated
         */
        key(): number;
        /**
         * @deprecated
         */
        key(arg0: number): $FloatObjectPair<V>;
        key(arg0: number): $FloatObjectPair<V>;
        /**
         * @deprecated
         */
        left(): number;
        left(arg0: number): $FloatObjectPair<V>;
        /**
         * @deprecated
         */
        left(arg0: number): $FloatObjectPair<V>;
        leftFloat(): number;
        firstFloat(): number;
        keyFloat(): number;
    }
    export class $Float2CharFunction {
    }
    export interface $Float2CharFunction extends $Function<number, string>, $DoubleToIntFunction {
        remove(arg0: number): string;
        /**
         * @deprecated
         */
        remove(arg0: $Object): string;
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
        andThenInt(arg0: $Char2IntFunction_): $Float2IntFunction;
        composeInt(arg0: $Int2FloatFunction_): $Int2CharFunction;
        andThenDouble(arg0: $Char2DoubleFunction_): $Float2DoubleFunction;
        defaultReturnValue(arg0: string): void;
        defaultReturnValue(): string;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Float2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2FloatFunction_<T>): $Reference2CharFunction<T>;
        andThenLong(arg0: $Char2LongFunction_): $Float2LongFunction;
        andThenByte(arg0: $Char2ByteFunction_): $Float2ByteFunction;
        composeLong(arg0: $Long2FloatFunction_): $Long2CharFunction;
        andThenShort(arg0: $Char2ShortFunction_): $Float2ShortFunction;
        andThenChar(arg0: $Char2CharFunction_): $Float2CharFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Float2FloatFunction;
        composeObject<T>(arg0: $Object2FloatFunction_<T>): $Object2CharFunction<T>;
        composeDouble(arg0: $Double2FloatFunction_): $Double2CharFunction;
        composeByte(arg0: $Byte2FloatFunction_): $Byte2CharFunction;
        composeShort(arg0: $Short2FloatFunction_): $Short2CharFunction;
        composeFloat(arg0: $Float2FloatFunction_): $Float2CharFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Float2ObjectFunction<T>;
        composeChar(arg0: $Char2FloatFunction_): $Char2CharFunction;
    }
    /**
     * Values that may be interpreted as {@link $Float2CharFunction}.
     */
    export type $Float2CharFunction_ = ((arg0: number) => string);
    export class $Float2ByteFunction {
    }
    export interface $Float2ByteFunction extends $Function<number, number>, $DoubleToIntFunction {
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
        andThenInt(arg0: $Byte2IntFunction_): $Float2IntFunction;
        composeInt(arg0: $Int2FloatFunction_): $Int2ByteFunction;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Float2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Float2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2FloatFunction_<T>): $Reference2ByteFunction<T>;
        andThenLong(arg0: $Byte2LongFunction_): $Float2LongFunction;
        andThenByte(arg0: $Byte2ByteFunction_): $Float2ByteFunction;
        composeLong(arg0: $Long2FloatFunction_): $Long2ByteFunction;
        andThenShort(arg0: $Byte2ShortFunction_): $Float2ShortFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Float2CharFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Float2FloatFunction;
        composeObject<T>(arg0: $Object2FloatFunction_<T>): $Object2ByteFunction<T>;
        composeDouble(arg0: $Double2FloatFunction_): $Double2ByteFunction;
        composeByte(arg0: $Byte2FloatFunction_): $Byte2ByteFunction;
        composeShort(arg0: $Short2FloatFunction_): $Short2ByteFunction;
        composeFloat(arg0: $Float2FloatFunction_): $Float2ByteFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Float2ObjectFunction<T>;
        composeChar(arg0: $Char2FloatFunction_): $Char2ByteFunction;
    }
    /**
     * Values that may be interpreted as {@link $Float2ByteFunction}.
     */
    export type $Float2ByteFunction_ = ((arg0: number) => number);
    export class $FloatConsumer {
    }
    export interface $FloatConsumer extends $Consumer<number>, $DoubleConsumer {
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
        andThen(arg0: $FloatConsumer_): $FloatConsumer;
    }
    /**
     * Values that may be interpreted as {@link $FloatConsumer}.
     */
    export type $FloatConsumer_ = ((arg0: number) => void);
    export class $Float2DoubleFunction {
    }
    export interface $Float2DoubleFunction extends $Function<number, number>, $DoubleUnaryOperator {
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
        andThenInt(arg0: $Double2IntFunction_): $Float2IntFunction;
        composeInt(arg0: $Int2FloatFunction_): $Int2DoubleFunction;
        andThenDouble(arg0: $Double2DoubleFunction_): $Float2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Float2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2FloatFunction_<T>): $Reference2DoubleFunction<T>;
        andThenLong(arg0: $Double2LongFunction_): $Float2LongFunction;
        andThenByte(arg0: $Double2ByteFunction_): $Float2ByteFunction;
        composeLong(arg0: $Long2FloatFunction_): $Long2DoubleFunction;
        andThenShort(arg0: $Double2ShortFunction_): $Float2ShortFunction;
        andThenChar(arg0: $Double2CharFunction_): $Float2CharFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Float2FloatFunction;
        composeObject<T>(arg0: $Object2FloatFunction_<T>): $Object2DoubleFunction<T>;
        composeDouble(arg0: $Double2FloatFunction_): $Double2DoubleFunction;
        composeByte(arg0: $Byte2FloatFunction_): $Byte2DoubleFunction;
        composeShort(arg0: $Short2FloatFunction_): $Short2DoubleFunction;
        composeFloat(arg0: $Float2FloatFunction_): $Float2DoubleFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Float2ObjectFunction<T>;
        composeChar(arg0: $Char2FloatFunction_): $Char2DoubleFunction;
    }
    /**
     * Values that may be interpreted as {@link $Float2DoubleFunction}.
     */
    export type $Float2DoubleFunction_ = ((arg0: number) => number);
    export class $Float2ShortFunction {
    }
    export interface $Float2ShortFunction extends $Function<number, number>, $DoubleToIntFunction {
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
        andThenInt(arg0: $Short2IntFunction_): $Float2IntFunction;
        composeInt(arg0: $Int2FloatFunction_): $Int2ShortFunction;
        andThenDouble(arg0: $Short2DoubleFunction_): $Float2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Float2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2FloatFunction_<T>): $Reference2ShortFunction<T>;
        andThenLong(arg0: $Short2LongFunction_): $Float2LongFunction;
        andThenByte(arg0: $Short2ByteFunction_): $Float2ByteFunction;
        composeLong(arg0: $Long2FloatFunction_): $Long2ShortFunction;
        andThenShort(arg0: $Short2ShortFunction_): $Float2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Float2CharFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Float2FloatFunction;
        composeObject<T>(arg0: $Object2FloatFunction_<T>): $Object2ShortFunction<T>;
        composeDouble(arg0: $Double2FloatFunction_): $Double2ShortFunction;
        composeByte(arg0: $Byte2FloatFunction_): $Byte2ShortFunction;
        composeShort(arg0: $Short2FloatFunction_): $Short2ShortFunction;
        composeFloat(arg0: $Float2FloatFunction_): $Float2ShortFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Float2ObjectFunction<T>;
        composeChar(arg0: $Char2FloatFunction_): $Char2ShortFunction;
    }
    /**
     * Values that may be interpreted as {@link $Float2ShortFunction}.
     */
    export type $Float2ShortFunction_ = ((arg0: number) => number);
    export class $Float2ObjectFunction<V> {
    }
    export interface $Float2ObjectFunction<V> extends $Function<number, V>, $DoubleFunction<V> {
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
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Float2IntFunction;
        composeInt(arg0: $Int2FloatFunction_): $Int2ObjectFunction<V>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Float2DoubleFunction;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Float2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2FloatFunction_<T>): $Reference2ObjectFunction<T, V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Float2LongFunction;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Float2ByteFunction;
        composeLong(arg0: $Long2FloatFunction_): $Long2ObjectFunction<V>;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Float2ShortFunction;
        andThenChar(arg0: $Object2CharFunction_<V>): $Float2CharFunction;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Float2FloatFunction;
        composeObject<T>(arg0: $Object2FloatFunction_<T>): $Object2ObjectFunction<T, V>;
        composeDouble(arg0: $Double2FloatFunction_): $Double2ObjectFunction<V>;
        composeByte(arg0: $Byte2FloatFunction_): $Byte2ObjectFunction<V>;
        composeShort(arg0: $Short2FloatFunction_): $Short2ObjectFunction<V>;
        composeFloat(arg0: $Float2FloatFunction_): $Float2ObjectFunction<V>;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Float2ObjectFunction<T>;
        composeChar(arg0: $Char2FloatFunction_): $Char2ObjectFunction<V>;
    }
    /**
     * Values that may be interpreted as {@link $Float2ObjectFunction}.
     */
    export type $Float2ObjectFunction_<V> = ((arg0: number) => V);
    export class $Float2FloatFunction {
        static identity(): $Float2FloatFunction;
    }
    export interface $Float2FloatFunction extends $Function<number, number>, $DoubleUnaryOperator {
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
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        andThenInt(arg0: $Float2IntFunction_): $Float2IntFunction;
        composeInt(arg0: $Int2FloatFunction_): $Int2FloatFunction;
        andThenDouble(arg0: $Float2DoubleFunction_): $Float2DoubleFunction;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Float2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2FloatFunction_<T>): $Reference2FloatFunction<T>;
        andThenLong(arg0: $Float2LongFunction_): $Float2LongFunction;
        andThenByte(arg0: $Float2ByteFunction_): $Float2ByteFunction;
        composeLong(arg0: $Long2FloatFunction_): $Long2FloatFunction;
        andThenShort(arg0: $Float2ShortFunction_): $Float2ShortFunction;
        andThenChar(arg0: $Float2CharFunction_): $Float2CharFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Float2FloatFunction;
        composeObject<T>(arg0: $Object2FloatFunction_<T>): $Object2FloatFunction<T>;
        composeDouble(arg0: $Double2FloatFunction_): $Double2FloatFunction;
        composeByte(arg0: $Byte2FloatFunction_): $Byte2FloatFunction;
        composeShort(arg0: $Short2FloatFunction_): $Short2FloatFunction;
        composeFloat(arg0: $Float2FloatFunction_): $Float2FloatFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Float2ObjectFunction<T>;
        composeChar(arg0: $Char2FloatFunction_): $Char2FloatFunction;
    }
    /**
     * Values that may be interpreted as {@link $Float2FloatFunction}.
     */
    export type $Float2FloatFunction_ = ((arg0: number) => number);
    export class $Float2ReferenceFunction<V> {
    }
    export interface $Float2ReferenceFunction<V> extends $Function<number, V>, $DoubleFunction<V> {
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
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Float2IntFunction;
        composeInt(arg0: $Int2FloatFunction_): $Int2ReferenceFunction<V>;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Float2DoubleFunction;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Float2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2FloatFunction_<T>): $Reference2ReferenceFunction<T, V>;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Float2LongFunction;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Float2ByteFunction;
        composeLong(arg0: $Long2FloatFunction_): $Long2ReferenceFunction<V>;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Float2ShortFunction;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Float2CharFunction;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Float2FloatFunction;
        composeObject<T>(arg0: $Object2FloatFunction_<T>): $Object2ReferenceFunction<T, V>;
        composeDouble(arg0: $Double2FloatFunction_): $Double2ReferenceFunction<V>;
        composeByte(arg0: $Byte2FloatFunction_): $Byte2ReferenceFunction<V>;
        composeShort(arg0: $Short2FloatFunction_): $Short2ReferenceFunction<V>;
        composeFloat(arg0: $Float2FloatFunction_): $Float2ReferenceFunction<V>;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Float2ObjectFunction<T>;
        composeChar(arg0: $Char2FloatFunction_): $Char2ReferenceFunction<V>;
    }
    /**
     * Values that may be interpreted as {@link $Float2ReferenceFunction}.
     */
    export type $Float2ReferenceFunction_<V> = ((arg0: number) => V);
}
