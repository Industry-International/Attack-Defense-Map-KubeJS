import { $Serializable, $Reader, $InputStream, $Writer, $OutputStream } from "@package/java/io";
import { $TextUI } from "@package/javax/swing/plaf";
import { $CaretListener_, $UndoableEditListener_, $DocumentListener, $CaretListener, $DocumentEvent, $ChangeListener_ } from "@package/javax/swing/event";
import { $Enumeration } from "@package/java/util";
import { $Accessible } from "@package/javax/accessibility";
import { $Point2D, $Rectangle2D } from "@package/java/awt/geom";
import { $CharacterIterator, $MessageFormat } from "@package/java/text";
import { $Printable } from "@package/java/awt/print";
import { $IntStream } from "@package/java/util/stream";
import { $Point, $Color, $Dimension, $Shape, $Container, $Insets, $Graphics, $Rectangle } from "@package/java/awt";
import { $CharSequence, $Cloneable, $Runnable_, $Object } from "@package/java/lang";
import { $PrintRequestAttributeSet } from "@package/javax/print/attribute";
import { $DropMode, $KeyStroke, $Scrollable, $DropMode_, $TransferHandler$DropLocation, $SwingConstants, $JComponent, $JEditorPane, $Action } from "@package/javax/swing";
import { $PrintService } from "@package/javax/print";

