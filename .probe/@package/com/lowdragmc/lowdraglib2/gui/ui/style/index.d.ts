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
        static neverInterpolate<V>(): $IValueInterpolator<V>;
        /**
         * @deprecated
         */
        static alwaysInterpolate<V>(): $IValueInterpolator<V>;
        static snapToEnd<V>(): $IValueInterpolator<V>;
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
        calculateValues(arg0: $UIElement): $List<$StyleRule>;
        static parseStyleValues(arg0: string): $Map<$Property<never>, $StyleValue<never>>;
        addRule(arg0: $StyleRule): void;
        removeRule(arg0: $StyleRule): void;
        getRawLss(): string;
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
        getStylesheet(arg0: $ResourceLocation_): $Stylesheet;
        unregisterBuiltinStylesheet(arg0: $ResourceLocation_): void;
        getAllBuiltinStylesheets(): $Collection<$ResourceLocation>;
        getStylesheetOrElse(arg0: $ResourceLocation_, arg1: $Stylesheet): $Stylesheet;
        getMergedStylesheetsSafe(arg0: string): $Stylesheet;
        getAllPackStylesheets(): $Collection<$ResourceLocation>;
        getMergedStylesheets(arg0: string): $Stylesheet;
        getMergedStylesheetsOrElse(arg0: string, arg1: $Stylesheet): $Stylesheet;
        registerBuiltinStylesheet(arg0: $ResourceLocation_, arg1: $Stylesheet): void;
        getStylesheetSafe(arg0: $ResourceLocation_): $Stylesheet;
        onResourceManagerReload(arg0: $ResourceManager): void;
        registerEngine(arg0: $StyleEngine): void;
        unregisterEngine(arg0: $StyleEngine): void;
        hasStylesheet(arg0: $ResourceLocation_): boolean;
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
        computeCandidate<T>(arg0: $Property<T>): T;
        getComputed<T>(arg0: $Property<T>): T;
        replaceOrPutCandidate<T>(arg0: $Property<T>, arg1: $StyleSlot_<T>): void;
        moveInlineAsDefault(): void;
        markDirty(): void;
        removeCandidates(arg0: $Predicate_<$StyleSlot<never>>): void;
        removeCandidates(arg0: $Property<never>, arg1: $Predicate_<$StyleSlot<never>>): void;
        putCandidates(arg0: $Map_<$Property<never>, $StyleValue<never>>, arg1: $StyleOrigin_, arg2: number, arg3: number): void;
        onAnimationUpdate<T>(arg0: $StyleOrigin_, arg1: $Property<T>, arg2: T): void;
        putCandidate<T>(arg0: $Property<T>, arg1: $StyleSlot_<T>): void;
        containsCandidate(arg0: $Property<never>, arg1: $Predicate_<$StyleSlot<never>>): boolean;
        clearCandidates(): void;
        onTransitionUpdate<T>(arg0: $TransitionAnimation<T>, arg1: T, arg2: T): void;
        onTransitionFinished<T>(arg0: $TransitionAnimation<T>): void;
        replaceAnimationFinal<T>(arg0: $Property<T>, arg1: $Predicate_<$StyleSlot<never>>, arg2: $StyleSlot_<T>): void;
        computeCandidateSlot<T>(arg0: $Property<T>): $StyleSlot<T>;
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
        scheduleReloadElementStyles(arg0: $UIElement): void;
        calculateStyle(): void;
        requireCalculate(): boolean;
        addStylesheets(arg0: $List_<$Stylesheet>): void;
        addStylesheets(...arg0: $Stylesheet[]): void;
        onElementRegister(arg0: $UIElement): void;
        onElementUnregister(arg0: $UIElement): void;
        removeLocalStylesheet(arg0: $UIElement, arg1: $Stylesheet): void;
        addLocalStylesheet(arg0: $UIElement, arg1: $Stylesheet): void;
        inQueue(arg0: $StyleBag): boolean;
        clearAllStylesheets(): void;
        getElementStyleRules(): $Map<$UIElement, $Map<$Stylesheet, $List<$StyleRule>>>;
        removeStylesheet(arg0: $Stylesheet): void;
        addStylesheet(arg0: $Stylesheet): void;
        scheduleFullReload(): void;
        modularUI: $ModularUI;
        globalSheets: $List<$Stylesheet>;
        constructor(arg0: $ModularUI);
        get elementStyleRules(): $Map<$UIElement, $Map<$Stylesheet, $List<$StyleRule>>>;
    }
    export class $LayoutStyle extends $Style {
        top(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        top(arg0: $StyleLength): $LayoutStyle;
        left(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        left(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        right(arg0: $StyleLength): $LayoutStyle;
        right(arg0: number): $LayoutStyle;
        bottom(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        bottom(arg0: $StyleLength): $LayoutStyle;
        width(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $LayoutStyle;
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
        overflow(arg0: $YogaOverflow_): $LayoutStyle;
        /**
         * @deprecated
         */
        setPadding(arg0: $YogaEdge_, arg1: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setPadding(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        paddingTop(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingTop(arg0: $StyleLength): $LayoutStyle;
        maxHeight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        maxHeight(arg0: $StyleSizeLength): $LayoutStyle;
        getWidth(): $TaffyDimension;
        height(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        height(arg0: $StyleSizeLength): $LayoutStyle;
        getMaxWidth(): $TaffyDimension;
        getMaxHeight(): $TaffyDimension;
        /**
         * @deprecated
         */
        setMargin(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMargin(arg0: $YogaEdge_, arg1: $StyleLength): $LayoutStyle;
        alignItems(arg0: $AlignItems_): $LayoutStyle;
        minHeight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        minHeight(arg0: $StyleSizeLength): $LayoutStyle;
        setWidth(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidth(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidth(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeight(arg0: $StyleSizeLength): $LayoutStyle;
        setHeight(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginTop(arg0: $StyleLength): $LayoutStyle;
        marginTop(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        gapAll(arg0: $StyleLength): $LayoutStyle;
        gapAll(arg0: number): $LayoutStyle;
        flex(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPosition(arg0: $YogaEdge_, arg1: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setPosition(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        getStyleDirection(): $TaffyDirection;
        gridAutoRows(arg0: string): $LayoutStyle;
        gridAutoRows(arg0: $GridAuto_): $LayoutStyle;
        getAlignContent(): $AlignContent;
        /**
         * @deprecated
         */
        setGapPercent(arg0: $YogaGutter_, arg1: number): $LayoutStyle;
        getPositionType(): $TaffyPosition;
        getAspectRatio(): number;
        getFlexDirection(): $FlexDirection;
        gridTemplateAreas(arg0: string): $LayoutStyle;
        gridTemplateAreas(arg0: $GridTemplateAreas_): $LayoutStyle;
        getJustifyContent(): $AlignContent;
        getAlignSelf(): $AlignItems;
        getOverflow(): $YogaOverflow;
        getFlexBasis(): $TaffyDimension;
        gridAutoFlow(arg0: $GridAutoFlow_): $LayoutStyle;
        getJustifyItems(): $AlignItems;
        getJustifySelf(): $AlignItems;
        getFlexGrow(): number;
        gridTemplateRows(arg0: string): $LayoutStyle;
        gridTemplateRows(arg0: $GridTemplate_): $LayoutStyle;
        getMinHeight(): $TaffyDimension;
        getAlignItems(): $AlignItems;
        gapRowPercent(arg0: number): $LayoutStyle;
        getFlexShrink(): number;
        gapColumnPercent(arg0: number): $LayoutStyle;
        gapAllPercent(arg0: number): $LayoutStyle;
        gridAutoColumns(arg0: string): $LayoutStyle;
        gridAutoColumns(arg0: $GridAuto_): $LayoutStyle;
        aspectRatioAuto(): $LayoutStyle;
        bottomAuto(): $LayoutStyle;
        flexWrap(arg0: $FlexWrap_): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlex(arg0: number): $LayoutStyle;
        flexAuto(): $LayoutStyle;
        gridColumn(arg0: string): $LayoutStyle;
        gridColumn(arg0: $Grid_): $LayoutStyle;
        flexShrink(arg0: number): $LayoutStyle;
        flexBasis(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setWrap(arg0: $YogaWrap_): $LayoutStyle;
        gapColumn(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        gapColumn(arg0: $StyleLength): $LayoutStyle;
        flexGrow(arg0: number): $LayoutStyle;
        gapRow(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        gapRow(arg0: $StyleLength): $LayoutStyle;
        gridRow(arg0: $Grid_): $LayoutStyle;
        gridRow(arg0: string): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingAll(arg0: $StyleLength): $LayoutStyle;
        paddingAll(arg0: number): $LayoutStyle;
        paddingRight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingRight(arg0: $StyleLength): $LayoutStyle;
        paddingBottom(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingBottom(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingLeft(arg0: $StyleLength): $LayoutStyle;
        paddingLeft(arg0: number): $LayoutStyle;
        heightPercent(arg0: number): $LayoutStyle;
        widthPercent(arg0: number): $LayoutStyle;
        setAspectRatio(arg0: number): $LayoutStyle;
        getHeight(): $TaffyDimension;
        rightAuto(): $LayoutStyle;
        topPercent(arg0: number): $LayoutStyle;
        topAuto(): $LayoutStyle;
        leftAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setGap(arg0: $YogaGutter_, arg1: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setGap(arg0: $YogaGutter_, arg1: $StyleLength): $LayoutStyle;
        widthAuto(): $LayoutStyle;
        heightAuto(): $LayoutStyle;
        heightMaxContent(): $LayoutStyle;
        bottomPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setAlignContent(arg0: $YogaAlign_): $LayoutStyle;
        heightStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setPaddingPercent(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        marginRightAuto(): $LayoutStyle;
        paddingAllPercent(arg0: number): $LayoutStyle;
        rightPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setAlignItems(arg0: $YogaAlign_): $LayoutStyle;
        flexBasisPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasis(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexDirection(arg0: $YogaFlexDirection_): $LayoutStyle;
        flexGrowAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        marginHorizontal(arg0: $StyleLength): $LayoutStyle;
        marginHorizontal(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setAlignSelf(arg0: $YogaAlign_): $LayoutStyle;
        marginRightPercent(arg0: number): $LayoutStyle;
        flexShrinkAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setJustifyContent(arg0: $YogaJustify_): $LayoutStyle;
        leftPercent(arg0: number): $LayoutStyle;
        marginVertical(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginVertical(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMarginAuto(arg0: $YogaEdge_): $LayoutStyle;
        marginTopPercent(arg0: number): $LayoutStyle;
        marginAllAuto(): $LayoutStyle;
        marginAllPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightAuto(): $LayoutStyle;
        maxHeightAuto(): $LayoutStyle;
        paddingHorizontal(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingHorizontal(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingVertical(arg0: $StyleLength): $LayoutStyle;
        paddingVertical(arg0: number): $LayoutStyle;
        paddingTopPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexAuto(): $LayoutStyle;
        marginLeftAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setPositionType(arg0: $YogaPositionType_): $LayoutStyle;
        flexBasisAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightAuto(): $LayoutStyle;
        maxWidthMinContent(): $LayoutStyle;
        flexBasisStretch(): $LayoutStyle;
        justifyItems(arg0: $AlignItems_): $LayoutStyle;
        justifySelf(arg0: $AlignItems_): $LayoutStyle;
        aspectRatio(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightPercent(arg0: number): $LayoutStyle;
        marginBottom(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginBottom(arg0: $StyleLength): $LayoutStyle;
        maxWidthFitContent(): $LayoutStyle;
        minHeightAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMarginPercent(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        marginVerticalAuto(): $LayoutStyle;
        marginBottomAuto(): $LayoutStyle;
        paddingLeftPercent(arg0: number): $LayoutStyle;
        heightMinContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setPositionPercent(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPositionAuto(arg0: $YogaEdge_): $LayoutStyle;
        maxWidthStretch(): $LayoutStyle;
        maxHeightStretch(): $LayoutStyle;
        marginLeftPercent(arg0: number): $LayoutStyle;
        maxHeightPercent(arg0: number): $LayoutStyle;
        minHeightStretch(): $LayoutStyle;
        heightFitContent(): $LayoutStyle;
        minHeightPercent(arg0: number): $LayoutStyle;
        marginTopAuto(): $LayoutStyle;
        setFlexGrowAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthPercent(arg0: number): $LayoutStyle;
        setFlexShrinkAuto(): $LayoutStyle;
        widthMaxContent(): $LayoutStyle;
        setFlexShrink(arg0: number): $LayoutStyle;
        widthFitContent(): $LayoutStyle;
        setAspectRatioAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthAuto(): $LayoutStyle;
        minWidthAuto(): $LayoutStyle;
        minWidthMaxContent(): $LayoutStyle;
        minWidthMinContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthStretch(): $LayoutStyle;
        minWidthStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthPercent(arg0: number): $LayoutStyle;
        maxWidthPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthMaxContent(): $LayoutStyle;
        widthStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthAuto(): $LayoutStyle;
        maxWidthAuto(): $LayoutStyle;
        maxWidthMaxContent(): $LayoutStyle;
        minWidthFitContent(): $LayoutStyle;
        setFlexGrow(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthStretch(): $LayoutStyle;
        minWidthPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthFitContent(): $LayoutStyle;
        widthMinContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightStretch(): $LayoutStyle;
        paddingVerticalPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthMaxContent(): $LayoutStyle;
        minHeightMinContent(): $LayoutStyle;
        minHeightFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthMaxContent(): $LayoutStyle;
        maxHeightMinContent(): $LayoutStyle;
        maxHeightFitContent(): $LayoutStyle;
        paddingRightPercent(arg0: number): $LayoutStyle;
        minHeightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightMaxContent(): $LayoutStyle;
        marginBottomPercent(arg0: number): $LayoutStyle;
        paddingHorizontalPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisMaxContent(): $LayoutStyle;
        flexBasisMinContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisFitContent(): $LayoutStyle;
        flexBasisFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightPercent(arg0: number): $LayoutStyle;
        paddingBottomPercent(arg0: number): $LayoutStyle;
        flexBasisMaxContent(): $LayoutStyle;
        gridTemplateColumns(arg0: string): $LayoutStyle;
        gridTemplateColumns(arg0: $GridTemplate_): $LayoutStyle;
        maxHeightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightMaxContent(): $LayoutStyle;
        marginVerticalPercent(arg0: number): $LayoutStyle;
        marginHorizontalAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightStretch(): $LayoutStyle;
        marginHorizontalPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightFitContent(): $LayoutStyle;
        getMinWidth(): $TaffyDimension;
        /**
         * @deprecated
         */
        setOverflow(arg0: $YogaOverflow_): $LayoutStyle;
        /**
         * @deprecated
         */
        setDisplay(arg0: $YogaDisplay_): $LayoutStyle;
        setMaxWidth(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidth(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidth(arg0: number): $LayoutStyle;
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
        setDirection(arg0: $YogaDirection_): $LayoutStyle;
        setMinWidth(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidth(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidth(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeight(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeight(arg0: number): $LayoutStyle;
        setMinHeight(arg0: $TaffyDimension): $LayoutStyle;
        setMaxHeight(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeight(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        marginRight(arg0: $StyleLength): $LayoutStyle;
        marginRight(arg0: number): $LayoutStyle;
        holder: $UIElement;
        constructor(arg0: $UIElement);
        get styleDirection(): $TaffyDirection;
        set wrap(value: $YogaWrap_);
        set marginAuto(value: $YogaEdge_);
        set positionAuto(value: $YogaEdge_);
        set display(value: $YogaDisplay_);
        set direction(value: $YogaDirection_);
    }
    export class $BasicStyle extends $Style {
        static init(): void;
        color(arg0: number): $BasicStyle;
        color(): number;
        transition(): $Transition;
        transition(arg0: $Transition_): $BasicStyle;
        opacity(): number;
        opacity(arg0: number): $BasicStyle;
        background(arg0: $IGuiTexture_): $BasicStyle;
        overlay(arg0: $IGuiTexture_): $BasicStyle;
        tooltips(): $Tooltips;
        tooltips(arg0: $Tooltips_): $BasicStyle;
        backgroundTexture(): $IGuiTexture;
        backgroundTexture(arg0: $IGuiTexture_): $BasicStyle;
        appendTooltipsString(...arg0: string[]): $BasicStyle;
        tooltips(...arg0: $Component_[]): $BasicStyle;
        overflowClip(arg0: $IGuiTexture_): $BasicStyle;
        overflowClip(): $IGuiTexture;
        overflowVisible(arg0: boolean): $BasicStyle;
        overflowVisible(): boolean;
        transform2D(): $Transform2D;
        transform2D(arg0: $Transform2D): $BasicStyle;
        zIndex(): number;
        zIndex(arg0: number): $BasicStyle;
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
        static of<T>(arg0: string, arg1: $Class<T>, arg2: $Codec<T>, arg3: T, arg4: $ValueParser_<T>): $Property<T>;
        static of<T>(arg0: string, arg1: $Codec<T>, arg2: T, arg3: $ValueParser_<T>): $Property<T>;
        notifyListeners(arg0: $UIElement, arg1: VALUE, arg2: VALUE): void;
        addListener(arg0: $StyleChangeListener_<VALUE>): $Property<VALUE>;
        getConfigName(): string;
        createConfigurator(arg0: $Supplier_<VALUE>, arg1: $Consumer_<VALUE>, arg2: VALUE): $Configurator;
        setAllowTransition(arg0: boolean): $Property<VALUE>;
        getConfigTooltips(): $Component[];
        setInterpolator(arg0: $IValueInterpolator_<VALUE>): $Property<VALUE>;
        isAllowTransition(): boolean;
        setConfigTooltips(arg0: $Tooltips_): $Property<VALUE>;
        setConfigName(arg0: string): $Property<VALUE>;
        getInterpolator(): $IValueInterpolator<VALUE>;
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
