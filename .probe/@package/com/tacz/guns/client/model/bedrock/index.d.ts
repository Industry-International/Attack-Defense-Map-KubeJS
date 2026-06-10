import { $IAcceleratedRenderer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $ObjectList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BonesItem, $BedrockVersion_, $BedrockModelPOJO } from "@package/com/tacz/guns/client/resource/pojo/model";
import { $IFunctionalRenderer_ } from "@package/com/tacz/guns/client/model";
import { $PoseStack, $VertexConsumer, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Random, $HashMap, $List } from "@package/java/util";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Quaternionf } from "@package/org/joml";

declare module "@package/com/tacz/guns/client/model/bedrock" {
    export class $BedrockPart implements $IAcceleratedRenderer<any> {
        isEmpty(): boolean;
        compile(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        getParent(): $BedrockPart;
        addChild(arg0: $BedrockPart): void;
        getInitRotX(): number;
        getInitRotZ(): number;
        render(arg0: $PoseStack, arg1: $ItemDisplayContext_, arg2: $VertexConsumer, arg3: number, arg4: number): void;
        render(arg0: $VertexConsumer, arg1: void, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        render(arg0: $PoseStack, arg1: $ItemDisplayContext_, arg2: $VertexConsumer, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        handler$ico000$tacz$compileFast(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $CallbackInfo): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        translateAndRotateAndScale(arg0: $PoseStack): void;
        getRandomCube(arg0: $Random): $BedrockCube;
        getInitRotY(): number;
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
        constructor(arg0: string);
        get empty(): boolean;
        get parent(): $BedrockPart;
        get initRotX(): number;
        get initRotZ(): number;
        get initRotY(): number;
    }
    export class $BedrockModel {
        getSize(): $Vec2;
        getOffset(): $Vec3;
        getNode(arg0: string): $BedrockPart;
        render(arg0: $PoseStack, arg1: $ItemDisplayContext_, arg2: $RenderType, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        render(arg0: $PoseStack, arg1: $ItemDisplayContext_, arg2: $RenderType, arg3: number, arg4: number): void;
        getShouldRender(): $List<$BedrockPart>;
        delegateRender(arg0: $IFunctionalRenderer_): void;
        getIndexBones(): $HashMap<string, $BonesItem>;
        getBone(arg0: string): $BonesItem;
        static dummyModel: $BedrockModel;
        constructor(arg0: $BedrockModelPOJO, arg1: $BedrockVersion_);
        get size(): $Vec2;
        get offset(): $Vec3;
        get shouldRender(): $List<$BedrockPart>;
        get indexBones(): $HashMap<string, $BonesItem>;
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
        setScaleX(arg0: number): void;
        setScaleY(arg0: number): void;
        getScaleX(): number;
        getScaleY(): number;
        getOffsetX(): number;
        setOffsetY(arg0: number): void;
        setOffsetX(arg0: number): void;
        getOffsetY(): number;
        getOffsetZ(): number;
        addOffsetX(arg0: number): void;
        addOffsetY(arg0: number): void;
        addOffsetZ(arg0: number): void;
        setHidden(arg0: boolean): void;
        getModelRenderer(): $BedrockPart;
        getInitRotateAngleX(): number;
        setAdditionalQuaternion(arg0: $Quaternionf): void;
        getInitRotateAngleY(): number;
        getInitRotateAngleZ(): number;
        getAdditionalQuaternion(): $Quaternionf;
        setOffsetZ(arg0: number): void;
        setScaleZ(arg0: number): void;
        getScaleZ(): number;
        getRotateAngleX(): number;
        setRotateAngleX(arg0: number): void;
        getRotateAngleY(): number;
        setRotateAngleZ(arg0: number): void;
        setRotateAngleY(arg0: number): void;
        getRotateAngleZ(): number;
        getRotationPointY(): number;
        getRotationPointZ(): number;
        getRotationPointX(): number;
        constructor(arg0: $BedrockPart);
        get modelRenderer(): $BedrockPart;
        get initRotateAngleX(): number;
        get initRotateAngleY(): number;
        get initRotateAngleZ(): number;
        get rotationPointY(): number;
        get rotationPointZ(): number;
        get rotationPointX(): number;
    }
}
