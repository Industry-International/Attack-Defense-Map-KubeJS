import { $Position } from "@package/dev/lambdaurora/spruceui";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Nameable } from "@package/dev/lambdaurora/spruceui/util";
import { $SpruceWidget } from "@package/dev/lambdaurora/spruceui/widget";

declare module "@package/dev/lambdaurora/spruceui/option" {
    export class $SpruceOption implements $Nameable {
        getDisplayText(value: $Component_): $Component;
        getOptionTooltip(): ($Component) | undefined;
        getPrefix(): $Component;
        getName(): string;
        setTooltip(tooltip: $Component_): void;
        createWidget(arg0: $Position, arg1: number): $SpruceWidget;
        key: string;
        constructor(key: string);
        get optionTooltip(): ($Component) | undefined;
        get prefix(): $Component;
        get name(): string;
        set tooltip(value: $Component_);
    }
}
