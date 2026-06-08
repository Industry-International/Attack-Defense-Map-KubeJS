import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";
import { $MessageBox } from "@package/xaero/map/gui/message";

declare module "@package/xaero/map/gui/message/render" {
    export class $MessageBoxRenderer {
        render(arg0: $GuiGraphics, arg1: $MessageBox, arg2: $Font, arg3: number, arg4: number, arg5: boolean): void;
        constructor();
    }
}
