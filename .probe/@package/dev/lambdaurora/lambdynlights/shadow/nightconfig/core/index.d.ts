import { $Writer, $File_ } from "@package/java/io";
import { $Supplier_, $IntSupplier_, $Supplier, $LongSupplier_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $Enum, $Object, $Class } from "@package/java/lang";
import { $WriterSupplier_ } from "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core/utils";
import { $Map_, $Map, $Set, $List_, $OptionalInt, $OptionalLong } from "@package/java/util";
import { $ConfigParser, $ConfigWriter } from "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core/io";
export * as io from "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core/io";
export * as utils from "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core/utils";
export * as file from "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core/file";

declare module "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core" {
    export class $EnumGetMethod extends $Enum<$EnumGetMethod> {
        get<T extends $Enum<T>>(value: $Object, enumType: $Class<T>): T;
        static values(): $EnumGetMethod[];
        static valueOf(name: string): $EnumGetMethod;
        validate<T extends $Enum<T>>(value: $Object, enumType: $Class<T>): boolean;
        isCaseSensitive(): boolean;
        isOrdinalOk(): boolean;
        static NAME_IGNORECASE: $EnumGetMethod;
        static ORDINAL_OR_NAME: $EnumGetMethod;
        static ORDINAL_OR_NAME_IGNORECASE: $EnumGetMethod;
        static NAME: $EnumGetMethod;
        get caseSensitive(): boolean;
        get ordinalOk(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnumGetMethod}.
     */
    export type $EnumGetMethod_ = "name" | "name_ignorecase" | "ordinal_or_name" | "ordinal_or_name_ignorecase";
    export class $Config$Entry {
    }
    export interface $Config$Entry extends $UnmodifiableConfig$Entry {
        setValue<T>(arg0: $Object): T;
        set value(value: $Object);
    }
    export class $ConfigFormat<C extends $Config> {
    }
    export interface $ConfigFormat<C extends $Config> {
        isInMemory(): boolean;
        createConcurrentConfig(): C;
        createWriter(): $ConfigWriter;
        supportsComments(): boolean;
        supportsType(type: $Class<never>): boolean;
        createParser(): $ConfigParser<C>;
        initEmptyFile(writer: $Writer): void;
        initEmptyFile(ws: $WriterSupplier_): void;
        initEmptyFile(f: $File_): void;
        initEmptyFile(f: $Path_): void;
        createConfig(): C;
        createConfig(arg0: $Supplier_<$Map<string, $Object>>): C;
        get inMemory(): boolean;
    }
    export class $Config {
        static wrap(map: $Map_<string, $Object>, format: $ConfigFormat<never>): $Config;
        static of(format: $ConfigFormat<$Config>): $Config;
        static of(mapCreator: $Supplier_<$Map<string, $Object>>, format: $ConfigFormat<never>): $Config;
        static copy(config: $UnmodifiableConfig): $Config;
        static copy(config: $UnmodifiableConfig, format: $ConfigFormat<never>): $Config;
        static copy(config: $UnmodifiableConfig, mapCreator: $Supplier_<$Map<string, $Object>>): $Config;
        static copy(config: $UnmodifiableConfig, mapCreator: $Supplier_<$Map<string, $Object>>, format: $ConfigFormat<never>): $Config;
        /**
         * @deprecated
         */
        static inMemoryUniversalConcurrent(): $Config;
        /**
         * @deprecated
         */
        static getDefaultMapCreator<T>(concurrent: boolean, insertionOrderPreserved: boolean): $Supplier<$Map<string, T>>;
        /**
         * @deprecated
         */
        static getDefaultMapCreator<T>(concurrent: boolean): $Supplier<$Map<string, T>>;
        static isInsertionOrderPreserved(): boolean;
        static setInsertionOrderPreserved(orderPreserved: boolean): void;
        static inMemory(): $Config;
        static inMemoryUniversal(): $Config;
        /**
         * @deprecated
         */
        static concurrentCopy(config: $UnmodifiableConfig, format: $ConfigFormat<never>): $Config;
        /**
         * @deprecated
         */
        static concurrentCopy(config: $UnmodifiableConfig): $Config;
        /**
         * @deprecated
         */
        static ofConcurrent(format: $ConfigFormat<$Config>): $Config;
        /**
         * @deprecated
         */
        static inMemoryConcurrent(): $Config;
    }
    export interface $Config extends $UnmodifiableConfig {
        remove<T>(arg0: $List_<string>): T;
        remove<T>(path: string): T;
        update(path: string, value: $Object): void;
        update(path: $List_<string>, value: $Object): void;
        clear(): void;
        add(arg0: $List_<string>, arg1: $Object): boolean;
        add(path: string, value: $Object): boolean;
        addAll(config: $UnmodifiableConfig): void;
        entrySet(): $Set<$Config$Entry>;
        putAll(config: $UnmodifiableConfig): void;
        set<T>(path: string, value: $Object): T;
        set<T>(arg0: $List_<string>, arg1: $Object): T;
        checked(): $Config;
        removeAll(config: $UnmodifiableConfig): void;
        /**
         * @deprecated
         */
        valueMap(): $Map<string, $Object>;
        unmodifiable(): $UnmodifiableConfig;
        createSubConfig(): $Config;
    }
    export class $UnmodifiableConfig {
    }
    export interface $UnmodifiableConfig {
        size(): number;
        get<T>(path: string): T;
        get<T>(path: $List_<string>): T;
        getByte(path: $List_<string>): number;
        getByte(path: string): number;
        getShort(path: string): number;
        getShort(path: $List_<string>): number;
        getChar(path: string): string;
        getChar(path: $List_<string>): string;
        getInt(path: string): number;
        getInt(path: $List_<string>): number;
        getLong(path: $List_<string>): number;
        getLong(path: string): number;
        isEmpty(): boolean;
        apply<T>(path: string): T;
        apply<T>(path: $List_<string>): T;
        contains(path: string): boolean;
        contains(arg0: $List_<string>): boolean;
        entrySet(): $Set<$UnmodifiableConfig$Entry>;
        isNull(path: $List_<string>): boolean;
        isNull(path: string): boolean;
        /**
         * @deprecated
         */
        valueMap(): $Map<string, $Object>;
        getOrElse<T>(path: $List_<string>, defaultValue: T): T;
        getOrElse<T>(path: $List_<string>, defaultValueSupplier: $Supplier_<T>): T;
        getOrElse<T>(path: string, defaultValue: T): T;
        getOrElse<T>(path: string, defaultValueSupplier: $Supplier_<T>): T;
        getEnum<T extends $Enum<T>>(path: string, enumType: $Class<T>, method: $EnumGetMethod_): T;
        getEnum<T extends $Enum<T>>(path: $List_<string>, enumType: $Class<T>): T;
        getEnum<T extends $Enum<T>>(path: $List_<string>, enumType: $Class<T>, method: $EnumGetMethod_): T;
        getEnum<T extends $Enum<T>>(path: string, enumType: $Class<T>): T;
        getRaw<T>(arg0: $List_<string>): T;
        getRaw<T>(path: string): T;
        getOptionalLong(path: string): $OptionalLong;
        getOptionalLong(path: $List_<string>): $OptionalLong;
        getByteOrElse(path: $List_<string>, defaultValue: number): number;
        getByteOrElse(path: string, defaultValue: number): number;
        configFormat(): $ConfigFormat<never>;
        getEnumOrElse<T extends $Enum<T>>(path: $List_<string>, defaultValue: T): T;
        getEnumOrElse<T extends $Enum<T>>(path: $List_<string>, defaultValue: T, method: $EnumGetMethod_): T;
        getEnumOrElse<T extends $Enum<T>>(path: string, defaultValue: T): T;
        getEnumOrElse<T extends $Enum<T>>(path: string, defaultValue: T, method: $EnumGetMethod_): T;
        getEnumOrElse<T extends $Enum<T>>(path: $List_<string>, enumType: $Class<T>, defaultValueSupplier: $Supplier_<T>): T;
        getEnumOrElse<T extends $Enum<T>>(path: $List_<string>, enumType: $Class<T>, method: $EnumGetMethod_, defaultValueSupplier: $Supplier_<T>): T;
        getEnumOrElse<T extends $Enum<T>>(path: string, enumType: $Class<T>, defaultValueSupplier: $Supplier_<T>): T;
        getEnumOrElse<T extends $Enum<T>>(path: string, enumType: $Class<T>, method: $EnumGetMethod_, defaultValueSupplier: $Supplier_<T>): T;
        getOptionalEnum<T extends $Enum<T>>(path: $List_<string>, enumType: $Class<T>): (T) | undefined;
        getOptionalEnum<T extends $Enum<T>>(path: $List_<string>, enumType: $Class<T>, method: $EnumGetMethod_): (T) | undefined;
        getOptionalEnum<T extends $Enum<T>>(path: string, enumType: $Class<T>, method: $EnumGetMethod_): (T) | undefined;
        getOptionalEnum<T extends $Enum<T>>(path: string, enumType: $Class<T>): (T) | undefined;
        getIntOrElse(path: string, defaultValue: number): number;
        getIntOrElse(path: string, defaultValueSupplier: $IntSupplier_): number;
        getIntOrElse(path: $List_<string>, defaultValue: number): number;
        getIntOrElse(path: $List_<string>, defaultValueSupplier: $IntSupplier_): number;
        getCharOrElse(path: $List_<string>, defaultValue: string): string;
        getCharOrElse(path: string, defaultValue: string): string;
        getShortOrElse(path: $List_<string>, defaultValue: number): number;
        getShortOrElse(path: string, defaultValue: number): number;
        getLongOrElse(path: string, defaultValueSupplier: $LongSupplier_): number;
        getLongOrElse(path: $List_<string>, defaultValue: number): number;
        getLongOrElse(path: string, defaultValue: number): number;
        getLongOrElse(path: $List_<string>, defaultValueSupplier: $LongSupplier_): number;
        getOptionalInt(path: $List_<string>): $OptionalInt;
        getOptionalInt(path: string): $OptionalInt;
        getOptional<T>(path: $List_<string>): (T) | undefined;
        getOptional<T>(path: string): (T) | undefined;
        get empty(): boolean;
    }
    export class $UnmodifiableConfig$Entry {
    }
    export interface $UnmodifiableConfig$Entry {
        getByte(): number;
        getShort(): number;
        getChar(): string;
        getInt(): number;
        getLong(): number;
        getValue<T>(): T;
        getKey(): string;
        isNull(): boolean;
        getRawValue<T>(): T;
        getOrElse<T>(defaultValue: T): T;
        getOptionalLong(): $OptionalLong;
        getByteOrElse(defaultValue: number): number;
        getIntOrElse(defaultValue: number): number;
        getCharOrElse(defaultValue: string): string;
        getShortOrElse(defaultValue: number): number;
        getLongOrElse(defaultValue: number): number;
        getOptionalInt(): $OptionalInt;
        getOptional<T>(): (T) | undefined;
        get byte(): number;
        get short(): number;
        get char(): string;
        get int(): number;
        get long(): number;
        get value(): T;
        get key(): string;
        get null(): boolean;
        get rawValue(): T;
        get optionalLong(): $OptionalLong;
        get optionalInt(): $OptionalInt;
        get optional(): (T) | undefined;
    }
}
