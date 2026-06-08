import { $Matrix4f, $Matrix3f } from "@package/org/joml";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory" {
    export class $IMemoryInterface {
    }
    export interface $IMemoryInterface {
        putByte(arg0: number, arg1: number): void;
        putShort(arg0: number, arg1: number): void;
        putInt(arg0: number, arg1: number): void;
        putInt(arg0: number, arg1: number): void;
        putFloat(arg0: number, arg1: number): void;
        at(arg0: number): $IMemoryInterface;
        putMatrix4f(arg0: number, arg1: $Matrix4f): void;
        putMatrix3f(arg0: number, arg1: $Matrix3f): void;
        putNormal(arg0: number, arg1: number): void;
    }
    export class $IMemoryLayout<T> {
    }
    export interface $IMemoryLayout<T> {
        getSize(): number;
        getElement(arg0: T): $IMemoryInterface;
        getElementOffset(arg0: T): number;
        containsElement(arg0: T): boolean;
        get size(): number;
    }
}
