import { $EnergyWeaponData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/energy";
import { $ArcanaExtras } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/arcana_check";
import { $GunExplosiveData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/explosive";
import { $OldFireControlData, $FireControlData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/fire_control";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GunsmithLibSharedDataExtension } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared";
import { $GunInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";
import { $ShieldData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/shield";
export * as arcana_check from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/arcana_check";
export * as explosive from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/explosive";
export * as energy from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/energy";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun" {
    export class $EnhancedGunData {
    }
    export interface $EnhancedGunData {
        gunsmith$getArcanaExtras(): ($ArcanaExtras) | undefined;
        gunsmith$getGunsmithLibExtension(): ($GunsmithLibGunDataExtension) | undefined;
        /**
         * @deprecated
         */
        gunsmith$getOldFireControlSystemData(): ($OldFireControlData) | undefined;
    }
    export class $GunsmithLibGunDataExtension extends $GunsmithLibSharedDataExtension {
        isHidden(): boolean;
        static of(arg0: $GunInfo_): ($GunsmithLibGunDataExtension) | undefined;
        static of(arg0: $ItemStack_): ($GunsmithLibGunDataExtension) | undefined;
        enableOverheatFeedback(): boolean;
        getGunExplosiveData(): $GunExplosiveData;
        getShieldData(): $ShieldData;
        battery(): $EnergyWeaponData;
        getFireControlData(): $FireControlData;
        /**
         * @deprecated
         */
        isChargeable(): boolean;
        constructor();
        get hidden(): boolean;
        get gunExplosiveData(): $GunExplosiveData;
        get shieldData(): $ShieldData;
        get fireControlData(): $FireControlData;
        get chargeable(): boolean;
    }
}
