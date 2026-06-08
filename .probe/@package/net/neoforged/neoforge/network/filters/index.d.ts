import { $ChannelHandlerContext, $ChannelHandler } from "@package/io/netty/channel";
import { $Connection } from "@package/net/minecraft/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ConnectionType_ } from "@package/net/neoforged/neoforge/network/connection";
import { $Enum, $Record } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $MessageToMessageEncoder } from "@package/io/netty/handler/codec";

declare module "@package/net/neoforged/neoforge/network/filters" {
    export class $VanillaPacketFilter extends $MessageToMessageEncoder<$Packet<never>> implements $DynamicChannelHandler {
        isNecessary(arg0: $Connection): boolean;
    }
    export class $NetworkFilters {
        static cleanIfNecessary(arg0: $Connection): void;
        static injectIfNecessary(arg0: $Connection): void;
    }
    export class $GenericPacketSplitter extends $MessageToMessageEncoder<$Packet<never>> implements $DynamicChannelHandler {
        static getRemoteCompatibility(arg0: $Connection): $GenericPacketSplitter$RemoteCompatibility;
        static determineMaxPayloadSize(arg0: number): number;
        handler$fka000$fabric_networking_api_v1$encode(arg0: $ChannelHandlerContext, arg1: $Packet<any>, arg2: $List_<any>, arg3: $CallbackInfo): void;
        isNecessary(arg0: $Connection): boolean;
        static isRemoteCompatible(arg0: $Connection): boolean;
        static CHANNEL_HANDLER_NAME: string;
        constructor();
    }
    export class $DynamicChannelHandler {
    }
    export interface $DynamicChannelHandler extends $ChannelHandler {
        isNecessary(arg0: $Connection): boolean;
    }
    export class $GenericPacketSplitter$RemoteCompatibility extends $Enum<$GenericPacketSplitter$RemoteCompatibility> {
        static values(): $GenericPacketSplitter$RemoteCompatibility[];
        static valueOf(arg0: string): $GenericPacketSplitter$RemoteCompatibility;
        static PRESENT: $GenericPacketSplitter$RemoteCompatibility;
        static ABSENT: $GenericPacketSplitter$RemoteCompatibility;
    }
    /**
     * Values that may be interpreted as {@link $GenericPacketSplitter$RemoteCompatibility}.
     */
    export type $GenericPacketSplitter$RemoteCompatibility_ = "absent" | "present";
    export class $VanillaConnectionNetworkFilter extends $VanillaPacketFilter {
        constructor(arg0: $ConnectionType_);
    }
    export class $GenericPacketSplitter$SizeLimits extends $Record {
    }
    export class $CommandTreeCleaner {
    }
}
