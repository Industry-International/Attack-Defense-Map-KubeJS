import { $ModelRendererWrapper } from "@package/com/tacz/guns/client/model/bedrock";
import { $AnimationListenerSupplier, $AnimationListener, $ObjectAnimationChannel$ChannelType_ } from "@package/com/tacz/guns/api/client/animation";
import { $Quaternionf } from "@package/org/joml";

declare module "@package/com/tacz/guns/client/model/listener/camera" {
    export class $CameraAnimationObject implements $AnimationListenerSupplier {
        supplyListeners(arg0: string, arg1: $ObjectAnimationChannel$ChannelType_): $AnimationListener;
        rotationQuaternion: $Quaternionf;
        cameraRenderer: $ModelRendererWrapper;
        constructor();
    }
}
