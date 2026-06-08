import { $Number, $Enum } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/configurator/annotation" {
    export class $ConfigNumber$Type extends $Enum<$ConfigNumber$Type> {
        static values(): $ConfigNumber$Type[];
        static valueOf(arg0: string): $ConfigNumber$Type;
        static AUTO: $ConfigNumber$Type;
        static FLOAT: $ConfigNumber$Type;
        min: $Number;
        max: $Number;
        wheel: $Number;
        static BYTE: $ConfigNumber$Type;
        static DOUBLE: $ConfigNumber$Type;
        static INTEGER: $ConfigNumber$Type;
        static LONG: $ConfigNumber$Type;
        static SHORT: $ConfigNumber$Type;
    }
    /**
     * Values that may be interpreted as {@link $ConfigNumber$Type}.
     */
    export type $ConfigNumber$Type_ = "auto" | "integer" | "float" | "double" | "long" | "short" | "byte";
}
