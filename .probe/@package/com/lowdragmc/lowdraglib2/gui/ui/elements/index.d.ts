import { $HistoryStack } from "@package/com/lowdragmc/lowdraglib2/utils";
import { $Codec } from "@package/com/mojang/serialization";
import { $ConfigNumber$Type } from "@package/com/lowdragmc/lowdraglib2/configurator/annotation";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Tag_, $Tag, $LongArrayTag, $ListTag_, $ByteArrayTag, $IntArrayTag, $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IGuiTexture_, $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ISearch, $IResultHandler_ } from "@package/com/lowdragmc/lowdraglib2/utils/search";
import { $ISceneBlockRenderHook, $ParticleManager, $WorldSceneRenderer } from "@package/com/lowdragmc/lowdraglib2/client/scene";
import { $Map, $Set, $List, $Collection_, $List_ } from "@package/java/util";
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
import { $IBinding, $IObservable, $IDataProvider, $IDataConsumer, $IObserver_, $IDataSource, $IBindable } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
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
        onResultSelected(arg0: T): void;
        resultText(arg0: T): string;
        constructor();
    }
    export class $Selector$SelectorStyle extends $Style {
        static init(): void;
        maxItemCount(): number;
        maxItemCount(arg0: number): $Selector$SelectorStyle;
        closeAfterSelect(): boolean;
        closeAfterSelect(arg0: boolean): $Selector$SelectorStyle;
        scrollerViewHeight(arg0: number): $Selector$SelectorStyle;
        scrollerViewHeight(): number;
        focusOverlay(arg0: $IGuiTexture_): $Selector$SelectorStyle;
        focusOverlay(): $IGuiTexture;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $Selector$SelectorStyle;
        holder: $UIElement;
    }
    export class $TextField extends $BindableUIElement<string> {
        setValue(arg0: string, arg1: boolean): $TextField;
        isError(): boolean;
        getText(): string;
        setFormatter(arg0: $Function_<string, $Component>): $TextField;
        getFormatter(): $Function<string, $Component>;
        setText(arg0: string, arg1: boolean): $TextField;
        setText(arg0: string): $TextField;
        setNumbersOnlyLong(arg0: number, arg1: number): $TextField;
        textFieldStyle(arg0: $Consumer_<$TextField$TextFieldStyle>): $TextField;
        setAnyString(): $TextField;
        getWheelDur(): number;
        setWheelDur(arg0: number): $TextField;
        setWheelDur(arg0: number, arg1: number): $TextField;
        setNumbersOnlyInt(arg0: number, arg1: number): $TextField;
        setCompoundTagOnly(): $TextField;
        getFormattedLine(): $Tuple<$FormattedCharSequence, number>;
        getTextFieldStyle(): $TextField$TextFieldStyle;
        setNumbersOnlyByte(arg0: number, arg1: number): $TextField;
        getMode(): $TextField$Mode;
        getSelectionEnd(): number;
        setSelection(arg0: number, arg1: number): void;
        getSelectionStart(): number;
        deleteCharsToPos(arg0: number): void;
        getWordPosition(arg0: number): number;
        getHighlighted(): string;
        deleteChars(arg0: number): void;
        deleteWords(arg0: number): void;
        setTextResponder(arg0: $Consumer_<string>): $TextField;
        setTextValidator(arg0: $Predicate_<string>): $TextField;
        insertText(arg0: string): void;
        setResourceLocationOnly(): $TextField;
        getFont(): $Font;
        isEditable(): boolean;
        getHistoryStack(): $HistoryStack<string>;
        setCharValidator(arg0: $Predicate_<string>): $TextField;
        setCursor(arg0: number): void;
        setNumbersOnlyShort(arg0: number, arg1: number): $TextField;
        setNumbersOnlyFloat(arg0: number, arg1: number): $TextField;
        setTextRegexValidator(arg0: string): $TextField;
        setNumbersOnlyDouble(arg0: number, arg1: number): $TextField;
        getCursorUnderMouseX(arg0: number): number;
        getCursorPos(): number;
        getDisplayOffset(): number;
        getRawText(): string;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get formattedLine(): $Tuple<$FormattedCharSequence, number>;
        get mode(): $TextField$Mode;
        get selectionEnd(): number;
        get selectionStart(): number;
        get highlighted(): string;
        set textResponder(value: $Consumer_<string>);
        set textValidator(value: $Predicate_<string>);
        get font(): $Font;
        get editable(): boolean;
        get historyStack(): $HistoryStack<string>;
        set charValidator(value: $Predicate_<string>);
        set cursor(value: number);
        set textRegexValidator(value: string);
        get cursorPos(): number;
        get displayOffset(): number;
        get rawText(): string;
    }
    export class $GraphView extends $UIElement {
        fit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addContentChild(arg0: $UIElement): $GraphView;
        getGraphViewStyle(): $GraphView$GraphViewStyle;
        contentRoot(arg0: $Consumer_<$UIElement>): $UIElement;
        fitToChildren(arg0: number, arg1: number): void;
        graphViewStyle(arg0: $Consumer_<$GraphView$GraphViewStyle>): $GraphView;
        removeContentChild(arg0: $UIElement): $GraphView;
        getScale(): number;
        clearAllContentChildren(): $GraphView;
        getOffsetX(): number;
        setOffsetX(arg0: number): void;
        setOffsetY(arg0: number): void;
        getOffsetY(): number;
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
        slotOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        fillDirection(arg0: $FillDirection_): $FluidSlot$SlotStyle;
        fillDirection(): $FillDirection;
        showFluidTooltips(): boolean;
        showFluidTooltips(arg0: boolean): $FluidSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $FluidSlot$SlotStyle;
        holder: $UIElement;
        constructor(arg0: $FluidSlot);
    }
    export class $Tab extends $UIElement {
        getContent(): $UIElement;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Tab;
        setText(arg0: string, arg1: boolean): $Tab;
        setText(arg0: string): $Tab;
        setText(arg0: $Component_): $Tab;
        setOnTabSelected(arg0: $Runnable_): $Tab;
        tabStyle(arg0: $Consumer_<$Tab$TabStyle>): $Tab;
        setOnTabUnselected(arg0: $Runnable_): $Tab;
        setDynamicText(arg0: $Supplier_<$Component>): $Tab;
        getTabStyle(): $Tab$TabStyle;
        setSelected(arg0: boolean): void;
        getTabView(): $TabView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $Label;
        constructor();
        get content(): $UIElement;
        set onTabSelected(value: $Runnable_);
        set onTabUnselected(value: $Runnable_);
        set dynamicText(value: $Supplier_<$Component>);
        set selected(value: boolean);
        get tabView(): $TabView;
    }
    export class $TextField$TextFieldStyle extends $Style {
        static init(): void;
        font(arg0: $ResourceLocation_): $TextField$TextFieldStyle;
        font(): $ResourceLocation;
        fontSize(): number;
        fontSize(arg0: number): $TextField$TextFieldStyle;
        placeholder(): $Component;
        placeholder(arg0: $Component_): $TextField$TextFieldStyle;
        errorColor(): number;
        errorColor(arg0: number): $TextField$TextFieldStyle;
        textShadow(arg0: boolean): $TextField$TextFieldStyle;
        textShadow(): boolean;
        focusOverlay(arg0: $IGuiTexture_): $TextField$TextFieldStyle;
        focusOverlay(): $IGuiTexture;
        cursorColor(arg0: number): $TextField$TextFieldStyle;
        cursorColor(): number;
        textColor(): number;
        textColor(arg0: number): $TextField$TextFieldStyle;
        holder: $UIElement;
        constructor(arg0: $TextField);
    }
    export class $Button$ButtonStyle extends $Style {
        hoverTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        hoverTexture(): $IGuiTexture;
        pressedTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Button);
    }
    export class $Scroller$Horizontal extends $Scroller {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
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
        markTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        hoverTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        baseTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        holder: $UIElement;
        constructor(arg0: $Toggle);
    }
    export class $ScrollerView extends $UIElement {
        addScrollViewChildren(...arg0: $UIElement[]): $ScrollerView;
        getScrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        scrollerStyle(arg0: $Consumer_<$ScrollerView$ScrollerViewStyle>): $ScrollerView;
        viewContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        hasScrollViewChild(arg0: $UIElement): boolean;
        getContainerWidth(): number;
        addScrollViewChild(arg0: $UIElement): $ScrollerView;
        getContainerHeight(): number;
        verticalContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        addScrollViewChildAt(arg0: $UIElement, arg1: number): $ScrollerView;
        removeScrollViewChild(arg0: $UIElement): boolean;
        clearAllScrollViewChildren(): void;
        verticalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        horizontalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        viewPort(arg0: $Consumer_<$UIElement>): $ScrollerView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        get containerWidth(): number;
        get containerHeight(): number;
    }
    export class $SearchComponent$SearchStyle extends $Style {
        static init(): void;
        maxItemCount(): number;
        maxItemCount(arg0: number): $SearchComponent$SearchStyle;
        closeAfterSelect(): boolean;
        closeAfterSelect(arg0: boolean): $SearchComponent$SearchStyle;
        scrollerViewHeight(arg0: number): $SearchComponent$SearchStyle;
        scrollerViewHeight(): number;
        focusOverlay(arg0: $IGuiTexture_): $SearchComponent$SearchStyle;
        focusOverlay(): $IGuiTexture;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $SearchComponent$SearchStyle;
        holder: $UIElement;
    }
    export class $Scroller extends $BindableUIElement<number> {
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $Scroller;
        setValue(arg0: number): $Scroller;
        getMinValue(): number;
        getMaxValue(): number;
        scrollValue(arg0: number): void;
        getNormalizedValue(): number;
        getScrollerStyle(): $Scroller$ScrollerStyle;
        scrollContainer(arg0: $Consumer_<$UIElement>): $Scroller;
        scrollerStyle(arg0: $Consumer_<$Scroller$ScrollerStyle>): $Scroller;
        setRange(arg0: number, arg1: number): $Scroller;
        setClampNormalizedValue(arg0: $Function_<number, number>): $Scroller;
        isDragging(): boolean;
        scrollBar(arg0: $Consumer_<$Button>): $Scroller;
        setScrollBarSize(arg0: number): $Scroller;
        setOnValueChanged(arg0: $FloatConsumer_): $Scroller;
        headButton(arg0: $Consumer_<$Button>): $Scroller;
        tailButton(arg0: $Consumer_<$Button>): $Scroller;
        setMaxValue(arg0: number): $Scroller;
        setNormalizedValue(arg0: number, arg1: boolean): $Scroller;
        setNormalizedValue(arg0: number): $Scroller;
        setMinValue(arg0: number): $Scroller;
        getClampNormalizedValue(): $Function<number, number>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get dragging(): boolean;
        set scrollBarSize(value: number);
        set onValueChanged(value: $FloatConsumer_);
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
        unbindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>, arg1: boolean): $BindableUIElement<T>;
        bindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        registerValueListener(arg0: $Consumer_<T>): $ISubscription;
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
        setValue(arg0: T): $IDataSource<T>;
        unbindObserver(arg0: $IObserver_<T>): $UIElement;
        bindDataSource(arg0: $IDataProvider<T>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $ItemSlot extends $BindableUIElement<$ItemStack> {
        getValue(): $ItemStack;
        setValue(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        getSlot(): $Slot;
        bind(arg0: $IItemHandlerModifiable, arg1: number): $ItemSlot;
        bind(arg0: $Slot): $ItemSlot;
        slotStyle(arg0: $Consumer_<$ItemSlot$SlotStyle>): $ItemSlot;
        getSlotStyle(): $ItemSlot$SlotStyle;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $ItemSlot;
        xeiRecipeSlot(): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        updateSlotPosition(): void;
        setItem(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        setItem(arg0: $ItemStack_): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        getFullTooltipTexts(): $List<$Component>;
        xeiPhantom(): $ItemSlot;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        static DRAGGING_BG: $IGuiTexture;
        static ITEM_SLOT_TEXTURE: $IGuiTexture;
        constructor();
        constructor(arg0: $Slot);
        get slot(): $Slot;
        get fullTooltipTexts(): $List<$Component>;
    }
    export class $SearchComponent$ISearchUI<T> {
        static empty<T>(): $SearchComponent$ISearchUI<T>;
        static EMPTY: $SearchComponent$ISearchUI$Empty<any>;
    }
    export interface $SearchComponent$ISearchUI<T> extends $ISearch<T> {
        onResultSelected(arg0: T): void;
        resultText(arg0: T): string;
    }
    export class $Tab$TabStyle extends $Style {
        hoverTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Tab);
    }
    export class $Label extends $TextElement implements $IBindable<$Component>, $IDataConsumer<$Component> {
        getValue(): $Component;
        setValue(arg0: $Component_): $Label;
        unbindDataSource(arg0: $IDataProvider<$Component_>): $Label;
        bindDataSource(arg0: $IDataProvider<$Component_>): $Label;
        bind(arg0: $IBinding<$Component_>): $UIElement;
        unbind(arg0: $IBinding<$Component_>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $TextArea$History extends $Record {
        lines(): string[];
        cursor(): $Cursor;
        constructor(lines: string[], cursor: $Cursor_);
    }
    export class $TreeList<NODE extends $ITreeNode<never, never>> extends $UIElement {
        getRoot(): NODE;
        setRoot(arg0: NODE): $TreeList<NODE>;
        getSelected(): $Set<NODE>;
        setOnNodeUICreated(arg0: $BiConsumer_<NODE, $UIElement>): $TreeList<NODE>;
        setFlattenRoot(arg0: boolean): $TreeList<NODE>;
        addSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        isNodeSelected(arg0: NODE): boolean;
        getHoveredNode(): NODE;
        static iconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setNodeUISupplier(arg0: $UIElementProvider_<NODE>): $TreeList<NODE>;
        getTreeListStyle(): $TreeList$TreeListStyle;
        getExpandedNodes(): $Set<NODE>;
        setClickToExpand(arg0: boolean): $TreeList<NODE>;
        isWidthFitsContent(): boolean;
        menuStyle(arg0: $Consumer_<$TreeList$TreeListStyle>): $TreeList<NODE>;
        getNodeUIs(): $BiMap<NODE, $UIElement>;
        setSelected(arg0: $Collection_<NODE>, arg1: boolean): $TreeList<NODE>;
        setSupportMultipleSelection(arg0: boolean): $TreeList<NODE>;
        static isMouseOverNodeBelow(arg0: $UIEvent): boolean;
        static isMouseOverNodeCenter(arg0: $UIEvent): boolean;
        static isMouseOverNodeAbove(arg0: $UIEvent): boolean;
        setOnSelectedChanged(arg0: $Consumer_<$Set<NODE>>): $TreeList<NODE>;
        expandNodeAlongPath(arg0: NODE): void;
        setWidthFitsContent(arg0: boolean): $TreeList<NODE>;
        static optionalIconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setOnDoubleClickNode(arg0: $Consumer_<NODE>): $TreeList<NODE>;
        setDoubleClickToExpand(arg0: boolean): $TreeList<NODE>;
        static createDraggingOverlay(arg0: number): $IGuiTexture;
        setSelectableNodeFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        reloadList(): $TreeList<NODE>;
        expandNode(arg0: NODE): void;
        setStaticTree(arg0: boolean): $TreeList<NODE>;
        static textTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        isNodeExpanded(arg0: NODE): boolean;
        removeSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        collapseNode(arg0: NODE): void;
        createNodeUI(arg0: NODE): $UIElement;
        expandAllNodesIf(arg0: NODE, arg1: $Predicate_<NODE>): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: NODE, arg1: boolean);
        constructor(arg0: NODE);
        constructor();
        set onNodeUICreated(value: $BiConsumer_<NODE, $UIElement>);
        set flattenRoot(value: boolean);
        get hoveredNode(): NODE;
        set nodeUISupplier(value: $UIElementProvider_<NODE>);
        get treeListStyle(): $TreeList$TreeListStyle;
        get expandedNodes(): $Set<NODE>;
        set clickToExpand(value: boolean);
        get nodeUIs(): $BiMap<NODE, $UIElement>;
        set supportMultipleSelection(value: boolean);
        set onSelectedChanged(value: $Consumer_<$Set<NODE>>);
        set onDoubleClickNode(value: $Consumer_<NODE>);
        set doubleClickToExpand(value: boolean);
        set selectableNodeFilter(value: $Predicate_<NODE>);
        set staticTree(value: boolean);
    }
    export class $TextArea extends $BindableUIElement<string[]> {
        scale(): number;
        getValue(): string[];
        setValue(arg0: string[]): $TextArea;
        setValue(arg0: string[], arg1: boolean): $TextArea;
        isError(): boolean;
        getLines(): $List<string>;
        getCursorUnderMouse(arg0: number, arg1: number): $Cursor;
        setSelection(arg0: $Cursor_, arg1: $Cursor_): void;
        pushHistory(): void;
        hasSelection(): boolean;
        setTextValidator(arg0: $Predicate_<string[]>): $TextArea;
        getTextAreaStyle(): $TextArea$TextAreaStyle;
        getCursorLine(): number;
        getCursorCol(): number;
        drawContentView(arg0: $GUIContext): void;
        getSelStartLine(): number;
        getSelEndLine(): number;
        collapseSelectionToCursor(): void;
        setLines(arg0: string[], arg1: boolean): $TextArea;
        setLines(arg0: $List_<string>): $TextArea;
        getScrollX(): number;
        getScrollY(): number;
        lineHeight(): number;
        getFont(): $Font;
        isEditable(): boolean;
        cursorPos(): $Cursor;
        getHistoryStack(): $HistoryStack<$TextArea$History>;
        textAreaStyle(arg0: $Consumer_<$TextArea$TextAreaStyle>): $TextArea;
        getSelStartCol(): number;
        getSelEndCol(): number;
        setLinesResponder(arg0: $Consumer_<string[]>): $TextArea;
        setCharValidator(arg0: $Predicate_<string>): $TextArea;
        setCursor(arg0: number, arg1: number): void;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        set textValidator(value: $Predicate_<string[]>);
        get cursorLine(): number;
        get cursorCol(): number;
        get selStartLine(): number;
        get selEndLine(): number;
        get scrollX(): number;
        get scrollY(): number;
        get font(): $Font;
        get editable(): boolean;
        get historyStack(): $HistoryStack<$TextArea$History>;
        get selStartCol(): number;
        get selEndCol(): number;
        set linesResponder(value: $Consumer_<string[]>);
        set charValidator(value: $Predicate_<string>);
    }
    export class $Switch$SwitchStyle extends $Style {
        static init(): void;
        markTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        markTexture(): $IGuiTexture;
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(): $IGuiTexture;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        holder: $UIElement;
        constructor(arg0: $Switch);
    }
    export class $TreeList$TreeListStyle extends $Style {
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        collapseIcon(): $IGuiTexture;
        collapseIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        expandIcon(): $IGuiTexture;
        expandIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        holder: $UIElement;
        constructor(arg0: $TreeList<any>);
    }
    export class $SearchComponent<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $SearchComponent<T>;
        show(): void;
        setSelected(arg0: T, arg1: boolean): $SearchComponent<T>;
        setSelected(arg0: T): $SearchComponent<T>;
        hide(): void;
        setOnValueChanged(arg0: $Consumer_<T>): $SearchComponent<T>;
        isSearchOnServer(): boolean;
        setSearchUI(arg0: $SearchComponent$ISearchUI<T>): $SearchComponent<T>;
        searchStyle(arg0: $Consumer_<$SearchComponent$SearchStyle>): $SearchComponent<T>;
        getSearchStyle(): $SearchComponent$SearchStyle;
        setSearchOnServer(arg0: $Class<T[]>): $SearchComponent<T>;
        getSearchUI(): $SearchComponent$ISearchUI<T>;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $SearchComponent<T>;
        preview: $UIElement;
        dialog: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        scrollerView: $ScrollerView;
        textField: $TextField;
        constructor(arg0: $SearchComponent$ISearchUI<T>);
        constructor();
        get open(): boolean;
        set onValueChanged(value: $Consumer_<T>);
        set candidateUIProvider(value: $UIElementProvider_<T>);
    }
    export class $FluidSlot extends $BindableUIElement<$FluidStack> {
        getCapacity(): number;
        setValue(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        bind(arg0: $IFluidHandler, arg1: number): $FluidSlot;
        setCapacity(arg0: number): $FluidSlot;
        slotStyle(arg0: $Consumer_<$FluidSlot$SlotStyle>): $FluidSlot;
        getSlotStyle(): $FluidSlot$SlotStyle;
        xeiRecipeSlot(): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        setAllowClickDrained(arg0: boolean): $FluidSlot;
        setAllowClickFilled(arg0: boolean): $FluidSlot;
        isAllowClickDrained(): boolean;
        getFluidAmountText(): $Component;
        isAllowClickFilled(): boolean;
        xeiRecipeIngredient(arg0: $IngredientIO_): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        getFullTooltipTexts(): $List<$Component>;
        setFluid(arg0: $FluidStack_): $FluidSlot;
        setFluid(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        getFluid(): $FluidStack;
        xeiPhantom(): $FluidSlot;
        amountLabel: $Label;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get fluidAmountText(): $Component;
        get fullTooltipTexts(): $List<$Component>;
    }
    export class $TagField extends $BindableUIElement<$Tag> {
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $TagField;
        setCompoundTagOnly(): $TagField;
        setTagValidator(arg0: $Predicate_<$Tag>): $TagField;
        setTagResponder(arg0: $Consumer_<$Tag>): $TagField;
        setListOnly(): $TagField;
        setAny(): $TagField;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        editButton: $Button;
        textField: $TextField;
        constructor();
        set tagValidator(value: $Predicate_<$Tag>);
        set tagResponder(value: $Consumer_<$Tag>);
    }
    export class $Button extends $UIElement {
        getState(): $Button$State;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Button;
        setText(arg0: string, arg1: boolean): $Button;
        buttonStyle(arg0: $Consumer_<$Button$ButtonStyle>): $Button;
        addPostIcon(arg0: $IGuiTexture_): $Button;
        getButtonStyle(): $Button$ButtonStyle;
        setOnServerClick(arg0: $UIEventListener_): $Button;
        setText(arg0: $Component_): $Button;
        setOnClick(arg0: $UIEventListener_): $Button;
        enableText(): $Button;
        noText(): $Button;
        addPreIcon(arg0: $IGuiTexture_): $Button;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $TextElement;
        constructor();
        get state(): $Button$State;
        set onServerClick(value: $UIEventListener_);
        set onClick(value: $UIEventListener_);
    }
    export class $GraphView$GraphViewStyle extends $Style {
        gridTexture(): $IGuiTexture;
        gridTexture(arg0: $IGuiTexture_): $GraphView$GraphViewStyle;
        allowZoom(arg0: boolean): $GraphView$GraphViewStyle;
        allowZoom(): boolean;
        gridSize(arg0: number): $GraphView$GraphViewStyle;
        gridSize(): number;
        maxScale(): number;
        maxScale(arg0: number): $GraphView$GraphViewStyle;
        allowPan(arg0: boolean): $GraphView$GraphViewStyle;
        allowPan(): boolean;
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
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $StructuredTagEditor;
        setCompoundTagOnly(): $StructuredTagEditor;
        static renameCompoundKey(arg0: $CompoundTag_, arg1: string, arg2: string): boolean;
        setRootTypeFilter(arg0: $Predicate_<$StructuredTagEditor$TagKind>): $StructuredTagEditor;
        static setIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        setTagValidator(arg0: $Predicate_<$Tag>): $StructuredTagEditor;
        setTagResponder(arg0: $Consumer_<$Tag>): $StructuredTagEditor;
        setListOnly(): $StructuredTagEditor;
        static insertByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static insertIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static removeIntArrayElement(arg0: $IntArrayTag, arg1: number): $IntArrayTag;
        static changeListElementType(arg0: $ListTag_, arg1: $StructuredTagEditor$TagKind_): $ListTag;
        static removeLongArrayElement(arg0: $LongArrayTag, arg1: number): $LongArrayTag;
        static removeByteArrayElement(arg0: $ByteArrayTag, arg1: number): $ByteArrayTag;
        static insertLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static setLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static setByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static convertTag(arg0: $Tag_, arg1: $StructuredTagEditor$TagKind_): $Tag;
        setAny(): $StructuredTagEditor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        set rootTypeFilter(value: $Predicate_<$StructuredTagEditor$TagKind>);
        set tagValidator(value: $Predicate_<$Tag>);
        set tagResponder(value: $Consumer_<$Tag>);
    }
    export class $ItemSlot$SlotStyle extends $Style {
        slotOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        showItemTooltips(): boolean;
        showItemTooltips(arg0: boolean): $ItemSlot$SlotStyle;
        isPlayerSlot(): boolean;
        isPlayerSlot(arg0: boolean): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $ItemSlot$SlotStyle;
        quickMovePriority(arg0: number): $ItemSlot$SlotStyle;
        quickMovePriority(): number;
        acceptQuickMove(arg0: boolean): $ItemSlot$SlotStyle;
        acceptQuickMove(): boolean;
        holder: $UIElement;
        constructor(arg0: $ItemSlot);
    }
    export class $ProgressBar$ProgressBarStyle extends $Style {
        static init(): void;
        interpolate(): boolean;
        interpolate(arg0: boolean): $ProgressBar$ProgressBarStyle;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $ProgressBar$ProgressBarStyle;
        interpolateStep(): number;
        interpolateStep(arg0: number): $ProgressBar$ProgressBarStyle;
        holder: $UIElement;
        constructor(arg0: $ProgressBar);
    }
    export class $Scroller$Vertical extends $Scroller {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu<K, T> extends $UIElement {
        close(): void;
        setAutoClose(arg0: boolean): $Menu<K, $CompoundTag>;
        setOnClose(arg0: $Runnable_): $Menu<K, $CompoundTag>;
        menuStyle(arg0: $Consumer_<$Menu$MenuStyle>): $Menu<K, $CompoundTag>;
        getNodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        setHoverTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setUiProvider(arg0: $UIElementProvider_<K>): $Menu<K, $CompoundTag>;
        getMenuStyle(): $Menu$MenuStyle;
        setOnNodeClicked(arg0: $Consumer_<$ITreeNode<K, $CompoundTag>>): $Menu<K, $CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        root: $ITreeNode<K, $CompoundTag>;
        constructor(arg0: $ITreeNode<K, $CompoundTag_>);
        constructor(arg0: $ITreeNode<K, $CompoundTag_>, arg1: $UIElementProvider_<K>);
        set autoClose(value: boolean);
        set onClose(value: $Runnable_);
        get nodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        set hoverTextureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set textureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set uiProvider(value: $UIElementProvider_<K>);
        set onNodeClicked(value: $Consumer_<$ITreeNode<K, $CompoundTag>>);
    }
    export class $Dialog extends $UIElement {
        close(): void;
        top(): $Dialog;
        bottom(): $Dialog;
        width(arg0: $TaffyDimension): $Dialog;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $Dialog;
        setClickOutsideClose(arg0: boolean): $Dialog;
        setAutoClose(arg0: boolean): $Dialog;
        setOnClose(arg0: $Runnable_): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: $Consumer_<$File>): $Dialog;
        static suffixFilter(...arg0: string[]): $Predicate<$FileNode>;
        static showCheckBox(arg0: string, arg1: string, arg2: $BooleanConsumer_): $Dialog;
        show(arg0: $ModularUI): $Dialog;
        show(arg0: $UIElement): $Dialog;
        setTitle(arg0: string): $Dialog;
        darkenBackground(): $Dialog;
        static stringEditorDialog(arg0: string, arg1: string, arg2: $Predicate_<string>, arg3: $Consumer_<string>): $Dialog;
        allowInteraction(): $Dialog;
        addButton(arg0: $UIElement): $Dialog;
        static showCancelableCheck(arg0: string, arg1: string, arg2: $BooleanConsumer_, arg3: $Runnable_): $Dialog;
        addContent(arg0: $UIElement): $Dialog;
        windowMode(arg0: number, arg1: number, arg2: number, arg3: number): $Dialog;
        windowMode(arg0: number, arg1: number): $Dialog;
        static showNotification(arg0: string, arg1: number): $Dialog;
        static showNotification(arg0: string, arg1: string, arg2: $Runnable_): $Dialog;
        titleBar: $UIElement;
        static CODEC: $Codec<$UIElement>;
        overlay: $UIElement;
        contentContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        buttonContainer: $UIElement;
        constructor();
        set clickOutsideClose(value: boolean);
        set autoClose(value: boolean);
        set onClose(value: $Runnable_);
        set title(value: string);
    }
    export class $TabView extends $UIElement {
        clear(): $TabView;
        tabScroller(arg0: $Consumer_<$ScrollerView>): $TabView;
        getTabContents(): $BiMap<$Tab, $UIElement>;
        setOnTabSelected(arg0: $Consumer_<$Tab>): $TabView;
        tabHeaderContainer(arg0: $Consumer_<$UIElement>): $TabView;
        getSelectedTab(): $Tab;
        tabContentContainer(arg0: $Consumer_<$UIElement>): $TabView;
        removeTab(arg0: $Tab): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement, arg2: number): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement): $TabView;
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
        isUseCache(): boolean;
        setZoom(arg0: number): $Scene;
        camZoom(): number;
        xeiLookup(): $Scene;
        useOrtho(): $Scene;
        useOrtho(arg0: boolean): $Scene;
        isUseOrtho(): boolean;
        isScalable(): boolean;
        getRange(): number;
        isDragging(): boolean;
        setRenderFacing(arg0: boolean): $Scene;
        setRenderSelect(arg0: boolean): $Scene;
        createScene(arg0: $Level_, arg1: boolean, arg2: $Size): $Scene;
        createScene(arg0: $Level_): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook, arg2: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>): $Scene;
        needCompileCache(): void;
        setOrthoRange(arg0: number): $Scene;
        getDummyWorld(): $TrackedDummyWorld;
        isRenderFacing(): boolean;
        isDraggable(): boolean;
        setScalable(arg0: boolean): $Scene;
        getRotationPitch(): number;
        getRotationYaw(): number;
        getOnSelected(): $BiConsumer<$BlockPos, $Direction>;
        setIntractable(arg0: boolean): $Scene;
        setOnSelected(arg0: $BiConsumer_<$BlockPos, $Direction>): $Scene;
        getClipFluid(): $ClipContext$Fluid;
        isTickWorld(): boolean;
        setTickWorld(arg0: boolean): $Scene;
        setDraggable(arg0: boolean): $Scene;
        getLastHoverItem(): $ItemStack;
        useCacheBuffer(arg0: boolean): $Scene;
        useCacheBuffer(): $Scene;
        renderBlockOverLay(arg0: $WorldSceneRenderer): void;
        setClipContext(arg0: $ClipContext$Block_, arg1: $ClipContext$Fluid_): $Scene;
        getClipBlock(): $ClipContext$Block;
        isRenderSelect(): boolean;
        isAllowXEILookup(): boolean;
        isIntractable(): boolean;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number, arg3: number): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number): void;
        setAllowXEILookup(arg0: boolean): $Scene;
        isSyncCompile(): boolean;
        isAutoReleased(): boolean;
        syncCompile(): $Scene;
        syncCompile(arg0: boolean): $Scene;
        getRenderer(): $WorldSceneRenderer;
        getCenter(): $Vector3f;
        setCenter(arg0: $Vector3f): $Scene;
        setBeforeWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        setAfterWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        setCameraYawAndPitch(arg0: number, arg1: number): $Scene;
        releaseRendererResource(): void;
        setCameraYawAndPitchAnima(arg0: number, arg1: number, arg2: number): void;
        isShowHoverBlockTips(): boolean;
        getLastClickPosFace(): $BlockPosFace;
        getLastHoverPosFace(): $BlockPosFace;
        getLastSelectedPosFace(): $BlockPosFace;
        setShowHoverBlockTips(arg0: boolean): $Scene;
        getZoom(): number;
        getParticleManager(): $ParticleManager;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get useCache(): boolean;
        get range(): number;
        get dragging(): boolean;
        set orthoRange(value: number);
        get dummyWorld(): $TrackedDummyWorld;
        get rotationPitch(): number;
        get rotationYaw(): number;
        get clipFluid(): $ClipContext$Fluid;
        get lastHoverItem(): $ItemStack;
        get clipBlock(): $ClipContext$Block;
        get autoReleased(): boolean;
        get renderer(): $WorldSceneRenderer;
        set beforeWorldRender(value: $Consumer_<$Scene>);
        set afterWorldRender(value: $Consumer_<$Scene>);
        get lastClickPosFace(): $BlockPosFace;
        get lastHoverPosFace(): $BlockPosFace;
        get lastSelectedPosFace(): $BlockPosFace;
        get particleManager(): $ParticleManager;
    }
    export class $ScrollerView$ScrollerViewStyle extends $Style {
        mode(): $ScrollerMode;
        mode(arg0: $ScrollerMode_): $ScrollerView$ScrollerViewStyle;
        static init(): void;
        adaptiveHeight(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        adaptiveHeight(): boolean;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        scrollerViewStyle(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(): number;
        minScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(): number;
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        scrollerViewMargin(): number;
        holder: $UIElement;
        constructor(arg0: $ScrollerView);
    }
    export class $TextArea$TextAreaStyle extends $Style {
        static init(): void;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextArea$TextAreaStyle;
        fontSize(): number;
        fontSize(arg0: number): $TextArea$TextAreaStyle;
        lineSpacing(arg0: number): $TextArea$TextAreaStyle;
        lineSpacing(): number;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        placeholder(arg0: $Component_): $TextArea$TextAreaStyle;
        placeholder(): $Component;
        scrollerViewStyle(arg0: number): $TextArea$TextAreaStyle;
        errorColor(): number;
        errorColor(arg0: number): $TextArea$TextAreaStyle;
        viewMode(arg0: $ScrollerMode_): $TextArea$TextAreaStyle;
        viewMode(): $ScrollerMode;
        textShadow(arg0: boolean): $TextArea$TextAreaStyle;
        textShadow(): boolean;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextArea$TextAreaStyle;
        cursorColor(arg0: number): $TextArea$TextAreaStyle;
        cursorColor(): number;
        scrollerViewMargin(): number;
        textColor(arg0: number): $TextArea$TextAreaStyle;
        textColor(): number;
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
        setText(arg0: $Component_): $TextElement;
        getTextStyle(): $TextElement$TextStyle;
        getFont(): $Font;
        recompute(): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get font(): $Font;
    }
    export class $UITemplateElement extends $UIElement {
        getPath(): $IResourcePath;
        getTemplate(): $UITemplate;
        setTemplate(arg0: $IResourcePath): $UITemplateElement;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
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
        getSwitchStyle(): $Switch$SwitchStyle;
        setOnSwitchChanged(arg0: $BooleanConsumer_): $Switch;
        switchStyle(arg0: $Consumer_<$Switch$SwitchStyle>): $Switch;
        setOn(arg0: boolean, arg1: boolean): $Switch;
        setOn(arg0: boolean): $Switch;
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
    export class $TextElement$TextStyle extends $Style {
        static init(): void;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextElement$TextStyle;
        fontSize(arg0: number): $TextElement$TextStyle;
        fontSize(): number;
        lineSpacing(arg0: number): $TextElement$TextStyle;
        lineSpacing(): number;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $TextElement$TextStyle;
        textShadow(arg0: boolean): $TextElement$TextStyle;
        textShadow(): boolean;
        textAlignVertical(arg0: $Vertical_): $TextElement$TextStyle;
        textAlignVertical(): $Vertical;
        adaptiveWidth(arg0: boolean): $TextElement$TextStyle;
        adaptiveWidth(): boolean;
        rollSpeed(arg0: number): $TextElement$TextStyle;
        rollSpeed(): number;
        textColor(): number;
        textColor(arg0: number): $TextElement$TextStyle;
        textWrap(arg0: $TextWrap_): $TextElement$TextStyle;
        textWrap(): $TextWrap;
        textAlignHorizontal(arg0: $Horizontal_): $TextElement$TextStyle;
        textAlignHorizontal(): $Horizontal;
        holder: $UIElement;
        constructor(arg0: $TextElement);
    }
    export class $Toggle extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Toggle;
        setText(arg0: string, arg1: boolean): $Toggle;
        getToggleGroup(): $Toggle$ToggleGroup;
        setToggleGroup(arg0: $Toggle$ToggleGroup): $Toggle;
        toggleStyle(arg0: $Consumer_<$Toggle$ToggleStyle>): $Toggle;
        toggleLabel(arg0: $Consumer_<$Label>): $Toggle;
        toggleButton(arg0: $Consumer_<$Button>): $Toggle;
        setText(arg0: $Component_): $Toggle;
        setOnToggleChanged(arg0: $BooleanConsumer_): $Toggle;
        getToggleStyle(): $Toggle$ToggleStyle;
        enableText(): $Toggle;
        markIcon(arg0: $Consumer_<$UIElement>): $Toggle;
        noText(): $Toggle;
        setOn(arg0: boolean): $Toggle;
        setOn(arg0: boolean, arg1: boolean): $Toggle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onToggleChanged(value: $BooleanConsumer_);
    }
    export class $Toggle$ToggleGroup implements $IPersistedSerializable, $IConfigurable {
        getToggles(): $List<$Toggle>;
        setAllowEmpty(arg0: boolean): $Toggle$ToggleGroup;
        getCurrentToggle(): $Toggle;
        writeToBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        beforeDeserialize(): void;
        beforeSerialize(): void;
        afterSerialize(): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createDirectConfigurator(): $Configurator;
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
        getPercentage(): number;
        getMaxPercentage(): number;
        getMinPercentage(): number;
        setPercentage(arg0: number): $SplitView;
        getBorderSize(): number;
        setMinPercentage(arg0: number): $SplitView;
        setBorderSize(arg0: number): $SplitView;
        setMaxPercentage(arg0: number): $SplitView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu$MenuStyle extends $Style {
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafTexture(): $IGuiTexture;
        leafTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafHoverTexture(): $IGuiTexture;
        leafHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeHoverTexture(): $IGuiTexture;
        nodeHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        arrowIcon(arg0: $IGuiTexture_): $Menu$MenuStyle;
        arrowIcon(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Menu<any, any>);
    }
    export class $ProgressBar extends $UIElement implements $IBindable<number>, $IDataConsumer<number> {
        getValue(): number;
        setValue(arg0: number): $ProgressBar;
        label(arg0: $Consumer_<$Label>): $ProgressBar;
        getMinValue(): number;
        getMaxValue(): number;
        bar(arg0: $Consumer_<$UIElement>): $ProgressBar;
        getNormalizedValue(): number;
        getNormalizedValue(arg0: number): number;
        setRange(arg0: number, arg1: number): $ProgressBar;
        progressBarStyle(arg0: $Consumer_<$ProgressBar$ProgressBarStyle>): $ProgressBar;
        barContainer(arg0: $Consumer_<$UIElement>): $ProgressBar;
        getProgressBarStyle(): $ProgressBar$ProgressBarStyle;
        setProgress(arg0: number): $ProgressBar;
        setMaxValue(arg0: number): $ProgressBar;
        setMinValue(arg0: number): $ProgressBar;
        bind(arg0: $IBinding<number>): $UIElement;
        unbind(arg0: $IBinding<number>): $UIElement;
        unbindDataSource(arg0: $IDataProvider<number>): $UIElement;
        bindDataSource(arg0: $IDataProvider<number>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        barBackground: $UIElement;
        constructor();
        set progress(value: number);
    }
    export class $Selector<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $Selector<T>;
        selectorStyle(arg0: $Consumer_<$Selector$SelectorStyle>): $Selector<T>;
        getSelectorStyle(): $Selector$SelectorStyle;
        getCandidates(): $List<T>;
        show(): void;
        setSelected(arg0: T, arg1: boolean): $Selector<T>;
        setSelected(arg0: T): $Selector<T>;
        hide(): void;
        setOnValueChanged(arg0: $Consumer_<T>): $Selector<T>;
        setCandidates(arg0: $List_<T>): $Selector<T>;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $Selector<T>;
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
        setHistoryStack(arg0: $IHistoryStack): $Inspector;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
        getHistoryStack(): $IHistoryStack;
        getInspectedConfigurable(): $IConfigurable;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        get inspectedConfigurable(): $IConfigurable;
    }
    export class $ColorSelector extends $BindableUIElement<number> {
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number): $ColorSelector;
        getColor(): number;
        setOnColorChangeListener(arg0: $IntConsumer_): $ColorSelector;
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
