import { $IAcceleratedRenderer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $ModelProperties, $ModelProperties_, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3d, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        topLevelBones(): $List<$GeoBone>;
        getBone(arg0: string): ($GeoBone) | undefined;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    export class $GeoBone implements $IAcceleratedRenderer<any> {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        setHidden(arg0: boolean): void;
        render(arg0: $VertexConsumer, arg1: void, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        getPosY(): number;
        getPosX(): number;
        getRotationVector(): $Vector3d;
        getMirror(): boolean;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getScaleY(): number;
        getPivotX(): number;
        getScaleX(): number;
        setPivotX(arg0: number): void;
        getPivotY(): number;
        setPivotY(arg0: number): void;
        setScaleX(arg0: number): void;
        setScaleY(arg0: number): void;
        getInitialSnapshot(): $BoneSnapshot;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        markScaleAsChanged(): void;
        hasRotationChanged(): boolean;
        resetStateChanges(): void;
        getChildBones(): $List<$GeoBone>;
        saveSnapshot(): $BoneSnapshot;
        hasPositionChanged(): boolean;
        hasScaleChanged(): boolean;
        getRotZ(): number;
        getScaleZ(): number;
        getWorldPosition(): $Vector3d;
        getRotY(): number;
        setRotX(arg0: number): void;
        setRotY(arg0: number): void;
        getRotX(): number;
        getPosZ(): number;
        markPositionAsChanged(): void;
        markRotationAsChanged(): void;
        saveInitialSnapshot(): void;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        setScaleZ(arg0: number): void;
        getCubes(): $List<$GeoCube>;
        getInflate(): number;
        setPivotZ(arg0: number): void;
        getPivotZ(): number;
        getReset(): boolean;
        setTrackingMatrices(arg0: boolean): void;
        getLocalSpaceMatrix(): $Matrix4f;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        getWorldSpaceMatrix(): $Matrix4f;
        getModelSpaceMatrix(): $Matrix4f;
        getModelRotationMatrix(): $Matrix4f;
        getWorldSpaceNormal(): $Matrix3f;
        setPosX(arg0: number): void;
        setPosZ(arg0: number): void;
        setRotZ(arg0: number): void;
        setPosY(arg0: number): void;
        setChildrenHidden(arg0: boolean): void;
        isTrackingMatrices(): boolean;
        getLocalPosition(): $Vector3d;
        getModelPosition(): $Vector3d;
        getPositionVector(): $Vector3d;
        getScaleVector(): $Vector3d;
        setModelPosition(arg0: $Vector3d): void;
        shouldNeverRender(): boolean;
        isHidingChildren(): boolean;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get rotationVector(): $Vector3d;
        get mirror(): boolean;
        get initialSnapshot(): $BoneSnapshot;
        get childBones(): $List<$GeoBone>;
        get worldPosition(): $Vector3d;
        get cubes(): $List<$GeoCube>;
        get inflate(): number;
        get reset(): boolean;
        get modelRotationMatrix(): $Matrix4f;
        set childrenHidden(value: boolean);
        get localPosition(): $Vector3d;
        get positionVector(): $Vector3d;
        get scaleVector(): $Vector3d;
        get hidingChildren(): boolean;
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
        withUVs(arg0: number, arg1: number): $GeoVertex;
        texV(): number;
        texU(): number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
}
