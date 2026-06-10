
declare module "@package/com/moepus/flerovium/mixins/Particle" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        isStoppedByCollision(): boolean;
        get stoppedByCollision(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleAccessor}.
     */
    export type $ParticleAccessor_ = (() => boolean);
}
