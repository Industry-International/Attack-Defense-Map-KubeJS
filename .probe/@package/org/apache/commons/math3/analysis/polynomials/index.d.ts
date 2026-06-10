import { $Serializable } from "@package/java/io";
import { $DifferentiableUnivariateFunction, $UnivariateFunction } from "@package/org/apache/commons/math3/analysis";
import { $DerivativeStructure, $UnivariateDifferentiableFunction } from "@package/org/apache/commons/math3/analysis/differentiation";

declare module "@package/org/apache/commons/math3/analysis/polynomials" {
    export class $PolynomialFunction implements $UnivariateDifferentiableFunction, $DifferentiableUnivariateFunction, $Serializable {
        value(arg0: $DerivativeStructure): $DerivativeStructure;
        value(arg0: number): number;
        add(arg0: $PolynomialFunction): $PolynomialFunction;
        multiply(arg0: $PolynomialFunction): $PolynomialFunction;
        subtract(arg0: $PolynomialFunction): $PolynomialFunction;
        negate(): $PolynomialFunction;
        degree(): number;
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
        getPolynomials(): $PolynomialFunction[];
        isValidPoint(arg0: number): boolean;
        getN(): number;
        getKnots(): number[];
        polynomialSplineDerivative(): $PolynomialSplineFunction;
        constructor(arg0: number[], arg1: $PolynomialFunction[]);
        get polynomials(): $PolynomialFunction[];
        get n(): number;
        get knots(): number[];
    }
}
