import { $ByteBuffer } from "@package/java/nio";

declare module "@package/de/johni0702/minecraft/gui/utils/lwjgl" {
    export class $WritableDimension {
    }
    export interface $WritableDimension {
        setSize(arg0: number, arg1: number): void;
        setSize(arg0: $ReadableDimension): void;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        set width(value: number);
        set height(value: number);
    }
    export class $ReadableDimension {
    }
    export interface $ReadableDimension {
        getSize(arg0: $WritableDimension): void;
        getWidth(): number;
        getHeight(): number;
        get width(): number;
        get height(): number;
    }
    export class $ReadableColor {
        static RED: $ReadableColor;
        static WHITE: $ReadableColor;
        static BLUE: $ReadableColor;
        static LTGREY: $ReadableColor;
        static BLACK: $ReadableColor;
        static YELLOW: $ReadableColor;
        static PURPLE: $ReadableColor;
        static CYAN: $ReadableColor;
        static GREEN: $ReadableColor;
        static DKGREY: $ReadableColor;
        static GREY: $ReadableColor;
        static ORANGE: $ReadableColor;
    }
    export interface $ReadableColor {
        getBlue(): number;
        getGreen(): number;
        getRed(): number;
        getAlpha(): number;
        writeBGRA(arg0: $ByteBuffer): void;
        writeABGR(arg0: $ByteBuffer): void;
        writeARGB(arg0: $ByteBuffer): void;
        writeRGB(arg0: $ByteBuffer): void;
        writeBGR(arg0: $ByteBuffer): void;
        writeRGBA(arg0: $ByteBuffer): void;
        getRedByte(): number;
        getBlueByte(): number;
        getGreenByte(): number;
        getAlphaByte(): number;
        get blue(): number;
        get green(): number;
        get red(): number;
        get alpha(): number;
        get redByte(): number;
        get blueByte(): number;
        get greenByte(): number;
        get alphaByte(): number;
    }
}
