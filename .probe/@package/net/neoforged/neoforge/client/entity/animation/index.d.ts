import { $AnimationChannel$Target_, $AnimationChannel$Target } from "@package/net/minecraft/client/animation";
import { $Record } from "@package/java/lang";
import { $Vector3f } from "@package/org/joml";
export * as json from "@package/net/neoforged/neoforge/client/entity/animation/json";

declare module "@package/net/neoforged/neoforge/client/entity/animation" {
    export class $AnimationTarget extends $Record {
        channelTarget(): $AnimationChannel$Target;
        keyframeTarget(): $AnimationKeyframeTarget;
        inverseKeyframeTarget(): $AnimationKeyframeTarget;
        static ROTATION: $AnimationTarget;
        static POSITION: $AnimationTarget;
        static SCALE: $AnimationTarget;
        constructor(channelTarget: $AnimationChannel$Target_, keyframeTarget: $AnimationKeyframeTarget_, inverseKeyframeTarget: $AnimationKeyframeTarget_);
    }
    export class $AnimationKeyframeTarget {
    }
    export interface $AnimationKeyframeTarget {
        apply(arg0: number, arg1: number, arg2: number): $Vector3f;
    }
    /**
     * Values that may be interpreted as {@link $AnimationKeyframeTarget}.
     */
    export type $AnimationKeyframeTarget_ = ((arg0: number, arg1: number, arg2: number) => $Vector3f);
}
