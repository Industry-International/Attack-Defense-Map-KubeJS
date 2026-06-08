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
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $Selector$SelectorStyle;
        scrollerViewHeight(arg0: number): $Selector$SelectorStyle;
        scrollerViewHeight(): number;
        maxItemCount(arg0: number): $Selector$SelectorStyle;
        maxItemCount(): number;
        closeAfterSelect(arg0: boolean): $Selector$SelectorStyle;
        closeAfterSelect(): boolean;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $Selector$SelectorStyle;
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
        setTextValidator(arg0: $Predicate_<string>): $TextField;
        setTextResponder(arg0: $Consumer_<string>): $TextField;
        deleteCharsToPos(arg0: number): void;
        deleteChars(arg0: number): void;
        getHighlighted(): string;
        deleteWords(arg0: number): void;
        getWordPosition(arg0: number): number;
        setNumbersOnlyLong(arg0: number, arg1: number): $TextField;
        getWheelDur(): number;
        setNumbersOnlyInt(arg0: number, arg1: number): $TextField;
        setAnyString(): $TextField;
        setNumbersOnlyByte(arg0: number, arg1: number): $TextField;
        getFormattedLine(): $Tuple<$FormattedCharSequence, number>;
        setCompoundTagOnly(): $TextField;
        getCursorPos(): number;
        setSelection(arg0: number, arg1: number): void;
        getSelectionEnd(): number;
        getSelectionStart(): number;
        insertText(arg0: string): void;
        getFont(): $Font;
        getRawText(): string;
        setResourceLocationOnly(): $TextField;
        setCursor(arg0: number): void;
        getHistoryStack(): $HistoryStack<string>;
        setCharValidator(arg0: $Predicate_<string>): $TextField;
        isEditable(): boolean;
        textFieldStyle(arg0: $Consumer_<$TextField$TextFieldStyle>): $TextField;
        setWheelDur(arg0: number): $TextField;
        setWheelDur(arg0: number, arg1: number): $TextField;
        getTextFieldStyle(): $TextField$TextFieldStyle;
        setNumbersOnlyFloat(arg0: number, arg1: number): $TextField;
        setTextRegexValidator(arg0: string): $TextField;
        setNumbersOnlyShort(arg0: number, arg1: number): $TextField;
        setNumbersOnlyDouble(arg0: number, arg1: number): $TextField;
        getCursorUnderMouseX(arg0: number): number;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get mode(): $TextField$Mode;
        get displayOffset(): number;
        set textValidator(value: $Predicate_<string>);
        set textResponder(value: $Consumer_<string>);
        get highlighted(): string;
        get formattedLine(): $Tuple<$FormattedCharSequence, number>;
        get cursorPos(): number;
        get selectionEnd(): number;
        get selectionStart(): number;
        get font(): $Font;
        get rawText(): string;
        set cursor(value: number);
        get historyStack(): $HistoryStack<string>;
        set charValidator(value: $Predicate_<string>);
        get editable(): boolean;
        set textRegexValidator(value: string);
    }
    export class $GraphView extends $UIElement {
        fit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        removeContentChild(arg0: $UIElement): $GraphView;
        getGraphViewStyle(): $GraphView$GraphViewStyle;
        contentRoot(arg0: $Consumer_<$UIElement>): $UIElement;
        graphViewStyle(arg0: $Consumer_<$GraphView$GraphViewStyle>): $GraphView;
        addContentChild(arg0: $UIElement): $GraphView;
        fitToChildren(arg0: number, arg1: number): void;
        getScale(): number;
        clearAllContentChildren(): $GraphView;
        getOffsetX(): number;
        getOffsetY(): number;
        setOffsetX(arg0: number): void;
        setOffsetY(arg0: number): void;
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
        showFluidTooltips(arg0: boolean): $FluidSlot$SlotStyle;
        showFluidTooltips(): boolean;
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $FluidSlot$SlotStyle;
        slotOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $FluidSlot$SlotStyle;
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
        setOnTabSelected(arg0: $Runnable_): $Tab;
        tabStyle(arg0: $Consumer_<$Tab$TabStyle>): $Tab;
        getTabView(): $TabView;
        getTabStyle(): $Tab$TabStyle;
        setDynamicText(arg0: $Supplier_<$Component>): $Tab;
        setOnTabUnselected(arg0: $Runnable_): $Tab;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $Label;
        constructor();
        get content(): $UIElement;
        set selected(value: boolean);
        set onTabSelected(value: $Runnable_);
        get tabView(): $TabView;
        set dynamicText(value: $Supplier_<$Component>);
        set onTabUnselected(value: $Runnable_);
    }
    export class $TextField$TextFieldStyle extends $Style {
        static init(): void;
        textShadow(arg0: boolean): $TextField$TextFieldStyle;
        textShadow(): boolean;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextField$TextFieldStyle;
        fontSize(): number;
        fontSize(arg0: number): $TextField$TextFieldStyle;
        errorColor(): number;
        errorColor(arg0: number): $TextField$TextFieldStyle;
        textColor(): number;
        textColor(arg0: number): $TextField$TextFieldStyle;
        placeholder(arg0: $Component_): $TextField$TextFieldStyle;
        placeholder(): $Component;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextField$TextFieldStyle;
        cursorColor(arg0: number): $TextField$TextFieldStyle;
        cursorColor(): number;
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
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        markTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        baseTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        hoverTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        holder: $UIElement;
        constructor(arg0: $Toggle);
    }
    export class $ScrollerView extends $UIElement {
        scrollerStyle(arg0: $Consumer_<$ScrollerView$ScrollerViewStyle>): $ScrollerView;
        hasScrollViewChild(arg0: $UIElement): boolean;
        viewContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        viewPort(arg0: $Consumer_<$UIElement>): $ScrollerView;
        verticalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        horizontalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        getScrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        addScrollViewChildren(...arg0: $UIElement[]): $ScrollerView;
        removeScrollViewChild(arg0: $UIElement): boolean;
        addScrollViewChildAt(arg0: $UIElement, arg1: number): $ScrollerView;
        clearAllScrollViewChildren(): void;
        getContainerWidth(): number;
        getContainerHeight(): number;
        addScrollViewChild(arg0: $UIElement): $ScrollerView;
        verticalContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
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
        setScrollBarSize(arg0: number): $Scroller;
        scrollerStyle(arg0: $Consumer_<$Scroller$ScrollerStyle>): $Scroller;
        setMaxValue(arg0: number): $Scroller;
        setMinValue(arg0: number): $Scroller;
        setNormalizedValue(arg0: number, arg1: boolean): $Scroller;
        setNormalizedValue(arg0: number): $Scroller;
        scrollContainer(arg0: $Consumer_<$UIElement>): $Scroller;
        scrollValue(arg0: number): void;
        getScrollerStyle(): $Scroller$ScrollerStyle;
        getNormalizedValue(): number;
        setClampNormalizedValue(arg0: $Function_<number, number>): $Scroller;
        setRange(arg0: number, arg1: number): $Scroller;
        scrollBar(arg0: $Consumer_<$Button>): $Scroller;
        isDragging(): boolean;
        setOnValueChanged(arg0: $FloatConsumer_): $Scroller;
        getClampNormalizedValue(): $Function<number, number>;
        headButton(arg0: $Consumer_<$Button>): $Scroller;
        tailButton(arg0: $Consumer_<$Button>): $Scroller;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set scrollBarSize(value: number);
        get dragging(): boolean;
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
        registerValueListener(arg0: $Consumer_<T>): $ISubscription;
        bindDataSource(arg0: $IDataProvider<T>, arg1: boolean): $BindableUIElement<T>;
        bindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        unbindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
        setValue(arg0: T): $IDataSource<T>;
        bindDataSource(arg0: $IDataProvider<T>): $UIElement;
        unbindObserver(arg0: $IObserver_<T>): $UIElement;
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
        xeiPhantom(): $ItemSlot;
        setItem(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        setItem(arg0: $ItemStack_): $ItemSlot;
        slotStyle(arg0: $Consumer_<$ItemSlot$SlotStyle>): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        getFullTooltipTexts(): $List<$Component>;
        xeiRecipeSlot(): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        updateSlotPosition(): void;
        getSlotStyle(): $ItemSlot$SlotStyle;
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
        selectedTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(): $IGuiTexture;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
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
        menuStyle(arg0: $Consumer_<$TreeList$TreeListStyle>): $TreeList<NODE>;
        expandNode(arg0: NODE): void;
        getNodeUIs(): $BiMap<NODE, $UIElement>;
        reloadList(): $TreeList<NODE>;
        setRoot(arg0: NODE): $TreeList<NODE>;
        getSelected(): $Set<NODE>;
        setSelected(arg0: $Collection_<NODE>, arg1: boolean): $TreeList<NODE>;
        setSelectableNodeFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        setDoubleClickToExpand(arg0: boolean): $TreeList<NODE>;
        setOnSelectedChanged(arg0: $Consumer_<$Set<NODE>>): $TreeList<NODE>;
        static createDraggingOverlay(arg0: number): $IGuiTexture;
        static isMouseOverNodeCenter(arg0: $UIEvent): boolean;
        static optionalIconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        expandNodeAlongPath(arg0: NODE): void;
        static isMouseOverNodeAbove(arg0: $UIEvent): boolean;
        setOnDoubleClickNode(arg0: $Consumer_<NODE>): $TreeList<NODE>;
        static isMouseOverNodeBelow(arg0: $UIEvent): boolean;
        setWidthFitsContent(arg0: boolean): $TreeList<NODE>;
        setSupportMultipleSelection(arg0: boolean): $TreeList<NODE>;
        setOnNodeUICreated(arg0: $BiConsumer_<NODE, $UIElement>): $TreeList<NODE>;
        expandAllNodesIf(arg0: NODE, arg1: $Predicate_<NODE>): void;
        getTreeListStyle(): $TreeList$TreeListStyle;
        setClickToExpand(arg0: boolean): $TreeList<NODE>;
        createNodeUI(arg0: NODE): $UIElement;
        addSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        static textTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setStaticTree(arg0: boolean): $TreeList<NODE>;
        isNodeExpanded(arg0: NODE): boolean;
        collapseNode(arg0: NODE): void;
        setFlattenRoot(arg0: boolean): $TreeList<NODE>;
        static iconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        isWidthFitsContent(): boolean;
        getHoveredNode(): NODE;
        getExpandedNodes(): $Set<NODE>;
        isNodeSelected(arg0: NODE): boolean;
        setNodeUISupplier(arg0: $UIElementProvider_<NODE>): $TreeList<NODE>;
        removeSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: NODE, arg1: boolean);
        constructor(arg0: NODE);
        constructor();
        get nodeUIs(): $BiMap<NODE, $UIElement>;
        set selectableNodeFilter(value: $Predicate_<NODE>);
        set doubleClickToExpand(value: boolean);
        set onSelectedChanged(value: $Consumer_<$Set<NODE>>);
        set onDoubleClickNode(value: $Consumer_<NODE>);
        set supportMultipleSelection(value: boolean);
        set onNodeUICreated(value: $BiConsumer_<NODE, $UIElement>);
        get treeListStyle(): $TreeList$TreeListStyle;
        set clickToExpand(value: boolean);
        set staticTree(value: boolean);
        set flattenRoot(value: boolean);
        get hoveredNode(): NODE;
        get expandedNodes(): $Set<NODE>;
        set nodeUISupplier(value: $UIElementProvider_<NODE>);
    }
    export class $TextArea extends $BindableUIElement<string[]> {
        scale(): number;
        getValue(): string[];
        setValue(arg0: string[]): $TextArea;
        setValue(arg0: string[], arg1: boolean): $TextArea;
        isError(): boolean;
        getLines(): $List<string>;
        setLines(arg0: $List_<string>): $TextArea;
        setLines(arg0: string[], arg1: boolean): $TextArea;
        setTextValidator(arg0: $Predicate_<string[]>): $TextArea;
        hasSelection(): boolean;
        getCursorUnderMouse(arg0: number, arg1: number): $Cursor;
        collapseSelectionToCursor(): void;
        getScrollX(): number;
        getScrollY(): number;
        setSelection(arg0: $Cursor_, arg1: $Cursor_): void;
        getSelStartLine(): number;
        getSelEndLine(): number;
        getTextAreaStyle(): $TextArea$TextAreaStyle;
        getCursorCol(): number;
        drawContentView(arg0: $GUIContext): void;
        getCursorLine(): number;
        pushHistory(): void;
        getFont(): $Font;
        setCursor(arg0: number, arg1: number): void;
        textAreaStyle(arg0: $Consumer_<$TextArea$TextAreaStyle>): $TextArea;
        getSelEndCol(): number;
        getHistoryStack(): $HistoryStack<$TextArea$History>;
        setCharValidator(arg0: $Predicate_<string>): $TextArea;
        setLinesResponder(arg0: $Consumer_<string[]>): $TextArea;
        getSelStartCol(): number;
        cursorPos(): $Cursor;
        isEditable(): boolean;
        lineHeight(): number;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        set textValidator(value: $Predicate_<string[]>);
        get scrollX(): number;
        get scrollY(): number;
        get selStartLine(): number;
        get selEndLine(): number;
        get cursorCol(): number;
        get cursorLine(): number;
        get font(): $Font;
        get selEndCol(): number;
        get historyStack(): $HistoryStack<$TextArea$History>;
        set charValidator(value: $Predicate_<string>);
        set linesResponder(value: $Consumer_<string[]>);
        get selStartCol(): number;
        get editable(): boolean;
    }
    export class $Switch$SwitchStyle extends $Style {
        static init(): void;
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        markTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(): $IGuiTexture;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        holder: $UIElement;
        constructor(arg0: $Switch);
    }
    export class $TreeList$TreeListStyle extends $Style {
        expandIcon(): $IGuiTexture;
        expandIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        collapseIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        collapseIcon(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $TreeList<any>);
    }
    export class $SearchComponent<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $SearchComponent<T>;
        setSelected(arg0: T): $SearchComponent<T>;
        setSelected(arg0: T, arg1: boolean): $SearchComponent<T>;
        show(): void;
        hide(): void;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $SearchComponent<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $SearchComponent<T>;
        getSearchUI(): $SearchComponent$ISearchUI<T>;
        isSearchOnServer(): boolean;
        setSearchUI(arg0: $SearchComponent$ISearchUI<T>): $SearchComponent<T>;
        setSearchOnServer(arg0: $Class<T[]>): $SearchComponent<T>;
        searchStyle(arg0: $Consumer_<$SearchComponent$SearchStyle>): $SearchComponent<T>;
        getSearchStyle(): $SearchComponent$SearchStyle;
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
        xeiPhantom(): $FluidSlot;
        getFluid(): $FluidStack;
        isAllowClickFilled(): boolean;
        getFluidAmountText(): $Component;
        getCapacity(): number;
        slotStyle(arg0: $Consumer_<$FluidSlot$SlotStyle>): $FluidSlot;
        isAllowClickDrained(): boolean;
        setAllowClickDrained(arg0: boolean): $FluidSlot;
        setAllowClickFilled(arg0: boolean): $FluidSlot;
        setFluid(arg0: $FluidStack_): $FluidSlot;
        setFluid(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $FluidSlot;
        getFullTooltipTexts(): $List<$Component>;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $FluidSlot;
        xeiRecipeSlot(): $FluidSlot;
        getSlotStyle(): $FluidSlot$SlotStyle;
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
        setListOnly(): $TagField;
        setTagValidator(arg0: $Predicate_<$Tag>): $TagField;
        setTagResponder(arg0: $Consumer_<$Tag>): $TagField;
        setCompoundTagOnly(): $TagField;
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
        addPreIcon(arg0: $IGuiTexture_): $Button;
        enableText(): $Button;
        setOnClick(arg0: $UIEventListener_): $Button;
        noText(): $Button;
        setText(arg0: $Component_): $Button;
        addPostIcon(arg0: $IGuiTexture_): $Button;
        buttonStyle(arg0: $Consumer_<$Button$ButtonStyle>): $Button;
        getButtonStyle(): $Button$ButtonStyle;
        setOnServerClick(arg0: $UIEventListener_): $Button;
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
        allowZoom(arg0: boolean): $GraphView$GraphViewStyle;
        allowZoom(): boolean;
        allowPan(): boolean;
        allowPan(arg0: boolean): $GraphView$GraphViewStyle;
        gridSize(): number;
        gridSize(arg0: number): $GraphView$GraphViewStyle;
        minScale(arg0: number): $GraphView$GraphViewStyle;
        minScale(): number;
        maxScale(arg0: number): $GraphView$GraphViewStyle;
        maxScale(): number;
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
        setListOnly(): $StructuredTagEditor;
        setTagValidator(arg0: $Predicate_<$Tag>): $StructuredTagEditor;
        setTagResponder(arg0: $Consumer_<$Tag>): $StructuredTagEditor;
        setCompoundTagOnly(): $StructuredTagEditor;
        setAny(): $StructuredTagEditor;
        static removeByteArrayElement(arg0: $ByteArrayTag, arg1: number): $ByteArrayTag;
        static insertLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static insertIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static removeIntArrayElement(arg0: $IntArrayTag, arg1: number): $IntArrayTag;
        static insertByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static removeLongArrayElement(arg0: $LongArrayTag, arg1: number): $LongArrayTag;
        static changeListElementType(arg0: $ListTag_, arg1: $StructuredTagEditor$TagKind_): $ListTag;
        static setLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static setByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static renameCompoundKey(arg0: $CompoundTag_, arg1: string, arg2: string): boolean;
        setRootTypeFilter(arg0: $Predicate_<$StructuredTagEditor$TagKind>): $StructuredTagEditor;
        static setIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static convertTag(arg0: $Tag_, arg1: $StructuredTagEditor$TagKind_): $Tag;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        set tagValidator(value: $Predicate_<$Tag>);
        set tagResponder(value: $Consumer_<$Tag>);
        set rootTypeFilter(value: $Predicate_<$StructuredTagEditor$TagKind>);
    }
    export class $ItemSlot$SlotStyle extends $Style {
        isPlayerSlot(arg0: boolean): $ItemSlot$SlotStyle;
        isPlayerSlot(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        slotOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        showItemTooltips(): boolean;
        showItemTooltips(arg0: boolean): $ItemSlot$SlotStyle;
        acceptQuickMove(arg0: boolean): $ItemSlot$SlotStyle;
        acceptQuickMove(): boolean;
        quickMovePriority(arg0: number): $ItemSlot$SlotStyle;
        quickMovePriority(): number;
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
        menuStyle(arg0: $Consumer_<$Menu$MenuStyle>): $Menu<K, $CompoundTag>;
        getNodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        setAutoClose(arg0: boolean): $Menu<K, $CompoundTag>;
        setOnClose(arg0: $Runnable_): $Menu<K, $CompoundTag>;
        setOnNodeClicked(arg0: $Consumer_<$ITreeNode<K, $CompoundTag>>): $Menu<K, $CompoundTag>;
        setHoverTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setUiProvider(arg0: $UIElementProvider_<K>): $Menu<K, $CompoundTag>;
        getMenuStyle(): $Menu$MenuStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        root: $ITreeNode<K, $CompoundTag>;
        constructor(arg0: $ITreeNode<K, $CompoundTag_>);
        constructor(arg0: $ITreeNode<K, $CompoundTag_>, arg1: $UIElementProvider_<K>);
        get nodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        set autoClose(value: boolean);
        set onClose(value: $Runnable_);
        set onNodeClicked(value: $Consumer_<$ITreeNode<K, $CompoundTag>>);
        set hoverTextureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
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
        setAutoClose(arg0: boolean): $Dialog;
        setOnClose(arg0: $Runnable_): $Dialog;
        windowMode(arg0: number, arg1: number, arg2: number, arg3: number): $Dialog;
        windowMode(arg0: number, arg1: number): $Dialog;
        addContent(arg0: $UIElement): $Dialog;
        setTitle(arg0: string): $Dialog;
        show(arg0: $UIElement): $Dialog;
        show(arg0: $ModularUI): $Dialog;
        addButton(arg0: $UIElement): $Dialog;
        static showNotification(arg0: string, arg1: number): $Dialog;
        static showNotification(arg0: string, arg1: string, arg2: $Runnable_): $Dialog;
        setClickOutsideClose(arg0: boolean): $Dialog;
        static suffixFilter(...arg0: string[]): $Predicate<$FileNode>;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: $Consumer_<$File>): $Dialog;
        static showCancelableCheck(arg0: string, arg1: string, arg2: $BooleanConsumer_, arg3: $Runnable_): $Dialog;
        allowInteraction(): $Dialog;
        darkenBackground(): $Dialog;
        static stringEditorDialog(arg0: string, arg1: string, arg2: $Predicate_<string>, arg3: $Consumer_<string>): $Dialog;
        static showCheckBox(arg0: string, arg1: string, arg2: $BooleanConsumer_): $Dialog;
        titleBar: $UIElement;
        static CODEC: $Codec<$UIElement>;
        overlay: $UIElement;
        contentContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        buttonContainer: $UIElement;
        constructor();
        set autoClose(value: boolean);
        set onClose(value: $Runnable_);
        set title(value: string);
        set clickOutsideClose(value: boolean);
    }
    export class $TabView extends $UIElement {
        clear(): $TabView;
        removeTab(arg0: $Tab): $TabView;
        setOnTabSelected(arg0: $Consumer_<$Tab>): $TabView;
        tabHeaderContainer(arg0: $Consumer_<$UIElement>): $TabView;
        getTabContents(): $BiMap<$Tab, $UIElement>;
        getSelectedTab(): $Tab;
        tabScroller(arg0: $Consumer_<$ScrollerView>): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement, arg2: number): $TabView;
        selectTab(arg0: $Tab): $TabView;
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
        getRange(): number;
        getParticleManager(): $ParticleManager;
        getCenter(): $Vector3f;
        useCacheBuffer(): $Scene;
        useCacheBuffer(arg0: boolean): $Scene;
        renderBlockOverLay(arg0: $WorldSceneRenderer): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number, arg3: number): void;
        setClipContext(arg0: $ClipContext$Block_, arg1: $ClipContext$Fluid_): $Scene;
        needCompileCache(): void;
        setOrthoRange(arg0: number): $Scene;
        syncCompile(): $Scene;
        syncCompile(arg0: boolean): $Scene;
        isRenderSelect(): boolean;
        isIntractable(): boolean;
        setTickWorld(arg0: boolean): $Scene;
        getDummyWorld(): $TrackedDummyWorld;
        isAllowXEILookup(): boolean;
        getLastHoverItem(): $ItemStack;
        setScalable(arg0: boolean): $Scene;
        setAllowXEILookup(arg0: boolean): $Scene;
        setDraggable(arg0: boolean): $Scene;
        isDraggable(): boolean;
        getClipFluid(): $ClipContext$Fluid;
        isAutoReleased(): boolean;
        getRotationPitch(): number;
        setIntractable(arg0: boolean): $Scene;
        setOnSelected(arg0: $BiConsumer_<$BlockPos, $Direction>): $Scene;
        isRenderFacing(): boolean;
        getClipBlock(): $ClipContext$Block;
        isSyncCompile(): boolean;
        isTickWorld(): boolean;
        getRotationYaw(): number;
        getOnSelected(): $BiConsumer<$BlockPos, $Direction>;
        getRenderer(): $WorldSceneRenderer;
        isDragging(): boolean;
        setCenter(arg0: $Vector3f): $Scene;
        setRenderSelect(arg0: boolean): $Scene;
        setRenderFacing(arg0: boolean): $Scene;
        createScene(arg0: $Level_, arg1: boolean, arg2: $Size): $Scene;
        createScene(arg0: $Level_): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook, arg2: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $Scene;
        getZoom(): number;
        setBeforeWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        releaseRendererResource(): void;
        setAfterWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        setCameraYawAndPitch(arg0: number, arg1: number): $Scene;
        setCameraYawAndPitchAnima(arg0: number, arg1: number, arg2: number): void;
        isShowHoverBlockTips(): boolean;
        setShowHoverBlockTips(arg0: boolean): $Scene;
        getLastClickPosFace(): $BlockPosFace;
        getLastHoverPosFace(): $BlockPosFace;
        getLastSelectedPosFace(): $BlockPosFace;
        camZoom(): number;
        useOrtho(): $Scene;
        useOrtho(arg0: boolean): $Scene;
        isScalable(): boolean;
        isUseCache(): boolean;
        xeiLookup(): $Scene;
        setZoom(arg0: number): $Scene;
        isUseOrtho(): boolean;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get range(): number;
        get particleManager(): $ParticleManager;
        set orthoRange(value: number);
        get dummyWorld(): $TrackedDummyWorld;
        get lastHoverItem(): $ItemStack;
        get clipFluid(): $ClipContext$Fluid;
        get autoReleased(): boolean;
        get rotationPitch(): number;
        get clipBlock(): $ClipContext$Block;
        get rotationYaw(): number;
        get renderer(): $WorldSceneRenderer;
        get dragging(): boolean;
        set beforeWorldRender(value: $Consumer_<$Scene>);
        set afterWorldRender(value: $Consumer_<$Scene>);
        get lastClickPosFace(): $BlockPosFace;
        get lastHoverPosFace(): $BlockPosFace;
        get lastSelectedPosFace(): $BlockPosFace;
        get useCache(): boolean;
    }
    export class $ScrollerView$ScrollerViewStyle extends $Style {
        mode(): $ScrollerMode;
        mode(arg0: $ScrollerMode_): $ScrollerView$ScrollerViewStyle;
        static init(): void;
        adaptiveHeight(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        adaptiveHeight(): boolean;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        adaptiveWidth(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        adaptiveWidth(): boolean;
        scrollerViewMargin(): number;
        minScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(): number;
        maxScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(): number;
        scrollerViewStyle(arg0: number): $ScrollerView$ScrollerViewStyle;
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
        viewMode(): $ScrollerMode;
        viewMode(arg0: $ScrollerMode_): $TextArea$TextAreaStyle;
        errorColor(): number;
        errorColor(arg0: number): $TextArea$TextAreaStyle;
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextArea$TextAreaStyle;
        textColor(): number;
        textColor(arg0: number): $TextArea$TextAreaStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        placeholder(arg0: $Component_): $TextArea$TextAreaStyle;
        placeholder(): $Component;
        focusOverlay(arg0: $IGuiTexture_): $TextArea$TextAreaStyle;
        focusOverlay(): $IGuiTexture;
        cursorColor(arg0: number): $TextArea$TextAreaStyle;
        cursorColor(): number;
        scrollerViewMargin(): number;
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
        getTextStyle(): $TextElement$TextStyle;
        recompute(): void;
        getFont(): $Font;
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
        setOn(arg0: boolean): $Switch;
        setOn(arg0: boolean, arg1: boolean): $Switch;
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
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $TextElement$TextStyle extends $Style {
        static init(): void;
        textWrap(): $TextWrap;
        textWrap(arg0: $TextWrap_): $TextElement$TextStyle;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextElement$TextStyle;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextElement$TextStyle;
        fontSize(arg0: number): $TextElement$TextStyle;
        fontSize(): number;
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextElement$TextStyle;
        textColor(arg0: number): $TextElement$TextStyle;
        textColor(): number;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $TextElement$TextStyle;
        rollSpeed(arg0: number): $TextElement$TextStyle;
        rollSpeed(): number;
        adaptiveWidth(arg0: boolean): $TextElement$TextStyle;
        adaptiveWidth(): boolean;
        textAlignVertical(arg0: $Vertical_): $TextElement$TextStyle;
        textAlignVertical(): $Vertical;
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
        enableText(): $Toggle;
        setOn(arg0: boolean): $Toggle;
        setOn(arg0: boolean, arg1: boolean): $Toggle;
        markIcon(arg0: $Consumer_<$UIElement>): $Toggle;
        noText(): $Toggle;
        setToggleGroup(arg0: $Toggle$ToggleGroup): $Toggle;
        toggleLabel(arg0: $Consumer_<$Label>): $Toggle;
        getToggleGroup(): $Toggle$ToggleGroup;
        toggleButton(arg0: $Consumer_<$Button>): $Toggle;
        getToggleStyle(): $Toggle$ToggleStyle;
        toggleStyle(arg0: $Consumer_<$Toggle$ToggleStyle>): $Toggle;
        setOnToggleChanged(arg0: $BooleanConsumer_): $Toggle;
        setText(arg0: $Component_): $Toggle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onToggleChanged(value: $BooleanConsumer_);
    }
    export class $Toggle$ToggleGroup implements $IPersistedSerializable, $IConfigurable {
        getCurrentToggle(): $Toggle;
        setAllowEmpty(arg0: boolean): $Toggle$ToggleGroup;
        getToggles(): $List<$Toggle>;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        afterDeserialize(): void;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        beforeDeserialize(): void;
        afterSerialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        createHistoryRecorder(): $IConfigurableHistory;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        get currentToggle(): $Toggle;
        set allowEmpty(value: boolean);
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
        getBorderSize(): number;
        setPercentage(arg0: number): $SplitView;
        getMinPercentage(): number;
        getMaxPercentage(): number;
        getPercentage(): number;
        setMinPercentage(arg0: number): $SplitView;
        setMaxPercentage(arg0: number): $SplitView;
        setBorderSize(arg0: number): $SplitView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu$MenuStyle extends $Style {
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeHoverTexture(): $IGuiTexture;
        leafTexture(): $IGuiTexture;
        leafTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafHoverTexture(): $IGuiTexture;
        leafHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
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
        setProgress(arg0: number): $ProgressBar;
        setMaxValue(arg0: number): $ProgressBar;
        setMinValue(arg0: number): $ProgressBar;
        getNormalizedValue(): number;
        getNormalizedValue(arg0: number): number;
        setRange(arg0: number, arg1: number): $ProgressBar;
        bindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        unbindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        getProgressBarStyle(): $ProgressBar$ProgressBarStyle;
        progressBarStyle(arg0: $Consumer_<$ProgressBar$ProgressBarStyle>): $ProgressBar;
        barContainer(arg0: $Consumer_<$UIElement>): $ProgressBar;
        bind(arg0: $IBinding<number>): $UIElement;
        unbind(arg0: $IBinding<number>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        barBackground: $UIElement;
        constructor();
        set progress(value: number);
    }
    export class $Selector<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $Selector<T>;
        setSelected(arg0: T, arg1: boolean): $Selector<T>;
        setSelected(arg0: T): $Selector<T>;
        getCandidates(): $List<T>;
        show(): void;
        hide(): void;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $Selector<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $Selector<T>;
        selectorStyle(arg0: $Consumer_<$Selector$SelectorStyle>): $Selector<T>;
        getSelectorStyle(): $Selector$SelectorStyle;
        setCandidates(arg0: $List_<T>): $Selector<T>;
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
        getHistoryStack(): $IHistoryStack;
        getInspectedConfigurable(): $IConfigurable;
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
