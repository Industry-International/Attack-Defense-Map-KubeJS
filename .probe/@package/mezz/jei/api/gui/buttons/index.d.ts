import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $IJeiUserInput } from "@package/mezz/jei/api/gui/inputs";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/mezz/jei/api/gui/buttons" {
    export class $IButtonState {
    }
    export interface $IButtonState {
        setForcePressed(arg0: boolean): void;
        setActive(arg0: boolean): void;
        setIcon(arg0: $IDrawable): void;
        setVisible(arg0: boolean): void;
        set forcePressed(value: boolean);
        set active(value: boolean);
        set icon(value: $IDrawable);
        set visible(value: boolean);
    }
    export class $IIconButtonController {
    }
    export interface $IIconButtonController {
        initState(arg0: $IButtonState): void;
        onPress(arg0: $IJeiUserInput): boolean;
        updateState(arg0: $IButtonState): void;
        getTooltips(arg0: $ITooltipBuilder): void;
        drawExtras(arg0: $GuiGraphics, arg1: $Rect2i, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IIconButtonController}.
     */
    export type $IIconButtonController_ = ((arg0: $IJeiUserInput) => boolean);
}
