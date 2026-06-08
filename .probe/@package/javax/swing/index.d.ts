import { $InputStream, $Serializable } from "@package/java/io";
import { $MenuItemUI, $ListUI, $ButtonUI, $MenuBarUI, $RootPaneUI, $ToolTipUI, $ComponentUI, $PopupMenuUI, $ViewportUI, $ScrollBarUI, $ScrollPaneUI } from "@package/javax/swing/plaf";
import { $Transferable, $DataFlavor, $Clipboard } from "@package/java/awt/datatransfer";
import { $VetoableChangeListener_, $PropertyChangeListener_, $VetoableChangeListener } from "@package/java/beans";
import { $JTextComponent, $Position$Bias, $EditorKit, $Document } from "@package/javax/swing/text";
import { $MenuKeyEvent, $MenuDragMouseEvent, $ListSelectionListener_, $ListSelectionListener, $ListDataListener, $HyperlinkEvent, $MenuListener, $HyperlinkListener, $ChangeListener, $MenuDragMouseListener, $MenuKeyListener, $PopupMenuListener, $AncestorListener, $ChangeListener_ } from "@package/javax/swing/event";
import { $Locale, $List, $Vector } from "@package/java/util";
import { $Accessible } from "@package/javax/accessibility";
import { $Border } from "@package/javax/swing/border";
import { $URL } from "@package/java/net";
import { $ItemListener, $ItemListener_, $ActionListener_, $MouseEvent, $AdjustmentListener_, $ActionListener, $KeyEvent, $InputEvent, $AdjustmentListener } from "@package/java/awt/event";
import { $Color, $Dimension, $Container, $AWTKeyStroke, $Point, $Adjustable, $Component, $ItemSelectable, $Insets, $Image, $Graphics, $Rectangle } from "@package/java/awt";
import { $Enum, $ClassLoader, $Object } from "@package/java/lang";
export * as plaf from "@package/javax/swing/plaf";
export * as event from "@package/javax/swing/event";
export * as text from "@package/javax/swing/text";
export * as undo from "@package/javax/swing/undo";
export * as border from "@package/javax/swing/border";

