
declare module "@package/net/caffeinemc/mods/sodium/client/render/viewport/frustum" {
    export class $Frustum {
    }
    export interface $Frustum {
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Frustum}.
     */
    export type $Frustum_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => boolean);
}
