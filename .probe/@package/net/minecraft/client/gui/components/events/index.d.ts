import { $TabOrderedElement } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $ComponentPath } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/components/events" {
    export class $ContainerEventHandler {
    }
    export interface $ContainerEventHandler extends $GuiEventListener {
        children(): $List<$GuiEventListener>;
        isFocused(): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        setFocused(arg0: boolean): void;
        setFocused(arg0: $GuiEventListener): void;
        getFocused(): $GuiEventListener;
        isDragging(): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        setDragging(arg0: boolean): void;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        get currentFocusPath(): $ComponentPath;
    }
    export class $GuiEventListener {
        static DOUBLE_CLICK_THRESHOLD_MS: number;
    }
    export interface $GuiEventListener extends $TabOrderedElement {
        isFocused(): boolean;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        setFocused(arg0: boolean): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        isMouseOver(arg0: number, arg1: number): boolean;
        getRectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractContainerEventHandler implements $ContainerEventHandler {
        setFocused(arg0: $GuiEventListener): void;
        getFocused(): $GuiEventListener;
        isDragging(): boolean;
        setDragging(arg0: boolean): void;
        isFocused(): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        setFocused(arg0: boolean): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        isMouseOver(arg0: number, arg1: number): boolean;
        getRectangle(): $ScreenRectangle;
        getTabOrderGroup(): number;
        constructor();
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
}
