import { $IXaeroMinimap } from "@package/xaero/common";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";

declare module "@package/xaero/common/interfaces/render" {
    /**
     * @deprecated
     */
    export class $InterfaceRenderer {
        getCustomVertexConsumers(): $CustomVertexConsumers;
        constructor(arg0: $IXaeroMinimap);
        get customVertexConsumers(): $CustomVertexConsumers;
    }
}
