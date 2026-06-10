import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Iterable } from "@package/java/lang";
import { $DiscreteTrackArray, $AnimationController } from "@package/com/tacz/guns/api/client/animation";

declare module "@package/com/tacz/guns/api/client/animation/statemachine" {
    export class $LuaAnimationStateMachine<T extends $AnimationStateContext> extends $AnimationStateMachine<T> {
    }
    export class $AnimationStateMachine<T extends $AnimationStateContext> {
        exit(): void;
        update(): void;
        trigger(arg0: string): void;
        initialize(): void;
        getContext(): T;
        isInitialized(): boolean;
        setContext(arg0: T): void;
        setStatesSupplier(arg0: $Supplier_<$Iterable<$AnimationState<T>>>): void;
        setExitingTime(arg0: number): void;
        visualUpdate(): void;
        getExitingTime(): number;
        getAnimationController(): $AnimationController;
        processContextIfExist(arg0: $Consumer_<T>): void;
        constructor(arg0: $AnimationController);
        get initialized(): boolean;
        set statesSupplier(value: $Supplier_<$Iterable<$AnimationState<T>>>);
        get animationController(): $AnimationController;
    }
    export class $AnimationStateContext {
        trigger(arg0: string): void;
        isStopped(arg0: number): boolean;
        isHolding(arg0: number): boolean;
        getTrackArray(): $DiscreteTrackArray;
        addTrackLine(): number;
        findIdleTrack(arg0: number, arg1: boolean): number;
        ensureTracksAmount(arg0: number, arg1: number): void;
        runAnimation(arg0: string, arg1: number, arg2: boolean, arg3: number, arg4: number): void;
        getStateMachine(): $AnimationStateMachine<never>;
        getTrackLineSize(): number;
        assignNewTrack(arg0: number): number;
        resumeAnimation(arg0: number): void;
        pauseAnimation(arg0: number): void;
        stopAnimation(arg0: number): void;
        holdAnimation(arg0: number): void;
        isPause(arg0: number): boolean;
        getTrack(arg0: number, arg1: number): number;
        shouldHideCrossHair(): boolean;
        setAnimationProgress(arg0: number, arg1: number, arg2: boolean): void;
        adjustAnimationProgress(arg0: number, arg1: number, arg2: boolean): void;
        ensureTrackLineSize(arg0: number): void;
        hasAnimationPrototype(arg0: string): boolean;
        getAsSingletonTrack(arg0: number): number;
        setShouldHideCrossHair(arg0: boolean): void;
        constructor();
        get trackArray(): $DiscreteTrackArray;
        get stateMachine(): $AnimationStateMachine<never>;
        get trackLineSize(): number;
    }
    export class $AnimationState<T extends $AnimationStateContext> {
    }
    export interface $AnimationState<T extends $AnimationStateContext> {
        update(arg0: T): void;
        transition(arg0: T, arg1: string): $AnimationState<T>;
        entryAction(arg0: T): void;
        exitAction(arg0: T): void;
    }
}
