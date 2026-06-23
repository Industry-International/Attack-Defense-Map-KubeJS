import { $GameRendererAccessor } from "@package/top/leonx/irisveil/accessors";
import { $Camera } from "@package/net/minecraft/client";

declare module "@package/top/leonx/irisveil/mixin/iris" {
    export class $MixinGameRendererAccessor {
    }
    export interface $MixinGameRendererAccessor extends $GameRendererAccessor {
        irisveil$invokeGetFov(arg0: $Camera, arg1: number, arg2: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $MixinGameRendererAccessor}.
     */
    export type $MixinGameRendererAccessor_ = ((arg0: $Camera, arg1: number, arg2: boolean) => number);
}
