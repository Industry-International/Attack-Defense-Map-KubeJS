
declare module "@package/com/sk89q/worldedit/neoforge/mixin" {
    export class $AccessorServerPlayerGameMode {
    }
    export interface $AccessorServerPlayerGameMode {
        isDestroyingBlock(): boolean;
        get destroyingBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AccessorServerPlayerGameMode}.
     */
    export type $AccessorServerPlayerGameMode_ = (() => boolean);
}
