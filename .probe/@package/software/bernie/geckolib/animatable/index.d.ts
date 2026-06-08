import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Object } from "@package/java/lang";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
export * as instance from "@package/software/bernie/geckolib/animatable/instance";

declare module "@package/software/bernie/geckolib/animatable" {
    export class $GeoAnimatable {
    }
    export interface $GeoAnimatable {
        getBoneResetTime(): number;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        animatableCacheOverride(): $AnimatableInstanceCache;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        shouldPlayAnimsWhileGamePaused(): boolean;
        getTick(arg0: $Object): number;
        get boneResetTime(): number;
        get animatableInstanceCache(): $AnimatableInstanceCache;
    }
}
