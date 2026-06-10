import { $Instant } from "@package/java/time";
import { $Function_, $BiFunction_, $BiConsumer_ } from "@package/java/util/function";
import { $Object, $ClassLoader, $CharSequence, $Class } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_, $Map_, $Map, $Collection, $Map$Entry, $Set } from "@package/java/util";

declare module "@package/icyllis/modernui/util" {
    export class $Parcelable {
    }
    export interface $Parcelable {
        writeToParcel(arg0: $Parcel, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Parcelable}.
     */
    export type $Parcelable_ = ((arg0: $Parcel, arg1: number) => void);
    export class $Parcel {
        position(): number;
        position(newPosition: number): void;
        limit(newLimit: number): void;
        limit(): number;
        writeInt(v: number): void;
        readInt(): number;
        capacity(): number;
        readBytes(dst: number[], off: number, len: number): void;
        readBytes(dst: number[]): void;
        writeBytes(src: number[], off: number, len: number): void;
        writeBytes(src: number[]): void;
        writeChar(v: number): void;
        readChar(): string;
        writeFloat(v: number): void;
        readFloat(): number;
        readBoolean(): boolean;
        readByte(): number;
        readShort(): number;
        readLong(): number;
        readDouble(): number;
        writeBoolean(b: boolean): void;
        writeByte(v: number): void;
        writeShort(v: number): void;
        writeLong(v: number): void;
        writeDouble(v: number): void;
        readString(): string;
        writeString(s: string): void;
        readValue<T>(loader: $ClassLoader, clazz: $Class<T>, elemType: $Class<never>): T;
        readIntArray(): number[];
        writeValue(v: $Object): void;
        writeByteArray(b: number[]): void;
        writeByteArray(b: number[], off: number, len: number): void;
        readByteArray(): number[];
        writeArray(a: $Object[]): void;
        writeList(list: $List_<never>): void;
        writeIntArray(value: number[]): void;
        writeString8(s: string): void;
        readUUID(): $UUID;
        writeUUID(value: $UUID_): void;
        readCharSequence(): $CharSequence;
        readLongArray(): number[];
        readInstant(): $Instant;
        writeCharSequence(cs: $CharSequence): void;
        writeLongArray(value: number[]): void;
        writeInstant(value: $Instant): void;
        readArray<T>(loader: $ClassLoader, clazz: $Class<T>): T[];
        readParcelable<T>(loader: $ClassLoader, clazz: $Class<T>): T;
        readParcelable0<T>(loader: $ClassLoader, clazz: $Class<T>): T;
        readDoubleArray(): number[];
        writeCharArray(value: string[]): void;
        writeDoubleArray(value: number[]): void;
        readShortArray(): number[];
        readCharArray(): string[];
        writeFloatArray(value: number[]): void;
        readFloatArray(): number[];
        readString16(): string;
        writeBooleanArray(value: boolean[]): void;
        readBooleanArray(): boolean[];
        writeString16(s: string): void;
        writeParcelable(p: $Parcelable_, parcelableFlags: number): void;
        writeShortArray(value: number[]): void;
        readDataSet(loader: $ClassLoader): $DataSet;
        writeDataSet(source: $DataSet): void;
        readString8(): string;
        freeData(): void;
        writeParcelableCreator(p: $Parcelable_): void;
        readParcelableCreator<T>(loader: $ClassLoader, clazz: $Class<T>): $Parcelable$Creator<T>;
        constructor();
    }
    export class $Parcelable$Creator<T> {
    }
    export interface $Parcelable$Creator<T> {
        createFromParcel(arg0: $Parcel): T;
    }
    /**
     * Values that may be interpreted as {@link $Parcelable$Creator}.
     */
    export type $Parcelable$Creator_<T> = ((arg0: $Parcel) => T);
    export class $DataSet implements $Map<string, $Object>, $Parcelable {
        remove(key: $Object): $Object;
        size(): number;
        get(key: $Object): $Object;
        put(key: string, value: $Object): $Object;
        values(): $Collection<$Object>;
        getBoolean(key: string, defaultValue: boolean): boolean;
        getBoolean(key: string): boolean;
        putBoolean(key: string, value: boolean): void;
        getByte(key: string, defaultValue: number): number;
        getByte(key: string): number;
        putByte(key: string, value: number): void;
        getShort(key: string, defaultValue: number): number;
        getShort(key: string): number;
        putShort(key: string, value: number): void;
        getChar(key: string, defaultValue: string): string;
        getChar(key: string): string;
        getInt(key: string): number;
        getInt(key: string, defaultValue: number): number;
        putInt(key: string, value: number): void;
        getLong(key: string, defaultValue: number): number;
        getLong(key: string): number;
        putLong(key: string, value: number): void;
        getFloat(key: string, defaultValue: number): number;
        getFloat(key: string): number;
        putFloat(key: string, value: number): void;
        getDouble(key: string, defaultValue: number): number;
        getDouble(key: string): number;
        putDouble(key: string, value: number): void;
        clear(): void;
        getValue<T>(key: string): T;
        getValue<T>(key: string, clazz: $Class<T>): T;
        isEmpty(): boolean;
        entrySet(): $Set<$Map$Entry<string, $Object>>;
        putAll(map: $Map_<string, never>): void;
        putIfAbsent(key: string, value: $Object): $Object;
        containsKey(key: $Object): boolean;
        keySet(): $Set<string>;
        containsValue(value: $Object): boolean;
        getOrDefault(key: $Object, defaultValue: $Object): $Object;
        removeFirst(): $Object;
        removeLast(): $Object;
        getString(key: string): string;
        getString(key: string, defaultValue: string): string;
        putByteArray(key: string, value: number[]): void;
        putString(key: string, value: string): void;
        getIntArray(key: string): number[];
        getByteArray(key: string): number[];
        putIntArray(key: string, value: number[]): void;
        putLongArray(key: string, value: number[]): void;
        getLongArray(key: string): number[];
        getList<T>(key: string): $List<T>;
        getUUID(key: string): $UUID;
        getUUID(key: string, defaultValue: $UUID_): $UUID;
        putUUID(key: string, value: $UUID_): void;
        getDoubleArray(key: string): number[];
        getFloatArray(key: string): number[];
        getShortArray(key: string): number[];
        writeToParcel(dest: $Parcel, flags: number): void;
        putList(key: string, value: $List_<never>): void;
        putShortArray(key: string, value: number[]): void;
        putFloatArray(key: string, value: number[]): void;
        putDoubleArray(key: string, value: number[]): void;
        getDataSet(key: string): $DataSet;
        putDataSet(key: string, value: $DataSet): void;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: string, arg1: $Object, arg2: $Object): boolean;
        replace(arg0: string, arg1: $Object): $Object;
        replaceAll(arg0: $BiFunction_<string, $Object, $Object>): void;
        merge(arg0: string, arg1: $Object, arg2: $BiFunction_<$Object, $Object, $Object>): $Object;
        compute(arg0: string, arg1: $BiFunction_<string, $Object, $Object>): $Object;
        forEach(arg0: $BiConsumer_<string, $Object>): void;
        computeIfAbsent(arg0: string, arg1: $Function_<string, $Object>): $Object;
        computeIfPresent(arg0: string, arg1: $BiFunction_<string, $Object, $Object>): $Object;
        static CREATOR: $Parcelable$ClassLoaderCreator<$DataSet>;
        constructor();
        get empty(): boolean;
    }
    export class $Parcelable$ClassLoaderCreator<T> {
    }
    export interface $Parcelable$ClassLoaderCreator<T> extends $Parcelable$Creator<T> {
        createFromParcel(source: $Parcel): T;
        createFromParcel(arg0: $Parcel, arg1: $ClassLoader): T;
    }
    /**
     * Values that may be interpreted as {@link $Parcelable$ClassLoaderCreator}.
     */
    export type $Parcelable$ClassLoaderCreator_<T> = ((arg0: $Parcel, arg1: $ClassLoader) => T);
}
