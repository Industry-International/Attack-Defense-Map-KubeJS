import { $Enum } from "@package/java/lang";

declare module "@package/com/jesz/createdieselgenerators/content/diesel_engine" {
    export class $EngineTypes extends $Enum<$EngineTypes> {
        static values(): $EngineTypes[];
        static valueOf(arg0: string): $EngineTypes;
        enabled(): boolean;
        static HUGE: $EngineTypes;
        static NORMAL: $EngineTypes;
        static MODULAR: $EngineTypes;
    }
    /**
     * Values that may be interpreted as {@link $EngineTypes}.
     */
    export type $EngineTypes_ = "normal" | "modular" | "huge";
}
