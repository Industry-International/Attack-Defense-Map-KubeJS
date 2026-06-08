import { $Float2LongFunction_, $Float2FloatFunction_, $Float2ShortFunction, $Float2BooleanFunction, $Float2FloatFunction, $Float2ObjectFunction_, $Float2IntFunction_, $Float2IntFunction, $Float2ObjectFunction, $Float2ReferenceFunction, $Float2ShortFunction_, $Float2CharFunction, $Float2CharFunction_, $Float2ByteFunction_, $Float2DoubleFunction, $Float2LongFunction, $Float2DoubleFunction_, $Float2ReferenceFunction_, $Float2ByteFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $Int2ByteFunction_, $Int2CharFunction_, $Int2FloatFunction_, $Int2LongFunction, $Int2IntFunction, $Int2ShortFunction, $Int2ObjectFunction_, $Int2CharFunction, $Int2DoubleFunction, $Int2DoubleFunction_, $Int2FloatFunction, $Int2ByteFunction, $Int2ObjectFunction, $Int2ReferenceFunction, $Int2BooleanFunction, $Int2ReferenceFunction_, $Int2IntFunction_, $Int2LongFunction_, $Int2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $IntPredicate, $IntFunction, $IntToDoubleFunction, $Function as $Function$1, $Function_, $IntToLongFunction, $IntUnaryOperator } from "@package/java/util/function";
import { $Long2ReferenceFunction_, $Long2CharFunction, $Long2LongFunction, $Long2ObjectFunction_, $Long2ShortFunction_, $Long2IntFunction, $Long2FloatFunction, $Long2LongFunction_, $Long2ByteFunction, $Long2ShortFunction, $Long2BooleanFunction, $Long2IntFunction_, $Long2ObjectFunction, $Long2CharFunction_, $Long2DoubleFunction, $Long2ReferenceFunction, $Long2DoubleFunction_, $Long2FloatFunction_, $Long2ByteFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Object2LongFunction_, $Reference2DoubleFunction_, $Reference2ShortFunction, $Reference2FloatFunction_, $Object2DoubleFunction, $Reference2IntFunction, $Object2IntFunction, $Object2ShortFunction, $Object2ObjectFunction_, $Reference2IntFunction_, $Object2ShortFunction_, $Object2IntFunction_, $Reference2CharFunction_, $Reference2BooleanFunction, $Object2ByteFunction_, $Object2DoubleFunction_, $Object2ReferenceFunction, $Reference2ByteFunction_, $Reference2DoubleFunction, $Object2BooleanFunction, $Object2LongFunction, $Object2ReferenceFunction_, $Reference2ReferenceFunction, $Reference2LongFunction, $Reference2ShortFunction_, $Reference2ObjectFunction_, $Reference2ObjectFunction, $Object2CharFunction_, $Object2FloatFunction_, $Object2ByteFunction, $Object2FloatFunction, $Reference2ByteFunction, $Reference2ReferenceFunction_, $Reference2LongFunction_, $Reference2CharFunction, $Reference2FloatFunction, $Object2ObjectFunction, $Object2CharFunction } from "@package/it/unimi/dsi/fastutil/objects";
import { $Byte2IntFunction_, $Byte2ReferenceFunction, $Byte2ObjectFunction_, $Byte2FloatFunction, $Byte2LongFunction_, $Byte2DoubleFunction_, $Byte2CharFunction, $Byte2DoubleFunction, $Byte2ObjectFunction, $Byte2ShortFunction, $Byte2ByteFunction_, $Byte2CharFunction_, $Byte2LongFunction, $Byte2ShortFunction_, $Byte2BooleanFunction, $Byte2ReferenceFunction_, $Byte2IntFunction, $Byte2FloatFunction_, $Byte2ByteFunction } from "@package/it/unimi/dsi/fastutil/bytes";
import { $Double2FloatFunction, $Double2IntFunction, $Double2IntFunction_, $Double2LongFunction, $Double2DoubleFunction, $Double2ObjectFunction, $Double2ByteFunction_, $Double2ByteFunction, $Double2ReferenceFunction, $Double2BooleanFunction, $Double2CharFunction_, $Double2ObjectFunction_, $Double2CharFunction, $Double2ReferenceFunction_, $Double2ShortFunction, $Double2FloatFunction_, $Double2LongFunction_, $Double2ShortFunction_, $Double2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Boolean2LongFunction_, $Boolean2FloatFunction_, $Boolean2ReferenceFunction_, $Boolean2ShortFunction_, $Boolean2CharFunction_, $Boolean2IntFunction_, $Boolean2ObjectFunction_, $Boolean2ByteFunction_, $Boolean2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Object } from "@package/java/lang";
import { $Function } from "@package/it/unimi/dsi/fastutil";
import { $Short2IntFunction_, $Short2ObjectFunction, $Short2IntFunction, $Short2LongFunction, $Short2LongFunction_, $Short2FloatFunction_, $Short2DoubleFunction, $Short2ReferenceFunction_, $Short2FloatFunction, $Short2ShortFunction, $Short2BooleanFunction, $Short2ByteFunction, $Short2ObjectFunction_, $Short2ReferenceFunction, $Short2ShortFunction_, $Short2DoubleFunction_, $Short2ByteFunction_, $Short2CharFunction_, $Short2CharFunction } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/it/unimi/dsi/fastutil/chars" {
    export class $Char2DoubleFunction {
    }
    export interface $Char2DoubleFunction extends $Function<string, number>, $IntToDoubleFunction {
        remove(arg0: string): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: string): number;
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, string>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<string, T>;
        andThenInt(arg0: $Double2IntFunction_): $Char2IntFunction;
        composeInt(arg0: $Int2CharFunction_): $Int2DoubleFunction;
        andThenDouble(arg0: $Double2DoubleFunction_): $Char2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Char2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2CharFunction_<T>): $Reference2DoubleFunction<T>;
        andThenLong(arg0: $Double2LongFunction_): $Char2LongFunction;
        andThenByte(arg0: $Double2ByteFunction_): $Char2ByteFunction;
        composeLong(arg0: $Long2CharFunction_): $Long2DoubleFunction;
        andThenShort(arg0: $Double2ShortFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Double2CharFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Char2FloatFunction;
        composeObject<T>(arg0: $Object2CharFunction_<T>): $Object2DoubleFunction<T>;
        composeDouble(arg0: $Double2CharFunction_): $Double2DoubleFunction;
        composeByte(arg0: $Byte2CharFunction_): $Byte2DoubleFunction;
        composeShort(arg0: $Short2CharFunction_): $Short2DoubleFunction;
        composeFloat(arg0: $Float2CharFunction_): $Float2DoubleFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Char2ObjectFunction<T>;
        composeChar(arg0: $Char2CharFunction_): $Char2DoubleFunction;
    }
    /**
     * Values that may be interpreted as {@link $Char2DoubleFunction}.
     */
    export type $Char2DoubleFunction_ = ((arg0: string) => number);
    export class $Char2CharFunction {
        static identity(): $Char2CharFunction;
    }
    export interface $Char2CharFunction extends $Function<string, string>, $IntUnaryOperator {
        remove(arg0: string): string;
        /**
         * @deprecated
         */
        remove(arg0: $Object): string;
        get(arg0: string): string;
        put(arg0: string, arg1: string): string;
        /**
         * @deprecated
         */
        put(arg0: string, arg1: string): string;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: string): string;
        getOrDefault(arg0: string, arg1: string): string;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, string>): $Function$1<T, string>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<string, T>): $Function$1<string, T>;
        andThenInt(arg0: $Char2IntFunction_): $Char2IntFunction;
        composeInt(arg0: $Int2CharFunction_): $Int2CharFunction;
        andThenDouble(arg0: $Char2DoubleFunction_): $Char2DoubleFunction;
        defaultReturnValue(): string;
        defaultReturnValue(arg0: string): void;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Char2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2CharFunction_<T>): $Reference2CharFunction<T>;
        andThenLong(arg0: $Char2LongFunction_): $Char2LongFunction;
        andThenByte(arg0: $Char2ByteFunction_): $Char2ByteFunction;
        composeLong(arg0: $Long2CharFunction_): $Long2CharFunction;
        andThenShort(arg0: $Char2ShortFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Char2CharFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Char2FloatFunction;
        composeObject<T>(arg0: $Object2CharFunction_<T>): $Object2CharFunction<T>;
        composeDouble(arg0: $Double2CharFunction_): $Double2CharFunction;
        composeByte(arg0: $Byte2CharFunction_): $Byte2CharFunction;
        composeShort(arg0: $Short2CharFunction_): $Short2CharFunction;
        composeFloat(arg0: $Float2CharFunction_): $Float2CharFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Char2ObjectFunction<T>;
        composeChar(arg0: $Char2CharFunction_): $Char2CharFunction;
    }
    /**
     * Values that may be interpreted as {@link $Char2CharFunction}.
     */
    export type $Char2CharFunction_ = ((arg0: string) => string);
    export class $Char2ObjectFunction<V> {
    }
    export interface $Char2ObjectFunction<V> extends $Function<string, V>, $IntFunction<V> {
        remove(arg0: string): V;
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: string): V;
        /**
         * @deprecated
         */
        put(arg0: string, arg1: V): V;
        put(arg0: string, arg1: V): V;
        /**
         * @deprecated
         */
        apply(arg0: number): V;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        getOrDefault(arg0: string, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, string>): $Function$1<T, V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Char2IntFunction;
        composeInt(arg0: $Int2CharFunction_): $Int2ObjectFunction<V>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Char2DoubleFunction;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Char2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2CharFunction_<T>): $Reference2ObjectFunction<T, V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Char2LongFunction;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Char2ByteFunction;
        composeLong(arg0: $Long2CharFunction_): $Long2ObjectFunction<V>;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Char2ShortFunction;
        andThenChar(arg0: $Object2CharFunction_<V>): $Char2CharFunction;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Char2FloatFunction;
        composeObject<T>(arg0: $Object2CharFunction_<T>): $Object2ObjectFunction<T, V>;
        composeDouble(arg0: $Double2CharFunction_): $Double2ObjectFunction<V>;
        composeByte(arg0: $Byte2CharFunction_): $Byte2ObjectFunction<V>;
        composeShort(arg0: $Short2CharFunction_): $Short2ObjectFunction<V>;
        composeFloat(arg0: $Float2CharFunction_): $Float2ObjectFunction<V>;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Char2ObjectFunction<T>;
        composeChar(arg0: $Char2CharFunction_): $Char2ObjectFunction<V>;
    }
    /**
     * Values that may be interpreted as {@link $Char2ObjectFunction}.
     */
    export type $Char2ObjectFunction_<V> = ((arg0: string) => V);
    export class $Char2BooleanFunction {
    }
    export interface $Char2BooleanFunction extends $Function<string, boolean>, $IntPredicate {
        remove(arg0: string): boolean;
        /**
         * @deprecated
         */
        get(arg0: $Object): boolean;
        get(arg0: string): boolean;
        /**
         * @deprecated
         */
        put(arg0: string, arg1: boolean): boolean;
        put(arg0: string, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        test(arg0: number): boolean;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        getOrDefault(arg0: string, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, string>): $Function$1<T, boolean>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<boolean, T>): $Function$1<string, T>;
        andThenInt(arg0: $Boolean2IntFunction_): $Char2IntFunction;
        composeInt(arg0: $Int2CharFunction_): $Int2BooleanFunction;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Char2DoubleFunction;
        defaultReturnValue(arg0: boolean): void;
        defaultReturnValue(): boolean;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Char2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2CharFunction_<T>): $Reference2BooleanFunction<T>;
        andThenLong(arg0: $Boolean2LongFunction_): $Char2LongFunction;
        andThenByte(arg0: $Boolean2ByteFunction_): $Char2ByteFunction;
        composeLong(arg0: $Long2CharFunction_): $Long2BooleanFunction;
        andThenShort(arg0: $Boolean2ShortFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Boolean2CharFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Char2FloatFunction;
        composeObject<T>(arg0: $Object2CharFunction_<T>): $Object2BooleanFunction<T>;
        composeDouble(arg0: $Double2CharFunction_): $Double2BooleanFunction;
        composeByte(arg0: $Byte2CharFunction_): $Byte2BooleanFunction;
        composeShort(arg0: $Short2CharFunction_): $Short2BooleanFunction;
        composeFloat(arg0: $Float2CharFunction_): $Float2BooleanFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Char2ObjectFunction<T>;
        composeChar(arg0: $Char2CharFunction_): $Char2BooleanFunction;
    }
    /**
     * Values that may be interpreted as {@link $Char2BooleanFunction}.
     */
    export type $Char2BooleanFunction_ = ((arg0: string) => boolean);
    export class $Char2LongFunction {
    }
    export interface $Char2LongFunction extends $Function<string, number>, $IntToLongFunction {
        remove(arg0: string): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: string): number;
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsLong(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, string>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<string, T>;
        andThenInt(arg0: $Long2IntFunction_): $Char2IntFunction;
        composeInt(arg0: $Int2CharFunction_): $Int2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Char2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Char2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2CharFunction_<T>): $Reference2LongFunction<T>;
        andThenLong(arg0: $Long2LongFunction_): $Char2LongFunction;
        andThenByte(arg0: $Long2ByteFunction_): $Char2ByteFunction;
        composeLong(arg0: $Long2CharFunction_): $Long2LongFunction;
        andThenShort(arg0: $Long2ShortFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Long2CharFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Char2FloatFunction;
        composeObject<T>(arg0: $Object2CharFunction_<T>): $Object2LongFunction<T>;
        composeDouble(arg0: $Double2CharFunction_): $Double2LongFunction;
        composeByte(arg0: $Byte2CharFunction_): $Byte2LongFunction;
        composeShort(arg0: $Short2CharFunction_): $Short2LongFunction;
        composeFloat(arg0: $Float2CharFunction_): $Float2LongFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Char2ObjectFunction<T>;
        composeChar(arg0: $Char2CharFunction_): $Char2LongFunction;
    }
    /**
     * Values that may be interpreted as {@link $Char2LongFunction}.
     */
    export type $Char2LongFunction_ = ((arg0: string) => number);
    export class $Char2IntFunction {
    }
    export interface $Char2IntFunction extends $Function<string, number>, $IntUnaryOperator {
        remove(arg0: string): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: string): number;
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, string>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<string, T>;
        andThenInt(arg0: $Int2IntFunction_): $Char2IntFunction;
        composeInt(arg0: $Int2CharFunction_): $Int2IntFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Char2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Char2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2CharFunction_<T>): $Reference2IntFunction<T>;
        andThenLong(arg0: $Int2LongFunction_): $Char2LongFunction;
        andThenByte(arg0: $Int2ByteFunction_): $Char2ByteFunction;
        composeLong(arg0: $Long2CharFunction_): $Long2IntFunction;
        andThenShort(arg0: $Int2ShortFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Int2CharFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Char2FloatFunction;
        composeObject<T>(arg0: $Object2CharFunction_<T>): $Object2IntFunction<T>;
        composeDouble(arg0: $Double2CharFunction_): $Double2IntFunction;
        composeByte(arg0: $Byte2CharFunction_): $Byte2IntFunction;
        composeShort(arg0: $Short2CharFunction_): $Short2IntFunction;
        composeFloat(arg0: $Float2CharFunction_): $Float2IntFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Char2ObjectFunction<T>;
        composeChar(arg0: $Char2CharFunction_): $Char2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Char2IntFunction}.
     */
    export type $Char2IntFunction_ = ((arg0: string) => number);
    export class $Char2ReferenceFunction<V> {
    }
    export interface $Char2ReferenceFunction<V> extends $Function<string, V>, $IntFunction<V> {
        remove(arg0: string): V;
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: string): V;
        /**
         * @deprecated
         */
        put(arg0: string, arg1: V): V;
        put(arg0: string, arg1: V): V;
        /**
         * @deprecated
         */
        apply(arg0: number): V;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        getOrDefault(arg0: string, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, string>): $Function$1<T, V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Char2IntFunction;
        composeInt(arg0: $Int2CharFunction_): $Int2ReferenceFunction<V>;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Char2DoubleFunction;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Char2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2CharFunction_<T>): $Reference2ReferenceFunction<T, V>;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Char2LongFunction;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Char2ByteFunction;
        composeLong(arg0: $Long2CharFunction_): $Long2ReferenceFunction<V>;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Char2ShortFunction;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Char2CharFunction;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Char2FloatFunction;
        composeObject<T>(arg0: $Object2CharFunction_<T>): $Object2ReferenceFunction<T, V>;
        composeDouble(arg0: $Double2CharFunction_): $Double2ReferenceFunction<V>;
        composeByte(arg0: $Byte2CharFunction_): $Byte2ReferenceFunction<V>;
        composeShort(arg0: $Short2CharFunction_): $Short2ReferenceFunction<V>;
        composeFloat(arg0: $Float2CharFunction_): $Float2ReferenceFunction<V>;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Char2ObjectFunction<T>;
        composeChar(arg0: $Char2CharFunction_): $Char2ReferenceFunction<V>;
    }
    /**
     * Values that may be interpreted as {@link $Char2ReferenceFunction}.
     */
    export type $Char2ReferenceFunction_<V> = ((arg0: string) => V);
    export class $Char2ByteFunction {
    }
    export interface $Char2ByteFunction extends $Function<string, number>, $IntUnaryOperator {
        remove(arg0: string): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: string): number;
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, string>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<string, T>;
        andThenInt(arg0: $Byte2IntFunction_): $Char2IntFunction;
        composeInt(arg0: $Int2CharFunction_): $Int2ByteFunction;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Char2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Char2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2CharFunction_<T>): $Reference2ByteFunction<T>;
        andThenLong(arg0: $Byte2LongFunction_): $Char2LongFunction;
        andThenByte(arg0: $Byte2ByteFunction_): $Char2ByteFunction;
        composeLong(arg0: $Long2CharFunction_): $Long2ByteFunction;
        andThenShort(arg0: $Byte2ShortFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Char2FloatFunction;
        composeObject<T>(arg0: $Object2CharFunction_<T>): $Object2ByteFunction<T>;
        composeDouble(arg0: $Double2CharFunction_): $Double2ByteFunction;
        composeByte(arg0: $Byte2CharFunction_): $Byte2ByteFunction;
        composeShort(arg0: $Short2CharFunction_): $Short2ByteFunction;
        composeFloat(arg0: $Float2CharFunction_): $Float2ByteFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Char2ObjectFunction<T>;
        composeChar(arg0: $Char2CharFunction_): $Char2ByteFunction;
    }
    /**
     * Values that may be interpreted as {@link $Char2ByteFunction}.
     */
    export type $Char2ByteFunction_ = ((arg0: string) => number);
    export class $Char2ShortFunction {
    }
    export interface $Char2ShortFunction extends $Function<string, number>, $IntUnaryOperator {
        remove(arg0: string): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: string): number;
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, string>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<string, T>;
        andThenInt(arg0: $Short2IntFunction_): $Char2IntFunction;
        composeInt(arg0: $Int2CharFunction_): $Int2ShortFunction;
        andThenDouble(arg0: $Short2DoubleFunction_): $Char2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Char2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2CharFunction_<T>): $Reference2ShortFunction<T>;
        andThenLong(arg0: $Short2LongFunction_): $Char2LongFunction;
        andThenByte(arg0: $Short2ByteFunction_): $Char2ByteFunction;
        composeLong(arg0: $Long2CharFunction_): $Long2ShortFunction;
        andThenShort(arg0: $Short2ShortFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Char2FloatFunction;
        composeObject<T>(arg0: $Object2CharFunction_<T>): $Object2ShortFunction<T>;
        composeDouble(arg0: $Double2CharFunction_): $Double2ShortFunction;
        composeByte(arg0: $Byte2CharFunction_): $Byte2ShortFunction;
        composeShort(arg0: $Short2CharFunction_): $Short2ShortFunction;
        composeFloat(arg0: $Float2CharFunction_): $Float2ShortFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Char2ObjectFunction<T>;
        composeChar(arg0: $Char2CharFunction_): $Char2ShortFunction;
    }
    /**
     * Values that may be interpreted as {@link $Char2ShortFunction}.
     */
    export type $Char2ShortFunction_ = ((arg0: string) => number);
    export class $Char2FloatFunction {
    }
    export interface $Char2FloatFunction extends $Function<string, number>, $IntToDoubleFunction {
        remove(arg0: string): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: string): number;
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: string, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, string>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<string, T>;
        andThenInt(arg0: $Float2IntFunction_): $Char2IntFunction;
        composeInt(arg0: $Int2CharFunction_): $Int2FloatFunction;
        andThenDouble(arg0: $Float2DoubleFunction_): $Char2DoubleFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Char2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2CharFunction_<T>): $Reference2FloatFunction<T>;
        andThenLong(arg0: $Float2LongFunction_): $Char2LongFunction;
        andThenByte(arg0: $Float2ByteFunction_): $Char2ByteFunction;
        composeLong(arg0: $Long2CharFunction_): $Long2FloatFunction;
        andThenShort(arg0: $Float2ShortFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Float2CharFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Char2FloatFunction;
        composeObject<T>(arg0: $Object2CharFunction_<T>): $Object2FloatFunction<T>;
        composeDouble(arg0: $Double2CharFunction_): $Double2FloatFunction;
        composeByte(arg0: $Byte2CharFunction_): $Byte2FloatFunction;
        composeShort(arg0: $Short2CharFunction_): $Short2FloatFunction;
        composeFloat(arg0: $Float2CharFunction_): $Float2FloatFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Char2ObjectFunction<T>;
        composeChar(arg0: $Char2CharFunction_): $Char2FloatFunction;
    }
    /**
     * Values that may be interpreted as {@link $Char2FloatFunction}.
     */
    export type $Char2FloatFunction_ = ((arg0: string) => number);
}
