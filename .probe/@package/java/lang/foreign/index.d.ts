import { $Consumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $VarHandle, $MethodHandle } from "@package/java/lang/invoke";
import { $Thread, $Object, $AutoCloseable, $Class } from "@package/java/lang";
import { $Spliterator, $List } from "@package/java/util";
import { $Buffer, $ByteBuffer, $ByteOrder } from "@package/java/nio";

declare module "@package/java/lang/foreign" {
    export class $StructLayout {
    }
    export interface $StructLayout extends $GroupLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $GroupLayout;
        withoutName(): $GroupLayout;
    }
    export class $PaddingLayout {
    }
    export interface $PaddingLayout extends $MemoryLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
    }
    export class $Arena {
        static global(): $Arena;
        static ofAuto(): $Arena;
        static ofConfined(): $Arena;
        static ofShared(): $Arena;
    }
    export interface $Arena extends $SegmentAllocator, $AutoCloseable {
        scope(): $MemorySegment$Scope;
        close(): void;
        allocate(arg0: number, arg1: number): $MemorySegment;
    }
    export class $GroupLayout {
    }
    export interface $GroupLayout extends $MemoryLayout {
        memberLayouts(): $List<$MemoryLayout>;
        withByteAlignment(arg0: number): $GroupLayout;
        withoutName(): $GroupLayout;
        withName(arg0: string): $MemoryLayout;
    }
    export class $AddressLayout {
    }
    export interface $AddressLayout extends $ValueLayout {
        withByteAlignment(arg0: number): $AddressLayout;
        withOrder(arg0: $ByteOrder): $AddressLayout;
        withTargetLayout(arg0: $MemoryLayout): $AddressLayout;
        withoutTargetLayout(): $AddressLayout;
        targetLayout(): ($MemoryLayout) | undefined;
        withName(arg0: string): $MemoryLayout;
        withoutName(): $MemoryLayout;
    }
    export class $SequenceLayout {
    }
    export interface $SequenceLayout extends $MemoryLayout {
        flatten(): $SequenceLayout;
        withElementCount(arg0: number): $SequenceLayout;
        elementCount(): number;
        withoutName(): $MemoryLayout;
        elementLayout(): $MemoryLayout;
        reshape(...arg0: number[]): $SequenceLayout;
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
    }
    export class $ValueLayout$OfFloat {
    }
    export interface $ValueLayout$OfFloat extends $ValueLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
        withOrder(arg0: $ByteOrder): $ValueLayout;
    }
    export class $ValueLayout {
        static JAVA_CHAR: $ValueLayout$OfChar;
        static ADDRESS_UNALIGNED: $AddressLayout;
        static JAVA_LONG_UNALIGNED: $ValueLayout$OfLong;
        static JAVA_BOOLEAN: $ValueLayout$OfBoolean;
        static JAVA_INT_UNALIGNED: $ValueLayout$OfInt;
        static JAVA_DOUBLE: $ValueLayout$OfDouble;
        static JAVA_LONG: $ValueLayout$OfLong;
        static JAVA_CHAR_UNALIGNED: $ValueLayout$OfChar;
        static JAVA_FLOAT: $ValueLayout$OfFloat;
        static JAVA_BYTE: $ValueLayout$OfByte;
        static ADDRESS: $AddressLayout;
        static JAVA_FLOAT_UNALIGNED: $ValueLayout$OfFloat;
        static JAVA_SHORT: $ValueLayout$OfShort;
        static JAVA_DOUBLE_UNALIGNED: $ValueLayout$OfDouble;
        static JAVA_SHORT_UNALIGNED: $ValueLayout$OfShort;
        static JAVA_INT: $ValueLayout$OfInt;
    }
    export interface $ValueLayout extends $MemoryLayout {
        carrier(): $Class<never>;
        order(): $ByteOrder;
        arrayElementVarHandle(...arg0: number[]): $VarHandle;
        withOrder(arg0: $ByteOrder): $ValueLayout;
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
    }
    export class $SegmentAllocator {
        static prefixAllocator(arg0: $MemorySegment): $SegmentAllocator;
        static slicingAllocator(arg0: $MemorySegment): $SegmentAllocator;
    }
    export interface $SegmentAllocator {
        allocate(arg0: $ValueLayout$OfFloat, arg1: number): $MemorySegment;
        allocate(arg0: $MemoryLayout): $MemorySegment;
        allocate(arg0: $ValueLayout$OfDouble, arg1: number): $MemorySegment;
        allocate(arg0: $AddressLayout, arg1: $MemorySegment): $MemorySegment;
        allocate(arg0: number, arg1: number): $MemorySegment;
        allocate(arg0: number): $MemorySegment;
        allocate(arg0: $ValueLayout$OfLong, arg1: number): $MemorySegment;
        allocate(arg0: $ValueLayout$OfByte, arg1: number): $MemorySegment;
        allocate(arg0: $ValueLayout$OfChar, arg1: string): $MemorySegment;
        allocate(arg0: $ValueLayout$OfShort, arg1: number): $MemorySegment;
        allocate(arg0: $ValueLayout$OfInt, arg1: number): $MemorySegment;
        allocateUtf8String(arg0: string): $MemorySegment;
        allocateArray(arg0: $ValueLayout$OfShort, ...arg1: number[]): $MemorySegment;
        allocateArray(arg0: $MemoryLayout, arg1: number): $MemorySegment;
        allocateArray(arg0: $ValueLayout$OfByte, ...arg1: number[]): $MemorySegment;
        allocateArray(arg0: $ValueLayout$OfChar, ...arg1: string[]): $MemorySegment;
        allocateArray(arg0: $ValueLayout$OfFloat, ...arg1: number[]): $MemorySegment;
        allocateArray(arg0: $ValueLayout$OfLong, ...arg1: number[]): $MemorySegment;
        allocateArray(arg0: $ValueLayout$OfDouble, ...arg1: number[]): $MemorySegment;
        allocateArray(arg0: $ValueLayout$OfInt, ...arg1: number[]): $MemorySegment;
    }
    /**
     * Values that may be interpreted as {@link $SegmentAllocator}.
     */
    export type $SegmentAllocator_ = ((arg0: number, arg1: number) => $MemorySegment);
    export class $ValueLayout$OfChar {
    }
    export interface $ValueLayout$OfChar extends $ValueLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
        withOrder(arg0: $ByteOrder): $ValueLayout;
    }
    export class $MemoryLayout$PathElement {
        static sequenceElement(arg0: number): $MemoryLayout$PathElement;
        static sequenceElement(): $MemoryLayout$PathElement;
        static sequenceElement(arg0: number, arg1: number): $MemoryLayout$PathElement;
        static dereferenceElement(): $MemoryLayout$PathElement;
        static groupElement(arg0: number): $MemoryLayout$PathElement;
        static groupElement(arg0: string): $MemoryLayout$PathElement;
    }
    export interface $MemoryLayout$PathElement {
    }
    export class $ValueLayout$OfBoolean {
    }
    export interface $ValueLayout$OfBoolean extends $ValueLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
        withOrder(arg0: $ByteOrder): $ValueLayout;
    }
    export class $ValueLayout$OfShort {
    }
    export interface $ValueLayout$OfShort extends $ValueLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
        withOrder(arg0: $ByteOrder): $ValueLayout;
    }
    export class $ValueLayout$OfDouble {
    }
    export interface $ValueLayout$OfDouble extends $ValueLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
        withOrder(arg0: $ByteOrder): $ValueLayout;
    }
    export class $MemorySegment {
        static mismatch(arg0: $MemorySegment, arg1: number, arg2: number, arg3: $MemorySegment, arg4: number, arg5: number): number;
        static copy(arg0: $MemorySegment, arg1: $ValueLayout, arg2: number, arg3: $Object, arg4: number, arg5: number): void;
        static copy(arg0: $MemorySegment, arg1: $ValueLayout, arg2: number, arg3: $MemorySegment, arg4: $ValueLayout, arg5: number, arg6: number): void;
        static copy(arg0: $MemorySegment, arg1: number, arg2: $MemorySegment, arg3: number, arg4: number): void;
        static copy(arg0: $Object, arg1: number, arg2: $MemorySegment, arg3: $ValueLayout, arg4: number, arg5: number): void;
        static ofBuffer(arg0: $Buffer): $MemorySegment;
        static ofArray(arg0: number[]): $MemorySegment;
        static ofArray(arg0: string[]): $MemorySegment;
        static ofArray(arg0: number[]): $MemorySegment;
        static ofArray(arg0: number[]): $MemorySegment;
        static ofArray(arg0: number[]): $MemorySegment;
        static ofArray(arg0: number[]): $MemorySegment;
        static ofArray(arg0: number[]): $MemorySegment;
        static ofAddress(arg0: number): $MemorySegment;
        static NULL: $MemorySegment;
    }
    export interface $MemorySegment {
        scope(): $MemorySegment$Scope;
        get(arg0: $ValueLayout$OfLong, arg1: number): number;
        get(arg0: $ValueLayout$OfChar, arg1: number): string;
        get(arg0: $AddressLayout, arg1: number): $MemorySegment;
        get(arg0: $ValueLayout$OfFloat, arg1: number): number;
        get(arg0: $ValueLayout$OfDouble, arg1: number): number;
        get(arg0: $ValueLayout$OfShort, arg1: number): number;
        get(arg0: $ValueLayout$OfByte, arg1: number): number;
        get(arg0: $ValueLayout$OfBoolean, arg1: number): boolean;
        get(arg0: $ValueLayout$OfInt, arg1: number): number;
        equals(arg0: $Object): boolean;
        hashCode(): number;
        load(): void;
        mismatch(arg0: $MemorySegment): number;
        toArray(arg0: $ValueLayout$OfLong): number[];
        toArray(arg0: $ValueLayout$OfDouble): number[];
        toArray(arg0: $ValueLayout$OfInt): number[];
        toArray(arg0: $ValueLayout$OfChar): string[];
        toArray(arg0: $ValueLayout$OfShort): number[];
        toArray(arg0: $ValueLayout$OfByte): number[];
        toArray(arg0: $ValueLayout$OfFloat): number[];
        fill(arg0: number): $MemorySegment;
        elements(arg0: $MemoryLayout): $Stream<$MemorySegment>;
        spliterator(arg0: $MemoryLayout): $Spliterator<$MemorySegment>;
        set(arg0: $ValueLayout$OfLong, arg1: number, arg2: number): void;
        set(arg0: $ValueLayout$OfDouble, arg1: number, arg2: number): void;
        set(arg0: $AddressLayout, arg1: number, arg2: $MemorySegment): void;
        set(arg0: $ValueLayout$OfByte, arg1: number, arg2: number): void;
        set(arg0: $ValueLayout$OfShort, arg1: number, arg2: number): void;
        set(arg0: $ValueLayout$OfChar, arg1: number, arg2: string): void;
        set(arg0: $ValueLayout$OfInt, arg1: number, arg2: number): void;
        set(arg0: $ValueLayout$OfBoolean, arg1: number, arg2: boolean): void;
        set(arg0: $ValueLayout$OfFloat, arg1: number, arg2: number): void;
        isNative(): boolean;
        address(): number;
        isReadOnly(): boolean;
        isLoaded(): boolean;
        unload(): void;
        force(): void;
        copyFrom(arg0: $MemorySegment): $MemorySegment;
        byteSize(): number;
        isAccessibleBy(arg0: $Thread): boolean;
        asSlice(arg0: number, arg1: $MemoryLayout): $MemorySegment;
        asSlice(arg0: number): $MemorySegment;
        asSlice(arg0: number, arg1: number, arg2: number): $MemorySegment;
        asSlice(arg0: number, arg1: number): $MemorySegment;
        heapBase(): (never) | undefined;
        reinterpret(arg0: number, arg1: $Arena, arg2: $Consumer_<$MemorySegment>): $MemorySegment;
        reinterpret(arg0: $Arena, arg1: $Consumer_<$MemorySegment>): $MemorySegment;
        reinterpret(arg0: number): $MemorySegment;
        asReadOnly(): $MemorySegment;
        isMapped(): boolean;
        asOverlappingSlice(arg0: $MemorySegment): ($MemorySegment) | undefined;
        segmentOffset(arg0: $MemorySegment): number;
        asByteBuffer(): $ByteBuffer;
        getUtf8String(arg0: number): string;
        setUtf8String(arg0: number, arg1: string): void;
        getAtIndex(arg0: $ValueLayout$OfFloat, arg1: number): number;
        getAtIndex(arg0: $ValueLayout$OfChar, arg1: number): string;
        getAtIndex(arg0: $AddressLayout, arg1: number): $MemorySegment;
        getAtIndex(arg0: $ValueLayout$OfDouble, arg1: number): number;
        getAtIndex(arg0: $ValueLayout$OfShort, arg1: number): number;
        getAtIndex(arg0: $ValueLayout$OfLong, arg1: number): number;
        getAtIndex(arg0: $ValueLayout$OfByte, arg1: number): number;
        getAtIndex(arg0: $ValueLayout$OfInt, arg1: number): number;
        getAtIndex(arg0: $ValueLayout$OfBoolean, arg1: number): boolean;
        setAtIndex(arg0: $AddressLayout, arg1: number, arg2: $MemorySegment): void;
        setAtIndex(arg0: $ValueLayout$OfChar, arg1: number, arg2: string): void;
        setAtIndex(arg0: $ValueLayout$OfFloat, arg1: number, arg2: number): void;
        setAtIndex(arg0: $ValueLayout$OfBoolean, arg1: number, arg2: boolean): void;
        setAtIndex(arg0: $ValueLayout$OfShort, arg1: number, arg2: number): void;
        setAtIndex(arg0: $ValueLayout$OfInt, arg1: number, arg2: number): void;
        setAtIndex(arg0: $ValueLayout$OfByte, arg1: number, arg2: number): void;
        setAtIndex(arg0: $ValueLayout$OfLong, arg1: number, arg2: number): void;
        setAtIndex(arg0: $ValueLayout$OfDouble, arg1: number, arg2: number): void;
        get native(): boolean;
        get readOnly(): boolean;
        get loaded(): boolean;
        get mapped(): boolean;
    }
    export class $MemoryLayout {
        static sequenceLayout(arg0: number, arg1: $MemoryLayout): $SequenceLayout;
        static sequenceLayout(arg0: $MemoryLayout): $SequenceLayout;
        static paddingLayout(arg0: number): $PaddingLayout;
        static structLayout(...arg0: $MemoryLayout[]): $StructLayout;
        static unionLayout(...arg0: $MemoryLayout[]): $UnionLayout;
    }
    export interface $MemoryLayout {
        name(): (string) | undefined;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        byteOffset(...arg0: $MemoryLayout$PathElement[]): number;
        select(...arg0: $MemoryLayout$PathElement[]): $MemoryLayout;
        withName(arg0: string): $MemoryLayout;
        byteSize(): number;
        byteAlignment(): number;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
        byteOffsetHandle(...arg0: $MemoryLayout$PathElement[]): $MethodHandle;
        varHandle(...arg0: $MemoryLayout$PathElement[]): $VarHandle;
        sliceHandle(...arg0: $MemoryLayout$PathElement[]): $MethodHandle;
    }
    export class $ValueLayout$OfInt {
    }
    export interface $ValueLayout$OfInt extends $ValueLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
        withOrder(arg0: $ByteOrder): $ValueLayout;
    }
    export class $ValueLayout$OfByte {
    }
    export interface $ValueLayout$OfByte extends $ValueLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
        withOrder(arg0: $ByteOrder): $ValueLayout;
    }
    export class $MemorySegment$Scope {
    }
    export interface $MemorySegment$Scope {
        equals(arg0: $Object): boolean;
        hashCode(): number;
        isAlive(): boolean;
        get alive(): boolean;
    }
    export class $UnionLayout {
    }
    export interface $UnionLayout extends $GroupLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $GroupLayout;
        withoutName(): $GroupLayout;
    }
    export class $ValueLayout$OfLong {
    }
    export interface $ValueLayout$OfLong extends $ValueLayout {
        withName(arg0: string): $MemoryLayout;
        withByteAlignment(arg0: number): $MemoryLayout;
        withoutName(): $MemoryLayout;
        withOrder(arg0: $ByteOrder): $ValueLayout;
    }
}
