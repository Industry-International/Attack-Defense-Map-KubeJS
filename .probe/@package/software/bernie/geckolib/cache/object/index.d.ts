import { $IAcceleratedRenderer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $ModelProperties_, $ModelProperties, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3d, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        topLevelBones(): $List<$GeoBone>;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        getBone(arg0: string): ($GeoBone) | undefined;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    export class $GeoBone implements $IAcceleratedRenderer<any> {
        setScaleY(arg0: number): void;
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        render(arg0: $VertexConsumer, arg1: void, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getScaleX(): number;
        setScaleX(arg0: number): void;
        getScaleY(): number;
        setRotX(arg0: number): void;
        setPivotX(arg0: number): void;
        setPivotY(arg0: number): void;
        getPivotX(): number;
        getPivotY(): number;
        getPosZ(): number;
        getPosX(): number;
        getPosY(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotationVector(): $Vector3d;
        setHidden(arg0: boolean): void;
        setPosY(arg0: number): void;
        setPosZ(arg0: number): void;
        setPosX(arg0: number): void;
        setRotZ(arg0: number): void;
        getRotZ(): number;
        getPivotZ(): number;
        setPivotZ(arg0: number): void;
        getScaleZ(): number;
        getReset(): boolean;
        getModelSpaceMatrix(): $Matrix4f;
        getWorldSpaceMatrix(): $Matrix4f;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        getLocalSpaceMatrix(): $Matrix4f;
        getWorldSpaceNormal(): $Matrix3f;
        getModelRotationMatrix(): $Matrix4f;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        saveInitialSnapshot(): void;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        markRotationAsChanged(): void;
        markPositionAsChanged(): void;
        setTrackingMatrices(arg0: boolean): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        hasRotationChanged(): boolean;
        hasPositionChanged(): boolean;
        markScaleAsChanged(): void;
        getInitialSnapshot(): $BoneSnapshot;
        isTrackingMatrices(): boolean;
        getChildBones(): $List<$GeoBone>;
        getModelPosition(): $Vector3d;
        getLocalPosition(): $Vector3d;
        setChildrenHidden(arg0: boolean): void;
        saveSnapshot(): $BoneSnapshot;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        setModelPosition(arg0: $Vector3d): void;
        shouldNeverRender(): boolean;
        getPositionVector(): $Vector3d;
        getScaleVector(): $Vector3d;
        isHidingChildren(): boolean;
        resetStateChanges(): void;
        hasScaleChanged(): boolean;
        getRotY(): number;
        setRotY(arg0: number): void;
        getRotX(): number;
        getMirror(): boolean;
        getWorldPosition(): $Vector3d;
        setScaleZ(arg0: number): void;
        getCubes(): $List<$GeoCube>;
        getInflate(): number;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get rotationVector(): $Vector3d;
        get reset(): boolean;
        get modelRotationMatrix(): $Matrix4f;
        get initialSnapshot(): $BoneSnapshot;
        get childBones(): $List<$GeoBone>;
        get localPosition(): $Vector3d;
        set childrenHidden(value: boolean);
        get positionVector(): $Vector3d;
        get scaleVector(): $Vector3d;
        get hidingChildren(): boolean;
        get mirror(): boolean;
        get worldPosition(): $Vector3d;
        get cubes(): $List<$GeoCube>;
        get inflate(): number;
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
        mirror(): boolean;
        quads(): $GeoQuad[];
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        texV(): number;
        texU(): number;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
}
