import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";
import { $YogaValue } from "@package/org/appliedenergistics/yoga";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleLength;
        static undefined(): $StyleLength;
        isPercent(): boolean;
        isPoints(): boolean;
        isAuto(): boolean;
        static ofAuto(): $StyleLength;
        isUndefined(): boolean;
        static points(arg0: number): $StyleLength;
        asYogaValue(): $YogaValue;
        inexactEquals(arg0: $StyleLength): boolean;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        get defined(): boolean;
        get auto(): boolean;
    }
    export class $StyleSizeLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleSizeLength;
        static undefined(): $StyleSizeLength;
        isPercent(): boolean;
        isPoints(): boolean;
        isStretch(): boolean;
        isAuto(): boolean;
        static ofAuto(): $StyleSizeLength;
        isUndefined(): boolean;
        static points(arg0: number): $StyleSizeLength;
        isFitContent(): boolean;
        isMaxContent(): boolean;
        static ofMaxContent(): $StyleSizeLength;
        asYogaValue(): $YogaValue;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        static ofFitContent(): $StyleSizeLength;
        static ofStretch(): $StyleSizeLength;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get defined(): boolean;
        get stretch(): boolean;
        get auto(): boolean;
        get fitContent(): boolean;
        get maxContent(): boolean;
    }
}
