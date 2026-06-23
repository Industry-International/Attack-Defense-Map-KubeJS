import { $Camera } from "@package/net/minecraft/client";

declare module "@package/top/leonx/irisveil/accessors" {
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        irisveil$invokeGetFov(arg0: $Camera, arg1: number, arg2: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $GameRendererAccessor}.
     */
    export type $GameRendererAccessor_ = ((arg0: $Camera, arg1: number, arg2: boolean) => number);
}
