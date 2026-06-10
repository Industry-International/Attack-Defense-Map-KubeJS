import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $Connection } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/network/connection" {
    export class $ConnectionType extends $Enum<$ConnectionType> {
        static values(): $ConnectionType[];
        static valueOf(arg0: string): $ConnectionType;
        isOther(): boolean;
        isNeoForge(): boolean;
        static OTHER: $ConnectionType;
        static NEOFORGE: $ConnectionType;
        get other(): boolean;
        get neoForge(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionType}.
     */
    export type $ConnectionType_ = "neoforge" | "other";
    export class $ConnectionUtils {
        static getConnection(arg0: $ChannelHandlerContext): $Connection;
        static setConnection(arg0: $ChannelHandlerContext, arg1: $Connection): void;
        static removeConnection(arg0: $ChannelHandlerContext): void;
    }
}
