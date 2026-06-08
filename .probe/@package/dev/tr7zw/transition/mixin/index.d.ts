import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/tr7zw/transition/mixin" {
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        transition$setRawPosition(arg0: $Vec3_): void;
        transition$getRawPosition(): $Vec3;
    }
}
