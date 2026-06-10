import { $JsonElement_ } from "@package/com/google/gson";
import { $AbstractAssetLoadEvent, $AbstractIndexLoadEvent } from "@package/dev/aika/taczjs/neoforge/events";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AttachmentData } from "@package/com/tacz/guns/resource/pojo/data/attachment";
import { $GunData } from "@package/com/tacz/guns/resource/pojo/data/gun";

declare module "@package/dev/aika/taczjs/neoforge/events/asset" {
    export class $AttachmentTagsLoadEvent extends $AbstractIndexLoadEvent {
        getAttachmentTags(): string[];
        removeAttachmentTags(): void;
        constructor(resourceId: $ResourceLocation_, json: $JsonElement_);
        get attachmentTags(): string[];
    }
    export class $GunDataLoadEvent extends $AbstractAssetLoadEvent {
        getGunData(): $GunData;
        removeGunData(): void;
        constructor(id: $ResourceLocation_, json: $JsonElement_);
        get gunData(): $GunData;
    }
    export class $AttachmentDataLoadEvent extends $AbstractAssetLoadEvent {
        getAttachmentData(): $AttachmentData;
        removeAttachmentData(): void;
        constructor(id: $ResourceLocation_, json: $JsonElement_);
        get attachmentData(): $AttachmentData;
    }
}
