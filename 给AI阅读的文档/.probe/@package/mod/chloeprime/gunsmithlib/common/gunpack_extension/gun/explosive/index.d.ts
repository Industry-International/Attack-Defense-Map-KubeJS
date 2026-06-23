import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $OptionalDouble } from "@package/java/util";
import { $GunInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/gun/explosive" {
    export class $GunExplosiveFragData {
        static of(arg0: $ItemStack_): ($GunExplosiveFragData) | undefined;
        static of(arg0: $GunInfo_): ($GunExplosiveFragData) | undefined;
        getCount(): number;
        getConfigSource(): ($ItemStack) | undefined;
        getDistribution(): $FragDistribution;
        sampleFragVelocity(arg0: $RandomSource): number;
        getMinFragVelocity(): number;
        getMaxFragVelocity(): number;
        constructor();
        get count(): number;
        get configSource(): ($ItemStack) | undefined;
        get distribution(): $FragDistribution;
        get minFragVelocity(): number;
        get maxFragVelocity(): number;
    }
    export class $GunExplosiveData {
        getFragData(): $GunExplosiveFragData;
        getAirburstDistancesDistribution(): number;
        getAirburstDistances(): $DoubleList;
        getProximityFuseDistance(): number;
        getAirburstRangefinderMaxDistance(): $OptionalDouble;
        static fromGun(arg0: $GunInfo_): ($GunExplosiveData) | undefined;
        static fromGun(arg0: $ItemStack_): ($GunExplosiveData) | undefined;
        willPreventDestroyingLootItems(): boolean;
        constructor();
        get fragData(): $GunExplosiveFragData;
        get airburstDistancesDistribution(): number;
        get airburstDistances(): $DoubleList;
        get proximityFuseDistance(): number;
        get airburstRangefinderMaxDistance(): $OptionalDouble;
    }
}
