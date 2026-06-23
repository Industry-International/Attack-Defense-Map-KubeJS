import { $HistoryStack } from "@package/com/lowdragmc/lowdraglib2/utils";
import { $Codec } from "@package/com/mojang/serialization";
import { $ConfigNumber$Type } from "@package/com/lowdragmc/lowdraglib2/configurator/annotation";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Tag_, $Tag, $LongArrayTag, $ListTag_, $ByteArrayTag, $IntArrayTag, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IGuiTexture_, $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ISearch, $IResultHandler_ } from "@package/com/lowdragmc/lowdraglib2/utils/search";
import { $ISceneBlockRenderHook, $ParticleManager, $WorldSceneRenderer } from "@package/com/lowdragmc/lowdraglib2/client/scene";
import { $Map, $Set, $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $Size } from "@package/com/lowdragmc/lowdraglib2/math";
import { $StringConfigurator, $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $FormattedCharSequence, $Tuple } from "@package/net/minecraft/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $Predicate, $BiConsumer, $BiConsumer_, $Function_, $IntConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction } from "@package/net/minecraft/core";
import { $IngredientIO_ } from "@package/com/lowdragmc/lowdraglib2/integration/xei";
import { $IPersistedSerializable, $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIEventListener_, $UIEvent } from "@package/com/lowdragmc/lowdraglib2/gui/ui/event";
import { $Style, $ModularUI, $UITemplate, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Class, $Runnable_ } from "@package/java/lang";
import { $TaffyDimension } from "@package/dev/vfyjxf/taffy/style";
import { $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $StyleSizeLength } from "@package/org/appliedenergistics/yoga/style";
import { $File_, $File } from "@package/java/io";
import { $ClipContext$Fluid_, $ClipContext$Fluid, $ClipContext$Block_, $ClipContext$Block, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $BiMap } from "@package/com/google/common/collect";
import { $ITreeNode, $FileNode } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Cursor, $FillDirection, $FillDirection_, $TextWrap_, $ScrollerMode_, $Vertical, $ScrollerMode, $Horizontal, $Cursor_, $ScrollDisplay, $TextWrap, $ScrollDisplay_, $Horizontal_, $Vertical_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $IHistoryStack, $UIElementProvider, $UIElementProvider_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $FloatConsumer_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $Stream } from "@package/java/util/stream";
import { $IBinding, $IObservable, $IDataProvider, $IDataConsumer, $IObserver_, $IObserver, $IDataSource, $IBindable } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TrackedDummyWorld } from "@package/com/lowdragmc/lowdraglib2/utils/virtuallevel";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockPosFace, $BlockPosFace_ } from "@package/com/lowdragmc/lowdraglib2/utils/data";
import { $Vector3f } from "@package/org/joml";
export * as inventory from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/inventory";
export * as codeeditor from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements" {
    export class $SearchComponent$ISearchUI$Empty<T> implements $SearchComponent$ISearchUI<T> {
        search(arg0: string, arg1: $IResultHandler_<T>): void;
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
        constructor();
    }
    export class $Selector$SelectorStyle extends $Style {
        static init(): void;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $Selector$SelectorStyle;
        scrollerViewHeight(arg0: number): $Selector$SelectorStyle;
        scrollerViewHeight(): number;
        maxItemCount(arg0: number): $Selector$SelectorStyle;
        maxItemCount(): number;
        closeAfterSelect(arg0: boolean): $Selector$SelectorStyle;
        closeAfterSelect(): boolean;
        showOverlay(arg0: boolean): $Selector$SelectorStyle;
        showOverlay(): boolean;
        holder: $UIElement;
    }
    export class $TextField extends $BindableUIElement<string> {
        getValue(): string;
        setValue(arg0: string, arg1: boolean): $TextField;
        isError(): boolean;
        getText(): string;
        setFormatter(arg0: $Function_<string, $Component>): $TextField;
        getFormatter(): $Function<string, $Component>;
        setText(arg0: string, arg1: boolean): $TextField;
        setText(arg0: string): $TextField;
        setCharValidator(arg0: $Predicate_<string>): $TextField;
        getHistoryStack(): $HistoryStack<string>;
        setTextValidator(arg0: $Predicate_<string>): $TextField;
        setTextResponder(arg0: $Consumer_<string>): $TextField;
        getMode(): $TextField$Mode;
        getRawText(): string;
        isEditable(): boolean;
        getCursorPos(): number;
        setCursor(arg0: number): void;
        getFont(): $Font;
        setResourceLocationOnly(): $TextField;
        textFieldStyle(arg0: $Consumer_<$TextField$TextFieldStyle>): $TextField;
        setWheelDur(arg0: number): $TextField;
        setWheelDur(arg0: number, arg1: number): $TextField;
        setNumbersOnlyInt(arg0: number, arg1: number): $TextField;
        setAnyString(): $TextField;
        getFormattedLine(): $Tuple<$FormattedCharSequence, number>;
        setCompoundTagOnly(): $TextField;
        getWheelDur(): number;
        getTextFieldStyle(): $TextField$TextFieldStyle;
        setNumbersOnlyByte(arg0: number, arg1: number): $TextField;
        setNumbersOnlyLong(arg0: number, arg1: number): $TextField;
        insertText(arg0: string): void;
        setNumbersOnlyFloat(arg0: number, arg1: number): $TextField;
        setNumbersOnlyDouble(arg0: number, arg1: number): $TextField;
        getCursorUnderMouseX(arg0: number): number;
        setTextRegexValidator(arg0: string): $TextField;
        setNumbersOnlyShort(arg0: number, arg1: number): $TextField;
        getSelectionStart(): number;
        getSelectionEnd(): number;
        setSelection(arg0: number, arg1: number): void;
        deleteWords(arg0: number): void;
        getHighlighted(): string;
        deleteChars(arg0: number): void;
        deleteCharsToPos(arg0: number): void;
        getWordPosition(arg0: number): number;
        getDisplayOffset(): number;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        set charValidator(value: $Predicate_<string>);
        get historyStack(): $HistoryStack<string>;
        set textValidator(value: $Predicate_<string>);
        set textResponder(value: $Consumer_<string>);
        get mode(): $TextField$Mode;
        get rawText(): string;
        get editable(): boolean;
        get cursorPos(): number;
        set cursor(value: number);
        get font(): $Font;
        get formattedLine(): $Tuple<$FormattedCharSequence, number>;
        set textRegexValidator(value: string);
        get selectionStart(): number;
        get selectionEnd(): number;
        get highlighted(): string;
        get displayOffset(): number;
    }
    export class $GraphView extends $UIElement {
        fit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        fitToChildren(arg0: number, arg1: number): void;
        addContentChild(arg0: $UIElement): $GraphView;
        graphViewStyle(arg0: $Consumer_<$GraphView$GraphViewStyle>): $GraphView;
        getGraphViewStyle(): $GraphView$GraphViewStyle;
        removeContentChild(arg0: $UIElement): $GraphView;
        contentRoot(arg0: $Consumer_<$UIElement>): $UIElement;
        getScale(): number;
        clearAllContentChildren(): $GraphView;
        getOffsetY(): number;
        setOffsetY(arg0: number): void;
        getOffsetX(): number;
        setOffsetX(arg0: number): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scale(): number;
    }
    export class $Scroller$ScrollerStyle extends $Style {
        static init(): void;
        scrollDelta(arg0: number): $Scroller$ScrollerStyle;
        scrollDelta(): number;
        scrollBarSize(): number;
        scrollBarSize(arg0: number): $Scroller$ScrollerStyle;
        holder: $UIElement;
        constructor(arg0: $Scroller);
    }
    export class $FluidSlot$SlotStyle extends $Style {
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $FluidSlot$SlotStyle;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $FluidSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        slotOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        showFluidTooltips(arg0: boolean): $FluidSlot$SlotStyle;
        showFluidTooltips(): boolean;
        holder: $UIElement;
        constructor(arg0: $FluidSlot);
    }
    export class $Tab extends $UIElement {
        getContent(): $UIElement;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Tab;
        setText(arg0: string): $Tab;
        setText(arg0: string, arg1: boolean): $Tab;
        setText(arg0: $Component_): $Tab;
        tabStyle(arg0: $Consumer_<$Tab$TabStyle>): $Tab;
        setSelected(arg0: boolean): void;
        setOnTabSelected(arg0: $Runnable_): $Tab;
        setDynamicText(arg0: $Supplier_<$Component>): $Tab;
        setOnTabUnselected(arg0: $Runnable_): $Tab;
        getTabStyle(): $Tab$TabStyle;
        getTabView(): $TabView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $Label;
        constructor();
        get content(): $UIElement;
        set selected(value: boolean);
        set onTabSelected(value: $Runnable_);
        set dynamicText(value: $Supplier_<$Component>);
        set onTabUnselected(value: $Runnable_);
        get tabView(): $TabView;
    }
    export class $TextField$TextFieldStyle extends $Style {
        static init(): void;
        focusOverlay(arg0: $IGuiTexture_): $TextField$TextFieldStyle;
        focusOverlay(): $IGuiTexture;
        cursorColor(): number;
        cursorColor(arg0: number): $TextField$TextFieldStyle;
        fontSize(): number;
        fontSize(arg0: number): $TextField$TextFieldStyle;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextField$TextFieldStyle;
        textColor(arg0: number): $TextField$TextFieldStyle;
        textColor(): number;
        placeholder(): $Component;
        placeholder(arg0: $Component_): $TextField$TextFieldStyle;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextField$TextFieldStyle;
        errorColor(): number;
        errorColor(arg0: number): $TextField$TextFieldStyle;
        holder: $UIElement;
        constructor(arg0: $TextField);
    }
    export class $Button$ButtonStyle extends $Style {
        hoverTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        hoverTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(): $IGuiTexture;
        pressedTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        holder: $UIElement;
        constructor(arg0: $Button);
    }
    export class $Scroller$Horizontal extends $Scroller {
        setValue(arg0: number): $Scroller;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set value(value: number);
    }
    export class $Button$State extends $Enum<$Button$State> {
        static values(): $Button$State[];
        static valueOf(arg0: string): $Button$State;
        static PRESSED: $Button$State;
        static HOVERED: $Button$State;
        static DEFAULT: $Button$State;
    }
    /**
     * Values that may be interpreted as {@link $Button$State}.
     */
    export type $Button$State_ = "default" | "hovered" | "pressed";
    export class $Toggle$ToggleStyle extends $Style {
        static init(): void;
        hoverTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        baseTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        markTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        markTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Toggle);
    }
    export class $ScrollerView extends $UIElement {
        verticalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        horizontalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        viewPort(arg0: $Consumer_<$UIElement>): $ScrollerView;
        addScrollViewChildAt(arg0: $UIElement, arg1: number): $ScrollerView;
        addScrollViewChildren(...arg0: $UIElement[]): $ScrollerView;
        getScrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        removeScrollViewChild(arg0: $UIElement): boolean;
        clearAllScrollViewChildren(): void;
        getContainerWidth(): number;
        hasScrollViewChild(arg0: $UIElement): boolean;
        getContainerHeight(): number;
        verticalContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        addScrollViewChild(arg0: $UIElement): $ScrollerView;
        viewContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        scrollerStyle(arg0: $Consumer_<$ScrollerView$ScrollerViewStyle>): $ScrollerView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        get containerWidth(): number;
        get containerHeight(): number;
    }
    export class $SearchComponent$SearchStyle extends $Style {
        static init(): void;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $SearchComponent$SearchStyle;
        scrollerViewHeight(arg0: number): $SearchComponent$SearchStyle;
        scrollerViewHeight(): number;
        maxItemCount(arg0: number): $SearchComponent$SearchStyle;
        maxItemCount(): number;
        closeAfterSelect(arg0: boolean): $SearchComponent$SearchStyle;
        closeAfterSelect(): boolean;
        showOverlay(arg0: boolean): $SearchComponent$SearchStyle;
        showOverlay(): boolean;
        holder: $UIElement;
    }
    export class $Scroller extends $BindableUIElement<number> {
        setValue(arg0: number, arg1: boolean): $Scroller;
        setValue(arg0: number): $Scroller;
        setOnValueChanged(arg0: $FloatConsumer_): $Scroller;
        getMinValue(): number;
        getMaxValue(): number;
        setRange(arg0: number, arg1: number): $Scroller;
        headButton(arg0: $Consumer_<$Button>): $Scroller;
        tailButton(arg0: $Consumer_<$Button>): $Scroller;
        setScrollBarSize(arg0: number): $Scroller;
        setClampNormalizedValue(arg0: $Function_<number, number>): $Scroller;
        isDragging(): boolean;
        getClampNormalizedValue(): $Function<number, number>;
        setNormalizedValue(arg0: number, arg1: boolean): $Scroller;
        setNormalizedValue(arg0: number): $Scroller;
        getNormalizedValue(): number;
        scrollerStyle(arg0: $Consumer_<$Scroller$ScrollerStyle>): $Scroller;
        scrollContainer(arg0: $Consumer_<$UIElement>): $Scroller;
        setMinValue(arg0: number): $Scroller;
        getScrollerStyle(): $Scroller$ScrollerStyle;
        scrollValue(arg0: number): void;
        setMaxValue(arg0: number): $Scroller;
        scrollBar(arg0: $Consumer_<$Button>): $Scroller;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onValueChanged(value: $FloatConsumer_);
        set scrollBarSize(value: number);
        get dragging(): boolean;
    }
    export class $ToggleGroupElement extends $UIElement {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        toggleGroup: $Toggle$ToggleGroup;
        constructor();
    }
    export class $BindableUIElement<T> extends $UIElement implements $IBindable<T>, $IObservable<T>, $IDataConsumer<T> {
        getValue(): T;
        setValue(arg0: T, arg1: boolean): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>, arg1: boolean): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        unbindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        getBoundObservers(): $Collection<$IObserver<T>>;
        registerValueListener(arg0: $Consumer_<T>): $ISubscription;
        getBoundDataSources(): $Collection<$IDataProvider<T>>;
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
        setValue(arg0: T): $IDataSource<T>;
        unbindDataSource(arg0: $IDataProvider<T>): $UIElement;
        bindObserver(arg0: $IObserver_<T>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get boundObservers(): $Collection<$IObserver<T>>;
        get boundDataSources(): $Collection<$IDataProvider<T>>;
    }
    export class $ItemSlot extends $BindableUIElement<$ItemStack> {
        getValue(): $ItemStack;
        setValue(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        getSlot(): $Slot;
        bind(arg0: $IItemHandlerModifiable, arg1: number): $ItemSlot;
        bind(arg0: $Slot): $ItemSlot;
        slotStyle(arg0: $Consumer_<$ItemSlot$SlotStyle>): $ItemSlot;
        xeiPhantom(): $ItemSlot;
        getFullTooltipTexts(): $List<$Component>;
        xeiRecipeIngredient(arg0: $IngredientIO_): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        getSlotStyle(): $ItemSlot$SlotStyle;
        xeiRecipeSlot(): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        updateSlotPosition(): void;
        setItem(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        setItem(arg0: $ItemStack_): $ItemSlot;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        static DRAGGING_BG: $IGuiTexture;
        static ITEM_SLOT_TEXTURE: $IGuiTexture;
        constructor();
        constructor(arg0: $Slot);
        get slot(): $Slot;
        get fullTooltipTexts(): $List<$Component>;
    }
    export class $VirtualItemHeightMode extends $Enum<$VirtualItemHeightMode> {
        static values(): $VirtualItemHeightMode[];
        static valueOf(arg0: string): $VirtualItemHeightMode;
        static VARIABLE: $VirtualItemHeightMode;
        static FIXED: $VirtualItemHeightMode;
    }
    /**
     * Values that may be interpreted as {@link $VirtualItemHeightMode}.
     */
    export type $VirtualItemHeightMode_ = "fixed" | "variable";
    export class $SearchComponent$ISearchUI<T> {
        static empty<T>(): $SearchComponent$ISearchUI<T>;
        static EMPTY: $SearchComponent$ISearchUI$Empty<any>;
    }
    export interface $SearchComponent$ISearchUI<T> extends $ISearch<T> {
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
    }
    export class $Tab$TabStyle extends $Style {
        hoverTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(): $IGuiTexture;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        holder: $UIElement;
        constructor(arg0: $Tab);
    }
    export class $Label extends $TextElement implements $IBindable<$Component>, $IDataConsumer<$Component> {
        getValue(): $Component;
        setValue(arg0: $Component_): $Label;
        unbindDataSource(arg0: $IDataProvider<$Component_>): $Label;
        getBoundDataSources(): $Collection<$IDataProvider<$Component>>;
        bind(arg0: $IBinding<$Component_>): $UIElement;
        unbind(arg0: $IBinding<$Component_>): $UIElement;
        bindDataSource(arg0: $IDataProvider<$Component_>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get boundDataSources(): $Collection<$IDataProvider<$Component>>;
    }
    export class $TextArea$History extends $Record {
        lines(): string[];
        cursor(): $Cursor;
        constructor(lines: string[], cursor: $Cursor_);
    }
    export class $TreeList<NODE extends $ITreeNode<never, never>> extends $UIElement {
        getRoot(): NODE;
        getSelected(): $Set<NODE>;
        setRoot(arg0: NODE): $TreeList<NODE>;
        setSupportMultipleSelection(arg0: boolean): $TreeList<NODE>;
        expandNodeAlongPath(arg0: NODE): void;
        static optionalIconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setSelectableNodeFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        setOnSelectedChanged(arg0: $Consumer_<$Set<NODE>>): $TreeList<NODE>;
        static isMouseOverNodeBelow(arg0: $UIEvent): boolean;
        static isMouseOverNodeCenter(arg0: $UIEvent): boolean;
        static isMouseOverNodeAbove(arg0: $UIEvent): boolean;
        setDoubleClickToExpand(arg0: boolean): $TreeList<NODE>;
        static createDraggingOverlay(arg0: number): $IGuiTexture;
        setOnDoubleClickNode(arg0: $Consumer_<NODE>): $TreeList<NODE>;
        setWidthFitsContent(arg0: boolean): $TreeList<NODE>;
        setSelected(arg0: $Collection_<NODE>, arg1: boolean): $TreeList<NODE>;
        setStaticTree(arg0: boolean): $TreeList<NODE>;
        isNodeExpanded(arg0: NODE): boolean;
        expandAllNodesIf(arg0: NODE, arg1: $Predicate_<NODE>): void;
        collapseNode(arg0: NODE): void;
        static textTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        getHoveredNode(): NODE;
        createNodeUI(arg0: NODE): $UIElement;
        setOnNodeUICreated(arg0: $BiConsumer_<NODE, $UIElement>): $TreeList<NODE>;
        getTreeListStyle(): $TreeList$TreeListStyle;
        getExpandedNodes(): $Set<NODE>;
        addSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        setNodeUISupplier(arg0: $UIElementProvider_<NODE>): $TreeList<NODE>;
        setClickToExpand(arg0: boolean): $TreeList<NODE>;
        static iconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        isNodeSelected(arg0: NODE): boolean;
        isWidthFitsContent(): boolean;
        removeSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        setFlattenRoot(arg0: boolean): $TreeList<NODE>;
        menuStyle(arg0: $Consumer_<$TreeList$TreeListStyle>): $TreeList<NODE>;
        reloadList(): $TreeList<NODE>;
        expandNode(arg0: NODE): void;
        getNodeUIs(): $BiMap<NODE, $UIElement>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: NODE, arg1: boolean);
        constructor(arg0: NODE);
        set supportMultipleSelection(value: boolean);
        set selectableNodeFilter(value: $Predicate_<NODE>);
        set onSelectedChanged(value: $Consumer_<$Set<NODE>>);
        set doubleClickToExpand(value: boolean);
        set onDoubleClickNode(value: $Consumer_<NODE>);
        set staticTree(value: boolean);
        get hoveredNode(): NODE;
        set onNodeUICreated(value: $BiConsumer_<NODE, $UIElement>);
        get treeListStyle(): $TreeList$TreeListStyle;
        get expandedNodes(): $Set<NODE>;
        set nodeUISupplier(value: $UIElementProvider_<NODE>);
        set clickToExpand(value: boolean);
        set flattenRoot(value: boolean);
        get nodeUIs(): $BiMap<NODE, $UIElement>;
    }
    export class $TextArea extends $BindableUIElement<string[]> {
        scale(): number;
        setValue(arg0: string[]): $TextArea;
        setValue(arg0: string[], arg1: boolean): $TextArea;
        isError(): boolean;
        setLinesResponder(arg0: $Consumer_<string[]>): $TextArea;
        setCharValidator(arg0: $Predicate_<string>): $TextArea;
        getHistoryStack(): $HistoryStack<$TextArea$History>;
        getSelEndCol(): number;
        getSelStartCol(): number;
        setTextValidator(arg0: $Predicate_<string[]>): $TextArea;
        getLines(): $List<string>;
        getCursorCol(): number;
        getCursorLine(): number;
        getTextAreaStyle(): $TextArea$TextAreaStyle;
        drawContentView(arg0: $GUIContext): void;
        getSelEndLine(): number;
        getSelStartLine(): number;
        textAreaStyle(arg0: $Consumer_<$TextArea$TextAreaStyle>): $TextArea;
        cursorPos(): $Cursor;
        isEditable(): boolean;
        lineHeight(): number;
        collapseSelectionToCursor(): void;
        getCursorUnderMouse(arg0: number, arg1: number): $Cursor;
        setCursor(arg0: number, arg1: number): void;
        getFont(): $Font;
        getScrollX(): number;
        getScrollY(): number;
        pushHistory(): void;
        setLines(arg0: string[], arg1: boolean): $TextArea;
        setLines(arg0: $List_<string>): $TextArea;
        setSelection(arg0: $Cursor_, arg1: $Cursor_): void;
        hasSelection(): boolean;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        set linesResponder(value: $Consumer_<string[]>);
        set charValidator(value: $Predicate_<string>);
        get historyStack(): $HistoryStack<$TextArea$History>;
        get selEndCol(): number;
        get selStartCol(): number;
        set textValidator(value: $Predicate_<string[]>);
        get cursorCol(): number;
        get cursorLine(): number;
        get selEndLine(): number;
        get selStartLine(): number;
        get editable(): boolean;
        get font(): $Font;
        get scrollX(): number;
        get scrollY(): number;
    }
    export class $Switch$SwitchStyle extends $Style {
        static init(): void;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        unmarkTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        unmarkTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        markTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Switch);
    }
    export class $TreeList$TreeListStyle extends $Style {
        collapseIcon(): $IGuiTexture;
        collapseIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        nodeTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        nodeTexture(): $IGuiTexture;
        hoverTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        expandIcon(): $IGuiTexture;
        expandIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        holder: $UIElement;
        constructor(arg0: $TreeList<any>);
    }
    export class $SearchComponent<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setOnValueChanged(arg0: $Consumer_<T>): $SearchComponent<T>;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $SearchComponent<T>;
        setSelected(arg0: T, arg1: boolean): $SearchComponent<T>;
        setSelected(arg0: T): $SearchComponent<T>;
        setSearchOnServer(arg0: $Class<T[]>): $SearchComponent<T>;
        isSearchOnServer(): boolean;
        getSearchStyle(): $SearchComponent$SearchStyle;
        setSearchUI(arg0: $SearchComponent$ISearchUI<T>): $SearchComponent<T>;
        getSearchUI(): $SearchComponent$ISearchUI<T>;
        searchStyle(arg0: $Consumer_<$SearchComponent$SearchStyle>): $SearchComponent<T>;
        show(): void;
        hide(): void;
        preview: $UIElement;
        dialog: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        scrollerView: $VirtualScrollerView<T>;
        textField: $TextField;
        constructor(arg0: $SearchComponent$ISearchUI<T>);
        constructor();
        get open(): boolean;
        set onValueChanged(value: $Consumer_<T>);
        set candidateUIProvider(value: $UIElementProvider_<T>);
    }
    export class $FluidSlot extends $BindableUIElement<$FluidStack> {
        getCapacity(): number;
        getValue(): $FluidStack;
        setValue(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        bind(arg0: $IFluidHandler, arg1: number): $FluidSlot;
        slotStyle(arg0: $Consumer_<$FluidSlot$SlotStyle>): $FluidSlot;
        setCapacity(arg0: number): $FluidSlot;
        setFluid(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        setFluid(arg0: $FluidStack_): $FluidSlot;
        xeiPhantom(): $FluidSlot;
        getFullTooltipTexts(): $List<$Component>;
        xeiRecipeIngredient(arg0: $IngredientIO_): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        isAllowClickDrained(): boolean;
        setAllowClickFilled(arg0: boolean): $FluidSlot;
        setAllowClickDrained(arg0: boolean): $FluidSlot;
        getSlotStyle(): $FluidSlot$SlotStyle;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $FluidSlot;
        xeiRecipeSlot(): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        getFluid(): $FluidStack;
        getFluidAmountText(): $Component;
        isAllowClickFilled(): boolean;
        amountLabel: $Label;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get fullTooltipTexts(): $List<$Component>;
        get fluidAmountText(): $Component;
    }
    export class $VirtualScrollerView<T> extends $ScrollerView {
        getItemCount(): number;
        getVirtualScrollerViewStyle(): $VirtualScrollerView$VirtualScrollerViewStyle;
        setItems(arg0: $List_<$CompoundTag_>): $VirtualScrollerView<$CompoundTag>;
        virtualScrollerViewStyle(arg0: $Consumer_<$VirtualScrollerView$VirtualScrollerViewStyle>): $VirtualScrollerView<$CompoundTag>;
        getLastMountedIndex(): number;
        getFirstMountedIndex(): number;
        getMountedItemCount(): number;
        getTotalVirtualHeight(): number;
        refreshVisibleItems(arg0: number, arg1: number): void;
        refreshVisibleItems(): void;
        updateMeasuredItemHeight(arg0: number, arg1: number): boolean;
        setBeforeMountItems(arg0: $Runnable_): $VirtualScrollerView<$CompoundTag>;
        setItemUIProvider(arg0: $UIElementProvider_<$CompoundTag>): $VirtualScrollerView<$CompoundTag>;
        scrollToTop(): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get itemCount(): number;
        set items(value: $List_<$CompoundTag_>);
        get lastMountedIndex(): number;
        get firstMountedIndex(): number;
        get mountedItemCount(): number;
        get totalVirtualHeight(): number;
        set beforeMountItems(value: $Runnable_);
        set itemUIProvider(value: $UIElementProvider_<$CompoundTag>);
    }
    export class $TagField extends $BindableUIElement<$Tag> {
        setAny(): $TagField;
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $TagField;
        setCompoundTagOnly(): $TagField;
        setListOnly(): $TagField;
        setTagResponder(arg0: $Consumer_<$Tag>): $TagField;
        setTagValidator(arg0: $Predicate_<$Tag>): $TagField;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        editButton: $Button;
        textField: $TextField;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
    }
    export class $Button extends $UIElement {
        addPreIcon(arg0: $IGuiTexture_): $Button;
        getState(): $Button$State;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Button;
        setText(arg0: string, arg1: boolean): $Button;
        enableText(): $Button;
        noText(): $Button;
        setOnClick(arg0: $UIEventListener_): $Button;
        setText(arg0: $Component_): $Button;
        addPostIcon(arg0: $IGuiTexture_): $Button;
        getButtonStyle(): $Button$ButtonStyle;
        setOnServerClick(arg0: $UIEventListener_): $Button;
        buttonStyle(arg0: $Consumer_<$Button$ButtonStyle>): $Button;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $TextElement;
        constructor();
        get state(): $Button$State;
        set onClick(value: $UIEventListener_);
        set onServerClick(value: $UIEventListener_);
    }
    export class $GraphView$GraphViewStyle extends $Style {
        gridTexture(arg0: $IGuiTexture_): $GraphView$GraphViewStyle;
        gridTexture(): $IGuiTexture;
        allowPan(): boolean;
        allowPan(arg0: boolean): $GraphView$GraphViewStyle;
        maxScale(): number;
        maxScale(arg0: number): $GraphView$GraphViewStyle;
        allowZoom(): boolean;
        allowZoom(arg0: boolean): $GraphView$GraphViewStyle;
        gridSize(): number;
        gridSize(arg0: number): $GraphView$GraphViewStyle;
        minScale(arg0: number): $GraphView$GraphViewStyle;
        minScale(): number;
        holder: $UIElement;
        constructor(arg0: $GraphView);
    }
    export class $SplitView$Horizontal extends $SplitView {
        left(arg0: $UIElement): $SplitView$Horizontal;
        right(arg0: $UIElement): $SplitView$Horizontal;
        setPercentage(arg0: number): $SplitView$Horizontal;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $StructuredTagEditor extends $BindableUIElement<$Tag> {
        setAny(): $StructuredTagEditor;
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $StructuredTagEditor;
        static convertTag(arg0: $Tag_, arg1: $StructuredTagEditor$TagKind_): $Tag;
        static insertIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static setLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static insertByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static removeLongArrayElement(arg0: $LongArrayTag, arg1: number): $LongArrayTag;
        static setByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static removeByteArrayElement(arg0: $ByteArrayTag, arg1: number): $ByteArrayTag;
        static removeIntArrayElement(arg0: $IntArrayTag, arg1: number): $IntArrayTag;
        static changeListElementType(arg0: $ListTag_, arg1: $StructuredTagEditor$TagKind_): $ListTag;
        static insertLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        setCompoundTagOnly(): $StructuredTagEditor;
        setListOnly(): $StructuredTagEditor;
        setTagResponder(arg0: $Consumer_<$Tag>): $StructuredTagEditor;
        setTagValidator(arg0: $Predicate_<$Tag>): $StructuredTagEditor;
        static renameCompoundKey(arg0: $CompoundTag_, arg1: string, arg2: string): boolean;
        static setIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        setRootTypeFilter(arg0: $Predicate_<$StructuredTagEditor$TagKind>): $StructuredTagEditor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
        set rootTypeFilter(value: $Predicate_<$StructuredTagEditor$TagKind>);
    }
    export class $ItemSlot$SlotStyle extends $Style {
        acceptQuickMove(arg0: boolean): $ItemSlot$SlotStyle;
        acceptQuickMove(): boolean;
        quickMovePriority(): number;
        quickMovePriority(arg0: number): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(arg0: boolean): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        showItemTooltips(): boolean;
        showItemTooltips(arg0: boolean): $ItemSlot$SlotStyle;
        slotOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        isPlayerSlot(arg0: boolean): $ItemSlot$SlotStyle;
        isPlayerSlot(): boolean;
        holder: $UIElement;
        constructor(arg0: $ItemSlot);
    }
    export class $ProgressBar$ProgressBarStyle extends $Style {
        static init(): void;
        interpolate(): boolean;
        interpolate(arg0: boolean): $ProgressBar$ProgressBarStyle;
        interpolateStep(arg0: number): $ProgressBar$ProgressBarStyle;
        interpolateStep(): number;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $ProgressBar$ProgressBarStyle;
        holder: $UIElement;
        constructor(arg0: $ProgressBar);
    }
    export class $Scroller$Vertical extends $Scroller {
        setValue(arg0: number): $Scroller;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set value(value: number);
    }
    export class $Menu<K, T> extends $UIElement {
        close(): void;
        setOnClose(arg0: $Runnable_): $Menu<K, $CompoundTag>;
        setHoverTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setAutoClose(arg0: boolean): $Menu<K, $CompoundTag>;
        menuStyle(arg0: $Consumer_<$Menu$MenuStyle>): $Menu<K, $CompoundTag>;
        getNodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        setOnNodeClicked(arg0: $Consumer_<$ITreeNode<K, $CompoundTag>>): $Menu<K, $CompoundTag>;
        getMenuStyle(): $Menu$MenuStyle;
        setTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setUiProvider(arg0: $UIElementProvider_<K>): $Menu<K, $CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        root: $ITreeNode<K, $CompoundTag>;
        constructor(arg0: $ITreeNode<K, $CompoundTag_>);
        constructor(arg0: $ITreeNode<K, $CompoundTag_>, arg1: $UIElementProvider_<K>);
        set onClose(value: $Runnable_);
        set hoverTextureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set autoClose(value: boolean);
        get nodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        set onNodeClicked(value: $Consumer_<$ITreeNode<K, $CompoundTag>>);
        set textureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set uiProvider(value: $UIElementProvider_<K>);
    }
    export class $Dialog extends $UIElement {
        windowMode(arg0: number, arg1: number): $Dialog;
        windowMode(arg0: number, arg1: number, arg2: number, arg3: number): $Dialog;
        addContent(arg0: $UIElement): $Dialog;
        close(): void;
        top(): $Dialog;
        bottom(): $Dialog;
        width(arg0: $TaffyDimension): $Dialog;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $Dialog;
        static showCancelableCheck(arg0: string, arg1: string, arg2: $BooleanConsumer_, arg3: $Runnable_): $Dialog;
        setOnClose(arg0: $Runnable_): $Dialog;
        setAutoClose(arg0: boolean): $Dialog;
        static showNotification(arg0: string, arg1: string, arg2: $Runnable_): $Dialog;
        static showNotification(arg0: string, arg1: number): $Dialog;
        addButton(arg0: $UIElement): $Dialog;
        show(arg0: $UIElement): $Dialog;
        show(arg0: $ModularUI): $Dialog;
        setTitle(arg0: string): $Dialog;
        setClickOutsideClose(arg0: boolean): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $File_, arg4: $Predicate_<$FileNode>, arg5: $Consumer_<$File>): $Dialog;
        static suffixFilter(...arg0: string[]): $Predicate<$FileNode>;
        static showCheckBox(arg0: string, arg1: string, arg2: $BooleanConsumer_): $Dialog;
        static stringEditorDialog(arg0: string, arg1: string, arg2: $Predicate_<string>, arg3: $Consumer_<string>): $Dialog;
        darkenBackground(): $Dialog;
        allowInteraction(): $Dialog;
        titleBar: $UIElement;
        static CODEC: $Codec<$UIElement>;
        overlay: $UIElement;
        contentContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        buttonContainer: $UIElement;
        constructor();
        set onClose(value: $Runnable_);
        set autoClose(value: boolean);
        set title(value: string);
        set clickOutsideClose(value: boolean);
    }
    export class $TabView extends $UIElement {
        clear(): $TabView;
        removeTab(arg0: $Tab): $TabView;
        tabContentContainer(arg0: $Consumer_<$UIElement>): $TabView;
        tabHeaderContainer(arg0: $Consumer_<$UIElement>): $TabView;
        getTabContents(): $BiMap<$Tab, $UIElement>;
        setOnTabSelected(arg0: $Consumer_<$Tab>): $TabView;
        tabScroller(arg0: $Consumer_<$ScrollerView>): $TabView;
        getSelectedTab(): $Tab;
        addTab(arg0: $Tab, arg1: $UIElement): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement, arg2: number): $TabView;
        selectTab(arg0: $Tab): $TabView;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get tabContents(): $BiMap<$Tab, $UIElement>;
        set onTabSelected(value: $Consumer_<$Tab>);
        get selectedTab(): $Tab;
    }
    export class $Scene extends $UIElement {
        setRenderFacing(arg0: boolean): $Scene;
        setRenderSelect(arg0: boolean): $Scene;
        createScene(arg0: $Level_): $Scene;
        createScene(arg0: $Level_, arg1: boolean, arg2: $Size): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook, arg2: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>): $Scene;
        setCenter(arg0: $Vector3f): $Scene;
        getParticleManager(): $ParticleManager;
        getRange(): number;
        getZoom(): number;
        isUseCache(): boolean;
        isUseOrtho(): boolean;
        camZoom(): number;
        useOrtho(): $Scene;
        useOrtho(arg0: boolean): $Scene;
        xeiLookup(): $Scene;
        setZoom(arg0: number): $Scene;
        isScalable(): boolean;
        getRenderer(): $WorldSceneRenderer;
        setOrthoRange(arg0: number): $Scene;
        setIntractable(arg0: boolean): $Scene;
        getClipFluid(): $ClipContext$Fluid;
        getOnSelected(): $BiConsumer<$BlockPos, $Direction>;
        getClipBlock(): $ClipContext$Block;
        setDraggable(arg0: boolean): $Scene;
        isIntractable(): boolean;
        setAllowXEILookup(arg0: boolean): $Scene;
        isSyncCompile(): boolean;
        setTickWorld(arg0: boolean): $Scene;
        getRotationPitch(): number;
        setOnSelected(arg0: $BiConsumer_<$BlockPos, $Direction>): $Scene;
        isAutoReleased(): boolean;
        setClipContext(arg0: $ClipContext$Block_, arg1: $ClipContext$Fluid_): $Scene;
        getDummyWorld(): $TrackedDummyWorld;
        getRotationYaw(): number;
        setScalable(arg0: boolean): $Scene;
        isRenderSelect(): boolean;
        isDraggable(): boolean;
        isAllowXEILookup(): boolean;
        getLastHoverItem(): $ItemStack;
        isRenderFacing(): boolean;
        isTickWorld(): boolean;
        isDragging(): boolean;
        setBeforeWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        setCameraYawAndPitch(arg0: number, arg1: number): $Scene;
        setShowHoverBlockTips(arg0: boolean): $Scene;
        isShowHoverBlockTips(): boolean;
        setCameraYawAndPitchAnima(arg0: number, arg1: number, arg2: number): void;
        getLastHoverPosFace(): $BlockPosFace;
        getLastClickPosFace(): $BlockPosFace;
        getLastSelectedPosFace(): $BlockPosFace;
        releaseRendererResource(): void;
        setAfterWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        getCenter(): $Vector3f;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number, arg3: number): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number): void;
        renderBlockOverLay(arg0: $WorldSceneRenderer): void;
        syncCompile(arg0: boolean): $Scene;
        syncCompile(): $Scene;
        useCacheBuffer(): $Scene;
        useCacheBuffer(arg0: boolean): $Scene;
        needCompileCache(): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get particleManager(): $ParticleManager;
        get range(): number;
        get useCache(): boolean;
        get renderer(): $WorldSceneRenderer;
        set orthoRange(value: number);
        get clipFluid(): $ClipContext$Fluid;
        get clipBlock(): $ClipContext$Block;
        get rotationPitch(): number;
        get autoReleased(): boolean;
        get dummyWorld(): $TrackedDummyWorld;
        get rotationYaw(): number;
        get lastHoverItem(): $ItemStack;
        get dragging(): boolean;
        set beforeWorldRender(value: $Consumer_<$Scene>);
        get lastHoverPosFace(): $BlockPosFace;
        get lastClickPosFace(): $BlockPosFace;
        get lastSelectedPosFace(): $BlockPosFace;
        set afterWorldRender(value: $Consumer_<$Scene>);
    }
    export class $ScrollerView$ScrollerViewStyle extends $Style {
        mode(): $ScrollerMode;
        mode(arg0: $ScrollerMode_): $ScrollerView$ScrollerViewStyle;
        static init(): void;
        adaptiveWidth(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        adaptiveWidth(): boolean;
        scrollerViewMargin(): number;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        minScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(): number;
        maxScrollPixel(): number;
        maxScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        scrollerViewStyle(arg0: number): $ScrollerView$ScrollerViewStyle;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        holder: $UIElement;
        constructor(arg0: $ScrollerView);
    }
    export class $TextArea$TextAreaStyle extends $Style {
        static init(): void;
        scrollerViewMargin(): number;
        focusOverlay(arg0: $IGuiTexture_): $TextArea$TextAreaStyle;
        focusOverlay(): $IGuiTexture;
        cursorColor(arg0: number): $TextArea$TextAreaStyle;
        cursorColor(): number;
        fontSize(): number;
        fontSize(arg0: number): $TextArea$TextAreaStyle;
        font(arg0: $ResourceLocation_): $TextArea$TextAreaStyle;
        font(): $ResourceLocation;
        lineSpacing(arg0: number): $TextArea$TextAreaStyle;
        lineSpacing(): number;
        textColor(arg0: number): $TextArea$TextAreaStyle;
        textColor(): number;
        placeholder(): $Component;
        placeholder(arg0: $Component_): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        scrollerViewStyle(arg0: number): $TextArea$TextAreaStyle;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextArea$TextAreaStyle;
        viewMode(): $ScrollerMode;
        viewMode(arg0: $ScrollerMode_): $TextArea$TextAreaStyle;
        errorColor(arg0: number): $TextArea$TextAreaStyle;
        errorColor(): number;
        holder: $UIElement;
        constructor(arg0: $TextArea);
    }
    export class $TextField$Mode extends $Enum<$TextField$Mode> {
        static values(): $TextField$Mode[];
        static valueOf(arg0: string): $TextField$Mode;
        isNumber(): boolean;
        getNumberType(): $ConfigNumber$Type;
        static NUMBER_FLOAT: $TextField$Mode;
        static RESOURCE_LOCATION: $TextField$Mode;
        static NUMBER_INT: $TextField$Mode;
        static NUMBER_BYTE: $TextField$Mode;
        static INTERNAL: $TextField$Mode;
        static COMPOUND_TAG: $TextField$Mode;
        static STRING: $TextField$Mode;
        static NUMBER_DOUBLE: $TextField$Mode;
        static NUMBER_SHORT: $TextField$Mode;
        static NUMBER_LONG: $TextField$Mode;
        get number(): boolean;
        get numberType(): $ConfigNumber$Type;
    }
    /**
     * Values that may be interpreted as {@link $TextField$Mode}.
     */
    export type $TextField$Mode_ = "internal" | "string" | "compound_tag" | "resource_location" | "number_long" | "number_int" | "number_float" | "number_double" | "number_short" | "number_byte";
    export class $BindableValue<T> extends $BindableUIElement<T> {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: T);
    }
    export class $TextElement extends $UIElement {
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $TextElement;
        getText(): $Component;
        setText(arg0: string, arg1: boolean): $TextElement;
        recompute(): void;
        getFont(): $Font;
        setText(arg0: $Component_): $TextElement;
        getTextStyle(): $TextElement$TextStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get font(): $Font;
    }
    export class $UITemplateElement extends $UIElement {
        getPath(): $IResourcePath;
        getTemplate(): $UITemplate;
        setTemplate(arg0: $IResourcePath): $UITemplateElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: $IResourcePath);
        get path(): $IResourcePath;
    }
    export class $Switch extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Switch;
        setOn(arg0: boolean, arg1: boolean): $Switch;
        setOn(arg0: boolean): $Switch;
        setOnSwitchChanged(arg0: $BooleanConsumer_): $Switch;
        switchStyle(arg0: $Consumer_<$Switch$SwitchStyle>): $Switch;
        getSwitchStyle(): $Switch$SwitchStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        placeholder: $UIElement;
        markIcon: $UIElement;
        constructor();
        set onSwitchChanged(value: $BooleanConsumer_);
    }
    export class $SplitView$Vertical extends $SplitView {
        top(arg0: $UIElement): $SplitView$Vertical;
        bottom(arg0: $UIElement): $SplitView$Vertical;
        setPercentage(arg0: number): $SplitView$Vertical;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $VirtualScrollerView$VirtualScrollerViewStyle extends $Style {
        static init(): void;
        estimatedItemHeight(): number;
        estimatedItemHeight(arg0: number): $VirtualScrollerView$VirtualScrollerViewStyle;
        itemHeightMode(arg0: $VirtualItemHeightMode_): $VirtualScrollerView$VirtualScrollerViewStyle;
        itemHeightMode(): $VirtualItemHeightMode;
        overscanPixels(): number;
        overscanPixels(arg0: number): $VirtualScrollerView$VirtualScrollerViewStyle;
        holder: $UIElement;
    }
    export class $TextElement$TextStyle extends $Style {
        static init(): void;
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $TextElement$TextStyle;
        textAlignVertical(): $Vertical;
        textAlignVertical(arg0: $Vertical_): $TextElement$TextStyle;
        fontSize(): number;
        fontSize(arg0: number): $TextElement$TextStyle;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextElement$TextStyle;
        rollSpeed(): number;
        rollSpeed(arg0: number): $TextElement$TextStyle;
        textWrap(): $TextWrap;
        textWrap(arg0: $TextWrap_): $TextElement$TextStyle;
        textAlignHorizontal(arg0: $Horizontal_): $TextElement$TextStyle;
        textAlignHorizontal(): $Horizontal;
        lineSpacing(arg0: number): $TextElement$TextStyle;
        lineSpacing(): number;
        textColor(): number;
        textColor(arg0: number): $TextElement$TextStyle;
        textShadow(arg0: boolean): $TextElement$TextStyle;
        textShadow(): boolean;
        adaptiveHeight(arg0: boolean): $TextElement$TextStyle;
        adaptiveHeight(): boolean;
        holder: $UIElement;
        constructor(arg0: $TextElement);
    }
    export class $Toggle extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Toggle;
        setText(arg0: string, arg1: boolean): $Toggle;
        enableText(): $Toggle;
        noText(): $Toggle;
        setOn(arg0: boolean): $Toggle;
        setOn(arg0: boolean, arg1: boolean): $Toggle;
        markIcon(arg0: $Consumer_<$UIElement>): $Toggle;
        getToggleGroup(): $Toggle$ToggleGroup;
        setToggleGroup(arg0: $Toggle$ToggleGroup): $Toggle;
        toggleButton(arg0: $Consumer_<$Button>): $Toggle;
        setText(arg0: $Component_): $Toggle;
        getToggleStyle(): $Toggle$ToggleStyle;
        setOnToggleChanged(arg0: $BooleanConsumer_): $Toggle;
        toggleStyle(arg0: $Consumer_<$Toggle$ToggleStyle>): $Toggle;
        toggleLabel(arg0: $Consumer_<$Label>): $Toggle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onToggleChanged(value: $BooleanConsumer_);
    }
    export class $Toggle$ToggleGroup implements $IPersistedSerializable, $IConfigurable {
        getToggles(): $List<$Toggle>;
        setAllowEmpty(arg0: boolean): $Toggle$ToggleGroup;
        getCurrentToggle(): $Toggle;
        beforeDeserialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        afterSerialize(): void;
        beforeSerialize(): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createHistoryRecorder(): $IConfigurableHistory;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        get toggles(): $List<$Toggle>;
        set allowEmpty(value: boolean);
        get currentToggle(): $Toggle;
        get configurableName(): string;
    }
    export class $StructuredTagEditor$TagKind extends $Enum<$StructuredTagEditor$TagKind> {
        static values(): $StructuredTagEditor$TagKind[];
        static valueOf(arg0: string): $StructuredTagEditor$TagKind;
        static FLOAT: $StructuredTagEditor$TagKind;
        static BYTE_ARRAY: $StructuredTagEditor$TagKind;
        displayName: string;
        static COMPOUND: $StructuredTagEditor$TagKind;
        static INT_ARRAY: $StructuredTagEditor$TagKind;
        static INT: $StructuredTagEditor$TagKind;
        static LONG_ARRAY: $StructuredTagEditor$TagKind;
        static BOOLEAN: $StructuredTagEditor$TagKind;
        static SHORT: $StructuredTagEditor$TagKind;
        static BYTE: $StructuredTagEditor$TagKind;
        static STRING: $StructuredTagEditor$TagKind;
        static END: $StructuredTagEditor$TagKind;
        static DOUBLE: $StructuredTagEditor$TagKind;
        static LIST: $StructuredTagEditor$TagKind;
        static LONG: $StructuredTagEditor$TagKind;
    }
    /**
     * Values that may be interpreted as {@link $StructuredTagEditor$TagKind}.
     */
    export type $StructuredTagEditor$TagKind_ = "end" | "byte" | "short" | "int" | "long" | "float" | "double" | "string" | "list" | "compound" | "byte_array" | "int_array" | "long_array" | "boolean";
    export class $SplitView extends $UIElement {
        first(arg0: $UIElement): $SplitView;
        second(arg0: $UIElement): $SplitView;
        setPercentage(arg0: number): $SplitView;
        setMaxPercentage(arg0: number): $SplitView;
        setBorderSize(arg0: number): $SplitView;
        getBorderSize(): number;
        getMinPercentage(): number;
        getPercentage(): number;
        setMinPercentage(arg0: number): $SplitView;
        getMaxPercentage(): number;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu$MenuStyle extends $Style {
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafTexture(): $IGuiTexture;
        nodeHoverTexture(): $IGuiTexture;
        nodeHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafHoverTexture(): $IGuiTexture;
        leafHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        arrowIcon(arg0: $IGuiTexture_): $Menu$MenuStyle;
        arrowIcon(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Menu<any, any>);
    }
    export class $ProgressBar extends $UIElement implements $IBindable<number>, $IDataConsumer<number> {
        setValue(arg0: number): $ProgressBar;
        label(arg0: $Consumer_<$Label>): $ProgressBar;
        unbindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        getMinValue(): number;
        getMaxValue(): number;
        setRange(arg0: number, arg1: number): $ProgressBar;
        bar(arg0: $Consumer_<$UIElement>): $ProgressBar;
        getProgressBarStyle(): $ProgressBar$ProgressBarStyle;
        getBoundDataSources(): $Collection<$IDataProvider<number>>;
        barContainer(arg0: $Consumer_<$UIElement>): $ProgressBar;
        progressBarStyle(arg0: $Consumer_<$ProgressBar$ProgressBarStyle>): $ProgressBar;
        getNormalizedValue(): number;
        getNormalizedValue(arg0: number): number;
        setMinValue(arg0: number): $ProgressBar;
        setMaxValue(arg0: number): $ProgressBar;
        setProgress(arg0: number): $ProgressBar;
        bind(arg0: $IBinding<number>): $UIElement;
        unbind(arg0: $IBinding<number>): $UIElement;
        getValue(): number;
        bindDataSource(arg0: $IDataProvider<number>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        barBackground: $UIElement;
        constructor();
        get boundDataSources(): $Collection<$IDataProvider<number>>;
        set progress(value: number);
    }
    export class $Selector<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setOnValueChanged(arg0: $Consumer_<T>): $Selector<T>;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $Selector<T>;
        setCandidates(arg0: $List_<T>): $Selector<T>;
        getSelectorStyle(): $Selector$SelectorStyle;
        setSelected(arg0: T): $Selector<T>;
        setSelected(arg0: T, arg1: boolean): $Selector<T>;
        getCandidates(): $List<T>;
        selectorStyle(arg0: $Consumer_<$Selector$SelectorStyle>): $Selector<T>;
        show(): void;
        hide(): void;
        preview: $UIElement;
        dialog: $UIElement;
        buttonIcon: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        display: $UIElement;
        scrollerView: $ScrollerView;
        constructor();
        get open(): boolean;
        set onValueChanged(value: $Consumer_<T>);
        set candidateUIProvider(value: $UIElementProvider_<T>);
    }
    export class $Inspector extends $UIElement {
        clear(): void;
        getHistoryStack(): $IHistoryStack;
        setHistoryStack(arg0: $IHistoryStack): $Inspector;
        getInspectedConfigurable(): $IConfigurable;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Runnable_): $ConfiguratorGroup;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        get inspectedConfigurable(): $IConfigurable;
    }
    export class $ColorSelector extends $BindableUIElement<number> {
        setValue(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number): $ColorSelector;
        setOnColorChangeListener(arg0: $IntConsumer_): $ColorSelector;
        getColor(): number;
        hexConfigurator: $StringConfigurator;
        colorSlider: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        pickerContainer: $UIElement;
        hsbButton: $Button;
        textContainer: $UIElement;
        colorPreview: $UIElement;
        alphaSlider: $UIElement;
        constructor();
        set onColorChangeListener(value: $IntConsumer_);
    }
}
