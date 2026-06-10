
declare module "@package/eu/ha3/presencefootsteps/mixins" {
    export class $ILivingEntity {
    }
    export interface $ILivingEntity {
        isJumping(): boolean;
        get jumping(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ILivingEntity}.
     */
    export type $ILivingEntity_ = (() => boolean);
}
