import { $Int2ReferenceMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $MeshUploaderPool$MeshUploader } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools/meshes";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $LayerKey } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers";
import { $IBufferEnvironment } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/environments";
import { $Map } from "@package/java/util";
import { $ILayerStorage } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/storage";
import { $AcceleratedBufferBuilder } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $ILayerFunction } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/functions";
import { $DrawContextPool$DrawContext, $StagingBufferPool$StagingBuffer, $ElementBufferPool$ElementSegment } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools";
export * as layers from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers";
export * as renderers from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
export * as pools from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools";
export * as builders from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated" {
    export class $IAccelerationHolder {
    }
    export interface $IAccelerationHolder {
        getAccelerated(): $AcceleratedBufferBuilder;
        initAcceleration(arg0: $RenderType): $VertexConsumer;
        get accelerated(): $AcceleratedBufferBuilder;
    }
    export class $AcceleratedRingBuffers$Buffers {
        reset(): void;
        "delete"(): void;
        getSize(): number;
        prepare(): void;
        setUsed(): void;
        getVertexSize(): number;
        getSharing(): number;
        isFree(): boolean;
        getFunctions(): $Int2ReferenceMap<$ILayerFunction>;
        setInFlight(): void;
        getVertexBuffer(): $StagingBufferPool$StagingBuffer;
        getDrawContext(): $DrawContextPool$DrawContext;
        getElementSegment(): $ElementBufferPool$ElementSegment;
        getBuilders(): $Map<$LayerKey, $AcceleratedBufferBuilder>;
        bindElementBuffer(arg0: $ElementBufferPool$ElementSegment): void;
        bindDrawBuffers(): void;
        getVaryingBuffer(): $StagingBufferPool$StagingBuffer;
        reserveSharing(): number;
        getMeshUploader(): $MeshUploaderPool$MeshUploader;
        getLayers(): $Int2ReferenceMap<$ILayerStorage>;
        getBufferEnvironment(): $IBufferEnvironment;
        bindTransformBuffers(): void;
        unbindVertexArray(): void;
        static VERTEX_BUFFER_OUT_INDEX: number;
        static VARYING_BUFFER_OUT_INDEX: number;
        static ELEMENT_BUFFER_INDEX: number;
        static SHARING_BUFFER_INDEX: number;
        constructor(arg0: $IBufferEnvironment);
        get size(): number;
        get vertexSize(): number;
        get sharing(): number;
        get free(): boolean;
        get functions(): $Int2ReferenceMap<$ILayerFunction>;
        get vertexBuffer(): $StagingBufferPool$StagingBuffer;
        get drawContext(): $DrawContextPool$DrawContext;
        get elementSegment(): $ElementBufferPool$ElementSegment;
        get builders(): $Map<$LayerKey, $AcceleratedBufferBuilder>;
        get varyingBuffer(): $StagingBufferPool$StagingBuffer;
        get meshUploader(): $MeshUploaderPool$MeshUploader;
        get layers(): $Int2ReferenceMap<$ILayerStorage>;
        get bufferEnvironment(): $IBufferEnvironment;
    }
}
