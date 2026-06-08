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
        getDragY(): number;
        getDragX(): number;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get dragY(): number;
        get dragX(): number;
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
        getGuiGraphics(): $GuiGraphics;
        getMouseX(): number;
        getMouseY(): number;
        getScreen(): $Screen;
        getTickDelta(): number;
        constructor(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number);
        get guiGraphics(): $GuiGraphics;
        get mouseX(): number;
        get mouseY(): number;
        get screen(): $Screen;
        get tickDelta(): number;
    }
    export class $ScreenMouseEvent extends $BalmEvent {
        getButton(): number;
        getMouseX(): number;
        getMouseY(): number;
        getScreen(): $Screen;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
        get button(): number;
        get mouseX(): number;
        get mouseY(): number;
        get screen(): $Screen;
    }
    export class $ScreenInitEvent$Pre extends $ScreenInitEvent {
        constructor(arg0: $Screen);
    }
    export class $ScreenKeyEvent$Release$Post extends $ScreenKeyEvent$Release {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ContainerScreenDrawEvent extends $BalmEvent {
        getGuiGraphics(): $GuiGraphics;
        getMouseX(): number;
        getMouseY(): number;
        getScreen(): $Screen;
        constructor(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number);
        get guiGraphics(): $GuiGraphics;
        get mouseX(): number;
        get mouseY(): number;
        get screen(): $Screen;
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
