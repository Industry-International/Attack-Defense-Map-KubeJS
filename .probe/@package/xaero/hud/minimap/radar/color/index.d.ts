import { $RadarList } from "@package/xaero/hud/minimap/radar/state";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityRadarCategory } from "@package/xaero/hud/minimap/radar/category";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";

declare module "@package/xaero/hud/minimap/radar/color" {
    export class $RadarColor extends $Enum<$RadarColor> {
        getName(): $Component;
        static values(): $RadarColor[];
        static valueOf(arg0: string): $RadarColor;
        static fromIndex(arg0: number): $RadarColor;
        getFormat(): string;
        static getRandom(): $RadarColor;
        getHex(): number;
        static GOLD: $RadarColor;
        static GRAY: $RadarColor;
        static AQUA: $RadarColor;
        static WHITE: $RadarColor;
        static BLUE: $RadarColor;
        static DARK_AQUA: $RadarColor;
        static PURPLE: $RadarColor;
        static DARK_BLUE: $RadarColor;
        static GREEN: $RadarColor;
        static RED: $RadarColor;
        static DARK_PURPLE: $RadarColor;
        static DARK_RED: $RadarColor;
        static BLACK: $RadarColor;
        static DARK_GREEN: $RadarColor;
        static YELLOW: $RadarColor;
        static DARK_GRAY: $RadarColor;
        get format(): string;
        static get random(): $RadarColor;
        get hex(): number;
    }
    /**
     * Values that may be interpreted as {@link $RadarColor}.
     */
    export type $RadarColor_ = "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "purple" | "yellow" | "white";
    export class $RadarColorHelper {
        getTeamColor(arg0: $Entity): number;
        getEntityColor(arg0: $Entity, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: $RadarColor_, arg7: $RadarColor_): number;
        getFallbackColor(arg0: $EntityRadarCategory, arg1: $EntityRadarCategory): $RadarColor;
        getFallbackColor(arg0: $RadarList): $RadarColor;
        getEntityHeightFade(arg0: number, arg1: number, arg2: number): number;
        constructor();
    }
}
