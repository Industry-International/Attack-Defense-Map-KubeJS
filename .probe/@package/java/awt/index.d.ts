import { $PrintStream, $InputStream, $PrintWriter, $File_, $Serializable } from "@package/java/io";
import { $RenderableImage } from "@package/java/awt/image/renderable";
import { $ColorSpace } from "@package/java/awt/color";
import { $DragGestureRecognizer, $DropTarget, $DragGestureListener_, $DragSource } from "@package/java/awt/dnd";
import { $Clipboard } from "@package/java/awt/datatransfer";
import { $FontRenderContext, $TextAttribute, $LineMetrics, $GlyphVector } from "@package/java/awt/font";
import { $PropertyChangeListener_, $PropertyChangeListener } from "@package/java/beans";
import { $Enumeration, $Locale, $Set_, $Map, $Map$Entry, $Set, $EventListener, $EventObject, $Properties, $List, $ResourceBundle, $Map_, $List_, $Collection } from "@package/java/util";
import { $AccessibleContext, $Accessible } from "@package/javax/accessibility";
import { $BufferStrategy, $WritableRaster, $RenderedImage, $VolatileImage, $ImageObserver_, $ImageProducer, $BufferedImage, $ImageObserver, $BufferedImageOp, $ColorModel, $Raster } from "@package/java/awt/image";
import { $BiConsumer_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Dimension2D, $PathIterator, $AffineTransform, $Point2D, $Rectangle2D } from "@package/java/awt/geom";
import { $AttributedCharacterIterator$Attribute, $CharacterIterator, $AttributedCharacterIterator } from "@package/java/text";
import { $URL } from "@package/java/net";
import { $InputMethodHighlight, $InputContext, $InputMethodRequests } from "@package/java/awt/im";
import { $HierarchyListener_, $ContainerListener, $WindowStateListener_, $MouseListener, $ItemListener_, $FocusEvent$Cause_, $KeyListener, $ActionListener_, $FocusListener, $AdjustmentListener_, $ComponentListener, $AWTEventListener, $HierarchyBoundsListener, $ActionListener, $KeyEvent, $MouseWheelListener, $AWTEventListener_, $MouseMotionListener, $WindowListener, $MouseWheelListener_, $HierarchyListener, $WindowStateListener, $InputMethodListener, $WindowFocusListener } from "@package/java/awt/event";
import { $Enum, $Cloneable, $Class, $Runnable_, $Object } from "@package/java/lang";
export * as event from "@package/java/awt/event";
export * as image from "@package/java/awt/image";
export * as font from "@package/java/awt/font";
export * as datatransfer from "@package/java/awt/datatransfer";
export * as geom from "@package/java/awt/geom";
export * as dnd from "@package/java/awt/dnd";
export * as color from "@package/java/awt/color";
export * as im from "@package/java/awt/im";
export * as print from "@package/java/awt/print";

