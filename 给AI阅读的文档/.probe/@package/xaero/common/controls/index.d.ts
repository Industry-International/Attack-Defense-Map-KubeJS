import { $HudSession } from "@package/xaero/hud";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $KeyMapping } from "@package/net/minecraft/client";

declare module "@package/xaero/common/controls" {
    /**
     * @deprecated
     */
    export class $ControlsHandler {
        /**
         * @deprecated
         */
        keyDown(arg0: $KeyMapping, arg1: boolean, arg2: boolean): void;
        /**
         * @deprecated
         */
        keyUp(arg0: $KeyMapping, arg1: boolean): void;
        /**
         * @deprecated
         */
        isDown(arg0: $KeyMapping): boolean;
        /**
         * @deprecated
         */
        setKeyState(arg0: $KeyMapping, arg1: boolean): void;
        constructor(arg0: $IXaeroMinimap, arg1: $HudSession);
    }
}
