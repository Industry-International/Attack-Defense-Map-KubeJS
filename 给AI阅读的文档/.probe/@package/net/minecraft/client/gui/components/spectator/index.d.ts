import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $SpectatorPage } from "@package/net/minecraft/client/gui/spectator/categories";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener {
        renderTooltip(guiGraphics: $GuiGraphics): void;
        isMenuActive(): boolean;
        onMouseMiddleClick(): void;
        onMouseScrolled(slot: number): void;
        handler$bch000$reforgedplaymod$isInReplay(i: number, ci: $CallbackInfo): void;
        onHotbarSelected(slot: number): void;
        renderPage(guiGraphics: $GuiGraphics, alpha: number, x: number, y: number, spectatorPage: $SpectatorPage): void;
        renderHotbar(guiGraphics: $GuiGraphics): void;
        onSpectatorMenuClosed(menu: $SpectatorMenu): void;
        constructor(minecraft: $Minecraft);
        get menuActive(): boolean;
    }
}
