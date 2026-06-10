import { $ItemStack_ } from "@package/net/minecraft/world/item";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/ricochet" {
    export class $RicochetData {
        static of(arg0: $ItemStack_): ($RicochetData) | undefined;
        getMaxBounciness(): number;
        getGravityScale(): number;
        getMinBounciness(): number;
        getMaxRicochetTimes(): number;
        getMinAngleOfIncidence(): number;
        static DEFAULT_MATERIAL_BOUNCINESS: number;
        constructor();
        get maxBounciness(): number;
        get gravityScale(): number;
        get minBounciness(): number;
        get maxRicochetTimes(): number;
        get minAngleOfIncidence(): number;
    }
}
