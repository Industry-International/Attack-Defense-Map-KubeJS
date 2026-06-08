import { $BlockPos, $SectionPos } from "@package/net/minecraft/core";
import { $Frustum_ } from "@package/net/caffeinemc/mods/sodium/client/render/viewport/frustum";
import { $Vector3d } from "@package/org/joml";
export * as frustum from "@package/net/caffeinemc/mods/sodium/client/render/viewport/frustum";

declare module "@package/net/caffeinemc/mods/sodium/client/render/viewport" {
    export class $ViewportProvider {
    }
    export interface $ViewportProvider {
        sodium$createViewport(): $Viewport;
    }
    /**
     * Values that may be interpreted as {@link $ViewportProvider}.
     */
    export type $ViewportProvider_ = (() => $Viewport);
    export class $Viewport {
        getTransform(): $CameraTransform;
        isBoxVisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getChunkCoord(): $SectionPos;
        getBlockCoord(): $BlockPos;
        constructor(arg0: $Frustum_, arg1: $Vector3d);
        get transform(): $CameraTransform;
        get chunkCoord(): $SectionPos;
        get blockCoord(): $BlockPos;
    }
    export class $CameraTransform {
        intX: number;
        fracX: number;
        x: number;
        fracY: number;
        y: number;
        intZ: number;
        z: number;
        intY: number;
        fracZ: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
}
