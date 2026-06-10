import { $IMemoryLayout } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory";
import { $IServerBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/backends/buffers";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexFormatElement, $VertexFormat$Mode_, $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $Set } from "@package/java/util";
import { $ICullingProgramDispatcher } from "@package/com/github/argon4w/acceleratedrendering/core/programs/culling";
import { $MeshUploadingProgramDispatcher, $IPolygonProgramDispatcher, $TransformProgramDispatcher } from "@package/com/github/argon4w/acceleratedrendering/core/programs/dispatchers";
import { $ITransformShaderProgramOverride, $IUploadingShaderProgramOverride } from "@package/com/github/argon4w/acceleratedrendering/core/programs/overrides";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/environments" {
    export class $IBufferEnvironment {
    }
    export interface $IBufferEnvironment {
        getLayout(): $IMemoryLayout<$VertexFormatElement>;
        selectProcessingProgramDispatcher(arg0: $VertexFormat$Mode_): $IPolygonProgramDispatcher;
        getTransformProgramOverride(arg0: $RenderType): $ITransformShaderProgramOverride;
        selectCullingProgramDispatcher(arg0: $RenderType): $ICullingProgramDispatcher;
        getUploadingProgramOverride(arg0: $RenderType): $IUploadingShaderProgramOverride;
        selectTransformProgramDispatcher(): $TransformProgramDispatcher;
        isAccelerated(arg0: $VertexFormat): boolean;
        getVertexSize(): number;
        setupBufferState(): void;
        getVertexFormats(): $Set<$VertexFormat>;
        getImmediateMeshBuffer(): $IServerBuffer;
        selectMeshUploadingProgramDispatcher(): $MeshUploadingProgramDispatcher;
        get layout(): $IMemoryLayout<$VertexFormatElement>;
        get vertexSize(): number;
        get vertexFormats(): $Set<$VertexFormat>;
        get immediateMeshBuffer(): $IServerBuffer;
    }
}
