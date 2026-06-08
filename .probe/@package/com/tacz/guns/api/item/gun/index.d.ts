import { $Enum } from "@package/java/lang";

declare module "@package/com/tacz/guns/api/item/gun" {
    export class $FireMode extends $Enum<$FireMode> {
        static values(): $FireMode[];
        static valueOf(arg0: string): $FireMode;
        static AUTO: $FireMode;
        static SEMI: $FireMode;
        static BURST: $FireMode;
        static UNKNOWN: $FireMode;
    }
    /**
     * Values that may be interpreted as {@link $FireMode}.
     */
    export type $FireMode_ = "auto" | "semi" | "burst" | "unknown";
}
