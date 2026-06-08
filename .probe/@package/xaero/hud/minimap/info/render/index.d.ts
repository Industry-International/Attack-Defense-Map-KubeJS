import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $InfoDisplayCompiler } from "@package/xaero/hud/minimap/info/render/compile";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as compile from "@package/xaero/hud/minimap/info/render/compile";

declare module "@package/xaero/hud/minimap/info/render" {
    export class $InfoDisplayRenderer {
        render(arg0: $GuiGraphics, arg1: $MinimapSession, arg2: $Minimap, arg3: number, arg4: number, arg5: $BlockPos_, arg6: number, arg7: number, arg8: number, arg9: $MultiBufferSource$BufferSource): void;
        static DEPTH_OFFSET: number;
        constructor(arg0: $InfoDisplayCompiler);
    }
}
