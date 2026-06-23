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
        ammoId(): $ResourceLocation;
        ammoItem(): $IAmmo;
        ammoStack(): $ItemStack;
        constructor(ammoStack: $ItemStack_, ammoItem: $IAmmo, ammoId: $ResourceLocation_, index: $CommonAmmoIndex);
    }
    export class $AttachmentInfo extends $Record {
        index(): $CommonAttachmentIndex;
        static of(arg0: $ItemStack_): ($AttachmentInfo) | undefined;
        attachmentStack(): $ItemStack;
        attachmentId(): $ResourceLocation;
        attachmentItem(): $IAttachment;
        constructor(attachmentStack: $ItemStack_, attachmentItem: $IAttachment, attachmentId: $ResourceLocation_, index: $CommonAttachmentIndex);
    }
    export class $GunInfo extends $Record {
        index(): $CommonGunIndex;
        static of(arg0: $ItemStack_): ($GunInfo) | undefined;
        gunItem(): $IGun;
        gunStack(): $ItemStack;
        gunId(): $ResourceLocation;
        runScript<T>(arg0: $LivingEntity, arg1: string, arg2: $Class<T>, ...arg3: $Object[]): (T) | undefined;
        setTotalAmmo(arg0: number): void;
        addDummyAmmoAmount(arg0: number): void;
        setDummyAmmoAmount(arg0: number): void;
        getTotalAmmo(): number;
        getDummyAmmoAmount(): number;
        dropAllAmmoIncludingBarrel(arg0: $Player): void;
        getTotalMagazineSize(): number;
        setFireMode(arg0: $FireMode_ | null): void;
        getFireMode(): $FireMode;
        constructor(gunStack: $ItemStack_, gunItem: $IGun, gunId: $ResourceLocation_, index: $CommonGunIndex);
        get totalMagazineSize(): number;
    }
}
