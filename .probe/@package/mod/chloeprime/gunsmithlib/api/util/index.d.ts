import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CommonGunIndex, $CommonAttachmentIndex, $CommonAmmoIndex } from "@package/com/tacz/guns/resource/index";
import { $Object, $Record, $Class } from "@package/java/lang";
import { $IGun, $IAmmo, $IAttachment } from "@package/com/tacz/guns/api/item";
import { $FireMode_, $FireMode } from "@package/com/tacz/guns/api/item/gun";

declare module "@package/mod/chloeprime/gunsmithlib/api/util" {
    export class $AmmoInfo extends $Record {
        index(): $CommonAmmoIndex;
        static of(arg0: $ItemStack_): ($AmmoInfo) | undefined;
        ammoItem(): $IAmmo;
        ammoId(): $ResourceLocation;
        ammoStack(): $ItemStack;
        constructor(ammoStack: $ItemStack_, ammoItem: $IAmmo, ammoId: $ResourceLocation_, index: $CommonAmmoIndex);
    }
    export class $AttachmentInfo extends $Record {
        index(): $CommonAttachmentIndex;
        static of(arg0: $ItemStack_): ($AttachmentInfo) | undefined;
        attachmentItem(): $IAttachment;
        attachmentId(): $ResourceLocation;
        attachmentStack(): $ItemStack;
        constructor(attachmentStack: $ItemStack_, attachmentItem: $IAttachment, attachmentId: $ResourceLocation_, index: $CommonAttachmentIndex);
    }
    export class $GunInfo extends $Record {
        index(): $CommonGunIndex;
        static of(arg0: $ItemStack_): ($GunInfo) | undefined;
        runScript<T>(arg0: $LivingEntity, arg1: string, arg2: $Class<T>, ...arg3: $Object[]): (T) | undefined;
        getTotalMagazineSize(): number;
        dropAllAmmoIncludingBarrel(arg0: $Player): void;
        gunId(): $ResourceLocation;
        gunItem(): $IGun;
        setFireMode(arg0: $FireMode_): void;
        getFireMode(): $FireMode;
        gunStack(): $ItemStack;
        getDummyAmmoAmount(): number;
        setDummyAmmoAmount(arg0: number): void;
        addDummyAmmoAmount(arg0: number): void;
        getTotalAmmo(): number;
        setTotalAmmo(arg0: number): void;
        constructor(gunStack: $ItemStack_, gunItem: $IGun, gunId: $ResourceLocation_, index: $CommonGunIndex);
        get totalMagazineSize(): number;
    }
}
