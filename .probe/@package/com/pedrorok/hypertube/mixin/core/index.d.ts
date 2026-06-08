import { $ModelPart } from "@package/net/minecraft/client/model/geom";

declare module "@package/com/pedrorok/hypertube/mixin/core" {
    export class $PlayerModelAccessor {
    }
    export interface $PlayerModelAccessor {
        createHypertube$getCloak(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelAccessor}.
     */
    export type $PlayerModelAccessor_ = (() => $ModelPart);
    export class $CameraAccessorMixin {
    }
    export interface $CameraAccessorMixin {
        createHypertube$callSetRotation(arg0: number, arg1: number): void;
        createHypertube$callSetPosition(arg0: number, arg1: number, arg2: number): void;
        createHypertube$callGetMaxZoom(arg0: number): number;
        createHypertube$callMove(arg0: number, arg1: number, arg2: number): void;
    }
}
