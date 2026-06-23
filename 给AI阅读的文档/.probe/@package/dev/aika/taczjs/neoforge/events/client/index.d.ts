import { $IClientPlayerGunOperator } from "@package/com/tacz/guns/api/client/gameplay";
import { $ClientPlayerKubeEvent } from "@package/dev/latvian/mods/kubejs/client";
import { $ClientGunIndex } from "@package/com/tacz/guns/client/resource/index";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BlockHitResult, $EntityHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/dev/aika/taczjs/neoforge/events/client" {
    export class $LocalPlayerReloadEvent extends $AbstractClientGunEvent {
        cancelReload(): void;
        constructor(gunId: $ResourceLocation_);
    }
    export class $LocalPlayerShootEvent extends $AbstractClientGunEvent {
        cancelShoot(): void;
        constructor(gunId: $ResourceLocation_);
    }
    export class $ClientGunIndexLoadEvent extends $AbstractClientGunEvent {
        constructor(gunId: $ResourceLocation_);
    }
    export class $LocalPlayerAimEvent extends $AbstractClientGunEvent {
        isAim(): boolean;
        cancelAim(): void;
        constructor(isAim: boolean, gunId: $ResourceLocation_);
        get aim(): boolean;
    }
    export class $LocalPlayerMeleeEvent extends $AbstractClientGunEvent {
        cancelMelee(): void;
        constructor(gunId: $ResourceLocation_);
    }
    export class $AbstractClientGunEvent extends $ClientPlayerKubeEvent {
        getBlockHitResult(): $BlockHitResult;
        getGunId(): $ResourceLocation;
        getEntityHitResult(): $EntityHitResult;
        setVanillaInteract(v: boolean): void;
        getGunIndex(): $ClientGunIndex;
        isVanillaInteract(): boolean;
        canInteractEntity(): boolean;
        getGunOperator(): $IClientPlayerGunOperator;
        get blockHitResult(): $BlockHitResult;
        get gunId(): $ResourceLocation;
        get entityHitResult(): $EntityHitResult;
        get gunIndex(): $ClientGunIndex;
        get gunOperator(): $IClientPlayerGunOperator;
    }
}
