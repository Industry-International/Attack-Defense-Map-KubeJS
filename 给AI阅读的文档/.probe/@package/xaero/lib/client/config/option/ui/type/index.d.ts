import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $IConfigOptionWidgetFactory, $IConfigOptionWidgetFactory_ } from "@package/xaero/lib/client/config/option/ui/factory";

declare module "@package/xaero/lib/client/config/option/ui/type" {
    export class $ConfigOptionUIType<CT extends $ConfigOption<never>> {
        getWidgetFactory(): $IConfigOptionWidgetFactory<CT>;
        constructor(arg0: $IConfigOptionWidgetFactory_<CT>);
        get widgetFactory(): $IConfigOptionWidgetFactory<CT>;
    }
}
