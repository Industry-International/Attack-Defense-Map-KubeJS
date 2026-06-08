import { $ScreenKeyboardEvents$BeforeKeyPress, $ScreenMouseEvents$AfterMouseClick, $ScreenMouseEvents$AfterMouseRelease, $ScreenMouseEvents$BeforeMouseClick, $ScreenEvents$BeforeRender, $ScreenKeyboardEvents$AfterKeyRelease, $ScreenMouseEvents$AfterMouseScroll, $ScreenMouseEvents$AllowMouseScroll, $ScreenKeyboardEvents$AllowKeyPress, $ScreenEvents$Remove, $ScreenKeyboardEvents$BeforeKeyRelease, $ScreenEvents$BeforeTick, $ScreenMouseEvents$AllowMouseRelease, $ScreenMouseEvents$AllowMouseClick, $ScreenKeyboardEvents$AllowKeyRelease, $ScreenMouseEvents$BeforeMouseRelease, $ScreenMouseEvents$BeforeMouseScroll, $ScreenEvents$AfterRender, $ScreenEvents$AfterTick, $ScreenKeyboardEvents$AfterKeyPress } from "@package/net/fabricmc/fabric/api/client/screen/v1";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $List } from "@package/java/util";
import { $Event } from "@package/net/fabricmc/fabric/api/event";

declare module "@package/net/fabricmc/fabric/impl/client/screen" {
    export class $ScreenExtensions {
        static getExtensions(arg0: $Screen): $ScreenExtensions;
    }
    export interface $ScreenExtensions {
        fabric_getRemoveEvent(): $Event<$ScreenEvents$Remove>;
        fabric_getAfterRenderEvent(): $Event<$ScreenEvents$AfterRender>;
        fabric_getAfterTickEvent(): $Event<$ScreenEvents$AfterTick>;
        fabric_getBeforeTickEvent(): $Event<$ScreenEvents$BeforeTick>;
        fabric_getBeforeRenderEvent(): $Event<$ScreenEvents$BeforeRender>;
        fabric_getAllowKeyReleaseEvent(): $Event<$ScreenKeyboardEvents$AllowKeyRelease>;
        fabric_getAllowMouseClickEvent(): $Event<$ScreenMouseEvents$AllowMouseClick>;
        fabric_getAfterMouseReleaseEvent(): $Event<$ScreenMouseEvents$AfterMouseRelease>;
        fabric_getBeforeMouseReleaseEvent(): $Event<$ScreenMouseEvents$BeforeMouseRelease>;
        fabric_getAfterMouseScrollEvent(): $Event<$ScreenMouseEvents$AfterMouseScroll>;
        fabric_getAllowKeyPressEvent(): $Event<$ScreenKeyboardEvents$AllowKeyPress>;
        fabric_getAfterKeyReleaseEvent(): $Event<$ScreenKeyboardEvents$AfterKeyRelease>;
        fabric_getBeforeMouseScrollEvent(): $Event<$ScreenMouseEvents$BeforeMouseScroll>;
        fabric_getAllowMouseReleaseEvent(): $Event<$ScreenMouseEvents$AllowMouseRelease>;
        fabric_getBeforeKeyPressEvent(): $Event<$ScreenKeyboardEvents$BeforeKeyPress>;
        fabric_getAllowMouseScrollEvent(): $Event<$ScreenMouseEvents$AllowMouseScroll>;
        fabric_getBeforeKeyReleaseEvent(): $Event<$ScreenKeyboardEvents$BeforeKeyRelease>;
        fabric_getBeforeMouseClickEvent(): $Event<$ScreenMouseEvents$BeforeMouseClick>;
        fabric_getAfterKeyPressEvent(): $Event<$ScreenKeyboardEvents$AfterKeyPress>;
        fabric_getAfterMouseClickEvent(): $Event<$ScreenMouseEvents$AfterMouseClick>;
        fabric_getButtons(): $List<$AbstractWidget>;
    }
}
