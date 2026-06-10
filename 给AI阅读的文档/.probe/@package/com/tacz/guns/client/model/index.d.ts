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
        setTextShowList(arg0: $Map_<string, $TextShow>): void;
        getShellRender(arg0: number): $ShellRender;
        setRenderHand(arg0: boolean): void;
        getCurrentGunItem(): $ItemStack;
        getRefitAttachmentViewPath(arg0: $AttachmentType_): $List<$BedrockPart>;
        getCurrentAttachmentItem(): $EnumMap<$AttachmentType, $ItemStack>;
        getMuzzleFlashPosPath(): $List<$BedrockPart>;
        getAdditionalMagazineNode(): $BedrockPart;
        getGroundOriginPath(): $List<$BedrockPart>;
        getThirdPersonHandOriginPath(): $List<$BedrockPart>;
        getIronSightPath(): $List<$BedrockPart>;
        getScopePosPath(): $List<$BedrockPart>;
        getFixedOriginPath(): $List<$BedrockPart>;
        renderAccelerated(arg0: $PoseStack, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: $RenderType, arg4: number, arg5: number): void;
        static CAMERA_NODE_NAME: string;
        static CONSTRAINT_NODE: string;
        static dummyModel: $BedrockModel;
        constructor(arg0: $BedrockModelPOJO, arg1: $BedrockVersion_);
        set textShowList(value: $Map_<string, $TextShow>);
        set renderHand(value: boolean);
        get currentGunItem(): $ItemStack;
        get currentAttachmentItem(): $EnumMap<$AttachmentType, $ItemStack>;
        get muzzleFlashPosPath(): $List<$BedrockPart>;
        get additionalMagazineNode(): $BedrockPart;
        get groundOriginPath(): $List<$BedrockPart>;
        get thirdPersonHandOriginPath(): $List<$BedrockPart>;
        get ironSightPath(): $List<$BedrockPart>;
        get scopePosPath(): $List<$BedrockPart>;
        get fixedOriginPath(): $List<$BedrockPart>;
    }
    export class $BedrockAnimatedModel extends $BedrockModel implements $AnimationListenerSupplier {
        getRootNode(): $BedrockPart;
        getRenderHand(): boolean;
        getConstraintObject(): $ConstraintObject;
        setFunctionalRenderer(arg0: string, arg1: $Function_<$BedrockPart, $IFunctionalRenderer>): void;
        cleanAnimationTransform(): void;
        getCameraAnimationObject(): $CameraAnimationObject;
        cleanCameraAnimationTransform(): void;
        getConstraintPath(): $List<$BedrockPart>;
        getIdleSightPath(): $List<$BedrockPart>;
        supplyListeners(arg0: string, arg1: $ObjectAnimationChannel$ChannelType_): $AnimationListener;
        static CAMERA_NODE_NAME: string;
        static CONSTRAINT_NODE: string;
        static dummyModel: $BedrockModel;
        constructor(arg0: $BedrockModelPOJO, arg1: $BedrockVersion_);
        get rootNode(): $BedrockPart;
        get renderHand(): boolean;
        get constraintObject(): $ConstraintObject;
        get cameraAnimationObject(): $CameraAnimationObject;
        get constraintPath(): $List<$BedrockPart>;
        get idleSightPath(): $List<$BedrockPart>;
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
