import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $ScreenBase, $GuiSettings } from "@package/xaero/lib/client/gui";

declare module "@package/xaero/common/gui" {
    export class $GuiHelper {
        getMinimapSettingsFromScreen(arg0: $Screen): $ScreenBase;
        /**
         * @deprecated
         */
        openMinimapSettingsFromScreen(arg0: $Screen, arg1: $Screen): void;
        getMainSettingsScreen(arg0: $Screen): $GuiSettings;
        openMainSettingsFromScreen(arg0: $Screen): void;
        constructor(arg0: $IXaeroMinimap);
    }
}
