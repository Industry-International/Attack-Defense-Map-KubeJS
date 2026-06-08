import { $RenderType } from "@package/net/minecraft/client/renderer";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain" {
    export class $TerrainRenderPass {
        /**
         * @deprecated
         */
        startDrawing(): void;
        supportsFragmentDiscard(): boolean;
        isTranslucent(): boolean;
        /**
         * @deprecated
         */
        endDrawing(): void;
        constructor(arg0: $RenderType, arg1: boolean, arg2: boolean);
        get translucent(): boolean;
    }
}
