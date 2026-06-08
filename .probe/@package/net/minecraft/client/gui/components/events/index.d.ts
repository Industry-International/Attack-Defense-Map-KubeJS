import { $TabOrderedElement } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $List } from "@package/java/util";
import { $ComponentPath } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/events" {
    export class $ContainerEventHandler {
    }
    export interface $ContainerEventHandler extends $GuiEventListener {
        children(): $List<$GuiEventListener>;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        isDragging(): boolean;
        setFocused(arg0: boolean): void;
        setFocused(arg0: $GuiEventListener): void;
        mouseMoved(arg0: number, arg1: number): void;
        charTyped(arg0: string, arg1: number): boolean;
        getFocused(): $GuiEventListener;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        isFocused(): boolean;
        getCurrentFocusPath(): $ComponentPath;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        setDragging(arg0: boolean): void;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        get currentFocusPath(): $ComponentPath;
    }
    export class $GuiEventListener {
        static DOUBLE_CLICK_THRESHOLD_MS: number;
    }
    export interface $GuiEventListener extends $TabOrderedElement {
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        setFocused(arg0: boolean): void;
        mouseMoved(arg0: number, arg1: number): void;
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        getCurrentFocusPath(): $ComponentPath;
        getRectangle(): $ScreenRectangle;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        isMouseOver(arg0: number, arg1: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractContainerEventHandler implements $ContainerEventHandler {
        isDragging(): boolean;
        setFocused(arg0: $GuiEventListener): void;
        getFocused(): $GuiEventListener;
        setDragging(arg0: boolean): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        setFocused(arg0: boolean): void;
        mouseMoved(arg0: number, arg1: number): void;
        charTyped(arg0: string, arg1: number): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        isFocused(): boolean;
        getCurrentFocusPath(): $ComponentPath;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        getRectangle(): $ScreenRectangle;
        isMouseOver(arg0: number, arg1: number): boolean;
        getTabOrderGroup(): number;
        constructor();
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
}
