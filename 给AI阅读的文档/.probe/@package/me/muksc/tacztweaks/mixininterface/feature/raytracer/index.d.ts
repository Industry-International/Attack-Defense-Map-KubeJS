import { $ClipContext } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Collection, $Collection_ } from "@package/java/util";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $EntityKineticBullet } from "@package/com/tacz/guns/entity";

declare module "@package/me/muksc/tacztweaks/mixininterface/feature/raytracer" {
    export class $IgnoringClipContext {
        static of(arg0: $ClipContext): $IgnoringClipContext;
    }
    export interface $IgnoringClipContext {
        tacztweaks$setIgnores(arg0: $Collection_<$BlockPos_>): void;
    }
    /**
     * Values that may be interpreted as {@link $IgnoringClipContext}.
     */
    export type $IgnoringClipContext_ = ((arg0: $Collection<$BlockPos>) => void);
    export class $RayTracingBullet {
        static of(arg0: $EntityKineticBullet): $RayTracingBullet;
    }
    export interface $RayTracingBullet {
        tacztweaks$getCurrentHitPosition(): $Vec3;
        tacztweaks$setCurrentHitPosition(arg0: $Vec3_): void;
    }
}
