import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";

declare module "@package/xaero/lib/client/gui/widget/online" {
    export class $WidgetScreen {
    }
    export interface $WidgetScreen {
        getScreen<S extends $Screen>(): S;
        addButtonVisible(arg0: $AbstractWidget): void;
        get screen(): S;
    }
}