declare module "@package/java/awt" {
    export class $Toolkit {
        static getProperty(arg0: string, arg1: string): string;
        sync(): void;
        addPropertyChangeListener(arg0: string, arg1: $PropertyChangeListener_): void;
        removePropertyChangeListener(arg0: string, arg1: $PropertyChangeListener_): void;
        prepareImage(arg0: $Image, arg1: number, arg2: number, arg3: $ImageObserver_): boolean;
        beep(): void;
        /**
         * @deprecated
         */
        getFontMetrics(arg0: $Font): $FontMetrics;
        getImage(arg0: string): $Image;
        getImage(arg0: $URL): $Image;
        static getDefaultToolkit(): $Toolkit;
        setDynamicLayout(arg0: boolean): void;
        isDynamicLayoutActive(): boolean;
        getScreenInsets(arg0: $GraphicsConfiguration): $Insets;
        createImage(arg0: $ImageProducer): $Image;
        createImage(arg0: string): $Image;
        createImage(arg0: number[], arg1: number, arg2: number): $Image;
        createImage(arg0: number[]): $Image;
        createImage(arg0: $URL): $Image;
        getPrintJob(arg0: $Frame, arg1: string, arg2: $JobAttributes, arg3: $PageAttributes): $PrintJob;
        getPrintJob(arg0: $Frame, arg1: string, arg2: $Properties): $PrintJob;
        getSystemSelection(): $Clipboard;
        createCustomCursor(arg0: $Image, arg1: $Point, arg2: string): $Cursor;
        getBestCursorSize(arg0: number, arg1: number): $Dimension;
        getMaximumCursorColors(): number;
        isFrameStateSupported(arg0: number): boolean;
        getDesktopProperty(arg0: string): $Object;
        getPropertyChangeListeners(arg0: string): $PropertyChangeListener[];
        getPropertyChangeListeners(): $PropertyChangeListener[];
        areExtraMouseButtonsEnabled(): boolean;
        getScreenSize(): $Dimension;
        getScreenResolution(): number;
        /**
         * @deprecated
         */
        getFontList(): string[];
        checkImage(arg0: $Image, arg1: number, arg2: number, arg3: $ImageObserver_): number;
        getSystemClipboard(): $Clipboard;
        /**
         * @deprecated
         */
        getMenuShortcutKeyMask(): number;
        getMenuShortcutKeyMaskEx(): number;
        getLockingKeyState(arg0: number): boolean;
        setLockingKeyState(arg0: number, arg1: boolean): void;
        getSystemEventQueue(): $EventQueue;
        createDragGestureRecognizer<T extends $DragGestureRecognizer>(arg0: $Class<T>, arg1: $DragSource, arg2: $Component, arg3: number, arg4: $DragGestureListener_): T;
        isAlwaysOnTopSupported(): boolean;
        isModalityTypeSupported(arg0: $Dialog$ModalityType_): boolean;
        isModalExclusionTypeSupported(arg0: $Dialog$ModalExclusionType_): boolean;
        addAWTEventListener(arg0: $AWTEventListener_, arg1: number): void;
        removeAWTEventListener(arg0: $AWTEventListener_): void;
        getAWTEventListeners(): $AWTEventListener[];
        getAWTEventListeners(arg0: number): $AWTEventListener[];
        mapInputMethodHighlight(arg0: $InputMethodHighlight): $Map<$TextAttribute, never>;
        getColorModel(): $ColorModel;
        static get defaultToolkit(): $Toolkit;
        set dynamicLayout(value: boolean);
        get dynamicLayoutActive(): boolean;
        get systemSelection(): $Clipboard;
        get maximumCursorColors(): number;
        get screenSize(): $Dimension;
        get screenResolution(): number;
        get fontList(): string[];
        get systemClipboard(): $Clipboard;
        get menuShortcutKeyMask(): number;
        get menuShortcutKeyMaskEx(): number;
        get systemEventQueue(): $EventQueue;
        get alwaysOnTopSupported(): boolean;
        get colorModel(): $ColorModel;
    }
    export class $PageAttributes$OriginType extends $AttributeValue {
        static PRINTABLE: $PageAttributes$OriginType;
        static PHYSICAL: $PageAttributes$OriginType;
    }
    export class $JobAttributes$DialogType extends $AttributeValue {
        static NATIVE: $JobAttributes$DialogType;
        static COMMON: $JobAttributes$DialogType;
        static NONE: $JobAttributes$DialogType;
    }
    export class $Polygon implements $Shape, $Serializable {
        reset(): void;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $Point): boolean;
        contains(arg0: $Point2D): boolean;
        contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        contains(arg0: $Rectangle2D): boolean;
        getBounds(): $Rectangle;
        invalidate(): void;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        intersects(arg0: $Rectangle2D): boolean;
        translate(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        inside(arg0: number, arg1: number): boolean;
        getBounds2D(): $Rectangle2D;
        getPathIterator(arg0: $AffineTransform): $PathIterator;
        getPathIterator(arg0: $AffineTransform, arg1: number): $PathIterator;
        /**
         * @deprecated
         */
        getBoundingBox(): $Rectangle;
        addPoint(arg0: number, arg1: number): void;
        ypoints: number[];
        xpoints: number[];
        npoints: number;
        constructor();
        constructor(arg0: number[], arg1: number[], arg2: number);
        get bounds(): $Rectangle;
        get bounds2D(): $Rectangle2D;
        get boundingBox(): $Rectangle;
    }
    export class $GraphicsDevice$WindowTranslucency extends $Enum<$GraphicsDevice$WindowTranslucency> {
        static values(): $GraphicsDevice$WindowTranslucency[];
        static valueOf(arg0: string): $GraphicsDevice$WindowTranslucency;
        static PERPIXEL_TRANSPARENT: $GraphicsDevice$WindowTranslucency;
        static TRANSLUCENT: $GraphicsDevice$WindowTranslucency;
        static PERPIXEL_TRANSLUCENT: $GraphicsDevice$WindowTranslucency;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsDevice$WindowTranslucency}.
     */
    export type $GraphicsDevice$WindowTranslucency_ = "perpixel_transparent" | "translucent" | "perpixel_translucent";
    export class $Menu extends $MenuItem implements $MenuContainer, $Accessible {
        remove(arg0: number): void;
        remove(arg0: $MenuComponent): void;
        insert(arg0: string, arg1: number): void;
        insert(arg0: $MenuItem, arg1: number): void;
        add(arg0: string): void;
        add(arg0: $MenuItem): $MenuItem;
        removeAll(): void;
        getItem(arg0: number): $MenuItem;
        getItemCount(): number;
        isTearOff(): boolean;
        insertSeparator(arg0: number): void;
        addSeparator(): void;
        /**
         * @deprecated
         */
        countItems(): number;
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string);
        constructor();
        get itemCount(): number;
        get tearOff(): boolean;
    }
    export class $Cursor implements $Serializable {
        getName(): string;
        getType(): number;
        static getSystemCustomCursor(arg0: string): $Cursor;
        static getPredefinedCursor(arg0: number): $Cursor;
        static getDefaultCursor(): $Cursor;
        static N_RESIZE_CURSOR: number;
        static S_RESIZE_CURSOR: number;
        static TEXT_CURSOR: number;
        static NW_RESIZE_CURSOR: number;
        static W_RESIZE_CURSOR: number;
        static SE_RESIZE_CURSOR: number;
        static CUSTOM_CURSOR: number;
        static NE_RESIZE_CURSOR: number;
        static SW_RESIZE_CURSOR: number;
        static DEFAULT_CURSOR: number;
        static CROSSHAIR_CURSOR: number;
        static E_RESIZE_CURSOR: number;
        static HAND_CURSOR: number;
        static WAIT_CURSOR: number;
        static MOVE_CURSOR: number;
        constructor(arg0: number);
        get name(): string;
        get type(): number;
        static get defaultCursor(): $Cursor;
    }
    export class $BufferCapabilities implements $Cloneable {
        clone(): $Object;
        getFlipContents(): $BufferCapabilities$FlipContents;
        getFrontBufferCapabilities(): $ImageCapabilities;
        getBackBufferCapabilities(): $ImageCapabilities;
        isFullScreenRequired(): boolean;
        isMultiBufferAvailable(): boolean;
        isPageFlipping(): boolean;
        constructor(arg0: $ImageCapabilities, arg1: $ImageCapabilities, arg2: $BufferCapabilities$FlipContents);
        get flipContents(): $BufferCapabilities$FlipContents;
        get frontBufferCapabilities(): $ImageCapabilities;
        get backBufferCapabilities(): $ImageCapabilities;
        get fullScreenRequired(): boolean;
        get multiBufferAvailable(): boolean;
        get pageFlipping(): boolean;
    }
    export class $Font implements $Serializable {
        getName(): string;
        static decode(arg0: string): $Font;
        getSize(): number;
        getAttributes(): $Map<$TextAttribute, never>;
        getFamily(arg0: $Locale): string;
        getFamily(): string;
        getStyle(): number;
        getMissingGlyphCode(): number;
        static getFont(arg0: $Map_<$AttributedCharacterIterator$Attribute, never>): $Font;
        static getFont(arg0: string, arg1: $Font): $Font;
        static getFont(arg0: string): $Font;
        static createFont(arg0: number, arg1: $InputStream): $Font;
        static createFont(arg0: number, arg1: $File_): $Font;
        isPlain(): boolean;
        layoutGlyphVector(arg0: $FontRenderContext, arg1: string[], arg2: number, arg3: number, arg4: number): $GlyphVector;
        getTransform(): $AffineTransform;
        isBold(): boolean;
        isItalic(): boolean;
        getFontName(arg0: $Locale): string;
        getFontName(): string;
        hasLayoutAttributes(): boolean;
        getBaselineFor(arg0: string): number;
        canDisplay(arg0: string): boolean;
        canDisplay(arg0: number): boolean;
        getItalicAngle(): number;
        getStringBounds(arg0: string, arg1: number, arg2: number, arg3: $FontRenderContext): $Rectangle2D;
        getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: $FontRenderContext): $Rectangle2D;
        getStringBounds(arg0: $CharacterIterator, arg1: number, arg2: number, arg3: $FontRenderContext): $Rectangle2D;
        getStringBounds(arg0: string, arg1: $FontRenderContext): $Rectangle2D;
        static textRequiresLayout(arg0: string[], arg1: number, arg2: number): boolean;
        static createFonts(arg0: $File_): $Font[];
        static createFonts(arg0: $InputStream): $Font[];
        getPSName(): string;
        getSize2D(): number;
        getAvailableAttributes(): $AttributedCharacterIterator$Attribute[];
        canDisplayUpTo(arg0: string): number;
        canDisplayUpTo(arg0: $CharacterIterator, arg1: number, arg2: number): number;
        canDisplayUpTo(arg0: string[], arg1: number, arg2: number): number;
        hasUniformLineMetrics(): boolean;
        getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: $FontRenderContext): $LineMetrics;
        getLineMetrics(arg0: $CharacterIterator, arg1: number, arg2: number, arg3: $FontRenderContext): $LineMetrics;
        getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: $FontRenderContext): $LineMetrics;
        getLineMetrics(arg0: string, arg1: $FontRenderContext): $LineMetrics;
        getMaxCharBounds(arg0: $FontRenderContext): $Rectangle2D;
        deriveFont(arg0: number, arg1: $AffineTransform): $Font;
        deriveFont(arg0: number, arg1: number): $Font;
        deriveFont(arg0: number): $Font;
        deriveFont(arg0: number): $Font;
        deriveFont(arg0: $AffineTransform): $Font;
        deriveFont(arg0: $Map_<$AttributedCharacterIterator$Attribute, never>): $Font;
        isTransformed(): boolean;
        getNumGlyphs(): number;
        createGlyphVector(arg0: $FontRenderContext, arg1: string[]): $GlyphVector;
        createGlyphVector(arg0: $FontRenderContext, arg1: string): $GlyphVector;
        createGlyphVector(arg0: $FontRenderContext, arg1: number[]): $GlyphVector;
        createGlyphVector(arg0: $FontRenderContext, arg1: $CharacterIterator): $GlyphVector;
        static PLAIN: number;
        static ITALIC: number;
        static CENTER_BASELINE: number;
        static HANGING_BASELINE: number;
        static DIALOG: string;
        static MONOSPACED: string;
        static DIALOG_INPUT: string;
        static LAYOUT_NO_LIMIT_CONTEXT: number;
        static LAYOUT_RIGHT_TO_LEFT: number;
        static SANS_SERIF: string;
        static SERIF: string;
        static TRUETYPE_FONT: number;
        static ROMAN_BASELINE: number;
        static LAYOUT_NO_START_CONTEXT: number;
        static LAYOUT_LEFT_TO_RIGHT: number;
        static BOLD: number;
        static TYPE1_FONT: number;
        constructor(arg0: $Map_<$AttributedCharacterIterator$Attribute, never>);
        constructor(arg0: string, arg1: number, arg2: number);
        get name(): string;
        get size(): number;
        get attributes(): $Map<$TextAttribute, never>;
        get style(): number;
        get missingGlyphCode(): number;
        get plain(): boolean;
        get transform(): $AffineTransform;
        get bold(): boolean;
        get italic(): boolean;
        get italicAngle(): number;
        get PSName(): string;
        get size2D(): number;
        get availableAttributes(): $AttributedCharacterIterator$Attribute[];
        get transformed(): boolean;
        get numGlyphs(): number;
    }
    export class $JobAttributes$DefaultSelectionType extends $AttributeValue {
        static ALL: $JobAttributes$DefaultSelectionType;
        static SELECTION: $JobAttributes$DefaultSelectionType;
        static RANGE: $JobAttributes$DefaultSelectionType;
    }
    export class $MenuContainer {
    }
    export interface $MenuContainer {
        remove(arg0: $MenuComponent): void;
        getFont(): $Font;
        /**
         * @deprecated
         */
        postEvent(arg0: $Event): boolean;
        get font(): $Font;
    }
    export class $Dimension extends $Dimension2D implements $Serializable {
        getSize(): $Dimension;
        setSize(arg0: $Dimension): void;
        setSize(arg0: number, arg1: number): void;
        width: number;
        height: number;
        constructor(arg0: $Dimension);
        constructor();
        constructor(arg0: number, arg1: number);
    }
    export class $Graphics {
        /**
         * @deprecated
         */
        finalize(): void;
        create(arg0: number, arg1: number, arg2: number, arg3: number): $Graphics;
        create(): $Graphics;
        setColor(arg0: $Color): void;
        dispose(): void;
        fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
        fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
        fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawPolyline(arg0: number[], arg1: number[], arg2: number): void;
        drawPolygon(arg0: $Polygon): void;
        drawPolygon(arg0: number[], arg1: number[], arg2: number): void;
        fillPolygon(arg0: number[], arg1: number[], arg2: number): void;
        fillPolygon(arg0: $Polygon): void;
        drawChars(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): void;
        fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getColor(): $Color;
        drawString(arg0: $AttributedCharacterIterator, arg1: number, arg2: number): void;
        drawString(arg0: string, arg1: number, arg2: number): void;
        clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        translate(arg0: number, arg1: number): void;
        getFont(): $Font;
        copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getFontMetrics(arg0: $Font): $FontMetrics;
        getFontMetrics(): $FontMetrics;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $ImageObserver_): boolean;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Color, arg6: $ImageObserver_): boolean;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: $Color, arg4: $ImageObserver_): boolean;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: $ImageObserver_): boolean;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $ImageObserver_): boolean;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Color, arg10: $ImageObserver_): boolean;
        getClipBounds(): $Rectangle;
        getClipBounds(arg0: $Rectangle): $Rectangle;
        drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setClip(arg0: $Shape): void;
        setClip(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getClip(): $Shape;
        hitClip(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        setPaintMode(): void;
        setXORMode(arg0: $Color): void;
        drawBytes(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;
        draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        /**
         * @deprecated
         */
        getClipRect(): $Rectangle;
        clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setFont(arg0: $Font): void;
        set XORMode(value: $Color);
    }
    export class $GraphicsConfigTemplate implements $Serializable {
        getBestConfiguration(arg0: $GraphicsConfiguration[]): $GraphicsConfiguration;
        isGraphicsConfigSupported(arg0: $GraphicsConfiguration): boolean;
        static UNNECESSARY: number;
        static PREFERRED: number;
        static REQUIRED: number;
        constructor();
    }
    export class $MenuComponent implements $Serializable {
        getName(): string;
        getParent(): $MenuContainer;
        setName(arg0: string): void;
        dispatchEvent(arg0: $AWTEvent): void;
        getFont(): $Font;
        /**
         * @deprecated
         */
        postEvent(arg0: $Event): boolean;
        removeNotify(): void;
        getAccessibleContext(): $AccessibleContext;
        setFont(arg0: $Font): void;
        constructor();
        get parent(): $MenuContainer;
        get accessibleContext(): $AccessibleContext;
    }
    export class $Paint {
    }
    export interface $Paint extends $Transparency {
        createContext(arg0: $ColorModel, arg1: $Rectangle, arg2: $Rectangle2D, arg3: $AffineTransform, arg4: $RenderingHints): $PaintContext;
    }
    export class $PageAttributes$MediaType extends $AttributeValue {
        static ISO_B0: $PageAttributes$MediaType;
        static ISO_B1: $PageAttributes$MediaType;
        static ISO_B2: $PageAttributes$MediaType;
        static NA_10X13_ENVELOPE: $PageAttributes$MediaType;
        static ISO_B3: $PageAttributes$MediaType;
        static NA_NUMBER_14_ENVELOPE: $PageAttributes$MediaType;
        static ISO_B4: $PageAttributes$MediaType;
        static ENV_INVITE: $PageAttributes$MediaType;
        static ISO_B5: $PageAttributes$MediaType;
        static ISO_B6: $PageAttributes$MediaType;
        static ISO_C10: $PageAttributes$MediaType;
        static ISO_B7: $PageAttributes$MediaType;
        static INVITE: $PageAttributes$MediaType;
        static ISO_C8_ENVELOPE: $PageAttributes$MediaType;
        static A0: $PageAttributes$MediaType;
        static JIS_B9: $PageAttributes$MediaType;
        static A1: $PageAttributes$MediaType;
        static A2: $PageAttributes$MediaType;
        static JIS_B7: $PageAttributes$MediaType;
        static A3: $PageAttributes$MediaType;
        static JIS_B8: $PageAttributes$MediaType;
        static A4: $PageAttributes$MediaType;
        static ISO_C2_ENVELOPE: $PageAttributes$MediaType;
        static A5: $PageAttributes$MediaType;
        static A6: $PageAttributes$MediaType;
        static A7: $PageAttributes$MediaType;
        static A8: $PageAttributes$MediaType;
        static ISO_B8: $PageAttributes$MediaType;
        static A9: $PageAttributes$MediaType;
        static ISO_B9: $PageAttributes$MediaType;
        static PERSONAL_ENVELOPE: $PageAttributes$MediaType;
        static ISO_C1: $PageAttributes$MediaType;
        static A10: $PageAttributes$MediaType;
        static ISO_C2: $PageAttributes$MediaType;
        static ISO_C3: $PageAttributes$MediaType;
        static ISO_C4: $PageAttributes$MediaType;
        static ISO_C5: $PageAttributes$MediaType;
        static ISO_C6: $PageAttributes$MediaType;
        static ISO_C7: $PageAttributes$MediaType;
        static ISO_C8: $PageAttributes$MediaType;
        static JIS_B1: $PageAttributes$MediaType;
        static NA_LETTER: $PageAttributes$MediaType;
        static ISO_2A0: $PageAttributes$MediaType;
        static JIS_B2: $PageAttributes$MediaType;
        static ENV_6X9: $PageAttributes$MediaType;
        static JIS_B0: $PageAttributes$MediaType;
        static JIS_B5: $PageAttributes$MediaType;
        static JIS_B6: $PageAttributes$MediaType;
        static JIS_B3: $PageAttributes$MediaType;
        static B0: $PageAttributes$MediaType;
        static JIS_B4: $PageAttributes$MediaType;
        static ISO_C0: $PageAttributes$MediaType;
        static NA_NUMBER_9_ENVELOPE: $PageAttributes$MediaType;
        static B1: $PageAttributes$MediaType;
        static B2: $PageAttributes$MediaType;
        static B3: $PageAttributes$MediaType;
        static B4: $PageAttributes$MediaType;
        static B5: $PageAttributes$MediaType;
        static B6: $PageAttributes$MediaType;
        static B7: $PageAttributes$MediaType;
        static B8: $PageAttributes$MediaType;
        static B9: $PageAttributes$MediaType;
        static ISO_C9: $PageAttributes$MediaType;
        static NA_7X9_ENVELOPE: $PageAttributes$MediaType;
        static MONARCH: $PageAttributes$MediaType;
        static ISO_C3_ENVELOPE: $PageAttributes$MediaType;
        static ENV_9X11: $PageAttributes$MediaType;
        static ENV_ITALY: $PageAttributes$MediaType;
        static ENV_9X12: $PageAttributes$MediaType;
        static ENV_10X15: $PageAttributes$MediaType;
        static A: $PageAttributes$MediaType;
        static ENV_10X14: $PageAttributes$MediaType;
        static B: $PageAttributes$MediaType;
        static ENV_10X13: $PageAttributes$MediaType;
        static C: $PageAttributes$MediaType;
        static D: $PageAttributes$MediaType;
        static E: $PageAttributes$MediaType;
        static ISO_C9_ENVELOPE: $PageAttributes$MediaType;
        static C0: $PageAttributes$MediaType;
        static C1: $PageAttributes$MediaType;
        static C2: $PageAttributes$MediaType;
        static C3: $PageAttributes$MediaType;
        static ISO_DESIGNATED_LONG_ENVELOPE: $PageAttributes$MediaType;
        static PERSONAL: $PageAttributes$MediaType;
        static C4: $PageAttributes$MediaType;
        static C5: $PageAttributes$MediaType;
        static C6: $PageAttributes$MediaType;
        static NA_10X14_ENVELOPE: $PageAttributes$MediaType;
        static C7: $PageAttributes$MediaType;
        static C8: $PageAttributes$MediaType;
        static C9: $PageAttributes$MediaType;
        static NA_NUMBER_10_ENVELOPE: $PageAttributes$MediaType;
        static ISO_A0: $PageAttributes$MediaType;
        static ISO_A1: $PageAttributes$MediaType;
        static ISO_A2: $PageAttributes$MediaType;
        static ISO_A3: $PageAttributes$MediaType;
        static ISO_A4: $PageAttributes$MediaType;
        static ISO_A5: $PageAttributes$MediaType;
        static ISO_A6: $PageAttributes$MediaType;
        static ISO_C1_ENVELOPE: $PageAttributes$MediaType;
        static ISO_B5_ENVELOPE: $PageAttributes$MediaType;
        static NA_LEGAL: $PageAttributes$MediaType;
        static ISO_A7: $PageAttributes$MediaType;
        static ISO_C6_ENVELOPE: $PageAttributes$MediaType;
        static ISO_A8: $PageAttributes$MediaType;
        static ISO_A9: $PageAttributes$MediaType;
        static NA_NUMBER_11_ENVELOPE: $PageAttributes$MediaType;
        static STATEMENT: $PageAttributes$MediaType;
        static LETTER: $PageAttributes$MediaType;
        static ISO_A10: $PageAttributes$MediaType;
        static NA_9X11_ENVELOPE: $PageAttributes$MediaType;
        static ISO_C5_ENVELOPE: $PageAttributes$MediaType;
        static QUARTO: $PageAttributes$MediaType;
        static ISO_DESIGNATED_LONG: $PageAttributes$MediaType;
        static NA_6X9_ENVELOPE: $PageAttributes$MediaType;
        static ISO_C4_ENVELOPE: $PageAttributes$MediaType;
        static C10: $PageAttributes$MediaType;
        static ISO_C10_ENVELOPE: $PageAttributes$MediaType;
        static ISO_4A0: $PageAttributes$MediaType;
        static ITALY: $PageAttributes$MediaType;
        static NA_NUMBER_12_ENVELOPE: $PageAttributes$MediaType;
        static INVOICE: $PageAttributes$MediaType;
        static ENV_9: $PageAttributes$MediaType;
        static NA_9X12_ENVELOPE: $PageAttributes$MediaType;
        static ITALY_ENVELOPE: $PageAttributes$MediaType;
        static ISO_B4_ENVELOPE: $PageAttributes$MediaType;
        static ENV_PERSONAL: $PageAttributes$MediaType;
        static ISO_B10: $PageAttributes$MediaType;
        static JIS_B10: $PageAttributes$MediaType;
        static ISO_C0_ENVELOPE: $PageAttributes$MediaType;
        static INVITE_ENVELOPE: $PageAttributes$MediaType;
        static NOTE: $PageAttributes$MediaType;
        static LEGAL: $PageAttributes$MediaType;
        static EXECUTIVE: $PageAttributes$MediaType;
        static ENV_MONARCH: $PageAttributes$MediaType;
        static ENV_11: $PageAttributes$MediaType;
        static B10: $PageAttributes$MediaType;
        static ENV_12: $PageAttributes$MediaType;
        static ENV_10: $PageAttributes$MediaType;
        static ISO_C7_ENVELOPE: $PageAttributes$MediaType;
        static ENV_14: $PageAttributes$MediaType;
        static MONARCH_ENVELOPE: $PageAttributes$MediaType;
        static ENV_7X9: $PageAttributes$MediaType;
        static NA_10X15_ENVELOPE: $PageAttributes$MediaType;
        static TABLOID: $PageAttributes$MediaType;
        static LEDGER: $PageAttributes$MediaType;
        static FOLIO: $PageAttributes$MediaType;
    }
    export class $Dialog$ModalExclusionType extends $Enum<$Dialog$ModalExclusionType> {
        static values(): $Dialog$ModalExclusionType[];
        static valueOf(arg0: string): $Dialog$ModalExclusionType;
        static APPLICATION_EXCLUDE: $Dialog$ModalExclusionType;
        static NO_EXCLUDE: $Dialog$ModalExclusionType;
        static TOOLKIT_EXCLUDE: $Dialog$ModalExclusionType;
    }
    /**
     * Values that may be interpreted as {@link $Dialog$ModalExclusionType}.
     */
    export type $Dialog$ModalExclusionType_ = "no_exclude" | "application_exclude" | "toolkit_exclude";
    export class $PageAttributes$ColorType extends $AttributeValue {
        static MONOCHROME: $PageAttributes$ColorType;
        static COLOR: $PageAttributes$ColorType;
    }
    /**
     * @deprecated
     */
    export class $Event implements $Serializable {
        translate(arg0: number, arg1: number): void;
        metaDown(): boolean;
        shiftDown(): boolean;
        controlDown(): boolean;
        static DOWN: number;
        static PRINT_SCREEN: number;
        static BACK_SPACE: number;
        when: number;
        static MOUSE_UP: number;
        static SCROLL_ABSOLUTE: number;
        static KEY_RELEASE: number;
        static MOUSE_DRAG: number;
        static UP: number;
        static SCROLL_PAGE_UP: number;
        id: number;
        static LIST_DESELECT: number;
        static LOAD_FILE: number;
        static MOUSE_EXIT: number;
        static LEFT: number;
        static F1: number;
        static MOUSE_DOWN: number;
        static F2: number;
        static F3: number;
        static F4: number;
        static F5: number;
        static F6: number;
        static SAVE_FILE: number;
        static F7: number;
        static F8: number;
        static F9: number;
        static NUM_LOCK: number;
        static MOUSE_ENTER: number;
        static SCROLL_END: number;
        static END: number;
        static INSERT: number;
        static WINDOW_DEICONIFY: number;
        static GOT_FOCUS: number;
        static WINDOW_DESTROY: number;
        static SCROLL_BEGIN: number;
        static CAPS_LOCK: number;
        static SCROLL_LINE_DOWN: number;
        static WINDOW_EXPOSE: number;
        clickCount: number;
        static SHIFT_MASK: number;
        static KEY_ACTION: number;
        static ENTER: number;
        static LOST_FOCUS: number;
        modifiers: number;
        static PAUSE: number;
        static KEY_PRESS: number;
        static DELETE: number;
        static LIST_SELECT: number;
        arg: $Object;
        static CTRL_MASK: number;
        static ALT_MASK: number;
        static RIGHT: number;
        static WINDOW_MOVED: number;
        key: number;
        evt: $Event;
        static PGDN: number;
        static F10: number;
        static WINDOW_ICONIFY: number;
        static F12: number;
        static SCROLL_LINE_UP: number;
        static F11: number;
        static ESCAPE: number;
        target: $Object;
        static MOUSE_MOVE: number;
        static SCROLL_LOCK: number;
        static TAB: number;
        static PGUP: number;
        static SCROLL_PAGE_DOWN: number;
        static ACTION_EVENT: number;
        x: number;
        y: number;
        static KEY_ACTION_RELEASE: number;
        static META_MASK: number;
        static HOME: number;
        constructor(arg0: $Object, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $Object, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $Object);
        constructor(arg0: $Object, arg1: number, arg2: $Object);
    }
    export class $Stroke {
    }
    export interface $Stroke {
        createStrokedShape(arg0: $Shape): $Shape;
    }
    /**
     * Values that may be interpreted as {@link $Stroke}.
     */
    export type $Stroke_ = ((arg0: $Shape) => $Shape);
    export class $Window$Type extends $Enum<$Window$Type> {
        static values(): $Window$Type[];
        static valueOf(arg0: string): $Window$Type;
        static POPUP: $Window$Type;
        static UTILITY: $Window$Type;
        static NORMAL: $Window$Type;
    }
    /**
     * Values that may be interpreted as {@link $Window$Type}.
     */
    export type $Window$Type_ = "normal" | "utility" | "popup";
    export class $MenuBar extends $MenuComponent implements $MenuContainer, $Accessible {
        remove(arg0: number): void;
        remove(arg0: $MenuComponent): void;
        add(arg0: $Menu): $Menu;
        shortcuts(): $Enumeration<$MenuShortcut>;
        getMenu(arg0: number): $Menu;
        getShortcutMenuItem(arg0: $MenuShortcut): $MenuItem;
        deleteShortcut(arg0: $MenuShortcut): void;
        /**
         * @deprecated
         */
        countMenus(): number;
        addNotify(): void;
        getMenuCount(): number;
        setHelpMenu(arg0: $Menu): void;
        getHelpMenu(): $Menu;
        constructor();
        get menuCount(): number;
    }
    export class $FocusTraversalPolicy {
        getComponentAfter(arg0: $Container, arg1: $Component): $Component;
        getDefaultComponent(arg0: $Container): $Component;
        getComponentBefore(arg0: $Container, arg1: $Component): $Component;
        getFirstComponent(arg0: $Container): $Component;
        getLastComponent(arg0: $Container): $Component;
        getInitialComponent(arg0: $Window): $Component;
    }
    export class $Graphics2D extends $Graphics {
        scale(arg0: number, arg1: number): void;
        fill(arg0: $Shape): void;
        transform(arg0: $AffineTransform): void;
        rotate(arg0: number): void;
        rotate(arg0: number, arg1: number, arg2: number): void;
        hit(arg0: $Rectangle, arg1: $Shape, arg2: boolean): boolean;
        setTransform(arg0: $AffineTransform): void;
        draw(arg0: $Shape): void;
        getRenderingHints(): $RenderingHints;
        getBackground(): $Color;
        drawString(arg0: $AttributedCharacterIterator, arg1: number, arg2: number): void;
        drawString(arg0: string, arg1: number, arg2: number): void;
        translate(arg0: number, arg1: number): void;
        clip(arg0: $Shape): void;
        setStroke(arg0: $Stroke_): void;
        getDeviceConfiguration(): $GraphicsConfiguration;
        getPaint(): $Paint;
        drawImage(arg0: $BufferedImage, arg1: $BufferedImageOp, arg2: number, arg3: number): void;
        drawImage(arg0: $Image, arg1: $AffineTransform, arg2: $ImageObserver_): boolean;
        setRenderingHint(arg0: $RenderingHints$Key, arg1: $Object): void;
        setComposite(arg0: $Composite_): void;
        drawGlyphVector(arg0: $GlyphVector, arg1: number, arg2: number): void;
        getTransform(): $AffineTransform;
        shear(arg0: number, arg1: number): void;
        setBackground(arg0: $Color): void;
        getStroke(): $Stroke;
        drawRenderedImage(arg0: $RenderedImage, arg1: $AffineTransform): void;
        getRenderingHint(arg0: $RenderingHints$Key): $Object;
        setRenderingHints(arg0: $Map_<never, never>): void;
        addRenderingHints(arg0: $Map_<never, never>): void;
        getComposite(): $Composite;
        drawRenderableImage(arg0: $RenderableImage, arg1: $AffineTransform): void;
        getFontRenderContext(): $FontRenderContext;
        setPaint(arg0: $Paint): void;
        get deviceConfiguration(): $GraphicsConfiguration;
        get fontRenderContext(): $FontRenderContext;
    }
    export class $Transparency {
        static OPAQUE: number;
        static TRANSLUCENT: number;
        static BITMASK: number;
    }
    export interface $Transparency {
        getTransparency(): number;
        get transparency(): number;
    }
    /**
     * Values that may be interpreted as {@link $Transparency}.
     */
    export type $Transparency_ = (() => number);
    export class $Component implements $ImageObserver, $MenuContainer, $Serializable {
        getName(): string;
        remove(arg0: $MenuComponent): void;
        /**
         * @deprecated
         */
        size(): $Dimension;
        update(arg0: $Graphics): void;
        add(arg0: $PopupMenu): void;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $Point): boolean;
        list(arg0: $PrintStream, arg1: number): void;
        list(arg0: $PrintStream): void;
        list(): void;
        list(arg0: $PrintWriter, arg1: number): void;
        list(arg0: $PrintWriter): void;
        getBounds(arg0: $Rectangle): $Rectangle;
        getBounds(): $Rectangle;
        isEnabled(): boolean;
        validate(): void;
        /**
         * @deprecated
         */
        bounds(): $Rectangle;
        /**
         * @deprecated
         */
        location(): $Point;
        getLocation(): $Point;
        getLocation(arg0: $Point): $Point;
        getParent(): $Container;
        /**
         * @deprecated
         */
        action(arg0: $Event, arg1: $Object): boolean;
        setName(arg0: string): void;
        print(arg0: $Graphics): void;
        getSize(arg0: $Dimension): $Dimension;
        getSize(): $Dimension;
        isOpaque(): boolean;
        /**
         * @deprecated
         */
        resize(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        resize(arg0: $Dimension): void;
        /**
         * @deprecated
         */
        layout(): void;
        /**
         * @deprecated
         */
        enable(): void;
        /**
         * @deprecated
         */
        enable(arg0: boolean): void;
        /**
         * @deprecated
         */
        move(arg0: number, arg1: number): void;
        getLocale(): $Locale;
        setLocale(arg0: $Locale): void;
        isValid(): boolean;
        setSize(arg0: number, arg1: number): void;
        setSize(arg0: $Dimension): void;
        invalidate(): void;
        isVisible(): boolean;
        /**
         * @deprecated
         */
        hide(): void;
        /**
         * @deprecated
         */
        handleEvent(arg0: $Event): boolean;
        dispatchEvent(arg0: $AWTEvent): void;
        setLocation(arg0: number, arg1: number): void;
        setLocation(arg0: $Point): void;
        /**
         * @deprecated
         */
        disable(): void;
        getWidth(): number;
        getListeners<T extends $EventListener>(arg0: $Class<T>): T[];
        addPropertyChangeListener(arg0: $PropertyChangeListener_): void;
        addPropertyChangeListener(arg0: string, arg1: $PropertyChangeListener_): void;
        removePropertyChangeListener(arg0: string, arg1: $PropertyChangeListener_): void;
        removePropertyChangeListener(arg0: $PropertyChangeListener_): void;
        getY(): number;
        getX(): number;
        /**
         * @deprecated
         */
        locate(arg0: number, arg1: number): $Component;
        setEnabled(arg0: boolean): void;
        prepareImage(arg0: $Image, arg1: number, arg2: number, arg3: $ImageObserver_): boolean;
        prepareImage(arg0: $Image, arg1: $ImageObserver_): boolean;
        getTreeLock(): $Object;
        setForeground(arg0: $Color): void;
        getBackground(): $Color;
        getForeground(): $Color;
        getBaseline(arg0: number, arg1: number): number;
        setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setBounds(arg0: $Rectangle): void;
        /**
         * @deprecated
         */
        minimumSize(): $Dimension;
        getCursor(): $Cursor;
        paint(arg0: $Graphics): void;
        hasFocus(): boolean;
        /**
         * @deprecated
         */
        inside(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getGraphicsConfiguration(): $GraphicsConfiguration;
        getFont(): $Font;
        /**
         * @deprecated
         */
        postEvent(arg0: $Event): boolean;
        getMousePosition(): $Point;
        getFontMetrics(arg0: $Font): $FontMetrics;
        /**
         * @deprecated
         */
        mouseEnter(arg0: $Event, arg1: number, arg2: number): boolean;
        createImage(arg0: number, arg1: number): $Image;
        createImage(arg0: $ImageProducer): $Image;
        firePropertyChange(arg0: string, arg1: number, arg2: number): void;
        firePropertyChange(arg0: string, arg1: number, arg2: number): void;
        firePropertyChange(arg0: string, arg1: string, arg2: string): void;
        firePropertyChange(arg0: string, arg1: number, arg2: number): void;
        firePropertyChange(arg0: string, arg1: number, arg2: number): void;
        firePropertyChange(arg0: string, arg1: number, arg2: number): void;
        getPropertyChangeListeners(arg0: string): $PropertyChangeListener[];
        getPropertyChangeListeners(): $PropertyChangeListener[];
        checkImage(arg0: $Image, arg1: number, arg2: number, arg3: $ImageObserver_): number;
        checkImage(arg0: $Image, arg1: $ImageObserver_): number;
        imageUpdate(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        isLightweight(): boolean;
        setCursor(arg0: $Cursor): void;
        getGraphics(): $Graphics;
        getHeight(): number;
        /**
         * @deprecated
         */
        show(): void;
        /**
         * @deprecated
         */
        show(arg0: boolean): void;
        removeNotify(): void;
        addNotify(): void;
        getToolkit(): $Toolkit;
        isShowing(): boolean;
        isFocusOwner(): boolean;
        transferFocus(): void;
        getInputContext(): $InputContext;
        repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
        repaint(): void;
        repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        repaint(arg0: number): void;
        /**
         * @deprecated
         */
        preferredSize(): $Dimension;
        isPreferredSizeSet(): boolean;
        getPreferredSize(): $Dimension;
        getMinimumSize(): $Dimension;
        isMinimumSizeSet(): boolean;
        isMaximumSizeSet(): boolean;
        createVolatileImage(arg0: number, arg1: number, arg2: $ImageCapabilities): $VolatileImage;
        createVolatileImage(arg0: number, arg1: number): $VolatileImage;
        getComponentAt(arg0: number, arg1: number): $Component;
        getComponentAt(arg0: $Point): $Component;
        /**
         * @deprecated
         */
        mouseExit(arg0: $Event, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        gotFocus(arg0: $Event, arg1: $Object): boolean;
        /**
         * @deprecated
         */
        isFocusTraversable(): boolean;
        getFocusTraversalKeys(arg0: number): $Set<$AWTKeyStroke>;
        isFocusCycleRoot(arg0: $Container): boolean;
        getFocusCycleRootAncestor(): $Container;
        /**
         * @deprecated
         */
        nextFocus(): void;
        requestFocusInWindow(arg0: $FocusEvent$Cause_): boolean;
        requestFocusInWindow(): boolean;
        transferFocusBackward(): void;
        addComponentListener(arg0: $ComponentListener): void;
        addFocusListener(arg0: $FocusListener): void;
        addKeyListener(arg0: $KeyListener): void;
        addMouseListener(arg0: $MouseListener): void;
        addMouseMotionListener(arg0: $MouseMotionListener): void;
        addInputMethodListener(arg0: $InputMethodListener): void;
        addHierarchyListener(arg0: $HierarchyListener_): void;
        addHierarchyBoundsListener(arg0: $HierarchyBoundsListener): void;
        addMouseWheelListener(arg0: $MouseWheelListener_): void;
        setComponentOrientation(arg0: $ComponentOrientation): void;
        isDisplayable(): boolean;
        getAccessibleContext(): $AccessibleContext;
        requestFocus(): void;
        requestFocus(arg0: $FocusEvent$Cause_): void;
        isFocusable(): boolean;
        setFocusable(arg0: boolean): void;
        getLocationOnScreen(): $Point;
        setBackground(arg0: $Color): void;
        setVisible(arg0: boolean): void;
        getColorModel(): $ColorModel;
        /**
         * @deprecated
         */
        mouseMove(arg0: $Event, arg1: number, arg2: number): boolean;
        setDropTarget(arg0: $DropTarget): void;
        getDropTarget(): $DropTarget;
        isDoubleBuffered(): boolean;
        enableInputMethods(arg0: boolean): void;
        isForegroundSet(): boolean;
        isBackgroundSet(): boolean;
        isFontSet(): boolean;
        setPreferredSize(arg0: $Dimension): void;
        setMinimumSize(arg0: $Dimension): void;
        getMaximumSize(): $Dimension;
        getAlignmentX(): number;
        getAlignmentY(): number;
        getBaselineResizeBehavior(): $Component$BaselineResizeBehavior;
        doLayout(): void;
        revalidate(): void;
        isCursorSet(): boolean;
        paintAll(arg0: $Graphics): void;
        printAll(arg0: $Graphics): void;
        setIgnoreRepaint(arg0: boolean): void;
        getIgnoreRepaint(): boolean;
        /**
         * @deprecated
         */
        deliverEvent(arg0: $Event): void;
        removeComponentListener(arg0: $ComponentListener): void;
        getComponentListeners(): $ComponentListener[];
        removeFocusListener(arg0: $FocusListener): void;
        getFocusListeners(): $FocusListener[];
        removeHierarchyListener(arg0: $HierarchyListener_): void;
        getHierarchyListeners(): $HierarchyListener[];
        removeHierarchyBoundsListener(arg0: $HierarchyBoundsListener): void;
        getHierarchyBoundsListeners(): $HierarchyBoundsListener[];
        removeKeyListener(arg0: $KeyListener): void;
        getKeyListeners(): $KeyListener[];
        removeMouseListener(arg0: $MouseListener): void;
        getMouseListeners(): $MouseListener[];
        removeMouseMotionListener(arg0: $MouseMotionListener): void;
        getMouseMotionListeners(): $MouseMotionListener[];
        removeMouseWheelListener(arg0: $MouseWheelListener_): void;
        getMouseWheelListeners(): $MouseWheelListener[];
        removeInputMethodListener(arg0: $InputMethodListener): void;
        getInputMethodListeners(): $InputMethodListener[];
        getInputMethodRequests(): $InputMethodRequests;
        setFocusTraversalKeys(arg0: number, arg1: $Set_<$AWTKeyStroke>): void;
        areFocusTraversalKeysSet(arg0: number): boolean;
        setFocusTraversalKeysEnabled(arg0: boolean): void;
        getFocusTraversalKeysEnabled(): boolean;
        transferFocusUpCycle(): void;
        getComponentOrientation(): $ComponentOrientation;
        applyComponentOrientation(arg0: $ComponentOrientation): void;
        setMixingCutoutShape(arg0: $Shape): void;
        setMaximumSize(arg0: $Dimension): void;
        /**
         * @deprecated
         */
        mouseUp(arg0: $Event, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        mouseDrag(arg0: $Event, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        mouseDown(arg0: $Event, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        lostFocus(arg0: $Event, arg1: $Object): boolean;
        /**
         * @deprecated
         */
        keyUp(arg0: $Event, arg1: number): boolean;
        /**
         * @deprecated
         */
        keyDown(arg0: $Event, arg1: number): boolean;
        setFont(arg0: $Font): void;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        get parent(): $Container;
        get opaque(): boolean;
        get valid(): boolean;
        get width(): number;
        get y(): number;
        get x(): number;
        get treeLock(): $Object;
        get graphicsConfiguration(): $GraphicsConfiguration;
        get mousePosition(): $Point;
        get lightweight(): boolean;
        get graphics(): $Graphics;
        get height(): number;
        get toolkit(): $Toolkit;
        get showing(): boolean;
        get focusOwner(): boolean;
        get inputContext(): $InputContext;
        get preferredSizeSet(): boolean;
        get minimumSizeSet(): boolean;
        get maximumSizeSet(): boolean;
        get focusTraversable(): boolean;
        get focusCycleRootAncestor(): $Container;
        get displayable(): boolean;
        get accessibleContext(): $AccessibleContext;
        get locationOnScreen(): $Point;
        get colorModel(): $ColorModel;
        get doubleBuffered(): boolean;
        get foregroundSet(): boolean;
        get backgroundSet(): boolean;
        get fontSet(): boolean;
        get alignmentX(): number;
        get alignmentY(): number;
        get baselineResizeBehavior(): $Component$BaselineResizeBehavior;
        get cursorSet(): boolean;
        get componentListeners(): $ComponentListener[];
        get focusListeners(): $FocusListener[];
        get hierarchyListeners(): $HierarchyListener[];
        get hierarchyBoundsListeners(): $HierarchyBoundsListener[];
        get keyListeners(): $KeyListener[];
        get mouseListeners(): $MouseListener[];
        get mouseMotionListeners(): $MouseMotionListener[];
        get mouseWheelListeners(): $MouseWheelListener[];
        get inputMethodListeners(): $InputMethodListener[];
        get inputMethodRequests(): $InputMethodRequests;
        set mixingCutoutShape(value: $Shape);
    }
    export class $JobAttributes$SidesType extends $AttributeValue {
        static TWO_SIDED_SHORT_EDGE: $JobAttributes$SidesType;
        static TWO_SIDED_LONG_EDGE: $JobAttributes$SidesType;
        static ONE_SIDED: $JobAttributes$SidesType;
    }
    export class $ItemSelectable {
    }
    export interface $ItemSelectable {
        removeItemListener(arg0: $ItemListener_): void;
        addItemListener(arg0: $ItemListener_): void;
        getSelectedObjects(): $Object[];
        get selectedObjects(): $Object[];
    }
    export class $FontMetrics implements $Serializable {
        stringWidth(arg0: string): number;
        getDescent(): number;
        getFont(): $Font;
        charWidth(arg0: number): number;
        charWidth(arg0: string): number;
        getStringBounds(arg0: string, arg1: number, arg2: number, arg3: $Graphics): $Rectangle2D;
        getStringBounds(arg0: $CharacterIterator, arg1: number, arg2: number, arg3: $Graphics): $Rectangle2D;
        getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: $Graphics): $Rectangle2D;
        getStringBounds(arg0: string, arg1: $Graphics): $Rectangle2D;
        getLeading(): number;
        hasUniformLineMetrics(): boolean;
        getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: $Graphics): $LineMetrics;
        getLineMetrics(arg0: $CharacterIterator, arg1: number, arg2: number, arg3: $Graphics): $LineMetrics;
        getLineMetrics(arg0: string, arg1: $Graphics): $LineMetrics;
        getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: $Graphics): $LineMetrics;
        getMaxCharBounds(arg0: $Graphics): $Rectangle2D;
        getHeight(): number;
        getFontRenderContext(): $FontRenderContext;
        getMaxAdvance(): number;
        getAscent(): number;
        getMaxDescent(): number;
        getWidths(): number[];
        charsWidth(arg0: string[], arg1: number, arg2: number): number;
        getMaxAscent(): number;
        /**
         * @deprecated
         */
        getMaxDecent(): number;
        bytesWidth(arg0: number[], arg1: number, arg2: number): number;
        get descent(): number;
        get font(): $Font;
        get leading(): number;
        get height(): number;
        get fontRenderContext(): $FontRenderContext;
        get maxAdvance(): number;
        get ascent(): number;
        get maxDescent(): number;
        get widths(): number[];
        get maxAscent(): number;
        get maxDecent(): number;
    }
    export class $Window extends $Container implements $Accessible {
        getType(): $Window$Type;
        isActive(): boolean;
        getOwner(): $Window;
        dispose(): void;
        getShape(): $Shape;
        setType(arg0: $Window$Type_): void;
        setOpacity(arg0: number): void;
        toFront(): void;
        pack(): void;
        isFocused(): boolean;
        isAlwaysOnTopSupported(): boolean;
        setModalExclusionType(arg0: $Dialog$ModalExclusionType_): void;
        getModalExclusionType(): $Dialog$ModalExclusionType;
        setLocationByPlatform(arg0: boolean): void;
        isAlwaysOnTop(): boolean;
        setAlwaysOnTop(arg0: boolean): void;
        setIconImages(arg0: $List_<$Image>): void;
        toBack(): void;
        getOwnedWindows(): $Window[];
        getFocusableWindowState(): boolean;
        /**
         * @deprecated
         */
        applyResourceBundle(arg0: string): void;
        /**
         * @deprecated
         */
        applyResourceBundle(arg0: $ResourceBundle): void;
        addWindowFocusListener(arg0: $WindowFocusListener): void;
        addWindowStateListener(arg0: $WindowStateListener_): void;
        getIconImages(): $List<$Image>;
        setIconImage(arg0: $Image): void;
        getWarningString(): string;
        static getOwnerlessWindows(): $Window[];
        removeWindowListener(arg0: $WindowListener): void;
        removeWindowStateListener(arg0: $WindowStateListener_): void;
        removeWindowFocusListener(arg0: $WindowFocusListener): void;
        getWindowListeners(): $WindowListener[];
        getWindowFocusListeners(): $WindowFocusListener[];
        getWindowStateListeners(): $WindowStateListener[];
        setFocusableWindowState(arg0: boolean): void;
        setAutoRequestFocus(arg0: boolean): void;
        isAutoRequestFocus(): boolean;
        isLocationByPlatform(): boolean;
        createBufferStrategy(arg0: number, arg1: $BufferCapabilities): void;
        createBufferStrategy(arg0: number): void;
        isFocusableWindow(): boolean;
        getMostRecentFocusOwner(): $Component;
        setShape(arg0: $Shape): void;
        getBufferStrategy(): $BufferStrategy;
        getOpacity(): number;
        getFocusOwner(): $Component;
        setLocationRelativeTo(arg0: $Component): void;
        static getWindows(): $Window[];
        addWindowListener(arg0: $WindowListener): void;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        constructor(arg0: $Frame);
        constructor(arg0: $Window);
        constructor(arg0: $Window, arg1: $GraphicsConfiguration);
        get active(): boolean;
        get owner(): $Window;
        get focused(): boolean;
        get alwaysOnTopSupported(): boolean;
        get ownedWindows(): $Window[];
        set iconImage(value: $Image);
        get warningString(): string;
        static get ownerlessWindows(): $Window[];
        get windowListeners(): $WindowListener[];
        get windowFocusListeners(): $WindowFocusListener[];
        get windowStateListeners(): $WindowStateListener[];
        get focusableWindow(): boolean;
        get mostRecentFocusOwner(): $Component;
        get bufferStrategy(): $BufferStrategy;
        get focusOwner(): $Component;
        set locationRelativeTo(value: $Component);
        static get windows(): $Window[];
    }
    export class $PageAttributes$PrintQualityType extends $AttributeValue {
        static HIGH: $PageAttributes$PrintQualityType;
        static DRAFT: $PageAttributes$PrintQualityType;
        static NORMAL: $PageAttributes$PrintQualityType;
    }
    export class $SecondaryLoop {
    }
    export interface $SecondaryLoop {
        exit(): boolean;
        enter(): boolean;
    }
    export class $PopupMenu extends $Menu {
        show(arg0: $Component, arg1: number, arg2: number): void;
        constructor();
        constructor(arg0: string);
    }
    export class $PaintContext {
    }
    export interface $PaintContext {
        dispose(): void;
        getColorModel(): $ColorModel;
        getRaster(arg0: number, arg1: number, arg2: number, arg3: number): $Raster;
        get colorModel(): $ColorModel;
    }
    export class $GraphicsDevice {
        getType(): number;
        getConfigurations(): $GraphicsConfiguration[];
        getBestConfiguration(arg0: $GraphicsConfigTemplate): $GraphicsConfiguration;
        getFullScreenWindow(): $Window;
        setFullScreenWindow(arg0: $Window): void;
        getDisplayMode(): $DisplayMode;
        isFullScreenSupported(): boolean;
        isDisplayChangeSupported(): boolean;
        setDisplayMode(arg0: $DisplayMode): void;
        getDisplayModes(): $DisplayMode[];
        getAvailableAcceleratedMemory(): number;
        getDefaultConfiguration(): $GraphicsConfiguration;
        isWindowTranslucencySupported(arg0: $GraphicsDevice$WindowTranslucency_): boolean;
        getIDstring(): string;
        static TYPE_IMAGE_BUFFER: number;
        static TYPE_RASTER_SCREEN: number;
        static TYPE_PRINTER: number;
        get type(): number;
        get configurations(): $GraphicsConfiguration[];
        get fullScreenSupported(): boolean;
        get displayChangeSupported(): boolean;
        get displayModes(): $DisplayMode[];
        get availableAcceleratedMemory(): number;
        get defaultConfiguration(): $GraphicsConfiguration;
        get IDstring(): string;
    }
    export class $BufferCapabilities$FlipContents extends $AttributeValue {
        static UNDEFINED: $BufferCapabilities$FlipContents;
        static PRIOR: $BufferCapabilities$FlipContents;
        static COPIED: $BufferCapabilities$FlipContents;
        static BACKGROUND: $BufferCapabilities$FlipContents;
    }
    export class $AWTKeyStroke implements $Serializable {
        getModifiers(): number;
        getKeyCode(): number;
        getKeyChar(): string;
        static getAWTKeyStroke(arg0: number, arg1: number): $AWTKeyStroke;
        static getAWTKeyStroke(arg0: number, arg1: number, arg2: boolean): $AWTKeyStroke;
        static getAWTKeyStroke(arg0: string, arg1: number): $AWTKeyStroke;
        static getAWTKeyStroke(arg0: string): $AWTKeyStroke;
        static getAWTKeyStroke(arg0: string): $AWTKeyStroke;
        static getAWTKeyStrokeForEvent(arg0: $KeyEvent): $AWTKeyStroke;
        isOnKeyRelease(): boolean;
        getKeyEventType(): number;
        get modifiers(): number;
        get keyCode(): number;
        get keyChar(): string;
        get onKeyRelease(): boolean;
        get keyEventType(): number;
    }
    export class $GraphicsConfiguration {
        getBounds(): $Rectangle;
        getNormalizingTransform(): $AffineTransform;
        createCompatibleVolatileImage(arg0: number, arg1: number, arg2: $ImageCapabilities): $VolatileImage;
        createCompatibleVolatileImage(arg0: number, arg1: number, arg2: $ImageCapabilities, arg3: number): $VolatileImage;
        createCompatibleVolatileImage(arg0: number, arg1: number, arg2: number): $VolatileImage;
        createCompatibleVolatileImage(arg0: number, arg1: number): $VolatileImage;
        getImageCapabilities(): $ImageCapabilities;
        getBufferCapabilities(): $BufferCapabilities;
        createCompatibleImage(arg0: number, arg1: number): $BufferedImage;
        createCompatibleImage(arg0: number, arg1: number, arg2: number): $BufferedImage;
        getDefaultTransform(): $AffineTransform;
        isTranslucencyCapable(): boolean;
        getColorModel(): $ColorModel;
        getColorModel(arg0: number): $ColorModel;
        getDevice(): $GraphicsDevice;
        get bounds(): $Rectangle;
        get normalizingTransform(): $AffineTransform;
        get imageCapabilities(): $ImageCapabilities;
        get bufferCapabilities(): $BufferCapabilities;
        get defaultTransform(): $AffineTransform;
        get translucencyCapable(): boolean;
        get device(): $GraphicsDevice;
    }
    export class $Component$BaselineResizeBehavior extends $Enum<$Component$BaselineResizeBehavior> {
        static values(): $Component$BaselineResizeBehavior[];
        static valueOf(arg0: string): $Component$BaselineResizeBehavior;
        static OTHER: $Component$BaselineResizeBehavior;
        static CONSTANT_DESCENT: $Component$BaselineResizeBehavior;
        static CENTER_OFFSET: $Component$BaselineResizeBehavior;
        static CONSTANT_ASCENT: $Component$BaselineResizeBehavior;
    }
    /**
     * Values that may be interpreted as {@link $Component$BaselineResizeBehavior}.
     */
    export type $Component$BaselineResizeBehavior_ = "constant_ascent" | "constant_descent" | "center_offset" | "other";
    export class $Shape {
    }
    export interface $Shape {
        contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $Rectangle2D): boolean;
        contains(arg0: $Point2D): boolean;
        getBounds(): $Rectangle;
        intersects(arg0: $Rectangle2D): boolean;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getBounds2D(): $Rectangle2D;
        getPathIterator(arg0: $AffineTransform, arg1: number): $PathIterator;
        getPathIterator(arg0: $AffineTransform): $PathIterator;
        get bounds(): $Rectangle;
        get bounds2D(): $Rectangle2D;
    }
    export class $Point extends $Point2D implements $Serializable {
        getLocation(): $Point;
        move(arg0: number, arg1: number): void;
        setLocation(arg0: $Point): void;
        setLocation(arg0: number, arg1: number): void;
        translate(arg0: number, arg1: number): void;
        x: number;
        y: number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $Point);
        constructor();
    }
    export class $DisplayMode {
        equals(arg0: $DisplayMode): boolean;
        getWidth(): number;
        getHeight(): number;
        getBitDepth(): number;
        getRefreshRate(): number;
        static BIT_DEPTH_MULTI: number;
        static REFRESH_RATE_UNKNOWN: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get width(): number;
        get height(): number;
        get bitDepth(): number;
        get refreshRate(): number;
    }
    export class $ComponentOrientation implements $Serializable {
        isHorizontal(): boolean;
        static getOrientation(arg0: $Locale): $ComponentOrientation;
        /**
         * @deprecated
         */
        static getOrientation(arg0: $ResourceBundle): $ComponentOrientation;
        isLeftToRight(): boolean;
        static RIGHT_TO_LEFT: $ComponentOrientation;
        static UNKNOWN: $ComponentOrientation;
        static LEFT_TO_RIGHT: $ComponentOrientation;
        get horizontal(): boolean;
        get leftToRight(): boolean;
    }
    export class $Adjustable {
        static VERTICAL: number;
        static NO_ORIENTATION: number;
        static HORIZONTAL: number;
    }
    export interface $Adjustable {
        getValue(): number;
        setValue(arg0: number): void;
        getMaximum(): number;
        getMinimum(): number;
        setMinimum(arg0: number): void;
        getOrientation(): number;
        setMaximum(arg0: number): void;
        getUnitIncrement(): number;
        setUnitIncrement(arg0: number): void;
        getBlockIncrement(): number;
        setBlockIncrement(arg0: number): void;
        setVisibleAmount(arg0: number): void;
        addAdjustmentListener(arg0: $AdjustmentListener_): void;
        removeAdjustmentListener(arg0: $AdjustmentListener_): void;
        getVisibleAmount(): number;
        get orientation(): number;
    }
    export class $RenderingHints$Key {
        isCompatibleValue(arg0: $Object): boolean;
    }
    export class $CompositeContext {
    }
    export interface $CompositeContext {
        compose(arg0: $Raster, arg1: $Raster, arg2: $WritableRaster): void;
        dispose(): void;
    }
    export class $RenderingHints implements $Map<$Object, $Object>, $Cloneable {
        remove(arg0: $Object): $Object;
        size(): number;
        get(arg0: $Object): $Object;
        put(arg0: $Object, arg1: $Object): $Object;
        values(): $Collection<$Object>;
        clone(): $Object;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $RenderingHints): void;
        entrySet(): $Set<$Map$Entry<$Object, $Object>>;
        putAll(arg0: $Map_<never, never>): void;
        containsKey(arg0: $Object): boolean;
        keySet(): $Set<$Object>;
        containsValue(arg0: $Object): boolean;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: $Object, arg1: $Object, arg2: $Object): boolean;
        replace(arg0: $Object, arg1: $Object): $Object;
        replaceAll(arg0: $BiFunction_<$Object, $Object, $Object>): void;
        merge(arg0: $Object, arg1: $Object, arg2: $BiFunction_<$Object, $Object, $Object>): $Object;
        putIfAbsent(arg0: $Object, arg1: $Object): $Object;
        compute(arg0: $Object, arg1: $BiFunction_<$Object, $Object, $Object>): $Object;
        forEach(arg0: $BiConsumer_<$Object, $Object>): void;
        computeIfAbsent(arg0: $Object, arg1: $Function_<$Object, $Object>): $Object;
        getOrDefault(arg0: $Object, arg1: $Object): $Object;
        computeIfPresent(arg0: $Object, arg1: $BiFunction_<$Object, $Object, $Object>): $Object;
        static VALUE_TEXT_ANTIALIAS_LCD_VRGB: $Object;
        static VALUE_TEXT_ANTIALIAS_LCD_VBGR: $Object;
        static KEY_FRACTIONALMETRICS: $RenderingHints$Key;
        static VALUE_RESOLUTION_VARIANT_SIZE_FIT: $Object;
        static VALUE_TEXT_ANTIALIAS_DEFAULT: $Object;
        static VALUE_TEXT_ANTIALIAS_OFF: $Object;
        static VALUE_ANTIALIAS_OFF: $Object;
        static VALUE_INTERPOLATION_BICUBIC: $Object;
        static VALUE_COLOR_RENDER_QUALITY: $Object;
        static VALUE_COLOR_RENDER_DEFAULT: $Object;
        static VALUE_STROKE_DEFAULT: $Object;
        static VALUE_RENDER_DEFAULT: $Object;
        static VALUE_RENDER_QUALITY: $Object;
        static KEY_ALPHA_INTERPOLATION: $RenderingHints$Key;
        static KEY_DITHERING: $RenderingHints$Key;
        static VALUE_FRACTIONALMETRICS_OFF: $Object;
        static VALUE_ANTIALIAS_DEFAULT: $Object;
        static VALUE_ALPHA_INTERPOLATION_SPEED: $Object;
        static KEY_TEXT_ANTIALIASING: $RenderingHints$Key;
        static VALUE_TEXT_ANTIALIAS_GASP: $Object;
        static KEY_TEXT_LCD_CONTRAST: $RenderingHints$Key;
        static VALUE_RENDER_SPEED: $Object;
        static VALUE_FRACTIONALMETRICS_ON: $Object;
        static VALUE_RESOLUTION_VARIANT_DEFAULT: $Object;
        static KEY_ANTIALIASING: $RenderingHints$Key;
        static VALUE_DITHER_ENABLE: $Object;
        static KEY_STROKE_CONTROL: $RenderingHints$Key;
        static VALUE_STROKE_PURE: $Object;
        static KEY_RENDERING: $RenderingHints$Key;
        static VALUE_DITHER_DEFAULT: $Object;
        static KEY_RESOLUTION_VARIANT: $RenderingHints$Key;
        static VALUE_INTERPOLATION_BILINEAR: $Object;
        static VALUE_ALPHA_INTERPOLATION_QUALITY: $Object;
        static VALUE_RESOLUTION_VARIANT_BASE: $Object;
        static KEY_COLOR_RENDERING: $RenderingHints$Key;
        static VALUE_RESOLUTION_VARIANT_DPI_FIT: $Object;
        static VALUE_ANTIALIAS_ON: $Object;
        static VALUE_STROKE_NORMALIZE: $Object;
        static VALUE_FRACTIONALMETRICS_DEFAULT: $Object;
        static VALUE_INTERPOLATION_NEAREST_NEIGHBOR: $Object;
        static VALUE_DITHER_DISABLE: $Object;
        static VALUE_TEXT_ANTIALIAS_LCD_HRGB: $Object;
        static VALUE_TEXT_ANTIALIAS_LCD_HBGR: $Object;
        static KEY_INTERPOLATION: $RenderingHints$Key;
        static VALUE_ALPHA_INTERPOLATION_DEFAULT: $Object;
        static VALUE_TEXT_ANTIALIAS_ON: $Object;
        static VALUE_COLOR_RENDER_SPEED: $Object;
        constructor(arg0: $Map_<$RenderingHints$Key, never>);
        constructor(arg0: $RenderingHints$Key, arg1: $Object);
        get empty(): boolean;
    }
    export class $ImageCapabilities implements $Cloneable {
        clone(): $Object;
        isAccelerated(): boolean;
        isTrueVolatile(): boolean;
        constructor(arg0: boolean);
        get accelerated(): boolean;
        get trueVolatile(): boolean;
    }
    export class $Rectangle extends $Rectangle2D implements $Shape, $Serializable {
        add(arg0: $Point): void;
        add(arg0: $Rectangle): void;
        add(arg0: number, arg1: number): void;
        contains(arg0: $Rectangle): boolean;
        contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        contains(arg0: $Point): boolean;
        contains(arg0: number, arg1: number): boolean;
        getLocation(): $Point;
        getSize(): $Dimension;
        grow(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        resize(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        move(arg0: number, arg1: number): void;
        setSize(arg0: number, arg1: number): void;
        setSize(arg0: $Dimension): void;
        union(arg0: $Rectangle): $Rectangle;
        setLocation(arg0: number, arg1: number): void;
        setLocation(arg0: $Point): void;
        setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setBounds(arg0: $Rectangle): void;
        intersects(arg0: $Rectangle): boolean;
        intersection(arg0: $Rectangle): $Rectangle;
        translate(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        inside(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static OUT_TOP: number;
        static OUT_RIGHT: number;
        x: number;
        width: number;
        y: number;
        static OUT_BOTTOM: number;
        static OUT_LEFT: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Dimension);
        constructor(arg0: $Point, arg1: $Dimension);
        constructor(arg0: $Point);
        constructor(arg0: $Rectangle);
        constructor();
        constructor(arg0: number, arg1: number);
    }
    export class $Container extends $Component {
        remove(arg0: $Component): void;
        remove(arg0: number): void;
        add(arg0: $Component): $Component;
        add(arg0: $Component, arg1: $Object): void;
        add(arg0: $Component, arg1: number): $Component;
        add(arg0: $Component, arg1: $Object, arg2: number): void;
        add(arg0: string, arg1: $Component): $Component;
        removeAll(): void;
        getComponent(arg0: number): $Component;
        getLayout(): $LayoutManager;
        setLayout(arg0: $LayoutManager): void;
        getMousePosition(arg0: boolean): $Point;
        getInsets(): $Insets;
        getComponents(): $Component[];
        setFocusTraversalPolicy(arg0: $FocusTraversalPolicy): void;
        findComponentAt(arg0: number, arg1: number): $Component;
        findComponentAt(arg0: $Point): $Component;
        /**
         * @deprecated
         */
        countComponents(): number;
        isValidateRoot(): boolean;
        isFocusCycleRoot(): boolean;
        getFocusTraversalPolicy(): $FocusTraversalPolicy;
        isAncestorOf(arg0: $Component): boolean;
        getComponentCount(): number;
        /**
         * @deprecated
         */
        insets(): $Insets;
        isFocusTraversalPolicyProvider(): boolean;
        addContainerListener(arg0: $ContainerListener): void;
        setComponentZOrder(arg0: $Component, arg1: number): void;
        paintComponents(arg0: $Graphics): void;
        printComponents(arg0: $Graphics): void;
        removeContainerListener(arg0: $ContainerListener): void;
        getContainerListeners(): $ContainerListener[];
        isFocusTraversalPolicySet(): boolean;
        setFocusCycleRoot(arg0: boolean): void;
        setFocusTraversalPolicyProvider(arg0: boolean): void;
        transferFocusDownCycle(): void;
        getComponentZOrder(arg0: $Component): number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        constructor();
        get components(): $Component[];
        get validateRoot(): boolean;
        get componentCount(): number;
        get containerListeners(): $ContainerListener[];
        get focusTraversalPolicySet(): boolean;
    }
    export class $JobAttributes$MultipleDocumentHandlingType extends $AttributeValue {
        static SEPARATE_DOCUMENTS_COLLATED_COPIES: $JobAttributes$MultipleDocumentHandlingType;
        static SEPARATE_DOCUMENTS_UNCOLLATED_COPIES: $JobAttributes$MultipleDocumentHandlingType;
    }
    export class $Composite {
    }
    export interface $Composite {
        createContext(arg0: $ColorModel, arg1: $ColorModel, arg2: $RenderingHints): $CompositeContext;
    }
    /**
     * Values that may be interpreted as {@link $Composite}.
     */
    export type $Composite_ = ((arg0: $ColorModel, arg1: $ColorModel, arg2: $RenderingHints) => $CompositeContext);
    export class $PrintJob {
        /**
         * @deprecated
         */
        finalize(): void;
        end(): void;
        getGraphics(): $Graphics;
        getPageDimension(): $Dimension;
        getPageResolution(): number;
        lastPageFirst(): boolean;
        get graphics(): $Graphics;
        get pageDimension(): $Dimension;
        get pageResolution(): number;
    }
    export class $PageAttributes$OrientationRequestedType extends $AttributeValue {
        static LANDSCAPE: $PageAttributes$OrientationRequestedType;
        static PORTRAIT: $PageAttributes$OrientationRequestedType;
    }
    export class $LayoutManager {
    }
    export interface $LayoutManager {
        removeLayoutComponent(arg0: $Component): void;
        addLayoutComponent(arg0: string, arg1: $Component): void;
        layoutContainer(arg0: $Container): void;
        preferredLayoutSize(arg0: $Container): $Dimension;
        minimumLayoutSize(arg0: $Container): $Dimension;
    }
    export class $Color implements $Paint, $Serializable {
        static decode(arg0: string): $Color;
        createContext(arg0: $ColorModel, arg1: $Rectangle, arg2: $Rectangle2D, arg3: $AffineTransform, arg4: $RenderingHints): $PaintContext;
        getAlpha(): number;
        getTransparency(): number;
        static getColor(arg0: string, arg1: $Color): $Color;
        static getColor(arg0: string): $Color;
        static getColor(arg0: string, arg1: number): $Color;
        getComponents(arg0: $ColorSpace, arg1: number[]): number[];
        getComponents(arg0: number[]): number[];
        getRGBComponents(arg0: number[]): number[];
        getRGBColorComponents(arg0: number[]): number[];
        brighter(): $Color;
        darker(): $Color;
        static getHSBColor(arg0: number, arg1: number, arg2: number): $Color;
        getColorComponents(arg0: $ColorSpace, arg1: number[]): number[];
        getColorComponents(arg0: number[]): number[];
        getColorSpace(): $ColorSpace;
        static HSBtoRGB(arg0: number, arg1: number, arg2: number): number;
        static RGBtoHSB(arg0: number, arg1: number, arg2: number, arg3: number[]): number[];
        getRed(): number;
        getBlue(): number;
        getGreen(): number;
        getRGB(): number;
        static lightGray: $Color;
        static magenta: $Color;
        static GRAY: $Color;
        static pink: $Color;
        static BLUE: $Color;
        static yellow: $Color;
        static cyan: $Color;
        static red: $Color;
        static gray: $Color;
        static PINK: $Color;
        static white: $Color;
        static BLACK: $Color;
        static ORANGE: $Color;
        static WHITE: $Color;
        static green: $Color;
        static black: $Color;
        static GREEN: $Color;
        static RED: $Color;
        static orange: $Color;
        static LIGHT_GRAY: $Color;
        static blue: $Color;
        static darkGray: $Color;
        static MAGENTA: $Color;
        static YELLOW: $Color;
        static DARK_GRAY: $Color;
        static CYAN: $Color;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number);
        constructor(arg0: number, arg1: boolean);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $ColorSpace, arg1: number[], arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get alpha(): number;
        get transparency(): number;
        get colorSpace(): $ColorSpace;
        get RGB(): number;
    }
    export class $MenuItem extends $MenuComponent implements $Accessible {
        isEnabled(): boolean;
        paramString(): string;
        /**
         * @deprecated
         */
        enable(arg0: boolean): void;
        /**
         * @deprecated
         */
        enable(): void;
        setLabel(arg0: string): void;
        removeActionListener(arg0: $ActionListener_): void;
        setActionCommand(arg0: string): void;
        getActionListeners(): $ActionListener[];
        /**
         * @deprecated
         */
        disable(): void;
        getLabel(): string;
        getListeners<T extends $EventListener>(arg0: $Class<T>): T[];
        setEnabled(arg0: boolean): void;
        getShortcut(): $MenuShortcut;
        deleteShortcut(): void;
        setShortcut(arg0: $MenuShortcut): void;
        addNotify(): void;
        getActionCommand(): string;
        addActionListener(arg0: $ActionListener_): void;
        constructor(arg0: string, arg1: $MenuShortcut);
        constructor(arg0: string);
        constructor();
        get actionListeners(): $ActionListener[];
    }
    export class $AWTEvent extends $EventObject {
        paramString(): string;
        getID(): number;
        setSource(arg0: $Object): void;
        static ADJUSTMENT_EVENT_MASK: number;
        static MOUSE_EVENT_MASK: number;
        static COMPONENT_EVENT_MASK: number;
        static PAINT_EVENT_MASK: number;
        static INPUT_METHOD_EVENT_MASK: number;
        static HIERARCHY_BOUNDS_EVENT_MASK: number;
        static FOCUS_EVENT_MASK: number;
        static TEXT_EVENT_MASK: number;
        static INVOCATION_EVENT_MASK: number;
        static KEY_EVENT_MASK: number;
        static RESERVED_ID_MAX: number;
        static ACTION_EVENT_MASK: number;
        static ITEM_EVENT_MASK: number;
        static CONTAINER_EVENT_MASK: number;
        static WINDOW_EVENT_MASK: number;
        static HIERARCHY_EVENT_MASK: number;
        static WINDOW_STATE_EVENT_MASK: number;
        static MOUSE_WHEEL_EVENT_MASK: number;
        static MOUSE_MOTION_EVENT_MASK: number;
        static WINDOW_FOCUS_EVENT_MASK: number;
        constructor(arg0: $Object, arg1: number);
        /**
         * @deprecated
         */
        constructor(arg0: $Event);
        get ID(): number;
        set source(value: $Object);
    }
    export class $PageAttributes implements $Cloneable {
        clone(): $Object;
        set(arg0: $PageAttributes): void;
        setColor(arg0: $PageAttributes$ColorType): void;
        getOrigin(): $PageAttributes$OriginType;
        getColor(): $PageAttributes$ColorType;
        setOrigin(arg0: $PageAttributes$OriginType): void;
        setMediaToDefault(): void;
        setOrientationRequestedToDefault(): void;
        setPrintQualityToDefault(): void;
        setPrinterResolutionToDefault(): void;
        setMedia(arg0: $PageAttributes$MediaType): void;
        setOrientationRequested(arg0: number): void;
        setOrientationRequested(arg0: $PageAttributes$OrientationRequestedType): void;
        setPrintQuality(arg0: $PageAttributes$PrintQualityType): void;
        setPrintQuality(arg0: number): void;
        setPrinterResolution(arg0: number[]): void;
        setPrinterResolution(arg0: number): void;
        getMedia(): $PageAttributes$MediaType;
        getOrientationRequested(): $PageAttributes$OrientationRequestedType;
        getPrintQuality(): $PageAttributes$PrintQualityType;
        getPrinterResolution(): number[];
        constructor(arg0: $PageAttributes$ColorType, arg1: $PageAttributes$MediaType, arg2: $PageAttributes$OrientationRequestedType, arg3: $PageAttributes$OriginType, arg4: $PageAttributes$PrintQualityType, arg5: number[]);
        constructor(arg0: $PageAttributes);
        constructor();
    }
    export class $JobAttributes implements $Cloneable {
        clone(): $Object;
        set(arg0: $JobAttributes): void;
        getFileName(): string;
        setFileName(arg0: string): void;
        getDestination(): $JobAttributes$DestinationType;
        setDestination(arg0: $JobAttributes$DestinationType): void;
        getSides(): $JobAttributes$SidesType;
        getMaxPage(): number;
        setCopiesToDefault(): void;
        setDefaultSelection(arg0: $JobAttributes$DefaultSelectionType): void;
        setDialog(arg0: $JobAttributes$DialogType): void;
        setMaxPage(arg0: number): void;
        setMinPage(arg0: number): void;
        setMultipleDocumentHandlingToDefault(): void;
        setSidesToDefault(): void;
        setCopies(arg0: number): void;
        setMultipleDocumentHandling(arg0: $JobAttributes$MultipleDocumentHandlingType): void;
        setPageRanges(arg0: number[][]): void;
        setPrinter(arg0: string): void;
        getMinPage(): number;
        getFromPage(): number;
        getToPage(): number;
        getPageRanges(): number[][];
        getCopies(): number;
        getDefaultSelection(): $JobAttributes$DefaultSelectionType;
        getDialog(): $JobAttributes$DialogType;
        getMultipleDocumentHandling(): $JobAttributes$MultipleDocumentHandlingType;
        getPrinter(): string;
        setFromPage(arg0: number): void;
        setToPage(arg0: number): void;
        setSides(arg0: $JobAttributes$SidesType): void;
        constructor(arg0: number, arg1: $JobAttributes$DefaultSelectionType, arg2: $JobAttributes$DestinationType, arg3: $JobAttributes$DialogType, arg4: string, arg5: number, arg6: number, arg7: $JobAttributes$MultipleDocumentHandlingType, arg8: number[][], arg9: string, arg10: $JobAttributes$SidesType);
        constructor(arg0: $JobAttributes);
        constructor();
    }
    export class $Image {
        getProperty(arg0: string, arg1: $ImageObserver_): $Object;
        flush(): void;
        getSource(): $ImageProducer;
        getCapabilities(arg0: $GraphicsConfiguration): $ImageCapabilities;
        getWidth(arg0: $ImageObserver_): number;
        getGraphics(): $Graphics;
        getHeight(arg0: $ImageObserver_): number;
        setAccelerationPriority(arg0: number): void;
        getScaledInstance(arg0: number, arg1: number, arg2: number): $Image;
        getAccelerationPriority(): number;
        static SCALE_DEFAULT: number;
        static UndefinedProperty: $Object;
        static SCALE_FAST: number;
        static SCALE_AREA_AVERAGING: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        get source(): $ImageProducer;
        get graphics(): $Graphics;
    }
    export class $Frame extends $Window implements $MenuContainer {
        getState(): number;
        setState(arg0: number): void;
        setTitle(arg0: string): void;
        getTitle(): string;
        setMenuBar(arg0: $MenuBar): void;
        getMenuBar(): $MenuBar;
        /**
         * @deprecated
         */
        setCursor(arg0: number): void;
        static getFrames(): $Frame[];
        isResizable(): boolean;
        setUndecorated(arg0: boolean): void;
        setMaximizedBounds(arg0: $Rectangle): void;
        setResizable(arg0: boolean): void;
        getExtendedState(): number;
        setExtendedState(arg0: number): void;
        isUndecorated(): boolean;
        getIconImage(): $Image;
        getMaximizedBounds(): $Rectangle;
        /**
         * @deprecated
         */
        getCursorType(): number;
        /**
         * @deprecated
         */
        static N_RESIZE_CURSOR: number;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static MAXIMIZED_HORIZ: number;
        static ICONIFIED: number;
        /**
         * @deprecated
         */
        static S_RESIZE_CURSOR: number;
        /**
         * @deprecated
         */
        static TEXT_CURSOR: number;
        static MAXIMIZED_BOTH: number;
        /**
         * @deprecated
         */
        static NW_RESIZE_CURSOR: number;
        /**
         * @deprecated
         */
        static W_RESIZE_CURSOR: number;
        /**
         * @deprecated
         */
        static SE_RESIZE_CURSOR: number;
        /**
         * @deprecated
         */
        static NE_RESIZE_CURSOR: number;
        static LEFT_ALIGNMENT: number;
        /**
         * @deprecated
         */
        static SW_RESIZE_CURSOR: number;
        static RIGHT_ALIGNMENT: number;
        static MAXIMIZED_VERT: number;
        static TOP_ALIGNMENT: number;
        /**
         * @deprecated
         */
        static DEFAULT_CURSOR: number;
        /**
         * @deprecated
         */
        static CROSSHAIR_CURSOR: number;
        /**
         * @deprecated
         */
        static E_RESIZE_CURSOR: number;
        /**
         * @deprecated
         */
        static HAND_CURSOR: number;
        /**
         * @deprecated
         */
        static WAIT_CURSOR: number;
        static NORMAL: number;
        /**
         * @deprecated
         */
        static MOVE_CURSOR: number;
        constructor(arg0: string, arg1: $GraphicsConfiguration);
        constructor(arg0: string);
        constructor(arg0: $GraphicsConfiguration);
        constructor();
        set cursor(value: number);
        static get frames(): $Frame[];
        get iconImage(): $Image;
        get cursorType(): number;
    }
    export class $Insets implements $Cloneable, $Serializable {
        clone(): $Object;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        top: number;
        left: number;
        bottom: number;
        right: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $EventQueue {
        push(arg0: $EventQueue): void;
        peekEvent(): $AWTEvent;
        peekEvent(arg0: number): $AWTEvent;
        createSecondaryLoop(): $SecondaryLoop;
        getNextEvent(): $AWTEvent;
        static getMostRecentEventTime(): number;
        postEvent(arg0: $AWTEvent): void;
        static invokeLater(arg0: $Runnable_): void;
        static isDispatchThread(): boolean;
        static invokeAndWait(arg0: $Runnable_): void;
        static getCurrentEvent(): $AWTEvent;
        constructor();
        get nextEvent(): $AWTEvent;
        static get mostRecentEventTime(): number;
        static get dispatchThread(): boolean;
        static get currentEvent(): $AWTEvent;
    }
    export class $JobAttributes$DestinationType extends $AttributeValue {
        static PRINTER: $JobAttributes$DestinationType;
        static FILE: $JobAttributes$DestinationType;
    }
    export class $Dialog$ModalityType extends $Enum<$Dialog$ModalityType> {
        static values(): $Dialog$ModalityType[];
        static valueOf(arg0: string): $Dialog$ModalityType;
        static TOOLKIT_MODAL: $Dialog$ModalityType;
        static APPLICATION_MODAL: $Dialog$ModalityType;
        static MODELESS: $Dialog$ModalityType;
        static DOCUMENT_MODAL: $Dialog$ModalityType;
    }
    /**
     * Values that may be interpreted as {@link $Dialog$ModalityType}.
     */
    export type $Dialog$ModalityType_ = "modeless" | "document_modal" | "application_modal" | "toolkit_modal";
}
