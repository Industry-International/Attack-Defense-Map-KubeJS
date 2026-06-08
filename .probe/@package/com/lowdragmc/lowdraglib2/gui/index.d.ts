import { $ColorBorderTexture, $ColorRectTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Enum } from "@package/java/lang";
export * as ui from "@package/com/lowdragmc/lowdraglib2/gui/ui";
export * as texture from "@package/com/lowdragmc/lowdraglib2/gui/texture";
export * as util from "@package/com/lowdragmc/lowdraglib2/gui/util";
export * as sync from "@package/com/lowdragmc/lowdraglib2/gui/sync";
export * as slot from "@package/com/lowdragmc/lowdraglib2/gui/slot";
export * as holder from "@package/com/lowdragmc/lowdraglib2/gui/holder";
export * as event from "@package/com/lowdragmc/lowdraglib2/gui/event";
export * as factory from "@package/com/lowdragmc/lowdraglib2/gui/factory";

declare module "@package/com/lowdragmc/lowdraglib2/gui" {
    export class $ColorPattern extends $Enum<$ColorPattern> {
        static values(): $ColorPattern[];
        static valueOf(arg0: string): $ColorPattern;
        rectTexture(): $ColorRectTexture;
        static generateRainbowColor(arg0: number): number;
        static generateRainbowColor(): number;
        borderTexture(arg0: number): $ColorBorderTexture;
        static rainbowRectTexture(arg0: number): $ColorBorderTexture;
        static rainbowRectTexture(): $ColorRectTexture;
        colorName: string;
        static GRAY: $ColorPattern;
        color: number;
        static BLUE: $ColorPattern;
        static T_RED: $ColorPattern;
        static T_BRIGHT_RED: $ColorPattern;
        static T_WHITE: $ColorPattern;
        static T_GREEN: $ColorPattern;
        static T_LIGHT_BLUE: $ColorPattern;
        static PINK: $ColorPattern;
        static T_BLUE: $ColorPattern;
        static T_LIME: $ColorPattern;
        static T_BLACK: $ColorPattern;
        static BLACK: $ColorPattern;
        static T_BROWN: $ColorPattern;
        static T_GRAY: $ColorPattern;
        static T_DARK_GRAY: $ColorPattern;
        static T_YELLOW: $ColorPattern;
        static BROWN: $ColorPattern;
        static T_CYAN: $ColorPattern;
        static ORANGE: $ColorPattern;
        static WHITE: $ColorPattern;
        static T_MAGENTA: $ColorPattern;
        static PURPLE: $ColorPattern;
        static GREEN: $ColorPattern;
        static BRIGHT_CYAN: $ColorPattern;
        static T_PURPLE: $ColorPattern;
        static SLATE_PLUM: $ColorPattern;
        static RED: $ColorPattern;
        static SEAL_BLACK: $ColorPattern;
        static LIGHT_GRAY: $ColorPattern;
        static LIGHT_BLUE: $ColorPattern;
        static T_LIGHT_GRAY: $ColorPattern;
        static T_PINK: $ColorPattern;
        static LIME: $ColorPattern;
        static BRIGHT_RED: $ColorPattern;
        static T_SEAL_BLACK: $ColorPattern;
        static T_ORANGE: $ColorPattern;
        static MAGENTA: $ColorPattern;
        static YELLOW: $ColorPattern;
        static DARK_GRAY: $ColorPattern;
        static CYAN: $ColorPattern;
    }
    /**
     * Values that may be interpreted as {@link $ColorPattern}.
     */
    export type $ColorPattern_ = "white" | "t_white" | "black" | "t_black" | "seal_black" | "t_seal_black" | "gray" | "t_gray" | "dark_gray" | "t_dark_gray" | "light_gray" | "t_light_gray" | "green" | "t_green" | "red" | "t_red" | "bright_red" | "t_bright_red" | "yellow" | "t_yellow" | "bright_cyan" | "cyan" | "t_cyan" | "purple" | "t_purple" | "pink" | "t_pink" | "blue" | "t_blue" | "orange" | "t_orange" | "brown" | "t_brown" | "lime" | "t_lime" | "magenta" | "t_magenta" | "light_blue" | "t_light_blue" | "slate_plum";
}
