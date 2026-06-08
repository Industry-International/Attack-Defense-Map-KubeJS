import { $Record } from "@package/java/lang";

declare module "@package/software/bernie/geckolib/util" {
    export class $Color extends $Record {
        getAlpha(): number;
        getColor(): number;
        brighter(arg0: number): $Color;
        darker(arg0: number): $Color;
        getRed(): number;
        getBlue(): number;
        getGreen(): number;
        static ofARGB(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        static ofARGB(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        argbInt(): number;
        static HSBtoARGB(arg0: number, arg1: number, arg2: number): number;
        static ofOpaque(arg0: number): $Color;
        static ofRGB(arg0: number, arg1: number, arg2: number): $Color;
        static ofRGB(arg0: number, arg1: number, arg2: number): $Color;
        static ofHSB(arg0: number, arg1: number, arg2: number): $Color;
        static ofRGBA(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        static ofRGBA(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        getAlphaFloat(): number;
        getRedFloat(): number;
        getGreenFloat(): number;
        getBlueFloat(): number;
        static WHITE: $Color;
        static GRAY: $Color;
        static BLUE: $Color;
        static GREEN: $Color;
        static RED: $Color;
        static PINK: $Color;
        static LIGHT_GRAY: $Color;
        static BLACK: $Color;
        static MAGENTA: $Color;
        static YELLOW: $Color;
        static DARK_GRAY: $Color;
        static CYAN: $Color;
        static ORANGE: $Color;
        constructor(argbInt: number);
        get alpha(): number;
        get color(): number;
        get red(): number;
        get blue(): number;
        get green(): number;
        get alphaFloat(): number;
        get redFloat(): number;
        get greenFloat(): number;
        get blueFloat(): number;
    }
}
