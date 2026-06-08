import { $MinimapElementRenderer } from "@package/xaero/hud/minimap/element/render";
import { $MinimapElementOverMapRendererHandler as $MinimapElementOverMapRendererHandler$1 } from "@package/xaero/hud/minimap/element/render/over";
import { $HudMod } from "@package/xaero/common";
import { $List_ } from "@package/java/util";

declare module "@package/xaero/common/minimap/element/render/over" {
    /**
     * @deprecated
     */
    export class $MinimapElementOverMapRendererHandler extends $MinimapElementOverMapRendererHandler$1 {
        constructor(arg0: $HudMod, arg1: $List_<$MinimapElementRenderer<never, never>>, arg2: number[]);
    }
}
