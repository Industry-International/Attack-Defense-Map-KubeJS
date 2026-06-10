import { $TransitionAnimation, $Transition_, $Transition } from "@package/com/lowdragmc/lowdraglib2/gui/ui/style/animation";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Pattern } from "@package/java/util/regex";
import { $List, $Map_, $List_, $Collection, $Map } from "@package/java/util";
import { $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Tooltips_, $Tooltips, $Transform2D, $GridTemplate_, $GridTemplateAreas_, $Grid_, $GridAuto_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $Supplier_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $YogaFlexDirection_, $YogaJustify_, $YogaDirection_, $YogaOverflow, $YogaGutter_, $YogaPositionType_, $YogaAlign_, $YogaEdge_, $YogaOverflow_, $YogaWrap_, $YogaDisplay_ } from "@package/org/appliedenergistics/yoga";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModularUI, $Style, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $AlignContent, $TaffyPosition, $FlexWrap_, $AlignItems, $GridAutoFlow_, $AlignItems_, $TaffyDimension, $FlexDirection, $TaffyDirection } from "@package/dev/vfyjxf/taffy/style";
import { $StyleLength, $StyleSizeLength } from "@package/org/appliedenergistics/yoga/style";
export * as animation from "@package/com/lowdragmc/lowdraglib2/gui/ui/style/animation";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/style" {
    export class $HierarchicalStyleMatcher$SelectorGroup extends $Record {
        styleMatcher(): $StyleMatcher;
        isChildCombinator(): boolean;
        constructor(styleMatcher: $StyleMatcher_, isChildCombinator: boolean);
        get childCombinator(): boolean;
    }
    export class $IValueInterpolator<T> {
        static binary<V>(): $IValueInterpolator<V>;
        static snapToEnd<V>(): $IValueInterpolator<V>;
        static neverInterpolate<V>(): $IValueInterpolator<V>;
        /**
         * @deprecated
         */
        static alwaysInterpolate<V>(): $IValueInterpolator<V>;
        static BINARY: $IValueInterpolator<any>;
        static SNAP_TO_END: $IValueInterpolator<any>;
        /**
         * @deprecated
         */
        static ALWAYS_INTERPOLATE: $IValueInterpolator<any>;
        static NEVER_INTERPOLATE: $IValueInterpolator<any>;
    }
    export interface $IValueInterpolator<T> {
        interpolate(arg0: T, arg1: T, arg2: number): T;
    }
    /**
     * Values that may be interpreted as {@link $IValueInterpolator}.
     */
    export type $IValueInterpolator_<T> = ((arg0: T, arg1: T, arg2: number) => T);
    export class $Stylesheet {
        getName(): string;
        clear(): void;
        merge(arg0: $Stylesheet): void;
        setName(arg0: string): void;
        static parse(arg0: string): $Stylesheet;
        static parseStyleValues(arg0: string): $Map<$Property<never>, $StyleValue<never>>;
        addRule(arg0: $StyleRule): void;
        calculateValues(arg0: $UIElement): $List<$StyleRule>;
        getRawLss(): string;
        removeRule(arg0: $StyleRule): void;
        static DECL: $Pattern;
        static RULE: $Pattern;
        rules: $List<$StyleRule>;
        static EMPTY: $Stylesheet;
        constructor(arg0: $List_<$StyleRule>);
        get rawLss(): string;
    }
    export class $StyleRule {
        getProperty(arg0: $Property<never>): $StyleValue<never>;
        matches(arg0: $UIElement): boolean;
        getSpecificity(): number;
        sourceOrder: number;
        matcher: $HierarchicalStyleMatcher;
        properties: $Map<$Property<never>, $StyleValue<never>>;
        constructor(arg0: $HierarchicalStyleMatcher, arg1: $Map_<$Property<never>, $StyleValue<never>>);
        get specificity(): number;
    }
    export class $StylesheetManager implements $ResourceManagerReloadListener {
        unregisterBuiltinStylesheet(arg0: $ResourceLocation_): void;
        getStylesheet(arg0: $ResourceLocation_): $Stylesheet;
        onResourceManagerReload(arg0: $ResourceManager): void;
        getStylesheetSafe(arg0: $ResourceLocation_): $Stylesheet;
        unregisterEngine(arg0: $StyleEngine): void;
        hasStylesheet(arg0: $ResourceLocation_): boolean;
        registerEngine(arg0: $StyleEngine): void;
        getAllBuiltinStylesheets(): $Collection<$ResourceLocation>;
        getMergedStylesheetsOrElse(arg0: string, arg1: $Stylesheet): $Stylesheet;
        registerBuiltinStylesheet(arg0: $ResourceLocation_, arg1: $Stylesheet): void;
        getMergedStylesheets(arg0: string): $Stylesheet;
        getStylesheetOrElse(arg0: $ResourceLocation_, arg1: $Stylesheet): $Stylesheet;
        getAllPackStylesheets(): $Collection<$ResourceLocation>;
        getMergedStylesheetsSafe(arg0: string): $Stylesheet;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        static PATH: string;
        static MODERN: $ResourceLocation;
        static GDP: $ResourceLocation;
        static ORE: $ResourceLocation;
        static MC: $ResourceLocation;
        static ORE_MERGED: $ResourceLocation;
        static INSTANCE: $StylesheetManager;
        static GDP_MERGED: $ResourceLocation;
        static MODERN_MERGED: $ResourceLocation;
        static MC_MERGED: $ResourceLocation;
        get allBuiltinStylesheets(): $Collection<$ResourceLocation>;
        get allPackStylesheets(): $Collection<$ResourceLocation>;
        get name(): string;
    }
    export class $StyleMatcher extends $Record {
        matches(arg0: $UIElement): boolean;
        static create(arg0: $List_<$StyleSelector_>): $StyleMatcher;
        static create(arg0: $StyleSelector_[]): $StyleMatcher;
        selector(): $StyleSelector[];
        weight(): number;
        constructor(selector: $StyleSelector_[], weight: number);
    }
    export class $StyleOrigin extends $Enum<$StyleOrigin> {
        static values(): $StyleOrigin[];
        static valueOf(arg0: string): $StyleOrigin;
        static STYLESHEET: $StyleOrigin;
        static ANIMATION: $StyleOrigin;
        static IMPORTANT: $StyleOrigin;
        static INLINE: $StyleOrigin;
        priority: number;
        static DEFAULT: $StyleOrigin;
    }
    /**
     * Values that may be interpreted as {@link $StyleOrigin}.
     */
    export type $StyleOrigin_ = "default" | "stylesheet" | "inline" | "animation" | "important";
    export class $StyleValue<T> {
        compute(): T;
        rawValue: string;
        constructor(arg0: string);
    }
    export class $StyleSelector extends $Record {
        scope(): $SelectorScope;
        type(): $SelectorType;
        matches(arg0: $UIElement): boolean;
        identity(): $Either<string, $HierarchicalStyleMatcher>;
        static parse(arg0: string): $StyleSelector;
        weight(): number;
        static parseNotSelector(arg0: string): $StyleSelector;
        constructor(type: $SelectorType, identity: $Either<string, $HierarchicalStyleMatcher>, scope: $SelectorScope);
    }
    export class $StyleChangeListener<T> {
    }
    export interface $StyleChangeListener<T> {
        onComputedChange(arg0: $UIElement, arg1: $Property<T>, arg2: T, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $StyleChangeListener}.
     */
    export type $StyleChangeListener_<T> = ((arg0: $UIElement, arg1: $Property<T>, arg2: T, arg3: T) => void);
    export class $HierarchicalStyleMatcher {
        matches(arg0: $UIElement): boolean;
        static parse(arg0: string): $HierarchicalStyleMatcher;
        getSpecificity(): number;
        getSelectorGroups(): $List<$HierarchicalStyleMatcher$SelectorGroup>;
        constructor(arg0: $List_<$HierarchicalStyleMatcher$SelectorGroup_>);
        get specificity(): number;
        get selectorGroups(): $List<$HierarchicalStyleMatcher$SelectorGroup>;
    }
    export class $StyleBag {
        compute(arg0: number): void;
        isDirty(): boolean;
        putCandidates(arg0: $Map_<$Property<never>, $StyleValue<never>>, arg1: $StyleOrigin_, arg2: number, arg3: number): void;
        removeCandidates(arg0: $Predicate_<$StyleSlot<never>>): void;
        removeCandidates(arg0: $Property<never>, arg1: $Predicate_<$StyleSlot<never>>): void;
        computeCandidate<T>(arg0: $Property<T>): T;
        moveInlineAsDefault(): void;
        replaceOrPutCandidate<T>(arg0: $Property<T>, arg1: $StyleSlot_<T>): void;
        markDirty(): void;
        getComputed<T>(arg0: $Property<T>): T;
        onAnimationUpdate<T>(arg0: $StyleOrigin_, arg1: $Property<T>, arg2: T): void;
        onTransitionUpdate<T>(arg0: $TransitionAnimation<T>, arg1: T, arg2: T): void;
        containsCandidate(arg0: $Property<never>, arg1: $Predicate_<$StyleSlot<never>>): boolean;
        clearCandidates(): void;
        putCandidate<T>(arg0: $Property<T>, arg1: $StyleSlot_<T>): void;
        computeCandidateSlot<T>(arg0: $Property<T>): $StyleSlot<T>;
        onTransitionFinished<T>(arg0: $TransitionAnimation<T>): void;
        replaceAnimationFinal<T>(arg0: $Property<T>, arg1: $Predicate_<$StyleSlot<never>>, arg2: $StyleSlot_<T>): void;
        candidates: $Map<$Property<never>, $List<$StyleSlot<never>>>;
        element: $UIElement;
        constructor(arg0: $UIElement);
        get dirty(): boolean;
    }
    export class $ValueParser<T> {
    }
    export interface $ValueParser<T> {
        parse(arg0: string): $StyleValue<T>;
    }
    /**
     * Values that may be interpreted as {@link $ValueParser}.
     */
    export type $ValueParser_<T> = ((arg0: string) => $StyleValue<T>);
    export class $StyleEngine {
        remove(arg0: $StyleBag): void;
        enqueue(arg0: $StyleBag): void;
        dispose(): void;
        addLocalStylesheet(arg0: $UIElement, arg1: $Stylesheet): void;
        scheduleReloadElementStyles(arg0: $UIElement): void;
        addStylesheets(arg0: $List_<$Stylesheet>): void;
        addStylesheets(...arg0: $Stylesheet[]): void;
        onElementRegister(arg0: $UIElement): void;
        requireCalculate(): boolean;
        calculateStyle(): void;
        removeLocalStylesheet(arg0: $UIElement, arg1: $Stylesheet): void;
        inQueue(arg0: $StyleBag): boolean;
        removeStylesheet(arg0: $Stylesheet): void;
        addStylesheet(arg0: $Stylesheet): void;
        scheduleFullReload(): void;
        onElementUnregister(arg0: $UIElement): void;
        clearAllStylesheets(): void;
        getElementStyleRules(): $Map<$UIElement, $Map<$Stylesheet, $List<$StyleRule>>>;
        modularUI: $ModularUI;
        globalSheets: $List<$Stylesheet>;
        constructor(arg0: $ModularUI);
        get elementStyleRules(): $Map<$UIElement, $Map<$Stylesheet, $List<$StyleRule>>>;
    }
    export class $LayoutStyle extends $Style {
        getWidth(): $TaffyDimension;
        /**
         * @deprecated
         */
        top(arg0: $StyleLength): $LayoutStyle;
        top(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        left(arg0: $StyleLength): $LayoutStyle;
        left(arg0: number): $LayoutStyle;
        right(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        right(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        bottom(arg0: $StyleLength): $LayoutStyle;
        bottom(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $LayoutStyle;
        width(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        minWidth(arg0: $StyleSizeLength): $LayoutStyle;
        minWidth(arg0: number): $LayoutStyle;
        maxWidth(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        maxWidth(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        height(arg0: $StyleSizeLength): $LayoutStyle;
        height(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightPercent(arg0: number): $LayoutStyle;
        marginHorizontalPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthFitContent(): $LayoutStyle;
        maxHeightMinContent(): $LayoutStyle;
        marginVerticalPercent(arg0: number): $LayoutStyle;
        paddingRightPercent(arg0: number): $LayoutStyle;
        paddingBottomPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightFitContent(): $LayoutStyle;
        minHeightFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightMaxContent(): $LayoutStyle;
        paddingHorizontalPercent(arg0: number): $LayoutStyle;
        minHeightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightStretch(): $LayoutStyle;
        minHeightMinContent(): $LayoutStyle;
        marginHorizontalAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthMaxContent(): $LayoutStyle;
        flexBasisMaxContent(): $LayoutStyle;
        flexBasisMinContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightStretch(): $LayoutStyle;
        flexBasisFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthFitContent(): $LayoutStyle;
        maxHeightMaxContent(): $LayoutStyle;
        maxHeightFitContent(): $LayoutStyle;
        paddingVerticalPercent(arg0: number): $LayoutStyle;
        marginBottomPercent(arg0: number): $LayoutStyle;
        gridTemplateColumns(arg0: $GridTemplate_): $LayoutStyle;
        gridTemplateColumns(arg0: string): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setDisplay(arg0: $YogaDisplay_): $LayoutStyle;
        /**
         * @deprecated
         */
        setDirection(arg0: $YogaDirection_): $LayoutStyle;
        /**
         * @deprecated
         */
        marginTop(arg0: $StyleLength): $LayoutStyle;
        marginTop(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMargin(arg0: $YogaEdge_, arg1: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMargin(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        flexGrow(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setGap(arg0: $YogaGutter_, arg1: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setGap(arg0: $YogaGutter_, arg1: number): $LayoutStyle;
        gapRow(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        gapRow(arg0: $StyleLength): $LayoutStyle;
        rightAuto(): $LayoutStyle;
        flexBasis(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlex(arg0: number): $LayoutStyle;
        bottomAuto(): $LayoutStyle;
        flexShrink(arg0: number): $LayoutStyle;
        gridRow(arg0: string): $LayoutStyle;
        gridRow(arg0: $Grid_): $LayoutStyle;
        gridColumn(arg0: $Grid_): $LayoutStyle;
        gridColumn(arg0: string): $LayoutStyle;
        flexAuto(): $LayoutStyle;
        flexWrap(arg0: $FlexWrap_): $LayoutStyle;
        gapColumn(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        gapColumn(arg0: $StyleLength): $LayoutStyle;
        topAuto(): $LayoutStyle;
        alignItems(arg0: $AlignItems_): $LayoutStyle;
        widthAuto(): $LayoutStyle;
        heightAuto(): $LayoutStyle;
        leftAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setWrap(arg0: $YogaWrap_): $LayoutStyle;
        topPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        gapAll(arg0: $StyleLength): $LayoutStyle;
        gapAll(arg0: number): $LayoutStyle;
        flex(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginAll(arg0: $StyleLength): $LayoutStyle;
        marginAll(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginLeft(arg0: $StyleLength): $LayoutStyle;
        marginLeft(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPadding(arg0: $YogaEdge_, arg1: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setPadding(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setOverflow(arg0: $YogaOverflow_): $LayoutStyle;
        getMaxHeight(): $TaffyDimension;
        getMaxWidth(): $TaffyDimension;
        marginRight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginRight(arg0: $StyleLength): $LayoutStyle;
        overflow(arg0: $YogaOverflow_): $LayoutStyle;
        /**
         * @deprecated
         */
        setPosition(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPosition(arg0: $YogaEdge_, arg1: $StyleLength): $LayoutStyle;
        minHeight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        minHeight(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingLeft(arg0: $StyleLength): $LayoutStyle;
        paddingLeft(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingRight(arg0: $StyleLength): $LayoutStyle;
        paddingRight(arg0: number): $LayoutStyle;
        paddingBottom(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingBottom(arg0: $StyleLength): $LayoutStyle;
        paddingTop(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingTop(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        maxHeight(arg0: $StyleSizeLength): $LayoutStyle;
        maxHeight(arg0: number): $LayoutStyle;
        getHeight(): $TaffyDimension;
        getMinWidth(): $TaffyDimension;
        /**
         * @deprecated
         */
        setWidth(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidth(arg0: number): $LayoutStyle;
        setWidth(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeight(arg0: $StyleSizeLength): $LayoutStyle;
        setHeight(arg0: $TaffyDimension): $LayoutStyle;
        paddingAll(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingAll(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidth(arg0: $StyleSizeLength): $LayoutStyle;
        setMaxWidth(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidth(arg0: number): $LayoutStyle;
        heightPercent(arg0: number): $LayoutStyle;
        widthPercent(arg0: number): $LayoutStyle;
        setAspectRatio(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthPercent(arg0: number): $LayoutStyle;
        minWidthPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthAuto(): $LayoutStyle;
        minWidthAuto(): $LayoutStyle;
        setFlexShrinkAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeight(arg0: $StyleSizeLength): $LayoutStyle;
        setMaxHeight(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthPercent(arg0: number): $LayoutStyle;
        minWidthMaxContent(): $LayoutStyle;
        minWidthMinContent(): $LayoutStyle;
        minWidthFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthStretch(): $LayoutStyle;
        setFlexGrow(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthMaxContent(): $LayoutStyle;
        widthMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeight(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeight(arg0: number): $LayoutStyle;
        setMinHeight(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidth(arg0: $StyleSizeLength): $LayoutStyle;
        setMinWidth(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidth(arg0: number): $LayoutStyle;
        setFlexShrink(arg0: number): $LayoutStyle;
        setFlexGrowAuto(): $LayoutStyle;
        setAspectRatioAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthStretch(): $LayoutStyle;
        widthMinContent(): $LayoutStyle;
        widthStretch(): $LayoutStyle;
        widthFitContent(): $LayoutStyle;
        paddingAllPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightAuto(): $LayoutStyle;
        marginVerticalAuto(): $LayoutStyle;
        marginAllAuto(): $LayoutStyle;
        flexBasisAuto(): $LayoutStyle;
        leftPercent(arg0: number): $LayoutStyle;
        flexBasisPercent(arg0: number): $LayoutStyle;
        marginRightAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasis(arg0: number): $LayoutStyle;
        maxWidthMinContent(): $LayoutStyle;
        maxWidthPercent(arg0: number): $LayoutStyle;
        flexBasisStretch(): $LayoutStyle;
        maxWidthStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setPaddingPercent(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        maxWidthMaxContent(): $LayoutStyle;
        minHeightAuto(): $LayoutStyle;
        minHeightPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginHorizontal(arg0: $StyleLength): $LayoutStyle;
        marginHorizontal(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightAuto(): $LayoutStyle;
        marginTopPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMarginAuto(arg0: $YogaEdge_): $LayoutStyle;
        /**
         * @deprecated
         */
        setAlignContent(arg0: $YogaAlign_): $LayoutStyle;
        heightMaxContent(): $LayoutStyle;
        marginAllPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexDirection(arg0: $YogaFlexDirection_): $LayoutStyle;
        maxWidthAuto(): $LayoutStyle;
        marginTopAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setPositionType(arg0: $YogaPositionType_): $LayoutStyle;
        marginBottomAuto(): $LayoutStyle;
        maxHeightPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMarginPercent(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        paddingLeftPercent(arg0: number): $LayoutStyle;
        paddingTopPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPositionPercent(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPositionAuto(arg0: $YogaEdge_): $LayoutStyle;
        rightPercent(arg0: number): $LayoutStyle;
        maxWidthFitContent(): $LayoutStyle;
        marginBottom(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginBottom(arg0: $StyleLength): $LayoutStyle;
        bottomPercent(arg0: number): $LayoutStyle;
        marginLeftPercent(arg0: number): $LayoutStyle;
        minHeightStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        marginVertical(arg0: $StyleLength): $LayoutStyle;
        marginVertical(arg0: number): $LayoutStyle;
        marginLeftAuto(): $LayoutStyle;
        heightFitContent(): $LayoutStyle;
        heightStretch(): $LayoutStyle;
        paddingHorizontal(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingHorizontal(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setAlignItems(arg0: $YogaAlign_): $LayoutStyle;
        /**
         * @deprecated
         */
        setAlignSelf(arg0: $YogaAlign_): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingVertical(arg0: $StyleLength): $LayoutStyle;
        paddingVertical(arg0: number): $LayoutStyle;
        heightMinContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthAuto(): $LayoutStyle;
        maxHeightAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexAuto(): $LayoutStyle;
        maxHeightStretch(): $LayoutStyle;
        minWidthStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightPercent(arg0: number): $LayoutStyle;
        marginRightPercent(arg0: number): $LayoutStyle;
        aspectRatio(arg0: number): $LayoutStyle;
        getJustifySelf(): $AlignItems;
        gridAutoRows(arg0: string): $LayoutStyle;
        gridAutoRows(arg0: $GridAuto_): $LayoutStyle;
        justifyItems(arg0: $AlignItems_): $LayoutStyle;
        getFlexShrink(): number;
        getAspectRatio(): number;
        getPositionType(): $TaffyPosition;
        /**
         * @deprecated
         */
        setJustifyContent(arg0: $YogaJustify_): $LayoutStyle;
        justifySelf(arg0: $AlignItems_): $LayoutStyle;
        gapColumnPercent(arg0: number): $LayoutStyle;
        getJustifyContent(): $AlignContent;
        getAlignItems(): $AlignItems;
        gridTemplateRows(arg0: $GridTemplate_): $LayoutStyle;
        gridTemplateRows(arg0: string): $LayoutStyle;
        getAlignContent(): $AlignContent;
        /**
         * @deprecated
         */
        setGapPercent(arg0: $YogaGutter_, arg1: number): $LayoutStyle;
        getFlexDirection(): $FlexDirection;
        getStyleDirection(): $TaffyDirection;
        gapRowPercent(arg0: number): $LayoutStyle;
        flexGrowAuto(): $LayoutStyle;
        getFlexGrow(): number;
        flexShrinkAuto(): $LayoutStyle;
        gridTemplateAreas(arg0: $GridTemplateAreas_): $LayoutStyle;
        gridTemplateAreas(arg0: string): $LayoutStyle;
        getMinHeight(): $TaffyDimension;
        getAlignSelf(): $AlignItems;
        gridAutoColumns(arg0: $GridAuto_): $LayoutStyle;
        gridAutoColumns(arg0: string): $LayoutStyle;
        getOverflow(): $YogaOverflow;
        getJustifyItems(): $AlignItems;
        getFlexBasis(): $TaffyDimension;
        aspectRatioAuto(): $LayoutStyle;
        gapAllPercent(arg0: number): $LayoutStyle;
        gridAutoFlow(arg0: $GridAutoFlow_): $LayoutStyle;
        holder: $UIElement;
        constructor(arg0: $UIElement);
        set display(value: $YogaDisplay_);
        set direction(value: $YogaDirection_);
        set wrap(value: $YogaWrap_);
        set marginAuto(value: $YogaEdge_);
        set positionAuto(value: $YogaEdge_);
        get styleDirection(): $TaffyDirection;
    }
    export class $BasicStyle extends $Style {
        static init(): void;
        color(arg0: number): $BasicStyle;
        color(): number;
        transition(): $Transition;
        transition(arg0: $Transition_): $BasicStyle;
        opacity(arg0: number): $BasicStyle;
        opacity(): number;
        backgroundTexture(arg0: $IGuiTexture_): $BasicStyle;
        backgroundTexture(): $IGuiTexture;
        background(arg0: $IGuiTexture_): $BasicStyle;
        zIndex(arg0: number): $BasicStyle;
        zIndex(): number;
        overlay(arg0: $IGuiTexture_): $BasicStyle;
        appendTooltipsString(...arg0: string[]): $BasicStyle;
        overflowVisible(arg0: boolean): $BasicStyle;
        overflowVisible(): boolean;
        transform2D(): $Transform2D;
        transform2D(arg0: $Transform2D): $BasicStyle;
        overflowClip(arg0: $IGuiTexture_): $BasicStyle;
        overflowClip(): $IGuiTexture;
        tooltips(...arg0: $Component_[]): $BasicStyle;
        tooltips(): $Tooltips;
        tooltips(arg0: $Tooltips_): $BasicStyle;
        appendTooltips(...arg0: $Component_[]): $BasicStyle;
        overlayTexture(arg0: $IGuiTexture_): $BasicStyle;
        overlayTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $UIElement);
    }
    export class $StyleSlot<T> extends $Record {
        value(): T;
        compareTo(arg0: $StyleSlot_<never>): number;
        static compare(arg0: $StyleSlot_<never>, arg1: $StyleSlot_<never>): number;
        static of<T>(arg0: $Property<T>, arg1: $StyleOrigin_, arg2: number, arg3: number, arg4: T): $StyleSlot<T>;
        property(): $Property<T>;
        origin(): $StyleOrigin;
        typeEquals(arg0: $StyleSlot_<never>): boolean;
        sourceOrder(): number;
        specificity(): number;
        constructor(property: $Property<T>, origin: $StyleOrigin_, specificity: number, sourceOrder: number, value: T);
    }
    export class $Property<VALUE> {
        getValue(arg0: $Map_<string, $StyleValue<never>>): (VALUE) | undefined;
        static of<T>(arg0: string, arg1: $Codec<T>, arg2: T, arg3: $ValueParser_<T>): $Property<T>;
        static of<T>(arg0: string, arg1: $Class<T>, arg2: $Codec<T>, arg3: T, arg4: $ValueParser_<T>): $Property<T>;
        notifyListeners(arg0: $UIElement, arg1: VALUE, arg2: VALUE): void;
        getConfigName(): string;
        addListener(arg0: $StyleChangeListener_<VALUE>): $Property<VALUE>;
        getInterpolator(): $IValueInterpolator<VALUE>;
        createConfigurator(arg0: $Supplier_<VALUE>, arg1: $Consumer_<VALUE>, arg2: VALUE): $Configurator;
        setInterpolator(arg0: $IValueInterpolator_<VALUE>): $Property<VALUE>;
        setConfigName(arg0: string): $Property<VALUE>;
        setAllowTransition(arg0: boolean): $Property<VALUE>;
        getConfigTooltips(): $Component[];
        setConfigTooltips(arg0: $Tooltips_): $Property<VALUE>;
        isAllowTransition(): boolean;
        codec: $Codec<VALUE>;
        static CODEC: $Codec<$Property<never>>;
        name: string;
        id: number;
        type: $Class<VALUE>;
        valueParser: $ValueParser<VALUE>;
        initialValue: VALUE;
        constructor(arg0: string, arg1: $Class<VALUE>, arg2: $Codec<VALUE>, arg3: VALUE, arg4: $ValueParser_<VALUE>);
    }
}
