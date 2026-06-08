import { $Number, $Record } from "@package/java/lang";
import { $ArrayList, $HashMap, $List, $List_ } from "@package/java/util";
import { $Element, $Style } from "@package/com/sighs/apricityui/init";

declare module "@package/com/sighs/apricityui/style" {
    export class $Box {
        size(): $Size;
        static of(arg0: $Element): $Box;
        offset(arg0: string): number;
        static createTransition(arg0: $Style, arg1: $Style, arg2: $List_<$Transition_>, arg3: string, arg4: number, arg5: number): void;
        elementSize(): $Size;
        getPaddingRight(): number;
        getPaddingTop(): number;
        getPaddingLeft(): number;
        getPaddingBottom(): number;
        getMarginTop(): number;
        getMarginLeft(): number;
        getMarginRight(): number;
        getMarginBottom(): number;
        isBorderBox(): boolean;
        getPaddingVertical(): number;
        getMarginVertical(): number;
        static normalizeBoxSizing(arg0: string): string;
        getBorderVertical(): number;
        getBorderLeft(): number;
        innerSize(): $Size;
        getBorderTop(): number;
        getBorderHorizontal(): number;
        getPaddingHorizontal(): number;
        getMarginHorizontal(): number;
        static parseShadowList(arg0: string): $List<$Box$Shadow>;
        getBorderBottom(): number;
        getCalculatedRadii(arg0: number, arg1: number, arg2: number): number[];
        applyBorderAll(arg0: string): void;
        static parseSideBorder(arg0: string): $Box$SideBorder;
        static matchStyleName(arg0: string): boolean;
        applyPaddingAll(arg0: string): void;
        static parseBorderImage(arg0: $Style): $Box$BorderImage;
        applyMarginAll(arg0: string): void;
        applyPadding(arg0: string, arg1: string): void;
        getBorderRight(): number;
        applyBorder(arg0: string, arg1: string): void;
        getBoxSizing(): string;
        applyMargin(arg0: string, arg1: string): void;
        static parseShadow(arg0: string): $Box$Shadow;
        border: $HashMap<string, $Box$SideBorder>;
        static SIDE: $List<string>;
        static BOX_SIZING_BORDER_BOX: string;
        padding: $HashMap<string, number>;
        margin: $HashMap<string, number>;
        static BOX_SIZING_CONTENT_BOX: string;
        borderRadius: $ArrayList<number>;
        shadow: $Box$Shadow;
        borderImage: $Box$BorderImage;
        shadows: $List<$Box$Shadow>;
        element: $Element;
        constructor();
        get paddingRight(): number;
        get paddingTop(): number;
        get paddingLeft(): number;
        get paddingBottom(): number;
        get marginTop(): number;
        get marginLeft(): number;
        get marginRight(): number;
        get marginBottom(): number;
        get borderBox(): boolean;
        get paddingVertical(): number;
        get marginVertical(): number;
        get borderVertical(): number;
        get borderLeft(): number;
        get borderTop(): number;
        get borderHorizontal(): number;
        get paddingHorizontal(): number;
        get marginHorizontal(): number;
        get borderBottom(): number;
        get borderRight(): number;
        get boxSizing(): string;
    }
    export class $Transform {
        static parse(arg0: string): $List<$Transform>;
        static createTransition(arg0: $Style, arg1: $Style, arg2: $List_<$Transition_>, arg3: number, arg4: number): void;
        static interpolateTransform(arg0: $List_<$Transition$Change_>, arg1: string, arg2: string, arg3: number): void;
        static readTransition(arg0: $List_<$Transition$Change_>, arg1: $Style): void;
    }
    export interface $Transform {
    }
    export class $Transition extends $Record {
        name(): string;
        end(): number;
        static merge(arg0: $Style, arg1: string, arg2: number): void;
        start(): number;
        duration(): number;
        startTime(): number;
        delay(): number;
        static create(arg0: $Element, arg1: $Style, arg2: $Style): void;
        static isActive(arg0: $Element): boolean;
        static getOffset(arg0: string, arg1: number, arg2: number, arg3: number): number;
        static parseTime(arg0: string): number;
        static applyChanges(arg0: $Style, arg1: $List_<$Transition$Change_>): void;
        static updateStyle(arg0: $Element, arg1: $Style): boolean;
        static parseStyle(arg0: string, arg1: string): number;
        static affectsFilter(arg0: $Element): boolean;
        constructor(name: string, start: number, end: number, duration: number, delay: number, startTime: number);
    }
    export class $Color {
        toHexString(): string;
        getValue(): number;
        set(arg0: string): void;
        set(arg0: number): void;
        static parse(arg0: string): number;
        getA(): number;
        getB(): number;
        getG(): number;
        getR(): number;
        static mixColors(arg0: number, arg1: number, arg2: number): number;
        toRgbaString(): string;
        static BLACK: $Color;
        constructor(arg0: string);
        constructor(arg0: $Number);
        get value(): number;
        get a(): number;
        get b(): number;
        get g(): number;
        get r(): number;
    }
    export class $Background {
        static of(arg0: $Element): $Background;
        getLayers(): $List<$Background$Layer>;
        static resolveImagePaths(arg0: string, arg1: string): $List<string>;
        static splitTopLevelComma(arg0: string): $List<string>;
        size: string;
        color: string;
        imagePath: string;
        repeat: string;
        gradient: $Gradient;
        position: string;
        constructor();
        get layers(): $List<$Background$Layer>;
    }
    export class $Background$Layer {
        hasDrawableContent(): boolean;
        size: string;
        imagePath: string;
        repeat: string;
        gradient: $Gradient;
        position: string;
        constructor();
    }
    export class $Filter$FilterState extends $Record {
        isEmpty(): boolean;
        opacity(): number;
        invert(): number;
        brightness(): number;
        grayscale(): number;
        blurRadius(): number;
        dropShadowBlur(): number;
        dropShadowColor(): number;
        hasDropShadow(): boolean;
        dropShadowX(): number;
        dropShadowY(): number;
        hueRotate(): number;
        static EMPTY: $Filter$FilterState;
        constructor(blurRadius: number, brightness: number, grayscale: number, invert: number, hueRotate: number, opacity: number, dropShadowX: number, dropShadowY: number, dropShadowBlur: number, dropShadowColor: number);
        get empty(): boolean;
    }
    export class $Text$WrappedTextCache extends $Record {
        wrapped(): $Text$WrappedText;
        contentLen(): number;
        wrapWidthBits(): number;
        metricsHash(): number;
        contentHash(): number;
        constructor(metricsHash: number, contentHash: number, contentLen: number, wrapWidthBits: number, wrapped: $Text$WrappedText_);
    }
    export class $Gradient {
        static parse(arg0: string): $Gradient;
        getColorAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        constructor(arg0: number);
    }
    export class $Text$WrappedText extends $Record {
        lines(): $List<string>;
        width(): number;
        starts(): number[];
        height(arg0: number): number;
        constructor(lines: $List_<string>, starts: number[], width: number);
    }
    export class $Box$BorderImage {
        isEmpty(): boolean;
        slice: number[];
        outset: number[];
        repeat: string;
        gradient: $Gradient;
        width: number[];
        source: string;
        fill: boolean;
        constructor();
        get empty(): boolean;
    }
    export class $Position {
        add(arg0: $Position): $Position;
        static of(arg0: $Element): $Position;
        static getOffset(arg0: $Element): $Position;
        static parseSignedInt(arg0: string): number;
        static ZERO: $Position;
        x: number;
        y: number;
        constructor(arg0: number, arg1: number);
    }
    export class $Transition$Change extends $Record {
        name(): string;
        value(): number;
        constructor(name: string, value: number);
    }
    export class $Text {
        static wrap(arg0: $Element): $Text$WrappedText;
        static wrap(arg0: $Element, arg1: $Text): $Text$WrappedText;
        static wrap(arg0: $Text, arg1: number): $Text$WrappedText;
        static of(arg0: $Element): $Text;
        toKey(): string;
        static splitLines(arg0: string): $List<string>;
        static measureText(arg0: $Text): number;
        static measureText(arg0: $Element, arg1: string): number;
        static normalizeWhiteSpaceContent(arg0: string, arg1: string): string;
        static allowsSoftWrap(arg0: string): boolean;
        static measureLine(arg0: $Text, arg1: string): number;
        isBold(): boolean;
        isOblique(): boolean;
        static wrapCached(arg0: $Element, arg1: $Text): $Text$WrappedText;
        isRtl(): boolean;
        static calculateLineHeight(arg0: number, arg1: string): number;
        hasStroke(): boolean;
        oblique: boolean;
        strokeWidth: number;
        verticalAlign: string;
        whiteSpace: string;
        color: $Color;
        textAlign: string;
        letterSpacing: number;
        textIndent: number;
        content: string;
        fontFamily: string;
        size: $Size;
        fontSize: number;
        lineHeight: number;
        strokeColor: $Color;
        fontWeight: number;
        direction: string;
        constructor();
        get bold(): boolean;
        get rtl(): boolean;
    }
    export class $Box$SideBorder extends $Record {
        size(): number;
        type(): string;
        static getDefault(): $Box$SideBorder;
        color(): $Color;
        constructor(size: number, type: string, color: $Color);
        static get default(): $Box$SideBorder;
    }
    export class $Size extends $Record {
        add(arg0: $Size_): $Size;
        static of(arg0: $Element): $Size;
        static parse(arg0: string): number;
        static box(arg0: $Element): $Size;
        width(): number;
        static parseNumber(arg0: string): number;
        static isPercent(arg0: string): boolean;
        height(): number;
        static getTextSize(arg0: $Element): $Size;
        static measureText(arg0: $Element, arg1: string): number;
        static getWindowSize(): $Size;
        static getScaleHeight(arg0: $Element): number;
        static resolveLength(arg0: string, arg1: number, arg2: number): number;
        static getScaleWidth(arg0: $Element): number;
        static lerp(arg0: number, arg1: number): number;
        static getContentSize(arg0: $Element): $Size;
        static ZERO: $Size;
        static DEFAULT_LINE_HEIGHT: number;
        constructor(width: number, height: number);
        static get windowSize(): $Size;
    }
    export class $Box$Shadow extends $Record {
        size(): number;
        static getDefault(): $Box$Shadow;
        x(): number;
        y(): number;
        color(): $Color;
        constructor(x: number, y: number, size: number, color: $Color);
        static get default(): $Box$Shadow;
    }
}
