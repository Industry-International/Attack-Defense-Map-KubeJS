import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";
import { $YogaValue } from "@package/org/appliedenergistics/yoga";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleLength;
        isPoints(): boolean;
        isPercent(): boolean;
        static ofAuto(): $StyleLength;
        isAuto(): boolean;
        isUndefined(): boolean;
        static undefined(): $StyleLength;
        static points(arg0: number): $StyleLength;
        inexactEquals(arg0: $StyleLength): boolean;
        asYogaValue(): $YogaValue;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        get defined(): boolean;
        get auto(): boolean;
    }
    export class $StyleSizeLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleSizeLength;
        isPoints(): boolean;
        isPercent(): boolean;
        static ofAuto(): $StyleSizeLength;
        isStretch(): boolean;
        isAuto(): boolean;
        isUndefined(): boolean;
        static undefined(): $StyleSizeLength;
        static points(arg0: number): $StyleSizeLength;
        static ofStretch(): $StyleSizeLength;
        isMaxContent(): boolean;
        isFitContent(): boolean;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        asYogaValue(): $YogaValue;
        static ofFitContent(): $StyleSizeLength;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        static ofMaxContent(): $StyleSizeLength;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get defined(): boolean;
        get stretch(): boolean;
        get auto(): boolean;
        get maxContent(): boolean;
        get fitContent(): boolean;
    }
}
