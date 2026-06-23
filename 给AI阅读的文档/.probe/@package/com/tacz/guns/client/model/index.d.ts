import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemDisplayContext_, $ItemDisplayContext, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ShellRender } from "@package/com/tacz/guns/client/model/functional";
import { $CameraAnimationObject } from "@package/com/tacz/guns/client/model/listener/camera";
import { $TextShow } from "@package/com/tacz/guns/client/resource/pojo/display/gun";
import { $List, $EnumMap, $Map_ } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $BedrockModel, $BedrockPart } from "@package/com/tacz/guns/client/model/bedrock";
import { $AttachmentType, $AttachmentType_ } from "@package/com/tacz/guns/api/item/attachment";
import { $BedrockVersion_, $BedrockModelPOJO } from "@package/com/tacz/guns/client/resource/pojo/model";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ObjectAnimationChannel$ChannelType_, $AnimationListenerSupplier, $AnimationListener } from "@package/com/tacz/guns/api/client/animation";
import { $ConstraintObject } from "@package/com/tacz/guns/client/model/listener/constraint";
export * as functional from "@package/com/tacz/guns/client/model/functional";
export * as bedrock from "@package/com/tacz/guns/client/model/bedrock";
export * as listener from "@package/com/tacz/guns/client/model/listener";

declare module "@package/com/tacz/guns/client/model" {
    export class $BedrockGunModel extends $BedrockAnimatedModel {
        render(arg0: $PoseStack, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: $RenderType, arg4: number, arg5: number): void;
        getCurrentGunItem(): $ItemStack;
        setRenderHand(arg0: boolean): void;
        getScopePosPath(): $List<$BedrockPart>;
        getIronSightPath(): $List<$BedrockPart>;
        getFixedOriginPath(): $List<$BedrockPart>;
        renderAccelerated(arg0: $PoseStack, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: $RenderType, arg4: number, arg5: number): void;
        getThirdPersonHandOriginPath(): $List<$BedrockPart>;
        setTextShowList(arg0: $Map_<string, $TextShow>): void;
        getShellRender(arg0: number): $ShellRender;
        getGroundOriginPath(): $List<$BedrockPart>;
        getRefitAttachmentViewPath(arg0: $AttachmentType_): $List<$BedrockPart>;
        getCurrentAttachmentItem(): $EnumMap<$AttachmentType, $ItemStack>;
        getAdditionalMagazineNode(): $BedrockPart;
        getMuzzleFlashPosPath(): $List<$BedrockPart>;
        static CAMERA_NODE_NAME: string;
        static CONSTRAINT_NODE: string;
        static dummyModel: $BedrockModel;
        constructor(arg0: $BedrockModelPOJO, arg1: $BedrockVersion_);
        get currentGunItem(): $ItemStack;
        set renderHand(value: boolean);
        get scopePosPath(): $List<$BedrockPart>;
        get ironSightPath(): $List<$BedrockPart>;
        get fixedOriginPath(): $List<$BedrockPart>;
        get thirdPersonHandOriginPath(): $List<$BedrockPart>;
        set textShowList(value: $Map_<string, $TextShow>);
        get groundOriginPath(): $List<$BedrockPart>;
        get currentAttachmentItem(): $EnumMap<$AttachmentType, $ItemStack>;
        get additionalMagazineNode(): $BedrockPart;
        get muzzleFlashPosPath(): $List<$BedrockPart>;
    }
    export class $BedrockAnimatedModel extends $BedrockModel implements $AnimationListenerSupplier {
        getRootNode(): $BedrockPart;
        getRenderHand(): boolean;
        getConstraintPath(): $List<$BedrockPart>;
        getIdleSightPath(): $List<$BedrockPart>;
        supplyListeners(arg0: string, arg1: $ObjectAnimationChannel$ChannelType_): $AnimationListener;
        setFunctionalRenderer(arg0: string, arg1: $Function_<$BedrockPart, $IFunctionalRenderer>): void;
        getConstraintObject(): $ConstraintObject;
        cleanAnimationTransform(): void;
        getCameraAnimationObject(): $CameraAnimationObject;
        cleanCameraAnimationTransform(): void;
        static CAMERA_NODE_NAME: string;
        static CONSTRAINT_NODE: string;
        static dummyModel: $BedrockModel;
        constructor(arg0: $BedrockModelPOJO, arg1: $BedrockVersion_);
        get rootNode(): $BedrockPart;
        get renderHand(): boolean;
        get constraintPath(): $List<$BedrockPart>;
        get idleSightPath(): $List<$BedrockPart>;
        get constraintObject(): $ConstraintObject;
        get cameraAnimationObject(): $CameraAnimationObject;
    }
    export class $IFunctionalRenderer {
    }
    export interface $IFunctionalRenderer {
        render(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $ItemDisplayContext_, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IFunctionalRenderer}.
     */
    export type $IFunctionalRenderer_ = ((arg0: $PoseStack, arg1: $VertexConsumer, arg2: $ItemDisplayContext, arg3: number, arg4: number) => void);
}
