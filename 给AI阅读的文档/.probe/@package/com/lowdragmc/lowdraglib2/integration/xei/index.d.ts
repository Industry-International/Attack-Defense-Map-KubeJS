import { $Enum } from "@package/java/lang";
export * as jei from "@package/com/lowdragmc/lowdraglib2/integration/xei/jei";

declare module "@package/com/lowdragmc/lowdraglib2/integration/xei" {
    export class $IngredientIO extends $Enum<$IngredientIO> {
        static values(): $IngredientIO[];
        static valueOf(arg0: string): $IngredientIO;
        static INPUT: $IngredientIO;
        static OUTPUT: $IngredientIO;
        static CATALYST: $IngredientIO;
        static NONE: $IngredientIO;
    }
    /**
     * Values that may be interpreted as {@link $IngredientIO}.
     */
    export type $IngredientIO_ = "input" | "output" | "catalyst" | "none";
}
