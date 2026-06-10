import { $IAcceleratedRenderer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $ModelProperties_, $ModelProperties, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        getBone(arg0: string): ($GeoBone) | undefined;
        topLevelBones(): $List<$GeoBone>;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    export class $GeoBone implements $IAcceleratedRenderer<any> {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        render(arg0: $VertexConsumer, arg1: void, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        getMirror(): boolean;
        getPivotY(): number;
        setPivotX(arg0: number): void;
        getPivotX(): number;
        setPivotY(arg0: number): void;
        setScaleX(arg0: number): void;
        setScaleY(arg0: number): void;
        getScaleX(): number;
        getScaleY(): number;
        getPosY(): number;
        getPosX(): number;
        getPosZ(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotationVector(): $Vector3d;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        setRotX(arg0: number): void;
        setRotY(arg0: number): void;
        getRotY(): number;
        getRotX(): number;
        getWorldPosition(): $Vector3d;
        setHidden(arg0: boolean): void;
        saveInitialSnapshot(): void;
        setTrackingMatrices(arg0: boolean): void;
        getModelSpaceMatrix(): $Matrix4f;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        getLocalSpaceMatrix(): $Matrix4f;
        markPositionAsChanged(): void;
        markRotationAsChanged(): void;
        getWorldSpaceMatrix(): $Matrix4f;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        getWorldSpaceNormal(): $Matrix3f;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        getModelRotationMatrix(): $Matrix4f;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        getInflate(): number;
        getCubes(): $List<$GeoCube>;
        setScaleZ(arg0: number): void;
        getInitialSnapshot(): $BoneSnapshot;
        getLocalPosition(): $Vector3d;
        hasRotationChanged(): boolean;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        hasPositionChanged(): boolean;
        resetStateChanges(): void;
        markScaleAsChanged(): void;
        getModelPosition(): $Vector3d;
        getScaleVector(): $Vector3d;
        hasScaleChanged(): boolean;
        saveSnapshot(): $BoneSnapshot;
        shouldNeverRender(): boolean;
        isTrackingMatrices(): boolean;
        setModelPosition(arg0: $Vector3d): void;
        getChildBones(): $List<$GeoBone>;
        setChildrenHidden(arg0: boolean): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        isHidingChildren(): boolean;
        getPositionVector(): $Vector3d;
        getReset(): boolean;
        getRotZ(): number;
        getPivotZ(): number;
        getScaleZ(): number;
        setPivotZ(arg0: number): void;
        setPosX(arg0: number): void;
        setPosY(arg0: number): void;
        setPosZ(arg0: number): void;
        setRotZ(arg0: number): void;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get mirror(): boolean;
        get rotationVector(): $Vector3d;
        get worldPosition(): $Vector3d;
        get modelRotationMatrix(): $Matrix4f;
        get inflate(): number;
        get cubes(): $List<$GeoCube>;
        get initialSnapshot(): $BoneSnapshot;
        get localPosition(): $Vector3d;
        get scaleVector(): $Vector3d;
        get childBones(): $List<$GeoBone>;
        set childrenHidden(value: boolean);
        get hidingChildren(): boolean;
        get positionVector(): $Vector3d;
        get reset(): boolean;
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
        withUVs(arg0: number, arg1: number): $GeoVertex;
        texV(): number;
        texU(): number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
}
