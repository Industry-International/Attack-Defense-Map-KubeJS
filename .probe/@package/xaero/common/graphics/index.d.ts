import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
export * as renderer from "@package/xaero/common/graphics/renderer";

declare module "@package/xaero/common/graphics" {
    export class $CustomVertexConsumers {
        getBetterPVPRenderTypeBuffers(): $MultiBufferSource$BufferSource;
        constructor();
        get betterPVPRenderTypeBuffers(): $MultiBufferSource$BufferSource;
    }
}
