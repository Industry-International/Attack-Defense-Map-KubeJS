import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";
import { $GunTooltip } from "@package/com/tacz/guns/inventory/tooltip";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/com/tacz/guns/client/tooltip" {
    export class $ClientGunTooltip implements $ClientTooltipComponent {
        getWidth(arg0: $Font): number;
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        getHeight(): number;
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        constructor(arg0: $GunTooltip);
        get height(): number;
    }
}
