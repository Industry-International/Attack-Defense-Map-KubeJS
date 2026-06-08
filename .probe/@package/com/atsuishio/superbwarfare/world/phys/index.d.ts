import { $Entity } from "@package/net/minecraft/world/entity";
import { $Vec3, $EntityHitResult, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/atsuishio/superbwarfare/world/phys" {
    export class $EntityResult {
        getEntity(): $Entity;
        getHitPos(): $Vec3;
        isHeadshot(): boolean;
        isLegShot(): boolean;
        constructor(arg0: $Entity, arg1: $Vec3_, arg2: boolean, arg3: boolean);
        get entity(): $Entity;
        get hitPos(): $Vec3;
        get headshot(): boolean;
        get legShot(): boolean;
    }
    export class $ExtendedEntityRayTraceResult extends $EntityHitResult {
        isHeadshot(): boolean;
        isLegShot(): boolean;
        location: $Vec3;
        constructor(arg0: $EntityHitResult);
        constructor(arg0: $EntityResult);
        get headshot(): boolean;
        get legShot(): boolean;
    }
}
