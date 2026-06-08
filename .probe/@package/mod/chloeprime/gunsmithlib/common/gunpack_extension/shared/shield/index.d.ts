import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GunInfo_, $AttachmentInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/shield" {
    export class $ShieldData {
        static fromGun(arg0: $ItemStack_): ($ShieldData) | undefined;
        static fromGun(arg0: $GunInfo_): ($ShieldData) | undefined;
        static fromAttachment(arg0: $ItemStack_): ($ShieldData) | undefined;
        static fromAttachment(arg0: $AttachmentInfo_): ($ShieldData) | undefined;
        blockBulletDamageAngle(): number;
        blockVanillaDamageAngle(): number;
        canBeDisabledByAxes(): boolean;
        disableShieldWhenReloading(): boolean;
        getCondition(): $ShieldData$Condition;
        constructor();
        get condition(): $ShieldData$Condition;
    }
}
