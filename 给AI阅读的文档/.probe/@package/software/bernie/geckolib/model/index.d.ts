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
        getAnimationResourceFallbacks(arg0: T): $ResourceLocation[];
        getBakedModel(arg0: $ResourceLocation_): $BakedGeoModel;
        getRenderType(arg0: T, arg1: $ResourceLocation_): $RenderType;
        handler$cbg000$vista$blockGeckoStateMachineStuffThatShouldProbablyNotEvenExist(arg0: $GeoAnimatable, arg1: number, arg2: $AnimationState<any>, arg3: number, arg4: $CallbackInfo): void;
        getAnimation(arg0: T, arg1: string): $Animation;
        setCustomAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>): void;
        getAnimationProcessor(): $AnimationProcessor<T>;
        addAdditionalStateData(arg0: T, arg1: number, arg2: $BiConsumer_<$DataTicket<T>, T>): void;
        getAnimationResource(arg0: T): $ResourceLocation;
        getBone(arg0: string): ($GeoBone) | undefined;
        applyMolangQueries(arg0: $AnimationState<T>, arg1: number): void;
        crashIfBoneMissing(): boolean;
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
        handleAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>, arg3: number): void;
        constructor();
        get animationProcessor(): $AnimationProcessor<T>;
    }
}
