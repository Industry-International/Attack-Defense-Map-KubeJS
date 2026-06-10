import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $Component_, $Component, $Style, $FormattedText } from "@package/net/minecraft/network/chat";
import { $TooltipInfo } from "@package/xaero/lib/common/gui/widget";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ArrayList } from "@package/java/util";
export * as online from "@package/xaero/lib/client/gui/widget/online";
export * as dropdown from "@package/xaero/lib/client/gui/widget/dropdown";

declare module "@package/xaero/lib/client/gui/widget" {
    export class $IClickableWidget {
    }
    export interface $IClickableWidget extends $ITooltipHaver {
        setXaero_tooltip(arg0: $Supplier_<$Tooltip>): void;
        set xaero_tooltip(value: $Supplier_<$Tooltip>);
    }
    export class $Tooltip implements $Supplier<$Tooltip> {
        get(): $Tooltip;
        getLine(arg0: number): $Component;
        drawBox(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPlainText(): string;
        withWidth(arg0: number): $Tooltip;
        setStartWidth(arg0: number): void;
        getFullCode(): string;
        splitWords(arg0: $ArrayList<$Component_>, arg1: $FormattedText): void;
        setAutoLinebreak(arg0: boolean): void;
        createLines(arg0: $Component_): void;
        constructor(arg0: $Component_);
        constructor(arg0: $Component_, arg1: boolean);
        constructor(arg0: number);
        constructor(arg0: $TooltipInfo);
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Style);
        constructor(arg0: string, arg1: $Style, arg2: boolean);
        get plainText(): string;
        set startWidth(value: number);
        get fullCode(): string;
        set autoLinebreak(value: boolean);
    }
    export class $ITooltipHaver {
    }
    export interface $ITooltipHaver {
        getXaero_tooltip(): $Supplier<$Tooltip>;
        get xaero_tooltip(): $Supplier<$Tooltip>;
    }
    /**
     * Values that may be interpreted as {@link $ITooltipHaver}.
     */
    export type $ITooltipHaver_ = (() => $Supplier<$Tooltip>);
}
