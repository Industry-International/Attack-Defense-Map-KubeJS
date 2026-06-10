import { $RenderType } from "@package/net/minecraft/client/renderer";

declare module "@package/net/fabricmc/fabric/impl/blockrenderlayer" {
    export class $ExtendedChunkRenderTypeSet {
    }
    export interface $ExtendedChunkRenderTypeSet {
        sinytra$firstLayer(): $RenderType;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedChunkRenderTypeSet}.
     */
    export type $ExtendedChunkRenderTypeSet_ = (() => $RenderType);
}
