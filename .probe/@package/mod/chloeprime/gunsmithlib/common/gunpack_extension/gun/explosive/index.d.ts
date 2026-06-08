import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $GunInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";
import { $OptionalDouble } from "@package/java/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/explosive" {
    export class $GunExplosiveData {
        getAirburstDistancesDistribution(): number;
        getAirburstRangefinderMaxDistance(): $OptionalDouble;
        getFragData(): $GunExplosiveFragData;
        getProximityFuseDistance(): number;
        getAirburstDistances(): $DoubleList;
        static fromGun(arg0: $GunInfo_): ($GunExplosiveData) | undefined;
        static fromGun(arg0: $ItemStack_): ($GunExplosiveData) | undefined;
        willPreventDestroyingLootItems(): boolean;
        constructor();
        get airburstDistancesDistribution(): number;
        get airburstRangefinderMaxDistance(): $OptionalDouble;
        get fragData(): $GunExplosiveFragData;
        get proximityFuseDistance(): number;
        get airburstDistances(): $DoubleList;
    }
}
