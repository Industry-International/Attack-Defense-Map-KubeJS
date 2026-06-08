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
        getBone(arg0: string): ($GeoBone) | undefined;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    export class $GeoBone implements $IAcceleratedRenderer<any> {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getPivotY(): number;
        getScaleX(): number;
        setPivotY(arg0: number): void;
        getPivotX(): number;
        setPivotX(arg0: number): void;
        getScaleY(): number;
        setScaleX(arg0: number): void;
        setScaleY(arg0: number): void;
        render(arg0: $VertexConsumer, arg1: void, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        getRotationVector(): $Vector3d;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        setHidden(arg0: boolean): void;
        getMirror(): boolean;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        hasRotationChanged(): boolean;
        hasPositionChanged(): boolean;
        markScaleAsChanged(): void;
        getInitialSnapshot(): $BoneSnapshot;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        resetStateChanges(): void;
        hasScaleChanged(): boolean;
        saveSnapshot(): $BoneSnapshot;
        getChildBones(): $List<$GeoBone>;
        getModelPosition(): $Vector3d;
        getLocalPosition(): $Vector3d;
        isHidingChildren(): boolean;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        shouldNeverRender(): boolean;
        setModelPosition(arg0: $Vector3d): void;
        isTrackingMatrices(): boolean;
        setChildrenHidden(arg0: boolean): void;
        getScaleVector(): $Vector3d;
        getPositionVector(): $Vector3d;
        markRotationAsChanged(): void;
        markPositionAsChanged(): void;
        saveInitialSnapshot(): void;
        setPosX(arg0: number): void;
        setPosZ(arg0: number): void;
        setRotZ(arg0: number): void;
        setPosY(arg0: number): void;
        getInflate(): number;
        getReset(): boolean;
        setPivotZ(arg0: number): void;
        getCubes(): $List<$GeoCube>;
        getPivotZ(): number;
        setRotX(arg0: number): void;
        getRotX(): number;
        setRotY(arg0: number): void;
        getRotY(): number;
        getWorldSpaceNormal(): $Matrix3f;
        getModelRotationMatrix(): $Matrix4f;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setTrackingMatrices(arg0: boolean): void;
        getModelSpaceMatrix(): $Matrix4f;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        getLocalSpaceMatrix(): $Matrix4f;
        getWorldSpaceMatrix(): $Matrix4f;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        getWorldPosition(): $Vector3d;
        getPosX(): number;
        getPosY(): number;
        getPosZ(): number;
        setScaleZ(arg0: number): void;
        getRotZ(): number;
        getScaleZ(): number;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get rotationVector(): $Vector3d;
        get mirror(): boolean;
        get initialSnapshot(): $BoneSnapshot;
        get childBones(): $List<$GeoBone>;
        get localPosition(): $Vector3d;
        get hidingChildren(): boolean;
        set childrenHidden(value: boolean);
        get scaleVector(): $Vector3d;
        get positionVector(): $Vector3d;
        get inflate(): number;
        get reset(): boolean;
        get cubes(): $List<$GeoCube>;
        get modelRotationMatrix(): $Matrix4f;
        get worldPosition(): $Vector3d;
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
        rotation(): $Vec3;
        mirror(): boolean;
        quads(): $GeoQuad[];
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
