import { $MapProcessor } from "@package/xaero/map";
import { $Minecraft, $KeyMapping } from "@package/net/minecraft/client";

declare module "@package/xaero/map/controls" {
    export class $ControlsHandler {
        handleKeyEvents(): void;
        keyDown(arg0: $KeyMapping, arg1: boolean, arg2: boolean): void;
        keyUp(arg0: $KeyMapping, arg1: boolean): void;
        static isKeyRepeat(arg0: $KeyMapping): boolean;
        onKeyInput(arg0: $Minecraft): void;
        constructor(arg0: $MapProcessor);
    }
}
