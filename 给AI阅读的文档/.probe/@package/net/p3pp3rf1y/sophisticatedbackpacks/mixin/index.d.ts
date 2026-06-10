import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";

declare module "@package/net/p3pp3rf1y/sophisticatedbackpacks/mixin" {
    export class $MobAccessor {
    }
    export interface $MobAccessor {
        sophisticatedbackpacks$getAmbientSound(): $SoundEvent;
    }
    /**
     * Values that may be interpreted as {@link $MobAccessor}.
     */
    export type $MobAccessor_ = (() => $SoundEvent_);
}
