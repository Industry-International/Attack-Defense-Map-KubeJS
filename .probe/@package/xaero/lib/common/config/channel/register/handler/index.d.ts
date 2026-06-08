import { $ServerConfigChangeListener } from "@package/xaero/lib/common/config/server/listener";
import { $OptionValueRedirectorManager } from "@package/xaero/lib/common/config/option/value/redirect";
import { $ConfigOptionManager } from "@package/xaero/lib/common/config/option";

declare module "@package/xaero/lib/common/config/channel/register/handler" {
    export class $IConfigChannelCommonRegistryHandler {
    }
    export interface $IConfigChannelCommonRegistryHandler {
        registerProfiledOptions(arg0: $ConfigOptionManager): void;
        registerServerOptionChangeHandlers(arg0: $ServerConfigChangeListener): void;
        registerPrimaryCommonOptions(arg0: $ConfigOptionManager): void;
        registerOptionServerRedirectors(arg0: $OptionValueRedirectorManager): void;
    }
}
