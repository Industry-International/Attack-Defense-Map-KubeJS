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
import { $StagingBufferPool$StagingBuffer, $DrawContextPool$DrawContext, $ElementBufferPool$ElementSegment } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools";
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
        getSharing(): number;
        setUsed(): void;
        getBufferEnvironment(): $IBufferEnvironment;
        bindTransformBuffers(): void;
        getLayers(): $Int2ReferenceMap<$ILayerStorage>;
        getFunctions(): $Int2ReferenceMap<$ILayerFunction>;
        getVertexSize(): number;
        isFree(): boolean;
        setInFlight(): void;
        getVertexBuffer(): $StagingBufferPool$StagingBuffer;
        getVaryingBuffer(): $StagingBufferPool$StagingBuffer;
        getBuilders(): $Map<$LayerKey, $AcceleratedBufferBuilder>;
        getElementSegment(): $ElementBufferPool$ElementSegment;
        getDrawContext(): $DrawContextPool$DrawContext;
        bindElementBuffer(arg0: $ElementBufferPool$ElementSegment): void;
        bindDrawBuffers(): void;
        reserveSharing(): number;
        getMeshUploader(): $MeshUploaderPool$MeshUploader;
        unbindVertexArray(): void;
        static VERTEX_BUFFER_OUT_INDEX: number;
        static VARYING_BUFFER_OUT_INDEX: number;
        static ELEMENT_BUFFER_INDEX: number;
        static SHARING_BUFFER_INDEX: number;
        constructor(arg0: $IBufferEnvironment);
        get size(): number;
        get sharing(): number;
        get bufferEnvironment(): $IBufferEnvironment;
        get layers(): $Int2ReferenceMap<$ILayerStorage>;
        get functions(): $Int2ReferenceMap<$ILayerFunction>;
        get vertexSize(): number;
        get free(): boolean;
        get vertexBuffer(): $StagingBufferPool$StagingBuffer;
        get varyingBuffer(): $StagingBufferPool$StagingBuffer;
        get builders(): $Map<$LayerKey, $AcceleratedBufferBuilder>;
        get elementSegment(): $ElementBufferPool$ElementSegment;
        get drawContext(): $DrawContextPool$DrawContext;
        get meshUploader(): $MeshUploaderPool$MeshUploader;
    }
}
