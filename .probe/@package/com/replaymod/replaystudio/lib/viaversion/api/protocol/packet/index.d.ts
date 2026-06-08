import { $Enum } from "@package/java/lang";

declare module "@package/com/replaymod/replaystudio/lib/viaversion/api/protocol/packet" {
    export class $State extends $Enum<$State> {
        static values(): $State[];
        static valueOf(name: string): $State;
        static PLAY: $State;
        static STATUS: $State;
        static CONFIGURATION: $State;
        static HANDSHAKE: $State;
        static LOGIN: $State;
    }
    /**
     * Values that may be interpreted as {@link $State}.
     */
    export type $State_ = "handshake" | "status" | "login" | "configuration" | "play";
}
