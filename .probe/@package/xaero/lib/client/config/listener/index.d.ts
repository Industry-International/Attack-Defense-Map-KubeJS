import { $ClientConfigManager } from "@package/xaero/lib/client/config";
import { $HandlerBasedConfigChangeListener } from "@package/xaero/lib/common/config/listener/handler";

declare module "@package/xaero/lib/client/config/listener" {
    export class $ClientConfigChangeListener extends $HandlerBasedConfigChangeListener {
        getManager(): $ClientConfigManager;
        get manager(): $ClientConfigManager;
    }
}
