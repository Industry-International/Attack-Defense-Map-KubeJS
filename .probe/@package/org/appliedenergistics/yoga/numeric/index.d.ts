
declare module "@package/org/appliedenergistics/yoga/numeric" {
    export class $FloatOptional {
        compareTo(arg0: $FloatOptional): number;
        getValue(): number;
        add(arg0: $FloatOptional): $FloatOptional;
        static of(): $FloatOptional;
        static of(arg0: number): $FloatOptional;
        unwrap(): number;
        isDefined(): boolean;
        isLessThan(arg0: $FloatOptional): boolean;
        isUndefined(): boolean;
        maxOrDefined(arg0: $FloatOptional): $FloatOptional;
        inexactEquals(arg0: $FloatOptional): boolean;
        isLessThanOrEqual(arg0: $FloatOptional): boolean;
        isGreaterThan(arg0: $FloatOptional): boolean;
        unwrapOrDefault(arg0: number): number;
        isGreaterThanOrEqual(arg0: $FloatOptional): boolean;
        get value(): number;
        get defined(): boolean;
        get undefined(): boolean;
    }
}
