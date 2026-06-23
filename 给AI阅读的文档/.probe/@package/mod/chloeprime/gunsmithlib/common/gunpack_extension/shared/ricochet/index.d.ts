import { $ItemStack_ } from "@package/net/minecraft/world/item";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/ricochet" {
    export class $RicochetData {
        static of(arg0: $ItemStack_): ($RicochetData) | undefined;
        getMaxRicochetTimes(): number;
        getMinAngleOfIncidence(): number;
        getMaxBounciness(): number;
        getMinBounciness(): number;
        getGravityScale(): number;
        static DEFAULT_MATERIAL_BOUNCINESS: number;
        constructor();
        get maxRicochetTimes(): number;
        get minAngleOfIncidence(): number;
        get maxBounciness(): number;
        get minBounciness(): number;
        get gravityScale(): number;
    }
}
