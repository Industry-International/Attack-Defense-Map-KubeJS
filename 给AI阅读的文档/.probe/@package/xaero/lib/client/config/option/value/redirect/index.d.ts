import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Predicate_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $OptionValueRedirectorManager } from "@package/xaero/lib/common/config/option/value/redirect";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";

declare module "@package/xaero/lib/client/config/option/value/redirect" {
    export class $ClientOptionValueRedirectorManager extends $OptionValueRedirectorManager {
        getName(arg0: $ConfigOption<never>): $Component;
        register<T>(arg0: $ConfigOption<T>, arg1: $Supplier_<T>, arg2: $Predicate_<$ConfigChannel>, arg3: $Function_<$Screen, $Screen>, arg4: $Component_, arg5: $Supplier_<$Component>): void;
        getTooltip(arg0: $ConfigOption<never>): $Component;
        shouldDeactivateWidget(arg0: $ConfigOption<never>): boolean;
        redirectScreen(arg0: $ConfigOption<never>): boolean;
        redirectScreen(arg0: $ConfigOption<never>, arg1: $Screen): $Screen;
    }
}
