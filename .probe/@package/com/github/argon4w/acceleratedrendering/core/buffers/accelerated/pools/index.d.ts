import { $MutableSize, $SimpleResetPool } from "@package/com/github/argon4w/acceleratedrendering/core/utils";
import { $IMemoryInterface } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory";
import { $MappedBuffer, $MutableBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/backends/buffers";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexFormat$Mode_ } from "@package/com/mojang/blaze3d/vertex";
import { $Comparable } from "@package/java/lang";
export * as meshes from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools/meshes";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools" {
    export class $DrawContextPool extends $SimpleResetPool<$DrawContextPool$DrawContext, $MappedBuffer> {
        constructor(arg0: number);
    }
    export class $DrawContextPool$DrawContext implements $Comparable<$DrawContextPool$DrawContext> {
        compareTo(arg0: $DrawContextPool$DrawContext): number;
        getRenderType(): $RenderType;
        drawElements(arg0: $VertexFormat$Mode_): void;
        setRenderType(arg0: $RenderType): void;
        bindComputeBuffers(arg0: $ElementBufferPool$ElementSegment): void;
        getCommandOffset(): number;
        static ELEMENT_COUNT_INDEX: number;
        static INDIRECT_BASE_INSTANCE: $IMemoryInterface;
        static INDIRECT_BASE_INDEX: $IMemoryInterface;
        static INDIRECT_FIRST_INDEX: $IMemoryInterface;
        static INDIRECT_COUNT: $IMemoryInterface;
        static INDIRECT_INSTANCE_COUNT: $IMemoryInterface;
        constructor(arg0: $DrawContextPool, arg1: number);
        get commandOffset(): number;
    }
    export class $ElementBufferPool extends $SimpleResetPool<$ElementBufferPool$ElementSegment, void> {
        test(arg0: $ElementBufferPool$ElementSegment): boolean;
        prepare(): void;
        getElementBufferOut(): $MutableBuffer;
        constructor(arg0: number);
        get elementBufferOut(): $MutableBuffer;
    }
    export class $StagingBufferPool$StagingBuffer extends $MappedBuffer {
        getOffset(): number;
        allocateOffset(): void;
        constructor(arg0: $StagingBufferPool);
        get offset(): number;
    }
    export class $ElementBufferPool$ElementSegment extends $MutableSize {
        getBytes(): number;
        getOffset(): number;
        allocateOffset(): void;
        countElements(arg0: number): void;
        constructor(arg0: $ElementBufferPool);
        get bytes(): number;
        get offset(): number;
    }
    export class $StagingBufferPool extends $SimpleResetPool<$StagingBufferPool$StagingBuffer, void> {
        test(arg0: $StagingBufferPool$StagingBuffer): boolean;
        prepare(): void;
        getBufferOut(): $MutableBuffer;
        constructor(arg0: number);
        get bufferOut(): $MutableBuffer;
    }
}
