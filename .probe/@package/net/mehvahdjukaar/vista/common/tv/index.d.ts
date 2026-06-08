
declare module "@package/net/mehvahdjukaar/vista/common/tv" {
    export class $IntAnimationState {
        getValue(arg0: number): number;
        increment(): void;
        decrement(): void;
        isDecreasing(): boolean;
        isIncreasing(): boolean;
        static NO_ANIM: $IntAnimationState;
        static MAX_ANIM: $IntAnimationState;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number);
        get decreasing(): boolean;
        get increasing(): boolean;
    }
}
