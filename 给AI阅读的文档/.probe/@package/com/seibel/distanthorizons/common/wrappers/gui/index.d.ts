import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $WidgetSprites, $Button$OnPress_, $Button$CreateNarration, $WidgetTooltipHolder, $Button } from "@package/net/minecraft/client/gui/components";

declare module "@package/com/seibel/distanthorizons/common/wrappers/gui" {
    export class $TexturedButtonWidget_neoforge extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        renderBackground: boolean;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, hoveredVOffset: number, textureResourceLocation: $ResourceLocation_, textureWidth: number, textureHeight: number, pressAction: $Button$OnPress_, text: $Component_);
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, hoveredVOffset: number, textureResourceLocation: $ResourceLocation_, textureWidth: number, textureHeight: number, pressAction: $Button$OnPress_, text: $Component_, renderBackground: boolean);
    }
}
