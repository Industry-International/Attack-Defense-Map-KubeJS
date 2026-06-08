import { $MassData } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $SectionPos } from "@package/net/minecraft/core";
import { $Pose3dc, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $BoxHandle, $BoxPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object/box";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $PhysicsConfigData } from "@package/dev/ryanhcode/sable/physics/config";
import { $PhysicsConstraintConfiguration, $PhysicsConstraintHandle } from "@package/dev/ryanhcode/sable/api/physics/constraint";
import { $KinematicContraption } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $Vector3dc, $Vector3d, $Quaterniondc } from "@package/org/joml";
import { $RopeHandle, $RopePhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object/rope";
export * as object from "@package/dev/ryanhcode/sable/api/physics/object";
export * as callback from "@package/dev/ryanhcode/sable/api/physics/callback";
export * as mass from "@package/dev/ryanhcode/sable/api/physics/mass";
export * as force from "@package/dev/ryanhcode/sable/api/physics/force";
export * as constraint from "@package/dev/ryanhcode/sable/api/physics/constraint";
export * as handle from "@package/dev/ryanhcode/sable/api/physics/handle";

declare module "@package/dev/ryanhcode/sable/api/physics" {
    export class $PhysicsPipeline {
    }
    export interface $PhysicsPipeline {
        remove(arg0: $ServerSubLevel): void;
        remove(arg0: $KinematicContraption): void;
        add(arg0: $ServerSubLevel, arg1: $Pose3dc): void;
        add(arg0: $KinematicContraption): void;
        init(arg0: $Vector3dc, arg1: number): void;
        tick(): void;
        dispose(): void;
        physicsTick(arg0: number): void;
        handleBlockChange(arg0: $SectionPos, arg1: $LevelChunkSection, arg2: number, arg3: number, arg4: number, arg5: $BlockState_, arg6: $BlockState_): void;
        addConstraint<T extends $PhysicsConstraintHandle>(arg0: $ServerSubLevel, arg1: $ServerSubLevel, arg2: $PhysicsConstraintConfiguration<T>): T;
        addRope(arg0: $RopePhysicsObject): $RopeHandle;
        teleport(arg0: $PhysicsPipelineBody, arg1: $Vector3dc, arg2: $Quaterniondc): void;
        applyLinearAndAngularImpulse(arg0: $PhysicsPipelineBody, arg1: $Vector3dc, arg2: $Vector3dc, arg3: boolean): void;
        addBox(arg0: $BoxPhysicsObject): $BoxHandle;
        addLinearAndAngularVelocity(arg0: $PhysicsPipelineBody, arg1: $Vector3dc, arg2: $Vector3dc): void;
        readPose(arg0: $ServerSubLevel, arg1: $Pose3d): $Pose3d;
        wakeUp(arg0: $PhysicsPipelineBody): void;
        resetVelocity(arg0: $PhysicsPipelineBody): void;
        applyImpulse(arg0: $PhysicsPipelineBody, arg1: $Vector3dc, arg2: $Vector3dc): void;
        getLinearVelocity(arg0: $PhysicsPipelineBody, arg1: $Vector3d): $Vector3d;
        getAngularVelocity(arg0: $PhysicsPipelineBody, arg1: $Vector3d): $Vector3d;
        handleChunkSectionAddition(arg0: $LevelChunkSection, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        handleChunkSectionRemoval(arg0: number, arg1: number, arg2: number): void;
        updateConfigFrom(arg0: $PhysicsConfigData): void;
        postPhysicsTicks(): void;
        prePhysicsTicks(): void;
        onStatsChanged(arg0: $ServerSubLevel): void;
        getNextRuntimeID(): number;
        get nextRuntimeID(): number;
    }
    export class $PhysicsPipelineBody {
        static NULL_RUNTIME_ID: number;
    }
    export interface $PhysicsPipelineBody {
        isRemoved(): boolean;
        getRuntimeId(): number;
        getMassTracker(): $MassData;
        get removed(): boolean;
        get runtimeId(): number;
        get massTracker(): $MassData;
    }
}
