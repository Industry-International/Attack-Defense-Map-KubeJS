import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $OptionalDouble } from "@package/java/util";
import { $GunInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/explosive" {
    export class $GunExplosiveData {
        getFragData(): $GunExplosiveFragData;
        getAirburstDistancesDistribution(): number;
        getProximityFuseDistance(): number;
        getAirburstDistances(): $DoubleList;
        getAirburstRangefinderMaxDistance(): $OptionalDouble;
        static fromGun(arg0: $ItemStack_): ($GunExplosiveData) | undefined;
        static fromGun(arg0: $GunInfo_): ($GunExplosiveData) | undefined;
        willPreventDestroyingLootItems(): boolean;
        constructor();
        get fragData(): $GunExplosiveFragData;
        get airburstDistancesDistribution(): number;
        get proximityFuseDistance(): number;
        get airburstDistances(): $DoubleList;
        get airburstRangefinderMaxDistance(): $OptionalDouble;
    }
}
