import { $EnumBitField } from "@package/net/caffeinemc/mods/sodium/client/gl/util";
import { $GlIndexType_, $TessellationBinding_, $GlTessellation, $GlPrimitiveType_ } from "@package/net/caffeinemc/mods/sodium/client/gl/tessellation";
import { $GlVertexArray } from "@package/net/caffeinemc/mods/sodium/client/gl/array";
import { $GlFence } from "@package/net/caffeinemc/mods/sodium/client/gl/sync";
import { $GlBufferMapping, $GlBufferMapFlags_, $GlImmutableBuffer, $GlMutableBuffer, $GlBuffer, $GlBufferTarget_, $GlBufferUsage_, $GlBufferStorageFlags_ } from "@package/net/caffeinemc/mods/sodium/client/gl/buffer";
import { $AutoCloseable } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/device" {
    export class $CommandList {
    }
    export interface $CommandList extends $AutoCloseable {
        unmap(arg0: $GlBufferMapping): void;
        flush(): void;
        close(): void;
        bindBuffer(arg0: $GlBufferTarget_, arg1: $GlBuffer): void;
        bindVertexArray(arg0: $GlVertexArray): void;
        createFence(): $GlFence;
        copyBufferSubData(arg0: $GlBuffer, arg1: $GlBuffer, arg2: number, arg3: number, arg4: number): void;
        deleteTessellation(arg0: $GlTessellation): void;
        deleteBuffer(arg0: $GlBuffer): void;
        unbindVertexArray(): void;
        allocateStorage(arg0: $GlMutableBuffer, arg1: number, arg2: $GlBufferUsage_): void;
        flushMappedRange(arg0: $GlBufferMapping, arg1: number, arg2: number): void;
        beginTessellating(arg0: $GlTessellation): $DrawCommandList;
        deleteVertexArray(arg0: $GlVertexArray): void;
        createTessellation(arg0: $GlPrimitiveType_, arg1: $TessellationBinding_[]): $GlTessellation;
        createImmutableBuffer(arg0: number, arg1: $EnumBitField<$GlBufferStorageFlags_>): $GlImmutableBuffer;
        createMutableBuffer(): $GlMutableBuffer;
        mapBuffer(arg0: $GlBuffer, arg1: number, arg2: number, arg3: $EnumBitField<$GlBufferMapFlags_>): $GlBufferMapping;
        uploadData(arg0: $GlMutableBuffer, arg1: $ByteBuffer, arg2: $GlBufferUsage_): void;
    }
    export class $DrawCommandList {
    }
    export interface $DrawCommandList extends $AutoCloseable {
        flush(): void;
        close(): void;
        multiDrawElementsBaseVertex(arg0: $MultiDrawBatch, arg1: $GlIndexType_): void;
        endTessellating(): void;
    }
    export class $MultiDrawBatch {
        clear(): void;
        isEmpty(): boolean;
        "delete"(): void;
        getIndexBufferSize(): number;
        pElementCount: number;
        size: number;
        pElementPointer: number;
        pBaseVertex: number;
        isFilled: boolean;
        constructor(arg0: number);
        get empty(): boolean;
        get indexBufferSize(): number;
    }
}
