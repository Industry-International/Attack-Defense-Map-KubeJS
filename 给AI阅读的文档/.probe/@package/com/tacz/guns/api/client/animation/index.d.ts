import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $Iterable, $Iterable_, $Enum } from "@package/java/lang";
import { $Spliterator, $Iterator, $Queue, $List, $List_, $Map } from "@package/java/util";
export * as statemachine from "@package/com/tacz/guns/api/client/animation/statemachine";

declare module "@package/com/tacz/guns/api/client/animation" {
    export class $AnimationListenerSupplier {
    }
    export interface $AnimationListenerSupplier {
        supplyListeners(arg0: string, arg1: $ObjectAnimationChannel$ChannelType_): $AnimationListener;
    }
    /**
     * Values that may be interpreted as {@link $AnimationListenerSupplier}.
     */
    export type $AnimationListenerSupplier_ = ((arg0: string, arg1: $ObjectAnimationChannel$ChannelType) => $AnimationListener);
    export class $AnimationPlan {
        animationName: string;
        playType: $ObjectAnimation$PlayType;
        transitionTimeS: number;
        constructor(arg0: string, arg1: $ObjectAnimation$PlayType_, arg2: number);
    }
    export class $ObjectAnimationRunner {
        run(): void;
        reset(): void;
        update(arg0: boolean): void;
        stop(): void;
        transition(arg0: $ObjectAnimationRunner, arg1: number): void;
        isRunning(): boolean;
        isStopped(): boolean;
        hold(): void;
        isPausing(): boolean;
        pause(): void;
        updateSoundOnly(): void;
        getProgressNs(): number;
        getTransitionTo(): $ObjectAnimationRunner;
        setProgressNs(arg0: number): void;
        isHolding(): boolean;
        getAnimation(): $ObjectAnimation;
        stopTransition(): void;
        isTransitioning(): boolean;
        getTransitionTimeNs(): number;
        getTransitionProgressNs(): number;
        setTransitionProgressNs(arg0: number): void;
        constructor(arg0: $ObjectAnimation);
        get running(): boolean;
        get stopped(): boolean;
        get pausing(): boolean;
        get transitionTo(): $ObjectAnimationRunner;
        get holding(): boolean;
        get animation(): $ObjectAnimation;
        get transitioning(): boolean;
        get transitionTimeNs(): number;
    }
    export class $ObjectAnimation {
        update(arg0: boolean, arg1: number): void;
        getMaxEndTimeS(): number;
        getSoundChannel(): $ObjectAnimationSoundChannel;
        getChannels(): $Map<string, $List<$ObjectAnimationChannel>>;
        applyAnimationListeners(arg0: $AnimationListenerSupplier_): void;
        playType: $ObjectAnimation$PlayType;
        name: string;
        constructor(arg0: $ObjectAnimation);
        get maxEndTimeS(): number;
        get soundChannel(): $ObjectAnimationSoundChannel;
        get channels(): $Map<string, $List<$ObjectAnimationChannel>>;
    }
    export class $AnimationListener {
    }
    export interface $AnimationListener {
        update(arg0: number[], arg1: boolean): void;
        getType(): $ObjectAnimationChannel$ChannelType;
        initialValue(): number[];
        get type(): $ObjectAnimationChannel$ChannelType;
    }
    export class $DiscreteTrackArray implements $Iterable<number> {
        iterator(): $Iterator<number>;
        ensureCapacity(arg0: number): void;
        getByIndex(arg0: number): $List<number>;
        getTrackLineSize(): number;
        assignNewTrack(arg0: number): number;
        addTrackLine(): number;
        ensureTrackAmount(arg0: number, arg1: number): void;
        spliterator(): $Spliterator<number>;
        forEach(arg0: $Consumer_<number>): void;
        constructor();
        [Symbol.iterator](): Iterator<number>
        get trackLineSize(): number;
    }
    export class $AnimationController {
        update(): void;
        providePrototypeIfAbsent(arg0: string, arg1: $Supplier_<$ObjectAnimation>): void;
        updateSoundOnly(): void;
        runAnimation(arg0: number, arg1: string, arg2: $ObjectAnimation$PlayType_, arg3: number): void;
        setBlending(arg0: number, arg1: boolean): void;
        containPrototype(arg0: string): boolean;
        getAnimation(arg0: number): $ObjectAnimationRunner;
        setUpdatingTrackArray(arg0: $Iterable_<number> | null): void;
        getUpdatingTrackArray(): $Iterable<number>;
        removeAnimation(arg0: number): void;
        queueAnimation(arg0: number, arg1: $Queue<$AnimationPlan>): void;
        constructor(arg0: $List_<$ObjectAnimation>, arg1: $AnimationListenerSupplier_);
    }
    export class $ObjectAnimation$PlayType extends $Enum<$ObjectAnimation$PlayType> {
        static values(): $ObjectAnimation$PlayType[];
        static valueOf(arg0: string): $ObjectAnimation$PlayType;
        static LOOP: $ObjectAnimation$PlayType;
        static PLAY_ONCE_HOLD: $ObjectAnimation$PlayType;
        static PLAY_ONCE_STOP: $ObjectAnimation$PlayType;
    }
    /**
     * Values that may be interpreted as {@link $ObjectAnimation$PlayType}.
     */
    export type $ObjectAnimation$PlayType_ = "play_once_hold" | "play_once_stop" | "loop";
    export class $ObjectAnimationChannel$ChannelType extends $Enum<$ObjectAnimationChannel$ChannelType> {
        static values(): $ObjectAnimationChannel$ChannelType[];
        static valueOf(arg0: string): $ObjectAnimationChannel$ChannelType;
        static ROTATION: $ObjectAnimationChannel$ChannelType;
        static SCALE: $ObjectAnimationChannel$ChannelType;
        static TRANSLATION: $ObjectAnimationChannel$ChannelType;
    }
    /**
     * Values that may be interpreted as {@link $ObjectAnimationChannel$ChannelType}.
     */
    export type $ObjectAnimationChannel$ChannelType_ = "translation" | "rotation" | "scale";
}
