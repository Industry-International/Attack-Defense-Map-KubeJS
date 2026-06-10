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
        isFocused(): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        setFocused(arg0: boolean): void;
        setFocused(arg0: $GuiEventListener): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        setDragging(arg0: boolean): void;
        get currentFocusPath(): $ComponentPath;
    }
    export class $GuiEventListener {
        static DOUBLE_CLICK_THRESHOLD_MS: number;
    }
    export interface $GuiEventListener extends $TabOrderedElement {
        getCurrentFocusPath(): $ComponentPath;
        isFocused(): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        setFocused(arg0: boolean): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getRectangle(): $ScreenRectangle;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractContainerEventHandler implements $ContainerEventHandler {
        setFocused(arg0: $GuiEventListener): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        setDragging(arg0: boolean): void;
        getCurrentFocusPath(): $ComponentPath;
        isFocused(): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        setFocused(arg0: boolean): void;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        getRectangle(): $ScreenRectangle;
        getTabOrderGroup(): number;
        constructor();
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
}
