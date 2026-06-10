import { $Vec3, $EntityHitResult } from "@package/net/minecraft/world/phys";
import { $EntityKineticBullet$EntityResult } from "@package/com/tacz/guns/entity";

declare module "@package/com/tacz/guns/util" {
    export class $TacHitResult extends $EntityHitResult {
        isHeadshot(): boolean;
        location: $Vec3;
        constructor(arg0: $EntityKineticBullet$EntityResult);
        get headshot(): boolean;
    }
}
