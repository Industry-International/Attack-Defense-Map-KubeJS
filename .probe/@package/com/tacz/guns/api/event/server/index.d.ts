import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $KubeJSGunEventPoster } from "@package/com/tacz/guns/api/event/common";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $EntityKineticBullet } from "@package/com/tacz/guns/entity";

declare module "@package/com/tacz/guns/api/event/server" {
    export class $AmmoHitBlockEvent extends $Event implements $KubeJSGunEventPoster<$AmmoHitBlockEvent>, $ICancellableEvent {
        getState(): $BlockState;
        getLevel(): $Level;
        getHitResult(): $BlockHitResult;
        getAmmo(): $EntityKineticBullet;
        postClientEventToKubeJS(arg0: $AmmoHitBlockEvent): void;
        postServerEventToKubeJS(arg0: $AmmoHitBlockEvent): void;
        postEventToKubeJS(arg0: $AmmoHitBlockEvent): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockHitResult, arg2: $BlockState_, arg3: $EntityKineticBullet);
        get state(): $BlockState;
        get level(): $Level;
        get hitResult(): $BlockHitResult;
        get ammo(): $EntityKineticBullet;
    }
}
