import { $ServerConfigChannelSynchronizer } from "@package/xaero/lib/common/config/server/sync";
import { $HandlerBasedConfigChangeListener } from "@package/xaero/lib/common/config/listener/handler";

declare module "@package/xaero/lib/common/config/server/listener" {
    export class $ServerConfigChangeListener extends $HandlerBasedConfigChangeListener {
        setSynchronizer(arg0: $ServerConfigChannelSynchronizer): void;
        set synchronizer(value: $ServerConfigChannelSynchronizer);
    }
}
