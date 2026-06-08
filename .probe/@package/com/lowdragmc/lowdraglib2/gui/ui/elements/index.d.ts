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
        maxItemCount(): number;
        maxItemCount(arg0: number): $Selector$SelectorStyle;
        showOverlay(arg0: boolean): $Selector$SelectorStyle;
        showOverlay(): boolean;
        closeAfterSelect(arg0: boolean): $Selector$SelectorStyle;
        closeAfterSelect(): boolean;
        scrollerViewHeight(arg0: number): $Selector$SelectorStyle;
        scrollerViewHeight(): number;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $Selector$SelectorStyle;
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
        insertText(arg0: string): void;
        getMode(): $TextField$Mode;
        setNumbersOnlyShort(arg0: number, arg1: number): $TextField;
        setNumbersOnlyDouble(arg0: number, arg1: number): $TextField;
        getCursorUnderMouseX(arg0: number): number;
        setNumbersOnlyFloat(arg0: number, arg1: number): $TextField;
        setTextRegexValidator(arg0: string): $TextField;
        getFont(): $Font;
        getSelectionEnd(): number;
        getSelectionStart(): number;
        setSelection(arg0: number, arg1: number): void;
        setCursor(arg0: number): void;
        textFieldStyle(arg0: $Consumer_<$TextField$TextFieldStyle>): $TextField;
        getHistoryStack(): $HistoryStack<string>;
        setCharValidator(arg0: $Predicate_<string>): $TextField;
        setWheelDur(arg0: number, arg1: number): $TextField;
        setWheelDur(arg0: number): $TextField;
        setNumbersOnlyInt(arg0: number, arg1: number): $TextField;
        setNumbersOnlyLong(arg0: number, arg1: number): $TextField;
        setAnyString(): $TextField;
        setCompoundTagOnly(): $TextField;
        setNumbersOnlyByte(arg0: number, arg1: number): $TextField;
        getTextFieldStyle(): $TextField$TextFieldStyle;
        getWheelDur(): number;
        getFormattedLine(): $Tuple<$FormattedCharSequence, number>;
        getDisplayOffset(): number;
        getRawText(): string;
        getHighlighted(): string;
        deleteWords(arg0: number): void;
        deleteChars(arg0: number): void;
        getWordPosition(arg0: number): number;
        deleteCharsToPos(arg0: number): void;
        getCursorPos(): number;
        isEditable(): boolean;
        setResourceLocationOnly(): $TextField;
        setTextValidator(arg0: $Predicate_<string>): $TextField;
        setTextResponder(arg0: $Consumer_<string>): $TextField;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get mode(): $TextField$Mode;
        set textRegexValidator(value: string);
        get font(): $Font;
        get selectionEnd(): number;
        get selectionStart(): number;
        set cursor(value: number);
        get historyStack(): $HistoryStack<string>;
        set charValidator(value: $Predicate_<string>);
        get formattedLine(): $Tuple<$FormattedCharSequence, number>;
        get displayOffset(): number;
        get rawText(): string;
        get highlighted(): string;
        get cursorPos(): number;
        get editable(): boolean;
        set textValidator(value: $Predicate_<string>);
        set textResponder(value: $Consumer_<string>);
    }
    export class $GraphView extends $UIElement {
        setOffsetY(arg0: number): void;
        setOffsetX(arg0: number): void;
        getOffsetX(): number;
        getOffsetY(): number;
        fit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        clearAllContentChildren(): $GraphView;
        getScale(): number;
        addContentChild(arg0: $UIElement): $GraphView;
        removeContentChild(arg0: $UIElement): $GraphView;
        contentRoot(arg0: $Consumer_<$UIElement>): $UIElement;
        fitToChildren(arg0: number, arg1: number): void;
        graphViewStyle(arg0: $Consumer_<$GraphView$GraphViewStyle>): $GraphView;
        getGraphViewStyle(): $GraphView$GraphViewStyle;
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
        showFluidTooltips(arg0: boolean): $FluidSlot$SlotStyle;
        showFluidTooltips(): boolean;
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $FluidSlot$SlotStyle;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $FluidSlot$SlotStyle;
        hoverOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        slotOverlay(): $IGuiTexture;
        slotOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        holder: $UIElement;
        constructor(arg0: $FluidSlot);
    }
    export class $Tab extends $UIElement {
        getContent(): $UIElement;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Tab;
        setText(arg0: $Component_): $Tab;
        setText(arg0: string, arg1: boolean): $Tab;
        setText(arg0: string): $Tab;
        tabStyle(arg0: $Consumer_<$Tab$TabStyle>): $Tab;
        getTabView(): $TabView;
        setDynamicText(arg0: $Supplier_<$Component>): $Tab;
        getTabStyle(): $Tab$TabStyle;
        setOnTabUnselected(arg0: $Runnable_): $Tab;
        setOnTabSelected(arg0: $Runnable_): $Tab;
        setSelected(arg0: boolean): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $Label;
        constructor();
        get content(): $UIElement;
        get tabView(): $TabView;
        set dynamicText(value: $Supplier_<$Component>);
        set onTabUnselected(value: $Runnable_);
        set onTabSelected(value: $Runnable_);
        set selected(value: boolean);
    }
    export class $TextField$TextFieldStyle extends $Style {
        static init(): void;
        font(arg0: $ResourceLocation_): $TextField$TextFieldStyle;
        font(): $ResourceLocation;
        fontSize(arg0: number): $TextField$TextFieldStyle;
        fontSize(): number;
        placeholder(arg0: $Component_): $TextField$TextFieldStyle;
        placeholder(): $Component;
        errorColor(): number;
        errorColor(arg0: number): $TextField$TextFieldStyle;
        textColor(arg0: number): $TextField$TextFieldStyle;
        textColor(): number;
        textShadow(arg0: boolean): $TextField$TextFieldStyle;
        textShadow(): boolean;
        cursorColor(): number;
        cursorColor(arg0: number): $TextField$TextFieldStyle;
        focusOverlay(arg0: $IGuiTexture_): $TextField$TextFieldStyle;
        focusOverlay(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $TextField);
    }
    export class $Button$ButtonStyle extends $Style {
        pressedTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        hoverTexture(): $IGuiTexture;
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
        baseTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        hoverTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        holder: $UIElement;
        constructor(arg0: $Toggle);
    }
    export class $ScrollerView extends $UIElement {
        viewPort(arg0: $Consumer_<$UIElement>): $ScrollerView;
        getContainerHeight(): number;
        viewContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        hasScrollViewChild(arg0: $UIElement): boolean;
        scrollerStyle(arg0: $Consumer_<$ScrollerView$ScrollerViewStyle>): $ScrollerView;
        getContainerWidth(): number;
        verticalContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        addScrollViewChild(arg0: $UIElement): $ScrollerView;
        getScrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        removeScrollViewChild(arg0: $UIElement): boolean;
        addScrollViewChildAt(arg0: $UIElement, arg1: number): $ScrollerView;
        clearAllScrollViewChildren(): void;
        addScrollViewChildren(...arg0: $UIElement[]): $ScrollerView;
        verticalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        horizontalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get containerHeight(): number;
        get containerWidth(): number;
        get scrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
    }
    export class $SearchComponent$SearchStyle extends $Style {
        static init(): void;
        maxItemCount(): number;
        maxItemCount(arg0: number): $SearchComponent$SearchStyle;
        showOverlay(arg0: boolean): $SearchComponent$SearchStyle;
        showOverlay(): boolean;
        closeAfterSelect(arg0: boolean): $SearchComponent$SearchStyle;
        closeAfterSelect(): boolean;
        scrollerViewHeight(arg0: number): $SearchComponent$SearchStyle;
        scrollerViewHeight(): number;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $SearchComponent$SearchStyle;
        holder: $UIElement;
    }
    export class $Scroller extends $BindableUIElement<number> {
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $Scroller;
        setValue(arg0: number): $Scroller;
        getMinValue(): number;
        getMaxValue(): number;
        isDragging(): boolean;
        setRange(arg0: number, arg1: number): $Scroller;
        scrollBar(arg0: $Consumer_<$Button>): $Scroller;
        headButton(arg0: $Consumer_<$Button>): $Scroller;
        tailButton(arg0: $Consumer_<$Button>): $Scroller;
        scrollerStyle(arg0: $Consumer_<$Scroller$ScrollerStyle>): $Scroller;
        setClampNormalizedValue(arg0: $Function_<number, number>): $Scroller;
        setScrollBarSize(arg0: number): $Scroller;
        setNormalizedValue(arg0: number, arg1: boolean): $Scroller;
        setNormalizedValue(arg0: number): $Scroller;
        setMinValue(arg0: number): $Scroller;
        setMaxValue(arg0: number): $Scroller;
        getClampNormalizedValue(): $Function<number, number>;
        setOnValueChanged(arg0: $FloatConsumer_): $Scroller;
        getNormalizedValue(): number;
        scrollValue(arg0: number): void;
        getScrollerStyle(): $Scroller$ScrollerStyle;
        scrollContainer(arg0: $Consumer_<$UIElement>): $Scroller;
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
        bindDataSource(arg0: $IDataProvider<T>, arg1: boolean): $BindableUIElement<T>;
        unbindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        registerValueListener(arg0: $Consumer_<T>): $ISubscription;
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
        setValue(arg0: T): $IDataSource<T>;
        bindDataSource(arg0: $IDataProvider<T>): $UIElement;
        unbindObserver(arg0: $IObserver_<T>): $UIElement;
        bindObserver(arg0: $IObserver_<T>): $UIElement;
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
        setItem(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        setItem(arg0: $ItemStack_): $ItemSlot;
        xeiPhantom(): $ItemSlot;
        getFullTooltipTexts(): $List<$Component>;
        xeiRecipeIngredient(arg0: $IngredientIO_): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        updateSlotPosition(): void;
        getSlotStyle(): $ItemSlot$SlotStyle;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $ItemSlot;
        xeiRecipeSlot(): $ItemSlot;
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
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(): $IGuiTexture;
        selectedTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        hoverTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        holder: $UIElement;
        constructor(arg0: $Tab);
    }
    export class $Label extends $TextElement implements $IBindable<$Component>, $IDataConsumer<$Component> {
        getValue(): $Component;
        setValue(arg0: $Component_): $Label;
        unbindDataSource(arg0: $IDataProvider<$Component_>): $Label;
        bind(arg0: $IBinding<$Component_>): $UIElement;
        unbind(arg0: $IBinding<$Component_>): $UIElement;
        bindDataSource(arg0: $IDataProvider<$Component_>): $UIElement;
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
        setRoot(arg0: NODE): $TreeList<NODE>;
        reloadList(): $TreeList<NODE>;
        menuStyle(arg0: $Consumer_<$TreeList$TreeListStyle>): $TreeList<NODE>;
        expandNode(arg0: NODE): void;
        getNodeUIs(): $BiMap<NODE, $UIElement>;
        static textTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        expandAllNodesIf(arg0: NODE, arg1: $Predicate_<NODE>): void;
        isNodeSelected(arg0: NODE): boolean;
        setNodeUISupplier(arg0: $UIElementProvider_<NODE>): $TreeList<NODE>;
        setStaticTree(arg0: boolean): $TreeList<NODE>;
        setFlattenRoot(arg0: boolean): $TreeList<NODE>;
        addSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        removeSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        static iconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        getTreeListStyle(): $TreeList$TreeListStyle;
        isNodeExpanded(arg0: NODE): boolean;
        collapseNode(arg0: NODE): void;
        createNodeUI(arg0: NODE): $UIElement;
        setOnNodeUICreated(arg0: $BiConsumer_<NODE, $UIElement>): $TreeList<NODE>;
        isWidthFitsContent(): boolean;
        getHoveredNode(): NODE;
        setClickToExpand(arg0: boolean): $TreeList<NODE>;
        getExpandedNodes(): $Set<NODE>;
        static isMouseOverNodeCenter(arg0: $UIEvent): boolean;
        static isMouseOverNodeAbove(arg0: $UIEvent): boolean;
        static isMouseOverNodeBelow(arg0: $UIEvent): boolean;
        setWidthFitsContent(arg0: boolean): $TreeList<NODE>;
        expandNodeAlongPath(arg0: NODE): void;
        static optionalIconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        static createDraggingOverlay(arg0: number): $IGuiTexture;
        setOnSelectedChanged(arg0: $Consumer_<$Set<NODE>>): $TreeList<NODE>;
        setOnDoubleClickNode(arg0: $Consumer_<NODE>): $TreeList<NODE>;
        setSupportMultipleSelection(arg0: boolean): $TreeList<NODE>;
        setSelected(arg0: $Collection_<NODE>, arg1: boolean): $TreeList<NODE>;
        setDoubleClickToExpand(arg0: boolean): $TreeList<NODE>;
        setSelectableNodeFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: NODE, arg1: boolean);
        constructor(arg0: NODE);
        constructor();
        get nodeUIs(): $BiMap<NODE, $UIElement>;
        set nodeUISupplier(value: $UIElementProvider_<NODE>);
        set staticTree(value: boolean);
        set flattenRoot(value: boolean);
        get treeListStyle(): $TreeList$TreeListStyle;
        set onNodeUICreated(value: $BiConsumer_<NODE, $UIElement>);
        get hoveredNode(): NODE;
        set clickToExpand(value: boolean);
        get expandedNodes(): $Set<NODE>;
        set onSelectedChanged(value: $Consumer_<$Set<NODE>>);
        set onDoubleClickNode(value: $Consumer_<NODE>);
        set supportMultipleSelection(value: boolean);
        set doubleClickToExpand(value: boolean);
        set selectableNodeFilter(value: $Predicate_<NODE>);
    }
    export class $TextArea extends $BindableUIElement<string[]> {
        scale(): number;
        getValue(): string[];
        setValue(arg0: string[]): $TextArea;
        setValue(arg0: string[], arg1: boolean): $TextArea;
        isError(): boolean;
        getLines(): $List<string>;
        getScrollX(): number;
        getScrollY(): number;
        getFont(): $Font;
        setSelection(arg0: $Cursor_, arg1: $Cursor_): void;
        setLines(arg0: $List_<string>): $TextArea;
        setLines(arg0: string[], arg1: boolean): $TextArea;
        setCursor(arg0: number, arg1: number): void;
        getHistoryStack(): $HistoryStack<$TextArea$History>;
        setLinesResponder(arg0: $Consumer_<string[]>): $TextArea;
        getSelStartCol(): number;
        getSelEndCol(): number;
        setCharValidator(arg0: $Predicate_<string>): $TextArea;
        getCursorUnderMouse(arg0: number, arg1: number): $Cursor;
        collapseSelectionToCursor(): void;
        hasSelection(): boolean;
        textAreaStyle(arg0: $Consumer_<$TextArea$TextAreaStyle>): $TextArea;
        isEditable(): boolean;
        cursorPos(): $Cursor;
        lineHeight(): number;
        setTextValidator(arg0: $Predicate_<string[]>): $TextArea;
        drawContentView(arg0: $GUIContext): void;
        getTextAreaStyle(): $TextArea$TextAreaStyle;
        getCursorCol(): number;
        getSelStartLine(): number;
        getCursorLine(): number;
        getSelEndLine(): number;
        pushHistory(): void;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get scrollX(): number;
        get scrollY(): number;
        get font(): $Font;
        get historyStack(): $HistoryStack<$TextArea$History>;
        set linesResponder(value: $Consumer_<string[]>);
        get selStartCol(): number;
        get selEndCol(): number;
        set charValidator(value: $Predicate_<string>);
        get editable(): boolean;
        set textValidator(value: $Predicate_<string[]>);
        get cursorCol(): number;
        get selStartLine(): number;
        get cursorLine(): number;
        get selEndLine(): number;
    }
    export class $Switch$SwitchStyle extends $Style {
        static init(): void;
        pressedTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        markTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        unmarkTexture(): $IGuiTexture;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        holder: $UIElement;
        constructor(arg0: $Switch);
    }
    export class $TreeList$TreeListStyle extends $Style {
        expandIcon(): $IGuiTexture;
        expandIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(): $IGuiTexture;
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        collapseIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        collapseIcon(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $TreeList<any>);
    }
    export class $SearchComponent<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $SearchComponent<T>;
        hide(): void;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $SearchComponent<T>;
        show(): void;
        setSelected(arg0: T): $SearchComponent<T>;
        setSelected(arg0: T, arg1: boolean): $SearchComponent<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $SearchComponent<T>;
        searchStyle(arg0: $Consumer_<$SearchComponent$SearchStyle>): $SearchComponent<T>;
        getSearchStyle(): $SearchComponent$SearchStyle;
        setSearchOnServer(arg0: $Class<T[]>): $SearchComponent<T>;
        setSearchUI(arg0: $SearchComponent$ISearchUI<T>): $SearchComponent<T>;
        isSearchOnServer(): boolean;
        getSearchUI(): $SearchComponent$ISearchUI<T>;
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
        getCapacity(): number;
        setAllowClickDrained(arg0: boolean): $FluidSlot;
        isAllowClickDrained(): boolean;
        setAllowClickFilled(arg0: boolean): $FluidSlot;
        setCapacity(arg0: number): $FluidSlot;
        setFluid(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        setFluid(arg0: $FluidStack_): $FluidSlot;
        slotStyle(arg0: $Consumer_<$FluidSlot$SlotStyle>): $FluidSlot;
        getFluid(): $FluidStack;
        xeiPhantom(): $FluidSlot;
        isAllowClickFilled(): boolean;
        getFluidAmountText(): $Component;
        getFullTooltipTexts(): $List<$Component>;
        xeiRecipeIngredient(arg0: $IngredientIO_): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        getSlotStyle(): $FluidSlot$SlotStyle;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $FluidSlot;
        xeiRecipeSlot(): $FluidSlot;
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
        setAny(): $TagField;
        setListOnly(): $TagField;
        setCompoundTagOnly(): $TagField;
        setTagValidator(arg0: $Predicate_<$Tag>): $TagField;
        setTagResponder(arg0: $Consumer_<$Tag>): $TagField;
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
        setOnClick(arg0: $UIEventListener_): $Button;
        noText(): $Button;
        enableText(): $Button;
        setText(arg0: $Component_): $Button;
        addPostIcon(arg0: $IGuiTexture_): $Button;
        setOnServerClick(arg0: $UIEventListener_): $Button;
        buttonStyle(arg0: $Consumer_<$Button$ButtonStyle>): $Button;
        getButtonStyle(): $Button$ButtonStyle;
        addPreIcon(arg0: $IGuiTexture_): $Button;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $TextElement;
        constructor();
        get state(): $Button$State;
        set onClick(value: $UIEventListener_);
        set onServerClick(value: $UIEventListener_);
    }
    export class $GraphView$GraphViewStyle extends $Style {
        allowPan(): boolean;
        allowPan(arg0: boolean): $GraphView$GraphViewStyle;
        maxScale(): number;
        maxScale(arg0: number): $GraphView$GraphViewStyle;
        allowZoom(arg0: boolean): $GraphView$GraphViewStyle;
        allowZoom(): boolean;
        minScale(): number;
        minScale(arg0: number): $GraphView$GraphViewStyle;
        gridSize(): number;
        gridSize(arg0: number): $GraphView$GraphViewStyle;
        gridTexture(): $IGuiTexture;
        gridTexture(arg0: $IGuiTexture_): $GraphView$GraphViewStyle;
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
        static convertTag(arg0: $Tag_, arg1: $StructuredTagEditor$TagKind_): $Tag;
        static setIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        setRootTypeFilter(arg0: $Predicate_<$StructuredTagEditor$TagKind>): $StructuredTagEditor;
        static renameCompoundKey(arg0: $CompoundTag_, arg1: string, arg2: string): boolean;
        setAny(): $StructuredTagEditor;
        setListOnly(): $StructuredTagEditor;
        setCompoundTagOnly(): $StructuredTagEditor;
        static removeIntArrayElement(arg0: $IntArrayTag, arg1: number): $IntArrayTag;
        static insertIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static changeListElementType(arg0: $ListTag_, arg1: $StructuredTagEditor$TagKind_): $ListTag;
        static removeLongArrayElement(arg0: $LongArrayTag, arg1: number): $LongArrayTag;
        static insertLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static setLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static removeByteArrayElement(arg0: $ByteArrayTag, arg1: number): $ByteArrayTag;
        static insertByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static setByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        setTagValidator(arg0: $Predicate_<$Tag>): $StructuredTagEditor;
        setTagResponder(arg0: $Consumer_<$Tag>): $StructuredTagEditor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        set rootTypeFilter(value: $Predicate_<$StructuredTagEditor$TagKind>);
        set tagValidator(value: $Predicate_<$Tag>);
        set tagResponder(value: $Consumer_<$Tag>);
    }
    export class $ItemSlot$SlotStyle extends $Style {
        acceptQuickMove(arg0: boolean): $ItemSlot$SlotStyle;
        acceptQuickMove(): boolean;
        quickMovePriority(): number;
        quickMovePriority(arg0: number): $ItemSlot$SlotStyle;
        isPlayerSlot(): boolean;
        isPlayerSlot(arg0: boolean): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(arg0: boolean): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        showItemTooltips(): boolean;
        showItemTooltips(arg0: boolean): $ItemSlot$SlotStyle;
        slotOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $ItemSlot);
    }
    export class $ProgressBar$ProgressBarStyle extends $Style {
        static init(): void;
        interpolate(): boolean;
        interpolate(arg0: boolean): $ProgressBar$ProgressBarStyle;
        interpolateStep(): number;
        interpolateStep(arg0: number): $ProgressBar$ProgressBarStyle;
        fillDirection(arg0: $FillDirection_): $ProgressBar$ProgressBarStyle;
        fillDirection(): $FillDirection;
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
        setOnClose(arg0: $Runnable_): $Menu<K, $CompoundTag>;
        menuStyle(arg0: $Consumer_<$Menu$MenuStyle>): $Menu<K, $CompoundTag>;
        getNodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        setAutoClose(arg0: boolean): $Menu<K, $CompoundTag>;
        setHoverTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        getMenuStyle(): $Menu$MenuStyle;
        setUiProvider(arg0: $UIElementProvider_<K>): $Menu<K, $CompoundTag>;
        setTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setOnNodeClicked(arg0: $Consumer_<$ITreeNode<K, $CompoundTag>>): $Menu<K, $CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        root: $ITreeNode<K, $CompoundTag>;
        constructor(arg0: $ITreeNode<K, $CompoundTag_>);
        constructor(arg0: $ITreeNode<K, $CompoundTag_>, arg1: $UIElementProvider_<K>);
        set onClose(value: $Runnable_);
        get nodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        set autoClose(value: boolean);
        set hoverTextureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set uiProvider(value: $UIElementProvider_<K>);
        set textureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set onNodeClicked(value: $Consumer_<$ITreeNode<K, $CompoundTag>>);
    }
    export class $Dialog extends $UIElement {
        close(): void;
        top(): $Dialog;
        bottom(): $Dialog;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $Dialog;
        width(arg0: $TaffyDimension): $Dialog;
        setTitle(arg0: string): $Dialog;
        static showNotification(arg0: string, arg1: number): $Dialog;
        static showNotification(arg0: string, arg1: string, arg2: $Runnable_): $Dialog;
        addButton(arg0: $UIElement): $Dialog;
        setOnClose(arg0: $Runnable_): $Dialog;
        static suffixFilter(...arg0: string[]): $Predicate<$FileNode>;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: $Consumer_<$File>): $Dialog;
        windowMode(arg0: number, arg1: number): $Dialog;
        windowMode(arg0: number, arg1: number, arg2: number, arg3: number): $Dialog;
        addContent(arg0: $UIElement): $Dialog;
        setAutoClose(arg0: boolean): $Dialog;
        show(arg0: $ModularUI): $Dialog;
        show(arg0: $UIElement): $Dialog;
        static showCancelableCheck(arg0: string, arg1: string, arg2: $BooleanConsumer_, arg3: $Runnable_): $Dialog;
        static stringEditorDialog(arg0: string, arg1: string, arg2: $Predicate_<string>, arg3: $Consumer_<string>): $Dialog;
        allowInteraction(): $Dialog;
        darkenBackground(): $Dialog;
        static showCheckBox(arg0: string, arg1: string, arg2: $BooleanConsumer_): $Dialog;
        setClickOutsideClose(arg0: boolean): $Dialog;
        titleBar: $UIElement;
        static CODEC: $Codec<$UIElement>;
        overlay: $UIElement;
        contentContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        buttonContainer: $UIElement;
        constructor();
        set title(value: string);
        set onClose(value: $Runnable_);
        set autoClose(value: boolean);
        set clickOutsideClose(value: boolean);
    }
    export class $TabView extends $UIElement {
        clear(): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement, arg2: number): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement): $TabView;
        selectTab(arg0: $Tab): $TabView;
        removeTab(arg0: $Tab): $TabView;
        tabScroller(arg0: $Consumer_<$ScrollerView>): $TabView;
        tabHeaderContainer(arg0: $Consumer_<$UIElement>): $TabView;
        setOnTabSelected(arg0: $Consumer_<$Tab>): $TabView;
        getTabContents(): $BiMap<$Tab, $UIElement>;
        getSelectedTab(): $Tab;
        tabContentContainer(arg0: $Consumer_<$UIElement>): $TabView;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onTabSelected(value: $Consumer_<$Tab>);
        get tabContents(): $BiMap<$Tab, $UIElement>;
        get selectedTab(): $Tab;
    }
    export class $Scene extends $UIElement {
        isDragging(): boolean;
        setCenter(arg0: $Vector3f): $Scene;
        getRange(): number;
        getRenderer(): $WorldSceneRenderer;
        setRenderSelect(arg0: boolean): $Scene;
        setRenderFacing(arg0: boolean): $Scene;
        createScene(arg0: $Level_): $Scene;
        createScene(arg0: $Level_, arg1: boolean, arg2: $Size): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook, arg2: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>): $Scene;
        getCenter(): $Vector3f;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number, arg3: number): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number): void;
        setOrthoRange(arg0: number): $Scene;
        getDummyWorld(): $TrackedDummyWorld;
        useCacheBuffer(): $Scene;
        useCacheBuffer(arg0: boolean): $Scene;
        syncCompile(): $Scene;
        syncCompile(arg0: boolean): $Scene;
        renderBlockOverLay(arg0: $WorldSceneRenderer): void;
        needCompileCache(): void;
        isRenderSelect(): boolean;
        setClipContext(arg0: $ClipContext$Block_, arg1: $ClipContext$Fluid_): $Scene;
        isRenderFacing(): boolean;
        isDraggable(): boolean;
        setDraggable(arg0: boolean): $Scene;
        setScalable(arg0: boolean): $Scene;
        isIntractable(): boolean;
        setIntractable(arg0: boolean): $Scene;
        getRotationPitch(): number;
        xeiLookup(): $Scene;
        isUseOrtho(): boolean;
        isScalable(): boolean;
        setZoom(arg0: number): $Scene;
        useOrtho(): $Scene;
        useOrtho(arg0: boolean): $Scene;
        camZoom(): number;
        isUseCache(): boolean;
        getLastClickPosFace(): $BlockPosFace;
        getLastHoverPosFace(): $BlockPosFace;
        setShowHoverBlockTips(arg0: boolean): $Scene;
        releaseRendererResource(): void;
        setAfterWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        setCameraYawAndPitch(arg0: number, arg1: number): $Scene;
        getLastSelectedPosFace(): $BlockPosFace;
        setBeforeWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        setCameraYawAndPitchAnima(arg0: number, arg1: number, arg2: number): void;
        isShowHoverBlockTips(): boolean;
        isTickWorld(): boolean;
        getClipBlock(): $ClipContext$Block;
        isAutoReleased(): boolean;
        setTickWorld(arg0: boolean): $Scene;
        getClipFluid(): $ClipContext$Fluid;
        getOnSelected(): $BiConsumer<$BlockPos, $Direction>;
        isSyncCompile(): boolean;
        getLastHoverItem(): $ItemStack;
        setAllowXEILookup(arg0: boolean): $Scene;
        setOnSelected(arg0: $BiConsumer_<$BlockPos, $Direction>): $Scene;
        getRotationYaw(): number;
        isAllowXEILookup(): boolean;
        getZoom(): number;
        getParticleManager(): $ParticleManager;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get dragging(): boolean;
        get range(): number;
        get renderer(): $WorldSceneRenderer;
        set orthoRange(value: number);
        get dummyWorld(): $TrackedDummyWorld;
        get rotationPitch(): number;
        get useCache(): boolean;
        get lastClickPosFace(): $BlockPosFace;
        get lastHoverPosFace(): $BlockPosFace;
        set afterWorldRender(value: $Consumer_<$Scene>);
        get lastSelectedPosFace(): $BlockPosFace;
        set beforeWorldRender(value: $Consumer_<$Scene>);
        get clipBlock(): $ClipContext$Block;
        get autoReleased(): boolean;
        get clipFluid(): $ClipContext$Fluid;
        get lastHoverItem(): $ItemStack;
        get rotationYaw(): number;
        get particleManager(): $ParticleManager;
    }
    export class $ScrollerView$ScrollerViewStyle extends $Style {
        mode(arg0: $ScrollerMode_): $ScrollerView$ScrollerViewStyle;
        mode(): $ScrollerMode;
        static init(): void;
        adaptiveHeight(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        adaptiveHeight(): boolean;
        maxScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(): number;
        scrollerViewStyle(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(): number;
        minScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        verticalScrollDisplay(): $ScrollDisplay;
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
        fontSize(arg0: number): $TextArea$TextAreaStyle;
        fontSize(): number;
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextArea$TextAreaStyle;
        placeholder(arg0: $Component_): $TextArea$TextAreaStyle;
        placeholder(): $Component;
        viewMode(): $ScrollerMode;
        viewMode(arg0: $ScrollerMode_): $TextArea$TextAreaStyle;
        errorColor(arg0: number): $TextArea$TextAreaStyle;
        errorColor(): number;
        scrollerViewStyle(arg0: number): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        textColor(arg0: number): $TextArea$TextAreaStyle;
        textColor(): number;
        textShadow(arg0: boolean): $TextArea$TextAreaStyle;
        textShadow(): boolean;
        cursorColor(arg0: number): $TextArea$TextAreaStyle;
        cursorColor(): number;
        scrollerViewMargin(): number;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextArea$TextAreaStyle;
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
        getFont(): $Font;
        recompute(): void;
        getTextStyle(): $TextElement$TextStyle;
        setText(arg0: $Component_): $TextElement;
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
    export class $TextElement$TextStyle extends $Style {
        static init(): void;
        textWrap(arg0: $TextWrap_): $TextElement$TextStyle;
        textWrap(): $TextWrap;
        font(arg0: $ResourceLocation_): $TextElement$TextStyle;
        font(): $ResourceLocation;
        fontSize(arg0: number): $TextElement$TextStyle;
        fontSize(): number;
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextElement$TextStyle;
        textAlignHorizontal(): $Horizontal;
        textAlignHorizontal(arg0: $Horizontal_): $TextElement$TextStyle;
        rollSpeed(): number;
        rollSpeed(arg0: number): $TextElement$TextStyle;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $TextElement$TextStyle;
        textColor(): number;
        textColor(arg0: number): $TextElement$TextStyle;
        textShadow(arg0: boolean): $TextElement$TextStyle;
        textShadow(): boolean;
        textAlignVertical(arg0: $Vertical_): $TextElement$TextStyle;
        textAlignVertical(): $Vertical;
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $TextElement$TextStyle;
        holder: $UIElement;
        constructor(arg0: $TextElement);
    }
    export class $Toggle extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Toggle;
        setText(arg0: string, arg1: boolean): $Toggle;
        markIcon(arg0: $Consumer_<$UIElement>): $Toggle;
        noText(): $Toggle;
        setOn(arg0: boolean): $Toggle;
        setOn(arg0: boolean, arg1: boolean): $Toggle;
        enableText(): $Toggle;
        getToggleGroup(): $Toggle$ToggleGroup;
        setToggleGroup(arg0: $Toggle$ToggleGroup): $Toggle;
        toggleStyle(arg0: $Consumer_<$Toggle$ToggleStyle>): $Toggle;
        toggleButton(arg0: $Consumer_<$Button>): $Toggle;
        setText(arg0: $Component_): $Toggle;
        setOnToggleChanged(arg0: $BooleanConsumer_): $Toggle;
        getToggleStyle(): $Toggle$ToggleStyle;
        toggleLabel(arg0: $Consumer_<$Label>): $Toggle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onToggleChanged(value: $BooleanConsumer_);
    }
    export class $Toggle$ToggleGroup implements $IPersistedSerializable, $IConfigurable {
        getToggles(): $List<$Toggle>;
        getCurrentToggle(): $Toggle;
        setAllowEmpty(arg0: boolean): $Toggle$ToggleGroup;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        writeToBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        beforeDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        beforeSerialize(): void;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        getConfigurableName(): string;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        get toggles(): $List<$Toggle>;
        get currentToggle(): $Toggle;
        set allowEmpty(value: boolean);
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
        getMinPercentage(): number;
        getMaxPercentage(): number;
        setMaxPercentage(arg0: number): $SplitView;
        setPercentage(arg0: number): $SplitView;
        getPercentage(): number;
        setMinPercentage(arg0: number): $SplitView;
        setBorderSize(arg0: number): $SplitView;
        getBorderSize(): number;
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
        setRange(arg0: number, arg1: number): $ProgressBar;
        bar(arg0: $Consumer_<$UIElement>): $ProgressBar;
        unbindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        setProgress(arg0: number): $ProgressBar;
        setMinValue(arg0: number): $ProgressBar;
        setMaxValue(arg0: number): $ProgressBar;
        getProgressBarStyle(): $ProgressBar$ProgressBarStyle;
        progressBarStyle(arg0: $Consumer_<$ProgressBar$ProgressBarStyle>): $ProgressBar;
        barContainer(arg0: $Consumer_<$UIElement>): $ProgressBar;
        getNormalizedValue(): number;
        getNormalizedValue(arg0: number): number;
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
        hide(): void;
        selectorStyle(arg0: $Consumer_<$Selector$SelectorStyle>): $Selector<T>;
        getSelectorStyle(): $Selector$SelectorStyle;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $Selector<T>;
        getCandidates(): $List<T>;
        show(): void;
        setSelected(arg0: T): $Selector<T>;
        setSelected(arg0: T, arg1: boolean): $Selector<T>;
        setCandidates(arg0: $List_<T>): $Selector<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $Selector<T>;
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
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        getInspectedConfigurable(): $IConfigurable;
        getHistoryStack(): $IHistoryStack;
        setHistoryStack(arg0: $IHistoryStack): $Inspector;
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
