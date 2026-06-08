import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FlammableBlockRegistry$Entry } from "@package/net/fabricmc/fabric/api/registry";

declare module "@package/net/fabricmc/fabric/impl/content/registry" {
    export class $FireBlockHooks {
    }
    export interface $FireBlockHooks {
        fabric_getVanillaEntry(arg0: $BlockState_): $FlammableBlockRegistry$Entry;
    }
    /**
     * Values that may be interpreted as {@link $FireBlockHooks}.
     */
    export type $FireBlockHooks_ = ((arg0: $BlockState) => $FlammableBlockRegistry$Entry);
}
