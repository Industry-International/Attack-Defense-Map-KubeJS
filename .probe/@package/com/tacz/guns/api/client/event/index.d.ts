import { $KubeJSGunEventPoster } from "@package/com/tacz/guns/api/event/common";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/com/tacz/guns/api/client/event" {
    export class $RenderLevelBobEvent$BobView extends $RenderLevelBobEvent {
        constructor();
    }
    export class $RenderItemInHandBobEvent extends $Event implements $KubeJSGunEventPoster<$RenderItemInHandBobEvent>, $ICancellableEvent {
        postClientEventToKubeJS(arg0: $RenderItemInHandBobEvent): void;
        postServerEventToKubeJS(arg0: $RenderItemInHandBobEvent): void;
        postEventToKubeJS(arg0: $RenderItemInHandBobEvent): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor();
    }
    export class $RenderLevelBobEvent extends $Event implements $KubeJSGunEventPoster<$RenderLevelBobEvent>, $ICancellableEvent {
        postClientEventToKubeJS(arg0: $RenderLevelBobEvent): void;
        postServerEventToKubeJS(arg0: $RenderLevelBobEvent): void;
        postEventToKubeJS(arg0: $RenderLevelBobEvent): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor();
    }
    export class $RenderItemInHandBobEvent$BobHurt extends $RenderItemInHandBobEvent {
        constructor();
    }
    export class $SwapItemWithOffHand extends $Event implements $KubeJSGunEventPoster<$SwapItemWithOffHand> {
        postClientEventToKubeJS(arg0: $SwapItemWithOffHand): void;
        postServerEventToKubeJS(arg0: $SwapItemWithOffHand): void;
        postEventToKubeJS(arg0: $SwapItemWithOffHand): void;
        constructor();
    }
    export class $BeforeRenderHandEvent extends $Event implements $KubeJSGunEventPoster<$BeforeRenderHandEvent> {
        getPoseStack(): $PoseStack;
        postClientEventToKubeJS(arg0: $BeforeRenderHandEvent): void;
        postServerEventToKubeJS(arg0: $BeforeRenderHandEvent): void;
        postEventToKubeJS(arg0: $BeforeRenderHandEvent): void;
        constructor(arg0: $PoseStack);
        get poseStack(): $PoseStack;
    }
    export class $RenderLevelBobEvent$BobHurt extends $RenderLevelBobEvent {
        constructor();
    }
    export class $RenderItemInHandBobEvent$BobView extends $RenderItemInHandBobEvent {
        constructor();
    }
}
