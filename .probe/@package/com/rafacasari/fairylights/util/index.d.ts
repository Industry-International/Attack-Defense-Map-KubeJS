import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Vec3 } from "@package/net/minecraft/world/phys";
export * as matrix from "@package/com/rafacasari/fairylights/util/matrix";

declare module "@package/com/rafacasari/fairylights/util" {
    export class $Curve$SegmentView {
    }
    export interface $Curve$SegmentView {
        getY(arg0: number): number;
        getX(arg0: number): number;
        getLength(): number;
        getIndex(): number;
        getPos(): $Vec3;
        getZ(arg0: number): number;
        getPitch(): number;
        getYaw(): number;
        get length(): number;
        get index(): number;
        get pos(): $Vec3;
        get pitch(): number;
        get yaw(): number;
    }
    export class $Curve {
    }
    export interface $Curve {
        getY(): number;
        getY(arg0: number, arg1: number): number;
        getY(arg0: number): number;
        getX(arg0: number): number;
        getX(arg0: number, arg1: number): number;
        getX(): number;
        getLength(): number;
        iterator(arg0: boolean): $Curve$SegmentIterator;
        iterator(): $Curve$SegmentIterator;
        getCount(): number;
        visitPoints(arg0: number, arg1: boolean, arg2: $Curve$PointVisitor_): void;
        getZ(arg0: number, arg1: number): number;
        getZ(arg0: number): number;
        getZ(): number;
        lerp(arg0: $Curve, arg1: number): $Curve;
        getDz(arg0: number): number;
        getDx(arg0: number): number;
        getDy(arg0: number): number;
        get length(): number;
        get count(): number;
    }
    export class $Curve$SegmentIterator {
    }
    export interface $Curve$SegmentIterator extends $Curve$SegmentView {
        hasNext(): boolean;
        next(): boolean;
    }
    export class $NBTSerializable {
    }
    export interface $NBTSerializable {
        deserialize(arg0: $CompoundTag_): void;
        serialize(): $CompoundTag;
    }
    export class $Curve$PointVisitor {
    }
    export interface $Curve$PointVisitor {
        visit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Curve$PointVisitor}.
     */
    export type $Curve$PointVisitor_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
}