declare module "@package/javax/swing/text" {
    export class $Highlighter$Highlight {
    }
    export interface $Highlighter$Highlight {
        getPainter(): $Highlighter$HighlightPainter;
        getStartOffset(): number;
        getEndOffset(): number;
        get painter(): $Highlighter$HighlightPainter;
        get startOffset(): number;
        get endOffset(): number;
    }
    export class $NavigationFilter {
        setDot(arg0: $NavigationFilter$FilterBypass, arg1: number, arg2: $Position$Bias): void;
        moveDot(arg0: $NavigationFilter$FilterBypass, arg1: number, arg2: $Position$Bias): void;
        getNextVisualPositionFrom(arg0: $JTextComponent, arg1: number, arg2: $Position$Bias, arg3: number, arg4: $Position$Bias[]): number;
        constructor();
    }
    export class $Element {
    }
    export interface $Element {
        getName(): string;
        getAttributes(): $AttributeSet;
        isLeaf(): boolean;
        getElement(arg0: number): $Element;
        getDocument(): $Document;
        getElementIndex(arg0: number): number;
        getElementCount(): number;
        getStartOffset(): number;
        getEndOffset(): number;
        getParentElement(): $Element;
        get name(): string;
        get attributes(): $AttributeSet;
        get leaf(): boolean;
        get document(): $Document;
        get elementCount(): number;
        get startOffset(): number;
        get endOffset(): number;
        get parentElement(): $Element;
    }
    export class $Position {
    }
    export interface $Position {
        getOffset(): number;
        get offset(): number;
    }
    /**
     * Values that may be interpreted as {@link $Position}.
     */
    export type $Position_ = (() => number);
    export class $Keymap {
    }
    export interface $Keymap {
        getName(): string;
        getDefaultAction(): $Action;
        setDefaultAction(arg0: $Action): void;
        addActionForKeyStroke(arg0: $KeyStroke, arg1: $Action): void;
        getAction(arg0: $KeyStroke): $Action;
        getBoundKeyStrokes(): $KeyStroke[];
        getBoundActions(): $Action[];
        getKeyStrokesForAction(arg0: $Action): $KeyStroke[];
        isLocallyDefined(arg0: $KeyStroke): boolean;
        removeKeyStrokeBinding(arg0: $KeyStroke): void;
        removeBindings(): void;
        getResolveParent(): $Keymap;
        setResolveParent(arg0: $Keymap): void;
        get name(): string;
        get boundKeyStrokes(): $KeyStroke[];
        get boundActions(): $Action[];
    }
    export class $Caret {
    }
    export interface $Caret {
        isVisible(): boolean;
        getBlinkRate(): number;
        setBlinkRate(arg0: number): void;
        install(arg0: $JTextComponent): void;
        paint(arg0: $Graphics): void;
        removeChangeListener(arg0: $ChangeListener_): void;
        deinstall(arg0: $JTextComponent): void;
        setDot(arg0: number): void;
        moveDot(arg0: number): void;
        getMark(): number;
        getDot(): number;
        addChangeListener(arg0: $ChangeListener_): void;
        isSelectionVisible(): boolean;
        setSelectionVisible(arg0: boolean): void;
        setMagicCaretPosition(arg0: $Point): void;
        getMagicCaretPosition(): $Point;
        setVisible(arg0: boolean): void;
        get mark(): number;
    }
    export class $Highlighter {
    }
    export interface $Highlighter {
        install(arg0: $JTextComponent): void;
        paint(arg0: $Graphics): void;
        deinstall(arg0: $JTextComponent): void;
        removeHighlight(arg0: $Object): void;
        removeAllHighlights(): void;
        changeHighlight(arg0: $Object, arg1: number, arg2: number): void;
        getHighlights(): $Highlighter$Highlight[];
        addHighlight(arg0: number, arg1: number, arg2: $Highlighter$HighlightPainter_): $Object;
        get highlights(): $Highlighter$Highlight[];
    }
    export class $NavigationFilter$FilterBypass {
        getCaret(): $Caret;
        setDot(arg0: number, arg1: $Position$Bias): void;
        moveDot(arg0: number, arg1: $Position$Bias): void;
        get caret(): $Caret;
    }
    export class $EditorKit implements $Cloneable, $Serializable {
        clone(): $Object;
        write(arg0: $Writer, arg1: $Document, arg2: number, arg3: number): void;
        write(arg0: $OutputStream, arg1: $Document, arg2: number, arg3: number): void;
        read(arg0: $InputStream, arg1: $Document, arg2: number): void;
        read(arg0: $Reader, arg1: $Document, arg2: number): void;
        getActions(): $Action[];
        getContentType(): string;
        createDefaultDocument(): $Document;
        getViewFactory(): $ViewFactory;
        createCaret(): $Caret;
        install(arg0: $JEditorPane): void;
        deinstall(arg0: $JEditorPane): void;
        constructor();
        get actions(): $Action[];
        get contentType(): string;
        get viewFactory(): $ViewFactory;
    }
    export class $Segment implements $Cloneable, $CharacterIterator, $CharSequence {
        length(): number;
        clone(): $Object;
        charAt(arg0: number): string;
        next(): string;
        subSequence(arg0: number, arg1: number): $CharSequence;
        last(): string;
        first(): string;
        current(): string;
        previous(): string;
        getIndex(): number;
        getBeginIndex(): number;
        getEndIndex(): number;
        setIndex(arg0: number): string;
        setPartialReturn(arg0: boolean): void;
        isPartialReturn(): boolean;
        isEmpty(): boolean;
        codePoints(): $IntStream;
        chars(): $IntStream;
        offset: number;
        array: string[];
        count: number;
        constructor();
        constructor(arg0: string[], arg1: number, arg2: number);
        get beginIndex(): number;
        get endIndex(): number;
        get empty(): boolean;
    }
    export class $JTextComponent extends $JComponent implements $Scrollable, $Accessible {
        write(arg0: $Writer): void;
        read(arg0: $Reader, arg1: $Object): void;
        getActions(): $Action[];
        print(): boolean;
        print(arg0: $MessageFormat, arg1: $MessageFormat, arg2: boolean, arg3: $PrintService, arg4: $PrintRequestAttributeSet, arg5: boolean): boolean;
        print(arg0: $MessageFormat, arg1: $MessageFormat): boolean;
        copy(): void;
        getText(): string;
        getText(arg0: number, arg1: number): string;
        setText(arg0: string): void;
        getDocument(): $Document;
        select(arg0: number, arg1: number): void;
        setCaretPosition(arg0: number): void;
        moveCaretPosition(arg0: number): void;
        getPrintable(arg0: $MessageFormat, arg1: $MessageFormat): $Printable;
        static getKeymap(arg0: string): $Keymap;
        getKeymap(): $Keymap;
        getCaret(): $Caret;
        setCaret(arg0: $Caret): void;
        addCaretListener(arg0: $CaretListener_): void;
        removeCaretListener(arg0: $CaretListener_): void;
        getCaretListeners(): $CaretListener[];
        getMargin(): $Insets;
        setNavigationFilter(arg0: $NavigationFilter): void;
        getNavigationFilter(): $NavigationFilter;
        setHighlighter(arg0: $Highlighter): void;
        setKeymap(arg0: $Keymap): void;
        static removeKeymap(arg0: string): $Keymap;
        static loadKeymap(arg0: $Keymap, arg1: $JTextComponent$KeyBinding[], arg2: $Action[]): void;
        getCaretColor(): $Color;
        setCaretColor(arg0: $Color): void;
        setSelectionColor(arg0: $Color): void;
        getSelectedTextColor(): $Color;
        setSelectedTextColor(arg0: $Color): void;
        getDisabledTextColor(): $Color;
        setDisabledTextColor(arg0: $Color): void;
        setFocusAccelerator(arg0: string): void;
        getFocusAccelerator(): string;
        getCaretPosition(): number;
        setSelectionStart(arg0: number): void;
        setSelectionEnd(arg0: number): void;
        setMargin(arg0: $Insets): void;
        setDragEnabled(arg0: boolean): void;
        getDragEnabled(): boolean;
        setDropMode(arg0: $DropMode_): void;
        getDropMode(): $DropMode;
        getDropLocation(): $JTextComponent$DropLocation;
        getPreferredScrollableViewportSize(): $Dimension;
        getScrollableUnitIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableBlockIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableTracksViewportWidth(): boolean;
        getScrollableTracksViewportHeight(): boolean;
        setDocument(arg0: $Document): void;
        /**
         * @deprecated
         */
        viewToModel(arg0: $Point): number;
        static addKeymap(arg0: string, arg1: $Keymap): $Keymap;
        /**
         * @deprecated
         */
        modelToView(arg0: number): $Rectangle;
        modelToView2D(arg0: number): $Rectangle2D;
        viewToModel2D(arg0: $Point2D): number;
        getSelectionEnd(): number;
        getSelectionStart(): number;
        getHighlighter(): $Highlighter;
        cut(): void;
        paste(): void;
        selectAll(): void;
        setEditable(arg0: boolean): void;
        replaceSelection(arg0: string): void;
        getSelectedText(): string;
        isEditable(): boolean;
        getSelectionColor(): $Color;
        setUI(arg0: $TextUI): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static FOCUS_ACCELERATOR_KEY: string;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static DEFAULT_KEYMAP: string;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor();
        get actions(): $Action[];
        get caretListeners(): $CaretListener[];
        get dropLocation(): $JTextComponent$DropLocation;
        get preferredScrollableViewportSize(): $Dimension;
        get scrollableTracksViewportWidth(): boolean;
        get scrollableTracksViewportHeight(): boolean;
        get selectedText(): string;
        set UI(value: $TextUI);
    }
    export class $JTextComponent$DropLocation extends $TransferHandler$DropLocation {
        getIndex(): number;
        getBias(): $Position$Bias;
        get index(): number;
        get bias(): $Position$Bias;
    }
    export class $Highlighter$HighlightPainter {
    }
    export interface $Highlighter$HighlightPainter {
        paint(arg0: $Graphics, arg1: number, arg2: number, arg3: $Shape, arg4: $JTextComponent): void;
    }
    /**
     * Values that may be interpreted as {@link $Highlighter$HighlightPainter}.
     */
    export type $Highlighter$HighlightPainter_ = ((arg0: $Graphics, arg1: number, arg2: number, arg3: $Shape, arg4: $JTextComponent) => void);
    export class $JTextComponent$KeyBinding {
        key: $KeyStroke;
        actionName: string;
        constructor(arg0: $KeyStroke, arg1: string);
    }
    export class $Position$Bias {
        static Backward: $Position$Bias;
        static Forward: $Position$Bias;
    }
    export class $View implements $SwingConstants {
        remove(arg0: number): void;
        append(arg0: $View): void;
        insert(arg0: number, arg1: $View): void;
        replace(arg0: number, arg1: number, arg2: $View[]): void;
        getParent(): $View;
        getAttributes(): $AttributeSet;
        removeAll(): void;
        setParent(arg0: $View): void;
        setSize(arg0: number, arg1: number): void;
        getElement(): $Element;
        getDocument(): $Document;
        isVisible(): boolean;
        getView(arg0: number): $View;
        getContainer(): $Container;
        getAlignment(arg0: number): number;
        getViewFactory(): $ViewFactory;
        getResizeWeight(arg0: number): number;
        getPreferredSpan(arg0: number): number;
        preferenceChanged(arg0: $View, arg1: boolean, arg2: boolean): void;
        getViewCount(): number;
        getViewIndex(arg0: number, arg1: $Position$Bias): number;
        getViewIndex(arg0: number, arg1: number, arg2: $Shape): number;
        getChildAllocation(arg0: number, arg1: $Shape): $Shape;
        getMinimumSpan(arg0: number): number;
        getMaximumSpan(arg0: number): number;
        breakView(arg0: number, arg1: number, arg2: number, arg3: number): $View;
        getBreakWeight(arg0: number, arg1: number, arg2: number): number;
        paint(arg0: $Graphics, arg1: $Shape): void;
        viewToModel(arg0: number, arg1: number, arg2: $Shape, arg3: $Position$Bias[]): number;
        /**
         * @deprecated
         */
        viewToModel(arg0: number, arg1: number, arg2: $Shape): number;
        modelToView(arg0: number, arg1: $Shape, arg2: $Position$Bias): $Shape;
        modelToView(arg0: number, arg1: $Position$Bias, arg2: number, arg3: $Position$Bias, arg4: $Shape): $Shape;
        /**
         * @deprecated
         */
        modelToView(arg0: number, arg1: $Shape): $Shape;
        getGraphics(): $Graphics;
        getNextVisualPositionFrom(arg0: number, arg1: $Position$Bias, arg2: $Shape, arg3: number, arg4: $Position$Bias[]): number;
        getStartOffset(): number;
        getEndOffset(): number;
        createFragment(arg0: number, arg1: number): $View;
        getToolTipText(arg0: number, arg1: number, arg2: $Shape): string;
        insertUpdate(arg0: $DocumentEvent, arg1: $Shape, arg2: $ViewFactory_): void;
        removeUpdate(arg0: $DocumentEvent, arg1: $Shape, arg2: $ViewFactory_): void;
        changedUpdate(arg0: $DocumentEvent, arg1: $Shape, arg2: $ViewFactory_): void;
        static ForcedBreakWeight: number;
        static BadBreakWeight: number;
        static GoodBreakWeight: number;
        static X_AXIS: number;
        static ExcellentBreakWeight: number;
        static Y_AXIS: number;
        constructor(arg0: $Element);
        get attributes(): $AttributeSet;
        get element(): $Element;
        get document(): $Document;
        get visible(): boolean;
        get container(): $Container;
        get viewFactory(): $ViewFactory;
        get viewCount(): number;
        get graphics(): $Graphics;
        get startOffset(): number;
        get endOffset(): number;
    }
    export class $Document {
        static TitleProperty: string;
        static StreamDescriptionProperty: string;
    }
    export interface $Document {
        remove(arg0: number, arg1: number): void;
        getProperty(arg0: $Object): $Object;
        getLength(): number;
        getText(arg0: number, arg1: number): string;
        getText(arg0: number, arg1: number, arg2: $Segment): void;
        createPosition(arg0: number): $Position;
        render(arg0: $Runnable_): void;
        getDefaultRootElement(): $Element;
        removeDocumentListener(arg0: $DocumentListener): void;
        addDocumentListener(arg0: $DocumentListener): void;
        putProperty(arg0: $Object, arg1: $Object): void;
        addUndoableEditListener(arg0: $UndoableEditListener_): void;
        removeUndoableEditListener(arg0: $UndoableEditListener_): void;
        getRootElements(): $Element[];
        getEndPosition(): $Position;
        getStartPosition(): $Position;
        insertString(arg0: number, arg1: string, arg2: $AttributeSet): void;
        get length(): number;
        get defaultRootElement(): $Element;
        get rootElements(): $Element[];
        get endPosition(): $Position;
        get startPosition(): $Position;
    }
    export class $ViewFactory {
    }
    export interface $ViewFactory {
        create(arg0: $Element): $View;
    }
    /**
     * Values that may be interpreted as {@link $ViewFactory}.
     */
    export type $ViewFactory_ = ((arg0: $Element) => $View);
    export class $AttributeSet {
        static ResolveAttribute: $Object;
        static NameAttribute: $Object;
    }
    export interface $AttributeSet {
        isDefined(arg0: $Object): boolean;
        getAttribute(arg0: $Object): $Object;
        isEqual(arg0: $AttributeSet): boolean;
        getAttributeCount(): number;
        copyAttributes(): $AttributeSet;
        getResolveParent(): $AttributeSet;
        containsAttributes(arg0: $AttributeSet): boolean;
        containsAttribute(arg0: $Object, arg1: $Object): boolean;
        getAttributeNames(): $Enumeration<never>;
        get attributeCount(): number;
        get resolveParent(): $AttributeSet;
        get attributeNames(): $Enumeration<never>;
    }
}
