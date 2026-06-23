import { $Serializable } from "@package/java/io";
import { $DifferentiableUnivariateFunction, $UnivariateFunction } from "@package/org/apache/commons/math3/analysis";
import { $DerivativeStructure, $UnivariateDifferentiableFunction } from "@package/org/apache/commons/math3/analysis/differentiation";

declare module "@package/org/apache/commons/math3/analysis/polynomials" {
    export class $PolynomialFunction implements $UnivariateDifferentiableFunction, $DifferentiableUnivariateFunction, $Serializable {
        degree(): number;
        value(arg0: number): number;
        value(arg0: $DerivativeStructure): $DerivativeStructure;
        add(arg0: $PolynomialFunction): $PolynomialFunction;
        multiply(arg0: $PolynomialFunction): $PolynomialFunction;
        subtract(arg0: $PolynomialFunction): $PolynomialFunction;
        negate(): $PolynomialFunction;
        derivative(): $UnivariateFunction;
        polynomialDerivative(): $PolynomialFunction;
        getCoefficients(): number[];
        constructor(arg0: number[]);
        get coefficients(): number[];
    }
    export class $PolynomialSplineFunction implements $UnivariateDifferentiableFunction, $DifferentiableUnivariateFunction {
        value(arg0: $DerivativeStructure): $DerivativeStructure;
        value(arg0: number): number;
        derivative(): $UnivariateFunction;
        getN(): number;
        getKnots(): number[];
        getPolynomials(): $PolynomialFunction[];
        isValidPoint(arg0: number): boolean;
        polynomialSplineDerivative(): $PolynomialSplineFunction;
        constructor(arg0: number[], arg1: $PolynomialFunction[]);
        get n(): number;
        get knots(): number[];
        get polynomials(): $PolynomialFunction[];
    }
}
