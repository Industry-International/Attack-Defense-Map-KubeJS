import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GunsmithLibSharedDataExtension } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared";
import { $AmmoInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/ammo" {
    export class $GunsmithLibAmmoDataExtension extends $GunsmithLibSharedDataExtension {
        static of(arg0: $ItemStack_): ($GunsmithLibAmmoDataExtension) | undefined;
        static of(arg0: $AmmoInfo_): ($GunsmithLibAmmoDataExtension) | undefined;
        constructor();
    }
    export class $EnhancedAmmoData {
    }
    export interface $EnhancedAmmoData {
        gunsmith$getGunsmithLibExtension(): ($GunsmithLibAmmoDataExtension) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $EnhancedAmmoData}.
     */
    export type $EnhancedAmmoData_ = (() => ($GunsmithLibAmmoDataExtension) | undefined);
}
