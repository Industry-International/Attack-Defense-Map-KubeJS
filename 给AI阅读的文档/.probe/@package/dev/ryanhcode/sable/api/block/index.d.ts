import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $BlockSubLevelCollisionCallback, $BlockSubLevelCollisionCallback_ } from "@package/dev/ryanhcode/sable/api/physics/callback";
import { $Iterable, $Record } from "@package/java/lang";
import { $SubLevel, $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/block" {
    export class $BlockEntitySubLevelReactionWheel {
    }
    export interface $BlockEntitySubLevelReactionWheel {
        getBlockState(): $BlockState;
        sable$getAngularVelocity(arg0: $Vector3d): void;
        get blockState(): $BlockState;
    }
    export class $BlockSubLevelLiftProvider$LiftProviderContext extends $Record {
        state(): $BlockState;
        pos(): $BlockPos;
        dir(): $Vec3;
        constructor(pos: $BlockPos_, state: $BlockState_, dir: $Vec3_);
    }
    export class $BlockSubLevelAssemblyListener {
    }
    export interface $BlockSubLevelAssemblyListener {
        afterMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        beforeMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockSubLevelAssemblyListener}.
     */
    export type $BlockSubLevelAssemblyListener_ = ((arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState, arg3: $BlockPos, arg4: $BlockPos) => void);
    export class $BlockEntitySubLevelActor {
    }
    export interface $BlockEntitySubLevelActor {
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
        sable$tick(arg0: $ServerSubLevel): void;
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
    }
    export class $BlockWithSubLevelCollisionCallback {
        static sable$getCallback(arg0: $BlockState_): $BlockSubLevelCollisionCallback;
        static hasCallback(arg0: $BlockState_): boolean;
    }
    export interface $BlockWithSubLevelCollisionCallback {
        sable$getCallback(): $BlockSubLevelCollisionCallback;
    }
    /**
     * Values that may be interpreted as {@link $BlockWithSubLevelCollisionCallback}.
     */
    export type $BlockWithSubLevelCollisionCallback_ = (() => $BlockSubLevelCollisionCallback_);
}
