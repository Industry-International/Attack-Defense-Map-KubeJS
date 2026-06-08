import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ConfigOptionManager } from "@package/xaero/lib/common/config/option";
import { $Logger } from "@package/org/apache/logging/log4j";

declare module "@package/xaero/lib/common/config/sync" {
    export class $CommonConfigChannelSynchronizer {
        setChannel(arg0: $ConfigChannel): void;
        logger: $Logger;
        constructor(arg0: $ConfigOptionManager, arg1: $Logger);
        set channel(value: $ConfigChannel);
    }
}
