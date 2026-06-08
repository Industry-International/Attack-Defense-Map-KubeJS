import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/createmod/catnip/gui/element" {
    export class $ScreenElement {
    }
    export interface $ScreenElement {
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenElement}.
     */
    export type $ScreenElement_ = ((arg0: $GuiGraphics, arg1: number, arg2: number) => void);
}
