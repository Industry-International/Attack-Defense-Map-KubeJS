import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";
import { $YogaValue } from "@package/org/appliedenergistics/yoga";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleLength;
        inexactEquals(arg0: $StyleLength): boolean;
        isUndefined(): boolean;
        static undefined(): $StyleLength;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        asYogaValue(): $YogaValue;
        isAuto(): boolean;
        isPoints(): boolean;
        isPercent(): boolean;
        static ofAuto(): $StyleLength;
        static points(arg0: number): $StyleLength;
        get defined(): boolean;
        get auto(): boolean;
    }
    export class $StyleSizeLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleSizeLength;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        isUndefined(): boolean;
        static undefined(): $StyleSizeLength;
        static ofFitContent(): $StyleSizeLength;
        static ofMaxContent(): $StyleSizeLength;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        asYogaValue(): $YogaValue;
        isFitContent(): boolean;
        isMaxContent(): boolean;
        isAuto(): boolean;
        isPoints(): boolean;
        isPercent(): boolean;
        isStretch(): boolean;
        static ofAuto(): $StyleSizeLength;
        static points(arg0: number): $StyleSizeLength;
        static ofStretch(): $StyleSizeLength;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get defined(): boolean;
        get fitContent(): boolean;
        get maxContent(): boolean;
        get auto(): boolean;
        get stretch(): boolean;
    }
}
