import { $ObjectList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BonesItem, $BedrockVersion_, $BedrockModelPOJO } from "@package/com/tacz/guns/client/resource/pojo/model";
import { $IFunctionalRenderer_ } from "@package/com/tacz/guns/client/model";
import { $PoseStack, $VertexConsumer, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Random, $HashMap, $List } from "@package/java/util";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $Quaternionf } from "@package/org/joml";

declare module "@package/com/tacz/guns/client/model/bedrock" {
    export class $BedrockPart {
        isEmpty(): boolean;
        compile(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        getParent(): $BedrockPart;
        addChild(arg0: $BedrockPart): void;
        render(arg0: $PoseStack, arg1: $ItemDisplayContext_, arg2: $VertexConsumer, arg3: number, arg4: number): void;
        render(arg0: $PoseStack, arg1: $ItemDisplayContext_, arg2: $VertexConsumer, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        getInitRotY(): number;
        getInitRotX(): number;
        getInitRotZ(): number;
        setPos(arg0: number, arg1: number, arg2: number): void;
        translateAndRotateAndScale(arg0: $PoseStack): void;
        getRandomCube(arg0: $Random): $BedrockCube;
        setInitRotationAngle(arg0: number, arg1: number, arg2: number): void;
        mirror: boolean;
        visible: boolean;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        offsetX: number;
        offsetZ: number;
        offsetY: number;
        children: $ObjectList<$BedrockPart>;
        cubes: $ObjectList<$BedrockCube>;
        xScale: number;
        name: string;
        x: number;
        y: number;
        illuminated: boolean;
        z: number;
        additionalQuaternion: $Quaternionf;
        zScale: number;
        constructor(arg0: string | null);
        get empty(): boolean;
        get parent(): $BedrockPart;
        get initRotY(): number;
        get initRotX(): number;
        get initRotZ(): number;
    }
    export class $BedrockModel {
        getSize(): $Vec2;
        getOffset(): $Vec3;
        getNode(arg0: string): $BedrockPart;
        getBone(arg0: string): $BonesItem;
        render(arg0: $PoseStack, arg1: $ItemDisplayContext_, arg2: $RenderType, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        render(arg0: $PoseStack, arg1: $ItemDisplayContext_, arg2: $RenderType, arg3: number, arg4: number): void;
        getIndexBones(): $HashMap<string, $BonesItem>;
        getShouldRender(): $List<$BedrockPart>;
        delegateRender(arg0: $IFunctionalRenderer_): void;
        static dummyModel: $BedrockModel;
        constructor(arg0: $BedrockModelPOJO, arg1: $BedrockVersion_);
        get size(): $Vec2;
        get offset(): $Vec3;
        get indexBones(): $HashMap<string, $BonesItem>;
        get shouldRender(): $List<$BedrockPart>;
    }
    export class $BedrockCube {
    }
    export interface $BedrockCube {
        compile(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BedrockCube}.
     */
    export type $BedrockCube_ = ((arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => void);
    export class $ModelRendererWrapper {
        isHidden(): boolean;
        render(arg0: $PoseStack, arg1: $ItemDisplayContext_, arg2: $VertexConsumer, arg3: number, arg4: number): void;
        setHidden(arg0: boolean): void;
        getOffsetZ(): number;
        getModelRenderer(): $BedrockPart;
        getAdditionalQuaternion(): $Quaternionf;
        getOffsetY(): number;
        setOffsetY(arg0: number): void;
        getOffsetX(): number;
        setOffsetX(arg0: number): void;
        getRotateAngleY(): number;
        getRotateAngleZ(): number;
        getRotationPointZ(): number;
        getRotateAngleX(): number;
        getRotationPointX(): number;
        setRotateAngleZ(arg0: number): void;
        setRotateAngleX(arg0: number): void;
        setRotateAngleY(arg0: number): void;
        getRotationPointY(): number;
        getScaleX(): number;
        getScaleY(): number;
        setScaleY(arg0: number): void;
        setScaleX(arg0: number): void;
        setScaleZ(arg0: number): void;
        setOffsetZ(arg0: number): void;
        getScaleZ(): number;
        addOffsetX(arg0: number): void;
        addOffsetZ(arg0: number): void;
        addOffsetY(arg0: number): void;
        getInitRotateAngleX(): number;
        getInitRotateAngleZ(): number;
        getInitRotateAngleY(): number;
        setAdditionalQuaternion(arg0: $Quaternionf): void;
        constructor(arg0: $BedrockPart);
        get modelRenderer(): $BedrockPart;
        get rotationPointZ(): number;
        get rotationPointX(): number;
        get rotationPointY(): number;
        get initRotateAngleX(): number;
        get initRotateAngleZ(): number;
        get initRotateAngleY(): number;
    }
}
