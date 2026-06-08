import { $MinimapElementRendererHandler } from "@package/xaero/common/minimap/element/render";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/xaero/hud/minimap/element/render/over" {
    export class $MinimapElementOverMapRendererHandler extends $MinimapElementRendererHandler {
        static translatePosition(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean, arg11: number[]): boolean;
        prepareRender(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
    }
}
