import { $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Deque } from "@package/java/util";

declare module "@package/org/embeddedt/modernfix/common/mixin/bugfix/entity_pose_stack" {
    export class $PoseStackAccessor {
    }
    export interface $PoseStackAccessor {
        getPoseStack(): $Deque<$PoseStack$Pose>;
        get poseStack(): $Deque<$PoseStack$Pose>;
    }
    /**
     * Values that may be interpreted as {@link $PoseStackAccessor}.
     */
    export type $PoseStackAccessor_ = (() => $Deque<$PoseStack$Pose>);
}
