import { $SubmergedFloaterContainerAccess } from "@package/com/verr1/taovreturned/floating";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List } from "@package/java/util";
import { $SubLevel, $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vector3dc, $Quaterniond, $Vector3d } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ryanhcode/sable/physics/floating_block" {
    export class $FloatingBlockMaterial extends $Record {
        liftStrength(): number;
        fastHorizontalFriction(): number;
        slowHorizontalFriction(): number;
        fastVerticalFriction(): number;
        slowVerticalFriction(): number;
        transitionSpeed(): number;
        scaleWithPressure(): boolean;
        scaleWithGravity(): boolean;
        preventSelfLift(): boolean;
        static CODEC: $Codec<$FloatingBlockMaterial>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FloatingBlockMaterial>;
        constructor(preventSelfLift: boolean, scaleWithPressure: boolean, scaleWithGravity: boolean, liftStrength: number, transitionSpeed: number, slowVerticalFriction: number, fastVerticalFriction: number, slowHorizontalFriction: number, fastHorizontalFriction: number);
    }
    export class $FloatingBlockCluster {
        getBlockData(): $FloatingBlockData;
        getMaterial(): $FloatingBlockMaterial;
        constructor(arg0: $FloatingBlockMaterial_);
        get blockData(): $FloatingBlockData;
        get material(): $FloatingBlockMaterial;
    }
    export class $FloatingBlockData {
        addFloatingBlock(arg0: $Vector3dc, arg1: number): void;
        translateOrigin(arg0: $Vector3dc): void;
        computePressureScale(arg0: $SubLevel): void;
        removeFloatingBlock(arg0: $Vector3dc, arg1: number): void;
        getPressureScale(): number;
        constructor();
        get pressureScale(): number;
    }
    export class $FloatingBlockController {
        queueRemoveFloatingBlock(arg0: $BlockState_, arg1: $BlockPos_): void;
        queueAddFloatingBlock(arg0: $BlockState_, arg1: $BlockPos_): void;
        addFloatingBlock(arg0: $BlockState_, arg1: $Vector3d): void;
        physicsTick(arg0: number, arg1: number, arg2: $Vector3dc, arg3: $Vector3dc, arg4: $Vector3d, arg5: $Vector3d): void;
        needsTicking(): boolean;
        removeFloatingBlock(arg0: $BlockState_, arg1: $Vector3d): void;
        constructor(arg0: $ServerSubLevel);
    }
    export class $FloatingClusterContainer implements $SubmergedFloaterContainerAccess {
        queueRemoveFloatingBlock(arg0: $BlockState_, arg1: $BlockPos_): void;
        queueAddFloatingBlock(arg0: $BlockState_, arg1: $BlockPos_): void;
        addFloatingBlock(arg0: $BlockState_, arg1: $Vector3d): void;
        needsTicking(): boolean;
        processBlockChanges(arg0: $Vector3dc): void;
        removeFloatingBlock(arg0: $BlockState_, arg1: $Vector3d): void;
        taovReturned$getAdventureFloaters(): $List<any>;
        taovReturned$translateAdventureFloaters(arg0: $Vector3dc): void;
        positionOffset: $Vector3d;
        velocity: $Vector3d;
        clusters: $List<$FloatingBlockCluster>;
        rotationOffset: $Quaterniond;
        angularVelocity: $Vector3d;
        constructor();
    }
}
