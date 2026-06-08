import { $TabOrderedElement } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $List } from "@package/java/util";
import { $ComponentPath } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/events" {
    export class $ContainerEventHandler {
    }
    export interface $ContainerEventHandler extends $GuiEventListener {
        children(): $List<$GuiEventListener>;
        getCurrentFocusPath(): $ComponentPath;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        setDragging(arg0: boolean): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        setFocused(arg0: boolean): void;
        setFocused(arg0: $GuiEventListener): void;
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        get currentFocusPath(): $ComponentPath;
    }
    export class $GuiEventListener {
        static DOUBLE_CLICK_THRESHOLD_MS: number;
    }
    export interface $GuiEventListener extends $TabOrderedElement {
        getCurrentFocusPath(): $ComponentPath;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        setFocused(arg0: boolean): void;
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        isMouseOver(arg0: number, arg1: number): boolean;
        getRectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractContainerEventHandler implements $ContainerEventHandler {
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener): void;
        getCurrentFocusPath(): $ComponentPath;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        setFocused(arg0: boolean): void;
        charTyped(arg0: string, arg1: number): boolean;
        isFocused(): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
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
