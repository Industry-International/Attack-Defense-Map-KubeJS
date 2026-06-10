import { $ByteBuffer } from "@package/java/nio";

declare module "@package/xaero/map/deallocator" {
    export class $ByteBufferDeallocator {
        deallocate(arg0: $ByteBuffer, arg1: boolean): void;
        constructor();
    }
}
