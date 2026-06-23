import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties_, $ModelProperties, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        getBone(arg0: string): ($GeoBone) | undefined;
        topLevelBones(): $List<$GeoBone>;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    export class $GeoBone {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getCubes(): $List<$GeoCube>;
        getInflate(): number;
        setHidden(arg0: boolean): void;
        setPosX(arg0: number): void;
        markRotationAsChanged(): void;
        markPositionAsChanged(): void;
        saveInitialSnapshot(): void;
        getPivotZ(): number;
        setPivotZ(arg0: number): void;
        getReset(): boolean;
        setPosY(arg0: number): void;
        setRotY(arg0: number): void;
        getRotX(): number;
        setRotX(arg0: number): void;
        getRotY(): number;
        getWorldPosition(): $Vector3d;
        getPosX(): number;
        getPosY(): number;
        getPosZ(): number;
        markScaleAsChanged(): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        hasRotationChanged(): boolean;
        getInitialSnapshot(): $BoneSnapshot;
        resetStateChanges(): void;
        hasScaleChanged(): boolean;
        saveSnapshot(): $BoneSnapshot;
        getChildBones(): $List<$GeoBone>;
        hasPositionChanged(): boolean;
        setPivotY(arg0: number): void;
        getPivotY(): number;
        getScaleX(): number;
        getPivotX(): number;
        getScaleY(): number;
        setScaleY(arg0: number): void;
        setScaleX(arg0: number): void;
        setPivotX(arg0: number): void;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getRotationVector(): $Vector3d;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getMirror(): boolean;
        setRotZ(arg0: number): void;
        setPosZ(arg0: number): void;
        setScaleZ(arg0: number): void;
        getRotZ(): number;
        getScaleZ(): number;
        getPositionVector(): $Vector3d;
        getLocalPosition(): $Vector3d;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        setModelPosition(arg0: $Vector3d): void;
        setChildrenHidden(arg0: boolean): void;
        getModelPosition(): $Vector3d;
        shouldNeverRender(): boolean;
        isHidingChildren(): boolean;
        isTrackingMatrices(): boolean;
        getScaleVector(): $Vector3d;
        getModelSpaceMatrix(): $Matrix4f;
        getLocalSpaceMatrix(): $Matrix4f;
        setTrackingMatrices(arg0: boolean): void;
        getWorldSpaceMatrix(): $Matrix4f;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        getModelRotationMatrix(): $Matrix4f;
        getWorldSpaceNormal(): $Matrix3f;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get cubes(): $List<$GeoCube>;
        get inflate(): number;
        get reset(): boolean;
        get worldPosition(): $Vector3d;
        get initialSnapshot(): $BoneSnapshot;
        get childBones(): $List<$GeoBone>;
        get rotationVector(): $Vector3d;
        get mirror(): boolean;
        get positionVector(): $Vector3d;
        get localPosition(): $Vector3d;
        set childrenHidden(value: boolean);
        get hidingChildren(): boolean;
        get scaleVector(): $Vector3d;
        get modelRotationMatrix(): $Matrix4f;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        quads(): $GeoQuad[];
        mirror(): boolean;
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        texU(): number;
        texV(): number;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
}
