import { $HierarchicalModel } from "@package/net/minecraft/client/model";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Vector3f } from "@package/org/joml";
export * as definitions from "@package/net/minecraft/client/animation/definitions";

declare module "@package/net/minecraft/client/animation" {
    export class $AnimationChannel$Target {
    }
    export interface $AnimationChannel$Target {
        apply(arg0: $ModelPart, arg1: $Vector3f): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimationChannel$Target}.
     */
    export type $AnimationChannel$Target_ = ((arg0: $ModelPart, arg1: $Vector3f) => void);
    export class $AnimationChannel$Targets {
        static ROTATION: $AnimationChannel$Target;
        static POSITION: $AnimationChannel$Target;
        static SCALE: $AnimationChannel$Target;
        constructor();
    }
    export class $AnimationDefinition extends $Record {
        looping(): boolean;
        boneAnimations(): $Map<string, $List<$AnimationChannel>>;
        lengthInSeconds(): number;
        constructor(arg0: number, arg1: boolean, arg2: $Map_<string, $List_<$AnimationChannel_>>);
    }
    export class $AnimationChannel$Interpolation {
    }
    export interface $AnimationChannel$Interpolation {
        apply(arg0: $Vector3f, arg1: number, arg2: $Keyframe_[], arg3: number, arg4: number, arg5: number): $Vector3f;
    }
    /**
     * Values that may be interpreted as {@link $AnimationChannel$Interpolation}.
     */
    export type $AnimationChannel$Interpolation_ = ((arg0: $Vector3f, arg1: number, arg2: $Keyframe[], arg3: number, arg4: number, arg5: number) => $Vector3f);
    export class $KeyframeAnimations {
        static animate(arg0: $HierarchicalModel<never>, arg1: $AnimationDefinition_, arg2: number, arg3: number, arg4: $Vector3f): void;
        static degreeVec(arg0: number, arg1: number, arg2: number): $Vector3f;
        static posVec(arg0: number, arg1: number, arg2: number): $Vector3f;
        static scaleVec(arg0: number, arg1: number, arg2: number): $Vector3f;
        constructor();
    }
    export class $AnimationDefinition$Builder {
        build(): $AnimationDefinition;
        looping(): $AnimationDefinition$Builder;
        addAnimation(arg0: string, arg1: $AnimationChannel_): $AnimationDefinition$Builder;
        static withLength(arg0: number): $AnimationDefinition$Builder;
    }
    export class $Keyframe extends $Record {
        target(): $Vector3f;
        timestamp(): number;
        interpolation(): $AnimationChannel$Interpolation;
        constructor(arg0: number, arg1: $Vector3f, arg2: $AnimationChannel$Interpolation_);
    }
    export class $AnimationChannel$Interpolations {
        static CATMULLROM: $AnimationChannel$Interpolation;
        static LINEAR: $AnimationChannel$Interpolation;
        constructor();
    }
    export class $AnimationChannel extends $Record {
        target(): $AnimationChannel$Target;
        keyframes(): $Keyframe[];
        constructor(arg0: $AnimationChannel$Target_, ...arg1: $Keyframe_[]);
    }
}
