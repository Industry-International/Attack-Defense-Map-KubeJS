export * as differentiation from "@package/org/apache/commons/math3/analysis/differentiation";
export * as polynomials from "@package/org/apache/commons/math3/analysis/polynomials";

declare module "@package/org/apache/commons/math3/analysis" {
    /**
     * @deprecated
     */
    export class $DifferentiableUnivariateFunction {
    }
    export interface $DifferentiableUnivariateFunction extends $UnivariateFunction {
        derivative(): $UnivariateFunction;
    }
    export class $UnivariateFunction {
    }
    export interface $UnivariateFunction {
        value(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $UnivariateFunction}.
     */
    export type $UnivariateFunction_ = ((arg0: number) => number);
}
