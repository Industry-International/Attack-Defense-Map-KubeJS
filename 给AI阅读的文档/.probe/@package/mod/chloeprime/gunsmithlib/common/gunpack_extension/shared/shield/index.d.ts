import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Enum } from "@package/java/lang";
import { $AttachmentInfo_, $GunInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/shield" {
    export class $ShieldData$Condition extends $Enum<$ShieldData$Condition> {
        static values(): $ShieldData$Condition[];
        static valueOf(arg0: string): $ShieldData$Condition;
        static WHEN_AIMING: $ShieldData$Condition;
        static WHEN_NOT_AIMING: $ShieldData$Condition;
        static CUSTOM: $ShieldData$Condition;
        static ALWAYS: $ShieldData$Condition;
    }
    /**
     * Values that may be interpreted as {@link $ShieldData$Condition}.
     */
    export type $ShieldData$Condition_ = "when_aiming" | "when_not_aiming" | "always" | "custom";
    export class $ShieldData {
        blockBulletDamageAngle(): number;
        blockVanillaDamageAngle(): number;
        static fromAttachment(arg0: $ItemStack_): ($ShieldData) | undefined;
        static fromAttachment(arg0: $AttachmentInfo_): ($ShieldData) | undefined;
        disableShieldWhenReloading(): boolean;
        getCondition(): $ShieldData$Condition;
        static fromGun(arg0: $GunInfo_): ($ShieldData) | undefined;
        static fromGun(arg0: $ItemStack_): ($ShieldData) | undefined;
        canBeDisabledByAxes(): boolean;
        constructor();
        get condition(): $ShieldData$Condition;
    }
}
