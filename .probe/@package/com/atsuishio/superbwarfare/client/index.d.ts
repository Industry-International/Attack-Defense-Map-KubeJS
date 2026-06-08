import { $Camera } from "@package/net/minecraft/client";
import { $Quaternionf } from "@package/org/joml";

declare module "@package/com/atsuishio/superbwarfare/client" {
    export class $ICustomCamera {
        static of(arg0: $Camera): $ICustomCamera;
        static getCameraRotation(): $Quaternionf;
        static get cameraRotation(): $Quaternionf;
    }
    export interface $ICustomCamera {
        superbwarfare$getRotation(): $Quaternionf;
    }
    /**
     * Values that may be interpreted as {@link $ICustomCamera}.
     */
    export type $ICustomCamera_ = (() => $Quaternionf);
}
