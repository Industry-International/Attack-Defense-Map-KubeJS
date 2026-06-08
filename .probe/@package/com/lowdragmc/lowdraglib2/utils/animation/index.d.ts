import { $FloatObjectPair } from "@package/it/unimi/dsi/fastutil/floats";
import { $Codec } from "@package/com/mojang/serialization";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $IEase, $IEase_, $Interpolator } from "@package/com/lowdragmc/lowdraglib2/math/interpolate";
import { $Record } from "@package/java/lang";
import { $IValueInterpolator_, $IValueInterpolator } from "@package/com/lowdragmc/lowdraglib2/gui/ui/style";
import { $TreeSet } from "@package/java/util";

declare module "@package/com/lowdragmc/lowdraglib2/utils/animation" {
    export class $KFExecutor<T> extends $Record {
        apply(arg0: $AnimationRuntime, arg1: number): void;
        handler(): $IFrameValueHandler<T>;
        onFinished(arg0: $AnimationRuntime): void;
        keyFrames(): $KeyFrames<T>;
        constructor(keyFrames: $KeyFrames_<T>, handler: $IFrameValueHandler<T>);
    }
    export class $Animation extends $Record {
        duration(): number;
        delay(): number;
        ease(): $IEase;
        static CODEC: $Codec<$Animation>;
        constructor(duration: number, delay: number, ease: $IEase_);
    }
    export class $AnimationEngine {
        play(arg0: $KeyFrameAnimation_): $ISubscription;
        getAppTime(): number;
        updateFrame(): void;
        constructor();
        get appTime(): number;
    }
    export class $AnimationRuntime {
        update(arg0: number): void;
        isFinished(): boolean;
        getInterpolator(): $Interpolator;
        animation: $KeyFrameAnimation;
        constructor(arg0: number, arg1: $KeyFrameAnimation_);
        get finished(): boolean;
        get interpolator(): $Interpolator;
    }
    export class $IFrameValueHandler<T> {
    }
    export interface $IFrameValueHandler<T> {
        accept(arg0: $AnimationRuntime, arg1: T): void;
        onFinished(arg0: $AnimationRuntime): void;
    }
    export class $KeyFrameAnimation extends $Record {
        static of(arg0: $Animation_, ...arg1: $KFExecutor_<never>[]): $KeyFrameAnimation;
        animation(): $Animation;
        kfExecutors(): $KFExecutor<never>[];
        constructor(kfExecutors: $KFExecutor_<never>[], animation: $Animation_);
    }
    export class $KeyFrames<T> extends $Record {
        getValue(arg0: number): T;
        static of<T>(arg0: $IValueInterpolator_<T>, arg1: T, arg2: T): $KeyFrames<T>;
        static of<T>(arg0: $IValueInterpolator_<T>, ...arg1: $FloatObjectPair<T>[]): $KeyFrames<T>;
        interpolator(): $IValueInterpolator<T>;
        keyframes(): $TreeSet<$FloatObjectPair<T>>;
        constructor(keyframes: $TreeSet<$FloatObjectPair<T>>, interpolator: $IValueInterpolator_<T>);
    }
}
