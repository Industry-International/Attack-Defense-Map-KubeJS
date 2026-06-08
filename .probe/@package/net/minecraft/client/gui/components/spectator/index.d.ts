import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $SpectatorPage } from "@package/net/minecraft/client/gui/spectator/categories";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener {
        renderPage(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $SpectatorPage): void;
        onHotbarSelected(arg0: number): void;
        renderTooltip(arg0: $GuiGraphics): void;
        renderHotbar(arg0: $GuiGraphics): void;
        handler$bch000$reforgedplaymod$isInReplay(i: number, ci: $CallbackInfo): void;
        onMouseScrolled(arg0: number): void;
        onMouseMiddleClick(): void;
        isMenuActive(): boolean;
        onSpectatorMenuClosed(arg0: $SpectatorMenu): void;
        constructor(arg0: $Minecraft);
        get menuActive(): boolean;
    }
}
