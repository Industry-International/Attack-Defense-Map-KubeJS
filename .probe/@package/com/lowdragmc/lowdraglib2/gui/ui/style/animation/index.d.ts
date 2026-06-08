import { $FloatObjectPair } from "@package/it/unimi/dsi/fastutil/floats";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIElement, $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $IFrameValueHandler, $Animation, $Animation_, $AnimationRuntime } from "@package/com/lowdragmc/lowdraglib2/utils/animation";
import { $IEase_ } from "@package/com/lowdragmc/lowdraglib2/math/interpolate";
import { $Map_, $Map } from "@package/java/util";
import { $Property, $StyleOrigin_, $StyleBag } from "@package/com/lowdragmc/lowdraglib2/gui/ui/style";
import { $Object, $Record } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/style/animation" {
    export class $TransitionAnimation<T> implements $IFrameValueHandler<T> {
        accept(arg0: $AnimationRuntime, arg1: T): void;
        stop(): void;
        play(arg0: T, arg1: T): void;
        getCurrentValue(): T;
        onFinished(arg0: $AnimationRuntime): void;
        getInitialValue(): T;
        getTargetValue(): T;
        getSubscription(): $ISubscription;
        styleBag: $StyleBag;
        property: $Property<T>;
        animation: $Animation;
        constructor(arg0: $StyleBag, arg1: $Property<T>, arg2: $Animation_);
        get currentValue(): T;
        get initialValue(): T;
        get targetValue(): T;
        get subscription(): $ISubscription;
    }
    export class $Transition extends $Record {
        animations(): $Map<$Property<never>, $Animation>;
        static CODEC: $Codec<$Transition>;
        static EMPTY: $Transition;
        constructor(animations: $Map_<$Property<never>, $Animation_>);
    }
    export class $StyleAnimation {
        static of(arg0: $ModularUI): $StyleAnimation;
        start(): $ISubscription;
        duration(arg0: number): $StyleAnimation;
        delay(arg0: number): $StyleAnimation;
        origin(arg0: $StyleOrigin_): $StyleAnimation;
        style<T>(arg0: $Property<T>, ...arg1: $FloatObjectPair<any>[]): $StyleAnimation;
        style<T>(arg0: $Property<T>, arg1: T): $StyleAnimation;
        select(arg0: string): $StyleAnimation;
        select(arg0: $UIElement): $StyleAnimation;
        sourceOrder(arg0: number): $StyleAnimation;
        specificity(arg0: number): $StyleAnimation;
        onFinished(arg0: $Consumer_<$UIElement>): $StyleAnimation;
        lss(arg0: string, arg1: $Object): $StyleAnimation;
        ease(arg0: $IEase_): $StyleAnimation;
        animationOrigin(arg0: $StyleOrigin_): $StyleAnimation;
        onInterpolate(arg0: $BiConsumer_<$AnimationRuntime, $UIElement>): $StyleAnimation;
    }
}
