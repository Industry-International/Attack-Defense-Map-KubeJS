import { $MinecraftServer } from "@package/net/minecraft/server";
import { $PacketSendListener, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Future } from "@package/java/util/concurrent";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ConfigurationTask$Type_, $ConfigurationTask, $ServerLoginPacketListenerImpl } from "@package/net/minecraft/server/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";

declare module "@package/net/fabricmc/fabric/api/networking/v1" {
    export class $FabricServerConfigurationNetworkHandler {
    }
    export interface $FabricServerConfigurationNetworkHandler {
        addTask(arg0: $ConfigurationTask): void;
        completeTask(arg0: $ConfigurationTask$Type_): void;
    }
    export class $PacketSender {
    }
    export interface $PacketSender {
        disconnect(arg0: $Component_): void;
        sendPacket(arg0: $CustomPacketPayload_, arg1: $PacketSendListener): void;
        sendPacket(arg0: $Packet<never>, arg1: $PacketSendListener): void;
        sendPacket(arg0: $CustomPacketPayload_): void;
        sendPacket(arg0: $Packet<never>): void;
        createPacket(arg0: $CustomPacketPayload_): $Packet<never>;
    }
    export class $ServerLoginNetworking$LoginQueryResponseHandler {
    }
    export interface $ServerLoginNetworking$LoginQueryResponseHandler {
        receive(arg0: $MinecraftServer, arg1: $ServerLoginPacketListenerImpl, arg2: boolean, arg3: $FriendlyByteBuf, arg4: $ServerLoginNetworking$LoginSynchronizer_, arg5: $PacketSender): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerLoginNetworking$LoginQueryResponseHandler}.
     */
    export type $ServerLoginNetworking$LoginQueryResponseHandler_ = ((arg0: $MinecraftServer, arg1: $ServerLoginPacketListenerImpl, arg2: boolean, arg3: $FriendlyByteBuf, arg4: $ServerLoginNetworking$LoginSynchronizer, arg5: $PacketSender) => void);
    export class $LoginPacketSender {
    }
    export interface $LoginPacketSender extends $PacketSender {
        sendPacket(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf): void;
        sendPacket(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf, arg2: $PacketSendListener): void;
        createPacket(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf): $Packet<never>;
    }
    export class $ServerLoginNetworking$LoginSynchronizer {
    }
    export interface $ServerLoginNetworking$LoginSynchronizer {
        waitFor(arg0: $Future<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerLoginNetworking$LoginSynchronizer}.
     */
    export type $ServerLoginNetworking$LoginSynchronizer_ = ((arg0: $Future<never>) => void);
}
