import { $JsonElement_ } from "@package/com/google/gson";
import { $AbstractIndexLoadEvent } from "@package/dev/aika/taczjs/neoforge/events";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";

declare module "@package/dev/aika/taczjs/neoforge/events/index" {
    export class $AttachmentIndexLoadEvent extends $AbstractIndexLoadEvent {
        getPOJO(): $Object;
        removeAttachment(): void;
        constructor(id: $ResourceLocation_, json: $JsonElement_);
        get POJO(): $Object;
    }
    export class $AmmoIndexLoadEvent extends $AbstractIndexLoadEvent {
        getPOJO(): $Object;
        removeAmmo(): void;
        constructor(id: $ResourceLocation_, json: $JsonElement_);
        get POJO(): $Object;
    }
    export class $GunIndexLoadEvent extends $AbstractIndexLoadEvent {
        getPOJO(): $Object;
        removeGun(): void;
        constructor(id: $ResourceLocation_, json: $JsonElement_);
        get POJO(): $Object;
    }
}
