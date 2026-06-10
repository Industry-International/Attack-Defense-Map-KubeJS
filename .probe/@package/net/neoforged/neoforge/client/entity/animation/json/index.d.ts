import { $AnimationTarget, $AnimationTarget_ } from "@package/net/neoforged/neoforge/client/entity/animation";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $AnimationChannel$Interpolation_, $AnimationChannel$Interpolation, $Keyframe, $AnimationDefinition, $AnimationChannel, $AnimationChannel$Target_ } from "@package/net/minecraft/client/animation";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";

declare module "@package/net/neoforged/neoforge/client/entity/animation/json" {
    export class $AnimationTypeManager {
        static init(): void;
        static getTarget(arg0: $ResourceLocation_): $AnimationTarget;
        static getTargetName(arg0: $AnimationTarget_): $ResourceLocation;
        static getKeyframeCodec(arg0: $AnimationTarget_): $Codec<$Keyframe>;
        static getTargetList(): string;
        static getInterpolation(arg0: $ResourceLocation_): $AnimationChannel$Interpolation;
        static getInterpolationList(): string;
        static getInterpolationName(arg0: $AnimationChannel$Interpolation_): $ResourceLocation;
        static getTargetFromChannelTarget(arg0: $AnimationChannel$Target_): $AnimationTarget;
        static get targetList(): string;
        static get interpolationList(): string;
    }
    export class $AnimationHolder {
        get(): $AnimationDefinition;
        key(): $ResourceLocation;
        getOrNull(): $AnimationDefinition;
        isBound(): boolean;
        static EMPTY_ANIMATION: $AnimationDefinition;
        get orNull(): $AnimationDefinition;
        get bound(): boolean;
    }
    export class $AnimationLoader extends $SimpleJsonResourceReloadListener {
        getAnimation(arg0: $ResourceLocation_): $AnimationDefinition;
        getAnimationHolder(arg0: $ResourceLocation_): $AnimationHolder;
        static INSTANCE: $AnimationLoader;
    }
    export class $AnimationParser {
        static CHANNEL_CODEC: $MapCodec<$AnimationChannel>;
        static CODEC: $Codec<$AnimationDefinition>;
    }
}
