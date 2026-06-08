import { $Consumer_ } from "@package/java/util/function";
import { $GridLayout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget, $TabButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Iterable_ } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components/tabs" {
    export class $TabNavigationBar$Builder {
        build(): $TabNavigationBar;
        addTabs(...arg0: $Tab[]): $TabNavigationBar$Builder;
        constructor(arg0: $TabManager, arg1: number);
    }
    export class $TabManager {
        setTabArea(arg0: $ScreenRectangle_): void;
        getCurrentTab(): $Tab;
        setCurrentTab(arg0: $Tab, arg1: boolean): void;
        constructor(arg0: $Consumer_<$AbstractWidget>, arg1: $Consumer_<$AbstractWidget>);
        set tabArea(value: $ScreenRectangle_);
    }
    export class $Tab {
    }
    export interface $Tab {
        visitChildren(arg0: $Consumer_<$AbstractWidget>): void;
        doLayout(arg0: $ScreenRectangle_): void;
        getTabTitle(): $Component;
        get tabTitle(): $Component;
    }
    export class $GridLayoutTab implements $Tab {
        visitChildren(arg0: $Consumer_<$AbstractWidget>): void;
        doLayout(arg0: $ScreenRectangle_): void;
        getTabTitle(): $Component;
        layout: $GridLayout;
        constructor(arg0: $Component_);
        get tabTitle(): $Component;
    }
    export class $TabNavigationBar extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry {
        static builder(arg0: $TabManager, arg1: number): $TabNavigationBar$Builder;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        arrangeElements(): void;
        keyPressed(arg0: number): boolean;
        setWidth(arg0: number): void;
        selectTab(arg0: number, arg1: boolean): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        updateNarration(arg0: $NarrationElementOutput): void;
        narrateListElementPosition(arg0: $NarrationElementOutput, arg1: $TabButton): void;
        isActive(): boolean;
        constructor(arg0: number, arg1: $TabManager, arg2: $Iterable_<$Tab>);
        set width(value: number);
        get active(): boolean;
    }
}
