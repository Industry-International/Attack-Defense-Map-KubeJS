import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $MassData } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $BoundingBox3d, $Pose3dc, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $PhysicsPipelineBody } from "@package/dev/ryanhcode/sable/api/physics";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/object/box" {
    export class $BoxHandle {
    }
    export interface $BoxHandle {
        remove(): void;
        readPose(arg0: $Pose3d): void;
        wakeUp(): void;
        getRuntimeId(): number;
        get runtimeId(): number;
    }
    export class $BoxPhysicsObject implements $ArbitraryPhysicsObject, $PhysicsPipelineBody {
        isActive(): boolean;
        onRemoved(): void;
        isRemoved(): boolean;
        updatePose(): void;
        onAddition(arg0: $SubLevelPhysicsSystem): void;
        getPose(): $Pose3dc;
        getBoundingBox(arg0: $BoundingBox3d): void;
        getMass(): number;
        wakeUp(): void;
        getRuntimeId(): number;
        getMassTracker(): $MassData;
        getHalfExtents(): $Vector3dc;
        onUnloaded(arg0: $SubLevelHoldingChunkMap, arg1: $ChunkPos): void;
        constructor(arg0: $Pose3dc, arg1: $Vector3dc, arg2: number);
        get active(): boolean;
        get removed(): boolean;
        get pose(): $Pose3dc;
        get mass(): number;
        get runtimeId(): number;
        get massTracker(): $MassData;
        get halfExtents(): $Vector3dc;
    }
}
