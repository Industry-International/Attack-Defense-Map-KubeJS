import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $HudMod } from "@package/xaero/common";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/xaero/hud/minimap/compass/render" {
    export class $CompassRenderer {
        drawCompass(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: number, arg8: boolean, arg9: $MultiBufferSource$BufferSource, arg10: $VertexConsumer): void;
        constructor(arg0: $HudMod, arg1: $Minecraft);
    }
}
