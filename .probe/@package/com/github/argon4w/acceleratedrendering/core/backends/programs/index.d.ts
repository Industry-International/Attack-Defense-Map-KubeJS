import { $Enum } from "@package/java/lang";

declare module "@package/com/github/argon4w/acceleratedrendering/core/backends/programs" {
    export class $BarrierFlags extends $Enum<$BarrierFlags> {
        static values(): $BarrierFlags[];
        static valueOf(arg0: string): $BarrierFlags;
        static getFlags(...arg0: $BarrierFlags_[]): number;
        static COMMAND: $BarrierFlags;
        static SHADER_STORAGE: $BarrierFlags;
        static ATOMIC_COUNTER: $BarrierFlags;
        static ELEMENT_ARRAY: $BarrierFlags;
    }
    /**
     * Values that may be interpreted as {@link $BarrierFlags}.
     */
    export type $BarrierFlags_ = "shader_storage" | "atomic_counter" | "element_array" | "command";
}
