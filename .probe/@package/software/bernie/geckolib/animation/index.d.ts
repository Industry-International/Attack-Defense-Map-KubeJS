import { $JsonElement_ } from "@package/com/google/gson";
import { $GeoModel } from "@package/software/bernie/geckolib/model";
import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $BoneAnimation_, $AnimationPoint_, $BoneAnimationQueue, $BoneAnimation } from "@package/software/bernie/geckolib/animation/keyframe";
import { $CustomInstructionKeyframeData, $SoundKeyframeData, $ParticleKeyframeData } from "@package/software/bernie/geckolib/animation/keyframe/event/data";
import { $Queue, $List, $Map_, $List_, $Collection, $Map } from "@package/java/util";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $Function_ } from "@package/java/util/function";
import { $Double2DoubleFunction, $Double2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $GeoBone, $BakedGeoModel_ } from "@package/software/bernie/geckolib/cache/object";
import { $SoundKeyframeEvent, $CustomInstructionKeyframeEvent, $ParticleKeyframeEvent } from "@package/software/bernie/geckolib/animation/keyframe/event";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as keyframe from "@package/software/bernie/geckolib/animation/keyframe";
export * as state from "@package/software/bernie/geckolib/animation/state";

declare module "@package/software/bernie/geckolib/animation" {
    export class $AnimationController$CustomKeyframeHandler<A extends $GeoAnimatable> {
    }
    export interface $AnimationController$CustomKeyframeHandler<A extends $GeoAnimatable> {
        handle(arg0: $CustomInstructionKeyframeEvent<A>): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$CustomKeyframeHandler}.
     */
    export type $AnimationController$CustomKeyframeHandler_<A> = ((arg0: $CustomInstructionKeyframeEvent<A>) => void);
    export class $AnimationProcessor<T extends $GeoAnimatable> {
        getRegisteredBones(): $Collection<$GeoBone>;
        registerGeoBone(arg0: $GeoBone): void;
        setActiveModel(arg0: $BakedGeoModel_): void;
        preAnimationSetup(arg0: $AnimationState<T>, arg1: number): void;
        buildAnimationQueue(arg0: T, arg1: $RawAnimation): $Queue<$AnimationProcessor$QueuedAnimation>;
        getBone(arg0: string): $GeoBone;
        tickAnimation(arg0: T, arg1: $GeoModel<T>, arg2: $AnimatableManager<T>, arg3: number, arg4: $AnimationState<T>, arg5: boolean): void;
        reloadAnimations: boolean;
        constructor(arg0: $GeoModel<T>);
        get registeredBones(): $Collection<$GeoBone>;
        set activeModel(value: $BakedGeoModel_);
    }
    export class $RawAnimation {
        static copyOf(arg0: $RawAnimation): $RawAnimation;
        static begin(): $RawAnimation;
        thenPlayAndHold(arg0: string): $RawAnimation;
        then(arg0: string, arg1: $Animation$LoopType_): $RawAnimation;
        thenPlay(arg0: string): $RawAnimation;
        thenLoop(arg0: string): $RawAnimation;
        getAnimationStages(): $List<$RawAnimation$Stage>;
        thenPlayXTimes(arg0: string, arg1: number): $RawAnimation;
        getStageCount(): number;
        thenWait(arg0: number): $RawAnimation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RawAnimation>;
        get animationStages(): $List<$RawAnimation$Stage>;
        get stageCount(): number;
    }
    export class $AnimationController$AnimationStateHandler<A extends $GeoAnimatable> {
    }
    export interface $AnimationController$AnimationStateHandler<A extends $GeoAnimatable> {
        handle(arg0: $AnimationState<A>): $PlayState;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$AnimationStateHandler}.
     */
    export type $AnimationController$AnimationStateHandler_<A> = ((arg0: $AnimationState<A>) => $PlayState_);
    export class $Animation extends $Record {
        name(): string;
        length(): number;
        loopType(): $Animation$LoopType;
        boneAnimations(): $BoneAnimation[];
        keyFrames(): $Animation$Keyframes;
        constructor(name: string, length: number, loopType: $Animation$LoopType_, boneAnimations: $BoneAnimation_[], keyFrames: $Animation$Keyframes_);
    }
    export class $AnimationProcessor$QueuedAnimation extends $Record {
        loopType(): $Animation$LoopType;
        animation(): $Animation;
        constructor(animation: $Animation_, loopType: $Animation$LoopType_);
    }
    export class $AnimatableManager$ControllerRegistrar extends $Record {
        remove(arg0: string): $AnimatableManager$ControllerRegistrar;
        add(...arg0: $AnimationController<never>[]): $AnimatableManager$ControllerRegistrar;
        add(arg0: $AnimationController<never>): $AnimatableManager$ControllerRegistrar;
        controllers(): $List<$AnimationController<$GeoAnimatable>>;
        constructor(controllers: $List_<$AnimationController<$GeoAnimatable>>);
    }
    export class $AnimationController<T extends $GeoAnimatable> {
        getName(): string;
        stop(): void;
        process(arg0: $GeoModel<T>, arg1: $AnimationState<T>, arg2: $Map_<string, $GeoBone>, arg3: $Map_<string, $BoneSnapshot>, arg4: number, arg5: boolean): void;
        tryTriggerAnimation(arg0: string): boolean;
        setAnimation(arg0: $RawAnimation): void;
        getCurrentAnimation(): $AnimationProcessor$QueuedAnimation;
        setCustomInstructionKeyframeHandler(arg0: $AnimationController$CustomKeyframeHandler_<T>): $AnimationController<T>;
        getStateHandler(): $AnimationController$AnimationStateHandler<T>;
        transitionLength(arg0: number): $AnimationController<T>;
        getAnimationState(): $AnimationController$State;
        triggerableAnim(arg0: string, arg1: $RawAnimation): $AnimationController<T>;
        getAnimationSpeed(): number;
        forceAnimationReset(): void;
        getBoneAnimationQueues(): $Map<string, $BoneAnimationQueue>;
        getTriggeredAnimation(): $RawAnimation;
        setSoundKeyframeHandler(arg0: $AnimationController$SoundKeyframeHandler_<T>): $AnimationController<T>;
        getCurrentRawAnimation(): $RawAnimation;
        setOverrideEasingType(arg0: $EasingType_): $AnimationController<T>;
        hasAnimationFinished(): boolean;
        setAnimationSpeedHandler(arg0: $Function_<T, number>): $AnimationController<T>;
        receiveTriggeredAnimations(): $AnimationController<T>;
        setParticleKeyframeHandler(arg0: $AnimationController$ParticleKeyframeHandler_<T>): $AnimationController<T>;
        setAnimationSpeed(arg0: number): $AnimationController<T>;
        isPlayingTriggeredAnimation(): boolean;
        setOverrideEasingTypeFunction(arg0: $Function_<T, $EasingType>): $AnimationController<T>;
        constructor(arg0: T, arg1: $AnimationController$AnimationStateHandler_<T>);
        constructor(arg0: T, arg1: string, arg2: number, arg3: $AnimationController$AnimationStateHandler_<T>);
        constructor(arg0: T, arg1: string, arg2: $AnimationController$AnimationStateHandler_<T>);
        constructor(arg0: T, arg1: number, arg2: $AnimationController$AnimationStateHandler_<T>);
        get name(): string;
        set animation(value: $RawAnimation);
        get currentAnimation(): $AnimationProcessor$QueuedAnimation;
        set customInstructionKeyframeHandler(value: $AnimationController$CustomKeyframeHandler_<T>);
        get stateHandler(): $AnimationController$AnimationStateHandler<T>;
        get animationState(): $AnimationController$State;
        get boneAnimationQueues(): $Map<string, $BoneAnimationQueue>;
        get triggeredAnimation(): $RawAnimation;
        set soundKeyframeHandler(value: $AnimationController$SoundKeyframeHandler_<T>);
        get currentRawAnimation(): $RawAnimation;
        set overrideEasingType(value: $EasingType_);
        set animationSpeedHandler(value: $Function_<T, number>);
        set particleKeyframeHandler(value: $AnimationController$ParticleKeyframeHandler_<T>);
        get playingTriggeredAnimation(): boolean;
        set overrideEasingTypeFunction(value: $Function_<T, $EasingType>);
    }
    export class $EasingType {
        static pow(arg0: number): $Double2DoubleFunction;
        static exp(arg0: number): number;
        static register(arg0: string, arg1: $EasingType_): $EasingType;
        static step(arg0: number): $Double2DoubleFunction;
        static back(arg0: number): $Double2DoubleFunction;
        static fromString(arg0: string): $EasingType;
        static fromJson(arg0: $JsonElement_): $EasingType;
        static bounce(arg0: number): $Double2DoubleFunction;
        static linear(arg0: number): number;
        static linear(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static stepNonNegative(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static stepPositive(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static lerpWithOverride(arg0: $AnimationPoint_, arg1: $EasingType_): number;
        static circle(arg0: number): number;
        static cubic(arg0: number): number;
        static elastic(arg0: number): $Double2DoubleFunction;
        static easeInOut(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static quadratic(arg0: number): number;
        static catmullRom(arg0: number): number;
        static easeOut(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static sine(arg0: number): number;
        static easeIn(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static EASE_OUT_QUAD: $EasingType;
        static EASE_OUT_SINE: $EasingType;
        static CATMULLROM: $EasingType;
        static EASE_OUT_ELASTIC: $EasingType;
        static EASE_OUT_QUART: $EasingType;
        static EASE_IN_OUT_QUAD: $EasingType;
        static EASE_IN_ELASTIC: $EasingType;
        static EASE_IN_CUBIC: $EasingType;
        static EASE_IN_QUINT: $EasingType;
        static EASE_IN_OUT_SINE: $EasingType;
        static EASE_IN_OUT_CIRC: $EasingType;
        static EASE_IN_EXPO: $EasingType;
        static EASE_OUT_CIRC: $EasingType;
        static EASE_IN_QUART: $EasingType;
        static EASE_OUT_CUBIC: $EasingType;
        static EASE_IN_OUT_BOUNCE: $EasingType;
        static EASE_IN_OUT_CUBIC: $EasingType;
        static EASE_IN_OUT_EXPO: $EasingType;
        static EASING_TYPES: $Map<string, $EasingType>;
        static EASE_OUT_BACK: $EasingType;
        static EASE_IN_BOUNCE: $EasingType;
        static EASE_IN_OUT_BACK: $EasingType;
        static STEP: $EasingType;
        static EASE_IN_OUT_QUINT: $EasingType;
        static EASE_IN_OUT_ELASTIC: $EasingType;
        static EASE_IN_BACK: $EasingType;
        static EASE_OUT_BOUNCE: $EasingType;
        static EASE_IN_SINE: $EasingType;
        static EASE_IN_QUAD: $EasingType;
        static EASE_OUT_EXPO: $EasingType;
        static EASE_OUT_QUINT: $EasingType;
        static LINEAR: $EasingType;
        static EASE_IN_OUT_QUART: $EasingType;
        static EASE_IN_CIRC: $EasingType;
    }
    export interface $EasingType {
        apply(arg0: $AnimationPoint_, arg1: number, arg2: number): number;
        apply(arg0: $AnimationPoint_): number;
        buildTransformer(arg0: number): $Double2DoubleFunction;
    }
    /**
     * Values that may be interpreted as {@link $EasingType}.
     */
    export type $EasingType_ = ((arg0: number) => $Double2DoubleFunction_);
    export class $AnimationController$State extends $Enum<$AnimationController$State> {
        static values(): $AnimationController$State[];
        static valueOf(arg0: string): $AnimationController$State;
        static PAUSED: $AnimationController$State;
        static RUNNING: $AnimationController$State;
        static STOPPED: $AnimationController$State;
        static TRANSITIONING: $AnimationController$State;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$State}.
     */
    export type $AnimationController$State_ = "running" | "transitioning" | "paused" | "stopped";
    export class $AnimationState<T extends $GeoAnimatable> {
        getData<D>(arg0: $DataTicket<D>): D;
        setAndContinue(arg0: $RawAnimation): $PlayState;
        setData<D>(arg0: $DataTicket<D>, arg1: D): void;
        getController(): $AnimationController<T>;
        setAnimation(arg0: $RawAnimation): void;
        resetCurrentAnimation(): void;
        isCurrentAnimationStage(arg0: string): boolean;
        isMoving(): boolean;
        withController(arg0: $AnimationController<T>): $AnimationState<T>;
        isCurrentAnimation(arg0: $RawAnimation): boolean;
        setControllerSpeed(arg0: number): void;
        getAnimationTick(): number;
        getAnimatable(): T;
        getLimbSwing(): number;
        getLimbSwingAmount(): number;
        getPartialTick(): number;
        getExtraData(): $Map<$DataTicket<never>, never>;
        animationTick: number;
        constructor(arg0: T, arg1: number, arg2: number, arg3: number, arg4: boolean);
        set andContinue(value: $RawAnimation);
        get controller(): $AnimationController<T>;
        set animation(value: $RawAnimation);
        get moving(): boolean;
        set controllerSpeed(value: number);
        get animatable(): T;
        get limbSwing(): number;
        get limbSwingAmount(): number;
        get partialTick(): number;
        get extraData(): $Map<$DataTicket<never>, never>;
    }
    export class $AnimationController$ParticleKeyframeHandler<A extends $GeoAnimatable> {
    }
    export interface $AnimationController$ParticleKeyframeHandler<A extends $GeoAnimatable> {
        handle(arg0: $ParticleKeyframeEvent<A>): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$ParticleKeyframeHandler}.
     */
    export type $AnimationController$ParticleKeyframeHandler_<A> = ((arg0: $ParticleKeyframeEvent<A>) => void);
    export class $Animation$LoopType {
        static register(arg0: string, arg1: $Animation$LoopType_): $Animation$LoopType;
        static fromString(arg0: string): $Animation$LoopType;
        static fromJson(arg0: $JsonElement_): $Animation$LoopType;
        static LOOP: $Animation$LoopType;
        static HOLD_ON_LAST_FRAME: $Animation$LoopType;
        static PLAY_ONCE: $Animation$LoopType;
        static LOOP_TYPES: $Map<string, $Animation$LoopType>;
        static DEFAULT: $Animation$LoopType;
    }
    export interface $Animation$LoopType {
        getId(): string;
        shouldPlayAgain(arg0: $GeoAnimatable, arg1: $AnimationController<$GeoAnimatable>, arg2: $Animation_): boolean;
        get id(): string;
    }
    /**
     * Values that may be interpreted as {@link $Animation$LoopType}.
     */
    export type $Animation$LoopType_ = ((arg0: $GeoAnimatable, arg1: $AnimationController<$GeoAnimatable>, arg2: $Animation) => boolean);
    export class $AnimationController$SoundKeyframeHandler<A extends $GeoAnimatable> {
    }
    export interface $AnimationController$SoundKeyframeHandler<A extends $GeoAnimatable> {
        handle(arg0: $SoundKeyframeEvent<A>): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$SoundKeyframeHandler}.
     */
    export type $AnimationController$SoundKeyframeHandler_<A> = ((arg0: $SoundKeyframeEvent<A>) => void);
    export class $RawAnimation$Stage extends $Record {
        loopType(): $Animation$LoopType;
        animationName(): string;
        additionalTicks(): number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RawAnimation$Stage>;
        constructor(arg0: string, arg1: $Animation$LoopType_);
        constructor(animationName: string, loopType: $Animation$LoopType_, additionalTicks: number);
    }
    export class $PlayState extends $Enum<$PlayState> {
        static values(): $PlayState[];
        static valueOf(arg0: string): $PlayState;
        static CONTINUE: $PlayState;
        static STOP: $PlayState;
    }
    /**
     * Values that may be interpreted as {@link $PlayState}.
     */
    export type $PlayState_ = "continue" | "stop";
    export class $AnimatableManager<T extends $GeoAnimatable> {
        getData<D>(arg0: $DataTicket<D>): D;
        getFirstTickTime(): number;
        setData<D>(arg0: $DataTicket<D>, arg1: D): void;
        tryTriggerAnimation(arg0: string, arg1: string): void;
        tryTriggerAnimation(arg0: string): void;
        stopTriggeredAnimation(arg0: string): void;
        stopTriggeredAnimation(arg0: string, arg1: string): void;
        getLastUpdateTime(): number;
        removeController(arg0: string): void;
        clearSnapshotCache(): void;
        getAnimationControllers(): $Map<string, $AnimationController<T>>;
        getBoneSnapshotCollection(): $Map<string, $BoneSnapshot>;
        isFirstTick(): boolean;
        startedAt(arg0: number): void;
        updatedAt(arg0: number): void;
        addController(arg0: $AnimationController<any>): void;
        constructor(arg0: $GeoAnimatable);
        get firstTickTime(): number;
        get lastUpdateTime(): number;
        get animationControllers(): $Map<string, $AnimationController<T>>;
        get boneSnapshotCollection(): $Map<string, $BoneSnapshot>;
        get firstTick(): boolean;
    }
    export class $Animation$Keyframes extends $Record {
        particles(): $ParticleKeyframeData[];
        sounds(): $SoundKeyframeData[];
        customInstructions(): $CustomInstructionKeyframeData[];
        constructor(sounds: $SoundKeyframeData[], particles: $ParticleKeyframeData[], customInstructions: $CustomInstructionKeyframeData[]);
    }
}
