import { $Direction_ } from "@package/net/minecraft/core";
import { $Enum } from "@package/java/lang";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad/properties" {
    export class $ModelQuadFacing extends $Enum<$ModelQuadFacing> {
        static values(): $ModelQuadFacing[];
        static valueOf(arg0: string): $ModelQuadFacing;
        getAlignedNormal(): $Vector3fc;
        getOpposite(): $ModelQuadFacing;
        static fromDirection(arg0: $Direction_): $ModelQuadFacing;
        getAxis(): number;
        static fromNormal(arg0: number, arg1: number, arg2: number): $ModelQuadFacing;
        isAligned(): boolean;
        getSign(): number;
        static fromPackedNormal(arg0: number): $ModelQuadFacing;
        static bitmapIsOpposingAligned(arg0: number): boolean;
        getPackedAlignedNormal(): number;
        static bitmapHasUnassigned(arg0: number): boolean;
        static NEG_Z: $ModelQuadFacing;
        static POS_X: $ModelQuadFacing;
        static NEG_Y: $ModelQuadFacing;
        static ALL: number;
        static POS_Y: $ModelQuadFacing;
        static NEG_X: $ModelQuadFacing;
        static POS_Z: $ModelQuadFacing;
        static OPPOSING_Z: number;
        static OPPOSING_X: number;
        static UNASSIGNED_MASK: number;
        static OPPOSING_Y: number;
        static UNASSIGNED: $ModelQuadFacing;
        static PACKED_ALIGNED_NORMALS: number[];
        static ALIGNED_NORMALS: $Vector3fc[];
        static VALUES: $ModelQuadFacing[];
        static COUNT: number;
        static NONE: number;
        static DIRECTIONS: number;
        get alignedNormal(): $Vector3fc;
        get opposite(): $ModelQuadFacing;
        get axis(): number;
        get aligned(): boolean;
        get sign(): number;
        get packedAlignedNormal(): number;
    }
    /**
     * Values that may be interpreted as {@link $ModelQuadFacing}.
     */
    export type $ModelQuadFacing_ = "pos_x" | "pos_y" | "pos_z" | "neg_x" | "neg_y" | "neg_z" | "unassigned";
}
