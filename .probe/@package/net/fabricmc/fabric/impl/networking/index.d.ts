import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Map_, $Set } from "@package/java/util";
export * as server from "@package/net/fabricmc/fabric/impl/networking/server";

declare module "@package/net/fabricmc/fabric/impl/networking" {
    export class $NetworkHandlerExtensions {
    }
    export interface $NetworkHandlerExtensions {
        getAddon(): $AbstractNetworkAddon<never>;
        get addon(): $AbstractNetworkAddon<never>;
    }
    /**
     * Values that may be interpreted as {@link $NetworkHandlerExtensions}.
     */
    export type $NetworkHandlerExtensions_ = (() => $AbstractNetworkAddon<never>);
    export class $PacketCallbackListener {
    }
    export interface $PacketCallbackListener {
        sent(arg0: $Packet<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $PacketCallbackListener}.
     */
    export type $PacketCallbackListener_ = ((arg0: $Packet<never>) => void);
    export class $AbstractNetworkAddon<H> {
        getHandler(arg0: $ResourceLocation_): H;
        unregisterChannel(arg0: $ResourceLocation_): H;
        registerChannels(arg0: $Map_<$ResourceLocation_, H>): void;
        registerChannel(arg0: $ResourceLocation_, arg1: H): boolean;
        handleDisconnect(): void;
        endSession(): void;
        getReceivableChannels(): $Set<$ResourceLocation>;
        lateInit(): void;
        get receivableChannels(): $Set<$ResourceLocation>;
    }
}
