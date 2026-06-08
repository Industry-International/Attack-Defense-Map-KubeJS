import { $Serializable } from "@package/java/io";
import { $Transferable, $FlavorMap, $DataFlavor } from "@package/java/awt/datatransfer";
import { $InputEvent } from "@package/java/awt/event";
import { $Cursor, $Point, $Component, $Image } from "@package/java/awt";
import { $Object, $Class } from "@package/java/lang";
import { $Iterator, $EventObject, $List, $EventListener, $List_ } from "@package/java/util";

declare module "@package/java/awt/dnd" {
    export class $DropTargetListener {
    }
    export interface $DropTargetListener extends $EventListener {
        drop(arg0: $DropTargetDropEvent): void;
        dragEnter(arg0: $DropTargetDragEvent): void;
        dragOver(arg0: $DropTargetDragEvent): void;
        dropActionChanged(arg0: $DropTargetDragEvent): void;
        dragExit(arg0: $DropTargetEvent): void;
    }
    export class $DragGestureListener {
    }
    export interface $DragGestureListener extends $EventListener {
        dragGestureRecognized(arg0: $DragGestureEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $DragGestureListener}.
     */
    export type $DragGestureListener_ = ((arg0: $DragGestureEvent) => void);
    export class $DropTarget implements $DropTargetListener, $Serializable {
        isActive(): boolean;
        drop(arg0: $DropTargetDropEvent): void;
        getComponent(): $Component;
        setActive(arg0: boolean): void;
        setComponent(arg0: $Component): void;
        removeNotify(): void;
        addNotify(): void;
        dragEnter(arg0: $DropTargetDragEvent): void;
        getDefaultActions(): number;
        removeDropTargetListener(arg0: $DropTargetListener): void;
        getFlavorMap(): $FlavorMap;
        setFlavorMap(arg0: $FlavorMap): void;
        setDefaultActions(arg0: number): void;
        addDropTargetListener(arg0: $DropTargetListener): void;
        getDropTargetContext(): $DropTargetContext;
        dragOver(arg0: $DropTargetDragEvent): void;
        dropActionChanged(arg0: $DropTargetDragEvent): void;
        dragExit(arg0: $DropTargetEvent): void;
        constructor(arg0: $Component, arg1: number, arg2: $DropTargetListener);
        constructor(arg0: $Component, arg1: $DropTargetListener);
        constructor();
        constructor(arg0: $Component, arg1: number, arg2: $DropTargetListener, arg3: boolean);
        constructor(arg0: $Component, arg1: number, arg2: $DropTargetListener, arg3: boolean, arg4: $FlavorMap);
        get dropTargetContext(): $DropTargetContext;
    }
    export class $DragGestureRecognizer implements $Serializable {
        getComponent(): $Component;
        setComponent(arg0: $Component): void;
        getSourceActions(): number;
        setSourceActions(arg0: number): void;
        addDragGestureListener(arg0: $DragGestureListener_): void;
        getDragSource(): $DragSource;
        getTriggerEvent(): $InputEvent;
        resetRecognizer(): void;
        removeDragGestureListener(arg0: $DragGestureListener_): void;
        get dragSource(): $DragSource;
        get triggerEvent(): $InputEvent;
    }
    export class $DropTargetContext implements $Serializable {
        getComponent(): $Component;
        dropComplete(arg0: boolean): void;
        getDropTarget(): $DropTarget;
        get component(): $Component;
        get dropTarget(): $DropTarget;
    }
    export class $DragSource implements $Serializable {
        getListeners<T extends $EventListener>(arg0: $Class<T>): T[];
        static getDragThreshold(): number;
        createDragGestureRecognizer<T extends $DragGestureRecognizer>(arg0: $Class<T>, arg1: $Component, arg2: number, arg3: $DragGestureListener_): T;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Transferable, arg3: $DragSourceListener, arg4: $FlavorMap): void;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Image, arg3: $Point, arg4: $Transferable, arg5: $DragSourceListener, arg6: $FlavorMap): void;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Transferable, arg3: $DragSourceListener): void;
        startDrag(arg0: $DragGestureEvent, arg1: $Cursor, arg2: $Image, arg3: $Point, arg4: $Transferable, arg5: $DragSourceListener): void;
        getFlavorMap(): $FlavorMap;
        addDragSourceListener(arg0: $DragSourceListener): void;
        addDragSourceMotionListener(arg0: $DragSourceMotionListener_): void;
        static isDragImageSupported(): boolean;
        createDefaultDragGestureRecognizer(arg0: $Component, arg1: number, arg2: $DragGestureListener_): $DragGestureRecognizer;
        removeDragSourceListener(arg0: $DragSourceListener): void;
        getDragSourceListeners(): $DragSourceListener[];
        removeDragSourceMotionListener(arg0: $DragSourceMotionListener_): void;
        getDragSourceMotionListeners(): $DragSourceMotionListener[];
        static getDefaultDragSource(): $DragSource;
        static DefaultCopyNoDrop: $Cursor;
        static DefaultMoveNoDrop: $Cursor;
        static DefaultMoveDrop: $Cursor;
        static DefaultLinkDrop: $Cursor;
        static DefaultLinkNoDrop: $Cursor;
        static DefaultCopyDrop: $Cursor;
        constructor();
        static get dragThreshold(): number;
        get flavorMap(): $FlavorMap;
        static get dragImageSupported(): boolean;
        get dragSourceListeners(): $DragSourceListener[];
        get dragSourceMotionListeners(): $DragSourceMotionListener[];
        static get defaultDragSource(): $DragSource;
    }
    export class $DragGestureEvent extends $EventObject {
        toArray(arg0: $Object[]): $Object[];
        toArray(): $Object[];
        iterator(): $Iterator<$InputEvent>;
        getComponent(): $Component;
        getSourceAsDragGestureRecognizer(): $DragGestureRecognizer;
        getDragOrigin(): $Point;
        getDragAction(): number;
        startDrag(arg0: $Cursor, arg1: $Image, arg2: $Point, arg3: $Transferable, arg4: $DragSourceListener): void;
        startDrag(arg0: $Cursor, arg1: $Transferable, arg2: $DragSourceListener): void;
        startDrag(arg0: $Cursor, arg1: $Transferable): void;
        getDragSource(): $DragSource;
        getTriggerEvent(): $InputEvent;
        constructor(arg0: $DragGestureRecognizer, arg1: number, arg2: $Point, arg3: $List_<$InputEvent>);
        get component(): $Component;
        get sourceAsDragGestureRecognizer(): $DragGestureRecognizer;
        get dragOrigin(): $Point;
        get dragAction(): number;
        get dragSource(): $DragSource;
        get triggerEvent(): $InputEvent;
    }
    export class $DropTargetEvent extends $EventObject {
        getDropTargetContext(): $DropTargetContext;
        constructor(arg0: $DropTargetContext);
        get dropTargetContext(): $DropTargetContext;
    }
    export class $DropTargetDragEvent extends $DropTargetEvent {
        getLocation(): $Point;
        acceptDrag(arg0: number): void;
        rejectDrag(): void;
        getCurrentDataFlavorsAsList(): $List<$DataFlavor>;
        getSourceActions(): number;
        getTransferable(): $Transferable;
        isDataFlavorSupported(arg0: $DataFlavor): boolean;
        getDropAction(): number;
        getCurrentDataFlavors(): $DataFlavor[];
        constructor(arg0: $DropTargetContext, arg1: $Point, arg2: number, arg3: number);
        get location(): $Point;
        get currentDataFlavorsAsList(): $List<$DataFlavor>;
        get sourceActions(): number;
        get transferable(): $Transferable;
        get dropAction(): number;
        get currentDataFlavors(): $DataFlavor[];
    }
    export class $DragSourceListener {
    }
    export interface $DragSourceListener extends $EventListener {
        dragEnter(arg0: $DragSourceDragEvent): void;
        dragDropEnd(arg0: $DragSourceDropEvent): void;
        dragOver(arg0: $DragSourceDragEvent): void;
        dropActionChanged(arg0: $DragSourceDragEvent): void;
        dragExit(arg0: $DragSourceEvent): void;
    }
    export class $DragSourceMotionListener {
    }
    export interface $DragSourceMotionListener extends $EventListener {
        dragMouseMoved(arg0: $DragSourceDragEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $DragSourceMotionListener}.
     */
    export type $DragSourceMotionListener_ = ((arg0: $DragSourceDragEvent) => void);
    export class $DropTargetDropEvent extends $DropTargetEvent {
        getLocation(): $Point;
        dropComplete(arg0: boolean): void;
        acceptDrop(arg0: number): void;
        getCurrentDataFlavorsAsList(): $List<$DataFlavor>;
        isLocalTransfer(): boolean;
        getSourceActions(): number;
        getTransferable(): $Transferable;
        isDataFlavorSupported(arg0: $DataFlavor): boolean;
        getDropAction(): number;
        getCurrentDataFlavors(): $DataFlavor[];
        rejectDrop(): void;
        constructor(arg0: $DropTargetContext, arg1: $Point, arg2: number, arg3: number);
        constructor(arg0: $DropTargetContext, arg1: $Point, arg2: number, arg3: number, arg4: boolean);
        get location(): $Point;
        get currentDataFlavorsAsList(): $List<$DataFlavor>;
        get localTransfer(): boolean;
        get sourceActions(): number;
        get transferable(): $Transferable;
        get dropAction(): number;
        get currentDataFlavors(): $DataFlavor[];
    }
}
