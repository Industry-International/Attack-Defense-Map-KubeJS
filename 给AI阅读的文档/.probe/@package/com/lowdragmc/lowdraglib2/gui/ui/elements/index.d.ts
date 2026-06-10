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
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
        constructor();
    }
    export class $Selector$SelectorStyle extends $Style {
        static init(): void;
        focusOverlay(arg0: $IGuiTexture_): $Selector$SelectorStyle;
        focusOverlay(): $IGuiTexture;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $Selector$SelectorStyle;
        scrollerViewHeight(arg0: number): $Selector$SelectorStyle;
        scrollerViewHeight(): number;
        maxItemCount(arg0: number): $Selector$SelectorStyle;
        maxItemCount(): number;
        closeAfterSelect(arg0: boolean): $Selector$SelectorStyle;
        closeAfterSelect(): boolean;
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
        getMode(): $TextField$Mode;
        getDisplayOffset(): number;
        isEditable(): boolean;
        setTextRegexValidator(arg0: string): $TextField;
        setNumbersOnlyFloat(arg0: number, arg1: number): $TextField;
        setNumbersOnlyDouble(arg0: number, arg1: number): $TextField;
        getCursorUnderMouseX(arg0: number): number;
        setNumbersOnlyShort(arg0: number, arg1: number): $TextField;
        getCursorPos(): number;
        deleteChars(arg0: number): void;
        deleteWords(arg0: number): void;
        getHighlighted(): string;
        getWordPosition(arg0: number): number;
        deleteCharsToPos(arg0: number): void;
        setResourceLocationOnly(): $TextField;
        getRawText(): string;
        getSelectionStart(): number;
        setSelection(arg0: number, arg1: number): void;
        getSelectionEnd(): number;
        setCharValidator(arg0: $Predicate_<string>): $TextField;
        getHistoryStack(): $HistoryStack<string>;
        insertText(arg0: string): void;
        setWheelDur(arg0: number): $TextField;
        setWheelDur(arg0: number, arg1: number): $TextField;
        textFieldStyle(arg0: $Consumer_<$TextField$TextFieldStyle>): $TextField;
        setAnyString(): $TextField;
        setNumbersOnlyInt(arg0: number, arg1: number): $TextField;
        getWheelDur(): number;
        getFormattedLine(): $Tuple<$FormattedCharSequence, number>;
        setNumbersOnlyLong(arg0: number, arg1: number): $TextField;
        setCompoundTagOnly(): $TextField;
        setNumbersOnlyByte(arg0: number, arg1: number): $TextField;
        getTextFieldStyle(): $TextField$TextFieldStyle;
        setTextResponder(arg0: $Consumer_<string>): $TextField;
        setTextValidator(arg0: $Predicate_<string>): $TextField;
        getFont(): $Font;
        setCursor(arg0: number): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get mode(): $TextField$Mode;
        get displayOffset(): number;
        get editable(): boolean;
        set textRegexValidator(value: string);
        get cursorPos(): number;
        get highlighted(): string;
        get rawText(): string;
        get selectionStart(): number;
        get selectionEnd(): number;
        set charValidator(value: $Predicate_<string>);
        get historyStack(): $HistoryStack<string>;
        get formattedLine(): $Tuple<$FormattedCharSequence, number>;
        set textResponder(value: $Consumer_<string>);
        set textValidator(value: $Predicate_<string>);
        get font(): $Font;
        set cursor(value: number);
    }
    export class $GraphView extends $UIElement {
        fit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getOffsetX(): number;
        setOffsetY(arg0: number): void;
        setOffsetX(arg0: number): void;
        getOffsetY(): number;
        clearAllContentChildren(): $GraphView;
        getScale(): number;
        fitToChildren(arg0: number, arg1: number): void;
        getGraphViewStyle(): $GraphView$GraphViewStyle;
        graphViewStyle(arg0: $Consumer_<$GraphView$GraphViewStyle>): $GraphView;
        contentRoot(arg0: $Consumer_<$UIElement>): $UIElement;
        removeContentChild(arg0: $UIElement): $GraphView;
        addContentChild(arg0: $UIElement): $GraphView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scale(): number;
    }
    export class $Scroller$ScrollerStyle extends $Style {
        static init(): void;
        scrollBarSize(arg0: number): $Scroller$ScrollerStyle;
        scrollBarSize(): number;
        scrollDelta(arg0: number): $Scroller$ScrollerStyle;
        scrollDelta(): number;
        holder: $UIElement;
        constructor(arg0: $Scroller);
    }
    export class $FluidSlot$SlotStyle extends $Style {
        slotOverlay(): $IGuiTexture;
        slotOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $FluidSlot$SlotStyle;
        showFluidTooltips(arg0: boolean): $FluidSlot$SlotStyle;
        showFluidTooltips(): boolean;
        fillDirection(arg0: $FillDirection_): $FluidSlot$SlotStyle;
        fillDirection(): $FillDirection;
        holder: $UIElement;
        constructor(arg0: $FluidSlot);
    }
    export class $Tab extends $UIElement {
        getContent(): $UIElement;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Tab;
        setText(arg0: $Component_): $Tab;
        setText(arg0: string, arg1: boolean): $Tab;
        setText(arg0: string): $Tab;
        setSelected(arg0: boolean): void;
        getTabView(): $TabView;
        tabStyle(arg0: $Consumer_<$Tab$TabStyle>): $Tab;
        setOnTabSelected(arg0: $Runnable_): $Tab;
        setOnTabUnselected(arg0: $Runnable_): $Tab;
        setDynamicText(arg0: $Supplier_<$Component>): $Tab;
        getTabStyle(): $Tab$TabStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $Label;
        constructor();
        get content(): $UIElement;
        set selected(value: boolean);
        get tabView(): $TabView;
        set onTabSelected(value: $Runnable_);
        set onTabUnselected(value: $Runnable_);
        set dynamicText(value: $Supplier_<$Component>);
    }
    export class $TextField$TextFieldStyle extends $Style {
        static init(): void;
        textShadow(arg0: boolean): $TextField$TextFieldStyle;
        textShadow(): boolean;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextField$TextFieldStyle;
        fontSize(): number;
        fontSize(arg0: number): $TextField$TextFieldStyle;
        placeholder(arg0: $Component_): $TextField$TextFieldStyle;
        placeholder(): $Component;
        errorColor(arg0: number): $TextField$TextFieldStyle;
        errorColor(): number;
        cursorColor(): number;
        cursorColor(arg0: number): $TextField$TextFieldStyle;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextField$TextFieldStyle;
        textColor(arg0: number): $TextField$TextFieldStyle;
        textColor(): number;
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
        markTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        markTexture(): $IGuiTexture;
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        hoverTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        baseTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        holder: $UIElement;
        constructor(arg0: $Toggle);
    }
    export class $ScrollerView extends $UIElement {
        addScrollViewChildAt(arg0: $UIElement, arg1: number): $ScrollerView;
        removeScrollViewChild(arg0: $UIElement): boolean;
        clearAllScrollViewChildren(): void;
        viewPort(arg0: $Consumer_<$UIElement>): $ScrollerView;
        getScrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        verticalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        horizontalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        viewContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        scrollerStyle(arg0: $Consumer_<$ScrollerView$ScrollerViewStyle>): $ScrollerView;
        hasScrollViewChild(arg0: $UIElement): boolean;
        verticalContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        getContainerWidth(): number;
        getContainerHeight(): number;
        addScrollViewChild(arg0: $UIElement): $ScrollerView;
        addScrollViewChildren(...arg0: $UIElement[]): $ScrollerView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        get containerWidth(): number;
        get containerHeight(): number;
    }
    export class $SearchComponent$SearchStyle extends $Style {
        static init(): void;
        focusOverlay(arg0: $IGuiTexture_): $SearchComponent$SearchStyle;
        focusOverlay(): $IGuiTexture;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $SearchComponent$SearchStyle;
        scrollerViewHeight(arg0: number): $SearchComponent$SearchStyle;
        scrollerViewHeight(): number;
        maxItemCount(arg0: number): $SearchComponent$SearchStyle;
        maxItemCount(): number;
        closeAfterSelect(arg0: boolean): $SearchComponent$SearchStyle;
        closeAfterSelect(): boolean;
        holder: $UIElement;
    }
    export class $Scroller extends $BindableUIElement<number> {
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $Scroller;
        setValue(arg0: number): $Scroller;
        getMinValue(): number;
        getMaxValue(): number;
        setRange(arg0: number, arg1: number): $Scroller;
        setScrollBarSize(arg0: number): $Scroller;
        setOnValueChanged(arg0: $FloatConsumer_): $Scroller;
        scrollBar(arg0: $Consumer_<$Button>): $Scroller;
        isDragging(): boolean;
        getClampNormalizedValue(): $Function<number, number>;
        scrollerStyle(arg0: $Consumer_<$Scroller$ScrollerStyle>): $Scroller;
        setClampNormalizedValue(arg0: $Function_<number, number>): $Scroller;
        headButton(arg0: $Consumer_<$Button>): $Scroller;
        tailButton(arg0: $Consumer_<$Button>): $Scroller;
        getScrollerStyle(): $Scroller$ScrollerStyle;
        scrollContainer(arg0: $Consumer_<$UIElement>): $Scroller;
        scrollValue(arg0: number): void;
        getNormalizedValue(): number;
        setMinValue(arg0: number): $Scroller;
        setMaxValue(arg0: number): $Scroller;
        setNormalizedValue(arg0: number): $Scroller;
        setNormalizedValue(arg0: number, arg1: boolean): $Scroller;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set scrollBarSize(value: number);
        set onValueChanged(value: $FloatConsumer_);
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
        bindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>, arg1: boolean): $BindableUIElement<T>;
        unbindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        registerValueListener(arg0: $Consumer_<T>): $ISubscription;
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
        setValue(arg0: T): $IDataSource<T>;
        bindDataSource(arg0: $IDataProvider<T>): $UIElement;
        unbindDataSource(arg0: $IDataProvider<T>): $UIElement;
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
        getSlotStyle(): $ItemSlot$SlotStyle;
        updateSlotPosition(): void;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $ItemSlot;
        xeiRecipeSlot(): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        xeiPhantom(): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        getFullTooltipTexts(): $List<$Component>;
        slotStyle(arg0: $Consumer_<$ItemSlot$SlotStyle>): $ItemSlot;
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
        bind(arg0: $IBinding<$Component_>): $UIElement;
        unbind(arg0: $IBinding<$Component_>): $UIElement;
        bindDataSource(arg0: $IDataProvider<$Component_>): $UIElement;
        unbindDataSource(arg0: $IDataProvider<$Component_>): $UIElement;
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
        getSelected(): $Set<NODE>;
        setSelected(arg0: $Collection_<NODE>, arg1: boolean): $TreeList<NODE>;
        setRoot(arg0: NODE): $TreeList<NODE>;
        setSupportMultipleSelection(arg0: boolean): $TreeList<NODE>;
        collapseNode(arg0: NODE): void;
        createNodeUI(arg0: NODE): $UIElement;
        removeSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        expandAllNodesIf(arg0: NODE, arg1: $Predicate_<NODE>): void;
        static textTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setStaticTree(arg0: boolean): $TreeList<NODE>;
        isNodeSelected(arg0: NODE): boolean;
        isNodeExpanded(arg0: NODE): boolean;
        getExpandedNodes(): $Set<NODE>;
        getTreeListStyle(): $TreeList$TreeListStyle;
        setNodeUISupplier(arg0: $UIElementProvider_<NODE>): $TreeList<NODE>;
        setFlattenRoot(arg0: boolean): $TreeList<NODE>;
        setOnNodeUICreated(arg0: $BiConsumer_<NODE, $UIElement>): $TreeList<NODE>;
        static iconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setClickToExpand(arg0: boolean): $TreeList<NODE>;
        isWidthFitsContent(): boolean;
        getHoveredNode(): NODE;
        addSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        reloadList(): $TreeList<NODE>;
        expandNode(arg0: NODE): void;
        getNodeUIs(): $BiMap<NODE, $UIElement>;
        menuStyle(arg0: $Consumer_<$TreeList$TreeListStyle>): $TreeList<NODE>;
        setDoubleClickToExpand(arg0: boolean): $TreeList<NODE>;
        static isMouseOverNodeBelow(arg0: $UIEvent): boolean;
        setOnSelectedChanged(arg0: $Consumer_<$Set<NODE>>): $TreeList<NODE>;
        setWidthFitsContent(arg0: boolean): $TreeList<NODE>;
        static isMouseOverNodeAbove(arg0: $UIEvent): boolean;
        setOnDoubleClickNode(arg0: $Consumer_<NODE>): $TreeList<NODE>;
        static createDraggingOverlay(arg0: number): $IGuiTexture;
        setSelectableNodeFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        expandNodeAlongPath(arg0: NODE): void;
        static isMouseOverNodeCenter(arg0: $UIEvent): boolean;
        static optionalIconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: NODE, arg1: boolean);
        constructor(arg0: NODE);
        constructor();
        set supportMultipleSelection(value: boolean);
        set staticTree(value: boolean);
        get expandedNodes(): $Set<NODE>;
        get treeListStyle(): $TreeList$TreeListStyle;
        set nodeUISupplier(value: $UIElementProvider_<NODE>);
        set flattenRoot(value: boolean);
        set onNodeUICreated(value: $BiConsumer_<NODE, $UIElement>);
        set clickToExpand(value: boolean);
        get hoveredNode(): NODE;
        get nodeUIs(): $BiMap<NODE, $UIElement>;
        set doubleClickToExpand(value: boolean);
        set onSelectedChanged(value: $Consumer_<$Set<NODE>>);
        set onDoubleClickNode(value: $Consumer_<NODE>);
        set selectableNodeFilter(value: $Predicate_<NODE>);
    }
    export class $TextArea extends $BindableUIElement<string[]> {
        scale(): number;
        getValue(): string[];
        setValue(arg0: string[]): $TextArea;
        setValue(arg0: string[], arg1: boolean): $TextArea;
        isError(): boolean;
        getLines(): $List<string>;
        cursorPos(): $Cursor;
        isEditable(): boolean;
        lineHeight(): number;
        hasSelection(): boolean;
        setSelection(arg0: $Cursor_, arg1: $Cursor_): void;
        setLines(arg0: $List_<string>): $TextArea;
        setLines(arg0: string[], arg1: boolean): $TextArea;
        getTextAreaStyle(): $TextArea$TextAreaStyle;
        drawContentView(arg0: $GUIContext): void;
        setLinesResponder(arg0: $Consumer_<string[]>): $TextArea;
        setCharValidator(arg0: $Predicate_<string>): $TextArea;
        getCursorLine(): number;
        getHistoryStack(): $HistoryStack<$TextArea$History>;
        getSelStartCol(): number;
        getSelEndLine(): number;
        getSelStartLine(): number;
        getCursorCol(): number;
        getSelEndCol(): number;
        textAreaStyle(arg0: $Consumer_<$TextArea$TextAreaStyle>): $TextArea;
        getScrollX(): number;
        getScrollY(): number;
        setTextValidator(arg0: $Predicate_<string[]>): $TextArea;
        getFont(): $Font;
        getCursorUnderMouse(arg0: number, arg1: number): $Cursor;
        collapseSelectionToCursor(): void;
        setCursor(arg0: number, arg1: number): void;
        pushHistory(): void;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get editable(): boolean;
        set linesResponder(value: $Consumer_<string[]>);
        set charValidator(value: $Predicate_<string>);
        get cursorLine(): number;
        get historyStack(): $HistoryStack<$TextArea$History>;
        get selStartCol(): number;
        get selEndLine(): number;
        get selStartLine(): number;
        get cursorCol(): number;
        get selEndCol(): number;
        get scrollX(): number;
        get scrollY(): number;
        set textValidator(value: $Predicate_<string[]>);
        get font(): $Font;
    }
    export class $Switch$SwitchStyle extends $Style {
        static init(): void;
        markTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        unmarkTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        unmarkTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        baseTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Switch);
    }
    export class $TreeList$TreeListStyle extends $Style {
        collapseIcon(): $IGuiTexture;
        collapseIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        nodeTexture(): $IGuiTexture;
        expandIcon(): $IGuiTexture;
        expandIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        holder: $UIElement;
        constructor(arg0: $TreeList<any>);
    }
    export class $SearchComponent<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setSelected(arg0: T): $SearchComponent<T>;
        setSelected(arg0: T, arg1: boolean): $SearchComponent<T>;
        show(): void;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $SearchComponent<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $SearchComponent<T>;
        searchStyle(arg0: $Consumer_<$SearchComponent$SearchStyle>): $SearchComponent<T>;
        setSearchOnServer(arg0: $Class<T[]>): $SearchComponent<T>;
        isSearchOnServer(): boolean;
        getSearchStyle(): $SearchComponent$SearchStyle;
        setSearchUI(arg0: $SearchComponent$ISearchUI<T>): $SearchComponent<T>;
        getSearchUI(): $SearchComponent$ISearchUI<T>;
        hide(): void;
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
        set candidateUIProvider(value: $UIElementProvider_<T>);
        set onValueChanged(value: $Consumer_<T>);
    }
    export class $FluidSlot extends $BindableUIElement<$FluidStack> {
        getValue(): $FluidStack;
        setValue(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        bind(arg0: $IFluidHandler, arg1: number): $FluidSlot;
        setCapacity(arg0: number): $FluidSlot;
        getSlotStyle(): $FluidSlot$SlotStyle;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $FluidSlot;
        xeiRecipeSlot(): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        xeiPhantom(): $FluidSlot;
        getFluid(): $FluidStack;
        setFluid(arg0: $FluidStack_): $FluidSlot;
        setFluid(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        getFullTooltipTexts(): $List<$Component>;
        setAllowClickFilled(arg0: boolean): $FluidSlot;
        isAllowClickDrained(): boolean;
        setAllowClickDrained(arg0: boolean): $FluidSlot;
        slotStyle(arg0: $Consumer_<$FluidSlot$SlotStyle>): $FluidSlot;
        getCapacity(): number;
        getFluidAmountText(): $Component;
        isAllowClickFilled(): boolean;
        amountLabel: $Label;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get fullTooltipTexts(): $List<$Component>;
        get fluidAmountText(): $Component;
    }
    export class $TagField extends $BindableUIElement<$Tag> {
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $TagField;
        setTagResponder(arg0: $Consumer_<$Tag>): $TagField;
        setTagValidator(arg0: $Predicate_<$Tag>): $TagField;
        setListOnly(): $TagField;
        setCompoundTagOnly(): $TagField;
        setAny(): $TagField;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        editButton: $Button;
        textField: $TextField;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
    }
    export class $Button extends $UIElement {
        getState(): $Button$State;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Button;
        setText(arg0: string, arg1: boolean): $Button;
        setText(arg0: $Component_): $Button;
        setOnClick(arg0: $UIEventListener_): $Button;
        noText(): $Button;
        enableText(): $Button;
        addPreIcon(arg0: $IGuiTexture_): $Button;
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
        gridSize(arg0: number): $GraphView$GraphViewStyle;
        gridSize(): number;
        minScale(arg0: number): $GraphView$GraphViewStyle;
        minScale(): number;
        maxScale(arg0: number): $GraphView$GraphViewStyle;
        maxScale(): number;
        allowZoom(): boolean;
        allowZoom(arg0: boolean): $GraphView$GraphViewStyle;
        allowPan(): boolean;
        allowPan(arg0: boolean): $GraphView$GraphViewStyle;
        gridTexture(): $IGuiTexture;
        gridTexture(arg0: $IGuiTexture_): $GraphView$GraphViewStyle;
        holder: $UIElement;
        constructor(arg0: $GraphView);
    }
    export class $SplitView$Horizontal extends $SplitView {
        left(arg0: $UIElement): $SplitView$Horizontal;
        right(arg0: $UIElement): $SplitView$Horizontal;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $StructuredTagEditor extends $BindableUIElement<$Tag> {
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $StructuredTagEditor;
        static insertLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static insertIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static insertByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static changeListElementType(arg0: $ListTag_, arg1: $StructuredTagEditor$TagKind_): $ListTag;
        static removeByteArrayElement(arg0: $ByteArrayTag, arg1: number): $ByteArrayTag;
        static removeIntArrayElement(arg0: $IntArrayTag, arg1: number): $IntArrayTag;
        static removeLongArrayElement(arg0: $LongArrayTag, arg1: number): $LongArrayTag;
        static setLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static setByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static convertTag(arg0: $Tag_, arg1: $StructuredTagEditor$TagKind_): $Tag;
        setTagResponder(arg0: $Consumer_<$Tag>): $StructuredTagEditor;
        setTagValidator(arg0: $Predicate_<$Tag>): $StructuredTagEditor;
        setListOnly(): $StructuredTagEditor;
        setCompoundTagOnly(): $StructuredTagEditor;
        setAny(): $StructuredTagEditor;
        setRootTypeFilter(arg0: $Predicate_<$StructuredTagEditor$TagKind>): $StructuredTagEditor;
        static renameCompoundKey(arg0: $CompoundTag_, arg1: string, arg2: string): boolean;
        static setIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
        set rootTypeFilter(value: $Predicate_<$StructuredTagEditor$TagKind>);
    }
    export class $ItemSlot$SlotStyle extends $Style {
        showItemTooltips(): boolean;
        showItemTooltips(arg0: boolean): $ItemSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        slotOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        hoverOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        showSlotOverlayOnlyEmpty(arg0: boolean): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        isPlayerSlot(): boolean;
        isPlayerSlot(arg0: boolean): $ItemSlot$SlotStyle;
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
        setHoverTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setAutoClose(arg0: boolean): $Menu<K, $CompoundTag>;
        getNodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        menuStyle(arg0: $Consumer_<$Menu$MenuStyle>): $Menu<K, $CompoundTag>;
        setOnClose(arg0: $Runnable_): $Menu<K, $CompoundTag>;
        setOnNodeClicked(arg0: $Consumer_<$ITreeNode<K, $CompoundTag>>): $Menu<K, $CompoundTag>;
        getMenuStyle(): $Menu$MenuStyle;
        setTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setUiProvider(arg0: $UIElementProvider_<K>): $Menu<K, $CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        root: $ITreeNode<K, $CompoundTag>;
        constructor(arg0: $ITreeNode<K, $CompoundTag_>);
        constructor(arg0: $ITreeNode<K, $CompoundTag_>, arg1: $UIElementProvider_<K>);
        set hoverTextureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set autoClose(value: boolean);
        get nodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        set onClose(value: $Runnable_);
        set onNodeClicked(value: $Consumer_<$ITreeNode<K, $CompoundTag>>);
        set textureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set uiProvider(value: $UIElementProvider_<K>);
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
        static showCheckBox(arg0: string, arg1: string, arg2: $BooleanConsumer_): $Dialog;
        static suffixFilter(...arg0: string[]): $Predicate<$FileNode>;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: $Consumer_<$File>): $Dialog;
        show(arg0: $UIElement): $Dialog;
        show(arg0: $ModularUI): $Dialog;
        static showNotification(arg0: string, arg1: string, arg2: $Runnable_): $Dialog;
        static showNotification(arg0: string, arg1: number): $Dialog;
        setAutoClose(arg0: boolean): $Dialog;
        setTitle(arg0: string): $Dialog;
        addContent(arg0: $UIElement): $Dialog;
        windowMode(arg0: number, arg1: number): $Dialog;
        windowMode(arg0: number, arg1: number, arg2: number, arg3: number): $Dialog;
        setOnClose(arg0: $Runnable_): $Dialog;
        addButton(arg0: $UIElement): $Dialog;
        darkenBackground(): $Dialog;
        static stringEditorDialog(arg0: string, arg1: string, arg2: $Predicate_<string>, arg3: $Consumer_<string>): $Dialog;
        allowInteraction(): $Dialog;
        static showCancelableCheck(arg0: string, arg1: string, arg2: $BooleanConsumer_, arg3: $Runnable_): $Dialog;
        setClickOutsideClose(arg0: boolean): $Dialog;
        titleBar: $UIElement;
        static CODEC: $Codec<$UIElement>;
        overlay: $UIElement;
        contentContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        buttonContainer: $UIElement;
        constructor();
        set autoClose(value: boolean);
        set title(value: string);
        set onClose(value: $Runnable_);
        set clickOutsideClose(value: boolean);
    }
    export class $TabView extends $UIElement {
        clear(): $TabView;
        selectTab(arg0: $Tab): $TabView;
        tabContentContainer(arg0: $Consumer_<$UIElement>): $TabView;
        removeTab(arg0: $Tab): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement, arg2: number): $TabView;
        tabHeaderContainer(arg0: $Consumer_<$UIElement>): $TabView;
        tabScroller(arg0: $Consumer_<$ScrollerView>): $TabView;
        getTabContents(): $BiMap<$Tab, $UIElement>;
        setOnTabSelected(arg0: $Consumer_<$Tab>): $TabView;
        getSelectedTab(): $Tab;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get tabContents(): $BiMap<$Tab, $UIElement>;
        set onTabSelected(value: $Consumer_<$Tab>);
        get selectedTab(): $Tab;
    }
    export class $Scene extends $UIElement {
        getParticleManager(): $ParticleManager;
        getRange(): number;
        getCenter(): $Vector3f;
        useOrtho(arg0: boolean): $Scene;
        useOrtho(): $Scene;
        setZoom(arg0: number): $Scene;
        camZoom(): number;
        isUseOrtho(): boolean;
        xeiLookup(): $Scene;
        isUseCache(): boolean;
        isScalable(): boolean;
        setCenter(arg0: $Vector3f): $Scene;
        setOrthoRange(arg0: number): $Scene;
        isRenderFacing(): boolean;
        renderBlockOverLay(arg0: $WorldSceneRenderer): void;
        isDraggable(): boolean;
        setDraggable(arg0: boolean): $Scene;
        isIntractable(): boolean;
        getRotationPitch(): number;
        getRotationYaw(): number;
        getOnSelected(): $BiConsumer<$BlockPos, $Direction>;
        setOnSelected(arg0: $BiConsumer_<$BlockPos, $Direction>): $Scene;
        isSyncCompile(): boolean;
        setIntractable(arg0: boolean): $Scene;
        getDummyWorld(): $TrackedDummyWorld;
        useCacheBuffer(): $Scene;
        useCacheBuffer(arg0: boolean): $Scene;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number, arg3: number): void;
        setClipContext(arg0: $ClipContext$Block_, arg1: $ClipContext$Fluid_): $Scene;
        syncCompile(): $Scene;
        syncCompile(arg0: boolean): $Scene;
        isRenderSelect(): boolean;
        setScalable(arg0: boolean): $Scene;
        needCompileCache(): void;
        isAutoReleased(): boolean;
        getClipFluid(): $ClipContext$Fluid;
        setTickWorld(arg0: boolean): $Scene;
        getClipBlock(): $ClipContext$Block;
        isAllowXEILookup(): boolean;
        isTickWorld(): boolean;
        getLastHoverItem(): $ItemStack;
        setAllowXEILookup(arg0: boolean): $Scene;
        isDragging(): boolean;
        getZoom(): number;
        setAfterWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        releaseRendererResource(): void;
        setCameraYawAndPitch(arg0: number, arg1: number): $Scene;
        setShowHoverBlockTips(arg0: boolean): $Scene;
        setBeforeWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        getLastClickPosFace(): $BlockPosFace;
        getLastHoverPosFace(): $BlockPosFace;
        getLastSelectedPosFace(): $BlockPosFace;
        isShowHoverBlockTips(): boolean;
        setCameraYawAndPitchAnima(arg0: number, arg1: number, arg2: number): void;
        getRenderer(): $WorldSceneRenderer;
        setRenderSelect(arg0: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook, arg2: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>): $Scene;
        setRenderFacing(arg0: boolean): $Scene;
        createScene(arg0: $Level_, arg1: boolean, arg2: $Size): $Scene;
        createScene(arg0: $Level_): $Scene;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get particleManager(): $ParticleManager;
        get range(): number;
        get useCache(): boolean;
        set orthoRange(value: number);
        get rotationPitch(): number;
        get rotationYaw(): number;
        get dummyWorld(): $TrackedDummyWorld;
        get autoReleased(): boolean;
        get clipFluid(): $ClipContext$Fluid;
        get clipBlock(): $ClipContext$Block;
        get lastHoverItem(): $ItemStack;
        get dragging(): boolean;
        set afterWorldRender(value: $Consumer_<$Scene>);
        set beforeWorldRender(value: $Consumer_<$Scene>);
        get lastClickPosFace(): $BlockPosFace;
        get lastHoverPosFace(): $BlockPosFace;
        get lastSelectedPosFace(): $BlockPosFace;
        get renderer(): $WorldSceneRenderer;
    }
    export class $ScrollerView$ScrollerViewStyle extends $Style {
        mode(arg0: $ScrollerMode_): $ScrollerView$ScrollerViewStyle;
        mode(): $ScrollerMode;
        static init(): void;
        scrollerViewMargin(): number;
        adaptiveHeight(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        adaptiveHeight(): boolean;
        adaptiveWidth(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        adaptiveWidth(): boolean;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        scrollerViewStyle(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(): number;
        minScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(): number;
        holder: $UIElement;
        constructor(arg0: $ScrollerView);
    }
    export class $TextArea$TextAreaStyle extends $Style {
        static init(): void;
        textShadow(arg0: boolean): $TextArea$TextAreaStyle;
        textShadow(): boolean;
        font(arg0: $ResourceLocation_): $TextArea$TextAreaStyle;
        font(): $ResourceLocation;
        fontSize(arg0: number): $TextArea$TextAreaStyle;
        fontSize(): number;
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextArea$TextAreaStyle;
        placeholder(arg0: $Component_): $TextArea$TextAreaStyle;
        placeholder(): $Component;
        errorColor(): number;
        errorColor(arg0: number): $TextArea$TextAreaStyle;
        viewMode(arg0: $ScrollerMode_): $TextArea$TextAreaStyle;
        viewMode(): $ScrollerMode;
        scrollerViewMargin(): number;
        cursorColor(): number;
        cursorColor(arg0: number): $TextArea$TextAreaStyle;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextArea$TextAreaStyle;
        textColor(): number;
        textColor(arg0: number): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        scrollerViewStyle(arg0: number): $TextArea$TextAreaStyle;
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
        setText(arg0: $Component_): $TextElement;
        getTextStyle(): $TextElement$TextStyle;
        getFont(): $Font;
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
        setOn(arg0: boolean, arg1: boolean): $Switch;
        setOn(arg0: boolean): $Switch;
        switchStyle(arg0: $Consumer_<$Switch$SwitchStyle>): $Switch;
        setOnSwitchChanged(arg0: $BooleanConsumer_): $Switch;
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
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $TextElement$TextStyle extends $Style {
        static init(): void;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextElement$TextStyle;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextElement$TextStyle;
        fontSize(): number;
        fontSize(arg0: number): $TextElement$TextStyle;
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextElement$TextStyle;
        rollSpeed(): number;
        rollSpeed(arg0: number): $TextElement$TextStyle;
        textAlignHorizontal(): $Horizontal;
        textAlignHorizontal(arg0: $Horizontal_): $TextElement$TextStyle;
        adaptiveHeight(arg0: boolean): $TextElement$TextStyle;
        adaptiveHeight(): boolean;
        textColor(): number;
        textColor(arg0: number): $TextElement$TextStyle;
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $TextElement$TextStyle;
        textAlignVertical(arg0: $Vertical_): $TextElement$TextStyle;
        textAlignVertical(): $Vertical;
        textWrap(): $TextWrap;
        textWrap(arg0: $TextWrap_): $TextElement$TextStyle;
        holder: $UIElement;
        constructor(arg0: $TextElement);
    }
    export class $Toggle extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Toggle;
        setText(arg0: string, arg1: boolean): $Toggle;
        toggleLabel(arg0: $Consumer_<$Label>): $Toggle;
        getToggleStyle(): $Toggle$ToggleStyle;
        setText(arg0: $Component_): $Toggle;
        setOnToggleChanged(arg0: $BooleanConsumer_): $Toggle;
        setOn(arg0: boolean): $Toggle;
        setOn(arg0: boolean, arg1: boolean): $Toggle;
        noText(): $Toggle;
        markIcon(arg0: $Consumer_<$UIElement>): $Toggle;
        enableText(): $Toggle;
        toggleStyle(arg0: $Consumer_<$Toggle$ToggleStyle>): $Toggle;
        toggleButton(arg0: $Consumer_<$Button>): $Toggle;
        getToggleGroup(): $Toggle$ToggleGroup;
        setToggleGroup(arg0: $Toggle$ToggleGroup): $Toggle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onToggleChanged(value: $BooleanConsumer_);
    }
    export class $Toggle$ToggleGroup implements $IPersistedSerializable, $IConfigurable {
        setAllowEmpty(arg0: boolean): $Toggle$ToggleGroup;
        getCurrentToggle(): $Toggle;
        getToggles(): $List<$Toggle>;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        beforeDeserialize(): void;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        set allowEmpty(value: boolean);
        get currentToggle(): $Toggle;
        get toggles(): $List<$Toggle>;
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
        setBorderSize(arg0: number): $SplitView;
        setMinPercentage(arg0: number): $SplitView;
        setMaxPercentage(arg0: number): $SplitView;
        getBorderSize(): number;
        setPercentage(arg0: number): $SplitView;
        getMinPercentage(): number;
        getMaxPercentage(): number;
        getPercentage(): number;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu$MenuStyle extends $Style {
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafHoverTexture(): $IGuiTexture;
        leafHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeHoverTexture(): $IGuiTexture;
        nodeHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafTexture(): $IGuiTexture;
        leafTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
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
        setRange(arg0: number, arg1: number): $ProgressBar;
        unbindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        setProgress(arg0: number): $ProgressBar;
        getNormalizedValue(): number;
        getNormalizedValue(arg0: number): number;
        barContainer(arg0: $Consumer_<$UIElement>): $ProgressBar;
        progressBarStyle(arg0: $Consumer_<$ProgressBar$ProgressBarStyle>): $ProgressBar;
        getProgressBarStyle(): $ProgressBar$ProgressBarStyle;
        setMinValue(arg0: number): $ProgressBar;
        setMaxValue(arg0: number): $ProgressBar;
        bind(arg0: $IBinding<number>): $UIElement;
        unbind(arg0: $IBinding<number>): $UIElement;
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
        setSelected(arg0: T): $Selector<T>;
        setSelected(arg0: T, arg1: boolean): $Selector<T>;
        setCandidates(arg0: $List_<T>): $Selector<T>;
        show(): void;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $Selector<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $Selector<T>;
        hide(): void;
        getCandidates(): $List<T>;
        getSelectorStyle(): $Selector$SelectorStyle;
        selectorStyle(arg0: $Consumer_<$Selector$SelectorStyle>): $Selector<T>;
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
        set candidateUIProvider(value: $UIElementProvider_<T>);
        set onValueChanged(value: $Consumer_<T>);
    }
    export class $Inspector extends $UIElement {
        clear(): void;
        setHistoryStack(arg0: $IHistoryStack): $Inspector;
        getHistoryStack(): $IHistoryStack;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
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
