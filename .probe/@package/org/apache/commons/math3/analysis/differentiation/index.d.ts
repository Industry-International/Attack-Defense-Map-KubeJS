import { $Serializable } from "@package/java/io";
import { $Field, $RealFieldElement } from "@package/org/apache/commons/math3";
import { $UnivariateFunction } from "@package/org/apache/commons/math3/analysis";

declare module "@package/org/apache/commons/math3/analysis/differentiation" {
    export class $DerivativeStructure implements $RealFieldElement<$DerivativeStructure>, $Serializable {
        abs(): $DerivativeStructure;
        sin(): $DerivativeStructure;
        cos(): $DerivativeStructure;
        atan2(arg0: $DerivativeStructure): $DerivativeStructure;
        static atan2(arg0: $DerivativeStructure, arg1: $DerivativeStructure): $DerivativeStructure;
        log(): $DerivativeStructure;
        log10(): $DerivativeStructure;
        static pow(arg0: number, arg1: $DerivativeStructure): $DerivativeStructure;
        pow(arg0: number): $DerivativeStructure;
        pow(arg0: $DerivativeStructure): $DerivativeStructure;
        exp(): $DerivativeStructure;
        ceil(): $DerivativeStructure;
        rint(): $DerivativeStructure;
        round(): number;
        copySign(arg0: $DerivativeStructure): $DerivativeStructure;
        signum(): $DerivativeStructure;
        getValue(): number;
        add(arg0: $DerivativeStructure): $DerivativeStructure;
        add(arg0: number): $DerivativeStructure;
        getField(): $Field<$DerivativeStructure>;
        getExponent(): number;
        asin(): $DerivativeStructure;
        acos(): $DerivativeStructure;
        atan(): $DerivativeStructure;
        multiply(arg0: number): $DerivativeStructure;
        multiply(arg0: $DerivativeStructure): $DerivativeStructure;
        sinh(): $DerivativeStructure;
        cosh(): $DerivativeStructure;
        static hypot(arg0: $DerivativeStructure, arg1: $DerivativeStructure): $DerivativeStructure;
        hypot(arg0: $DerivativeStructure): $DerivativeStructure;
        expm1(): $DerivativeStructure;
        toRadians(): $DerivativeStructure;
        toDegrees(): $DerivativeStructure;
        compose(...arg0: number[]): $DerivativeStructure;
        remainder(arg0: $DerivativeStructure): $DerivativeStructure;
        subtract(arg0: $DerivativeStructure): $DerivativeStructure;
        negate(): $DerivativeStructure;
        divide(arg0: $DerivativeStructure): $DerivativeStructure;
        createConstant(arg0: number): $DerivativeStructure;
        getOrder(): number;
        taylor(...arg0: number[]): number;
        atanh(): $DerivativeStructure;
        getFreeParameters(): number;
        getAllDerivatives(): number[];
        linearCombination(arg0: $DerivativeStructure, arg1: $DerivativeStructure, arg2: $DerivativeStructure, arg3: $DerivativeStructure, arg4: $DerivativeStructure, arg5: $DerivativeStructure): $DerivativeStructure;
        linearCombination(arg0: number, arg1: $DerivativeStructure, arg2: number, arg3: $DerivativeStructure, arg4: number, arg5: $DerivativeStructure): $DerivativeStructure;
        linearCombination(arg0: $DerivativeStructure, arg1: $DerivativeStructure, arg2: $DerivativeStructure, arg3: $DerivativeStructure, arg4: $DerivativeStructure, arg5: $DerivativeStructure, arg6: $DerivativeStructure, arg7: $DerivativeStructure): $DerivativeStructure;
        linearCombination(arg0: number, arg1: $DerivativeStructure, arg2: number, arg3: $DerivativeStructure, arg4: number, arg5: $DerivativeStructure, arg6: number, arg7: $DerivativeStructure): $DerivativeStructure;
        linearCombination(arg0: $DerivativeStructure[], arg1: $DerivativeStructure[]): $DerivativeStructure;
        linearCombination(arg0: number[], arg1: $DerivativeStructure[]): $DerivativeStructure;
        linearCombination(arg0: $DerivativeStructure, arg1: $DerivativeStructure, arg2: $DerivativeStructure, arg3: $DerivativeStructure): $DerivativeStructure;
        linearCombination(arg0: number, arg1: $DerivativeStructure, arg2: number, arg3: $DerivativeStructure): $DerivativeStructure;
        getReal(): number;
        getPartialDerivative(...arg0: number[]): number;
        tan(): $DerivativeStructure;
        sqrt(): $DerivativeStructure;
        floor(): $DerivativeStructure;
        scalb(arg0: number): $DerivativeStructure;
        cbrt(): $DerivativeStructure;
        tanh(): $DerivativeStructure;
        log1p(): $DerivativeStructure;
        reciprocal(): $DerivativeStructure;
        rootN(arg0: number): $DerivativeStructure;
        asinh(): $DerivativeStructure;
        acosh(): $DerivativeStructure;
        constructor(arg0: number, arg1: $DerivativeStructure, arg2: number, arg3: $DerivativeStructure);
        constructor(arg0: number, arg1: $DerivativeStructure, arg2: number, arg3: $DerivativeStructure, arg4: number, arg5: $DerivativeStructure);
        constructor(arg0: number, arg1: $DerivativeStructure, arg2: number, arg3: $DerivativeStructure, arg4: number, arg5: $DerivativeStructure, arg6: number, arg7: $DerivativeStructure);
        constructor(arg0: number, arg1: number, ...arg2: number[]);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get value(): number;
        get field(): $Field<$DerivativeStructure>;
        get exponent(): number;
        get order(): number;
        get freeParameters(): number;
        get allDerivatives(): number[];
        get real(): number;
    }
    export class $UnivariateDifferentiableFunction {
    }
    export interface $UnivariateDifferentiableFunction extends $UnivariateFunction {
        value(arg0: $DerivativeStructure): $DerivativeStructure;
    }
}
