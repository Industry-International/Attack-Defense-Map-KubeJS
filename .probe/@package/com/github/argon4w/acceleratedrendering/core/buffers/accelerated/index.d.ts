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
        initAcceleration(arg0: $RenderType): $VertexConsumer;
        getAccelerated(): $AcceleratedBufferBuilder;
        get accelerated(): $AcceleratedBufferBuilder;
    }
    export class $AcceleratedRingBuffers$Buffers {
        reset(): void;
        "delete"(): void;
        getSize(): number;
        prepare(): void;
        isFree(): boolean;
        setUsed(): void;
        getFunctions(): $Int2ReferenceMap<$ILayerFunction>;
        getVertexSize(): number;
        getLayers(): $Int2ReferenceMap<$ILayerStorage>;
        getSharing(): number;
        setInFlight(): void;
        bindElementBuffer(arg0: $ElementBufferPool$ElementSegment): void;
        getVertexBuffer(): $StagingBufferPool$StagingBuffer;
        getBuilders(): $Map<$LayerKey, $AcceleratedBufferBuilder>;
        getDrawContext(): $DrawContextPool$DrawContext;
        getVaryingBuffer(): $StagingBufferPool$StagingBuffer;
        bindDrawBuffers(): void;
        getElementSegment(): $ElementBufferPool$ElementSegment;
        getMeshUploader(): $MeshUploaderPool$MeshUploader;
        reserveSharing(): number;
        getBufferEnvironment(): $IBufferEnvironment;
        bindTransformBuffers(): void;
        unbindVertexArray(): void;
        static VERTEX_BUFFER_OUT_INDEX: number;
        static VARYING_BUFFER_OUT_INDEX: number;
        static ELEMENT_BUFFER_INDEX: number;
        static SHARING_BUFFER_INDEX: number;
        constructor(arg0: $IBufferEnvironment);
        get size(): number;
        get free(): boolean;
        get functions(): $Int2ReferenceMap<$ILayerFunction>;
        get vertexSize(): number;
        get layers(): $Int2ReferenceMap<$ILayerStorage>;
        get sharing(): number;
        get vertexBuffer(): $StagingBufferPool$StagingBuffer;
        get builders(): $Map<$LayerKey, $AcceleratedBufferBuilder>;
        get drawContext(): $DrawContextPool$DrawContext;
        get varyingBuffer(): $StagingBufferPool$StagingBuffer;
        get elementSegment(): $ElementBufferPool$ElementSegment;
        get meshUploader(): $MeshUploaderPool$MeshUploader;
        get bufferEnvironment(): $IBufferEnvironment;
    }
}
