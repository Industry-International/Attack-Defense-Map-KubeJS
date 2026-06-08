import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";
import { $YogaValue } from "@package/org/appliedenergistics/yoga";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleLength;
        isUndefined(): boolean;
        static undefined(): $StyleLength;
        isAuto(): boolean;
        isPercent(): boolean;
        static ofAuto(): $StyleLength;
        isPoints(): boolean;
        static points(arg0: number): $StyleLength;
        asYogaValue(): $YogaValue;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        inexactEquals(arg0: $StyleLength): boolean;
        get defined(): boolean;
        get auto(): boolean;
    }
    export class $StyleSizeLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleSizeLength;
        isUndefined(): boolean;
        static undefined(): $StyleSizeLength;
        isAuto(): boolean;
        isStretch(): boolean;
        isPercent(): boolean;
        static ofAuto(): $StyleSizeLength;
        isPoints(): boolean;
        isFitContent(): boolean;
        isMaxContent(): boolean;
        static points(arg0: number): $StyleSizeLength;
        asYogaValue(): $YogaValue;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        static ofFitContent(): $StyleSizeLength;
        static ofMaxContent(): $StyleSizeLength;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        static ofStretch(): $StyleSizeLength;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get defined(): boolean;
        get auto(): boolean;
        get stretch(): boolean;
        get fitContent(): boolean;
        get maxContent(): boolean;
    }
}
