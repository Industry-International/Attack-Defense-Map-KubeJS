import { $Number, $Comparable } from "@package/java/lang";

declare module "@package/org/apache/commons/lang3/math" {
    export class $Fraction extends $Number implements $Comparable<$Fraction> {
        abs(): $Fraction;
        pow(arg0: number): $Fraction;
        compareTo(arg0: $Fraction): number;
        add(arg0: $Fraction): $Fraction;
        reduce(): $Fraction;
        subtract(arg0: $Fraction): $Fraction;
        negate(): $Fraction;
        invert(): $Fraction;
        getDenominator(): number;
        getNumerator(): number;
        getProperWhole(): number;
        static getFraction(arg0: number, arg1: number, arg2: number): $Fraction;
        static getFraction(arg0: string): $Fraction;
        static getFraction(arg0: number, arg1: number): $Fraction;
        static getFraction(arg0: number): $Fraction;
        static getReducedFraction(arg0: number, arg1: number): $Fraction;
        toProperString(): string;
        getProperNumerator(): number;
        multiplyBy(arg0: $Fraction): $Fraction;
        divideBy(arg0: $Fraction): $Fraction;
        static FOUR_FIFTHS: $Fraction;
        static ZERO: $Fraction;
        static ONE_HALF: $Fraction;
        static TWO_QUARTERS: $Fraction;
        static THREE_FIFTHS: $Fraction;
        static ONE: $Fraction;
        static ONE_QUARTER: $Fraction;
        static TWO_THIRDS: $Fraction;
        static THREE_QUARTERS: $Fraction;
        static ONE_THIRD: $Fraction;
        static ONE_FIFTH: $Fraction;
        static TWO_FIFTHS: $Fraction;
        get denominator(): number;
        get numerator(): number;
        get properWhole(): number;
        get properNumerator(): number;
    }
}
