import { $ConfigOptionUIType } from "@package/xaero/lib/client/config/option/ui/type";
import { $ConfigOptionUITypeManager } from "@package/xaero/lib/client/config/option/ui";
import { $ConfigOption, $ConfigOptionManager } from "@package/xaero/lib/common/config/option";
import { $Logger } from "@package/org/apache/logging/log4j";
export * as ui from "@package/xaero/lib/client/config/option/ui";
export * as value from "@package/xaero/lib/client/config/option/value";

declare module "@package/xaero/lib/client/config/option" {
    export class $ClientConfigOptionManager extends $ConfigOptionManager {
        getUIType<CT extends $ConfigOption<never>>(arg0: CT): $ConfigOptionUIType<CT>;
        getUiTypeManager(): $ConfigOptionUITypeManager;
        registerUIType<CT extends $ConfigOption<never>>(arg0: CT, arg1: $ConfigOptionUIType<CT>): void;
        logger: $Logger;
        get uiTypeManager(): $ConfigOptionUITypeManager;
    }
}
