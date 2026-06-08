import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $SpectatorMenuItem, $SpectatorMenu, $SpectatorMenuCategory } from "@package/net/minecraft/client/gui/spectator";
import { $Component } from "@package/net/minecraft/network/chat";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List_, $Collection_, $List } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/spectator/categories" {
    export class $SpectatorPage {
        getItem(arg0: number): $SpectatorMenuItem;
        getSelectedSlot(): number;
        static NO_SELECTION: number;
        constructor(arg0: $List_<$SpectatorMenuItem>, arg1: number);
        get selectedSlot(): number;
    }
    export class $TeleportToPlayerMenuCategory implements $SpectatorMenuCategory, $SpectatorMenuItem {
        getName(): $Component;
        isEnabled(): boolean;
        getPrompt(): $Component;
        getItems(): $List<$SpectatorMenuItem>;
        renderIcon(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        selectItem(arg0: $SpectatorMenu): void;
        constructor();
        constructor(arg0: $Collection_<$PlayerInfo>);
        get name(): $Component;
        get enabled(): boolean;
        get prompt(): $Component;
        get items(): $List<$SpectatorMenuItem>;
    }
    export class $TeleportToTeamMenuCategory$TeamSelectionItem implements $SpectatorMenuItem {
    }
    export class $TeleportToTeamMenuCategory implements $SpectatorMenuCategory, $SpectatorMenuItem {
        getName(): $Component;
        isEnabled(): boolean;
        getPrompt(): $Component;
        getItems(): $List<$SpectatorMenuItem>;
        renderIcon(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        selectItem(arg0: $SpectatorMenu): void;
        constructor();
        get name(): $Component;
        get enabled(): boolean;
        get prompt(): $Component;
        get items(): $List<$SpectatorMenuItem>;
    }
}
