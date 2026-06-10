import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Object } from "@package/java/lang";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
export * as instance from "@package/software/bernie/geckolib/animatable/instance";

declare module "@package/software/bernie/geckolib/animatable" {
    export class $GeoAnimatable {
    }
    export interface $GeoAnimatable {
        getTick(arg0: $Object): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        getBoneResetTime(): number;
        animatableCacheOverride(): $AnimatableInstanceCache;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        get boneResetTime(): number;
        get animatableInstanceCache(): $AnimatableInstanceCache;
    }
}
