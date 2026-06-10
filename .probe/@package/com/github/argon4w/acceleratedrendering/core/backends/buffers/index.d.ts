import { $MutableSize } from "@package/com/github/argon4w/acceleratedrendering/core/utils";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/github/argon4w/acceleratedrendering/core/backends/buffers" {
    export class $IServerBuffer {
    }
    export interface $IServerBuffer {
        data(arg0: $ByteBuffer): void;
        "delete"(): void;
        bind(arg0: number): void;
        bindRange(arg0: number, arg1: number, arg2: number, arg3: number): void;
        bindBase(arg0: number, arg1: number): void;
        getBufferHandle(): number;
        get bufferHandle(): number;
    }
    export class $IClientBuffer {
    }
    export interface $IClientBuffer {
        reserve(arg0: number): number;
        reserve(arg0: number, arg1: boolean): number;
        addressAt(arg0: number): number;
    }
    export class $MappedBuffer extends $MutableBuffer implements $IClientBuffer {
        reset(): void;
        map(): number;
        getAddress(): number;
        reserve(arg0: number, arg1: boolean): number;
        reserve(arg0: number): number;
        getPosition(): number;
        getCurrent(): number;
        addressAt(arg0: number): number;
        constructor(arg0: number);
        get address(): number;
        get position(): number;
        get current(): number;
    }
    export class $MutableBuffer extends $MutableSize implements $IServerBuffer {
        map(arg0: number): number;
        data(arg0: $ByteBuffer): void;
        "delete"(): void;
        bind(arg0: number): void;
        copyTo(arg0: $IServerBuffer): void;
        bindRange(arg0: number, arg1: number, arg2: number, arg3: number): void;
        bindBase(arg0: number, arg1: number): void;
        unmap(): void;
        getBufferHandle(): number;
        constructor(arg0: number, arg1: number);
        get bufferHandle(): number;
    }
}