declare module "@package/javax/swing" {
    export class $JList$DropLocation extends $TransferHandler$DropLocation {
        getIndex(): number;
        isInsert(): boolean;
        get index(): number;
        get insert(): boolean;
    }
    export class $SwingConstants {
        static NORTH_WEST: number;
        static LEFT: number;
        static WEST: number;
        static TRAILING: number;
        static BOTTOM: number;
        static LEADING: number;
        static PREVIOUS: number;
        static CENTER: number;
        static TOP: number;
        static VERTICAL: number;
        static NORTH: number;
        static NORTH_EAST: number;
        static NEXT: number;
        static RIGHT: number;
        static SOUTH_EAST: number;
        static SOUTH: number;
        static HORIZONTAL: number;
        static SOUTH_WEST: number;
        static EAST: number;
    }
    export interface $SwingConstants {
    }
    export class $MenuElement {
    }
    export interface $MenuElement {
        processKeyEvent(arg0: $KeyEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        processMouseEvent(arg0: $MouseEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        getComponent(): $Component;
        menuSelectionChanged(arg0: boolean): void;
        getSubElements(): $MenuElement[];
        get component(): $Component;
        get subElements(): $MenuElement[];
    }
    export class $ActionMap implements $Serializable {
        remove(arg0: $Object): void;
        size(): number;
        get(arg0: $Object): $Action;
        put(arg0: $Object, arg1: $Action): void;
        clear(): void;
        getParent(): $ActionMap;
        keys(): $Object[];
        setParent(arg0: $ActionMap): void;
        allKeys(): $Object[];
        constructor();
    }
    export class $JButton extends $AbstractButton implements $Accessible {
        isDefaultButton(): boolean;
        isDefaultCapable(): boolean;
        setDefaultCapable(arg0: boolean): void;
        static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
        static ROLLOVER_ICON_CHANGED_PROPERTY: string;
        static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
        static BOTTOM_ALIGNMENT: number;
        static MODEL_CHANGED_PROPERTY: string;
        static SELECTED_ICON_CHANGED_PROPERTY: string;
        static ICON_CHANGED_PROPERTY: string;
        static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
        static FOCUS_PAINTED_CHANGED_PROPERTY: string;
        static WHEN_FOCUSED: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TEXT_CHANGED_PROPERTY: string;
        static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
        static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static PRESSED_ICON_CHANGED_PROPERTY: string;
        static DISABLED_ICON_CHANGED_PROPERTY: string;
        static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static MARGIN_CHANGED_PROPERTY: string;
        static BORDER_PAINTED_CHANGED_PROPERTY: string;
        static CENTER_ALIGNMENT: number;
        static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static UNDEFINED_CONDITION: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static MNEMONIC_CHANGED_PROPERTY: string;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor(arg0: string, arg1: $Icon);
        constructor(arg0: $Action);
        constructor(arg0: string);
        constructor(arg0: $Icon);
        constructor();
        get defaultButton(): boolean;
    }
    export class $BoundedRangeModel {
    }
    export interface $BoundedRangeModel {
        getValue(): number;
        setValue(arg0: number): void;
        getMaximum(): number;
        getMinimum(): number;
        setMinimum(arg0: number): void;
        addChangeListener(arg0: $ChangeListener_): void;
        setMaximum(arg0: number): void;
        setExtent(arg0: number): void;
        getExtent(): number;
        getValueIsAdjusting(): boolean;
        setValueIsAdjusting(arg0: boolean): void;
        setRangeProperties(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        removeChangeListener(arg0: $ChangeListener_): void;
    }
    export class $JTextArea extends $JTextComponent {
        append(arg0: string): void;
        insert(arg0: string, arg1: number): void;
        replaceRange(arg0: string, arg1: number, arg2: number): void;
        setTabSize(arg0: number): void;
        getTabSize(): number;
        getColumns(): number;
        getRows(): number;
        setRows(arg0: number): void;
        getLineCount(): number;
        setLineWrap(arg0: boolean): void;
        getLineWrap(): boolean;
        setWrapStyleWord(arg0: boolean): void;
        getWrapStyleWord(): boolean;
        getLineOfOffset(arg0: number): number;
        getLineStartOffset(arg0: number): number;
        getLineEndOffset(arg0: number): number;
        setColumns(arg0: number): void;
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
        constructor(arg0: $Document, arg1: string, arg2: number, arg3: number);
        constructor(arg0: $Document);
        constructor(arg0: string, arg1: number, arg2: number);
        constructor();
        constructor(arg0: string);
        constructor(arg0: number, arg1: number);
        get lineCount(): number;
    }
    export class $TransferHandler$DropLocation {
        getDropPoint(): $Point;
        get dropPoint(): $Point;
    }
    export class $JMenu extends $JMenuItem implements $Accessible, $MenuElement {
        remove(arg0: $JMenuItem): void;
        insert(arg0: $Action, arg1: number): $JMenuItem;
        insert(arg0: $JMenuItem, arg1: number): $JMenuItem;
        insert(arg0: string, arg1: number): void;
        add(arg0: $Action): $JMenuItem;
        add(arg0: string): $JMenuItem;
        add(arg0: $JMenuItem): $JMenuItem;
        getItem(arg0: number): $JMenuItem;
        getItemCount(): number;
        getDelay(): number;
        getPopupMenu(): $JPopupMenu;
        setPopupMenuVisible(arg0: boolean): void;
        setDelay(arg0: number): void;
        isPopupMenuVisible(): boolean;
        getMenuComponent(arg0: number): $Component;
        getMenuComponentCount(): number;
        getMenuComponents(): $Component[];
        isMenuComponent(arg0: $Component): boolean;
        setMenuLocation(arg0: number, arg1: number): void;
        isTopLevelMenu(): boolean;
        addMenuListener(arg0: $MenuListener): void;
        removeMenuListener(arg0: $MenuListener): void;
        getMenuListeners(): $MenuListener[];
        addSeparator(): void;
        isTearOff(): boolean;
        insertSeparator(arg0: number): void;
        static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
        static ROLLOVER_ICON_CHANGED_PROPERTY: string;
        static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
        static BOTTOM_ALIGNMENT: number;
        static MODEL_CHANGED_PROPERTY: string;
        static SELECTED_ICON_CHANGED_PROPERTY: string;
        static ICON_CHANGED_PROPERTY: string;
        static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
        static FOCUS_PAINTED_CHANGED_PROPERTY: string;
        static WHEN_FOCUSED: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TEXT_CHANGED_PROPERTY: string;
        static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
        static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static PRESSED_ICON_CHANGED_PROPERTY: string;
        static DISABLED_ICON_CHANGED_PROPERTY: string;
        static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static MARGIN_CHANGED_PROPERTY: string;
        static BORDER_PAINTED_CHANGED_PROPERTY: string;
        static CENTER_ALIGNMENT: number;
        static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static UNDEFINED_CONDITION: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static MNEMONIC_CHANGED_PROPERTY: string;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: $Action);
        constructor(arg0: string);
        constructor();
        get itemCount(): number;
        get popupMenu(): $JPopupMenu;
        get menuComponentCount(): number;
        get menuComponents(): $Component[];
        get topLevelMenu(): boolean;
        get menuListeners(): $MenuListener[];
        get tearOff(): boolean;
    }
    export class $DropMode extends $Enum<$DropMode> {
        static values(): $DropMode[];
        static valueOf(arg0: string): $DropMode;
        static INSERT_ROWS: $DropMode;
        static INSERT_COLS: $DropMode;
        static ON_OR_INSERT_COLS: $DropMode;
        static ON_OR_INSERT: $DropMode;
        static INSERT: $DropMode;
        static USE_SELECTION: $DropMode;
        static ON_OR_INSERT_ROWS: $DropMode;
        static ON: $DropMode;
    }
    /**
     * Values that may be interpreted as {@link $DropMode}.
     */
    export type $DropMode_ = "use_selection" | "on" | "insert" | "insert_rows" | "insert_cols" | "on_or_insert" | "on_or_insert_rows" | "on_or_insert_cols";
    export class $JMenuItem extends $AbstractButton implements $Accessible, $MenuElement {
        processKeyEvent(arg0: $KeyEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        processMouseEvent(arg0: $MouseEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        getComponent(): $Component;
        processMenuKeyEvent(arg0: $MenuKeyEvent): void;
        addMenuKeyListener(arg0: $MenuKeyListener): void;
        removeMenuKeyListener(arg0: $MenuKeyListener): void;
        getMenuKeyListeners(): $MenuKeyListener[];
        menuSelectionChanged(arg0: boolean): void;
        getSubElements(): $MenuElement[];
        processMenuDragMouseEvent(arg0: $MenuDragMouseEvent): void;
        getAccelerator(): $KeyStroke;
        addMenuDragMouseListener(arg0: $MenuDragMouseListener): void;
        removeMenuDragMouseListener(arg0: $MenuDragMouseListener): void;
        getMenuDragMouseListeners(): $MenuDragMouseListener[];
        setArmed(arg0: boolean): void;
        isArmed(): boolean;
        setAccelerator(arg0: $KeyStroke): void;
        setUI(arg0: $MenuItemUI): void;
        static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
        static ROLLOVER_ICON_CHANGED_PROPERTY: string;
        static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
        static BOTTOM_ALIGNMENT: number;
        static MODEL_CHANGED_PROPERTY: string;
        static SELECTED_ICON_CHANGED_PROPERTY: string;
        static ICON_CHANGED_PROPERTY: string;
        static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
        static FOCUS_PAINTED_CHANGED_PROPERTY: string;
        static WHEN_FOCUSED: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TEXT_CHANGED_PROPERTY: string;
        static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
        static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static PRESSED_ICON_CHANGED_PROPERTY: string;
        static DISABLED_ICON_CHANGED_PROPERTY: string;
        static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static MARGIN_CHANGED_PROPERTY: string;
        static BORDER_PAINTED_CHANGED_PROPERTY: string;
        static CENTER_ALIGNMENT: number;
        static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static UNDEFINED_CONDITION: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static MNEMONIC_CHANGED_PROPERTY: string;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor(arg0: string, arg1: number);
        constructor(arg0: string, arg1: $Icon);
        constructor(arg0: $Action);
        constructor();
        constructor(arg0: $Icon);
        constructor(arg0: string);
        get component(): $Component;
        get menuKeyListeners(): $MenuKeyListener[];
        get subElements(): $MenuElement[];
        get menuDragMouseListeners(): $MenuDragMouseListener[];
        set UI(value: $MenuItemUI);
    }
    export class $Popup {
        show(): void;
        hide(): void;
    }
    export class $TransferHandler$TransferSupport {
        getComponent(): $Component;
        getSourceDropActions(): number;
        getUserDropAction(): number;
        getDropAction(): number;
        isDataFlavorSupported(arg0: $DataFlavor): boolean;
        setShowDropLocation(arg0: boolean): void;
        setDropAction(arg0: number): void;
        isDrop(): boolean;
        getDataFlavors(): $DataFlavor[];
        getDropLocation(): $TransferHandler$DropLocation;
        getTransferable(): $Transferable;
        constructor(arg0: $Component, arg1: $Transferable);
        get component(): $Component;
        get sourceDropActions(): number;
        get userDropAction(): number;
        set showDropLocation(value: boolean);
        get drop(): boolean;
        get dataFlavors(): $DataFlavor[];
        get dropLocation(): $TransferHandler$DropLocation;
        get transferable(): $Transferable;
    }
    export class $ListModel<E> {
    }
    export interface $ListModel<E> {
        getSize(): number;
        getElementAt(arg0: number): E;
        addListDataListener(arg0: $ListDataListener): void;
        removeListDataListener(arg0: $ListDataListener): void;
        get size(): number;
    }
    export class $MenuSelectionManager {
        processKeyEvent(arg0: $KeyEvent): void;
        processMouseEvent(arg0: $MouseEvent): void;
        setSelectedPath(arg0: $MenuElement[]): void;
        clearSelectedPath(): void;
        isComponentPartOfCurrentMenu(arg0: $Component): boolean;
        componentForPoint(arg0: $Component, arg1: $Point): $Component;
        addChangeListener(arg0: $ChangeListener_): void;
        getSelectedPath(): $MenuElement[];
        getChangeListeners(): $ChangeListener[];
        static defaultManager(): $MenuSelectionManager;
        removeChangeListener(arg0: $ChangeListener_): void;
        constructor();
        get changeListeners(): $ChangeListener[];
    }
    export class $JRootPane extends $JComponent implements $Accessible {
        setDefaultButton(arg0: $JButton): void;
        getGlassPane(): $Component;
        getUI(): $RootPaneUI;
        setUI(arg0: $RootPaneUI): void;
        setGlassPane(arg0: $Component): void;
        setLayeredPane(arg0: $JLayeredPane): void;
        setContentPane(arg0: $Container): void;
        getWindowDecorationStyle(): number;
        setWindowDecorationStyle(arg0: number): void;
        setJMenuBar(arg0: $JMenuBar): void;
        /**
         * @deprecated
         */
        setMenuBar(arg0: $JMenuBar): void;
        getJMenuBar(): $JMenuBar;
        /**
         * @deprecated
         */
        getMenuBar(): $JMenuBar;
        getContentPane(): $Container;
        getLayeredPane(): $JLayeredPane;
        getDefaultButton(): $JButton;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static FILE_CHOOSER_DIALOG: number;
        static FRAME: number;
        static QUESTION_DIALOG: number;
        static UNDEFINED_CONDITION: number;
        static INFORMATION_DIALOG: number;
        static COLOR_CHOOSER_DIALOG: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static PLAIN_DIALOG: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static ERROR_DIALOG: number;
        static NONE: number;
        static WARNING_DIALOG: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor();
    }
    export class $SingleSelectionModel {
    }
    export interface $SingleSelectionModel {
        clearSelection(): void;
        isSelected(): boolean;
        getSelectedIndex(): number;
        setSelectedIndex(arg0: number): void;
        addChangeListener(arg0: $ChangeListener_): void;
        removeChangeListener(arg0: $ChangeListener_): void;
        get selected(): boolean;
    }
    export class $Action {
        static LARGE_ICON_KEY: string;
        static SHORT_DESCRIPTION: string;
        static SELECTED_KEY: string;
        static ACTION_COMMAND_KEY: string;
        static SMALL_ICON: string;
        static LONG_DESCRIPTION: string;
        static ACCELERATOR_KEY: string;
        static MNEMONIC_KEY: string;
        static DEFAULT: string;
        static NAME: string;
        static DISPLAYED_MNEMONIC_INDEX_KEY: string;
    }
    export interface $Action extends $ActionListener {
        getValue(arg0: string): $Object;
        isEnabled(): boolean;
        accept(arg0: $Object): boolean;
        putValue(arg0: string, arg1: $Object): void;
        addPropertyChangeListener(arg0: $PropertyChangeListener_): void;
        removePropertyChangeListener(arg0: $PropertyChangeListener_): void;
        setEnabled(arg0: boolean): void;
    }
    export class $JMenuBar extends $JComponent implements $Accessible, $MenuElement {
        add(arg0: $JMenu): $JMenu;
        processKeyEvent(arg0: $KeyEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        processMouseEvent(arg0: $MouseEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        getComponent(): $Component;
        getComponentIndex(arg0: $Component): number;
        isBorderPainted(): boolean;
        /**
         * @deprecated
         */
        getComponentAtIndex(arg0: number): $Component;
        setBorderPainted(arg0: boolean): void;
        getMargin(): $Insets;
        menuSelectionChanged(arg0: boolean): void;
        getSubElements(): $MenuElement[];
        isSelected(): boolean;
        setMargin(arg0: $Insets): void;
        setSelected(arg0: $Component): void;
        getMenu(arg0: number): $JMenu;
        getSelectionModel(): $SingleSelectionModel;
        setSelectionModel(arg0: $SingleSelectionModel): void;
        getMenuCount(): number;
        setHelpMenu(arg0: $JMenu): void;
        getHelpMenu(): $JMenu;
        getUI(): $MenuBarUI;
        setUI(arg0: $MenuBarUI): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor();
        get component(): $Component;
        get subElements(): $MenuElement[];
        get menuCount(): number;
    }
    export class $ListCellRenderer<E> {
    }
    export interface $ListCellRenderer<E> {
        getListCellRendererComponent(arg0: $JList<E>, arg1: E, arg2: number, arg3: boolean, arg4: boolean): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ListCellRenderer}.
     */
    export type $ListCellRenderer_<E> = ((arg0: $JList<E>, arg1: E, arg2: number, arg3: boolean, arg4: boolean) => $Component);
    export class $JList<E> extends $JComponent implements $Scrollable, $Accessible {
        clearSelection(): void;
        getSelectedIndex(): number;
        setSelectedIndex(arg0: number): void;
        getModel(): $ListModel<E>;
        setModel(arg0: $ListModel<E>): void;
        getValueIsAdjusting(): boolean;
        getCellRenderer(): $ListCellRenderer<E>;
        getPrototypeCellValue(): E;
        locationToIndex(arg0: $Point): number;
        getCellBounds(arg0: number, arg1: number): $Rectangle;
        getLayoutOrientation(): number;
        setSelectedIndices(arg0: number[]): void;
        getSelectionModel(): $ListSelectionModel;
        getSelectedIndices(): number[];
        getAnchorSelectionIndex(): number;
        getLeadSelectionIndex(): number;
        setSelectionInterval(arg0: number, arg1: number): void;
        isSelectedIndex(arg0: number): boolean;
        indexToLocation(arg0: number): $Point;
        addListSelectionListener(arg0: $ListSelectionListener_): void;
        removeListSelectionListener(arg0: $ListSelectionListener_): void;
        setSelectionMode(arg0: number): void;
        getSelectionMode(): number;
        getMinSelectionIndex(): number;
        getMaxSelectionIndex(): number;
        isSelectionEmpty(): boolean;
        addSelectionInterval(arg0: number, arg1: number): void;
        removeSelectionInterval(arg0: number, arg1: number): void;
        setValueIsAdjusting(arg0: boolean): void;
        getSelectedValue(): E;
        ensureIndexIsVisible(arg0: number): void;
        getVisibleRowCount(): number;
        getFixedCellWidth(): number;
        getFixedCellHeight(): number;
        getFirstVisibleIndex(): number;
        setPrototypeCellValue(arg0: E): void;
        setFixedCellWidth(arg0: number): void;
        setFixedCellHeight(arg0: number): void;
        setCellRenderer(arg0: $ListCellRenderer_<E>): void;
        getSelectionForeground(): $Color;
        setSelectionForeground(arg0: $Color): void;
        getSelectionBackground(): $Color;
        setSelectionBackground(arg0: $Color): void;
        setVisibleRowCount(arg0: number): void;
        setLayoutOrientation(arg0: number): void;
        getLastVisibleIndex(): number;
        setDragEnabled(arg0: boolean): void;
        getDragEnabled(): boolean;
        setDropMode(arg0: $DropMode_): void;
        getDropMode(): $DropMode;
        getDropLocation(): $JList$DropLocation;
        getNextMatch(arg0: string, arg1: number, arg2: $Position$Bias): number;
        getListSelectionListeners(): $ListSelectionListener[];
        setSelectionModel(arg0: $ListSelectionModel): void;
        /**
         * @deprecated
         */
        getSelectedValues(): $Object[];
        getSelectedValuesList(): $List<E>;
        setSelectedValue(arg0: $Object, arg1: boolean): void;
        getPreferredScrollableViewportSize(): $Dimension;
        getScrollableUnitIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableBlockIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableTracksViewportWidth(): boolean;
        getScrollableTracksViewportHeight(): boolean;
        setListData(arg0: E[]): void;
        setListData(arg0: $Vector<E>): void;
        getUI(): $ListUI;
        setUI(arg0: $ListUI): void;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static VERTICAL_WRAP: number;
        static UNDEFINED_CONDITION: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static VERTICAL: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static HORIZONTAL_WRAP: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor();
        constructor(arg0: $Vector<E>);
        constructor(arg0: E[]);
        constructor(arg0: $ListModel<E>);
        get anchorSelectionIndex(): number;
        get leadSelectionIndex(): number;
        get minSelectionIndex(): number;
        get maxSelectionIndex(): number;
        get selectionEmpty(): boolean;
        get firstVisibleIndex(): number;
        get lastVisibleIndex(): number;
        get dropLocation(): $JList$DropLocation;
        get listSelectionListeners(): $ListSelectionListener[];
        get selectedValues(): $Object[];
        get selectedValuesList(): $List<E>;
        get preferredScrollableViewportSize(): $Dimension;
        get scrollableTracksViewportWidth(): boolean;
        get scrollableTracksViewportHeight(): boolean;
    }
    export class $JComponent extends $Container implements $Serializable, $TransferHandler$HasGetTransferHandler {
        setOpaque(arg0: boolean): void;
        repaint(arg0: $Rectangle): void;
        setBorder(arg0: $Border): void;
        getBorder(): $Border;
        requestFocus(arg0: boolean): boolean;
        getRootPane(): $JRootPane;
        getInheritsPopupMenu(): boolean;
        getComponentPopupMenu(): $JPopupMenu;
        /**
         * @deprecated
         */
        isManagingFocus(): boolean;
        static getDefaultLocale(): $Locale;
        putClientProperty(arg0: $Object, arg1: $Object): void;
        isOptimizedDrawingEnabled(): boolean;
        static isLightweightComponent(arg0: $Component): boolean;
        /**
         * @deprecated
         */
        getNextFocusableComponent(): $Component;
        /**
         * @deprecated
         */
        setNextFocusableComponent(arg0: $Component): void;
        getClientProperty(arg0: $Object): $Object;
        getInputMap(arg0: number): $InputMap;
        getInputMap(): $InputMap;
        getActionMap(): $ActionMap;
        registerKeyboardAction(arg0: $ActionListener_, arg1: string, arg2: $KeyStroke, arg3: number): void;
        registerKeyboardAction(arg0: $ActionListener_, arg1: $KeyStroke, arg2: number): void;
        setInputMap(arg0: number, arg1: $InputMap): void;
        setActionMap(arg0: $ActionMap): void;
        getToolTipText(arg0: $MouseEvent): string;
        getToolTipText(): string;
        scrollRectToVisible(arg0: $Rectangle): void;
        setAutoscrolls(arg0: boolean): void;
        computeVisibleRect(arg0: $Rectangle): void;
        addVetoableChangeListener(arg0: $VetoableChangeListener_): void;
        removeVetoableChangeListener(arg0: $VetoableChangeListener_): void;
        getVetoableChangeListeners(): $VetoableChangeListener[];
        addAncestorListener(arg0: $AncestorListener): void;
        removeAncestorListener(arg0: $AncestorListener): void;
        getAncestorListeners(): $AncestorListener[];
        paintImmediately(arg0: $Rectangle): void;
        paintImmediately(arg0: number, arg1: number, arg2: number, arg3: number): void;
        firePropertyChange(arg0: string, arg1: number, arg2: number): void;
        firePropertyChange(arg0: string, arg1: boolean, arg2: boolean): void;
        createToolTip(): $JToolTip;
        static setDefaultLocale(arg0: $Locale): void;
        getInsets(arg0: $Insets): $Insets;
        getUIClassID(): string;
        setInheritsPopupMenu(arg0: boolean): void;
        setComponentPopupMenu(arg0: $JPopupMenu): void;
        updateUI(): void;
        getUI(): $ComponentUI;
        isPaintingTile(): boolean;
        isPaintingForPrint(): boolean;
        setRequestFocusEnabled(arg0: boolean): void;
        isRequestFocusEnabled(): boolean;
        grabFocus(): void;
        setVerifyInputWhenFocusTarget(arg0: boolean): void;
        getVerifyInputWhenFocusTarget(): boolean;
        setAlignmentY(arg0: number): void;
        setAlignmentX(arg0: number): void;
        setInputVerifier(arg0: $InputVerifier): void;
        getInputVerifier(): $InputVerifier;
        setDebugGraphicsOptions(arg0: number): void;
        getDebugGraphicsOptions(): number;
        unregisterKeyboardAction(arg0: $KeyStroke): void;
        getRegisteredKeyStrokes(): $KeyStroke[];
        getConditionForKeyStroke(arg0: $KeyStroke): number;
        getActionForKeyStroke(arg0: $KeyStroke): $ActionListener;
        resetKeyboardActions(): void;
        /**
         * @deprecated
         */
        requestDefaultFocus(): boolean;
        setToolTipText(arg0: string): void;
        getToolTipLocation(arg0: $MouseEvent): $Point;
        getPopupLocation(arg0: $MouseEvent): $Point;
        getAutoscrolls(): boolean;
        setTransferHandler(arg0: $TransferHandler): void;
        getTransferHandler(): $TransferHandler;
        getVisibleRect(): $Rectangle;
        getTopLevelAncestor(): $Container;
        setDoubleBuffered(arg0: boolean): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor();
        set opaque(value: boolean);
        get rootPane(): $JRootPane;
        get managingFocus(): boolean;
        get optimizedDrawingEnabled(): boolean;
        get vetoableChangeListeners(): $VetoableChangeListener[];
        get ancestorListeners(): $AncestorListener[];
        get UIClassID(): string;
        get UI(): $ComponentUI;
        get paintingTile(): boolean;
        get paintingForPrint(): boolean;
        set alignmentY(value: number);
        set alignmentX(value: number);
        get registeredKeyStrokes(): $KeyStroke[];
        get visibleRect(): $Rectangle;
        get topLevelAncestor(): $Container;
        set doubleBuffered(value: boolean);
    }
    export class $Scrollable {
    }
    export interface $Scrollable {
        getPreferredScrollableViewportSize(): $Dimension;
        getScrollableUnitIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableBlockIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableTracksViewportWidth(): boolean;
        getScrollableTracksViewportHeight(): boolean;
        get preferredScrollableViewportSize(): $Dimension;
        get scrollableTracksViewportWidth(): boolean;
        get scrollableTracksViewportHeight(): boolean;
    }
    export class $InputVerifier {
        verify(arg0: $JComponent): boolean;
        verifyTarget(arg0: $JComponent): boolean;
        shouldYieldFocus(arg0: $JComponent, arg1: $JComponent): boolean;
        /**
         * @deprecated
         */
        shouldYieldFocus(arg0: $JComponent): boolean;
    }
    export class $JScrollBar extends $JComponent implements $Adjustable, $Accessible {
        getValue(): number;
        setValue(arg0: number): void;
        getMaximum(): number;
        getMinimum(): number;
        setMinimum(arg0: number): void;
        setValues(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getModel(): $BoundedRangeModel;
        setModel(arg0: $BoundedRangeModel): void;
        setMaximum(arg0: number): void;
        setOrientation(arg0: number): void;
        getOrientation(): number;
        getVisibleAmount(): number;
        getValueIsAdjusting(): boolean;
        setValueIsAdjusting(arg0: boolean): void;
        getUnitIncrement(arg0: number): number;
        getUnitIncrement(): number;
        setUnitIncrement(arg0: number): void;
        getBlockIncrement(): number;
        getBlockIncrement(arg0: number): number;
        setBlockIncrement(arg0: number): void;
        setVisibleAmount(arg0: number): void;
        addAdjustmentListener(arg0: $AdjustmentListener_): void;
        removeAdjustmentListener(arg0: $AdjustmentListener_): void;
        getAdjustmentListeners(): $AdjustmentListener[];
        getUI(): $ScrollBarUI;
        setUI(arg0: $ScrollBarUI): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor();
        get adjustmentListeners(): $AdjustmentListener[];
    }
    export class $JPopupMenu extends $JComponent implements $Accessible, $MenuElement {
        insert(arg0: $Action, arg1: number): void;
        insert(arg0: $Component, arg1: number): void;
        add(arg0: string): $JMenuItem;
        add(arg0: $Action): $JMenuItem;
        add(arg0: $JMenuItem): $JMenuItem;
        processKeyEvent(arg0: $KeyEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        isPopupTrigger(arg0: $MouseEvent): boolean;
        processMouseEvent(arg0: $MouseEvent, arg1: $MenuElement[], arg2: $MenuSelectionManager): void;
        pack(): void;
        getLabel(): string;
        getComponent(): $Component;
        setLabel(arg0: string): void;
        isLightWeightPopupEnabled(): boolean;
        setInvoker(arg0: $Component): void;
        setPopupSize(arg0: number, arg1: number): void;
        setPopupSize(arg0: $Dimension): void;
        getComponentIndex(arg0: $Component): number;
        isBorderPainted(): boolean;
        static setDefaultLightWeightPopupEnabled(arg0: boolean): void;
        setLightWeightPopupEnabled(arg0: boolean): void;
        addPopupMenuListener(arg0: $PopupMenuListener): void;
        removePopupMenuListener(arg0: $PopupMenuListener): void;
        getPopupMenuListeners(): $PopupMenuListener[];
        addMenuKeyListener(arg0: $MenuKeyListener): void;
        removeMenuKeyListener(arg0: $MenuKeyListener): void;
        getMenuKeyListeners(): $MenuKeyListener[];
        /**
         * @deprecated
         */
        getComponentAtIndex(arg0: number): $Component;
        setBorderPainted(arg0: boolean): void;
        getMargin(): $Insets;
        menuSelectionChanged(arg0: boolean): void;
        getSubElements(): $MenuElement[];
        getInvoker(): $Component;
        show(arg0: $Component, arg1: number, arg2: number): void;
        setSelected(arg0: $Component): void;
        addSeparator(): void;
        getSelectionModel(): $SingleSelectionModel;
        setSelectionModel(arg0: $SingleSelectionModel): void;
        static getDefaultLightWeightPopupEnabled(): boolean;
        setUI(arg0: $PopupMenuUI): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor(arg0: string);
        constructor();
        get component(): $Component;
        get popupMenuListeners(): $PopupMenuListener[];
        get menuKeyListeners(): $MenuKeyListener[];
        get margin(): $Insets;
        get subElements(): $MenuElement[];
        set selected(value: $Component);
        set UI(value: $PopupMenuUI);
    }
    export class $JViewport extends $JComponent implements $Accessible {
        getViewPosition(): $Point;
        addChangeListener(arg0: $ChangeListener_): void;
        setView(arg0: $Component): void;
        getView(): $Component;
        getChangeListeners(): $ChangeListener[];
        setViewPosition(arg0: $Point): void;
        getExtentSize(): $Dimension;
        setScrollMode(arg0: number): void;
        getScrollMode(): number;
        /**
         * @deprecated
         */
        isBackingStoreEnabled(): boolean;
        /**
         * @deprecated
         */
        setBackingStoreEnabled(arg0: boolean): void;
        getViewSize(): $Dimension;
        setViewSize(arg0: $Dimension): void;
        getViewRect(): $Rectangle;
        toViewCoordinates(arg0: $Point): $Point;
        toViewCoordinates(arg0: $Dimension): $Dimension;
        setExtentSize(arg0: $Dimension): void;
        getUI(): $ViewportUI;
        setUI(arg0: $ViewportUI): void;
        removeChangeListener(arg0: $ChangeListener_): void;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static BACKINGSTORE_SCROLL_MODE: number;
        static UNDEFINED_CONDITION: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static SIMPLE_SCROLL_MODE: number;
        static BLIT_SCROLL_MODE: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor();
        get changeListeners(): $ChangeListener[];
        get viewRect(): $Rectangle;
    }
    export class $InputMap implements $Serializable {
        remove(arg0: $KeyStroke): void;
        size(): number;
        get(arg0: $KeyStroke): $Object;
        put(arg0: $KeyStroke, arg1: $Object): void;
        clear(): void;
        getParent(): $InputMap;
        keys(): $KeyStroke[];
        setParent(arg0: $InputMap): void;
        allKeys(): $KeyStroke[];
        constructor();
    }
    export class $ButtonModel {
    }
    export interface $ButtonModel extends $ItemSelectable {
        setGroup(arg0: $ButtonGroup): void;
        isEnabled(): boolean;
        isSelected(): boolean;
        getGroup(): $ButtonGroup;
        addChangeListener(arg0: $ChangeListener_): void;
        setPressed(arg0: boolean): void;
        isPressed(): boolean;
        setEnabled(arg0: boolean): void;
        setSelected(arg0: boolean): void;
        addActionListener(arg0: $ActionListener_): void;
        getMnemonic(): number;
        setArmed(arg0: boolean): void;
        setRollover(arg0: boolean): void;
        setMnemonic(arg0: number): void;
        removeItemListener(arg0: $ItemListener_): void;
        addItemListener(arg0: $ItemListener_): void;
        isRollover(): boolean;
        isArmed(): boolean;
        getActionCommand(): string;
        removeActionListener(arg0: $ActionListener_): void;
        setActionCommand(arg0: string): void;
        removeChangeListener(arg0: $ChangeListener_): void;
    }
    export class $JLayeredPane extends $JComponent implements $Accessible {
        getPosition(arg0: $Component): number;
        getLayer(arg0: $Component): number;
        static getLayer(arg0: $JComponent): number;
        setPosition(arg0: $Component, arg1: number): void;
        lowestLayer(): number;
        moveToBack(arg0: $Component): void;
        moveToFront(arg0: $Component): void;
        getIndexOf(arg0: $Component): number;
        highestLayer(): number;
        getComponentsInLayer(arg0: number): $Component[];
        setLayer(arg0: $Component, arg1: number, arg2: number): void;
        setLayer(arg0: $Component, arg1: number): void;
        getComponentCountInLayer(arg0: number): number;
        static putLayer(arg0: $JComponent, arg1: number): void;
        static getLayeredPaneAbove(arg0: $Component): $JLayeredPane;
        static PALETTE_LAYER: number;
        static LAYER_PROPERTY: string;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static MODAL_LAYER: number;
        static UNDEFINED_CONDITION: number;
        static FRAME_CONTENT_LAYER: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static DEFAULT_LAYER: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static DRAG_LAYER: number;
        static TOP_ALIGNMENT: number;
        static POPUP_LAYER: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor();
    }
    export class $JToolTip extends $JComponent implements $Accessible {
        getComponent(): $JComponent;
        setComponent(arg0: $JComponent): void;
        getUI(): $ToolTipUI;
        setTipText(arg0: string): void;
        getTipText(): string;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor();
        get UI(): $ToolTipUI;
    }
    export class $TransferHandler$HasGetTransferHandler {
    }
    export interface $TransferHandler$HasGetTransferHandler {
    }
    /**
     * Values that may be interpreted as {@link $TransferHandler$HasGetTransferHandler}.
     */
    export type $TransferHandler$HasGetTransferHandler_ = (() => void);
    export class $JScrollPane extends $JComponent implements $ScrollPaneConstants, $Accessible {
        getVerticalScrollBar(): $JScrollBar;
        setViewport(arg0: $JViewport): void;
        getViewport(): $JViewport;
        setCorner(arg0: string, arg1: $Component): void;
        getCorner(arg0: string): $Component;
        setVerticalScrollBarPolicy(arg0: number): void;
        setHorizontalScrollBarPolicy(arg0: number): void;
        createVerticalScrollBar(): $JScrollBar;
        setVerticalScrollBar(arg0: $JScrollBar): void;
        createHorizontalScrollBar(): $JScrollBar;
        setHorizontalScrollBar(arg0: $JScrollBar): void;
        setViewportView(arg0: $Component): void;
        getColumnHeader(): $JViewport;
        getRowHeader(): $JViewport;
        getHorizontalScrollBar(): $JScrollBar;
        setRowHeader(arg0: $JViewport): void;
        setColumnHeader(arg0: $JViewport): void;
        getVerticalScrollBarPolicy(): number;
        getHorizontalScrollBarPolicy(): number;
        getViewportBorder(): $Border;
        setViewportBorder(arg0: $Border): void;
        getViewportBorderBounds(): $Rectangle;
        setRowHeaderView(arg0: $Component): void;
        setColumnHeaderView(arg0: $Component): void;
        isWheelScrollingEnabled(): boolean;
        setWheelScrollingEnabled(arg0: boolean): void;
        setUI(arg0: $ScrollPaneUI): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor();
        constructor(arg0: number, arg1: number);
        constructor(arg0: $Component);
        constructor(arg0: $Component, arg1: number, arg2: number);
        set viewportView(value: $Component);
        get viewportBorderBounds(): $Rectangle;
        set rowHeaderView(value: $Component);
        set columnHeaderView(value: $Component);
        set UI(value: $ScrollPaneUI);
    }
    export class $Icon {
    }
    export interface $Icon {
        paintIcon(arg0: $Component, arg1: $Graphics, arg2: number, arg3: number): void;
        getIconWidth(): number;
        getIconHeight(): number;
        get iconWidth(): number;
        get iconHeight(): number;
    }
    export class $JEditorPane extends $JTextComponent {
        setContentType(arg0: string): void;
        getContentType(): string;
        read(arg0: $InputStream, arg1: $Object): void;
        scrollToReference(arg0: string): void;
        getEditorKitForContentType(arg0: string): $EditorKit;
        static createEditorKitForContentType(arg0: string): $EditorKit;
        static registerEditorKitForContentType(arg0: string, arg1: string): void;
        static registerEditorKitForContentType(arg0: string, arg1: string, arg2: $ClassLoader): void;
        removeHyperlinkListener(arg0: $HyperlinkListener): void;
        getHyperlinkListeners(): $HyperlinkListener[];
        fireHyperlinkUpdate(arg0: $HyperlinkEvent): void;
        setPage(arg0: $URL): void;
        setPage(arg0: string): void;
        getPage(): $URL;
        static getEditorKitClassNameForContentType(arg0: string): string;
        setEditorKitForContentType(arg0: string, arg1: $EditorKit): void;
        setEditorKit(arg0: $EditorKit): void;
        getEditorKit(): $EditorKit;
        addHyperlinkListener(arg0: $HyperlinkListener): void;
        static FOCUS_ACCELERATOR_KEY: string;
        static CENTER_ALIGNMENT: number;
        static HONOR_DISPLAY_PROPERTIES: string;
        static BOTTOM_ALIGNMENT: number;
        static W3C_LENGTH_UNITS: string;
        static DEFAULT_KEYMAP: string;
        static UNDEFINED_CONDITION: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor();
        constructor(arg0: string, arg1: string);
        constructor(arg0: $URL);
        constructor(arg0: string);
        get hyperlinkListeners(): $HyperlinkListener[];
    }
    export class $ScrollPaneConstants {
        static HORIZONTAL_SCROLLBAR_NEVER: number;
        static LOWER_TRAILING_CORNER: string;
        static HORIZONTAL_SCROLLBAR_ALWAYS: number;
        static VERTICAL_SCROLLBAR_ALWAYS: number;
        static VERTICAL_SCROLLBAR_POLICY: string;
        static HORIZONTAL_SCROLLBAR_POLICY: string;
        static LOWER_RIGHT_CORNER: string;
        static LOWER_LEADING_CORNER: string;
        static VERTICAL_SCROLLBAR_NEVER: number;
        static UPPER_LEADING_CORNER: string;
        static UPPER_TRAILING_CORNER: string;
        static ROW_HEADER: string;
        static VERTICAL_SCROLLBAR: string;
        static VERTICAL_SCROLLBAR_AS_NEEDED: number;
        static LOWER_LEFT_CORNER: string;
        static UPPER_LEFT_CORNER: string;
        static HORIZONTAL_SCROLLBAR: string;
        static COLUMN_HEADER: string;
        static HORIZONTAL_SCROLLBAR_AS_NEEDED: number;
        static UPPER_RIGHT_CORNER: string;
        static VIEWPORT: string;
    }
    export interface $ScrollPaneConstants {
    }
    export class $TransferHandler implements $Serializable {
        canImport(arg0: $TransferHandler$TransferSupport): boolean;
        canImport(arg0: $JComponent, arg1: $DataFlavor[]): boolean;
        static getCutAction(): $Action;
        static getCopyAction(): $Action;
        static getPasteAction(): $Action;
        setDragImage(arg0: $Image): void;
        getDragImage(): $Image;
        setDragImageOffset(arg0: $Point): void;
        getDragImageOffset(): $Point;
        exportAsDrag(arg0: $JComponent, arg1: $InputEvent, arg2: number): void;
        exportToClipboard(arg0: $JComponent, arg1: $Clipboard, arg2: number): void;
        getVisualRepresentation(arg0: $Transferable): $Icon;
        getSourceActions(arg0: $JComponent): number;
        importData(arg0: $JComponent, arg1: $Transferable): boolean;
        importData(arg0: $TransferHandler$TransferSupport): boolean;
        static COPY_OR_MOVE: number;
        static MOVE: number;
        static LINK: number;
        static COPY: number;
        static NONE: number;
        constructor(arg0: string);
        static get cutAction(): $Action;
        static get copyAction(): $Action;
        static get pasteAction(): $Action;
    }
    export class $KeyStroke extends $AWTKeyStroke {
        static getKeyStroke(arg0: number, arg1: number, arg2: boolean): $KeyStroke;
        static getKeyStroke(arg0: string): $KeyStroke;
        static getKeyStroke(arg0: number, arg1: number): $KeyStroke;
        /**
         * @deprecated
         */
        static getKeyStroke(arg0: string, arg1: boolean): $KeyStroke;
        static getKeyStroke(arg0: string, arg1: number): $KeyStroke;
        static getKeyStroke(arg0: string): $KeyStroke;
        static getKeyStrokeForEvent(arg0: $KeyEvent): $KeyStroke;
    }
    export class $AbstractButton extends $JComponent implements $ItemSelectable, $SwingConstants {
        getText(): string;
        setText(arg0: string): void;
        /**
         * @deprecated
         */
        getLabel(): string;
        /**
         * @deprecated
         */
        setLabel(arg0: string): void;
        isBorderPainted(): boolean;
        setBorderPainted(arg0: boolean): void;
        getMargin(): $Insets;
        isSelected(): boolean;
        addChangeListener(arg0: $ChangeListener_): void;
        getAction(): $Action;
        getIcon(): $Icon;
        setMargin(arg0: $Insets): void;
        setSelected(arg0: boolean): void;
        setAction(arg0: $Action): void;
        setIcon(arg0: $Icon): void;
        getModel(): $ButtonModel;
        getChangeListeners(): $ChangeListener[];
        setModel(arg0: $ButtonModel): void;
        addActionListener(arg0: $ActionListener_): void;
        doClick(): void;
        doClick(arg0: number): void;
        getMnemonic(): number;
        setRolloverEnabled(arg0: boolean): void;
        getDisabledIcon(): $Icon;
        getSelectedIcon(): $Icon;
        getDisabledSelectedIcon(): $Icon;
        isRolloverEnabled(): boolean;
        getHideActionText(): boolean;
        setHideActionText(arg0: boolean): void;
        setDisplayedMnemonicIndex(arg0: number): void;
        setMnemonic(arg0: number): void;
        setMnemonic(arg0: string): void;
        removeItemListener(arg0: $ItemListener_): void;
        addItemListener(arg0: $ItemListener_): void;
        setDisabledIcon(arg0: $Icon): void;
        setDisabledSelectedIcon(arg0: $Icon): void;
        getPressedIcon(): $Icon;
        getRolloverSelectedIcon(): $Icon;
        getRolloverIcon(): $Icon;
        setIconTextGap(arg0: number): void;
        setContentAreaFilled(arg0: boolean): void;
        setPressedIcon(arg0: $Icon): void;
        setSelectedIcon(arg0: $Icon): void;
        setRolloverIcon(arg0: $Icon): void;
        setRolloverSelectedIcon(arg0: $Icon): void;
        setVerticalAlignment(arg0: number): void;
        getVerticalTextPosition(): number;
        getHorizontalTextPosition(): number;
        getIconTextGap(): number;
        isFocusPainted(): boolean;
        setFocusPainted(arg0: boolean): void;
        isContentAreaFilled(): boolean;
        getDisplayedMnemonicIndex(): number;
        setMultiClickThreshhold(arg0: number): void;
        getMultiClickThreshhold(): number;
        getItemListeners(): $ItemListener[];
        getSelectedObjects(): $Object[];
        getVerticalAlignment(): number;
        getHorizontalAlignment(): number;
        getActionCommand(): string;
        removeActionListener(arg0: $ActionListener_): void;
        getActionListeners(): $ActionListener[];
        setActionCommand(arg0: string): void;
        setHorizontalTextPosition(arg0: number): void;
        setVerticalTextPosition(arg0: number): void;
        setHorizontalAlignment(arg0: number): void;
        setUI(arg0: $ButtonUI): void;
        removeChangeListener(arg0: $ChangeListener_): void;
        static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
        static ROLLOVER_ICON_CHANGED_PROPERTY: string;
        static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
        static BOTTOM_ALIGNMENT: number;
        static MODEL_CHANGED_PROPERTY: string;
        static SELECTED_ICON_CHANGED_PROPERTY: string;
        static ICON_CHANGED_PROPERTY: string;
        static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
        static FOCUS_PAINTED_CHANGED_PROPERTY: string;
        static WHEN_FOCUSED: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static TEXT_CHANGED_PROPERTY: string;
        static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
        static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static PRESSED_ICON_CHANGED_PROPERTY: string;
        static DISABLED_ICON_CHANGED_PROPERTY: string;
        static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
        static MARGIN_CHANGED_PROPERTY: string;
        static BORDER_PAINTED_CHANGED_PROPERTY: string;
        static CENTER_ALIGNMENT: number;
        static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
        static UNDEFINED_CONDITION: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static LEFT_ALIGNMENT: number;
        static MNEMONIC_CHANGED_PROPERTY: string;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        get changeListeners(): $ChangeListener[];
        get itemListeners(): $ItemListener[];
        get selectedObjects(): $Object[];
        get actionListeners(): $ActionListener[];
        set UI(value: $ButtonUI);
    }
    export class $ListSelectionModel {
        static MULTIPLE_INTERVAL_SELECTION: number;
        static SINGLE_INTERVAL_SELECTION: number;
        static SINGLE_SELECTION: number;
    }
    export interface $ListSelectionModel {
        clearSelection(): void;
        getValueIsAdjusting(): boolean;
        getSelectedIndices(): number[];
        getAnchorSelectionIndex(): number;
        getLeadSelectionIndex(): number;
        setAnchorSelectionIndex(arg0: number): void;
        setLeadSelectionIndex(arg0: number): void;
        setSelectionInterval(arg0: number, arg1: number): void;
        isSelectedIndex(arg0: number): boolean;
        addListSelectionListener(arg0: $ListSelectionListener_): void;
        removeListSelectionListener(arg0: $ListSelectionListener_): void;
        setSelectionMode(arg0: number): void;
        getSelectionMode(): number;
        getMinSelectionIndex(): number;
        getMaxSelectionIndex(): number;
        isSelectionEmpty(): boolean;
        addSelectionInterval(arg0: number, arg1: number): void;
        removeSelectionInterval(arg0: number, arg1: number): void;
        setValueIsAdjusting(arg0: boolean): void;
        insertIndexInterval(arg0: number, arg1: number, arg2: boolean): void;
        removeIndexInterval(arg0: number, arg1: number): void;
        getSelectedItemsCount(): number;
        get selectedIndices(): number[];
        get minSelectionIndex(): number;
        get maxSelectionIndex(): number;
        get selectionEmpty(): boolean;
        get selectedItemsCount(): number;
    }
}
