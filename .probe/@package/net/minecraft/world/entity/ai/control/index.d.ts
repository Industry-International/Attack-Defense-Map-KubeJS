import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/control" {
    export class $Control {
    }
    export interface $Control {
    }
    export class $JumpControl implements $Control {
        jump(): void;
        tick(): void;
        constructor(arg0: $Mob);
    }
    export class $MoveControl$Operation extends $Enum<$MoveControl$Operation> {
    }
    /**
     * Values that may be interpreted as {@link $MoveControl$Operation}.
     */
    export type $MoveControl$Operation_ = "wait" | "move_to" | "strafe" | "jumping";
    export class $LookControl implements $Control {
        tick(): void;
        setLookAt(arg0: $Vec3_): void;
        setLookAt(arg0: $Entity): void;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setLookAt(arg0: number, arg1: number, arg2: number): void;
        setLookAt(arg0: $Entity, arg1: number, arg2: number): void;
        rotateTowards(arg0: number, arg1: number, arg2: number): number;
        getXRotD(): (number) | undefined;
        getYRotD(): (number) | undefined;
        clampHeadRotationToBody(): void;
        resetXRotOnTick(): boolean;
        isLookingAtTarget(): boolean;
        getWantedZ(): number;
        getWantedY(): number;
        getWantedX(): number;
        mob: $Mob;
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
        constructor(arg0: $Mob);
        get XRotD(): (number) | undefined;
        get YRotD(): (number) | undefined;
        get lookingAtTarget(): boolean;
    }
    export class $SmoothSwimmingMoveControl extends $MoveControl {
        speedModifier: number;
        mob: $Mob;
        strafeForwards: number;
        static MAX_TURN: number;
        wantedZ: number;
        wantedY: number;
        strafeRight: number;
        wantedX: number;
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
        constructor(arg0: $Mob, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean);
    }
    export class $FlyingMoveControl extends $MoveControl {
        speedModifier: number;
        mob: $Mob;
        strafeForwards: number;
        static MAX_TURN: number;
        wantedZ: number;
        wantedY: number;
        strafeRight: number;
        wantedX: number;
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
        constructor(arg0: $Mob, arg1: number, arg2: boolean);
    }
    export class $BodyRotationControl implements $Control {
        clientTick(): void;
        constructor(arg0: $Mob);
    }
    export class $MoveControl implements $Control {
        tick(): void;
        getSpeedModifier(): number;
        rotlerp(arg0: number, arg1: number, arg2: number): number;
        setWantedPosition(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getWantedZ(): number;
        getWantedY(): number;
        getWantedX(): number;
        strafe(arg0: number, arg1: number): void;
        hasWanted(): boolean;
        speedModifier: number;
        mob: $Mob;
        strafeForwards: number;
        static MAX_TURN: number;
        wantedZ: number;
        wantedY: number;
        strafeRight: number;
        wantedX: number;
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
        constructor(arg0: $Mob);
    }
    export class $SmoothSwimmingLookControl extends $LookControl {
        mob: $Mob;
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
        constructor(arg0: $Mob, arg1: number);
    }
}
