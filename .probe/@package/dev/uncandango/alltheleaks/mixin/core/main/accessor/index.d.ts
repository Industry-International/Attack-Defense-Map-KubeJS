import { $ServerPlayer } from "@package/net/minecraft/server/level";

declare module "@package/dev/uncandango/alltheleaks/mixin/core/main/accessor" {
    export class $PlayerAdvancementsAccessor {
    }
    export interface $PlayerAdvancementsAccessor {
        getPlayer(): $ServerPlayer;
        get player(): $ServerPlayer;
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancementsAccessor}.
     */
    export type $PlayerAdvancementsAccessor_ = (() => $ServerPlayer);
}
