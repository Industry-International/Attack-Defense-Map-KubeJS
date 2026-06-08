import { $GameType_, $GameType } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $Screen, $ShareToLanScreen } from "@package/net/minecraft/client/gui/screens";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";
import { $List_ } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
export * as mixin from "@package/rikka/lanserverproperties/mixin";

declare module "@package/rikka/lanserverproperties" {
    export class $IShareToLanScreenParamAccessor {
    }
    export interface $IShareToLanScreenParamAccessor {
        getPort(): number;
        setPort(arg0: number): void;
        getGameType(): $GameType;
        setGameType(arg0: $GameType_): void;
        getFont(): $Font;
        getLastScreen(): $Screen;
        getLSPData(): $OpenToLanScreenEx;
        isCommandEnabled(): boolean;
        movePortEditBox(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setCommandEnabled(arg0: boolean): void;
        get font(): $Font;
        get lastScreen(): $Screen;
        get LSPData(): $OpenToLanScreenEx;
    }
    export class $OpenToLanScreenEx {
        getDefaultPort(): number;
        static postDraw(arg0: $Screen, arg1: $Font, arg2: $GuiGraphics, arg3: number, arg4: number, arg5: number): void;
        onPortEditBoxChanged(): void;
        postInitShareToLanScreen(arg0: $Font, arg1: $List_<$GuiEventListener>, arg2: $Consumer_<$GuiEventListener>, arg3: $Consumer_<$GuiEventListener>): void;
        static initPauseScreen(arg0: $Screen, arg1: $List_<$GuiEventListener>, arg2: $Consumer_<$GuiEventListener>): void;
        onOpenToLanClosed(): void;
        constructor(arg0: $ShareToLanScreen, arg1: $IShareToLanScreenParamAccessor);
        get defaultPort(): number;
    }
}
