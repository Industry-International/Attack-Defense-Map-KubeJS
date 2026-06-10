import { $Component } from "@package/net/minecraft/network/chat";
import { $Button } from "@package/net/minecraft/client/gui/components";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/blamejared/controlling/api/entries" {
    export class $IKeyEntry {
    }
    export interface $IKeyEntry {
        getKey(): $KeyMapping;
        children(): $List<$GuiEventListener>;
        categoryName(): $Component;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        getKeyDesc(): $Component;
        getBtnChangeKeyBinding(): $Button;
        getBtnResetKeyBinding(): $Button;
        get key(): $KeyMapping;
        get keyDesc(): $Component;
        get btnChangeKeyBinding(): $Button;
        get btnResetKeyBinding(): $Button;
    }
}
