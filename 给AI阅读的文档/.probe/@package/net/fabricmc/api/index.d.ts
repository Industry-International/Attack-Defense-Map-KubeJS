import { $Enum } from "@package/java/lang";

declare module "@package/net/fabricmc/api" {
    export class $EnvType extends $Enum<$EnvType> {
        static values(): $EnvType[];
        static valueOf(name: string): $EnvType;
        static SERVER: $EnvType;
        static CLIENT: $EnvType;
    }
    /**
     * Values that may be interpreted as {@link $EnvType}.
     */
    export type $EnvType_ = "client" | "server";
}
