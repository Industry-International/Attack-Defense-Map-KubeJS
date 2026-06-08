import { $ConfigOptionUITypeManager } from "@package/xaero/lib/client/config/option/ui";
import { $ClientOptionValueRedirectorManager } from "@package/xaero/lib/client/config/option/value/redirect";
import { $ClientConfigOptionManager } from "@package/xaero/lib/client/config/option";
import { $ClientConfigChangeListener } from "@package/xaero/lib/client/config/listener";

declare module "@package/xaero/lib/client/config/channel/register/handler" {
    export class $IConfigChannelClientRegistryHandler {
    }
    export interface $IConfigChannelClientRegistryHandler {
        registerOptionClientRedirectors(arg0: $ClientOptionValueRedirectorManager): void;
        registerClientOptionChangeHandlers(arg0: $ClientConfigChangeListener): void;
        registerConfigOptionUITypes(arg0: $ConfigOptionUITypeManager): void;
        registerPrimaryClientOptions(arg0: $ClientConfigOptionManager): void;
    }
}
