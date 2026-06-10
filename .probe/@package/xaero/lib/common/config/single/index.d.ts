import { $Config } from "@package/xaero/lib/common/config";
import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $OptionValueRedirectorManager } from "@package/xaero/lib/common/config/option/value/redirect";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Logger } from "@package/org/apache/logging/log4j";
export * as io from "@package/xaero/lib/common/config/single/io";

declare module "@package/xaero/lib/common/config/single" {
    export class $SingleConfigManager<C extends $Config> {
        getChannel(): $ConfigChannel;
        getConfig(): C;
        setChannel(arg0: $ConfigChannel): void;
        setConfig(arg0: C): void;
        getEffective<T>(arg0: $ConfigOption<T>): T;
        setRedirectorManager(arg0: $OptionValueRedirectorManager): void;
        getRedirectorManager(): $OptionValueRedirectorManager;
        getConfigId(): string;
        setChangeListener(arg0: $IConfigChangeListener): void;
        logger: $Logger;
        constructor(arg0: $Logger, arg1: string);
        get configId(): string;
        set changeListener(value: $IConfigChangeListener);
    }
}
