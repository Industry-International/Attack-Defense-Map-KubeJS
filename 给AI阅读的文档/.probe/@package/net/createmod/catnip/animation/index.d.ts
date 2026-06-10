import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/net/createmod/catnip/animation" {
    export class $LerpedFloat$Chaser {
        static exp(arg0: number): $LerpedFloat$Chaser;
        static IDLE: $LerpedFloat$Chaser;
        static EXP: $LerpedFloat$Chaser;
        static LINEAR: $LerpedFloat$Chaser;
    }
    export interface $LerpedFloat$Chaser {
        chase(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LerpedFloat$Chaser}.
     */
    export type $LerpedFloat$Chaser_ = ((arg0: number, arg1: number, arg2: number) => number);
    export class $LerpedFloat {
        getValue(): number;
        getValue(arg0: number): number;
        setValue(arg0: number): void;
        static linear(): $LerpedFloat;
        static angular(): $LerpedFloat;
        writeNBT(): $CompoundTag;
        readNBT(arg0: $CompoundTag_, arg1: boolean): void;
        chase(arg0: number, arg1: number, arg2: $LerpedFloat$Chaser_): $LerpedFloat;
        tickChaser(): void;
        startWithValue(arg0: number): $LerpedFloat;
        chaseTimed(arg0: number, arg1: number): $LerpedFloat;
        updateChaseTarget(arg0: number): void;
        setValueNoUpdate(arg0: number): void;
        getChaseTarget(): number;
        settled(): boolean;
        updateChaseSpeed(arg0: number): boolean;
        forceNextSync(): void;
        disableSmartAngleChasing(): $LerpedFloat;
        constructor(arg0: $LerpedFloat$Interpolator_);
        set valueNoUpdate(value: number);
        get chaseTarget(): number;
    }
    export class $LerpedFloat$Interpolator {
    }
    export interface $LerpedFloat$Interpolator {
        interpolate(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LerpedFloat$Interpolator}.
     */
    export type $LerpedFloat$Interpolator_ = ((arg0: number, arg1: number, arg2: number) => number);
}
