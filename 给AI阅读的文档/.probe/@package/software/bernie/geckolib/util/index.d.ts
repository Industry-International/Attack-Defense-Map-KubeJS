import { $Record } from "@package/java/lang";

declare module "@package/software/bernie/geckolib/util" {
    export class $Color extends $Record {
        brighter(arg0: number): $Color;
        darker(arg0: number): $Color;
        static ofRGBA(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        static ofRGBA(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        getColor(): number;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getAlpha(): number;
        static ofARGB(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        static ofARGB(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        argbInt(): number;
        static ofOpaque(arg0: number): $Color;
        getRedFloat(): number;
        getGreenFloat(): number;
        getBlueFloat(): number;
        getAlphaFloat(): number;
        static HSBtoARGB(arg0: number, arg1: number, arg2: number): number;
        static ofHSB(arg0: number, arg1: number, arg2: number): $Color;
        static ofRGB(arg0: number, arg1: number, arg2: number): $Color;
        static ofRGB(arg0: number, arg1: number, arg2: number): $Color;
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
        get color(): number;
        get red(): number;
        get green(): number;
        get blue(): number;
        get alpha(): number;
        get redFloat(): number;
        get greenFloat(): number;
        get blueFloat(): number;
        get alphaFloat(): number;
    }
}
