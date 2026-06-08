import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BalmEvent } from "@package/net/blay09/mods/balm/api/event";

declare module "@package/net/blay09/mods/balm/api/event/client/screen" {
    export class $ScreenMouseEvent$Click$Pre extends $ScreenMouseEvent$Click {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScreenKeyEvent$Release extends $ScreenKeyEvent {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScreenMouseEvent$Release extends $ScreenMouseEvent {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScreenMouseEvent$Click extends $ScreenMouseEvent {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScreenKeyEvent$Press extends $ScreenKeyEvent {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ContainerScreenDrawEvent$Background extends $ContainerScreenDrawEvent {
        constructor(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number);
    }
    export class $ScreenMouseEvent$Drag extends $ScreenMouseEvent {
        getDragX(): number;
        getDragY(): number;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get dragX(): number;
        get dragY(): number;
    }
    export class $ScreenInitEvent$Post extends $ScreenInitEvent {
        constructor(arg0: $Screen);
    }
    export class $ScreenKeyEvent$Release$Pre extends $ScreenKeyEvent$Release {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ContainerScreenDrawEvent$Foreground extends $ContainerScreenDrawEvent {
        constructor(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number);
    }
    export class $ScreenMouseEvent$Drag$Post extends $ScreenMouseEvent$Drag {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $ScreenMouseEvent$Release$Post extends $ScreenMouseEvent$Release {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScreenMouseEvent$Drag$Pre extends $ScreenMouseEvent$Drag {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $ScreenKeyEvent$Press$Pre extends $ScreenKeyEvent$Press {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScreenDrawEvent$Pre extends $ScreenDrawEvent {
        constructor(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number);
    }
    export class $ScreenDrawEvent extends $BalmEvent {
        getScreen(): $Screen;
        getGuiGraphics(): $GuiGraphics;
        getMouseY(): number;
        getMouseX(): number;
        getTickDelta(): number;
        constructor(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number);
        get screen(): $Screen;
        get guiGraphics(): $GuiGraphics;
        get mouseY(): number;
        get mouseX(): number;
        get tickDelta(): number;
    }
    export class $ScreenMouseEvent extends $BalmEvent {
        getScreen(): $Screen;
        getMouseY(): number;
        getMouseX(): number;
        getButton(): number;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
        get screen(): $Screen;
        get mouseY(): number;
        get mouseX(): number;
        get button(): number;
    }
    export class $ScreenInitEvent$Pre extends $ScreenInitEvent {
        constructor(arg0: $Screen);
    }
    export class $ScreenKeyEvent$Release$Post extends $ScreenKeyEvent$Release {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ContainerScreenDrawEvent extends $BalmEvent {
        getScreen(): $Screen;
        getGuiGraphics(): $GuiGraphics;
        getMouseY(): number;
        getMouseX(): number;
        constructor(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number);
        get screen(): $Screen;
        get guiGraphics(): $GuiGraphics;
        get mouseY(): number;
        get mouseX(): number;
    }
    export class $ScreenInitEvent extends $BalmEvent {
        getScreen(): $Screen;
        constructor(arg0: $Screen);
        get screen(): $Screen;
    }
    export class $ScreenMouseEvent$Release$Pre extends $ScreenMouseEvent$Release {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScreenDrawEvent$Post extends $ScreenDrawEvent {
        constructor(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number);
    }
    export class $ScreenMouseEvent$Click$Post extends $ScreenMouseEvent$Click {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScreenKeyEvent$Press$Post extends $ScreenKeyEvent$Press {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScreenKeyEvent extends $BalmEvent {
        getModifiers(): number;
        getKey(): number;
        getScanCode(): number;
        getScreen(): $Screen;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
        get modifiers(): number;
        get key(): number;
        get scanCode(): number;
        get screen(): $Screen;
    }
}
