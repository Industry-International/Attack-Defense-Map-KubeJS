import { $Consumer } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $ModularUI, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/event" {
    export class $UIEvents {
        static DRAG_PERFORM: string;
        static FOCUS_IN: string;
        static MOUSE_WHEEL: string;
        static FOCUS: string;
        static STYLE_CHANGED: string;
        static MOUSE_UP: string;
        static LAYOUT_CHANGED: string;
        static ADDED: string;
        static DRAG_SOURCE_UPDATE: string;
        static FOCUS_OUT: string;
        static DOUBLE_CLICK: string;
        static REMOVED: string;
        static MUI_CHANGED: string;
        static KEY_DOWN: string;
        static DRAG_UPDATE: string;
        static CHAR_TYPED: string;
        static KEY_UP: string;
        static EXECUTE_COMMAND: string;
        static MOUSE_DOWN: string;
        static DRAG_ENTER: string;
        static DRAG_LEAVE: string;
        static MOUSE_MOVE: string;
        static HOVER_TOOLTIPS: string;
        static MOUSE_ENTER: string;
        static BLUR: string;
        static MOUSE_LEAVE: string;
        static VALIDATE_COMMAND: string;
        static TICK: string;
        static CLICK: string;
        static DRAG_END: string;
    }
    export interface $UIEvents {
    }
    export class $HoverTooltips extends $Record {
        stack(arg0: $ItemStack_): $HoverTooltips;
        append(...arg0: $Component_[]): $HoverTooltips;
        static empty(): $HoverTooltips;
        font(arg0: $Font): $HoverTooltips;
        tooltipStack(): $ItemStack;
        tooltipComponent(arg0: $TooltipComponent): $HoverTooltips;
        tooltipComponent(): $TooltipComponent;
        tooltipTexts(): $List<$Component>;
        tooltipFont(): $Font;
        constructor(tooltipTexts: $List_<$Component_>, tooltipComponent: $TooltipComponent, tooltipFont: $Font, tooltipStack: $ItemStack_);
    }
    export class $DragHandler {
        startDrag(arg0: $Object, arg1: $IGuiTexture_): void;
        startDrag(arg0: $Object, arg1: $IGuiTexture_, arg2: $UIElement): void;
        startDrag(arg0: $Object, arg1: $IGuiTexture_, arg2: $UIElement, arg3: $UIElement): void;
        startDrag(arg0: $Object): void;
        startDrag(): void;
        setOffsetY(arg0: number): void;
        setOffsetX(arg0: number): void;
        stopDrag(arg0: $UIElement): void;
        stopDrag(): void;
        setDragTexture(arg0: number, arg1: number, arg2: number, arg3: number): void;
        isDragging(): boolean;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getDraggingObject<T>(): T;
        setStartX(arg0: number): void;
        setStartY(arg0: number): void;
        dragTexture: $IGuiTexture;
        offsetX: number;
        offsetY: number;
        modularUI: $ModularUI;
        width: number;
        startY: number;
        draggingObject: $Object;
        startX: number;
        dragSource: $UIElement;
        height: number;
        constructor(arg0: $ModularUI);
        get dragging(): boolean;
    }
    export class $UIEvent$EventPhase extends $Enum<$UIEvent$EventPhase> {
        static values(): $UIEvent$EventPhase[];
        static valueOf(arg0: string): $UIEvent$EventPhase;
        static BUBBLE: $UIEvent$EventPhase;
        static AT_TARGET: $UIEvent$EventPhase;
        static CAPTURE: $UIEvent$EventPhase;
    }
    /**
     * Values that may be interpreted as {@link $UIEvent$EventPhase}.
     */
    export type $UIEvent$EventPhase_ = "capture" | "at_target" | "bubble";
    export class $UIEventDispatcher {
        static dispatchEvent(arg0: $UIEvent): void;
        static dispatchEvent(arg0: $UIEvent, arg1: boolean, arg2: boolean, arg3: boolean): void;
        static dispatchDirectEvent(arg0: $UIEvent): void;
        static dispatchDirectEvent(arg0: $UIEvent, arg1: boolean): void;
        static dispatchAllChildren(arg0: $UIEvent, arg1: boolean, arg2: boolean): boolean;
        static dispatchAllChildren(arg0: $UIEvent): boolean;
    }
    export class $UIEventListener {
    }
    export interface $UIEventListener extends $Consumer<$UIEvent> {
        /**
         * @deprecated
         */
        accept(arg0: $UIEvent): void;
        create(arg0: $UIEventListener_): $UIEventListener;
        handleEvent(arg0: $UIEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $UIEventListener}.
     */
    export type $UIEventListener_ = ((arg0: $UIEvent) => void);
    export class $UIEvent {
        static create(arg0: string): $UIEvent;
        stopPropagation(): void;
        isShiftDown(): boolean;
        stopLaterPropagation(): void;
        isAltDown(): boolean;
        isKeyDown(arg0: number): boolean;
        isCtrlDown(): boolean;
        stopImmediatePropagation(): void;
        currentListener: $UIEventListener;
        deltaX: number;
        deltaY: number;
        customData: $Object;
        hoverTooltips: $HoverTooltips;
        type: string;
        modifiers: number;
        laterPropagationStopped: boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $UIEvent>;
        button: number;
        dragStartX: number;
        dragStartY: number;
        captureListeners: $List<$Pair<$UIElement, $UIEventListener>>;
        bubbleListeners: $List<$Pair<$UIElement, $UIEventListener>>;
        currentElement: $UIElement;
        codePoint: string;
        hasBubblePhase: boolean;
        phase: $UIEvent$EventPhase;
        static CODEC: $Codec<$UIEvent>;
        dragHandler: $DragHandler;
        scanCode: number;
        command: string;
        target: $UIElement;
        timeStamp: number;
        keyCode: number;
        relatedTarget: $UIElement;
        x: number;
        y: number;
        hasCapturePhase: boolean;
        propagationStopped: boolean;
        hasHandler: boolean;
        get shiftDown(): boolean;
        get altDown(): boolean;
        get ctrlDown(): boolean;
    }
}
