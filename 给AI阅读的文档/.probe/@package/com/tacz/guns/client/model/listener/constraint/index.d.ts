import { $BedrockPart } from "@package/com/tacz/guns/client/model/bedrock";
import { $BonesItem } from "@package/com/tacz/guns/client/resource/pojo/model";
import { $AnimationListenerSupplier, $AnimationListener, $ObjectAnimationChannel$ChannelType_ } from "@package/com/tacz/guns/api/client/animation";
import { $Vector3f } from "@package/org/joml";

declare module "@package/com/tacz/guns/client/model/listener/constraint" {
    export class $ConstraintObject implements $AnimationListenerSupplier {
        supplyListeners(arg0: string, arg1: $ObjectAnimationChannel$ChannelType_): $AnimationListener;
        rotationConstraint: $Vector3f;
        node: $BedrockPart;
        bonesItem: $BonesItem;
        translationConstraint: $Vector3f;
        constructor();
    }
}
