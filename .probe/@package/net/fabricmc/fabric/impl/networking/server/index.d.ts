import { $PacketSendListener, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AbstractNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking";
import { $ServerboundCustomQueryAnswerPacket_, $ClientboundCustomQueryPacket_ } from "@package/net/minecraft/network/protocol/login";
import { $ServerLoginPacketListenerImpl } from "@package/net/minecraft/server/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $ServerLoginNetworking$LoginQueryResponseHandler, $LoginPacketSender } from "@package/net/fabricmc/fabric/api/networking/v1";

declare module "@package/net/fabricmc/fabric/impl/networking/server" {
    export class $ServerLoginNetworkAddon extends $AbstractNetworkAddon<$ServerLoginNetworking$LoginQueryResponseHandler> implements $LoginPacketSender {
        handle(arg0: $ServerboundCustomQueryAnswerPacket_): boolean;
        disconnect(arg0: $Component_): void;
        createPacket(arg0: $CustomPacketPayload_): $Packet<never>;
        createPacket(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf): $Packet<never>;
        sendPacket(arg0: $Packet<never>, arg1: $PacketSendListener): void;
        registerOutgoingPacket(arg0: $ClientboundCustomQueryPacket_): void;
        queryTick(): boolean;
        sendPacket(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf): void;
        sendPacket(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf, arg2: $PacketSendListener): void;
        sendPacket(arg0: $CustomPacketPayload_, arg1: $PacketSendListener): void;
        sendPacket(arg0: $Packet<never>): void;
        sendPacket(arg0: $CustomPacketPayload_): void;
        constructor(arg0: $ServerLoginPacketListenerImpl);
    }
}
