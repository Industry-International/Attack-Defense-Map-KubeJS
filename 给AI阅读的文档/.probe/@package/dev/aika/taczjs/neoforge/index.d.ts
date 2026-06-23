import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CommonGunIndex, $CommonAttachmentIndex, $CommonAmmoIndex } from "@package/com/tacz/guns/resource/index";
import { $GunDisplayInstance } from "@package/com/tacz/guns/client/resource";
export * as events from "@package/dev/aika/taczjs/neoforge/events";

declare module "@package/dev/aika/taczjs/neoforge" {
    export class $TaCZJSUtils {
        static getGunDisplay(): $GunDisplayInstance;
        static mainHandHoldGun(livingEntity: $LivingEntity): boolean;
        static getGunIndex(gunId: $ResourceLocation_): $CommonGunIndex;
        static getAttachmentIndex(attachmentId: $ResourceLocation_): $CommonAttachmentIndex;
        static getAmmoIndex(ammoId: $ResourceLocation_): $CommonAmmoIndex;
        static openRefitScreen(): void;
        constructor();
        static get gunDisplay(): $GunDisplayInstance;
    }
}
