import { $ClientHandshakePacketListenerImpl } from "@package/net/minecraft/client/multiplayer";
import { $ClientLoginNetworking$LoginQueryRequestHandler } from "@package/net/fabricmc/fabric/api/client/networking/v1";
import { $AbstractNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking";
import { $ClientboundCustomQueryPacket_ } from "@package/net/minecraft/network/protocol/login";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/net/fabricmc/fabric/impl/networking/client" {
    export class $ClientLoginNetworkAddon extends $AbstractNetworkAddon<$ClientLoginNetworking$LoginQueryRequestHandler> {
        handlePacket(arg0: $ClientboundCustomQueryPacket_): boolean;
        constructor(arg0: $ClientHandshakePacketListenerImpl, arg1: $Minecraft);
    }
}
