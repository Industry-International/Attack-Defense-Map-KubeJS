import { $Enum } from "@package/java/lang";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/constraint" {
    export class $PhysicsConstraintHandle {
    }
    export interface $PhysicsConstraintHandle {
        remove(): void;
        isValid(): boolean;
        setMotor(arg0: $ConstraintJointAxis_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: number): void;
        setContactsEnabled(arg0: boolean): void;
        getJointImpulses(arg0: $Vector3d, arg1: $Vector3d): void;
        get valid(): boolean;
        set contactsEnabled(value: boolean);
    }
    export class $ConstraintJointAxis extends $Enum<$ConstraintJointAxis> {
        static values(): $ConstraintJointAxis[];
        static valueOf(arg0: string): $ConstraintJointAxis;
        static ALL: $ConstraintJointAxis[];
        static ANGULAR_Z: $ConstraintJointAxis;
        static ANGULAR_Y: $ConstraintJointAxis;
        static ANGULAR_X: $ConstraintJointAxis;
        static LINEAR_Z: $ConstraintJointAxis;
        static LINEAR_Y: $ConstraintJointAxis;
        static LINEAR_X: $ConstraintJointAxis;
        static LINEAR: $ConstraintJointAxis[];
        static ANGULAR: $ConstraintJointAxis[];
    }
    /**
     * Values that may be interpreted as {@link $ConstraintJointAxis}.
     */
    export type $ConstraintJointAxis_ = "linear_x" | "linear_y" | "linear_z" | "angular_x" | "angular_y" | "angular_z";
    export class $PhysicsConstraintConfiguration<T extends $PhysicsConstraintHandle> {
    }
    export interface $PhysicsConstraintConfiguration<T extends $PhysicsConstraintHandle> {
    }
}
