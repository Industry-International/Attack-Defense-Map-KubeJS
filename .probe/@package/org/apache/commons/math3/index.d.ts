import { $Class } from "@package/java/lang";
export * as analysis from "@package/org/apache/commons/math3/analysis";

declare module "@package/org/apache/commons/math3" {
    export class $RealFieldElement<T> {
    }
    export interface $RealFieldElement<T> extends $FieldElement<T> {
        abs(): T;
        sin(): T;
        cos(): T;
        tan(): T;
        atan2(arg0: T): T;
        sqrt(): T;
        log(): T;
        pow(arg0: number): T;
        pow(arg0: number): T;
        pow(arg0: T): T;
        exp(): T;
        floor(): T;
        ceil(): T;
        rint(): T;
        round(): number;
        copySign(arg0: T): T;
        copySign(arg0: number): T;
        signum(): T;
        add(arg0: number): T;
        scalb(arg0: number): T;
        asin(): T;
        acos(): T;
        atan(): T;
        cbrt(): T;
        multiply(arg0: number): T;
        sinh(): T;
        cosh(): T;
        tanh(): T;
        hypot(arg0: T): T;
        expm1(): T;
        log1p(): T;
        remainder(arg0: number): T;
        remainder(arg0: T): T;
        subtract(arg0: number): T;
        divide(arg0: number): T;
        atanh(): T;
        asinh(): T;
        acosh(): T;
        linearCombination(arg0: number, arg1: T, arg2: number, arg3: T): T;
        linearCombination(arg0: T, arg1: T, arg2: T, arg3: T): T;
        linearCombination(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, arg7: T): T;
        linearCombination(arg0: number, arg1: T, arg2: number, arg3: T, arg4: number, arg5: T): T;
        linearCombination(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T): T;
        linearCombination(arg0: number, arg1: T, arg2: number, arg3: T, arg4: number, arg5: T, arg6: number, arg7: T): T;
        linearCombination(arg0: T[], arg1: T[]): T;
        linearCombination(arg0: number[], arg1: T[]): T;
        getReal(): number;
        reciprocal(): T;
        rootN(arg0: number): T;
        get real(): number;
    }
    export class $Field<T> {
    }
    export interface $Field<T> {
        getZero(): T;
        getOne(): T;
        getRuntimeClass(): $Class<$FieldElement<T>>;
        get zero(): T;
        get one(): T;
        get runtimeClass(): $Class<$FieldElement<T>>;
    }
}
