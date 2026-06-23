import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ConfigOptionUIType } from "@package/xaero/lib/client/config/option/ui/type";
import { $Supplier_ } from "@package/java/util/function";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Runnable_ } from "@package/java/lang";
import { $ISettingEntry } from "@package/xaero/lib/client/gui";
export * as type from "@package/xaero/lib/client/config/option/ui/type";
export * as factory from "@package/xaero/lib/client/config/option/ui/factory";

declare module "@package/xaero/lib/client/config/option/ui" {
    export class $ConfigOptionScreenEntry<T> implements $ISettingEntry {
        createWidget(arg0: number, arg1: number, arg2: number): $AbstractWidget;
        getStringForSearch(): string;
        constructor(arg0: $ConfigOption<T>, arg1: $Supplier_<$Config>, arg2: $Supplier_<$Config>, arg3: $Runnable_, arg4: $ConfigChannel, arg5: boolean);
        constructor(arg0: $ConfigOption<T>, arg1: $Supplier_<$Config>, arg2: $Supplier_<$Config>, arg3: $Runnable_, arg4: $ConfigChannel, arg5: boolean, arg6: boolean);
        get stringForSearch(): string;
    }
    export class $ConfigOptionUITypeManager {
        getUIType<CT extends $ConfigOption<never>>(arg0: CT): $ConfigOptionUIType<CT>;
        registerUIType<CT extends $ConfigOption<never>>(arg0: CT, arg1: $ConfigOptionUIType<CT>): void;
    }
}
