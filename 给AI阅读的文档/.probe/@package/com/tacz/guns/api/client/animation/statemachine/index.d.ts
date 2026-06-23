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
        setExitingTime(arg0: number): void;
        getExitingTime(): number;
        setStatesSupplier(arg0: $Supplier_<$Iterable<$AnimationState<T>>>): void;
        visualUpdate(): void;
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
        getTrack(arg0: number, arg1: number): number;
        isPause(arg0: number): boolean;
        getStateMachine(): $AnimationStateMachine<never>;
        getTrackArray(): $DiscreteTrackArray;
        getTrackLineSize(): number;
        assignNewTrack(arg0: number): number;
        runAnimation(arg0: string, arg1: number, arg2: boolean, arg3: number, arg4: number): void;
        pauseAnimation(arg0: number): void;
        findIdleTrack(arg0: number, arg1: boolean): number;
        stopAnimation(arg0: number): void;
        resumeAnimation(arg0: number): void;
        addTrackLine(): number;
        ensureTracksAmount(arg0: number, arg1: number): void;
        holdAnimation(arg0: number): void;
        isHolding(arg0: number): boolean;
        adjustAnimationProgress(arg0: number, arg1: number, arg2: boolean): void;
        shouldHideCrossHair(): boolean;
        ensureTrackLineSize(arg0: number): void;
        getAsSingletonTrack(arg0: number): number;
        hasAnimationPrototype(arg0: string): boolean;
        setAnimationProgress(arg0: number, arg1: number, arg2: boolean): void;
        setShouldHideCrossHair(arg0: boolean): void;
        constructor();
        get stateMachine(): $AnimationStateMachine<never>;
        get trackArray(): $DiscreteTrackArray;
        get trackLineSize(): number;
    }
    export class $AnimationState<T extends $AnimationStateContext> {
    }
    export interface $AnimationState<T extends $AnimationStateContext> {
        update(arg0: T): void;
        transition(arg0: T, arg1: string): $AnimationState<T>;
        exitAction(arg0: T): void;
        entryAction(arg0: T): void;
    }
}
