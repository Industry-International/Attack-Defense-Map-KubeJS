import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $ConditionalOps } from "@package/net/neoforged/neoforge/common/conditions";
export * as client from "@package/rbasamoyai/createbigcannons/mixin/client";

declare module "@package/rbasamoyai/createbigcannons/mixin" {
    export class $ContextAwareReloadListenerAccessor {
    }
    export interface $ContextAwareReloadListenerAccessor {
        callMakeConditionalOps(): $ConditionalOps<$JsonElement>;
    }
    /**
     * Values that may be interpreted as {@link $ContextAwareReloadListenerAccessor}.
     */
    export type $ContextAwareReloadListenerAccessor_ = (() => $ConditionalOps<$JsonElement_>);
}
