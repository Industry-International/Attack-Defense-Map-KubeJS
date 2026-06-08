import { $IntConsumer_ as $IntConsumer_$1, $IntIterator } from "@package/it/unimi/dsi/fastutil/ints";
import { $Annotation } from "@package/java/lang/annotation";
import { $IntConsumer_, $Consumer_ } from "@package/java/util/function";
import { $Direction_, $Direction$Axis_, $Direction, $FrontAndTop, $FrontAndTop_ } from "@package/net/minecraft/core";
import { $ITransformationExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Codec } from "@package/com/mojang/serialization";
import { $Triple } from "@package/org/apache/commons/lang3/tuple";
import { $Enum, $Record, $Iterable } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Vector4f, $Matrix3f, $Matrix4f, $Quaternionf, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/math" {
    export class $OctahedralGroup extends $Enum<$OctahedralGroup> implements $StringRepresentable {
        static values(): $OctahedralGroup[];
        static valueOf(arg0: string): $OctahedralGroup;
        compose(arg0: $OctahedralGroup_): $OctahedralGroup;
        rotate(arg0: $Direction_): $Direction;
        rotate(arg0: $FrontAndTop_): $FrontAndTop;
        inverse(): $OctahedralGroup;
        inverts(arg0: $Direction$Axis_): boolean;
        transformation(): $Matrix3f;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ROT_60_REF_PNP: $OctahedralGroup;
        static ROT_180_EDGE_YZ_POS: $OctahedralGroup;
        static ROT_180_FACE_XZ: $OctahedralGroup;
        static ROT_180_FACE_XY: $OctahedralGroup;
        static ROT_90_X_POS: $OctahedralGroup;
        static ROT_60_REF_NPN: $OctahedralGroup;
        static SWAP_NEG_XZ: $OctahedralGroup;
        static ROT_60_REF_NNN: $OctahedralGroup;
        static ROT_60_REF_NPP: $OctahedralGroup;
        static ROT_60_REF_PPN: $OctahedralGroup;
        static SWAP_NEG_XY: $OctahedralGroup;
        static ROT_90_REF_Z_NEG: $OctahedralGroup;
        static ROT_90_X_NEG: $OctahedralGroup;
        static ROT_180_EDGE_YZ_NEG: $OctahedralGroup;
        static ROT_60_REF_NNP: $OctahedralGroup;
        static ROT_60_REF_PNN: $OctahedralGroup;
        static ROT_60_REF_PPP: $OctahedralGroup;
        static ROT_180_EDGE_XZ_NEG: $OctahedralGroup;
        static ROT_120_NNN: $OctahedralGroup;
        static ROT_120_NPP: $OctahedralGroup;
        static ROT_120_PPN: $OctahedralGroup;
        static ROT_120_NPN: $OctahedralGroup;
        static ROT_90_REF_X_POS: $OctahedralGroup;
        static ROT_120_PNP: $OctahedralGroup;
        static SWAP_YZ: $OctahedralGroup;
        static ROT_90_REF_Y_NEG: $OctahedralGroup;
        static ROT_120_NNP: $OctahedralGroup;
        static ROT_120_PNN: $OctahedralGroup;
        static ROT_120_PPP: $OctahedralGroup;
        static ROT_90_Y_POS: $OctahedralGroup;
        static ROT_180_EDGE_XZ_POS: $OctahedralGroup;
        static ROT_90_Y_NEG: $OctahedralGroup;
        static ROT_180_EDGE_XY_NEG: $OctahedralGroup;
        static INVERT_X: $OctahedralGroup;
        static ROT_90_REF_Y_POS: $OctahedralGroup;
        static ROT_90_Z_NEG: $OctahedralGroup;
        static ROT_180_FACE_YZ: $OctahedralGroup;
        static ROT_90_REF_X_NEG: $OctahedralGroup;
        static ROT_180_EDGE_XY_POS: $OctahedralGroup;
        static ROT_90_Z_POS: $OctahedralGroup;
        static INVERSION: $OctahedralGroup;
        static SWAP_NEG_YZ: $OctahedralGroup;
        static IDENTITY: $OctahedralGroup;
        static ROT_90_REF_Z_POS: $OctahedralGroup;
        static SWAP_XY: $OctahedralGroup;
        static SWAP_XZ: $OctahedralGroup;
        static INVERT_Z: $OctahedralGroup;
        static INVERT_Y: $OctahedralGroup;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $OctahedralGroup}.
     */
    export type $OctahedralGroup_ = "identity" | "rot_180_face_xy" | "rot_180_face_xz" | "rot_180_face_yz" | "rot_120_nnn" | "rot_120_nnp" | "rot_120_npn" | "rot_120_npp" | "rot_120_pnn" | "rot_120_pnp" | "rot_120_ppn" | "rot_120_ppp" | "rot_180_edge_xy_neg" | "rot_180_edge_xy_pos" | "rot_180_edge_xz_neg" | "rot_180_edge_xz_pos" | "rot_180_edge_yz_neg" | "rot_180_edge_yz_pos" | "rot_90_x_neg" | "rot_90_x_pos" | "rot_90_y_neg" | "rot_90_y_pos" | "rot_90_z_neg" | "rot_90_z_pos" | "inversion" | "invert_x" | "invert_y" | "invert_z" | "rot_60_ref_nnn" | "rot_60_ref_nnp" | "rot_60_ref_npn" | "rot_60_ref_npp" | "rot_60_ref_pnn" | "rot_60_ref_pnp" | "rot_60_ref_ppn" | "rot_60_ref_ppp" | "swap_xy" | "swap_yz" | "swap_xz" | "swap_neg_xy" | "swap_neg_yz" | "swap_neg_xz" | "rot_90_ref_x_neg" | "rot_90_ref_x_pos" | "rot_90_ref_y_neg" | "rot_90_ref_y_pos" | "rot_90_ref_z_neg" | "rot_90_ref_z_pos";
    export class $Divisor implements $IntIterator {
        hasNext(): boolean;
        nextInt(): number;
        static asIterable(arg0: number, arg1: number): $Iterable<number>;
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        forEachRemaining(arg0: $IntConsumer_$1): void;
        skip(arg0: number): number;
        forEachRemaining(arg0: $IntConsumer_): void;
        remove(): void;
        next(): number;
        constructor(arg0: number, arg1: number);
    }
    export class $Transformation implements $ITransformationExtension {
        static identity(): $Transformation;
        compose(arg0: $Transformation): $Transformation;
        inverse(): $Transformation;
        getRightRotation(): $Quaternionf;
        getLeftRotation(): $Quaternionf;
        getMatrix(): $Matrix4f;
        getTranslation(): $Vector3f;
        slerp(arg0: $Transformation, arg1: number): $Transformation;
        getScale(): $Vector3f;
        getNormalMatrix(): $Matrix3f;
        isIdentity(): boolean;
        transformNormal(arg0: $Vector3f): void;
        transformPosition(arg0: $Vector4f): void;
        rotateTransform(arg0: $Direction_): $Direction;
        applyOrigin(arg0: $Vector3f): $Transformation;
        blockCenterToCorner(): $Transformation;
        blockCornerToCenter(): $Transformation;
        static CODEC: $Codec<$Transformation>;
        static EXTENDED_CODEC: $Codec<$Transformation>;
        constructor(arg0: $Matrix4f);
        constructor(arg0: $Vector3f, arg1: $Quaternionf, arg2: $Vector3f, arg3: $Quaternionf);
        get rightRotation(): $Quaternionf;
        get leftRotation(): $Quaternionf;
        get matrix(): $Matrix4f;
        get translation(): $Vector3f;
        get scale(): $Vector3f;
        get normalMatrix(): $Matrix3f;
    }
    export class $Constants {
        static PI: number;
        static RAD_TO_DEG: number;
        static DEG_TO_RAD: number;
        static EPSILON: number;
        constructor();
    }
    export class $SymmetricGroup3 extends $Enum<$SymmetricGroup3> {
        static values(): $SymmetricGroup3[];
        static valueOf(arg0: string): $SymmetricGroup3;
        compose(arg0: $SymmetricGroup3_): $SymmetricGroup3;
        permutation(arg0: number): number;
        transformation(): $Matrix3f;
        static P213: $SymmetricGroup3;
        static P312: $SymmetricGroup3;
        static P132: $SymmetricGroup3;
        static P231: $SymmetricGroup3;
        static P123: $SymmetricGroup3;
        static P321: $SymmetricGroup3;
    }
    /**
     * Values that may be interpreted as {@link $SymmetricGroup3}.
     */
    export type $SymmetricGroup3_ = "p123" | "p213" | "p132" | "p231" | "p312" | "p321";
    export class $MethodsReturnNonnullByDefault implements $Annotation {
    }
    export class $FieldsAreNonnullByDefault implements $Annotation {
    }
    export class $GivensParameters extends $Record {
        sin(): number;
        cos(): number;
        inverse(): $GivensParameters;
        static fromUnnormalized(arg0: number, arg1: number): $GivensParameters;
        static fromPositiveAngle(arg0: number): $GivensParameters;
        aroundY(arg0: $Matrix3f): $Matrix3f;
        aroundY(arg0: $Quaternionf): $Quaternionf;
        cosHalf(): number;
        aroundX(arg0: $Matrix3f): $Matrix3f;
        aroundX(arg0: $Quaternionf): $Quaternionf;
        aroundZ(arg0: $Matrix3f): $Matrix3f;
        aroundZ(arg0: $Quaternionf): $Quaternionf;
        sinHalf(): number;
        constructor(arg0: number, arg1: number);
    }
    export class $MatrixUtil {
        static mulComponentWise(arg0: $Matrix4f, arg1: number): $Matrix4f;
        static isPureTranslation(arg0: $Matrix4f): boolean;
        static isOrthonormal(arg0: $Matrix4f): boolean;
        static eigenvalueJacobi(arg0: $Matrix3f, arg1: number): $Quaternionf;
        static svdDecompose(arg0: $Matrix3f): $Triple<$Quaternionf, $Vector3f, $Quaternionf>;
    }
    export class $Axis {
        static of(arg0: $Vector3f): $Axis;
        static ZN: $Axis;
        static YN: $Axis;
        static XN: $Axis;
        static ZP: $Axis;
        static YP: $Axis;
        static XP: $Axis;
    }
    export interface $Axis {
        rotationDegrees(arg0: number): $Quaternionf;
        rotation(arg0: number): $Quaternionf;
    }
    /**
     * Values that may be interpreted as {@link $Axis}.
     */
    export type $Axis_ = ((arg0: number) => $Quaternionf);
}
