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
        limit(): number;
        limit(newLimit: number): void;
        writeInt(v: number): void;
        readInt(): number;
        capacity(): number;
        readBytes(dst: number[]): void;
        readBytes(dst: number[], off: number, len: number): void;
        writeBytes(src: number[]): void;
        writeBytes(src: number[], off: number, len: number): void;
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
        writeValue(v: $Object): void;
        readIntArray(): number[];
        readParcelable<T>(loader: $ClassLoader, clazz: $Class<T>): T;
        writeArray(a: $Object[]): void;
        readByteArray(): number[];
        writeByteArray(b: number[]): void;
        writeByteArray(b: number[], off: number, len: number): void;
        writeCharSequence(cs: $CharSequence): void;
        readCharSequence(): $CharSequence;
        writeLongArray(value: number[]): void;
        readLongArray(): number[];
        readInstant(): $Instant;
        writeInstant(value: $Instant): void;
        writeList(list: $List_<never>): void;
        readUUID(): $UUID;
        writeUUID(value: $UUID_): void;
        readArray<T>(loader: $ClassLoader, clazz: $Class<T>): T[];
        writeString8(s: string): void;
        writeParcelableCreator(p: $Parcelable_): void;
        readParcelableCreator<T>(loader: $ClassLoader, clazz: $Class<T>): $Parcelable$Creator<T>;
        freeData(): void;
        readParcelable0<T>(loader: $ClassLoader, clazz: $Class<T>): T;
        readString16(): string;
        readFloatArray(): number[];
        writeFloatArray(value: number[]): void;
        writeCharArray(value: string[]): void;
        readDoubleArray(): number[];
        writeDoubleArray(value: number[]): void;
        writeBooleanArray(value: boolean[]): void;
        writeShortArray(value: number[]): void;
        readBooleanArray(): boolean[];
        readCharArray(): string[];
        writeString16(s: string): void;
        writeParcelable(p: $Parcelable_, parcelableFlags: number): void;
        readShortArray(): number[];
        writeDataSet(source: $DataSet): void;
        readDataSet(loader: $ClassLoader): $DataSet;
        readString8(): string;
        writeIntArray(value: number[]): void;
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
        getString(key: string, defaultValue: string): string;
        getString(key: string): string;
        putByteArray(key: string, value: number[]): void;
        putList(key: string, value: $List_<never>): void;
        putString(key: string, value: string): void;
        getList<T>(key: string): $List<T>;
        getUUID(key: string, defaultValue: $UUID_): $UUID;
        getUUID(key: string): $UUID;
        getDoubleArray(key: string): number[];
        getShortArray(key: string): number[];
        getFloatArray(key: string): number[];
        writeToParcel(dest: $Parcel, flags: number): void;
        putUUID(key: string, value: $UUID_): void;
        putIntArray(key: string, value: number[]): void;
        putLongArray(key: string, value: number[]): void;
        getByteArray(key: string): number[];
        getLongArray(key: string): number[];
        getIntArray(key: string): number[];
        getDataSet(key: string): $DataSet;
        putDataSet(key: string, value: $DataSet): void;
        putShortArray(key: string, value: number[]): void;
        putFloatArray(key: string, value: number[]): void;
        putDoubleArray(key: string, value: number[]): void;
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
