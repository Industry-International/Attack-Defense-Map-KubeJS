import { $Function_ } from "@package/java/util/function";
import { $AbsoluteAxis, $TaffySize, $TaffyPoint, $TaffyRect, $TaffyLine } from "@package/dev/vfyjxf/taffy/geometry";
import { $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/dev/vfyjxf/taffy/style" {
    export class $GridAutoFlow extends $Enum<$GridAutoFlow> {
        static values(): $GridAutoFlow[];
        static valueOf(arg0: string): $GridAutoFlow;
        isDense(): boolean;
        isColumn(): boolean;
        isRow(): boolean;
        static COLUMN_DENSE: $GridAutoFlow;
        static COLUMN: $GridAutoFlow;
        static ROW: $GridAutoFlow;
        static ROW_DENSE: $GridAutoFlow;
        get dense(): boolean;
        get column(): boolean;
        get row(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GridAutoFlow}.
     */
    export type $GridAutoFlow_ = "row" | "column" | "row_dense" | "column_dense";
    export class $NamedGridLine {
        getName(): string;
        getIndex(): number;
        constructor(arg0: string, arg1: number);
        get name(): string;
        get index(): number;
    }
    export class $CalcExpression {
        static percentMultipliedBy(arg0: number, arg1: number): $CalcExpression;
        static fullMinusLength(arg0: number): $CalcExpression;
        static fullPlusLength(arg0: number): $CalcExpression;
        static percentDividedBy(arg0: number, arg1: number): $CalcExpression;
        static percentMinusLength(arg0: number, arg1: number): $CalcExpression;
        static addPercents(arg0: number, arg1: number): $CalcExpression;
        static percentPlusLength(arg0: number, arg1: number): $CalcExpression;
    }
    export interface $CalcExpression {
        resolve(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $CalcExpression}.
     */
    export type $CalcExpression_ = ((arg0: number) => number);
    export class $TaffyDimension {
        static length(arg0: number): $TaffyDimension;
        getValue(): number;
        static from(arg0: $LengthPercentageAuto): $TaffyDimension;
        static from(arg0: $LengthPercentage): $TaffyDimension;
        getType(): $TaffyDimension$Type;
        static percent(arg0: number): $TaffyDimension;
        static content(): $TaffyDimension;
        isContent(): boolean;
        isPercent(): boolean;
        isAuto(): boolean;
        static maxContent(): $TaffyDimension;
        isStretch(): boolean;
        static minContent(): $TaffyDimension;
        static fitContent(): $TaffyDimension;
        static auto(): $TaffyDimension;
        isCalc(): boolean;
        intoOption(): number;
        isLength(): boolean;
        static stretch(): $TaffyDimension;
        isMinContent(): boolean;
        resolveOrZero(arg0: number): number;
        maybeResolve(arg0: number): number;
        getCalcExpression(): $CalcExpression;
        static calc(arg0: $CalcExpression_): $TaffyDimension;
        isMaxContent(): boolean;
        isFitContent(): boolean;
        isIntrinsic(): boolean;
        static ZERO: $TaffyDimension;
        static AUTO: $TaffyDimension;
        static STRETCH: $TaffyDimension;
        static MAX_CONTENT: $TaffyDimension;
        static MIN_CONTENT: $TaffyDimension;
        static FIT_CONTENT: $TaffyDimension;
        static CONTENT: $TaffyDimension;
        get value(): number;
        get type(): $TaffyDimension$Type;
        get calcExpression(): $CalcExpression;
        get intrinsic(): boolean;
    }
    export class $TaffyPosition extends $Enum<$TaffyPosition> {
        static values(): $TaffyPosition[];
        static valueOf(arg0: string): $TaffyPosition;
        static ABSOLUTE: $TaffyPosition;
        static RELATIVE: $TaffyPosition;
    }
    /**
     * Values that may be interpreted as {@link $TaffyPosition}.
     */
    export type $TaffyPosition_ = "relative" | "absolute";
    export class $AvailableSpace$Type extends $Enum<$AvailableSpace$Type> {
        static values(): $AvailableSpace$Type[];
        static valueOf(arg0: string): $AvailableSpace$Type;
        static MAX_CONTENT: $AvailableSpace$Type;
        static DEFINITE: $AvailableSpace$Type;
        static MIN_CONTENT: $AvailableSpace$Type;
    }
    /**
     * Values that may be interpreted as {@link $AvailableSpace$Type}.
     */
    export type $AvailableSpace$Type_ = "definite" | "min_content" | "max_content";
    export class $AlignContent extends $Enum<$AlignContent> {
        static values(): $AlignContent[];
        static valueOf(arg0: string): $AlignContent;
        static CENTER: $AlignContent;
        static AUTO: $AlignContent;
        static SPACE_AROUND: $AlignContent;
        static SPACE_BETWEEN: $AlignContent;
        static STRETCH: $AlignContent;
        static START: $AlignContent;
        static END: $AlignContent;
        static FLEX_END: $AlignContent;
        static SPACE_EVENLY: $AlignContent;
        static FLEX_START: $AlignContent;
    }
    /**
     * Values that may be interpreted as {@link $AlignContent}.
     */
    export type $AlignContent_ = "auto" | "start" | "end" | "flex_start" | "flex_end" | "center" | "stretch" | "space_between" | "space_evenly" | "space_around";
    export class $GridTemplateComponent {
        static repeat(arg0: $GridRepetition): $GridTemplateComponent;
        static single(arg0: $TrackSizingFunction): $GridTemplateComponent;
        getType(): $GridTemplateComponent$Type;
        getSingle(): $TrackSizingFunction;
        static autoFit(...arg0: $TrackSizingFunction[]): $GridTemplateComponent;
        getRepeat(): $GridRepetition;
        static autoFill(...arg0: $TrackSizingFunction[]): $GridTemplateComponent;
        isSingle(): boolean;
        isRepeat(): boolean;
        hasFixedComponent(): boolean;
        static repeatCount(arg0: number, ...arg1: $TrackSizingFunction[]): $GridTemplateComponent;
        isAutoRepetition(): boolean;
        get type(): $GridTemplateComponent$Type;
        get autoRepetition(): boolean;
    }
    export class $TrackSizingFunction$Type extends $Enum<$TrackSizingFunction$Type> {
        static values(): $TrackSizingFunction$Type[];
        static valueOf(arg0: string): $TrackSizingFunction$Type;
        static AUTO: $TrackSizingFunction$Type;
        static MAX_CONTENT: $TrackSizingFunction$Type;
        static FIXED: $TrackSizingFunction$Type;
        static FLEX: $TrackSizingFunction$Type;
        static MIN_CONTENT: $TrackSizingFunction$Type;
        static FIT_CONTENT: $TrackSizingFunction$Type;
        static MINMAX: $TrackSizingFunction$Type;
    }
    /**
     * Values that may be interpreted as {@link $TrackSizingFunction$Type}.
     */
    export type $TrackSizingFunction$Type_ = "fixed" | "min_content" | "max_content" | "fit_content" | "auto" | "flex" | "minmax";
    export class $TaffyDimension$Type extends $Enum<$TaffyDimension$Type> {
        static values(): $TaffyDimension$Type[];
        static valueOf(arg0: string): $TaffyDimension$Type;
        static AUTO: $TaffyDimension$Type;
        static STRETCH: $TaffyDimension$Type;
        static PERCENT: $TaffyDimension$Type;
        static MAX_CONTENT: $TaffyDimension$Type;
        static LENGTH: $TaffyDimension$Type;
        static CALC: $TaffyDimension$Type;
        static MIN_CONTENT: $TaffyDimension$Type;
        static FIT_CONTENT: $TaffyDimension$Type;
        static CONTENT: $TaffyDimension$Type;
    }
    /**
     * Values that may be interpreted as {@link $TaffyDimension$Type}.
     */
    export type $TaffyDimension$Type_ = "length" | "percent" | "auto" | "calc" | "min_content" | "max_content" | "fit_content" | "stretch" | "content";
    export class $FlexDirection extends $Enum<$FlexDirection> {
        static values(): $FlexDirection[];
        static valueOf(arg0: string): $FlexDirection;
        isColumn(): boolean;
        isRow(): boolean;
        isReverse(): boolean;
        mainAxis(): $AbsoluteAxis;
        crossAxis(): $AbsoluteAxis;
        static COLUMN: $FlexDirection;
        static COLUMN_REVERSE: $FlexDirection;
        static ROW: $FlexDirection;
        static ROW_REVERSE: $FlexDirection;
        get column(): boolean;
        get row(): boolean;
        get reverse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FlexDirection}.
     */
    export type $FlexDirection_ = "row" | "column" | "row_reverse" | "column_reverse";
    export class $TrackSizingFunction {
        getType(): $TrackSizingFunction$Type;
        static fixed(arg0: number): $TrackSizingFunction;
        static fixed(arg0: $LengthPercentage): $TrackSizingFunction;
        static percent(arg0: number): $TrackSizingFunction;
        isFixed(): boolean;
        static fr(arg0: number): $TrackSizingFunction;
        isAuto(): boolean;
        static maxContent(): $TrackSizingFunction;
        static minContent(): $TrackSizingFunction;
        static fitContent(arg0: $LengthPercentage): $TrackSizingFunction;
        static auto(): $TrackSizingFunction;
        isFr(): boolean;
        getFrValue(): number;
        isMinmax(): boolean;
        getMaxFunc(): $TrackSizingFunction;
        getMinFunc(): $TrackSizingFunction;
        static flex(arg0: number): $TrackSizingFunction;
        isFlexible(): boolean;
        isMinContent(): boolean;
        static minmax(arg0: $TrackSizingFunction, arg1: $TrackSizingFunction): $TrackSizingFunction;
        getFixedValue(): $LengthPercentage;
        getFlexValue(): number;
        isMaxContent(): boolean;
        isFitContent(): boolean;
        isIntrinsic(): boolean;
        usesPercentage(): boolean;
        getLengthValue(): $LengthPercentage;
        getDefiniteValue(arg0: number): number;
        hasFixedComponent(): boolean;
        hasIntrinsicSizingFunction(): boolean;
        getFitContentArgument(): $LengthPercentage;
        static AUTO: $TrackSizingFunction;
        static MAX_CONTENT: $TrackSizingFunction;
        static MIN_CONTENT: $TrackSizingFunction;
        get type(): $TrackSizingFunction$Type;
        get frValue(): number;
        get maxFunc(): $TrackSizingFunction;
        get minFunc(): $TrackSizingFunction;
        get flexible(): boolean;
        get fixedValue(): $LengthPercentage;
        get flexValue(): number;
        get intrinsic(): boolean;
        get lengthValue(): $LengthPercentage;
        get fitContentArgument(): $LengthPercentage;
    }
    export class $LengthPercentage {
        static length(arg0: number): $LengthPercentage;
        getValue(): number;
        resolve(arg0: number): number;
        getType(): $LengthPercentage$Type;
        static percent(arg0: number): $LengthPercentage;
        isPercent(): boolean;
        isCalc(): boolean;
        isLength(): boolean;
        resolveOrZero(arg0: number): number;
        maybeResolve(arg0: number): number;
        getCalcExpression(): $CalcExpression;
        static calc(arg0: $CalcExpression_): $LengthPercentage;
        static ZERO: $LengthPercentage;
        get value(): number;
        get type(): $LengthPercentage$Type;
        get calcExpression(): $CalcExpression;
    }
    export class $AlignItems extends $Enum<$AlignItems> {
        static values(): $AlignItems[];
        static valueOf(arg0: string): $AlignItems;
        static CENTER: $AlignItems;
        static AUTO: $AlignItems;
        static BASELINE: $AlignItems;
        static STRETCH: $AlignItems;
        static START: $AlignItems;
        static END: $AlignItems;
        static FLEX_END: $AlignItems;
        static FLEX_START: $AlignItems;
    }
    /**
     * Values that may be interpreted as {@link $AlignItems}.
     */
    export type $AlignItems_ = "auto" | "start" | "end" | "flex_start" | "flex_end" | "center" | "baseline" | "stretch";
    export class $GridRepetition {
        static count(arg0: number, arg1: $TrackSizingFunction): $GridRepetition;
        static count(arg0: number, arg1: $List_<$TrackSizingFunction>): $GridRepetition;
        getCount(): number;
        getType(): $GridRepetition$RepetitionType;
        static autoFit(arg0: $TrackSizingFunction): $GridRepetition;
        static autoFit(arg0: $List_<$TrackSizingFunction>): $GridRepetition;
        static autoFill(arg0: $List_<$TrackSizingFunction>): $GridRepetition;
        static autoFill(arg0: $TrackSizingFunction): $GridRepetition;
        getTracks(): $List<$TrackSizingFunction>;
        hasFixedComponent(): boolean;
        getTrackCount(): number;
        isAutoRepetition(): boolean;
        get type(): $GridRepetition$RepetitionType;
        get tracks(): $List<$TrackSizingFunction>;
        get trackCount(): number;
        get autoRepetition(): boolean;
    }
    export class $GridPlacement {
        getValue(): number;
        static line(arg0: number): $GridPlacement;
        getType(): $GridPlacement$Type;
        getLineNumber(): number;
        static span(arg0: number): $GridPlacement;
        isAuto(): boolean;
        static auto(): $GridPlacement;
        isNamedSpan(): boolean;
        isNamedLine(): boolean;
        static namedSpan(arg0: string, arg1: number): $GridPlacement;
        static namedLine(arg0: string, arg1: number): $GridPlacement;
        static namedLine(arg0: string): $GridPlacement;
        getLineName(): string;
        getNthIndex(): number;
        isDefinite(): boolean;
        isSpan(): boolean;
        isLine(): boolean;
        static AUTO_INSTANCE: $GridPlacement;
        get value(): number;
        get type(): $GridPlacement$Type;
        get lineNumber(): number;
        get lineName(): string;
        get nthIndex(): number;
        get definite(): boolean;
    }
    export class $BoxSizing extends $Enum<$BoxSizing> {
        static values(): $BoxSizing[];
        static valueOf(arg0: string): $BoxSizing;
        static CONTENT_BOX: $BoxSizing;
        static BORDER_BOX: $BoxSizing;
    }
    /**
     * Values that may be interpreted as {@link $BoxSizing}.
     */
    export type $BoxSizing_ = "border_box" | "content_box";
    export class $TextAlign extends $Enum<$TextAlign> {
        static values(): $TextAlign[];
        static valueOf(arg0: string): $TextAlign;
        static CENTER: $TextAlign;
        static AUTO: $TextAlign;
        static JUSTIFY: $TextAlign;
        static LEFT: $TextAlign;
        static RIGHT: $TextAlign;
        static START: $TextAlign;
        static END: $TextAlign;
        static JUSTIFY_ALL: $TextAlign;
    }
    /**
     * Values that may be interpreted as {@link $TextAlign}.
     */
    export type $TextAlign_ = "auto" | "start" | "end" | "left" | "right" | "center" | "justify" | "justify_all";
    export class $GridPlacement$Type extends $Enum<$GridPlacement$Type> {
        static values(): $GridPlacement$Type[];
        static valueOf(arg0: string): $GridPlacement$Type;
        static AUTO: $GridPlacement$Type;
        static NAMED_SPAN: $GridPlacement$Type;
        static LINE: $GridPlacement$Type;
        static NAMED_LINE: $GridPlacement$Type;
        static SPAN: $GridPlacement$Type;
    }
    /**
     * Values that may be interpreted as {@link $GridPlacement$Type}.
     */
    export type $GridPlacement$Type_ = "auto" | "line" | "named_line" | "span" | "named_span";
    export class $Overflow extends $Enum<$Overflow> {
        static values(): $Overflow[];
        static valueOf(arg0: string): $Overflow;
        maybeIntoAutomaticMinSize(): number;
        isScrollContainer(): boolean;
        static SCROLL: $Overflow;
        static HIDDEN: $Overflow;
        static VISIBLE: $Overflow;
        static CLIP: $Overflow;
        get scrollContainer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Overflow}.
     */
    export type $Overflow_ = "visible" | "clip" | "hidden" | "scroll";
    export class $BoxGenerationMode extends $Enum<$BoxGenerationMode> {
        static values(): $BoxGenerationMode[];
        static valueOf(arg0: string): $BoxGenerationMode;
        static NONE: $BoxGenerationMode;
        static NORMAL: $BoxGenerationMode;
        static DEFAULT: $BoxGenerationMode;
    }
    /**
     * Values that may be interpreted as {@link $BoxGenerationMode}.
     */
    export type $BoxGenerationMode_ = "normal" | "none";
    export class $LengthPercentageAuto {
        static length(arg0: number): $LengthPercentageAuto;
        getValue(): number;
        static from(arg0: $LengthPercentage): $LengthPercentageAuto;
        getType(): $LengthPercentageAuto$Type;
        static percent(arg0: number): $LengthPercentageAuto;
        isPercent(): boolean;
        isAuto(): boolean;
        static maxContent(): $LengthPercentageAuto;
        isStretch(): boolean;
        static minContent(): $LengthPercentageAuto;
        static fitContent(): $LengthPercentageAuto;
        static auto(): $LengthPercentageAuto;
        isCalc(): boolean;
        resolveToOption(arg0: number): number;
        isLength(): boolean;
        static stretch(): $LengthPercentageAuto;
        isMinContent(): boolean;
        resolveOrZero(arg0: number): number;
        maybeResolve(arg0: number): number;
        getCalcExpression(): $CalcExpression;
        static calc(arg0: $CalcExpression_): $LengthPercentageAuto;
        isMaxContent(): boolean;
        isFitContent(): boolean;
        isIntrinsic(): boolean;
        static ZERO: $LengthPercentageAuto;
        static AUTO: $LengthPercentageAuto;
        static STRETCH: $LengthPercentageAuto;
        static MAX_CONTENT: $LengthPercentageAuto;
        static MIN_CONTENT: $LengthPercentageAuto;
        static FIT_CONTENT: $LengthPercentageAuto;
        get value(): number;
        get type(): $LengthPercentageAuto$Type;
        get calcExpression(): $CalcExpression;
        get intrinsic(): boolean;
    }
    export class $LengthPercentage$Type extends $Enum<$LengthPercentage$Type> {
        static values(): $LengthPercentage$Type[];
        static valueOf(arg0: string): $LengthPercentage$Type;
        static PERCENT: $LengthPercentage$Type;
        static LENGTH: $LengthPercentage$Type;
        static CALC: $LengthPercentage$Type;
    }
    /**
     * Values that may be interpreted as {@link $LengthPercentage$Type}.
     */
    export type $LengthPercentage$Type_ = "length" | "percent" | "calc";
    export class $GridTemplateComponent$Type extends $Enum<$GridTemplateComponent$Type> {
        static values(): $GridTemplateComponent$Type[];
        static valueOf(arg0: string): $GridTemplateComponent$Type;
        static SINGLE: $GridTemplateComponent$Type;
        static REPEAT: $GridTemplateComponent$Type;
    }
    /**
     * Values that may be interpreted as {@link $GridTemplateComponent$Type}.
     */
    export type $GridTemplateComponent$Type_ = "single" | "repeat";
    export class $TaffyDisplay extends $Enum<$TaffyDisplay> {
        static values(): $TaffyDisplay[];
        static valueOf(arg0: string): $TaffyDisplay;
        static GRID: $TaffyDisplay;
        static BLOCK: $TaffyDisplay;
        static FLEX: $TaffyDisplay;
        static NONE: $TaffyDisplay;
        static DEFAULT: $TaffyDisplay;
    }
    /**
     * Values that may be interpreted as {@link $TaffyDisplay}.
     */
    export type $TaffyDisplay_ = "block" | "flex" | "grid" | "none";
    export class $GridRepetition$RepetitionType extends $Enum<$GridRepetition$RepetitionType> {
        static values(): $GridRepetition$RepetitionType[];
        static valueOf(arg0: string): $GridRepetition$RepetitionType;
        static AUTO_FILL: $GridRepetition$RepetitionType;
        static COUNT: $GridRepetition$RepetitionType;
        static AUTO_FIT: $GridRepetition$RepetitionType;
    }
    /**
     * Values that may be interpreted as {@link $GridRepetition$RepetitionType}.
     */
    export type $GridRepetition$RepetitionType_ = "count" | "auto_fill" | "auto_fit";
    export class $FlexWrap extends $Enum<$FlexWrap> {
        static values(): $FlexWrap[];
        static valueOf(arg0: string): $FlexWrap;
        static NO_WRAP: $FlexWrap;
        static WRAP: $FlexWrap;
        static WRAP_REVERSE: $FlexWrap;
    }
    /**
     * Values that may be interpreted as {@link $FlexWrap}.
     */
    export type $FlexWrap_ = "no_wrap" | "wrap" | "wrap_reverse";
    export class $TaffyDirection extends $Enum<$TaffyDirection> {
        static values(): $TaffyDirection[];
        static valueOf(arg0: string): $TaffyDirection;
        opposite(): $TaffyDirection;
        isRtl(): boolean;
        isInherit(): boolean;
        isLtr(): boolean;
        static INHERIT: $TaffyDirection;
        static LTR: $TaffyDirection;
        static RTL: $TaffyDirection;
        static DEFAULT: $TaffyDirection;
        get rtl(): boolean;
        get inherit(): boolean;
        get ltr(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TaffyDirection}.
     */
    export type $TaffyDirection_ = "inherit" | "ltr" | "rtl";
    export class $JustifyContent extends $Enum<$JustifyContent> {
        static values(): $JustifyContent[];
        static valueOf(arg0: string): $JustifyContent;
        static CENTER: $JustifyContent;
        static SPACE_AROUND: $JustifyContent;
        static SPACE_BETWEEN: $JustifyContent;
        static STRETCH: $JustifyContent;
        static START: $JustifyContent;
        static END: $JustifyContent;
        static FLEX_END: $JustifyContent;
        static SPACE_EVENLY: $JustifyContent;
        static FLEX_START: $JustifyContent;
    }
    /**
     * Values that may be interpreted as {@link $JustifyContent}.
     */
    export type $JustifyContent_ = "flex_start" | "flex_end" | "center" | "space_between" | "space_around" | "space_evenly" | "start" | "end" | "stretch";
    export class $TaffyStyle {
        copy(): $TaffyStyle;
        getSize(): $TaffySize<$TaffyDimension>;
        getPosition(): $TaffyPosition;
        getBorder(): $TaffyRect<$LengthPercentage>;
        getPadding(): $TaffyRect<$LengthPercentage>;
        getMargin(): $TaffyRect<$LengthPercentageAuto>;
        getMaxSize(): $TaffySize<$TaffyDimension>;
        getDirection(): $TaffyDirection;
        flex(arg0: number, arg1: number, arg2: $TaffyDimension): $TaffyStyle;
        flex(arg0: number): $TaffyStyle;
        flex(arg0: number, arg1: number, arg2: number): $TaffyStyle;
        flex(arg0: number, arg1: number): $TaffyStyle;
        getAlignContent(): $AlignContent;
        getAspectRatio(): number;
        getFlexDirection(): $FlexDirection;
        getJustifyContent(): $JustifyContent;
        getAlignSelf(): $AlignItems;
        getOverflow(): $TaffyPoint<$Overflow>;
        getFlexBasis(): $TaffyDimension;
        getFlexGrow(): number;
        getAlignItems(): $AlignItems;
        getFlexShrink(): number;
        setFlex(arg0: number): $TaffyStyle;
        flexAuto(): $TaffyStyle;
        getScrollbarWidth(): number;
        getGap(): $TaffySize<$LengthPercentage>;
        isBlock(): boolean;
        getDisplay(): $TaffyDisplay;
        getMinSize(): $TaffySize<$TaffyDimension>;
        getTextAlign(): $TextAlign;
        getBoxSizing(): $BoxSizing;
        boxGenerationMode(): $BoxGenerationMode;
        flexInitial(): $TaffyStyle;
        getGridColumnStart(): $GridPlacement;
        getItemIsReplaced(): boolean;
        getGridColumnEnd(): $GridPlacement;
        hasAspectRatio(): boolean;
        getFlexWrap(): $FlexWrap;
        getGridAutoRows(): $List<$TrackSizingFunction>;
        getGridAutoColumns(): $List<$TrackSizingFunction>;
        getGridRowStart(): $GridPlacement;
        getItemIsTable(): boolean;
        getGridRowEnd(): $GridPlacement;
        getGridAutoFlow(): $GridAutoFlow;
        getFlex(): number;
        flexNone(): $TaffyStyle;
        clearFlex(): $TaffyStyle;
        getInset(): $TaffyRect<$LengthPercentageAuto>;
        getGridTemplateColumns(): $List<$TrackSizingFunction>;
        getEffectiveFlexBasis(): $TaffyDimension;
        getGridTemplateRows(): $List<$TrackSizingFunction>;
        getBoxGenerationMode(): $BoxGenerationMode;
        getEffectiveFlexGrow(): number;
        getEffectiveFlexShrink(): number;
        gridAutoColumns: $List<$TrackSizingFunction>;
        gridTemplateColumnNames: $List<$NamedGridLine>;
        flexGrow: number;
        gridAutoRows: $List<$TrackSizingFunction>;
        gridColumn: $TaffyLine<$GridPlacement>;
        boxSizing: $BoxSizing;
        maxSize: $TaffySize<$TaffyDimension>;
        aspectRatio: number;
        alignContent: $AlignContent;
        gridTemplateRowsWithRepeat: $List<$GridTemplateComponent>;
        overflow: $TaffyPoint<$Overflow>;
        itemIsTable: boolean;
        gridRow: $TaffyLine<$GridPlacement>;
        flexWrap: $FlexWrap;
        gap: $TaffySize<$LengthPercentage>;
        flexShrink: number;
        minSize: $TaffySize<$TaffyDimension>;
        itemIsReplaced: boolean;
        direction: $TaffyDirection;
        scrollbarWidth: number;
        border: $TaffyRect<$LengthPercentage>;
        padding: $TaffyRect<$LengthPercentage>;
        margin: $TaffyRect<$LengthPercentageAuto>;
        alignSelf: $AlignItems;
        gridAutoFlow: $GridAutoFlow;
        alignItems: $AlignItems;
        textAlign: $TextAlign;
        inset: $TaffyRect<$LengthPercentageAuto>;
        flexDirection: $FlexDirection;
        display: $TaffyDisplay;
        flexBasis: $TaffyDimension;
        justifySelf: $AlignItems;
        gridTemplateColumnsWithRepeat: $List<$GridTemplateComponent>;
        gridTemplateAreas: $List<$GridTemplateArea>;
        justifyContent: $AlignContent;
        justifyItems: $AlignItems;
        gridTemplateRows: $List<$TrackSizingFunction>;
        size: $TaffySize<$TaffyDimension>;
        gridTemplateRowNames: $List<$NamedGridLine>;
        gridTemplateColumns: $List<$TrackSizingFunction>;
        position: $TaffyPosition;
        constructor();
        get block(): boolean;
        get gridColumnStart(): $GridPlacement;
        get gridColumnEnd(): $GridPlacement;
        get gridRowStart(): $GridPlacement;
        get gridRowEnd(): $GridPlacement;
        get effectiveFlexBasis(): $TaffyDimension;
        get effectiveFlexGrow(): number;
        get effectiveFlexShrink(): number;
    }
    export class $AvailableSpace {
        getValue(): number;
        getType(): $AvailableSpace$Type;
        static maxContent(): $AvailableSpace;
        static minContent(): $AvailableSpace;
        intoOption(): number;
        isMinContent(): boolean;
        static definite(arg0: number): $AvailableSpace;
        isDefinite(): boolean;
        isMaxContent(): boolean;
        isRoughlyEqual(arg0: $AvailableSpace): boolean;
        mapDefiniteValue(arg0: $Function_<number, number>): $AvailableSpace;
        maybeMin(arg0: number): $AvailableSpace;
        unwrapOr(arg0: number): number;
        maybeAdd(arg0: number): $AvailableSpace;
        maybeMax(arg0: number): $AvailableSpace;
        maybeSub(arg0: number): $AvailableSpace;
        static ZERO: $AvailableSpace;
        static MAX_CONTENT: $AvailableSpace;
        static MIN_CONTENT: $AvailableSpace;
        get value(): number;
        get type(): $AvailableSpace$Type;
    }
    export class $GridTemplateArea {
        getName(): string;
        getRowStart(): number;
        getRowEnd(): number;
        getColumnStart(): number;
        getColumnEnd(): number;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number);
        get name(): string;
        get rowStart(): number;
        get rowEnd(): number;
        get columnStart(): number;
        get columnEnd(): number;
    }
    export class $LengthPercentageAuto$Type extends $Enum<$LengthPercentageAuto$Type> {
        static values(): $LengthPercentageAuto$Type[];
        static valueOf(arg0: string): $LengthPercentageAuto$Type;
        static AUTO: $LengthPercentageAuto$Type;
        static STRETCH: $LengthPercentageAuto$Type;
        static PERCENT: $LengthPercentageAuto$Type;
        static MAX_CONTENT: $LengthPercentageAuto$Type;
        static LENGTH: $LengthPercentageAuto$Type;
        static CALC: $LengthPercentageAuto$Type;
        static MIN_CONTENT: $LengthPercentageAuto$Type;
        static FIT_CONTENT: $LengthPercentageAuto$Type;
    }
    /**
     * Values that may be interpreted as {@link $LengthPercentageAuto$Type}.
     */
    export type $LengthPercentageAuto$Type_ = "length" | "percent" | "auto" | "calc" | "min_content" | "max_content" | "fit_content" | "stretch";
}
