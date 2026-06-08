import { $Enum } from "@package/java/lang";
export * as numeric from "@package/org/appliedenergistics/yoga/numeric";
export * as style from "@package/org/appliedenergistics/yoga/style";

declare module "@package/org/appliedenergistics/yoga" {
    export class $YogaEdge extends $Enum<$YogaEdge> {
        static values(): $YogaEdge[];
        static valueOf(arg0: string): $YogaEdge;
        static ALL: $YogaEdge;
        static LEFT: $YogaEdge;
        static TOP: $YogaEdge;
        static VERTICAL: $YogaEdge;
        static RIGHT: $YogaEdge;
        static START: $YogaEdge;
        static END: $YogaEdge;
        static BOTTOM: $YogaEdge;
        static HORIZONTAL: $YogaEdge;
    }
    /**
     * Values that may be interpreted as {@link $YogaEdge}.
     */
    export type $YogaEdge_ = "left" | "top" | "right" | "bottom" | "start" | "end" | "horizontal" | "vertical" | "all";
    export class $YogaDisplay extends $Enum<$YogaDisplay> {
        static values(): $YogaDisplay[];
        static valueOf(arg0: string): $YogaDisplay;
        static FLEX: $YogaDisplay;
        static NONE: $YogaDisplay;
        static CONTENTS: $YogaDisplay;
    }
    /**
     * Values that may be interpreted as {@link $YogaDisplay}.
     */
    export type $YogaDisplay_ = "flex" | "none" | "contents";
    export class $YogaGutter extends $Enum<$YogaGutter> {
        static values(): $YogaGutter[];
        static valueOf(arg0: string): $YogaGutter;
        static ALL: $YogaGutter;
        static COLUMN: $YogaGutter;
        static ROW: $YogaGutter;
    }
    /**
     * Values that may be interpreted as {@link $YogaGutter}.
     */
    export type $YogaGutter_ = "column" | "row" | "all";
    export class $YogaAlign extends $Enum<$YogaAlign> {
        static values(): $YogaAlign[];
        static valueOf(arg0: string): $YogaAlign;
        static CENTER: $YogaAlign;
        static AUTO: $YogaAlign;
        static BASELINE: $YogaAlign;
        static SPACE_AROUND: $YogaAlign;
        static SPACE_BETWEEN: $YogaAlign;
        static STRETCH: $YogaAlign;
        static FLEX_END: $YogaAlign;
        static SPACE_EVENLY: $YogaAlign;
        static FLEX_START: $YogaAlign;
    }
    /**
     * Values that may be interpreted as {@link $YogaAlign}.
     */
    export type $YogaAlign_ = "auto" | "flex_start" | "center" | "flex_end" | "stretch" | "baseline" | "space_between" | "space_around" | "space_evenly";
    export class $YogaOverflow extends $Enum<$YogaOverflow> {
        static values(): $YogaOverflow[];
        static valueOf(arg0: string): $YogaOverflow;
        static SCROLL: $YogaOverflow;
        static HIDDEN: $YogaOverflow;
        static VISIBLE: $YogaOverflow;
    }
    /**
     * Values that may be interpreted as {@link $YogaOverflow}.
     */
    export type $YogaOverflow_ = "visible" | "hidden" | "scroll";
    export class $YogaJustify extends $Enum<$YogaJustify> {
        static values(): $YogaJustify[];
        static valueOf(arg0: string): $YogaJustify;
        static CENTER: $YogaJustify;
        static SPACE_AROUND: $YogaJustify;
        static SPACE_BETWEEN: $YogaJustify;
        static FLEX_END: $YogaJustify;
        static SPACE_EVENLY: $YogaJustify;
        static FLEX_START: $YogaJustify;
    }
    /**
     * Values that may be interpreted as {@link $YogaJustify}.
     */
    export type $YogaJustify_ = "flex_start" | "center" | "flex_end" | "space_between" | "space_around" | "space_evenly";
    export class $YogaDirection extends $Enum<$YogaDirection> {
        static values(): $YogaDirection[];
        static valueOf(arg0: string): $YogaDirection;
        static INHERIT: $YogaDirection;
        static LTR: $YogaDirection;
        static RTL: $YogaDirection;
    }
    /**
     * Values that may be interpreted as {@link $YogaDirection}.
     */
    export type $YogaDirection_ = "inherit" | "ltr" | "rtl";
    export class $YogaValue {
        static percent(arg0: number): $YogaValue;
        neg(): $YogaValue;
        static point(arg0: number): $YogaValue;
        static ZERO: $YogaValue;
        static AUTO: $YogaValue;
        unit: $YogaUnit;
        static UNDEFINED: $YogaValue;
        value: number;
        constructor(arg0: number, arg1: $YogaUnit_);
    }
    export class $YogaUnit extends $Enum<$YogaUnit> {
        static values(): $YogaUnit[];
        static valueOf(arg0: string): $YogaUnit;
        static AUTO: $YogaUnit;
        static STRETCH: $YogaUnit;
        static PERCENT: $YogaUnit;
        static MAX_CONTENT: $YogaUnit;
        static UNDEFINED: $YogaUnit;
        static FIT_CONTENT: $YogaUnit;
        static POINT: $YogaUnit;
    }
    /**
     * Values that may be interpreted as {@link $YogaUnit}.
     */
    export type $YogaUnit_ = "undefined" | "point" | "percent" | "auto" | "max_content" | "fit_content" | "stretch";
    export class $YogaWrap extends $Enum<$YogaWrap> {
        static values(): $YogaWrap[];
        static valueOf(arg0: string): $YogaWrap;
        static NO_WRAP: $YogaWrap;
        static WRAP: $YogaWrap;
        static WRAP_REVERSE: $YogaWrap;
    }
    /**
     * Values that may be interpreted as {@link $YogaWrap}.
     */
    export type $YogaWrap_ = "no_wrap" | "wrap" | "wrap_reverse";
    export class $YogaPositionType extends $Enum<$YogaPositionType> {
        static values(): $YogaPositionType[];
        static valueOf(arg0: string): $YogaPositionType;
        static ABSOLUTE: $YogaPositionType;
        static RELATIVE: $YogaPositionType;
        static STATIC: $YogaPositionType;
    }
    /**
     * Values that may be interpreted as {@link $YogaPositionType}.
     */
    export type $YogaPositionType_ = "static" | "relative" | "absolute";
    export class $YogaFlexDirection extends $Enum<$YogaFlexDirection> {
        static values(): $YogaFlexDirection[];
        static valueOf(arg0: string): $YogaFlexDirection;
        static COLUMN: $YogaFlexDirection;
        static COLUMN_REVERSE: $YogaFlexDirection;
        static ROW: $YogaFlexDirection;
        static ROW_REVERSE: $YogaFlexDirection;
    }
    /**
     * Values that may be interpreted as {@link $YogaFlexDirection}.
     */
    export type $YogaFlexDirection_ = "column" | "column_reverse" | "row" | "row_reverse";
}
