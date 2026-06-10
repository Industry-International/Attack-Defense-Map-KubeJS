import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $IXaeroMinimap } from "@package/xaero/common";
export * as render from "@package/xaero/common/interfaces/render";

declare module "@package/xaero/common/interfaces" {
    /**
     * @deprecated
     */
    export class $InterfaceManager {
        /**
         * @deprecated
         */
        getMinimapInterface(): $MinimapInterface;
        constructor(arg0: $IXaeroMinimap);
        get minimapInterface(): $MinimapInterface;
    }
}
