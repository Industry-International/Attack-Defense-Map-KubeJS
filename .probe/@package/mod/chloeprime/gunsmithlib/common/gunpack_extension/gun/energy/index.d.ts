import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Record } from "@package/java/lang";
import { $GunInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/energy" {
    export class $EnergyWeaponData extends $Record {
        static runtime(arg0: $GunInfo_): ($EnergyWeaponData$Runtime) | undefined;
        static runtime(arg0: $ItemStack_): ($EnergyWeaponData$Runtime) | undefined;
        chargePower(): number;
        needsReloadOnFullHeat(): boolean;
        energyPerShot(): number;
        constructor(energyPerShot: number, chargePower: number, needsReloadOnFullHeat: boolean);
    }
}
