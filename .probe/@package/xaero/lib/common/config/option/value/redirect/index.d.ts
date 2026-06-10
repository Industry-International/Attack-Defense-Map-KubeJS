import { $Config } from "@package/xaero/lib/common/config";
import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";

declare module "@package/xaero/lib/common/config/option/value/redirect" {
    export class $OptionValueRedirectorManager {
        getValue<T>(arg0: $ConfigOption<T>): T;
        register<T>(arg0: $ConfigOption<T>, arg1: $Supplier_<T>, arg2: $Predicate_<$ConfigChannel>): void;
        freeze(): void;
        setChannel(arg0: $ConfigChannel): void;
        getCacheConfig(): $Config;
        shouldRedirect(arg0: $ConfigOption<never>): boolean;
        setChangeListener(arg0: $IConfigChangeListener): void;
        set channel(value: $ConfigChannel);
        get cacheConfig(): $Config;
        set changeListener(value: $IConfigChangeListener);
    }
}
