import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/simibubi/create/foundation/utility" {
    export class $IInteractionChecker {
    }
    export interface $IInteractionChecker {
        canPlayerUse(arg0: $Player): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IInteractionChecker}.
     */
    export type $IInteractionChecker_ = ((arg0: $Player) => boolean);
}
