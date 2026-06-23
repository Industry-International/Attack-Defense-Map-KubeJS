import { $AbstractWidget, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/lib/client/gui/widget/dropdown" {
    export class $DropDownWidget extends $AbstractWidget {
        isClosed(): boolean;
        size(): number;
        selectId(arg0: number, arg1: boolean): void;
        getSelected(): number;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        setActive(arg0: boolean): void;
        mouseReleased(arg0: number, arg1: number, arg2: number, arg3: number): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setClosed(arg0: boolean): void;
        onDropDown(arg0: number, arg1: number, arg2: boolean, arg3: number): boolean;
        onDropDown(arg0: number, arg1: number, arg2: number): boolean;
        getRenderY(): number;
        getXWithOffset(): number;
        getRenderYWithOffset(): number;
        visible: boolean;
        static TRIM: number;
        static TRIM_OPEN: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static LINE_HEIGHT: number;
        packedFGColor: number;
        static SELECTED_DEFAULT_BACKGROUND: number;
        static SELECTED_DEFAULT_HOVERED_BACKGROUND: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        static DEFAULT_BACKGROUND: number;
        static TRIM_INSIDE: number;
        height: number;
        get selected(): number;
        get renderY(): number;
        get XWithOffset(): number;
        get renderYWithOffset(): number;
    }
}
