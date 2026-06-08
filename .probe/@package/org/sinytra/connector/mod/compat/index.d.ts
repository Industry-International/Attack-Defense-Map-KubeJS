import { $InteractionResult, $InteractionResult_ } from "@package/net/minecraft/world";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";

declare module "@package/org/sinytra/connector/mod/compat" {
    export class $ItemStackExtensions {
    }
    export interface $ItemStackExtensions {
        connector_useOn(arg0: $UseOnContext): $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $ItemStackExtensions}.
     */
    export type $ItemStackExtensions_ = ((arg0: $UseOnContext) => $InteractionResult_);
}
