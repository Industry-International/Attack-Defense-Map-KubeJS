import { $Serializable } from "@package/java/io";
import { $Charset } from "@package/java/nio/charset";
import { $CharSequence } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/google/common/hash" {
    export class $PrimitiveSink {
    }
    export interface $PrimitiveSink {
        putBoolean(b: boolean): $PrimitiveSink;
        putByte(b: number): $PrimitiveSink;
        putShort(s: number): $PrimitiveSink;
        putChar(c: string): $PrimitiveSink;
        putInt(i: number): $PrimitiveSink;
        putLong(l: number): $PrimitiveSink;
        putFloat(f: number): $PrimitiveSink;
        putDouble(d: number): $PrimitiveSink;
        putUnencodedChars(charSequence: $CharSequence): $PrimitiveSink;
        putString(charSequence: $CharSequence, charset: $Charset): $PrimitiveSink;
        putBytes(bytes: $ByteBuffer): $PrimitiveSink;
        putBytes(bytes: number[]): $PrimitiveSink;
        putBytes(bytes: number[], off: number, len: number): $PrimitiveSink;
    }
    export class $HashFunction {
    }
    export interface $HashFunction {
        bits(): number;
        hashUnencodedChars(input: $CharSequence): $HashCode;
        hashObject<T>(instance: T, funnel: $Funnel_<T>): $HashCode;
        hashInt(input: number): $HashCode;
        hashLong(input: number): $HashCode;
        hashString(input: $CharSequence, charset: $Charset): $HashCode;
        newHasher(): $Hasher;
        newHasher(expectedInputSize: number): $Hasher;
        hashBytes(input: number[], off: number, len: number): $HashCode;
        hashBytes(input: number[]): $HashCode;
        hashBytes(input: $ByteBuffer): $HashCode;
    }
    export class $HashCode {
        bits(): number;
        writeBytesTo(dest: number[], offset: number, maxLength: number): number;
        static fromString(string: string): $HashCode;
        padToLong(): number;
        asLong(): number;
        static fromInt(hash: number): $HashCode;
        static fromLong(hash: number): $HashCode;
        static fromBytes(bytes: number[]): $HashCode;
        asInt(): number;
        asBytes(): number[];
    }
    export class $Funnel<T> {
    }
    export interface $Funnel<T> extends $Serializable {
        funnel(from: T, into: $PrimitiveSink): void;
    }
    /**
     * Values that may be interpreted as {@link $Funnel}.
     */
    export type $Funnel_<T> = ((from: T, into: $PrimitiveSink) => void);
    export class $Hasher {
    }
    export interface $Hasher extends $PrimitiveSink {
        /**
         * @deprecated
         */
        hashCode(): number;
        putBoolean(b: boolean): $Hasher;
        putChar(c: string): $Hasher;
        hash(): $HashCode;
        putObject<T>(instance: T, funnel: $Funnel_<T>): $Hasher;
        putUnencodedChars(charSequence: $CharSequence): $Hasher;
        putBytes(bytes: number[], off: number, len: number): $Hasher;
        putByte(b: number): $PrimitiveSink;
        putShort(s: number): $PrimitiveSink;
        putInt(i: number): $PrimitiveSink;
        putLong(l: number): $PrimitiveSink;
        putFloat(f: number): $PrimitiveSink;
        putDouble(d: number): $PrimitiveSink;
        putString(charSequence: $CharSequence, charset: $Charset): $PrimitiveSink;
        putBytes(bytes: $ByteBuffer): $PrimitiveSink;
        putBytes(bytes: $ByteBuffer): $PrimitiveSink;
    }
}
