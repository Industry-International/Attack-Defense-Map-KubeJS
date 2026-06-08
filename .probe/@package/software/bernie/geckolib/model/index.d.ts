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
        getBakedModel(arg0: $ResourceLocation_): $BakedGeoModel;
        handleAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>, arg3: number): void;
        /**
         * @deprecated
         */
        getTextureResource(arg0: T): $ResourceLocation;
        getTextureResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        getModelResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        /**
         * @deprecated
         */
        getModelResource(arg0: T): $ResourceLocation;
        crashIfBoneMissing(): boolean;
        setCustomAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>): void;
        handler$cbg000$vista$blockGeckoStateMachineStuffThatShouldProbablyNotEvenExist(arg0: $GeoAnimatable, arg1: number, arg2: $AnimationState<any>, arg3: number, arg4: $CallbackInfo): void;
        getRenderType(arg0: T, arg1: $ResourceLocation_): $RenderType;
        getAnimation(arg0: T, arg1: string): $Animation;
        getAnimationResourceFallbacks(arg0: T): $ResourceLocation[];
        getAnimationProcessor(): $AnimationProcessor<T>;
        addAdditionalStateData(arg0: T, arg1: number, arg2: $BiConsumer_<$DataTicket<T>, T>): void;
        getAnimationResource(arg0: T): $ResourceLocation;
        applyMolangQueries(arg0: $AnimationState<T>, arg1: number): void;
        getBone(arg0: string): ($GeoBone) | undefined;
        constructor();
        get animationProcessor(): $AnimationProcessor<T>;
    }
}
