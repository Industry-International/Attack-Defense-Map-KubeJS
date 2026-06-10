import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GunsmithLibSharedDataExtension } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared";
import { $AttachmentInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";
import { $ShieldData } from "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/shield";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/attachment" {
    export class $EnhancedAttachmentData {
    }
    export interface $EnhancedAttachmentData {
        gunsmith$getGunsmithLibExtension(): ($GunsmithLibAttachmentDataExtension) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $EnhancedAttachmentData}.
     */
    export type $EnhancedAttachmentData_ = (() => ($GunsmithLibAttachmentDataExtension) | undefined);
    export class $GunsmithLibAttachmentDataExtension extends $GunsmithLibSharedDataExtension {
        static of(arg0: $AttachmentInfo_): ($GunsmithLibAttachmentDataExtension) | undefined;
        static of(arg0: $ItemStack_): ($GunsmithLibAttachmentDataExtension) | undefined;
        getShieldData(): $ShieldData;
        constructor();
        get shieldData(): $ShieldData;
    }
}
