import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $ObjectList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BoundingBox3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $Enum } from "@package/java/lang";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Collection_, $List_ } from "@package/java/util";
import { $Vector3dc, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/object/rope" {
    export class $RopePhysicsObject implements $ArbitraryPhysicsObject {
        isActive(): boolean;
        wakeUp(): void;
        setAttachment(arg0: $RopeHandle$AttachmentPoint_, arg1: $Vector3dc, arg2: $ServerSubLevel): void;
        setFirstSegmentLength(arg0: number): void;
        getCollisionRadius(): number;
        updatePose(): void;
        onAddition(arg0: $SubLevelPhysicsSystem): void;
        removeFirstPoint(): void;
        onRemoved(): void;
        getBoundingBox(arg0: $BoundingBox3d): void;
        getPoints(): $ObjectList<$Vector3d>;
        addPoint(arg0: $Vector3dc): void;
        onUnloaded(arg0: $SubLevelHoldingChunkMap, arg1: $ChunkPos): void;
        constructor(arg0: $Collection_<$Vector3d>, arg1: number);
        get active(): boolean;
        set firstSegmentLength(value: number);
        get collisionRadius(): number;
        get points(): $ObjectList<$Vector3d>;
    }
    export class $RopeHandle {
    }
    export interface $RopeHandle {
        remove(): void;
        wakeUp(): void;
        setAttachment(arg0: $RopeHandle$AttachmentPoint_, arg1: $Vector3dc, arg2: $ServerSubLevel): void;
        setFirstSegmentLength(arg0: number): void;
        removeFirstPoint(): void;
        readPose(arg0: $List_<$Vector3d>): void;
        addPoint(arg0: $Vector3dc): void;
        set firstSegmentLength(value: number);
    }
    export class $RopeHandle$AttachmentPoint extends $Enum<$RopeHandle$AttachmentPoint> {
        static values(): $RopeHandle$AttachmentPoint[];
        static valueOf(arg0: string): $RopeHandle$AttachmentPoint;
        static START: $RopeHandle$AttachmentPoint;
        static END: $RopeHandle$AttachmentPoint;
    }
    /**
     * Values that may be interpreted as {@link $RopeHandle$AttachmentPoint}.
     */
    export type $RopeHandle$AttachmentPoint_ = "start" | "end";
}
