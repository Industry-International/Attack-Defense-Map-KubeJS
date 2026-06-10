import { $Function, $Function_ } from "@package/java/util/function";
import { $GunRecoil } from "@package/com/tacz/guns/resource/pojo/data/gun";

declare module "@package/me/muksc/tacztweaks/mixininterface/feature/balancing/recoil" {
    export class $DynamicGunRecoil {
        static of(arg0: $GunRecoil): $DynamicGunRecoil;
    }
    export interface $DynamicGunRecoil {
        tacztweaks$setDynamicModifierMapper(arg0: $Function_<number, number>): void;
    }
    /**
     * Values that may be interpreted as {@link $DynamicGunRecoil}.
     */
    export type $DynamicGunRecoil_ = ((arg0: $Function<number, number>) => void);
}
