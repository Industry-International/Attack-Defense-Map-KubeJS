import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $OptionalDouble } from "@package/java/util";
import { $GunInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/explosive" {
    export class $GunExplosiveFragData {
        static of(arg0: $GunInfo_): ($GunExplosiveFragData) | undefined;
        static of(arg0: $ItemStack_): ($GunExplosiveFragData) | undefined;
        getCount(): number;
        getConfigSource(): ($ItemStack) | undefined;
        sampleFragVelocity(arg0: $RandomSource): number;
        getDistribution(): $FragDistribution;
        getMaxFragVelocity(): number;
        getMinFragVelocity(): number;
        constructor();
        get count(): number;
        get configSource(): ($ItemStack) | undefined;
        get distribution(): $FragDistribution;
        get maxFragVelocity(): number;
        get minFragVelocity(): number;
    }
    export class $GunExplosiveData {
        getFragData(): $GunExplosiveFragData;
        getAirburstRangefinderMaxDistance(): $OptionalDouble;
        getAirburstDistances(): $DoubleList;
        getProximityFuseDistance(): number;
        getAirburstDistancesDistribution(): number;
        willPreventDestroyingLootItems(): boolean;
        static fromGun(arg0: $GunInfo_): ($GunExplosiveData) | undefined;
        static fromGun(arg0: $ItemStack_): ($GunExplosiveData) | undefined;
        constructor();
        get fragData(): $GunExplosiveFragData;
        get airburstRangefinderMaxDistance(): $OptionalDouble;
        get airburstDistances(): $DoubleList;
        get proximityFuseDistance(): number;
        get airburstDistancesDistribution(): number;
    }
}
