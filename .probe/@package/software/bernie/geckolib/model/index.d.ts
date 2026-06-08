import { $BiConsumer_ } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GeoBone, $BakedGeoModel } from "@package/software/bernie/geckolib/cache/object";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $GeoRenderer } from "@package/software/bernie/geckolib/renderer";
import { $Animation, $AnimationProcessor, $AnimationState } from "@package/software/bernie/geckolib/animation";

declare module "@package/software/bernie/geckolib/model" {
    export class $GeoModel<T extends $GeoAnimatable> {
        getAnimationResource(arg0: T): $ResourceLocation;
        addAdditionalStateData(arg0: T, arg1: number, arg2: $BiConsumer_<$DataTicket<T>, T>): void;
        getAnimationProcessor(): $AnimationProcessor<T>;
        getAnimation(arg0: T, arg1: string): $Animation;
        getRenderType(arg0: T, arg1: $ResourceLocation_): $RenderType;
        applyMolangQueries(arg0: $AnimationState<T>, arg1: number): void;
        setCustomAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>): void;
        getBone(arg0: string): ($GeoBone) | undefined;
        getBakedModel(arg0: $ResourceLocation_): $BakedGeoModel;
        getAnimationResourceFallbacks(arg0: T): $ResourceLocation[];
        handler$cbh000$vista$blockGeckoStateMachineStuffThatShouldProbablyNotEvenExist(arg0: $GeoAnimatable, arg1: number, arg2: $AnimationState<any>, arg3: number, arg4: $CallbackInfo): void;
        handleAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>, arg3: number): void;
        getTextureResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        /**
         * @deprecated
         */
        getTextureResource(arg0: T): $ResourceLocation;
        getModelResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        /**
         * @deprecated
         */
        getModelResource(arg0: T): $ResourceLocation;
        crashIfBoneMissing(): boolean;
        constructor();
        get animationProcessor(): $AnimationProcessor<T>;
    }
}
