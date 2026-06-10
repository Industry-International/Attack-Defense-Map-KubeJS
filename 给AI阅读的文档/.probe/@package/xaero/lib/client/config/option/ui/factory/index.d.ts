import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Runnable_, $Runnable } from "@package/java/lang";

declare module "@package/xaero/lib/client/config/option/ui/factory" {
    export class $IConfigOptionWidgetFactory<CT extends $ConfigOption<never>> {
    }
    export interface $IConfigOptionWidgetFactory<CT extends $ConfigOption<never>> {
        create(arg0: CT, arg1: $Config, arg2: $Config, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: $Runnable_, arg8: $ConfigChannel, arg9: boolean): $AbstractWidget;
    }
    /**
     * Values that may be interpreted as {@link $IConfigOptionWidgetFactory}.
     */
    export type $IConfigOptionWidgetFactory_<CT> = ((arg0: CT, arg1: $Config, arg2: $Config, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: $Runnable, arg8: $ConfigChannel, arg9: boolean) => $AbstractWidget);
}
