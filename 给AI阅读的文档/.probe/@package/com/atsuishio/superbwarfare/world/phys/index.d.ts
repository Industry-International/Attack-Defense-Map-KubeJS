import { $Entity } from "@package/net/minecraft/world/entity";
import { $Vec3, $EntityHitResult, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/atsuishio/superbwarfare/world/phys" {
    export class $EntityResult {
        getEntity(): $Entity;
        isLegShot(): boolean;
        isHeadshot(): boolean;
        getHitPos(): $Vec3;
        constructor(arg0: $Entity, arg1: $Vec3_, arg2: boolean, arg3: boolean);
        get entity(): $Entity;
        get legShot(): boolean;
        get headshot(): boolean;
        get hitPos(): $Vec3;
    }
    export class $ExtendedEntityRayTraceResult extends $EntityHitResult {
        isLegShot(): boolean;
        isHeadshot(): boolean;
        location: $Vec3;
        constructor(arg0: $EntityHitResult);
        constructor(arg0: $EntityResult);
        get legShot(): boolean;
        get headshot(): boolean;
    }
}
