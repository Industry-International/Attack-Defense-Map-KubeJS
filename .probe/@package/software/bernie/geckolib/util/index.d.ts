import { $Record } from "@package/java/lang";

declare module "@package/software/bernie/geckolib/util" {
    export class $Color extends $Record {
        getColor(): number;
        static HSBtoARGB(arg0: number, arg1: number, arg2: number): number;
        static ofARGB(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        static ofARGB(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        getAlpha(): number;
        argbInt(): number;
        brighter(arg0: number): $Color;
        darker(arg0: number): $Color;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        static ofOpaque(arg0: number): $Color;
        getAlphaFloat(): number;
        getGreenFloat(): number;
        getRedFloat(): number;
        getBlueFloat(): number;
        static ofHSB(arg0: number, arg1: number, arg2: number): $Color;
        static ofRGBA(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
        static ofRGBA(arg0: number, arg1: number, arg2: number, arg3: number): $Color;
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
        get alpha(): number;
        get red(): number;
        get green(): number;
        get blue(): number;
        get alphaFloat(): number;
        get greenFloat(): number;
        get redFloat(): number;
        get blueFloat(): number;
    }
}
