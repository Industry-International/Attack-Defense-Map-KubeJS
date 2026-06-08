import { $IKeyEntry } from "@package/com/blamejared/controlling/api/entries";
import { $Event } from "@package/net/neoforged/bus/api";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/blamejared/controlling/api/events" {
    export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        getMouseX(): number;
        getMouseY(): number;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
        get buttonId(): number;
    }
    export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent {
        getEntry(): $IKeyEntry;
        isHovered(): boolean;
        getPartialTicks(): number;
        getY(): number;
        getX(): number;
        getSlotIndex(): number;
        getGuiGraphics(): $GuiGraphics;
        getRowWidth(): number;
        getMouseX(): number;
        getMouseY(): number;
        getRowLeft(): number;
        constructor(arg0: $IKeyEntry, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
        get entry(): $IKeyEntry;
        get hovered(): boolean;
        get partialTicks(): number;
        get y(): number;
        get x(): number;
        get slotIndex(): number;
        get guiGraphics(): $GuiGraphics;
        get rowWidth(): number;
        get mouseX(): number;
        get mouseY(): number;
        get rowLeft(): number;
    }
    export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        getMouseX(): number;
        getMouseY(): number;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
        get buttonId(): number;
    }
    export class $IKeyEntryListenersEvent {
    }
    export interface $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        get entry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
    }
    export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        constructor(arg0: $IKeyEntry);
        get entry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
    }
    export class $IKeyEntryRenderEvent {
    }
    export interface $IKeyEntryRenderEvent {
        getEntry(): $IKeyEntry;
        isHovered(): boolean;
        getPartialTicks(): number;
        getY(): number;
        getX(): number;
        getSlotIndex(): number;
        getGuiGraphics(): $GuiGraphics;
        getRowWidth(): number;
        getMouseX(): number;
        getMouseY(): number;
        getRowLeft(): number;
        get entry(): $IKeyEntry;
        get hovered(): boolean;
        get partialTicks(): number;
        get y(): number;
        get x(): number;
        get slotIndex(): number;
        get guiGraphics(): $GuiGraphics;
        get rowWidth(): number;
        get mouseX(): number;
        get mouseY(): number;
        get rowLeft(): number;
    }
    export class $IKeyEntryMouseReleasedEvent {
    }
    export interface $IKeyEntryMouseReleasedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        getMouseX(): number;
        getMouseY(): number;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
        get buttonId(): number;
    }
    export class $IKeyEntryMouseClickedEvent {
    }
    export interface $IKeyEntryMouseClickedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        getMouseX(): number;
        getMouseY(): number;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
        get buttonId(): number;
    }
}
