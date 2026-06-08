import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/vladmarica/betterpingdisplay/mixin" {
    export class $PlayerTabOverlayInvoker {
    }
    export interface $PlayerTabOverlayInvoker {
        invokeRenderPingIcon(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $PlayerInfo): void;
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlayInvoker}.
     */
    export type $PlayerTabOverlayInvoker_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $PlayerInfo) => void);
}
