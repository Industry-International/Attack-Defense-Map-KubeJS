import { $IMeshInfoCache } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools/meshes";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Collection_ } from "@package/java/util";
import { $AcceleratedRingBuffers$Buffers } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated";
import { $AcceleratedBufferBuilder } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $StagingBufferPool$StagingBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools";

declare module "@package/com/github/argon4w/acceleratedrendering/core/programs/dispatchers" {
    export class $MeshUploadingProgramDispatcher {
        dispatch(arg0: $Collection_<$AcceleratedBufferBuilder>, arg1: $AcceleratedRingBuffers$Buffers): void;
        handler$chc000$acceleratedrendering$addIrisData(arg0: $Collection_<any>, arg1: $AcceleratedRingBuffers$Buffers, arg2: $CallbackInfo, arg3: $IMeshInfoCache, arg4: $AcceleratedBufferBuilder, arg5: number, arg6: number, arg7: number): void;
        resetOverride(): void;
        static SPARSE_MESH_BUFFER_INDEX: number;
        static MESH_BUFFER_INDEX: number;
        constructor();
    }
    export class $TransformProgramDispatcher {
        dispatch(arg0: $AcceleratedBufferBuilder, arg1: $StagingBufferPool$StagingBuffer, arg2: $StagingBufferPool$StagingBuffer, arg3: number, arg4: number, arg5: number): number;
        dispatch(arg0: $Collection_<$AcceleratedBufferBuilder>): void;
        resetOverride(): void;
        static VERTEX_BUFFER_IN_INDEX: number;
        static VARYING_BUFFER_IN_INDEX: number;
        constructor();
    }
    export class $IPolygonProgramDispatcher {
    }
    export interface $IPolygonProgramDispatcher {
        dispatch(arg0: $AcceleratedBufferBuilder): number;
    }
    /**
     * Values that may be interpreted as {@link $IPolygonProgramDispatcher}.
     */
    export type $IPolygonProgramDispatcher_ = ((arg0: $AcceleratedBufferBuilder) => number);
}
