import { $Matrix3dAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/contraptions";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/collision" {
    export class $Matrix3d implements $Matrix3dAccessor {
        scale(arg0: number): $Matrix3d;
        transform(arg0: number, arg1: number, arg2: number): $Vec3;
        transform(arg0: $Vec3_): $Vec3;
        multiply(arg0: $Matrix3d): $Matrix3d;
        asIdentity(): $Matrix3d;
        asZRotation(arg0: number): $Matrix3d;
        asYRotation(arg0: number): $Matrix3d;
        asXRotation(arg0: number): $Matrix3d;
        transformTransposed(arg0: $Vec3_): $Vec3;
        transformTransposed(arg0: number, arg1: number, arg2: number): $Vec3;
        getM21(): number;
        getM01(): number;
        setM12(arg0: number): void;
        getM02(): number;
        getM22(): number;
        setM10(arg0: number): void;
        getM10(): number;
        getM11(): number;
        setM22(arg0: number): void;
        setM00(arg0: number): void;
        setM20(arg0: number): void;
        setM02(arg0: number): void;
        getM20(): number;
        setM21(arg0: number): void;
        getM12(): number;
        setM11(arg0: number): void;
        setM01(arg0: number): void;
        getM00(): number;
        constructor();
    }
    export class $CollisionList {
        centerY: number[];
        centerZ: number[];
        size: number;
        centerX: number[];
        extentsZ: number[];
        extentsY: number[];
        extentsX: number[];
        static DEFAULT_CAPACITY: number;
        constructor();
    }
}
