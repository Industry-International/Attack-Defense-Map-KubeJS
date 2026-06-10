import { $Function_, $Consumer_, $Function } from "@package/java/util/function";
import { $Component, $Component_, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $AbstractSimiWidget } from "@package/net/createmod/catnip/gui/widget";
import { $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $ScrollValueBehaviour$StepContext } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $List_ } from "@package/java/util";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/simibubi/create/foundation/gui/widget" {
    export class $Label extends $AbstractSimiWidget {
        withSuffix(arg0: string): $Label;
        colored(arg0: number): $Label;
        withShadow(): $Label;
        setTextAndTrim(arg0: $Component_, arg1: boolean, arg2: number): void;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        suffix: string;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        static COLOR_DISABLED: $Couple<$Color>;
        text: $Component;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_);
    }
    export class $ScrollInput extends $AbstractSimiWidget {
        format(arg0: $Function_<number, $Component>): $ScrollInput;
        getState(): number;
        setState(arg0: number): $ScrollInput;
        titled(arg0: $MutableComponent_): $ScrollInput;
        withRange(arg0: number, arg1: number): $ScrollInput;
        inverted(): $ScrollInput;
        onChanged(): void;
        calling(arg0: $Consumer_<number>): $ScrollInput;
        writingTo(arg0: $Label): $ScrollInput;
        withShiftStep(arg0: number): $ScrollInput;
        standardStep(): $Function<$ScrollValueBehaviour$StepContext, number>;
        withStepFunction(arg0: $Function_<$ScrollValueBehaviour$StepContext, number>): $ScrollInput;
        addHint(arg0: $MutableComponent_): $ScrollInput;
        removeCallback(): $ScrollInput;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $TooltipArea extends $AbstractSimiWidget {
        withTooltip(arg0: $List_<$Component_>): $TooltipArea;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $SelectionScrollInput extends $ScrollInput {
        forOptions(arg0: $List_<$Component_>): $ScrollInput;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
}
